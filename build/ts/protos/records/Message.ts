// Original file: protos/records/base.proto

import type { Kafka as _protos_records_Kafka, Kafka__Output as _protos_records_Kafka__Output } from '../../protos/records/Kafka';
import type { Long } from '@grpc/proto-loader';

export interface Message {
  'message_id'?: (string);
  'plumber_id'?: (string);
  'unix_timestamp_utc'?: (number | string | Long);
  'kafka'?: (_protos_records_Kafka | null);
  'Message'?: "kafka";
}

export interface Message__Output {
  'message_id': (string);
  'plumber_id': (string);
  'unix_timestamp_utc': (number);
  'kafka'?: (_protos_records_Kafka__Output | null);
  'Message': "kafka";
}
