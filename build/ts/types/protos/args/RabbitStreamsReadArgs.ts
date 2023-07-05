// Original file: protos/args/ps_args_rabbit_streams.proto

import type { RabbitStreamsOffsetOptions as _protos_args_RabbitStreamsOffsetOptions, RabbitStreamsOffsetOptions__Output as _protos_args_RabbitStreamsOffsetOptions__Output } from '../../protos/args/RabbitStreamsOffsetOptions';

export interface RabbitStreamsReadArgs {
  'stream'?: (string);
  'declareStream'?: (boolean);
  'declareStreamSize'?: (string);
  'offsetOptions'?: (_protos_args_RabbitStreamsOffsetOptions | null);
}

export interface RabbitStreamsReadArgs__Output {
  'stream': (string);
  'declareStream': (boolean);
  'declareStreamSize': (string);
  'offsetOptions': (_protos_args_RabbitStreamsOffsetOptions__Output | null);
}
