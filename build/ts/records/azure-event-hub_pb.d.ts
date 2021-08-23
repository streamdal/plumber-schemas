// package: protos.records
// file: records/azure-event-hub.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AzureEventHub extends jspb.Message { 
    getId(): string;
    setId(value: string): AzureEventHub;

    getSystemPropertiesMap(): jspb.Map<string, string>;
    clearSystemPropertiesMap(): void;
    getTimestamp(): number;
    setTimestamp(value: number): AzureEventHub;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): AzureEventHub;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AzureEventHub.AsObject;
    static toObject(includeInstance: boolean, msg: AzureEventHub): AzureEventHub.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AzureEventHub, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AzureEventHub;
    static deserializeBinaryFromReader(message: AzureEventHub, reader: jspb.BinaryReader): AzureEventHub;
}

export namespace AzureEventHub {
    export type AsObject = {
        id: string,

        systemPropertiesMap: Array<[string, string]>,
        timestamp: number,
        value: Uint8Array | string,
    }
}
