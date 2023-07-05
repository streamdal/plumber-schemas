// Original file: ../../protos/args/ps_args_kafka.proto

import type { Long } from '@grpc/proto-loader';

export interface KafkaReadArgs {
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
  'includeOffsetInfo'?: (boolean);
  'lag'?: (boolean);
  'lagConsumerGroup'?: (string);
}

export interface KafkaReadArgs__Output {
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
  'includeOffsetInfo': (boolean);
  'lag': (boolean);
  'lagConsumerGroup': (string);
}
