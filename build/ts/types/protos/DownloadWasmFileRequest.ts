// Original file: ../../protos/ps_wsm.proto

import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface DownloadWasmFileRequest {
  'name'?: (string);
  'auth'?: (_protos_common_Auth | null);
}

export interface DownloadWasmFileRequest__Output {
  'name': (string);
  'auth': (_protos_common_Auth__Output | null);
}
