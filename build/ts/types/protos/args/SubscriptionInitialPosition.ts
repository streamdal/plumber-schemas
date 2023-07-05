// Original file: protos/args/ps_args_pulsar.proto

export const SubscriptionInitialPosition = {
  PULSAR_LATEST: 'PULSAR_LATEST',
  PULSAR_EARLIEST: 'PULSAR_EARLIEST',
} as const;

export type SubscriptionInitialPosition =
  | 'PULSAR_LATEST'
  | 0
  | 'PULSAR_EARLIEST'
  | 1

export type SubscriptionInitialPosition__Output = typeof SubscriptionInitialPosition[keyof typeof SubscriptionInitialPosition]
