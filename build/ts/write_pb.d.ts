// package: protos
// file: write.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_auth_pb from "./common/auth_pb";
import * as common_status_pb from "./common/status_pb";
import * as encoding_options_pb from "./encoding/options_pb";
import * as opts_write_pb from "./opts/write_pb";

export class WriteCLIConfig extends jspb.Message { 
    getInputFile(): string;
    setInputFile(value: string): WriteCLIConfig;
    getInputAsJsonArray(): boolean;
    setInputAsJsonArray(value: boolean): WriteCLIConfig;
    getInputType(): WriteInputType;
    setInputType(value: WriteInputType): WriteCLIConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteCLIConfig.AsObject;
    static toObject(includeInstance: boolean, msg: WriteCLIConfig): WriteCLIConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteCLIConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteCLIConfig;
    static deserializeBinaryFromReader(message: WriteCLIConfig, reader: jspb.BinaryReader): WriteCLIConfig;
}

export namespace WriteCLIConfig {
    export type AsObject = {
        inputFile: string,
        inputAsJsonArray: boolean,
        inputType: WriteInputType,
    }
}

export class WriteConfig extends jspb.Message { 
    getConnectionId(): string;
    setConnectionId(value: string): WriteConfig;

    hasEncodeOptions(): boolean;
    clearEncodeOptions(): void;
    getEncodeOptions(): encoding_options_pb.EncodeOptions | undefined;
    setEncodeOptions(value?: encoding_options_pb.EncodeOptions): WriteConfig;

    hasWriteOpts(): boolean;
    clearWriteOpts(): void;
    getWriteOpts(): opts_write_pb.Write | undefined;
    setWriteOpts(value?: opts_write_pb.Write): WriteConfig;

    hasCliConfig(): boolean;
    clearCliConfig(): void;
    getCliConfig(): WriteCLIConfig | undefined;
    setCliConfig(value?: WriteCLIConfig): WriteConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteConfig.AsObject;
    static toObject(includeInstance: boolean, msg: WriteConfig): WriteConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteConfig;
    static deserializeBinaryFromReader(message: WriteConfig, reader: jspb.BinaryReader): WriteConfig;
}

export namespace WriteConfig {
    export type AsObject = {
        connectionId: string,
        encodeOptions?: encoding_options_pb.EncodeOptions.AsObject,
        writeOpts?: opts_write_pb.Write.AsObject,
        CliConfig?: WriteCLIConfig.AsObject,
    }
}

export class WriteRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): WriteRequest;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): WriteConfig | undefined;
    setConfig(value?: WriteConfig): WriteRequest;

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
        auth?: common_auth_pb.Auth.AsObject,
        config?: WriteConfig.AsObject,
    }
}

export class WriteResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): WriteResponse;

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
        status?: common_status_pb.Status.AsObject,
    }
}

export enum WriteInputType {
    WRITE_INPUT_TYPE_UNSET = 0,
    WRITE_INPUT_TYPE_PLAIN = 1,
    WRITE_INPUT_TYPE_JSONPB = 2,
    WRITE_INPUT_TYPE_AVRO = 3,
}
