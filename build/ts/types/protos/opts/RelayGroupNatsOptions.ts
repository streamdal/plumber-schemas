// Original file: protos/opts/ps_opts_relay.proto

import type { NatsConn as _protos_args_NatsConn, NatsConn__Output as _protos_args_NatsConn__Output } from '../../protos/args/NatsConn';
import type { NatsReadArgs as _protos_args_NatsReadArgs, NatsReadArgs__Output as _protos_args_NatsReadArgs__Output } from '../../protos/args/NatsReadArgs';

export interface RelayGroupNatsOptions {
  '_conn'?: (_protos_args_NatsConn | null);
  'args'?: (_protos_args_NatsReadArgs | null);
}

export interface RelayGroupNatsOptions__Output {
  '_conn': (_protos_args_NatsConn__Output | null);
  'args': (_protos_args_NatsReadArgs__Output | null);
}
