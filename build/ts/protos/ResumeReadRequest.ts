// Original file: protos/read.proto

import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface ResumeReadRequest {
  'read_id'?: (string);
  'auth'?: (_protos_common_Auth | null);
}

export interface ResumeReadRequest__Output {
  'read_id': (string);
  'auth': (_protos_common_Auth__Output | null);
}
