// package: protos.opts
// file: opts/ps_opts_dynamic.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as args_ps_args_activemq_pb from "../args/ps_args_activemq_pb";
import * as args_ps_args_azure_service_bus_pb from "../args/ps_args_azure_service_bus_pb";
import * as args_ps_args_azure_event_hub_pb from "../args/ps_args_azure_event_hub_pb";
import * as args_ps_args_aws_sqs_pb from "../args/ps_args_aws_sqs_pb";
import * as args_ps_args_aws_sns_pb from "../args/ps_args_aws_sns_pb";
import * as args_ps_args_gcp_pubsub_pb from "../args/ps_args_gcp_pubsub_pb";
import * as args_ps_args_kafka_pb from "../args/ps_args_kafka_pb";
import * as args_ps_args_kubemq_queue_pb from "../args/ps_args_kubemq_queue_pb";
import * as args_ps_args_mqtt_pb from "../args/ps_args_mqtt_pb";
import * as args_ps_args_nats_pb from "../args/ps_args_nats_pb";
import * as args_ps_args_nats_streaming_pb from "../args/ps_args_nats_streaming_pb";
import * as args_ps_args_nsq_pb from "../args/ps_args_nsq_pb";
import * as args_ps_args_rabbit_pb from "../args/ps_args_rabbit_pb";
import * as args_ps_args_rabbit_streams_pb from "../args/ps_args_rabbit_streams_pb";
import * as args_ps_args_redis_pubsub_pb from "../args/ps_args_redis_pubsub_pb";
import * as args_ps_args_redis_streams_pb from "../args/ps_args_redis_streams_pb";

export class DynamicOptions extends jspb.Message { 
    getApiToken(): string;
    setApiToken(value: string): DynamicOptions;
    getGrpcAddress(): string;
    setGrpcAddress(value: string): DynamicOptions;
    getGrpcTimeoutSeconds(): number;
    setGrpcTimeoutSeconds(value: number): DynamicOptions;
    getGrpcInsecure(): boolean;
    setGrpcInsecure(value: boolean): DynamicOptions;

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): DynamicGroupKafkaOptions | undefined;
    setKafka(value?: DynamicGroupKafkaOptions): DynamicOptions;

    hasActivemq(): boolean;
    clearActivemq(): void;
    getActivemq(): DynamicGroupActiveMQOptions | undefined;
    setActivemq(value?: DynamicGroupActiveMQOptions): DynamicOptions;

    hasAwssqs(): boolean;
    clearAwssqs(): void;
    getAwssqs(): DynamicGroupAWSSQSOptions | undefined;
    setAwssqs(value?: DynamicGroupAWSSQSOptions): DynamicOptions;

    hasAwssns(): boolean;
    clearAwssns(): void;
    getAwssns(): DynamicGroupAWSSNSOptions | undefined;
    setAwssns(value?: DynamicGroupAWSSNSOptions): DynamicOptions;

    hasNats(): boolean;
    clearNats(): void;
    getNats(): DynamicGroupNatsOptions | undefined;
    setNats(value?: DynamicGroupNatsOptions): DynamicOptions;

    hasNatsStreaming(): boolean;
    clearNatsStreaming(): void;
    getNatsStreaming(): DynamicGroupNatsStreamingOptions | undefined;
    setNatsStreaming(value?: DynamicGroupNatsStreamingOptions): DynamicOptions;

    hasNsq(): boolean;
    clearNsq(): void;
    getNsq(): DynamicGroupNSQOptions | undefined;
    setNsq(value?: DynamicGroupNSQOptions): DynamicOptions;

    hasRabbit(): boolean;
    clearRabbit(): void;
    getRabbit(): DynamicGroupRabbitOptions | undefined;
    setRabbit(value?: DynamicGroupRabbitOptions): DynamicOptions;

    hasMqtt(): boolean;
    clearMqtt(): void;
    getMqtt(): DynamicGroupMQTTOptions | undefined;
    setMqtt(value?: DynamicGroupMQTTOptions): DynamicOptions;

    hasAzureServiceBus(): boolean;
    clearAzureServiceBus(): void;
    getAzureServiceBus(): DynamicGroupAzureServiceBusOptions | undefined;
    setAzureServiceBus(value?: DynamicGroupAzureServiceBusOptions): DynamicOptions;

    hasAzureEventHub(): boolean;
    clearAzureEventHub(): void;
    getAzureEventHub(): DynamicGroupAzureEventHubOptions | undefined;
    setAzureEventHub(value?: DynamicGroupAzureEventHubOptions): DynamicOptions;

    hasGcpPubsub(): boolean;
    clearGcpPubsub(): void;
    getGcpPubsub(): DynamicGroupGCPPubSubOptions | undefined;
    setGcpPubsub(value?: DynamicGroupGCPPubSubOptions): DynamicOptions;

    hasKubemqQueue(): boolean;
    clearKubemqQueue(): void;
    getKubemqQueue(): DynamicGroupKubeMQQueueOptions | undefined;
    setKubemqQueue(value?: DynamicGroupKubeMQQueueOptions): DynamicOptions;

    hasRedisPubsub(): boolean;
    clearRedisPubsub(): void;
    getRedisPubsub(): DynamicGroupRedisPubSubOptions | undefined;
    setRedisPubsub(value?: DynamicGroupRedisPubSubOptions): DynamicOptions;

    hasRedisStreams(): boolean;
    clearRedisStreams(): void;
    getRedisStreams(): DynamicGroupRedisStreamsOptions | undefined;
    setRedisStreams(value?: DynamicGroupRedisStreamsOptions): DynamicOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicOptions.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicOptions): DynamicOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicOptions;
    static deserializeBinaryFromReader(message: DynamicOptions, reader: jspb.BinaryReader): DynamicOptions;
}

export namespace DynamicOptions {
    export type AsObject = {
        apiToken: string,
        GrpcAddress: string,
        GrpcTimeoutSeconds: number,
        GrpcInsecure: boolean,
        kafka?: DynamicGroupKafkaOptions.AsObject,
        activemq?: DynamicGroupActiveMQOptions.AsObject,
        awssqs?: DynamicGroupAWSSQSOptions.AsObject,
        awssns?: DynamicGroupAWSSNSOptions.AsObject,
        nats?: DynamicGroupNatsOptions.AsObject,
        natsStreaming?: DynamicGroupNatsStreamingOptions.AsObject,
        nsq?: DynamicGroupNSQOptions.AsObject,
        rabbit?: DynamicGroupRabbitOptions.AsObject,
        mqtt?: DynamicGroupMQTTOptions.AsObject,
        azureServiceBus?: DynamicGroupAzureServiceBusOptions.AsObject,
        azureEventHub?: DynamicGroupAzureEventHubOptions.AsObject,
        gcpPubsub?: DynamicGroupGCPPubSubOptions.AsObject,
        kubemqQueue?: DynamicGroupKubeMQQueueOptions.AsObject,
        redisPubsub?: DynamicGroupRedisPubSubOptions.AsObject,
        redisStreams?: DynamicGroupRedisStreamsOptions.AsObject,
    }
}

export class DynamicGroupKafkaOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_kafka_pb.KafkaConn | undefined;
    setConn(value?: args_ps_args_kafka_pb.KafkaConn): DynamicGroupKafkaOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_kafka_pb.KafkaWriteArgs | undefined;
    setArgs(value?: args_ps_args_kafka_pb.KafkaWriteArgs): DynamicGroupKafkaOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicGroupKafkaOptions.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicGroupKafkaOptions): DynamicGroupKafkaOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicGroupKafkaOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicGroupKafkaOptions;
    static deserializeBinaryFromReader(message: DynamicGroupKafkaOptions, reader: jspb.BinaryReader): DynamicGroupKafkaOptions;
}

export namespace DynamicGroupKafkaOptions {
    export type AsObject = {
        Conn?: args_ps_args_kafka_pb.KafkaConn.AsObject,
        args?: args_ps_args_kafka_pb.KafkaWriteArgs.AsObject,
    }
}

export class DynamicGroupActiveMQOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_activemq_pb.ActiveMQConn | undefined;
    setConn(value?: args_ps_args_activemq_pb.ActiveMQConn): DynamicGroupActiveMQOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_activemq_pb.ActiveMQWriteArgs | undefined;
    setArgs(value?: args_ps_args_activemq_pb.ActiveMQWriteArgs): DynamicGroupActiveMQOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicGroupActiveMQOptions.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicGroupActiveMQOptions): DynamicGroupActiveMQOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicGroupActiveMQOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicGroupActiveMQOptions;
    static deserializeBinaryFromReader(message: DynamicGroupActiveMQOptions, reader: jspb.BinaryReader): DynamicGroupActiveMQOptions;
}

export namespace DynamicGroupActiveMQOptions {
    export type AsObject = {
        Conn?: args_ps_args_activemq_pb.ActiveMQConn.AsObject,
        args?: args_ps_args_activemq_pb.ActiveMQWriteArgs.AsObject,
    }
}

export class DynamicGroupAWSSQSOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_aws_sqs_pb.AWSSQSConn | undefined;
    setConn(value?: args_ps_args_aws_sqs_pb.AWSSQSConn): DynamicGroupAWSSQSOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_aws_sqs_pb.AWSSQSWriteArgs | undefined;
    setArgs(value?: args_ps_args_aws_sqs_pb.AWSSQSWriteArgs): DynamicGroupAWSSQSOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicGroupAWSSQSOptions.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicGroupAWSSQSOptions): DynamicGroupAWSSQSOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicGroupAWSSQSOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicGroupAWSSQSOptions;
    static deserializeBinaryFromReader(message: DynamicGroupAWSSQSOptions, reader: jspb.BinaryReader): DynamicGroupAWSSQSOptions;
}

export namespace DynamicGroupAWSSQSOptions {
    export type AsObject = {
        Conn?: args_ps_args_aws_sqs_pb.AWSSQSConn.AsObject,
        args?: args_ps_args_aws_sqs_pb.AWSSQSWriteArgs.AsObject,
    }
}

export class DynamicGroupAWSSNSOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_aws_sns_pb.AWSSNSConn | undefined;
    setConn(value?: args_ps_args_aws_sns_pb.AWSSNSConn): DynamicGroupAWSSNSOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_aws_sns_pb.AWSSNSWriteArgs | undefined;
    setArgs(value?: args_ps_args_aws_sns_pb.AWSSNSWriteArgs): DynamicGroupAWSSNSOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicGroupAWSSNSOptions.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicGroupAWSSNSOptions): DynamicGroupAWSSNSOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicGroupAWSSNSOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicGroupAWSSNSOptions;
    static deserializeBinaryFromReader(message: DynamicGroupAWSSNSOptions, reader: jspb.BinaryReader): DynamicGroupAWSSNSOptions;
}

export namespace DynamicGroupAWSSNSOptions {
    export type AsObject = {
        Conn?: args_ps_args_aws_sns_pb.AWSSNSConn.AsObject,
        args?: args_ps_args_aws_sns_pb.AWSSNSWriteArgs.AsObject,
    }
}

export class DynamicGroupNatsOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_nats_pb.NatsConn | undefined;
    setConn(value?: args_ps_args_nats_pb.NatsConn): DynamicGroupNatsOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_nats_pb.NatsWriteArgs | undefined;
    setArgs(value?: args_ps_args_nats_pb.NatsWriteArgs): DynamicGroupNatsOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicGroupNatsOptions.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicGroupNatsOptions): DynamicGroupNatsOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicGroupNatsOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicGroupNatsOptions;
    static deserializeBinaryFromReader(message: DynamicGroupNatsOptions, reader: jspb.BinaryReader): DynamicGroupNatsOptions;
}

export namespace DynamicGroupNatsOptions {
    export type AsObject = {
        Conn?: args_ps_args_nats_pb.NatsConn.AsObject,
        args?: args_ps_args_nats_pb.NatsWriteArgs.AsObject,
    }
}

export class DynamicGroupNatsStreamingOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_nats_streaming_pb.NatsStreamingConn | undefined;
    setConn(value?: args_ps_args_nats_streaming_pb.NatsStreamingConn): DynamicGroupNatsStreamingOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_nats_streaming_pb.NatsStreamingWriteArgs | undefined;
    setArgs(value?: args_ps_args_nats_streaming_pb.NatsStreamingWriteArgs): DynamicGroupNatsStreamingOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicGroupNatsStreamingOptions.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicGroupNatsStreamingOptions): DynamicGroupNatsStreamingOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicGroupNatsStreamingOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicGroupNatsStreamingOptions;
    static deserializeBinaryFromReader(message: DynamicGroupNatsStreamingOptions, reader: jspb.BinaryReader): DynamicGroupNatsStreamingOptions;
}

export namespace DynamicGroupNatsStreamingOptions {
    export type AsObject = {
        Conn?: args_ps_args_nats_streaming_pb.NatsStreamingConn.AsObject,
        args?: args_ps_args_nats_streaming_pb.NatsStreamingWriteArgs.AsObject,
    }
}

export class DynamicGroupNSQOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_nsq_pb.NSQConn | undefined;
    setConn(value?: args_ps_args_nsq_pb.NSQConn): DynamicGroupNSQOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_nsq_pb.NSQWriteArgs | undefined;
    setArgs(value?: args_ps_args_nsq_pb.NSQWriteArgs): DynamicGroupNSQOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicGroupNSQOptions.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicGroupNSQOptions): DynamicGroupNSQOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicGroupNSQOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicGroupNSQOptions;
    static deserializeBinaryFromReader(message: DynamicGroupNSQOptions, reader: jspb.BinaryReader): DynamicGroupNSQOptions;
}

export namespace DynamicGroupNSQOptions {
    export type AsObject = {
        Conn?: args_ps_args_nsq_pb.NSQConn.AsObject,
        args?: args_ps_args_nsq_pb.NSQWriteArgs.AsObject,
    }
}

export class DynamicGroupRabbitOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_rabbit_pb.RabbitConn | undefined;
    setConn(value?: args_ps_args_rabbit_pb.RabbitConn): DynamicGroupRabbitOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_rabbit_pb.RabbitWriteArgs | undefined;
    setArgs(value?: args_ps_args_rabbit_pb.RabbitWriteArgs): DynamicGroupRabbitOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicGroupRabbitOptions.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicGroupRabbitOptions): DynamicGroupRabbitOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicGroupRabbitOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicGroupRabbitOptions;
    static deserializeBinaryFromReader(message: DynamicGroupRabbitOptions, reader: jspb.BinaryReader): DynamicGroupRabbitOptions;
}

export namespace DynamicGroupRabbitOptions {
    export type AsObject = {
        Conn?: args_ps_args_rabbit_pb.RabbitConn.AsObject,
        args?: args_ps_args_rabbit_pb.RabbitWriteArgs.AsObject,
    }
}

export class DynamicGroupRabbitStreamsOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_rabbit_streams_pb.RabbitStreamsConn | undefined;
    setConn(value?: args_ps_args_rabbit_streams_pb.RabbitStreamsConn): DynamicGroupRabbitStreamsOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_rabbit_streams_pb.RabbitStreamsWriteArgs | undefined;
    setArgs(value?: args_ps_args_rabbit_streams_pb.RabbitStreamsWriteArgs): DynamicGroupRabbitStreamsOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicGroupRabbitStreamsOptions.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicGroupRabbitStreamsOptions): DynamicGroupRabbitStreamsOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicGroupRabbitStreamsOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicGroupRabbitStreamsOptions;
    static deserializeBinaryFromReader(message: DynamicGroupRabbitStreamsOptions, reader: jspb.BinaryReader): DynamicGroupRabbitStreamsOptions;
}

export namespace DynamicGroupRabbitStreamsOptions {
    export type AsObject = {
        Conn?: args_ps_args_rabbit_streams_pb.RabbitStreamsConn.AsObject,
        args?: args_ps_args_rabbit_streams_pb.RabbitStreamsWriteArgs.AsObject,
    }
}

export class DynamicGroupRedisPubSubOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_redis_pubsub_pb.RedisPubSubConn | undefined;
    setConn(value?: args_ps_args_redis_pubsub_pb.RedisPubSubConn): DynamicGroupRedisPubSubOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_redis_pubsub_pb.RedisPubSubWriteArgs | undefined;
    setArgs(value?: args_ps_args_redis_pubsub_pb.RedisPubSubWriteArgs): DynamicGroupRedisPubSubOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicGroupRedisPubSubOptions.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicGroupRedisPubSubOptions): DynamicGroupRedisPubSubOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicGroupRedisPubSubOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicGroupRedisPubSubOptions;
    static deserializeBinaryFromReader(message: DynamicGroupRedisPubSubOptions, reader: jspb.BinaryReader): DynamicGroupRedisPubSubOptions;
}

export namespace DynamicGroupRedisPubSubOptions {
    export type AsObject = {
        Conn?: args_ps_args_redis_pubsub_pb.RedisPubSubConn.AsObject,
        args?: args_ps_args_redis_pubsub_pb.RedisPubSubWriteArgs.AsObject,
    }
}

export class DynamicGroupRedisStreamsOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_redis_streams_pb.RedisStreamsConn | undefined;
    setConn(value?: args_ps_args_redis_streams_pb.RedisStreamsConn): DynamicGroupRedisStreamsOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_redis_streams_pb.RedisStreamsWriteArgs | undefined;
    setArgs(value?: args_ps_args_redis_streams_pb.RedisStreamsWriteArgs): DynamicGroupRedisStreamsOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicGroupRedisStreamsOptions.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicGroupRedisStreamsOptions): DynamicGroupRedisStreamsOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicGroupRedisStreamsOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicGroupRedisStreamsOptions;
    static deserializeBinaryFromReader(message: DynamicGroupRedisStreamsOptions, reader: jspb.BinaryReader): DynamicGroupRedisStreamsOptions;
}

export namespace DynamicGroupRedisStreamsOptions {
    export type AsObject = {
        Conn?: args_ps_args_redis_streams_pb.RedisStreamsConn.AsObject,
        args?: args_ps_args_redis_streams_pb.RedisStreamsWriteArgs.AsObject,
    }
}

export class DynamicGroupAzureEventHubOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_azure_event_hub_pb.AzureEventHubConn | undefined;
    setConn(value?: args_ps_args_azure_event_hub_pb.AzureEventHubConn): DynamicGroupAzureEventHubOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_azure_event_hub_pb.AzureEventHubWriteArgs | undefined;
    setArgs(value?: args_ps_args_azure_event_hub_pb.AzureEventHubWriteArgs): DynamicGroupAzureEventHubOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicGroupAzureEventHubOptions.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicGroupAzureEventHubOptions): DynamicGroupAzureEventHubOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicGroupAzureEventHubOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicGroupAzureEventHubOptions;
    static deserializeBinaryFromReader(message: DynamicGroupAzureEventHubOptions, reader: jspb.BinaryReader): DynamicGroupAzureEventHubOptions;
}

export namespace DynamicGroupAzureEventHubOptions {
    export type AsObject = {
        Conn?: args_ps_args_azure_event_hub_pb.AzureEventHubConn.AsObject,
        args?: args_ps_args_azure_event_hub_pb.AzureEventHubWriteArgs.AsObject,
    }
}

export class DynamicGroupAzureServiceBusOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_azure_service_bus_pb.AzureServiceBusConn | undefined;
    setConn(value?: args_ps_args_azure_service_bus_pb.AzureServiceBusConn): DynamicGroupAzureServiceBusOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_azure_service_bus_pb.AzureServiceBusWriteArgs | undefined;
    setArgs(value?: args_ps_args_azure_service_bus_pb.AzureServiceBusWriteArgs): DynamicGroupAzureServiceBusOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicGroupAzureServiceBusOptions.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicGroupAzureServiceBusOptions): DynamicGroupAzureServiceBusOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicGroupAzureServiceBusOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicGroupAzureServiceBusOptions;
    static deserializeBinaryFromReader(message: DynamicGroupAzureServiceBusOptions, reader: jspb.BinaryReader): DynamicGroupAzureServiceBusOptions;
}

export namespace DynamicGroupAzureServiceBusOptions {
    export type AsObject = {
        Conn?: args_ps_args_azure_service_bus_pb.AzureServiceBusConn.AsObject,
        args?: args_ps_args_azure_service_bus_pb.AzureServiceBusWriteArgs.AsObject,
    }
}

export class DynamicGroupMQTTOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_mqtt_pb.MQTTConn | undefined;
    setConn(value?: args_ps_args_mqtt_pb.MQTTConn): DynamicGroupMQTTOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_mqtt_pb.MQTTWriteArgs | undefined;
    setArgs(value?: args_ps_args_mqtt_pb.MQTTWriteArgs): DynamicGroupMQTTOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicGroupMQTTOptions.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicGroupMQTTOptions): DynamicGroupMQTTOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicGroupMQTTOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicGroupMQTTOptions;
    static deserializeBinaryFromReader(message: DynamicGroupMQTTOptions, reader: jspb.BinaryReader): DynamicGroupMQTTOptions;
}

export namespace DynamicGroupMQTTOptions {
    export type AsObject = {
        Conn?: args_ps_args_mqtt_pb.MQTTConn.AsObject,
        args?: args_ps_args_mqtt_pb.MQTTWriteArgs.AsObject,
    }
}

export class DynamicGroupGCPPubSubOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_gcp_pubsub_pb.GCPPubSubConn | undefined;
    setConn(value?: args_ps_args_gcp_pubsub_pb.GCPPubSubConn): DynamicGroupGCPPubSubOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_gcp_pubsub_pb.GCPPubSubWriteArgs | undefined;
    setArgs(value?: args_ps_args_gcp_pubsub_pb.GCPPubSubWriteArgs): DynamicGroupGCPPubSubOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicGroupGCPPubSubOptions.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicGroupGCPPubSubOptions): DynamicGroupGCPPubSubOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicGroupGCPPubSubOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicGroupGCPPubSubOptions;
    static deserializeBinaryFromReader(message: DynamicGroupGCPPubSubOptions, reader: jspb.BinaryReader): DynamicGroupGCPPubSubOptions;
}

export namespace DynamicGroupGCPPubSubOptions {
    export type AsObject = {
        Conn?: args_ps_args_gcp_pubsub_pb.GCPPubSubConn.AsObject,
        args?: args_ps_args_gcp_pubsub_pb.GCPPubSubWriteArgs.AsObject,
    }
}

export class DynamicGroupKubeMQQueueOptions extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_ps_args_kubemq_queue_pb.KubeMQQueueConn | undefined;
    setConn(value?: args_ps_args_kubemq_queue_pb.KubeMQQueueConn): DynamicGroupKubeMQQueueOptions;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_ps_args_kubemq_queue_pb.KubeMQQueueWriteArgs | undefined;
    setArgs(value?: args_ps_args_kubemq_queue_pb.KubeMQQueueWriteArgs): DynamicGroupKubeMQQueueOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicGroupKubeMQQueueOptions.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicGroupKubeMQQueueOptions): DynamicGroupKubeMQQueueOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicGroupKubeMQQueueOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicGroupKubeMQQueueOptions;
    static deserializeBinaryFromReader(message: DynamicGroupKubeMQQueueOptions, reader: jspb.BinaryReader): DynamicGroupKubeMQQueueOptions;
}

export namespace DynamicGroupKubeMQQueueOptions {
    export type AsObject = {
        Conn?: args_ps_args_kubemq_queue_pb.KubeMQQueueConn.AsObject,
        args?: args_ps_args_kubemq_queue_pb.KubeMQQueueWriteArgs.AsObject,
    }
}
