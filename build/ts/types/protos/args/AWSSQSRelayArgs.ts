// Original file: protos/args/ps_args_aws_sqs.proto

import type { Long } from '@grpc/proto-loader';

export interface AWSSQSRelayArgs {
  'queueName'?: (string);
  'remoteAccountId'?: (string);
  'maxNumMessages'?: (number | string | Long);
  'receiveRequestAttemptId'?: (string);
  'autoDelete'?: (boolean);
  'waitTimeSeconds'?: (number | string | Long);
}

export interface AWSSQSRelayArgs__Output {
  'queueName': (string);
  'remoteAccountId': (string);
  'maxNumMessages': (string);
  'receiveRequestAttemptId': (string);
  'autoDelete': (boolean);
  'waitTimeSeconds': (string);
}
