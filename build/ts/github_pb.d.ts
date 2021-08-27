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

export class GithubEvent extends jspb.Message { 

    hasInstallCreated(): boolean;
    clearInstallCreated(): void;
    getInstallCreated(): InstallCreated | undefined;
    setInstallCreated(value?: InstallCreated): GithubEvent;

    hasInstallUpdated(): boolean;
    clearInstallUpdated(): void;
    getInstallUpdated(): InstallUpdated | undefined;
    setInstallUpdated(value?: InstallUpdated): GithubEvent;

    hasInstallDeleted(): boolean;
    clearInstallDeleted(): void;
    getInstallDeleted(): InstallDeleted | undefined;
    setInstallDeleted(value?: InstallDeleted): GithubEvent;

    hasPrCreated(): boolean;
    clearPrCreated(): void;
    getPrCreated(): PullRequestCreated | undefined;
    setPrCreated(value?: PullRequestCreated): GithubEvent;

    hasPrMerged(): boolean;
    clearPrMerged(): void;
    getPrMerged(): PullRequestMerged | undefined;
    setPrMerged(value?: PullRequestMerged): GithubEvent;

    getPayloadCase(): GithubEvent.PayloadCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GithubEvent.AsObject;
    static toObject(includeInstance: boolean, msg: GithubEvent): GithubEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GithubEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GithubEvent;
    static deserializeBinaryFromReader(message: GithubEvent, reader: jspb.BinaryReader): GithubEvent;
}

export namespace GithubEvent {
    export type AsObject = {
        installCreated?: InstallCreated.AsObject,
        installUpdated?: InstallUpdated.AsObject,
        installDeleted?: InstallDeleted.AsObject,
        prCreated?: PullRequestCreated.AsObject,
        prMerged?: PullRequestMerged.AsObject,
    }

    export enum PayloadCase {
        PAYLOAD_NOT_SET = 0,
        INSTALL_CREATED = 100,
        INSTALL_UPDATED = 101,
        INSTALL_DELETED = 102,
        PR_CREATED = 103,
        PR_MERGED = 104,
    }

}

export class PullRequestCreated extends jspb.Message { 
    getOwner(): string;
    setOwner(value: string): PullRequestCreated;
    getRepo(): string;
    setRepo(value: string): PullRequestCreated;
    getNumber(): number;
    setNumber(value: number): PullRequestCreated;
    getUrl(): string;
    setUrl(value: string): PullRequestCreated;
    getDescription(): string;
    setDescription(value: string): PullRequestCreated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PullRequestCreated.AsObject;
    static toObject(includeInstance: boolean, msg: PullRequestCreated): PullRequestCreated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PullRequestCreated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PullRequestCreated;
    static deserializeBinaryFromReader(message: PullRequestCreated, reader: jspb.BinaryReader): PullRequestCreated;
}

export namespace PullRequestCreated {
    export type AsObject = {
        owner: string,
        repo: string,
        number: number,
        url: string,
        description: string,
    }
}

export class PullRequestMerged extends jspb.Message { 
    getOwner(): string;
    setOwner(value: string): PullRequestMerged;
    getRepo(): string;
    setRepo(value: string): PullRequestMerged;
    getNumber(): number;
    setNumber(value: number): PullRequestMerged;
    getUrl(): string;
    setUrl(value: string): PullRequestMerged;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PullRequestMerged.AsObject;
    static toObject(includeInstance: boolean, msg: PullRequestMerged): PullRequestMerged.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PullRequestMerged, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PullRequestMerged;
    static deserializeBinaryFromReader(message: PullRequestMerged, reader: jspb.BinaryReader): PullRequestMerged;
}

export namespace PullRequestMerged {
    export type AsObject = {
        owner: string,
        repo: string,
        number: number,
        url: string,
    }
}

export class InstallCreated extends jspb.Message { 
    getInstallId(): number;
    setInstallId(value: number): InstallCreated;
    getAccountId(): number;
    setAccountId(value: number): InstallCreated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InstallCreated.AsObject;
    static toObject(includeInstance: boolean, msg: InstallCreated): InstallCreated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InstallCreated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InstallCreated;
    static deserializeBinaryFromReader(message: InstallCreated, reader: jspb.BinaryReader): InstallCreated;
}

export namespace InstallCreated {
    export type AsObject = {
        installId: number,
        accountId: number,
    }
}

export class InstallUpdated extends jspb.Message { 
    getInstallId(): number;
    setInstallId(value: number): InstallUpdated;
    getAccountId(): number;
    setAccountId(value: number): InstallUpdated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InstallUpdated.AsObject;
    static toObject(includeInstance: boolean, msg: InstallUpdated): InstallUpdated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InstallUpdated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InstallUpdated;
    static deserializeBinaryFromReader(message: InstallUpdated, reader: jspb.BinaryReader): InstallUpdated;
}

export namespace InstallUpdated {
    export type AsObject = {
        installId: number,
        accountId: number,
    }
}

export class InstallDeleted extends jspb.Message { 
    getInstallId(): number;
    setInstallId(value: number): InstallDeleted;
    getAccountId(): number;
    setAccountId(value: number): InstallDeleted;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InstallDeleted.AsObject;
    static toObject(includeInstance: boolean, msg: InstallDeleted): InstallDeleted.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InstallDeleted, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InstallDeleted;
    static deserializeBinaryFromReader(message: InstallDeleted, reader: jspb.BinaryReader): InstallDeleted;
}

export namespace InstallDeleted {
    export type AsObject = {
        installId: number,
        accountId: number,
    }
}
