// Original file: protos/read.proto

import type { ReadOptions as _protos_ReadOptions, ReadOptions__Output as _protos_ReadOptions__Output } from '../protos/ReadOptions';
import type { SampleOptions as _protos_SampleOptions, SampleOptions__Output as _protos_SampleOptions__Output } from '../protos/SampleOptions';
import type { Options as _protos_encoding_Options, Options__Output as _protos_encoding_Options__Output } from '../protos/encoding/Options';
import type { Kafka as _protos_args_Kafka, Kafka__Output as _protos_args_Kafka__Output } from '../protos/args/Kafka';

export interface Read {
  'id'?: (string);
  'name'?: (string);
  'connection_id'?: (string);
  'read_options'?: (_protos_ReadOptions | null);
  'sample_options'?: (_protos_SampleOptions | null);
  'decode_options'?: (_protos_encoding_Options | null);
  'kafka'?: (_protos_args_Kafka | null);
  'Args'?: "kafka";
}

export interface Read__Output {
  'id': (string);
  'name': (string);
  'connection_id': (string);
  'read_options': (_protos_ReadOptions__Output | null);
  'sample_options': (_protos_SampleOptions__Output | null);
  'decode_options': (_protos_encoding_Options__Output | null);
  'kafka'?: (_protos_args_Kafka__Output | null);
  'Args': "kafka";
}
