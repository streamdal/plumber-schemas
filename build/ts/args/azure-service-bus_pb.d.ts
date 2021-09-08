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

export class AzureServiceBusReadArgs extends jspb.Message { 
    getQueue(): string;
    setQueue(value: string): AzureServiceBusReadArgs;
    getTopic(): string;
    setTopic(value: string): AzureServiceBusReadArgs;
    getSubscriptionName(): string;
    setSubscriptionName(value: string): AzureServiceBusReadArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AzureServiceBusReadArgs.AsObject;
    static toObject(includeInstance: boolean, msg: AzureServiceBusReadArgs): AzureServiceBusReadArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AzureServiceBusReadArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AzureServiceBusReadArgs;
    static deserializeBinaryFromReader(message: AzureServiceBusReadArgs, reader: jspb.BinaryReader): AzureServiceBusReadArgs;
}

export namespace AzureServiceBusReadArgs {
    export type AsObject = {
        queue: string,
        topic: string,
        subscriptionName: string,
    }
}

export class AzureServiceBusWriteArgs extends jspb.Message { 
    getQueue(): string;
    setQueue(value: string): AzureServiceBusWriteArgs;
    getTopic(): string;
    setTopic(value: string): AzureServiceBusWriteArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AzureServiceBusWriteArgs.AsObject;
    static toObject(includeInstance: boolean, msg: AzureServiceBusWriteArgs): AzureServiceBusWriteArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AzureServiceBusWriteArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AzureServiceBusWriteArgs;
    static deserializeBinaryFromReader(message: AzureServiceBusWriteArgs, reader: jspb.BinaryReader): AzureServiceBusWriteArgs;
}

export namespace AzureServiceBusWriteArgs {
    export type AsObject = {
        queue: string,
        topic: string,
    }
}
