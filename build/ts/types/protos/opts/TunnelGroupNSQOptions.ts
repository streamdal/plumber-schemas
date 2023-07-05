// Original file: protos/opts/ps_opts_tunnel.proto

import type { NSQConn as _protos_args_NSQConn, NSQConn__Output as _protos_args_NSQConn__Output } from '../../protos/args/NSQConn';
import type { NSQWriteArgs as _protos_args_NSQWriteArgs, NSQWriteArgs__Output as _protos_args_NSQWriteArgs__Output } from '../../protos/args/NSQWriteArgs';

export interface TunnelGroupNSQOptions {
  '_conn'?: (_protos_args_NSQConn | null);
  'args'?: (_protos_args_NSQWriteArgs | null);
}

export interface TunnelGroupNSQOptions__Output {
  '_conn': (_protos_args_NSQConn__Output | null);
  'args': (_protos_args_NSQWriteArgs__Output | null);
}
