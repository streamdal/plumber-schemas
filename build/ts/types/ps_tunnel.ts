import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  protos: {
    CreateTunnelRequest: MessageTypeDefinition
    CreateTunnelResponse: MessageTypeDefinition
    DeleteTunnelRequest: MessageTypeDefinition
    DeleteTunnelResponse: MessageTypeDefinition
    GetAllTunnelsRequest: MessageTypeDefinition
    GetAllTunnelsResponse: MessageTypeDefinition
    GetTunnelRequest: MessageTypeDefinition
    GetTunnelResponse: MessageTypeDefinition
    ResumeTunnelRequest: MessageTypeDefinition
    ResumeTunnelResponse: MessageTypeDefinition
    StopTunnelRequest: MessageTypeDefinition
    StopTunnelResponse: MessageTypeDefinition
    UpdateTunnelRequest: MessageTypeDefinition
    UpdateTunnelResponse: MessageTypeDefinition
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
      TunnelGroupAWSKinesisOptions: MessageTypeDefinition
      TunnelGroupAWSSNSOptions: MessageTypeDefinition
      TunnelGroupAWSSQSOptions: MessageTypeDefinition
      TunnelGroupActiveMQOptions: MessageTypeDefinition
      TunnelGroupAzureEventHubOptions: MessageTypeDefinition
      TunnelGroupAzureServiceBusOptions: MessageTypeDefinition
      TunnelGroupGCPPubSubOptions: MessageTypeDefinition
      TunnelGroupKafkaOptions: MessageTypeDefinition
      TunnelGroupKubeMQQueueOptions: MessageTypeDefinition
      TunnelGroupMQTTOptions: MessageTypeDefinition
      TunnelGroupMemphisOptions: MessageTypeDefinition
      TunnelGroupNSQOptions: MessageTypeDefinition
      TunnelGroupNatsJetstreamOptions: MessageTypeDefinition
      TunnelGroupNatsOptions: MessageTypeDefinition
      TunnelGroupNatsStreamingOptions: MessageTypeDefinition
      TunnelGroupPulsarOptions: MessageTypeDefinition
      TunnelGroupRabbitOptions: MessageTypeDefinition
      TunnelGroupRabbitStreamsOptions: MessageTypeDefinition
      TunnelGroupRedisPubSubOptions: MessageTypeDefinition
      TunnelGroupRedisStreamsOptions: MessageTypeDefinition
      TunnelOptions: MessageTypeDefinition
    }
  }
}

