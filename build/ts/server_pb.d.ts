// package: protos
// file: server.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ServerConfig extends jspb.Message { 
    getNodeId(): string;
    setNodeId(value: string): ServerConfig;
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
