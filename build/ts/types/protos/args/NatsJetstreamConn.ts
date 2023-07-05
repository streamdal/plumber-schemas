// Original file: protos/args/ps_args_nats_jetstream.proto

import type { NatsJetstreamTLSOptions as _protos_args_NatsJetstreamTLSOptions, NatsJetstreamTLSOptions__Output as _protos_args_NatsJetstreamTLSOptions__Output } from '../../protos/args/NatsJetstreamTLSOptions';

export interface NatsJetstreamConn {
  'dsn'?: (string);
  'userCredentials'?: (string);
  'clientId'?: (string);
  'tlsOptions'?: (_protos_args_NatsJetstreamTLSOptions | null);
  'nkey'?: (string);
}

export interface NatsJetstreamConn__Output {
  'dsn': (string);
  'userCredentials': (string);
  'clientId': (string);
  'tlsOptions': (_protos_args_NatsJetstreamTLSOptions__Output | null);
  'nkey': (string);
}
