// Original file: ../../protos/opts/ps_opts_tunnel.proto

import type { KafkaConn as _protos_args_KafkaConn, KafkaConn__Output as _protos_args_KafkaConn__Output } from '../../protos/args/KafkaConn';
import type { KafkaWriteArgs as _protos_args_KafkaWriteArgs, KafkaWriteArgs__Output as _protos_args_KafkaWriteArgs__Output } from '../../protos/args/KafkaWriteArgs';

export interface TunnelGroupKafkaOptions {
  '_conn'?: (_protos_args_KafkaConn | null);
  'args'?: (_protos_args_KafkaWriteArgs | null);
}

export interface TunnelGroupKafkaOptions__Output {
  '_conn': (_protos_args_KafkaConn__Output | null);
  'args': (_protos_args_KafkaWriteArgs__Output | null);
}
