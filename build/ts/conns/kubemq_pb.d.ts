// package: protos.conns
// file: conns/kubemq.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class KubeMQ extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): KubeMQ;
    getClientId(): string;
    setClientId(value: string): KubeMQ;
    getTlsCertificate(): Uint8Array | string;
    getTlsCertificate_asU8(): Uint8Array;
    getTlsCertificate_asB64(): string;
    setTlsCertificate(value: Uint8Array | string): KubeMQ;
    getAuthToken(): string;
    setAuthToken(value: string): KubeMQ;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KubeMQ.AsObject;
    static toObject(includeInstance: boolean, msg: KubeMQ): KubeMQ.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KubeMQ, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KubeMQ;
    static deserializeBinaryFromReader(message: KubeMQ, reader: jspb.BinaryReader): KubeMQ;
}

export namespace KubeMQ {
    export type AsObject = {
        address: string,
        clientId: string,
        tlsCertificate: Uint8Array | string,
        authToken: string,
    }
}
