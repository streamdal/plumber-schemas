// Original file: protos/common/status.proto

import type { Code as _protos_common_Code } from '../../protos/common/Code';

export interface Status {
  'code'?: (_protos_common_Code | keyof typeof _protos_common_Code);
  'message'?: (string);
  'request_id'?: (string);
}

export interface Status__Output {
  'code': (keyof typeof _protos_common_Code);
  'message': (string);
  'request_id': (string);
}
