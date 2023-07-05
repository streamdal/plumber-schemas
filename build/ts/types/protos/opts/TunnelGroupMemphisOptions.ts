// Original file: protos/opts/ps_opts_tunnel.proto

import type { MemphisConn as _protos_args_MemphisConn, MemphisConn__Output as _protos_args_MemphisConn__Output } from '../../protos/args/MemphisConn';
import type { MemphisWriteArgs as _protos_args_MemphisWriteArgs, MemphisWriteArgs__Output as _protos_args_MemphisWriteArgs__Output } from '../../protos/args/MemphisWriteArgs';

export interface TunnelGroupMemphisOptions {
  '_conn'?: (_protos_args_MemphisConn | null);
  'args'?: (_protos_args_MemphisWriteArgs | null);
}

export interface TunnelGroupMemphisOptions__Output {
  '_conn': (_protos_args_MemphisConn__Output | null);
  'args': (_protos_args_MemphisWriteArgs__Output | null);
}
