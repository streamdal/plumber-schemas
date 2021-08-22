// package: protos.conns
// file: conns/aws-sqs.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AWSSQS extends jspb.Message { 
    getAwsRegion(): string;
    setAwsRegion(value: string): AWSSQS;
    getAwsAccessKeyId(): string;
    setAwsAccessKeyId(value: string): AWSSQS;
    getAwsSecretAccessKey(): string;
    setAwsSecretAccessKey(value: string): AWSSQS;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AWSSQS.AsObject;
    static toObject(includeInstance: boolean, msg: AWSSQS): AWSSQS.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AWSSQS, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AWSSQS;
    static deserializeBinaryFromReader(message: AWSSQS, reader: jspb.BinaryReader): AWSSQS;
}

export namespace AWSSQS {
    export type AsObject = {
        awsRegion: string,
        awsAccessKeyId: string,
        awsSecretAccessKey: string,
    }
}
