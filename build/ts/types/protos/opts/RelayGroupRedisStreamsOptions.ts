// Original file: protos/opts/ps_opts_relay.proto

import type { RedisStreamsConn as _protos_args_RedisStreamsConn, RedisStreamsConn__Output as _protos_args_RedisStreamsConn__Output } from '../../protos/args/RedisStreamsConn';
import type { RedisStreamsReadArgs as _protos_args_RedisStreamsReadArgs, RedisStreamsReadArgs__Output as _protos_args_RedisStreamsReadArgs__Output } from '../../protos/args/RedisStreamsReadArgs';

export interface RelayGroupRedisStreamsOptions {
  '_conn'?: (_protos_args_RedisStreamsConn | null);
  'args'?: (_protos_args_RedisStreamsReadArgs | null);
}

export interface RelayGroupRedisStreamsOptions__Output {
  '_conn': (_protos_args_RedisStreamsConn__Output | null);
  'args': (_protos_args_RedisStreamsReadArgs__Output | null);
}
