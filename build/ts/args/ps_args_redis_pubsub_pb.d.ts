// package: protos.args
// file: args/ps_args_redis_pubsub.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RedisPubSubConn extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): RedisPubSubConn;
    getUsername(): string;
    setUsername(value: string): RedisPubSubConn;
    getPassword(): string;
    setPassword(value: string): RedisPubSubConn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedisPubSubConn.AsObject;
    static toObject(includeInstance: boolean, msg: RedisPubSubConn): RedisPubSubConn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedisPubSubConn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedisPubSubConn;
    static deserializeBinaryFromReader(message: RedisPubSubConn, reader: jspb.BinaryReader): RedisPubSubConn;
}

export namespace RedisPubSubConn {
    export type AsObject = {
        address: string,
        username: string,
        password: string,
    }
}

export class RedisPubSubReadArgs extends jspb.Message { 
    getDatabase(): number;
    setDatabase(value: number): RedisPubSubReadArgs;
    clearChannelList(): void;
    getChannelList(): Array<string>;
    setChannelList(value: Array<string>): RedisPubSubReadArgs;
    addChannel(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedisPubSubReadArgs.AsObject;
    static toObject(includeInstance: boolean, msg: RedisPubSubReadArgs): RedisPubSubReadArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedisPubSubReadArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedisPubSubReadArgs;
    static deserializeBinaryFromReader(message: RedisPubSubReadArgs, reader: jspb.BinaryReader): RedisPubSubReadArgs;
}

export namespace RedisPubSubReadArgs {
    export type AsObject = {
        database: number,
        channelList: Array<string>,
    }
}

export class RedisPubSubWriteArgs extends jspb.Message { 
    getDatabase(): number;
    setDatabase(value: number): RedisPubSubWriteArgs;
    clearChannelList(): void;
    getChannelList(): Array<string>;
    setChannelList(value: Array<string>): RedisPubSubWriteArgs;
    addChannel(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedisPubSubWriteArgs.AsObject;
    static toObject(includeInstance: boolean, msg: RedisPubSubWriteArgs): RedisPubSubWriteArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedisPubSubWriteArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedisPubSubWriteArgs;
    static deserializeBinaryFromReader(message: RedisPubSubWriteArgs, reader: jspb.BinaryReader): RedisPubSubWriteArgs;
}

export namespace RedisPubSubWriteArgs {
    export type AsObject = {
        database: number,
        channelList: Array<string>,
    }
}
