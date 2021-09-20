// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// @mark: we should explain the difference between ps_ghserver.proto and ps_github.proto
'use strict';
var grpc = require('@grpc/grpc-js');
var ps_ghserver_pb = require('./ps_ghserver_pb.js');

function serialize_protos_ConnectAuthRequest(arg) {
  if (!(arg instanceof ps_ghserver_pb.ConnectAuthRequest)) {
    throw new Error('Expected argument of type protos.ConnectAuthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_ConnectAuthRequest(buffer_arg) {
  return ps_ghserver_pb.ConnectAuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


var GithubServerService = exports.GithubServerService = {
  connect: {
    path: '/protos.GithubServer/Connect',
    requestStream: false,
    responseStream: true,
    requestType: ps_ghserver_pb.ConnectAuthRequest,
    responseType: ps_ghserver_pb.GithubEvent,
    requestSerialize: serialize_protos_ConnectAuthRequest,
    requestDeserialize: deserialize_protos_ConnectAuthRequest,
    responseSerialize: serialize_protos_GithubEvent,
    responseDeserialize: deserialize_protos_GithubEvent,
  },
};

exports.GithubServerClient = grpc.makeGenericClientConstructor(GithubServerService);
