// package: protos.args
// file: args/mqtt.proto

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
    getConnTimeoutSeconds(): number;
    setConnTimeoutSeconds(value: number): MQTTConn;
    getClientId(): string;
    setClientId(value: string): MQTTConn;
    getQosLevel(): number;
    setQosLevel(value: number): MQTTConn;

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
        connTimeoutSeconds: number,
        clientId: string,
        qosLevel: number,
        tlsOptions?: MQTTTLSOptions.AsObject,
    }
}

export class MQTTReadOpts extends jspb.Message { 
    getTopic(): string;
    setTopic(value: string): MQTTReadOpts;
    getReadTimeoutSeconds(): number;
    setReadTimeoutSeconds(value: number): MQTTReadOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MQTTReadOpts.AsObject;
    static toObject(includeInstance: boolean, msg: MQTTReadOpts): MQTTReadOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MQTTReadOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MQTTReadOpts;
    static deserializeBinaryFromReader(message: MQTTReadOpts, reader: jspb.BinaryReader): MQTTReadOpts;
}

export namespace MQTTReadOpts {
    export type AsObject = {
        topic: string,
        readTimeoutSeconds: number,
    }
}

export class MQTTWriteOpts extends jspb.Message { 
    getTopic(): string;
    setTopic(value: string): MQTTWriteOpts;
    getWriteTimeoutSeconds(): number;
    setWriteTimeoutSeconds(value: number): MQTTWriteOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MQTTWriteOpts.AsObject;
    static toObject(includeInstance: boolean, msg: MQTTWriteOpts): MQTTWriteOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MQTTWriteOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MQTTWriteOpts;
    static deserializeBinaryFromReader(message: MQTTWriteOpts, reader: jspb.BinaryReader): MQTTWriteOpts;
}

export namespace MQTTWriteOpts {
    export type AsObject = {
        topic: string,
        writeTimeoutSeconds: number,
    }
}

export enum MQTTQoSLevel {
    MQTT_QOS_LEVEL_AT_MOST_ONCE = 0,
    MQTT_QOS_LEVEL_AT_LEAST_ONCE = 1,
    MQTT_QOS_LEVEL_EXACTLY_ONCE = 2,
}
