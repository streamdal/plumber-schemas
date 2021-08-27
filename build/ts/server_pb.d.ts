// package: protos
// file: server.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_auth_pb from "./common/auth_pb";

export class ServerConfig extends jspb.Message { 
    getNodeId(): string;
    setNodeId(value: string): ServerConfig;
    getClusterId(): string;
    setClusterId(value: string): ServerConfig;
    getGrpcListenAddress(): string;
    setGrpcListenAddress(value: string): ServerConfig;
    getAuthToken(): string;
    setAuthToken(value: string): ServerConfig;
    getInitialCluster(): string;
    setInitialCluster(value: string): ServerConfig;
    getAdvertisePeerUrl(): string;
    setAdvertisePeerUrl(value: string): ServerConfig;
    getAdvertiseClientUrl(): string;
    setAdvertiseClientUrl(value: string): ServerConfig;
    getListenerPeerUrl(): string;
    setListenerPeerUrl(value: string): ServerConfig;
    getListenerClientUrl(): string;
    setListenerClientUrl(value: string): ServerConfig;
    getPeerToken(): string;
    setPeerToken(value: string): ServerConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServerConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ServerConfig): ServerConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServerConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServerConfig;
    static deserializeBinaryFromReader(message: ServerConfig, reader: jspb.BinaryReader): ServerConfig;
}

export namespace ServerConfig {
    export type AsObject = {
        nodeId: string,
        clusterId: string,
        grpcListenAddress: string,
        authToken: string,
        initialCluster: string,
        advertisePeerUrl: string,
        advertiseClientUrl: string,
        listenerPeerUrl: string,
        listenerClientUrl: string,
        peerToken: string,
    }
}

export class GetServerConfigRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): GetServerConfigRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetServerConfigRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetServerConfigRequest): GetServerConfigRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetServerConfigRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetServerConfigRequest;
    static deserializeBinaryFromReader(message: GetServerConfigRequest, reader: jspb.BinaryReader): GetServerConfigRequest;
}

export namespace GetServerConfigRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
    }
}

export class GetServerConfigResponse extends jspb.Message { 

    hasServerConfig(): boolean;
    clearServerConfig(): void;
    getServerConfig(): ServerConfig | undefined;
    setServerConfig(value?: ServerConfig): GetServerConfigResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetServerConfigResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetServerConfigResponse): GetServerConfigResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetServerConfigResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetServerConfigResponse;
    static deserializeBinaryFromReader(message: GetServerConfigResponse, reader: jspb.BinaryReader): GetServerConfigResponse;
}

export namespace GetServerConfigResponse {
    export type AsObject = {
        serverConfig?: ServerConfig.AsObject,
    }
}
