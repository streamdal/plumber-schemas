// package: protos.args
// file: args/redis-streams.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RedisStreamsConn extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): RedisStreamsConn;
    getUsername(): string;
    setUsername(value: string): RedisStreamsConn;
    getPassword(): string;
    setPassword(value: string): RedisStreamsConn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedisStreamsConn.AsObject;
    static toObject(includeInstance: boolean, msg: RedisStreamsConn): RedisStreamsConn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedisStreamsConn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedisStreamsConn;
    static deserializeBinaryFromReader(message: RedisStreamsConn, reader: jspb.BinaryReader): RedisStreamsConn;
}

export namespace RedisStreamsConn {
    export type AsObject = {
        address: string,
        username: string,
        password: string,
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

export class RedisStreamsReadOpts extends jspb.Message { 
    getDatabase(): number;
    setDatabase(value: number): RedisStreamsReadOpts;
    clearStreamList(): void;
    getStreamList(): Array<string>;
    setStreamList(value: Array<string>): RedisStreamsReadOpts;
    addStream(value: string, index?: number): string;
    getConsumerGroup(): string;
    setConsumerGroup(value: string): RedisStreamsReadOpts;
    getConsumerName(): string;
    setConsumerName(value: string): RedisStreamsReadOpts;
    getCount(): number;
    setCount(value: number): RedisStreamsReadOpts;

    hasCreateConsumerConfig(): boolean;
    clearCreateConsumerConfig(): void;
    getCreateConsumerConfig(): CreateConsumerConfig | undefined;
    setCreateConsumerConfig(value?: CreateConsumerConfig): RedisStreamsReadOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedisStreamsReadOpts.AsObject;
    static toObject(includeInstance: boolean, msg: RedisStreamsReadOpts): RedisStreamsReadOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedisStreamsReadOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedisStreamsReadOpts;
    static deserializeBinaryFromReader(message: RedisStreamsReadOpts, reader: jspb.BinaryReader): RedisStreamsReadOpts;
}

export namespace RedisStreamsReadOpts {
    export type AsObject = {
        database: number,
        streamList: Array<string>,
        consumerGroup: string,
        consumerName: string,
        count: number,
        createConsumerConfig?: CreateConsumerConfig.AsObject,
    }
}

export class RedisStreamsWriteOpts extends jspb.Message { 
    getWriteId(): string;
    setWriteId(value: string): RedisStreamsWriteOpts;
    clearStreamsList(): void;
    getStreamsList(): Array<string>;
    setStreamsList(value: Array<string>): RedisStreamsWriteOpts;
    addStreams(value: string, index?: number): string;
    getKey(): string;
    setKey(value: string): RedisStreamsWriteOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedisStreamsWriteOpts.AsObject;
    static toObject(includeInstance: boolean, msg: RedisStreamsWriteOpts): RedisStreamsWriteOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedisStreamsWriteOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedisStreamsWriteOpts;
    static deserializeBinaryFromReader(message: RedisStreamsWriteOpts, reader: jspb.BinaryReader): RedisStreamsWriteOpts;
}

export namespace RedisStreamsWriteOpts {
    export type AsObject = {
        writeId: string,
        streamsList: Array<string>,
        key: string,
    }
}
