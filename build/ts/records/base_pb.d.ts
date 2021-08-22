// package: protos.records
// file: records/base.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as records_kafka_pb from "../records/kafka_pb";

export class Record extends jspb.Message { 
    getMessageId(): string;
    setMessageId(value: string): Record;
    getPlumberId(): string;
    setPlumberId(value: string): Record;
    getUnixTimestampUtc(): number;
    setUnixTimestampUtc(value: number): Record;

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): records_kafka_pb.Kafka | undefined;
    setKafka(value?: records_kafka_pb.Kafka): Record;

    getRecordCase(): Record.RecordCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Record.AsObject;
    static toObject(includeInstance: boolean, msg: Record): Record.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Record, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Record;
    static deserializeBinaryFromReader(message: Record, reader: jspb.BinaryReader): Record;
}

export namespace Record {
    export type AsObject = {
        messageId: string,
        plumberId: string,
        unixTimestampUtc: number,
        kafka?: records_kafka_pb.Kafka.AsObject,
    }

    export enum RecordCase {
        RECORD_NOT_SET = 0,
        KAFKA = 100,
    }

}
