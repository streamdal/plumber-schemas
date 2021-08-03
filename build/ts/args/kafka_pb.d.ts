// package: protos.args
// file: args/kafka.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Kafka extends jspb.Message { 
    clearTopicsList(): void;
    getTopicsList(): Array<string>;
    setTopicsList(value: Array<string>): Kafka;
    addTopics(value: string, index?: number): string;
    getReadOffset(): number;
    setReadOffset(value: number): Kafka;
    getUseConsumerGroup(): boolean;
    setUseConsumerGroup(value: boolean): Kafka;
    getConsumerGroupName(): string;
    setConsumerGroupName(value: string): Kafka;
    getMaxWaitSeconds(): number;
    setMaxWaitSeconds(value: number): Kafka;
    getMinBytes(): number;
    setMinBytes(value: number): Kafka;
    getMaxBytes(): number;
    setMaxBytes(value: number): Kafka;
    getCommitIntervalSeconds(): number;
    setCommitIntervalSeconds(value: number): Kafka;
    getRebalanceTimeoutSeconds(): number;
    setRebalanceTimeoutSeconds(value: number): Kafka;

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
        topicsList: Array<string>,
        readOffset: number,
        useConsumerGroup: boolean,
        consumerGroupName: string,
        maxWaitSeconds: number,
        minBytes: number,
        maxBytes: number,
        commitIntervalSeconds: number,
        rebalanceTimeoutSeconds: number,
    }
}
