// package: protos.backends
// file: backends/nsq.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class NSQ extends jspb.Message { 
    getTopic(): string;
    setTopic(value: string): NSQ;
    getChannel(): string;
    setChannel(value: string): NSQ;

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
        topic: string,
        channel: string,
    }
}
