// Original file: ../../protos/ps_connect.proto

import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface DeleteConnectionRequest {
  'connectionId'?: (string);
  'auth'?: (_protos_common_Auth | null);
}

export interface DeleteConnectionRequest__Output {
  'connectionId': (string);
  'auth': (_protos_common_Auth__Output | null);
}
