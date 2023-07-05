// Original file: ../../protos/common/ps_common_dataquality.proto

import type { RuleFailureMode as _protos_common_RuleFailureMode, RuleFailureMode__Output as _protos_common_RuleFailureMode__Output } from '../../protos/common/RuleFailureMode';
import type { FailureModeReject as _protos_common_FailureModeReject, FailureModeReject__Output as _protos_common_FailureModeReject__Output } from '../../protos/common/FailureModeReject';
import type { FailureModeDLQ as _protos_common_FailureModeDLQ, FailureModeDLQ__Output as _protos_common_FailureModeDLQ__Output } from '../../protos/common/FailureModeDLQ';
import type { FailureModeTransform as _protos_common_FailureModeTransform, FailureModeTransform__Output as _protos_common_FailureModeTransform__Output } from '../../protos/common/FailureModeTransform';
import type { FailureModeAlertSlack as _protos_common_FailureModeAlertSlack, FailureModeAlertSlack__Output as _protos_common_FailureModeAlertSlack__Output } from '../../protos/common/FailureModeAlertSlack';

export interface FailureMode {
  'mode'?: (_protos_common_RuleFailureMode);
  'reject'?: (_protos_common_FailureModeReject | null);
  'dlq'?: (_protos_common_FailureModeDLQ | null);
  'transform'?: (_protos_common_FailureModeTransform | null);
  'alertSlack'?: (_protos_common_FailureModeAlertSlack | null);
  'config'?: "reject"|"dlq"|"transform"|"alertSlack";
}

export interface FailureMode__Output {
  'mode': (_protos_common_RuleFailureMode__Output);
  'reject'?: (_protos_common_FailureModeReject__Output | null);
  'dlq'?: (_protos_common_FailureModeDLQ__Output | null);
  'transform'?: (_protos_common_FailureModeTransform__Output | null);
  'alertSlack'?: (_protos_common_FailureModeAlertSlack__Output | null);
  'config': "reject"|"dlq"|"transform"|"alertSlack";
}
