// Original file: ../../protos/common/ps_common_dataquality.proto

export const RuleType = {
  RULE_TYPE_UNSET: 'RULE_TYPE_UNSET',
  RULE_TYPE_MATCH: 'RULE_TYPE_MATCH',
  RULE_TYPE_CUSTOM: 'RULE_TYPE_CUSTOM',
} as const;

export type RuleType =
  | 'RULE_TYPE_UNSET'
  | 0
  | 'RULE_TYPE_MATCH'
  | 1
  | 'RULE_TYPE_CUSTOM'
  | 2

export type RuleType__Output = typeof RuleType[keyof typeof RuleType]
