// Original file: protos/args/ps_args_nats_jetstream.proto

import type { Long } from '@grpc/proto-loader';

export interface NatsJetstreamReadArgs {
  'stream'?: (string);
  'consumerName'?: (string);
  'createDurableConsumer'?: (boolean);
  'existingDurableConsumer'?: (boolean);
  'keepConsumer'?: (boolean);
  'consumerStartSequence'?: (number | string | Long);
  'consumerStartTime'?: (string);
  'consumerFilterSubject'?: (string);
}

export interface NatsJetstreamReadArgs__Output {
  'stream': (string);
  'consumerName': (string);
  'createDurableConsumer': (boolean);
  'existingDurableConsumer': (boolean);
  'keepConsumer': (boolean);
  'consumerStartSequence': (string);
  'consumerStartTime': (string);
  'consumerFilterSubject': (string);
}
