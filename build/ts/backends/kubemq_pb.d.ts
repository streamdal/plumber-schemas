// package: protos.backends
// file: backends/kubemq.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class KubeMQ extends jspb.Message { 
    getQueue(): string;
    setQueue(value: string): KubeMQ;

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
        queue: string,
    }
}
