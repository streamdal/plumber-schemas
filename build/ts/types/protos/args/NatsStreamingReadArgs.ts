// Original file: ../../protos/args/ps_args_nats_streaming.proto


export interface NatsStreamingReadArgs {
  'channel'?: (string);
  'durableName'?: (string);
  'readLastAvailable'?: (boolean);
  'readSequenceNumber'?: (number);
  'readSince'?: (string);
  'readAll'?: (boolean);
}

export interface NatsStreamingReadArgs__Output {
  'channel': (string);
  'durableName': (string);
  'readLastAvailable': (boolean);
  'readSequenceNumber': (number);
  'readSince': (string);
  'readAll': (boolean);
}
