// Original file: ../../protos/args/ps_args_pulsar.proto

export const SubscriptionType = {
  SHARED: 'SHARED',
  EXCLUSIVE: 'EXCLUSIVE',
  FAILOVER: 'FAILOVER',
  KEYSHARED: 'KEYSHARED',
} as const;

export type SubscriptionType =
  | 'SHARED'
  | 0
  | 'EXCLUSIVE'
  | 1
  | 'FAILOVER'
  | 2
  | 'KEYSHARED'
  | 3

export type SubscriptionType__Output = typeof SubscriptionType[keyof typeof SubscriptionType]
