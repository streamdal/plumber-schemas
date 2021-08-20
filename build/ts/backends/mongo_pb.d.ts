// package: protos.backends
// file: backends/mongo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Mongo extends jspb.Message { 
    getDatabase(): string;
    setDatabase(value: string): Mongo;
    getCollection(): string;
    setCollection(value: string): Mongo;
    getIncludeFullDocument(): boolean;
    setIncludeFullDocument(value: boolean): Mongo;

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
        database: string,
        collection: string,
        includeFullDocument: boolean,
    }
}
