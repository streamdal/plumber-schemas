// package: protos.conns
// file: conns/activemq.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ActiveMQ extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): ActiveMQ;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActiveMQ.AsObject;
    static toObject(includeInstance: boolean, msg: ActiveMQ): ActiveMQ.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActiveMQ, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActiveMQ;
    static deserializeBinaryFromReader(message: ActiveMQ, reader: jspb.BinaryReader): ActiveMQ;
}

export namespace ActiveMQ {
    export type AsObject = {
        address: string,
    }
}
