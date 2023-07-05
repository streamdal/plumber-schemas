import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  protos: {
    CreateConnectionRequest: MessageTypeDefinition
    CreateConnectionResponse: MessageTypeDefinition
    DeleteConnectionRequest: MessageTypeDefinition
    DeleteConnectionResponse: MessageTypeDefinition
    GetAllConnectionsRequest: MessageTypeDefinition
    GetAllConnectionsResponse: MessageTypeDefinition
    GetConnectionRequest: MessageTypeDefinition
    GetConnectionResponse: MessageTypeDefinition
    TestConnectionRequest: MessageTypeDefinition
    TestConnectionResponse: MessageTypeDefinition
    UpdateConnectionRequest: MessageTypeDefinition
    UpdateConnectionResponse: MessageTypeDefinition
    args: {
      AWSKinesisConn: MessageTypeDefinition
      AWSKinesisReadArgs: MessageTypeDefinition
      AWSKinesisWriteArgs: MessageTypeDefinition
      AWSSNSConn: MessageTypeDefinition
      AWSSNSWriteArgs: MessageTypeDefinition
      AWSSQSConn: MessageTypeDefinition
      AWSSQSReadArgs: MessageTypeDefinition
      AWSSQSRelayArgs: MessageTypeDefinition
      AWSSQSWriteArgs: MessageTypeDefinition
      ActiveMQConn: MessageTypeDefinition
      ActiveMQReadArgs: MessageTypeDefinition
      ActiveMQWriteArgs: MessageTypeDefinition
      AzureEventHubConn: MessageTypeDefinition
      AzureEventHubReadArgs: MessageTypeDefinition
      AzureEventHubWriteArgs: MessageTypeDefinition
      AzureServiceBusConn: MessageTypeDefinition
      AzureServiceBusReadArgs: MessageTypeDefinition
      AzureServiceBusWriteArgs: MessageTypeDefinition
      CreateConsumerConfig: MessageTypeDefinition
      GCPPubSubConn: MessageTypeDefinition
      GCPPubSubReadArgs: MessageTypeDefinition
      GCPPubSubWriteArgs: MessageTypeDefinition
      KafkaConn: MessageTypeDefinition
      KafkaReadArgs: MessageTypeDefinition
      KafkaRelayArgs: MessageTypeDefinition
      KafkaWriteArgs: MessageTypeDefinition
      KubeMQQueueConn: MessageTypeDefinition
      KubeMQQueueReadArgs: MessageTypeDefinition
      KubeMQQueueWriteArgs: MessageTypeDefinition
      MQTTConn: MessageTypeDefinition
      MQTTQoSLevel: EnumTypeDefinition
      MQTTReadArgs: MessageTypeDefinition
      MQTTTLSOptions: MessageTypeDefinition
      MQTTWriteArgs: MessageTypeDefinition
      MemphisConn: MessageTypeDefinition
      MemphisReadArgs: MessageTypeDefinition
      MemphisWriteArgs: MessageTypeDefinition
      MongoConn: MessageTypeDefinition
      MongoReadArgs: MessageTypeDefinition
      NSQConn: MessageTypeDefinition
      NSQReadArgs: MessageTypeDefinition
      NSQWriteArgs: MessageTypeDefinition
      NatsConn: MessageTypeDefinition
      NatsJetstreamConn: MessageTypeDefinition
      NatsJetstreamReadArgs: MessageTypeDefinition
      NatsJetstreamTLSOptions: MessageTypeDefinition
      NatsJetstreamWriteArgs: MessageTypeDefinition
      NatsReadArgs: MessageTypeDefinition
      NatsStreamingConn: MessageTypeDefinition
      NatsStreamingReadArgs: MessageTypeDefinition
      NatsStreamingTLSOptions: MessageTypeDefinition
      NatsStreamingWriteArgs: MessageTypeDefinition
      NatsTLSOptions: MessageTypeDefinition
      NatsWriteArgs: MessageTypeDefinition
      OffsetStart: EnumTypeDefinition
      PostgresConn: MessageTypeDefinition
      PostgresReadArgs: MessageTypeDefinition
      PulsarConn: MessageTypeDefinition
      PulsarReadArgs: MessageTypeDefinition
      PulsarWriteArgs: MessageTypeDefinition
      RabbitConn: MessageTypeDefinition
      RabbitReadArgs: MessageTypeDefinition
      RabbitStreamsConn: MessageTypeDefinition
      RabbitStreamsOffsetOptions: MessageTypeDefinition
      RabbitStreamsReadArgs: MessageTypeDefinition
      RabbitStreamsWriteArgs: MessageTypeDefinition
      RabbitWriteArgs: MessageTypeDefinition
      RedisPubSubConn: MessageTypeDefinition
      RedisPubSubReadArgs: MessageTypeDefinition
      RedisPubSubWriteArgs: MessageTypeDefinition
      RedisStreamsConn: MessageTypeDefinition
      RedisStreamsReadArgs: MessageTypeDefinition
      RedisStreamsWriteArgs: MessageTypeDefinition
      SASLType: EnumTypeDefinition
      SubscriptionInitialPosition: EnumTypeDefinition
      SubscriptionType: EnumTypeDefinition
    }
    common: {
      Auth: MessageTypeDefinition
      Code: EnumTypeDefinition
      Foreman: MessageTypeDefinition
      SourceManager: MessageTypeDefinition
      Status: MessageTypeDefinition
    }
    opts: {
      ConnectionOptions: MessageTypeDefinition
    }
  }
}

