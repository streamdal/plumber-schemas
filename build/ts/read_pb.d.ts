// package: protos
// file: read.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_auth_pb from "./common/auth_pb";
import * as common_status_pb from "./common/status_pb";
import * as encoding_options_pb from "./encoding/options_pb";
import * as records_base_pb from "./records/base_pb";
import * as backends_kafka_pb from "./backends/kafka_pb";
import * as backends_activemq_pb from "./backends/activemq_pb";
import * as backends_aws_sns_pb from "./backends/aws-sns_pb";
import * as backends_aws_sqs_pb from "./backends/aws-sqs_pb";
import * as backends_mongo_pb from "./backends/mongo_pb";
import * as backends_nats_pb from "./backends/nats_pb";
import * as backends_nats_streaming_pb from "./backends/nats-streaming_pb";
import * as backends_nsq_pb from "./backends/nsq_pb";
import * as backends_postgres_pb from "./backends/postgres_pb";
import * as backends_pulsar_pb from "./backends/pulsar_pb";
import * as backends_rabbit_pb from "./backends/rabbit_pb";
import * as backends_rabbit_streams_pb from "./backends/rabbit-streams_pb";
import * as backends_redis_pubsub_pb from "./backends/redis-pubsub_pb";
import * as backends_redis_streams_pb from "./backends/redis-streams_pb";
import * as backends_azure_service_bus_pb from "./backends/azure-service-bus_pb";
import * as backends_azure_event_hub_pb from "./backends/azure-event-hub_pb";

export class SampleOptions extends jspb.Message { 
    getSampleRate(): number;
    setSampleRate(value: number): SampleOptions;
    getSampleInterval(): SampleOptions.Interval;
    setSampleInterval(value: SampleOptions.Interval): SampleOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SampleOptions.AsObject;
    static toObject(includeInstance: boolean, msg: SampleOptions): SampleOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SampleOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SampleOptions;
    static deserializeBinaryFromReader(message: SampleOptions, reader: jspb.BinaryReader): SampleOptions;
}

export namespace SampleOptions {
    export type AsObject = {
        sampleRate: number,
        sampleInterval: SampleOptions.Interval,
    }

    export enum Interval {
    SECOND = 0,
    MINUTE = 1,
    }

}

export class ReadOptions extends jspb.Message { 

    hasSampleOptions(): boolean;
    clearSampleOptions(): void;
    getSampleOptions(): SampleOptions | undefined;
    setSampleOptions(value?: SampleOptions): ReadOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOptions): ReadOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOptions;
    static deserializeBinaryFromReader(message: ReadOptions, reader: jspb.BinaryReader): ReadOptions;
}

export namespace ReadOptions {
    export type AsObject = {
        sampleOptions?: SampleOptions.AsObject,
    }

    export enum Type {
    ONE_TIME = 0,
    CONTINUOUS = 1,
    }

}

export class ReadCLIConfig extends jspb.Message { 
    getDisplayLagStats(): boolean;
    setDisplayLagStats(value: boolean): ReadCLIConfig;
    getConvertOutput(): string;
    setConvertOutput(value: string): ReadCLIConfig;
    getVerboseOutput(): boolean;
    setVerboseOutput(value: boolean): ReadCLIConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadCLIConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ReadCLIConfig): ReadCLIConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadCLIConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadCLIConfig;
    static deserializeBinaryFromReader(message: ReadCLIConfig, reader: jspb.BinaryReader): ReadCLIConfig;
}

export namespace ReadCLIConfig {
    export type AsObject = {
        displayLagStats: boolean,
        convertOutput: string,
        verboseOutput: boolean,
    }
}

export class ReadConfig extends jspb.Message { 
    getId(): string;
    setId(value: string): ReadConfig;
    getActive(): boolean;
    setActive(value: boolean): ReadConfig;
    getName(): string;
    setName(value: string): ReadConfig;
    getConnectionId(): string;
    setConnectionId(value: string): ReadConfig;

    hasReadOptions(): boolean;
    clearReadOptions(): void;
    getReadOptions(): ReadOptions | undefined;
    setReadOptions(value?: ReadOptions): ReadConfig;

    hasDecodeOptions(): boolean;
    clearDecodeOptions(): void;
    getDecodeOptions(): encoding_options_pb.Options | undefined;
    setDecodeOptions(value?: encoding_options_pb.Options): ReadConfig;

    hasCliConfig(): boolean;
    clearCliConfig(): void;
    getCliConfig(): ReadCLIConfig | undefined;
    setCliConfig(value?: ReadCLIConfig): ReadConfig;

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): backends_kafka_pb.Kafka | undefined;
    setKafka(value?: backends_kafka_pb.Kafka): ReadConfig;

    hasActiveMq(): boolean;
    clearActiveMq(): void;
    getActiveMq(): backends_activemq_pb.ActiveMQ | undefined;
    setActiveMq(value?: backends_activemq_pb.ActiveMQ): ReadConfig;

    hasAwssqs(): boolean;
    clearAwssqs(): void;
    getAwssqs(): backends_aws_sqs_pb.AWSSQS | undefined;
    setAwssqs(value?: backends_aws_sqs_pb.AWSSQS): ReadConfig;

    hasAwssns(): boolean;
    clearAwssns(): void;
    getAwssns(): backends_aws_sns_pb.AWSSNS | undefined;
    setAwssns(value?: backends_aws_sns_pb.AWSSNS): ReadConfig;

    hasMongo(): boolean;
    clearMongo(): void;
    getMongo(): backends_mongo_pb.Mongo | undefined;
    setMongo(value?: backends_mongo_pb.Mongo): ReadConfig;

    hasNats(): boolean;
    clearNats(): void;
    getNats(): backends_nats_pb.Nats | undefined;
    setNats(value?: backends_nats_pb.Nats): ReadConfig;

    hasNatsStreaming(): boolean;
    clearNatsStreaming(): void;
    getNatsStreaming(): backends_nats_streaming_pb.NatsStreaming | undefined;
    setNatsStreaming(value?: backends_nats_streaming_pb.NatsStreaming): ReadConfig;

    hasNsq(): boolean;
    clearNsq(): void;
    getNsq(): backends_nsq_pb.NSQ | undefined;
    setNsq(value?: backends_nsq_pb.NSQ): ReadConfig;

    hasPostgres(): boolean;
    clearPostgres(): void;
    getPostgres(): backends_postgres_pb.Postgres | undefined;
    setPostgres(value?: backends_postgres_pb.Postgres): ReadConfig;

    hasPulsar(): boolean;
    clearPulsar(): void;
    getPulsar(): backends_pulsar_pb.Pulsar | undefined;
    setPulsar(value?: backends_pulsar_pb.Pulsar): ReadConfig;

    hasRabbit(): boolean;
    clearRabbit(): void;
    getRabbit(): backends_rabbit_pb.Rabbit | undefined;
    setRabbit(value?: backends_rabbit_pb.Rabbit): ReadConfig;

    hasRabbitStreams(): boolean;
    clearRabbitStreams(): void;
    getRabbitStreams(): backends_rabbit_streams_pb.RabbitStreams | undefined;
    setRabbitStreams(value?: backends_rabbit_streams_pb.RabbitStreams): ReadConfig;

    hasRedisPubsub(): boolean;
    clearRedisPubsub(): void;
    getRedisPubsub(): backends_redis_pubsub_pb.RedisPubsub | undefined;
    setRedisPubsub(value?: backends_redis_pubsub_pb.RedisPubsub): ReadConfig;

    hasRedisStreams(): boolean;
    clearRedisStreams(): void;
    getRedisStreams(): backends_redis_streams_pb.RedisStreams | undefined;
    setRedisStreams(value?: backends_redis_streams_pb.RedisStreams): ReadConfig;

    hasAzureEventHub(): boolean;
    clearAzureEventHub(): void;
    getAzureEventHub(): backends_azure_event_hub_pb.AzureEventHub | undefined;
    setAzureEventHub(value?: backends_azure_event_hub_pb.AzureEventHub): ReadConfig;

    hasAzureServiceBus(): boolean;
    clearAzureServiceBus(): void;
    getAzureServiceBus(): backends_azure_service_bus_pb.AzureServiceBus | undefined;
    setAzureServiceBus(value?: backends_azure_service_bus_pb.AzureServiceBus): ReadConfig;

    getBackendsCase(): ReadConfig.BackendsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ReadConfig): ReadConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadConfig;
    static deserializeBinaryFromReader(message: ReadConfig, reader: jspb.BinaryReader): ReadConfig;
}

export namespace ReadConfig {
    export type AsObject = {
        Id: string,
        Active: boolean,
        name: string,
        connectionId: string,
        readOptions?: ReadOptions.AsObject,
        decodeOptions?: encoding_options_pb.Options.AsObject,
        CliConfig?: ReadCLIConfig.AsObject,
        kafka?: backends_kafka_pb.Kafka.AsObject,
        activeMq?: backends_activemq_pb.ActiveMQ.AsObject,
        awssqs?: backends_aws_sqs_pb.AWSSQS.AsObject,
        awssns?: backends_aws_sns_pb.AWSSNS.AsObject,
        mongo?: backends_mongo_pb.Mongo.AsObject,
        nats?: backends_nats_pb.Nats.AsObject,
        natsStreaming?: backends_nats_streaming_pb.NatsStreaming.AsObject,
        nsq?: backends_nsq_pb.NSQ.AsObject,
        postgres?: backends_postgres_pb.Postgres.AsObject,
        pulsar?: backends_pulsar_pb.Pulsar.AsObject,
        rabbit?: backends_rabbit_pb.Rabbit.AsObject,
        rabbitStreams?: backends_rabbit_streams_pb.RabbitStreams.AsObject,
        redisPubsub?: backends_redis_pubsub_pb.RedisPubsub.AsObject,
        redisStreams?: backends_redis_streams_pb.RedisStreams.AsObject,
        azureEventHub?: backends_azure_event_hub_pb.AzureEventHub.AsObject,
        azureServiceBus?: backends_azure_service_bus_pb.AzureServiceBus.AsObject,
    }

    export enum BackendsCase {
        BACKENDS_NOT_SET = 0,
        KAFKA = 100,
        ACTIVE_MQ = 101,
        AWSSQS = 102,
        AWSSNS = 103,
        MONGO = 104,
        NATS = 105,
        NATS_STREAMING = 106,
        NSQ = 107,
        POSTGRES = 108,
        PULSAR = 109,
        RABBIT = 110,
        RABBIT_STREAMS = 111,
        REDIS_PUBSUB = 112,
        REDIS_STREAMS = 113,
        AZURE_EVENT_HUB = 114,
        AZURE_SERVICE_BUS = 115,
    }

}

export class CreateReadRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): CreateReadRequest;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): ReadConfig | undefined;
    setConfig(value?: ReadConfig): CreateReadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateReadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateReadRequest): CreateReadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateReadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateReadRequest;
    static deserializeBinaryFromReader(message: CreateReadRequest, reader: jspb.BinaryReader): CreateReadRequest;
}

export namespace CreateReadRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        config?: ReadConfig.AsObject,
    }
}

export class CreateReadResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): CreateReadResponse;
    getReadId(): string;
    setReadId(value: string): CreateReadResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateReadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateReadResponse): CreateReadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateReadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateReadResponse;
    static deserializeBinaryFromReader(message: CreateReadResponse, reader: jspb.BinaryReader): CreateReadResponse;
}

export namespace CreateReadResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
        readId: string,
    }
}

export class StopReadRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): StopReadRequest;
    getReadId(): string;
    setReadId(value: string): StopReadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopReadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopReadRequest): StopReadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopReadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopReadRequest;
    static deserializeBinaryFromReader(message: StopReadRequest, reader: jspb.BinaryReader): StopReadRequest;
}

export namespace StopReadRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        readId: string,
    }
}

export class StopReadResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): StopReadResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopReadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StopReadResponse): StopReadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopReadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopReadResponse;
    static deserializeBinaryFromReader(message: StopReadResponse, reader: jspb.BinaryReader): StopReadResponse;
}

export namespace StopReadResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
    }
}

export class ResumeReadRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): ResumeReadRequest;
    getReadId(): string;
    setReadId(value: string): ResumeReadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResumeReadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ResumeReadRequest): ResumeReadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResumeReadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResumeReadRequest;
    static deserializeBinaryFromReader(message: ResumeReadRequest, reader: jspb.BinaryReader): ResumeReadRequest;
}

export namespace ResumeReadRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        readId: string,
    }
}

export class ResumeReadResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): ResumeReadResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResumeReadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ResumeReadResponse): ResumeReadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResumeReadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResumeReadResponse;
    static deserializeBinaryFromReader(message: ResumeReadResponse, reader: jspb.BinaryReader): ResumeReadResponse;
}

export namespace ResumeReadResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
    }
}

export class DeleteReadRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): DeleteReadRequest;
    getReadId(): string;
    setReadId(value: string): DeleteReadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteReadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteReadRequest): DeleteReadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteReadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteReadRequest;
    static deserializeBinaryFromReader(message: DeleteReadRequest, reader: jspb.BinaryReader): DeleteReadRequest;
}

export namespace DeleteReadRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        readId: string,
    }
}

export class DeleteReadResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): DeleteReadResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteReadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteReadResponse): DeleteReadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteReadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteReadResponse;
    static deserializeBinaryFromReader(message: DeleteReadResponse, reader: jspb.BinaryReader): DeleteReadResponse;
}

export namespace DeleteReadResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
    }
}

export class StartReadRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): StartReadRequest;
    getReadId(): string;
    setReadId(value: string): StartReadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartReadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartReadRequest): StartReadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartReadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartReadRequest;
    static deserializeBinaryFromReader(message: StartReadRequest, reader: jspb.BinaryReader): StartReadRequest;
}

export namespace StartReadRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        readId: string,
    }
}

export class StartReadResponse extends jspb.Message { 
    clearRecordsList(): void;
    getRecordsList(): Array<records_base_pb.ReadRecord>;
    setRecordsList(value: Array<records_base_pb.ReadRecord>): StartReadResponse;
    addRecords(value?: records_base_pb.ReadRecord, index?: number): records_base_pb.ReadRecord;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): StartReadResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartReadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StartReadResponse): StartReadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartReadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartReadResponse;
    static deserializeBinaryFromReader(message: StartReadResponse, reader: jspb.BinaryReader): StartReadResponse;
}

export namespace StartReadResponse {
    export type AsObject = {
        recordsList: Array<records_base_pb.ReadRecord.AsObject>,
        status?: common_status_pb.Status.AsObject,
    }
}

export class GetAllReadsRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): GetAllReadsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllReadsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllReadsRequest): GetAllReadsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllReadsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllReadsRequest;
    static deserializeBinaryFromReader(message: GetAllReadsRequest, reader: jspb.BinaryReader): GetAllReadsRequest;
}

export namespace GetAllReadsRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
    }
}

export class GetAllReadsResponse extends jspb.Message { 
    clearReadList(): void;
    getReadList(): Array<ReadConfig>;
    setReadList(value: Array<ReadConfig>): GetAllReadsResponse;
    addRead(value?: ReadConfig, index?: number): ReadConfig;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): GetAllReadsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllReadsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllReadsResponse): GetAllReadsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllReadsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllReadsResponse;
    static deserializeBinaryFromReader(message: GetAllReadsResponse, reader: jspb.BinaryReader): GetAllReadsResponse;
}

export namespace GetAllReadsResponse {
    export type AsObject = {
        readList: Array<ReadConfig.AsObject>,
        status?: common_status_pb.Status.AsObject,
    }
}
