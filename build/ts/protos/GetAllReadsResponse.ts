// Original file: protos/read.proto

import type { Read as _protos_Read, Read__Output as _protos_Read__Output } from '../protos/Read';
import type { Status as _protos_common_Status, Status__Output as _protos_common_Status__Output } from '../protos/common/Status';

export interface GetAllReadsResponse {
  'read'?: (_protos_Read)[];
  'status'?: (_protos_common_Status | null);
}

export interface GetAllReadsResponse__Output {
  'read': (_protos_Read__Output)[];
  'status': (_protos_common_Status__Output | null);
}
