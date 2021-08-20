// package: protos.backends
// file: backends/redis-streams.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RedisStreams extends jspb.Message { 
    getDatabase(): number;
    setDatabase(value: number): RedisStreams;
    clearStreamList(): void;
    getStreamList(): Array<string>;
    setStreamList(value: Array<string>): RedisStreams;
    addStream(value: string, index?: number): string;
    getId(): string;
    setId(value: string): RedisStreams;
    getKey(): string;
    setKey(value: string): RedisStreams;
    getConsumerGroup(): string;
    setConsumerGroup(value: string): RedisStreams;
    getConsumerName(): string;
    setConsumerName(value: string): RedisStreams;

    hasCreateConsumerConfig(): boolean;
    clearCreateConsumerConfig(): void;
    getCreateConsumerConfig(): CreateConsumerConfig | undefined;
    setCreateConsumerConfig(value?: CreateConsumerConfig): RedisStreams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedisStreams.AsObject;
    static toObject(includeInstance: boolean, msg: RedisStreams): RedisStreams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedisStreams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedisStreams;
    static deserializeBinaryFromReader(message: RedisStreams, reader: jspb.BinaryReader): RedisStreams;
}

export namespace RedisStreams {
    export type AsObject = {
        database: number,
        streamList: Array<string>,
        id: string,
        key: string,
        consumerGroup: string,
        consumerName: string,
        createConsumerConfig?: CreateConsumerConfig.AsObject,
    }
}

export class CreateConsumerConfig extends jspb.Message { 
    getCreateStreams(): boolean;
    setCreateStreams(value: boolean): CreateConsumerConfig;
    getRecreateConsumerGroup(): boolean;
    setRecreateConsumerGroup(value: boolean): CreateConsumerConfig;
    getOffsetStart(): CreateConsumerConfig.OffsetStart;
    setOffsetStart(value: CreateConsumerConfig.OffsetStart): CreateConsumerConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateConsumerConfig.AsObject;
    static toObject(includeInstance: boolean, msg: CreateConsumerConfig): CreateConsumerConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateConsumerConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateConsumerConfig;
    static deserializeBinaryFromReader(message: CreateConsumerConfig, reader: jspb.BinaryReader): CreateConsumerConfig;
}

export namespace CreateConsumerConfig {
    export type AsObject = {
        createStreams: boolean,
        recreateConsumerGroup: boolean,
        offsetStart: CreateConsumerConfig.OffsetStart,
    }

    export enum OffsetStart {
    LATEST = 0,
    OLDEST = 1,
    }

}
