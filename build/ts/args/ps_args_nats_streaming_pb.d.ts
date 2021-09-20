// package: protos.args
// file: args/ps_args_nats_streaming.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class NatsStreamingConn extends jspb.Message { 
    getDsn(): string;
    setDsn(value: string): NatsStreamingConn;
    getInsecureTls(): boolean;
    setInsecureTls(value: boolean): NatsStreamingConn;
    getTlsCaCert(): Uint8Array | string;
    getTlsCaCert_asU8(): Uint8Array;
    getTlsCaCert_asB64(): string;
    setTlsCaCert(value: Uint8Array | string): NatsStreamingConn;
    getTlsClientCert(): Uint8Array | string;
    getTlsClientCert_asU8(): Uint8Array;
    getTlsClientCert_asB64(): string;
    setTlsClientCert(value: Uint8Array | string): NatsStreamingConn;
    getTlsClientKey(): Uint8Array | string;
    getTlsClientKey_asU8(): Uint8Array;
    getTlsClientKey_asB64(): string;
    setTlsClientKey(value: Uint8Array | string): NatsStreamingConn;
    getUserCredentials(): Uint8Array | string;
    getUserCredentials_asU8(): Uint8Array;
    getUserCredentials_asB64(): string;
    setUserCredentials(value: Uint8Array | string): NatsStreamingConn;
    getClusterId(): string;
    setClusterId(value: string): NatsStreamingConn;
    getClientId(): string;
    setClientId(value: string): NatsStreamingConn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NatsStreamingConn.AsObject;
    static toObject(includeInstance: boolean, msg: NatsStreamingConn): NatsStreamingConn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NatsStreamingConn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NatsStreamingConn;
    static deserializeBinaryFromReader(message: NatsStreamingConn, reader: jspb.BinaryReader): NatsStreamingConn;
}

export namespace NatsStreamingConn {
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

export class NatsStreamingReadArgs extends jspb.Message { 
    getChannel(): string;
    setChannel(value: string): NatsStreamingReadArgs;
    getDurableName(): string;
    setDurableName(value: string): NatsStreamingReadArgs;
    getReadLastAvailable(): boolean;
    setReadLastAvailable(value: boolean): NatsStreamingReadArgs;
    getReadSequenceNumber(): number;
    setReadSequenceNumber(value: number): NatsStreamingReadArgs;
    getReadSince(): string;
    setReadSince(value: string): NatsStreamingReadArgs;
    getReadAll(): boolean;
    setReadAll(value: boolean): NatsStreamingReadArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NatsStreamingReadArgs.AsObject;
    static toObject(includeInstance: boolean, msg: NatsStreamingReadArgs): NatsStreamingReadArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NatsStreamingReadArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NatsStreamingReadArgs;
    static deserializeBinaryFromReader(message: NatsStreamingReadArgs, reader: jspb.BinaryReader): NatsStreamingReadArgs;
}

export namespace NatsStreamingReadArgs {
    export type AsObject = {
        channel: string,
        durableName: string,
        readLastAvailable: boolean,
        readSequenceNumber: number,
        readSince: string,
        readAll: boolean,
    }
}

export class NatsStreamingWriteArgs extends jspb.Message { 
    getChannel(): string;
    setChannel(value: string): NatsStreamingWriteArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NatsStreamingWriteArgs.AsObject;
    static toObject(includeInstance: boolean, msg: NatsStreamingWriteArgs): NatsStreamingWriteArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NatsStreamingWriteArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NatsStreamingWriteArgs;
    static deserializeBinaryFromReader(message: NatsStreamingWriteArgs, reader: jspb.BinaryReader): NatsStreamingWriteArgs;
}

export namespace NatsStreamingWriteArgs {
    export type AsObject = {
        channel: string,
    }
}
