// package: protos.conns
// file: conns/nsq.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class NSQ extends jspb.Message { 
    getNsqdAddress(): string;
    setNsqdAddress(value: string): NSQ;
    getLookupdAddress(): string;
    setLookupdAddress(value: string): NSQ;
    getUseTls(): boolean;
    setUseTls(value: boolean): NSQ;
    getInsecureTls(): boolean;
    setInsecureTls(value: boolean): NSQ;
    getTlsCaCert(): Uint8Array | string;
    getTlsCaCert_asU8(): Uint8Array;
    getTlsCaCert_asB64(): string;
    setTlsCaCert(value: Uint8Array | string): NSQ;
    getTlsClientCert(): Uint8Array | string;
    getTlsClientCert_asU8(): Uint8Array;
    getTlsClientCert_asB64(): string;
    setTlsClientCert(value: Uint8Array | string): NSQ;
    getTlsClientKey(): Uint8Array | string;
    getTlsClientKey_asU8(): Uint8Array;
    getTlsClientKey_asB64(): string;
    setTlsClientKey(value: Uint8Array | string): NSQ;
    getAuthSecret(): string;
    setAuthSecret(value: string): NSQ;
    getClientId(): string;
    setClientId(value: string): NSQ;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NSQ.AsObject;
    static toObject(includeInstance: boolean, msg: NSQ): NSQ.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NSQ, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NSQ;
    static deserializeBinaryFromReader(message: NSQ, reader: jspb.BinaryReader): NSQ;
}

export namespace NSQ {
    export type AsObject = {
        nsqdAddress: string,
        lookupdAddress: string,
        useTls: boolean,
        insecureTls: boolean,
        tlsCaCert: Uint8Array | string,
        tlsClientCert: Uint8Array | string,
        tlsClientKey: Uint8Array | string,
        authSecret: string,
        clientId: string,
    }
}
