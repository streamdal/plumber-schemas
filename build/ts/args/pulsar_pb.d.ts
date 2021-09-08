// package: protos.args
// file: args/pulsar.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class PulsarConn extends jspb.Message { 
    getDsn(): string;
    setDsn(value: string): PulsarConn;
    getConnectTimeoutSeconds(): number;
    setConnectTimeoutSeconds(value: number): PulsarConn;
    getInsecureTls(): boolean;
    setInsecureTls(value: boolean): PulsarConn;
    getTlsClientCert(): Uint8Array | string;
    getTlsClientCert_asU8(): Uint8Array;
    getTlsClientCert_asB64(): string;
    setTlsClientCert(value: Uint8Array | string): PulsarConn;
    getTlsClientKey(): Uint8Array | string;
    getTlsClientKey_asU8(): Uint8Array;
    getTlsClientKey_asB64(): string;
    setTlsClientKey(value: Uint8Array | string): PulsarConn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PulsarConn.AsObject;
    static toObject(includeInstance: boolean, msg: PulsarConn): PulsarConn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PulsarConn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PulsarConn;
    static deserializeBinaryFromReader(message: PulsarConn, reader: jspb.BinaryReader): PulsarConn;
}

export namespace PulsarConn {
    export type AsObject = {
        dsn: string,
        connectTimeoutSeconds: number,
        insecureTls: boolean,
        tlsClientCert: Uint8Array | string,
        tlsClientKey: Uint8Array | string,
    }
}

export class PulsarReadOpts extends jspb.Message { 
    getTopic(): string;
    setTopic(value: string): PulsarReadOpts;
    getSubscriptionName(): string;
    setSubscriptionName(value: string): PulsarReadOpts;
    getSubscriptionType(): SubscriptionType;
    setSubscriptionType(value: SubscriptionType): PulsarReadOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PulsarReadOpts.AsObject;
    static toObject(includeInstance: boolean, msg: PulsarReadOpts): PulsarReadOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PulsarReadOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PulsarReadOpts;
    static deserializeBinaryFromReader(message: PulsarReadOpts, reader: jspb.BinaryReader): PulsarReadOpts;
}

export namespace PulsarReadOpts {
    export type AsObject = {
        topic: string,
        subscriptionName: string,
        subscriptionType: SubscriptionType,
    }
}

export class PulsarWriteOpts extends jspb.Message { 
    getTopic(): string;
    setTopic(value: string): PulsarWriteOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PulsarWriteOpts.AsObject;
    static toObject(includeInstance: boolean, msg: PulsarWriteOpts): PulsarWriteOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PulsarWriteOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PulsarWriteOpts;
    static deserializeBinaryFromReader(message: PulsarWriteOpts, reader: jspb.BinaryReader): PulsarWriteOpts;
}

export namespace PulsarWriteOpts {
    export type AsObject = {
        topic: string,
    }
}

export enum SubscriptionType {
    SHARED = 0,
    EXCLUSIVE = 1,
    FAILOVER = 2,
    KEYSHARED = 3,
}
