import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  protos: {
    DeleteWasmFileRequest: MessageTypeDefinition
    DeleteWasmFileResponse: MessageTypeDefinition
    DownloadWasmFileRequest: MessageTypeDefinition
    DownloadWasmFileResponse: MessageTypeDefinition
    ListWasmFilesRequest: MessageTypeDefinition
    ListWasmFilesResponse: MessageTypeDefinition
    UploadWasmFileRequest: MessageTypeDefinition
    UploadWasmFileResponse: MessageTypeDefinition
    common: {
      Auth: MessageTypeDefinition
      Code: EnumTypeDefinition
      Foreman: MessageTypeDefinition
      SourceManager: MessageTypeDefinition
      Status: MessageTypeDefinition
    }
  }
}

