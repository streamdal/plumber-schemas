// package: protos.backends
// file: backends/redis-streams.proto

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

export class RedisStreamsReadArgs extends jspb.Message { 
    getDatabase(): number;
    setDatabase(value: number): RedisStreamsReadArgs;
    clearStreamList(): void;
    getStreamList(): Array<string>;
    setStreamList(value: Array<string>): RedisStreamsReadArgs;
    addStream(value: string, index?: number): string;
    getId(): string;
    setId(value: string): RedisStreamsReadArgs;
    getKey(): string;
    setKey(value: string): RedisStreamsReadArgs;
    getConsumerGroup(): string;
    setConsumerGroup(value: string): RedisStreamsReadArgs;
    getConsumerName(): string;
    setConsumerName(value: string): RedisStreamsReadArgs;

    hasCreateConsumerConfig(): boolean;
    clearCreateConsumerConfig(): void;
    getCreateConsumerConfig(): CreateConsumerConfig | undefined;
    setCreateConsumerConfig(value?: CreateConsumerConfig): RedisStreamsReadArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedisStreamsReadArgs.AsObject;
    static toObject(includeInstance: boolean, msg: RedisStreamsReadArgs): RedisStreamsReadArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedisStreamsReadArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedisStreamsReadArgs;
    static deserializeBinaryFromReader(message: RedisStreamsReadArgs, reader: jspb.BinaryReader): RedisStreamsReadArgs;
}

export namespace RedisStreamsReadArgs {
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

export class RedisStreamsWriteArgs extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedisStreamsWriteArgs.AsObject;
    static toObject(includeInstance: boolean, msg: RedisStreamsWriteArgs): RedisStreamsWriteArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedisStreamsWriteArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedisStreamsWriteArgs;
    static deserializeBinaryFromReader(message: RedisStreamsWriteArgs, reader: jspb.BinaryReader): RedisStreamsWriteArgs;
}

export namespace RedisStreamsWriteArgs {
    export type AsObject = {
    }
}
