// package: protos.opts
// file: opts/ps_opts_relay.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as args_ps_args_azure_service_bus_pb from "../args/ps_args_azure_service_bus_pb";
import * as args_ps_args_aws_sqs_pb from "../args/ps_args_aws_sqs_pb";
import * as args_ps_args_gcp_pubsub_pb from "../args/ps_args_gcp_pubsub_pb";
import * as args_ps_args_kafka_pb from "../args/ps_args_kafka_pb";
import * as args_ps_args_kubemq_queue_pb from "../args/ps_args_kubemq_queue_pb";
import * as args_ps_args_mongo_pb from "../args/ps_args_mongo_pb";
import * as args_ps_args_mqtt_pb from "../args/ps_args_mqtt_pb";
import * as args_ps_args_nsq_pb from "../args/ps_args_nsq_pb";
import * as args_ps_args_postgres_pb from "../args/ps_args_postgres_pb";
import * as args_ps_args_rabbit_pb from "../args/ps_args_rabbit_pb";
import * as args_ps_args_redis_pubsub_pb from "../args/ps_args_redis_pubsub_pb";
import * as args_ps_args_redis_streams_pb from "../args/ps_args_redis_streams_pb";

export class RelayCLIOptions extends jspb.Message { 
    getHttpListenAddress(): string;
    setHttpListenAddress(value: string): RelayCLIOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayCLIOptions.AsObject;
    static toObject(includeInstance: boolean, msg: RelayCLIOptions): RelayCLIOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayCLIOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayCLIOptions;
    static deserializeBinaryFromReader(message: RelayCLIOptions, reader: jspb.BinaryReader): RelayCLIOptions;
}

export namespace RelayCLIOptions {
    export type AsObject = {
        httpListenAddress: string,
    }
}

export class RelayOptions extends jspb.Message { 
    getCollectionToken(): string;
    setCollectionToken(value: string): RelayOptions;
    getBatchSize(): number;
    setBatchSize(value: number): RelayOptions;
    getBatchMaxRetry(): number;
    setBatchMaxRetry(value: number): RelayOptions;
    getConnectionId(): string;
    setConnectionId(value: string): RelayOptions;
    getNumWorkers(): number;
    setNumWorkers(value: number): RelayOptions;
    getBatchshGrpcAddress(): string;
    setBatchshGrpcAddress(value: string): RelayOptions;
    getBatchshGrpcDisableTls(): boolean;
    setBatchshGrpcDisableTls(value: boolean): RelayOptions;
    getBatchshGrpcTimeoutSeconds(): number;
    setBatchshGrpcTimeoutSeconds(value: number): RelayOptions;
    getRelayId(): string;
    setRelayId(value: string): RelayOptions;

    hasCliOptions(): boolean;
    clearCliOptions(): void;
    getCliOptions(): RelayCLIOptions | undefined;
    setCliOptions(value?: RelayCLIOptions): RelayOptions;

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): RelayGroupKafkaOptions | undefined;
    setKafka(value?: RelayGroupKafkaOptions): RelayOptions;

    hasAwssqs(): boolean;
    clearAwssqs(): void;
    getAwssqs(): RelayGroupAWSSQSOptions | undefined;
    setAwssqs(value?: RelayGroupAWSSQSOptions): RelayOptions;

    hasMongo(): boolean;
    clearMongo(): void;
    getMongo(): RelayGroupMongoOptions | undefined;
    setMongo(value?: RelayGroupMongoOptions): RelayOptions;

    hasNsq(): boolean;
    clearNsq(): void;
    getNsq(): RelayGroupNSQOptions | undefined;
    setNsq(value?: RelayGroupNSQOptions): RelayOptions;

    hasRabbit(): boolean;
    clearRabbit(): void;
    getRabbit(): RelayGroupRabbitOptions | undefined;
    setRabbit(value?: RelayGroupRabbitOptions): RelayOptions;

    hasMqtt(): boolean;
    clearMqtt(): void;
    getMqtt(): RelayGroupMQTTOptions | undefined;
    setMqtt(value?: RelayGroupMQTTOptions): RelayOptions;

    hasAzureServiceBus(): boolean;
    clearAzureServiceBus(): void;
    getAzureServiceBus(): RelayGroupAzureServiceBusOptions | undefined;
    setAzureServiceBus(value?: RelayGroupAzureServiceBusOptions): RelayOptions;

    hasGcpPubsub(): boolean;
    clearGcpPubsub(): void;
    getGcpPubsub(): RelayGroupGCPPubSubOptions | undefined;
    setGcpPubsub(value?: RelayGroupGCPPubSubOptions): RelayOptions;

    hasKubemqQueue(): boolean;
    clearKubemqQueue(): void;
    getKubemqQueue(): RelayGroupKubeMQQueueOptions | undefined;
    setKubemqQueue(value?: RelayGroupKubeMQQueueOptions): RelayOptions;

    hasRedisPubsub(): boolean;
    clearRedisPubsub(): void;
    getRedisPubsub(): RelayGroupRedisPubSubOptions | undefined;
    setRedisPubsub(value?: RelayGroupRedisPubSubOptions): RelayOptions;

    hasRedisStreams(): boolean;
    clearRedisStreams(): void;
    getRedisStreams(): RelayGroupRedisStreamsOptions | undefined;
    setRedisStreams(value?: RelayGroupRedisStreamsOptions): RelayOptions;

    hasPostgres(): boolean;
    clearPostgres(): void;
    getPostgres(): RelayGroupPostgresOptions | undefined;
    setPostgres(value?: RelayGroupPostgresOptions): RelayOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayOptions.AsObject;
    static toObject(includeInstance: boolean, msg: RelayOptions): RelayOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayOptions;
    static deserializeBinaryFromReader(message: RelayOptions, reader: jspb.BinaryReader): RelayOptions;
}

export namespace RelayOptions {
    export type AsObject = {
        collectionToken: string,
        batchSize: number,
        batchMaxRetry: number,
        connectionId: string,
        numWorkers: number,
        BatchshGrpcAddress: string,
        BatchshGrpcDisableTls: boolean,
        BatchshGrpcTimeoutSeconds: number,
        RelayId: string,
        CliOptions?: RelayCLIOptions.AsObject,
        kafka?: RelayGroupKafkaOptions.AsObject,
        awssqs?: RelayGroupAWSSQSOptions.AsObject,
        mongo?: RelayGroupMongoOptions.AsObject,
        nsq?: RelayGroupNSQOptions.AsObject,
        rabbit?: RelayGroupRabbitOptions.AsObject,
        mqtt?: RelayGroupMQTTOptions.AsObject,
        azureServiceBus?: RelayGroupAzureServiceBusOptions.AsObject,
        gcpPubsub?: RelayGroupGCPPubSubOptions.AsObject,
        kubemqQueue?: RelayGroupKubeMQQueueOptions.AsObject,
        redisPubsub?: RelayGroupRedisPubSubOptions.AsObject,
        redisStreams?: RelayGroupRedisStreamsOptions.AsObject,
        postgres?: RelayGroupPostgresOptions.AsObject,
    }
}

export class RelayGroupKafkaOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_kafka_pb.KafkaConn | undefined;
    setConn(value?: args_ps_args_kafka_pb.KafkaConn): RelayGroupKafkaOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_kafka_pb.KafkaRelayArgs | undefined;
    setArgs(value?: args_ps_args_kafka_pb.KafkaRelayArgs): RelayGroupKafkaOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayGroupKafkaOptions.AsObject;
    static toObject(includeInstance: boolean, msg: RelayGroupKafkaOptions): RelayGroupKafkaOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayGroupKafkaOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayGroupKafkaOptions;
    static deserializeBinaryFromReader(message: RelayGroupKafkaOptions, reader: jspb.BinaryReader): RelayGroupKafkaOptions;
}

export namespace RelayGroupKafkaOptions {
    export type AsObject = {
        Conn?: args_ps_args_kafka_pb.KafkaConn.AsObject,
        args?: args_ps_args_kafka_pb.KafkaRelayArgs.AsObject,
    }
}

export class RelayGroupAWSSQSOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_aws_sqs_pb.AWSSQSConn | undefined;
    setConn(value?: args_ps_args_aws_sqs_pb.AWSSQSConn): RelayGroupAWSSQSOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_aws_sqs_pb.AWSSQSRelayArgs | undefined;
    setArgs(value?: args_ps_args_aws_sqs_pb.AWSSQSRelayArgs): RelayGroupAWSSQSOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayGroupAWSSQSOptions.AsObject;
    static toObject(includeInstance: boolean, msg: RelayGroupAWSSQSOptions): RelayGroupAWSSQSOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayGroupAWSSQSOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayGroupAWSSQSOptions;
    static deserializeBinaryFromReader(message: RelayGroupAWSSQSOptions, reader: jspb.BinaryReader): RelayGroupAWSSQSOptions;
}

export namespace RelayGroupAWSSQSOptions {
    export type AsObject = {
        Conn?: args_ps_args_aws_sqs_pb.AWSSQSConn.AsObject,
        args?: args_ps_args_aws_sqs_pb.AWSSQSRelayArgs.AsObject,
    }
}

export class RelayGroupMongoOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_mongo_pb.MongoConn | undefined;
    setConn(value?: args_ps_args_mongo_pb.MongoConn): RelayGroupMongoOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_mongo_pb.MongoReadArgs | undefined;
    setArgs(value?: args_ps_args_mongo_pb.MongoReadArgs): RelayGroupMongoOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayGroupMongoOptions.AsObject;
    static toObject(includeInstance: boolean, msg: RelayGroupMongoOptions): RelayGroupMongoOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayGroupMongoOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayGroupMongoOptions;
    static deserializeBinaryFromReader(message: RelayGroupMongoOptions, reader: jspb.BinaryReader): RelayGroupMongoOptions;
}

export namespace RelayGroupMongoOptions {
    export type AsObject = {
        Conn?: args_ps_args_mongo_pb.MongoConn.AsObject,
        args?: args_ps_args_mongo_pb.MongoReadArgs.AsObject,
    }
}

export class RelayGroupNSQOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_nsq_pb.NSQConn | undefined;
    setConn(value?: args_ps_args_nsq_pb.NSQConn): RelayGroupNSQOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_nsq_pb.NSQReadArgs | undefined;
    setArgs(value?: args_ps_args_nsq_pb.NSQReadArgs): RelayGroupNSQOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayGroupNSQOptions.AsObject;
    static toObject(includeInstance: boolean, msg: RelayGroupNSQOptions): RelayGroupNSQOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayGroupNSQOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayGroupNSQOptions;
    static deserializeBinaryFromReader(message: RelayGroupNSQOptions, reader: jspb.BinaryReader): RelayGroupNSQOptions;
}

export namespace RelayGroupNSQOptions {
    export type AsObject = {
        Conn?: args_ps_args_nsq_pb.NSQConn.AsObject,
        args?: args_ps_args_nsq_pb.NSQReadArgs.AsObject,
    }
}

export class RelayGroupPostgresOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_postgres_pb.PostgresConn | undefined;
    setConn(value?: args_ps_args_postgres_pb.PostgresConn): RelayGroupPostgresOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_postgres_pb.PostgresReadArgs | undefined;
    setArgs(value?: args_ps_args_postgres_pb.PostgresReadArgs): RelayGroupPostgresOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayGroupPostgresOptions.AsObject;
    static toObject(includeInstance: boolean, msg: RelayGroupPostgresOptions): RelayGroupPostgresOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayGroupPostgresOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayGroupPostgresOptions;
    static deserializeBinaryFromReader(message: RelayGroupPostgresOptions, reader: jspb.BinaryReader): RelayGroupPostgresOptions;
}

export namespace RelayGroupPostgresOptions {
    export type AsObject = {
        Conn?: args_ps_args_postgres_pb.PostgresConn.AsObject,
        args?: args_ps_args_postgres_pb.PostgresReadArgs.AsObject,
    }
}

export class RelayGroupRabbitOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_rabbit_pb.RabbitConn | undefined;
    setConn(value?: args_ps_args_rabbit_pb.RabbitConn): RelayGroupRabbitOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_rabbit_pb.RabbitReadArgs | undefined;
    setArgs(value?: args_ps_args_rabbit_pb.RabbitReadArgs): RelayGroupRabbitOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayGroupRabbitOptions.AsObject;
    static toObject(includeInstance: boolean, msg: RelayGroupRabbitOptions): RelayGroupRabbitOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayGroupRabbitOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayGroupRabbitOptions;
    static deserializeBinaryFromReader(message: RelayGroupRabbitOptions, reader: jspb.BinaryReader): RelayGroupRabbitOptions;
}

export namespace RelayGroupRabbitOptions {
    export type AsObject = {
        Conn?: args_ps_args_rabbit_pb.RabbitConn.AsObject,
        args?: args_ps_args_rabbit_pb.RabbitReadArgs.AsObject,
    }
}

export class RelayGroupRedisPubSubOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_redis_pubsub_pb.RedisPubSubConn | undefined;
    setConn(value?: args_ps_args_redis_pubsub_pb.RedisPubSubConn): RelayGroupRedisPubSubOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_redis_pubsub_pb.RedisPubSubReadArgs | undefined;
    setArgs(value?: args_ps_args_redis_pubsub_pb.RedisPubSubReadArgs): RelayGroupRedisPubSubOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayGroupRedisPubSubOptions.AsObject;
    static toObject(includeInstance: boolean, msg: RelayGroupRedisPubSubOptions): RelayGroupRedisPubSubOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayGroupRedisPubSubOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayGroupRedisPubSubOptions;
    static deserializeBinaryFromReader(message: RelayGroupRedisPubSubOptions, reader: jspb.BinaryReader): RelayGroupRedisPubSubOptions;
}

export namespace RelayGroupRedisPubSubOptions {
    export type AsObject = {
        Conn?: args_ps_args_redis_pubsub_pb.RedisPubSubConn.AsObject,
        args?: args_ps_args_redis_pubsub_pb.RedisPubSubReadArgs.AsObject,
    }
}

export class RelayGroupRedisStreamsOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_redis_streams_pb.RedisStreamsConn | undefined;
    setConn(value?: args_ps_args_redis_streams_pb.RedisStreamsConn): RelayGroupRedisStreamsOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_redis_streams_pb.RedisStreamsReadArgs | undefined;
    setArgs(value?: args_ps_args_redis_streams_pb.RedisStreamsReadArgs): RelayGroupRedisStreamsOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayGroupRedisStreamsOptions.AsObject;
    static toObject(includeInstance: boolean, msg: RelayGroupRedisStreamsOptions): RelayGroupRedisStreamsOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayGroupRedisStreamsOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayGroupRedisStreamsOptions;
    static deserializeBinaryFromReader(message: RelayGroupRedisStreamsOptions, reader: jspb.BinaryReader): RelayGroupRedisStreamsOptions;
}

export namespace RelayGroupRedisStreamsOptions {
    export type AsObject = {
        Conn?: args_ps_args_redis_streams_pb.RedisStreamsConn.AsObject,
        args?: args_ps_args_redis_streams_pb.RedisStreamsReadArgs.AsObject,
    }
}

export class RelayGroupAzureServiceBusOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_azure_service_bus_pb.AzureServiceBusConn | undefined;
    setConn(value?: args_ps_args_azure_service_bus_pb.AzureServiceBusConn): RelayGroupAzureServiceBusOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_azure_service_bus_pb.AzureServiceBusReadArgs | undefined;
    setArgs(value?: args_ps_args_azure_service_bus_pb.AzureServiceBusReadArgs): RelayGroupAzureServiceBusOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayGroupAzureServiceBusOptions.AsObject;
    static toObject(includeInstance: boolean, msg: RelayGroupAzureServiceBusOptions): RelayGroupAzureServiceBusOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayGroupAzureServiceBusOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayGroupAzureServiceBusOptions;
    static deserializeBinaryFromReader(message: RelayGroupAzureServiceBusOptions, reader: jspb.BinaryReader): RelayGroupAzureServiceBusOptions;
}

export namespace RelayGroupAzureServiceBusOptions {
    export type AsObject = {
        Conn?: args_ps_args_azure_service_bus_pb.AzureServiceBusConn.AsObject,
        args?: args_ps_args_azure_service_bus_pb.AzureServiceBusReadArgs.AsObject,
    }
}

export class RelayGroupMQTTOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_mqtt_pb.MQTTConn | undefined;
    setConn(value?: args_ps_args_mqtt_pb.MQTTConn): RelayGroupMQTTOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_mqtt_pb.MQTTReadArgs | undefined;
    setArgs(value?: args_ps_args_mqtt_pb.MQTTReadArgs): RelayGroupMQTTOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayGroupMQTTOptions.AsObject;
    static toObject(includeInstance: boolean, msg: RelayGroupMQTTOptions): RelayGroupMQTTOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayGroupMQTTOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayGroupMQTTOptions;
    static deserializeBinaryFromReader(message: RelayGroupMQTTOptions, reader: jspb.BinaryReader): RelayGroupMQTTOptions;
}

export namespace RelayGroupMQTTOptions {
    export type AsObject = {
        Conn?: args_ps_args_mqtt_pb.MQTTConn.AsObject,
        args?: args_ps_args_mqtt_pb.MQTTReadArgs.AsObject,
    }
}

export class RelayGroupGCPPubSubOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_gcp_pubsub_pb.GCPPubSubConn | undefined;
    setConn(value?: args_ps_args_gcp_pubsub_pb.GCPPubSubConn): RelayGroupGCPPubSubOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_gcp_pubsub_pb.GCPPubSubReadArgs | undefined;
    setArgs(value?: args_ps_args_gcp_pubsub_pb.GCPPubSubReadArgs): RelayGroupGCPPubSubOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayGroupGCPPubSubOptions.AsObject;
    static toObject(includeInstance: boolean, msg: RelayGroupGCPPubSubOptions): RelayGroupGCPPubSubOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayGroupGCPPubSubOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayGroupGCPPubSubOptions;
    static deserializeBinaryFromReader(message: RelayGroupGCPPubSubOptions, reader: jspb.BinaryReader): RelayGroupGCPPubSubOptions;
}

export namespace RelayGroupGCPPubSubOptions {
    export type AsObject = {
        Conn?: args_ps_args_gcp_pubsub_pb.GCPPubSubConn.AsObject,
        args?: args_ps_args_gcp_pubsub_pb.GCPPubSubReadArgs.AsObject,
    }
}

export class RelayGroupKubeMQQueueOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_kubemq_queue_pb.KubeMQQueueConn | undefined;
    setConn(value?: args_ps_args_kubemq_queue_pb.KubeMQQueueConn): RelayGroupKubeMQQueueOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_kubemq_queue_pb.KubeMQQueueReadArgs | undefined;
    setArgs(value?: args_ps_args_kubemq_queue_pb.KubeMQQueueReadArgs): RelayGroupKubeMQQueueOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayGroupKubeMQQueueOptions.AsObject;
    static toObject(includeInstance: boolean, msg: RelayGroupKubeMQQueueOptions): RelayGroupKubeMQQueueOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayGroupKubeMQQueueOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayGroupKubeMQQueueOptions;
    static deserializeBinaryFromReader(message: RelayGroupKubeMQQueueOptions, reader: jspb.BinaryReader): RelayGroupKubeMQQueueOptions;
}

export namespace RelayGroupKubeMQQueueOptions {
    export type AsObject = {
        Conn?: args_ps_args_kubemq_queue_pb.KubeMQQueueConn.AsObject,
        args?: args_ps_args_kubemq_queue_pb.KubeMQQueueReadArgs.AsObject,
    }
}
