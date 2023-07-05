// Original file: protos/opts/ps_opts_relay.proto

import type { KafkaConn as _protos_args_KafkaConn, KafkaConn__Output as _protos_args_KafkaConn__Output } from '../../protos/args/KafkaConn';
import type { KafkaRelayArgs as _protos_args_KafkaRelayArgs, KafkaRelayArgs__Output as _protos_args_KafkaRelayArgs__Output } from '../../protos/args/KafkaRelayArgs';

export interface RelayGroupKafkaOptions {
  '_conn'?: (_protos_args_KafkaConn | null);
  'args'?: (_protos_args_KafkaRelayArgs | null);
}

export interface RelayGroupKafkaOptions__Output {
  '_conn': (_protos_args_KafkaConn__Output | null);
  'args': (_protos_args_KafkaRelayArgs__Output | null);
}
