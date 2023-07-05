// Original file: ../../protos/opts/ps_opts_tunnel.proto

import type { AWSSNSConn as _protos_args_AWSSNSConn, AWSSNSConn__Output as _protos_args_AWSSNSConn__Output } from '../../protos/args/AWSSNSConn';
import type { AWSSNSWriteArgs as _protos_args_AWSSNSWriteArgs, AWSSNSWriteArgs__Output as _protos_args_AWSSNSWriteArgs__Output } from '../../protos/args/AWSSNSWriteArgs';

export interface TunnelGroupAWSSNSOptions {
  '_conn'?: (_protos_args_AWSSNSConn | null);
  'args'?: (_protos_args_AWSSNSWriteArgs | null);
}

export interface TunnelGroupAWSSNSOptions__Output {
  '_conn': (_protos_args_AWSSNSConn__Output | null);
  'args': (_protos_args_AWSSNSWriteArgs__Output | null);
}
