// package: protos.args
// file: args/aws-sqs.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AWSSQSConn extends jspb.Message { 
    getAwsRegion(): string;
    setAwsRegion(value: string): AWSSQSConn;
    getAwsAccessKeyId(): string;
    setAwsAccessKeyId(value: string): AWSSQSConn;
    getAwsSecretAccessKey(): string;
    setAwsSecretAccessKey(value: string): AWSSQSConn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AWSSQSConn.AsObject;
    static toObject(includeInstance: boolean, msg: AWSSQSConn): AWSSQSConn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AWSSQSConn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AWSSQSConn;
    static deserializeBinaryFromReader(message: AWSSQSConn, reader: jspb.BinaryReader): AWSSQSConn;
}

export namespace AWSSQSConn {
    export type AsObject = {
        awsRegion: string,
        awsAccessKeyId: string,
        awsSecretAccessKey: string,
    }
}

export class AWSSQSReadOpts extends jspb.Message { 
    getQueueName(): string;
    setQueueName(value: string): AWSSQSReadOpts;
    getRemoteAccountId(): string;
    setRemoteAccountId(value: string): AWSSQSReadOpts;
    getMaxNumMessages(): number;
    setMaxNumMessages(value: number): AWSSQSReadOpts;
    getReceiveRequestAttemptId(): string;
    setReceiveRequestAttemptId(value: string): AWSSQSReadOpts;
    getAutoDelete(): boolean;
    setAutoDelete(value: boolean): AWSSQSReadOpts;
    getWaitTimeSeconds(): number;
    setWaitTimeSeconds(value: number): AWSSQSReadOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AWSSQSReadOpts.AsObject;
    static toObject(includeInstance: boolean, msg: AWSSQSReadOpts): AWSSQSReadOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AWSSQSReadOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AWSSQSReadOpts;
    static deserializeBinaryFromReader(message: AWSSQSReadOpts, reader: jspb.BinaryReader): AWSSQSReadOpts;
}

export namespace AWSSQSReadOpts {
    export type AsObject = {
        queueName: string,
        remoteAccountId: string,
        maxNumMessages: number,
        receiveRequestAttemptId: string,
        autoDelete: boolean,
        waitTimeSeconds: number,
    }
}

export class AWSSQSWriteOpts extends jspb.Message { 
    getQueueName(): string;
    setQueueName(value: string): AWSSQSWriteOpts;
    getRemoteAccountId(): string;
    setRemoteAccountId(value: string): AWSSQSWriteOpts;
    getDelaySeconds(): number;
    setDelaySeconds(value: number): AWSSQSWriteOpts;

    getAttributesMap(): jspb.Map<string, string>;
    clearAttributesMap(): void;
    getMessageGroupId(): string;
    setMessageGroupId(value: string): AWSSQSWriteOpts;
    getMessageDeduplicationId(): string;
    setMessageDeduplicationId(value: string): AWSSQSWriteOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AWSSQSWriteOpts.AsObject;
    static toObject(includeInstance: boolean, msg: AWSSQSWriteOpts): AWSSQSWriteOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AWSSQSWriteOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AWSSQSWriteOpts;
    static deserializeBinaryFromReader(message: AWSSQSWriteOpts, reader: jspb.BinaryReader): AWSSQSWriteOpts;
}

export namespace AWSSQSWriteOpts {
    export type AsObject = {
        queueName: string,
        remoteAccountId: string,
        delaySeconds: number,

        attributesMap: Array<[string, string]>,
        messageGroupId: string,
        messageDeduplicationId: string,
    }
}

export class AWSSQSRelayOpts extends jspb.Message { 
    getQueueName(): string;
    setQueueName(value: string): AWSSQSRelayOpts;
    getRemoteAccountId(): string;
    setRemoteAccountId(value: string): AWSSQSRelayOpts;
    getMaxNumMessages(): number;
    setMaxNumMessages(value: number): AWSSQSRelayOpts;
    getReceiveRequestAttemptId(): string;
    setReceiveRequestAttemptId(value: string): AWSSQSRelayOpts;
    getAutoDelete(): boolean;
    setAutoDelete(value: boolean): AWSSQSRelayOpts;
    getWaitTimeSeconds(): number;
    setWaitTimeSeconds(value: number): AWSSQSRelayOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AWSSQSRelayOpts.AsObject;
    static toObject(includeInstance: boolean, msg: AWSSQSRelayOpts): AWSSQSRelayOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AWSSQSRelayOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AWSSQSRelayOpts;
    static deserializeBinaryFromReader(message: AWSSQSRelayOpts, reader: jspb.BinaryReader): AWSSQSRelayOpts;
}

export namespace AWSSQSRelayOpts {
    export type AsObject = {
        queueName: string,
        remoteAccountId: string,
        maxNumMessages: number,
        receiveRequestAttemptId: string,
        autoDelete: boolean,
        waitTimeSeconds: number,
    }
}
