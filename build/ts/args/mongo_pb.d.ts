// package: protos.args
// file: args/mongo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class MongoConn extends jspb.Message { 
    getDsn(): string;
    setDsn(value: string): MongoConn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongoConn.AsObject;
    static toObject(includeInstance: boolean, msg: MongoConn): MongoConn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongoConn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongoConn;
    static deserializeBinaryFromReader(message: MongoConn, reader: jspb.BinaryReader): MongoConn;
}

export namespace MongoConn {
    export type AsObject = {
        dsn: string,
    }
}

export class MongoReadOpts extends jspb.Message { 
    getDatabase(): string;
    setDatabase(value: string): MongoReadOpts;
    getCollection(): string;
    setCollection(value: string): MongoReadOpts;
    getIncludeFullDocument(): boolean;
    setIncludeFullDocument(value: boolean): MongoReadOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongoReadOpts.AsObject;
    static toObject(includeInstance: boolean, msg: MongoReadOpts): MongoReadOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongoReadOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongoReadOpts;
    static deserializeBinaryFromReader(message: MongoReadOpts, reader: jspb.BinaryReader): MongoReadOpts;
}

export namespace MongoReadOpts {
    export type AsObject = {
        database: string,
        collection: string,
        includeFullDocument: boolean,
    }
}
