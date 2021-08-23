// package: protos.records
// file: records/nsq.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class NSQ extends jspb.Message { 
    getId(): string;
    setId(value: string): NSQ;
    getTopic(): string;
    setTopic(value: string): NSQ;
    getChannel(): string;
    setChannel(value: string): NSQ;
    getAttempts(): number;
    setAttempts(value: number): NSQ;
    getNsqdAddress(): string;
    setNsqdAddress(value: string): NSQ;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): NSQ;
    getTimestamp(): number;
    setTimestamp(value: number): NSQ;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NSQ.AsObject;
    static toObject(includeInstance: boolean, msg: NSQ): NSQ.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NSQ, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NSQ;
    static deserializeBinaryFromReader(message: NSQ, reader: jspb.BinaryReader): NSQ;
}

export namespace NSQ {
    export type AsObject = {
        id: string,
        topic: string,
        channel: string,
        attempts: number,
        nsqdAddress: string,
        value: Uint8Array | string,
        timestamp: number,
    }
}
