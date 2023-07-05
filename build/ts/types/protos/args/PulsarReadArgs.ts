// Original file: ../../protos/args/ps_args_pulsar.proto

import type { SubscriptionType as _protos_args_SubscriptionType, SubscriptionType__Output as _protos_args_SubscriptionType__Output } from '../../protos/args/SubscriptionType';
import type { SubscriptionInitialPosition as _protos_args_SubscriptionInitialPosition, SubscriptionInitialPosition__Output as _protos_args_SubscriptionInitialPosition__Output } from '../../protos/args/SubscriptionInitialPosition';

export interface PulsarReadArgs {
  'topic'?: (string);
  'subscriptionName'?: (string);
  'subscriptionType'?: (_protos_args_SubscriptionType);
  'initialPosition'?: (_protos_args_SubscriptionInitialPosition);
}

export interface PulsarReadArgs__Output {
  'topic': (string);
  'subscriptionName': (string);
  'subscriptionType': (_protos_args_SubscriptionType__Output);
  'initialPosition': (_protos_args_SubscriptionInitialPosition__Output);
}
