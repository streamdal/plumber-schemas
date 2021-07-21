// Original file: protos/relay.proto

import type { Relay as _protos_Relay, Relay__Output as _protos_Relay__Output } from '../protos/Relay';
import type { Kafka as _protos_args_Kafka, Kafka__Output as _protos_args_Kafka__Output } from '../protos/args/Kafka';
import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface CreateRelayRequest {
  'relay'?: (_protos_Relay | null);
  'kafka'?: (_protos_args_Kafka | null);
  'auth'?: (_protos_common_Auth | null);
  'Args'?: "kafka";
}

export interface CreateRelayRequest__Output {
  'relay': (_protos_Relay__Output | null);
  'kafka'?: (_protos_args_Kafka__Output | null);
  'auth': (_protos_common_Auth__Output | null);
  'Args': "kafka";
}
