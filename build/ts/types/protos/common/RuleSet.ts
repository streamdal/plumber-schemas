// Original file: protos/common/ps_common_dataquality.proto

import type { RuleMode as _protos_common_RuleMode, RuleMode__Output as _protos_common_RuleMode__Output } from '../../protos/common/RuleMode';
import type { Rule as _protos_common_Rule, Rule__Output as _protos_common_Rule__Output } from '../../protos/common/Rule';

export interface RuleSet {
  'id'?: (string);
  'name'?: (string);
  'mode'?: (_protos_common_RuleMode);
  'rules'?: ({[key: string]: _protos_common_Rule});
  'dataSource'?: (string);
  'version'?: (number);
  'key'?: (string);
}

export interface RuleSet__Output {
  'id': (string);
  'name': (string);
  'mode': (_protos_common_RuleMode__Output);
  'rules': ({[key: string]: _protos_common_Rule__Output});
  'dataSource': (string);
  'version': (number);
  'key': (string);
}
