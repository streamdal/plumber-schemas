// package: protos.records
// file: records/base.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as records_kafka_pb from "../records/kafka_pb";

export class ReadRecord extends jspb.Message { 
    getMessageId(): string;
    setMessageId(value: string): ReadRecord;
    getPlumberId(): string;
    setPlumberId(value: string): ReadRecord;
    getDecoded(): Uint8Array | string;
    getDecoded_asU8(): Uint8Array;
    getDecoded_asB64(): string;
    setDecoded(value: Uint8Array | string): ReadRecord;

    getMetadataMap(): jspb.Map<string, Uint8Array | string>;
    clearMetadataMap(): void;
    getUnixTimestampUtc(): number;
    setUnixTimestampUtc(value: number): ReadRecord;

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): records_kafka_pb.Kafka | undefined;
    setKafka(value?: records_kafka_pb.Kafka): ReadRecord;

    getRecordCase(): ReadRecord.RecordCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadRecord.AsObject;
    static toObject(includeInstance: boolean, msg: ReadRecord): ReadRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadRecord;
    static deserializeBinaryFromReader(message: ReadRecord, reader: jspb.BinaryReader): ReadRecord;
}

export namespace ReadRecord {
    export type AsObject = {
        messageId: string,
        plumberId: string,
        Decoded: Uint8Array | string,

        metadataMap: Array<[string, Uint8Array | string]>,
        unixTimestampUtc: number,
        kafka?: records_kafka_pb.Kafka.AsObject,
    }

    export enum RecordCase {
        RECORD_NOT_SET = 0,
        KAFKA = 100,
    }

}

export class WriteRecord extends jspb.Message { 
    getEncoded(): Uint8Array | string;
    getEncoded_asU8(): Uint8Array;
    getEncoded_asB64(): string;
    setEncoded(value: Uint8Array | string): WriteRecord;

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): records_kafka_pb.Kafka | undefined;
    setKafka(value?: records_kafka_pb.Kafka): WriteRecord;

    getRecordsCase(): WriteRecord.RecordsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteRecord.AsObject;
    static toObject(includeInstance: boolean, msg: WriteRecord): WriteRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteRecord;
    static deserializeBinaryFromReader(message: WriteRecord, reader: jspb.BinaryReader): WriteRecord;
}

export namespace WriteRecord {
    export type AsObject = {
        Encoded: Uint8Array | string,
        kafka?: records_kafka_pb.Kafka.AsObject,
    }

    export enum RecordsCase {
        RECORDS_NOT_SET = 0,
        KAFKA = 100,
    }

}
