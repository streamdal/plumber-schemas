// Original file: ../../protos/opts/ps_opts_tunnel.proto

import type { NatsConn as _protos_args_NatsConn, NatsConn__Output as _protos_args_NatsConn__Output } from '../../protos/args/NatsConn';
import type { NatsWriteArgs as _protos_args_NatsWriteArgs, NatsWriteArgs__Output as _protos_args_NatsWriteArgs__Output } from '../../protos/args/NatsWriteArgs';

export interface TunnelGroupNatsOptions {
  '_conn'?: (_protos_args_NatsConn | null);
  'args'?: (_protos_args_NatsWriteArgs | null);
}

export interface TunnelGroupNatsOptions__Output {
  '_conn': (_protos_args_NatsConn__Output | null);
  'args': (_protos_args_NatsWriteArgs__Output | null);
}
