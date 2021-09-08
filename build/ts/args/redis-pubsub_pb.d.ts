// package: protos.args
// file: args/redis-pubsub.proto

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

export class RedisPubSubReadOpts extends jspb.Message { 
    getDatabase(): number;
    setDatabase(value: number): RedisPubSubReadOpts;
    clearChannelList(): void;
    getChannelList(): Array<string>;
    setChannelList(value: Array<string>): RedisPubSubReadOpts;
    addChannel(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedisPubSubReadOpts.AsObject;
    static toObject(includeInstance: boolean, msg: RedisPubSubReadOpts): RedisPubSubReadOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedisPubSubReadOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedisPubSubReadOpts;
    static deserializeBinaryFromReader(message: RedisPubSubReadOpts, reader: jspb.BinaryReader): RedisPubSubReadOpts;
}

export namespace RedisPubSubReadOpts {
    export type AsObject = {
        database: number,
        channelList: Array<string>,
    }
}

export class RedisPubSubWriteOpts extends jspb.Message { 
    getDatabase(): number;
    setDatabase(value: number): RedisPubSubWriteOpts;
    clearChannelList(): void;
    getChannelList(): Array<string>;
    setChannelList(value: Array<string>): RedisPubSubWriteOpts;
    addChannel(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedisPubSubWriteOpts.AsObject;
    static toObject(includeInstance: boolean, msg: RedisPubSubWriteOpts): RedisPubSubWriteOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedisPubSubWriteOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedisPubSubWriteOpts;
    static deserializeBinaryFromReader(message: RedisPubSubWriteOpts, reader: jspb.BinaryReader): RedisPubSubWriteOpts;
}

export namespace RedisPubSubWriteOpts {
    export type AsObject = {
        database: number,
        channelList: Array<string>,
    }
}
