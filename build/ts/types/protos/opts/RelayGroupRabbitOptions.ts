// Original file: protos/opts/ps_opts_relay.proto

import type { RabbitConn as _protos_args_RabbitConn, RabbitConn__Output as _protos_args_RabbitConn__Output } from '../../protos/args/RabbitConn';
import type { RabbitReadArgs as _protos_args_RabbitReadArgs, RabbitReadArgs__Output as _protos_args_RabbitReadArgs__Output } from '../../protos/args/RabbitReadArgs';

export interface RelayGroupRabbitOptions {
  '_conn'?: (_protos_args_RabbitConn | null);
  'args'?: (_protos_args_RabbitReadArgs | null);
}

export interface RelayGroupRabbitOptions__Output {
  '_conn': (_protos_args_RabbitConn__Output | null);
  'args': (_protos_args_RabbitReadArgs__Output | null);
}
