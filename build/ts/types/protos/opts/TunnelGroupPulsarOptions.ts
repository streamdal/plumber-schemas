// Original file: protos/opts/ps_opts_tunnel.proto

import type { PulsarConn as _protos_args_PulsarConn, PulsarConn__Output as _protos_args_PulsarConn__Output } from '../../protos/args/PulsarConn';
import type { PulsarWriteArgs as _protos_args_PulsarWriteArgs, PulsarWriteArgs__Output as _protos_args_PulsarWriteArgs__Output } from '../../protos/args/PulsarWriteArgs';

export interface TunnelGroupPulsarOptions {
  '_conn'?: (_protos_args_PulsarConn | null);
  'args'?: (_protos_args_PulsarWriteArgs | null);
}

export interface TunnelGroupPulsarOptions__Output {
  '_conn': (_protos_args_PulsarConn__Output | null);
  'args': (_protos_args_PulsarWriteArgs__Output | null);
}
