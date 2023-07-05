// Original file: protos/ps_dataquality.proto

import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface DeleteDataQualityRuleRequest {
  'ruleSetId'?: (string);
  'ruleId'?: (string);
  'auth'?: (_protos_common_Auth | null);
}

export interface DeleteDataQualityRuleRequest__Output {
  'ruleSetId': (string);
  'ruleId': (string);
  'auth': (_protos_common_Auth__Output | null);
}
