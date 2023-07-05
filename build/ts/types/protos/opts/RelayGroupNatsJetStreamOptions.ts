// Original file: protos/opts/ps_opts_relay.proto

import type { NatsJetstreamConn as _protos_args_NatsJetstreamConn, NatsJetstreamConn__Output as _protos_args_NatsJetstreamConn__Output } from '../../protos/args/NatsJetstreamConn';
import type { NatsJetstreamReadArgs as _protos_args_NatsJetstreamReadArgs, NatsJetstreamReadArgs__Output as _protos_args_NatsJetstreamReadArgs__Output } from '../../protos/args/NatsJetstreamReadArgs';

export interface RelayGroupNatsJetStreamOptions {
  '_conn'?: (_protos_args_NatsJetstreamConn | null);
  'args'?: (_protos_args_NatsJetstreamReadArgs | null);
}

export interface RelayGroupNatsJetStreamOptions__Output {
  '_conn': (_protos_args_NatsJetstreamConn__Output | null);
  'args': (_protos_args_NatsJetstreamReadArgs__Output | null);
}
