// package: protos.conns
// file: conns/nats.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Nats extends jspb.Message { 
    getDsn(): string;
    setDsn(value: string): Nats;
    getInsecureTls(): boolean;
    setInsecureTls(value: boolean): Nats;
    getTlsCaCert(): Uint8Array | string;
    getTlsCaCert_asU8(): Uint8Array;
    getTlsCaCert_asB64(): string;
    setTlsCaCert(value: Uint8Array | string): Nats;
    getTlsClientCert(): Uint8Array | string;
    getTlsClientCert_asU8(): Uint8Array;
    getTlsClientCert_asB64(): string;
    setTlsClientCert(value: Uint8Array | string): Nats;
    getTlsClientKey(): Uint8Array | string;
    getTlsClientKey_asU8(): Uint8Array;
    getTlsClientKey_asB64(): string;
    setTlsClientKey(value: Uint8Array | string): Nats;
    getUserCredentials(): Uint8Array | string;
    getUserCredentials_asU8(): Uint8Array;
    getUserCredentials_asB64(): string;
    setUserCredentials(value: Uint8Array | string): Nats;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Nats.AsObject;
    static toObject(includeInstance: boolean, msg: Nats): Nats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Nats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Nats;
    static deserializeBinaryFromReader(message: Nats, reader: jspb.BinaryReader): Nats;
}

export namespace Nats {
    export type AsObject = {
        dsn: string,
        insecureTls: boolean,
        tlsCaCert: Uint8Array | string,
        tlsClientCert: Uint8Array | string,
        tlsClientKey: Uint8Array | string,
        userCredentials: Uint8Array | string,
    }
}
