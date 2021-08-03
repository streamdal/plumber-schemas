// Original file: protos/read.proto

import type { Status as _protos_common_Status, Status__Output as _protos_common_Status__Output } from '../protos/common/Status';

export interface CreateReadResponse {
  'read_id'?: (string);
  'status'?: (_protos_common_Status | null);
}

export interface CreateReadResponse__Output {
  'read_id': (string);
  'status': (_protos_common_Status__Output | null);
}
