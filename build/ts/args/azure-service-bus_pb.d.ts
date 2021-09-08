// package: protos.args
// file: args/azure-service-bus.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AzureServiceBusConn extends jspb.Message { 
    getConnectionString(): string;
    setConnectionString(value: string): AzureServiceBusConn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AzureServiceBusConn.AsObject;
    static toObject(includeInstance: boolean, msg: AzureServiceBusConn): AzureServiceBusConn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AzureServiceBusConn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AzureServiceBusConn;
    static deserializeBinaryFromReader(message: AzureServiceBusConn, reader: jspb.BinaryReader): AzureServiceBusConn;
}

export namespace AzureServiceBusConn {
    export type AsObject = {
        connectionString: string,
    }
}

export class AzureServiceBusReadOpts extends jspb.Message { 
    getQueue(): string;
    setQueue(value: string): AzureServiceBusReadOpts;
    getTopic(): string;
    setTopic(value: string): AzureServiceBusReadOpts;
    getSubscriptionName(): string;
    setSubscriptionName(value: string): AzureServiceBusReadOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AzureServiceBusReadOpts.AsObject;
    static toObject(includeInstance: boolean, msg: AzureServiceBusReadOpts): AzureServiceBusReadOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AzureServiceBusReadOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AzureServiceBusReadOpts;
    static deserializeBinaryFromReader(message: AzureServiceBusReadOpts, reader: jspb.BinaryReader): AzureServiceBusReadOpts;
}

export namespace AzureServiceBusReadOpts {
    export type AsObject = {
        queue: string,
        topic: string,
        subscriptionName: string,
    }
}

export class AzureServiceBusWriteOpts extends jspb.Message { 
    getQueue(): string;
    setQueue(value: string): AzureServiceBusWriteOpts;
    getTopic(): string;
    setTopic(value: string): AzureServiceBusWriteOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AzureServiceBusWriteOpts.AsObject;
    static toObject(includeInstance: boolean, msg: AzureServiceBusWriteOpts): AzureServiceBusWriteOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AzureServiceBusWriteOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AzureServiceBusWriteOpts;
    static deserializeBinaryFromReader(message: AzureServiceBusWriteOpts, reader: jspb.BinaryReader): AzureServiceBusWriteOpts;
}

export namespace AzureServiceBusWriteOpts {
    export type AsObject = {
        queue: string,
        topic: string,
    }
}
