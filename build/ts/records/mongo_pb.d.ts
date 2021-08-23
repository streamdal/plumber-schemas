// package: protos.records
// file: records/mongo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Mongo extends jspb.Message { 
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): Mongo;
    getTimestamp(): number;
    setTimestamp(value: number): Mongo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mongo.AsObject;
    static toObject(includeInstance: boolean, msg: Mongo): Mongo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Mongo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mongo;
    static deserializeBinaryFromReader(message: Mongo, reader: jspb.BinaryReader): Mongo;
}

export namespace Mongo {
    export type AsObject = {
        value: Uint8Array | string,
        timestamp: number,
    }
}
