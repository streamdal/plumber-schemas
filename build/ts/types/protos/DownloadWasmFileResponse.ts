// Original file: ../../protos/ps_wsm.proto

import type { Status as _protos_common_Status, Status__Output as _protos_common_Status__Output } from '../protos/common/Status';

export interface DownloadWasmFileResponse {
  'data'?: (Buffer | Uint8Array | string);
  'status'?: (_protos_common_Status | null);
}

export interface DownloadWasmFileResponse__Output {
  'data': (Buffer);
  'status': (_protos_common_Status__Output | null);
}
