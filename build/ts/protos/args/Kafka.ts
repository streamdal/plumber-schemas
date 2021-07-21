// Original file: protos/args/kafka.proto

import type { Long } from '@grpc/proto-loader';

export interface Kafka {
  'topics'?: (string)[];
  'read_offset'?: (number | string | Long);
  'use_consumer_group'?: (boolean);
  'consumer_group_name'?: (string);
  'max_wait_seconds'?: (number);
  'min_bytes'?: (number);
  'max_bytes'?: (number);
  'commit_interval_seconds'?: (number);
  'rebalance_timeout_seconds'?: (number);
}

export interface Kafka__Output {
  'topics': (string)[];
  'read_offset': (number);
  'use_consumer_group': (boolean);
  'consumer_group_name': (string);
  'max_wait_seconds': (number);
  'min_bytes': (number);
  'max_bytes': (number);
  'commit_interval_seconds': (number);
  'rebalance_timeout_seconds': (number);
}
