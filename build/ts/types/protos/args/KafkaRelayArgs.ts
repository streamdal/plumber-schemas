// Original file: protos/args/ps_args_kafka.proto

import type { Long } from '@grpc/proto-loader';

export interface KafkaRelayArgs {
  'topics'?: (string)[];
  'readOffset'?: (number | string | Long);
  'useConsumerGroup'?: (boolean);
  'consumerGroupName'?: (string);
  'maxWaitSeconds'?: (number);
  'minBytes'?: (number);
  'maxBytes'?: (number);
  'commitIntervalSeconds'?: (number);
  'rebalanceTimeoutSeconds'?: (number);
  'queueCapacity'?: (number);
}

export interface KafkaRelayArgs__Output {
  'topics': (string)[];
  'readOffset': (string);
  'useConsumerGroup': (boolean);
  'consumerGroupName': (string);
  'maxWaitSeconds': (number);
  'minBytes': (number);
  'maxBytes': (number);
  'commitIntervalSeconds': (number);
  'rebalanceTimeoutSeconds': (number);
  'queueCapacity': (number);
}
