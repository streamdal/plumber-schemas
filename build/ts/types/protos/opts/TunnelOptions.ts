// Original file: ../../protos/opts/ps_opts_tunnel.proto

import type { TunnelGroupKafkaOptions as _protos_opts_TunnelGroupKafkaOptions, TunnelGroupKafkaOptions__Output as _protos_opts_TunnelGroupKafkaOptions__Output } from '../../protos/opts/TunnelGroupKafkaOptions';
import type { TunnelGroupActiveMQOptions as _protos_opts_TunnelGroupActiveMQOptions, TunnelGroupActiveMQOptions__Output as _protos_opts_TunnelGroupActiveMQOptions__Output } from '../../protos/opts/TunnelGroupActiveMQOptions';
import type { TunnelGroupAWSSQSOptions as _protos_opts_TunnelGroupAWSSQSOptions, TunnelGroupAWSSQSOptions__Output as _protos_opts_TunnelGroupAWSSQSOptions__Output } from '../../protos/opts/TunnelGroupAWSSQSOptions';
import type { TunnelGroupAWSSNSOptions as _protos_opts_TunnelGroupAWSSNSOptions, TunnelGroupAWSSNSOptions__Output as _protos_opts_TunnelGroupAWSSNSOptions__Output } from '../../protos/opts/TunnelGroupAWSSNSOptions';
import type { TunnelGroupNatsOptions as _protos_opts_TunnelGroupNatsOptions, TunnelGroupNatsOptions__Output as _protos_opts_TunnelGroupNatsOptions__Output } from '../../protos/opts/TunnelGroupNatsOptions';
import type { TunnelGroupNatsStreamingOptions as _protos_opts_TunnelGroupNatsStreamingOptions, TunnelGroupNatsStreamingOptions__Output as _protos_opts_TunnelGroupNatsStreamingOptions__Output } from '../../protos/opts/TunnelGroupNatsStreamingOptions';
import type { TunnelGroupNSQOptions as _protos_opts_TunnelGroupNSQOptions, TunnelGroupNSQOptions__Output as _protos_opts_TunnelGroupNSQOptions__Output } from '../../protos/opts/TunnelGroupNSQOptions';
import type { TunnelGroupRabbitOptions as _protos_opts_TunnelGroupRabbitOptions, TunnelGroupRabbitOptions__Output as _protos_opts_TunnelGroupRabbitOptions__Output } from '../../protos/opts/TunnelGroupRabbitOptions';
import type { TunnelGroupMQTTOptions as _protos_opts_TunnelGroupMQTTOptions, TunnelGroupMQTTOptions__Output as _protos_opts_TunnelGroupMQTTOptions__Output } from '../../protos/opts/TunnelGroupMQTTOptions';
import type { TunnelGroupAzureServiceBusOptions as _protos_opts_TunnelGroupAzureServiceBusOptions, TunnelGroupAzureServiceBusOptions__Output as _protos_opts_TunnelGroupAzureServiceBusOptions__Output } from '../../protos/opts/TunnelGroupAzureServiceBusOptions';
import type { TunnelGroupAzureEventHubOptions as _protos_opts_TunnelGroupAzureEventHubOptions, TunnelGroupAzureEventHubOptions__Output as _protos_opts_TunnelGroupAzureEventHubOptions__Output } from '../../protos/opts/TunnelGroupAzureEventHubOptions';
import type { TunnelGroupGCPPubSubOptions as _protos_opts_TunnelGroupGCPPubSubOptions, TunnelGroupGCPPubSubOptions__Output as _protos_opts_TunnelGroupGCPPubSubOptions__Output } from '../../protos/opts/TunnelGroupGCPPubSubOptions';
import type { TunnelGroupKubeMQQueueOptions as _protos_opts_TunnelGroupKubeMQQueueOptions, TunnelGroupKubeMQQueueOptions__Output as _protos_opts_TunnelGroupKubeMQQueueOptions__Output } from '../../protos/opts/TunnelGroupKubeMQQueueOptions';
import type { TunnelGroupRedisPubSubOptions as _protos_opts_TunnelGroupRedisPubSubOptions, TunnelGroupRedisPubSubOptions__Output as _protos_opts_TunnelGroupRedisPubSubOptions__Output } from '../../protos/opts/TunnelGroupRedisPubSubOptions';
import type { TunnelGroupRedisStreamsOptions as _protos_opts_TunnelGroupRedisStreamsOptions, TunnelGroupRedisStreamsOptions__Output as _protos_opts_TunnelGroupRedisStreamsOptions__Output } from '../../protos/opts/TunnelGroupRedisStreamsOptions';
import type { TunnelGroupPulsarOptions as _protos_opts_TunnelGroupPulsarOptions, TunnelGroupPulsarOptions__Output as _protos_opts_TunnelGroupPulsarOptions__Output } from '../../protos/opts/TunnelGroupPulsarOptions';
import type { TunnelGroupRabbitStreamsOptions as _protos_opts_TunnelGroupRabbitStreamsOptions, TunnelGroupRabbitStreamsOptions__Output as _protos_opts_TunnelGroupRabbitStreamsOptions__Output } from '../../protos/opts/TunnelGroupRabbitStreamsOptions';
import type { TunnelGroupNatsJetstreamOptions as _protos_opts_TunnelGroupNatsJetstreamOptions, TunnelGroupNatsJetstreamOptions__Output as _protos_opts_TunnelGroupNatsJetstreamOptions__Output } from '../../protos/opts/TunnelGroupNatsJetstreamOptions';
import type { TunnelGroupAWSKinesisOptions as _protos_opts_TunnelGroupAWSKinesisOptions, TunnelGroupAWSKinesisOptions__Output as _protos_opts_TunnelGroupAWSKinesisOptions__Output } from '../../protos/opts/TunnelGroupAWSKinesisOptions';
import type { TunnelGroupMemphisOptions as _protos_opts_TunnelGroupMemphisOptions, TunnelGroupMemphisOptions__Output as _protos_opts_TunnelGroupMemphisOptions__Output } from '../../protos/opts/TunnelGroupMemphisOptions';

export interface TunnelOptions {
  'apiToken'?: (string);
  'connectionId'?: (string);
  '_grpcAddress'?: (string);
  '_grpcTimeoutSeconds'?: (number);
  '_grpcInsecure'?: (boolean);
  'name'?: (string);
  'kafka'?: (_protos_opts_TunnelGroupKafkaOptions | null);
  'activemq'?: (_protos_opts_TunnelGroupActiveMQOptions | null);
  'awsSqs'?: (_protos_opts_TunnelGroupAWSSQSOptions | null);
  'awsSns'?: (_protos_opts_TunnelGroupAWSSNSOptions | null);
  'nats'?: (_protos_opts_TunnelGroupNatsOptions | null);
  'natsStreaming'?: (_protos_opts_TunnelGroupNatsStreamingOptions | null);
  'nsq'?: (_protos_opts_TunnelGroupNSQOptions | null);
  'rabbit'?: (_protos_opts_TunnelGroupRabbitOptions | null);
  'mqtt'?: (_protos_opts_TunnelGroupMQTTOptions | null);
  'azureServiceBus'?: (_protos_opts_TunnelGroupAzureServiceBusOptions | null);
  'azureEventHub'?: (_protos_opts_TunnelGroupAzureEventHubOptions | null);
  'gcpPubsub'?: (_protos_opts_TunnelGroupGCPPubSubOptions | null);
  'kubemqQueue'?: (_protos_opts_TunnelGroupKubeMQQueueOptions | null);
  'redisPubsub'?: (_protos_opts_TunnelGroupRedisPubSubOptions | null);
  'redisStreams'?: (_protos_opts_TunnelGroupRedisStreamsOptions | null);
  'pulsar'?: (_protos_opts_TunnelGroupPulsarOptions | null);
  'rabbitStreams'?: (_protos_opts_TunnelGroupRabbitStreamsOptions | null);
  'natsJetstream'?: (_protos_opts_TunnelGroupNatsJetstreamOptions | null);
  'awsKinesis'?: (_protos_opts_TunnelGroupAWSKinesisOptions | null);
  'memphis'?: (_protos_opts_TunnelGroupMemphisOptions | null);
  '_tunnelId'?: (string);
  '_active'?: (boolean);
}

export interface TunnelOptions__Output {
  'apiToken': (string);
  'connectionId': (string);
  '_grpcAddress': (string);
  '_grpcTimeoutSeconds': (number);
  '_grpcInsecure': (boolean);
  'name': (string);
  'kafka': (_protos_opts_TunnelGroupKafkaOptions__Output | null);
  'activemq': (_protos_opts_TunnelGroupActiveMQOptions__Output | null);
  'awsSqs': (_protos_opts_TunnelGroupAWSSQSOptions__Output | null);
  'awsSns': (_protos_opts_TunnelGroupAWSSNSOptions__Output | null);
  'nats': (_protos_opts_TunnelGroupNatsOptions__Output | null);
  'natsStreaming': (_protos_opts_TunnelGroupNatsStreamingOptions__Output | null);
  'nsq': (_protos_opts_TunnelGroupNSQOptions__Output | null);
  'rabbit': (_protos_opts_TunnelGroupRabbitOptions__Output | null);
  'mqtt': (_protos_opts_TunnelGroupMQTTOptions__Output | null);
  'azureServiceBus': (_protos_opts_TunnelGroupAzureServiceBusOptions__Output | null);
  'azureEventHub': (_protos_opts_TunnelGroupAzureEventHubOptions__Output | null);
  'gcpPubsub': (_protos_opts_TunnelGroupGCPPubSubOptions__Output | null);
  'kubemqQueue': (_protos_opts_TunnelGroupKubeMQQueueOptions__Output | null);
  'redisPubsub': (_protos_opts_TunnelGroupRedisPubSubOptions__Output | null);
  'redisStreams': (_protos_opts_TunnelGroupRedisStreamsOptions__Output | null);
  'pulsar': (_protos_opts_TunnelGroupPulsarOptions__Output | null);
  'rabbitStreams': (_protos_opts_TunnelGroupRabbitStreamsOptions__Output | null);
  'natsJetstream': (_protos_opts_TunnelGroupNatsJetstreamOptions__Output | null);
  'awsKinesis': (_protos_opts_TunnelGroupAWSKinesisOptions__Output | null);
  'memphis': (_protos_opts_TunnelGroupMemphisOptions__Output | null);
  '_tunnelId': (string);
  '_active': (boolean);
}
