// package: protos.conns
// file: conns/azure-event-hub.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AzureEventHub extends jspb.Message { 
    getConnectionString(): string;
    setConnectionString(value: string): AzureEventHub;

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
        connectionString: string,
    }
}
