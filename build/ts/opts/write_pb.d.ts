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

export class Write extends jspb.Message { 

    hasRecord(): boolean;
    clearRecord(): void;
    getRecord(): records_base_pb.Write | undefined;
    setRecord(value?: records_base_pb.Write): Write;

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): WriteOptsKafka | undefined;
    setKafka(value?: WriteOptsKafka): Write;

    hasActivemq(): boolean;
    clearActivemq(): void;
    getActivemq(): WriteOptsActiveMQ | undefined;
    setActivemq(value?: WriteOptsActiveMQ): Write;

    hasAwssqs(): boolean;
    clearAwssqs(): void;
    getAwssqs(): WriteOptsAWSSQS | undefined;
    setAwssqs(value?: WriteOptsAWSSQS): Write;

    hasAwssns(): boolean;
    clearAwssns(): void;
    getAwssns(): WriteOptsAWSSNS | undefined;
    setAwssns(value?: WriteOptsAWSSNS): Write;

    hasNats(): boolean;
    clearNats(): void;
    getNats(): WriteOptsNats | undefined;
    setNats(value?: WriteOptsNats): Write;

    hasNatsStreaming(): boolean;
    clearNatsStreaming(): void;
    getNatsStreaming(): WriteOptsNatsStreaming | undefined;
    setNatsStreaming(value?: WriteOptsNatsStreaming): Write;

    hasNsq(): boolean;
    clearNsq(): void;
    getNsq(): WriteOptsNSQ | undefined;
    setNsq(value?: WriteOptsNSQ): Write;

    hasPulsar(): boolean;
    clearPulsar(): void;
    getPulsar(): WriteOptsPulsar | undefined;
    setPulsar(value?: WriteOptsPulsar): Write;

    hasRabbit(): boolean;
    clearRabbit(): void;
    getRabbit(): WriteOptsRabbit | undefined;
    setRabbit(value?: WriteOptsRabbit): Write;

    hasRabbitStreams(): boolean;
    clearRabbitStreams(): void;
    getRabbitStreams(): WriteOptsRabbitStreams | undefined;
    setRabbitStreams(value?: WriteOptsRabbitStreams): Write;

    hasMqtt(): boolean;
    clearMqtt(): void;
    getMqtt(): WriteOptsMQTT | undefined;
    setMqtt(value?: WriteOptsMQTT): Write;

    hasAzureServiceBus(): boolean;
    clearAzureServiceBus(): void;
    getAzureServiceBus(): WriteOptsAzureServiceBus | undefined;
    setAzureServiceBus(value?: WriteOptsAzureServiceBus): Write;

    hasAzureEventHub(): boolean;
    clearAzureEventHub(): void;
    getAzureEventHub(): WriteOptsAzureEventHub | undefined;
    setAzureEventHub(value?: WriteOptsAzureEventHub): Write;

    hasGcpPubsub(): boolean;
    clearGcpPubsub(): void;
    getGcpPubsub(): WriteOptsGCPPubSub | undefined;
    setGcpPubsub(value?: WriteOptsGCPPubSub): Write;

    hasKubemqQueue(): boolean;
    clearKubemqQueue(): void;
    getKubemqQueue(): WriteOptsKubeMQQueue | undefined;
    setKubemqQueue(value?: WriteOptsKubeMQQueue): Write;

    hasRedisPubsub(): boolean;
    clearRedisPubsub(): void;
    getRedisPubsub(): WriteOptsRedisPubSub | undefined;
    setRedisPubsub(value?: WriteOptsRedisPubSub): Write;

    hasRedisStreams(): boolean;
    clearRedisStreams(): void;
    getRedisStreams(): WriteOptsRedisStreams | undefined;
    setRedisStreams(value?: WriteOptsRedisStreams): Write;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Write.AsObject;
    static toObject(includeInstance: boolean, msg: Write): Write.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Write, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Write;
    static deserializeBinaryFromReader(message: Write, reader: jspb.BinaryReader): Write;
}

export namespace Write {
    export type AsObject = {
        record?: records_base_pb.Write.AsObject,
        kafka?: WriteOptsKafka.AsObject,
        activemq?: WriteOptsActiveMQ.AsObject,
        awssqs?: WriteOptsAWSSQS.AsObject,
        awssns?: WriteOptsAWSSNS.AsObject,
        nats?: WriteOptsNats.AsObject,
        natsStreaming?: WriteOptsNatsStreaming.AsObject,
        nsq?: WriteOptsNSQ.AsObject,
        pulsar?: WriteOptsPulsar.AsObject,
        rabbit?: WriteOptsRabbit.AsObject,
        rabbitStreams?: WriteOptsRabbitStreams.AsObject,
        mqtt?: WriteOptsMQTT.AsObject,
        azureServiceBus?: WriteOptsAzureServiceBus.AsObject,
        azureEventHub?: WriteOptsAzureEventHub.AsObject,
        gcpPubsub?: WriteOptsGCPPubSub.AsObject,
        kubemqQueue?: WriteOptsKubeMQQueue.AsObject,
        redisPubsub?: WriteOptsRedisPubSub.AsObject,
        redisStreams?: WriteOptsRedisStreams.AsObject,
    }
}

export class WriteOptsKafka extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_kafka_pb.KafkaConn | undefined;
    setConn(value?: args_kafka_pb.KafkaConn): WriteOptsKafka;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_kafka_pb.KafkaWriteArgs | undefined;
    setArgs(value?: args_kafka_pb.KafkaWriteArgs): WriteOptsKafka;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteOptsKafka.AsObject;
    static toObject(includeInstance: boolean, msg: WriteOptsKafka): WriteOptsKafka.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteOptsKafka, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteOptsKafka;
    static deserializeBinaryFromReader(message: WriteOptsKafka, reader: jspb.BinaryReader): WriteOptsKafka;
}

export namespace WriteOptsKafka {
    export type AsObject = {
        Conn?: args_kafka_pb.KafkaConn.AsObject,
        args?: args_kafka_pb.KafkaWriteArgs.AsObject,
    }
}

export class WriteOptsActiveMQ extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_activemq_pb.ActiveMQConn | undefined;
    setConn(value?: args_activemq_pb.ActiveMQConn): WriteOptsActiveMQ;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_activemq_pb.ActiveMQWriteArgs | undefined;
    setArgs(value?: args_activemq_pb.ActiveMQWriteArgs): WriteOptsActiveMQ;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteOptsActiveMQ.AsObject;
    static toObject(includeInstance: boolean, msg: WriteOptsActiveMQ): WriteOptsActiveMQ.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteOptsActiveMQ, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteOptsActiveMQ;
    static deserializeBinaryFromReader(message: WriteOptsActiveMQ, reader: jspb.BinaryReader): WriteOptsActiveMQ;
}

export namespace WriteOptsActiveMQ {
    export type AsObject = {
        Conn?: args_activemq_pb.ActiveMQConn.AsObject,
        args?: args_activemq_pb.ActiveMQWriteArgs.AsObject,
    }
}

export class WriteOptsAWSSQS extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_aws_sqs_pb.AWSSQSConn | undefined;
    setConn(value?: args_aws_sqs_pb.AWSSQSConn): WriteOptsAWSSQS;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_aws_sqs_pb.AWSSQSWriteArgs | undefined;
    setArgs(value?: args_aws_sqs_pb.AWSSQSWriteArgs): WriteOptsAWSSQS;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteOptsAWSSQS.AsObject;
    static toObject(includeInstance: boolean, msg: WriteOptsAWSSQS): WriteOptsAWSSQS.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteOptsAWSSQS, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteOptsAWSSQS;
    static deserializeBinaryFromReader(message: WriteOptsAWSSQS, reader: jspb.BinaryReader): WriteOptsAWSSQS;
}

export namespace WriteOptsAWSSQS {
    export type AsObject = {
        Conn?: args_aws_sqs_pb.AWSSQSConn.AsObject,
        args?: args_aws_sqs_pb.AWSSQSWriteArgs.AsObject,
    }
}

export class WriteOptsAWSSNS extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_aws_sns_pb.AWSSNSConn | undefined;
    setConn(value?: args_aws_sns_pb.AWSSNSConn): WriteOptsAWSSNS;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_aws_sns_pb.AWSSNSWriteArgs | undefined;
    setArgs(value?: args_aws_sns_pb.AWSSNSWriteArgs): WriteOptsAWSSNS;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteOptsAWSSNS.AsObject;
    static toObject(includeInstance: boolean, msg: WriteOptsAWSSNS): WriteOptsAWSSNS.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteOptsAWSSNS, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteOptsAWSSNS;
    static deserializeBinaryFromReader(message: WriteOptsAWSSNS, reader: jspb.BinaryReader): WriteOptsAWSSNS;
}

export namespace WriteOptsAWSSNS {
    export type AsObject = {
        Conn?: args_aws_sns_pb.AWSSNSConn.AsObject,
        args?: args_aws_sns_pb.AWSSNSWriteArgs.AsObject,
    }
}

export class WriteOptsNats extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_nats_pb.NatsConn | undefined;
    setConn(value?: args_nats_pb.NatsConn): WriteOptsNats;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_nats_pb.NatsWriteArgs | undefined;
    setArgs(value?: args_nats_pb.NatsWriteArgs): WriteOptsNats;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteOptsNats.AsObject;
    static toObject(includeInstance: boolean, msg: WriteOptsNats): WriteOptsNats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteOptsNats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteOptsNats;
    static deserializeBinaryFromReader(message: WriteOptsNats, reader: jspb.BinaryReader): WriteOptsNats;
}

export namespace WriteOptsNats {
    export type AsObject = {
        Conn?: args_nats_pb.NatsConn.AsObject,
        args?: args_nats_pb.NatsWriteArgs.AsObject,
    }
}

export class WriteOptsNatsStreaming extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_nats_streaming_pb.NatsStreamingConn | undefined;
    setConn(value?: args_nats_streaming_pb.NatsStreamingConn): WriteOptsNatsStreaming;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_nats_streaming_pb.NatsStreamingWriteArgs | undefined;
    setArgs(value?: args_nats_streaming_pb.NatsStreamingWriteArgs): WriteOptsNatsStreaming;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteOptsNatsStreaming.AsObject;
    static toObject(includeInstance: boolean, msg: WriteOptsNatsStreaming): WriteOptsNatsStreaming.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteOptsNatsStreaming, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteOptsNatsStreaming;
    static deserializeBinaryFromReader(message: WriteOptsNatsStreaming, reader: jspb.BinaryReader): WriteOptsNatsStreaming;
}

export namespace WriteOptsNatsStreaming {
    export type AsObject = {
        Conn?: args_nats_streaming_pb.NatsStreamingConn.AsObject,
        args?: args_nats_streaming_pb.NatsStreamingWriteArgs.AsObject,
    }
}

export class WriteOptsNSQ extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_nsq_pb.NSQConn | undefined;
    setConn(value?: args_nsq_pb.NSQConn): WriteOptsNSQ;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_nsq_pb.NSQWriteArgs | undefined;
    setArgs(value?: args_nsq_pb.NSQWriteArgs): WriteOptsNSQ;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteOptsNSQ.AsObject;
    static toObject(includeInstance: boolean, msg: WriteOptsNSQ): WriteOptsNSQ.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteOptsNSQ, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteOptsNSQ;
    static deserializeBinaryFromReader(message: WriteOptsNSQ, reader: jspb.BinaryReader): WriteOptsNSQ;
}

export namespace WriteOptsNSQ {
    export type AsObject = {
        Conn?: args_nsq_pb.NSQConn.AsObject,
        args?: args_nsq_pb.NSQWriteArgs.AsObject,
    }
}

export class WriteOptsPulsar extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_pulsar_pb.PulsarConn | undefined;
    setConn(value?: args_pulsar_pb.PulsarConn): WriteOptsPulsar;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_pulsar_pb.PulsarWriteArgs | undefined;
    setArgs(value?: args_pulsar_pb.PulsarWriteArgs): WriteOptsPulsar;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteOptsPulsar.AsObject;
    static toObject(includeInstance: boolean, msg: WriteOptsPulsar): WriteOptsPulsar.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteOptsPulsar, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteOptsPulsar;
    static deserializeBinaryFromReader(message: WriteOptsPulsar, reader: jspb.BinaryReader): WriteOptsPulsar;
}

export namespace WriteOptsPulsar {
    export type AsObject = {
        Conn?: args_pulsar_pb.PulsarConn.AsObject,
        args?: args_pulsar_pb.PulsarWriteArgs.AsObject,
    }
}

export class WriteOptsRabbit extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_rabbit_pb.RabbitConn | undefined;
    setConn(value?: args_rabbit_pb.RabbitConn): WriteOptsRabbit;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_rabbit_pb.RabbitWriteArgs | undefined;
    setArgs(value?: args_rabbit_pb.RabbitWriteArgs): WriteOptsRabbit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteOptsRabbit.AsObject;
    static toObject(includeInstance: boolean, msg: WriteOptsRabbit): WriteOptsRabbit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteOptsRabbit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteOptsRabbit;
    static deserializeBinaryFromReader(message: WriteOptsRabbit, reader: jspb.BinaryReader): WriteOptsRabbit;
}

export namespace WriteOptsRabbit {
    export type AsObject = {
        Conn?: args_rabbit_pb.RabbitConn.AsObject,
        args?: args_rabbit_pb.RabbitWriteArgs.AsObject,
    }
}

export class WriteOptsRabbitStreams extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_rabbit_streams_pb.RabbitStreamsConn | undefined;
    setConn(value?: args_rabbit_streams_pb.RabbitStreamsConn): WriteOptsRabbitStreams;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_rabbit_streams_pb.RabbitStreamsWriteArgs | undefined;
    setArgs(value?: args_rabbit_streams_pb.RabbitStreamsWriteArgs): WriteOptsRabbitStreams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteOptsRabbitStreams.AsObject;
    static toObject(includeInstance: boolean, msg: WriteOptsRabbitStreams): WriteOptsRabbitStreams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteOptsRabbitStreams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteOptsRabbitStreams;
    static deserializeBinaryFromReader(message: WriteOptsRabbitStreams, reader: jspb.BinaryReader): WriteOptsRabbitStreams;
}

export namespace WriteOptsRabbitStreams {
    export type AsObject = {
        Conn?: args_rabbit_streams_pb.RabbitStreamsConn.AsObject,
        args?: args_rabbit_streams_pb.RabbitStreamsWriteArgs.AsObject,
    }
}

export class WriteOptsRedisPubSub extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_redis_pubsub_pb.RedisPubSubConn | undefined;
    setConn(value?: args_redis_pubsub_pb.RedisPubSubConn): WriteOptsRedisPubSub;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_redis_pubsub_pb.RedisPubSubWriteArgs | undefined;
    setArgs(value?: args_redis_pubsub_pb.RedisPubSubWriteArgs): WriteOptsRedisPubSub;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteOptsRedisPubSub.AsObject;
    static toObject(includeInstance: boolean, msg: WriteOptsRedisPubSub): WriteOptsRedisPubSub.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteOptsRedisPubSub, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteOptsRedisPubSub;
    static deserializeBinaryFromReader(message: WriteOptsRedisPubSub, reader: jspb.BinaryReader): WriteOptsRedisPubSub;
}

export namespace WriteOptsRedisPubSub {
    export type AsObject = {
        Conn?: args_redis_pubsub_pb.RedisPubSubConn.AsObject,
        args?: args_redis_pubsub_pb.RedisPubSubWriteArgs.AsObject,
    }
}

export class WriteOptsRedisStreams extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_redis_streams_pb.RedisStreamsConn | undefined;
    setConn(value?: args_redis_streams_pb.RedisStreamsConn): WriteOptsRedisStreams;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_redis_streams_pb.RedisStreamsWriteArgs | undefined;
    setArgs(value?: args_redis_streams_pb.RedisStreamsWriteArgs): WriteOptsRedisStreams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteOptsRedisStreams.AsObject;
    static toObject(includeInstance: boolean, msg: WriteOptsRedisStreams): WriteOptsRedisStreams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteOptsRedisStreams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteOptsRedisStreams;
    static deserializeBinaryFromReader(message: WriteOptsRedisStreams, reader: jspb.BinaryReader): WriteOptsRedisStreams;
}

export namespace WriteOptsRedisStreams {
    export type AsObject = {
        Conn?: args_redis_streams_pb.RedisStreamsConn.AsObject,
        args?: args_redis_streams_pb.RedisStreamsWriteArgs.AsObject,
    }
}

export class WriteOptsAzureEventHub extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_azure_event_hub_pb.AzureEventHubConn | undefined;
    setConn(value?: args_azure_event_hub_pb.AzureEventHubConn): WriteOptsAzureEventHub;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_azure_event_hub_pb.AzureEventHubWriteArgs | undefined;
    setArgs(value?: args_azure_event_hub_pb.AzureEventHubWriteArgs): WriteOptsAzureEventHub;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteOptsAzureEventHub.AsObject;
    static toObject(includeInstance: boolean, msg: WriteOptsAzureEventHub): WriteOptsAzureEventHub.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteOptsAzureEventHub, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteOptsAzureEventHub;
    static deserializeBinaryFromReader(message: WriteOptsAzureEventHub, reader: jspb.BinaryReader): WriteOptsAzureEventHub;
}

export namespace WriteOptsAzureEventHub {
    export type AsObject = {
        Conn?: args_azure_event_hub_pb.AzureEventHubConn.AsObject,
        args?: args_azure_event_hub_pb.AzureEventHubWriteArgs.AsObject,
    }
}

export class WriteOptsAzureServiceBus extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_azure_service_bus_pb.AzureServiceBusConn | undefined;
    setConn(value?: args_azure_service_bus_pb.AzureServiceBusConn): WriteOptsAzureServiceBus;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_azure_service_bus_pb.AzureServiceBusWriteArgs | undefined;
    setArgs(value?: args_azure_service_bus_pb.AzureServiceBusWriteArgs): WriteOptsAzureServiceBus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteOptsAzureServiceBus.AsObject;
    static toObject(includeInstance: boolean, msg: WriteOptsAzureServiceBus): WriteOptsAzureServiceBus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteOptsAzureServiceBus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteOptsAzureServiceBus;
    static deserializeBinaryFromReader(message: WriteOptsAzureServiceBus, reader: jspb.BinaryReader): WriteOptsAzureServiceBus;
}

export namespace WriteOptsAzureServiceBus {
    export type AsObject = {
        Conn?: args_azure_service_bus_pb.AzureServiceBusConn.AsObject,
        args?: args_azure_service_bus_pb.AzureServiceBusWriteArgs.AsObject,
    }
}

export class WriteOptsMQTT extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_mqtt_pb.MQTTConn | undefined;
    setConn(value?: args_mqtt_pb.MQTTConn): WriteOptsMQTT;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_mqtt_pb.MQTTWriteArgs | undefined;
    setArgs(value?: args_mqtt_pb.MQTTWriteArgs): WriteOptsMQTT;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteOptsMQTT.AsObject;
    static toObject(includeInstance: boolean, msg: WriteOptsMQTT): WriteOptsMQTT.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteOptsMQTT, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteOptsMQTT;
    static deserializeBinaryFromReader(message: WriteOptsMQTT, reader: jspb.BinaryReader): WriteOptsMQTT;
}

export namespace WriteOptsMQTT {
    export type AsObject = {
        Conn?: args_mqtt_pb.MQTTConn.AsObject,
        args?: args_mqtt_pb.MQTTWriteArgs.AsObject,
    }
}

export class WriteOptsGCPPubSub extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_gcp_pubsub_pb.GCPPubSubConn | undefined;
    setConn(value?: args_gcp_pubsub_pb.GCPPubSubConn): WriteOptsGCPPubSub;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_gcp_pubsub_pb.GCPPubSubWriteArgs | undefined;
    setArgs(value?: args_gcp_pubsub_pb.GCPPubSubWriteArgs): WriteOptsGCPPubSub;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteOptsGCPPubSub.AsObject;
    static toObject(includeInstance: boolean, msg: WriteOptsGCPPubSub): WriteOptsGCPPubSub.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteOptsGCPPubSub, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteOptsGCPPubSub;
    static deserializeBinaryFromReader(message: WriteOptsGCPPubSub, reader: jspb.BinaryReader): WriteOptsGCPPubSub;
}

export namespace WriteOptsGCPPubSub {
    export type AsObject = {
        Conn?: args_gcp_pubsub_pb.GCPPubSubConn.AsObject,
        args?: args_gcp_pubsub_pb.GCPPubSubWriteArgs.AsObject,
    }
}

export class WriteOptsKubeMQQueue extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_kubemq_queue_pb.KubeMQQueueConn | undefined;
    setConn(value?: args_kubemq_queue_pb.KubeMQQueueConn): WriteOptsKubeMQQueue;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_kubemq_queue_pb.KubeMQQueueWriteArgs | undefined;
    setArgs(value?: args_kubemq_queue_pb.KubeMQQueueWriteArgs): WriteOptsKubeMQQueue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteOptsKubeMQQueue.AsObject;
    static toObject(includeInstance: boolean, msg: WriteOptsKubeMQQueue): WriteOptsKubeMQQueue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteOptsKubeMQQueue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteOptsKubeMQQueue;
    static deserializeBinaryFromReader(message: WriteOptsKubeMQQueue, reader: jspb.BinaryReader): WriteOptsKubeMQQueue;
}

export namespace WriteOptsKubeMQQueue {
    export type AsObject = {
        Conn?: args_kubemq_queue_pb.KubeMQQueueConn.AsObject,
        args?: args_kubemq_queue_pb.KubeMQQueueWriteArgs.AsObject,
    }
}