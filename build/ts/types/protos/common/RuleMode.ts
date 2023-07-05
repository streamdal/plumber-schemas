// Original file: ../../protos/common/ps_common_dataquality.proto

export const RuleMode = {
  RULE_MODE_UNSET: 'RULE_MODE_UNSET',
  RULE_MODE_PUBLISH: 'RULE_MODE_PUBLISH',
  RULE_MODE_CONSUME: 'RULE_MODE_CONSUME',
} as const;

export type RuleMode =
  | 'RULE_MODE_UNSET'
  | 0
  | 'RULE_MODE_PUBLISH'
  | 1
  | 'RULE_MODE_CONSUME'
  | 2

export type RuleMode__Output = typeof RuleMode[keyof typeof RuleMode]
