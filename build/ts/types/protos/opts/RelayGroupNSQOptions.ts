// Original file: protos/opts/ps_opts_relay.proto

import type { NSQConn as _protos_args_NSQConn, NSQConn__Output as _protos_args_NSQConn__Output } from '../../protos/args/NSQConn';
import type { NSQReadArgs as _protos_args_NSQReadArgs, NSQReadArgs__Output as _protos_args_NSQReadArgs__Output } from '../../protos/args/NSQReadArgs';

export interface RelayGroupNSQOptions {
  '_conn'?: (_protos_args_NSQConn | null);
  'args'?: (_protos_args_NSQReadArgs | null);
}

export interface RelayGroupNSQOptions__Output {
  '_conn': (_protos_args_NSQConn__Output | null);
  'args': (_protos_args_NSQReadArgs__Output | null);
}
