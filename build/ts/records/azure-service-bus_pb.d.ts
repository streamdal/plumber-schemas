// package: protos.records
// file: records/azure-service-bus.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AzureServiceBus extends jspb.Message { 
    getContentType(): string;
    setContentType(value: string): AzureServiceBus;
    getCorrelationId(): string;
    setCorrelationId(value: string): AzureServiceBus;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): AzureServiceBus;
    getDeliveryCount(): number;
    setDeliveryCount(value: number): AzureServiceBus;
    getSessionId(): string;
    setSessionId(value: string): AzureServiceBus;
    getGroupSequence(): number;
    setGroupSequence(value: number): AzureServiceBus;
    getId(): string;
    setId(value: string): AzureServiceBus;
    getLabel(): string;
    setLabel(value: string): AzureServiceBus;
    getReplyTo(): string;
    setReplyTo(value: string): AzureServiceBus;
    getReplyToGroupId(): string;
    setReplyToGroupId(value: string): AzureServiceBus;
    getTo(): string;
    setTo(value: string): AzureServiceBus;
    getTtl(): number;
    setTtl(value: number): AzureServiceBus;
    getLockToken(): string;
    setLockToken(value: string): AzureServiceBus;

    hasSystemProperties(): boolean;
    clearSystemProperties(): void;
    getSystemProperties(): AzureSystemProperties | undefined;
    setSystemProperties(value?: AzureSystemProperties): AzureServiceBus;

    getUserPropertiesMap(): jspb.Map<string, string>;
    clearUserPropertiesMap(): void;
    getFormat(): number;
    setFormat(value: number): AzureServiceBus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AzureServiceBus.AsObject;
    static toObject(includeInstance: boolean, msg: AzureServiceBus): AzureServiceBus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AzureServiceBus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AzureServiceBus;
    static deserializeBinaryFromReader(message: AzureServiceBus, reader: jspb.BinaryReader): AzureServiceBus;
}

export namespace AzureServiceBus {
    export type AsObject = {
        contentType: string,
        correlationId: string,
        value: Uint8Array | string,
        deliveryCount: number,
        sessionId: string,
        groupSequence: number,
        id: string,
        label: string,
        replyTo: string,
        replyToGroupId: string,
        to: string,
        ttl: number,
        lockToken: string,
        systemProperties?: AzureSystemProperties.AsObject,

        userPropertiesMap: Array<[string, string]>,
        format: number,
    }
}

export class AzureSystemProperties extends jspb.Message { 
    getLockedUntil(): number;
    setLockedUntil(value: number): AzureSystemProperties;
    getSequenceNumber(): number;
    setSequenceNumber(value: number): AzureSystemProperties;
    getPartitionId(): number;
    setPartitionId(value: number): AzureSystemProperties;
    getPartitionKey(): string;
    setPartitionKey(value: string): AzureSystemProperties;
    getEnqueuedTime(): number;
    setEnqueuedTime(value: number): AzureSystemProperties;
    getDeadLetterSource(): string;
    setDeadLetterSource(value: string): AzureSystemProperties;
    getScheduledEnqueueTime(): number;
    setScheduledEnqueueTime(value: number): AzureSystemProperties;
    getEnqueuedSequenceNumber(): number;
    setEnqueuedSequenceNumber(value: number): AzureSystemProperties;
    getViaPartitionKey(): string;
    setViaPartitionKey(value: string): AzureSystemProperties;

    getAnnotationsMap(): jspb.Map<string, string>;
    clearAnnotationsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AzureSystemProperties.AsObject;
    static toObject(includeInstance: boolean, msg: AzureSystemProperties): AzureSystemProperties.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AzureSystemProperties, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AzureSystemProperties;
    static deserializeBinaryFromReader(message: AzureSystemProperties, reader: jspb.BinaryReader): AzureSystemProperties;
}

export namespace AzureSystemProperties {
    export type AsObject = {
        lockedUntil: number,
        sequenceNumber: number,
        partitionId: number,
        partitionKey: string,
        enqueuedTime: number,
        deadLetterSource: string,
        scheduledEnqueueTime: number,
        enqueuedSequenceNumber: number,
        viaPartitionKey: string,

        annotationsMap: Array<[string, string]>,
    }
}
