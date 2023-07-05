// Original file: protos/opts/ps_opts_relay.proto

import type { RedisPubSubConn as _protos_args_RedisPubSubConn, RedisPubSubConn__Output as _protos_args_RedisPubSubConn__Output } from '../../protos/args/RedisPubSubConn';
import type { RedisPubSubReadArgs as _protos_args_RedisPubSubReadArgs, RedisPubSubReadArgs__Output as _protos_args_RedisPubSubReadArgs__Output } from '../../protos/args/RedisPubSubReadArgs';

export interface RelayGroupRedisPubSubOptions {
  '_conn'?: (_protos_args_RedisPubSubConn | null);
  'args'?: (_protos_args_RedisPubSubReadArgs | null);
}

export interface RelayGroupRedisPubSubOptions__Output {
  '_conn': (_protos_args_RedisPubSubConn__Output | null);
  'args': (_protos_args_RedisPubSubReadArgs__Output | null);
}
