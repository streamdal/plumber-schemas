GO_PROTOS_DIR=./build/go/protos
GO_DESCRIPTOR_SET_DIR=./build/go/descriptor-sets

help: HELP_SCRIPT = \
	if (/^([a-zA-Z0-9-\.\/]+).*?: description\s*=\s*(.+)/) { \
		printf "\033[34m%-40s\033[0m %s\n", $$1, $$2 \
	} elsif(/^\#\#\#\s*(.+)/) { \
		printf "\033[33m>> %s\033[0m\n", $$1 \
	}

.PHONY: help
help:
	@perl -ne '$(HELP_SCRIPT)' $(MAKEFILE_LIST)

.PHONY: setup/darwin
setup/darwin: description = Install protobuf tooling for macOS
setup/darwin:
	# Protocol compiler
	brew install protobuf@3.6

	# Go plugin used by the protocol compiler
	go get -u github.com/golang/protobuf/protoc-gen-go

	# protoc for ts
	npm install grpc_tools_node_protoc_ts --save-dev

	# protoc-go-inject-tag
	go get github.com/favadi/protoc-go-inject-tag

	# Protobuf linting
	brew tap yoheimuta/protolint
	brew install protolint

.PHONY: setup/linux
setup/linux: description = Install protobuf tooling for linux
setup/linux:
	# Protocol compiler
	PROTOC_ZIP=protoc-3.10.1-linux-x86_64.zip
	curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v3.10.1/$PROTOC_ZIP
	sudo unzip -o $PROTOC_ZIP -d /usr/local bin/protoc
	sudo unzip -o $PROTOC_ZIP -d /usr/local 'include/*'
	rm -f $PROTOC_ZIP

	# Go plugin used by the protocol compiler
	go get -u github.com/golang/protobuf/protoc-gen-go

	# protoc-go-inject-tag
	go get github.com/favadi/protoc-go-inject-tag

.PHONY: generate/all
generate/all: description = Compile protos for all languages
generate/all: generate/ts generate/go inject-tags

.PHONY: local
local: description = Compile protos for all languages and copy to local plumber
local: generate/ts generate/go inject-tags
local:
	cp -R $(GO_PROTOS_DIR)/ ~/Code/plumber/vendor/github.com/batchcorp/plumber-schemas/$(GO_PROTOS_DIR)/
	cp -R $(GO_PROTOS_DIR)/ ~/Code/foreman/vendor/github.com/batchcorp/plumber-schemas/$(GO_PROTOS_DIR)/
	cp -R $(GO_PROTOS_DIR)/ ~/Code/ui-bff/vendor/github.com/batchcorp/plumber-schemas/$(GO_PROTOS_DIR)/

.PHONY: generate/ts
generate/ts: description = Compile TypeScript Interfaces for UI
generate/ts: clean-ts
generate/ts:
	mkdir -p build/ts
	./node_modules/.bin/pbjs \
	-t static-module \
	-w commonjs \
	-p ./protos \
	-p ./protos/args \
	-p ./protos/common \
	-p ./protos/opts \
	-p ./protos/encoding \
	-p ./protos/records \
	-o ./build/ts/plumber-schemas.js \
	./protos/*.proto \
	./protos/**/*.proto
	./node_modules/.bin/pbts -o ./build/ts/plumber-schemas.d.ts ./build/ts/plumber-schemas.js

.PHONY: generate/go
generate/go: description = Compile protobuf schemas for Go
generate/go: clean-go
generate/go:
	mkdir -p $(GO_DESCRIPTOR_SET_DIR)
	mkdir -p $(GO_PROTOS_DIR)
	mkdir -p $(GO_PROTOS_DIR)/args
	mkdir -p $(GO_PROTOS_DIR)/common
	mkdir -p $(GO_PROTOS_DIR)/encoding
	mkdir -p $(GO_PROTOS_DIR)/opts
	mkdir -p $(GO_PROTOS_DIR)/records

	docker run --rm -w $(PWD) -v $(PWD):$(PWD) -w${PWD} jaegertracing/protobuf:0.2.0 \
	--proto_path=./protos \
	--proto_path=./protos/args \
	--proto_path=./protos/common \
	--proto_path=./protos/encoding \
	--proto_path=./protos/records \
	--go_out=plugins=grpc:$(GO_PROTOS_DIR) \
	--go_opt=paths=source_relative \
	-o ./$(GO_DESCRIPTOR_SET_DIR)/protos.fds \
	--include_imports \
	--include_source_info \
	protos/*.proto

	docker run --rm -w $(PWD) -v $(PWD):$(PWD) -w${PWD} jaegertracing/protobuf:0.2.0 \
	--proto_path=./protos/args \
	--go_out=plugins=grpc:$(GO_PROTOS_DIR)/args \
	--go_opt=paths=source_relative \
	-o ./$(GO_DESCRIPTOR_SET_DIR)/args.fds \
	--include_imports \
	--include_source_info \
	protos/args/*.proto

	docker run --rm -w $(PWD) -v $(PWD):$(PWD) -w${PWD} jaegertracing/protobuf:0.2.0 \
	--proto_path=./protos/common \
	--go_out=plugins=grpc:$(GO_PROTOS_DIR)/common \
	--go_opt=paths=source_relative \
	protos/common/*.proto

	docker run --rm -w $(PWD) -v $(PWD):$(PWD) -w${PWD} jaegertracing/protobuf:0.2.0 \
	--proto_path=./protos/encoding \
	--go_out=plugins=grpc:$(GO_PROTOS_DIR)/encoding \
	--go_opt=paths=source_relative \
	protos/encoding/*.proto

# Because opts imports from base /protos, we have to specify --proto_path=./protos
# This means that output location will be _inferred_ as '$(GO_PROTOS_DIR)/opts'
	docker run --rm -w $(PWD) -v $(PWD):$(PWD) -w${PWD} jaegertracing/protobuf:0.2.0 \
	--proto_path=./protos \
	--go_out=plugins=grpc:$(GO_PROTOS_DIR) \
	--go_opt=paths=source_relative \
	protos/opts/*.proto

	docker run --rm -w $(PWD) -v $(PWD):$(PWD) -w${PWD} jaegertracing/protobuf:0.2.0 \
	--proto_path=./protos \
	--go_out=plugins=grpc:$(GO_PROTOS_DIR) \
	--go_opt=paths=source_relative \
	protos/records/*.proto

# Perform any extra steps as part of codegen
	# Running code generation tasks
	go run generate-type-aliases.go
	go run generate-conn-opts-func.go
	go run generate-merge-relay-opts.go
	go run generate-merge-tunnel-opts.go

.PHONY: inject-tags
inject-tags: description = Inject tags for CLI
inject-tags:
	# Injecting tags into *.pb.go files...
	protoc-go-inject-tag -input="$(GO_PROTOS_DIR)/*.pb.go"
	protoc-go-inject-tag -input="$(GO_PROTOS_DIR)/args/*.pb.go"
	protoc-go-inject-tag -input="$(GO_PROTOS_DIR)/common/*.pb.go"
	protoc-go-inject-tag -input="$(GO_PROTOS_DIR)/encoding/*.pb.go"
	protoc-go-inject-tag -input="$(GO_PROTOS_DIR)/opts/*.pb.go"
	protoc-go-inject-tag -input="$(GO_PROTOS_DIR)/records/*.pb.go"

.PHONY: clean-go
clean-go: description = Remove all go build artifacts
clean-go:
	rm -rf ./build/go/*

.PHONY: clean-ts
clean-ts: description = Remove all ts build artifacts
clean-ts:
	rm -rf ./build/ts/*

.PHONY: lint
lint: description = Run protolint
lint:
	protolint protos/
