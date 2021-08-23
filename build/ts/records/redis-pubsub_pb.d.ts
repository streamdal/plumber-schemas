// package: protos.records
// file: records/redis-pubsub.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RedisPubsub extends jspb.Message { 

    getMetadataMap(): jspb.Map<string, string>;
    clearMetadataMap(): void;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): RedisPubsub;
    getTimestamp(): number;
    setTimestamp(value: number): RedisPubsub;

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

        metadataMap: Array<[string, string]>,
        value: Uint8Array | string,
        timestamp: number,
    }
}
