// package: protos.conns
// file: conns/nats-streaming.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class NatsStreaming extends jspb.Message { 
    getDsn(): string;
    setDsn(value: string): NatsStreaming;
    getInsecureTls(): boolean;
    setInsecureTls(value: boolean): NatsStreaming;
    getTlsCaCert(): Uint8Array | string;
    getTlsCaCert_asU8(): Uint8Array;
    getTlsCaCert_asB64(): string;
    setTlsCaCert(value: Uint8Array | string): NatsStreaming;
    getTlsClientCert(): Uint8Array | string;
    getTlsClientCert_asU8(): Uint8Array;
    getTlsClientCert_asB64(): string;
    setTlsClientCert(value: Uint8Array | string): NatsStreaming;
    getTlsClientKey(): Uint8Array | string;
    getTlsClientKey_asU8(): Uint8Array;
    getTlsClientKey_asB64(): string;
    setTlsClientKey(value: Uint8Array | string): NatsStreaming;
    getUserCredentials(): Uint8Array | string;
    getUserCredentials_asU8(): Uint8Array;
    getUserCredentials_asB64(): string;
    setUserCredentials(value: Uint8Array | string): NatsStreaming;
    getClusterId(): string;
    setClusterId(value: string): NatsStreaming;
    getClientId(): string;
    setClientId(value: string): NatsStreaming;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NatsStreaming.AsObject;
    static toObject(includeInstance: boolean, msg: NatsStreaming): NatsStreaming.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NatsStreaming, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NatsStreaming;
    static deserializeBinaryFromReader(message: NatsStreaming, reader: jspb.BinaryReader): NatsStreaming;
}

export namespace NatsStreaming {
    export type AsObject = {
        dsn: string,
        insecureTls: boolean,
        tlsCaCert: Uint8Array | string,
        tlsClientCert: Uint8Array | string,
        tlsClientKey: Uint8Array | string,
        userCredentials: Uint8Array | string,
        clusterId: string,
        clientId: string,
    }
}
