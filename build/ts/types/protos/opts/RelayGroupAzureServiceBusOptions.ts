// Original file: ../../protos/opts/ps_opts_relay.proto

import type { AzureServiceBusConn as _protos_args_AzureServiceBusConn, AzureServiceBusConn__Output as _protos_args_AzureServiceBusConn__Output } from '../../protos/args/AzureServiceBusConn';
import type { AzureServiceBusReadArgs as _protos_args_AzureServiceBusReadArgs, AzureServiceBusReadArgs__Output as _protos_args_AzureServiceBusReadArgs__Output } from '../../protos/args/AzureServiceBusReadArgs';

export interface RelayGroupAzureServiceBusOptions {
  '_conn'?: (_protos_args_AzureServiceBusConn | null);
  'args'?: (_protos_args_AzureServiceBusReadArgs | null);
}

export interface RelayGroupAzureServiceBusOptions__Output {
  '_conn': (_protos_args_AzureServiceBusConn__Output | null);
  'args': (_protos_args_AzureServiceBusReadArgs__Output | null);
}
