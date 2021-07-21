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
    Relay: MessageTypeDefinition
    StopRelayRequest: MessageTypeDefinition
    StopRelayResponse: MessageTypeDefinition
    UpdateRelayRequest: MessageTypeDefinition
    UpdateRelayResponse: MessageTypeDefinition
    args: {
      Kafka: MessageTypeDefinition
    }
    common: {
      Auth: MessageTypeDefinition
      Code: EnumTypeDefinition
      Status: MessageTypeDefinition
    }
  }
}

