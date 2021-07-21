// Original file: protos/write.proto

import type { Kafka as _protos_records_Kafka, Kafka__Output as _protos_records_Kafka__Output } from '../protos/records/Kafka';

export interface WriteRecord {
  'kafka'?: (_protos_records_Kafka | null);
  'Records'?: "kafka";
}

export interface WriteRecord__Output {
  'kafka'?: (_protos_records_Kafka__Output | null);
  'Records': "kafka";
}
