// Original file: protos/encoding/options.proto

import type { Type as _protos_encoding_Type } from '../../protos/encoding/Type';
import type { Protobuf as _protos_encoding_Protobuf, Protobuf__Output as _protos_encoding_Protobuf__Output } from '../../protos/encoding/Protobuf';
import type { JSONSchema as _protos_encoding_JSONSchema, JSONSchema__Output as _protos_encoding_JSONSchema__Output } from '../../protos/encoding/JSONSchema';
import type { Avro as _protos_encoding_Avro, Avro__Output as _protos_encoding_Avro__Output } from '../../protos/encoding/Avro';

export interface Options {
  'type'?: (_protos_encoding_Type | keyof typeof _protos_encoding_Type);
  'protobuf'?: (_protos_encoding_Protobuf | null);
  'json_schema'?: (_protos_encoding_JSONSchema | null);
  'avro'?: (_protos_encoding_Avro | null);
  'Encoding'?: "protobuf"|"avro"|"json_schema";
}

export interface Options__Output {
  'type': (keyof typeof _protos_encoding_Type);
  'protobuf'?: (_protos_encoding_Protobuf__Output | null);
  'json_schema'?: (_protos_encoding_JSONSchema__Output | null);
  'avro'?: (_protos_encoding_Avro__Output | null);
  'Encoding': "protobuf"|"avro"|"json_schema";
}
