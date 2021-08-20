// package: protos.conns
// file: conns/rabbit.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Rabbit extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): Rabbit;
    getUseTls(): boolean;
    setUseTls(value: boolean): Rabbit;
    getInsecureTls(): boolean;
    setInsecureTls(value: boolean): Rabbit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Rabbit.AsObject;
    static toObject(includeInstance: boolean, msg: Rabbit): Rabbit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Rabbit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Rabbit;
    static deserializeBinaryFromReader(message: Rabbit, reader: jspb.BinaryReader): Rabbit;
}

export namespace Rabbit {
    export type AsObject = {
        address: string,
        useTls: boolean,
        insecureTls: boolean,
    }
}
