// package: protos.records
// file: records/kafka.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class KafkaHeader extends jspb.Message { 
    getKey(): string;
    setKey(value: string): KafkaHeader;
    getValue(): string;
    setValue(value: string): KafkaHeader;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KafkaHeader.AsObject;
    static toObject(includeInstance: boolean, msg: KafkaHeader): KafkaHeader.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KafkaHeader, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KafkaHeader;
    static deserializeBinaryFromReader(message: KafkaHeader, reader: jspb.BinaryReader): KafkaHeader;
}

export namespace KafkaHeader {
    export type AsObject = {
        key: string,
        value: string,
    }
}

export class Kafka extends jspb.Message { 
    getTopic(): string;
    setTopic(value: string): Kafka;
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): Kafka;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): Kafka;
    getTimestamp(): number;
    setTimestamp(value: number): Kafka;
    getOffset(): number;
    setOffset(value: number): Kafka;
    getPartition(): number;
    setPartition(value: number): Kafka;
    clearHeadersList(): void;
    getHeadersList(): Array<KafkaHeader>;
    setHeadersList(value: Array<KafkaHeader>): Kafka;
    addHeaders(value?: KafkaHeader, index?: number): KafkaHeader;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Kafka.AsObject;
    static toObject(includeInstance: boolean, msg: Kafka): Kafka.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Kafka, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Kafka;
    static deserializeBinaryFromReader(message: Kafka, reader: jspb.BinaryReader): Kafka;
}

export namespace Kafka {
    export type AsObject = {
        topic: string,
        key: Uint8Array | string,
        value: Uint8Array | string,
        timestamp: number,
        offset: number,
        partition: number,
        headersList: Array<KafkaHeader.AsObject>,
    }
}
