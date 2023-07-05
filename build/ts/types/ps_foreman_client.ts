import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ForemanClientClient as _protos_ForemanClientClient, ForemanClientDefinition as _protos_ForemanClientDefinition } from './protos/ForemanClient';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  protos: {
    ForemanClient: SubtypeConstructor<typeof grpc.Client, _protos_ForemanClientClient> & { service: _protos_ForemanClientDefinition }
    RegisterRequest: MessageTypeDefinition
    RegisterResponse: MessageTypeDefinition
  }
}

