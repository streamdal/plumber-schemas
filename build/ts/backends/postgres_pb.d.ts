// package: protos.backends
// file: backends/postgres.proto

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

export class PostgresReadArgs extends jspb.Message { 
    getReplicationSlotName(): string;
    setReplicationSlotName(value: string): PostgresReadArgs;
    getPublisherName(): string;
    setPublisherName(value: string): PostgresReadArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostgresReadArgs.AsObject;
    static toObject(includeInstance: boolean, msg: PostgresReadArgs): PostgresReadArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostgresReadArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostgresReadArgs;
    static deserializeBinaryFromReader(message: PostgresReadArgs, reader: jspb.BinaryReader): PostgresReadArgs;
}

export namespace PostgresReadArgs {
    export type AsObject = {
        replicationSlotName: string,
        publisherName: string,
    }
}

export class PostgresWriteArgs extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostgresWriteArgs.AsObject;
    static toObject(includeInstance: boolean, msg: PostgresWriteArgs): PostgresWriteArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostgresWriteArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostgresWriteArgs;
    static deserializeBinaryFromReader(message: PostgresWriteArgs, reader: jspb.BinaryReader): PostgresWriteArgs;
}

export namespace PostgresWriteArgs {
    export type AsObject = {
    }
}
