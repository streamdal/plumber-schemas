// package: protos
// file: read.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_auth_pb from "./common/auth_pb";
import * as common_status_pb from "./common/status_pb";
import * as args_kafka_pb from "./args/kafka_pb";
import * as encoding_options_pb from "./encoding/options_pb";
import * as records_base_pb from "./records/base_pb";

export class ReadOptions extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOptions): ReadOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOptions;
    static deserializeBinaryFromReader(message: ReadOptions, reader: jspb.BinaryReader): ReadOptions;
}

export namespace ReadOptions {
    export type AsObject = {
    }

    export enum Type {
    ONE_TIME = 0,
    CONTINUOUS = 1,
    }

}

export class SampleOptions extends jspb.Message { 
    getSampleRate(): number;
    setSampleRate(value: number): SampleOptions;
    getSampleInterval(): SampleOptions.Interval;
    setSampleInterval(value: SampleOptions.Interval): SampleOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SampleOptions.AsObject;
    static toObject(includeInstance: boolean, msg: SampleOptions): SampleOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SampleOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SampleOptions;
    static deserializeBinaryFromReader(message: SampleOptions, reader: jspb.BinaryReader): SampleOptions;
}

export namespace SampleOptions {
    export type AsObject = {
        sampleRate: number,
        sampleInterval: SampleOptions.Interval,
    }

    export enum Interval {
    SECOND = 0,
    MINUTE = 1,
    HOUR = 2,
    }

}

export class Read extends jspb.Message { 
    getId(): string;
    setId(value: string): Read;
    getConnectionId(): string;
    setConnectionId(value: string): Read;

    hasReadOptions(): boolean;
    clearReadOptions(): void;
    getReadOptions(): ReadOptions | undefined;
    setReadOptions(value?: ReadOptions): Read;

    hasSampleOptions(): boolean;
    clearSampleOptions(): void;
    getSampleOptions(): SampleOptions | undefined;
    setSampleOptions(value?: SampleOptions): Read;

    hasDecodeOptions(): boolean;
    clearDecodeOptions(): void;
    getDecodeOptions(): encoding_options_pb.Options | undefined;
    setDecodeOptions(value?: encoding_options_pb.Options): Read;

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): args_kafka_pb.Kafka | undefined;
    setKafka(value?: args_kafka_pb.Kafka): Read;

    getArgsCase(): Read.ArgsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Read.AsObject;
    static toObject(includeInstance: boolean, msg: Read): Read.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Read, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Read;
    static deserializeBinaryFromReader(message: Read, reader: jspb.BinaryReader): Read;
}

export namespace Read {
    export type AsObject = {
        id: string,
        connectionId: string,
        readOptions?: ReadOptions.AsObject,
        sampleOptions?: SampleOptions.AsObject,
        decodeOptions?: encoding_options_pb.Options.AsObject,
        kafka?: args_kafka_pb.Kafka.AsObject,
    }

    export enum ArgsCase {
        ARGS_NOT_SET = 0,
        KAFKA = 100,
    }

}

export class StartReadRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): StartReadRequest;

    hasRead(): boolean;
    clearRead(): void;
    getRead(): Read | undefined;
    setRead(value?: Read): StartReadRequest;

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
        read?: Read.AsObject,
    }
}

export class StartReadResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): StartReadResponse;
    getReadId(): string;
    setReadId(value: string): StartReadResponse;

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

export class StreamReadRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): StreamReadRequest;
    getReadId(): string;
    setReadId(value: string): StreamReadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamReadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamReadRequest): StreamReadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamReadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamReadRequest;
    static deserializeBinaryFromReader(message: StreamReadRequest, reader: jspb.BinaryReader): StreamReadRequest;
}

export namespace StreamReadRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        readId: string,
    }
}

export class StreamReadResponse extends jspb.Message { 
    clearMessagesList(): void;
    getMessagesList(): Array<records_base_pb.Message>;
    setMessagesList(value: Array<records_base_pb.Message>): StreamReadResponse;
    addMessages(value?: records_base_pb.Message, index?: number): records_base_pb.Message;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): StreamReadResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamReadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StreamReadResponse): StreamReadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamReadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamReadResponse;
    static deserializeBinaryFromReader(message: StreamReadResponse, reader: jspb.BinaryReader): StreamReadResponse;
}

export namespace StreamReadResponse {
    export type AsObject = {
        messagesList: Array<records_base_pb.Message.AsObject>,
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
    getReadList(): Array<Read>;
    setReadList(value: Array<Read>): GetAllReadsResponse;
    addRead(value?: Read, index?: number): Read;

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
        readList: Array<Read.AsObject>,
        status?: common_status_pb.Status.AsObject,
    }
}
