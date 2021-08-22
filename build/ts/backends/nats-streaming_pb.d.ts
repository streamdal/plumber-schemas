// package: protos.backends
// file: backends/nats-streaming.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class NatsStreaming extends jspb.Message { 
    getChannel(): string;
    setChannel(value: string): NatsStreaming;
    getDurableName(): string;
    setDurableName(value: string): NatsStreaming;

    hasLastAvailable(): boolean;
    clearLastAvailable(): void;
    getLastAvailable(): ReadLastAvailable | undefined;
    setLastAvailable(value?: ReadLastAvailable): NatsStreaming;

    hasReadSequenceNumber(): boolean;
    clearReadSequenceNumber(): void;
    getReadSequenceNumber(): ReadSequenceNumber | undefined;
    setReadSequenceNumber(value?: ReadSequenceNumber): NatsStreaming;

    hasReadSince(): boolean;
    clearReadSince(): void;
    getReadSince(): ReadSince | undefined;
    setReadSince(value?: ReadSince): NatsStreaming;

    hasAll(): boolean;
    clearAll(): void;
    getAll(): ReadAll | undefined;
    setAll(value?: ReadAll): NatsStreaming;

    getReadOptionCase(): NatsStreaming.ReadOptionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NatsStreaming.AsObject;
    static toObject(includeInstance: boolean, msg: NatsStreaming): NatsStreaming.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NatsStreaming, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NatsStreaming;
    static deserializeBinaryFromReader(message: NatsStreaming, reader: jspb.BinaryReader): NatsStreaming;
}

export namespace NatsStreaming {
    export type AsObject = {
        channel: string,
        durableName: string,
        lastAvailable?: ReadLastAvailable.AsObject,
        readSequenceNumber?: ReadSequenceNumber.AsObject,
        readSince?: ReadSince.AsObject,
        all?: ReadAll.AsObject,
    }

    export enum ReadOptionCase {
        READ_OPTION_NOT_SET = 0,
        LAST_AVAILABLE = 100,
        READ_SEQUENCE_NUMBER = 101,
        READ_SINCE = 102,
        ALL = 103,
    }

}

export class ReadLastAvailable extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadLastAvailable.AsObject;
    static toObject(includeInstance: boolean, msg: ReadLastAvailable): ReadLastAvailable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadLastAvailable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadLastAvailable;
    static deserializeBinaryFromReader(message: ReadLastAvailable, reader: jspb.BinaryReader): ReadLastAvailable;
}

export namespace ReadLastAvailable {
    export type AsObject = {
    }
}

export class ReadSequenceNumber extends jspb.Message { 
    getSequenceNumber(): number;
    setSequenceNumber(value: number): ReadSequenceNumber;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadSequenceNumber.AsObject;
    static toObject(includeInstance: boolean, msg: ReadSequenceNumber): ReadSequenceNumber.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadSequenceNumber, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadSequenceNumber;
    static deserializeBinaryFromReader(message: ReadSequenceNumber, reader: jspb.BinaryReader): ReadSequenceNumber;
}

export namespace ReadSequenceNumber {
    export type AsObject = {
        sequenceNumber: number,
    }
}

export class ReadSince extends jspb.Message { 
    getSince(): string;
    setSince(value: string): ReadSince;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadSince.AsObject;
    static toObject(includeInstance: boolean, msg: ReadSince): ReadSince.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadSince, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadSince;
    static deserializeBinaryFromReader(message: ReadSince, reader: jspb.BinaryReader): ReadSince;
}

export namespace ReadSince {
    export type AsObject = {
        since: string,
    }
}

export class ReadAll extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadAll.AsObject;
    static toObject(includeInstance: boolean, msg: ReadAll): ReadAll.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadAll, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadAll;
    static deserializeBinaryFromReader(message: ReadAll, reader: jspb.BinaryReader): ReadAll;
}

export namespace ReadAll {
    export type AsObject = {
    }
}
