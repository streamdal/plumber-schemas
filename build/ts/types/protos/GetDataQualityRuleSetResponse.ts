// Original file: protos/ps_dataquality.proto

import type { RuleSet as _protos_common_RuleSet, RuleSet__Output as _protos_common_RuleSet__Output } from '../protos/common/RuleSet';
import type { Status as _protos_common_Status, Status__Output as _protos_common_Status__Output } from '../protos/common/Status';

export interface GetDataQualityRuleSetResponse {
  'ruleSet'?: (_protos_common_RuleSet | null);
  'status'?: (_protos_common_Status | null);
}

export interface GetDataQualityRuleSetResponse__Output {
  'ruleSet': (_protos_common_RuleSet__Output | null);
  'status': (_protos_common_Status__Output | null);
}
