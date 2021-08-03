// package: protos.records
// file: records/base.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as records_kafka_pb from "../records/kafka_pb";

export class Message extends jspb.Message { 
    getMessageId(): string;
    setMessageId(value: string): Message;
    getPlumberId(): string;
    setPlumberId(value: string): Message;
    getUnixTimestampUtc(): number;
    setUnixTimestampUtc(value: number): Message;

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): records_kafka_pb.Kafka | undefined;
    setKafka(value?: records_kafka_pb.Kafka): Message;

    getMessageCase(): Message.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Message.AsObject;
    static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Message;
    static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
    export type AsObject = {
        messageId: string,
        plumberId: string,
        unixTimestampUtc: number,
        kafka?: records_kafka_pb.Kafka.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        KAFKA = 100,
    }

}
