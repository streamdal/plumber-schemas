// package: protos.args
// file: args/nats.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class NatsConn extends jspb.Message { 
    getDsn(): string;
    setDsn(value: string): NatsConn;
    getInsecureTls(): boolean;
    setInsecureTls(value: boolean): NatsConn;
    getTlsCaCert(): Uint8Array | string;
    getTlsCaCert_asU8(): Uint8Array;
    getTlsCaCert_asB64(): string;
    setTlsCaCert(value: Uint8Array | string): NatsConn;
    getTlsClientCert(): Uint8Array | string;
    getTlsClientCert_asU8(): Uint8Array;
    getTlsClientCert_asB64(): string;
    setTlsClientCert(value: Uint8Array | string): NatsConn;
    getTlsClientKey(): Uint8Array | string;
    getTlsClientKey_asU8(): Uint8Array;
    getTlsClientKey_asB64(): string;
    setTlsClientKey(value: Uint8Array | string): NatsConn;
    getUserCredentials(): Uint8Array | string;
    getUserCredentials_asU8(): Uint8Array;
    getUserCredentials_asB64(): string;
    setUserCredentials(value: Uint8Array | string): NatsConn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NatsConn.AsObject;
    static toObject(includeInstance: boolean, msg: NatsConn): NatsConn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NatsConn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NatsConn;
    static deserializeBinaryFromReader(message: NatsConn, reader: jspb.BinaryReader): NatsConn;
}

export namespace NatsConn {
    export type AsObject = {
        dsn: string,
        insecureTls: boolean,
        tlsCaCert: Uint8Array | string,
        tlsClientCert: Uint8Array | string,
        tlsClientKey: Uint8Array | string,
        userCredentials: Uint8Array | string,
    }
}

export class NatsReadArgs extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): NatsReadArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NatsReadArgs.AsObject;
    static toObject(includeInstance: boolean, msg: NatsReadArgs): NatsReadArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NatsReadArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NatsReadArgs;
    static deserializeBinaryFromReader(message: NatsReadArgs, reader: jspb.BinaryReader): NatsReadArgs;
}

export namespace NatsReadArgs {
    export type AsObject = {
        subject: string,
    }
}

export class NatsWriteArgs extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): NatsWriteArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NatsWriteArgs.AsObject;
    static toObject(includeInstance: boolean, msg: NatsWriteArgs): NatsWriteArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NatsWriteArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NatsWriteArgs;
    static deserializeBinaryFromReader(message: NatsWriteArgs, reader: jspb.BinaryReader): NatsWriteArgs;
}

export namespace NatsWriteArgs {
    export type AsObject = {
        subject: string,
    }
}
