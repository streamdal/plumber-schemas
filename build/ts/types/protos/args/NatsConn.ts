// Original file: protos/args/ps_args_nats.proto

import type { NatsTLSOptions as _protos_args_NatsTLSOptions, NatsTLSOptions__Output as _protos_args_NatsTLSOptions__Output } from '../../protos/args/NatsTLSOptions';

export interface NatsConn {
  'dsn'?: (string);
  'userCredentials'?: (string);
  'tlsOptions'?: (_protos_args_NatsTLSOptions | null);
  'nkey'?: (string);
}

export interface NatsConn__Output {
  'dsn': (string);
  'userCredentials': (string);
  'tlsOptions': (_protos_args_NatsTLSOptions__Output | null);
  'nkey': (string);
}
