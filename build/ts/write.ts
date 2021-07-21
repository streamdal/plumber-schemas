import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  protos: {
    WriteRecord: MessageTypeDefinition
    WriteRequest: MessageTypeDefinition
    WriteResponse: MessageTypeDefinition
    common: {
      Auth: MessageTypeDefinition
      Code: EnumTypeDefinition
      Status: MessageTypeDefinition
    }
    records: {
      Kafka: MessageTypeDefinition
      KafkaHeader: MessageTypeDefinition
    }
  }
}

