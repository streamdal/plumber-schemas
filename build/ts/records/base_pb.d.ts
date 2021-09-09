// package: protos.records
// file: records/base.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as records_kafka_pb from "../records/kafka_pb";

export class Read extends jspb.Message { 
    getMessageId(): string;
    setMessageId(value: string): Read;
    getPlumberId(): string;
    setPlumberId(value: string): Read;

    getMetadataMap(): jspb.Map<string, Uint8Array | string>;
    clearMetadataMap(): void;
    getRaw(): Uint8Array | string;
    getRaw_asU8(): Uint8Array;
    getRaw_asB64(): string;
    setRaw(value: Uint8Array | string): Read;
    getReceivedAtUnixTsUtc(): number;
    setReceivedAtUnixTsUtc(value: number): Read;
    getPayload(): Uint8Array | string;
    getPayload_asU8(): Uint8Array;
    getPayload_asB64(): string;
    setPayload(value: Uint8Array | string): Read;

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): records_kafka_pb.Kafka | undefined;
    setKafka(value?: records_kafka_pb.Kafka): Read;

    getRecordCase(): Read.RecordCase;

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
        messageId: string,
        plumberId: string,

        metadataMap: Array<[string, Uint8Array | string]>,
        raw: Uint8Array | string,
        receivedAtUnixTsUtc: number,
        payload: Uint8Array | string,
        kafka?: records_kafka_pb.Kafka.AsObject,
    }

    export enum RecordCase {
        RECORD_NOT_SET = 0,
        KAFKA = 100,
    }

}

export class Write extends jspb.Message { 
    getInput(): string;
    setInput(value: string): Write;

    getInputMetadataMap(): jspb.Map<string, string>;
    clearInputMetadataMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Write.AsObject;
    static toObject(includeInstance: boolean, msg: Write): Write.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Write, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Write;
    static deserializeBinaryFromReader(message: Write, reader: jspb.BinaryReader): Write;
}

export namespace Write {
    export type AsObject = {
        input: string,

        inputMetadataMap: Array<[string, string]>,
    }
}

export class Error extends jspb.Message { 
    getOccurredAtUnixTsUtc(): number;
    setOccurredAtUnixTsUtc(value: number): Error;
    getError(): string;
    setError(value: string): Error;

    getMetadataMap(): jspb.Map<string, Uint8Array | string>;
    clearMetadataMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
    export type AsObject = {
        occurredAtUnixTsUtc: number,
        error: string,

        metadataMap: Array<[string, Uint8Array | string]>,
    }
}
