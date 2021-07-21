// Original file: protos/relay.proto

import type { Relay as _protos_Relay, Relay__Output as _protos_Relay__Output } from '../protos/Relay';
import type { Status as _protos_common_Status, Status__Output as _protos_common_Status__Output } from '../protos/common/Status';

export interface GetAllRelaysResponse {
  'relays'?: (_protos_Relay)[];
  'status'?: (_protos_common_Status | null);
}

export interface GetAllRelaysResponse__Output {
  'relays': (_protos_Relay__Output)[];
  'status': (_protos_common_Status__Output | null);
}
