// Original file: ../../protos/common/ps_common_dataquality.proto

import type { RuleType as _protos_common_RuleType, RuleType__Output as _protos_common_RuleType__Output } from '../../protos/common/RuleType';
import type { FailureMode as _protos_common_FailureMode, FailureMode__Output as _protos_common_FailureMode__Output } from '../../protos/common/FailureMode';
import type { RuleConfigMatch as _protos_common_RuleConfigMatch, RuleConfigMatch__Output as _protos_common_RuleConfigMatch__Output } from '../../protos/common/RuleConfigMatch';
import type { RuleConfigCustom as _protos_common_RuleConfigCustom, RuleConfigCustom__Output as _protos_common_RuleConfigCustom__Output } from '../../protos/common/RuleConfigCustom';

export interface Rule {
  'id'?: (string);
  'type'?: (_protos_common_RuleType);
  'failureModeConfigs'?: (_protos_common_FailureMode)[];
  'name'?: (string);
  'matchConfig'?: (_protos_common_RuleConfigMatch | null);
  'customConfig'?: (_protos_common_RuleConfigCustom | null);
  '_rulesetId'?: (string);
  'ruleConfig'?: "matchConfig"|"customConfig";
}

export interface Rule__Output {
  'id': (string);
  'type': (_protos_common_RuleType__Output);
  'failureModeConfigs': (_protos_common_FailureMode__Output)[];
  'name': (string);
  'matchConfig'?: (_protos_common_RuleConfigMatch__Output | null);
  'customConfig'?: (_protos_common_RuleConfigCustom__Output | null);
  '_rulesetId': (string);
  'ruleConfig': "matchConfig"|"customConfig";
}
