// Original file: protos/opts/ps_opts_connection.proto

import type { KafkaConn as _protos_args_KafkaConn, KafkaConn__Output as _protos_args_KafkaConn__Output } from '../../protos/args/KafkaConn';
import type { ActiveMQConn as _protos_args_ActiveMQConn, ActiveMQConn__Output as _protos_args_ActiveMQConn__Output } from '../../protos/args/ActiveMQConn';
import type { AWSSQSConn as _protos_args_AWSSQSConn, AWSSQSConn__Output as _protos_args_AWSSQSConn__Output } from '../../protos/args/AWSSQSConn';
import type { AWSSNSConn as _protos_args_AWSSNSConn, AWSSNSConn__Output as _protos_args_AWSSNSConn__Output } from '../../protos/args/AWSSNSConn';
import type { MongoConn as _protos_args_MongoConn, MongoConn__Output as _protos_args_MongoConn__Output } from '../../protos/args/MongoConn';
import type { NatsConn as _protos_args_NatsConn, NatsConn__Output as _protos_args_NatsConn__Output } from '../../protos/args/NatsConn';
import type { NatsStreamingConn as _protos_args_NatsStreamingConn, NatsStreamingConn__Output as _protos_args_NatsStreamingConn__Output } from '../../protos/args/NatsStreamingConn';
import type { NSQConn as _protos_args_NSQConn, NSQConn__Output as _protos_args_NSQConn__Output } from '../../protos/args/NSQConn';
import type { PostgresConn as _protos_args_PostgresConn, PostgresConn__Output as _protos_args_PostgresConn__Output } from '../../protos/args/PostgresConn';
import type { PulsarConn as _protos_args_PulsarConn, PulsarConn__Output as _protos_args_PulsarConn__Output } from '../../protos/args/PulsarConn';
import type { RabbitConn as _protos_args_RabbitConn, RabbitConn__Output as _protos_args_RabbitConn__Output } from '../../protos/args/RabbitConn';
import type { RabbitStreamsConn as _protos_args_RabbitStreamsConn, RabbitStreamsConn__Output as _protos_args_RabbitStreamsConn__Output } from '../../protos/args/RabbitStreamsConn';
import type { RedisPubSubConn as _protos_args_RedisPubSubConn, RedisPubSubConn__Output as _protos_args_RedisPubSubConn__Output } from '../../protos/args/RedisPubSubConn';
import type { RedisStreamsConn as _protos_args_RedisStreamsConn, RedisStreamsConn__Output as _protos_args_RedisStreamsConn__Output } from '../../protos/args/RedisStreamsConn';
import type { AzureEventHubConn as _protos_args_AzureEventHubConn, AzureEventHubConn__Output as _protos_args_AzureEventHubConn__Output } from '../../protos/args/AzureEventHubConn';
import type { AzureServiceBusConn as _protos_args_AzureServiceBusConn, AzureServiceBusConn__Output as _protos_args_AzureServiceBusConn__Output } from '../../protos/args/AzureServiceBusConn';
import type { MQTTConn as _protos_args_MQTTConn, MQTTConn__Output as _protos_args_MQTTConn__Output } from '../../protos/args/MQTTConn';
import type { KubeMQQueueConn as _protos_args_KubeMQQueueConn, KubeMQQueueConn__Output as _protos_args_KubeMQQueueConn__Output } from '../../protos/args/KubeMQQueueConn';
import type { GCPPubSubConn as _protos_args_GCPPubSubConn, GCPPubSubConn__Output as _protos_args_GCPPubSubConn__Output } from '../../protos/args/GCPPubSubConn';
import type { NatsJetstreamConn as _protos_args_NatsJetstreamConn, NatsJetstreamConn__Output as _protos_args_NatsJetstreamConn__Output } from '../../protos/args/NatsJetstreamConn';
import type { AWSKinesisConn as _protos_args_AWSKinesisConn, AWSKinesisConn__Output as _protos_args_AWSKinesisConn__Output } from '../../protos/args/AWSKinesisConn';
import type { MemphisConn as _protos_args_MemphisConn, MemphisConn__Output as _protos_args_MemphisConn__Output } from '../../protos/args/MemphisConn';

export interface ConnectionOptions {
  'name'?: (string);
  'notes'?: (string);
  'kafka'?: (_protos_args_KafkaConn | null);
  'activeMq'?: (_protos_args_ActiveMQConn | null);
  'awsSqs'?: (_protos_args_AWSSQSConn | null);
  'awsSns'?: (_protos_args_AWSSNSConn | null);
  'mongo'?: (_protos_args_MongoConn | null);
  'nats'?: (_protos_args_NatsConn | null);
  'natsStreaming'?: (_protos_args_NatsStreamingConn | null);
  'nsq'?: (_protos_args_NSQConn | null);
  'postgres'?: (_protos_args_PostgresConn | null);
  'pulsar'?: (_protos_args_PulsarConn | null);
  'rabbit'?: (_protos_args_RabbitConn | null);
  'rabbitStreams'?: (_protos_args_RabbitStreamsConn | null);
  'redisPubsub'?: (_protos_args_RedisPubSubConn | null);
  'redisStreams'?: (_protos_args_RedisStreamsConn | null);
  'azureEventHub'?: (_protos_args_AzureEventHubConn | null);
  'azureServiceBus'?: (_protos_args_AzureServiceBusConn | null);
  'mqtt'?: (_protos_args_MQTTConn | null);
  'kubemqQueue'?: (_protos_args_KubeMQQueueConn | null);
  'gcpPubsub'?: (_protos_args_GCPPubSubConn | null);
  'natsJetstream'?: (_protos_args_NatsJetstreamConn | null);
  'awsKinesis'?: (_protos_args_AWSKinesisConn | null);
  'memphis'?: (_protos_args_MemphisConn | null);
  '_id'?: (string);
  'conn'?: "kafka"|"activeMq"|"awsSqs"|"awsSns"|"mongo"|"nats"|"natsStreaming"|"nsq"|"postgres"|"pulsar"|"rabbit"|"rabbitStreams"|"redisPubsub"|"redisStreams"|"azureEventHub"|"azureServiceBus"|"mqtt"|"kubemqQueue"|"gcpPubsub"|"natsJetstream"|"awsKinesis"|"memphis";
}

export interface ConnectionOptions__Output {
  'name': (string);
  'notes': (string);
  'kafka'?: (_protos_args_KafkaConn__Output | null);
  'activeMq'?: (_protos_args_ActiveMQConn__Output | null);
  'awsSqs'?: (_protos_args_AWSSQSConn__Output | null);
  'awsSns'?: (_protos_args_AWSSNSConn__Output | null);
  'mongo'?: (_protos_args_MongoConn__Output | null);
  'nats'?: (_protos_args_NatsConn__Output | null);
  'natsStreaming'?: (_protos_args_NatsStreamingConn__Output | null);
  'nsq'?: (_protos_args_NSQConn__Output | null);
  'postgres'?: (_protos_args_PostgresConn__Output | null);
  'pulsar'?: (_protos_args_PulsarConn__Output | null);
  'rabbit'?: (_protos_args_RabbitConn__Output | null);
  'rabbitStreams'?: (_protos_args_RabbitStreamsConn__Output | null);
  'redisPubsub'?: (_protos_args_RedisPubSubConn__Output | null);
  'redisStreams'?: (_protos_args_RedisStreamsConn__Output | null);
  'azureEventHub'?: (_protos_args_AzureEventHubConn__Output | null);
  'azureServiceBus'?: (_protos_args_AzureServiceBusConn__Output | null);
  'mqtt'?: (_protos_args_MQTTConn__Output | null);
  'kubemqQueue'?: (_protos_args_KubeMQQueueConn__Output | null);
  'gcpPubsub'?: (_protos_args_GCPPubSubConn__Output | null);
  'natsJetstream'?: (_protos_args_NatsJetstreamConn__Output | null);
  'awsKinesis'?: (_protos_args_AWSKinesisConn__Output | null);
  'memphis'?: (_protos_args_MemphisConn__Output | null);
  '_id': (string);
  'conn': "kafka"|"activeMq"|"awsSqs"|"awsSns"|"mongo"|"nats"|"natsStreaming"|"nsq"|"postgres"|"pulsar"|"rabbit"|"rabbitStreams"|"redisPubsub"|"redisStreams"|"azureEventHub"|"azureServiceBus"|"mqtt"|"kubemqQueue"|"gcpPubsub"|"natsJetstream"|"awsKinesis"|"memphis";
}
