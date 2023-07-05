// Original file: ../../protos/opts/ps_opts_tunnel.proto

import type { RabbitConn as _protos_args_RabbitConn, RabbitConn__Output as _protos_args_RabbitConn__Output } from '../../protos/args/RabbitConn';
import type { RabbitWriteArgs as _protos_args_RabbitWriteArgs, RabbitWriteArgs__Output as _protos_args_RabbitWriteArgs__Output } from '../../protos/args/RabbitWriteArgs';

export interface TunnelGroupRabbitOptions {
  '_conn'?: (_protos_args_RabbitConn | null);
  'args'?: (_protos_args_RabbitWriteArgs | null);
}

export interface TunnelGroupRabbitOptions__Output {
  '_conn': (_protos_args_RabbitConn__Output | null);
  'args': (_protos_args_RabbitWriteArgs__Output | null);
}
