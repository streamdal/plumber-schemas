// Original file: protos/read.proto

import type { Read as _protos_Read, Read__Output as _protos_Read__Output } from '../protos/Read';
import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface CreateReadRequest {
  'read'?: (_protos_Read | null);
  'auth'?: (_protos_common_Auth | null);
}

export interface CreateReadRequest__Output {
  'read': (_protos_Read__Output | null);
  'auth': (_protos_common_Auth__Output | null);
}
