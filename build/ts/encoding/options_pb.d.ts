// package: protos.encoding
// file: encoding/options.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ProtobufSettings extends jspb.Message { 
    getProtobufRootMessage(): string;
    setProtobufRootMessage(value: string): ProtobufSettings;
    clearProtobufDirsList(): void;
    getProtobufDirsList(): Array<string>;
    setProtobufDirsList(value: Array<string>): ProtobufSettings;
    addProtobufDirs(value: string, index?: number): string;
    getProtobufRootDir(): string;
    setProtobufRootDir(value: string): ProtobufSettings;
    getArchive(): Uint8Array | string;
    getArchive_asU8(): Uint8Array;
    getArchive_asB64(): string;
    setArchive(value: Uint8Array | string): ProtobufSettings;
    getMessageDescriptor(): Uint8Array | string;
    getMessageDescriptor_asU8(): Uint8Array;
    getMessageDescriptor_asB64(): string;
    setMessageDescriptor(value: Uint8Array | string): ProtobufSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProtobufSettings.AsObject;
    static toObject(includeInstance: boolean, msg: ProtobufSettings): ProtobufSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProtobufSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProtobufSettings;
    static deserializeBinaryFromReader(message: ProtobufSettings, reader: jspb.BinaryReader): ProtobufSettings;
}

export namespace ProtobufSettings {
    export type AsObject = {
        protobufRootMessage: string,
        protobufDirsList: Array<string>,
        ProtobufRootDir: string,
        archive: Uint8Array | string,
        MessageDescriptor: Uint8Array | string,
    }
}

export class AvroSettings extends jspb.Message { 
    getAvroSchemaFile(): string;
    setAvroSchemaFile(value: string): AvroSettings;
    getSchema(): Uint8Array | string;
    getSchema_asU8(): Uint8Array;
    getSchema_asB64(): string;
    setSchema(value: Uint8Array | string): AvroSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AvroSettings.AsObject;
    static toObject(includeInstance: boolean, msg: AvroSettings): AvroSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AvroSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AvroSettings;
    static deserializeBinaryFromReader(message: AvroSettings, reader: jspb.BinaryReader): AvroSettings;
}

export namespace AvroSettings {
    export type AsObject = {
        avroSchemaFile: string,
        schema: Uint8Array | string,
    }
}

export class EncodeOptions extends jspb.Message { 
    getSchemaId(): string;
    setSchemaId(value: string): EncodeOptions;
    getEncodeType(): EncodeType;
    setEncodeType(value: EncodeType): EncodeOptions;

    hasProtobufSettings(): boolean;
    clearProtobufSettings(): void;
    getProtobufSettings(): ProtobufSettings | undefined;
    setProtobufSettings(value?: ProtobufSettings): EncodeOptions;

    hasAvroSettings(): boolean;
    clearAvroSettings(): void;
    getAvroSettings(): AvroSettings | undefined;
    setAvroSettings(value?: AvroSettings): EncodeOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EncodeOptions.AsObject;
    static toObject(includeInstance: boolean, msg: EncodeOptions): EncodeOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EncodeOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EncodeOptions;
    static deserializeBinaryFromReader(message: EncodeOptions, reader: jspb.BinaryReader): EncodeOptions;
}

export namespace EncodeOptions {
    export type AsObject = {
        schemaId: string,
        encodeType: EncodeType,
        protobufSettings?: ProtobufSettings.AsObject,
        avroSettings?: AvroSettings.AsObject,
    }
}

export class DecodeOptions extends jspb.Message { 
    getSchemaId(): string;
    setSchemaId(value: string): DecodeOptions;
    getDecodeType(): DecodeType;
    setDecodeType(value: DecodeType): DecodeOptions;

    hasProtobufSettings(): boolean;
    clearProtobufSettings(): void;
    getProtobufSettings(): ProtobufSettings | undefined;
    setProtobufSettings(value?: ProtobufSettings): DecodeOptions;

    hasAvroSettings(): boolean;
    clearAvroSettings(): void;
    getAvroSettings(): AvroSettings | undefined;
    setAvroSettings(value?: AvroSettings): DecodeOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DecodeOptions.AsObject;
    static toObject(includeInstance: boolean, msg: DecodeOptions): DecodeOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DecodeOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DecodeOptions;
    static deserializeBinaryFromReader(message: DecodeOptions, reader: jspb.BinaryReader): DecodeOptions;
}

export namespace DecodeOptions {
    export type AsObject = {
        schemaId: string,
        decodeType: DecodeType,
        protobufSettings?: ProtobufSettings.AsObject,
        avroSettings?: AvroSettings.AsObject,
    }
}

export enum EncodeType {
    ENCODE_TYPE_UNSET = 0,
    ENCODE_TYPE_JSONPB = 1,
    ENCODE_TYPE_AVRO = 2,
}

export enum DecodeType {
    DECODE_TYPE_UNSET = 0,
    DECODE_TYPE_JSONPB = 1,
    DECODE_TYPE_PROTOBUF = 2,
    DECODE_TYPE_AVRO = 3,
    DECODE_TYPE_THRIFT = 4,
    DECODE_TYPE_FLATBUFFER = 5,
}
