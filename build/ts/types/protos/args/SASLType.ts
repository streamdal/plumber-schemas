// Original file: protos/args/ps_args_kafka.proto

export const SASLType = {
  NONE: 'NONE',
  PLAIN: 'PLAIN',
  SCRAM: 'SCRAM',
} as const;

export type SASLType =
  | 'NONE'
  | 0
  | 'PLAIN'
  | 1
  | 'SCRAM'
  | 2

export type SASLType__Output = typeof SASLType[keyof typeof SASLType]
