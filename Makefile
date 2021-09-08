TS_DEST = ./build/ts

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
	brew install protobuf@3.11.4

	# Go plugin used by the protocol compiler
	go get -u github.com/golang/protobuf/protoc-gen-go

	# protoc for ts
	npm install grpc_tools_node_protoc_ts --save-dev

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

.PHONY: generate/all
generate/all: description = Compile protos for all languages
generate/all: generate/ts generate/go inject-tags

.PHONY: generate/ts
generate/ts: description = Compile TypeScript Interfaces for UI
generate/ts: clean-ts
generate/ts:
	mkdir -p build/ts
	yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=grpc_js:${TS_DEST} \
    --js_out=import_style=commonjs,binary:${TS_DEST} \
    --grpc_out=grpc_js:${TS_DEST} \
    -I=./protos \
    -I=./protos/args \
    -I=./protos/common \
    -I=./protos/opts \
    -I=./protos/encoding \
    -I=./protos/records \
    protos/*.proto \
    protos/**/*.proto

.PHONY: generate/go
generate/go: description = Compile protobuf schemas for Go
generate/go: clean-go
generate/go:
	mkdir -p build/go/protos
	mkdir -p build/go/protos/args
	mkdir -p build/go/protos/common
	mkdir -p build/go/protos/encoding
	mkdir -p build/go/protos/opts
	mkdir -p build/go/protos/records

	docker run --rm -w $(PWD) -v $(PWD):$(PWD) -w${PWD} jaegertracing/protobuf:0.2.0 \
	--proto_path=./protos \
	--proto_path=./protos/args \
	--proto_path=./protos/common \
	--proto_path=./protos/encoding \
	--proto_path=./protos/records \
	--go_out=plugins=grpc:build/go/protos \
	--go_opt=paths=source_relative \
	protos/*.proto

	docker run --rm -w $(PWD) -v $(PWD):$(PWD) -w${PWD} jaegertracing/protobuf:0.2.0 \
	--proto_path=./protos/args \
	--go_out=plugins=grpc:build/go/protos/args \
	--go_opt=paths=source_relative \
	protos/args/*.proto

	docker run --rm -w $(PWD) -v $(PWD):$(PWD) -w${PWD} jaegertracing/protobuf:0.2.0 \
	--proto_path=./protos/common \
	--go_out=plugins=grpc:build/go/protos/common \
	--go_opt=paths=source_relative \
	protos/common/*.proto

	docker run --rm -w $(PWD) -v $(PWD):$(PWD) -w${PWD} jaegertracing/protobuf:0.2.0 \
	--proto_path=./protos/encoding \
	--go_out=plugins=grpc:build/go/protos/encoding \
	--go_opt=paths=source_relative \
	protos/encoding/*.proto

	# Because opts imports from base /protos, we have to specify --proto_path=./protos
	# This means that output location will be _inferred_ as 'build/go/protos/opts'
	docker run --rm -w $(PWD) -v $(PWD):$(PWD) -w${PWD} jaegertracing/protobuf:0.2.0 \
	--proto_path=./protos \
	--go_out=plugins=grpc:build/go/protos \
	--go_opt=paths=source_relative \
	protos/opts/*.proto

	docker run --rm -w $(PWD) -v $(PWD):$(PWD) -w${PWD} jaegertracing/protobuf:0.2.0 \
	--proto_path=./protos \
	--go_out=plugins=grpc:build/go/protos \
	--go_opt=paths=source_relative \
	protos/records/*.proto

.PHONY: inject-tags
inject-tags: description = Inject tags for CLI
inject-tags:
	protoc-go-inject-tag -input="build/go/protos/*.pb.go"
	protoc-go-inject-tag -input="build/go/protos/args/*.pb.go"
	protoc-go-inject-tag -input="build/go/protos/common/*.pb.go"
	protoc-go-inject-tag -input="build/go/protos/encoding/*.pb.go"
	protoc-go-inject-tag -input="build/go/protos/opts/*.pb.go"
	protoc-go-inject-tag -input="build/go/protos/records/*.pb.go"

.PHONY: clean-go
clean-go: description = Remove all go build artifacts
clean-go:
	rm -rf ./build/go/*

.PHONY: clean-ts
clean-ts: description = Remove all ts build artifacts
clean-ts:
	rm -rf ./build/ts/*
