// Original file: protos/opts/ps_opts_tunnel.proto

import type { ActiveMQConn as _protos_args_ActiveMQConn, ActiveMQConn__Output as _protos_args_ActiveMQConn__Output } from '../../protos/args/ActiveMQConn';
import type { ActiveMQWriteArgs as _protos_args_ActiveMQWriteArgs, ActiveMQWriteArgs__Output as _protos_args_ActiveMQWriteArgs__Output } from '../../protos/args/ActiveMQWriteArgs';

export interface TunnelGroupActiveMQOptions {
  '_conn'?: (_protos_args_ActiveMQConn | null);
  'args'?: (_protos_args_ActiveMQWriteArgs | null);
}

export interface TunnelGroupActiveMQOptions__Output {
  '_conn': (_protos_args_ActiveMQConn__Output | null);
  'args': (_protos_args_ActiveMQWriteArgs__Output | null);
}
