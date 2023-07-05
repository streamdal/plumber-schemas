// Original file: protos/opts/ps_opts_relay.proto

import type { NatsStreamingConn as _protos_args_NatsStreamingConn, NatsStreamingConn__Output as _protos_args_NatsStreamingConn__Output } from '../../protos/args/NatsStreamingConn';
import type { NatsStreamingReadArgs as _protos_args_NatsStreamingReadArgs, NatsStreamingReadArgs__Output as _protos_args_NatsStreamingReadArgs__Output } from '../../protos/args/NatsStreamingReadArgs';

export interface RelayGroupNatsStreamingOptions {
  '_conn'?: (_protos_args_NatsStreamingConn | null);
  'args'?: (_protos_args_NatsStreamingReadArgs | null);
}

export interface RelayGroupNatsStreamingOptions__Output {
  '_conn': (_protos_args_NatsStreamingConn__Output | null);
  'args': (_protos_args_NatsStreamingReadArgs__Output | null);
}
