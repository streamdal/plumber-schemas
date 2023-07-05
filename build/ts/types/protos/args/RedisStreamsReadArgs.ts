// Original file: ../../protos/args/ps_args_redis_streams.proto

import type { CreateConsumerConfig as _protos_args_CreateConsumerConfig, CreateConsumerConfig__Output as _protos_args_CreateConsumerConfig__Output } from '../../protos/args/CreateConsumerConfig';

export interface RedisStreamsReadArgs {
  'streams'?: (string)[];
  'consumerGroup'?: (string);
  'consumerName'?: (string);
  'count'?: (number);
  'createConsumerConfig'?: (_protos_args_CreateConsumerConfig | null);
}

export interface RedisStreamsReadArgs__Output {
  'streams': (string)[];
  'consumerGroup': (string);
  'consumerName': (string);
  'count': (number);
  'createConsumerConfig': (_protos_args_CreateConsumerConfig__Output | null);
}
