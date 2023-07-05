// Original file: protos/args/ps_args_redis_streams.proto

import type { OffsetStart as _protos_args_OffsetStart, OffsetStart__Output as _protos_args_OffsetStart__Output } from '../../protos/args/OffsetStart';

export interface CreateConsumerConfig {
  'createStreams'?: (boolean);
  'recreateConsumerGroup'?: (boolean);
  'offsetStart'?: (_protos_args_OffsetStart);
}

export interface CreateConsumerConfig__Output {
  'createStreams': (boolean);
  'recreateConsumerGroup': (boolean);
  'offsetStart': (_protos_args_OffsetStart__Output);
}
