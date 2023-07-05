// Original file: protos/ps_dataquality.proto

import type { Rule as _protos_common_Rule, Rule__Output as _protos_common_Rule__Output } from '../protos/common/Rule';
import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface CreateDataQualityRuleRequest {
  'ruleSetId'?: (string);
  'rule'?: (_protos_common_Rule | null);
  'auth'?: (_protos_common_Auth | null);
}

export interface CreateDataQualityRuleRequest__Output {
  'ruleSetId': (string);
  'rule': (_protos_common_Rule__Output | null);
  'auth': (_protos_common_Auth__Output | null);
}
