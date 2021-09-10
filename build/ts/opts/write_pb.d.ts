// package: protos.opts
// file: opts/write.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as records_base_pb from "../records/base_pb";
import * as args_activemq_pb from "../args/activemq_pb";
import * as args_azure_service_bus_pb from "../args/azure-service-bus_pb";
import * as args_azure_event_hub_pb from "../args/azure-event-hub_pb";
import * as args_aws_sns_pb from "../args/aws-sns_pb";
import * as args_aws_sqs_pb from "../args/aws-sqs_pb";
import * as args_gcp_pubsub_pb from "../args/gcp-pubsub_pb";
import * as args_kafka_pb from "../args/kafka_pb";
import * as args_kubemq_queue_pb from "../args/kubemq-queue_pb";
import * as args_mqtt_pb from "../args/mqtt_pb";
import * as args_nats_pb from "../args/nats_pb";
import * as args_nats_streaming_pb from "../args/nats-streaming_pb";
import * as args_nsq_pb from "../args/nsq_pb";
import * as args_pulsar_pb from "../args/pulsar_pb";
import * as args_rabbit_pb from "../args/rabbit_pb";
import * as args_rabbit_streams_pb from "../args/rabbit-streams_pb";
import * as args_redis_pubsub_pb from "../args/redis-pubsub_pb";
import * as args_redis_streams_pb from "../args/redis-streams_pb";
import * as encoding_options_pb from "../encoding/options_pb";

export class WriteCLIOptions extends jspb.Message { 
    getInputFile(): string;
    setInputFile(value: string): WriteCLIOptions;
    getInputAsJsonArray(): boolean;
    setInputAsJsonArray(value: boolean): WriteCLIOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteCLIOptions.AsObject;
    static toObject(includeInstance: boolean, msg: WriteCLIOptions): WriteCLIOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteCLIOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteCLIOptions;
    static deserializeBinaryFromReader(message: WriteCLIOptions, reader: jspb.BinaryReader): WriteCLIOptions;
}

export namespace WriteCLIOptions {
    export type AsObject = {
        inputFile: string,
        inputAsJsonArray: boolean,
    }
}

export class WriteOptions extends jspb.Message { 
    getConnectionId(): string;
    setConnectionId(value: string): WriteOptions;

    hasRecord(): boolean;
    clearRecord(): void;
    getRecord(): records_base_pb.Write | undefined;
    setRecord(value?: records_base_pb.Write): WriteOptions;

    hasEncodeOptions(): boolean;
    clearEncodeOptions(): void;
    getEncodeOptions(): encoding_options_pb.EncodeOptions | undefined;
    setEncodeOptions(value?: encoding_options_pb.EncodeOptions): WriteOptions;

    hasCliOptions(): boolean;
    clearCliOptions(): void;
    getCliOptions(): WriteCLIOptions | undefined;
    setCliOptions(value?: WriteCLIOptions): WriteOptions;

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): WriteGroupKafkaOptions | undefined;
    setKafka(value?: WriteGroupKafkaOptions): WriteOptions;

    hasActivemq(): boolean;
    clearActivemq(): void;
    getActivemq(): WriteGroupActiveMQOptions | undefined;
    setActivemq(value?: WriteGroupActiveMQOptions): WriteOptions;

    hasAwssqs(): boolean;
    clearAwssqs(): void;
    getAwssqs(): WriteGroupAWSSQSOptions | undefined;
    setAwssqs(value?: WriteGroupAWSSQSOptions): WriteOptions;

    hasAwssns(): boolean;
    clearAwssns(): void;
    getAwssns(): WriteGroupAWSSNSOptions | undefined;
    setAwssns(value?: WriteGroupAWSSNSOptions): WriteOptions;

    hasNats(): boolean;
    clearNats(): void;
    getNats(): WriteGroupNatsOptions | undefined;
    setNats(value?: WriteGroupNatsOptions): WriteOptions;

    hasNatsStreaming(): boolean;
    clearNatsStreaming(): void;
    getNatsStreaming(): WriteGroupNatsStreamingOptions | undefined;
    setNatsStreaming(value?: WriteGroupNatsStreamingOptions): WriteOptions;

    hasNsq(): boolean;
    clearNsq(): void;
    getNsq(): WriteGroupNSQOptions | undefined;
    setNsq(value?: WriteGroupNSQOptions): WriteOptions;

    hasPulsar(): boolean;
    clearPulsar(): void;
    getPulsar(): WriteGroupPulsarOptions | undefined;
    setPulsar(value?: WriteGroupPulsarOptions): WriteOptions;

    hasRabbit(): boolean;
    clearRabbit(): void;
    getRabbit(): WriteGroupRabbitOptions | undefined;
    setRabbit(value?: WriteGroupRabbitOptions): WriteOptions;

    hasRabbitStreams(): boolean;
    clearRabbitStreams(): void;
    getRabbitStreams(): WriteGroupRabbitStreamsOptions | undefined;
    setRabbitStreams(value?: WriteGroupRabbitStreamsOptions): WriteOptions;

    hasMqtt(): boolean;
    clearMqtt(): void;
    getMqtt(): WriteGroupMQTTOptions | undefined;
    setMqtt(value?: WriteGroupMQTTOptions): WriteOptions;

    hasAzureServiceBus(): boolean;
    clearAzureServiceBus(): void;
    getAzureServiceBus(): WriteGroupAzureServiceBusOptions | undefined;
    setAzureServiceBus(value?: WriteGroupAzureServiceBusOptions): WriteOptions;

    hasAzureEventHub(): boolean;
    clearAzureEventHub(): void;
    getAzureEventHub(): WriteGroupAzureEventHubOptions | undefined;
    setAzureEventHub(value?: WriteGroupAzureEventHubOptions): WriteOptions;

    hasGcpPubsub(): boolean;
    clearGcpPubsub(): void;
    getGcpPubsub(): WriteGroupGCPPubSubOptions | undefined;
    setGcpPubsub(value?: WriteGroupGCPPubSubOptions): WriteOptions;

    hasKubemqQueue(): boolean;
    clearKubemqQueue(): void;
    getKubemqQueue(): WriteGroupKubeMQQueueOptions | undefined;
    setKubemqQueue(value?: WriteGroupKubeMQQueueOptions): WriteOptions;

    hasRedisPubsub(): boolean;
    clearRedisPubsub(): void;
    getRedisPubsub(): WriteGroupRedisPubSubOptions | undefined;
    setRedisPubsub(value?: WriteGroupRedisPubSubOptions): WriteOptions;

    hasRedisStreams(): boolean;
    clearRedisStreams(): void;
    getRedisStreams(): WriteGroupRedisStreamsOptions | undefined;
    setRedisStreams(value?: WriteGroupRedisStreamsOptions): WriteOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteOptions.AsObject;
    static toObject(includeInstance: boolean, msg: WriteOptions): WriteOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteOptions;
    static deserializeBinaryFromReader(message: WriteOptions, reader: jspb.BinaryReader): WriteOptions;
}

export namespace WriteOptions {
    export type AsObject = {
        connectionId: string,
        record?: records_base_pb.Write.AsObject,
        encodeOptions?: encoding_options_pb.EncodeOptions.AsObject,
        CliOptions?: WriteCLIOptions.AsObject,
        kafka?: WriteGroupKafkaOptions.AsObject,
        activemq?: WriteGroupActiveMQOptions.AsObject,
        awssqs?: WriteGroupAWSSQSOptions.AsObject,
        awssns?: WriteGroupAWSSNSOptions.AsObject,
        nats?: WriteGroupNatsOptions.AsObject,
        natsStreaming?: WriteGroupNatsStreamingOptions.AsObject,
        nsq?: WriteGroupNSQOptions.AsObject,
        pulsar?: WriteGroupPulsarOptions.AsObject,
        rabbit?: WriteGroupRabbitOptions.AsObject,
        rabbitStreams?: WriteGroupRabbitStreamsOptions.AsObject,
        mqtt?: WriteGroupMQTTOptions.AsObject,
        azureServiceBus?: WriteGroupAzureServiceBusOptions.AsObject,
        azureEventHub?: WriteGroupAzureEventHubOptions.AsObject,
        gcpPubsub?: WriteGroupGCPPubSubOptions.AsObject,
        kubemqQueue?: WriteGroupKubeMQQueueOptions.AsObject,
        redisPubsub?: WriteGroupRedisPubSubOptions.AsObject,
        redisStreams?: WriteGroupRedisStreamsOptions.AsObject,
    }
}

export class WriteGroupKafkaOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_kafka_pb.KafkaConn | undefined;
    setConn(value?: args_kafka_pb.KafkaConn): WriteGroupKafkaOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_kafka_pb.KafkaWriteArgs | undefined;
    setArgs(value?: args_kafka_pb.KafkaWriteArgs): WriteGroupKafkaOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteGroupKafkaOptions.AsObject;
    static toObject(includeInstance: boolean, msg: WriteGroupKafkaOptions): WriteGroupKafkaOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteGroupKafkaOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteGroupKafkaOptions;
    static deserializeBinaryFromReader(message: WriteGroupKafkaOptions, reader: jspb.BinaryReader): WriteGroupKafkaOptions;
}

export namespace WriteGroupKafkaOptions {
    export type AsObject = {
        Conn?: args_kafka_pb.KafkaConn.AsObject,
        args?: args_kafka_pb.KafkaWriteArgs.AsObject,
    }
}

export class WriteGroupActiveMQOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_activemq_pb.ActiveMQConn | undefined;
    setConn(value?: args_activemq_pb.ActiveMQConn): WriteGroupActiveMQOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_activemq_pb.ActiveMQWriteArgs | undefined;
    setArgs(value?: args_activemq_pb.ActiveMQWriteArgs): WriteGroupActiveMQOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteGroupActiveMQOptions.AsObject;
    static toObject(includeInstance: boolean, msg: WriteGroupActiveMQOptions): WriteGroupActiveMQOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteGroupActiveMQOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteGroupActiveMQOptions;
    static deserializeBinaryFromReader(message: WriteGroupActiveMQOptions, reader: jspb.BinaryReader): WriteGroupActiveMQOptions;
}

export namespace WriteGroupActiveMQOptions {
    export type AsObject = {
        Conn?: args_activemq_pb.ActiveMQConn.AsObject,
        args?: args_activemq_pb.ActiveMQWriteArgs.AsObject,
    }
}

export class WriteGroupAWSSQSOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_aws_sqs_pb.AWSSQSConn | undefined;
    setConn(value?: args_aws_sqs_pb.AWSSQSConn): WriteGroupAWSSQSOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_aws_sqs_pb.AWSSQSWriteArgs | undefined;
    setArgs(value?: args_aws_sqs_pb.AWSSQSWriteArgs): WriteGroupAWSSQSOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteGroupAWSSQSOptions.AsObject;
    static toObject(includeInstance: boolean, msg: WriteGroupAWSSQSOptions): WriteGroupAWSSQSOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteGroupAWSSQSOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteGroupAWSSQSOptions;
    static deserializeBinaryFromReader(message: WriteGroupAWSSQSOptions, reader: jspb.BinaryReader): WriteGroupAWSSQSOptions;
}

export namespace WriteGroupAWSSQSOptions {
    export type AsObject = {
        Conn?: args_aws_sqs_pb.AWSSQSConn.AsObject,
        args?: args_aws_sqs_pb.AWSSQSWriteArgs.AsObject,
    }
}

export class WriteGroupAWSSNSOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_aws_sns_pb.AWSSNSConn | undefined;
    setConn(value?: args_aws_sns_pb.AWSSNSConn): WriteGroupAWSSNSOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_aws_sns_pb.AWSSNSWriteArgs | undefined;
    setArgs(value?: args_aws_sns_pb.AWSSNSWriteArgs): WriteGroupAWSSNSOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteGroupAWSSNSOptions.AsObject;
    static toObject(includeInstance: boolean, msg: WriteGroupAWSSNSOptions): WriteGroupAWSSNSOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteGroupAWSSNSOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteGroupAWSSNSOptions;
    static deserializeBinaryFromReader(message: WriteGroupAWSSNSOptions, reader: jspb.BinaryReader): WriteGroupAWSSNSOptions;
}

export namespace WriteGroupAWSSNSOptions {
    export type AsObject = {
        Conn?: args_aws_sns_pb.AWSSNSConn.AsObject,
        args?: args_aws_sns_pb.AWSSNSWriteArgs.AsObject,
    }
}

export class WriteGroupNatsOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_nats_pb.NatsConn | undefined;
    setConn(value?: args_nats_pb.NatsConn): WriteGroupNatsOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_nats_pb.NatsWriteArgs | undefined;
    setArgs(value?: args_nats_pb.NatsWriteArgs): WriteGroupNatsOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteGroupNatsOptions.AsObject;
    static toObject(includeInstance: boolean, msg: WriteGroupNatsOptions): WriteGroupNatsOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteGroupNatsOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteGroupNatsOptions;
    static deserializeBinaryFromReader(message: WriteGroupNatsOptions, reader: jspb.BinaryReader): WriteGroupNatsOptions;
}

export namespace WriteGroupNatsOptions {
    export type AsObject = {
        Conn?: args_nats_pb.NatsConn.AsObject,
        args?: args_nats_pb.NatsWriteArgs.AsObject,
    }
}

export class WriteGroupNatsStreamingOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_nats_streaming_pb.NatsStreamingConn | undefined;
    setConn(value?: args_nats_streaming_pb.NatsStreamingConn): WriteGroupNatsStreamingOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_nats_streaming_pb.NatsStreamingWriteArgs | undefined;
    setArgs(value?: args_nats_streaming_pb.NatsStreamingWriteArgs): WriteGroupNatsStreamingOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteGroupNatsStreamingOptions.AsObject;
    static toObject(includeInstance: boolean, msg: WriteGroupNatsStreamingOptions): WriteGroupNatsStreamingOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteGroupNatsStreamingOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteGroupNatsStreamingOptions;
    static deserializeBinaryFromReader(message: WriteGroupNatsStreamingOptions, reader: jspb.BinaryReader): WriteGroupNatsStreamingOptions;
}

export namespace WriteGroupNatsStreamingOptions {
    export type AsObject = {
        Conn?: args_nats_streaming_pb.NatsStreamingConn.AsObject,
        args?: args_nats_streaming_pb.NatsStreamingWriteArgs.AsObject,
    }
}

export class WriteGroupNSQOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_nsq_pb.NSQConn | undefined;
    setConn(value?: args_nsq_pb.NSQConn): WriteGroupNSQOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_nsq_pb.NSQWriteArgs | undefined;
    setArgs(value?: args_nsq_pb.NSQWriteArgs): WriteGroupNSQOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteGroupNSQOptions.AsObject;
    static toObject(includeInstance: boolean, msg: WriteGroupNSQOptions): WriteGroupNSQOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteGroupNSQOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteGroupNSQOptions;
    static deserializeBinaryFromReader(message: WriteGroupNSQOptions, reader: jspb.BinaryReader): WriteGroupNSQOptions;
}

export namespace WriteGroupNSQOptions {
    export type AsObject = {
        Conn?: args_nsq_pb.NSQConn.AsObject,
        args?: args_nsq_pb.NSQWriteArgs.AsObject,
    }
}

export class WriteGroupPulsarOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_pulsar_pb.PulsarConn | undefined;
    setConn(value?: args_pulsar_pb.PulsarConn): WriteGroupPulsarOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_pulsar_pb.PulsarWriteArgs | undefined;
    setArgs(value?: args_pulsar_pb.PulsarWriteArgs): WriteGroupPulsarOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteGroupPulsarOptions.AsObject;
    static toObject(includeInstance: boolean, msg: WriteGroupPulsarOptions): WriteGroupPulsarOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteGroupPulsarOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteGroupPulsarOptions;
    static deserializeBinaryFromReader(message: WriteGroupPulsarOptions, reader: jspb.BinaryReader): WriteGroupPulsarOptions;
}

export namespace WriteGroupPulsarOptions {
    export type AsObject = {
        Conn?: args_pulsar_pb.PulsarConn.AsObject,
        args?: args_pulsar_pb.PulsarWriteArgs.AsObject,
    }
}

export class WriteGroupRabbitOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_rabbit_pb.RabbitConn | undefined;
    setConn(value?: args_rabbit_pb.RabbitConn): WriteGroupRabbitOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_rabbit_pb.RabbitWriteArgs | undefined;
    setArgs(value?: args_rabbit_pb.RabbitWriteArgs): WriteGroupRabbitOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteGroupRabbitOptions.AsObject;
    static toObject(includeInstance: boolean, msg: WriteGroupRabbitOptions): WriteGroupRabbitOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteGroupRabbitOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteGroupRabbitOptions;
    static deserializeBinaryFromReader(message: WriteGroupRabbitOptions, reader: jspb.BinaryReader): WriteGroupRabbitOptions;
}

export namespace WriteGroupRabbitOptions {
    export type AsObject = {
        Conn?: args_rabbit_pb.RabbitConn.AsObject,
        args?: args_rabbit_pb.RabbitWriteArgs.AsObject,
    }
}

export class WriteGroupRabbitStreamsOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_rabbit_streams_pb.RabbitStreamsConn | undefined;
    setConn(value?: args_rabbit_streams_pb.RabbitStreamsConn): WriteGroupRabbitStreamsOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_rabbit_streams_pb.RabbitStreamsWriteArgs | undefined;
    setArgs(value?: args_rabbit_streams_pb.RabbitStreamsWriteArgs): WriteGroupRabbitStreamsOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteGroupRabbitStreamsOptions.AsObject;
    static toObject(includeInstance: boolean, msg: WriteGroupRabbitStreamsOptions): WriteGroupRabbitStreamsOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteGroupRabbitStreamsOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteGroupRabbitStreamsOptions;
    static deserializeBinaryFromReader(message: WriteGroupRabbitStreamsOptions, reader: jspb.BinaryReader): WriteGroupRabbitStreamsOptions;
}

export namespace WriteGroupRabbitStreamsOptions {
    export type AsObject = {
        Conn?: args_rabbit_streams_pb.RabbitStreamsConn.AsObject,
        args?: args_rabbit_streams_pb.RabbitStreamsWriteArgs.AsObject,
    }
}

export class WriteGroupRedisPubSubOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_redis_pubsub_pb.RedisPubSubConn | undefined;
    setConn(value?: args_redis_pubsub_pb.RedisPubSubConn): WriteGroupRedisPubSubOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_redis_pubsub_pb.RedisPubSubWriteArgs | undefined;
    setArgs(value?: args_redis_pubsub_pb.RedisPubSubWriteArgs): WriteGroupRedisPubSubOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteGroupRedisPubSubOptions.AsObject;
    static toObject(includeInstance: boolean, msg: WriteGroupRedisPubSubOptions): WriteGroupRedisPubSubOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteGroupRedisPubSubOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteGroupRedisPubSubOptions;
    static deserializeBinaryFromReader(message: WriteGroupRedisPubSubOptions, reader: jspb.BinaryReader): WriteGroupRedisPubSubOptions;
}

export namespace WriteGroupRedisPubSubOptions {
    export type AsObject = {
        Conn?: args_redis_pubsub_pb.RedisPubSubConn.AsObject,
        args?: args_redis_pubsub_pb.RedisPubSubWriteArgs.AsObject,
    }
}

export class WriteGroupRedisStreamsOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_redis_streams_pb.RedisStreamsConn | undefined;
    setConn(value?: args_redis_streams_pb.RedisStreamsConn): WriteGroupRedisStreamsOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_redis_streams_pb.RedisStreamsWriteArgs | undefined;
    setArgs(value?: args_redis_streams_pb.RedisStreamsWriteArgs): WriteGroupRedisStreamsOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteGroupRedisStreamsOptions.AsObject;
    static toObject(includeInstance: boolean, msg: WriteGroupRedisStreamsOptions): WriteGroupRedisStreamsOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteGroupRedisStreamsOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteGroupRedisStreamsOptions;
    static deserializeBinaryFromReader(message: WriteGroupRedisStreamsOptions, reader: jspb.BinaryReader): WriteGroupRedisStreamsOptions;
}

export namespace WriteGroupRedisStreamsOptions {
    export type AsObject = {
        Conn?: args_redis_streams_pb.RedisStreamsConn.AsObject,
        args?: args_redis_streams_pb.RedisStreamsWriteArgs.AsObject,
    }
}

export class WriteGroupAzureEventHubOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_azure_event_hub_pb.AzureEventHubConn | undefined;
    setConn(value?: args_azure_event_hub_pb.AzureEventHubConn): WriteGroupAzureEventHubOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_azure_event_hub_pb.AzureEventHubWriteArgs | undefined;
    setArgs(value?: args_azure_event_hub_pb.AzureEventHubWriteArgs): WriteGroupAzureEventHubOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteGroupAzureEventHubOptions.AsObject;
    static toObject(includeInstance: boolean, msg: WriteGroupAzureEventHubOptions): WriteGroupAzureEventHubOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteGroupAzureEventHubOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteGroupAzureEventHubOptions;
    static deserializeBinaryFromReader(message: WriteGroupAzureEventHubOptions, reader: jspb.BinaryReader): WriteGroupAzureEventHubOptions;
}

export namespace WriteGroupAzureEventHubOptions {
    export type AsObject = {
        Conn?: args_azure_event_hub_pb.AzureEventHubConn.AsObject,
        args?: args_azure_event_hub_pb.AzureEventHubWriteArgs.AsObject,
    }
}

export class WriteGroupAzureServiceBusOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_azure_service_bus_pb.AzureServiceBusConn | undefined;
    setConn(value?: args_azure_service_bus_pb.AzureServiceBusConn): WriteGroupAzureServiceBusOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_azure_service_bus_pb.AzureServiceBusWriteArgs | undefined;
    setArgs(value?: args_azure_service_bus_pb.AzureServiceBusWriteArgs): WriteGroupAzureServiceBusOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteGroupAzureServiceBusOptions.AsObject;
    static toObject(includeInstance: boolean, msg: WriteGroupAzureServiceBusOptions): WriteGroupAzureServiceBusOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteGroupAzureServiceBusOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteGroupAzureServiceBusOptions;
    static deserializeBinaryFromReader(message: WriteGroupAzureServiceBusOptions, reader: jspb.BinaryReader): WriteGroupAzureServiceBusOptions;
}

export namespace WriteGroupAzureServiceBusOptions {
    export type AsObject = {
        Conn?: args_azure_service_bus_pb.AzureServiceBusConn.AsObject,
        args?: args_azure_service_bus_pb.AzureServiceBusWriteArgs.AsObject,
    }
}

export class WriteGroupMQTTOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_mqtt_pb.MQTTConn | undefined;
    setConn(value?: args_mqtt_pb.MQTTConn): WriteGroupMQTTOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_mqtt_pb.MQTTWriteArgs | undefined;
    setArgs(value?: args_mqtt_pb.MQTTWriteArgs): WriteGroupMQTTOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteGroupMQTTOptions.AsObject;
    static toObject(includeInstance: boolean, msg: WriteGroupMQTTOptions): WriteGroupMQTTOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteGroupMQTTOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteGroupMQTTOptions;
    static deserializeBinaryFromReader(message: WriteGroupMQTTOptions, reader: jspb.BinaryReader): WriteGroupMQTTOptions;
}

export namespace WriteGroupMQTTOptions {
    export type AsObject = {
        Conn?: args_mqtt_pb.MQTTConn.AsObject,
        args?: args_mqtt_pb.MQTTWriteArgs.AsObject,
    }
}

export class WriteGroupGCPPubSubOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_gcp_pubsub_pb.GCPPubSubConn | undefined;
    setConn(value?: args_gcp_pubsub_pb.GCPPubSubConn): WriteGroupGCPPubSubOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_gcp_pubsub_pb.GCPPubSubWriteArgs | undefined;
    setArgs(value?: args_gcp_pubsub_pb.GCPPubSubWriteArgs): WriteGroupGCPPubSubOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteGroupGCPPubSubOptions.AsObject;
    static toObject(includeInstance: boolean, msg: WriteGroupGCPPubSubOptions): WriteGroupGCPPubSubOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteGroupGCPPubSubOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteGroupGCPPubSubOptions;
    static deserializeBinaryFromReader(message: WriteGroupGCPPubSubOptions, reader: jspb.BinaryReader): WriteGroupGCPPubSubOptions;
}

export namespace WriteGroupGCPPubSubOptions {
    export type AsObject = {
        Conn?: args_gcp_pubsub_pb.GCPPubSubConn.AsObject,
        args?: args_gcp_pubsub_pb.GCPPubSubWriteArgs.AsObject,
    }
}

export class WriteGroupKubeMQQueueOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_kubemq_queue_pb.KubeMQQueueConn | undefined;
    setConn(value?: args_kubemq_queue_pb.KubeMQQueueConn): WriteGroupKubeMQQueueOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_kubemq_queue_pb.KubeMQQueueWriteArgs | undefined;
    setArgs(value?: args_kubemq_queue_pb.KubeMQQueueWriteArgs): WriteGroupKubeMQQueueOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteGroupKubeMQQueueOptions.AsObject;
    static toObject(includeInstance: boolean, msg: WriteGroupKubeMQQueueOptions): WriteGroupKubeMQQueueOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteGroupKubeMQQueueOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteGroupKubeMQQueueOptions;
    static deserializeBinaryFromReader(message: WriteGroupKubeMQQueueOptions, reader: jspb.BinaryReader): WriteGroupKubeMQQueueOptions;
}

export namespace WriteGroupKubeMQQueueOptions {
    export type AsObject = {
        Conn?: args_kubemq_queue_pb.KubeMQQueueConn.AsObject,
        args?: args_kubemq_queue_pb.KubeMQQueueWriteArgs.AsObject,
    }
}
