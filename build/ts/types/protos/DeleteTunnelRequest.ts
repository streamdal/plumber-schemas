// Original file: ../../protos/ps_tunnel.proto

import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface DeleteTunnelRequest {
  'tunnelId'?: (string);
  'auth'?: (_protos_common_Auth | null);
}

export interface DeleteTunnelRequest__Output {
  'tunnelId': (string);
  'auth': (_protos_common_Auth__Output | null);
}
