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

export class MongoReadArgs extends jspb.Message { 
    getDatabase(): string;
    setDatabase(value: string): MongoReadArgs;
    getCollection(): string;
    setCollection(value: string): MongoReadArgs;
    getIncludeFullDocument(): boolean;
    setIncludeFullDocument(value: boolean): MongoReadArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongoReadArgs.AsObject;
    static toObject(includeInstance: boolean, msg: MongoReadArgs): MongoReadArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongoReadArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongoReadArgs;
    static deserializeBinaryFromReader(message: MongoReadArgs, reader: jspb.BinaryReader): MongoReadArgs;
}

export namespace MongoReadArgs {
    export type AsObject = {
        database: string,
        collection: string,
        includeFullDocument: boolean,
    }
}
