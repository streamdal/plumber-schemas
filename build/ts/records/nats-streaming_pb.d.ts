// package: protos.records
// file: records/nats-streaming.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class NatsStreaming extends jspb.Message { 

    getMetadataMap(): jspb.Map<string, string>;
    clearMetadataMap(): void;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): NatsStreaming;
    getTimestamp(): number;
    setTimestamp(value: number): NatsStreaming;

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

        metadataMap: Array<[string, string]>,
        value: Uint8Array | string,
        timestamp: number,
    }
}
