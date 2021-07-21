// Original file: protos/relay.proto

import type { Relay as _protos_Relay, Relay__Output as _protos_Relay__Output } from '../protos/Relay';
import type { Status as _protos_common_Status, Status__Output as _protos_common_Status__Output } from '../protos/common/Status';

export interface GetRelayResponse {
  'relay'?: (_protos_Relay | null);
  'status'?: (_protos_common_Status | null);
}

export interface GetRelayResponse__Output {
  'relay': (_protos_Relay__Output | null);
  'status': (_protos_common_Status__Output | null);
}
