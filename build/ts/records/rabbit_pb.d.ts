// package: protos.records
// file: records/rabbit.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RabbitHeader extends jspb.Message { 
    getKey(): string;
    setKey(value: string): RabbitHeader;
    getValue(): string;
    setValue(value: string): RabbitHeader;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RabbitHeader.AsObject;
    static toObject(includeInstance: boolean, msg: RabbitHeader): RabbitHeader.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RabbitHeader, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RabbitHeader;
    static deserializeBinaryFromReader(message: RabbitHeader, reader: jspb.BinaryReader): RabbitHeader;
}

export namespace RabbitHeader {
    export type AsObject = {
        key: string,
        value: string,
    }
}

export class Rabbit extends jspb.Message { 
    getBody(): Uint8Array | string;
    getBody_asU8(): Uint8Array;
    getBody_asB64(): string;
    setBody(value: Uint8Array | string): Rabbit;
    getTimestamp(): number;
    setTimestamp(value: number): Rabbit;
    getType(): string;
    setType(value: string): Rabbit;
    getExchange(): string;
    setExchange(value: string): Rabbit;
    getRoutingKey(): string;
    setRoutingKey(value: string): Rabbit;
    getContentType(): string;
    setContentType(value: string): Rabbit;
    getContentEncoding(): string;
    setContentEncoding(value: string): Rabbit;
    getPriority(): number;
    setPriority(value: number): Rabbit;
    getExpiration(): string;
    setExpiration(value: string): Rabbit;
    getMessageId(): string;
    setMessageId(value: string): Rabbit;
    getUserId(): string;
    setUserId(value: string): Rabbit;
    getAppId(): string;
    setAppId(value: string): Rabbit;
    getReplyTo(): string;
    setReplyTo(value: string): Rabbit;
    getCorrelationId(): string;
    setCorrelationId(value: string): Rabbit;
    clearHeadersList(): void;
    getHeadersList(): Array<RabbitHeader>;
    setHeadersList(value: Array<RabbitHeader>): Rabbit;
    addHeaders(value?: RabbitHeader, index?: number): RabbitHeader;

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
        body: Uint8Array | string,
        timestamp: number,
        type: string,
        exchange: string,
        routingKey: string,
        contentType: string,
        contentEncoding: string,
        priority: number,
        expiration: string,
        messageId: string,
        userId: string,
        appId: string,
        replyTo: string,
        correlationId: string,
        headersList: Array<RabbitHeader.AsObject>,
    }
}
