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

export class KafkaReadOpts extends jspb.Message { 
    clearTopicsList(): void;
    getTopicsList(): Array<string>;
    setTopicsList(value: Array<string>): KafkaReadOpts;
    addTopics(value: string, index?: number): string;
    getReadOffset(): number;
    setReadOffset(value: number): KafkaReadOpts;
    getUseConsumerGroup(): boolean;
    setUseConsumerGroup(value: boolean): KafkaReadOpts;
    getConsumerGroupName(): string;
    setConsumerGroupName(value: string): KafkaReadOpts;
    getMaxWaitSeconds(): number;
    setMaxWaitSeconds(value: number): KafkaReadOpts;
    getMinBytes(): number;
    setMinBytes(value: number): KafkaReadOpts;
    getMaxBytes(): number;
    setMaxBytes(value: number): KafkaReadOpts;
    getCommitIntervalSeconds(): number;
    setCommitIntervalSeconds(value: number): KafkaReadOpts;
    getRebalanceTimeoutSeconds(): number;
    setRebalanceTimeoutSeconds(value: number): KafkaReadOpts;
    getQueueCapacity(): number;
    setQueueCapacity(value: number): KafkaReadOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KafkaReadOpts.AsObject;
    static toObject(includeInstance: boolean, msg: KafkaReadOpts): KafkaReadOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KafkaReadOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KafkaReadOpts;
    static deserializeBinaryFromReader(message: KafkaReadOpts, reader: jspb.BinaryReader): KafkaReadOpts;
}

export namespace KafkaReadOpts {
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

export class KafkaWriteOpts extends jspb.Message { 
    getKey(): string;
    setKey(value: string): KafkaWriteOpts;

    getHeadersMap(): jspb.Map<string, string>;
    clearHeadersMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KafkaWriteOpts.AsObject;
    static toObject(includeInstance: boolean, msg: KafkaWriteOpts): KafkaWriteOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KafkaWriteOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KafkaWriteOpts;
    static deserializeBinaryFromReader(message: KafkaWriteOpts, reader: jspb.BinaryReader): KafkaWriteOpts;
}

export namespace KafkaWriteOpts {
    export type AsObject = {
        key: string,

        headersMap: Array<[string, string]>,
    }
}

export class KafkaRelayOpts extends jspb.Message { 
    clearTopicsList(): void;
    getTopicsList(): Array<string>;
    setTopicsList(value: Array<string>): KafkaRelayOpts;
    addTopics(value: string, index?: number): string;
    getReadOffset(): number;
    setReadOffset(value: number): KafkaRelayOpts;
    getUseConsumerGroup(): boolean;
    setUseConsumerGroup(value: boolean): KafkaRelayOpts;
    getConsumerGroupName(): string;
    setConsumerGroupName(value: string): KafkaRelayOpts;
    getMaxWaitSeconds(): number;
    setMaxWaitSeconds(value: number): KafkaRelayOpts;
    getMinBytes(): number;
    setMinBytes(value: number): KafkaRelayOpts;
    getMaxBytes(): number;
    setMaxBytes(value: number): KafkaRelayOpts;
    getCommitIntervalSeconds(): number;
    setCommitIntervalSeconds(value: number): KafkaRelayOpts;
    getRebalanceTimeoutSeconds(): number;
    setRebalanceTimeoutSeconds(value: number): KafkaRelayOpts;
    getQueueCapacity(): number;
    setQueueCapacity(value: number): KafkaRelayOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KafkaRelayOpts.AsObject;
    static toObject(includeInstance: boolean, msg: KafkaRelayOpts): KafkaRelayOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KafkaRelayOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KafkaRelayOpts;
    static deserializeBinaryFromReader(message: KafkaRelayOpts, reader: jspb.BinaryReader): KafkaRelayOpts;
}

export namespace KafkaRelayOpts {
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
