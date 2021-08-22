// package: protos.backends
// file: backends/rabbit.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Rabbit extends jspb.Message { 
    getExchangeName(): string;
    setExchangeName(value: string): Rabbit;
    getQueueName(): string;
    setQueueName(value: string): Rabbit;
    getRoutingKey(): string;
    setRoutingKey(value: string): Rabbit;
    getQueueExclusive(): boolean;
    setQueueExclusive(value: boolean): Rabbit;
    getQueueDeclare(): boolean;
    setQueueDeclare(value: boolean): Rabbit;
    getQueueDurable(): boolean;
    setQueueDurable(value: boolean): Rabbit;
    getAutoAck(): boolean;
    setAutoAck(value: boolean): Rabbit;
    getAppId(): string;
    setAppId(value: string): Rabbit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Rabbit.AsObject;
    static toObject(includeInstance: boolean, msg: Rabbit): Rabbit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Rabbit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Rabbit;
    static deserializeBinaryFromReader(message: Rabbit, reader: jspb.BinaryReader): Rabbit;
}

export namespace Rabbit {
    export type AsObject = {
        exchangeName: string,
        queueName: string,
        routingKey: string,
        queueExclusive: boolean,
        queueDeclare: boolean,
        queueDurable: boolean,
        autoAck: boolean,
        appId: string,
    }
}
