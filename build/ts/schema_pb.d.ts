// package: protos
// file: schema.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as encoding_options_pb from "./encoding/options_pb";
import * as common_auth_pb from "./common/auth_pb";
import * as common_status_pb from "./common/status_pb";

export class Schema extends jspb.Message { 
    getId(): string;
    setId(value: string): Schema;
    getName(): string;
    setName(value: string): Schema;
    getType(): encoding_options_pb.DecodeType;
    setType(value: encoding_options_pb.DecodeType): Schema;

    getFilesMap(): jspb.Map<string, string>;
    clearFilesMap(): void;

    hasProtobufSettings(): boolean;
    clearProtobufSettings(): void;
    getProtobufSettings(): encoding_options_pb.ProtobufSettings | undefined;
    setProtobufSettings(value?: encoding_options_pb.ProtobufSettings): Schema;

    hasAvroSettings(): boolean;
    clearAvroSettings(): void;
    getAvroSettings(): encoding_options_pb.AvroSettings | undefined;
    setAvroSettings(value?: encoding_options_pb.AvroSettings): Schema;

    getEncodingsCase(): Schema.EncodingsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Schema.AsObject;
    static toObject(includeInstance: boolean, msg: Schema): Schema.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Schema, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Schema;
    static deserializeBinaryFromReader(message: Schema, reader: jspb.BinaryReader): Schema;
}

export namespace Schema {
    export type AsObject = {
        id: string,
        name: string,
        type: encoding_options_pb.DecodeType,

        filesMap: Array<[string, string]>,
        protobufSettings?: encoding_options_pb.ProtobufSettings.AsObject,
        avroSettings?: encoding_options_pb.AvroSettings.AsObject,
    }

    export enum EncodingsCase {
        ENCODINGS_NOT_SET = 0,
        PROTOBUF_SETTINGS = 100,
        AVRO_SETTINGS = 101,
    }

}

export class GetSchemaRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): GetSchemaRequest;
    getId(): string;
    setId(value: string): GetSchemaRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSchemaRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSchemaRequest): GetSchemaRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSchemaRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSchemaRequest;
    static deserializeBinaryFromReader(message: GetSchemaRequest, reader: jspb.BinaryReader): GetSchemaRequest;
}

export namespace GetSchemaRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        id: string,
    }
}

export class GetSchemaResponse extends jspb.Message { 

    hasSchema(): boolean;
    clearSchema(): void;
    getSchema(): Schema | undefined;
    setSchema(value?: Schema): GetSchemaResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSchemaResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSchemaResponse): GetSchemaResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSchemaResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSchemaResponse;
    static deserializeBinaryFromReader(message: GetSchemaResponse, reader: jspb.BinaryReader): GetSchemaResponse;
}

export namespace GetSchemaResponse {
    export type AsObject = {
        schema?: Schema.AsObject,
    }
}

export class GetAllSchemasRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): GetAllSchemasRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllSchemasRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllSchemasRequest): GetAllSchemasRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllSchemasRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllSchemasRequest;
    static deserializeBinaryFromReader(message: GetAllSchemasRequest, reader: jspb.BinaryReader): GetAllSchemasRequest;
}

export namespace GetAllSchemasRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
    }
}

export class GetAllSchemasResponse extends jspb.Message { 
    clearSchemaList(): void;
    getSchemaList(): Array<Schema>;
    setSchemaList(value: Array<Schema>): GetAllSchemasResponse;
    addSchema(value?: Schema, index?: number): Schema;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllSchemasResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllSchemasResponse): GetAllSchemasResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllSchemasResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllSchemasResponse;
    static deserializeBinaryFromReader(message: GetAllSchemasResponse, reader: jspb.BinaryReader): GetAllSchemasResponse;
}

export namespace GetAllSchemasResponse {
    export type AsObject = {
        schemaList: Array<Schema.AsObject>,
    }
}

export class ImportGithubRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): ImportGithubRequest;
    getName(): string;
    setName(value: string): ImportGithubRequest;
    getType(): encoding_options_pb.DecodeType;
    setType(value: encoding_options_pb.DecodeType): ImportGithubRequest;
    getGithubUrl(): string;
    setGithubUrl(value: string): ImportGithubRequest;

    hasProtobufSettings(): boolean;
    clearProtobufSettings(): void;
    getProtobufSettings(): encoding_options_pb.ProtobufSettings | undefined;
    setProtobufSettings(value?: encoding_options_pb.ProtobufSettings): ImportGithubRequest;

    hasAvroSettings(): boolean;
    clearAvroSettings(): void;
    getAvroSettings(): encoding_options_pb.AvroSettings | undefined;
    setAvroSettings(value?: encoding_options_pb.AvroSettings): ImportGithubRequest;

    getEncodingsCase(): ImportGithubRequest.EncodingsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImportGithubRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ImportGithubRequest): ImportGithubRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImportGithubRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImportGithubRequest;
    static deserializeBinaryFromReader(message: ImportGithubRequest, reader: jspb.BinaryReader): ImportGithubRequest;
}

export namespace ImportGithubRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        name: string,
        type: encoding_options_pb.DecodeType,
        githubUrl: string,
        protobufSettings?: encoding_options_pb.ProtobufSettings.AsObject,
        avroSettings?: encoding_options_pb.AvroSettings.AsObject,
    }

    export enum EncodingsCase {
        ENCODINGS_NOT_SET = 0,
        PROTOBUF_SETTINGS = 100,
        AVRO_SETTINGS = 101,
    }

}

export class ImportGithubResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): ImportGithubResponse;
    getId(): string;
    setId(value: string): ImportGithubResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImportGithubResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ImportGithubResponse): ImportGithubResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImportGithubResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImportGithubResponse;
    static deserializeBinaryFromReader(message: ImportGithubResponse, reader: jspb.BinaryReader): ImportGithubResponse;
}

export namespace ImportGithubResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
        id: string,
    }
}

export class ImportLocalRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): ImportLocalRequest;
    getName(): string;
    setName(value: string): ImportLocalRequest;
    getType(): encoding_options_pb.EncodeType;
    setType(value: encoding_options_pb.EncodeType): ImportLocalRequest;
    getZipArchive(): Uint8Array | string;
    getZipArchive_asU8(): Uint8Array;
    getZipArchive_asB64(): string;
    setZipArchive(value: Uint8Array | string): ImportLocalRequest;

    hasProtobufSettings(): boolean;
    clearProtobufSettings(): void;
    getProtobufSettings(): encoding_options_pb.ProtobufSettings | undefined;
    setProtobufSettings(value?: encoding_options_pb.ProtobufSettings): ImportLocalRequest;

    hasAvroSettings(): boolean;
    clearAvroSettings(): void;
    getAvroSettings(): encoding_options_pb.AvroSettings | undefined;
    setAvroSettings(value?: encoding_options_pb.AvroSettings): ImportLocalRequest;

    getEncodingsCase(): ImportLocalRequest.EncodingsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImportLocalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ImportLocalRequest): ImportLocalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImportLocalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImportLocalRequest;
    static deserializeBinaryFromReader(message: ImportLocalRequest, reader: jspb.BinaryReader): ImportLocalRequest;
}

export namespace ImportLocalRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        name: string,
        type: encoding_options_pb.EncodeType,
        zipArchive: Uint8Array | string,
        protobufSettings?: encoding_options_pb.ProtobufSettings.AsObject,
        avroSettings?: encoding_options_pb.AvroSettings.AsObject,
    }

    export enum EncodingsCase {
        ENCODINGS_NOT_SET = 0,
        PROTOBUF_SETTINGS = 100,
        AVRO_SETTINGS = 101,
    }

}

export class ImportLocalResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): ImportLocalResponse;
    getId(): string;
    setId(value: string): ImportLocalResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImportLocalResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ImportLocalResponse): ImportLocalResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImportLocalResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImportLocalResponse;
    static deserializeBinaryFromReader(message: ImportLocalResponse, reader: jspb.BinaryReader): ImportLocalResponse;
}

export namespace ImportLocalResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
        id: string,
    }
}

export class DeleteSchemaRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): DeleteSchemaRequest;
    getId(): string;
    setId(value: string): DeleteSchemaRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSchemaRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSchemaRequest): DeleteSchemaRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSchemaRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSchemaRequest;
    static deserializeBinaryFromReader(message: DeleteSchemaRequest, reader: jspb.BinaryReader): DeleteSchemaRequest;
}

export namespace DeleteSchemaRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        id: string,
    }
}

export class DeleteSchemaResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): DeleteSchemaResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSchemaResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSchemaResponse): DeleteSchemaResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSchemaResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSchemaResponse;
    static deserializeBinaryFromReader(message: DeleteSchemaResponse, reader: jspb.BinaryReader): DeleteSchemaResponse;
}

export namespace DeleteSchemaResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
    }
}
