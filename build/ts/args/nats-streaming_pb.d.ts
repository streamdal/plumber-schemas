// package: protos.args
// file: args/nats-streaming.proto

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

export class NatsStreamingReadOpts extends jspb.Message { 
    getChannel(): string;
    setChannel(value: string): NatsStreamingReadOpts;
    getDurableName(): string;
    setDurableName(value: string): NatsStreamingReadOpts;
    getReadLastAvailable(): boolean;
    setReadLastAvailable(value: boolean): NatsStreamingReadOpts;
    getReadSequenceNumber(): number;
    setReadSequenceNumber(value: number): NatsStreamingReadOpts;
    getReadSince(): string;
    setReadSince(value: string): NatsStreamingReadOpts;
    getReadAll(): boolean;
    setReadAll(value: boolean): NatsStreamingReadOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NatsStreamingReadOpts.AsObject;
    static toObject(includeInstance: boolean, msg: NatsStreamingReadOpts): NatsStreamingReadOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NatsStreamingReadOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NatsStreamingReadOpts;
    static deserializeBinaryFromReader(message: NatsStreamingReadOpts, reader: jspb.BinaryReader): NatsStreamingReadOpts;
}

export namespace NatsStreamingReadOpts {
    export type AsObject = {
        channel: string,
        durableName: string,
        readLastAvailable: boolean,
        readSequenceNumber: number,
        readSince: string,
        readAll: boolean,
    }
}

export class NatsStreamingWriteOpts extends jspb.Message { 
    getChannel(): string;
    setChannel(value: string): NatsStreamingWriteOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NatsStreamingWriteOpts.AsObject;
    static toObject(includeInstance: boolean, msg: NatsStreamingWriteOpts): NatsStreamingWriteOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NatsStreamingWriteOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NatsStreamingWriteOpts;
    static deserializeBinaryFromReader(message: NatsStreamingWriteOpts, reader: jspb.BinaryReader): NatsStreamingWriteOpts;
}

export namespace NatsStreamingWriteOpts {
    export type AsObject = {
        channel: string,
    }
}
