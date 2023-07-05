// Original file: ../../protos/opts/ps_opts_relay.proto

import type { GCPPubSubConn as _protos_args_GCPPubSubConn, GCPPubSubConn__Output as _protos_args_GCPPubSubConn__Output } from '../../protos/args/GCPPubSubConn';
import type { GCPPubSubReadArgs as _protos_args_GCPPubSubReadArgs, GCPPubSubReadArgs__Output as _protos_args_GCPPubSubReadArgs__Output } from '../../protos/args/GCPPubSubReadArgs';

export interface RelayGroupGCPPubSubOptions {
  '_conn'?: (_protos_args_GCPPubSubConn | null);
  'args'?: (_protos_args_GCPPubSubReadArgs | null);
}

export interface RelayGroupGCPPubSubOptions__Output {
  '_conn': (_protos_args_GCPPubSubConn__Output | null);
  'args': (_protos_args_GCPPubSubReadArgs__Output | null);
}
