// Original file: protos/common/ps_common_status.proto

import type { Code as _protos_common_Code, Code__Output as _protos_common_Code__Output } from '../../protos/common/Code';

export interface Status {
  'code'?: (_protos_common_Code);
  'message'?: (string);
  'requestId'?: (string);
}

export interface Status__Output {
  'code': (_protos_common_Code__Output);
  'message': (string);
  'requestId': (string);
}
