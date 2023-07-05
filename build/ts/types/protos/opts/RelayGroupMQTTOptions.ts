// Original file: protos/opts/ps_opts_relay.proto

import type { MQTTConn as _protos_args_MQTTConn, MQTTConn__Output as _protos_args_MQTTConn__Output } from '../../protos/args/MQTTConn';
import type { MQTTReadArgs as _protos_args_MQTTReadArgs, MQTTReadArgs__Output as _protos_args_MQTTReadArgs__Output } from '../../protos/args/MQTTReadArgs';

export interface RelayGroupMQTTOptions {
  '_conn'?: (_protos_args_MQTTConn | null);
  'args'?: (_protos_args_MQTTReadArgs | null);
}

export interface RelayGroupMQTTOptions__Output {
  '_conn': (_protos_args_MQTTConn__Output | null);
  'args': (_protos_args_MQTTReadArgs__Output | null);
}
