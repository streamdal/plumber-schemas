// package: protos
// file: ps_server.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_ps_common_status_pb from "./common/ps_common_status_pb";
import * as common_ps_common_auth_pb from "./common/ps_common_auth_pb";
import * as opts_ps_opts_server_pb from "./opts/ps_opts_server_pb";

export class GetServerOptionsRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_ps_common_auth_pb.Auth | undefined;
    setAuth(value?: common_ps_common_auth_pb.Auth): GetServerOptionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetServerOptionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetServerOptionsRequest): GetServerOptionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetServerOptionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetServerOptionsRequest;
    static deserializeBinaryFromReader(message: GetServerOptionsRequest, reader: jspb.BinaryReader): GetServerOptionsRequest;
}

export namespace GetServerOptionsRequest {
    export type AsObject = {
        auth?: common_ps_common_auth_pb.Auth.AsObject,
    }
}

export class GetServerOptionsResponse extends jspb.Message { 

    hasServerOptions(): boolean;
    clearServerOptions(): void;
    getServerOptions(): opts_ps_opts_server_pb.ServerOptions | undefined;
    setServerOptions(value?: opts_ps_opts_server_pb.ServerOptions): GetServerOptionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetServerOptionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetServerOptionsResponse): GetServerOptionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetServerOptionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetServerOptionsResponse;
    static deserializeBinaryFromReader(message: GetServerOptionsResponse, reader: jspb.BinaryReader): GetServerOptionsResponse;
}

export namespace GetServerOptionsResponse {
    export type AsObject = {
        serverOptions?: opts_ps_opts_server_pb.ServerOptions.AsObject,
    }
}

export class SetServerOptionsRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_ps_common_auth_pb.Auth | undefined;
    setAuth(value?: common_ps_common_auth_pb.Auth): SetServerOptionsRequest;
    getVcserviceToken(): string;
    setVcserviceToken(value: string): SetServerOptionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetServerOptionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetServerOptionsRequest): SetServerOptionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetServerOptionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetServerOptionsRequest;
    static deserializeBinaryFromReader(message: SetServerOptionsRequest, reader: jspb.BinaryReader): SetServerOptionsRequest;
}

export namespace SetServerOptionsRequest {
    export type AsObject = {
        auth?: common_ps_common_auth_pb.Auth.AsObject,
        vcserviceToken: string,
    }
}

export class SetServerOptionsResponse extends jspb.Message { 

    hasServerOptions(): boolean;
    clearServerOptions(): void;
    getServerOptions(): opts_ps_opts_server_pb.ServerOptions | undefined;
    setServerOptions(value?: opts_ps_opts_server_pb.ServerOptions): SetServerOptionsResponse;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_ps_common_status_pb.Status | undefined;
    setStatus(value?: common_ps_common_status_pb.Status): SetServerOptionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetServerOptionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetServerOptionsResponse): SetServerOptionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetServerOptionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetServerOptionsResponse;
    static deserializeBinaryFromReader(message: SetServerOptionsResponse, reader: jspb.BinaryReader): SetServerOptionsResponse;
}

export namespace SetServerOptionsResponse {
    export type AsObject = {
        serverOptions?: opts_ps_opts_server_pb.ServerOptions.AsObject,
        status?: common_ps_common_status_pb.Status.AsObject,
    }
}
