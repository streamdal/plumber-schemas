// package: protos.records
// file: records/redis-streams.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RedisStreams extends jspb.Message { 
    getId(): string;
    setId(value: string): RedisStreams;
    getKey(): string;
    setKey(value: string): RedisStreams;
    getValue(): string;
    setValue(value: string): RedisStreams;
    getStream(): string;
    setStream(value: string): RedisStreams;
    getTimestamp(): number;
    setTimestamp(value: number): RedisStreams;

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
        id: string,
        key: string,
        value: string,
        stream: string,
        timestamp: number,
    }
}
