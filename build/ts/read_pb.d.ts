// package: protos
// file: read.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_auth_pb from "./common/auth_pb";
import * as common_status_pb from "./common/status_pb";
import * as encoding_options_pb from "./encoding/options_pb";
import * as records_base_pb from "./records/base_pb";
import * as opts_read_pb from "./opts/read_pb";

export class ReadSampleOptions extends jspb.Message { 
    getSampleRate(): number;
    setSampleRate(value: number): ReadSampleOptions;
    getSampleIntervalSeconds(): number;
    setSampleIntervalSeconds(value: number): ReadSampleOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadSampleOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReadSampleOptions): ReadSampleOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadSampleOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadSampleOptions;
    static deserializeBinaryFromReader(message: ReadSampleOptions, reader: jspb.BinaryReader): ReadSampleOptions;
}

export namespace ReadSampleOptions {
    export type AsObject = {
        sampleRate: number,
        sampleIntervalSeconds: number,
    }
}

export class ReadCLIConfig extends jspb.Message { 
    getDisplayOffsetStats(): boolean;
    setDisplayOffsetStats(value: boolean): ReadCLIConfig;
    clearConvertOutputList(): void;
    getConvertOutputList(): Array<ConvertOption>;
    setConvertOutputList(value: Array<ConvertOption>): ReadCLIConfig;
    addConvertOutput(value: ConvertOption, index?: number): ConvertOption;
    getVerboseOutput(): boolean;
    setVerboseOutput(value: boolean): ReadCLIConfig;
    getStatsEnable(): boolean;
    setStatsEnable(value: boolean): ReadCLIConfig;
    getStatsReportIntervalSec(): number;
    setStatsReportIntervalSec(value: number): ReadCLIConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadCLIConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ReadCLIConfig): ReadCLIConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadCLIConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadCLIConfig;
    static deserializeBinaryFromReader(message: ReadCLIConfig, reader: jspb.BinaryReader): ReadCLIConfig;
}

export namespace ReadCLIConfig {
    export type AsObject = {
        displayOffsetStats: boolean,
        convertOutputList: Array<ConvertOption>,
        verboseOutput: boolean,
        statsEnable: boolean,
        statsReportIntervalSec: number,
    }
}

export class ReadConfig extends jspb.Message { 
    getName(): string;
    setName(value: string): ReadConfig;
    getConnectionId(): string;
    setConnectionId(value: string): ReadConfig;
    getContinuous(): boolean;
    setContinuous(value: boolean): ReadConfig;

    hasSampleOptions(): boolean;
    clearSampleOptions(): void;
    getSampleOptions(): ReadSampleOptions | undefined;
    setSampleOptions(value?: ReadSampleOptions): ReadConfig;

    hasDecodeOptions(): boolean;
    clearDecodeOptions(): void;
    getDecodeOptions(): encoding_options_pb.DecodeOptions | undefined;
    setDecodeOptions(value?: encoding_options_pb.DecodeOptions): ReadConfig;

    hasReadOpts(): boolean;
    clearReadOpts(): void;
    getReadOpts(): opts_read_pb.Read | undefined;
    setReadOpts(value?: opts_read_pb.Read): ReadConfig;
    getId(): string;
    setId(value: string): ReadConfig;
    getActive(): boolean;
    setActive(value: boolean): ReadConfig;

    hasCliConfig(): boolean;
    clearCliConfig(): void;
    getCliConfig(): ReadCLIConfig | undefined;
    setCliConfig(value?: ReadCLIConfig): ReadConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ReadConfig): ReadConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadConfig;
    static deserializeBinaryFromReader(message: ReadConfig, reader: jspb.BinaryReader): ReadConfig;
}

export namespace ReadConfig {
    export type AsObject = {
        name: string,
        connectionId: string,
        continuous: boolean,
        sampleOptions?: ReadSampleOptions.AsObject,
        decodeOptions?: encoding_options_pb.DecodeOptions.AsObject,
        readOpts?: opts_read_pb.Read.AsObject,
        Id: string,
        Active: boolean,
        CliConfig?: ReadCLIConfig.AsObject,
    }
}

export class CreateReadRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): CreateReadRequest;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): ReadConfig | undefined;
    setConfig(value?: ReadConfig): CreateReadRequest;

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
        auth?: common_auth_pb.Auth.AsObject,
        config?: ReadConfig.AsObject,
    }
}

export class CreateReadResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): CreateReadResponse;
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
        status?: common_status_pb.Status.AsObject,
        readId: string,
    }
}

export class StopReadRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): StopReadRequest;
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
        auth?: common_auth_pb.Auth.AsObject,
        readId: string,
    }
}

export class StopReadResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): StopReadResponse;

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
        status?: common_status_pb.Status.AsObject,
    }
}

export class ResumeReadRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): ResumeReadRequest;
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
        auth?: common_auth_pb.Auth.AsObject,
        readId: string,
    }
}

export class ResumeReadResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): ResumeReadResponse;

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
        status?: common_status_pb.Status.AsObject,
    }
}

export class DeleteReadRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): DeleteReadRequest;
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
        auth?: common_auth_pb.Auth.AsObject,
        readId: string,
    }
}

export class DeleteReadResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): DeleteReadResponse;

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
        status?: common_status_pb.Status.AsObject,
    }
}

export class StartReadRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): StartReadRequest;
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
        auth?: common_auth_pb.Auth.AsObject,
        readId: string,
    }
}

export class StartReadResponse extends jspb.Message { 
    clearRecordsList(): void;
    getRecordsList(): Array<records_base_pb.Read>;
    setRecordsList(value: Array<records_base_pb.Read>): StartReadResponse;
    addRecords(value?: records_base_pb.Read, index?: number): records_base_pb.Read;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): StartReadResponse;

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
        recordsList: Array<records_base_pb.Read.AsObject>,
        status?: common_status_pb.Status.AsObject,
    }
}

export class GetAllReadsRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): GetAllReadsRequest;

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
        auth?: common_auth_pb.Auth.AsObject,
    }
}

export class GetAllReadsResponse extends jspb.Message { 
    clearReadList(): void;
    getReadList(): Array<ReadConfig>;
    setReadList(value: Array<ReadConfig>): GetAllReadsResponse;
    addRead(value?: ReadConfig, index?: number): ReadConfig;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): GetAllReadsResponse;

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
        readList: Array<ReadConfig.AsObject>,
        status?: common_status_pb.Status.AsObject,
    }
}

export enum ConvertOption {
    CONVERT_OPTION_UNSET = 0,
    CONVERT_OPTION_BASE64 = 1,
    CONVERT_OPTION_GZIP = 2,
}
