// Original file: ../../protos/opts/ps_opts_tunnel.proto

import type { AzureEventHubConn as _protos_args_AzureEventHubConn, AzureEventHubConn__Output as _protos_args_AzureEventHubConn__Output } from '../../protos/args/AzureEventHubConn';
import type { AzureEventHubWriteArgs as _protos_args_AzureEventHubWriteArgs, AzureEventHubWriteArgs__Output as _protos_args_AzureEventHubWriteArgs__Output } from '../../protos/args/AzureEventHubWriteArgs';

export interface TunnelGroupAzureEventHubOptions {
  '_conn'?: (_protos_args_AzureEventHubConn | null);
  'args'?: (_protos_args_AzureEventHubWriteArgs | null);
}

export interface TunnelGroupAzureEventHubOptions__Output {
  '_conn': (_protos_args_AzureEventHubConn__Output | null);
  'args': (_protos_args_AzureEventHubWriteArgs__Output | null);
}
