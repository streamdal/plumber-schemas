// package: protos
// file: ps_base.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as ps_base_pb from "./ps_base_pb";
import * as ps_connect_pb from "./ps_connect_pb";
import * as ps_read_pb from "./ps_read_pb";
import * as ps_write_pb from "./ps_write_pb";
import * as ps_relay_pb from "./ps_relay_pb";
import * as ps_github_pb from "./ps_github_pb";
import * as ps_schema_pb from "./ps_schema_pb";
import * as ps_service_pb from "./ps_service_pb";
import * as ps_server_pb from "./ps_server_pb";
import * as ps_ghserver_pb from "./ps_ghserver_pb";

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
    getService: IPlumberServerService_IGetService;
    getAllServices: IPlumberServerService_IGetAllServices;
    createService: IPlumberServerService_ICreateService;
    updateService: IPlumberServerService_IUpdateService;
    deleteService: IPlumberServerService_IDeleteService;
    getServerOptions: IPlumberServerService_IGetServerOptions;
    getGithubEvents: IPlumberServerService_IGetGithubEvents;
}

interface IPlumberServerService_IGetAllConnections extends grpc.MethodDefinition<ps_connect_pb.GetAllConnectionsRequest, ps_connect_pb.GetAllConnectionsResponse> {
    path: "/protos.PlumberServer/GetAllConnections";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_connect_pb.GetAllConnectionsRequest>;
    requestDeserialize: grpc.deserialize<ps_connect_pb.GetAllConnectionsRequest>;
    responseSerialize: grpc.serialize<ps_connect_pb.GetAllConnectionsResponse>;
    responseDeserialize: grpc.deserialize<ps_connect_pb.GetAllConnectionsResponse>;
}
interface IPlumberServerService_IGetConnection extends grpc.MethodDefinition<ps_connect_pb.GetConnectionRequest, ps_connect_pb.GetConnectionResponse> {
    path: "/protos.PlumberServer/GetConnection";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_connect_pb.GetConnectionRequest>;
    requestDeserialize: grpc.deserialize<ps_connect_pb.GetConnectionRequest>;
    responseSerialize: grpc.serialize<ps_connect_pb.GetConnectionResponse>;
    responseDeserialize: grpc.deserialize<ps_connect_pb.GetConnectionResponse>;
}
interface IPlumberServerService_ICreateConnection extends grpc.MethodDefinition<ps_connect_pb.CreateConnectionRequest, ps_connect_pb.CreateConnectionResponse> {
    path: "/protos.PlumberServer/CreateConnection";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_connect_pb.CreateConnectionRequest>;
    requestDeserialize: grpc.deserialize<ps_connect_pb.CreateConnectionRequest>;
    responseSerialize: grpc.serialize<ps_connect_pb.CreateConnectionResponse>;
    responseDeserialize: grpc.deserialize<ps_connect_pb.CreateConnectionResponse>;
}
interface IPlumberServerService_ITestConnection extends grpc.MethodDefinition<ps_connect_pb.TestConnectionRequest, ps_connect_pb.TestConnectionResponse> {
    path: "/protos.PlumberServer/TestConnection";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_connect_pb.TestConnectionRequest>;
    requestDeserialize: grpc.deserialize<ps_connect_pb.TestConnectionRequest>;
    responseSerialize: grpc.serialize<ps_connect_pb.TestConnectionResponse>;
    responseDeserialize: grpc.deserialize<ps_connect_pb.TestConnectionResponse>;
}
interface IPlumberServerService_IUpdateConnection extends grpc.MethodDefinition<ps_connect_pb.UpdateConnectionRequest, ps_connect_pb.UpdateConnectionResponse> {
    path: "/protos.PlumberServer/UpdateConnection";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_connect_pb.UpdateConnectionRequest>;
    requestDeserialize: grpc.deserialize<ps_connect_pb.UpdateConnectionRequest>;
    responseSerialize: grpc.serialize<ps_connect_pb.UpdateConnectionResponse>;
    responseDeserialize: grpc.deserialize<ps_connect_pb.UpdateConnectionResponse>;
}
interface IPlumberServerService_IDeleteConnection extends grpc.MethodDefinition<ps_connect_pb.DeleteConnectionRequest, ps_connect_pb.DeleteConnectionResponse> {
    path: "/protos.PlumberServer/DeleteConnection";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_connect_pb.DeleteConnectionRequest>;
    requestDeserialize: grpc.deserialize<ps_connect_pb.DeleteConnectionRequest>;
    responseSerialize: grpc.serialize<ps_connect_pb.DeleteConnectionResponse>;
    responseDeserialize: grpc.deserialize<ps_connect_pb.DeleteConnectionResponse>;
}
interface IPlumberServerService_ICreateRead extends grpc.MethodDefinition<ps_read_pb.CreateReadRequest, ps_read_pb.CreateReadResponse> {
    path: "/protos.PlumberServer/CreateRead";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_read_pb.CreateReadRequest>;
    requestDeserialize: grpc.deserialize<ps_read_pb.CreateReadRequest>;
    responseSerialize: grpc.serialize<ps_read_pb.CreateReadResponse>;
    responseDeserialize: grpc.deserialize<ps_read_pb.CreateReadResponse>;
}
interface IPlumberServerService_IStartRead extends grpc.MethodDefinition<ps_read_pb.StartReadRequest, ps_read_pb.StartReadResponse> {
    path: "/protos.PlumberServer/StartRead";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ps_read_pb.StartReadRequest>;
    requestDeserialize: grpc.deserialize<ps_read_pb.StartReadRequest>;
    responseSerialize: grpc.serialize<ps_read_pb.StartReadResponse>;
    responseDeserialize: grpc.deserialize<ps_read_pb.StartReadResponse>;
}
interface IPlumberServerService_IGetAllReads extends grpc.MethodDefinition<ps_read_pb.GetAllReadsRequest, ps_read_pb.GetAllReadsResponse> {
    path: "/protos.PlumberServer/GetAllReads";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_read_pb.GetAllReadsRequest>;
    requestDeserialize: grpc.deserialize<ps_read_pb.GetAllReadsRequest>;
    responseSerialize: grpc.serialize<ps_read_pb.GetAllReadsResponse>;
    responseDeserialize: grpc.deserialize<ps_read_pb.GetAllReadsResponse>;
}
interface IPlumberServerService_IStopRead extends grpc.MethodDefinition<ps_read_pb.StopReadRequest, ps_read_pb.StopReadResponse> {
    path: "/protos.PlumberServer/StopRead";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_read_pb.StopReadRequest>;
    requestDeserialize: grpc.deserialize<ps_read_pb.StopReadRequest>;
    responseSerialize: grpc.serialize<ps_read_pb.StopReadResponse>;
    responseDeserialize: grpc.deserialize<ps_read_pb.StopReadResponse>;
}
interface IPlumberServerService_IResumeRead extends grpc.MethodDefinition<ps_read_pb.ResumeReadRequest, ps_read_pb.ResumeReadResponse> {
    path: "/protos.PlumberServer/ResumeRead";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_read_pb.ResumeReadRequest>;
    requestDeserialize: grpc.deserialize<ps_read_pb.ResumeReadRequest>;
    responseSerialize: grpc.serialize<ps_read_pb.ResumeReadResponse>;
    responseDeserialize: grpc.deserialize<ps_read_pb.ResumeReadResponse>;
}
interface IPlumberServerService_IDeleteRead extends grpc.MethodDefinition<ps_read_pb.DeleteReadRequest, ps_read_pb.DeleteReadResponse> {
    path: "/protos.PlumberServer/DeleteRead";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_read_pb.DeleteReadRequest>;
    requestDeserialize: grpc.deserialize<ps_read_pb.DeleteReadRequest>;
    responseSerialize: grpc.serialize<ps_read_pb.DeleteReadResponse>;
    responseDeserialize: grpc.deserialize<ps_read_pb.DeleteReadResponse>;
}
interface IPlumberServerService_IWrite extends grpc.MethodDefinition<ps_write_pb.WriteRequest, ps_write_pb.WriteResponse> {
    path: "/protos.PlumberServer/Write";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_write_pb.WriteRequest>;
    requestDeserialize: grpc.deserialize<ps_write_pb.WriteRequest>;
    responseSerialize: grpc.serialize<ps_write_pb.WriteResponse>;
    responseDeserialize: grpc.deserialize<ps_write_pb.WriteResponse>;
}
interface IPlumberServerService_ICreateRelay extends grpc.MethodDefinition<ps_relay_pb.CreateRelayRequest, ps_relay_pb.CreateRelayResponse> {
    path: "/protos.PlumberServer/CreateRelay";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_relay_pb.CreateRelayRequest>;
    requestDeserialize: grpc.deserialize<ps_relay_pb.CreateRelayRequest>;
    responseSerialize: grpc.serialize<ps_relay_pb.CreateRelayResponse>;
    responseDeserialize: grpc.deserialize<ps_relay_pb.CreateRelayResponse>;
}
interface IPlumberServerService_IUpdateRelay extends grpc.MethodDefinition<ps_relay_pb.UpdateRelayRequest, ps_relay_pb.UpdateRelayResponse> {
    path: "/protos.PlumberServer/UpdateRelay";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_relay_pb.UpdateRelayRequest>;
    requestDeserialize: grpc.deserialize<ps_relay_pb.UpdateRelayRequest>;
    responseSerialize: grpc.serialize<ps_relay_pb.UpdateRelayResponse>;
    responseDeserialize: grpc.deserialize<ps_relay_pb.UpdateRelayResponse>;
}
interface IPlumberServerService_IResumeRelay extends grpc.MethodDefinition<ps_relay_pb.ResumeRelayRequest, ps_relay_pb.ResumeRelayResponse> {
    path: "/protos.PlumberServer/ResumeRelay";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_relay_pb.ResumeRelayRequest>;
    requestDeserialize: grpc.deserialize<ps_relay_pb.ResumeRelayRequest>;
    responseSerialize: grpc.serialize<ps_relay_pb.ResumeRelayResponse>;
    responseDeserialize: grpc.deserialize<ps_relay_pb.ResumeRelayResponse>;
}
interface IPlumberServerService_IStopRelay extends grpc.MethodDefinition<ps_relay_pb.StopRelayRequest, ps_relay_pb.StopRelayResponse> {
    path: "/protos.PlumberServer/StopRelay";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_relay_pb.StopRelayRequest>;
    requestDeserialize: grpc.deserialize<ps_relay_pb.StopRelayRequest>;
    responseSerialize: grpc.serialize<ps_relay_pb.StopRelayResponse>;
    responseDeserialize: grpc.deserialize<ps_relay_pb.StopRelayResponse>;
}
interface IPlumberServerService_IGetAllRelays extends grpc.MethodDefinition<ps_relay_pb.GetAllRelaysRequest, ps_relay_pb.GetAllRelaysResponse> {
    path: "/protos.PlumberServer/GetAllRelays";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_relay_pb.GetAllRelaysRequest>;
    requestDeserialize: grpc.deserialize<ps_relay_pb.GetAllRelaysRequest>;
    responseSerialize: grpc.serialize<ps_relay_pb.GetAllRelaysResponse>;
    responseDeserialize: grpc.deserialize<ps_relay_pb.GetAllRelaysResponse>;
}
interface IPlumberServerService_IDeleteRelay extends grpc.MethodDefinition<ps_relay_pb.DeleteRelayRequest, ps_relay_pb.DeleteRelayResponse> {
    path: "/protos.PlumberServer/DeleteRelay";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_relay_pb.DeleteRelayRequest>;
    requestDeserialize: grpc.deserialize<ps_relay_pb.DeleteRelayRequest>;
    responseSerialize: grpc.serialize<ps_relay_pb.DeleteRelayResponse>;
    responseDeserialize: grpc.deserialize<ps_relay_pb.DeleteRelayResponse>;
}
interface IPlumberServerService_IStartGithubAuth extends grpc.MethodDefinition<ps_github_pb.StartGithubAuthRequest, ps_github_pb.StartGithubAuthResponse> {
    path: "/protos.PlumberServer/StartGithubAuth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_github_pb.StartGithubAuthRequest>;
    requestDeserialize: grpc.deserialize<ps_github_pb.StartGithubAuthRequest>;
    responseSerialize: grpc.serialize<ps_github_pb.StartGithubAuthResponse>;
    responseDeserialize: grpc.deserialize<ps_github_pb.StartGithubAuthResponse>;
}
interface IPlumberServerService_IPollGithubAuth extends grpc.MethodDefinition<ps_github_pb.PollGithubAuthRequest, ps_github_pb.PollGithubAuthResponse> {
    path: "/protos.PlumberServer/PollGithubAuth";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ps_github_pb.PollGithubAuthRequest>;
    requestDeserialize: grpc.deserialize<ps_github_pb.PollGithubAuthRequest>;
    responseSerialize: grpc.serialize<ps_github_pb.PollGithubAuthResponse>;
    responseDeserialize: grpc.deserialize<ps_github_pb.PollGithubAuthResponse>;
}
interface IPlumberServerService_IIsGithubAuth extends grpc.MethodDefinition<ps_github_pb.IsGithubAuthRequest, ps_github_pb.IsGithubAuthResponse> {
    path: "/protos.PlumberServer/IsGithubAuth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_github_pb.IsGithubAuthRequest>;
    requestDeserialize: grpc.deserialize<ps_github_pb.IsGithubAuthRequest>;
    responseSerialize: grpc.serialize<ps_github_pb.IsGithubAuthResponse>;
    responseDeserialize: grpc.deserialize<ps_github_pb.IsGithubAuthResponse>;
}
interface IPlumberServerService_IGetSchema extends grpc.MethodDefinition<ps_schema_pb.GetSchemaRequest, ps_schema_pb.GetSchemaResponse> {
    path: "/protos.PlumberServer/GetSchema";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_schema_pb.GetSchemaRequest>;
    requestDeserialize: grpc.deserialize<ps_schema_pb.GetSchemaRequest>;
    responseSerialize: grpc.serialize<ps_schema_pb.GetSchemaResponse>;
    responseDeserialize: grpc.deserialize<ps_schema_pb.GetSchemaResponse>;
}
interface IPlumberServerService_IGetAllSchemas extends grpc.MethodDefinition<ps_schema_pb.GetAllSchemasRequest, ps_schema_pb.GetAllSchemasResponse> {
    path: "/protos.PlumberServer/GetAllSchemas";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_schema_pb.GetAllSchemasRequest>;
    requestDeserialize: grpc.deserialize<ps_schema_pb.GetAllSchemasRequest>;
    responseSerialize: grpc.serialize<ps_schema_pb.GetAllSchemasResponse>;
    responseDeserialize: grpc.deserialize<ps_schema_pb.GetAllSchemasResponse>;
}
interface IPlumberServerService_IImportGithub extends grpc.MethodDefinition<ps_schema_pb.ImportGithubRequest, ps_schema_pb.ImportGithubResponse> {
    path: "/protos.PlumberServer/ImportGithub";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_schema_pb.ImportGithubRequest>;
    requestDeserialize: grpc.deserialize<ps_schema_pb.ImportGithubRequest>;
    responseSerialize: grpc.serialize<ps_schema_pb.ImportGithubResponse>;
    responseDeserialize: grpc.deserialize<ps_schema_pb.ImportGithubResponse>;
}
interface IPlumberServerService_IImportLocal extends grpc.MethodDefinition<ps_schema_pb.ImportLocalRequest, ps_schema_pb.ImportLocalResponse> {
    path: "/protos.PlumberServer/ImportLocal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_schema_pb.ImportLocalRequest>;
    requestDeserialize: grpc.deserialize<ps_schema_pb.ImportLocalRequest>;
    responseSerialize: grpc.serialize<ps_schema_pb.ImportLocalResponse>;
    responseDeserialize: grpc.deserialize<ps_schema_pb.ImportLocalResponse>;
}
interface IPlumberServerService_IDeleteSchema extends grpc.MethodDefinition<ps_schema_pb.DeleteSchemaRequest, ps_schema_pb.DeleteSchemaResponse> {
    path: "/protos.PlumberServer/DeleteSchema";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_schema_pb.DeleteSchemaRequest>;
    requestDeserialize: grpc.deserialize<ps_schema_pb.DeleteSchemaRequest>;
    responseSerialize: grpc.serialize<ps_schema_pb.DeleteSchemaResponse>;
    responseDeserialize: grpc.deserialize<ps_schema_pb.DeleteSchemaResponse>;
}
interface IPlumberServerService_IGetService extends grpc.MethodDefinition<ps_service_pb.GetServiceRequest, ps_service_pb.GetServiceResponse> {
    path: "/protos.PlumberServer/GetService";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_service_pb.GetServiceRequest>;
    requestDeserialize: grpc.deserialize<ps_service_pb.GetServiceRequest>;
    responseSerialize: grpc.serialize<ps_service_pb.GetServiceResponse>;
    responseDeserialize: grpc.deserialize<ps_service_pb.GetServiceResponse>;
}
interface IPlumberServerService_IGetAllServices extends grpc.MethodDefinition<ps_service_pb.GetAllServicesRequest, ps_service_pb.GetAllServicesResponse> {
    path: "/protos.PlumberServer/GetAllServices";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_service_pb.GetAllServicesRequest>;
    requestDeserialize: grpc.deserialize<ps_service_pb.GetAllServicesRequest>;
    responseSerialize: grpc.serialize<ps_service_pb.GetAllServicesResponse>;
    responseDeserialize: grpc.deserialize<ps_service_pb.GetAllServicesResponse>;
}
interface IPlumberServerService_ICreateService extends grpc.MethodDefinition<ps_service_pb.CreateServiceRequest, ps_service_pb.CreateServiceResponse> {
    path: "/protos.PlumberServer/CreateService";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_service_pb.CreateServiceRequest>;
    requestDeserialize: grpc.deserialize<ps_service_pb.CreateServiceRequest>;
    responseSerialize: grpc.serialize<ps_service_pb.CreateServiceResponse>;
    responseDeserialize: grpc.deserialize<ps_service_pb.CreateServiceResponse>;
}
interface IPlumberServerService_IUpdateService extends grpc.MethodDefinition<ps_service_pb.UpdateServiceRequest, ps_service_pb.UpdateServiceResponse> {
    path: "/protos.PlumberServer/UpdateService";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_service_pb.UpdateServiceRequest>;
    requestDeserialize: grpc.deserialize<ps_service_pb.UpdateServiceRequest>;
    responseSerialize: grpc.serialize<ps_service_pb.UpdateServiceResponse>;
    responseDeserialize: grpc.deserialize<ps_service_pb.UpdateServiceResponse>;
}
interface IPlumberServerService_IDeleteService extends grpc.MethodDefinition<ps_service_pb.DeleteServiceRequest, ps_service_pb.DeleteServiceResponse> {
    path: "/protos.PlumberServer/DeleteService";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_service_pb.DeleteServiceRequest>;
    requestDeserialize: grpc.deserialize<ps_service_pb.DeleteServiceRequest>;
    responseSerialize: grpc.serialize<ps_service_pb.DeleteServiceResponse>;
    responseDeserialize: grpc.deserialize<ps_service_pb.DeleteServiceResponse>;
}
interface IPlumberServerService_IGetServerOptions extends grpc.MethodDefinition<ps_server_pb.GetServerOptionsRequest, ps_server_pb.GetServerOptionsResponse> {
    path: "/protos.PlumberServer/GetServerOptions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ps_server_pb.GetServerOptionsRequest>;
    requestDeserialize: grpc.deserialize<ps_server_pb.GetServerOptionsRequest>;
    responseSerialize: grpc.serialize<ps_server_pb.GetServerOptionsResponse>;
    responseDeserialize: grpc.deserialize<ps_server_pb.GetServerOptionsResponse>;
}
interface IPlumberServerService_IGetGithubEvents extends grpc.MethodDefinition<ps_github_pb.GetGithubEventsRequest, ps_ghserver_pb.GithubEvent> {
    path: "/protos.PlumberServer/GetGithubEvents";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ps_github_pb.GetGithubEventsRequest>;
    requestDeserialize: grpc.deserialize<ps_github_pb.GetGithubEventsRequest>;
    responseSerialize: grpc.serialize<ps_ghserver_pb.GithubEvent>;
    responseDeserialize: grpc.deserialize<ps_ghserver_pb.GithubEvent>;
}

export const PlumberServerService: IPlumberServerService;

export interface IPlumberServerServer extends grpc.UntypedServiceImplementation {
    getAllConnections: grpc.handleUnaryCall<ps_connect_pb.GetAllConnectionsRequest, ps_connect_pb.GetAllConnectionsResponse>;
    getConnection: grpc.handleUnaryCall<ps_connect_pb.GetConnectionRequest, ps_connect_pb.GetConnectionResponse>;
    createConnection: grpc.handleUnaryCall<ps_connect_pb.CreateConnectionRequest, ps_connect_pb.CreateConnectionResponse>;
    testConnection: grpc.handleUnaryCall<ps_connect_pb.TestConnectionRequest, ps_connect_pb.TestConnectionResponse>;
    updateConnection: grpc.handleUnaryCall<ps_connect_pb.UpdateConnectionRequest, ps_connect_pb.UpdateConnectionResponse>;
    deleteConnection: grpc.handleUnaryCall<ps_connect_pb.DeleteConnectionRequest, ps_connect_pb.DeleteConnectionResponse>;
    createRead: grpc.handleUnaryCall<ps_read_pb.CreateReadRequest, ps_read_pb.CreateReadResponse>;
    startRead: grpc.handleServerStreamingCall<ps_read_pb.StartReadRequest, ps_read_pb.StartReadResponse>;
    getAllReads: grpc.handleUnaryCall<ps_read_pb.GetAllReadsRequest, ps_read_pb.GetAllReadsResponse>;
    stopRead: grpc.handleUnaryCall<ps_read_pb.StopReadRequest, ps_read_pb.StopReadResponse>;
    resumeRead: grpc.handleUnaryCall<ps_read_pb.ResumeReadRequest, ps_read_pb.ResumeReadResponse>;
    deleteRead: grpc.handleUnaryCall<ps_read_pb.DeleteReadRequest, ps_read_pb.DeleteReadResponse>;
    write: grpc.handleUnaryCall<ps_write_pb.WriteRequest, ps_write_pb.WriteResponse>;
    createRelay: grpc.handleUnaryCall<ps_relay_pb.CreateRelayRequest, ps_relay_pb.CreateRelayResponse>;
    updateRelay: grpc.handleUnaryCall<ps_relay_pb.UpdateRelayRequest, ps_relay_pb.UpdateRelayResponse>;
    resumeRelay: grpc.handleUnaryCall<ps_relay_pb.ResumeRelayRequest, ps_relay_pb.ResumeRelayResponse>;
    stopRelay: grpc.handleUnaryCall<ps_relay_pb.StopRelayRequest, ps_relay_pb.StopRelayResponse>;
    getAllRelays: grpc.handleUnaryCall<ps_relay_pb.GetAllRelaysRequest, ps_relay_pb.GetAllRelaysResponse>;
    deleteRelay: grpc.handleUnaryCall<ps_relay_pb.DeleteRelayRequest, ps_relay_pb.DeleteRelayResponse>;
    startGithubAuth: grpc.handleUnaryCall<ps_github_pb.StartGithubAuthRequest, ps_github_pb.StartGithubAuthResponse>;
    pollGithubAuth: grpc.handleServerStreamingCall<ps_github_pb.PollGithubAuthRequest, ps_github_pb.PollGithubAuthResponse>;
    isGithubAuth: grpc.handleUnaryCall<ps_github_pb.IsGithubAuthRequest, ps_github_pb.IsGithubAuthResponse>;
    getSchema: grpc.handleUnaryCall<ps_schema_pb.GetSchemaRequest, ps_schema_pb.GetSchemaResponse>;
    getAllSchemas: grpc.handleUnaryCall<ps_schema_pb.GetAllSchemasRequest, ps_schema_pb.GetAllSchemasResponse>;
    importGithub: grpc.handleUnaryCall<ps_schema_pb.ImportGithubRequest, ps_schema_pb.ImportGithubResponse>;
    importLocal: grpc.handleUnaryCall<ps_schema_pb.ImportLocalRequest, ps_schema_pb.ImportLocalResponse>;
    deleteSchema: grpc.handleUnaryCall<ps_schema_pb.DeleteSchemaRequest, ps_schema_pb.DeleteSchemaResponse>;
    getService: grpc.handleUnaryCall<ps_service_pb.GetServiceRequest, ps_service_pb.GetServiceResponse>;
    getAllServices: grpc.handleUnaryCall<ps_service_pb.GetAllServicesRequest, ps_service_pb.GetAllServicesResponse>;
    createService: grpc.handleUnaryCall<ps_service_pb.CreateServiceRequest, ps_service_pb.CreateServiceResponse>;
    updateService: grpc.handleUnaryCall<ps_service_pb.UpdateServiceRequest, ps_service_pb.UpdateServiceResponse>;
    deleteService: grpc.handleUnaryCall<ps_service_pb.DeleteServiceRequest, ps_service_pb.DeleteServiceResponse>;
    getServerOptions: grpc.handleUnaryCall<ps_server_pb.GetServerOptionsRequest, ps_server_pb.GetServerOptionsResponse>;
    getGithubEvents: grpc.handleServerStreamingCall<ps_github_pb.GetGithubEventsRequest, ps_ghserver_pb.GithubEvent>;
}

export interface IPlumberServerClient {
    getAllConnections(request: ps_connect_pb.GetAllConnectionsRequest, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.GetAllConnectionsResponse) => void): grpc.ClientUnaryCall;
    getAllConnections(request: ps_connect_pb.GetAllConnectionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.GetAllConnectionsResponse) => void): grpc.ClientUnaryCall;
    getAllConnections(request: ps_connect_pb.GetAllConnectionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.GetAllConnectionsResponse) => void): grpc.ClientUnaryCall;
    getConnection(request: ps_connect_pb.GetConnectionRequest, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.GetConnectionResponse) => void): grpc.ClientUnaryCall;
    getConnection(request: ps_connect_pb.GetConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.GetConnectionResponse) => void): grpc.ClientUnaryCall;
    getConnection(request: ps_connect_pb.GetConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.GetConnectionResponse) => void): grpc.ClientUnaryCall;
    createConnection(request: ps_connect_pb.CreateConnectionRequest, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.CreateConnectionResponse) => void): grpc.ClientUnaryCall;
    createConnection(request: ps_connect_pb.CreateConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.CreateConnectionResponse) => void): grpc.ClientUnaryCall;
    createConnection(request: ps_connect_pb.CreateConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.CreateConnectionResponse) => void): grpc.ClientUnaryCall;
    testConnection(request: ps_connect_pb.TestConnectionRequest, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.TestConnectionResponse) => void): grpc.ClientUnaryCall;
    testConnection(request: ps_connect_pb.TestConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.TestConnectionResponse) => void): grpc.ClientUnaryCall;
    testConnection(request: ps_connect_pb.TestConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.TestConnectionResponse) => void): grpc.ClientUnaryCall;
    updateConnection(request: ps_connect_pb.UpdateConnectionRequest, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.UpdateConnectionResponse) => void): grpc.ClientUnaryCall;
    updateConnection(request: ps_connect_pb.UpdateConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.UpdateConnectionResponse) => void): grpc.ClientUnaryCall;
    updateConnection(request: ps_connect_pb.UpdateConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.UpdateConnectionResponse) => void): grpc.ClientUnaryCall;
    deleteConnection(request: ps_connect_pb.DeleteConnectionRequest, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.DeleteConnectionResponse) => void): grpc.ClientUnaryCall;
    deleteConnection(request: ps_connect_pb.DeleteConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.DeleteConnectionResponse) => void): grpc.ClientUnaryCall;
    deleteConnection(request: ps_connect_pb.DeleteConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.DeleteConnectionResponse) => void): grpc.ClientUnaryCall;
    createRead(request: ps_read_pb.CreateReadRequest, callback: (error: grpc.ServiceError | null, response: ps_read_pb.CreateReadResponse) => void): grpc.ClientUnaryCall;
    createRead(request: ps_read_pb.CreateReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_read_pb.CreateReadResponse) => void): grpc.ClientUnaryCall;
    createRead(request: ps_read_pb.CreateReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_read_pb.CreateReadResponse) => void): grpc.ClientUnaryCall;
    startRead(request: ps_read_pb.StartReadRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ps_read_pb.StartReadResponse>;
    startRead(request: ps_read_pb.StartReadRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ps_read_pb.StartReadResponse>;
    getAllReads(request: ps_read_pb.GetAllReadsRequest, callback: (error: grpc.ServiceError | null, response: ps_read_pb.GetAllReadsResponse) => void): grpc.ClientUnaryCall;
    getAllReads(request: ps_read_pb.GetAllReadsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_read_pb.GetAllReadsResponse) => void): grpc.ClientUnaryCall;
    getAllReads(request: ps_read_pb.GetAllReadsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_read_pb.GetAllReadsResponse) => void): grpc.ClientUnaryCall;
    stopRead(request: ps_read_pb.StopReadRequest, callback: (error: grpc.ServiceError | null, response: ps_read_pb.StopReadResponse) => void): grpc.ClientUnaryCall;
    stopRead(request: ps_read_pb.StopReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_read_pb.StopReadResponse) => void): grpc.ClientUnaryCall;
    stopRead(request: ps_read_pb.StopReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_read_pb.StopReadResponse) => void): grpc.ClientUnaryCall;
    resumeRead(request: ps_read_pb.ResumeReadRequest, callback: (error: grpc.ServiceError | null, response: ps_read_pb.ResumeReadResponse) => void): grpc.ClientUnaryCall;
    resumeRead(request: ps_read_pb.ResumeReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_read_pb.ResumeReadResponse) => void): grpc.ClientUnaryCall;
    resumeRead(request: ps_read_pb.ResumeReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_read_pb.ResumeReadResponse) => void): grpc.ClientUnaryCall;
    deleteRead(request: ps_read_pb.DeleteReadRequest, callback: (error: grpc.ServiceError | null, response: ps_read_pb.DeleteReadResponse) => void): grpc.ClientUnaryCall;
    deleteRead(request: ps_read_pb.DeleteReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_read_pb.DeleteReadResponse) => void): grpc.ClientUnaryCall;
    deleteRead(request: ps_read_pb.DeleteReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_read_pb.DeleteReadResponse) => void): grpc.ClientUnaryCall;
    write(request: ps_write_pb.WriteRequest, callback: (error: grpc.ServiceError | null, response: ps_write_pb.WriteResponse) => void): grpc.ClientUnaryCall;
    write(request: ps_write_pb.WriteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_write_pb.WriteResponse) => void): grpc.ClientUnaryCall;
    write(request: ps_write_pb.WriteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_write_pb.WriteResponse) => void): grpc.ClientUnaryCall;
    createRelay(request: ps_relay_pb.CreateRelayRequest, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.CreateRelayResponse) => void): grpc.ClientUnaryCall;
    createRelay(request: ps_relay_pb.CreateRelayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.CreateRelayResponse) => void): grpc.ClientUnaryCall;
    createRelay(request: ps_relay_pb.CreateRelayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.CreateRelayResponse) => void): grpc.ClientUnaryCall;
    updateRelay(request: ps_relay_pb.UpdateRelayRequest, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.UpdateRelayResponse) => void): grpc.ClientUnaryCall;
    updateRelay(request: ps_relay_pb.UpdateRelayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.UpdateRelayResponse) => void): grpc.ClientUnaryCall;
    updateRelay(request: ps_relay_pb.UpdateRelayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.UpdateRelayResponse) => void): grpc.ClientUnaryCall;
    resumeRelay(request: ps_relay_pb.ResumeRelayRequest, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.ResumeRelayResponse) => void): grpc.ClientUnaryCall;
    resumeRelay(request: ps_relay_pb.ResumeRelayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.ResumeRelayResponse) => void): grpc.ClientUnaryCall;
    resumeRelay(request: ps_relay_pb.ResumeRelayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.ResumeRelayResponse) => void): grpc.ClientUnaryCall;
    stopRelay(request: ps_relay_pb.StopRelayRequest, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.StopRelayResponse) => void): grpc.ClientUnaryCall;
    stopRelay(request: ps_relay_pb.StopRelayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.StopRelayResponse) => void): grpc.ClientUnaryCall;
    stopRelay(request: ps_relay_pb.StopRelayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.StopRelayResponse) => void): grpc.ClientUnaryCall;
    getAllRelays(request: ps_relay_pb.GetAllRelaysRequest, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.GetAllRelaysResponse) => void): grpc.ClientUnaryCall;
    getAllRelays(request: ps_relay_pb.GetAllRelaysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.GetAllRelaysResponse) => void): grpc.ClientUnaryCall;
    getAllRelays(request: ps_relay_pb.GetAllRelaysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.GetAllRelaysResponse) => void): grpc.ClientUnaryCall;
    deleteRelay(request: ps_relay_pb.DeleteRelayRequest, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.DeleteRelayResponse) => void): grpc.ClientUnaryCall;
    deleteRelay(request: ps_relay_pb.DeleteRelayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.DeleteRelayResponse) => void): grpc.ClientUnaryCall;
    deleteRelay(request: ps_relay_pb.DeleteRelayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.DeleteRelayResponse) => void): grpc.ClientUnaryCall;
    startGithubAuth(request: ps_github_pb.StartGithubAuthRequest, callback: (error: grpc.ServiceError | null, response: ps_github_pb.StartGithubAuthResponse) => void): grpc.ClientUnaryCall;
    startGithubAuth(request: ps_github_pb.StartGithubAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_github_pb.StartGithubAuthResponse) => void): grpc.ClientUnaryCall;
    startGithubAuth(request: ps_github_pb.StartGithubAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_github_pb.StartGithubAuthResponse) => void): grpc.ClientUnaryCall;
    pollGithubAuth(request: ps_github_pb.PollGithubAuthRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ps_github_pb.PollGithubAuthResponse>;
    pollGithubAuth(request: ps_github_pb.PollGithubAuthRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ps_github_pb.PollGithubAuthResponse>;
    isGithubAuth(request: ps_github_pb.IsGithubAuthRequest, callback: (error: grpc.ServiceError | null, response: ps_github_pb.IsGithubAuthResponse) => void): grpc.ClientUnaryCall;
    isGithubAuth(request: ps_github_pb.IsGithubAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_github_pb.IsGithubAuthResponse) => void): grpc.ClientUnaryCall;
    isGithubAuth(request: ps_github_pb.IsGithubAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_github_pb.IsGithubAuthResponse) => void): grpc.ClientUnaryCall;
    getSchema(request: ps_schema_pb.GetSchemaRequest, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    getSchema(request: ps_schema_pb.GetSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    getSchema(request: ps_schema_pb.GetSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    getAllSchemas(request: ps_schema_pb.GetAllSchemasRequest, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.GetAllSchemasResponse) => void): grpc.ClientUnaryCall;
    getAllSchemas(request: ps_schema_pb.GetAllSchemasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.GetAllSchemasResponse) => void): grpc.ClientUnaryCall;
    getAllSchemas(request: ps_schema_pb.GetAllSchemasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.GetAllSchemasResponse) => void): grpc.ClientUnaryCall;
    importGithub(request: ps_schema_pb.ImportGithubRequest, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.ImportGithubResponse) => void): grpc.ClientUnaryCall;
    importGithub(request: ps_schema_pb.ImportGithubRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.ImportGithubResponse) => void): grpc.ClientUnaryCall;
    importGithub(request: ps_schema_pb.ImportGithubRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.ImportGithubResponse) => void): grpc.ClientUnaryCall;
    importLocal(request: ps_schema_pb.ImportLocalRequest, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.ImportLocalResponse) => void): grpc.ClientUnaryCall;
    importLocal(request: ps_schema_pb.ImportLocalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.ImportLocalResponse) => void): grpc.ClientUnaryCall;
    importLocal(request: ps_schema_pb.ImportLocalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.ImportLocalResponse) => void): grpc.ClientUnaryCall;
    deleteSchema(request: ps_schema_pb.DeleteSchemaRequest, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
    deleteSchema(request: ps_schema_pb.DeleteSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
    deleteSchema(request: ps_schema_pb.DeleteSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
    getService(request: ps_service_pb.GetServiceRequest, callback: (error: grpc.ServiceError | null, response: ps_service_pb.GetServiceResponse) => void): grpc.ClientUnaryCall;
    getService(request: ps_service_pb.GetServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_service_pb.GetServiceResponse) => void): grpc.ClientUnaryCall;
    getService(request: ps_service_pb.GetServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_service_pb.GetServiceResponse) => void): grpc.ClientUnaryCall;
    getAllServices(request: ps_service_pb.GetAllServicesRequest, callback: (error: grpc.ServiceError | null, response: ps_service_pb.GetAllServicesResponse) => void): grpc.ClientUnaryCall;
    getAllServices(request: ps_service_pb.GetAllServicesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_service_pb.GetAllServicesResponse) => void): grpc.ClientUnaryCall;
    getAllServices(request: ps_service_pb.GetAllServicesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_service_pb.GetAllServicesResponse) => void): grpc.ClientUnaryCall;
    createService(request: ps_service_pb.CreateServiceRequest, callback: (error: grpc.ServiceError | null, response: ps_service_pb.CreateServiceResponse) => void): grpc.ClientUnaryCall;
    createService(request: ps_service_pb.CreateServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_service_pb.CreateServiceResponse) => void): grpc.ClientUnaryCall;
    createService(request: ps_service_pb.CreateServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_service_pb.CreateServiceResponse) => void): grpc.ClientUnaryCall;
    updateService(request: ps_service_pb.UpdateServiceRequest, callback: (error: grpc.ServiceError | null, response: ps_service_pb.UpdateServiceResponse) => void): grpc.ClientUnaryCall;
    updateService(request: ps_service_pb.UpdateServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_service_pb.UpdateServiceResponse) => void): grpc.ClientUnaryCall;
    updateService(request: ps_service_pb.UpdateServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_service_pb.UpdateServiceResponse) => void): grpc.ClientUnaryCall;
    deleteService(request: ps_service_pb.DeleteServiceRequest, callback: (error: grpc.ServiceError | null, response: ps_service_pb.DeleteServiceResponse) => void): grpc.ClientUnaryCall;
    deleteService(request: ps_service_pb.DeleteServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_service_pb.DeleteServiceResponse) => void): grpc.ClientUnaryCall;
    deleteService(request: ps_service_pb.DeleteServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_service_pb.DeleteServiceResponse) => void): grpc.ClientUnaryCall;
    getServerOptions(request: ps_server_pb.GetServerOptionsRequest, callback: (error: grpc.ServiceError | null, response: ps_server_pb.GetServerOptionsResponse) => void): grpc.ClientUnaryCall;
    getServerOptions(request: ps_server_pb.GetServerOptionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_server_pb.GetServerOptionsResponse) => void): grpc.ClientUnaryCall;
    getServerOptions(request: ps_server_pb.GetServerOptionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_server_pb.GetServerOptionsResponse) => void): grpc.ClientUnaryCall;
    getGithubEvents(request: ps_github_pb.GetGithubEventsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ps_ghserver_pb.GithubEvent>;
    getGithubEvents(request: ps_github_pb.GetGithubEventsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ps_ghserver_pb.GithubEvent>;
}

export class PlumberServerClient extends grpc.Client implements IPlumberServerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllConnections(request: ps_connect_pb.GetAllConnectionsRequest, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.GetAllConnectionsResponse) => void): grpc.ClientUnaryCall;
    public getAllConnections(request: ps_connect_pb.GetAllConnectionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.GetAllConnectionsResponse) => void): grpc.ClientUnaryCall;
    public getAllConnections(request: ps_connect_pb.GetAllConnectionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.GetAllConnectionsResponse) => void): grpc.ClientUnaryCall;
    public getConnection(request: ps_connect_pb.GetConnectionRequest, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.GetConnectionResponse) => void): grpc.ClientUnaryCall;
    public getConnection(request: ps_connect_pb.GetConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.GetConnectionResponse) => void): grpc.ClientUnaryCall;
    public getConnection(request: ps_connect_pb.GetConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.GetConnectionResponse) => void): grpc.ClientUnaryCall;
    public createConnection(request: ps_connect_pb.CreateConnectionRequest, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.CreateConnectionResponse) => void): grpc.ClientUnaryCall;
    public createConnection(request: ps_connect_pb.CreateConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.CreateConnectionResponse) => void): grpc.ClientUnaryCall;
    public createConnection(request: ps_connect_pb.CreateConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.CreateConnectionResponse) => void): grpc.ClientUnaryCall;
    public testConnection(request: ps_connect_pb.TestConnectionRequest, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.TestConnectionResponse) => void): grpc.ClientUnaryCall;
    public testConnection(request: ps_connect_pb.TestConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.TestConnectionResponse) => void): grpc.ClientUnaryCall;
    public testConnection(request: ps_connect_pb.TestConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.TestConnectionResponse) => void): grpc.ClientUnaryCall;
    public updateConnection(request: ps_connect_pb.UpdateConnectionRequest, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.UpdateConnectionResponse) => void): grpc.ClientUnaryCall;
    public updateConnection(request: ps_connect_pb.UpdateConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.UpdateConnectionResponse) => void): grpc.ClientUnaryCall;
    public updateConnection(request: ps_connect_pb.UpdateConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.UpdateConnectionResponse) => void): grpc.ClientUnaryCall;
    public deleteConnection(request: ps_connect_pb.DeleteConnectionRequest, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.DeleteConnectionResponse) => void): grpc.ClientUnaryCall;
    public deleteConnection(request: ps_connect_pb.DeleteConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.DeleteConnectionResponse) => void): grpc.ClientUnaryCall;
    public deleteConnection(request: ps_connect_pb.DeleteConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_connect_pb.DeleteConnectionResponse) => void): grpc.ClientUnaryCall;
    public createRead(request: ps_read_pb.CreateReadRequest, callback: (error: grpc.ServiceError | null, response: ps_read_pb.CreateReadResponse) => void): grpc.ClientUnaryCall;
    public createRead(request: ps_read_pb.CreateReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_read_pb.CreateReadResponse) => void): grpc.ClientUnaryCall;
    public createRead(request: ps_read_pb.CreateReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_read_pb.CreateReadResponse) => void): grpc.ClientUnaryCall;
    public startRead(request: ps_read_pb.StartReadRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ps_read_pb.StartReadResponse>;
    public startRead(request: ps_read_pb.StartReadRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ps_read_pb.StartReadResponse>;
    public getAllReads(request: ps_read_pb.GetAllReadsRequest, callback: (error: grpc.ServiceError | null, response: ps_read_pb.GetAllReadsResponse) => void): grpc.ClientUnaryCall;
    public getAllReads(request: ps_read_pb.GetAllReadsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_read_pb.GetAllReadsResponse) => void): grpc.ClientUnaryCall;
    public getAllReads(request: ps_read_pb.GetAllReadsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_read_pb.GetAllReadsResponse) => void): grpc.ClientUnaryCall;
    public stopRead(request: ps_read_pb.StopReadRequest, callback: (error: grpc.ServiceError | null, response: ps_read_pb.StopReadResponse) => void): grpc.ClientUnaryCall;
    public stopRead(request: ps_read_pb.StopReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_read_pb.StopReadResponse) => void): grpc.ClientUnaryCall;
    public stopRead(request: ps_read_pb.StopReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_read_pb.StopReadResponse) => void): grpc.ClientUnaryCall;
    public resumeRead(request: ps_read_pb.ResumeReadRequest, callback: (error: grpc.ServiceError | null, response: ps_read_pb.ResumeReadResponse) => void): grpc.ClientUnaryCall;
    public resumeRead(request: ps_read_pb.ResumeReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_read_pb.ResumeReadResponse) => void): grpc.ClientUnaryCall;
    public resumeRead(request: ps_read_pb.ResumeReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_read_pb.ResumeReadResponse) => void): grpc.ClientUnaryCall;
    public deleteRead(request: ps_read_pb.DeleteReadRequest, callback: (error: grpc.ServiceError | null, response: ps_read_pb.DeleteReadResponse) => void): grpc.ClientUnaryCall;
    public deleteRead(request: ps_read_pb.DeleteReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_read_pb.DeleteReadResponse) => void): grpc.ClientUnaryCall;
    public deleteRead(request: ps_read_pb.DeleteReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_read_pb.DeleteReadResponse) => void): grpc.ClientUnaryCall;
    public write(request: ps_write_pb.WriteRequest, callback: (error: grpc.ServiceError | null, response: ps_write_pb.WriteResponse) => void): grpc.ClientUnaryCall;
    public write(request: ps_write_pb.WriteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_write_pb.WriteResponse) => void): grpc.ClientUnaryCall;
    public write(request: ps_write_pb.WriteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_write_pb.WriteResponse) => void): grpc.ClientUnaryCall;
    public createRelay(request: ps_relay_pb.CreateRelayRequest, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.CreateRelayResponse) => void): grpc.ClientUnaryCall;
    public createRelay(request: ps_relay_pb.CreateRelayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.CreateRelayResponse) => void): grpc.ClientUnaryCall;
    public createRelay(request: ps_relay_pb.CreateRelayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.CreateRelayResponse) => void): grpc.ClientUnaryCall;
    public updateRelay(request: ps_relay_pb.UpdateRelayRequest, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.UpdateRelayResponse) => void): grpc.ClientUnaryCall;
    public updateRelay(request: ps_relay_pb.UpdateRelayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.UpdateRelayResponse) => void): grpc.ClientUnaryCall;
    public updateRelay(request: ps_relay_pb.UpdateRelayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.UpdateRelayResponse) => void): grpc.ClientUnaryCall;
    public resumeRelay(request: ps_relay_pb.ResumeRelayRequest, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.ResumeRelayResponse) => void): grpc.ClientUnaryCall;
    public resumeRelay(request: ps_relay_pb.ResumeRelayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.ResumeRelayResponse) => void): grpc.ClientUnaryCall;
    public resumeRelay(request: ps_relay_pb.ResumeRelayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.ResumeRelayResponse) => void): grpc.ClientUnaryCall;
    public stopRelay(request: ps_relay_pb.StopRelayRequest, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.StopRelayResponse) => void): grpc.ClientUnaryCall;
    public stopRelay(request: ps_relay_pb.StopRelayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.StopRelayResponse) => void): grpc.ClientUnaryCall;
    public stopRelay(request: ps_relay_pb.StopRelayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.StopRelayResponse) => void): grpc.ClientUnaryCall;
    public getAllRelays(request: ps_relay_pb.GetAllRelaysRequest, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.GetAllRelaysResponse) => void): grpc.ClientUnaryCall;
    public getAllRelays(request: ps_relay_pb.GetAllRelaysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.GetAllRelaysResponse) => void): grpc.ClientUnaryCall;
    public getAllRelays(request: ps_relay_pb.GetAllRelaysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.GetAllRelaysResponse) => void): grpc.ClientUnaryCall;
    public deleteRelay(request: ps_relay_pb.DeleteRelayRequest, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.DeleteRelayResponse) => void): grpc.ClientUnaryCall;
    public deleteRelay(request: ps_relay_pb.DeleteRelayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.DeleteRelayResponse) => void): grpc.ClientUnaryCall;
    public deleteRelay(request: ps_relay_pb.DeleteRelayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_relay_pb.DeleteRelayResponse) => void): grpc.ClientUnaryCall;
    public startGithubAuth(request: ps_github_pb.StartGithubAuthRequest, callback: (error: grpc.ServiceError | null, response: ps_github_pb.StartGithubAuthResponse) => void): grpc.ClientUnaryCall;
    public startGithubAuth(request: ps_github_pb.StartGithubAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_github_pb.StartGithubAuthResponse) => void): grpc.ClientUnaryCall;
    public startGithubAuth(request: ps_github_pb.StartGithubAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_github_pb.StartGithubAuthResponse) => void): grpc.ClientUnaryCall;
    public pollGithubAuth(request: ps_github_pb.PollGithubAuthRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ps_github_pb.PollGithubAuthResponse>;
    public pollGithubAuth(request: ps_github_pb.PollGithubAuthRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ps_github_pb.PollGithubAuthResponse>;
    public isGithubAuth(request: ps_github_pb.IsGithubAuthRequest, callback: (error: grpc.ServiceError | null, response: ps_github_pb.IsGithubAuthResponse) => void): grpc.ClientUnaryCall;
    public isGithubAuth(request: ps_github_pb.IsGithubAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_github_pb.IsGithubAuthResponse) => void): grpc.ClientUnaryCall;
    public isGithubAuth(request: ps_github_pb.IsGithubAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_github_pb.IsGithubAuthResponse) => void): grpc.ClientUnaryCall;
    public getSchema(request: ps_schema_pb.GetSchemaRequest, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    public getSchema(request: ps_schema_pb.GetSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    public getSchema(request: ps_schema_pb.GetSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    public getAllSchemas(request: ps_schema_pb.GetAllSchemasRequest, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.GetAllSchemasResponse) => void): grpc.ClientUnaryCall;
    public getAllSchemas(request: ps_schema_pb.GetAllSchemasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.GetAllSchemasResponse) => void): grpc.ClientUnaryCall;
    public getAllSchemas(request: ps_schema_pb.GetAllSchemasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.GetAllSchemasResponse) => void): grpc.ClientUnaryCall;
    public importGithub(request: ps_schema_pb.ImportGithubRequest, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.ImportGithubResponse) => void): grpc.ClientUnaryCall;
    public importGithub(request: ps_schema_pb.ImportGithubRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.ImportGithubResponse) => void): grpc.ClientUnaryCall;
    public importGithub(request: ps_schema_pb.ImportGithubRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.ImportGithubResponse) => void): grpc.ClientUnaryCall;
    public importLocal(request: ps_schema_pb.ImportLocalRequest, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.ImportLocalResponse) => void): grpc.ClientUnaryCall;
    public importLocal(request: ps_schema_pb.ImportLocalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.ImportLocalResponse) => void): grpc.ClientUnaryCall;
    public importLocal(request: ps_schema_pb.ImportLocalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.ImportLocalResponse) => void): grpc.ClientUnaryCall;
    public deleteSchema(request: ps_schema_pb.DeleteSchemaRequest, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
    public deleteSchema(request: ps_schema_pb.DeleteSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
    public deleteSchema(request: ps_schema_pb.DeleteSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_schema_pb.DeleteSchemaResponse) => void): grpc.ClientUnaryCall;
    public getService(request: ps_service_pb.GetServiceRequest, callback: (error: grpc.ServiceError | null, response: ps_service_pb.GetServiceResponse) => void): grpc.ClientUnaryCall;
    public getService(request: ps_service_pb.GetServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_service_pb.GetServiceResponse) => void): grpc.ClientUnaryCall;
    public getService(request: ps_service_pb.GetServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_service_pb.GetServiceResponse) => void): grpc.ClientUnaryCall;
    public getAllServices(request: ps_service_pb.GetAllServicesRequest, callback: (error: grpc.ServiceError | null, response: ps_service_pb.GetAllServicesResponse) => void): grpc.ClientUnaryCall;
    public getAllServices(request: ps_service_pb.GetAllServicesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_service_pb.GetAllServicesResponse) => void): grpc.ClientUnaryCall;
    public getAllServices(request: ps_service_pb.GetAllServicesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_service_pb.GetAllServicesResponse) => void): grpc.ClientUnaryCall;
    public createService(request: ps_service_pb.CreateServiceRequest, callback: (error: grpc.ServiceError | null, response: ps_service_pb.CreateServiceResponse) => void): grpc.ClientUnaryCall;
    public createService(request: ps_service_pb.CreateServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_service_pb.CreateServiceResponse) => void): grpc.ClientUnaryCall;
    public createService(request: ps_service_pb.CreateServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_service_pb.CreateServiceResponse) => void): grpc.ClientUnaryCall;
    public updateService(request: ps_service_pb.UpdateServiceRequest, callback: (error: grpc.ServiceError | null, response: ps_service_pb.UpdateServiceResponse) => void): grpc.ClientUnaryCall;
    public updateService(request: ps_service_pb.UpdateServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_service_pb.UpdateServiceResponse) => void): grpc.ClientUnaryCall;
    public updateService(request: ps_service_pb.UpdateServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_service_pb.UpdateServiceResponse) => void): grpc.ClientUnaryCall;
    public deleteService(request: ps_service_pb.DeleteServiceRequest, callback: (error: grpc.ServiceError | null, response: ps_service_pb.DeleteServiceResponse) => void): grpc.ClientUnaryCall;
    public deleteService(request: ps_service_pb.DeleteServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_service_pb.DeleteServiceResponse) => void): grpc.ClientUnaryCall;
    public deleteService(request: ps_service_pb.DeleteServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_service_pb.DeleteServiceResponse) => void): grpc.ClientUnaryCall;
    public getServerOptions(request: ps_server_pb.GetServerOptionsRequest, callback: (error: grpc.ServiceError | null, response: ps_server_pb.GetServerOptionsResponse) => void): grpc.ClientUnaryCall;
    public getServerOptions(request: ps_server_pb.GetServerOptionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ps_server_pb.GetServerOptionsResponse) => void): grpc.ClientUnaryCall;
    public getServerOptions(request: ps_server_pb.GetServerOptionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ps_server_pb.GetServerOptionsResponse) => void): grpc.ClientUnaryCall;
    public getGithubEvents(request: ps_github_pb.GetGithubEventsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ps_ghserver_pb.GithubEvent>;
    public getGithubEvents(request: ps_github_pb.GetGithubEventsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ps_ghserver_pb.GithubEvent>;
}
