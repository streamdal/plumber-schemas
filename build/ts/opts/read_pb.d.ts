// package: protos.opts
// file: opts/read.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as encoding_options_pb from "../encoding/options_pb";
import * as args_activemq_pb from "../args/activemq_pb";
import * as args_azure_service_bus_pb from "../args/azure-service-bus_pb";
import * as args_azure_event_hub_pb from "../args/azure-event-hub_pb";
import * as args_aws_sqs_pb from "../args/aws-sqs_pb";
import * as args_gcp_pubsub_pb from "../args/gcp-pubsub_pb";
import * as args_kafka_pb from "../args/kafka_pb";
import * as args_kubemq_queue_pb from "../args/kubemq-queue_pb";
import * as args_mongo_pb from "../args/mongo_pb";
import * as args_mqtt_pb from "../args/mqtt_pb";
import * as args_nats_pb from "../args/nats_pb";
import * as args_nats_streaming_pb from "../args/nats-streaming_pb";
import * as args_nsq_pb from "../args/nsq_pb";
import * as args_postgres_pb from "../args/postgres_pb";
import * as args_pulsar_pb from "../args/pulsar_pb";
import * as args_rabbit_pb from "../args/rabbit_pb";
import * as args_rabbit_streams_pb from "../args/rabbit-streams_pb";
import * as args_redis_pubsub_pb from "../args/redis-pubsub_pb";
import * as args_redis_streams_pb from "../args/redis-streams_pb";

export class ReadCLIOptions extends jspb.Message { 
    clearConvertOutputList(): void;
    getConvertOutputList(): Array<ConvertOption>;
    setConvertOutputList(value: Array<ConvertOption>): ReadCLIOptions;
    addConvertOutput(value: ConvertOption, index?: number): ConvertOption;
    getVerboseOutput(): boolean;
    setVerboseOutput(value: boolean): ReadCLIOptions;
    getStatsEnable(): boolean;
    setStatsEnable(value: boolean): ReadCLIOptions;
    getStatsReportIntervalSec(): number;
    setStatsReportIntervalSec(value: number): ReadCLIOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadCLIOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReadCLIOptions): ReadCLIOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadCLIOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadCLIOptions;
    static deserializeBinaryFromReader(message: ReadCLIOptions, reader: jspb.BinaryReader): ReadCLIOptions;
}

export namespace ReadCLIOptions {
    export type AsObject = {
        convertOutputList: Array<ConvertOption>,
        verboseOutput: boolean,
        statsEnable: boolean,
        statsReportIntervalSec: number,
    }
}

export class ReadSampleOptions extends jspb.Message { 
    getSampleRate(): number;
    setSampleRate(value: number): ReadSampleOptions;
    getSampleIntervalSeconds(): number;
    setSampleIntervalSeconds(value: number): ReadSampleOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadSampleOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReadSampleOptions): ReadSampleOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadSampleOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadSampleOptions;
    static deserializeBinaryFromReader(message: ReadSampleOptions, reader: jspb.BinaryReader): ReadSampleOptions;
}

export namespace ReadSampleOptions {
    export type AsObject = {
        sampleRate: number,
        sampleIntervalSeconds: number,
    }
}

export class ReadOptions extends jspb.Message { 
    getName(): string;
    setName(value: string): ReadOptions;
    getConnectionId(): string;
    setConnectionId(value: string): ReadOptions;
    getContinuous(): boolean;
    setContinuous(value: boolean): ReadOptions;

    hasSampleOptions(): boolean;
    clearSampleOptions(): void;
    getSampleOptions(): ReadSampleOptions | undefined;
    setSampleOptions(value?: ReadSampleOptions): ReadOptions;

    hasDecodeOptions(): boolean;
    clearDecodeOptions(): void;
    getDecodeOptions(): encoding_options_pb.DecodeOptions | undefined;
    setDecodeOptions(value?: encoding_options_pb.DecodeOptions): ReadOptions;
    getId(): string;
    setId(value: string): ReadOptions;
    getActive(): boolean;
    setActive(value: boolean): ReadOptions;

    hasCliOptions(): boolean;
    clearCliOptions(): void;
    getCliOptions(): ReadCLIOptions | undefined;
    setCliOptions(value?: ReadCLIOptions): ReadOptions;

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): ReadGroupKafkaOptions | undefined;
    setKafka(value?: ReadGroupKafkaOptions): ReadOptions;

    hasActivemq(): boolean;
    clearActivemq(): void;
    getActivemq(): ReadGroupActiveMQOptions | undefined;
    setActivemq(value?: ReadGroupActiveMQOptions): ReadOptions;

    hasAwssqs(): boolean;
    clearAwssqs(): void;
    getAwssqs(): ReadGroupAWSSQSOptions | undefined;
    setAwssqs(value?: ReadGroupAWSSQSOptions): ReadOptions;

    hasMongo(): boolean;
    clearMongo(): void;
    getMongo(): ReadGroupMongoOptions | undefined;
    setMongo(value?: ReadGroupMongoOptions): ReadOptions;

    hasNats(): boolean;
    clearNats(): void;
    getNats(): ReadGroupNatsOptions | undefined;
    setNats(value?: ReadGroupNatsOptions): ReadOptions;

    hasNatsStreaming(): boolean;
    clearNatsStreaming(): void;
    getNatsStreaming(): ReadGroupNatsStreamingOptions | undefined;
    setNatsStreaming(value?: ReadGroupNatsStreamingOptions): ReadOptions;

    hasNsq(): boolean;
    clearNsq(): void;
    getNsq(): ReadGroupNSQOptions | undefined;
    setNsq(value?: ReadGroupNSQOptions): ReadOptions;

    hasPulsar(): boolean;
    clearPulsar(): void;
    getPulsar(): ReadGroupPulsarOptions | undefined;
    setPulsar(value?: ReadGroupPulsarOptions): ReadOptions;

    hasRabbit(): boolean;
    clearRabbit(): void;
    getRabbit(): ReadGroupRabbitOptions | undefined;
    setRabbit(value?: ReadGroupRabbitOptions): ReadOptions;

    hasRabbitStreams(): boolean;
    clearRabbitStreams(): void;
    getRabbitStreams(): ReadGroupRabbitStreamsOptions | undefined;
    setRabbitStreams(value?: ReadGroupRabbitStreamsOptions): ReadOptions;

    hasMqtt(): boolean;
    clearMqtt(): void;
    getMqtt(): ReadGroupMQTTOptions | undefined;
    setMqtt(value?: ReadGroupMQTTOptions): ReadOptions;

    hasAzureServiceBus(): boolean;
    clearAzureServiceBus(): void;
    getAzureServiceBus(): ReadGroupAzureServiceBusOptions | undefined;
    setAzureServiceBus(value?: ReadGroupAzureServiceBusOptions): ReadOptions;

    hasAzureEventHub(): boolean;
    clearAzureEventHub(): void;
    getAzureEventHub(): ReadGroupAzureEventHubOptions | undefined;
    setAzureEventHub(value?: ReadGroupAzureEventHubOptions): ReadOptions;

    hasGcpPubsub(): boolean;
    clearGcpPubsub(): void;
    getGcpPubsub(): ReadGroupGCPPubSubOptions | undefined;
    setGcpPubsub(value?: ReadGroupGCPPubSubOptions): ReadOptions;

    hasKubemqQueue(): boolean;
    clearKubemqQueue(): void;
    getKubemqQueue(): ReadGroupKubeMQQueueOptions | undefined;
    setKubemqQueue(value?: ReadGroupKubeMQQueueOptions): ReadOptions;

    hasRedisPubsub(): boolean;
    clearRedisPubsub(): void;
    getRedisPubsub(): ReadGroupRedisPubSubOptions | undefined;
    setRedisPubsub(value?: ReadGroupRedisPubSubOptions): ReadOptions;

    hasRedisStreams(): boolean;
    clearRedisStreams(): void;
    getRedisStreams(): ReadGroupRedisStreamsOptions | undefined;
    setRedisStreams(value?: ReadGroupRedisStreamsOptions): ReadOptions;

    hasPostgres(): boolean;
    clearPostgres(): void;
    getPostgres(): ReadGroupPostgresOptions | undefined;
    setPostgres(value?: ReadGroupPostgresOptions): ReadOptions;

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
        name: string,
        connectionId: string,
        continuous: boolean,
        sampleOptions?: ReadSampleOptions.AsObject,
        decodeOptions?: encoding_options_pb.DecodeOptions.AsObject,
        Id: string,
        Active: boolean,
        CliOptions?: ReadCLIOptions.AsObject,
        kafka?: ReadGroupKafkaOptions.AsObject,
        activemq?: ReadGroupActiveMQOptions.AsObject,
        awssqs?: ReadGroupAWSSQSOptions.AsObject,
        mongo?: ReadGroupMongoOptions.AsObject,
        nats?: ReadGroupNatsOptions.AsObject,
        natsStreaming?: ReadGroupNatsStreamingOptions.AsObject,
        nsq?: ReadGroupNSQOptions.AsObject,
        pulsar?: ReadGroupPulsarOptions.AsObject,
        rabbit?: ReadGroupRabbitOptions.AsObject,
        rabbitStreams?: ReadGroupRabbitStreamsOptions.AsObject,
        mqtt?: ReadGroupMQTTOptions.AsObject,
        azureServiceBus?: ReadGroupAzureServiceBusOptions.AsObject,
        azureEventHub?: ReadGroupAzureEventHubOptions.AsObject,
        gcpPubsub?: ReadGroupGCPPubSubOptions.AsObject,
        kubemqQueue?: ReadGroupKubeMQQueueOptions.AsObject,
        redisPubsub?: ReadGroupRedisPubSubOptions.AsObject,
        redisStreams?: ReadGroupRedisStreamsOptions.AsObject,
        postgres?: ReadGroupPostgresOptions.AsObject,
    }
}

export class ReadGroupKafkaOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_kafka_pb.KafkaConn | undefined;
    setConn(value?: args_kafka_pb.KafkaConn): ReadGroupKafkaOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_kafka_pb.KafkaReadArgs | undefined;
    setArgs(value?: args_kafka_pb.KafkaReadArgs): ReadGroupKafkaOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadGroupKafkaOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReadGroupKafkaOptions): ReadGroupKafkaOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadGroupKafkaOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadGroupKafkaOptions;
    static deserializeBinaryFromReader(message: ReadGroupKafkaOptions, reader: jspb.BinaryReader): ReadGroupKafkaOptions;
}

export namespace ReadGroupKafkaOptions {
    export type AsObject = {
        Conn?: args_kafka_pb.KafkaConn.AsObject,
        args?: args_kafka_pb.KafkaReadArgs.AsObject,
    }
}

export class ReadGroupActiveMQOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_activemq_pb.ActiveMQConn | undefined;
    setConn(value?: args_activemq_pb.ActiveMQConn): ReadGroupActiveMQOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_activemq_pb.ActiveMQReadArgs | undefined;
    setArgs(value?: args_activemq_pb.ActiveMQReadArgs): ReadGroupActiveMQOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadGroupActiveMQOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReadGroupActiveMQOptions): ReadGroupActiveMQOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadGroupActiveMQOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadGroupActiveMQOptions;
    static deserializeBinaryFromReader(message: ReadGroupActiveMQOptions, reader: jspb.BinaryReader): ReadGroupActiveMQOptions;
}

export namespace ReadGroupActiveMQOptions {
    export type AsObject = {
        Conn?: args_activemq_pb.ActiveMQConn.AsObject,
        args?: args_activemq_pb.ActiveMQReadArgs.AsObject,
    }
}

export class ReadGroupAWSSQSOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_aws_sqs_pb.AWSSQSConn | undefined;
    setConn(value?: args_aws_sqs_pb.AWSSQSConn): ReadGroupAWSSQSOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_aws_sqs_pb.AWSSQSReadArgs | undefined;
    setArgs(value?: args_aws_sqs_pb.AWSSQSReadArgs): ReadGroupAWSSQSOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadGroupAWSSQSOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReadGroupAWSSQSOptions): ReadGroupAWSSQSOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadGroupAWSSQSOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadGroupAWSSQSOptions;
    static deserializeBinaryFromReader(message: ReadGroupAWSSQSOptions, reader: jspb.BinaryReader): ReadGroupAWSSQSOptions;
}

export namespace ReadGroupAWSSQSOptions {
    export type AsObject = {
        Conn?: args_aws_sqs_pb.AWSSQSConn.AsObject,
        args?: args_aws_sqs_pb.AWSSQSReadArgs.AsObject,
    }
}

export class ReadGroupMongoOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_mongo_pb.MongoConn | undefined;
    setConn(value?: args_mongo_pb.MongoConn): ReadGroupMongoOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_mongo_pb.MongoReadArgs | undefined;
    setArgs(value?: args_mongo_pb.MongoReadArgs): ReadGroupMongoOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadGroupMongoOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReadGroupMongoOptions): ReadGroupMongoOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadGroupMongoOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadGroupMongoOptions;
    static deserializeBinaryFromReader(message: ReadGroupMongoOptions, reader: jspb.BinaryReader): ReadGroupMongoOptions;
}

export namespace ReadGroupMongoOptions {
    export type AsObject = {
        Conn?: args_mongo_pb.MongoConn.AsObject,
        args?: args_mongo_pb.MongoReadArgs.AsObject,
    }
}

export class ReadGroupNatsOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_nats_pb.NatsConn | undefined;
    setConn(value?: args_nats_pb.NatsConn): ReadGroupNatsOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_nats_pb.NatsReadArgs | undefined;
    setArgs(value?: args_nats_pb.NatsReadArgs): ReadGroupNatsOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadGroupNatsOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReadGroupNatsOptions): ReadGroupNatsOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadGroupNatsOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadGroupNatsOptions;
    static deserializeBinaryFromReader(message: ReadGroupNatsOptions, reader: jspb.BinaryReader): ReadGroupNatsOptions;
}

export namespace ReadGroupNatsOptions {
    export type AsObject = {
        Conn?: args_nats_pb.NatsConn.AsObject,
        args?: args_nats_pb.NatsReadArgs.AsObject,
    }
}

export class ReadGroupNatsStreamingOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_nats_streaming_pb.NatsStreamingConn | undefined;
    setConn(value?: args_nats_streaming_pb.NatsStreamingConn): ReadGroupNatsStreamingOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_nats_streaming_pb.NatsStreamingReadArgs | undefined;
    setArgs(value?: args_nats_streaming_pb.NatsStreamingReadArgs): ReadGroupNatsStreamingOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadGroupNatsStreamingOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReadGroupNatsStreamingOptions): ReadGroupNatsStreamingOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadGroupNatsStreamingOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadGroupNatsStreamingOptions;
    static deserializeBinaryFromReader(message: ReadGroupNatsStreamingOptions, reader: jspb.BinaryReader): ReadGroupNatsStreamingOptions;
}

export namespace ReadGroupNatsStreamingOptions {
    export type AsObject = {
        Conn?: args_nats_streaming_pb.NatsStreamingConn.AsObject,
        args?: args_nats_streaming_pb.NatsStreamingReadArgs.AsObject,
    }
}

export class ReadGroupNSQOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_nsq_pb.NSQConn | undefined;
    setConn(value?: args_nsq_pb.NSQConn): ReadGroupNSQOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_nsq_pb.NSQReadArgs | undefined;
    setArgs(value?: args_nsq_pb.NSQReadArgs): ReadGroupNSQOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadGroupNSQOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReadGroupNSQOptions): ReadGroupNSQOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadGroupNSQOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadGroupNSQOptions;
    static deserializeBinaryFromReader(message: ReadGroupNSQOptions, reader: jspb.BinaryReader): ReadGroupNSQOptions;
}

export namespace ReadGroupNSQOptions {
    export type AsObject = {
        Conn?: args_nsq_pb.NSQConn.AsObject,
        args?: args_nsq_pb.NSQReadArgs.AsObject,
    }
}

export class ReadGroupPostgresOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_postgres_pb.PostgresConn | undefined;
    setConn(value?: args_postgres_pb.PostgresConn): ReadGroupPostgresOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_postgres_pb.PostgresReadArgs | undefined;
    setArgs(value?: args_postgres_pb.PostgresReadArgs): ReadGroupPostgresOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadGroupPostgresOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReadGroupPostgresOptions): ReadGroupPostgresOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadGroupPostgresOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadGroupPostgresOptions;
    static deserializeBinaryFromReader(message: ReadGroupPostgresOptions, reader: jspb.BinaryReader): ReadGroupPostgresOptions;
}

export namespace ReadGroupPostgresOptions {
    export type AsObject = {
        Conn?: args_postgres_pb.PostgresConn.AsObject,
        args?: args_postgres_pb.PostgresReadArgs.AsObject,
    }
}

export class ReadGroupPulsarOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_pulsar_pb.PulsarConn | undefined;
    setConn(value?: args_pulsar_pb.PulsarConn): ReadGroupPulsarOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_pulsar_pb.PulsarReadArgs | undefined;
    setArgs(value?: args_pulsar_pb.PulsarReadArgs): ReadGroupPulsarOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadGroupPulsarOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReadGroupPulsarOptions): ReadGroupPulsarOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadGroupPulsarOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadGroupPulsarOptions;
    static deserializeBinaryFromReader(message: ReadGroupPulsarOptions, reader: jspb.BinaryReader): ReadGroupPulsarOptions;
}

export namespace ReadGroupPulsarOptions {
    export type AsObject = {
        Conn?: args_pulsar_pb.PulsarConn.AsObject,
        args?: args_pulsar_pb.PulsarReadArgs.AsObject,
    }
}

export class ReadGroupRabbitOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_rabbit_pb.RabbitConn | undefined;
    setConn(value?: args_rabbit_pb.RabbitConn): ReadGroupRabbitOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_rabbit_pb.RabbitReadArgs | undefined;
    setArgs(value?: args_rabbit_pb.RabbitReadArgs): ReadGroupRabbitOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadGroupRabbitOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReadGroupRabbitOptions): ReadGroupRabbitOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadGroupRabbitOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadGroupRabbitOptions;
    static deserializeBinaryFromReader(message: ReadGroupRabbitOptions, reader: jspb.BinaryReader): ReadGroupRabbitOptions;
}

export namespace ReadGroupRabbitOptions {
    export type AsObject = {
        Conn?: args_rabbit_pb.RabbitConn.AsObject,
        args?: args_rabbit_pb.RabbitReadArgs.AsObject,
    }
}

export class ReadGroupRabbitStreamsOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_rabbit_streams_pb.RabbitStreamsConn | undefined;
    setConn(value?: args_rabbit_streams_pb.RabbitStreamsConn): ReadGroupRabbitStreamsOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_rabbit_streams_pb.RabbitStreamsReadArgs | undefined;
    setArgs(value?: args_rabbit_streams_pb.RabbitStreamsReadArgs): ReadGroupRabbitStreamsOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadGroupRabbitStreamsOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReadGroupRabbitStreamsOptions): ReadGroupRabbitStreamsOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadGroupRabbitStreamsOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadGroupRabbitStreamsOptions;
    static deserializeBinaryFromReader(message: ReadGroupRabbitStreamsOptions, reader: jspb.BinaryReader): ReadGroupRabbitStreamsOptions;
}

export namespace ReadGroupRabbitStreamsOptions {
    export type AsObject = {
        Conn?: args_rabbit_streams_pb.RabbitStreamsConn.AsObject,
        args?: args_rabbit_streams_pb.RabbitStreamsReadArgs.AsObject,
    }
}

export class ReadGroupRedisPubSubOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_redis_pubsub_pb.RedisPubSubConn | undefined;
    setConn(value?: args_redis_pubsub_pb.RedisPubSubConn): ReadGroupRedisPubSubOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_redis_pubsub_pb.RedisPubSubReadArgs | undefined;
    setArgs(value?: args_redis_pubsub_pb.RedisPubSubReadArgs): ReadGroupRedisPubSubOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadGroupRedisPubSubOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReadGroupRedisPubSubOptions): ReadGroupRedisPubSubOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadGroupRedisPubSubOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadGroupRedisPubSubOptions;
    static deserializeBinaryFromReader(message: ReadGroupRedisPubSubOptions, reader: jspb.BinaryReader): ReadGroupRedisPubSubOptions;
}

export namespace ReadGroupRedisPubSubOptions {
    export type AsObject = {
        Conn?: args_redis_pubsub_pb.RedisPubSubConn.AsObject,
        args?: args_redis_pubsub_pb.RedisPubSubReadArgs.AsObject,
    }
}

export class ReadGroupRedisStreamsOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_redis_streams_pb.RedisStreamsConn | undefined;
    setConn(value?: args_redis_streams_pb.RedisStreamsConn): ReadGroupRedisStreamsOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_redis_streams_pb.RedisStreamsReadArgs | undefined;
    setArgs(value?: args_redis_streams_pb.RedisStreamsReadArgs): ReadGroupRedisStreamsOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadGroupRedisStreamsOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReadGroupRedisStreamsOptions): ReadGroupRedisStreamsOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadGroupRedisStreamsOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadGroupRedisStreamsOptions;
    static deserializeBinaryFromReader(message: ReadGroupRedisStreamsOptions, reader: jspb.BinaryReader): ReadGroupRedisStreamsOptions;
}

export namespace ReadGroupRedisStreamsOptions {
    export type AsObject = {
        Conn?: args_redis_streams_pb.RedisStreamsConn.AsObject,
        args?: args_redis_streams_pb.RedisStreamsReadArgs.AsObject,
    }
}

export class ReadGroupAzureEventHubOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_azure_event_hub_pb.AzureEventHubConn | undefined;
    setConn(value?: args_azure_event_hub_pb.AzureEventHubConn): ReadGroupAzureEventHubOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_azure_event_hub_pb.AzureEventHubReadArgs | undefined;
    setArgs(value?: args_azure_event_hub_pb.AzureEventHubReadArgs): ReadGroupAzureEventHubOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadGroupAzureEventHubOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReadGroupAzureEventHubOptions): ReadGroupAzureEventHubOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadGroupAzureEventHubOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadGroupAzureEventHubOptions;
    static deserializeBinaryFromReader(message: ReadGroupAzureEventHubOptions, reader: jspb.BinaryReader): ReadGroupAzureEventHubOptions;
}

export namespace ReadGroupAzureEventHubOptions {
    export type AsObject = {
        Conn?: args_azure_event_hub_pb.AzureEventHubConn.AsObject,
        args?: args_azure_event_hub_pb.AzureEventHubReadArgs.AsObject,
    }
}

export class ReadGroupAzureServiceBusOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_azure_service_bus_pb.AzureServiceBusConn | undefined;
    setConn(value?: args_azure_service_bus_pb.AzureServiceBusConn): ReadGroupAzureServiceBusOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_azure_service_bus_pb.AzureServiceBusReadArgs | undefined;
    setArgs(value?: args_azure_service_bus_pb.AzureServiceBusReadArgs): ReadGroupAzureServiceBusOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadGroupAzureServiceBusOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReadGroupAzureServiceBusOptions): ReadGroupAzureServiceBusOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadGroupAzureServiceBusOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadGroupAzureServiceBusOptions;
    static deserializeBinaryFromReader(message: ReadGroupAzureServiceBusOptions, reader: jspb.BinaryReader): ReadGroupAzureServiceBusOptions;
}

export namespace ReadGroupAzureServiceBusOptions {
    export type AsObject = {
        Conn?: args_azure_service_bus_pb.AzureServiceBusConn.AsObject,
        args?: args_azure_service_bus_pb.AzureServiceBusReadArgs.AsObject,
    }
}

export class ReadGroupMQTTOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_mqtt_pb.MQTTConn | undefined;
    setConn(value?: args_mqtt_pb.MQTTConn): ReadGroupMQTTOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_mqtt_pb.MQTTReadArgs | undefined;
    setArgs(value?: args_mqtt_pb.MQTTReadArgs): ReadGroupMQTTOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadGroupMQTTOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReadGroupMQTTOptions): ReadGroupMQTTOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadGroupMQTTOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadGroupMQTTOptions;
    static deserializeBinaryFromReader(message: ReadGroupMQTTOptions, reader: jspb.BinaryReader): ReadGroupMQTTOptions;
}

export namespace ReadGroupMQTTOptions {
    export type AsObject = {
        Conn?: args_mqtt_pb.MQTTConn.AsObject,
        args?: args_mqtt_pb.MQTTReadArgs.AsObject,
    }
}

export class ReadGroupGCPPubSubOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_gcp_pubsub_pb.GCPPubSubConn | undefined;
    setConn(value?: args_gcp_pubsub_pb.GCPPubSubConn): ReadGroupGCPPubSubOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_gcp_pubsub_pb.GCPPubSubReadArgs | undefined;
    setArgs(value?: args_gcp_pubsub_pb.GCPPubSubReadArgs): ReadGroupGCPPubSubOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadGroupGCPPubSubOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReadGroupGCPPubSubOptions): ReadGroupGCPPubSubOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadGroupGCPPubSubOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadGroupGCPPubSubOptions;
    static deserializeBinaryFromReader(message: ReadGroupGCPPubSubOptions, reader: jspb.BinaryReader): ReadGroupGCPPubSubOptions;
}

export namespace ReadGroupGCPPubSubOptions {
    export type AsObject = {
        Conn?: args_gcp_pubsub_pb.GCPPubSubConn.AsObject,
        args?: args_gcp_pubsub_pb.GCPPubSubReadArgs.AsObject,
    }
}

export class ReadGroupKubeMQQueueOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_kubemq_queue_pb.KubeMQQueueConn | undefined;
    setConn(value?: args_kubemq_queue_pb.KubeMQQueueConn): ReadGroupKubeMQQueueOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_kubemq_queue_pb.KubeMQQueueReadArgs | undefined;
    setArgs(value?: args_kubemq_queue_pb.KubeMQQueueReadArgs): ReadGroupKubeMQQueueOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadGroupKubeMQQueueOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReadGroupKubeMQQueueOptions): ReadGroupKubeMQQueueOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadGroupKubeMQQueueOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadGroupKubeMQQueueOptions;
    static deserializeBinaryFromReader(message: ReadGroupKubeMQQueueOptions, reader: jspb.BinaryReader): ReadGroupKubeMQQueueOptions;
}

export namespace ReadGroupKubeMQQueueOptions {
    export type AsObject = {
        Conn?: args_kubemq_queue_pb.KubeMQQueueConn.AsObject,
        args?: args_kubemq_queue_pb.KubeMQQueueReadArgs.AsObject,
    }
}

export enum ConvertOption {
    CONVERT_OPTION_UNSET = 0,
    CONVERT_OPTION_BASE64 = 1,
    CONVERT_OPTION_GZIP = 2,
}
