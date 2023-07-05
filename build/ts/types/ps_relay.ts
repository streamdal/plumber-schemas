import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  protos: {
    CreateRelayRequest: MessageTypeDefinition
    CreateRelayResponse: MessageTypeDefinition
    DeleteRelayRequest: MessageTypeDefinition
    DeleteRelayResponse: MessageTypeDefinition
    GetAllRelaysRequest: MessageTypeDefinition
    GetAllRelaysResponse: MessageTypeDefinition
    GetRelayRequest: MessageTypeDefinition
    GetRelayResponse: MessageTypeDefinition
    ResumeRelayRequest: MessageTypeDefinition
    ResumeRelayResponse: MessageTypeDefinition
    StopRelayRequest: MessageTypeDefinition
    StopRelayResponse: MessageTypeDefinition
    UpdateRelayRequest: MessageTypeDefinition
    UpdateRelayResponse: MessageTypeDefinition
    args: {
      AWSSQSConn: MessageTypeDefinition
      AWSSQSReadArgs: MessageTypeDefinition
      AWSSQSRelayArgs: MessageTypeDefinition
      AWSSQSWriteArgs: MessageTypeDefinition
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
      RabbitConn: MessageTypeDefinition
      RabbitReadArgs: MessageTypeDefinition
      RabbitWriteArgs: MessageTypeDefinition
      RedisPubSubConn: MessageTypeDefinition
      RedisPubSubReadArgs: MessageTypeDefinition
      RedisPubSubWriteArgs: MessageTypeDefinition
      RedisStreamsConn: MessageTypeDefinition
      RedisStreamsReadArgs: MessageTypeDefinition
      RedisStreamsWriteArgs: MessageTypeDefinition
      SASLType: EnumTypeDefinition
    }
    common: {
      Auth: MessageTypeDefinition
      Code: EnumTypeDefinition
      Foreman: MessageTypeDefinition
      SourceManager: MessageTypeDefinition
      Status: MessageTypeDefinition
    }
    opts: {
      RelayCLIOptions: MessageTypeDefinition
      RelayGroupAWSSQSOptions: MessageTypeDefinition
      RelayGroupAzureServiceBusOptions: MessageTypeDefinition
      RelayGroupGCPPubSubOptions: MessageTypeDefinition
      RelayGroupKafkaOptions: MessageTypeDefinition
      RelayGroupKubeMQQueueOptions: MessageTypeDefinition
      RelayGroupMQTTOptions: MessageTypeDefinition
      RelayGroupMongoOptions: MessageTypeDefinition
      RelayGroupNSQOptions: MessageTypeDefinition
      RelayGroupNatsJetStreamOptions: MessageTypeDefinition
      RelayGroupNatsOptions: MessageTypeDefinition
      RelayGroupNatsStreamingOptions: MessageTypeDefinition
      RelayGroupPostgresOptions: MessageTypeDefinition
      RelayGroupRabbitOptions: MessageTypeDefinition
      RelayGroupRedisPubSubOptions: MessageTypeDefinition
      RelayGroupRedisStreamsOptions: MessageTypeDefinition
      RelayOptions: MessageTypeDefinition
    }
  }
}

