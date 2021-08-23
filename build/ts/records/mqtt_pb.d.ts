// package: protos.records
// file: records/mqtt.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class MQTT extends jspb.Message { 
    getId(): number;
    setId(value: number): MQTT;
    getTopic(): string;
    setTopic(value: string): MQTT;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): MQTT;
    getDuplicate(): boolean;
    setDuplicate(value: boolean): MQTT;
    getRetained(): boolean;
    setRetained(value: boolean): MQTT;
    getQos(): number;
    setQos(value: number): MQTT;
    getTimestamp(): number;
    setTimestamp(value: number): MQTT;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MQTT.AsObject;
    static toObject(includeInstance: boolean, msg: MQTT): MQTT.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MQTT, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MQTT;
    static deserializeBinaryFromReader(message: MQTT, reader: jspb.BinaryReader): MQTT;
}

export namespace MQTT {
    export type AsObject = {
        id: number,
        topic: string,
        value: Uint8Array | string,
        duplicate: boolean,
        retained: boolean,
        qos: number,
        timestamp: number,
    }
}
