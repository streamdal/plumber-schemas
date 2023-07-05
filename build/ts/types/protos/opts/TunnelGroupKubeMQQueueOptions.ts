// Original file: ../../protos/opts/ps_opts_tunnel.proto

import type { KubeMQQueueConn as _protos_args_KubeMQQueueConn, KubeMQQueueConn__Output as _protos_args_KubeMQQueueConn__Output } from '../../protos/args/KubeMQQueueConn';
import type { KubeMQQueueWriteArgs as _protos_args_KubeMQQueueWriteArgs, KubeMQQueueWriteArgs__Output as _protos_args_KubeMQQueueWriteArgs__Output } from '../../protos/args/KubeMQQueueWriteArgs';

export interface TunnelGroupKubeMQQueueOptions {
  '_conn'?: (_protos_args_KubeMQQueueConn | null);
  'args'?: (_protos_args_KubeMQQueueWriteArgs | null);
}

export interface TunnelGroupKubeMQQueueOptions__Output {
  '_conn': (_protos_args_KubeMQQueueConn__Output | null);
  'args': (_protos_args_KubeMQQueueWriteArgs__Output | null);
}
