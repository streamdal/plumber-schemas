// Original file: ../../protos/opts/ps_opts_relay.proto

import type { KubeMQQueueConn as _protos_args_KubeMQQueueConn, KubeMQQueueConn__Output as _protos_args_KubeMQQueueConn__Output } from '../../protos/args/KubeMQQueueConn';
import type { KubeMQQueueReadArgs as _protos_args_KubeMQQueueReadArgs, KubeMQQueueReadArgs__Output as _protos_args_KubeMQQueueReadArgs__Output } from '../../protos/args/KubeMQQueueReadArgs';

export interface RelayGroupKubeMQQueueOptions {
  '_conn'?: (_protos_args_KubeMQQueueConn | null);
  'args'?: (_protos_args_KubeMQQueueReadArgs | null);
}

export interface RelayGroupKubeMQQueueOptions__Output {
  '_conn': (_protos_args_KubeMQQueueConn__Output | null);
  'args': (_protos_args_KubeMQQueueReadArgs__Output | null);
}
