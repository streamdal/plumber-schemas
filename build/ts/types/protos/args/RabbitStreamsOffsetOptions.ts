// Original file: ../../protos/args/ps_args_rabbit_streams.proto

import type { Long } from '@grpc/proto-loader';

export interface RabbitStreamsOffsetOptions {
  'specificOffset'?: (number | string | Long);
  'lastOffset'?: (boolean);
  'lastConsumed'?: (boolean);
  'firstOffset'?: (boolean);
  'nextOffset'?: (boolean);
}

export interface RabbitStreamsOffsetOptions__Output {
  'specificOffset': (string);
  'lastOffset': (boolean);
  'lastConsumed': (boolean);
  'firstOffset': (boolean);
  'nextOffset': (boolean);
}
