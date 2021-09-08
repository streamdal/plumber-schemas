// package: protos.args
// file: args/kafka.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class KafkaConn extends jspb.Message { 
    clearAddressList(): void;
    getAddressList(): Array<string>;
    setAddressList(value: Array<string>): KafkaConn;
    addAddress(value: string, index?: number): string;
    getTimeoutSeconds(): number;
    setTimeoutSeconds(value: number): KafkaConn;
    getUseTls(): boolean;
    setUseTls(value: boolean): KafkaConn;
    getInsecureTls(): boolean;
    setInsecureTls(value: boolean): KafkaConn;
    getSaslType(): KafkaConn.SASLType;
    setSaslType(value: KafkaConn.SASLType): KafkaConn;
    getSaslUsername(): string;
    setSaslUsername(value: string): KafkaConn;
    getSaslPassword(): string;
    setSaslPassword(value: string): KafkaConn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KafkaConn.AsObject;
    static toObject(includeInstance: boolean, msg: KafkaConn): KafkaConn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KafkaConn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KafkaConn;
    static deserializeBinaryFromReader(message: KafkaConn, reader: jspb.BinaryReader): KafkaConn;
}

export namespace KafkaConn {
    export type AsObject = {
        addressList: Array<string>,
        timeoutSeconds: number,
        useTls: boolean,
        insecureTls: boolean,
        saslType: KafkaConn.SASLType,
        saslUsername: string,
        saslPassword: string,
    }

    export enum SASLType {
    NONE = 0,
    PLAIN = 1,
    SCRAM = 2,
    }

}

export class KafkaReadArgs extends jspb.Message { 
    clearTopicsList(): void;
    getTopicsList(): Array<string>;
    setTopicsList(value: Array<string>): KafkaReadArgs;
    addTopics(value: string, index?: number): string;
    getReadOffset(): number;
    setReadOffset(value: number): KafkaReadArgs;
    getUseConsumerGroup(): boolean;
    setUseConsumerGroup(value: boolean): KafkaReadArgs;
    getConsumerGroupName(): string;
    setConsumerGroupName(value: string): KafkaReadArgs;
    getMaxWaitSeconds(): number;
    setMaxWaitSeconds(value: number): KafkaReadArgs;
    getMinBytes(): number;
    setMinBytes(value: number): KafkaReadArgs;
    getMaxBytes(): number;
    setMaxBytes(value: number): KafkaReadArgs;
    getCommitIntervalSeconds(): number;
    setCommitIntervalSeconds(value: number): KafkaReadArgs;
    getRebalanceTimeoutSeconds(): number;
    setRebalanceTimeoutSeconds(value: number): KafkaReadArgs;
    getQueueCapacity(): number;
    setQueueCapacity(value: number): KafkaReadArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KafkaReadArgs.AsObject;
    static toObject(includeInstance: boolean, msg: KafkaReadArgs): KafkaReadArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KafkaReadArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KafkaReadArgs;
    static deserializeBinaryFromReader(message: KafkaReadArgs, reader: jspb.BinaryReader): KafkaReadArgs;
}

export namespace KafkaReadArgs {
    export type AsObject = {
        topicsList: Array<string>,
        readOffset: number,
        useConsumerGroup: boolean,
        consumerGroupName: string,
        maxWaitSeconds: number,
        minBytes: number,
        maxBytes: number,
        commitIntervalSeconds: number,
        rebalanceTimeoutSeconds: number,
        queueCapacity: number,
    }
}

export class KafkaWriteArgs extends jspb.Message { 
    getKey(): string;
    setKey(value: string): KafkaWriteArgs;

    getHeadersMap(): jspb.Map<string, string>;
    clearHeadersMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KafkaWriteArgs.AsObject;
    static toObject(includeInstance: boolean, msg: KafkaWriteArgs): KafkaWriteArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KafkaWriteArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KafkaWriteArgs;
    static deserializeBinaryFromReader(message: KafkaWriteArgs, reader: jspb.BinaryReader): KafkaWriteArgs;
}

export namespace KafkaWriteArgs {
    export type AsObject = {
        key: string,

        headersMap: Array<[string, string]>,
    }
}

export class KafkaRelayArgs extends jspb.Message { 
    clearTopicsList(): void;
    getTopicsList(): Array<string>;
    setTopicsList(value: Array<string>): KafkaRelayArgs;
    addTopics(value: string, index?: number): string;
    getReadOffset(): number;
    setReadOffset(value: number): KafkaRelayArgs;
    getUseConsumerGroup(): boolean;
    setUseConsumerGroup(value: boolean): KafkaRelayArgs;
    getConsumerGroupName(): string;
    setConsumerGroupName(value: string): KafkaRelayArgs;
    getMaxWaitSeconds(): number;
    setMaxWaitSeconds(value: number): KafkaRelayArgs;
    getMinBytes(): number;
    setMinBytes(value: number): KafkaRelayArgs;
    getMaxBytes(): number;
    setMaxBytes(value: number): KafkaRelayArgs;
    getCommitIntervalSeconds(): number;
    setCommitIntervalSeconds(value: number): KafkaRelayArgs;
    getRebalanceTimeoutSeconds(): number;
    setRebalanceTimeoutSeconds(value: number): KafkaRelayArgs;
    getQueueCapacity(): number;
    setQueueCapacity(value: number): KafkaRelayArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KafkaRelayArgs.AsObject;
    static toObject(includeInstance: boolean, msg: KafkaRelayArgs): KafkaRelayArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KafkaRelayArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KafkaRelayArgs;
    static deserializeBinaryFromReader(message: KafkaRelayArgs, reader: jspb.BinaryReader): KafkaRelayArgs;
}

export namespace KafkaRelayArgs {
    export type AsObject = {
        topicsList: Array<string>,
        readOffset: number,
        useConsumerGroup: boolean,
        consumerGroupName: string,
        maxWaitSeconds: number,
        minBytes: number,
        maxBytes: number,
        commitIntervalSeconds: number,
        rebalanceTimeoutSeconds: number,
        queueCapacity: number,
    }
}

export class KafkaLagArgs extends jspb.Message { 
    getGroupId(): string;
    setGroupId(value: string): KafkaLagArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KafkaLagArgs.AsObject;
    static toObject(includeInstance: boolean, msg: KafkaLagArgs): KafkaLagArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KafkaLagArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KafkaLagArgs;
    static deserializeBinaryFromReader(message: KafkaLagArgs, reader: jspb.BinaryReader): KafkaLagArgs;
}

export namespace KafkaLagArgs {
    export type AsObject = {
        groupId: string,
    }
}
