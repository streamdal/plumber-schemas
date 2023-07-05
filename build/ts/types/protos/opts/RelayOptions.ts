// Original file: ../../protos/opts/ps_opts_relay.proto

import type { RelayGroupKafkaOptions as _protos_opts_RelayGroupKafkaOptions, RelayGroupKafkaOptions__Output as _protos_opts_RelayGroupKafkaOptions__Output } from '../../protos/opts/RelayGroupKafkaOptions';
import type { RelayGroupAWSSQSOptions as _protos_opts_RelayGroupAWSSQSOptions, RelayGroupAWSSQSOptions__Output as _protos_opts_RelayGroupAWSSQSOptions__Output } from '../../protos/opts/RelayGroupAWSSQSOptions';
import type { RelayGroupMongoOptions as _protos_opts_RelayGroupMongoOptions, RelayGroupMongoOptions__Output as _protos_opts_RelayGroupMongoOptions__Output } from '../../protos/opts/RelayGroupMongoOptions';
import type { RelayGroupNSQOptions as _protos_opts_RelayGroupNSQOptions, RelayGroupNSQOptions__Output as _protos_opts_RelayGroupNSQOptions__Output } from '../../protos/opts/RelayGroupNSQOptions';
import type { RelayGroupRabbitOptions as _protos_opts_RelayGroupRabbitOptions, RelayGroupRabbitOptions__Output as _protos_opts_RelayGroupRabbitOptions__Output } from '../../protos/opts/RelayGroupRabbitOptions';
import type { RelayGroupMQTTOptions as _protos_opts_RelayGroupMQTTOptions, RelayGroupMQTTOptions__Output as _protos_opts_RelayGroupMQTTOptions__Output } from '../../protos/opts/RelayGroupMQTTOptions';
import type { RelayGroupAzureServiceBusOptions as _protos_opts_RelayGroupAzureServiceBusOptions, RelayGroupAzureServiceBusOptions__Output as _protos_opts_RelayGroupAzureServiceBusOptions__Output } from '../../protos/opts/RelayGroupAzureServiceBusOptions';
import type { RelayGroupGCPPubSubOptions as _protos_opts_RelayGroupGCPPubSubOptions, RelayGroupGCPPubSubOptions__Output as _protos_opts_RelayGroupGCPPubSubOptions__Output } from '../../protos/opts/RelayGroupGCPPubSubOptions';
import type { RelayGroupKubeMQQueueOptions as _protos_opts_RelayGroupKubeMQQueueOptions, RelayGroupKubeMQQueueOptions__Output as _protos_opts_RelayGroupKubeMQQueueOptions__Output } from '../../protos/opts/RelayGroupKubeMQQueueOptions';
import type { RelayGroupRedisPubSubOptions as _protos_opts_RelayGroupRedisPubSubOptions, RelayGroupRedisPubSubOptions__Output as _protos_opts_RelayGroupRedisPubSubOptions__Output } from '../../protos/opts/RelayGroupRedisPubSubOptions';
import type { RelayGroupRedisStreamsOptions as _protos_opts_RelayGroupRedisStreamsOptions, RelayGroupRedisStreamsOptions__Output as _protos_opts_RelayGroupRedisStreamsOptions__Output } from '../../protos/opts/RelayGroupRedisStreamsOptions';
import type { RelayGroupPostgresOptions as _protos_opts_RelayGroupPostgresOptions, RelayGroupPostgresOptions__Output as _protos_opts_RelayGroupPostgresOptions__Output } from '../../protos/opts/RelayGroupPostgresOptions';
import type { RelayGroupNatsOptions as _protos_opts_RelayGroupNatsOptions, RelayGroupNatsOptions__Output as _protos_opts_RelayGroupNatsOptions__Output } from '../../protos/opts/RelayGroupNatsOptions';
import type { RelayGroupNatsStreamingOptions as _protos_opts_RelayGroupNatsStreamingOptions, RelayGroupNatsStreamingOptions__Output as _protos_opts_RelayGroupNatsStreamingOptions__Output } from '../../protos/opts/RelayGroupNatsStreamingOptions';
import type { RelayGroupNatsJetStreamOptions as _protos_opts_RelayGroupNatsJetStreamOptions, RelayGroupNatsJetStreamOptions__Output as _protos_opts_RelayGroupNatsJetStreamOptions__Output } from '../../protos/opts/RelayGroupNatsJetStreamOptions';
import type { RelayCLIOptions as _protos_opts_RelayCLIOptions, RelayCLIOptions__Output as _protos_opts_RelayCLIOptions__Output } from '../../protos/opts/RelayCLIOptions';

export interface RelayOptions {
  'collectionToken'?: (string);
  'batchSize'?: (number);
  'batchMaxRetry'?: (number);
  'connectionId'?: (string);
  'numWorkers'?: (number);
  'statsEnable'?: (boolean);
  'statsReportIntervalSec'?: (number);
  'deadLetter'?: (boolean);
  'kafka'?: (_protos_opts_RelayGroupKafkaOptions | null);
  'awsSqs'?: (_protos_opts_RelayGroupAWSSQSOptions | null);
  'mongo'?: (_protos_opts_RelayGroupMongoOptions | null);
  'nsq'?: (_protos_opts_RelayGroupNSQOptions | null);
  'rabbit'?: (_protos_opts_RelayGroupRabbitOptions | null);
  'mqtt'?: (_protos_opts_RelayGroupMQTTOptions | null);
  'azureServiceBus'?: (_protos_opts_RelayGroupAzureServiceBusOptions | null);
  'gcpPubsub'?: (_protos_opts_RelayGroupGCPPubSubOptions | null);
  'kubemqQueue'?: (_protos_opts_RelayGroupKubeMQQueueOptions | null);
  'redisPubsub'?: (_protos_opts_RelayGroupRedisPubSubOptions | null);
  'redisStreams'?: (_protos_opts_RelayGroupRedisStreamsOptions | null);
  'postgres'?: (_protos_opts_RelayGroupPostgresOptions | null);
  'nats'?: (_protos_opts_RelayGroupNatsOptions | null);
  'natsStreaming'?: (_protos_opts_RelayGroupNatsStreamingOptions | null);
  'natsJetstream'?: (_protos_opts_RelayGroupNatsJetStreamOptions | null);
  '_streamdalGrpcAddress'?: (string);
  '_streamdalGrpcDisableTls'?: (boolean);
  '_streamdalGrpcTimeoutSeconds'?: (number);
  '_relayId'?: (string);
  '_cliOptions'?: (_protos_opts_RelayCLIOptions | null);
  '_active'?: (boolean);
}

export interface RelayOptions__Output {
  'collectionToken': (string);
  'batchSize': (number);
  'batchMaxRetry': (number);
  'connectionId': (string);
  'numWorkers': (number);
  'statsEnable': (boolean);
  'statsReportIntervalSec': (number);
  'deadLetter': (boolean);
  'kafka': (_protos_opts_RelayGroupKafkaOptions__Output | null);
  'awsSqs': (_protos_opts_RelayGroupAWSSQSOptions__Output | null);
  'mongo': (_protos_opts_RelayGroupMongoOptions__Output | null);
  'nsq': (_protos_opts_RelayGroupNSQOptions__Output | null);
  'rabbit': (_protos_opts_RelayGroupRabbitOptions__Output | null);
  'mqtt': (_protos_opts_RelayGroupMQTTOptions__Output | null);
  'azureServiceBus': (_protos_opts_RelayGroupAzureServiceBusOptions__Output | null);
  'gcpPubsub': (_protos_opts_RelayGroupGCPPubSubOptions__Output | null);
  'kubemqQueue': (_protos_opts_RelayGroupKubeMQQueueOptions__Output | null);
  'redisPubsub': (_protos_opts_RelayGroupRedisPubSubOptions__Output | null);
  'redisStreams': (_protos_opts_RelayGroupRedisStreamsOptions__Output | null);
  'postgres': (_protos_opts_RelayGroupPostgresOptions__Output | null);
  'nats': (_protos_opts_RelayGroupNatsOptions__Output | null);
  'natsStreaming': (_protos_opts_RelayGroupNatsStreamingOptions__Output | null);
  'natsJetstream': (_protos_opts_RelayGroupNatsJetStreamOptions__Output | null);
  '_streamdalGrpcAddress': (string);
  '_streamdalGrpcDisableTls': (boolean);
  '_streamdalGrpcTimeoutSeconds': (number);
  '_relayId': (string);
  '_cliOptions': (_protos_opts_RelayCLIOptions__Output | null);
  '_active': (boolean);
}
