// package: protos.args
// file: args/gcp-pubsub.proto

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

export class GCPPubSubReadOpts extends jspb.Message { 
    getSubscriptionId(): string;
    setSubscriptionId(value: string): GCPPubSubReadOpts;
    getAckMessages(): boolean;
    setAckMessages(value: boolean): GCPPubSubReadOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GCPPubSubReadOpts.AsObject;
    static toObject(includeInstance: boolean, msg: GCPPubSubReadOpts): GCPPubSubReadOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GCPPubSubReadOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GCPPubSubReadOpts;
    static deserializeBinaryFromReader(message: GCPPubSubReadOpts, reader: jspb.BinaryReader): GCPPubSubReadOpts;
}

export namespace GCPPubSubReadOpts {
    export type AsObject = {
        subscriptionId: string,
        ackMessages: boolean,
    }
}

export class GCPPubSubWriteOpts extends jspb.Message { 
    getTopicId(): string;
    setTopicId(value: string): GCPPubSubWriteOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GCPPubSubWriteOpts.AsObject;
    static toObject(includeInstance: boolean, msg: GCPPubSubWriteOpts): GCPPubSubWriteOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GCPPubSubWriteOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GCPPubSubWriteOpts;
    static deserializeBinaryFromReader(message: GCPPubSubWriteOpts, reader: jspb.BinaryReader): GCPPubSubWriteOpts;
}

export namespace GCPPubSubWriteOpts {
    export type AsObject = {
        topicId: string,
    }
}
