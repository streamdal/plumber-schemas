// Original file: protos/common/ps_common_dataquality.proto

import type { MatchOperator as _protos_common_MatchOperator, MatchOperator__Output as _protos_common_MatchOperator__Output } from '../../protos/common/MatchOperator';

export interface RuleConfigMatch {
  'path'?: (string);
  'type'?: (string);
  'args'?: (string)[];
  'operator'?: (_protos_common_MatchOperator);
}

export interface RuleConfigMatch__Output {
  'path': (string);
  'type': (string);
  'args': (string)[];
  'operator': (_protos_common_MatchOperator__Output);
}
