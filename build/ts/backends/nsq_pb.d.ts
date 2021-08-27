// package: protos.backends
// file: backends/nsq.proto

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

export class NSQReadArgs extends jspb.Message { 
    getTopic(): string;
    setTopic(value: string): NSQReadArgs;
    getChannel(): string;
    setChannel(value: string): NSQReadArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NSQReadArgs.AsObject;
    static toObject(includeInstance: boolean, msg: NSQReadArgs): NSQReadArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NSQReadArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NSQReadArgs;
    static deserializeBinaryFromReader(message: NSQReadArgs, reader: jspb.BinaryReader): NSQReadArgs;
}

export namespace NSQReadArgs {
    export type AsObject = {
        topic: string,
        channel: string,
    }
}

export class NSQWriteArgs extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NSQWriteArgs.AsObject;
    static toObject(includeInstance: boolean, msg: NSQWriteArgs): NSQWriteArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NSQWriteArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NSQWriteArgs;
    static deserializeBinaryFromReader(message: NSQWriteArgs, reader: jspb.BinaryReader): NSQWriteArgs;
}

export namespace NSQWriteArgs {
    export type AsObject = {
    }
}
