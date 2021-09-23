// package: protos.opts
// file: opts/ps_opts_server.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ServerOptions extends jspb.Message { 
    getNodeId(): string;
    setNodeId(value: string): ServerOptions;
    getClusterId(): string;
    setClusterId(value: string): ServerOptions;
    getGrpcListenAddress(): string;
    setGrpcListenAddress(value: string): ServerOptions;
    getAuthToken(): string;
    setAuthToken(value: string): ServerOptions;
    getInitialCluster(): string;
    setInitialCluster(value: string): ServerOptions;
    getAdvertisePeerUrl(): string;
    setAdvertisePeerUrl(value: string): ServerOptions;
    getAdvertiseClientUrl(): string;
    setAdvertiseClientUrl(value: string): ServerOptions;
    getListenerPeerUrl(): string;
    setListenerPeerUrl(value: string): ServerOptions;
    getListenerClientUrl(): string;
    setListenerClientUrl(value: string): ServerOptions;
    getPeerToken(): string;
    setPeerToken(value: string): ServerOptions;
    getVcserviceGrpcAddress(): string;
    setVcserviceGrpcAddress(value: string): ServerOptions;
    getVcserviceGrpcTimeoutSeconds(): number;
    setVcserviceGrpcTimeoutSeconds(value: number): ServerOptions;
    getVcserviceGrpcInsecure(): boolean;
    setVcserviceGrpcInsecure(value: boolean): ServerOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServerOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ServerOptions): ServerOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServerOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServerOptions;
    static deserializeBinaryFromReader(message: ServerOptions, reader: jspb.BinaryReader): ServerOptions;
}

export namespace ServerOptions {
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
        vcserviceGrpcAddress: string,
        vcserviceGrpcTimeoutSeconds: number,
        vcserviceGrpcInsecure: boolean,
    }
}
