// Original file: ../../protos/ps_wsm.proto

import type { Status as _protos_common_Status, Status__Output as _protos_common_Status__Output } from '../protos/common/Status';

export interface ListWasmFilesResponse {
  'names'?: (string)[];
  'status'?: (_protos_common_Status | null);
}

export interface ListWasmFilesResponse__Output {
  'names': (string)[];
  'status': (_protos_common_Status__Output | null);
}
