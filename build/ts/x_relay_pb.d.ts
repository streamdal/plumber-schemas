// package: protos
// file: x_relay.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as args_azure_service_bus_pb from "./args/azure-service-bus_pb";
import * as args_aws_sqs_pb from "./args/aws-sqs_pb";
import * as args_gcp_pubsub_pb from "./args/gcp-pubsub_pb";
import * as args_kafka_pb from "./args/kafka_pb";
import * as args_kubemq_queue_pb from "./args/kubemq-queue_pb";
import * as args_mongo_pb from "./args/mongo_pb";
import * as args_mqtt_pb from "./args/mqtt_pb";
import * as args_nsq_pb from "./args/nsq_pb";
import * as args_postgres_pb from "./args/postgres_pb";
import * as args_rabbit_pb from "./args/rabbit_pb";
import * as args_redis_pubsub_pb from "./args/redis-pubsub_pb";
import * as args_redis_streams_pb from "./args/redis-streams_pb";

export class RelayOpts extends jspb.Message { 

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): RelayOptsKafka | undefined;
    setKafka(value?: RelayOptsKafka): RelayOpts;

    hasAwssqs(): boolean;
    clearAwssqs(): void;
    getAwssqs(): RelayOptsAWSSQS | undefined;
    setAwssqs(value?: RelayOptsAWSSQS): RelayOpts;

    hasMongo(): boolean;
    clearMongo(): void;
    getMongo(): RelayOptsMongo | undefined;
    setMongo(value?: RelayOptsMongo): RelayOpts;

    hasNsq(): boolean;
    clearNsq(): void;
    getNsq(): RelayOptsNSQ | undefined;
    setNsq(value?: RelayOptsNSQ): RelayOpts;

    hasRabbit(): boolean;
    clearRabbit(): void;
    getRabbit(): RelayOptsRabbit | undefined;
    setRabbit(value?: RelayOptsRabbit): RelayOpts;

    hasMqtt(): boolean;
    clearMqtt(): void;
    getMqtt(): RelayOptsMQTT | undefined;
    setMqtt(value?: RelayOptsMQTT): RelayOpts;

    hasAzureServiceBus(): boolean;
    clearAzureServiceBus(): void;
    getAzureServiceBus(): RelayOptsAzureServiceBus | undefined;
    setAzureServiceBus(value?: RelayOptsAzureServiceBus): RelayOpts;

    hasGcpPubsub(): boolean;
    clearGcpPubsub(): void;
    getGcpPubsub(): RelayOptsGCPPubSub | undefined;
    setGcpPubsub(value?: RelayOptsGCPPubSub): RelayOpts;

    hasKubemqQueue(): boolean;
    clearKubemqQueue(): void;
    getKubemqQueue(): RelayOptsKubeMQQueue | undefined;
    setKubemqQueue(value?: RelayOptsKubeMQQueue): RelayOpts;

    hasRedisPubsub(): boolean;
    clearRedisPubsub(): void;
    getRedisPubsub(): RelayOptsRedisPubSub | undefined;
    setRedisPubsub(value?: RelayOptsRedisPubSub): RelayOpts;

    hasRedisStreams(): boolean;
    clearRedisStreams(): void;
    getRedisStreams(): RelayOptsRedisStreams | undefined;
    setRedisStreams(value?: RelayOptsRedisStreams): RelayOpts;

    hasPostgres(): boolean;
    clearPostgres(): void;
    getPostgres(): RelayOptsPostgres | undefined;
    setPostgres(value?: RelayOptsPostgres): RelayOpts;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayOpts.AsObject;
    static toObject(includeInstance: boolean, msg: RelayOpts): RelayOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayOpts;
    static deserializeBinaryFromReader(message: RelayOpts, reader: jspb.BinaryReader): RelayOpts;
}

export namespace RelayOpts {
    export type AsObject = {
        kafka?: RelayOptsKafka.AsObject,
        awssqs?: RelayOptsAWSSQS.AsObject,
        mongo?: RelayOptsMongo.AsObject,
        nsq?: RelayOptsNSQ.AsObject,
        rabbit?: RelayOptsRabbit.AsObject,
        mqtt?: RelayOptsMQTT.AsObject,
        azureServiceBus?: RelayOptsAzureServiceBus.AsObject,
        gcpPubsub?: RelayOptsGCPPubSub.AsObject,
        kubemqQueue?: RelayOptsKubeMQQueue.AsObject,
        redisPubsub?: RelayOptsRedisPubSub.AsObject,
        redisStreams?: RelayOptsRedisStreams.AsObject,
        postgres?: RelayOptsPostgres.AsObject,
    }
}

export class RelayOptsKafka extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_kafka_pb.KafkaConn | undefined;
    setConn(value?: args_kafka_pb.KafkaConn): RelayOptsKafka;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_kafka_pb.KafkaRelayOpts | undefined;
    setArgs(value?: args_kafka_pb.KafkaRelayOpts): RelayOptsKafka;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayOptsKafka.AsObject;
    static toObject(includeInstance: boolean, msg: RelayOptsKafka): RelayOptsKafka.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayOptsKafka, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayOptsKafka;
    static deserializeBinaryFromReader(message: RelayOptsKafka, reader: jspb.BinaryReader): RelayOptsKafka;
}

export namespace RelayOptsKafka {
    export type AsObject = {
        conn?: args_kafka_pb.KafkaConn.AsObject,
        args?: args_kafka_pb.KafkaRelayOpts.AsObject,
    }
}

export class RelayOptsAWSSQS extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_aws_sqs_pb.AWSSQSConn | undefined;
    setConn(value?: args_aws_sqs_pb.AWSSQSConn): RelayOptsAWSSQS;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_aws_sqs_pb.AWSSQSRelayOpts | undefined;
    setArgs(value?: args_aws_sqs_pb.AWSSQSRelayOpts): RelayOptsAWSSQS;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayOptsAWSSQS.AsObject;
    static toObject(includeInstance: boolean, msg: RelayOptsAWSSQS): RelayOptsAWSSQS.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayOptsAWSSQS, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayOptsAWSSQS;
    static deserializeBinaryFromReader(message: RelayOptsAWSSQS, reader: jspb.BinaryReader): RelayOptsAWSSQS;
}

export namespace RelayOptsAWSSQS {
    export type AsObject = {
        conn?: args_aws_sqs_pb.AWSSQSConn.AsObject,
        args?: args_aws_sqs_pb.AWSSQSRelayOpts.AsObject,
    }
}

export class RelayOptsMongo extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_mongo_pb.MongoConn | undefined;
    setConn(value?: args_mongo_pb.MongoConn): RelayOptsMongo;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_mongo_pb.MongoReadOpts | undefined;
    setArgs(value?: args_mongo_pb.MongoReadOpts): RelayOptsMongo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayOptsMongo.AsObject;
    static toObject(includeInstance: boolean, msg: RelayOptsMongo): RelayOptsMongo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayOptsMongo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayOptsMongo;
    static deserializeBinaryFromReader(message: RelayOptsMongo, reader: jspb.BinaryReader): RelayOptsMongo;
}

export namespace RelayOptsMongo {
    export type AsObject = {
        conn?: args_mongo_pb.MongoConn.AsObject,
        args?: args_mongo_pb.MongoReadOpts.AsObject,
    }
}

export class RelayOptsNSQ extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_nsq_pb.NSQConn | undefined;
    setConn(value?: args_nsq_pb.NSQConn): RelayOptsNSQ;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_nsq_pb.NSQReadOpts | undefined;
    setArgs(value?: args_nsq_pb.NSQReadOpts): RelayOptsNSQ;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayOptsNSQ.AsObject;
    static toObject(includeInstance: boolean, msg: RelayOptsNSQ): RelayOptsNSQ.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayOptsNSQ, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayOptsNSQ;
    static deserializeBinaryFromReader(message: RelayOptsNSQ, reader: jspb.BinaryReader): RelayOptsNSQ;
}

export namespace RelayOptsNSQ {
    export type AsObject = {
        conn?: args_nsq_pb.NSQConn.AsObject,
        args?: args_nsq_pb.NSQReadOpts.AsObject,
    }
}

export class RelayOptsPostgres extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_postgres_pb.PostgresConn | undefined;
    setConn(value?: args_postgres_pb.PostgresConn): RelayOptsPostgres;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_postgres_pb.PostgresReadOpts | undefined;
    setArgs(value?: args_postgres_pb.PostgresReadOpts): RelayOptsPostgres;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayOptsPostgres.AsObject;
    static toObject(includeInstance: boolean, msg: RelayOptsPostgres): RelayOptsPostgres.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayOptsPostgres, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayOptsPostgres;
    static deserializeBinaryFromReader(message: RelayOptsPostgres, reader: jspb.BinaryReader): RelayOptsPostgres;
}

export namespace RelayOptsPostgres {
    export type AsObject = {
        conn?: args_postgres_pb.PostgresConn.AsObject,
        args?: args_postgres_pb.PostgresReadOpts.AsObject,
    }
}

export class RelayOptsRabbit extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_rabbit_pb.RabbitConn | undefined;
    setConn(value?: args_rabbit_pb.RabbitConn): RelayOptsRabbit;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_rabbit_pb.RabbitReadOpts | undefined;
    setArgs(value?: args_rabbit_pb.RabbitReadOpts): RelayOptsRabbit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayOptsRabbit.AsObject;
    static toObject(includeInstance: boolean, msg: RelayOptsRabbit): RelayOptsRabbit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayOptsRabbit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayOptsRabbit;
    static deserializeBinaryFromReader(message: RelayOptsRabbit, reader: jspb.BinaryReader): RelayOptsRabbit;
}

export namespace RelayOptsRabbit {
    export type AsObject = {
        conn?: args_rabbit_pb.RabbitConn.AsObject,
        args?: args_rabbit_pb.RabbitReadOpts.AsObject,
    }
}

export class RelayOptsRedisPubSub extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_redis_pubsub_pb.RedisPubSubConn | undefined;
    setConn(value?: args_redis_pubsub_pb.RedisPubSubConn): RelayOptsRedisPubSub;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_redis_pubsub_pb.RedisPubSubReadOpts | undefined;
    setArgs(value?: args_redis_pubsub_pb.RedisPubSubReadOpts): RelayOptsRedisPubSub;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayOptsRedisPubSub.AsObject;
    static toObject(includeInstance: boolean, msg: RelayOptsRedisPubSub): RelayOptsRedisPubSub.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayOptsRedisPubSub, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayOptsRedisPubSub;
    static deserializeBinaryFromReader(message: RelayOptsRedisPubSub, reader: jspb.BinaryReader): RelayOptsRedisPubSub;
}

export namespace RelayOptsRedisPubSub {
    export type AsObject = {
        conn?: args_redis_pubsub_pb.RedisPubSubConn.AsObject,
        args?: args_redis_pubsub_pb.RedisPubSubReadOpts.AsObject,
    }
}

export class RelayOptsRedisStreams extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_redis_streams_pb.RedisStreamsConn | undefined;
    setConn(value?: args_redis_streams_pb.RedisStreamsConn): RelayOptsRedisStreams;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_redis_streams_pb.RedisStreamsReadOpts | undefined;
    setArgs(value?: args_redis_streams_pb.RedisStreamsReadOpts): RelayOptsRedisStreams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayOptsRedisStreams.AsObject;
    static toObject(includeInstance: boolean, msg: RelayOptsRedisStreams): RelayOptsRedisStreams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayOptsRedisStreams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayOptsRedisStreams;
    static deserializeBinaryFromReader(message: RelayOptsRedisStreams, reader: jspb.BinaryReader): RelayOptsRedisStreams;
}

export namespace RelayOptsRedisStreams {
    export type AsObject = {
        conn?: args_redis_streams_pb.RedisStreamsConn.AsObject,
        args?: args_redis_streams_pb.RedisStreamsReadOpts.AsObject,
    }
}

export class RelayOptsAzureServiceBus extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_azure_service_bus_pb.AzureServiceBusConn | undefined;
    setConn(value?: args_azure_service_bus_pb.AzureServiceBusConn): RelayOptsAzureServiceBus;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_azure_service_bus_pb.AzureServiceBusReadOpts | undefined;
    setArgs(value?: args_azure_service_bus_pb.AzureServiceBusReadOpts): RelayOptsAzureServiceBus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayOptsAzureServiceBus.AsObject;
    static toObject(includeInstance: boolean, msg: RelayOptsAzureServiceBus): RelayOptsAzureServiceBus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayOptsAzureServiceBus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayOptsAzureServiceBus;
    static deserializeBinaryFromReader(message: RelayOptsAzureServiceBus, reader: jspb.BinaryReader): RelayOptsAzureServiceBus;
}

export namespace RelayOptsAzureServiceBus {
    export type AsObject = {
        conn?: args_azure_service_bus_pb.AzureServiceBusConn.AsObject,
        args?: args_azure_service_bus_pb.AzureServiceBusReadOpts.AsObject,
    }
}

export class RelayOptsMQTT extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_mqtt_pb.MQTTConn | undefined;
    setConn(value?: args_mqtt_pb.MQTTConn): RelayOptsMQTT;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_mqtt_pb.MQTTReadOpts | undefined;
    setArgs(value?: args_mqtt_pb.MQTTReadOpts): RelayOptsMQTT;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayOptsMQTT.AsObject;
    static toObject(includeInstance: boolean, msg: RelayOptsMQTT): RelayOptsMQTT.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayOptsMQTT, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayOptsMQTT;
    static deserializeBinaryFromReader(message: RelayOptsMQTT, reader: jspb.BinaryReader): RelayOptsMQTT;
}

export namespace RelayOptsMQTT {
    export type AsObject = {
        conn?: args_mqtt_pb.MQTTConn.AsObject,
        args?: args_mqtt_pb.MQTTReadOpts.AsObject,
    }
}

export class RelayOptsGCPPubSub extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_gcp_pubsub_pb.GCPPubSubConn | undefined;
    setConn(value?: args_gcp_pubsub_pb.GCPPubSubConn): RelayOptsGCPPubSub;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_gcp_pubsub_pb.GCPPubSubReadOpts | undefined;
    setArgs(value?: args_gcp_pubsub_pb.GCPPubSubReadOpts): RelayOptsGCPPubSub;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayOptsGCPPubSub.AsObject;
    static toObject(includeInstance: boolean, msg: RelayOptsGCPPubSub): RelayOptsGCPPubSub.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayOptsGCPPubSub, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayOptsGCPPubSub;
    static deserializeBinaryFromReader(message: RelayOptsGCPPubSub, reader: jspb.BinaryReader): RelayOptsGCPPubSub;
}

export namespace RelayOptsGCPPubSub {
    export type AsObject = {
        conn?: args_gcp_pubsub_pb.GCPPubSubConn.AsObject,
        args?: args_gcp_pubsub_pb.GCPPubSubReadOpts.AsObject,
    }
}

export class RelayOptsKubeMQQueue extends jspb.Message { 

    hasConn(): boolean;
    clearConn(): void;
    getConn(): args_kubemq_queue_pb.KubeMQQueueConn | undefined;
    setConn(value?: args_kubemq_queue_pb.KubeMQQueueConn): RelayOptsKubeMQQueue;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): args_kubemq_queue_pb.KubeMQQueueReadOpts | undefined;
    setArgs(value?: args_kubemq_queue_pb.KubeMQQueueReadOpts): RelayOptsKubeMQQueue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayOptsKubeMQQueue.AsObject;
    static toObject(includeInstance: boolean, msg: RelayOptsKubeMQQueue): RelayOptsKubeMQQueue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayOptsKubeMQQueue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayOptsKubeMQQueue;
    static deserializeBinaryFromReader(message: RelayOptsKubeMQQueue, reader: jspb.BinaryReader): RelayOptsKubeMQQueue;
}

export namespace RelayOptsKubeMQQueue {
    export type AsObject = {
        conn?: args_kubemq_queue_pb.KubeMQQueueConn.AsObject,
        args?: args_kubemq_queue_pb.KubeMQQueueReadOpts.AsObject,
    }
}
