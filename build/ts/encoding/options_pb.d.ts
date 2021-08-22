// package: protos.encoding
// file: encoding/options.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Dirs extends jspb.Message { 
    clearDirsList(): void;
    getDirsList(): Array<string>;
    setDirsList(value: Array<string>): Dirs;
    addDirs(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Dirs.AsObject;
    static toObject(includeInstance: boolean, msg: Dirs): Dirs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Dirs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Dirs;
    static deserializeBinaryFromReader(message: Dirs, reader: jspb.BinaryReader): Dirs;
}

export namespace Dirs {
    export type AsObject = {
        dirsList: Array<string>,
    }
}

export class Protobuf extends jspb.Message { 
    getRootType(): string;
    setRootType(value: string): Protobuf;

    hasZipArchive(): boolean;
    clearZipArchive(): void;
    getZipArchive(): Uint8Array | string;
    getZipArchive_asU8(): Uint8Array;
    getZipArchive_asB64(): string;
    setZipArchive(value: Uint8Array | string): Protobuf;

    hasDirs(): boolean;
    clearDirs(): void;
    getDirs(): Dirs | undefined;
    setDirs(value?: Dirs): Protobuf;

    getDataCase(): Protobuf.DataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Protobuf.AsObject;
    static toObject(includeInstance: boolean, msg: Protobuf): Protobuf.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Protobuf, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Protobuf;
    static deserializeBinaryFromReader(message: Protobuf, reader: jspb.BinaryReader): Protobuf;
}

export namespace Protobuf {
    export type AsObject = {
        rootType: string,
        zipArchive: Uint8Array | string,
        dirs?: Dirs.AsObject,
    }

    export enum DataCase {
        DATA_NOT_SET = 0,
        ZIP_ARCHIVE = 2,
        DIRS = 3,
    }

}

export class JSONSchema extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JSONSchema.AsObject;
    static toObject(includeInstance: boolean, msg: JSONSchema): JSONSchema.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JSONSchema, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JSONSchema;
    static deserializeBinaryFromReader(message: JSONSchema, reader: jspb.BinaryReader): JSONSchema;
}

export namespace JSONSchema {
    export type AsObject = {
    }
}

export class Avro extends jspb.Message { 

    hasSchemaData(): boolean;
    clearSchemaData(): void;
    getSchemaData(): Uint8Array | string;
    getSchemaData_asU8(): Uint8Array;
    getSchemaData_asB64(): string;
    setSchemaData(value: Uint8Array | string): Avro;

    hasSchemaFile(): boolean;
    clearSchemaFile(): void;
    getSchemaFile(): string;
    setSchemaFile(value: string): Avro;

    getDataCase(): Avro.DataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Avro.AsObject;
    static toObject(includeInstance: boolean, msg: Avro): Avro.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Avro, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Avro;
    static deserializeBinaryFromReader(message: Avro, reader: jspb.BinaryReader): Avro;
}

export namespace Avro {
    export type AsObject = {
        schemaData: Uint8Array | string,
        schemaFile: string,
    }

    export enum DataCase {
        DATA_NOT_SET = 0,
        SCHEMA_DATA = 1,
        SCHEMA_FILE = 2,
    }

}

export class Options extends jspb.Message { 
    getType(): Type;
    setType(value: Type): Options;
    getSchemaId(): string;
    setSchemaId(value: string): Options;

    hasProtobuf(): boolean;
    clearProtobuf(): void;
    getProtobuf(): Protobuf | undefined;
    setProtobuf(value?: Protobuf): Options;

    hasAvro(): boolean;
    clearAvro(): void;
    getAvro(): Avro | undefined;
    setAvro(value?: Avro): Options;

    hasJsonSchema(): boolean;
    clearJsonSchema(): void;
    getJsonSchema(): JSONSchema | undefined;
    setJsonSchema(value?: JSONSchema): Options;

    getEncodingCase(): Options.EncodingCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Options.AsObject;
    static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Options;
    static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
}

export namespace Options {
    export type AsObject = {
        type: Type,
        schemaId: string,
        protobuf?: Protobuf.AsObject,
        avro?: Avro.AsObject,
        jsonSchema?: JSONSchema.AsObject,
    }

    export enum EncodingCase {
        ENCODING_NOT_SET = 0,
        PROTOBUF = 100,
        AVRO = 102,
        JSON_SCHEMA = 101,
    }

}

export enum Type {
    NONE = 0,
    JSON = 1,
    JSON_SCHEMA = 2,
    PROTOBUF = 3,
    AVRO = 4,
    THRIFT = 5,
}
