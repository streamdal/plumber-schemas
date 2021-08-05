// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var connect_pb = require('./connect_pb.js');
var read_pb = require('./read_pb.js');
var write_pb = require('./write_pb.js');
var relay_pb = require('./relay_pb.js');
var github_pb = require('./github_pb.js');

function serialize_protos_CreateConnectionRequest(arg) {
  if (!(arg instanceof connect_pb.CreateConnectionRequest)) {
    throw new Error('Expected argument of type protos.CreateConnectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_CreateConnectionRequest(buffer_arg) {
  return connect_pb.CreateConnectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_CreateConnectionResponse(arg) {
  if (!(arg instanceof connect_pb.CreateConnectionResponse)) {
    throw new Error('Expected argument of type protos.CreateConnectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_CreateConnectionResponse(buffer_arg) {
  return connect_pb.CreateConnectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_CreateReadRequest(arg) {
  if (!(arg instanceof read_pb.CreateReadRequest)) {
    throw new Error('Expected argument of type protos.CreateReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_CreateReadRequest(buffer_arg) {
  return read_pb.CreateReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_CreateReadResponse(arg) {
  if (!(arg instanceof read_pb.CreateReadResponse)) {
    throw new Error('Expected argument of type protos.CreateReadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_CreateReadResponse(buffer_arg) {
  return read_pb.CreateReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_CreateRelayRequest(arg) {
  if (!(arg instanceof relay_pb.CreateRelayRequest)) {
    throw new Error('Expected argument of type protos.CreateRelayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_CreateRelayRequest(buffer_arg) {
  return relay_pb.CreateRelayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_CreateRelayResponse(arg) {
  if (!(arg instanceof relay_pb.CreateRelayResponse)) {
    throw new Error('Expected argument of type protos.CreateRelayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_CreateRelayResponse(buffer_arg) {
  return relay_pb.CreateRelayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_DeleteConnectionRequest(arg) {
  if (!(arg instanceof connect_pb.DeleteConnectionRequest)) {
    throw new Error('Expected argument of type protos.DeleteConnectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_DeleteConnectionRequest(buffer_arg) {
  return connect_pb.DeleteConnectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_DeleteConnectionResponse(arg) {
  if (!(arg instanceof connect_pb.DeleteConnectionResponse)) {
    throw new Error('Expected argument of type protos.DeleteConnectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_DeleteConnectionResponse(buffer_arg) {
  return connect_pb.DeleteConnectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_DeleteReadRequest(arg) {
  if (!(arg instanceof read_pb.DeleteReadRequest)) {
    throw new Error('Expected argument of type protos.DeleteReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_DeleteReadRequest(buffer_arg) {
  return read_pb.DeleteReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_DeleteReadResponse(arg) {
  if (!(arg instanceof read_pb.DeleteReadResponse)) {
    throw new Error('Expected argument of type protos.DeleteReadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_DeleteReadResponse(buffer_arg) {
  return read_pb.DeleteReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_DeleteRelayRequest(arg) {
  if (!(arg instanceof relay_pb.DeleteRelayRequest)) {
    throw new Error('Expected argument of type protos.DeleteRelayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_DeleteRelayRequest(buffer_arg) {
  return relay_pb.DeleteRelayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_DeleteRelayResponse(arg) {
  if (!(arg instanceof relay_pb.DeleteRelayResponse)) {
    throw new Error('Expected argument of type protos.DeleteRelayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_DeleteRelayResponse(buffer_arg) {
  return relay_pb.DeleteRelayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetAllConnectionsRequest(arg) {
  if (!(arg instanceof connect_pb.GetAllConnectionsRequest)) {
    throw new Error('Expected argument of type protos.GetAllConnectionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetAllConnectionsRequest(buffer_arg) {
  return connect_pb.GetAllConnectionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetAllConnectionsResponse(arg) {
  if (!(arg instanceof connect_pb.GetAllConnectionsResponse)) {
    throw new Error('Expected argument of type protos.GetAllConnectionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetAllConnectionsResponse(buffer_arg) {
  return connect_pb.GetAllConnectionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetAllReadsRequest(arg) {
  if (!(arg instanceof read_pb.GetAllReadsRequest)) {
    throw new Error('Expected argument of type protos.GetAllReadsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetAllReadsRequest(buffer_arg) {
  return read_pb.GetAllReadsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetAllReadsResponse(arg) {
  if (!(arg instanceof read_pb.GetAllReadsResponse)) {
    throw new Error('Expected argument of type protos.GetAllReadsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetAllReadsResponse(buffer_arg) {
  return read_pb.GetAllReadsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetAllRelaysRequest(arg) {
  if (!(arg instanceof relay_pb.GetAllRelaysRequest)) {
    throw new Error('Expected argument of type protos.GetAllRelaysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetAllRelaysRequest(buffer_arg) {
  return relay_pb.GetAllRelaysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetAllRelaysResponse(arg) {
  if (!(arg instanceof relay_pb.GetAllRelaysResponse)) {
    throw new Error('Expected argument of type protos.GetAllRelaysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetAllRelaysResponse(buffer_arg) {
  return relay_pb.GetAllRelaysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetConnectionRequest(arg) {
  if (!(arg instanceof connect_pb.GetConnectionRequest)) {
    throw new Error('Expected argument of type protos.GetConnectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetConnectionRequest(buffer_arg) {
  return connect_pb.GetConnectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetConnectionResponse(arg) {
  if (!(arg instanceof connect_pb.GetConnectionResponse)) {
    throw new Error('Expected argument of type protos.GetConnectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetConnectionResponse(buffer_arg) {
  return connect_pb.GetConnectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_IsGithubAuthRequest(arg) {
  if (!(arg instanceof github_pb.IsGithubAuthRequest)) {
    throw new Error('Expected argument of type protos.IsGithubAuthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_IsGithubAuthRequest(buffer_arg) {
  return github_pb.IsGithubAuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_IsGithubAuthResponse(arg) {
  if (!(arg instanceof github_pb.IsGithubAuthResponse)) {
    throw new Error('Expected argument of type protos.IsGithubAuthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_IsGithubAuthResponse(buffer_arg) {
  return github_pb.IsGithubAuthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_PollGithubAuthRequest(arg) {
  if (!(arg instanceof github_pb.PollGithubAuthRequest)) {
    throw new Error('Expected argument of type protos.PollGithubAuthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_PollGithubAuthRequest(buffer_arg) {
  return github_pb.PollGithubAuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_PollGithubAuthResponse(arg) {
  if (!(arg instanceof github_pb.PollGithubAuthResponse)) {
    throw new Error('Expected argument of type protos.PollGithubAuthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_PollGithubAuthResponse(buffer_arg) {
  return github_pb.PollGithubAuthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_ResumeReadRequest(arg) {
  if (!(arg instanceof read_pb.ResumeReadRequest)) {
    throw new Error('Expected argument of type protos.ResumeReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_ResumeReadRequest(buffer_arg) {
  return read_pb.ResumeReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_ResumeReadResponse(arg) {
  if (!(arg instanceof read_pb.ResumeReadResponse)) {
    throw new Error('Expected argument of type protos.ResumeReadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_ResumeReadResponse(buffer_arg) {
  return read_pb.ResumeReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_ResumeRelayRequest(arg) {
  if (!(arg instanceof relay_pb.ResumeRelayRequest)) {
    throw new Error('Expected argument of type protos.ResumeRelayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_ResumeRelayRequest(buffer_arg) {
  return relay_pb.ResumeRelayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_ResumeRelayResponse(arg) {
  if (!(arg instanceof relay_pb.ResumeRelayResponse)) {
    throw new Error('Expected argument of type protos.ResumeRelayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_ResumeRelayResponse(buffer_arg) {
  return relay_pb.ResumeRelayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_StartGithubAuthRequest(arg) {
  if (!(arg instanceof github_pb.StartGithubAuthRequest)) {
    throw new Error('Expected argument of type protos.StartGithubAuthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_StartGithubAuthRequest(buffer_arg) {
  return github_pb.StartGithubAuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_StartGithubAuthResponse(arg) {
  if (!(arg instanceof github_pb.StartGithubAuthResponse)) {
    throw new Error('Expected argument of type protos.StartGithubAuthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_StartGithubAuthResponse(buffer_arg) {
  return github_pb.StartGithubAuthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_StartReadRequest(arg) {
  if (!(arg instanceof read_pb.StartReadRequest)) {
    throw new Error('Expected argument of type protos.StartReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_StartReadRequest(buffer_arg) {
  return read_pb.StartReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_StartReadResponse(arg) {
  if (!(arg instanceof read_pb.StartReadResponse)) {
    throw new Error('Expected argument of type protos.StartReadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_StartReadResponse(buffer_arg) {
  return read_pb.StartReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_StopReadRequest(arg) {
  if (!(arg instanceof read_pb.StopReadRequest)) {
    throw new Error('Expected argument of type protos.StopReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_StopReadRequest(buffer_arg) {
  return read_pb.StopReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_StopReadResponse(arg) {
  if (!(arg instanceof read_pb.StopReadResponse)) {
    throw new Error('Expected argument of type protos.StopReadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_StopReadResponse(buffer_arg) {
  return read_pb.StopReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_StopRelayRequest(arg) {
  if (!(arg instanceof relay_pb.StopRelayRequest)) {
    throw new Error('Expected argument of type protos.StopRelayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_StopRelayRequest(buffer_arg) {
  return relay_pb.StopRelayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_StopRelayResponse(arg) {
  if (!(arg instanceof relay_pb.StopRelayResponse)) {
    throw new Error('Expected argument of type protos.StopRelayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_StopRelayResponse(buffer_arg) {
  return relay_pb.StopRelayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_TestConnectionRequest(arg) {
  if (!(arg instanceof connect_pb.TestConnectionRequest)) {
    throw new Error('Expected argument of type protos.TestConnectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_TestConnectionRequest(buffer_arg) {
  return connect_pb.TestConnectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_TestConnectionResponse(arg) {
  if (!(arg instanceof connect_pb.TestConnectionResponse)) {
    throw new Error('Expected argument of type protos.TestConnectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_TestConnectionResponse(buffer_arg) {
  return connect_pb.TestConnectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_UpdateConnectionRequest(arg) {
  if (!(arg instanceof connect_pb.UpdateConnectionRequest)) {
    throw new Error('Expected argument of type protos.UpdateConnectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_UpdateConnectionRequest(buffer_arg) {
  return connect_pb.UpdateConnectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_UpdateConnectionResponse(arg) {
  if (!(arg instanceof connect_pb.UpdateConnectionResponse)) {
    throw new Error('Expected argument of type protos.UpdateConnectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_UpdateConnectionResponse(buffer_arg) {
  return connect_pb.UpdateConnectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_UpdateRelayRequest(arg) {
  if (!(arg instanceof relay_pb.UpdateRelayRequest)) {
    throw new Error('Expected argument of type protos.UpdateRelayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_UpdateRelayRequest(buffer_arg) {
  return relay_pb.UpdateRelayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_UpdateRelayResponse(arg) {
  if (!(arg instanceof relay_pb.UpdateRelayResponse)) {
    throw new Error('Expected argument of type protos.UpdateRelayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_UpdateRelayResponse(buffer_arg) {
  return relay_pb.UpdateRelayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_WriteRequest(arg) {
  if (!(arg instanceof write_pb.WriteRequest)) {
    throw new Error('Expected argument of type protos.WriteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_WriteRequest(buffer_arg) {
  return write_pb.WriteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_WriteResponse(arg) {
  if (!(arg instanceof write_pb.WriteResponse)) {
    throw new Error('Expected argument of type protos.WriteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_WriteResponse(buffer_arg) {
  return write_pb.WriteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PlumberServerService = exports.PlumberServerService = {
  // List configured/known connections
getAllConnections: {
    path: '/protos.PlumberServer/GetAllConnections',
    requestStream: false,
    responseStream: false,
    requestType: connect_pb.GetAllConnectionsRequest,
    responseType: connect_pb.GetAllConnectionsResponse,
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
    requestType: connect_pb.GetConnectionRequest,
    responseType: connect_pb.GetConnectionResponse,
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
    requestType: connect_pb.CreateConnectionRequest,
    responseType: connect_pb.CreateConnectionResponse,
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
    requestType: connect_pb.TestConnectionRequest,
    responseType: connect_pb.TestConnectionResponse,
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
    requestType: connect_pb.UpdateConnectionRequest,
    responseType: connect_pb.UpdateConnectionResponse,
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
    requestType: connect_pb.DeleteConnectionRequest,
    responseType: connect_pb.DeleteConnectionResponse,
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
    requestType: read_pb.CreateReadRequest,
    responseType: read_pb.CreateReadResponse,
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
    requestType: read_pb.StartReadRequest,
    responseType: read_pb.StartReadResponse,
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
    requestType: read_pb.GetAllReadsRequest,
    responseType: read_pb.GetAllReadsResponse,
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
    requestType: read_pb.StopReadRequest,
    responseType: read_pb.StopReadResponse,
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
    requestType: read_pb.ResumeReadRequest,
    responseType: read_pb.ResumeReadResponse,
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
    requestType: read_pb.DeleteReadRequest,
    responseType: read_pb.DeleteReadResponse,
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
    requestType: write_pb.WriteRequest,
    responseType: write_pb.WriteResponse,
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
    requestType: relay_pb.CreateRelayRequest,
    responseType: relay_pb.CreateRelayResponse,
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
    requestType: relay_pb.UpdateRelayRequest,
    responseType: relay_pb.UpdateRelayResponse,
    requestSerialize: serialize_protos_UpdateRelayRequest,
    requestDeserialize: deserialize_protos_UpdateRelayRequest,
    responseSerialize: serialize_protos_UpdateRelayResponse,
    responseDeserialize: deserialize_protos_UpdateRelayResponse,
  },
  resumeRelay: {
    path: '/protos.PlumberServer/ResumeRelay',
    requestStream: false,
    responseStream: false,
    requestType: relay_pb.ResumeRelayRequest,
    responseType: relay_pb.ResumeRelayResponse,
    requestSerialize: serialize_protos_ResumeRelayRequest,
    requestDeserialize: deserialize_protos_ResumeRelayRequest,
    responseSerialize: serialize_protos_ResumeRelayResponse,
    responseDeserialize: deserialize_protos_ResumeRelayResponse,
  },
  stopRelay: {
    path: '/protos.PlumberServer/StopRelay',
    requestStream: false,
    responseStream: false,
    requestType: relay_pb.StopRelayRequest,
    responseType: relay_pb.StopRelayResponse,
    requestSerialize: serialize_protos_StopRelayRequest,
    requestDeserialize: deserialize_protos_StopRelayRequest,
    responseSerialize: serialize_protos_StopRelayResponse,
    responseDeserialize: deserialize_protos_StopRelayResponse,
  },
  getAllRelays: {
    path: '/protos.PlumberServer/GetAllRelays',
    requestStream: false,
    responseStream: false,
    requestType: relay_pb.GetAllRelaysRequest,
    responseType: relay_pb.GetAllRelaysResponse,
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
    requestType: relay_pb.DeleteRelayRequest,
    responseType: relay_pb.DeleteRelayResponse,
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
    requestType: github_pb.StartGithubAuthRequest,
    responseType: github_pb.StartGithubAuthResponse,
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
    requestType: github_pb.PollGithubAuthRequest,
    responseType: github_pb.PollGithubAuthResponse,
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
    requestType: github_pb.IsGithubAuthRequest,
    responseType: github_pb.IsGithubAuthResponse,
    requestSerialize: serialize_protos_IsGithubAuthRequest,
    requestDeserialize: deserialize_protos_IsGithubAuthRequest,
    responseSerialize: serialize_protos_IsGithubAuthResponse,
    responseDeserialize: deserialize_protos_IsGithubAuthResponse,
  },
};

exports.PlumberServerClient = grpc.makeGenericClientConstructor(PlumberServerService);
