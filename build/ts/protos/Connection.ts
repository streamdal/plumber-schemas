// Original file: protos/connect.proto

import type { Kafka as _protos_conns_Kafka, Kafka__Output as _protos_conns_Kafka__Output } from '../protos/conns/Kafka';

export interface Connection {
  'name'?: (string);
  'notes'?: (string);
  'kafka'?: (_protos_conns_Kafka | null);
  'conn'?: "kafka";
}

export interface Connection__Output {
  'name': (string);
  'notes': (string);
  'kafka'?: (_protos_conns_Kafka__Output | null);
  'conn': "kafka";
}
