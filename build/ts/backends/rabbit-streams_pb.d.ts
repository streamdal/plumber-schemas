// package: protos.backends
// file: backends/rabbit-streams.proto

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

export class RabbitStreamsReadArgs extends jspb.Message { 
    getStream(): string;
    setStream(value: string): RabbitStreamsReadArgs;
    getDeclareStream(): boolean;
    setDeclareStream(value: boolean): RabbitStreamsReadArgs;
    getDeclareStreamSize(): string;
    setDeclareStreamSize(value: string): RabbitStreamsReadArgs;

    hasOffsetOptions(): boolean;
    clearOffsetOptions(): void;
    getOffsetOptions(): RabbitStreamsOffsetOptions | undefined;
    setOffsetOptions(value?: RabbitStreamsOffsetOptions): RabbitStreamsReadArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RabbitStreamsReadArgs.AsObject;
    static toObject(includeInstance: boolean, msg: RabbitStreamsReadArgs): RabbitStreamsReadArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RabbitStreamsReadArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RabbitStreamsReadArgs;
    static deserializeBinaryFromReader(message: RabbitStreamsReadArgs, reader: jspb.BinaryReader): RabbitStreamsReadArgs;
}

export namespace RabbitStreamsReadArgs {
    export type AsObject = {
        stream: string,
        declareStream: boolean,
        declareStreamSize: string,
        offsetOptions?: RabbitStreamsOffsetOptions.AsObject,
    }
}

export class RabbitStreamsWriteArgs extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RabbitStreamsWriteArgs.AsObject;
    static toObject(includeInstance: boolean, msg: RabbitStreamsWriteArgs): RabbitStreamsWriteArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RabbitStreamsWriteArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RabbitStreamsWriteArgs;
    static deserializeBinaryFromReader(message: RabbitStreamsWriteArgs, reader: jspb.BinaryReader): RabbitStreamsWriteArgs;
}

export namespace RabbitStreamsWriteArgs {
    export type AsObject = {
    }
}
