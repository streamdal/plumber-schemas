// Original file: ../../protos/opts/ps_opts_tunnel.proto

import type { AWSSQSConn as _protos_args_AWSSQSConn, AWSSQSConn__Output as _protos_args_AWSSQSConn__Output } from '../../protos/args/AWSSQSConn';
import type { AWSSQSWriteArgs as _protos_args_AWSSQSWriteArgs, AWSSQSWriteArgs__Output as _protos_args_AWSSQSWriteArgs__Output } from '../../protos/args/AWSSQSWriteArgs';

export interface TunnelGroupAWSSQSOptions {
  '_conn'?: (_protos_args_AWSSQSConn | null);
  'args'?: (_protos_args_AWSSQSWriteArgs | null);
}

export interface TunnelGroupAWSSQSOptions__Output {
  '_conn': (_protos_args_AWSSQSConn__Output | null);
  'args': (_protos_args_AWSSQSWriteArgs__Output | null);
}
