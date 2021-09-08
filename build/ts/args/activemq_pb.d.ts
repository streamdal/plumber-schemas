// package: protos.args
// file: args/activemq.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ActiveMQConn extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): ActiveMQConn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActiveMQConn.AsObject;
    static toObject(includeInstance: boolean, msg: ActiveMQConn): ActiveMQConn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActiveMQConn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActiveMQConn;
    static deserializeBinaryFromReader(message: ActiveMQConn, reader: jspb.BinaryReader): ActiveMQConn;
}

export namespace ActiveMQConn {
    export type AsObject = {
        address: string,
    }
}

export class ActiveMQReadOpts extends jspb.Message { 
    getTopic(): string;
    setTopic(value: string): ActiveMQReadOpts;
    getQueue(): string;
    setQueue(value: string): ActiveMQReadOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActiveMQReadOpts.AsObject;
    static toObject(includeInstance: boolean, msg: ActiveMQReadOpts): ActiveMQReadOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActiveMQReadOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActiveMQReadOpts;
    static deserializeBinaryFromReader(message: ActiveMQReadOpts, reader: jspb.BinaryReader): ActiveMQReadOpts;
}

export namespace ActiveMQReadOpts {
    export type AsObject = {
        topic: string,
        queue: string,
    }
}

export class ActiveMQWriteOpts extends jspb.Message { 
    getTopic(): string;
    setTopic(value: string): ActiveMQWriteOpts;
    getQueue(): string;
    setQueue(value: string): ActiveMQWriteOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActiveMQWriteOpts.AsObject;
    static toObject(includeInstance: boolean, msg: ActiveMQWriteOpts): ActiveMQWriteOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActiveMQWriteOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActiveMQWriteOpts;
    static deserializeBinaryFromReader(message: ActiveMQWriteOpts, reader: jspb.BinaryReader): ActiveMQWriteOpts;
}

export namespace ActiveMQWriteOpts {
    export type AsObject = {
        topic: string,
        queue: string,
    }
}
