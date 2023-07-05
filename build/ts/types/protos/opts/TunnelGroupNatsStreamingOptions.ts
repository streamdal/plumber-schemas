// Original file: ../../protos/opts/ps_opts_tunnel.proto

import type { NatsStreamingConn as _protos_args_NatsStreamingConn, NatsStreamingConn__Output as _protos_args_NatsStreamingConn__Output } from '../../protos/args/NatsStreamingConn';
import type { NatsStreamingWriteArgs as _protos_args_NatsStreamingWriteArgs, NatsStreamingWriteArgs__Output as _protos_args_NatsStreamingWriteArgs__Output } from '../../protos/args/NatsStreamingWriteArgs';

export interface TunnelGroupNatsStreamingOptions {
  '_conn'?: (_protos_args_NatsStreamingConn | null);
  'args'?: (_protos_args_NatsStreamingWriteArgs | null);
}

export interface TunnelGroupNatsStreamingOptions__Output {
  '_conn': (_protos_args_NatsStreamingConn__Output | null);
  'args': (_protos_args_NatsStreamingWriteArgs__Output | null);
}
