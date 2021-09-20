// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ps_connect_pb = require('./ps_connect_pb.js');
var ps_read_pb = require('./ps_read_pb.js');
var ps_write_pb = require('./ps_write_pb.js');
var ps_relay_pb = require('./ps_relay_pb.js');
var ps_github_pb = require('./ps_github_pb.js');
var ps_schema_pb = require('./ps_schema_pb.js');
var ps_service_pb = require('./ps_service_pb.js');
var ps_server_pb = require('./ps_server_pb.js');
var ps_ghserver_pb = require('./ps_ghserver_pb.js');

function serialize_protos_CreateConnectionRequest(arg) {
  if (!(arg instanceof ps_connect_pb.CreateConnectionRequest)) {
    throw new Error('Expected argument of type protos.CreateConnectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_CreateConnectionRequest(buffer_arg) {
  return ps_connect_pb.CreateConnectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_CreateConnectionResponse(arg) {
  if (!(arg instanceof ps_connect_pb.CreateConnectionResponse)) {
    throw new Error('Expected argument of type protos.CreateConnectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_CreateConnectionResponse(buffer_arg) {
  return ps_connect_pb.CreateConnectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_CreateReadRequest(arg) {
  if (!(arg instanceof ps_read_pb.CreateReadRequest)) {
    throw new Error('Expected argument of type protos.CreateReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_CreateReadRequest(buffer_arg) {
  return ps_read_pb.CreateReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_CreateReadResponse(arg) {
  if (!(arg instanceof ps_read_pb.CreateReadResponse)) {
    throw new Error('Expected argument of type protos.CreateReadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_CreateReadResponse(buffer_arg) {
  return ps_read_pb.CreateReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_CreateRelayRequest(arg) {
  if (!(arg instanceof ps_relay_pb.CreateRelayRequest)) {
    throw new Error('Expected argument of type protos.CreateRelayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_CreateRelayRequest(buffer_arg) {
  return ps_relay_pb.CreateRelayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_CreateRelayResponse(arg) {
  if (!(arg instanceof ps_relay_pb.CreateRelayResponse)) {
    throw new Error('Expected argument of type protos.CreateRelayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_CreateRelayResponse(buffer_arg) {
  return ps_relay_pb.CreateRelayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_CreateServiceRequest(arg) {
  if (!(arg instanceof ps_service_pb.CreateServiceRequest)) {
    throw new Error('Expected argument of type protos.CreateServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_CreateServiceRequest(buffer_arg) {
  return ps_service_pb.CreateServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_CreateServiceResponse(arg) {
  if (!(arg instanceof ps_service_pb.CreateServiceResponse)) {
    throw new Error('Expected argument of type protos.CreateServiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_CreateServiceResponse(buffer_arg) {
  return ps_service_pb.CreateServiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_DeleteConnectionRequest(arg) {
  if (!(arg instanceof ps_connect_pb.DeleteConnectionRequest)) {
    throw new Error('Expected argument of type protos.DeleteConnectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_DeleteConnectionRequest(buffer_arg) {
  return ps_connect_pb.DeleteConnectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_DeleteConnectionResponse(arg) {
  if (!(arg instanceof ps_connect_pb.DeleteConnectionResponse)) {
    throw new Error('Expected argument of type protos.DeleteConnectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_DeleteConnectionResponse(buffer_arg) {
  return ps_connect_pb.DeleteConnectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_DeleteReadRequest(arg) {
  if (!(arg instanceof ps_read_pb.DeleteReadRequest)) {
    throw new Error('Expected argument of type protos.DeleteReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_DeleteReadRequest(buffer_arg) {
  return ps_read_pb.DeleteReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_DeleteReadResponse(arg) {
  if (!(arg instanceof ps_read_pb.DeleteReadResponse)) {
    throw new Error('Expected argument of type protos.DeleteReadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_DeleteReadResponse(buffer_arg) {
  return ps_read_pb.DeleteReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_DeleteRelayRequest(arg) {
  if (!(arg instanceof ps_relay_pb.DeleteRelayRequest)) {
    throw new Error('Expected argument of type protos.DeleteRelayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_DeleteRelayRequest(buffer_arg) {
  return ps_relay_pb.DeleteRelayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_DeleteRelayResponse(arg) {
  if (!(arg instanceof ps_relay_pb.DeleteRelayResponse)) {
    throw new Error('Expected argument of type protos.DeleteRelayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_DeleteRelayResponse(buffer_arg) {
  return ps_relay_pb.DeleteRelayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_DeleteSchemaRequest(arg) {
  if (!(arg instanceof ps_schema_pb.DeleteSchemaRequest)) {
    throw new Error('Expected argument of type protos.DeleteSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_DeleteSchemaRequest(buffer_arg) {
  return ps_schema_pb.DeleteSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_DeleteSchemaResponse(arg) {
  if (!(arg instanceof ps_schema_pb.DeleteSchemaResponse)) {
    throw new Error('Expected argument of type protos.DeleteSchemaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_DeleteSchemaResponse(buffer_arg) {
  return ps_schema_pb.DeleteSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_DeleteServiceRequest(arg) {
  if (!(arg instanceof ps_service_pb.DeleteServiceRequest)) {
    throw new Error('Expected argument of type protos.DeleteServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_DeleteServiceRequest(buffer_arg) {
  return ps_service_pb.DeleteServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_DeleteServiceResponse(arg) {
  if (!(arg instanceof ps_service_pb.DeleteServiceResponse)) {
    throw new Error('Expected argument of type protos.DeleteServiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_DeleteServiceResponse(buffer_arg) {
  return ps_service_pb.DeleteServiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetAllConnectionsRequest(arg) {
  if (!(arg instanceof ps_connect_pb.GetAllConnectionsRequest)) {
    throw new Error('Expected argument of type protos.GetAllConnectionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetAllConnectionsRequest(buffer_arg) {
  return ps_connect_pb.GetAllConnectionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetAllConnectionsResponse(arg) {
  if (!(arg instanceof ps_connect_pb.GetAllConnectionsResponse)) {
    throw new Error('Expected argument of type protos.GetAllConnectionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetAllConnectionsResponse(buffer_arg) {
  return ps_connect_pb.GetAllConnectionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetAllReadsRequest(arg) {
  if (!(arg instanceof ps_read_pb.GetAllReadsRequest)) {
    throw new Error('Expected argument of type protos.GetAllReadsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetAllReadsRequest(buffer_arg) {
  return ps_read_pb.GetAllReadsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetAllReadsResponse(arg) {
  if (!(arg instanceof ps_read_pb.GetAllReadsResponse)) {
    throw new Error('Expected argument of type protos.GetAllReadsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetAllReadsResponse(buffer_arg) {
  return ps_read_pb.GetAllReadsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetAllRelaysRequest(arg) {
  if (!(arg instanceof ps_relay_pb.GetAllRelaysRequest)) {
    throw new Error('Expected argument of type protos.GetAllRelaysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetAllRelaysRequest(buffer_arg) {
  return ps_relay_pb.GetAllRelaysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetAllRelaysResponse(arg) {
  if (!(arg instanceof ps_relay_pb.GetAllRelaysResponse)) {
    throw new Error('Expected argument of type protos.GetAllRelaysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetAllRelaysResponse(buffer_arg) {
  return ps_relay_pb.GetAllRelaysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetAllSchemasRequest(arg) {
  if (!(arg instanceof ps_schema_pb.GetAllSchemasRequest)) {
    throw new Error('Expected argument of type protos.GetAllSchemasRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetAllSchemasRequest(buffer_arg) {
  return ps_schema_pb.GetAllSchemasRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetAllSchemasResponse(arg) {
  if (!(arg instanceof ps_schema_pb.GetAllSchemasResponse)) {
    throw new Error('Expected argument of type protos.GetAllSchemasResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetAllSchemasResponse(buffer_arg) {
  return ps_schema_pb.GetAllSchemasResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetAllServicesRequest(arg) {
  if (!(arg instanceof ps_service_pb.GetAllServicesRequest)) {
    throw new Error('Expected argument of type protos.GetAllServicesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetAllServicesRequest(buffer_arg) {
  return ps_service_pb.GetAllServicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetAllServicesResponse(arg) {
  if (!(arg instanceof ps_service_pb.GetAllServicesResponse)) {
    throw new Error('Expected argument of type protos.GetAllServicesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetAllServicesResponse(buffer_arg) {
  return ps_service_pb.GetAllServicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetConnectionRequest(arg) {
  if (!(arg instanceof ps_connect_pb.GetConnectionRequest)) {
    throw new Error('Expected argument of type protos.GetConnectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetConnectionRequest(buffer_arg) {
  return ps_connect_pb.GetConnectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetConnectionResponse(arg) {
  if (!(arg instanceof ps_connect_pb.GetConnectionResponse)) {
    throw new Error('Expected argument of type protos.GetConnectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetConnectionResponse(buffer_arg) {
  return ps_connect_pb.GetConnectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetGithubEventsRequest(arg) {
  if (!(arg instanceof ps_github_pb.GetGithubEventsRequest)) {
    throw new Error('Expected argument of type protos.GetGithubEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetGithubEventsRequest(buffer_arg) {
  return ps_github_pb.GetGithubEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetSchemaRequest(arg) {
  if (!(arg instanceof ps_schema_pb.GetSchemaRequest)) {
    throw new Error('Expected argument of type protos.GetSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetSchemaRequest(buffer_arg) {
  return ps_schema_pb.GetSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetSchemaResponse(arg) {
  if (!(arg instanceof ps_schema_pb.GetSchemaResponse)) {
    throw new Error('Expected argument of type protos.GetSchemaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetSchemaResponse(buffer_arg) {
  return ps_schema_pb.GetSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetServerOptionsRequest(arg) {
  if (!(arg instanceof ps_server_pb.GetServerOptionsRequest)) {
    throw new Error('Expected argument of type protos.GetServerOptionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetServerOptionsRequest(buffer_arg) {
  return ps_server_pb.GetServerOptionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetServerOptionsResponse(arg) {
  if (!(arg instanceof ps_server_pb.GetServerOptionsResponse)) {
    throw new Error('Expected argument of type protos.GetServerOptionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetServerOptionsResponse(buffer_arg) {
  return ps_server_pb.GetServerOptionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetServiceRequest(arg) {
  if (!(arg instanceof ps_service_pb.GetServiceRequest)) {
    throw new Error('Expected argument of type protos.GetServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetServiceRequest(buffer_arg) {
  return ps_service_pb.GetServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetServiceResponse(arg) {
  if (!(arg instanceof ps_service_pb.GetServiceResponse)) {
    throw new Error('Expected argument of type protos.GetServiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetServiceResponse(buffer_arg) {
  return ps_service_pb.GetServiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GithubEvent(arg) {
  if (!(arg instanceof ps_ghserver_pb.GithubEvent)) {
    throw new Error('Expected argument of type protos.GithubEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GithubEvent(buffer_arg) {
  return ps_ghserver_pb.GithubEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_ImportGithubRequest(arg) {
  if (!(arg instanceof ps_schema_pb.ImportGithubRequest)) {
    throw new Error('Expected argument of type protos.ImportGithubRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_ImportGithubRequest(buffer_arg) {
  return ps_schema_pb.ImportGithubRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_ImportGithubResponse(arg) {
  if (!(arg instanceof ps_schema_pb.ImportGithubResponse)) {
    throw new Error('Expected argument of type protos.ImportGithubResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_ImportGithubResponse(buffer_arg) {
  return ps_schema_pb.ImportGithubResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_ImportLocalRequest(arg) {
  if (!(arg instanceof ps_schema_pb.ImportLocalRequest)) {
    throw new Error('Expected argument of type protos.ImportLocalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_ImportLocalRequest(buffer_arg) {
  return ps_schema_pb.ImportLocalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_ImportLocalResponse(arg) {
  if (!(arg instanceof ps_schema_pb.ImportLocalResponse)) {
    throw new Error('Expected argument of type protos.ImportLocalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_ImportLocalResponse(buffer_arg) {
  return ps_schema_pb.ImportLocalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_IsGithubAuthRequest(arg) {
  if (!(arg instanceof ps_github_pb.IsGithubAuthRequest)) {
    throw new Error('Expected argument of type protos.IsGithubAuthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_IsGithubAuthRequest(buffer_arg) {
  return ps_github_pb.IsGithubAuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_IsGithubAuthResponse(arg) {
  if (!(arg instanceof ps_github_pb.IsGithubAuthResponse)) {
    throw new Error('Expected argument of type protos.IsGithubAuthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_IsGithubAuthResponse(buffer_arg) {
  return ps_github_pb.IsGithubAuthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_PollGithubAuthRequest(arg) {
  if (!(arg instanceof ps_github_pb.PollGithubAuthRequest)) {
    throw new Error('Expected argument of type protos.PollGithubAuthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_PollGithubAuthRequest(buffer_arg) {
  return ps_github_pb.PollGithubAuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_PollGithubAuthResponse(arg) {
  if (!(arg instanceof ps_github_pb.PollGithubAuthResponse)) {
    throw new Error('Expected argument of type protos.PollGithubAuthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_PollGithubAuthResponse(buffer_arg) {
  return ps_github_pb.PollGithubAuthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_ResumeReadRequest(arg) {
  if (!(arg instanceof ps_read_pb.ResumeReadRequest)) {
    throw new Error('Expected argument of type protos.ResumeReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_ResumeReadRequest(buffer_arg) {
  return ps_read_pb.ResumeReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_ResumeReadResponse(arg) {
  if (!(arg instanceof ps_read_pb.ResumeReadResponse)) {
    throw new Error('Expected argument of type protos.ResumeReadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_ResumeReadResponse(buffer_arg) {
  return ps_read_pb.ResumeReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_ResumeRelayRequest(arg) {
  if (!(arg instanceof ps_relay_pb.ResumeRelayRequest)) {
    throw new Error('Expected argument of type protos.ResumeRelayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_ResumeRelayRequest(buffer_arg) {
  return ps_relay_pb.ResumeRelayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_ResumeRelayResponse(arg) {
  if (!(arg instanceof ps_relay_pb.ResumeRelayResponse)) {
    throw new Error('Expected argument of type protos.ResumeRelayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_ResumeRelayResponse(buffer_arg) {
  return ps_relay_pb.ResumeRelayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_StartGithubAuthRequest(arg) {
  if (!(arg instanceof ps_github_pb.StartGithubAuthRequest)) {
    throw new Error('Expected argument of type protos.StartGithubAuthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_StartGithubAuthRequest(buffer_arg) {
  return ps_github_pb.StartGithubAuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_StartGithubAuthResponse(arg) {
  if (!(arg instanceof ps_github_pb.StartGithubAuthResponse)) {
    throw new Error('Expected argument of type protos.StartGithubAuthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_StartGithubAuthResponse(buffer_arg) {
  return ps_github_pb.StartGithubAuthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_StartReadRequest(arg) {
  if (!(arg instanceof ps_read_pb.StartReadRequest)) {
    throw new Error('Expected argument of type protos.StartReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_StartReadRequest(buffer_arg) {
  return ps_read_pb.StartReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_StartReadResponse(arg) {
  if (!(arg instanceof ps_read_pb.StartReadResponse)) {
    throw new Error('Expected argument of type protos.StartReadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_StartReadResponse(buffer_arg) {
  return ps_read_pb.StartReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_StopReadRequest(arg) {
  if (!(arg instanceof ps_read_pb.StopReadRequest)) {
    throw new Error('Expected argument of type protos.StopReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_StopReadRequest(buffer_arg) {
  return ps_read_pb.StopReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_StopReadResponse(arg) {
  if (!(arg instanceof ps_read_pb.StopReadResponse)) {
    throw new Error('Expected argument of type protos.StopReadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_StopReadResponse(buffer_arg) {
  return ps_read_pb.StopReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_StopRelayRequest(arg) {
  if (!(arg instanceof ps_relay_pb.StopRelayRequest)) {
    throw new Error('Expected argument of type protos.StopRelayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_StopRelayRequest(buffer_arg) {
  return ps_relay_pb.StopRelayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_StopRelayResponse(arg) {
  if (!(arg instanceof ps_relay_pb.StopRelayResponse)) {
    throw new Error('Expected argument of type protos.StopRelayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_StopRelayResponse(buffer_arg) {
  return ps_relay_pb.StopRelayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_TestConnectionRequest(arg) {
  if (!(arg instanceof ps_connect_pb.TestConnectionRequest)) {
    throw new Error('Expected argument of type protos.TestConnectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_TestConnectionRequest(buffer_arg) {
  return ps_connect_pb.TestConnectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_TestConnectionResponse(arg) {
  if (!(arg instanceof ps_connect_pb.TestConnectionResponse)) {
    throw new Error('Expected argument of type protos.TestConnectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_TestConnectionResponse(buffer_arg) {
  return ps_connect_pb.TestConnectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_UpdateConnectionRequest(arg) {
  if (!(arg instanceof ps_connect_pb.UpdateConnectionRequest)) {
    throw new Error('Expected argument of type protos.UpdateConnectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_UpdateConnectionRequest(buffer_arg) {
  return ps_connect_pb.UpdateConnectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_UpdateConnectionResponse(arg) {
  if (!(arg instanceof ps_connect_pb.UpdateConnectionResponse)) {
    throw new Error('Expected argument of type protos.UpdateConnectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_UpdateConnectionResponse(buffer_arg) {
  return ps_connect_pb.UpdateConnectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_UpdateRelayRequest(arg) {
  if (!(arg instanceof ps_relay_pb.UpdateRelayRequest)) {
    throw new Error('Expected argument of type protos.UpdateRelayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_UpdateRelayRequest(buffer_arg) {
  return ps_relay_pb.UpdateRelayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_UpdateRelayResponse(arg) {
  if (!(arg instanceof ps_relay_pb.UpdateRelayResponse)) {
    throw new Error('Expected argument of type protos.UpdateRelayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_UpdateRelayResponse(buffer_arg) {
  return ps_relay_pb.UpdateRelayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_UpdateServiceRequest(arg) {
  if (!(arg instanceof ps_service_pb.UpdateServiceRequest)) {
    throw new Error('Expected argument of type protos.UpdateServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_UpdateServiceRequest(buffer_arg) {
  return ps_service_pb.UpdateServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_UpdateServiceResponse(arg) {
  if (!(arg instanceof ps_service_pb.UpdateServiceResponse)) {
    throw new Error('Expected argument of type protos.UpdateServiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_UpdateServiceResponse(buffer_arg) {
  return ps_service_pb.UpdateServiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_WriteRequest(arg) {
  if (!(arg instanceof ps_write_pb.WriteRequest)) {
    throw new Error('Expected argument of type protos.WriteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_WriteRequest(buffer_arg) {
  return ps_write_pb.WriteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_WriteResponse(arg) {
  if (!(arg instanceof ps_write_pb.WriteResponse)) {
    throw new Error('Expected argument of type protos.WriteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_WriteResponse(buffer_arg) {
  return ps_write_pb.WriteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PlumberServerService = exports.PlumberServerService = {
  // List configured/known connections
getAllConnections: {
    path: '/protos.PlumberServer/GetAllConnections',
    requestStream: false,
    responseStream: false,
    requestType: ps_connect_pb.GetAllConnectionsRequest,
    responseType: ps_connect_pb.GetAllConnectionsResponse,
    requestSerialize: serialize_protos_GetAllConnectionsRequest,
    requestDeserialize: deserialize_protos_GetAllConnectionsRequest,
    responseSerialize: serialize_protos_GetAllConnectionsResponse,
    responseDeserialize: deserialize_protos_GetAllConnectionsResponse,
  },
  // Fetch a specific connection by ID
getConnection: {
    path: '/protos.PlumberServer/GetConnection',
    requestStream: false,
    responseStream: false,
    requestType: ps_connect_pb.GetConnectionRequest,
    responseType: ps_connect_pb.GetConnectionResponse,
    requestSerialize: serialize_protos_GetConnectionRequest,
    requestDeserialize: deserialize_protos_GetConnectionRequest,
    responseSerialize: serialize_protos_GetConnectionResponse,
    responseDeserialize: deserialize_protos_GetConnectionResponse,
  },
  // Create a connection in plumber
createConnection: {
    path: '/protos.PlumberServer/CreateConnection',
    requestStream: false,
    responseStream: false,
    requestType: ps_connect_pb.CreateConnectionRequest,
    responseType: ps_connect_pb.CreateConnectionResponse,
    requestSerialize: serialize_protos_CreateConnectionRequest,
    requestDeserialize: deserialize_protos_CreateConnectionRequest,
    responseSerialize: serialize_protos_CreateConnectionResponse,
    responseDeserialize: deserialize_protos_CreateConnectionResponse,
  },
  // Test a connection before saving its configuration
testConnection: {
    path: '/protos.PlumberServer/TestConnection',
    requestStream: false,
    responseStream: false,
    requestType: ps_connect_pb.TestConnectionRequest,
    responseType: ps_connect_pb.TestConnectionResponse,
    requestSerialize: serialize_protos_TestConnectionRequest,
    requestDeserialize: deserialize_protos_TestConnectionRequest,
    responseSerialize: serialize_protos_TestConnectionResponse,
    responseDeserialize: deserialize_protos_TestConnectionResponse,
  },
  // Any active connections will be restarted
updateConnection: {
    path: '/protos.PlumberServer/UpdateConnection',
    requestStream: false,
    responseStream: false,
    requestType: ps_connect_pb.UpdateConnectionRequest,
    responseType: ps_connect_pb.UpdateConnectionResponse,
    requestSerialize: serialize_protos_UpdateConnectionRequest,
    requestDeserialize: deserialize_protos_UpdateConnectionRequest,
    responseSerialize: serialize_protos_UpdateConnectionResponse,
    responseDeserialize: deserialize_protos_UpdateConnectionResponse,
  },
  // If there are any active connections, delete will cause them to get closed
deleteConnection: {
    path: '/protos.PlumberServer/DeleteConnection',
    requestStream: false,
    responseStream: false,
    requestType: ps_connect_pb.DeleteConnectionRequest,
    responseType: ps_connect_pb.DeleteConnectionResponse,
    requestSerialize: serialize_protos_DeleteConnectionRequest,
    requestDeserialize: deserialize_protos_DeleteConnectionRequest,
    responseSerialize: serialize_protos_DeleteConnectionResponse,
    responseDeserialize: deserialize_protos_DeleteConnectionResponse,
  },
  // Start reading data from a connection
createRead: {
    path: '/protos.PlumberServer/CreateRead',
    requestStream: false,
    responseStream: false,
    requestType: ps_read_pb.CreateReadRequest,
    responseType: ps_read_pb.CreateReadResponse,
    requestSerialize: serialize_protos_CreateReadRequest,
    requestDeserialize: deserialize_protos_CreateReadRequest,
    responseSerialize: serialize_protos_CreateReadResponse,
    responseDeserialize: deserialize_protos_CreateReadResponse,
  },
  // Streams messages received off of a read
startRead: {
    path: '/protos.PlumberServer/StartRead',
    requestStream: false,
    responseStream: true,
    requestType: ps_read_pb.StartReadRequest,
    responseType: ps_read_pb.StartReadResponse,
    requestSerialize: serialize_protos_StartReadRequest,
    requestDeserialize: deserialize_protos_StartReadRequest,
    responseSerialize: serialize_protos_StartReadResponse,
    responseDeserialize: deserialize_protos_StartReadResponse,
  },
  // List all reads that have been created
getAllReads: {
    path: '/protos.PlumberServer/GetAllReads',
    requestStream: false,
    responseStream: false,
    requestType: ps_read_pb.GetAllReadsRequest,
    responseType: ps_read_pb.GetAllReadsResponse,
    requestSerialize: serialize_protos_GetAllReadsRequest,
    requestDeserialize: deserialize_protos_GetAllReadsRequest,
    responseSerialize: serialize_protos_GetAllReadsResponse,
    responseDeserialize: deserialize_protos_GetAllReadsResponse,
  },
  // Stop reading data from a connection
stopRead: {
    path: '/protos.PlumberServer/StopRead',
    requestStream: false,
    responseStream: false,
    requestType: ps_read_pb.StopReadRequest,
    responseType: ps_read_pb.StopReadResponse,
    requestSerialize: serialize_protos_StopReadRequest,
    requestDeserialize: deserialize_protos_StopReadRequest,
    responseSerialize: serialize_protos_StopReadResponse,
    responseDeserialize: deserialize_protos_StopReadResponse,
  },
  // Resume reading data from an existing read
resumeRead: {
    path: '/protos.PlumberServer/ResumeRead',
    requestStream: false,
    responseStream: false,
    requestType: ps_read_pb.ResumeReadRequest,
    responseType: ps_read_pb.ResumeReadResponse,
    requestSerialize: serialize_protos_ResumeReadRequest,
    requestDeserialize: deserialize_protos_ResumeReadRequest,
    responseSerialize: serialize_protos_ResumeReadResponse,
    responseDeserialize: deserialize_protos_ResumeReadResponse,
  },
  // Resume reading data from an existing read
deleteRead: {
    path: '/protos.PlumberServer/DeleteRead',
    requestStream: false,
    responseStream: false,
    requestType: ps_read_pb.DeleteReadRequest,
    responseType: ps_read_pb.DeleteReadResponse,
    requestSerialize: serialize_protos_DeleteReadRequest,
    requestDeserialize: deserialize_protos_DeleteReadRequest,
    responseSerialize: serialize_protos_DeleteReadResponse,
    responseDeserialize: deserialize_protos_DeleteReadResponse,
  },
  // Write data to a connection
write: {
    path: '/protos.PlumberServer/Write',
    requestStream: false,
    responseStream: false,
    requestType: ps_write_pb.WriteRequest,
    responseType: ps_write_pb.WriteResponse,
    requestSerialize: serialize_protos_WriteRequest,
    requestDeserialize: deserialize_protos_WriteRequest,
    responseSerialize: serialize_protos_WriteResponse,
    responseDeserialize: deserialize_protos_WriteResponse,
  },
  // Create a data relay from plumber server to the Batch platform
createRelay: {
    path: '/protos.PlumberServer/CreateRelay',
    requestStream: false,
    responseStream: false,
    requestType: ps_relay_pb.CreateRelayRequest,
    responseType: ps_relay_pb.CreateRelayResponse,
    requestSerialize: serialize_protos_CreateRelayRequest,
    requestDeserialize: deserialize_protos_CreateRelayRequest,
    responseSerialize: serialize_protos_CreateRelayResponse,
    responseDeserialize: deserialize_protos_CreateRelayResponse,
  },
  // Update a relay (such as API token) - relay will be interrupted!
updateRelay: {
    path: '/protos.PlumberServer/UpdateRelay',
    requestStream: false,
    responseStream: false,
    requestType: ps_relay_pb.UpdateRelayRequest,
    responseType: ps_relay_pb.UpdateRelayResponse,
    requestSerialize: serialize_protos_UpdateRelayRequest,
    requestDeserialize: deserialize_protos_UpdateRelayRequest,
    responseSerialize: serialize_protos_UpdateRelayResponse,
    responseDeserialize: deserialize_protos_UpdateRelayResponse,
  },
  resumeRelay: {
    path: '/protos.PlumberServer/ResumeRelay',
    requestStream: false,
    responseStream: false,
    requestType: ps_relay_pb.ResumeRelayRequest,
    responseType: ps_relay_pb.ResumeRelayResponse,
    requestSerialize: serialize_protos_ResumeRelayRequest,
    requestDeserialize: deserialize_protos_ResumeRelayRequest,
    responseSerialize: serialize_protos_ResumeRelayResponse,
    responseDeserialize: deserialize_protos_ResumeRelayResponse,
  },
  stopRelay: {
    path: '/protos.PlumberServer/StopRelay',
    requestStream: false,
    responseStream: false,
    requestType: ps_relay_pb.StopRelayRequest,
    responseType: ps_relay_pb.StopRelayResponse,
    requestSerialize: serialize_protos_StopRelayRequest,
    requestDeserialize: deserialize_protos_StopRelayRequest,
    responseSerialize: serialize_protos_StopRelayResponse,
    responseDeserialize: deserialize_protos_StopRelayResponse,
  },
  getAllRelays: {
    path: '/protos.PlumberServer/GetAllRelays',
    requestStream: false,
    responseStream: false,
    requestType: ps_relay_pb.GetAllRelaysRequest,
    responseType: ps_relay_pb.GetAllRelaysResponse,
    requestSerialize: serialize_protos_GetAllRelaysRequest,
    requestDeserialize: deserialize_protos_GetAllRelaysRequest,
    responseSerialize: serialize_protos_GetAllRelaysResponse,
    responseDeserialize: deserialize_protos_GetAllRelaysResponse,
  },
  // Delete an existing relay
deleteRelay: {
    path: '/protos.PlumberServer/DeleteRelay',
    requestStream: false,
    responseStream: false,
    requestType: ps_relay_pb.DeleteRelayRequest,
    responseType: ps_relay_pb.DeleteRelayResponse,
    requestSerialize: serialize_protos_DeleteRelayRequest,
    requestDeserialize: deserialize_protos_DeleteRelayRequest,
    responseSerialize: serialize_protos_DeleteRelayResponse,
    responseDeserialize: deserialize_protos_DeleteRelayResponse,
  },
  // Begins github authorization process
startGithubAuth: {
    path: '/protos.PlumberServer/StartGithubAuth',
    requestStream: false,
    responseStream: false,
    requestType: ps_github_pb.StartGithubAuthRequest,
    responseType: ps_github_pb.StartGithubAuthResponse,
    requestSerialize: serialize_protos_StartGithubAuthRequest,
    requestDeserialize: deserialize_protos_StartGithubAuthRequest,
    responseSerialize: serialize_protos_StartGithubAuthResponse,
    responseDeserialize: deserialize_protos_StartGithubAuthResponse,
  },
  // Starts a poll of the github authorization status
pollGithubAuth: {
    path: '/protos.PlumberServer/PollGithubAuth',
    requestStream: false,
    responseStream: true,
    requestType: ps_github_pb.PollGithubAuthRequest,
    responseType: ps_github_pb.PollGithubAuthResponse,
    requestSerialize: serialize_protos_PollGithubAuthRequest,
    requestDeserialize: deserialize_protos_PollGithubAuthRequest,
    responseSerialize: serialize_protos_PollGithubAuthResponse,
    responseDeserialize: deserialize_protos_PollGithubAuthResponse,
  },
  // Determines if we have authorized plumber with github
isGithubAuth: {
    path: '/protos.PlumberServer/IsGithubAuth',
    requestStream: false,
    responseStream: false,
    requestType: ps_github_pb.IsGithubAuthRequest,
    responseType: ps_github_pb.IsGithubAuthResponse,
    requestSerialize: serialize_protos_IsGithubAuthRequest,
    requestDeserialize: deserialize_protos_IsGithubAuthRequest,
    responseSerialize: serialize_protos_IsGithubAuthResponse,
    responseDeserialize: deserialize_protos_IsGithubAuthResponse,
  },
  // Retrieve a single schema
getSchema: {
    path: '/protos.PlumberServer/GetSchema',
    requestStream: false,
    responseStream: false,
    requestType: ps_schema_pb.GetSchemaRequest,
    responseType: ps_schema_pb.GetSchemaResponse,
    requestSerialize: serialize_protos_GetSchemaRequest,
    requestDeserialize: deserialize_protos_GetSchemaRequest,
    responseSerialize: serialize_protos_GetSchemaResponse,
    responseDeserialize: deserialize_protos_GetSchemaResponse,
  },
  // Retrieve all schemas
getAllSchemas: {
    path: '/protos.PlumberServer/GetAllSchemas',
    requestStream: false,
    responseStream: false,
    requestType: ps_schema_pb.GetAllSchemasRequest,
    responseType: ps_schema_pb.GetAllSchemasResponse,
    requestSerialize: serialize_protos_GetAllSchemasRequest,
    requestDeserialize: deserialize_protos_GetAllSchemasRequest,
    responseSerialize: serialize_protos_GetAllSchemasResponse,
    responseDeserialize: deserialize_protos_GetAllSchemasResponse,
  },
  // Import a schema from github
importGithub: {
    path: '/protos.PlumberServer/ImportGithub',
    requestStream: false,
    responseStream: false,
    requestType: ps_schema_pb.ImportGithubRequest,
    responseType: ps_schema_pb.ImportGithubResponse,
    requestSerialize: serialize_protos_ImportGithubRequest,
    requestDeserialize: deserialize_protos_ImportGithubRequest,
    responseSerialize: serialize_protos_ImportGithubResponse,
    responseDeserialize: deserialize_protos_ImportGithubResponse,
  },
  // Import a schema from the local file system
importLocal: {
    path: '/protos.PlumberServer/ImportLocal',
    requestStream: false,
    responseStream: false,
    requestType: ps_schema_pb.ImportLocalRequest,
    responseType: ps_schema_pb.ImportLocalResponse,
    requestSerialize: serialize_protos_ImportLocalRequest,
    requestDeserialize: deserialize_protos_ImportLocalRequest,
    responseSerialize: serialize_protos_ImportLocalResponse,
    responseDeserialize: deserialize_protos_ImportLocalResponse,
  },
  // Delete a schema
deleteSchema: {
    path: '/protos.PlumberServer/DeleteSchema',
    requestStream: false,
    responseStream: false,
    requestType: ps_schema_pb.DeleteSchemaRequest,
    responseType: ps_schema_pb.DeleteSchemaResponse,
    requestSerialize: serialize_protos_DeleteSchemaRequest,
    requestDeserialize: deserialize_protos_DeleteSchemaRequest,
    responseSerialize: serialize_protos_DeleteSchemaResponse,
    responseDeserialize: deserialize_protos_DeleteSchemaResponse,
  },
  getService: {
    path: '/protos.PlumberServer/GetService',
    requestStream: false,
    responseStream: false,
    requestType: ps_service_pb.GetServiceRequest,
    responseType: ps_service_pb.GetServiceResponse,
    requestSerialize: serialize_protos_GetServiceRequest,
    requestDeserialize: deserialize_protos_GetServiceRequest,
    responseSerialize: serialize_protos_GetServiceResponse,
    responseDeserialize: deserialize_protos_GetServiceResponse,
  },
  getAllServices: {
    path: '/protos.PlumberServer/GetAllServices',
    requestStream: false,
    responseStream: false,
    requestType: ps_service_pb.GetAllServicesRequest,
    responseType: ps_service_pb.GetAllServicesResponse,
    requestSerialize: serialize_protos_GetAllServicesRequest,
    requestDeserialize: deserialize_protos_GetAllServicesRequest,
    responseSerialize: serialize_protos_GetAllServicesResponse,
    responseDeserialize: deserialize_protos_GetAllServicesResponse,
  },
  createService: {
    path: '/protos.PlumberServer/CreateService',
    requestStream: false,
    responseStream: false,
    requestType: ps_service_pb.CreateServiceRequest,
    responseType: ps_service_pb.CreateServiceResponse,
    requestSerialize: serialize_protos_CreateServiceRequest,
    requestDeserialize: deserialize_protos_CreateServiceRequest,
    responseSerialize: serialize_protos_CreateServiceResponse,
    responseDeserialize: deserialize_protos_CreateServiceResponse,
  },
  updateService: {
    path: '/protos.PlumberServer/UpdateService',
    requestStream: false,
    responseStream: false,
    requestType: ps_service_pb.UpdateServiceRequest,
    responseType: ps_service_pb.UpdateServiceResponse,
    requestSerialize: serialize_protos_UpdateServiceRequest,
    requestDeserialize: deserialize_protos_UpdateServiceRequest,
    responseSerialize: serialize_protos_UpdateServiceResponse,
    responseDeserialize: deserialize_protos_UpdateServiceResponse,
  },
  deleteService: {
    path: '/protos.PlumberServer/DeleteService',
    requestStream: false,
    responseStream: false,
    requestType: ps_service_pb.DeleteServiceRequest,
    responseType: ps_service_pb.DeleteServiceResponse,
    requestSerialize: serialize_protos_DeleteServiceRequest,
    requestDeserialize: deserialize_protos_DeleteServiceRequest,
    responseSerialize: serialize_protos_DeleteServiceResponse,
    responseDeserialize: deserialize_protos_DeleteServiceResponse,
  },
  getServerOptions: {
    path: '/protos.PlumberServer/GetServerOptions',
    requestStream: false,
    responseStream: false,
    requestType: ps_server_pb.GetServerOptionsRequest,
    responseType: ps_server_pb.GetServerOptionsResponse,
    requestSerialize: serialize_protos_GetServerOptionsRequest,
    requestDeserialize: deserialize_protos_GetServerOptionsRequest,
    responseSerialize: serialize_protos_GetServerOptionsResponse,
    responseDeserialize: deserialize_protos_GetServerOptionsResponse,
  },
  // GetGithubEvents connects to github-app backend and returns a stream of events pushed from github
getGithubEvents: {
    path: '/protos.PlumberServer/GetGithubEvents',
    requestStream: false,
    responseStream: true,
    requestType: ps_github_pb.GetGithubEventsRequest,
    responseType: ps_ghserver_pb.GithubEvent,
    requestSerialize: serialize_protos_GetGithubEventsRequest,
    requestDeserialize: deserialize_protos_GetGithubEventsRequest,
    responseSerialize: serialize_protos_GithubEvent,
    responseDeserialize: deserialize_protos_GithubEvent,
  },
};

exports.PlumberServerClient = grpc.makeGenericClientConstructor(PlumberServerService);
