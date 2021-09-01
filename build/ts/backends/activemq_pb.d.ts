// package: protos.backends
// file: backends/activemq.proto

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

export class ActiveMQReadArgs extends jspb.Message { 
    getTopic(): string;
    setTopic(value: string): ActiveMQReadArgs;
    getQueue(): string;
    setQueue(value: string): ActiveMQReadArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActiveMQReadArgs.AsObject;
    static toObject(includeInstance: boolean, msg: ActiveMQReadArgs): ActiveMQReadArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActiveMQReadArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActiveMQReadArgs;
    static deserializeBinaryFromReader(message: ActiveMQReadArgs, reader: jspb.BinaryReader): ActiveMQReadArgs;
}

export namespace ActiveMQReadArgs {
    export type AsObject = {
        topic: string,
        queue: string,
    }
}

export class ActiveMQWriteArgs extends jspb.Message { 
    getTopic(): string;
    setTopic(value: string): ActiveMQWriteArgs;
    getQueue(): string;
    setQueue(value: string): ActiveMQWriteArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActiveMQWriteArgs.AsObject;
    static toObject(includeInstance: boolean, msg: ActiveMQWriteArgs): ActiveMQWriteArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActiveMQWriteArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActiveMQWriteArgs;
    static deserializeBinaryFromReader(message: ActiveMQWriteArgs, reader: jspb.BinaryReader): ActiveMQWriteArgs;
}

export namespace ActiveMQWriteArgs {
    export type AsObject = {
        topic: string,
        queue: string,
    }
}
