// package: protos
// file: service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_auth_pb from "./common/auth_pb";
import * as common_status_pb from "./common/status_pb";

export class Service extends jspb.Message { 
    getId(): string;
    setId(value: string): Service;
    getName(): string;
    setName(value: string): Service;
    getRepoUrl(): string;
    setRepoUrl(value: string): Service;
    getNotes(): string;
    setNotes(value: string): Service;
    getOwnerId(): string;
    setOwnerId(value: string): Service;
    clearUsedSchemasList(): void;
    getUsedSchemasList(): Array<string>;
    setUsedSchemasList(value: Array<string>): Service;
    addUsedSchemas(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Service.AsObject;
    static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Service;
    static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
}

export namespace Service {
    export type AsObject = {
        id: string,
        name: string,
        repoUrl: string,
        notes: string,
        ownerId: string,
        usedSchemasList: Array<string>,
    }
}

export class GetServiceRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): GetServiceRequest;
    getId(): string;
    setId(value: string): GetServiceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetServiceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetServiceRequest): GetServiceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetServiceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetServiceRequest;
    static deserializeBinaryFromReader(message: GetServiceRequest, reader: jspb.BinaryReader): GetServiceRequest;
}

export namespace GetServiceRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        id: string,
    }
}

export class GetServiceResponse extends jspb.Message { 

    hasService(): boolean;
    clearService(): void;
    getService(): Service | undefined;
    setService(value?: Service): GetServiceResponse;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): GetServiceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetServiceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetServiceResponse): GetServiceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetServiceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetServiceResponse;
    static deserializeBinaryFromReader(message: GetServiceResponse, reader: jspb.BinaryReader): GetServiceResponse;
}

export namespace GetServiceResponse {
    export type AsObject = {
        service?: Service.AsObject,
        status?: common_status_pb.Status.AsObject,
    }
}

export class GetAllServicesRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): GetAllServicesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllServicesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllServicesRequest): GetAllServicesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllServicesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllServicesRequest;
    static deserializeBinaryFromReader(message: GetAllServicesRequest, reader: jspb.BinaryReader): GetAllServicesRequest;
}

export namespace GetAllServicesRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
    }
}

export class GetAllServicesResponse extends jspb.Message { 
    clearServicesList(): void;
    getServicesList(): Array<Service>;
    setServicesList(value: Array<Service>): GetAllServicesResponse;
    addServices(value?: Service, index?: number): Service;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): GetAllServicesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllServicesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllServicesResponse): GetAllServicesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllServicesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllServicesResponse;
    static deserializeBinaryFromReader(message: GetAllServicesResponse, reader: jspb.BinaryReader): GetAllServicesResponse;
}

export namespace GetAllServicesResponse {
    export type AsObject = {
        servicesList: Array<Service.AsObject>,
        status?: common_status_pb.Status.AsObject,
    }
}

export class CreateServiceRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): CreateServiceRequest;

    hasService(): boolean;
    clearService(): void;
    getService(): Service | undefined;
    setService(value?: Service): CreateServiceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateServiceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateServiceRequest): CreateServiceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateServiceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateServiceRequest;
    static deserializeBinaryFromReader(message: CreateServiceRequest, reader: jspb.BinaryReader): CreateServiceRequest;
}

export namespace CreateServiceRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        service?: Service.AsObject,
    }
}

export class CreateServiceResponse extends jspb.Message { 

    hasService(): boolean;
    clearService(): void;
    getService(): Service | undefined;
    setService(value?: Service): CreateServiceResponse;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): CreateServiceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateServiceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateServiceResponse): CreateServiceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateServiceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateServiceResponse;
    static deserializeBinaryFromReader(message: CreateServiceResponse, reader: jspb.BinaryReader): CreateServiceResponse;
}

export namespace CreateServiceResponse {
    export type AsObject = {
        service?: Service.AsObject,
        status?: common_status_pb.Status.AsObject,
    }
}

export class UpdateServiceRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): UpdateServiceRequest;

    hasService(): boolean;
    clearService(): void;
    getService(): Service | undefined;
    setService(value?: Service): UpdateServiceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateServiceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateServiceRequest): UpdateServiceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateServiceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateServiceRequest;
    static deserializeBinaryFromReader(message: UpdateServiceRequest, reader: jspb.BinaryReader): UpdateServiceRequest;
}

export namespace UpdateServiceRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        service?: Service.AsObject,
    }
}

export class UpdateServiceResponse extends jspb.Message { 

    hasService(): boolean;
    clearService(): void;
    getService(): Service | undefined;
    setService(value?: Service): UpdateServiceResponse;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): UpdateServiceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateServiceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateServiceResponse): UpdateServiceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateServiceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateServiceResponse;
    static deserializeBinaryFromReader(message: UpdateServiceResponse, reader: jspb.BinaryReader): UpdateServiceResponse;
}

export namespace UpdateServiceResponse {
    export type AsObject = {
        service?: Service.AsObject,
        status?: common_status_pb.Status.AsObject,
    }
}

export class DeleteServiceRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteServiceRequest;

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): DeleteServiceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteServiceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteServiceRequest): DeleteServiceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteServiceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteServiceRequest;
    static deserializeBinaryFromReader(message: DeleteServiceRequest, reader: jspb.BinaryReader): DeleteServiceRequest;
}

export namespace DeleteServiceRequest {
    export type AsObject = {
        id: string,
        auth?: common_auth_pb.Auth.AsObject,
    }
}

export class DeleteServiceResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): DeleteServiceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteServiceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteServiceResponse): DeleteServiceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteServiceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteServiceResponse;
    static deserializeBinaryFromReader(message: DeleteServiceResponse, reader: jspb.BinaryReader): DeleteServiceResponse;
}

export namespace DeleteServiceResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
    }
}
