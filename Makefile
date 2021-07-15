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

.PHONY: generate/go
generate/go: description = Compile protobuf schemas for Go
generate/go:
	mkdir -p build/go/
#	mkdir -p build/go/args
#	mkdir -p build/go/common
#	mkdir -p build/go/conns
#	mkdir -p build/go/encoding
#	mkdir -p build/go/records
#	mkdir -p build/go/vendor/google/rpc

	docker run --rm -w $(PWD) -v $(PWD):$(PWD) -w${PWD} jaegertracing/protobuf:0.2.0 \
	--proto_path=protos \
	--proto_path=. \
	--go_out=plugins=grpc:build/go \
	--go_opt=paths=source_relative \
	protos/*.proto

#	docker run --rm -w $(PWD) -v $(PWD):$(PWD) -w${PWD} jaegertracing/protobuf:0.2.0 \
#	--proto_path=protos/args \
#	--proto_path=. \
#	--go_out=plugins=grpc:build/go/args \
#	--go_opt=paths=source_relative \
#	protos/args/*.proto
#
#	docker run --rm -w $(PWD) -v $(PWD):$(PWD) -w${PWD} jaegertracing/protobuf:0.2.0 \
#	--proto_path=protos \
#	--proto_path=. \
#	--go_out=plugins=grpc:build/go/services \
#	--go_opt=paths=source_relative \
#	protos/*.proto
#
#	docker run --rm -w $(PWD) -v $(PWD):$(PWD) -w${PWD} jaegertracing/protobuf:0.2.0 \
#	--proto_path=protos \
#	--proto_path=. \
#	--go_out=plugins=grpc:build/go/services \
#	--go_opt=paths=source_relative \
#	protos/*.proto
#
#	docker run --rm -w $(PWD) -v $(PWD):$(PWD) -w${PWD} jaegertracing/protobuf:0.2.0 \
#	--proto_path=protos \
#	--proto_path=. \
#	--go_out=plugins=grpc:build/go/services \
#	--go_opt=paths=source_relative \
#	protos/*.proto
#
#	docker run --rm -w $(PWD) -v $(PWD):$(PWD) -w${PWD} jaegertracing/protobuf:0.2.0 \
#	--proto_path=protos \
#	--proto_path=. \
#	--go_out=plugins=grpc:build/go/services \
#	--go_opt=paths=source_relative \
#	protos/*.proto
#
#	docker run --rm -w $(PWD) -v $(PWD):$(PWD) -w${PWD} jaegertracing/protobuf:0.2.0 \
#	--proto_path=protos \
#	--proto_path=. \
#	--go_out=plugins=grpc:build/go/services \
#	--go_opt=paths=source_relative \
#	protos/*.proto



.PHONY: clean
clean: description = Remove all build artifacts
clean:
	rm -rf ./build/*
