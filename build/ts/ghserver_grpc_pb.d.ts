// package: protos
// file: ghserver.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as ghserver_pb from "./ghserver_pb";

interface IGithubServerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    connect: IGithubServerService_IConnect;
}

interface IGithubServerService_IConnect extends grpc.MethodDefinition<ghserver_pb.ConnectAuthRequest, ghserver_pb.GithubEvent> {
    path: "/protos.GithubServer/Connect";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ghserver_pb.ConnectAuthRequest>;
    requestDeserialize: grpc.deserialize<ghserver_pb.ConnectAuthRequest>;
    responseSerialize: grpc.serialize<ghserver_pb.GithubEvent>;
    responseDeserialize: grpc.deserialize<ghserver_pb.GithubEvent>;
}

export const GithubServerService: IGithubServerService;

export interface IGithubServerServer extends grpc.UntypedServiceImplementation {
    connect: grpc.handleServerStreamingCall<ghserver_pb.ConnectAuthRequest, ghserver_pb.GithubEvent>;
}

export interface IGithubServerClient {
    connect(request: ghserver_pb.ConnectAuthRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ghserver_pb.GithubEvent>;
    connect(request: ghserver_pb.ConnectAuthRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ghserver_pb.GithubEvent>;
}

export class GithubServerClient extends grpc.Client implements IGithubServerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public connect(request: ghserver_pb.ConnectAuthRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ghserver_pb.GithubEvent>;
    public connect(request: ghserver_pb.ConnectAuthRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ghserver_pb.GithubEvent>;
}
