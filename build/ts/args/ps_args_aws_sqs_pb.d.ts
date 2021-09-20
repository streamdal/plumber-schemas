// package: protos.args
// file: args/ps_args_aws_sqs.proto

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

export class AWSSQSReadArgs extends jspb.Message { 
    getQueueName(): string;
    setQueueName(value: string): AWSSQSReadArgs;
    getRemoteAccountId(): string;
    setRemoteAccountId(value: string): AWSSQSReadArgs;
    getMaxNumMessages(): number;
    setMaxNumMessages(value: number): AWSSQSReadArgs;
    getReceiveRequestAttemptId(): string;
    setReceiveRequestAttemptId(value: string): AWSSQSReadArgs;
    getAutoDelete(): boolean;
    setAutoDelete(value: boolean): AWSSQSReadArgs;
    getWaitTimeSeconds(): number;
    setWaitTimeSeconds(value: number): AWSSQSReadArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AWSSQSReadArgs.AsObject;
    static toObject(includeInstance: boolean, msg: AWSSQSReadArgs): AWSSQSReadArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AWSSQSReadArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AWSSQSReadArgs;
    static deserializeBinaryFromReader(message: AWSSQSReadArgs, reader: jspb.BinaryReader): AWSSQSReadArgs;
}

export namespace AWSSQSReadArgs {
    export type AsObject = {
        queueName: string,
        remoteAccountId: string,
        maxNumMessages: number,
        receiveRequestAttemptId: string,
        autoDelete: boolean,
        waitTimeSeconds: number,
    }
}

export class AWSSQSWriteArgs extends jspb.Message { 
    getQueueName(): string;
    setQueueName(value: string): AWSSQSWriteArgs;
    getRemoteAccountId(): string;
    setRemoteAccountId(value: string): AWSSQSWriteArgs;
    getDelaySeconds(): number;
    setDelaySeconds(value: number): AWSSQSWriteArgs;

    getAttributesMap(): jspb.Map<string, string>;
    clearAttributesMap(): void;
    getMessageGroupId(): string;
    setMessageGroupId(value: string): AWSSQSWriteArgs;
    getMessageDeduplicationId(): string;
    setMessageDeduplicationId(value: string): AWSSQSWriteArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AWSSQSWriteArgs.AsObject;
    static toObject(includeInstance: boolean, msg: AWSSQSWriteArgs): AWSSQSWriteArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AWSSQSWriteArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AWSSQSWriteArgs;
    static deserializeBinaryFromReader(message: AWSSQSWriteArgs, reader: jspb.BinaryReader): AWSSQSWriteArgs;
}

export namespace AWSSQSWriteArgs {
    export type AsObject = {
        queueName: string,
        remoteAccountId: string,
        delaySeconds: number,

        attributesMap: Array<[string, string]>,
        messageGroupId: string,
        messageDeduplicationId: string,
    }
}

export class AWSSQSRelayArgs extends jspb.Message { 
    getQueueName(): string;
    setQueueName(value: string): AWSSQSRelayArgs;
    getRemoteAccountId(): string;
    setRemoteAccountId(value: string): AWSSQSRelayArgs;
    getMaxNumMessages(): number;
    setMaxNumMessages(value: number): AWSSQSRelayArgs;
    getReceiveRequestAttemptId(): string;
    setReceiveRequestAttemptId(value: string): AWSSQSRelayArgs;
    getAutoDelete(): boolean;
    setAutoDelete(value: boolean): AWSSQSRelayArgs;
    getWaitTimeSeconds(): number;
    setWaitTimeSeconds(value: number): AWSSQSRelayArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AWSSQSRelayArgs.AsObject;
    static toObject(includeInstance: boolean, msg: AWSSQSRelayArgs): AWSSQSRelayArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AWSSQSRelayArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AWSSQSRelayArgs;
    static deserializeBinaryFromReader(message: AWSSQSRelayArgs, reader: jspb.BinaryReader): AWSSQSRelayArgs;
}

export namespace AWSSQSRelayArgs {
    export type AsObject = {
        queueName: string,
        remoteAccountId: string,
        maxNumMessages: number,
        receiveRequestAttemptId: string,
        autoDelete: boolean,
        waitTimeSeconds: number,
    }
}
