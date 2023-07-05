// Original file: ../../protos/opts/ps_opts_tunnel.proto

import type { NatsJetstreamConn as _protos_args_NatsJetstreamConn, NatsJetstreamConn__Output as _protos_args_NatsJetstreamConn__Output } from '../../protos/args/NatsJetstreamConn';
import type { NatsJetstreamWriteArgs as _protos_args_NatsJetstreamWriteArgs, NatsJetstreamWriteArgs__Output as _protos_args_NatsJetstreamWriteArgs__Output } from '../../protos/args/NatsJetstreamWriteArgs';

export interface TunnelGroupNatsJetstreamOptions {
  '_conn'?: (_protos_args_NatsJetstreamConn | null);
  'args'?: (_protos_args_NatsJetstreamWriteArgs | null);
}

export interface TunnelGroupNatsJetstreamOptions__Output {
  '_conn': (_protos_args_NatsJetstreamConn__Output | null);
  'args': (_protos_args_NatsJetstreamWriteArgs__Output | null);
}
