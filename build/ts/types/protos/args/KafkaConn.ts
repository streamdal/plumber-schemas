// Original file: protos/args/ps_args_kafka.proto

import type { SASLType as _protos_args_SASLType, SASLType__Output as _protos_args_SASLType__Output } from '../../protos/args/SASLType';

export interface KafkaConn {
  'address'?: (string)[];
  'timeoutSeconds'?: (number);
  'useTls'?: (boolean);
  'tlsSkipVerify'?: (boolean);
  'saslType'?: (_protos_args_SASLType);
  'saslUsername'?: (string);
  'saslPassword'?: (string);
}

export interface KafkaConn__Output {
  'address': (string)[];
  'timeoutSeconds': (number);
  'useTls': (boolean);
  'tlsSkipVerify': (boolean);
  'saslType': (_protos_args_SASLType__Output);
  'saslUsername': (string);
  'saslPassword': (string);
}
