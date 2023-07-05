// Original file: ../../protos/ps_foreman_server.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateConnectionRequest as _protos_CreateConnectionRequest, CreateConnectionRequest__Output as _protos_CreateConnectionRequest__Output } from '../protos/CreateConnectionRequest';
import type { CreateConnectionResponse as _protos_CreateConnectionResponse, CreateConnectionResponse__Output as _protos_CreateConnectionResponse__Output } from '../protos/CreateConnectionResponse';
import type { CreateRelayRequest as _protos_CreateRelayRequest, CreateRelayRequest__Output as _protos_CreateRelayRequest__Output } from '../protos/CreateRelayRequest';
import type { CreateRelayResponse as _protos_CreateRelayResponse, CreateRelayResponse__Output as _protos_CreateRelayResponse__Output } from '../protos/CreateRelayResponse';
import type { CreateTunnelRequest as _protos_CreateTunnelRequest, CreateTunnelRequest__Output as _protos_CreateTunnelRequest__Output } from '../protos/CreateTunnelRequest';
import type { CreateTunnelResponse as _protos_CreateTunnelResponse, CreateTunnelResponse__Output as _protos_CreateTunnelResponse__Output } from '../protos/CreateTunnelResponse';
import type { DeleteConnectionRequest as _protos_DeleteConnectionRequest, DeleteConnectionRequest__Output as _protos_DeleteConnectionRequest__Output } from '../protos/DeleteConnectionRequest';
import type { DeleteConnectionResponse as _protos_DeleteConnectionResponse, DeleteConnectionResponse__Output as _protos_DeleteConnectionResponse__Output } from '../protos/DeleteConnectionResponse';
import type { DeleteRelayRequest as _protos_DeleteRelayRequest, DeleteRelayRequest__Output as _protos_DeleteRelayRequest__Output } from '../protos/DeleteRelayRequest';
import type { DeleteRelayResponse as _protos_DeleteRelayResponse, DeleteRelayResponse__Output as _protos_DeleteRelayResponse__Output } from '../protos/DeleteRelayResponse';
import type { DeleteTunnelRequest as _protos_DeleteTunnelRequest, DeleteTunnelRequest__Output as _protos_DeleteTunnelRequest__Output } from '../protos/DeleteTunnelRequest';
import type { DeleteTunnelResponse as _protos_DeleteTunnelResponse, DeleteTunnelResponse__Output as _protos_DeleteTunnelResponse__Output } from '../protos/DeleteTunnelResponse';
import type { GetAllConnectionsRequest as _protos_GetAllConnectionsRequest, GetAllConnectionsRequest__Output as _protos_GetAllConnectionsRequest__Output } from '../protos/GetAllConnectionsRequest';
import type { GetAllConnectionsResponse as _protos_GetAllConnectionsResponse, GetAllConnectionsResponse__Output as _protos_GetAllConnectionsResponse__Output } from '../protos/GetAllConnectionsResponse';
import type { GetAllRelaysRequest as _protos_GetAllRelaysRequest, GetAllRelaysRequest__Output as _protos_GetAllRelaysRequest__Output } from '../protos/GetAllRelaysRequest';
import type { GetAllRelaysResponse as _protos_GetAllRelaysResponse, GetAllRelaysResponse__Output as _protos_GetAllRelaysResponse__Output } from '../protos/GetAllRelaysResponse';
import type { GetAllTunnelsRequest as _protos_GetAllTunnelsRequest, GetAllTunnelsRequest__Output as _protos_GetAllTunnelsRequest__Output } from '../protos/GetAllTunnelsRequest';
import type { GetAllTunnelsResponse as _protos_GetAllTunnelsResponse, GetAllTunnelsResponse__Output as _protos_GetAllTunnelsResponse__Output } from '../protos/GetAllTunnelsResponse';
import type { GetConnectionRequest as _protos_GetConnectionRequest, GetConnectionRequest__Output as _protos_GetConnectionRequest__Output } from '../protos/GetConnectionRequest';
import type { GetConnectionResponse as _protos_GetConnectionResponse, GetConnectionResponse__Output as _protos_GetConnectionResponse__Output } from '../protos/GetConnectionResponse';
import type { GetRelayRequest as _protos_GetRelayRequest, GetRelayRequest__Output as _protos_GetRelayRequest__Output } from '../protos/GetRelayRequest';
import type { GetRelayResponse as _protos_GetRelayResponse, GetRelayResponse__Output as _protos_GetRelayResponse__Output } from '../protos/GetRelayResponse';
import type { GetServerOptionsRequest as _protos_GetServerOptionsRequest, GetServerOptionsRequest__Output as _protos_GetServerOptionsRequest__Output } from '../protos/GetServerOptionsRequest';
import type { GetServerOptionsResponse as _protos_GetServerOptionsResponse, GetServerOptionsResponse__Output as _protos_GetServerOptionsResponse__Output } from '../protos/GetServerOptionsResponse';
import type { GetTunnelRequest as _protos_GetTunnelRequest, GetTunnelRequest__Output as _protos_GetTunnelRequest__Output } from '../protos/GetTunnelRequest';
import type { GetTunnelResponse as _protos_GetTunnelResponse, GetTunnelResponse__Output as _protos_GetTunnelResponse__Output } from '../protos/GetTunnelResponse';
import type { ListPlumbersRequest as _protos_ListPlumbersRequest, ListPlumbersRequest__Output as _protos_ListPlumbersRequest__Output } from '../protos/ListPlumbersRequest';
import type { ListPlumbersResponse as _protos_ListPlumbersResponse, ListPlumbersResponse__Output as _protos_ListPlumbersResponse__Output } from '../protos/ListPlumbersResponse';
import type { ResumeRelayRequest as _protos_ResumeRelayRequest, ResumeRelayRequest__Output as _protos_ResumeRelayRequest__Output } from '../protos/ResumeRelayRequest';
import type { ResumeRelayResponse as _protos_ResumeRelayResponse, ResumeRelayResponse__Output as _protos_ResumeRelayResponse__Output } from '../protos/ResumeRelayResponse';
import type { ResumeTunnelRequest as _protos_ResumeTunnelRequest, ResumeTunnelRequest__Output as _protos_ResumeTunnelRequest__Output } from '../protos/ResumeTunnelRequest';
import type { ResumeTunnelResponse as _protos_ResumeTunnelResponse, ResumeTunnelResponse__Output as _protos_ResumeTunnelResponse__Output } from '../protos/ResumeTunnelResponse';
import type { StopRelayRequest as _protos_StopRelayRequest, StopRelayRequest__Output as _protos_StopRelayRequest__Output } from '../protos/StopRelayRequest';
import type { StopRelayResponse as _protos_StopRelayResponse, StopRelayResponse__Output as _protos_StopRelayResponse__Output } from '../protos/StopRelayResponse';
import type { StopTunnelRequest as _protos_StopTunnelRequest, StopTunnelRequest__Output as _protos_StopTunnelRequest__Output } from '../protos/StopTunnelRequest';
import type { StopTunnelResponse as _protos_StopTunnelResponse, StopTunnelResponse__Output as _protos_StopTunnelResponse__Output } from '../protos/StopTunnelResponse';
import type { TestConnectionRequest as _protos_TestConnectionRequest, TestConnectionRequest__Output as _protos_TestConnectionRequest__Output } from '../protos/TestConnectionRequest';
import type { TestConnectionResponse as _protos_TestConnectionResponse, TestConnectionResponse__Output as _protos_TestConnectionResponse__Output } from '../protos/TestConnectionResponse';
import type { UpdateConnectionRequest as _protos_UpdateConnectionRequest, UpdateConnectionRequest__Output as _protos_UpdateConnectionRequest__Output } from '../protos/UpdateConnectionRequest';
import type { UpdateConnectionResponse as _protos_UpdateConnectionResponse, UpdateConnectionResponse__Output as _protos_UpdateConnectionResponse__Output } from '../protos/UpdateConnectionResponse';
import type { UpdateRelayRequest as _protos_UpdateRelayRequest, UpdateRelayRequest__Output as _protos_UpdateRelayRequest__Output } from '../protos/UpdateRelayRequest';
import type { UpdateRelayResponse as _protos_UpdateRelayResponse, UpdateRelayResponse__Output as _protos_UpdateRelayResponse__Output } from '../protos/UpdateRelayResponse';
import type { UpdateTunnelRequest as _protos_UpdateTunnelRequest, UpdateTunnelRequest__Output as _protos_UpdateTunnelRequest__Output } from '../protos/UpdateTunnelRequest';
import type { UpdateTunnelResponse as _protos_UpdateTunnelResponse, UpdateTunnelResponse__Output as _protos_UpdateTunnelResponse__Output } from '../protos/UpdateTunnelResponse';

export interface ForemanServerClient extends grpc.Client {
  CreateConnection(argument: _protos_CreateConnectionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_CreateConnectionResponse__Output>): grpc.ClientUnaryCall;
  CreateConnection(argument: _protos_CreateConnectionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_CreateConnectionResponse__Output>): grpc.ClientUnaryCall;
  CreateConnection(argument: _protos_CreateConnectionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_CreateConnectionResponse__Output>): grpc.ClientUnaryCall;
  CreateConnection(argument: _protos_CreateConnectionRequest, callback: grpc.requestCallback<_protos_CreateConnectionResponse__Output>): grpc.ClientUnaryCall;
  createConnection(argument: _protos_CreateConnectionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_CreateConnectionResponse__Output>): grpc.ClientUnaryCall;
  createConnection(argument: _protos_CreateConnectionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_CreateConnectionResponse__Output>): grpc.ClientUnaryCall;
  createConnection(argument: _protos_CreateConnectionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_CreateConnectionResponse__Output>): grpc.ClientUnaryCall;
  createConnection(argument: _protos_CreateConnectionRequest, callback: grpc.requestCallback<_protos_CreateConnectionResponse__Output>): grpc.ClientUnaryCall;
  
  CreateRelay(argument: _protos_CreateRelayRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_CreateRelayResponse__Output>): grpc.ClientUnaryCall;
  CreateRelay(argument: _protos_CreateRelayRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_CreateRelayResponse__Output>): grpc.ClientUnaryCall;
  CreateRelay(argument: _protos_CreateRelayRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_CreateRelayResponse__Output>): grpc.ClientUnaryCall;
  CreateRelay(argument: _protos_CreateRelayRequest, callback: grpc.requestCallback<_protos_CreateRelayResponse__Output>): grpc.ClientUnaryCall;
  createRelay(argument: _protos_CreateRelayRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_CreateRelayResponse__Output>): grpc.ClientUnaryCall;
  createRelay(argument: _protos_CreateRelayRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_CreateRelayResponse__Output>): grpc.ClientUnaryCall;
  createRelay(argument: _protos_CreateRelayRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_CreateRelayResponse__Output>): grpc.ClientUnaryCall;
  createRelay(argument: _protos_CreateRelayRequest, callback: grpc.requestCallback<_protos_CreateRelayResponse__Output>): grpc.ClientUnaryCall;
  
  CreateTunnel(argument: _protos_CreateTunnelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_CreateTunnelResponse__Output>): grpc.ClientUnaryCall;
  CreateTunnel(argument: _protos_CreateTunnelRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_CreateTunnelResponse__Output>): grpc.ClientUnaryCall;
  CreateTunnel(argument: _protos_CreateTunnelRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_CreateTunnelResponse__Output>): grpc.ClientUnaryCall;
  CreateTunnel(argument: _protos_CreateTunnelRequest, callback: grpc.requestCallback<_protos_CreateTunnelResponse__Output>): grpc.ClientUnaryCall;
  createTunnel(argument: _protos_CreateTunnelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_CreateTunnelResponse__Output>): grpc.ClientUnaryCall;
  createTunnel(argument: _protos_CreateTunnelRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_CreateTunnelResponse__Output>): grpc.ClientUnaryCall;
  createTunnel(argument: _protos_CreateTunnelRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_CreateTunnelResponse__Output>): grpc.ClientUnaryCall;
  createTunnel(argument: _protos_CreateTunnelRequest, callback: grpc.requestCallback<_protos_CreateTunnelResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteConnection(argument: _protos_DeleteConnectionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_DeleteConnectionResponse__Output>): grpc.ClientUnaryCall;
  DeleteConnection(argument: _protos_DeleteConnectionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_DeleteConnectionResponse__Output>): grpc.ClientUnaryCall;
  DeleteConnection(argument: _protos_DeleteConnectionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_DeleteConnectionResponse__Output>): grpc.ClientUnaryCall;
  DeleteConnection(argument: _protos_DeleteConnectionRequest, callback: grpc.requestCallback<_protos_DeleteConnectionResponse__Output>): grpc.ClientUnaryCall;
  deleteConnection(argument: _protos_DeleteConnectionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_DeleteConnectionResponse__Output>): grpc.ClientUnaryCall;
  deleteConnection(argument: _protos_DeleteConnectionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_DeleteConnectionResponse__Output>): grpc.ClientUnaryCall;
  deleteConnection(argument: _protos_DeleteConnectionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_DeleteConnectionResponse__Output>): grpc.ClientUnaryCall;
  deleteConnection(argument: _protos_DeleteConnectionRequest, callback: grpc.requestCallback<_protos_DeleteConnectionResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteRelay(argument: _protos_DeleteRelayRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_DeleteRelayResponse__Output>): grpc.ClientUnaryCall;
  DeleteRelay(argument: _protos_DeleteRelayRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_DeleteRelayResponse__Output>): grpc.ClientUnaryCall;
  DeleteRelay(argument: _protos_DeleteRelayRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_DeleteRelayResponse__Output>): grpc.ClientUnaryCall;
  DeleteRelay(argument: _protos_DeleteRelayRequest, callback: grpc.requestCallback<_protos_DeleteRelayResponse__Output>): grpc.ClientUnaryCall;
  deleteRelay(argument: _protos_DeleteRelayRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_DeleteRelayResponse__Output>): grpc.ClientUnaryCall;
  deleteRelay(argument: _protos_DeleteRelayRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_DeleteRelayResponse__Output>): grpc.ClientUnaryCall;
  deleteRelay(argument: _protos_DeleteRelayRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_DeleteRelayResponse__Output>): grpc.ClientUnaryCall;
  deleteRelay(argument: _protos_DeleteRelayRequest, callback: grpc.requestCallback<_protos_DeleteRelayResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteTunnel(argument: _protos_DeleteTunnelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_DeleteTunnelResponse__Output>): grpc.ClientUnaryCall;
  DeleteTunnel(argument: _protos_DeleteTunnelRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_DeleteTunnelResponse__Output>): grpc.ClientUnaryCall;
  DeleteTunnel(argument: _protos_DeleteTunnelRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_DeleteTunnelResponse__Output>): grpc.ClientUnaryCall;
  DeleteTunnel(argument: _protos_DeleteTunnelRequest, callback: grpc.requestCallback<_protos_DeleteTunnelResponse__Output>): grpc.ClientUnaryCall;
  deleteTunnel(argument: _protos_DeleteTunnelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_DeleteTunnelResponse__Output>): grpc.ClientUnaryCall;
  deleteTunnel(argument: _protos_DeleteTunnelRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_DeleteTunnelResponse__Output>): grpc.ClientUnaryCall;
  deleteTunnel(argument: _protos_DeleteTunnelRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_DeleteTunnelResponse__Output>): grpc.ClientUnaryCall;
  deleteTunnel(argument: _protos_DeleteTunnelRequest, callback: grpc.requestCallback<_protos_DeleteTunnelResponse__Output>): grpc.ClientUnaryCall;
  
  GetAllConnections(argument: _protos_GetAllConnectionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetAllConnectionsResponse__Output>): grpc.ClientUnaryCall;
  GetAllConnections(argument: _protos_GetAllConnectionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_GetAllConnectionsResponse__Output>): grpc.ClientUnaryCall;
  GetAllConnections(argument: _protos_GetAllConnectionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetAllConnectionsResponse__Output>): grpc.ClientUnaryCall;
  GetAllConnections(argument: _protos_GetAllConnectionsRequest, callback: grpc.requestCallback<_protos_GetAllConnectionsResponse__Output>): grpc.ClientUnaryCall;
  getAllConnections(argument: _protos_GetAllConnectionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetAllConnectionsResponse__Output>): grpc.ClientUnaryCall;
  getAllConnections(argument: _protos_GetAllConnectionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_GetAllConnectionsResponse__Output>): grpc.ClientUnaryCall;
  getAllConnections(argument: _protos_GetAllConnectionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetAllConnectionsResponse__Output>): grpc.ClientUnaryCall;
  getAllConnections(argument: _protos_GetAllConnectionsRequest, callback: grpc.requestCallback<_protos_GetAllConnectionsResponse__Output>): grpc.ClientUnaryCall;
  
  GetAllRelays(argument: _protos_GetAllRelaysRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetAllRelaysResponse__Output>): grpc.ClientUnaryCall;
  GetAllRelays(argument: _protos_GetAllRelaysRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_GetAllRelaysResponse__Output>): grpc.ClientUnaryCall;
  GetAllRelays(argument: _protos_GetAllRelaysRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetAllRelaysResponse__Output>): grpc.ClientUnaryCall;
  GetAllRelays(argument: _protos_GetAllRelaysRequest, callback: grpc.requestCallback<_protos_GetAllRelaysResponse__Output>): grpc.ClientUnaryCall;
  getAllRelays(argument: _protos_GetAllRelaysRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetAllRelaysResponse__Output>): grpc.ClientUnaryCall;
  getAllRelays(argument: _protos_GetAllRelaysRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_GetAllRelaysResponse__Output>): grpc.ClientUnaryCall;
  getAllRelays(argument: _protos_GetAllRelaysRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetAllRelaysResponse__Output>): grpc.ClientUnaryCall;
  getAllRelays(argument: _protos_GetAllRelaysRequest, callback: grpc.requestCallback<_protos_GetAllRelaysResponse__Output>): grpc.ClientUnaryCall;
  
  GetAllTunnels(argument: _protos_GetAllTunnelsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetAllTunnelsResponse__Output>): grpc.ClientUnaryCall;
  GetAllTunnels(argument: _protos_GetAllTunnelsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_GetAllTunnelsResponse__Output>): grpc.ClientUnaryCall;
  GetAllTunnels(argument: _protos_GetAllTunnelsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetAllTunnelsResponse__Output>): grpc.ClientUnaryCall;
  GetAllTunnels(argument: _protos_GetAllTunnelsRequest, callback: grpc.requestCallback<_protos_GetAllTunnelsResponse__Output>): grpc.ClientUnaryCall;
  getAllTunnels(argument: _protos_GetAllTunnelsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetAllTunnelsResponse__Output>): grpc.ClientUnaryCall;
  getAllTunnels(argument: _protos_GetAllTunnelsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_GetAllTunnelsResponse__Output>): grpc.ClientUnaryCall;
  getAllTunnels(argument: _protos_GetAllTunnelsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetAllTunnelsResponse__Output>): grpc.ClientUnaryCall;
  getAllTunnels(argument: _protos_GetAllTunnelsRequest, callback: grpc.requestCallback<_protos_GetAllTunnelsResponse__Output>): grpc.ClientUnaryCall;
  
  GetConnection(argument: _protos_GetConnectionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetConnectionResponse__Output>): grpc.ClientUnaryCall;
  GetConnection(argument: _protos_GetConnectionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_GetConnectionResponse__Output>): grpc.ClientUnaryCall;
  GetConnection(argument: _protos_GetConnectionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetConnectionResponse__Output>): grpc.ClientUnaryCall;
  GetConnection(argument: _protos_GetConnectionRequest, callback: grpc.requestCallback<_protos_GetConnectionResponse__Output>): grpc.ClientUnaryCall;
  getConnection(argument: _protos_GetConnectionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetConnectionResponse__Output>): grpc.ClientUnaryCall;
  getConnection(argument: _protos_GetConnectionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_GetConnectionResponse__Output>): grpc.ClientUnaryCall;
  getConnection(argument: _protos_GetConnectionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetConnectionResponse__Output>): grpc.ClientUnaryCall;
  getConnection(argument: _protos_GetConnectionRequest, callback: grpc.requestCallback<_protos_GetConnectionResponse__Output>): grpc.ClientUnaryCall;
  
  GetRelay(argument: _protos_GetRelayRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetRelayResponse__Output>): grpc.ClientUnaryCall;
  GetRelay(argument: _protos_GetRelayRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_GetRelayResponse__Output>): grpc.ClientUnaryCall;
  GetRelay(argument: _protos_GetRelayRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetRelayResponse__Output>): grpc.ClientUnaryCall;
  GetRelay(argument: _protos_GetRelayRequest, callback: grpc.requestCallback<_protos_GetRelayResponse__Output>): grpc.ClientUnaryCall;
  getRelay(argument: _protos_GetRelayRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetRelayResponse__Output>): grpc.ClientUnaryCall;
  getRelay(argument: _protos_GetRelayRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_GetRelayResponse__Output>): grpc.ClientUnaryCall;
  getRelay(argument: _protos_GetRelayRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetRelayResponse__Output>): grpc.ClientUnaryCall;
  getRelay(argument: _protos_GetRelayRequest, callback: grpc.requestCallback<_protos_GetRelayResponse__Output>): grpc.ClientUnaryCall;
  
  GetServerOptions(argument: _protos_GetServerOptionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetServerOptionsResponse__Output>): grpc.ClientUnaryCall;
  GetServerOptions(argument: _protos_GetServerOptionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_GetServerOptionsResponse__Output>): grpc.ClientUnaryCall;
  GetServerOptions(argument: _protos_GetServerOptionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetServerOptionsResponse__Output>): grpc.ClientUnaryCall;
  GetServerOptions(argument: _protos_GetServerOptionsRequest, callback: grpc.requestCallback<_protos_GetServerOptionsResponse__Output>): grpc.ClientUnaryCall;
  getServerOptions(argument: _protos_GetServerOptionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetServerOptionsResponse__Output>): grpc.ClientUnaryCall;
  getServerOptions(argument: _protos_GetServerOptionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_GetServerOptionsResponse__Output>): grpc.ClientUnaryCall;
  getServerOptions(argument: _protos_GetServerOptionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetServerOptionsResponse__Output>): grpc.ClientUnaryCall;
  getServerOptions(argument: _protos_GetServerOptionsRequest, callback: grpc.requestCallback<_protos_GetServerOptionsResponse__Output>): grpc.ClientUnaryCall;
  
  GetTunnel(argument: _protos_GetTunnelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetTunnelResponse__Output>): grpc.ClientUnaryCall;
  GetTunnel(argument: _protos_GetTunnelRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_GetTunnelResponse__Output>): grpc.ClientUnaryCall;
  GetTunnel(argument: _protos_GetTunnelRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetTunnelResponse__Output>): grpc.ClientUnaryCall;
  GetTunnel(argument: _protos_GetTunnelRequest, callback: grpc.requestCallback<_protos_GetTunnelResponse__Output>): grpc.ClientUnaryCall;
  getTunnel(argument: _protos_GetTunnelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetTunnelResponse__Output>): grpc.ClientUnaryCall;
  getTunnel(argument: _protos_GetTunnelRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_GetTunnelResponse__Output>): grpc.ClientUnaryCall;
  getTunnel(argument: _protos_GetTunnelRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_GetTunnelResponse__Output>): grpc.ClientUnaryCall;
  getTunnel(argument: _protos_GetTunnelRequest, callback: grpc.requestCallback<_protos_GetTunnelResponse__Output>): grpc.ClientUnaryCall;
  
  ListPlumbers(argument: _protos_ListPlumbersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_ListPlumbersResponse__Output>): grpc.ClientUnaryCall;
  ListPlumbers(argument: _protos_ListPlumbersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_ListPlumbersResponse__Output>): grpc.ClientUnaryCall;
  ListPlumbers(argument: _protos_ListPlumbersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_ListPlumbersResponse__Output>): grpc.ClientUnaryCall;
  ListPlumbers(argument: _protos_ListPlumbersRequest, callback: grpc.requestCallback<_protos_ListPlumbersResponse__Output>): grpc.ClientUnaryCall;
  listPlumbers(argument: _protos_ListPlumbersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_ListPlumbersResponse__Output>): grpc.ClientUnaryCall;
  listPlumbers(argument: _protos_ListPlumbersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_ListPlumbersResponse__Output>): grpc.ClientUnaryCall;
  listPlumbers(argument: _protos_ListPlumbersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_ListPlumbersResponse__Output>): grpc.ClientUnaryCall;
  listPlumbers(argument: _protos_ListPlumbersRequest, callback: grpc.requestCallback<_protos_ListPlumbersResponse__Output>): grpc.ClientUnaryCall;
  
  ResumeRelay(argument: _protos_ResumeRelayRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_ResumeRelayResponse__Output>): grpc.ClientUnaryCall;
  ResumeRelay(argument: _protos_ResumeRelayRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_ResumeRelayResponse__Output>): grpc.ClientUnaryCall;
  ResumeRelay(argument: _protos_ResumeRelayRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_ResumeRelayResponse__Output>): grpc.ClientUnaryCall;
  ResumeRelay(argument: _protos_ResumeRelayRequest, callback: grpc.requestCallback<_protos_ResumeRelayResponse__Output>): grpc.ClientUnaryCall;
  resumeRelay(argument: _protos_ResumeRelayRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_ResumeRelayResponse__Output>): grpc.ClientUnaryCall;
  resumeRelay(argument: _protos_ResumeRelayRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_ResumeRelayResponse__Output>): grpc.ClientUnaryCall;
  resumeRelay(argument: _protos_ResumeRelayRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_ResumeRelayResponse__Output>): grpc.ClientUnaryCall;
  resumeRelay(argument: _protos_ResumeRelayRequest, callback: grpc.requestCallback<_protos_ResumeRelayResponse__Output>): grpc.ClientUnaryCall;
  
  ResumeTunnel(argument: _protos_ResumeTunnelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_ResumeTunnelResponse__Output>): grpc.ClientUnaryCall;
  ResumeTunnel(argument: _protos_ResumeTunnelRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_ResumeTunnelResponse__Output>): grpc.ClientUnaryCall;
  ResumeTunnel(argument: _protos_ResumeTunnelRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_ResumeTunnelResponse__Output>): grpc.ClientUnaryCall;
  ResumeTunnel(argument: _protos_ResumeTunnelRequest, callback: grpc.requestCallback<_protos_ResumeTunnelResponse__Output>): grpc.ClientUnaryCall;
  resumeTunnel(argument: _protos_ResumeTunnelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_ResumeTunnelResponse__Output>): grpc.ClientUnaryCall;
  resumeTunnel(argument: _protos_ResumeTunnelRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_ResumeTunnelResponse__Output>): grpc.ClientUnaryCall;
  resumeTunnel(argument: _protos_ResumeTunnelRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_ResumeTunnelResponse__Output>): grpc.ClientUnaryCall;
  resumeTunnel(argument: _protos_ResumeTunnelRequest, callback: grpc.requestCallback<_protos_ResumeTunnelResponse__Output>): grpc.ClientUnaryCall;
  
  StopRelay(argument: _protos_StopRelayRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_StopRelayResponse__Output>): grpc.ClientUnaryCall;
  StopRelay(argument: _protos_StopRelayRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_StopRelayResponse__Output>): grpc.ClientUnaryCall;
  StopRelay(argument: _protos_StopRelayRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_StopRelayResponse__Output>): grpc.ClientUnaryCall;
  StopRelay(argument: _protos_StopRelayRequest, callback: grpc.requestCallback<_protos_StopRelayResponse__Output>): grpc.ClientUnaryCall;
  stopRelay(argument: _protos_StopRelayRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_StopRelayResponse__Output>): grpc.ClientUnaryCall;
  stopRelay(argument: _protos_StopRelayRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_StopRelayResponse__Output>): grpc.ClientUnaryCall;
  stopRelay(argument: _protos_StopRelayRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_StopRelayResponse__Output>): grpc.ClientUnaryCall;
  stopRelay(argument: _protos_StopRelayRequest, callback: grpc.requestCallback<_protos_StopRelayResponse__Output>): grpc.ClientUnaryCall;
  
  StopTunnel(argument: _protos_StopTunnelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_StopTunnelResponse__Output>): grpc.ClientUnaryCall;
  StopTunnel(argument: _protos_StopTunnelRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_StopTunnelResponse__Output>): grpc.ClientUnaryCall;
  StopTunnel(argument: _protos_StopTunnelRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_StopTunnelResponse__Output>): grpc.ClientUnaryCall;
  StopTunnel(argument: _protos_StopTunnelRequest, callback: grpc.requestCallback<_protos_StopTunnelResponse__Output>): grpc.ClientUnaryCall;
  stopTunnel(argument: _protos_StopTunnelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_StopTunnelResponse__Output>): grpc.ClientUnaryCall;
  stopTunnel(argument: _protos_StopTunnelRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_StopTunnelResponse__Output>): grpc.ClientUnaryCall;
  stopTunnel(argument: _protos_StopTunnelRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_StopTunnelResponse__Output>): grpc.ClientUnaryCall;
  stopTunnel(argument: _protos_StopTunnelRequest, callback: grpc.requestCallback<_protos_StopTunnelResponse__Output>): grpc.ClientUnaryCall;
  
  TestConnection(argument: _protos_TestConnectionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_TestConnectionResponse__Output>): grpc.ClientUnaryCall;
  TestConnection(argument: _protos_TestConnectionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_TestConnectionResponse__Output>): grpc.ClientUnaryCall;
  TestConnection(argument: _protos_TestConnectionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_TestConnectionResponse__Output>): grpc.ClientUnaryCall;
  TestConnection(argument: _protos_TestConnectionRequest, callback: grpc.requestCallback<_protos_TestConnectionResponse__Output>): grpc.ClientUnaryCall;
  testConnection(argument: _protos_TestConnectionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_TestConnectionResponse__Output>): grpc.ClientUnaryCall;
  testConnection(argument: _protos_TestConnectionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_TestConnectionResponse__Output>): grpc.ClientUnaryCall;
  testConnection(argument: _protos_TestConnectionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_TestConnectionResponse__Output>): grpc.ClientUnaryCall;
  testConnection(argument: _protos_TestConnectionRequest, callback: grpc.requestCallback<_protos_TestConnectionResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateConnection(argument: _protos_UpdateConnectionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_UpdateConnectionResponse__Output>): grpc.ClientUnaryCall;
  UpdateConnection(argument: _protos_UpdateConnectionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_UpdateConnectionResponse__Output>): grpc.ClientUnaryCall;
  UpdateConnection(argument: _protos_UpdateConnectionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_UpdateConnectionResponse__Output>): grpc.ClientUnaryCall;
  UpdateConnection(argument: _protos_UpdateConnectionRequest, callback: grpc.requestCallback<_protos_UpdateConnectionResponse__Output>): grpc.ClientUnaryCall;
  updateConnection(argument: _protos_UpdateConnectionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_UpdateConnectionResponse__Output>): grpc.ClientUnaryCall;
  updateConnection(argument: _protos_UpdateConnectionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_UpdateConnectionResponse__Output>): grpc.ClientUnaryCall;
  updateConnection(argument: _protos_UpdateConnectionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_UpdateConnectionResponse__Output>): grpc.ClientUnaryCall;
  updateConnection(argument: _protos_UpdateConnectionRequest, callback: grpc.requestCallback<_protos_UpdateConnectionResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateRelay(argument: _protos_UpdateRelayRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_UpdateRelayResponse__Output>): grpc.ClientUnaryCall;
  UpdateRelay(argument: _protos_UpdateRelayRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_UpdateRelayResponse__Output>): grpc.ClientUnaryCall;
  UpdateRelay(argument: _protos_UpdateRelayRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_UpdateRelayResponse__Output>): grpc.ClientUnaryCall;
  UpdateRelay(argument: _protos_UpdateRelayRequest, callback: grpc.requestCallback<_protos_UpdateRelayResponse__Output>): grpc.ClientUnaryCall;
  updateRelay(argument: _protos_UpdateRelayRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_UpdateRelayResponse__Output>): grpc.ClientUnaryCall;
  updateRelay(argument: _protos_UpdateRelayRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_UpdateRelayResponse__Output>): grpc.ClientUnaryCall;
  updateRelay(argument: _protos_UpdateRelayRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_UpdateRelayResponse__Output>): grpc.ClientUnaryCall;
  updateRelay(argument: _protos_UpdateRelayRequest, callback: grpc.requestCallback<_protos_UpdateRelayResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateTunnel(argument: _protos_UpdateTunnelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_UpdateTunnelResponse__Output>): grpc.ClientUnaryCall;
  UpdateTunnel(argument: _protos_UpdateTunnelRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_UpdateTunnelResponse__Output>): grpc.ClientUnaryCall;
  UpdateTunnel(argument: _protos_UpdateTunnelRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_UpdateTunnelResponse__Output>): grpc.ClientUnaryCall;
  UpdateTunnel(argument: _protos_UpdateTunnelRequest, callback: grpc.requestCallback<_protos_UpdateTunnelResponse__Output>): grpc.ClientUnaryCall;
  updateTunnel(argument: _protos_UpdateTunnelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_UpdateTunnelResponse__Output>): grpc.ClientUnaryCall;
  updateTunnel(argument: _protos_UpdateTunnelRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_protos_UpdateTunnelResponse__Output>): grpc.ClientUnaryCall;
  updateTunnel(argument: _protos_UpdateTunnelRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_protos_UpdateTunnelResponse__Output>): grpc.ClientUnaryCall;
  updateTunnel(argument: _protos_UpdateTunnelRequest, callback: grpc.requestCallback<_protos_UpdateTunnelResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ForemanServerHandlers extends grpc.UntypedServiceImplementation {
  CreateConnection: grpc.handleUnaryCall<_protos_CreateConnectionRequest__Output, _protos_CreateConnectionResponse>;
  
  CreateRelay: grpc.handleUnaryCall<_protos_CreateRelayRequest__Output, _protos_CreateRelayResponse>;
  
  CreateTunnel: grpc.handleUnaryCall<_protos_CreateTunnelRequest__Output, _protos_CreateTunnelResponse>;
  
  DeleteConnection: grpc.handleUnaryCall<_protos_DeleteConnectionRequest__Output, _protos_DeleteConnectionResponse>;
  
  DeleteRelay: grpc.handleUnaryCall<_protos_DeleteRelayRequest__Output, _protos_DeleteRelayResponse>;
  
  DeleteTunnel: grpc.handleUnaryCall<_protos_DeleteTunnelRequest__Output, _protos_DeleteTunnelResponse>;
  
  GetAllConnections: grpc.handleUnaryCall<_protos_GetAllConnectionsRequest__Output, _protos_GetAllConnectionsResponse>;
  
  GetAllRelays: grpc.handleUnaryCall<_protos_GetAllRelaysRequest__Output, _protos_GetAllRelaysResponse>;
  
  GetAllTunnels: grpc.handleUnaryCall<_protos_GetAllTunnelsRequest__Output, _protos_GetAllTunnelsResponse>;
  
  GetConnection: grpc.handleUnaryCall<_protos_GetConnectionRequest__Output, _protos_GetConnectionResponse>;
  
  GetRelay: grpc.handleUnaryCall<_protos_GetRelayRequest__Output, _protos_GetRelayResponse>;
  
  GetServerOptions: grpc.handleUnaryCall<_protos_GetServerOptionsRequest__Output, _protos_GetServerOptionsResponse>;
  
  GetTunnel: grpc.handleUnaryCall<_protos_GetTunnelRequest__Output, _protos_GetTunnelResponse>;
  
  ListPlumbers: grpc.handleUnaryCall<_protos_ListPlumbersRequest__Output, _protos_ListPlumbersResponse>;
  
  ResumeRelay: grpc.handleUnaryCall<_protos_ResumeRelayRequest__Output, _protos_ResumeRelayResponse>;
  
  ResumeTunnel: grpc.handleUnaryCall<_protos_ResumeTunnelRequest__Output, _protos_ResumeTunnelResponse>;
  
  StopRelay: grpc.handleUnaryCall<_protos_StopRelayRequest__Output, _protos_StopRelayResponse>;
  
  StopTunnel: grpc.handleUnaryCall<_protos_StopTunnelRequest__Output, _protos_StopTunnelResponse>;
  
  TestConnection: grpc.handleUnaryCall<_protos_TestConnectionRequest__Output, _protos_TestConnectionResponse>;
  
  UpdateConnection: grpc.handleUnaryCall<_protos_UpdateConnectionRequest__Output, _protos_UpdateConnectionResponse>;
  
  UpdateRelay: grpc.handleUnaryCall<_protos_UpdateRelayRequest__Output, _protos_UpdateRelayResponse>;
  
  UpdateTunnel: grpc.handleUnaryCall<_protos_UpdateTunnelRequest__Output, _protos_UpdateTunnelResponse>;
  
}

export interface ForemanServerDefinition extends grpc.ServiceDefinition {
  CreateConnection: MethodDefinition<_protos_CreateConnectionRequest, _protos_CreateConnectionResponse, _protos_CreateConnectionRequest__Output, _protos_CreateConnectionResponse__Output>
  CreateRelay: MethodDefinition<_protos_CreateRelayRequest, _protos_CreateRelayResponse, _protos_CreateRelayRequest__Output, _protos_CreateRelayResponse__Output>
  CreateTunnel: MethodDefinition<_protos_CreateTunnelRequest, _protos_CreateTunnelResponse, _protos_CreateTunnelRequest__Output, _protos_CreateTunnelResponse__Output>
  DeleteConnection: MethodDefinition<_protos_DeleteConnectionRequest, _protos_DeleteConnectionResponse, _protos_DeleteConnectionRequest__Output, _protos_DeleteConnectionResponse__Output>
  DeleteRelay: MethodDefinition<_protos_DeleteRelayRequest, _protos_DeleteRelayResponse, _protos_DeleteRelayRequest__Output, _protos_DeleteRelayResponse__Output>
  DeleteTunnel: MethodDefinition<_protos_DeleteTunnelRequest, _protos_DeleteTunnelResponse, _protos_DeleteTunnelRequest__Output, _protos_DeleteTunnelResponse__Output>
  GetAllConnections: MethodDefinition<_protos_GetAllConnectionsRequest, _protos_GetAllConnectionsResponse, _protos_GetAllConnectionsRequest__Output, _protos_GetAllConnectionsResponse__Output>
  GetAllRelays: MethodDefinition<_protos_GetAllRelaysRequest, _protos_GetAllRelaysResponse, _protos_GetAllRelaysRequest__Output, _protos_GetAllRelaysResponse__Output>
  GetAllTunnels: MethodDefinition<_protos_GetAllTunnelsRequest, _protos_GetAllTunnelsResponse, _protos_GetAllTunnelsRequest__Output, _protos_GetAllTunnelsResponse__Output>
  GetConnection: MethodDefinition<_protos_GetConnectionRequest, _protos_GetConnectionResponse, _protos_GetConnectionRequest__Output, _protos_GetConnectionResponse__Output>
  GetRelay: MethodDefinition<_protos_GetRelayRequest, _protos_GetRelayResponse, _protos_GetRelayRequest__Output, _protos_GetRelayResponse__Output>
  GetServerOptions: MethodDefinition<_protos_GetServerOptionsRequest, _protos_GetServerOptionsResponse, _protos_GetServerOptionsRequest__Output, _protos_GetServerOptionsResponse__Output>
  GetTunnel: MethodDefinition<_protos_GetTunnelRequest, _protos_GetTunnelResponse, _protos_GetTunnelRequest__Output, _protos_GetTunnelResponse__Output>
  ListPlumbers: MethodDefinition<_protos_ListPlumbersRequest, _protos_ListPlumbersResponse, _protos_ListPlumbersRequest__Output, _protos_ListPlumbersResponse__Output>
  ResumeRelay: MethodDefinition<_protos_ResumeRelayRequest, _protos_ResumeRelayResponse, _protos_ResumeRelayRequest__Output, _protos_ResumeRelayResponse__Output>
  ResumeTunnel: MethodDefinition<_protos_ResumeTunnelRequest, _protos_ResumeTunnelResponse, _protos_ResumeTunnelRequest__Output, _protos_ResumeTunnelResponse__Output>
  StopRelay: MethodDefinition<_protos_StopRelayRequest, _protos_StopRelayResponse, _protos_StopRelayRequest__Output, _protos_StopRelayResponse__Output>
  StopTunnel: MethodDefinition<_protos_StopTunnelRequest, _protos_StopTunnelResponse, _protos_StopTunnelRequest__Output, _protos_StopTunnelResponse__Output>
  TestConnection: MethodDefinition<_protos_TestConnectionRequest, _protos_TestConnectionResponse, _protos_TestConnectionRequest__Output, _protos_TestConnectionResponse__Output>
  UpdateConnection: MethodDefinition<_protos_UpdateConnectionRequest, _protos_UpdateConnectionResponse, _protos_UpdateConnectionRequest__Output, _protos_UpdateConnectionResponse__Output>
  UpdateRelay: MethodDefinition<_protos_UpdateRelayRequest, _protos_UpdateRelayResponse, _protos_UpdateRelayRequest__Output, _protos_UpdateRelayResponse__Output>
  UpdateTunnel: MethodDefinition<_protos_UpdateTunnelRequest, _protos_UpdateTunnelResponse, _protos_UpdateTunnelRequest__Output, _protos_UpdateTunnelResponse__Output>
}
