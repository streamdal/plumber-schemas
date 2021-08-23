// package: protos.records
// file: records/postgres.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Postgres extends jspb.Message { 

    getMetadataMap(): jspb.Map<string, string>;
    clearMetadataMap(): void;
    getTimestamp(): number;
    setTimestamp(value: number): Postgres;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): Postgres;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Postgres.AsObject;
    static toObject(includeInstance: boolean, msg: Postgres): Postgres.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Postgres, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Postgres;
    static deserializeBinaryFromReader(message: Postgres, reader: jspb.BinaryReader): Postgres;
}

export namespace Postgres {
    export type AsObject = {

        metadataMap: Array<[string, string]>,
        timestamp: number,
        value: Uint8Array | string,
    }
}
