// package: protos.encoding
// file: encoding/options.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class EncodeOptions extends jspb.Message { 
    getType(): Type;
    setType(value: Type): EncodeOptions;
    getSchemaId(): string;
    setSchemaId(value: string): EncodeOptions;

    getInputMap(): jspb.Map<string, string>;
    clearInputMap(): void;

    getMetadataMap(): jspb.Map<string, string>;
    clearMetadataMap(): void;

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
        type: Type,
        schemaId: string,

        inputMap: Array<[string, string]>,

        metadataMap: Array<[string, string]>,
    }
}

export class DecodeOptions extends jspb.Message { 
    getType(): Type;
    setType(value: Type): DecodeOptions;
    getSchemaId(): string;
    setSchemaId(value: string): DecodeOptions;

    getInputMap(): jspb.Map<string, string>;
    clearInputMap(): void;

    getMetadataMap(): jspb.Map<string, string>;
    clearMetadataMap(): void;

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
        type: Type,
        schemaId: string,

        inputMap: Array<[string, string]>,

        metadataMap: Array<[string, string]>,
    }
}

export enum Type {
    TYPE_UNSET = 0,
    TYPE_PLAIN = 1,
    TYPE_PROTOBUF = 2,
    TYPE_AVRO = 3,
    TYPE_THRIFT = 4,
    TYPE_FLATBUFFER = 5,
}
