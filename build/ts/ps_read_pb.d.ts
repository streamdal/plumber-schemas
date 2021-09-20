// package: protos
// file: ps_read.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_ps_common_auth_pb from "./common/ps_common_auth_pb";
import * as common_ps_common_status_pb from "./common/ps_common_status_pb";
import * as records_ps_records_base_pb from "./records/ps_records_base_pb";
import * as opts_ps_opts_read_pb from "./opts/ps_opts_read_pb";

export class CreateReadRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_ps_common_auth_pb.Auth | undefined;
    setAuth(value?: common_ps_common_auth_pb.Auth): CreateReadRequest;

    hasRead(): boolean;
    clearRead(): void;
    getRead(): opts_ps_opts_read_pb.ReadOptions | undefined;
    setRead(value?: opts_ps_opts_read_pb.ReadOptions): CreateReadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateReadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateReadRequest): CreateReadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateReadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateReadRequest;
    static deserializeBinaryFromReader(message: CreateReadRequest, reader: jspb.BinaryReader): CreateReadRequest;
}

export namespace CreateReadRequest {
    export type AsObject = {
        auth?: common_ps_common_auth_pb.Auth.AsObject,
        read?: opts_ps_opts_read_pb.ReadOptions.AsObject,
    }
}

export class CreateReadResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_ps_common_status_pb.Status | undefined;
    setStatus(value?: common_ps_common_status_pb.Status): CreateReadResponse;
    getReadId(): string;
    setReadId(value: string): CreateReadResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateReadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateReadResponse): CreateReadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateReadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateReadResponse;
    static deserializeBinaryFromReader(message: CreateReadResponse, reader: jspb.BinaryReader): CreateReadResponse;
}

export namespace CreateReadResponse {
    export type AsObject = {
        status?: common_ps_common_status_pb.Status.AsObject,
        readId: string,
    }
}

export class StopReadRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_ps_common_auth_pb.Auth | undefined;
    setAuth(value?: common_ps_common_auth_pb.Auth): StopReadRequest;
    getReadId(): string;
    setReadId(value: string): StopReadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopReadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopReadRequest): StopReadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopReadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopReadRequest;
    static deserializeBinaryFromReader(message: StopReadRequest, reader: jspb.BinaryReader): StopReadRequest;
}

export namespace StopReadRequest {
    export type AsObject = {
        auth?: common_ps_common_auth_pb.Auth.AsObject,
        readId: string,
    }
}

export class StopReadResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_ps_common_status_pb.Status | undefined;
    setStatus(value?: common_ps_common_status_pb.Status): StopReadResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopReadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StopReadResponse): StopReadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopReadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopReadResponse;
    static deserializeBinaryFromReader(message: StopReadResponse, reader: jspb.BinaryReader): StopReadResponse;
}

export namespace StopReadResponse {
    export type AsObject = {
        status?: common_ps_common_status_pb.Status.AsObject,
    }
}

export class ResumeReadRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_ps_common_auth_pb.Auth | undefined;
    setAuth(value?: common_ps_common_auth_pb.Auth): ResumeReadRequest;
    getReadId(): string;
    setReadId(value: string): ResumeReadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResumeReadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ResumeReadRequest): ResumeReadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResumeReadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResumeReadRequest;
    static deserializeBinaryFromReader(message: ResumeReadRequest, reader: jspb.BinaryReader): ResumeReadRequest;
}

export namespace ResumeReadRequest {
    export type AsObject = {
        auth?: common_ps_common_auth_pb.Auth.AsObject,
        readId: string,
    }
}

export class ResumeReadResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_ps_common_status_pb.Status | undefined;
    setStatus(value?: common_ps_common_status_pb.Status): ResumeReadResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResumeReadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ResumeReadResponse): ResumeReadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResumeReadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResumeReadResponse;
    static deserializeBinaryFromReader(message: ResumeReadResponse, reader: jspb.BinaryReader): ResumeReadResponse;
}

export namespace ResumeReadResponse {
    export type AsObject = {
        status?: common_ps_common_status_pb.Status.AsObject,
    }
}

export class DeleteReadRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_ps_common_auth_pb.Auth | undefined;
    setAuth(value?: common_ps_common_auth_pb.Auth): DeleteReadRequest;
    getReadId(): string;
    setReadId(value: string): DeleteReadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteReadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteReadRequest): DeleteReadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteReadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteReadRequest;
    static deserializeBinaryFromReader(message: DeleteReadRequest, reader: jspb.BinaryReader): DeleteReadRequest;
}

export namespace DeleteReadRequest {
    export type AsObject = {
        auth?: common_ps_common_auth_pb.Auth.AsObject,
        readId: string,
    }
}

export class DeleteReadResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_ps_common_status_pb.Status | undefined;
    setStatus(value?: common_ps_common_status_pb.Status): DeleteReadResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteReadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteReadResponse): DeleteReadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteReadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteReadResponse;
    static deserializeBinaryFromReader(message: DeleteReadResponse, reader: jspb.BinaryReader): DeleteReadResponse;
}

export namespace DeleteReadResponse {
    export type AsObject = {
        status?: common_ps_common_status_pb.Status.AsObject,
    }
}

export class StartReadRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_ps_common_auth_pb.Auth | undefined;
    setAuth(value?: common_ps_common_auth_pb.Auth): StartReadRequest;
    getReadId(): string;
    setReadId(value: string): StartReadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartReadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartReadRequest): StartReadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartReadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartReadRequest;
    static deserializeBinaryFromReader(message: StartReadRequest, reader: jspb.BinaryReader): StartReadRequest;
}

export namespace StartReadRequest {
    export type AsObject = {
        auth?: common_ps_common_auth_pb.Auth.AsObject,
        readId: string,
    }
}

export class StartReadResponse extends jspb.Message { 
    clearRecordsList(): void;
    getRecordsList(): Array<records_ps_records_base_pb.ReadRecord>;
    setRecordsList(value: Array<records_ps_records_base_pb.ReadRecord>): StartReadResponse;
    addRecords(value?: records_ps_records_base_pb.ReadRecord, index?: number): records_ps_records_base_pb.ReadRecord;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_ps_common_status_pb.Status | undefined;
    setStatus(value?: common_ps_common_status_pb.Status): StartReadResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartReadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StartReadResponse): StartReadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartReadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartReadResponse;
    static deserializeBinaryFromReader(message: StartReadResponse, reader: jspb.BinaryReader): StartReadResponse;
}

export namespace StartReadResponse {
    export type AsObject = {
        recordsList: Array<records_ps_records_base_pb.ReadRecord.AsObject>,
        status?: common_ps_common_status_pb.Status.AsObject,
    }
}

export class GetAllReadsRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_ps_common_auth_pb.Auth | undefined;
    setAuth(value?: common_ps_common_auth_pb.Auth): GetAllReadsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllReadsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllReadsRequest): GetAllReadsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllReadsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllReadsRequest;
    static deserializeBinaryFromReader(message: GetAllReadsRequest, reader: jspb.BinaryReader): GetAllReadsRequest;
}

export namespace GetAllReadsRequest {
    export type AsObject = {
        auth?: common_ps_common_auth_pb.Auth.AsObject,
    }
}

export class GetAllReadsResponse extends jspb.Message { 
    clearReadList(): void;
    getReadList(): Array<opts_ps_opts_read_pb.ReadOptions>;
    setReadList(value: Array<opts_ps_opts_read_pb.ReadOptions>): GetAllReadsResponse;
    addRead(value?: opts_ps_opts_read_pb.ReadOptions, index?: number): opts_ps_opts_read_pb.ReadOptions;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_ps_common_status_pb.Status | undefined;
    setStatus(value?: common_ps_common_status_pb.Status): GetAllReadsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllReadsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllReadsResponse): GetAllReadsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllReadsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllReadsResponse;
    static deserializeBinaryFromReader(message: GetAllReadsResponse, reader: jspb.BinaryReader): GetAllReadsResponse;
}

export namespace GetAllReadsResponse {
    export type AsObject = {
        readList: Array<opts_ps_opts_read_pb.ReadOptions.AsObject>,
        status?: common_ps_common_status_pb.Status.AsObject,
    }
}
