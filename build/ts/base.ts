import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { PlumberServerClient as _protos_PlumberServerClient, PlumberServerDefinition as _protos_PlumberServerDefinition } from './protos/PlumberServer';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  protos: {
    Connection: MessageTypeDefinition
    CreateConnectionRequest: MessageTypeDefinition
    CreateConnectionResponse: MessageTypeDefinition
    CreateReadRequest: MessageTypeDefinition
    CreateReadResponse: MessageTypeDefinition
    CreateRelayRequest: MessageTypeDefinition
    CreateRelayResponse: MessageTypeDefinition
    DeleteConnectionRequest: MessageTypeDefinition
    DeleteConnectionResponse: MessageTypeDefinition
    DeleteReadRequest: MessageTypeDefinition
    DeleteReadResponse: MessageTypeDefinition
    DeleteRelayRequest: MessageTypeDefinition
    DeleteRelayResponse: MessageTypeDefinition
    GetAllConnectionsRequest: MessageTypeDefinition
    GetAllConnectionsResponse: MessageTypeDefinition
    GetAllReadsRequest: MessageTypeDefinition
    GetAllReadsResponse: MessageTypeDefinition
    GetAllRelaysRequest: MessageTypeDefinition
    GetAllRelaysResponse: MessageTypeDefinition
    GetConnectionRequest: MessageTypeDefinition
    GetConnectionResponse: MessageTypeDefinition
    GetRelayRequest: MessageTypeDefinition
    GetRelayResponse: MessageTypeDefinition
    PlumberServer: SubtypeConstructor<typeof grpc.Client, _protos_PlumberServerClient> & { service: _protos_PlumberServerDefinition }
    Read: MessageTypeDefinition
    ReadOptions: MessageTypeDefinition
    Relay: MessageTypeDefinition
    ResumeReadRequest: MessageTypeDefinition
    ResumeReadResponse: MessageTypeDefinition
    ResumeRelayRequest: MessageTypeDefinition
    ResumeRelayResponse: MessageTypeDefinition
    SampleOptions: MessageTypeDefinition
    StartReadRequest: MessageTypeDefinition
    StartReadResponse: MessageTypeDefinition
    StopReadRequest: MessageTypeDefinition
    StopReadResponse: MessageTypeDefinition
    StopRelayRequest: MessageTypeDefinition
    StopRelayResponse: MessageTypeDefinition
    StreamReadRequest: MessageTypeDefinition
    StreamReadResponse: MessageTypeDefinition
    TestConnectionRequest: MessageTypeDefinition
    TestConnectionResponse: MessageTypeDefinition
    UpdateConnectionRequest: MessageTypeDefinition
    UpdateConnectionResponse: MessageTypeDefinition
    UpdateRelayRequest: MessageTypeDefinition
    UpdateRelayResponse: MessageTypeDefinition
    WriteRecord: MessageTypeDefinition
    WriteRequest: MessageTypeDefinition
    WriteResponse: MessageTypeDefinition
    args: {
      Kafka: MessageTypeDefinition
    }
    common: {
      Auth: MessageTypeDefinition
      Code: EnumTypeDefinition
      Status: MessageTypeDefinition
    }
    conns: {
      Kafka: MessageTypeDefinition
      SASLType: EnumTypeDefinition
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

