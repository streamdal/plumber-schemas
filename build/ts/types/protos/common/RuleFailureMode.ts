// Original file: ../../protos/common/ps_common_dataquality.proto

export const RuleFailureMode = {
  RULE_FAILURE_MODE_UNSET: 'RULE_FAILURE_MODE_UNSET',
  RULE_FAILURE_MODE_REJECT: 'RULE_FAILURE_MODE_REJECT',
  RULE_FAILURE_MODE_DLQ: 'RULE_FAILURE_MODE_DLQ',
  RULE_FAILURE_MODE_TRANSFORM: 'RULE_FAILURE_MODE_TRANSFORM',
  RULE_FAILURE_MODE_ALERT_SLACK: 'RULE_FAILURE_MODE_ALERT_SLACK',
} as const;

export type RuleFailureMode =
  | 'RULE_FAILURE_MODE_UNSET'
  | 0
  | 'RULE_FAILURE_MODE_REJECT'
  | 1
  | 'RULE_FAILURE_MODE_DLQ'
  | 2
  | 'RULE_FAILURE_MODE_TRANSFORM'
  | 3
  | 'RULE_FAILURE_MODE_ALERT_SLACK'
  | 4

export type RuleFailureMode__Output = typeof RuleFailureMode[keyof typeof RuleFailureMode]
