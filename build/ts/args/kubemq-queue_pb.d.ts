// package: protos.args
// file: args/kubemq-queue.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class KubeMQQueueConn extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): KubeMQQueueConn;
    getAuthToken(): string;
    setAuthToken(value: string): KubeMQQueueConn;
    getTlsCertFile(): string;
    setTlsCertFile(value: string): KubeMQQueueConn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KubeMQQueueConn.AsObject;
    static toObject(includeInstance: boolean, msg: KubeMQQueueConn): KubeMQQueueConn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KubeMQQueueConn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KubeMQQueueConn;
    static deserializeBinaryFromReader(message: KubeMQQueueConn, reader: jspb.BinaryReader): KubeMQQueueConn;
}

export namespace KubeMQQueueConn {
    export type AsObject = {
        address: string,
        authToken: string,
        tlsCertFile: string,
    }
}

export class KubeMQQueueReadOpts extends jspb.Message { 
    getClientId(): string;
    setClientId(value: string): KubeMQQueueReadOpts;
    getQueueName(): string;
    setQueueName(value: string): KubeMQQueueReadOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KubeMQQueueReadOpts.AsObject;
    static toObject(includeInstance: boolean, msg: KubeMQQueueReadOpts): KubeMQQueueReadOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KubeMQQueueReadOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KubeMQQueueReadOpts;
    static deserializeBinaryFromReader(message: KubeMQQueueReadOpts, reader: jspb.BinaryReader): KubeMQQueueReadOpts;
}

export namespace KubeMQQueueReadOpts {
    export type AsObject = {
        clientId: string,
        queueName: string,
    }
}

export class KubeMQQueueWriteOpts extends jspb.Message { 
    getClientId(): string;
    setClientId(value: string): KubeMQQueueWriteOpts;
    getQueueName(): string;
    setQueueName(value: string): KubeMQQueueWriteOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KubeMQQueueWriteOpts.AsObject;
    static toObject(includeInstance: boolean, msg: KubeMQQueueWriteOpts): KubeMQQueueWriteOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KubeMQQueueWriteOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KubeMQQueueWriteOpts;
    static deserializeBinaryFromReader(message: KubeMQQueueWriteOpts, reader: jspb.BinaryReader): KubeMQQueueWriteOpts;
}

export namespace KubeMQQueueWriteOpts {
    export type AsObject = {
        clientId: string,
        queueName: string,
    }
}
