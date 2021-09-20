// package: protos.opts
// file: opts/ps_opts_connection.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as args_ps_args_kafka_pb from "../args/ps_args_kafka_pb";
import * as args_ps_args_activemq_pb from "../args/ps_args_activemq_pb";
import * as args_ps_args_aws_sns_pb from "../args/ps_args_aws_sns_pb";
import * as args_ps_args_aws_sqs_pb from "../args/ps_args_aws_sqs_pb";
import * as args_ps_args_mongo_pb from "../args/ps_args_mongo_pb";
import * as args_ps_args_nats_pb from "../args/ps_args_nats_pb";
import * as args_ps_args_nats_streaming_pb from "../args/ps_args_nats_streaming_pb";
import * as args_ps_args_nsq_pb from "../args/ps_args_nsq_pb";
import * as args_ps_args_mqtt_pb from "../args/ps_args_mqtt_pb";
import * as args_ps_args_gcp_pubsub_pb from "../args/ps_args_gcp_pubsub_pb";
import * as args_ps_args_kubemq_queue_pb from "../args/ps_args_kubemq_queue_pb";
import * as args_ps_args_postgres_pb from "../args/ps_args_postgres_pb";
import * as args_ps_args_pulsar_pb from "../args/ps_args_pulsar_pb";
import * as args_ps_args_rabbit_pb from "../args/ps_args_rabbit_pb";
import * as args_ps_args_rabbit_streams_pb from "../args/ps_args_rabbit_streams_pb";
import * as args_ps_args_redis_pubsub_pb from "../args/ps_args_redis_pubsub_pb";
import * as args_ps_args_redis_streams_pb from "../args/ps_args_redis_streams_pb";
import * as args_ps_args_azure_service_bus_pb from "../args/ps_args_azure_service_bus_pb";
import * as args_ps_args_azure_event_hub_pb from "../args/ps_args_azure_event_hub_pb";

export class ConnectionOptions extends jspb.Message { 
    getName(): string;
    setName(value: string): ConnectionOptions;
    getNotes(): string;
    setNotes(value: string): ConnectionOptions;

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): args_ps_args_kafka_pb.KafkaConn | undefined;
    setKafka(value?: args_ps_args_kafka_pb.KafkaConn): ConnectionOptions;

    hasActiveMq(): boolean;
    clearActiveMq(): void;
    getActiveMq(): args_ps_args_activemq_pb.ActiveMQConn | undefined;
    setActiveMq(value?: args_ps_args_activemq_pb.ActiveMQConn): ConnectionOptions;

    hasAwssqs(): boolean;
    clearAwssqs(): void;
    getAwssqs(): args_ps_args_aws_sqs_pb.AWSSQSConn | undefined;
    setAwssqs(value?: args_ps_args_aws_sqs_pb.AWSSQSConn): ConnectionOptions;

    hasAwssns(): boolean;
    clearAwssns(): void;
    getAwssns(): args_ps_args_aws_sns_pb.AWSSNSConn | undefined;
    setAwssns(value?: args_ps_args_aws_sns_pb.AWSSNSConn): ConnectionOptions;

    hasMongo(): boolean;
    clearMongo(): void;
    getMongo(): args_ps_args_mongo_pb.MongoConn | undefined;
    setMongo(value?: args_ps_args_mongo_pb.MongoConn): ConnectionOptions;

    hasNats(): boolean;
    clearNats(): void;
    getNats(): args_ps_args_nats_pb.NatsConn | undefined;
    setNats(value?: args_ps_args_nats_pb.NatsConn): ConnectionOptions;

    hasNatsStreaming(): boolean;
    clearNatsStreaming(): void;
    getNatsStreaming(): args_ps_args_nats_streaming_pb.NatsStreamingConn | undefined;
    setNatsStreaming(value?: args_ps_args_nats_streaming_pb.NatsStreamingConn): ConnectionOptions;

    hasNsq(): boolean;
    clearNsq(): void;
    getNsq(): args_ps_args_nsq_pb.NSQConn | undefined;
    setNsq(value?: args_ps_args_nsq_pb.NSQConn): ConnectionOptions;

    hasPostgres(): boolean;
    clearPostgres(): void;
    getPostgres(): args_ps_args_postgres_pb.PostgresConn | undefined;
    setPostgres(value?: args_ps_args_postgres_pb.PostgresConn): ConnectionOptions;

    hasPulsar(): boolean;
    clearPulsar(): void;
    getPulsar(): args_ps_args_pulsar_pb.PulsarConn | undefined;
    setPulsar(value?: args_ps_args_pulsar_pb.PulsarConn): ConnectionOptions;

    hasRabbit(): boolean;
    clearRabbit(): void;
    getRabbit(): args_ps_args_rabbit_pb.RabbitConn | undefined;
    setRabbit(value?: args_ps_args_rabbit_pb.RabbitConn): ConnectionOptions;

    hasRabbitStreams(): boolean;
    clearRabbitStreams(): void;
    getRabbitStreams(): args_ps_args_rabbit_streams_pb.RabbitStreamsConn | undefined;
    setRabbitStreams(value?: args_ps_args_rabbit_streams_pb.RabbitStreamsConn): ConnectionOptions;

    hasRedisPubsub(): boolean;
    clearRedisPubsub(): void;
    getRedisPubsub(): args_ps_args_redis_pubsub_pb.RedisPubSubConn | undefined;
    setRedisPubsub(value?: args_ps_args_redis_pubsub_pb.RedisPubSubConn): ConnectionOptions;

    hasRedisStreams(): boolean;
    clearRedisStreams(): void;
    getRedisStreams(): args_ps_args_redis_streams_pb.RedisStreamsConn | undefined;
    setRedisStreams(value?: args_ps_args_redis_streams_pb.RedisStreamsConn): ConnectionOptions;

    hasAzureEventHub(): boolean;
    clearAzureEventHub(): void;
    getAzureEventHub(): args_ps_args_azure_event_hub_pb.AzureEventHubConn | undefined;
    setAzureEventHub(value?: args_ps_args_azure_event_hub_pb.AzureEventHubConn): ConnectionOptions;

    hasAzureServiceBus(): boolean;
    clearAzureServiceBus(): void;
    getAzureServiceBus(): args_ps_args_azure_service_bus_pb.AzureServiceBusConn | undefined;
    setAzureServiceBus(value?: args_ps_args_azure_service_bus_pb.AzureServiceBusConn): ConnectionOptions;

    hasMqtt(): boolean;
    clearMqtt(): void;
    getMqtt(): args_ps_args_mqtt_pb.MQTTConn | undefined;
    setMqtt(value?: args_ps_args_mqtt_pb.MQTTConn): ConnectionOptions;

    hasKubemqQueue(): boolean;
    clearKubemqQueue(): void;
    getKubemqQueue(): args_ps_args_kubemq_queue_pb.KubeMQQueueConn | undefined;
    setKubemqQueue(value?: args_ps_args_kubemq_queue_pb.KubeMQQueueConn): ConnectionOptions;

    hasGcpPubsub(): boolean;
    clearGcpPubsub(): void;
    getGcpPubsub(): args_ps_args_gcp_pubsub_pb.GCPPubSubConn | undefined;
    setGcpPubsub(value?: args_ps_args_gcp_pubsub_pb.GCPPubSubConn): ConnectionOptions;
    getId(): string;
    setId(value: string): ConnectionOptions;

    getConnCase(): ConnectionOptions.ConnCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectionOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectionOptions): ConnectionOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectionOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectionOptions;
    static deserializeBinaryFromReader(message: ConnectionOptions, reader: jspb.BinaryReader): ConnectionOptions;
}

export namespace ConnectionOptions {
    export type AsObject = {
        name: string,
        notes: string,
        kafka?: args_ps_args_kafka_pb.KafkaConn.AsObject,
        activeMq?: args_ps_args_activemq_pb.ActiveMQConn.AsObject,
        awssqs?: args_ps_args_aws_sqs_pb.AWSSQSConn.AsObject,
        awssns?: args_ps_args_aws_sns_pb.AWSSNSConn.AsObject,
        mongo?: args_ps_args_mongo_pb.MongoConn.AsObject,
        nats?: args_ps_args_nats_pb.NatsConn.AsObject,
        natsStreaming?: args_ps_args_nats_streaming_pb.NatsStreamingConn.AsObject,
        nsq?: args_ps_args_nsq_pb.NSQConn.AsObject,
        postgres?: args_ps_args_postgres_pb.PostgresConn.AsObject,
        pulsar?: args_ps_args_pulsar_pb.PulsarConn.AsObject,
        rabbit?: args_ps_args_rabbit_pb.RabbitConn.AsObject,
        rabbitStreams?: args_ps_args_rabbit_streams_pb.RabbitStreamsConn.AsObject,
        redisPubsub?: args_ps_args_redis_pubsub_pb.RedisPubSubConn.AsObject,
        redisStreams?: args_ps_args_redis_streams_pb.RedisStreamsConn.AsObject,
        azureEventHub?: args_ps_args_azure_event_hub_pb.AzureEventHubConn.AsObject,
        azureServiceBus?: args_ps_args_azure_service_bus_pb.AzureServiceBusConn.AsObject,
        mqtt?: args_ps_args_mqtt_pb.MQTTConn.AsObject,
        kubemqQueue?: args_ps_args_kubemq_queue_pb.KubeMQQueueConn.AsObject,
        gcpPubsub?: args_ps_args_gcp_pubsub_pb.GCPPubSubConn.AsObject,
        Id: string,
    }

    export enum ConnCase {
        CONN_NOT_SET = 0,
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
        MQTT = 116,
        KUBEMQ_QUEUE = 117,
        GCP_PUBSUB = 118,
    }

}
