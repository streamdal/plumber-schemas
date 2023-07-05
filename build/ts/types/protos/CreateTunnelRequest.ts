// Original file: protos/ps_tunnel.proto

import type { TunnelOptions as _protos_opts_TunnelOptions, TunnelOptions__Output as _protos_opts_TunnelOptions__Output } from '../protos/opts/TunnelOptions';
import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface CreateTunnelRequest {
  'opts'?: (_protos_opts_TunnelOptions | null);
  'auth'?: (_protos_common_Auth | null);
}

export interface CreateTunnelRequest__Output {
  'opts': (_protos_opts_TunnelOptions__Output | null);
  'auth': (_protos_common_Auth__Output | null);
}
