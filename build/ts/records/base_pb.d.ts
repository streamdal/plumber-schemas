// package: protos.records
// file: records/base.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as records_kafka_pb from "../records/kafka_pb";
import * as records_activemq_pb from "../records/activemq_pb";
import * as records_aws_sqs_pb from "../records/aws-sqs_pb";
import * as records_mongo_pb from "../records/mongo_pb";
import * as records_nats_pb from "../records/nats_pb";
import * as records_nats_streaming_pb from "../records/nats-streaming_pb";
import * as records_nsq_pb from "../records/nsq_pb";
import * as records_postgres_pb from "../records/postgres_pb";
import * as records_pulsar_pb from "../records/pulsar_pb";
import * as records_rabbit_pb from "../records/rabbit_pb";
import * as records_rabbit_streams_pb from "../records/rabbit-streams_pb";
import * as records_redis_pubsub_pb from "../records/redis-pubsub_pb";
import * as records_redis_streams_pb from "../records/redis-streams_pb";
import * as records_azure_service_bus_pb from "../records/azure-service-bus_pb";
import * as records_azure_event_hub_pb from "../records/azure-event-hub_pb";
import * as records_mqtt_pb from "../records/mqtt_pb";
import * as records_kubemq_pb from "../records/kubemq_pb";

export class ReadRecord extends jspb.Message { 
    getMessageId(): string;
    setMessageId(value: string): ReadRecord;
    getPlumberId(): string;
    setPlumberId(value: string): ReadRecord;

    getMetadataMap(): jspb.Map<string, Uint8Array | string>;
    clearMetadataMap(): void;
    getRaw(): Uint8Array | string;
    getRaw_asU8(): Uint8Array;
    getRaw_asB64(): string;
    setRaw(value: Uint8Array | string): ReadRecord;
    getReceivedAtUnixTsUtc(): number;
    setReceivedAtUnixTsUtc(value: number): ReadRecord;
    getDecoded(): Uint8Array | string;
    getDecoded_asU8(): Uint8Array;
    getDecoded_asB64(): string;
    setDecoded(value: Uint8Array | string): ReadRecord;

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): records_kafka_pb.Kafka | undefined;
    setKafka(value?: records_kafka_pb.Kafka): ReadRecord;

    hasActiveMq(): boolean;
    clearActiveMq(): void;
    getActiveMq(): records_activemq_pb.ActiveMQ | undefined;
    setActiveMq(value?: records_activemq_pb.ActiveMQ): ReadRecord;

    hasAwssqs(): boolean;
    clearAwssqs(): void;
    getAwssqs(): records_aws_sqs_pb.AWSSQS | undefined;
    setAwssqs(value?: records_aws_sqs_pb.AWSSQS): ReadRecord;

    hasMongo(): boolean;
    clearMongo(): void;
    getMongo(): records_mongo_pb.Mongo | undefined;
    setMongo(value?: records_mongo_pb.Mongo): ReadRecord;

    hasNats(): boolean;
    clearNats(): void;
    getNats(): records_nats_pb.Nats | undefined;
    setNats(value?: records_nats_pb.Nats): ReadRecord;

    hasNatsStreaming(): boolean;
    clearNatsStreaming(): void;
    getNatsStreaming(): records_nats_streaming_pb.NatsStreaming | undefined;
    setNatsStreaming(value?: records_nats_streaming_pb.NatsStreaming): ReadRecord;

    hasNsq(): boolean;
    clearNsq(): void;
    getNsq(): records_nsq_pb.NSQ | undefined;
    setNsq(value?: records_nsq_pb.NSQ): ReadRecord;

    hasPostgres(): boolean;
    clearPostgres(): void;
    getPostgres(): records_postgres_pb.Postgres | undefined;
    setPostgres(value?: records_postgres_pb.Postgres): ReadRecord;

    hasPulsar(): boolean;
    clearPulsar(): void;
    getPulsar(): records_pulsar_pb.Pulsar | undefined;
    setPulsar(value?: records_pulsar_pb.Pulsar): ReadRecord;

    hasRabbit(): boolean;
    clearRabbit(): void;
    getRabbit(): records_rabbit_pb.Rabbit | undefined;
    setRabbit(value?: records_rabbit_pb.Rabbit): ReadRecord;

    hasRabbitStreams(): boolean;
    clearRabbitStreams(): void;
    getRabbitStreams(): records_rabbit_streams_pb.RabbitStreams | undefined;
    setRabbitStreams(value?: records_rabbit_streams_pb.RabbitStreams): ReadRecord;

    hasRedisPubsub(): boolean;
    clearRedisPubsub(): void;
    getRedisPubsub(): records_redis_pubsub_pb.RedisPubsub | undefined;
    setRedisPubsub(value?: records_redis_pubsub_pb.RedisPubsub): ReadRecord;

    hasRedisStreams(): boolean;
    clearRedisStreams(): void;
    getRedisStreams(): records_redis_streams_pb.RedisStreams | undefined;
    setRedisStreams(value?: records_redis_streams_pb.RedisStreams): ReadRecord;

    hasAzureEventHub(): boolean;
    clearAzureEventHub(): void;
    getAzureEventHub(): records_azure_event_hub_pb.AzureEventHub | undefined;
    setAzureEventHub(value?: records_azure_event_hub_pb.AzureEventHub): ReadRecord;

    hasAzureServiceBus(): boolean;
    clearAzureServiceBus(): void;
    getAzureServiceBus(): records_azure_service_bus_pb.AzureServiceBus | undefined;
    setAzureServiceBus(value?: records_azure_service_bus_pb.AzureServiceBus): ReadRecord;

    hasMqtt(): boolean;
    clearMqtt(): void;
    getMqtt(): records_mqtt_pb.MQTT | undefined;
    setMqtt(value?: records_mqtt_pb.MQTT): ReadRecord;

    hasKubemq(): boolean;
    clearKubemq(): void;
    getKubemq(): records_kubemq_pb.KubeMQ | undefined;
    setKubemq(value?: records_kubemq_pb.KubeMQ): ReadRecord;

    getRecordCase(): ReadRecord.RecordCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadRecord.AsObject;
    static toObject(includeInstance: boolean, msg: ReadRecord): ReadRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadRecord;
    static deserializeBinaryFromReader(message: ReadRecord, reader: jspb.BinaryReader): ReadRecord;
}

export namespace ReadRecord {
    export type AsObject = {
        messageId: string,
        plumberId: string,

        metadataMap: Array<[string, Uint8Array | string]>,
        raw: Uint8Array | string,
        receivedAtUnixTsUtc: number,
        Decoded: Uint8Array | string,
        kafka?: records_kafka_pb.Kafka.AsObject,
        activeMq?: records_activemq_pb.ActiveMQ.AsObject,
        awssqs?: records_aws_sqs_pb.AWSSQS.AsObject,
        mongo?: records_mongo_pb.Mongo.AsObject,
        nats?: records_nats_pb.Nats.AsObject,
        natsStreaming?: records_nats_streaming_pb.NatsStreaming.AsObject,
        nsq?: records_nsq_pb.NSQ.AsObject,
        postgres?: records_postgres_pb.Postgres.AsObject,
        pulsar?: records_pulsar_pb.Pulsar.AsObject,
        rabbit?: records_rabbit_pb.Rabbit.AsObject,
        rabbitStreams?: records_rabbit_streams_pb.RabbitStreams.AsObject,
        redisPubsub?: records_redis_pubsub_pb.RedisPubsub.AsObject,
        redisStreams?: records_redis_streams_pb.RedisStreams.AsObject,
        azureEventHub?: records_azure_event_hub_pb.AzureEventHub.AsObject,
        azureServiceBus?: records_azure_service_bus_pb.AzureServiceBus.AsObject,
        mqtt?: records_mqtt_pb.MQTT.AsObject,
        kubemq?: records_kubemq_pb.KubeMQ.AsObject,
    }

    export enum RecordCase {
        RECORD_NOT_SET = 0,
        KAFKA = 100,
        ACTIVE_MQ = 101,
        AWSSQS = 102,
        MONGO = 103,
        NATS = 104,
        NATS_STREAMING = 105,
        NSQ = 106,
        POSTGRES = 107,
        PULSAR = 108,
        RABBIT = 109,
        RABBIT_STREAMS = 110,
        REDIS_PUBSUB = 111,
        REDIS_STREAMS = 112,
        AZURE_EVENT_HUB = 113,
        AZURE_SERVICE_BUS = 114,
        MQTT = 115,
        KUBEMQ = 116,
    }

}

export class WriteRecord extends jspb.Message { 
    getEncoded(): Uint8Array | string;
    getEncoded_asU8(): Uint8Array;
    getEncoded_asB64(): string;
    setEncoded(value: Uint8Array | string): WriteRecord;

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): records_kafka_pb.Kafka | undefined;
    setKafka(value?: records_kafka_pb.Kafka): WriteRecord;

    hasActiveMq(): boolean;
    clearActiveMq(): void;
    getActiveMq(): records_activemq_pb.ActiveMQ | undefined;
    setActiveMq(value?: records_activemq_pb.ActiveMQ): WriteRecord;

    hasAwssqs(): boolean;
    clearAwssqs(): void;
    getAwssqs(): records_aws_sqs_pb.AWSSQS | undefined;
    setAwssqs(value?: records_aws_sqs_pb.AWSSQS): WriteRecord;

    hasMongo(): boolean;
    clearMongo(): void;
    getMongo(): records_mongo_pb.Mongo | undefined;
    setMongo(value?: records_mongo_pb.Mongo): WriteRecord;

    hasNats(): boolean;
    clearNats(): void;
    getNats(): records_nats_pb.Nats | undefined;
    setNats(value?: records_nats_pb.Nats): WriteRecord;

    hasNatsStreaming(): boolean;
    clearNatsStreaming(): void;
    getNatsStreaming(): records_nats_streaming_pb.NatsStreaming | undefined;
    setNatsStreaming(value?: records_nats_streaming_pb.NatsStreaming): WriteRecord;

    hasNsq(): boolean;
    clearNsq(): void;
    getNsq(): records_nsq_pb.NSQ | undefined;
    setNsq(value?: records_nsq_pb.NSQ): WriteRecord;

    hasPostgres(): boolean;
    clearPostgres(): void;
    getPostgres(): records_postgres_pb.Postgres | undefined;
    setPostgres(value?: records_postgres_pb.Postgres): WriteRecord;

    hasPulsar(): boolean;
    clearPulsar(): void;
    getPulsar(): records_pulsar_pb.Pulsar | undefined;
    setPulsar(value?: records_pulsar_pb.Pulsar): WriteRecord;

    hasRabbit(): boolean;
    clearRabbit(): void;
    getRabbit(): records_rabbit_pb.Rabbit | undefined;
    setRabbit(value?: records_rabbit_pb.Rabbit): WriteRecord;

    hasRabbitStreams(): boolean;
    clearRabbitStreams(): void;
    getRabbitStreams(): records_rabbit_streams_pb.RabbitStreams | undefined;
    setRabbitStreams(value?: records_rabbit_streams_pb.RabbitStreams): WriteRecord;

    hasRedisPubsub(): boolean;
    clearRedisPubsub(): void;
    getRedisPubsub(): records_redis_pubsub_pb.RedisPubsub | undefined;
    setRedisPubsub(value?: records_redis_pubsub_pb.RedisPubsub): WriteRecord;

    hasRedisStreams(): boolean;
    clearRedisStreams(): void;
    getRedisStreams(): records_redis_streams_pb.RedisStreams | undefined;
    setRedisStreams(value?: records_redis_streams_pb.RedisStreams): WriteRecord;

    hasAzureEventHub(): boolean;
    clearAzureEventHub(): void;
    getAzureEventHub(): records_azure_event_hub_pb.AzureEventHub | undefined;
    setAzureEventHub(value?: records_azure_event_hub_pb.AzureEventHub): WriteRecord;

    hasAzureServiceBus(): boolean;
    clearAzureServiceBus(): void;
    getAzureServiceBus(): records_azure_service_bus_pb.AzureServiceBus | undefined;
    setAzureServiceBus(value?: records_azure_service_bus_pb.AzureServiceBus): WriteRecord;

    hasMqtt(): boolean;
    clearMqtt(): void;
    getMqtt(): records_mqtt_pb.MQTT | undefined;
    setMqtt(value?: records_mqtt_pb.MQTT): WriteRecord;

    hasKubemq(): boolean;
    clearKubemq(): void;
    getKubemq(): records_kubemq_pb.KubeMQ | undefined;
    setKubemq(value?: records_kubemq_pb.KubeMQ): WriteRecord;

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
        Encoded: Uint8Array | string,
        kafka?: records_kafka_pb.Kafka.AsObject,
        activeMq?: records_activemq_pb.ActiveMQ.AsObject,
        awssqs?: records_aws_sqs_pb.AWSSQS.AsObject,
        mongo?: records_mongo_pb.Mongo.AsObject,
        nats?: records_nats_pb.Nats.AsObject,
        natsStreaming?: records_nats_streaming_pb.NatsStreaming.AsObject,
        nsq?: records_nsq_pb.NSQ.AsObject,
        postgres?: records_postgres_pb.Postgres.AsObject,
        pulsar?: records_pulsar_pb.Pulsar.AsObject,
        rabbit?: records_rabbit_pb.Rabbit.AsObject,
        rabbitStreams?: records_rabbit_streams_pb.RabbitStreams.AsObject,
        redisPubsub?: records_redis_pubsub_pb.RedisPubsub.AsObject,
        redisStreams?: records_redis_streams_pb.RedisStreams.AsObject,
        azureEventHub?: records_azure_event_hub_pb.AzureEventHub.AsObject,
        azureServiceBus?: records_azure_service_bus_pb.AzureServiceBus.AsObject,
        mqtt?: records_mqtt_pb.MQTT.AsObject,
        kubemq?: records_kubemq_pb.KubeMQ.AsObject,
    }

    export enum RecordsCase {
        RECORDS_NOT_SET = 0,
        KAFKA = 100,
        ACTIVE_MQ = 101,
        AWSSQS = 102,
        MONGO = 103,
        NATS = 104,
        NATS_STREAMING = 105,
        NSQ = 106,
        POSTGRES = 107,
        PULSAR = 108,
        RABBIT = 109,
        RABBIT_STREAMS = 110,
        REDIS_PUBSUB = 111,
        REDIS_STREAMS = 112,
        AZURE_EVENT_HUB = 113,
        AZURE_SERVICE_BUS = 114,
        MQTT = 115,
        KUBEMQ = 116,
    }

}

export class ErrorRecord extends jspb.Message { 
    getOccurredAtUnixTsUtc(): number;
    setOccurredAtUnixTsUtc(value: number): ErrorRecord;
    getError(): string;
    setError(value: string): ErrorRecord;

    getMetadataMap(): jspb.Map<string, Uint8Array | string>;
    clearMetadataMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorRecord.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorRecord): ErrorRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorRecord;
    static deserializeBinaryFromReader(message: ErrorRecord, reader: jspb.BinaryReader): ErrorRecord;
}

export namespace ErrorRecord {
    export type AsObject = {
        occurredAtUnixTsUtc: number,
        error: string,

        metadataMap: Array<[string, Uint8Array | string]>,
    }
}
