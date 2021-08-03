// package: protos.conns
// file: conns/kafka.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Kafka extends jspb.Message { 
    clearAddressList(): void;
    getAddressList(): Array<string>;
    setAddressList(value: Array<string>): Kafka;
    addAddress(value: string, index?: number): string;
    getTimeoutSeconds(): number;
    setTimeoutSeconds(value: number): Kafka;
    getUseTls(): boolean;
    setUseTls(value: boolean): Kafka;
    getInsecureTls(): boolean;
    setInsecureTls(value: boolean): Kafka;
    getSaslType(): SASLType;
    setSaslType(value: SASLType): Kafka;
    getSaslUsername(): string;
    setSaslUsername(value: string): Kafka;
    getSaslPassword(): string;
    setSaslPassword(value: string): Kafka;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Kafka.AsObject;
    static toObject(includeInstance: boolean, msg: Kafka): Kafka.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Kafka, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Kafka;
    static deserializeBinaryFromReader(message: Kafka, reader: jspb.BinaryReader): Kafka;
}

export namespace Kafka {
    export type AsObject = {
        addressList: Array<string>,
        timeoutSeconds: number,
        useTls: boolean,
        insecureTls: boolean,
        saslType: SASLType,
        saslUsername: string,
        saslPassword: string,
    }
}

export enum SASLType {
    NONE = 0,
    PLAIN = 1,
    SCRAM = 2,
}
