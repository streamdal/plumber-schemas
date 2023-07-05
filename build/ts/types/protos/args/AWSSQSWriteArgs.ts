// Original file: protos/args/ps_args_aws_sqs.proto

import type { Long } from '@grpc/proto-loader';

export interface AWSSQSWriteArgs {
  'queueName'?: (string);
  'remoteAccountId'?: (string);
  'delaySeconds'?: (number | string | Long);
  'attributes'?: ({[key: string]: string});
  'messageGroupId'?: (string);
  'messageDeduplicationId'?: (string);
}

export interface AWSSQSWriteArgs__Output {
  'queueName': (string);
  'remoteAccountId': (string);
  'delaySeconds': (string);
  'attributes': ({[key: string]: string});
  'messageGroupId': (string);
  'messageDeduplicationId': (string);
}
