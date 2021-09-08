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

export class RabbitReadArgs extends jspb.Message { 
    getExchangeName(): string;
    setExchangeName(value: string): RabbitReadArgs;
    getQueueName(): string;
    setQueueName(value: string): RabbitReadArgs;
    getBindingKey(): string;
    setBindingKey(value: string): RabbitReadArgs;
    getQueueExclusive(): boolean;
    setQueueExclusive(value: boolean): RabbitReadArgs;
    getQueueDeclare(): boolean;
    setQueueDeclare(value: boolean): RabbitReadArgs;
    getQueueDurable(): boolean;
    setQueueDurable(value: boolean): RabbitReadArgs;
    getAutoAck(): boolean;
    setAutoAck(value: boolean): RabbitReadArgs;
    getConsumerTag(): string;
    setConsumerTag(value: string): RabbitReadArgs;
    getQueueDelete(): boolean;
    setQueueDelete(value: boolean): RabbitReadArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RabbitReadArgs.AsObject;
    static toObject(includeInstance: boolean, msg: RabbitReadArgs): RabbitReadArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RabbitReadArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RabbitReadArgs;
    static deserializeBinaryFromReader(message: RabbitReadArgs, reader: jspb.BinaryReader): RabbitReadArgs;
}

export namespace RabbitReadArgs {
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

export class RabbitWriteArgs extends jspb.Message { 
    getExchangeName(): string;
    setExchangeName(value: string): RabbitWriteArgs;
    getRoutingKey(): string;
    setRoutingKey(value: string): RabbitWriteArgs;
    getAppId(): string;
    setAppId(value: string): RabbitWriteArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RabbitWriteArgs.AsObject;
    static toObject(includeInstance: boolean, msg: RabbitWriteArgs): RabbitWriteArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RabbitWriteArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RabbitWriteArgs;
    static deserializeBinaryFromReader(message: RabbitWriteArgs, reader: jspb.BinaryReader): RabbitWriteArgs;
}

export namespace RabbitWriteArgs {
    export type AsObject = {
        exchangeName: string,
        routingKey: string,
        appId: string,
    }
}
