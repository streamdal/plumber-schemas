// Original file: ../../protos/opts/ps_opts_tunnel.proto

import type { MQTTConn as _protos_args_MQTTConn, MQTTConn__Output as _protos_args_MQTTConn__Output } from '../../protos/args/MQTTConn';
import type { MQTTWriteArgs as _protos_args_MQTTWriteArgs, MQTTWriteArgs__Output as _protos_args_MQTTWriteArgs__Output } from '../../protos/args/MQTTWriteArgs';

export interface TunnelGroupMQTTOptions {
  '_conn'?: (_protos_args_MQTTConn | null);
  'args'?: (_protos_args_MQTTWriteArgs | null);
}

export interface TunnelGroupMQTTOptions__Output {
  '_conn': (_protos_args_MQTTConn__Output | null);
  'args': (_protos_args_MQTTWriteArgs__Output | null);
}
