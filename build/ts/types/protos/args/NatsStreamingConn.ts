// Original file: ../../protos/args/ps_args_nats_streaming.proto

import type { NatsStreamingTLSOptions as _protos_args_NatsStreamingTLSOptions, NatsStreamingTLSOptions__Output as _protos_args_NatsStreamingTLSOptions__Output } from '../../protos/args/NatsStreamingTLSOptions';

export interface NatsStreamingConn {
  'dsn'?: (string);
  'userCredentials'?: (string);
  'clusterId'?: (string);
  'clientId'?: (string);
  'tlsOptions'?: (_protos_args_NatsStreamingTLSOptions | null);
}

export interface NatsStreamingConn__Output {
  'dsn': (string);
  'userCredentials': (string);
  'clusterId': (string);
  'clientId': (string);
  'tlsOptions': (_protos_args_NatsStreamingTLSOptions__Output | null);
}
