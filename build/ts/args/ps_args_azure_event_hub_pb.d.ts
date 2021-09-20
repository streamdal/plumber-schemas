// package: protos.args
// file: args/ps_args_azure_event_hub.proto

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

export class AzureEventHubReadArgs extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AzureEventHubReadArgs.AsObject;
    static toObject(includeInstance: boolean, msg: AzureEventHubReadArgs): AzureEventHubReadArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AzureEventHubReadArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AzureEventHubReadArgs;
    static deserializeBinaryFromReader(message: AzureEventHubReadArgs, reader: jspb.BinaryReader): AzureEventHubReadArgs;
}

export namespace AzureEventHubReadArgs {
    export type AsObject = {
    }
}

export class AzureEventHubWriteArgs extends jspb.Message { 
    getMessageId(): string;
    setMessageId(value: string): AzureEventHubWriteArgs;
    getPartitionKey(): string;
    setPartitionKey(value: string): AzureEventHubWriteArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AzureEventHubWriteArgs.AsObject;
    static toObject(includeInstance: boolean, msg: AzureEventHubWriteArgs): AzureEventHubWriteArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AzureEventHubWriteArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AzureEventHubWriteArgs;
    static deserializeBinaryFromReader(message: AzureEventHubWriteArgs, reader: jspb.BinaryReader): AzureEventHubWriteArgs;
}

export namespace AzureEventHubWriteArgs {
    export type AsObject = {
        messageId: string,
        partitionKey: string,
    }
}
