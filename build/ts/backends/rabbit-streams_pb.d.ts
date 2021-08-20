// package: protos.backends
// file: backends/rabbit-streams.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RabbitStreams extends jspb.Message { 
    getStream(): string;
    setStream(value: string): RabbitStreams;

    hasDeclareStream(): boolean;
    clearDeclareStream(): void;
    getDeclareStream(): DeclareStream | undefined;
    setDeclareStream(value?: DeclareStream): RabbitStreams;

    hasOffset(): boolean;
    clearOffset(): void;
    getOffset(): SpecificOffset | undefined;
    setOffset(value?: SpecificOffset): RabbitStreams;

    hasLastOffset(): boolean;
    clearLastOffset(): void;
    getLastOffset(): LastOffset | undefined;
    setLastOffset(value?: LastOffset): RabbitStreams;

    hasLastConsumed(): boolean;
    clearLastConsumed(): void;
    getLastConsumed(): LastConsumed | undefined;
    setLastConsumed(value?: LastConsumed): RabbitStreams;

    hasFirstOffset(): boolean;
    clearFirstOffset(): void;
    getFirstOffset(): FirstOffset | undefined;
    setFirstOffset(value?: FirstOffset): RabbitStreams;

    hasNextOffset(): boolean;
    clearNextOffset(): void;
    getNextOffset(): NextOffset | undefined;
    setNextOffset(value?: NextOffset): RabbitStreams;

    getOffsetOptionCase(): RabbitStreams.OffsetOptionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RabbitStreams.AsObject;
    static toObject(includeInstance: boolean, msg: RabbitStreams): RabbitStreams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RabbitStreams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RabbitStreams;
    static deserializeBinaryFromReader(message: RabbitStreams, reader: jspb.BinaryReader): RabbitStreams;
}

export namespace RabbitStreams {
    export type AsObject = {
        stream: string,
        declareStream?: DeclareStream.AsObject,
        offset?: SpecificOffset.AsObject,
        lastOffset?: LastOffset.AsObject,
        lastConsumed?: LastConsumed.AsObject,
        firstOffset?: FirstOffset.AsObject,
        nextOffset?: NextOffset.AsObject,
    }

    export enum OffsetOptionCase {
        OFFSET_OPTION_NOT_SET = 0,
        OFFSET = 101,
        LAST_OFFSET = 102,
        LAST_CONSUMED = 103,
        FIRST_OFFSET = 104,
        NEXT_OFFSET = 105,
    }

}

export class DeclareStream extends jspb.Message { 
    getSize(): string;
    setSize(value: string): DeclareStream;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeclareStream.AsObject;
    static toObject(includeInstance: boolean, msg: DeclareStream): DeclareStream.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeclareStream, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeclareStream;
    static deserializeBinaryFromReader(message: DeclareStream, reader: jspb.BinaryReader): DeclareStream;
}

export namespace DeclareStream {
    export type AsObject = {
        size: string,
    }
}

export class SpecificOffset extends jspb.Message { 
    getOffset(): number;
    setOffset(value: number): SpecificOffset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpecificOffset.AsObject;
    static toObject(includeInstance: boolean, msg: SpecificOffset): SpecificOffset.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpecificOffset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpecificOffset;
    static deserializeBinaryFromReader(message: SpecificOffset, reader: jspb.BinaryReader): SpecificOffset;
}

export namespace SpecificOffset {
    export type AsObject = {
        offset: number,
    }
}

export class LastOffset extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LastOffset.AsObject;
    static toObject(includeInstance: boolean, msg: LastOffset): LastOffset.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LastOffset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LastOffset;
    static deserializeBinaryFromReader(message: LastOffset, reader: jspb.BinaryReader): LastOffset;
}

export namespace LastOffset {
    export type AsObject = {
    }
}

export class LastConsumed extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LastConsumed.AsObject;
    static toObject(includeInstance: boolean, msg: LastConsumed): LastConsumed.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LastConsumed, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LastConsumed;
    static deserializeBinaryFromReader(message: LastConsumed, reader: jspb.BinaryReader): LastConsumed;
}

export namespace LastConsumed {
    export type AsObject = {
    }
}

export class FirstOffset extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FirstOffset.AsObject;
    static toObject(includeInstance: boolean, msg: FirstOffset): FirstOffset.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FirstOffset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FirstOffset;
    static deserializeBinaryFromReader(message: FirstOffset, reader: jspb.BinaryReader): FirstOffset;
}

export namespace FirstOffset {
    export type AsObject = {
    }
}

export class NextOffset extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NextOffset.AsObject;
    static toObject(includeInstance: boolean, msg: NextOffset): NextOffset.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NextOffset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NextOffset;
    static deserializeBinaryFromReader(message: NextOffset, reader: jspb.BinaryReader): NextOffset;
}

export namespace NextOffset {
    export type AsObject = {
    }
}
