// Original file: protos/relay.proto

import type { Status as _protos_common_Status, Status__Output as _protos_common_Status__Output } from '../protos/common/Status';

export interface CreateRelayResponse {
  'relay_id'?: (string);
  'status'?: (_protos_common_Status | null);
}

export interface CreateRelayResponse__Output {
  'relay_id': (string);
  'status': (_protos_common_Status__Output | null);
}
