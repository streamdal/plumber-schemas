// Original file: protos/connect.proto

import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface GetConnectionRequest {
  'connection_id'?: (string);
  'auth'?: (_protos_common_Auth | null);
}

export interface GetConnectionRequest__Output {
  'connection_id': (string);
  'auth': (_protos_common_Auth__Output | null);
}
