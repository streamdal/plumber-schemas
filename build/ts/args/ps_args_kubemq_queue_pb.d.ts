// package: protos.args
// file: args/ps_args_kubemq_queue.proto

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

export class KubeMQQueueReadArgs extends jspb.Message { 
    getClientId(): string;
    setClientId(value: string): KubeMQQueueReadArgs;
    getQueueName(): string;
    setQueueName(value: string): KubeMQQueueReadArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KubeMQQueueReadArgs.AsObject;
    static toObject(includeInstance: boolean, msg: KubeMQQueueReadArgs): KubeMQQueueReadArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KubeMQQueueReadArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KubeMQQueueReadArgs;
    static deserializeBinaryFromReader(message: KubeMQQueueReadArgs, reader: jspb.BinaryReader): KubeMQQueueReadArgs;
}

export namespace KubeMQQueueReadArgs {
    export type AsObject = {
        clientId: string,
        queueName: string,
    }
}

export class KubeMQQueueWriteArgs extends jspb.Message { 
    getClientId(): string;
    setClientId(value: string): KubeMQQueueWriteArgs;
    getQueueName(): string;
    setQueueName(value: string): KubeMQQueueWriteArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KubeMQQueueWriteArgs.AsObject;
    static toObject(includeInstance: boolean, msg: KubeMQQueueWriteArgs): KubeMQQueueWriteArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KubeMQQueueWriteArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KubeMQQueueWriteArgs;
    static deserializeBinaryFromReader(message: KubeMQQueueWriteArgs, reader: jspb.BinaryReader): KubeMQQueueWriteArgs;
}

export namespace KubeMQQueueWriteArgs {
    export type AsObject = {
        clientId: string,
        queueName: string,
    }
}
