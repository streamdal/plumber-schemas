// Original file: ../../protos/ps_tunnel.proto

import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface GetTunnelRequest {
  'tunnelId'?: (string);
  'auth'?: (_protos_common_Auth | null);
}

export interface GetTunnelRequest__Output {
  'tunnelId': (string);
  'auth': (_protos_common_Auth__Output | null);
}
