// package: protos.args
// file: args/azure-event-hub.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AzureEventHubConn extends jspb.Message { 
    getConnectionString(): string;
    setConnectionString(value: string): AzureEventHubConn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AzureEventHubConn.AsObject;
    static toObject(includeInstance: boolean, msg: AzureEventHubConn): AzureEventHubConn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AzureEventHubConn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AzureEventHubConn;
    static deserializeBinaryFromReader(message: AzureEventHubConn, reader: jspb.BinaryReader): AzureEventHubConn;
}

export namespace AzureEventHubConn {
    export type AsObject = {
        connectionString: string,
    }
}

export class AzureEventHubReadOpts extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AzureEventHubReadOpts.AsObject;
    static toObject(includeInstance: boolean, msg: AzureEventHubReadOpts): AzureEventHubReadOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AzureEventHubReadOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AzureEventHubReadOpts;
    static deserializeBinaryFromReader(message: AzureEventHubReadOpts, reader: jspb.BinaryReader): AzureEventHubReadOpts;
}

export namespace AzureEventHubReadOpts {
    export type AsObject = {
    }
}

export class AzureEventHubWriteOpts extends jspb.Message { 
    getMessageId(): string;
    setMessageId(value: string): AzureEventHubWriteOpts;
    getPartitionKey(): string;
    setPartitionKey(value: string): AzureEventHubWriteOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AzureEventHubWriteOpts.AsObject;
    static toObject(includeInstance: boolean, msg: AzureEventHubWriteOpts): AzureEventHubWriteOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AzureEventHubWriteOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AzureEventHubWriteOpts;
    static deserializeBinaryFromReader(message: AzureEventHubWriteOpts, reader: jspb.BinaryReader): AzureEventHubWriteOpts;
}

export namespace AzureEventHubWriteOpts {
    export type AsObject = {
        messageId: string,
        partitionKey: string,
    }
}
