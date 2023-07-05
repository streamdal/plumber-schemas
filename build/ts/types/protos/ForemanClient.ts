// Original file: ../../protos/ps_foreman_client.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { RegisterRequest as _protos_RegisterRequest, RegisterRequest__Output as _protos_RegisterRequest__Output } from '../protos/RegisterRequest';
import type { RegisterResponse as _protos_RegisterResponse, RegisterResponse__Output as _protos_RegisterResponse__Output } from '../protos/RegisterResponse';

export interface ForemanClientClient extends grpc.Client {
  Register(argument: _protos_RegisterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _protos_RegisterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _protos_RegisterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _protos_RegisterRequest, callback: grpc.requestCallback<_protos_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _protos_RegisterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _protos_RegisterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _protos_RegisterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _protos_RegisterRequest, callback: grpc.requestCallback<_protos_RegisterResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ForemanClientHandlers extends grpc.UntypedServiceImplementation {
  Register: grpc.handleUnaryCall<_protos_RegisterRequest__Output, _protos_RegisterResponse>;
  
}

export interface ForemanClientDefinition extends grpc.ServiceDefinition {
  Register: MethodDefinition<_protos_RegisterRequest, _protos_RegisterResponse, _protos_RegisterRequest__Output, _protos_RegisterResponse__Output>
}
