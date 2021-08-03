// package: protos
// file: write.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as records_kafka_pb from "./records/kafka_pb";
import * as common_auth_pb from "./common/auth_pb";
import * as common_status_pb from "./common/status_pb";
import * as encoding_options_pb from "./encoding/options_pb";

export class WriteRecord extends jspb.Message { 

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): records_kafka_pb.Kafka | undefined;
    setKafka(value?: records_kafka_pb.Kafka): WriteRecord;

    getRecordsCase(): WriteRecord.RecordsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteRecord.AsObject;
    static toObject(includeInstance: boolean, msg: WriteRecord): WriteRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteRecord;
    static deserializeBinaryFromReader(message: WriteRecord, reader: jspb.BinaryReader): WriteRecord;
}

export namespace WriteRecord {
    export type AsObject = {
        kafka?: records_kafka_pb.Kafka.AsObject,
    }

    export enum RecordsCase {
        RECORDS_NOT_SET = 0,
        KAFKA = 100,
    }

}

export class WriteRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): WriteRequest;
    getConnectionId(): string;
    setConnectionId(value: string): WriteRequest;
    clearRecordsList(): void;
    getRecordsList(): Array<WriteRecord>;
    setRecordsList(value: Array<WriteRecord>): WriteRequest;
    addRecords(value?: WriteRecord, index?: number): WriteRecord;

    hasEncodeOptions(): boolean;
    clearEncodeOptions(): void;
    getEncodeOptions(): encoding_options_pb.Options | undefined;
    setEncodeOptions(value?: encoding_options_pb.Options): WriteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WriteRequest): WriteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteRequest;
    static deserializeBinaryFromReader(message: WriteRequest, reader: jspb.BinaryReader): WriteRequest;
}

export namespace WriteRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        connectionId: string,
        recordsList: Array<WriteRecord.AsObject>,
        encodeOptions?: encoding_options_pb.Options.AsObject,
    }
}

export class WriteResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): WriteResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WriteResponse): WriteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteResponse;
    static deserializeBinaryFromReader(message: WriteResponse, reader: jspb.BinaryReader): WriteResponse;
}

export namespace WriteResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
    }
}
