// Original file: ../../protos/opts/ps_opts_tunnel.proto

import type { RabbitStreamsConn as _protos_args_RabbitStreamsConn, RabbitStreamsConn__Output as _protos_args_RabbitStreamsConn__Output } from '../../protos/args/RabbitStreamsConn';
import type { RabbitStreamsWriteArgs as _protos_args_RabbitStreamsWriteArgs, RabbitStreamsWriteArgs__Output as _protos_args_RabbitStreamsWriteArgs__Output } from '../../protos/args/RabbitStreamsWriteArgs';

export interface TunnelGroupRabbitStreamsOptions {
  '_conn'?: (_protos_args_RabbitStreamsConn | null);
  'args'?: (_protos_args_RabbitStreamsWriteArgs | null);
}

export interface TunnelGroupRabbitStreamsOptions__Output {
  '_conn': (_protos_args_RabbitStreamsConn__Output | null);
  'args': (_protos_args_RabbitStreamsWriteArgs__Output | null);
}
