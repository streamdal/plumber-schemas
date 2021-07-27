// Original file: protos/relay.proto

import type { Kafka as _protos_args_Kafka, Kafka__Output as _protos_args_Kafka__Output } from '../protos/args/Kafka';

export interface Relay {
  'batch_collection_token'?: (string);
  'batch_size'?: (number);
  'batch_max_retry'?: (number);
  'connection_id'?: (string);
  'batchsh_grpc_address'?: (string);
  'batchsh_grpc_disable_tls'?: (boolean);
  'batchsh_grpc_timeout'?: (boolean);
  'relay_id'?: (string);
  'kafka'?: (_protos_args_Kafka | null);
  'Args'?: "kafka";
}

export interface Relay__Output {
  'batch_collection_token': (string);
  'batch_size': (number);
  'batch_max_retry': (number);
  'connection_id': (string);
  'batchsh_grpc_address': (string);
  'batchsh_grpc_disable_tls': (boolean);
  'batchsh_grpc_timeout': (boolean);
  'relay_id': (string);
  'kafka'?: (_protos_args_Kafka__Output | null);
  'Args': "kafka";
}
