// package: protos.records
// file: records/pulsar.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Pulsar extends jspb.Message { 
    getId(): string;
    setId(value: string): Pulsar;
    getKey(): string;
    setKey(value: string): Pulsar;
    getTopic(): string;
    setTopic(value: string): Pulsar;

    getPropertiesMap(): jspb.Map<string, string>;
    clearPropertiesMap(): void;
    getRedeliveryCount(): number;
    setRedeliveryCount(value: number): Pulsar;
    getEventTime(): string;
    setEventTime(value: string): Pulsar;
    getIsReplicated(): boolean;
    setIsReplicated(value: boolean): Pulsar;
    getOrderingKey(): string;
    setOrderingKey(value: string): Pulsar;
    getProducerName(): string;
    setProducerName(value: string): Pulsar;
    getPublishTime(): string;
    setPublishTime(value: string): Pulsar;
    getTimestamp(): number;
    setTimestamp(value: number): Pulsar;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): Pulsar;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Pulsar.AsObject;
    static toObject(includeInstance: boolean, msg: Pulsar): Pulsar.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Pulsar, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Pulsar;
    static deserializeBinaryFromReader(message: Pulsar, reader: jspb.BinaryReader): Pulsar;
}

export namespace Pulsar {
    export type AsObject = {
        id: string,
        key: string,
        topic: string,

        propertiesMap: Array<[string, string]>,
        redeliveryCount: number,
        eventTime: string,
        isReplicated: boolean,
        orderingKey: string,
        producerName: string,
        publishTime: string,
        timestamp: number,
        value: Uint8Array | string,
    }
}
