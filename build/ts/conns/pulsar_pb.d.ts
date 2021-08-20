// package: protos.conns
// file: conns/pulsar.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Pulsar extends jspb.Message { 
    getDsn(): string;
    setDsn(value: string): Pulsar;
    getConnectTimeout(): string;
    setConnectTimeout(value: string): Pulsar;
    getInsecureTls(): boolean;
    setInsecureTls(value: boolean): Pulsar;
    getTlsClientCert(): Uint8Array | string;
    getTlsClientCert_asU8(): Uint8Array;
    getTlsClientCert_asB64(): string;
    setTlsClientCert(value: Uint8Array | string): Pulsar;
    getTlsClientKey(): Uint8Array | string;
    getTlsClientKey_asU8(): Uint8Array;
    getTlsClientKey_asB64(): string;
    setTlsClientKey(value: Uint8Array | string): Pulsar;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Pulsar.AsObject;
    static toObject(includeInstance: boolean, msg: Pulsar): Pulsar.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Pulsar, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Pulsar;
    static deserializeBinaryFromReader(message: Pulsar, reader: jspb.BinaryReader): Pulsar;
}

export namespace Pulsar {
    export type AsObject = {
        dsn: string,
        connectTimeout: string,
        insecureTls: boolean,
        tlsClientCert: Uint8Array | string,
        tlsClientKey: Uint8Array | string,
    }
}
