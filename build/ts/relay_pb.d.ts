// package: protos
// file: relay.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as x_relay_pb from "./x_relay_pb";
import * as common_auth_pb from "./common/auth_pb";
import * as common_status_pb from "./common/status_pb";

export class CLIRelayConfig extends jspb.Message { 
    getHttpListenAddress(): string;
    setHttpListenAddress(value: string): CLIRelayConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CLIRelayConfig.AsObject;
    static toObject(includeInstance: boolean, msg: CLIRelayConfig): CLIRelayConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CLIRelayConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CLIRelayConfig;
    static deserializeBinaryFromReader(message: CLIRelayConfig, reader: jspb.BinaryReader): CLIRelayConfig;
}

export namespace CLIRelayConfig {
    export type AsObject = {
        httpListenAddress: string,
    }
}

export class RelayConfig extends jspb.Message { 
    getCollectionToken(): string;
    setCollectionToken(value: string): RelayConfig;
    getBatchSize(): number;
    setBatchSize(value: number): RelayConfig;
    getBatchMaxRetry(): number;
    setBatchMaxRetry(value: number): RelayConfig;
    getConnectionId(): string;
    setConnectionId(value: string): RelayConfig;
    getNumWorkers(): number;
    setNumWorkers(value: number): RelayConfig;
    getBatchshGrpcAddress(): string;
    setBatchshGrpcAddress(value: string): RelayConfig;
    getBatchshGrpcDisableTls(): boolean;
    setBatchshGrpcDisableTls(value: boolean): RelayConfig;
    getBatchshGrpcTimeoutSeconds(): number;
    setBatchshGrpcTimeoutSeconds(value: number): RelayConfig;

    hasRelayOpts(): boolean;
    clearRelayOpts(): void;
    getRelayOpts(): x_relay_pb.RelayOpts | undefined;
    setRelayOpts(value?: x_relay_pb.RelayOpts): RelayConfig;
    getRelayId(): string;
    setRelayId(value: string): RelayConfig;

    hasCliConfig(): boolean;
    clearCliConfig(): void;
    getCliConfig(): CLIRelayConfig | undefined;
    setCliConfig(value?: CLIRelayConfig): RelayConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RelayConfig): RelayConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayConfig;
    static deserializeBinaryFromReader(message: RelayConfig, reader: jspb.BinaryReader): RelayConfig;
}

export namespace RelayConfig {
    export type AsObject = {
        collectionToken: string,
        batchSize: number,
        batchMaxRetry: number,
        connectionId: string,
        numWorkers: number,
        BatchshGrpcAddress: string,
        BatchshGrpcDisableTls: boolean,
        BatchshGrpcTimeoutSeconds: number,
        relayOpts?: x_relay_pb.RelayOpts.AsObject,
        RelayId: string,
        CliConfig?: CLIRelayConfig.AsObject,
    }
}

export class GetAllRelaysRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): GetAllRelaysRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllRelaysRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllRelaysRequest): GetAllRelaysRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllRelaysRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllRelaysRequest;
    static deserializeBinaryFromReader(message: GetAllRelaysRequest, reader: jspb.BinaryReader): GetAllRelaysRequest;
}

export namespace GetAllRelaysRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
    }
}

export class GetAllRelaysResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): GetAllRelaysResponse;
    clearConfigsList(): void;
    getConfigsList(): Array<RelayConfig>;
    setConfigsList(value: Array<RelayConfig>): GetAllRelaysResponse;
    addConfigs(value?: RelayConfig, index?: number): RelayConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllRelaysResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllRelaysResponse): GetAllRelaysResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllRelaysResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllRelaysResponse;
    static deserializeBinaryFromReader(message: GetAllRelaysResponse, reader: jspb.BinaryReader): GetAllRelaysResponse;
}

export namespace GetAllRelaysResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
        configsList: Array<RelayConfig.AsObject>,
    }
}

export class GetRelayRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): GetRelayRequest;
    getRelayId(): string;
    setRelayId(value: string): GetRelayRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRelayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRelayRequest): GetRelayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRelayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRelayRequest;
    static deserializeBinaryFromReader(message: GetRelayRequest, reader: jspb.BinaryReader): GetRelayRequest;
}

export namespace GetRelayRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        relayId: string,
    }
}

export class GetRelayResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): GetRelayResponse;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): RelayConfig | undefined;
    setConfig(value?: RelayConfig): GetRelayResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRelayResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRelayResponse): GetRelayResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRelayResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRelayResponse;
    static deserializeBinaryFromReader(message: GetRelayResponse, reader: jspb.BinaryReader): GetRelayResponse;
}

export namespace GetRelayResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
        config?: RelayConfig.AsObject,
    }
}

export class CreateRelayRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): CreateRelayRequest;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): RelayConfig | undefined;
    setConfig(value?: RelayConfig): CreateRelayRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRelayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRelayRequest): CreateRelayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRelayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRelayRequest;
    static deserializeBinaryFromReader(message: CreateRelayRequest, reader: jspb.BinaryReader): CreateRelayRequest;
}

export namespace CreateRelayRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        config?: RelayConfig.AsObject,
    }
}

export class CreateRelayResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): CreateRelayResponse;
    getRelayId(): string;
    setRelayId(value: string): CreateRelayResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRelayResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRelayResponse): CreateRelayResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRelayResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRelayResponse;
    static deserializeBinaryFromReader(message: CreateRelayResponse, reader: jspb.BinaryReader): CreateRelayResponse;
}

export namespace CreateRelayResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
        relayId: string,
    }
}

export class UpdateRelayRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): UpdateRelayRequest;
    getRelayId(): string;
    setRelayId(value: string): UpdateRelayRequest;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): RelayConfig | undefined;
    setConfig(value?: RelayConfig): UpdateRelayRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRelayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRelayRequest): UpdateRelayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRelayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRelayRequest;
    static deserializeBinaryFromReader(message: UpdateRelayRequest, reader: jspb.BinaryReader): UpdateRelayRequest;
}

export namespace UpdateRelayRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        relayId: string,
        config?: RelayConfig.AsObject,
    }
}

export class UpdateRelayResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): UpdateRelayResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRelayResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRelayResponse): UpdateRelayResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRelayResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRelayResponse;
    static deserializeBinaryFromReader(message: UpdateRelayResponse, reader: jspb.BinaryReader): UpdateRelayResponse;
}

export namespace UpdateRelayResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
    }
}

export class ResumeRelayRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): ResumeRelayRequest;
    getRelayId(): string;
    setRelayId(value: string): ResumeRelayRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResumeRelayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ResumeRelayRequest): ResumeRelayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResumeRelayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResumeRelayRequest;
    static deserializeBinaryFromReader(message: ResumeRelayRequest, reader: jspb.BinaryReader): ResumeRelayRequest;
}

export namespace ResumeRelayRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        relayId: string,
    }
}

export class ResumeRelayResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): ResumeRelayResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResumeRelayResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ResumeRelayResponse): ResumeRelayResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResumeRelayResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResumeRelayResponse;
    static deserializeBinaryFromReader(message: ResumeRelayResponse, reader: jspb.BinaryReader): ResumeRelayResponse;
}

export namespace ResumeRelayResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
    }
}

export class StopRelayRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): StopRelayRequest;
    getRelayId(): string;
    setRelayId(value: string): StopRelayRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopRelayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopRelayRequest): StopRelayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopRelayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopRelayRequest;
    static deserializeBinaryFromReader(message: StopRelayRequest, reader: jspb.BinaryReader): StopRelayRequest;
}

export namespace StopRelayRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        relayId: string,
    }
}

export class StopRelayResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): StopRelayResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopRelayResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StopRelayResponse): StopRelayResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopRelayResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopRelayResponse;
    static deserializeBinaryFromReader(message: StopRelayResponse, reader: jspb.BinaryReader): StopRelayResponse;
}

export namespace StopRelayResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
    }
}

export class DeleteRelayRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): DeleteRelayRequest;
    getRelayId(): string;
    setRelayId(value: string): DeleteRelayRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRelayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRelayRequest): DeleteRelayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRelayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRelayRequest;
    static deserializeBinaryFromReader(message: DeleteRelayRequest, reader: jspb.BinaryReader): DeleteRelayRequest;
}

export namespace DeleteRelayRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        relayId: string,
    }
}

export class DeleteRelayResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): DeleteRelayResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRelayResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRelayResponse): DeleteRelayResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRelayResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRelayResponse;
    static deserializeBinaryFromReader(message: DeleteRelayResponse, reader: jspb.BinaryReader): DeleteRelayResponse;
}

export namespace DeleteRelayResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
    }
}
