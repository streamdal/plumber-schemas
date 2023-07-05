// Original file: ../../protos/args/ps_args_aws_kinesis.proto

import type { Long } from '@grpc/proto-loader';

export interface AWSKinesisReadArgs {
  'stream'?: (string);
  'shard'?: (string);
  'maxRecords'?: (number | string | Long);
  'readFromTimestamp'?: (number | string | Long);
  'readSequenceNumber'?: (string);
  'readAfterSequenceNumber'?: (string);
  'readTrimHorizon'?: (boolean);
  'readLatest'?: (boolean);
}

export interface AWSKinesisReadArgs__Output {
  'stream': (string);
  'shard': (string);
  'maxRecords': (string);
  'readFromTimestamp': (string);
  'readSequenceNumber': (string);
  'readAfterSequenceNumber': (string);
  'readTrimHorizon': (boolean);
  'readLatest': (boolean);
}
