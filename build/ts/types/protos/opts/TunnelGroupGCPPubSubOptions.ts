// Original file: protos/opts/ps_opts_tunnel.proto

import type { GCPPubSubConn as _protos_args_GCPPubSubConn, GCPPubSubConn__Output as _protos_args_GCPPubSubConn__Output } from '../../protos/args/GCPPubSubConn';
import type { GCPPubSubWriteArgs as _protos_args_GCPPubSubWriteArgs, GCPPubSubWriteArgs__Output as _protos_args_GCPPubSubWriteArgs__Output } from '../../protos/args/GCPPubSubWriteArgs';

export interface TunnelGroupGCPPubSubOptions {
  '_conn'?: (_protos_args_GCPPubSubConn | null);
  'args'?: (_protos_args_GCPPubSubWriteArgs | null);
}

export interface TunnelGroupGCPPubSubOptions__Output {
  '_conn': (_protos_args_GCPPubSubConn__Output | null);
  'args': (_protos_args_GCPPubSubWriteArgs__Output | null);
}
