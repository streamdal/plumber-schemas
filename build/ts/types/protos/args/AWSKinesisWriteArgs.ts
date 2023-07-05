// Original file: ../../protos/args/ps_args_aws_kinesis.proto


export interface AWSKinesisWriteArgs {
  'stream'?: (string);
  'partitionKey'?: (string);
  'sequenceNumber'?: (string);
}

export interface AWSKinesisWriteArgs__Output {
  'stream': (string);
  'partitionKey': (string);
  'sequenceNumber': (string);
}
