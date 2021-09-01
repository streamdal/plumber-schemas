// package: protos.backends
// file: backends/mqtt.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class MQTTTLSOptions extends jspb.Message { 
    getCaFile(): string;
    setCaFile(value: string): MQTTTLSOptions;
    getCertFile(): string;
    setCertFile(value: string): MQTTTLSOptions;
    getKeyFile(): string;
    setKeyFile(value: string): MQTTTLSOptions;
    getSkipVerify(): boolean;
    setSkipVerify(value: boolean): MQTTTLSOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MQTTTLSOptions.AsObject;
    static toObject(includeInstance: boolean, msg: MQTTTLSOptions): MQTTTLSOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MQTTTLSOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MQTTTLSOptions;
    static deserializeBinaryFromReader(message: MQTTTLSOptions, reader: jspb.BinaryReader): MQTTTLSOptions;
}

export namespace MQTTTLSOptions {
    export type AsObject = {
        caFile: string,
        certFile: string,
        keyFile: string,
        skipVerify: boolean,
    }
}

export class MQTTConn extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): MQTTConn;
    getTopic(): string;
    setTopic(value: string): MQTTConn;
    getConnTimeoutSeconds(): number;
    setConnTimeoutSeconds(value: number): MQTTConn;
    getClientId(): string;
    setClientId(value: string): MQTTConn;
    getQosLevel(): MQTTQoSLevel;
    setQosLevel(value: MQTTQoSLevel): MQTTConn;

    hasTlsOptions(): boolean;
    clearTlsOptions(): void;
    getTlsOptions(): MQTTTLSOptions | undefined;
    setTlsOptions(value?: MQTTTLSOptions): MQTTConn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MQTTConn.AsObject;
    static toObject(includeInstance: boolean, msg: MQTTConn): MQTTConn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MQTTConn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MQTTConn;
    static deserializeBinaryFromReader(message: MQTTConn, reader: jspb.BinaryReader): MQTTConn;
}

export namespace MQTTConn {
    export type AsObject = {
        address: string,
        topic: string,
        connTimeoutSeconds: number,
        clientId: string,
        qosLevel: MQTTQoSLevel,
        tlsOptions?: MQTTTLSOptions.AsObject,
    }
}

export class MQTTReadArgs extends jspb.Message { 
    getReadTimeoutSeconds(): number;
    setReadTimeoutSeconds(value: number): MQTTReadArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MQTTReadArgs.AsObject;
    static toObject(includeInstance: boolean, msg: MQTTReadArgs): MQTTReadArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MQTTReadArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MQTTReadArgs;
    static deserializeBinaryFromReader(message: MQTTReadArgs, reader: jspb.BinaryReader): MQTTReadArgs;
}

export namespace MQTTReadArgs {
    export type AsObject = {
        readTimeoutSeconds: number,
    }
}

export class MQTTWriteArgs extends jspb.Message { 
    getWriteTimeoutSeconds(): number;
    setWriteTimeoutSeconds(value: number): MQTTWriteArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MQTTWriteArgs.AsObject;
    static toObject(includeInstance: boolean, msg: MQTTWriteArgs): MQTTWriteArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MQTTWriteArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MQTTWriteArgs;
    static deserializeBinaryFromReader(message: MQTTWriteArgs, reader: jspb.BinaryReader): MQTTWriteArgs;
}

export namespace MQTTWriteArgs {
    export type AsObject = {
        writeTimeoutSeconds: number,
    }
}

export enum MQTTQoSLevel {
    AT_MOST_ONCE = 0,
    AT_LEAST_ONCE = 1,
    EXACTLY_ONCE = 2,
}
