// Original file: ../../protos/ps_dataquality.proto

import type { Rule as _protos_common_Rule, Rule__Output as _protos_common_Rule__Output } from '../protos/common/Rule';
import type { Status as _protos_common_Status, Status__Output as _protos_common_Status__Output } from '../protos/common/Status';

export interface GetDataQualityRuleResponse {
  'rule'?: (_protos_common_Rule | null);
  'status'?: (_protos_common_Status | null);
}

export interface GetDataQualityRuleResponse__Output {
  'rule': (_protos_common_Rule__Output | null);
  'status': (_protos_common_Status__Output | null);
}
