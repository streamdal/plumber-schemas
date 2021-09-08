// package: protos.args
// file: args/rabbit.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RabbitConn extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): RabbitConn;
    getUseTls(): boolean;
    setUseTls(value: boolean): RabbitConn;
    getInsecureTls(): boolean;
    setInsecureTls(value: boolean): RabbitConn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RabbitConn.AsObject;
    static toObject(includeInstance: boolean, msg: RabbitConn): RabbitConn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RabbitConn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RabbitConn;
    static deserializeBinaryFromReader(message: RabbitConn, reader: jspb.BinaryReader): RabbitConn;
}

export namespace RabbitConn {
    export type AsObject = {
        address: string,
        useTls: boolean,
        insecureTls: boolean,
    }
}

export class RabbitReadOpts extends jspb.Message { 
    getExchangeName(): string;
    setExchangeName(value: string): RabbitReadOpts;
    getQueueName(): string;
    setQueueName(value: string): RabbitReadOpts;
    getBindingKey(): string;
    setBindingKey(value: string): RabbitReadOpts;
    getQueueExclusive(): boolean;
    setQueueExclusive(value: boolean): RabbitReadOpts;
    getQueueDeclare(): boolean;
    setQueueDeclare(value: boolean): RabbitReadOpts;
    getQueueDurable(): boolean;
    setQueueDurable(value: boolean): RabbitReadOpts;
    getAutoAck(): boolean;
    setAutoAck(value: boolean): RabbitReadOpts;
    getConsumerTag(): string;
    setConsumerTag(value: string): RabbitReadOpts;
    getQueueDelete(): boolean;
    setQueueDelete(value: boolean): RabbitReadOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RabbitReadOpts.AsObject;
    static toObject(includeInstance: boolean, msg: RabbitReadOpts): RabbitReadOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RabbitReadOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RabbitReadOpts;
    static deserializeBinaryFromReader(message: RabbitReadOpts, reader: jspb.BinaryReader): RabbitReadOpts;
}

export namespace RabbitReadOpts {
    export type AsObject = {
        exchangeName: string,
        queueName: string,
        bindingKey: string,
        queueExclusive: boolean,
        queueDeclare: boolean,
        queueDurable: boolean,
        autoAck: boolean,
        consumerTag: string,
        queueDelete: boolean,
    }
}

export class RabbitWriteOpts extends jspb.Message { 
    getExchangeName(): string;
    setExchangeName(value: string): RabbitWriteOpts;
    getRoutingKey(): string;
    setRoutingKey(value: string): RabbitWriteOpts;
    getAppId(): string;
    setAppId(value: string): RabbitWriteOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RabbitWriteOpts.AsObject;
    static toObject(includeInstance: boolean, msg: RabbitWriteOpts): RabbitWriteOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RabbitWriteOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RabbitWriteOpts;
    static deserializeBinaryFromReader(message: RabbitWriteOpts, reader: jspb.BinaryReader): RabbitWriteOpts;
}

export namespace RabbitWriteOpts {
    export type AsObject = {
        exchangeName: string,
        routingKey: string,
        appId: string,
    }
}
