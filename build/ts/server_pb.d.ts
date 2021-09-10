// package: protos
// file: server.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_auth_pb from "./common/auth_pb";
import * as opts_server_pb from "./opts/server_pb";

export class GetServerOptionsRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): GetServerOptionsRequest;

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
        auth?: common_auth_pb.Auth.AsObject,
    }
}

export class GetServerOptionsResponse extends jspb.Message { 

    hasServerOptions(): boolean;
    clearServerOptions(): void;
    getServerOptions(): opts_server_pb.ServerOptions | undefined;
    setServerOptions(value?: opts_server_pb.ServerOptions): GetServerOptionsResponse;

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
        serverOptions?: opts_server_pb.ServerOptions.AsObject,
    }
}
