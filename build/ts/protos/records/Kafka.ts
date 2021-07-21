// Original file: protos/records/kafka.proto

import type { KafkaHeader as _protos_records_KafkaHeader, KafkaHeader__Output as _protos_records_KafkaHeader__Output } from '../../protos/records/KafkaHeader';
import type { Long } from '@grpc/proto-loader';

export interface Kafka {
  'topic'?: (string);
  'key'?: (Buffer | Uint8Array | string);
  'value'?: (Buffer | Uint8Array | string);
  'blob'?: (Buffer | Uint8Array | string);
  'timestamp'?: (number | string | Long);
  'offset'?: (number | string | Long);
  'partition'?: (number);
  'headers'?: (_protos_records_KafkaHeader)[];
}

export interface Kafka__Output {
  'topic': (string);
  'key': (Buffer);
  'value': (Buffer);
  'blob': (Buffer);
  'timestamp': (number);
  'offset': (number);
  'partition': (number);
  'headers': (_protos_records_KafkaHeader__Output)[];
}
