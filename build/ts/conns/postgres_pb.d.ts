// package: protos.conns
// file: conns/postgres.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Postgres extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): Postgres;
    getPort(): number;
    setPort(value: number): Postgres;
    getUsername(): string;
    setUsername(value: string): Postgres;
    getPassword(): string;
    setPassword(value: string): Postgres;
    getDatabase(): string;
    setDatabase(value: string): Postgres;
    getUseTls(): boolean;
    setUseTls(value: boolean): Postgres;
    getInsecureTls(): boolean;
    setInsecureTls(value: boolean): Postgres;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Postgres.AsObject;
    static toObject(includeInstance: boolean, msg: Postgres): Postgres.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Postgres, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Postgres;
    static deserializeBinaryFromReader(message: Postgres, reader: jspb.BinaryReader): Postgres;
}

export namespace Postgres {
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
