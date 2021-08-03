import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  protos: {
    CreateReadRequest: MessageTypeDefinition
    CreateReadResponse: MessageTypeDefinition
    DeleteReadRequest: MessageTypeDefinition
    DeleteReadResponse: MessageTypeDefinition
    GetAllReadsRequest: MessageTypeDefinition
    GetAllReadsResponse: MessageTypeDefinition
    Read: MessageTypeDefinition
    ReadOptions: MessageTypeDefinition
    ResumeReadRequest: MessageTypeDefinition
    ResumeReadResponse: MessageTypeDefinition
    SampleOptions: MessageTypeDefinition
    StartReadRequest: MessageTypeDefinition
    StartReadResponse: MessageTypeDefinition
    StopReadRequest: MessageTypeDefinition
    StopReadResponse: MessageTypeDefinition
    StreamReadRequest: MessageTypeDefinition
    StreamReadResponse: MessageTypeDefinition
    args: {
      Kafka: MessageTypeDefinition
    }
    common: {
      Auth: MessageTypeDefinition
      Code: EnumTypeDefinition
      Status: MessageTypeDefinition
    }
    encoding: {
      Avro: MessageTypeDefinition
      JSONSchema: MessageTypeDefinition
      Options: MessageTypeDefinition
      Protobuf: MessageTypeDefinition
      Type: EnumTypeDefinition
    }
    records: {
      Kafka: MessageTypeDefinition
      KafkaHeader: MessageTypeDefinition
      Message: MessageTypeDefinition
    }
  }
}

