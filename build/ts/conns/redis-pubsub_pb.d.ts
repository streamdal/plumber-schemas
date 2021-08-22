// package: protos.conns
// file: conns/redis-pubsub.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RedisPubsub extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): RedisPubsub;
    getUsername(): string;
    setUsername(value: string): RedisPubsub;
    getPassword(): string;
    setPassword(value: string): RedisPubsub;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedisPubsub.AsObject;
    static toObject(includeInstance: boolean, msg: RedisPubsub): RedisPubsub.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedisPubsub, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedisPubsub;
    static deserializeBinaryFromReader(message: RedisPubsub, reader: jspb.BinaryReader): RedisPubsub;
}

export namespace RedisPubsub {
    export type AsObject = {
        address: string,
        username: string,
        password: string,
    }
}
