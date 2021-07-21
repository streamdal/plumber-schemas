// Original file: protos/conns/kafka.proto

import type { SASLType as _protos_conns_SASLType } from '../../protos/conns/SASLType';

export interface Kafka {
  'address'?: (string)[];
  'timeout_seconds'?: (number);
  'use_tls'?: (boolean);
  'insecure_tls'?: (boolean);
  'sasl_type'?: (_protos_conns_SASLType | keyof typeof _protos_conns_SASLType);
  'sasl_username'?: (string);
  'sasl_password'?: (string);
}

export interface Kafka__Output {
  'address': (string)[];
  'timeout_seconds': (number);
  'use_tls': (boolean);
  'insecure_tls': (boolean);
  'sasl_type': (keyof typeof _protos_conns_SASLType);
  'sasl_username': (string);
  'sasl_password': (string);
}
