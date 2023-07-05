// Original file: protos/args/ps_args_redis_streams.proto

export const OffsetStart = {
  LATEST: 'LATEST',
  OLDEST: 'OLDEST',
} as const;

export type OffsetStart =
  | 'LATEST'
  | 0
  | 'OLDEST'
  | 1

export type OffsetStart__Output = typeof OffsetStart[keyof typeof OffsetStart]
