// package: protos
// file: ps_vc_server.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as ps_vc_server_pb from "./ps_vc_server_pb";

interface IVCServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    connect: IVCServiceService_IConnect;
}

interface IVCServiceService_IConnect extends grpc.MethodDefinition<ps_vc_server_pb.ConnectAuthRequest, ps_vc_server_pb.VCEvent> {
    path: "/protos.VCService/Connect";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ps_vc_server_pb.ConnectAuthRequest>;
    requestDeserialize: grpc.deserialize<ps_vc_server_pb.ConnectAuthRequest>;
    responseSerialize: grpc.serialize<ps_vc_server_pb.VCEvent>;
    responseDeserialize: grpc.deserialize<ps_vc_server_pb.VCEvent>;
}

export const VCServiceService: IVCServiceService;

export interface IVCServiceServer extends grpc.UntypedServiceImplementation {
    connect: grpc.handleServerStreamingCall<ps_vc_server_pb.ConnectAuthRequest, ps_vc_server_pb.VCEvent>;
}

export interface IVCServiceClient {
    connect(request: ps_vc_server_pb.ConnectAuthRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ps_vc_server_pb.VCEvent>;
    connect(request: ps_vc_server_pb.ConnectAuthRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ps_vc_server_pb.VCEvent>;
}

export class VCServiceClient extends grpc.Client implements IVCServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public connect(request: ps_vc_server_pb.ConnectAuthRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ps_vc_server_pb.VCEvent>;
    public connect(request: ps_vc_server_pb.ConnectAuthRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ps_vc_server_pb.VCEvent>;
}
