// Original file: protos/ps_relay.proto

import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface GetRelayRequest {
  'relayId'?: (string);
  'auth'?: (_protos_common_Auth | null);
}

export interface GetRelayRequest__Output {
  'relayId': (string);
  'auth': (_protos_common_Auth__Output | null);
}
