// Original file: protos/opts/ps_opts_relay.proto

import type { AWSSQSConn as _protos_args_AWSSQSConn, AWSSQSConn__Output as _protos_args_AWSSQSConn__Output } from '../../protos/args/AWSSQSConn';
import type { AWSSQSRelayArgs as _protos_args_AWSSQSRelayArgs, AWSSQSRelayArgs__Output as _protos_args_AWSSQSRelayArgs__Output } from '../../protos/args/AWSSQSRelayArgs';

export interface RelayGroupAWSSQSOptions {
  '_conn'?: (_protos_args_AWSSQSConn | null);
  'args'?: (_protos_args_AWSSQSRelayArgs | null);
}

export interface RelayGroupAWSSQSOptions__Output {
  '_conn': (_protos_args_AWSSQSConn__Output | null);
  'args': (_protos_args_AWSSQSRelayArgs__Output | null);
}
