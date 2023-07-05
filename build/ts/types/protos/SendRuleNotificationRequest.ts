// Original file: protos/ps_dataquality.proto

import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface SendRuleNotificationRequest {
  'data'?: (Buffer | Uint8Array | string);
  'rulesetId'?: (string);
  'ruleId'?: (string);
  'auth'?: (_protos_common_Auth | null);
}

export interface SendRuleNotificationRequest__Output {
  'data': (Buffer);
  'rulesetId': (string);
  'ruleId': (string);
  'auth': (_protos_common_Auth__Output | null);
}
