// Original file: ../../protos/ps_tunnel.proto

import type { Status as _protos_common_Status, Status__Output as _protos_common_Status__Output } from '../protos/common/Status';

export interface CreateTunnelResponse {
  'tunnelId'?: (string);
  'status'?: (_protos_common_Status | null);
}

export interface CreateTunnelResponse__Output {
  'tunnelId': (string);
  'status': (_protos_common_Status__Output | null);
}
