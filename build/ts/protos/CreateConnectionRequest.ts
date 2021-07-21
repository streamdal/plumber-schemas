// Original file: protos/connect.proto

import type { Connection as _protos_Connection, Connection__Output as _protos_Connection__Output } from '../protos/Connection';
import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface CreateConnectionRequest {
  'connection'?: (_protos_Connection | null);
  'auth'?: (_protos_common_Auth | null);
}

export interface CreateConnectionRequest__Output {
  'connection': (_protos_Connection__Output | null);
  'auth': (_protos_common_Auth__Output | null);
}
