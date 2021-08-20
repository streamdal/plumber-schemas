// package: protos.conns
// file: conns/redis-streams.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RedisStreams extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): RedisStreams;
    getUsername(): string;
    setUsername(value: string): RedisStreams;
    getPassword(): string;
    setPassword(value: string): RedisStreams;

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
        address: string,
        username: string,
        password: string,
    }
}
