// Original file: protos/relay.proto

import type { Relay as _protos_Relay, Relay__Output as _protos_Relay__Output } from '../protos/Relay';
import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface UpdateRelayRequest {
  'relay_id'?: (string);
  'relay'?: (_protos_Relay | null);
  'auth'?: (_protos_common_Auth | null);
}

export interface UpdateRelayRequest__Output {
  'relay_id': (string);
  'relay': (_protos_Relay__Output | null);
  'auth': (_protos_common_Auth__Output | null);
}
