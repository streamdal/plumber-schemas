// package: protos
// file: ps_ghserver.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as ps_ghserver_pb from "./ps_ghserver_pb";

interface IGithubServerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    connect: IGithubServerService_IConnect;
}

interface IGithubServerService_IConnect extends grpc.MethodDefinition<ps_ghserver_pb.ConnectAuthRequest, ps_ghserver_pb.GithubEvent> {
    path: "/protos.GithubServer/Connect";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ps_ghserver_pb.ConnectAuthRequest>;
    requestDeserialize: grpc.deserialize<ps_ghserver_pb.ConnectAuthRequest>;
    responseSerialize: grpc.serialize<ps_ghserver_pb.GithubEvent>;
    responseDeserialize: grpc.deserialize<ps_ghserver_pb.GithubEvent>;
}

export const GithubServerService: IGithubServerService;

export interface IGithubServerServer extends grpc.UntypedServiceImplementation {
    connect: grpc.handleServerStreamingCall<ps_ghserver_pb.ConnectAuthRequest, ps_ghserver_pb.GithubEvent>;
}

export interface IGithubServerClient {
    connect(request: ps_ghserver_pb.ConnectAuthRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ps_ghserver_pb.GithubEvent>;
    connect(request: ps_ghserver_pb.ConnectAuthRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ps_ghserver_pb.GithubEvent>;
}

export class GithubServerClient extends grpc.Client implements IGithubServerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public connect(request: ps_ghserver_pb.ConnectAuthRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ps_ghserver_pb.GithubEvent>;
    public connect(request: ps_ghserver_pb.ConnectAuthRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ps_ghserver_pb.GithubEvent>;
}
