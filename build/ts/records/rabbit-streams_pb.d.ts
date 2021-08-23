// package: protos.records
// file: records/rabbit-streams.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RabbitStreams extends jspb.Message { 
    getDeliveryTag(): string;
    setDeliveryTag(value: string): RabbitStreams;
    getFormat(): number;
    setFormat(value: number): RabbitStreams;

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): RabbitStreamsHeader | undefined;
    setHeader(value?: RabbitStreamsHeader): RabbitStreams;

    getDeliveryAnnotationsMap(): jspb.Map<string, string>;
    clearDeliveryAnnotationsMap(): void;

    getFooterMap(): jspb.Map<string, string>;
    clearFooterMap(): void;
    getSendSettled(): boolean;
    setSendSettled(value: boolean): RabbitStreams;
    getStreamName(): string;
    setStreamName(value: string): RabbitStreams;
    getTimestamp(): number;
    setTimestamp(value: number): RabbitStreams;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): RabbitStreams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RabbitStreams.AsObject;
    static toObject(includeInstance: boolean, msg: RabbitStreams): RabbitStreams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RabbitStreams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RabbitStreams;
    static deserializeBinaryFromReader(message: RabbitStreams, reader: jspb.BinaryReader): RabbitStreams;
}

export namespace RabbitStreams {
    export type AsObject = {
        deliveryTag: string,
        format: number,
        header?: RabbitStreamsHeader.AsObject,

        deliveryAnnotationsMap: Array<[string, string]>,

        footerMap: Array<[string, string]>,
        sendSettled: boolean,
        streamName: string,
        timestamp: number,
        value: Uint8Array | string,
    }
}

export class RabbitStreamsHeader extends jspb.Message { 
    getMessageId(): string;
    setMessageId(value: string): RabbitStreamsHeader;
    getUserId(): string;
    setUserId(value: string): RabbitStreamsHeader;
    getTo(): string;
    setTo(value: string): RabbitStreamsHeader;
    getSubject(): string;
    setSubject(value: string): RabbitStreamsHeader;
    getReplayTo(): string;
    setReplayTo(value: string): RabbitStreamsHeader;
    getCorrelationId(): string;
    setCorrelationId(value: string): RabbitStreamsHeader;
    getContentType(): string;
    setContentType(value: string): RabbitStreamsHeader;
    getContentEncoding(): string;
    setContentEncoding(value: string): RabbitStreamsHeader;
    getAbsoluteExpiryTime(): string;
    setAbsoluteExpiryTime(value: string): RabbitStreamsHeader;
    getCreationTime(): string;
    setCreationTime(value: string): RabbitStreamsHeader;
    getGroupId(): string;
    setGroupId(value: string): RabbitStreamsHeader;
    getGroupSequence(): number;
    setGroupSequence(value: number): RabbitStreamsHeader;
    getReplayToGroupId(): string;
    setReplayToGroupId(value: string): RabbitStreamsHeader;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RabbitStreamsHeader.AsObject;
    static toObject(includeInstance: boolean, msg: RabbitStreamsHeader): RabbitStreamsHeader.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RabbitStreamsHeader, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RabbitStreamsHeader;
    static deserializeBinaryFromReader(message: RabbitStreamsHeader, reader: jspb.BinaryReader): RabbitStreamsHeader;
}

export namespace RabbitStreamsHeader {
    export type AsObject = {
        messageId: string,
        userId: string,
        to: string,
        subject: string,
        replayTo: string,
        correlationId: string,
        contentType: string,
        contentEncoding: string,
        absoluteExpiryTime: string,
        creationTime: string,
        groupId: string,
        groupSequence: number,
        replayToGroupId: string,
    }
}

export class RabbitStreamsFooter extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RabbitStreamsFooter.AsObject;
    static toObject(includeInstance: boolean, msg: RabbitStreamsFooter): RabbitStreamsFooter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RabbitStreamsFooter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RabbitStreamsFooter;
    static deserializeBinaryFromReader(message: RabbitStreamsFooter, reader: jspb.BinaryReader): RabbitStreamsFooter;
}

export namespace RabbitStreamsFooter {
    export type AsObject = {
    }
}
