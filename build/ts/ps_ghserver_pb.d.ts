// package: protos
// file: ps_ghserver.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GithubEvent extends jspb.Message { 
    getType(): GithubEvent.Type;
    setType(value: GithubEvent.Type): GithubEvent;

    hasAuthResponse(): boolean;
    clearAuthResponse(): void;
    getAuthResponse(): AuthResponse | undefined;
    setAuthResponse(value?: AuthResponse): GithubEvent;

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

    hasNewJwtToken(): boolean;
    clearNewJwtToken(): void;
    getNewJwtToken(): NewJwtToken | undefined;
    setNewJwtToken(value?: NewJwtToken): GithubEvent;

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
        type: GithubEvent.Type,
        authResponse?: AuthResponse.AsObject,
        installCreated?: InstallCreated.AsObject,
        installUpdated?: InstallUpdated.AsObject,
        installDeleted?: InstallDeleted.AsObject,
        prCreated?: PullRequestCreated.AsObject,
        prMerged?: PullRequestMerged.AsObject,
        newJwtToken?: NewJwtToken.AsObject,
    }

    export enum Type {
    UNSET = 0,
    AUTH_RESPONSE = 1,
    INSTALL_CREATED = 2,
    INSTALL_UPDATED = 3,
    INSTALL_DELETED = 4,
    PULL_CREATED = 5,
    PULL_MERGED = 6,
    NEW_JWT_TOKEN = 7,
    }


    export enum PayloadCase {
        PAYLOAD_NOT_SET = 0,
        AUTH_RESPONSE = 100,
        INSTALL_CREATED = 101,
        INSTALL_UPDATED = 102,
        INSTALL_DELETED = 103,
        PR_CREATED = 104,
        PR_MERGED = 105,
        NEW_JWT_TOKEN = 106,
    }

}

export class ConnectAuthRequest extends jspb.Message { 
    getApiToken(): string;
    setApiToken(value: string): ConnectAuthRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectAuthRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectAuthRequest): ConnectAuthRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectAuthRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectAuthRequest;
    static deserializeBinaryFromReader(message: ConnectAuthRequest, reader: jspb.BinaryReader): ConnectAuthRequest;
}

export namespace ConnectAuthRequest {
    export type AsObject = {
        apiToken: string,
    }
}

export class AuthResponse extends jspb.Message { 
    getAuthorized(): boolean;
    setAuthorized(value: boolean): AuthResponse;
    getMessage(): string;
    setMessage(value: string): AuthResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AuthResponse): AuthResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthResponse;
    static deserializeBinaryFromReader(message: AuthResponse, reader: jspb.BinaryReader): AuthResponse;
}

export namespace AuthResponse {
    export type AsObject = {
        authorized: boolean,
        message: string,
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

export class NewJwtToken extends jspb.Message { 
    getToken(): string;
    setToken(value: string): NewJwtToken;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewJwtToken.AsObject;
    static toObject(includeInstance: boolean, msg: NewJwtToken): NewJwtToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewJwtToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewJwtToken;
    static deserializeBinaryFromReader(message: NewJwtToken, reader: jspb.BinaryReader): NewJwtToken;
}

export namespace NewJwtToken {
    export type AsObject = {
        token: string,
    }
}
