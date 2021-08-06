// package: protos
// file: base.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as base_pb from "./base_pb";
import * as connect_pb from "./connect_pb";
import * as read_pb from "./read_pb";
import * as write_pb from "./write_pb";
import * as relay_pb from "./relay_pb";
import * as github_pb from "./github_pb";
import * as schema_pb from "./schema_pb";

interface IPlumberServerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllConnections: IPlumberServerService_IGetAllConnections;
    getConnection: IPlumberServerService_IGetConnection;
    createConnection: IPlumberServerService_ICreateConnection;
    testConnection: IPlumberServerService_ITestConnection;
    updateConnection: IPlumberServerService_IUpdateConnection;
    deleteConnection: IPlumberServerService_IDeleteConnection;
    createRead: IPlumberServerService_ICreateRead;
    startRead: IPlumberServerService_IStartRead;
    getAllReads: IPlumberServerService_IGetAllReads;
    stopRead: IPlumberServerService_IStopRead;
    resumeRead: IPlumberServerService_IResumeRead;
    deleteRead: IPlumberServerService_IDeleteRead;
    write: IPlumberServerService_IWrite;
    createRelay: IPlumberServerService_ICreateRelay;
    updateRelay: IPlumberServerService_IUpdateRelay;
    resumeRelay: IPlumberServerService_IResumeRelay;
    stopRelay: IPlumberServerService_IStopRelay;
    getAllRelays: IPlumberServerService_IGetAllRelays;
    deleteRelay: IPlumberServerService_IDeleteRelay;
    startGithubAuth: IPlumberServerService_IStartGithubAuth;
    pollGithubAuth: IPlumberServerService_IPollGithubAuth;
    isGithubAuth: IPlumberServerService_IIsGithubAuth;
    getSchema: IPlumberServerService_IGetSchema;
    getAllSchemas: IPlumberServerService_IGetAllSchemas;
    importGithub: IPlumberServerService_IImportGithub;
    importLocal: IPlumberServerService_IImportLocal;
    deleteSchema: IPlumberServerService_IDeleteSchema;
}

interface IPlumberServerService_IGetAllConnections extends grpc.MethodDefinition<connect_pb.GetAllConnectionsRequest, connect_pb.GetAllConnectionsResponse> {
    path: "/protos.PlumberServer/GetAllConnections";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<connect_pb.GetAllConnectionsRequest>;
    requestDeserialize: grpc.deserialize<connect_pb.GetAllConnectionsRequest>;
    responseSerialize: grpc.serialize<connect_pb.GetAllConnectionsResponse>;
    responseDeserialize: grpc.deserialize<connect_pb.GetAllConnectionsResponse>;
}
interface IPlumberServerService_IGetConnection extends grpc.MethodDefinition<connect_pb.GetConnectionRequest, connect_pb.GetConnectionResponse> {
    path: "/protos.PlumberServer/GetConnection";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<connect_pb.GetConnectionRequest>;
    requestDeserialize: grpc.deserialize<connect_pb.GetConnectionRequest>;
    responseSerialize: grpc.serialize<connect_pb.GetConnectionResponse>;
    responseDeserialize: grpc.deserialize<connect_pb.GetConnectionResponse>;
}
interface IPlumberServerService_ICreateConnection extends grpc.MethodDefinition<connect_pb.CreateConnectionRequest, connect_pb.CreateConnectionResponse> {
    path: "/protos.PlumberServer/CreateConnection";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<connect_pb.CreateConnectionRequest>;
    requestDeserialize: grpc.deserialize<connect_pb.CreateConnectionRequest>;
    responseSerialize: grpc.serialize<connect_pb.CreateConnectionResponse>;
    responseDeserialize: grpc.deserialize<connect_pb.CreateConnectionResponse>;
}
interface IPlumberServerService_ITestConnection extends grpc.MethodDefinition<connect_pb.TestConnectionRequest, connect_pb.TestConnectionResponse> {
    path: "/protos.PlumberServer/TestConnection";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<connect_pb.TestConnectionRequest>;
    requestDeserialize: grpc.deserialize<connect_pb.TestConnectionRequest>;
    responseSerialize: grpc.serialize<connect_pb.TestConnectionResponse>;
    responseDeserialize: grpc.deserialize<connect_pb.TestConnectionResponse>;
}
interface IPlumberServerService_IUpdateConnection extends grpc.MethodDefinition<connect_pb.UpdateConnectionRequest, connect_pb.UpdateConnectionResponse> {
    path: "/protos.PlumberServer/UpdateConnection";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<connect_pb.UpdateConnectionRequest>;
    requestDeserialize: grpc.deserialize<connect_pb.UpdateConnectionRequest>;
    responseSerialize: grpc.serialize<connect_pb.UpdateConnectionResponse>;
    responseDeserialize: grpc.deserialize<connect_pb.UpdateConnectionResponse>;
}
interface IPlumberServerService_IDeleteConnection extends grpc.MethodDefinition<connect_pb.DeleteConnectionRequest, connect_pb.DeleteConnectionResponse> {
    path: "/protos.PlumberServer/DeleteConnection";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<connect_pb.DeleteConnectionRequest>;
    requestDeserialize: grpc.deserialize<connect_pb.DeleteConnectionRequest>;
    responseSerialize: grpc.serialize<connect_pb.DeleteConnectionResponse>;
    responseDeserialize: grpc.deserialize<connect_pb.DeleteConnectionResponse>;
}
interface IPlumberServerService_ICreateRead extends grpc.MethodDefinition<read_pb.CreateReadRequest, read_pb.CreateReadResponse> {
    path: "/protos.PlumberServer/CreateRead";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<read_pb.CreateReadRequest>;
    requestDeserialize: grpc.deserialize<read_pb.CreateReadRequest>;
    responseSerialize: grpc.serialize<read_pb.CreateReadResponse>;
    responseDeserialize: grpc.deserialize<read_pb.CreateReadResponse>;
}
interface IPlumberServerService_IStartRead extends grpc.MethodDefinition<read_pb.StartReadRequest, read_pb.StartReadResponse> {
    path: "/protos.PlumberServer/StartRead";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<read_pb.StartReadRequest>;
    requestDeserialize: grpc.deserialize<read_pb.StartReadRequest>;
    responseSerialize: grpc.serialize<read_pb.StartReadResponse>;
    responseDeserialize: grpc.deserialize<read_pb.StartReadResponse>;
}
interface IPlumberServerService_IGetAllReads extends grpc.MethodDefinition<read_pb.GetAllReadsRequest, read_pb.GetAllReadsResponse> {
    path: "/protos.PlumberServer/GetAllReads";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<read_pb.GetAllReadsRequest>;
    requestDeserialize: grpc.deserialize<read_pb.GetAllReadsRequest>;
    responseSerialize: grpc.serialize<read_pb.GetAllReadsResponse>;
    responseDeserialize: grpc.deserialize<read_pb.GetAllReadsResponse>;
}
interface IPlumberServerService_IStopRead extends grpc.MethodDefinition<read_pb.StopReadRequest, read_pb.StopReadResponse> {
    path: "/protos.PlumberServer/StopRead";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<read_pb.StopReadRequest>;
    requestDeserialize: grpc.deserialize<read_pb.StopReadRequest>;
    responseSerialize: grpc.serialize<read_pb.StopReadResponse>;
    responseDeserialize: grpc.deserialize<read_pb.StopReadResponse>;
}
interface IPlumberServerService_IResumeRead extends grpc.MethodDefinition<read_pb.ResumeReadRequest, read_pb.ResumeReadResponse> {
    path: "/protos.PlumberServer/ResumeRead";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<read_pb.ResumeReadRequest>;
    requestDeserialize: grpc.deserialize<read_pb.ResumeReadRequest>;
    responseSerialize: grpc.serialize<read_pb.ResumeReadResponse>;
    responseDeserialize: grpc.deserialize<read_pb.ResumeReadResponse>;
}
interface IPlumberServerService_IDeleteRead extends grpc.MethodDefinition<read_pb.DeleteReadRequest, read_pb.DeleteReadResponse> {
    path: "/protos.PlumberServer/DeleteRead";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<read_pb.DeleteReadRequest>;
    requestDeserialize: grpc.deserialize<read_pb.DeleteReadRequest>;
    responseSerialize: grpc.serialize<read_pb.DeleteReadResponse>;
    responseDeserialize: grpc.deserialize<read_pb.DeleteReadResponse>;
}
interface IPlumberServerService_IWrite extends grpc.MethodDefinition<write_pb.WriteRequest, write_pb.WriteResponse> {
    path: "/protos.PlumberServer/Write";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<write_pb.WriteRequest>;
    requestDeserialize: grpc.deserialize<write_pb.WriteRequest>;
    responseSerialize: grpc.serialize<write_pb.WriteResponse>;
    responseDeserialize: grpc.deserialize<write_pb.WriteResponse>;
}
interface IPlumberServerService_ICreateRelay extends grpc.MethodDefinition<relay_pb.CreateRelayRequest, relay_pb.CreateRelayResponse> {
    path: "/protos.PlumberServer/CreateRelay";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<relay_pb.CreateRelayRequest>;
    requestDeserialize: grpc.deserialize<relay_pb.CreateRelayRequest>;
    responseSerialize: grpc.serialize<relay_pb.CreateRelayResponse>;
    responseDeserialize: grpc.deserialize<relay_pb.CreateRelayResponse>;
}
interface IPlumberServerService_IUpdateRelay extends grpc.MethodDefinition<relay_pb.UpdateRelayRequest, relay_pb.UpdateRelayResponse> {
    path: "/protos.PlumberServer/UpdateRelay";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<relay_pb.UpdateRelayRequest>;
    requestDeserialize: grpc.deserialize<relay_pb.UpdateRelayRequest>;
    responseSerialize: grpc.serialize<relay_pb.UpdateRelayResponse>;
    responseDeserialize: grpc.deserialize<relay_pb.UpdateRelayResponse>;
}
interface IPlumberServerService_IResumeRelay extends grpc.MethodDefinition<relay_pb.ResumeRelayRequest, relay_pb.ResumeRelayResponse> {
    path: "/protos.PlumberServer/ResumeRelay";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<relay_pb.ResumeRelayRequest>;
    requestDeserialize: grpc.deserialize<relay_pb.ResumeRelayRequest>;
    responseSerialize: grpc.serialize<relay_pb.ResumeRelayResponse>;
    responseDeserialize: grpc.deserialize<relay_pb.ResumeRelayResponse>;
}
interface IPlumberServerService_IStopRelay extends grpc.MethodDefinition<relay_pb.StopRelayRequest, relay_pb.StopRelayResponse> {
    path: "/protos.PlumberServer/StopRelay";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<relay_pb.StopRelayRequest>;
    requestDeserialize: grpc.deserialize<relay_pb.StopRelayRequest>;
    responseSerialize: grpc.serialize<relay_pb.StopRelayResponse>;
    responseDeserialize: grpc.deserialize<relay_pb.StopRelayResponse>;
}
interface IPlumberServerService_IGetAllRelays extends grpc.MethodDefinition<relay_pb.GetAllRelaysRequest, relay_pb.GetAllRelaysResponse> {
    path: "/protos.PlumberServer/GetAllRelays";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<relay_pb.GetAllRelaysRequest>;
    requestDeserialize: grpc.deserialize<relay_pb.GetAllRelaysRequest>;
    responseSerialize: grpc.serialize<relay_pb.GetAllRelaysResponse>;
    responseDeserialize: grpc.deserialize<relay_pb.GetAllRelaysResponse>;
}
interface IPlumberServerService_IDeleteRelay extends grpc.MethodDefinition<relay_pb.DeleteRelayRequest, relay_pb.DeleteRelayResponse> {
    path: "/protos.PlumberServer/DeleteRelay";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<relay_pb.DeleteRelayRequest>;
    requestDeserialize: grpc.deserialize<relay_pb.DeleteRelayRequest>;
    responseSerialize: grpc.serialize<relay_pb.DeleteRelayResponse>;
    responseDeserialize: grpc.deserialize<relay_pb.DeleteRelayResponse>;
}
interface IPlumberServerService_IStartGithubAuth extends grpc.MethodDefinition<github_pb.StartGithubAuthRequest, github_pb.StartGithubAuthResponse> {
    path: "/protos.PlumberServer/StartGithubAuth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<github_pb.StartGithubAuthRequest>;
    requestDeserialize: grpc.deserialize<github_pb.StartGithubAuthRequest>;
    responseSerialize: grpc.serialize<github_pb.StartGithubAuthResponse>;
    responseDeserialize: grpc.deserialize<github_pb.StartGithubAuthResponse>;
}
interface IPlumberServerService_IPollGithubAuth extends grpc.MethodDefinition<github_pb.PollGithubAuthRequest, github_pb.PollGithubAuthResponse> {
    path: "/protos.PlumberServer/PollGithubAuth";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<github_pb.PollGithubAuthRequest>;
    requestDeserialize: grpc.deserialize<github_pb.PollGithubAuthRequest>;
    responseSerialize: grpc.serialize<github_pb.PollGithubAuthResponse>;
    responseDeserialize: grpc.deserialize<github_pb.PollGithubAuthResponse>;
}
interface IPlumberServerService_IIsGithubAuth extends grpc.MethodDefinition<github_pb.IsGithubAuthRequest, github_pb.IsGithubAuthResponse> {
    path: "/protos.PlumberServer/IsGithubAuth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<github_pb.IsGithubAuthRequest>;
    requestDeserialize: grpc.deserialize<github_pb.IsGithubAuthRequest>;
    responseSerialize: grpc.serialize<github_pb.IsGithubAuthResponse>;
    responseDeserialize: grpc.deserialize<github_pb.IsGithubAuthResponse>;
}
interface IPlumberServerService_IGetSchema extends grpc.MethodDefinition<schema_pb.GetSchemaRequest, schema_pb.GetSchemaResponse> {
    path: "/protos.PlumberServer/GetSchema";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.GetSchemaRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.GetSchemaRequest>;
    responseSerialize: grpc.serialize<schema_pb.GetSchemaResponse>;
    responseDeserialize: grpc.deserialize<schema_pb.GetSchemaResponse>;
}
interface IPlumberServerService_IGetAllSchemas extends grpc.MethodDefinition<schema_pb.GetAllSchemasRequest, schema_pb.GetAllSchemasResponse> {
    path: "/protos.PlumberServer/GetAllSchemas";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.GetAllSchemasRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.GetAllSchemasRequest>;
    responseSerialize: grpc.serialize<schema_pb.GetAllSchemasResponse>;
    responseDeserialize: grpc.deserialize<schema_pb.GetAllSchemasResponse>;
}
interface IPlumberServerService_IImportGithub extends grpc.MethodDefinition<schema_pb.ImportGithubRequest, schema_pb.ImportGithubResponse> {
    path: "/protos.PlumberServer/ImportGithub";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.ImportGithubRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.ImportGithubRequest>;
    responseSerialize: grpc.serialize<schema_pb.ImportGithubResponse>;
    responseDeserialize: grpc.deserialize<schema_pb.ImportGithubResponse>;
}
interface IPlumberServerService_IImportLocal extends grpc.MethodDefinition<schema_pb.ImportLocalRequest, schema_pb.ImportLocalResponse> {
    path: "/protos.PlumberServer/ImportLocal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.ImportLocalRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.ImportLocalRequest>;
    responseSerialize: grpc.serialize<schema_pb.ImportLocalResponse>;
    responseDeserialize: grpc.deserialize<schema_pb.ImportLocalResponse>;
}
interface IPlumberServerService_IDeleteSchema extends grpc.MethodDefinition<schema_pb.DeleteSchemaRequest, schema_pb.DeleteSchemaResponse> {
    path: "/protos.PlumberServer/DeleteSchema";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.DeleteSchemaRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.DeleteSchemaRequest>;
    responseSerialize: grpc.serialize<schema_pb.DeleteSchemaResponse>;
    responseDeserialize: grpc.deserialize<schema_pb.DeleteSchemaResponse>;
}

export const PlumberServerService: IPlumberServerService;

export interface IPlumberServerServer extends grpc.UntypedServiceImplementation {
    getAllConnections: grpc.handleUnaryCall<connect_pb.GetAllConnectionsRequest, connect_pb.GetAllConnectionsResponse>;
    getConnection: grpc.handleUnaryCall<connect_pb.GetConnectionRequest, connect_pb.GetConnectionResponse>;
    createConnection: grpc.handleUnaryCall<connect_pb.CreateConnectionRequest, connect_pb.CreateConnectionResponse>;
    testConnection: grpc.handleUnaryCall<connect_pb.TestConnectionRequest, connect_pb.TestConnectionResponse>;
    updateConnection: grpc.handleUnaryCall<connect_pb.UpdateConnectionRequest, connect_pb.UpdateConnectionResponse>;
    deleteConnection: grpc.handleUnaryCall<connect_pb.DeleteConnectionRequest, connect_pb.DeleteConnectionResponse>;
    createRead: grpc.handleUnaryCall<read_pb.CreateReadRequest, read_pb.CreateReadResponse>;
    startRead: grpc.handleServerStreamingCall<read_pb.StartReadRequest, read_pb.StartReadResponse>;
    getAllReads: grpc.handleUnaryCall<read_pb.GetAllReadsRequest, read_pb.GetAllReadsResponse>;
    stopRead: grpc.handleUnaryCall<read_pb.StopReadRequest, read_pb.StopReadResponse>;
    resumeRead: grpc.handleUnaryCall<read_pb.ResumeReadRequest, read_pb.ResumeReadResponse>;
    deleteRead: grpc.handleUnaryCall<read_pb.DeleteReadRequest, read_pb.DeleteReadResponse>;
    write: grpc.handleUnaryCall<write_pb.WriteRequest, write_pb.WriteResponse>;
    createRelay: grpc.handleUnaryCall<relay_pb.CreateRelayRequest, relay_pb.CreateRelayResponse>;
    updateRelay: grpc.handleUnaryCall<relay_pb.UpdateRelayRequest, relay_pb.UpdateRelayResponse>;
    resumeRelay: grpc.handleUnaryCall<relay_pb.ResumeRelayRequest, relay_pb.ResumeRelayResponse>;
    stopRelay: grpc.handleUnaryCall<relay_pb.StopRelayRequest, relay_pb.StopRelayResponse>;
    getAllRelays: grpc.handleUnaryCall<relay_pb.GetAllRelaysRequest, relay_pb.GetAllRelaysResponse>;
    deleteRelay: grpc.handleUnaryCall<relay_pb.DeleteRelayRequest, relay_pb.DeleteRelayResponse>;
    startGithubAuth: grpc.handleUnaryCall<github_pb.StartGithubAuthRequest, github_pb.StartGithubAuthResponse>;
    pollGithubAuth: grpc.handleServerStreamingCall<github_pb.PollGithubAuthRequest, github_pb.PollGithubAuthResponse>;
    isGithubAuth: grpc.handleUnaryCall<github_pb.IsGithubAuthRequest, github_pb.IsGithubAuthResponse>;
    getSchema: grpc.handleUnaryCall<schema_pb.GetSchemaRequest, schema_pb.GetSchemaResponse>;
    getAllSchemas: grpc.handleUnaryCall<schema_pb.GetAllSchemasRequest, schema_pb.GetAllSchemasResponse>;
    importGithub: grpc.handleUnaryCall<schema_pb.ImportGithubRequest, schema_pb.ImportGithubResponse>;
    importLocal: grpc.handleUnaryCall<schema_pb.ImportLocalRequest, schema_pb.ImportLocalResponse>;
    deleteSchema: grpc.handleUnaryCall<schema_pb.DeleteSchemaRequest, schema_pb.DeleteSchemaResponse>;
}

export interface IPlumberServerClient {
    getAllConnections(request: connect_pb.GetAllConnectionsRequest, callback: (error: grpc.ServiceError | null, response: connect_pb.GetAllConnectionsResponse) => void): grpc.ClientUnaryCall;
    getAllConnections(request: connect_pb.GetAllConnectionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: connect_pb.GetAllConnectionsResponse) => void): grpc.ClientUnaryCall;
    getAllConnections(request: connect_pb.GetAllConnectionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: connect_pb.GetAllConnectionsResponse) => void): grpc.ClientUnaryCall;
    getConnection(request: connect_pb.GetConnectionRequest, callback: (error: grpc.ServiceError | null, response: connect_pb.GetConnectionResponse) => void): grpc.ClientUnaryCall;
    getConnection(request: connect_pb.GetConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: connect_pb.GetConnectionResponse) => void): grpc.ClientUnaryCall;
    getConnection(request: connect_pb.GetConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: connect_pb.GetConnectionResponse) => void): grpc.ClientUnaryCall;
    createConnection(request: connect_pb.CreateConnectionRequest, callback: (error: grpc.ServiceError | null, response: connect_pb.CreateConnectionResponse) => void): grpc.ClientUnaryCall;
    createConnection(request: connect_pb.CreateConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: connect_pb.CreateConnectionResponse) => void): grpc.ClientUnaryCall;
    createConnection(request: connect_pb.CreateConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: connect_pb.CreateConnectionResponse) => void): grpc.ClientUnaryCall;
    testConnection(request: connect_pb.TestConnectionRequest, callback: (error: grpc.ServiceError | null, response: connect_pb.TestConnectionResponse) => void): grpc.ClientUnaryCall;
    testConnection(request: connect_pb.TestConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: connect_pb.TestConnectionResponse) => void): grpc.ClientUnaryCall;
    testConnection(request: connect_pb.TestConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: connect_pb.TestConnectionResponse) => void): grpc.ClientUnaryCall;
    updateConnection(request: connect_pb.UpdateConnectionRequest, callback: (error: grpc.ServiceError | null, response: connect_pb.UpdateConnectionResponse) => void): grpc.ClientUnaryCall;
    updateConnection(request: connect_pb.UpdateConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: connect_pb.UpdateConnectionResponse) => void): grpc.ClientUnaryCall;
    updateConnection(request: connect_pb.UpdateConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: connect_pb.UpdateConnectionResponse) => void): grpc.ClientUnaryCall;
    deleteConnection(request: connect_pb.DeleteConnectionRequest, callback: (error: grpc.ServiceError | null, response: connect_pb.DeleteConnectionResponse) => void): grpc.ClientUnaryCall;
    deleteConnection(request: connect_pb.DeleteConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: connect_pb.DeleteConnectionResponse) => void): grpc.ClientUnaryCall;
    deleteConnection(request: connect_pb.DeleteConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: connect_pb.DeleteConnectionResponse) => void): grpc.ClientUnaryCall;
    createRead(request: read_pb.CreateReadRequest, callback: (error: grpc.ServiceError | null, response: read_pb.CreateReadResponse) => void): grpc.ClientUnaryCall;
    createRead(request: read_pb.CreateReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: read_pb.CreateReadResponse) => void): grpc.ClientUnaryCall;
    createRead(request: read_pb.CreateReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: read_pb.CreateReadResponse) => void): grpc.ClientUnaryCall;
    startRead(request: read_pb.StartReadRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<read_pb.StartReadResponse>;
    startRead(request: read_pb.StartReadRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<read_pb.StartReadResponse>;
    getAllReads(request: read_pb.GetAllReadsRequest, callback: (error: grpc.ServiceError | null, response: read_pb.GetAllReadsResponse) => void): grpc.ClientUnaryCall;
    getAllReads(request: read_pb.GetAllReadsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: read_pb.GetAllReadsResponse) => void): grpc.ClientUnaryCall;
    getAllReads(request: read_pb.GetAllReadsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: read_pb.GetAllReadsResponse) => void): grpc.ClientUnaryCall;
    stopRead(request: read_pb.StopReadRequest, callback: (error: grpc.ServiceError | null, response: read_pb.StopReadResponse) => void): grpc.ClientUnaryCall;
    stopRead(request: read_pb.StopReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: read_pb.StopReadResponse) => void): grpc.ClientUnaryCall;
    stopRead(request: read_pb.StopReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: read_pb.StopReadResponse) => void): grpc.ClientUnaryCall;
    resumeRead(request: read_pb.ResumeReadRequest, callback: (error: grpc.ServiceError | null, response: read_pb.ResumeReadResponse) => void): grpc.ClientUnaryCall;
    resumeRead(request: read_pb.ResumeReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: read_pb.ResumeReadResponse) => void): grpc.ClientUnaryCall;
    resumeRead(request: read_pb.ResumeReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: read_pb.ResumeReadResponse) => void): grpc.ClientUnaryCall;
    deleteRead(request: read_pb.DeleteReadRequest, callback: (error: grpc.ServiceError | null, response: read_pb.DeleteReadResponse) => void): grpc.ClientUnaryCall;
    deleteRead(request: read_pb.DeleteReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: read_pb.DeleteReadResponse) => void): grpc.ClientUnaryCall;
    deleteRead(request: read_pb.DeleteReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: read_pb.DeleteReadResponse) => void): grpc.ClientUnaryCall;
    write(request: write_pb.WriteRequest, callback: (error: grpc.ServiceError | null, response: write_pb.WriteResponse) => void): grpc.ClientUnaryCall;
    write(request: write_pb.WriteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: write_pb.WriteResponse) => void): grpc.ClientUnaryCall;
    write(request: write_pb.WriteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: write_pb.WriteResponse) => void): grpc.ClientUnaryCall;
    createRelay(request: relay_pb.CreateRelayRequest, callback: (error: grpc.ServiceError | null, response: relay_pb.CreateRelayResponse) => void): grpc.ClientUnaryCall;
    createRelay(request: relay_pb.CreateRelayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: relay_pb.CreateRelayResponse) => void): grpc.ClientUnaryCall;
    createRelay(request: relay_pb.CreateRelayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: relay_pb.CreateRelayResponse) => void): grpc.ClientUnaryCall;
    updateRelay(request: relay_pb.UpdateRelayRequest, callback: (error: grpc.ServiceError | null, response: relay_pb.UpdateRelayResponse) => void): grpc.ClientUnaryCall;
    updateRelay(request: relay_pb.UpdateRelayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: relay_pb.UpdateRelayResponse) => void): grpc.ClientUnaryCall;
    updateRelay(request: relay_pb.UpdateRelayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: relay_pb.UpdateRelayResponse) => void): grpc.ClientUnaryCall;
    resumeRelay(request: relay_pb.ResumeRelayRequest, callback: (error: grpc.ServiceError | null, response: relay_pb.ResumeRelayResponse) => void): grpc.ClientUnaryCall;
    resumeRelay(request: relay_pb.ResumeRelayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: relay_pb.ResumeRelayResponse) => void): grpc.ClientUnaryCall;
    resumeRelay(request: relay_pb.ResumeRelayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: relay_pb.ResumeRelayResponse) => void): grpc.ClientUnaryCall;
    stopRelay(request: relay_pb.StopRelayRequest, callback: (error: grpc.ServiceError | null, response: relay_pb.StopRelayResponse) => void): grpc.ClientUnaryCall;
    stopRelay(request: relay_pb.StopRelayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: relay_pb.StopRelayResponse) => void): grpc.ClientUnaryCall;
    stopRelay(request: relay_pb.StopRelayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: relay_pb.StopRelayResponse) => void): grpc.ClientUnaryCall;
    getAllRelays(request: relay_pb.GetAllRelaysRequest, callback: (error: grpc.ServiceError | null, response: relay_pb.GetAllRelaysResponse) => void): grpc.ClientUnaryCall;
    getAllRelays(request: relay_pb.GetAllRelaysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: relay_pb.GetAllRelaysResponse) => void): grpc.ClientUnaryCall;
    getAllRelays(request: relay_pb.GetAllRelaysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: relay_pb.GetAllRelaysResponse) => void): grpc.ClientUnaryCall;
    deleteRelay(request: relay_pb.DeleteRelayRequest, callback: (error: grpc.ServiceError | null, response: relay_pb.DeleteRelayResponse) => void): grpc.ClientUnaryCall;
    deleteRelay(request: relay_pb.DeleteRelayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: relay_pb.DeleteRelayResponse) => void): grpc.ClientUnaryCall;
    deleteRelay(request: relay_pb.DeleteRelayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: relay_pb.DeleteRelayResponse) => void): grpc.ClientUnaryCall;
    startGithubAuth(request: github_pb.StartGithubAuthRequest, callback: (error: grpc.ServiceError | null, response: github_pb.StartGithubAuthResponse) => void): grpc.ClientUnaryCall;
    startGithubAuth(request: github_pb.StartGithubAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: github_pb.StartGithubAuthResponse) => void): grpc.ClientUnaryCall;
    startGithubAuth(request: github_pb.StartGithubAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: github_pb.StartGithubAuthResponse) => void): grpc.ClientUnaryCall;
    pollGithubAuth(request: github_pb.PollGithubAuthRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<github_pb.PollGithubAuthResponse>;
    pollGithubAuth(request: github_pb.PollGithubAuthRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<github_pb.PollGithubAuthResponse>;
    isGithubAuth(request: github_pb.IsGithubAuthRequest, callback: (error: grpc.ServiceError | null, response: github_pb.IsGithubAuthResponse) => void): grpc.ClientUnaryCall;
    isGithubAuth(request: github_pb.IsGithubAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: github_pb.IsGithubAuthResponse) => void): grpc.ClientUnaryCall;
    isGithubAuth(request: github_pb.IsGithubAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: github_pb.IsGithubAuthResponse) => void): grpc.ClientUnaryCall;
    getSchema(request: schema_pb.GetSchemaRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    getSchema(request: schema_pb.GetSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    getSchema(request: schema_pb.GetSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    getAllSchemas(request: schema_pb.GetAllSchemasRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.GetAllSchemasResponse) => void): grpc.ClientUnaryCall;
    getAllSchemas(request: schema_pb.GetAllSchemasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.GetAllSchemasResponse) => void): grpc.ClientUnaryCall;
    getAllSchemas(request: schema_pb.GetAllSchemasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.GetAllSchemasResponse) => void): grpc.ClientUnaryCall;
    importGithub(request: schema_pb.ImportGithubRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.ImportGithubResponse) => void): grpc.ClientUnaryCall;
    importGithub(request: schema_pb.ImportGithubRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ImportGithubResponse) => void): grpc.ClientUnaryCall;
    importGithub(request: schema_pb.ImportGithubRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ImportGithubResponse) => void): grpc.ClientUnaryCall;
    importLocal(request: schema_pb.ImportLocalRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.ImportLocalResponse) => void): grpc.ClientUnaryCall;
    importLocal(request: schema_pb.ImportLocalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ImportLocalResponse) => void): grpc.ClientUnaryCall;
    importLocal(request: schema_pb.ImportLocalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ImportLocalResponse) => void): grpc.ClientUnaryCall;
    deleteSchema(request: schema_pb.DeleteSchemaRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
    deleteSchema(request: schema_pb.DeleteSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
    deleteSchema(request: schema_pb.DeleteSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
}

export class PlumberServerClient extends grpc.Client implements IPlumberServerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllConnections(request: connect_pb.GetAllConnectionsRequest, callback: (error: grpc.ServiceError | null, response: connect_pb.GetAllConnectionsResponse) => void): grpc.ClientUnaryCall;
    public getAllConnections(request: connect_pb.GetAllConnectionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: connect_pb.GetAllConnectionsResponse) => void): grpc.ClientUnaryCall;
    public getAllConnections(request: connect_pb.GetAllConnectionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: connect_pb.GetAllConnectionsResponse) => void): grpc.ClientUnaryCall;
    public getConnection(request: connect_pb.GetConnectionRequest, callback: (error: grpc.ServiceError | null, response: connect_pb.GetConnectionResponse) => void): grpc.ClientUnaryCall;
    public getConnection(request: connect_pb.GetConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: connect_pb.GetConnectionResponse) => void): grpc.ClientUnaryCall;
    public getConnection(request: connect_pb.GetConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: connect_pb.GetConnectionResponse) => void): grpc.ClientUnaryCall;
    public createConnection(request: connect_pb.CreateConnectionRequest, callback: (error: grpc.ServiceError | null, response: connect_pb.CreateConnectionResponse) => void): grpc.ClientUnaryCall;
    public createConnection(request: connect_pb.CreateConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: connect_pb.CreateConnectionResponse) => void): grpc.ClientUnaryCall;
    public createConnection(request: connect_pb.CreateConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: connect_pb.CreateConnectionResponse) => void): grpc.ClientUnaryCall;
    public testConnection(request: connect_pb.TestConnectionRequest, callback: (error: grpc.ServiceError | null, response: connect_pb.TestConnectionResponse) => void): grpc.ClientUnaryCall;
    public testConnection(request: connect_pb.TestConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: connect_pb.TestConnectionResponse) => void): grpc.ClientUnaryCall;
    public testConnection(request: connect_pb.TestConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: connect_pb.TestConnectionResponse) => void): grpc.ClientUnaryCall;
    public updateConnection(request: connect_pb.UpdateConnectionRequest, callback: (error: grpc.ServiceError | null, response: connect_pb.UpdateConnectionResponse) => void): grpc.ClientUnaryCall;
    public updateConnection(request: connect_pb.UpdateConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: connect_pb.UpdateConnectionResponse) => void): grpc.ClientUnaryCall;
    public updateConnection(request: connect_pb.UpdateConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: connect_pb.UpdateConnectionResponse) => void): grpc.ClientUnaryCall;
    public deleteConnection(request: connect_pb.DeleteConnectionRequest, callback: (error: grpc.ServiceError | null, response: connect_pb.DeleteConnectionResponse) => void): grpc.ClientUnaryCall;
    public deleteConnection(request: connect_pb.DeleteConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: connect_pb.DeleteConnectionResponse) => void): grpc.ClientUnaryCall;
    public deleteConnection(request: connect_pb.DeleteConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: connect_pb.DeleteConnectionResponse) => void): grpc.ClientUnaryCall;
    public createRead(request: read_pb.CreateReadRequest, callback: (error: grpc.ServiceError | null, response: read_pb.CreateReadResponse) => void): grpc.ClientUnaryCall;
    public createRead(request: read_pb.CreateReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: read_pb.CreateReadResponse) => void): grpc.ClientUnaryCall;
    public createRead(request: read_pb.CreateReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: read_pb.CreateReadResponse) => void): grpc.ClientUnaryCall;
    public startRead(request: read_pb.StartReadRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<read_pb.StartReadResponse>;
    public startRead(request: read_pb.StartReadRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<read_pb.StartReadResponse>;
    public getAllReads(request: read_pb.GetAllReadsRequest, callback: (error: grpc.ServiceError | null, response: read_pb.GetAllReadsResponse) => void): grpc.ClientUnaryCall;
    public getAllReads(request: read_pb.GetAllReadsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: read_pb.GetAllReadsResponse) => void): grpc.ClientUnaryCall;
    public getAllReads(request: read_pb.GetAllReadsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: read_pb.GetAllReadsResponse) => void): grpc.ClientUnaryCall;
    public stopRead(request: read_pb.StopReadRequest, callback: (error: grpc.ServiceError | null, response: read_pb.StopReadResponse) => void): grpc.ClientUnaryCall;
    public stopRead(request: read_pb.StopReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: read_pb.StopReadResponse) => void): grpc.ClientUnaryCall;
    public stopRead(request: read_pb.StopReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: read_pb.StopReadResponse) => void): grpc.ClientUnaryCall;
    public resumeRead(request: read_pb.ResumeReadRequest, callback: (error: grpc.ServiceError | null, response: read_pb.ResumeReadResponse) => void): grpc.ClientUnaryCall;
    public resumeRead(request: read_pb.ResumeReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: read_pb.ResumeReadResponse) => void): grpc.ClientUnaryCall;
    public resumeRead(request: read_pb.ResumeReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: read_pb.ResumeReadResponse) => void): grpc.ClientUnaryCall;
    public deleteRead(request: read_pb.DeleteReadRequest, callback: (error: grpc.ServiceError | null, response: read_pb.DeleteReadResponse) => void): grpc.ClientUnaryCall;
    public deleteRead(request: read_pb.DeleteReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: read_pb.DeleteReadResponse) => void): grpc.ClientUnaryCall;
    public deleteRead(request: read_pb.DeleteReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: read_pb.DeleteReadResponse) => void): grpc.ClientUnaryCall;
    public write(request: write_pb.WriteRequest, callback: (error: grpc.ServiceError | null, response: write_pb.WriteResponse) => void): grpc.ClientUnaryCall;
    public write(request: write_pb.WriteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: write_pb.WriteResponse) => void): grpc.ClientUnaryCall;
    public write(request: write_pb.WriteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: write_pb.WriteResponse) => void): grpc.ClientUnaryCall;
    public createRelay(request: relay_pb.CreateRelayRequest, callback: (error: grpc.ServiceError | null, response: relay_pb.CreateRelayResponse) => void): grpc.ClientUnaryCall;
    public createRelay(request: relay_pb.CreateRelayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: relay_pb.CreateRelayResponse) => void): grpc.ClientUnaryCall;
    public createRelay(request: relay_pb.CreateRelayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: relay_pb.CreateRelayResponse) => void): grpc.ClientUnaryCall;
    public updateRelay(request: relay_pb.UpdateRelayRequest, callback: (error: grpc.ServiceError | null, response: relay_pb.UpdateRelayResponse) => void): grpc.ClientUnaryCall;
    public updateRelay(request: relay_pb.UpdateRelayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: relay_pb.UpdateRelayResponse) => void): grpc.ClientUnaryCall;
    public updateRelay(request: relay_pb.UpdateRelayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: relay_pb.UpdateRelayResponse) => void): grpc.ClientUnaryCall;
    public resumeRelay(request: relay_pb.ResumeRelayRequest, callback: (error: grpc.ServiceError | null, response: relay_pb.ResumeRelayResponse) => void): grpc.ClientUnaryCall;
    public resumeRelay(request: relay_pb.ResumeRelayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: relay_pb.ResumeRelayResponse) => void): grpc.ClientUnaryCall;
    public resumeRelay(request: relay_pb.ResumeRelayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: relay_pb.ResumeRelayResponse) => void): grpc.ClientUnaryCall;
    public stopRelay(request: relay_pb.StopRelayRequest, callback: (error: grpc.ServiceError | null, response: relay_pb.StopRelayResponse) => void): grpc.ClientUnaryCall;
    public stopRelay(request: relay_pb.StopRelayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: relay_pb.StopRelayResponse) => void): grpc.ClientUnaryCall;
    public stopRelay(request: relay_pb.StopRelayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: relay_pb.StopRelayResponse) => void): grpc.ClientUnaryCall;
    public getAllRelays(request: relay_pb.GetAllRelaysRequest, callback: (error: grpc.ServiceError | null, response: relay_pb.GetAllRelaysResponse) => void): grpc.ClientUnaryCall;
    public getAllRelays(request: relay_pb.GetAllRelaysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: relay_pb.GetAllRelaysResponse) => void): grpc.ClientUnaryCall;
    public getAllRelays(request: relay_pb.GetAllRelaysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: relay_pb.GetAllRelaysResponse) => void): grpc.ClientUnaryCall;
    public deleteRelay(request: relay_pb.DeleteRelayRequest, callback: (error: grpc.ServiceError | null, response: relay_pb.DeleteRelayResponse) => void): grpc.ClientUnaryCall;
    public deleteRelay(request: relay_pb.DeleteRelayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: relay_pb.DeleteRelayResponse) => void): grpc.ClientUnaryCall;
    public deleteRelay(request: relay_pb.DeleteRelayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: relay_pb.DeleteRelayResponse) => void): grpc.ClientUnaryCall;
    public startGithubAuth(request: github_pb.StartGithubAuthRequest, callback: (error: grpc.ServiceError | null, response: github_pb.StartGithubAuthResponse) => void): grpc.ClientUnaryCall;
    public startGithubAuth(request: github_pb.StartGithubAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: github_pb.StartGithubAuthResponse) => void): grpc.ClientUnaryCall;
    public startGithubAuth(request: github_pb.StartGithubAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: github_pb.StartGithubAuthResponse) => void): grpc.ClientUnaryCall;
    public pollGithubAuth(request: github_pb.PollGithubAuthRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<github_pb.PollGithubAuthResponse>;
    public pollGithubAuth(request: github_pb.PollGithubAuthRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<github_pb.PollGithubAuthResponse>;
    public isGithubAuth(request: github_pb.IsGithubAuthRequest, callback: (error: grpc.ServiceError | null, response: github_pb.IsGithubAuthResponse) => void): grpc.ClientUnaryCall;
    public isGithubAuth(request: github_pb.IsGithubAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: github_pb.IsGithubAuthResponse) => void): grpc.ClientUnaryCall;
    public isGithubAuth(request: github_pb.IsGithubAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: github_pb.IsGithubAuthResponse) => void): grpc.ClientUnaryCall;
    public getSchema(request: schema_pb.GetSchemaRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    public getSchema(request: schema_pb.GetSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    public getSchema(request: schema_pb.GetSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    public getAllSchemas(request: schema_pb.GetAllSchemasRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.GetAllSchemasResponse) => void): grpc.ClientUnaryCall;
    public getAllSchemas(request: schema_pb.GetAllSchemasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.GetAllSchemasResponse) => void): grpc.ClientUnaryCall;
    public getAllSchemas(request: schema_pb.GetAllSchemasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.GetAllSchemasResponse) => void): grpc.ClientUnaryCall;
    public importGithub(request: schema_pb.ImportGithubRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.ImportGithubResponse) => void): grpc.ClientUnaryCall;
    public importGithub(request: schema_pb.ImportGithubRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ImportGithubResponse) => void): grpc.ClientUnaryCall;
    public importGithub(request: schema_pb.ImportGithubRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ImportGithubResponse) => void): grpc.ClientUnaryCall;
    public importLocal(request: schema_pb.ImportLocalRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.ImportLocalResponse) => void): grpc.ClientUnaryCall;
    public importLocal(request: schema_pb.ImportLocalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ImportLocalResponse) => void): grpc.ClientUnaryCall;
    public importLocal(request: schema_pb.ImportLocalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ImportLocalResponse) => void): grpc.ClientUnaryCall;
    public deleteSchema(request: schema_pb.DeleteSchemaRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
    public deleteSchema(request: schema_pb.DeleteSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
    public deleteSchema(request: schema_pb.DeleteSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
}
