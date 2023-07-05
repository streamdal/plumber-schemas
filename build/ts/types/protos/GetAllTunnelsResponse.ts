// Original file: protos/ps_tunnel.proto

import type { TunnelOptions as _protos_opts_TunnelOptions, TunnelOptions__Output as _protos_opts_TunnelOptions__Output } from '../protos/opts/TunnelOptions';
import type { Status as _protos_common_Status, Status__Output as _protos_common_Status__Output } from '../protos/common/Status';

export interface GetAllTunnelsResponse {
  'opts'?: (_protos_opts_TunnelOptions)[];
  'status'?: (_protos_common_Status | null);
}

export interface GetAllTunnelsResponse__Output {
  'opts': (_protos_opts_TunnelOptions__Output)[];
  'status': (_protos_common_Status__Output | null);
}
