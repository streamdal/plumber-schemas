// package: protos.args
// file: args/rabbit-streams.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RabbitStreamsConn extends jspb.Message { 
    getDsn(): string;
    setDsn(value: string): RabbitStreamsConn;
    getUseTls(): boolean;
    setUseTls(value: boolean): RabbitStreamsConn;
    getInsecureTls(): boolean;
    setInsecureTls(value: boolean): RabbitStreamsConn;
    getUsername(): string;
    setUsername(value: string): RabbitStreamsConn;
    getPassword(): string;
    setPassword(value: string): RabbitStreamsConn;
    getClientName(): string;
    setClientName(value: string): RabbitStreamsConn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RabbitStreamsConn.AsObject;
    static toObject(includeInstance: boolean, msg: RabbitStreamsConn): RabbitStreamsConn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RabbitStreamsConn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RabbitStreamsConn;
    static deserializeBinaryFromReader(message: RabbitStreamsConn, reader: jspb.BinaryReader): RabbitStreamsConn;
}

export namespace RabbitStreamsConn {
    export type AsObject = {
        dsn: string,
        useTls: boolean,
        insecureTls: boolean,
        username: string,
        password: string,
        clientName: string,
    }
}

export class RabbitStreamsOffsetOptions extends jspb.Message { 
    getSpecificOffset(): number;
    setSpecificOffset(value: number): RabbitStreamsOffsetOptions;
    getLastOffset(): number;
    setLastOffset(value: number): RabbitStreamsOffsetOptions;
    getLastConsumed(): boolean;
    setLastConsumed(value: boolean): RabbitStreamsOffsetOptions;
    getFirstOffset(): boolean;
    setFirstOffset(value: boolean): RabbitStreamsOffsetOptions;
    getNextOffset(): boolean;
    setNextOffset(value: boolean): RabbitStreamsOffsetOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RabbitStreamsOffsetOptions.AsObject;
    static toObject(includeInstance: boolean, msg: RabbitStreamsOffsetOptions): RabbitStreamsOffsetOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RabbitStreamsOffsetOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RabbitStreamsOffsetOptions;
    static deserializeBinaryFromReader(message: RabbitStreamsOffsetOptions, reader: jspb.BinaryReader): RabbitStreamsOffsetOptions;
}

export namespace RabbitStreamsOffsetOptions {
    export type AsObject = {
        specificOffset: number,
        lastOffset: number,
        lastConsumed: boolean,
        firstOffset: boolean,
        nextOffset: boolean,
    }
}

export class RabbitStreamsReadOpts extends jspb.Message { 
    getStream(): string;
    setStream(value: string): RabbitStreamsReadOpts;
    getDeclareStream(): boolean;
    setDeclareStream(value: boolean): RabbitStreamsReadOpts;
    getDeclareStreamSize(): string;
    setDeclareStreamSize(value: string): RabbitStreamsReadOpts;

    hasOffsetOptions(): boolean;
    clearOffsetOptions(): void;
    getOffsetOptions(): RabbitStreamsOffsetOptions | undefined;
    setOffsetOptions(value?: RabbitStreamsOffsetOptions): RabbitStreamsReadOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RabbitStreamsReadOpts.AsObject;
    static toObject(includeInstance: boolean, msg: RabbitStreamsReadOpts): RabbitStreamsReadOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RabbitStreamsReadOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RabbitStreamsReadOpts;
    static deserializeBinaryFromReader(message: RabbitStreamsReadOpts, reader: jspb.BinaryReader): RabbitStreamsReadOpts;
}

export namespace RabbitStreamsReadOpts {
    export type AsObject = {
        stream: string,
        declareStream: boolean,
        declareStreamSize: string,
        offsetOptions?: RabbitStreamsOffsetOptions.AsObject,
    }
}

export class RabbitStreamsWriteOpts extends jspb.Message { 
    getStream(): string;
    setStream(value: string): RabbitStreamsWriteOpts;
    getDeclareStream(): boolean;
    setDeclareStream(value: boolean): RabbitStreamsWriteOpts;
    getDeclareStreamSize(): string;
    setDeclareStreamSize(value: string): RabbitStreamsWriteOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RabbitStreamsWriteOpts.AsObject;
    static toObject(includeInstance: boolean, msg: RabbitStreamsWriteOpts): RabbitStreamsWriteOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RabbitStreamsWriteOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RabbitStreamsWriteOpts;
    static deserializeBinaryFromReader(message: RabbitStreamsWriteOpts, reader: jspb.BinaryReader): RabbitStreamsWriteOpts;
}

export namespace RabbitStreamsWriteOpts {
    export type AsObject = {
        stream: string,
        declareStream: boolean,
        declareStreamSize: string,
    }
}
