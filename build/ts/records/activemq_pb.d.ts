// package: protos.records
// file: records/activemq.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ActiveMQ extends jspb.Message { 
    getDestination(): string;
    setDestination(value: string): ActiveMQ;
    getContentType(): string;
    setContentType(value: string): ActiveMQ;
    getSubscriptionId(): string;
    setSubscriptionId(value: string): ActiveMQ;
    getTimestamp(): number;
    setTimestamp(value: number): ActiveMQ;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): ActiveMQ;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActiveMQ.AsObject;
    static toObject(includeInstance: boolean, msg: ActiveMQ): ActiveMQ.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActiveMQ, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActiveMQ;
    static deserializeBinaryFromReader(message: ActiveMQ, reader: jspb.BinaryReader): ActiveMQ;
}

export namespace ActiveMQ {
    export type AsObject = {
        destination: string,
        contentType: string,
        subscriptionId: string,
        timestamp: number,
        value: Uint8Array | string,
    }
}
