// package: protos.backends
// file: backends/pulsar.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Pulsar extends jspb.Message { 
    getTopic(): string;
    setTopic(value: string): Pulsar;
    getSubscriptionName(): string;
    setSubscriptionName(value: string): Pulsar;
    getSubscriptionType(): SubscriptionType;
    setSubscriptionType(value: SubscriptionType): Pulsar;

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
        topic: string,
        subscriptionName: string,
        subscriptionType: SubscriptionType,
    }
}

export enum SubscriptionType {
    UNSET = 0,
    SHARED = 1,
    EXCLUSIVE = 2,
    FAILOVER = 3,
    KEYSHARED = 4,
}
