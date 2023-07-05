// Original file: ../../protos/ps_dataquality.proto

import type { RuleSet as _protos_common_RuleSet, RuleSet__Output as _protos_common_RuleSet__Output } from '../protos/common/RuleSet';
import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface UpdateDataQualityRuleSetRequest {
  'id'?: (string);
  'ruleSet'?: (_protos_common_RuleSet | null);
  'auth'?: (_protos_common_Auth | null);
}

export interface UpdateDataQualityRuleSetRequest__Output {
  'id': (string);
  'ruleSet': (_protos_common_RuleSet__Output | null);
  'auth': (_protos_common_Auth__Output | null);
}
