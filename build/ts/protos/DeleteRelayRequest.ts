// Original file: protos/relay.proto

import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface DeleteRelayRequest {
  'relay_id'?: (string);
  'auth'?: (_protos_common_Auth | null);
}

export interface DeleteRelayRequest__Output {
  'relay_id': (string);
  'auth': (_protos_common_Auth__Output | null);
}
