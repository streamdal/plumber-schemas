// Original file: ../../protos/ps_dataquality.proto

import type { RuleSet as _protos_common_RuleSet, RuleSet__Output as _protos_common_RuleSet__Output } from '../protos/common/RuleSet';
import type { Status as _protos_common_Status, Status__Output as _protos_common_Status__Output } from '../protos/common/Status';

export interface GetDataQualityRuleSetsResponse {
  'ruleSets'?: (_protos_common_RuleSet)[];
  'status'?: (_protos_common_Status | null);
}

export interface GetDataQualityRuleSetsResponse__Output {
  'ruleSets': (_protos_common_RuleSet__Output)[];
  'status': (_protos_common_Status__Output | null);
}
