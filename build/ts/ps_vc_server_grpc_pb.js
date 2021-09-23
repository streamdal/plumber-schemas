// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ps_vc_server.proto defines the server for Vc-service to serve, and plumber to consume
'use strict';
var grpc = require('@grpc/grpc-js');
var ps_vc_server_pb = require('./ps_vc_server_pb.js');

function serialize_protos_ConnectAuthRequest(arg) {
  if (!(arg instanceof ps_vc_server_pb.ConnectAuthRequest)) {
    throw new Error('Expected argument of type protos.ConnectAuthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_ConnectAuthRequest(buffer_arg) {
  return ps_vc_server_pb.ConnectAuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_VCEvent(arg) {
  if (!(arg instanceof ps_vc_server_pb.VCEvent)) {
    throw new Error('Expected argument of type protos.VCEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_VCEvent(buffer_arg) {
  return ps_vc_server_pb.VCEvent.deserializeBinary(new Uint8Array(buffer_arg));
}


var VCServiceService = exports.VCServiceService = {
  connect: {
    path: '/protos.VCService/Connect',
    requestStream: false,
    responseStream: true,
    requestType: ps_vc_server_pb.ConnectAuthRequest,
    responseType: ps_vc_server_pb.VCEvent,
    requestSerialize: serialize_protos_ConnectAuthRequest,
    requestDeserialize: deserialize_protos_ConnectAuthRequest,
    responseSerialize: serialize_protos_VCEvent,
    responseDeserialize: deserialize_protos_VCEvent,
  },
};

exports.VCServiceClient = grpc.makeGenericClientConstructor(VCServiceService);
