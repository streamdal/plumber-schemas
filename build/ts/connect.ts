import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  protos: {
    Connection: MessageTypeDefinition
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
    common: {
      Auth: MessageTypeDefinition
      Code: EnumTypeDefinition
      Status: MessageTypeDefinition
    }
    conns: {
      Kafka: MessageTypeDefinition
      SASLType: EnumTypeDefinition
    }
  }
}

