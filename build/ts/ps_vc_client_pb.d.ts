// package: protos
// file: ps_vc_client.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_ps_common_auth_pb from "./common/ps_common_auth_pb";

export class GetVCEventsRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_ps_common_auth_pb.Auth | undefined;
    setAuth(value?: common_ps_common_auth_pb.Auth): GetVCEventsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVCEventsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetVCEventsRequest): GetVCEventsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVCEventsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVCEventsRequest;
    static deserializeBinaryFromReader(message: GetVCEventsRequest, reader: jspb.BinaryReader): GetVCEventsRequest;
}

export namespace GetVCEventsRequest {
    export type AsObject = {
        auth?: common_ps_common_auth_pb.Auth.AsObject,
    }
}
