// package: protos.args
// file: args/postgres.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class PostgresConn extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): PostgresConn;
    getPort(): number;
    setPort(value: number): PostgresConn;
    getUsername(): string;
    setUsername(value: string): PostgresConn;
    getPassword(): string;
    setPassword(value: string): PostgresConn;
    getDatabase(): string;
    setDatabase(value: string): PostgresConn;
    getUseTls(): boolean;
    setUseTls(value: boolean): PostgresConn;
    getInsecureTls(): boolean;
    setInsecureTls(value: boolean): PostgresConn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostgresConn.AsObject;
    static toObject(includeInstance: boolean, msg: PostgresConn): PostgresConn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostgresConn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostgresConn;
    static deserializeBinaryFromReader(message: PostgresConn, reader: jspb.BinaryReader): PostgresConn;
}

export namespace PostgresConn {
    export type AsObject = {
        address: string,
        port: number,
        username: string,
        password: string,
        database: string,
        useTls: boolean,
        insecureTls: boolean,
    }
}

export class PostgresReadOpts extends jspb.Message { 
    getReplicationSlotName(): string;
    setReplicationSlotName(value: string): PostgresReadOpts;
    getPublisherName(): string;
    setPublisherName(value: string): PostgresReadOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostgresReadOpts.AsObject;
    static toObject(includeInstance: boolean, msg: PostgresReadOpts): PostgresReadOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostgresReadOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostgresReadOpts;
    static deserializeBinaryFromReader(message: PostgresReadOpts, reader: jspb.BinaryReader): PostgresReadOpts;
}

export namespace PostgresReadOpts {
    export type AsObject = {
        replicationSlotName: string,
        publisherName: string,
    }
}
