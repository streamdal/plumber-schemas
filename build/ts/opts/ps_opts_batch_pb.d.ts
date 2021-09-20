// package: protos.opts
// file: opts/ps_opts_batch.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as opts_ps_write_pb from "../opts/ps_write_pb";

export class BatchOptions extends jspb.Message { 
    getOutputType(): BatchOutputType;
    setOutputType(value: BatchOutputType): BatchOptions;
    getApiUrl(): string;
    setApiUrl(value: string): BatchOptions;

    hasLogin(): boolean;
    clearLogin(): void;
    getLogin(): BatchLoginOptions | undefined;
    setLogin(value?: BatchLoginOptions): BatchOptions;

    hasLogout(): boolean;
    clearLogout(): void;
    getLogout(): BatchLogoutOptions | undefined;
    setLogout(value?: BatchLogoutOptions): BatchOptions;

    hasList(): boolean;
    clearList(): void;
    getList(): BatchListOptions | undefined;
    setList(value?: BatchListOptions): BatchOptions;

    hasCreate(): boolean;
    clearCreate(): void;
    getCreate(): BatchCreateOptions | undefined;
    setCreate(value?: BatchCreateOptions): BatchOptions;

    hasSearch(): boolean;
    clearSearch(): void;
    getSearch(): BatchSearchOptions | undefined;
    setSearch(value?: BatchSearchOptions): BatchOptions;

    hasArchive(): boolean;
    clearArchive(): void;
    getArchive(): BatchArchiveOptions | undefined;
    setArchive(value?: BatchArchiveOptions): BatchOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchOptions.AsObject;
    static toObject(includeInstance: boolean, msg: BatchOptions): BatchOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchOptions;
    static deserializeBinaryFromReader(message: BatchOptions, reader: jspb.BinaryReader): BatchOptions;
}

export namespace BatchOptions {
    export type AsObject = {
        outputType: BatchOutputType,
        apiUrl: string,
        login?: BatchLoginOptions.AsObject,
        logout?: BatchLogoutOptions.AsObject,
        list?: BatchListOptions.AsObject,
        create?: BatchCreateOptions.AsObject,
        search?: BatchSearchOptions.AsObject,
        archive?: BatchArchiveOptions.AsObject,
    }
}

export class BatchLoginOptions extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchLoginOptions.AsObject;
    static toObject(includeInstance: boolean, msg: BatchLoginOptions): BatchLoginOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchLoginOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchLoginOptions;
    static deserializeBinaryFromReader(message: BatchLoginOptions, reader: jspb.BinaryReader): BatchLoginOptions;
}

export namespace BatchLoginOptions {
    export type AsObject = {
    }
}

export class BatchLogoutOptions extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchLogoutOptions.AsObject;
    static toObject(includeInstance: boolean, msg: BatchLogoutOptions): BatchLogoutOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchLogoutOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchLogoutOptions;
    static deserializeBinaryFromReader(message: BatchLogoutOptions, reader: jspb.BinaryReader): BatchLogoutOptions;
}

export namespace BatchLogoutOptions {
    export type AsObject = {
    }
}

export class BatchArchiveOptions extends jspb.Message { 

    hasReplay(): boolean;
    clearReplay(): void;
    getReplay(): BatchArchiveReplayOptions | undefined;
    setReplay(value?: BatchArchiveReplayOptions): BatchArchiveOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchArchiveOptions.AsObject;
    static toObject(includeInstance: boolean, msg: BatchArchiveOptions): BatchArchiveOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchArchiveOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchArchiveOptions;
    static deserializeBinaryFromReader(message: BatchArchiveOptions, reader: jspb.BinaryReader): BatchArchiveOptions;
}

export namespace BatchArchiveOptions {
    export type AsObject = {
        replay?: BatchArchiveReplayOptions.AsObject,
    }
}

export class BatchArchiveReplayOptions extends jspb.Message { 
    getReplayId(): string;
    setReplayId(value: string): BatchArchiveReplayOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchArchiveReplayOptions.AsObject;
    static toObject(includeInstance: boolean, msg: BatchArchiveReplayOptions): BatchArchiveReplayOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchArchiveReplayOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchArchiveReplayOptions;
    static deserializeBinaryFromReader(message: BatchArchiveReplayOptions, reader: jspb.BinaryReader): BatchArchiveReplayOptions;
}

export namespace BatchArchiveReplayOptions {
    export type AsObject = {
        replayId: string,
    }
}

export class BatchListOptions extends jspb.Message { 
    getCollection(): boolean;
    setCollection(value: boolean): BatchListOptions;
    getDestination(): boolean;
    setDestination(value: boolean): BatchListOptions;
    getReplay(): boolean;
    setReplay(value: boolean): BatchListOptions;
    getSchema(): boolean;
    setSchema(value: boolean): BatchListOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchListOptions.AsObject;
    static toObject(includeInstance: boolean, msg: BatchListOptions): BatchListOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchListOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchListOptions;
    static deserializeBinaryFromReader(message: BatchListOptions, reader: jspb.BinaryReader): BatchListOptions;
}

export namespace BatchListOptions {
    export type AsObject = {
        collection: boolean,
        destination: boolean,
        replay: boolean,
        schema: boolean,
    }
}

export class BatchCreateOptions extends jspb.Message { 

    hasCollection(): boolean;
    clearCollection(): void;
    getCollection(): BatchCreateCollectionOptions | undefined;
    setCollection(value?: BatchCreateCollectionOptions): BatchCreateOptions;

    hasReplay(): boolean;
    clearReplay(): void;
    getReplay(): BatchCreateReplayOptions | undefined;
    setReplay(value?: BatchCreateReplayOptions): BatchCreateOptions;

    hasDestination(): boolean;
    clearDestination(): void;
    getDestination(): BatchCreateDestinationOptions | undefined;
    setDestination(value?: BatchCreateDestinationOptions): BatchCreateOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchCreateOptions.AsObject;
    static toObject(includeInstance: boolean, msg: BatchCreateOptions): BatchCreateOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchCreateOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchCreateOptions;
    static deserializeBinaryFromReader(message: BatchCreateOptions, reader: jspb.BinaryReader): BatchCreateOptions;
}

export namespace BatchCreateOptions {
    export type AsObject = {
        collection?: BatchCreateCollectionOptions.AsObject,
        replay?: BatchCreateReplayOptions.AsObject,
        destination?: BatchCreateDestinationOptions.AsObject,
    }
}

export class BatchSearchOptions extends jspb.Message { 
    getQuery(): string;
    setQuery(value: string): BatchSearchOptions;
    getCollectionId(): string;
    setCollectionId(value: string): BatchSearchOptions;
    getPage(): number;
    setPage(value: number): BatchSearchOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchSearchOptions.AsObject;
    static toObject(includeInstance: boolean, msg: BatchSearchOptions): BatchSearchOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchSearchOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchSearchOptions;
    static deserializeBinaryFromReader(message: BatchSearchOptions, reader: jspb.BinaryReader): BatchSearchOptions;
}

export namespace BatchSearchOptions {
    export type AsObject = {
        query: string,
        collectionId: string,
        page: number,
    }
}

export class BatchCreateCollectionOptions extends jspb.Message { 
    getName(): string;
    setName(value: string): BatchCreateCollectionOptions;
    getSchemaId(): string;
    setSchemaId(value: string): BatchCreateCollectionOptions;
    getNotes(): string;
    setNotes(value: string): BatchCreateCollectionOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchCreateCollectionOptions.AsObject;
    static toObject(includeInstance: boolean, msg: BatchCreateCollectionOptions): BatchCreateCollectionOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchCreateCollectionOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchCreateCollectionOptions;
    static deserializeBinaryFromReader(message: BatchCreateCollectionOptions, reader: jspb.BinaryReader): BatchCreateCollectionOptions;
}

export namespace BatchCreateCollectionOptions {
    export type AsObject = {
        name: string,
        schemaId: string,
        notes: string,
    }
}

export class BatchCreateReplayOptions extends jspb.Message { 
    getName(): string;
    setName(value: string): BatchCreateReplayOptions;
    getType(): BatchReplayType;
    setType(value: BatchReplayType): BatchCreateReplayOptions;
    getNotes(): string;
    setNotes(value: string): BatchCreateReplayOptions;
    getCollectionId(): string;
    setCollectionId(value: string): BatchCreateReplayOptions;
    getDestinationId(): string;
    setDestinationId(value: string): BatchCreateReplayOptions;
    getQuery(): string;
    setQuery(value: string): BatchCreateReplayOptions;
    getFromTimestamp(): string;
    setFromTimestamp(value: string): BatchCreateReplayOptions;
    getToTimestamp(): string;
    setToTimestamp(value: string): BatchCreateReplayOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchCreateReplayOptions.AsObject;
    static toObject(includeInstance: boolean, msg: BatchCreateReplayOptions): BatchCreateReplayOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchCreateReplayOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchCreateReplayOptions;
    static deserializeBinaryFromReader(message: BatchCreateReplayOptions, reader: jspb.BinaryReader): BatchCreateReplayOptions;
}

export namespace BatchCreateReplayOptions {
    export type AsObject = {
        name: string,
        type: BatchReplayType,
        notes: string,
        collectionId: string,
        destinationId: string,
        query: string,
        fromTimestamp: string,
        toTimestamp: string,
    }
}

export class BatchCreateDestinationOptions extends jspb.Message { 
    getName(): string;
    setName(value: string): BatchCreateDestinationOptions;
    getNotes(): string;
    setNotes(value: string): BatchCreateDestinationOptions;
    getApiDestinationType(): string;
    setApiDestinationType(value: string): BatchCreateDestinationOptions;

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): opts_ps_write_pb.WriteGroupKafkaOptions | undefined;
    setKafka(value?: opts_ps_write_pb.WriteGroupKafkaOptions): BatchCreateDestinationOptions;

    hasRabbit(): boolean;
    clearRabbit(): void;
    getRabbit(): opts_ps_write_pb.WriteGroupRabbitOptions | undefined;
    setRabbit(value?: opts_ps_write_pb.WriteGroupRabbitOptions): BatchCreateDestinationOptions;

    hasKubemqQueue(): boolean;
    clearKubemqQueue(): void;
    getKubemqQueue(): opts_ps_write_pb.WriteGroupKubeMQQueueOptions | undefined;
    setKubemqQueue(value?: opts_ps_write_pb.WriteGroupKubeMQQueueOptions): BatchCreateDestinationOptions;

    hasAwssqs(): boolean;
    clearAwssqs(): void;
    getAwssqs(): opts_ps_write_pb.WriteGroupAWSSQSOptions | undefined;
    setAwssqs(value?: opts_ps_write_pb.WriteGroupAWSSQSOptions): BatchCreateDestinationOptions;

    hasHttp(): boolean;
    clearHttp(): void;
    getHttp(): HTTPDestination | undefined;
    setHttp(value?: HTTPDestination): BatchCreateDestinationOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchCreateDestinationOptions.AsObject;
    static toObject(includeInstance: boolean, msg: BatchCreateDestinationOptions): BatchCreateDestinationOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchCreateDestinationOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchCreateDestinationOptions;
    static deserializeBinaryFromReader(message: BatchCreateDestinationOptions, reader: jspb.BinaryReader): BatchCreateDestinationOptions;
}

export namespace BatchCreateDestinationOptions {
    export type AsObject = {
        name: string,
        notes: string,
        ApiDestinationType: string,
        kafka?: opts_ps_write_pb.WriteGroupKafkaOptions.AsObject,
        rabbit?: opts_ps_write_pb.WriteGroupRabbitOptions.AsObject,
        kubemqQueue?: opts_ps_write_pb.WriteGroupKubeMQQueueOptions.AsObject,
        awssqs?: opts_ps_write_pb.WriteGroupAWSSQSOptions.AsObject,
        http?: HTTPDestination.AsObject,
    }
}

export class HTTPDestination extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): HTTPDestination;

    getHeadersMap(): jspb.Map<string, string>;
    clearHeadersMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HTTPDestination.AsObject;
    static toObject(includeInstance: boolean, msg: HTTPDestination): HTTPDestination.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HTTPDestination, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HTTPDestination;
    static deserializeBinaryFromReader(message: HTTPDestination, reader: jspb.BinaryReader): HTTPDestination;
}

export namespace HTTPDestination {
    export type AsObject = {
        url: string,

        headersMap: Array<[string, string]>,
    }
}

export enum BatchOutputType {
    TABLE = 0,
    JSON = 1,
}

export enum BatchReplayType {
    SINGLE = 0,
    CONTINUOUS = 1,
}
