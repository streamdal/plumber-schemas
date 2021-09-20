// package: protos.args
// file: args/ps_args_pulsar.proto

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

export class PulsarReadArgs extends jspb.Message { 
    getTopic(): string;
    setTopic(value: string): PulsarReadArgs;
    getSubscriptionName(): string;
    setSubscriptionName(value: string): PulsarReadArgs;
    getSubscriptionType(): SubscriptionType;
    setSubscriptionType(value: SubscriptionType): PulsarReadArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PulsarReadArgs.AsObject;
    static toObject(includeInstance: boolean, msg: PulsarReadArgs): PulsarReadArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PulsarReadArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PulsarReadArgs;
    static deserializeBinaryFromReader(message: PulsarReadArgs, reader: jspb.BinaryReader): PulsarReadArgs;
}

export namespace PulsarReadArgs {
    export type AsObject = {
        topic: string,
        subscriptionName: string,
        subscriptionType: SubscriptionType,
    }
}

export class PulsarWriteArgs extends jspb.Message { 
    getTopic(): string;
    setTopic(value: string): PulsarWriteArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PulsarWriteArgs.AsObject;
    static toObject(includeInstance: boolean, msg: PulsarWriteArgs): PulsarWriteArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PulsarWriteArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PulsarWriteArgs;
    static deserializeBinaryFromReader(message: PulsarWriteArgs, reader: jspb.BinaryReader): PulsarWriteArgs;
}

export namespace PulsarWriteArgs {
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
