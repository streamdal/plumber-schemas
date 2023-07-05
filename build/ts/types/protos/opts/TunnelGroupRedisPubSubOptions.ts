// Original file: ../../protos/opts/ps_opts_tunnel.proto

import type { RedisPubSubConn as _protos_args_RedisPubSubConn, RedisPubSubConn__Output as _protos_args_RedisPubSubConn__Output } from '../../protos/args/RedisPubSubConn';
import type { RedisPubSubWriteArgs as _protos_args_RedisPubSubWriteArgs, RedisPubSubWriteArgs__Output as _protos_args_RedisPubSubWriteArgs__Output } from '../../protos/args/RedisPubSubWriteArgs';

export interface TunnelGroupRedisPubSubOptions {
  '_conn'?: (_protos_args_RedisPubSubConn | null);
  'args'?: (_protos_args_RedisPubSubWriteArgs | null);
}

export interface TunnelGroupRedisPubSubOptions__Output {
  '_conn': (_protos_args_RedisPubSubConn__Output | null);
  'args': (_protos_args_RedisPubSubWriteArgs__Output | null);
}
