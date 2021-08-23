// package: protos.records
// file: records/gcp-pubsub.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GCPPubSub extends jspb.Message { 
    getId(): string;
    setId(value: string): GCPPubSub;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): GCPPubSub;

    getAttributesMap(): jspb.Map<string, string>;
    clearAttributesMap(): void;
    getPublishTime(): number;
    setPublishTime(value: number): GCPPubSub;
    getDeliveryAttempt(): number;
    setDeliveryAttempt(value: number): GCPPubSub;
    getOrderingKey(): string;
    setOrderingKey(value: string): GCPPubSub;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GCPPubSub.AsObject;
    static toObject(includeInstance: boolean, msg: GCPPubSub): GCPPubSub.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GCPPubSub, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GCPPubSub;
    static deserializeBinaryFromReader(message: GCPPubSub, reader: jspb.BinaryReader): GCPPubSub;
}

export namespace GCPPubSub {
    export type AsObject = {
        id: string,
        value: Uint8Array | string,

        attributesMap: Array<[string, string]>,
        publishTime: number,
        deliveryAttempt: number,
        orderingKey: string,
    }
}
