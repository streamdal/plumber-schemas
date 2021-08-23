// package: protos.records
// file: records/kubemq.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class KubeMQ extends jspb.Message { 
    getId(): string;
    setId(value: string): KubeMQ;
    getClientId(): string;
    setClientId(value: string): KubeMQ;
    getChannel(): string;
    setChannel(value: string): KubeMQ;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): KubeMQ;
    getTimestamp(): number;
    setTimestamp(value: number): KubeMQ;
    getSequence(): number;
    setSequence(value: number): KubeMQ;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KubeMQ.AsObject;
    static toObject(includeInstance: boolean, msg: KubeMQ): KubeMQ.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KubeMQ, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KubeMQ;
    static deserializeBinaryFromReader(message: KubeMQ, reader: jspb.BinaryReader): KubeMQ;
}

export namespace KubeMQ {
    export type AsObject = {
        id: string,
        clientId: string,
        channel: string,
        value: Uint8Array | string,
        timestamp: number,
        sequence: number,
    }
}
