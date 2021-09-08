// package: protos
// file: x_read.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as args_activemq_pb from "./args/activemq_pb";
import * as args_azure_service_bus_pb from "./args/azure-service-bus_pb";
import * as args_azure_event_hub_pb from "./args/azure-event-hub_pb";
import * as args_aws_sqs_pb from "./args/aws-sqs_pb";
import * as args_gcp_pubsub_pb from "./args/gcp-pubsub_pb";
import * as args_kafka_pb from "./args/kafka_pb";
import * as args_kubemq_queue_pb from "./args/kubemq-queue_pb";
import * as args_mongo_pb from "./args/mongo_pb";
import * as args_mqtt_pb from "./args/mqtt_pb";
import * as args_nats_pb from "./args/nats_pb";
import * as args_nats_streaming_pb from "./args/nats-streaming_pb";
import * as args_nsq_pb from "./args/nsq_pb";
import * as args_postgres_pb from "./args/postgres_pb";
import * as args_pulsar_pb from "./args/pulsar_pb";
import * as args_rabbit_pb from "./args/rabbit_pb";
import * as args_rabbit_streams_pb from "./args/rabbit-streams_pb";
import * as args_redis_pubsub_pb from "./args/redis-pubsub_pb";
import * as args_redis_streams_pb from "./args/redis-streams_pb";

export class ReadOpts extends jspb.Message { 

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): ReadOptsKafka | undefined;
    setKafka(value?: ReadOptsKafka): ReadOpts;

    hasActivemq(): boolean;
    clearActivemq(): void;
    getActivemq(): ReadOptsActiveMQ | undefined;
    setActivemq(value?: ReadOptsActiveMQ): ReadOpts;

    hasAwssqs(): boolean;
    clearAwssqs(): void;
    getAwssqs(): ReadOptsAWSSQS | undefined;
    setAwssqs(value?: ReadOptsAWSSQS): ReadOpts;

    hasMongo(): boolean;
    clearMongo(): void;
    getMongo(): ReadOptsMongo | undefined;
    setMongo(value?: ReadOptsMongo): ReadOpts;

    hasNats(): boolean;
    clearNats(): void;
    getNats(): ReadOptsNats | undefined;
    setNats(value?: ReadOptsNats): ReadOpts;

    hasNatsStreaming(): boolean;
    clearNatsStreaming(): void;
    getNatsStreaming(): ReadOptsNatsStreaming | undefined;
    setNatsStreaming(value?: ReadOptsNatsStreaming): ReadOpts;

    hasNsq(): boolean;
    clearNsq(): void;
    getNsq(): ReadOptsNSQ | undefined;
    setNsq(value?: ReadOptsNSQ): ReadOpts;

    hasPulsar(): boolean;
    clearPulsar(): void;
    getPulsar(): ReadOptsPulsar | undefined;
    setPulsar(value?: ReadOptsPulsar): ReadOpts;

    hasRabbit(): boolean;
    clearRabbit(): void;
    getRabbit(): ReadOptsRabbit | undefined;
    setRabbit(value?: ReadOptsRabbit): ReadOpts;

    hasRabbitStreams(): boolean;
    clearRabbitStreams(): void;
    getRabbitStreams(): ReadOptsRabbitStreams | undefined;
    setRabbitStreams(value?: ReadOptsRabbitStreams): ReadOpts;

    hasMqtt(): boolean;
    clearMqtt(): void;
    getMqtt(): ReadOptsMQTT | undefined;
    setMqtt(value?: ReadOptsMQTT): ReadOpts;

    hasAzureServiceBus(): boolean;
    clearAzureServiceBus(): void;
    getAzureServiceBus(): ReadOptsAzureServiceBus | undefined;
    setAzureServiceBus(value?: ReadOptsAzureServiceBus): ReadOpts;

    hasAzureEventHub(): boolean;
    clearAzureEventHub(): void;
    getAzureEventHub(): ReadOptsAzureEventHub | undefined;
    setAzureEventHub(value?: ReadOptsAzureEventHub): ReadOpts;

    hasGcpPubsub(): boolean;
    clearGcpPubsub(): void;
    getGcpPubsub(): ReadOptsGCPPubSub | undefined;
    setGcpPubsub(value?: ReadOptsGCPPubSub): ReadOpts;

    hasKubemqQueue(): boolean;
    clearKubemqQueue(): void;
    getKubemqQueue(): ReadOptsKubeMQQueue | undefined;
    setKubemqQueue(value?: ReadOptsKubeMQQueue): ReadOpts;

    hasRedisPubsub(): boolean;
    clearRedisPubsub(): void;
    getRedisPubsub(): ReadOptsRedisPubSub | undefined;
    setRedisPubsub(value?: ReadOptsRedisPubSub): ReadOpts;

    hasRedisStreams(): boolean;
    clearRedisStreams(): void;
    getRedisStreams(): ReadOptsRedisStreams | undefined;
    setRedisStreams(value?: ReadOptsRedisStreams): ReadOpts;

    hasPostgres(): boolean;
    clearPostgres(): void;
    getPostgres(): ReadOptsPostgres | undefined;
    setPostgres(value?: ReadOptsPostgres): ReadOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOpts.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOpts): ReadOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOpts;
    static deserializeBinaryFromReader(message: ReadOpts, reader: jspb.BinaryReader): ReadOpts;
}

export namespace ReadOpts {
    export type AsObject = {
        kafka?: ReadOptsKafka.AsObject,
        activemq?: ReadOptsActiveMQ.AsObject,
        awssqs?: ReadOptsAWSSQS.AsObject,
        mongo?: ReadOptsMongo.AsObject,
        nats?: ReadOptsNats.AsObject,
        natsStreaming?: ReadOptsNatsStreaming.AsObject,
        nsq?: ReadOptsNSQ.AsObject,
        pulsar?: ReadOptsPulsar.AsObject,
        rabbit?: ReadOptsRabbit.AsObject,
        rabbitStreams?: ReadOptsRabbitStreams.AsObject,
        mqtt?: ReadOptsMQTT.AsObject,
        azureServiceBus?: ReadOptsAzureServiceBus.AsObject,
        azureEventHub?: ReadOptsAzureEventHub.AsObject,
        gcpPubsub?: ReadOptsGCPPubSub.AsObject,
        kubemqQueue?: ReadOptsKubeMQQueue.AsObject,
        redisPubsub?: ReadOptsRedisPubSub.AsObject,
        redisStreams?: ReadOptsRedisStreams.AsObject,
        postgres?: ReadOptsPostgres.AsObject,
    }
}

export class ReadOptsKafka extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_kafka_pb.KafkaConn | undefined;
    setConn(value?: args_kafka_pb.KafkaConn): ReadOptsKafka;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_kafka_pb.KafkaReadOpts | undefined;
    setArgs(value?: args_kafka_pb.KafkaReadOpts): ReadOptsKafka;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOptsKafka.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOptsKafka): ReadOptsKafka.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadOptsKafka, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOptsKafka;
    static deserializeBinaryFromReader(message: ReadOptsKafka, reader: jspb.BinaryReader): ReadOptsKafka;
}

export namespace ReadOptsKafka {
    export type AsObject = {
        conn?: args_kafka_pb.KafkaConn.AsObject,
        args?: args_kafka_pb.KafkaReadOpts.AsObject,
    }
}

export class ReadOptsActiveMQ extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_activemq_pb.ActiveMQConn | undefined;
    setConn(value?: args_activemq_pb.ActiveMQConn): ReadOptsActiveMQ;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_activemq_pb.ActiveMQReadOpts | undefined;
    setArgs(value?: args_activemq_pb.ActiveMQReadOpts): ReadOptsActiveMQ;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOptsActiveMQ.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOptsActiveMQ): ReadOptsActiveMQ.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadOptsActiveMQ, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOptsActiveMQ;
    static deserializeBinaryFromReader(message: ReadOptsActiveMQ, reader: jspb.BinaryReader): ReadOptsActiveMQ;
}

export namespace ReadOptsActiveMQ {
    export type AsObject = {
        conn?: args_activemq_pb.ActiveMQConn.AsObject,
        args?: args_activemq_pb.ActiveMQReadOpts.AsObject,
    }
}

export class ReadOptsAWSSQS extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_aws_sqs_pb.AWSSQSConn | undefined;
    setConn(value?: args_aws_sqs_pb.AWSSQSConn): ReadOptsAWSSQS;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_aws_sqs_pb.AWSSQSReadOpts | undefined;
    setArgs(value?: args_aws_sqs_pb.AWSSQSReadOpts): ReadOptsAWSSQS;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOptsAWSSQS.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOptsAWSSQS): ReadOptsAWSSQS.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadOptsAWSSQS, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOptsAWSSQS;
    static deserializeBinaryFromReader(message: ReadOptsAWSSQS, reader: jspb.BinaryReader): ReadOptsAWSSQS;
}

export namespace ReadOptsAWSSQS {
    export type AsObject = {
        conn?: args_aws_sqs_pb.AWSSQSConn.AsObject,
        args?: args_aws_sqs_pb.AWSSQSReadOpts.AsObject,
    }
}

export class ReadOptsMongo extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_mongo_pb.MongoConn | undefined;
    setConn(value?: args_mongo_pb.MongoConn): ReadOptsMongo;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_mongo_pb.MongoReadOpts | undefined;
    setArgs(value?: args_mongo_pb.MongoReadOpts): ReadOptsMongo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOptsMongo.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOptsMongo): ReadOptsMongo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadOptsMongo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOptsMongo;
    static deserializeBinaryFromReader(message: ReadOptsMongo, reader: jspb.BinaryReader): ReadOptsMongo;
}

export namespace ReadOptsMongo {
    export type AsObject = {
        conn?: args_mongo_pb.MongoConn.AsObject,
        args?: args_mongo_pb.MongoReadOpts.AsObject,
    }
}

export class ReadOptsNats extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_nats_pb.NatsConn | undefined;
    setConn(value?: args_nats_pb.NatsConn): ReadOptsNats;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_nats_pb.NatsReadOpts | undefined;
    setArgs(value?: args_nats_pb.NatsReadOpts): ReadOptsNats;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOptsNats.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOptsNats): ReadOptsNats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadOptsNats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOptsNats;
    static deserializeBinaryFromReader(message: ReadOptsNats, reader: jspb.BinaryReader): ReadOptsNats;
}

export namespace ReadOptsNats {
    export type AsObject = {
        conn?: args_nats_pb.NatsConn.AsObject,
        args?: args_nats_pb.NatsReadOpts.AsObject,
    }
}

export class ReadOptsNatsStreaming extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_nats_streaming_pb.NatsStreamingConn | undefined;
    setConn(value?: args_nats_streaming_pb.NatsStreamingConn): ReadOptsNatsStreaming;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_nats_streaming_pb.NatsStreamingReadOpts | undefined;
    setArgs(value?: args_nats_streaming_pb.NatsStreamingReadOpts): ReadOptsNatsStreaming;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOptsNatsStreaming.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOptsNatsStreaming): ReadOptsNatsStreaming.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadOptsNatsStreaming, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOptsNatsStreaming;
    static deserializeBinaryFromReader(message: ReadOptsNatsStreaming, reader: jspb.BinaryReader): ReadOptsNatsStreaming;
}

export namespace ReadOptsNatsStreaming {
    export type AsObject = {
        conn?: args_nats_streaming_pb.NatsStreamingConn.AsObject,
        args?: args_nats_streaming_pb.NatsStreamingReadOpts.AsObject,
    }
}

export class ReadOptsNSQ extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_nsq_pb.NSQConn | undefined;
    setConn(value?: args_nsq_pb.NSQConn): ReadOptsNSQ;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_nsq_pb.NSQReadOpts | undefined;
    setArgs(value?: args_nsq_pb.NSQReadOpts): ReadOptsNSQ;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOptsNSQ.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOptsNSQ): ReadOptsNSQ.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadOptsNSQ, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOptsNSQ;
    static deserializeBinaryFromReader(message: ReadOptsNSQ, reader: jspb.BinaryReader): ReadOptsNSQ;
}

export namespace ReadOptsNSQ {
    export type AsObject = {
        conn?: args_nsq_pb.NSQConn.AsObject,
        args?: args_nsq_pb.NSQReadOpts.AsObject,
    }
}

export class ReadOptsPostgres extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_postgres_pb.PostgresConn | undefined;
    setConn(value?: args_postgres_pb.PostgresConn): ReadOptsPostgres;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_postgres_pb.PostgresReadOpts | undefined;
    setArgs(value?: args_postgres_pb.PostgresReadOpts): ReadOptsPostgres;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOptsPostgres.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOptsPostgres): ReadOptsPostgres.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadOptsPostgres, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOptsPostgres;
    static deserializeBinaryFromReader(message: ReadOptsPostgres, reader: jspb.BinaryReader): ReadOptsPostgres;
}

export namespace ReadOptsPostgres {
    export type AsObject = {
        conn?: args_postgres_pb.PostgresConn.AsObject,
        args?: args_postgres_pb.PostgresReadOpts.AsObject,
    }
}

export class ReadOptsPulsar extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_pulsar_pb.PulsarConn | undefined;
    setConn(value?: args_pulsar_pb.PulsarConn): ReadOptsPulsar;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_pulsar_pb.PulsarReadOpts | undefined;
    setArgs(value?: args_pulsar_pb.PulsarReadOpts): ReadOptsPulsar;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOptsPulsar.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOptsPulsar): ReadOptsPulsar.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadOptsPulsar, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOptsPulsar;
    static deserializeBinaryFromReader(message: ReadOptsPulsar, reader: jspb.BinaryReader): ReadOptsPulsar;
}

export namespace ReadOptsPulsar {
    export type AsObject = {
        conn?: args_pulsar_pb.PulsarConn.AsObject,
        args?: args_pulsar_pb.PulsarReadOpts.AsObject,
    }
}

export class ReadOptsRabbit extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_rabbit_pb.RabbitConn | undefined;
    setConn(value?: args_rabbit_pb.RabbitConn): ReadOptsRabbit;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_rabbit_pb.RabbitReadOpts | undefined;
    setArgs(value?: args_rabbit_pb.RabbitReadOpts): ReadOptsRabbit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOptsRabbit.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOptsRabbit): ReadOptsRabbit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadOptsRabbit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOptsRabbit;
    static deserializeBinaryFromReader(message: ReadOptsRabbit, reader: jspb.BinaryReader): ReadOptsRabbit;
}

export namespace ReadOptsRabbit {
    export type AsObject = {
        conn?: args_rabbit_pb.RabbitConn.AsObject,
        args?: args_rabbit_pb.RabbitReadOpts.AsObject,
    }
}

export class ReadOptsRabbitStreams extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_rabbit_streams_pb.RabbitStreamsConn | undefined;
    setConn(value?: args_rabbit_streams_pb.RabbitStreamsConn): ReadOptsRabbitStreams;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_rabbit_streams_pb.RabbitStreamsReadOpts | undefined;
    setArgs(value?: args_rabbit_streams_pb.RabbitStreamsReadOpts): ReadOptsRabbitStreams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOptsRabbitStreams.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOptsRabbitStreams): ReadOptsRabbitStreams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadOptsRabbitStreams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOptsRabbitStreams;
    static deserializeBinaryFromReader(message: ReadOptsRabbitStreams, reader: jspb.BinaryReader): ReadOptsRabbitStreams;
}

export namespace ReadOptsRabbitStreams {
    export type AsObject = {
        conn?: args_rabbit_streams_pb.RabbitStreamsConn.AsObject,
        args?: args_rabbit_streams_pb.RabbitStreamsReadOpts.AsObject,
    }
}

export class ReadOptsRedisPubSub extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_redis_pubsub_pb.RedisPubSubConn | undefined;
    setConn(value?: args_redis_pubsub_pb.RedisPubSubConn): ReadOptsRedisPubSub;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_redis_pubsub_pb.RedisPubSubReadOpts | undefined;
    setArgs(value?: args_redis_pubsub_pb.RedisPubSubReadOpts): ReadOptsRedisPubSub;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOptsRedisPubSub.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOptsRedisPubSub): ReadOptsRedisPubSub.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadOptsRedisPubSub, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOptsRedisPubSub;
    static deserializeBinaryFromReader(message: ReadOptsRedisPubSub, reader: jspb.BinaryReader): ReadOptsRedisPubSub;
}

export namespace ReadOptsRedisPubSub {
    export type AsObject = {
        conn?: args_redis_pubsub_pb.RedisPubSubConn.AsObject,
        args?: args_redis_pubsub_pb.RedisPubSubReadOpts.AsObject,
    }
}

export class ReadOptsRedisStreams extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_redis_streams_pb.RedisStreamsConn | undefined;
    setConn(value?: args_redis_streams_pb.RedisStreamsConn): ReadOptsRedisStreams;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_redis_streams_pb.RedisStreamsReadOpts | undefined;
    setArgs(value?: args_redis_streams_pb.RedisStreamsReadOpts): ReadOptsRedisStreams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOptsRedisStreams.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOptsRedisStreams): ReadOptsRedisStreams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadOptsRedisStreams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOptsRedisStreams;
    static deserializeBinaryFromReader(message: ReadOptsRedisStreams, reader: jspb.BinaryReader): ReadOptsRedisStreams;
}

export namespace ReadOptsRedisStreams {
    export type AsObject = {
        conn?: args_redis_streams_pb.RedisStreamsConn.AsObject,
        args?: args_redis_streams_pb.RedisStreamsReadOpts.AsObject,
    }
}

export class ReadOptsAzureEventHub extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_azure_event_hub_pb.AzureEventHubConn | undefined;
    setConn(value?: args_azure_event_hub_pb.AzureEventHubConn): ReadOptsAzureEventHub;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_azure_event_hub_pb.AzureEventHubReadOpts | undefined;
    setArgs(value?: args_azure_event_hub_pb.AzureEventHubReadOpts): ReadOptsAzureEventHub;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOptsAzureEventHub.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOptsAzureEventHub): ReadOptsAzureEventHub.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadOptsAzureEventHub, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOptsAzureEventHub;
    static deserializeBinaryFromReader(message: ReadOptsAzureEventHub, reader: jspb.BinaryReader): ReadOptsAzureEventHub;
}

export namespace ReadOptsAzureEventHub {
    export type AsObject = {
        conn?: args_azure_event_hub_pb.AzureEventHubConn.AsObject,
        args?: args_azure_event_hub_pb.AzureEventHubReadOpts.AsObject,
    }
}

export class ReadOptsAzureServiceBus extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_azure_service_bus_pb.AzureServiceBusConn | undefined;
    setConn(value?: args_azure_service_bus_pb.AzureServiceBusConn): ReadOptsAzureServiceBus;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_azure_service_bus_pb.AzureServiceBusReadOpts | undefined;
    setArgs(value?: args_azure_service_bus_pb.AzureServiceBusReadOpts): ReadOptsAzureServiceBus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOptsAzureServiceBus.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOptsAzureServiceBus): ReadOptsAzureServiceBus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadOptsAzureServiceBus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOptsAzureServiceBus;
    static deserializeBinaryFromReader(message: ReadOptsAzureServiceBus, reader: jspb.BinaryReader): ReadOptsAzureServiceBus;
}

export namespace ReadOptsAzureServiceBus {
    export type AsObject = {
        conn?: args_azure_service_bus_pb.AzureServiceBusConn.AsObject,
        args?: args_azure_service_bus_pb.AzureServiceBusReadOpts.AsObject,
    }
}

export class ReadOptsMQTT extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_mqtt_pb.MQTTConn | undefined;
    setConn(value?: args_mqtt_pb.MQTTConn): ReadOptsMQTT;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_mqtt_pb.MQTTReadOpts | undefined;
    setArgs(value?: args_mqtt_pb.MQTTReadOpts): ReadOptsMQTT;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOptsMQTT.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOptsMQTT): ReadOptsMQTT.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadOptsMQTT, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOptsMQTT;
    static deserializeBinaryFromReader(message: ReadOptsMQTT, reader: jspb.BinaryReader): ReadOptsMQTT;
}

export namespace ReadOptsMQTT {
    export type AsObject = {
        conn?: args_mqtt_pb.MQTTConn.AsObject,
        args?: args_mqtt_pb.MQTTReadOpts.AsObject,
    }
}

export class ReadOptsGCPPubSub extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_gcp_pubsub_pb.GCPPubSubConn | undefined;
    setConn(value?: args_gcp_pubsub_pb.GCPPubSubConn): ReadOptsGCPPubSub;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_gcp_pubsub_pb.GCPPubSubReadOpts | undefined;
    setArgs(value?: args_gcp_pubsub_pb.GCPPubSubReadOpts): ReadOptsGCPPubSub;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOptsGCPPubSub.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOptsGCPPubSub): ReadOptsGCPPubSub.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadOptsGCPPubSub, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOptsGCPPubSub;
    static deserializeBinaryFromReader(message: ReadOptsGCPPubSub, reader: jspb.BinaryReader): ReadOptsGCPPubSub;
}

export namespace ReadOptsGCPPubSub {
    export type AsObject = {
        conn?: args_gcp_pubsub_pb.GCPPubSubConn.AsObject,
        args?: args_gcp_pubsub_pb.GCPPubSubReadOpts.AsObject,
    }
}

export class ReadOptsKubeMQQueue extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_kubemq_queue_pb.KubeMQQueueConn | undefined;
    setConn(value?: args_kubemq_queue_pb.KubeMQQueueConn): ReadOptsKubeMQQueue;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_kubemq_queue_pb.KubeMQQueueReadOpts | undefined;
    setArgs(value?: args_kubemq_queue_pb.KubeMQQueueReadOpts): ReadOptsKubeMQQueue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOptsKubeMQQueue.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOptsKubeMQQueue): ReadOptsKubeMQQueue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadOptsKubeMQQueue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOptsKubeMQQueue;
    static deserializeBinaryFromReader(message: ReadOptsKubeMQQueue, reader: jspb.BinaryReader): ReadOptsKubeMQQueue;
}

export namespace ReadOptsKubeMQQueue {
    export type AsObject = {
        conn?: args_kubemq_queue_pb.KubeMQQueueConn.AsObject,
        args?: args_kubemq_queue_pb.KubeMQQueueReadOpts.AsObject,
    }
}
