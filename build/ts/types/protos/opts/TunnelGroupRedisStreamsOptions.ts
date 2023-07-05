// Original file: ../../protos/opts/ps_opts_tunnel.proto

import type { RedisStreamsConn as _protos_args_RedisStreamsConn, RedisStreamsConn__Output as _protos_args_RedisStreamsConn__Output } from '../../protos/args/RedisStreamsConn';
import type { RedisStreamsWriteArgs as _protos_args_RedisStreamsWriteArgs, RedisStreamsWriteArgs__Output as _protos_args_RedisStreamsWriteArgs__Output } from '../../protos/args/RedisStreamsWriteArgs';

export interface TunnelGroupRedisStreamsOptions {
  '_conn'?: (_protos_args_RedisStreamsConn | null);
  'args'?: (_protos_args_RedisStreamsWriteArgs | null);
}

export interface TunnelGroupRedisStreamsOptions__Output {
  '_conn': (_protos_args_RedisStreamsConn__Output | null);
  'args': (_protos_args_RedisStreamsWriteArgs__Output | null);
}
