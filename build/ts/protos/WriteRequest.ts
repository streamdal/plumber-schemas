// Original file: protos/write.proto

import type { WriteRecord as _protos_WriteRecord, WriteRecord__Output as _protos_WriteRecord__Output } from '../protos/WriteRecord';
import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface WriteRequest {
  'connection_id'?: (string);
  'records'?: (_protos_WriteRecord)[];
  'auth'?: (_protos_common_Auth | null);
}

export interface WriteRequest__Output {
  'connection_id': (string);
  'records': (_protos_WriteRecord__Output)[];
  'auth': (_protos_common_Auth__Output | null);
}
