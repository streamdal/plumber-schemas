// Original file: ../../protos/ps_wsm.proto

import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface UploadWasmFileRequest {
  'name'?: (string);
  'data'?: (Buffer | Uint8Array | string);
  'auth'?: (_protos_common_Auth | null);
}

export interface UploadWasmFileRequest__Output {
  'name': (string);
  'data': (Buffer);
  'auth': (_protos_common_Auth__Output | null);
}
