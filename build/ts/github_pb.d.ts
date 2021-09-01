// package: protos
// file: github.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_auth_pb from "./common/auth_pb";

export class StartGithubAuthRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): StartGithubAuthRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartGithubAuthRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartGithubAuthRequest): StartGithubAuthRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartGithubAuthRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartGithubAuthRequest;
    static deserializeBinaryFromReader(message: StartGithubAuthRequest, reader: jspb.BinaryReader): StartGithubAuthRequest;
}

export namespace StartGithubAuthRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
    }
}

export class StartGithubAuthResponse extends jspb.Message { 
    getCode(): string;
    setCode(value: string): StartGithubAuthResponse;
    getVerificationUrl(): string;
    setVerificationUrl(value: string): StartGithubAuthResponse;
    getEnterBefore(): string;
    setEnterBefore(value: string): StartGithubAuthResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartGithubAuthResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StartGithubAuthResponse): StartGithubAuthResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartGithubAuthResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartGithubAuthResponse;
    static deserializeBinaryFromReader(message: StartGithubAuthResponse, reader: jspb.BinaryReader): StartGithubAuthResponse;
}

export namespace StartGithubAuthResponse {
    export type AsObject = {
        code: string,
        verificationUrl: string,
        enterBefore: string,
    }
}

export class PollGithubAuthRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): PollGithubAuthRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PollGithubAuthRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PollGithubAuthRequest): PollGithubAuthRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PollGithubAuthRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PollGithubAuthRequest;
    static deserializeBinaryFromReader(message: PollGithubAuthRequest, reader: jspb.BinaryReader): PollGithubAuthRequest;
}

export namespace PollGithubAuthRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
    }
}

export class PollGithubAuthResponse extends jspb.Message { 
    getStatus(): PollGithubAuthResponse.Status;
    setStatus(value: PollGithubAuthResponse.Status): PollGithubAuthResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PollGithubAuthResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PollGithubAuthResponse): PollGithubAuthResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PollGithubAuthResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PollGithubAuthResponse;
    static deserializeBinaryFromReader(message: PollGithubAuthResponse, reader: jspb.BinaryReader): PollGithubAuthResponse;
}

export namespace PollGithubAuthResponse {
    export type AsObject = {
        status: PollGithubAuthResponse.Status,
    }

    export enum Status {
    PENDING = 0,
    SUCCESS = 1,
    FAILED = 2,
    }

}

export class IsGithubAuthRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): IsGithubAuthRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IsGithubAuthRequest.AsObject;
    static toObject(includeInstance: boolean, msg: IsGithubAuthRequest): IsGithubAuthRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IsGithubAuthRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IsGithubAuthRequest;
    static deserializeBinaryFromReader(message: IsGithubAuthRequest, reader: jspb.BinaryReader): IsGithubAuthRequest;
}

export namespace IsGithubAuthRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
    }
}

export class IsGithubAuthResponse extends jspb.Message { 
    getAuthorized(): boolean;
    setAuthorized(value: boolean): IsGithubAuthResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IsGithubAuthResponse.AsObject;
    static toObject(includeInstance: boolean, msg: IsGithubAuthResponse): IsGithubAuthResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IsGithubAuthResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IsGithubAuthResponse;
    static deserializeBinaryFromReader(message: IsGithubAuthResponse, reader: jspb.BinaryReader): IsGithubAuthResponse;
}

export namespace IsGithubAuthResponse {
    export type AsObject = {
        authorized: boolean,
    }
}

export class GetGithubEventsRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): GetGithubEventsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGithubEventsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetGithubEventsRequest): GetGithubEventsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGithubEventsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGithubEventsRequest;
    static deserializeBinaryFromReader(message: GetGithubEventsRequest, reader: jspb.BinaryReader): GetGithubEventsRequest;
}

export namespace GetGithubEventsRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
    }
}
