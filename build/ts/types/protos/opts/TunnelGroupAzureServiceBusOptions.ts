// Original file: protos/opts/ps_opts_tunnel.proto

import type { AzureServiceBusConn as _protos_args_AzureServiceBusConn, AzureServiceBusConn__Output as _protos_args_AzureServiceBusConn__Output } from '../../protos/args/AzureServiceBusConn';
import type { AzureServiceBusWriteArgs as _protos_args_AzureServiceBusWriteArgs, AzureServiceBusWriteArgs__Output as _protos_args_AzureServiceBusWriteArgs__Output } from '../../protos/args/AzureServiceBusWriteArgs';

export interface TunnelGroupAzureServiceBusOptions {
  '_conn'?: (_protos_args_AzureServiceBusConn | null);
  'args'?: (_protos_args_AzureServiceBusWriteArgs | null);
}

export interface TunnelGroupAzureServiceBusOptions__Output {
  '_conn': (_protos_args_AzureServiceBusConn__Output | null);
  'args': (_protos_args_AzureServiceBusWriteArgs__Output | null);
}
