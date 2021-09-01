// package: protos.backends
// file: backends/gcp-pubsub.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GCPPubSubConn extends jspb.Message { 
    getProjectId(): string;
    setProjectId(value: string): GCPPubSubConn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GCPPubSubConn.AsObject;
    static toObject(includeInstance: boolean, msg: GCPPubSubConn): GCPPubSubConn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GCPPubSubConn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GCPPubSubConn;
    static deserializeBinaryFromReader(message: GCPPubSubConn, reader: jspb.BinaryReader): GCPPubSubConn;
}

export namespace GCPPubSubConn {
    export type AsObject = {
        projectId: string,
    }
}

export class GCPPubSubReadArgs extends jspb.Message { 
    getSubscriptionId(): string;
    setSubscriptionId(value: string): GCPPubSubReadArgs;
    getAckMessages(): boolean;
    setAckMessages(value: boolean): GCPPubSubReadArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GCPPubSubReadArgs.AsObject;
    static toObject(includeInstance: boolean, msg: GCPPubSubReadArgs): GCPPubSubReadArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GCPPubSubReadArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GCPPubSubReadArgs;
    static deserializeBinaryFromReader(message: GCPPubSubReadArgs, reader: jspb.BinaryReader): GCPPubSubReadArgs;
}

export namespace GCPPubSubReadArgs {
    export type AsObject = {
        subscriptionId: string,
        ackMessages: boolean,
    }
}

export class GCPPubSubWriteArgs extends jspb.Message { 
    getTopicId(): string;
    setTopicId(value: string): GCPPubSubWriteArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GCPPubSubWriteArgs.AsObject;
    static toObject(includeInstance: boolean, msg: GCPPubSubWriteArgs): GCPPubSubWriteArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GCPPubSubWriteArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GCPPubSubWriteArgs;
    static deserializeBinaryFromReader(message: GCPPubSubWriteArgs, reader: jspb.BinaryReader): GCPPubSubWriteArgs;
}

export namespace GCPPubSubWriteArgs {
    export type AsObject = {
        topicId: string,
    }
}
