// Original file: ../../protos/ps_dataquality.proto

import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface DeleteDataQualityRuleSetRequest {
  'id'?: (string);
  'auth'?: (_protos_common_Auth | null);
}

export interface DeleteDataQualityRuleSetRequest__Output {
  'id': (string);
  'auth': (_protos_common_Auth__Output | null);
}
