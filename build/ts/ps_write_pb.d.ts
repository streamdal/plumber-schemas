// package: protos
// file: ps_write.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_ps_common_auth_pb from "./common/ps_common_auth_pb";
import * as common_ps_common_status_pb from "./common/ps_common_status_pb";
import * as opts_ps_write_pb from "./opts/ps_write_pb";

export class WriteRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_ps_common_auth_pb.Auth | undefined;
    setAuth(value?: common_ps_common_auth_pb.Auth): WriteRequest;

    hasOpts(): boolean;
    clearOpts(): void;
    getOpts(): opts_ps_write_pb.WriteOptions | undefined;
    setOpts(value?: opts_ps_write_pb.WriteOptions): WriteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WriteRequest): WriteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteRequest;
    static deserializeBinaryFromReader(message: WriteRequest, reader: jspb.BinaryReader): WriteRequest;
}

export namespace WriteRequest {
    export type AsObject = {
        auth?: common_ps_common_auth_pb.Auth.AsObject,
        opts?: opts_ps_write_pb.WriteOptions.AsObject,
    }
}

export class WriteResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_ps_common_status_pb.Status | undefined;
    setStatus(value?: common_ps_common_status_pb.Status): WriteResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WriteResponse): WriteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteResponse;
    static deserializeBinaryFromReader(message: WriteResponse, reader: jspb.BinaryReader): WriteResponse;
}

export namespace WriteResponse {
    export type AsObject = {
        status?: common_ps_common_status_pb.Status.AsObject,
    }
}
