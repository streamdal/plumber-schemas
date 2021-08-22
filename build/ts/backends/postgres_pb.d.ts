// package: protos.backends
// file: backends/postgres.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Postgres extends jspb.Message { 
    getReplicationSlotName(): string;
    setReplicationSlotName(value: string): Postgres;
    getPublisherName(): string;
    setPublisherName(value: string): Postgres;

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
        replicationSlotName: string,
        publisherName: string,
    }
}
