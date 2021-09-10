// package: protos
// file: connect.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_auth_pb from "./common/auth_pb";
import * as common_status_pb from "./common/status_pb";
import * as opts_connection_pb from "./opts/connection_pb";

export class GetAllConnectionsRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): GetAllConnectionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllConnectionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllConnectionsRequest): GetAllConnectionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllConnectionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllConnectionsRequest;
    static deserializeBinaryFromReader(message: GetAllConnectionsRequest, reader: jspb.BinaryReader): GetAllConnectionsRequest;
}

export namespace GetAllConnectionsRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
    }
}

export class GetAllConnectionsResponse extends jspb.Message { 
    clearOptionsList(): void;
    getOptionsList(): Array<opts_connection_pb.ConnectionOptions>;
    setOptionsList(value: Array<opts_connection_pb.ConnectionOptions>): GetAllConnectionsResponse;
    addOptions(value?: opts_connection_pb.ConnectionOptions, index?: number): opts_connection_pb.ConnectionOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllConnectionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllConnectionsResponse): GetAllConnectionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllConnectionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllConnectionsResponse;
    static deserializeBinaryFromReader(message: GetAllConnectionsResponse, reader: jspb.BinaryReader): GetAllConnectionsResponse;
}

export namespace GetAllConnectionsResponse {
    export type AsObject = {
        optionsList: Array<opts_connection_pb.ConnectionOptions.AsObject>,
    }
}

export class GetConnectionRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): GetConnectionRequest;
    getConnectionId(): string;
    setConnectionId(value: string): GetConnectionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetConnectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetConnectionRequest): GetConnectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetConnectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetConnectionRequest;
    static deserializeBinaryFromReader(message: GetConnectionRequest, reader: jspb.BinaryReader): GetConnectionRequest;
}

export namespace GetConnectionRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        connectionId: string,
    }
}

export class GetConnectionResponse extends jspb.Message { 

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): opts_connection_pb.ConnectionOptions | undefined;
    setOptions(value?: opts_connection_pb.ConnectionOptions): GetConnectionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetConnectionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetConnectionResponse): GetConnectionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetConnectionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetConnectionResponse;
    static deserializeBinaryFromReader(message: GetConnectionResponse, reader: jspb.BinaryReader): GetConnectionResponse;
}

export namespace GetConnectionResponse {
    export type AsObject = {
        options?: opts_connection_pb.ConnectionOptions.AsObject,
    }
}

export class CreateConnectionRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): CreateConnectionRequest;

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): opts_connection_pb.ConnectionOptions | undefined;
    setOptions(value?: opts_connection_pb.ConnectionOptions): CreateConnectionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateConnectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateConnectionRequest): CreateConnectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateConnectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateConnectionRequest;
    static deserializeBinaryFromReader(message: CreateConnectionRequest, reader: jspb.BinaryReader): CreateConnectionRequest;
}

export namespace CreateConnectionRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        options?: opts_connection_pb.ConnectionOptions.AsObject,
    }
}

export class CreateConnectionResponse extends jspb.Message { 
    getConnectionId(): string;
    setConnectionId(value: string): CreateConnectionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateConnectionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateConnectionResponse): CreateConnectionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateConnectionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateConnectionResponse;
    static deserializeBinaryFromReader(message: CreateConnectionResponse, reader: jspb.BinaryReader): CreateConnectionResponse;
}

export namespace CreateConnectionResponse {
    export type AsObject = {
        connectionId: string,
    }
}

export class TestConnectionRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): TestConnectionRequest;

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): opts_connection_pb.ConnectionOptions | undefined;
    setOptions(value?: opts_connection_pb.ConnectionOptions): TestConnectionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestConnectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TestConnectionRequest): TestConnectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestConnectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestConnectionRequest;
    static deserializeBinaryFromReader(message: TestConnectionRequest, reader: jspb.BinaryReader): TestConnectionRequest;
}

export namespace TestConnectionRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        options?: opts_connection_pb.ConnectionOptions.AsObject,
    }
}

export class TestConnectionResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): TestConnectionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestConnectionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TestConnectionResponse): TestConnectionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestConnectionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestConnectionResponse;
    static deserializeBinaryFromReader(message: TestConnectionResponse, reader: jspb.BinaryReader): TestConnectionResponse;
}

export namespace TestConnectionResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
    }
}

export class UpdateConnectionRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): UpdateConnectionRequest;
    getConnectionId(): string;
    setConnectionId(value: string): UpdateConnectionRequest;

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): opts_connection_pb.ConnectionOptions | undefined;
    setOptions(value?: opts_connection_pb.ConnectionOptions): UpdateConnectionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateConnectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateConnectionRequest): UpdateConnectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateConnectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateConnectionRequest;
    static deserializeBinaryFromReader(message: UpdateConnectionRequest, reader: jspb.BinaryReader): UpdateConnectionRequest;
}

export namespace UpdateConnectionRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        connectionId: string,
        options?: opts_connection_pb.ConnectionOptions.AsObject,
    }
}

export class UpdateConnectionResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): UpdateConnectionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateConnectionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateConnectionResponse): UpdateConnectionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateConnectionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateConnectionResponse;
    static deserializeBinaryFromReader(message: UpdateConnectionResponse, reader: jspb.BinaryReader): UpdateConnectionResponse;
}

export namespace UpdateConnectionResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
    }
}

export class DeleteConnectionRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): DeleteConnectionRequest;
    getConnectionId(): string;
    setConnectionId(value: string): DeleteConnectionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteConnectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteConnectionRequest): DeleteConnectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteConnectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteConnectionRequest;
    static deserializeBinaryFromReader(message: DeleteConnectionRequest, reader: jspb.BinaryReader): DeleteConnectionRequest;
}

export namespace DeleteConnectionRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        connectionId: string,
    }
}

export class DeleteConnectionResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): DeleteConnectionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteConnectionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteConnectionResponse): DeleteConnectionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteConnectionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteConnectionResponse;
    static deserializeBinaryFromReader(message: DeleteConnectionResponse, reader: jspb.BinaryReader): DeleteConnectionResponse;
}

export namespace DeleteConnectionResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
    }
}
