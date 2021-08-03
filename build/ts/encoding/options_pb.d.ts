// package: protos.encoding
// file: encoding/options.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Protobuf extends jspb.Message { 
    getRootType(): string;
    setRootType(value: string): Protobuf;
    getZipArchive(): Uint8Array | string;
    getZipArchive_asU8(): Uint8Array;
    getZipArchive_asB64(): string;
    setZipArchive(value: Uint8Array | string): Protobuf;

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
    getSchema(): Uint8Array | string;
    getSchema_asU8(): Uint8Array;
    getSchema_asB64(): string;
    setSchema(value: Uint8Array | string): Avro;

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
        schema: Uint8Array | string,
    }
}

export class Options extends jspb.Message { 
    getType(): Type;
    setType(value: Type): Options;

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
}
