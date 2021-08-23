// package: protos.records
// file: records/aws-sqs.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AWSSQS extends jspb.Message { 
    getId(): string;
    setId(value: string): AWSSQS;
    getTimestamp(): number;
    setTimestamp(value: number): AWSSQS;
    getRecipientHandle(): string;
    setRecipientHandle(value: string): AWSSQS;

    getAttributesMap(): jspb.Map<string, string>;
    clearAttributesMap(): void;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): AWSSQS;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AWSSQS.AsObject;
    static toObject(includeInstance: boolean, msg: AWSSQS): AWSSQS.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AWSSQS, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AWSSQS;
    static deserializeBinaryFromReader(message: AWSSQS, reader: jspb.BinaryReader): AWSSQS;
}

export namespace AWSSQS {
    export type AsObject = {
        id: string,
        timestamp: number,
        recipientHandle: string,

        attributesMap: Array<[string, string]>,
        value: Uint8Array | string,
    }
}
