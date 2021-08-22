// package: protos.conns
// file: conns/rabbit-streams.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RabbitStreams extends jspb.Message { 
    getDsn(): string;
    setDsn(value: string): RabbitStreams;
    getUseTls(): boolean;
    setUseTls(value: boolean): RabbitStreams;
    getInsecureTls(): boolean;
    setInsecureTls(value: boolean): RabbitStreams;
    getUsername(): string;
    setUsername(value: string): RabbitStreams;
    getPassword(): string;
    setPassword(value: string): RabbitStreams;
    getClientName(): string;
    setClientName(value: string): RabbitStreams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RabbitStreams.AsObject;
    static toObject(includeInstance: boolean, msg: RabbitStreams): RabbitStreams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RabbitStreams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RabbitStreams;
    static deserializeBinaryFromReader(message: RabbitStreams, reader: jspb.BinaryReader): RabbitStreams;
}

export namespace RabbitStreams {
    export type AsObject = {
        dsn: string,
        useTls: boolean,
        insecureTls: boolean,
        username: string,
        password: string,
        clientName: string,
    }
}
