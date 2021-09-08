// package: protos.args
// file: args/nsq.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class NSQConn extends jspb.Message { 
    getNsqdAddress(): string;
    setNsqdAddress(value: string): NSQConn;
    getLookupdAddress(): string;
    setLookupdAddress(value: string): NSQConn;
    getUseTls(): boolean;
    setUseTls(value: boolean): NSQConn;
    getInsecureTls(): boolean;
    setInsecureTls(value: boolean): NSQConn;
    getTlsCaCert(): Uint8Array | string;
    getTlsCaCert_asU8(): Uint8Array;
    getTlsCaCert_asB64(): string;
    setTlsCaCert(value: Uint8Array | string): NSQConn;
    getTlsClientCert(): Uint8Array | string;
    getTlsClientCert_asU8(): Uint8Array;
    getTlsClientCert_asB64(): string;
    setTlsClientCert(value: Uint8Array | string): NSQConn;
    getTlsClientKey(): Uint8Array | string;
    getTlsClientKey_asU8(): Uint8Array;
    getTlsClientKey_asB64(): string;
    setTlsClientKey(value: Uint8Array | string): NSQConn;
    getAuthSecret(): string;
    setAuthSecret(value: string): NSQConn;
    getClientId(): string;
    setClientId(value: string): NSQConn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NSQConn.AsObject;
    static toObject(includeInstance: boolean, msg: NSQConn): NSQConn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NSQConn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NSQConn;
    static deserializeBinaryFromReader(message: NSQConn, reader: jspb.BinaryReader): NSQConn;
}

export namespace NSQConn {
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

export class NSQReadOpts extends jspb.Message { 
    getTopic(): string;
    setTopic(value: string): NSQReadOpts;
    getChannel(): string;
    setChannel(value: string): NSQReadOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NSQReadOpts.AsObject;
    static toObject(includeInstance: boolean, msg: NSQReadOpts): NSQReadOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NSQReadOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NSQReadOpts;
    static deserializeBinaryFromReader(message: NSQReadOpts, reader: jspb.BinaryReader): NSQReadOpts;
}

export namespace NSQReadOpts {
    export type AsObject = {
        topic: string,
        channel: string,
    }
}

export class NSQWriteOpts extends jspb.Message { 
    getTopic(): string;
    setTopic(value: string): NSQWriteOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NSQWriteOpts.AsObject;
    static toObject(includeInstance: boolean, msg: NSQWriteOpts): NSQWriteOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NSQWriteOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NSQWriteOpts;
    static deserializeBinaryFromReader(message: NSQWriteOpts, reader: jspb.BinaryReader): NSQWriteOpts;
}

export namespace NSQWriteOpts {
    export type AsObject = {
        topic: string,
    }
}
