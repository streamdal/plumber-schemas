// package: protos
// file: read.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_auth_pb from "./common/auth_pb";
import * as common_status_pb from "./common/status_pb";
import * as encoding_options_pb from "./encoding/options_pb";
import * as records_base_pb from "./records/base_pb";
import * as backends_backends_pb from "./backends/backends_pb";
import * as backends_activemq_pb from "./backends/activemq_pb";
import * as backends_azure_service_bus_pb from "./backends/azure-service-bus_pb";
import * as backends_azure_event_hub_pb from "./backends/azure-event-hub_pb";
import * as backends_aws_sqs_pb from "./backends/aws-sqs_pb";
import * as backends_gcp_pubsub_pb from "./backends/gcp-pubsub_pb";
import * as backends_kafka_pb from "./backends/kafka_pb";
import * as backends_kubemq_queue_pb from "./backends/kubemq-queue_pb";
import * as backends_mongo_pb from "./backends/mongo_pb";
import * as backends_mqtt_pb from "./backends/mqtt_pb";
import * as backends_nats_pb from "./backends/nats_pb";
import * as backends_nats_streaming_pb from "./backends/nats-streaming_pb";
import * as backends_nsq_pb from "./backends/nsq_pb";
import * as backends_postgres_pb from "./backends/postgres_pb";
import * as backends_pulsar_pb from "./backends/pulsar_pb";
import * as backends_rabbit_pb from "./backends/rabbit_pb";
import * as backends_rabbit_streams_pb from "./backends/rabbit-streams_pb";
import * as backends_redis_pubsub_pb from "./backends/redis-pubsub_pb";
import * as backends_redis_streams_pb from "./backends/redis-streams_pb";

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

export class ReadCLIConfig extends jspb.Message { 
    getDisplayOffsetStats(): boolean;
    setDisplayOffsetStats(value: boolean): ReadCLIConfig;
    clearConvertOutputList(): void;
    getConvertOutputList(): Array<ConvertOption>;
    setConvertOutputList(value: Array<ConvertOption>): ReadCLIConfig;
    addConvertOutput(value: ConvertOption, index?: number): ConvertOption;
    getVerboseOutput(): boolean;
    setVerboseOutput(value: boolean): ReadCLIConfig;
    getStatsEnable(): boolean;
    setStatsEnable(value: boolean): ReadCLIConfig;
    getStatsReportIntervalSec(): number;
    setStatsReportIntervalSec(value: number): ReadCLIConfig;
    getBackendType(): backends_backends_pb.Type;
    setBackendType(value: backends_backends_pb.Type): ReadCLIConfig;

    hasReadBackend(): boolean;
    clearReadBackend(): void;
    getReadBackend(): ReadCLIConfig.ReadBackend | undefined;
    setReadBackend(value?: ReadCLIConfig.ReadBackend): ReadCLIConfig;

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
        displayOffsetStats: boolean,
        convertOutputList: Array<ConvertOption>,
        verboseOutput: boolean,
        statsEnable: boolean,
        statsReportIntervalSec: number,
        BackendType: backends_backends_pb.Type,
        ReadBackend?: ReadCLIConfig.ReadBackend.AsObject,
    }


    export class ReadBackend extends jspb.Message { 

        hasKafka(): boolean;
        clearKafka(): void;
        getKafka(): ReadCLIConfig.ReadBackend.Kafka | undefined;
        setKafka(value?: ReadCLIConfig.ReadBackend.Kafka): ReadBackend;

        hasActivemq(): boolean;
        clearActivemq(): void;
        getActivemq(): ReadCLIConfig.ReadBackend.ActiveMQ | undefined;
        setActivemq(value?: ReadCLIConfig.ReadBackend.ActiveMQ): ReadBackend;

        hasAwssqs(): boolean;
        clearAwssqs(): void;
        getAwssqs(): ReadCLIConfig.ReadBackend.AWSSQS | undefined;
        setAwssqs(value?: ReadCLIConfig.ReadBackend.AWSSQS): ReadBackend;

        hasMongo(): boolean;
        clearMongo(): void;
        getMongo(): ReadCLIConfig.ReadBackend.Mongo | undefined;
        setMongo(value?: ReadCLIConfig.ReadBackend.Mongo): ReadBackend;

        hasNats(): boolean;
        clearNats(): void;
        getNats(): ReadCLIConfig.ReadBackend.Nats | undefined;
        setNats(value?: ReadCLIConfig.ReadBackend.Nats): ReadBackend;

        hasNatsStreaming(): boolean;
        clearNatsStreaming(): void;
        getNatsStreaming(): ReadCLIConfig.ReadBackend.NatsStreaming | undefined;
        setNatsStreaming(value?: ReadCLIConfig.ReadBackend.NatsStreaming): ReadBackend;

        hasNsq(): boolean;
        clearNsq(): void;
        getNsq(): ReadCLIConfig.ReadBackend.NSQ | undefined;
        setNsq(value?: ReadCLIConfig.ReadBackend.NSQ): ReadBackend;

        hasPulsar(): boolean;
        clearPulsar(): void;
        getPulsar(): ReadCLIConfig.ReadBackend.Pulsar | undefined;
        setPulsar(value?: ReadCLIConfig.ReadBackend.Pulsar): ReadBackend;

        hasRabbit(): boolean;
        clearRabbit(): void;
        getRabbit(): ReadCLIConfig.ReadBackend.Rabbit | undefined;
        setRabbit(value?: ReadCLIConfig.ReadBackend.Rabbit): ReadBackend;

        hasRabbitStreams(): boolean;
        clearRabbitStreams(): void;
        getRabbitStreams(): ReadCLIConfig.ReadBackend.RabbitStreams | undefined;
        setRabbitStreams(value?: ReadCLIConfig.ReadBackend.RabbitStreams): ReadBackend;

        hasMqtt(): boolean;
        clearMqtt(): void;
        getMqtt(): ReadCLIConfig.ReadBackend.MQTT | undefined;
        setMqtt(value?: ReadCLIConfig.ReadBackend.MQTT): ReadBackend;

        hasAzureServiceBus(): boolean;
        clearAzureServiceBus(): void;
        getAzureServiceBus(): ReadCLIConfig.ReadBackend.AzureServiceBus | undefined;
        setAzureServiceBus(value?: ReadCLIConfig.ReadBackend.AzureServiceBus): ReadBackend;

        hasAzureEventHub(): boolean;
        clearAzureEventHub(): void;
        getAzureEventHub(): ReadCLIConfig.ReadBackend.AzureEventHub | undefined;
        setAzureEventHub(value?: ReadCLIConfig.ReadBackend.AzureEventHub): ReadBackend;

        hasGcpPubsub(): boolean;
        clearGcpPubsub(): void;
        getGcpPubsub(): ReadCLIConfig.ReadBackend.GCPPubSub | undefined;
        setGcpPubsub(value?: ReadCLIConfig.ReadBackend.GCPPubSub): ReadBackend;

        hasKubemqQueue(): boolean;
        clearKubemqQueue(): void;
        getKubemqQueue(): ReadCLIConfig.ReadBackend.KubeMQQueue | undefined;
        setKubemqQueue(value?: ReadCLIConfig.ReadBackend.KubeMQQueue): ReadBackend;

        hasRedisPubsub(): boolean;
        clearRedisPubsub(): void;
        getRedisPubsub(): ReadCLIConfig.ReadBackend.RedisPubSub | undefined;
        setRedisPubsub(value?: ReadCLIConfig.ReadBackend.RedisPubSub): ReadBackend;

        hasRedisStreams(): boolean;
        clearRedisStreams(): void;
        getRedisStreams(): ReadCLIConfig.ReadBackend.RedisStreams | undefined;
        setRedisStreams(value?: ReadCLIConfig.ReadBackend.RedisStreams): ReadBackend;

        hasPostgres(): boolean;
        clearPostgres(): void;
        getPostgres(): ReadCLIConfig.ReadBackend.Postgres | undefined;
        setPostgres(value?: ReadCLIConfig.ReadBackend.Postgres): ReadBackend;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ReadBackend.AsObject;
        static toObject(includeInstance: boolean, msg: ReadBackend): ReadBackend.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ReadBackend, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ReadBackend;
        static deserializeBinaryFromReader(message: ReadBackend, reader: jspb.BinaryReader): ReadBackend;
    }

    export namespace ReadBackend {
        export type AsObject = {
            kafka?: ReadCLIConfig.ReadBackend.Kafka.AsObject,
            activemq?: ReadCLIConfig.ReadBackend.ActiveMQ.AsObject,
            awssqs?: ReadCLIConfig.ReadBackend.AWSSQS.AsObject,
            mongo?: ReadCLIConfig.ReadBackend.Mongo.AsObject,
            nats?: ReadCLIConfig.ReadBackend.Nats.AsObject,
            natsStreaming?: ReadCLIConfig.ReadBackend.NatsStreaming.AsObject,
            nsq?: ReadCLIConfig.ReadBackend.NSQ.AsObject,
            pulsar?: ReadCLIConfig.ReadBackend.Pulsar.AsObject,
            rabbit?: ReadCLIConfig.ReadBackend.Rabbit.AsObject,
            rabbitStreams?: ReadCLIConfig.ReadBackend.RabbitStreams.AsObject,
            mqtt?: ReadCLIConfig.ReadBackend.MQTT.AsObject,
            azureServiceBus?: ReadCLIConfig.ReadBackend.AzureServiceBus.AsObject,
            azureEventHub?: ReadCLIConfig.ReadBackend.AzureEventHub.AsObject,
            gcpPubsub?: ReadCLIConfig.ReadBackend.GCPPubSub.AsObject,
            kubemqQueue?: ReadCLIConfig.ReadBackend.KubeMQQueue.AsObject,
            redisPubsub?: ReadCLIConfig.ReadBackend.RedisPubSub.AsObject,
            redisStreams?: ReadCLIConfig.ReadBackend.RedisStreams.AsObject,
            postgres?: ReadCLIConfig.ReadBackend.Postgres.AsObject,
        }


        export class Kafka extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_kafka_pb.KafkaConn | undefined;
            setConn(value?: backends_kafka_pb.KafkaConn): Kafka;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_kafka_pb.KafkaReadArgs | undefined;
            setArgs(value?: backends_kafka_pb.KafkaReadArgs): Kafka;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Kafka.AsObject;
            static toObject(includeInstance: boolean, msg: Kafka): Kafka.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Kafka, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Kafka;
            static deserializeBinaryFromReader(message: Kafka, reader: jspb.BinaryReader): Kafka;
        }

        export namespace Kafka {
            export type AsObject = {
                conn?: backends_kafka_pb.KafkaConn.AsObject,
                args?: backends_kafka_pb.KafkaReadArgs.AsObject,
            }
        }

        export class ActiveMQ extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_activemq_pb.ActiveMQConn | undefined;
            setConn(value?: backends_activemq_pb.ActiveMQConn): ActiveMQ;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_activemq_pb.ActiveMQReadArgs | undefined;
            setArgs(value?: backends_activemq_pb.ActiveMQReadArgs): ActiveMQ;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): ActiveMQ.AsObject;
            static toObject(includeInstance: boolean, msg: ActiveMQ): ActiveMQ.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: ActiveMQ, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): ActiveMQ;
            static deserializeBinaryFromReader(message: ActiveMQ, reader: jspb.BinaryReader): ActiveMQ;
        }

        export namespace ActiveMQ {
            export type AsObject = {
                conn?: backends_activemq_pb.ActiveMQConn.AsObject,
                args?: backends_activemq_pb.ActiveMQReadArgs.AsObject,
            }
        }

        export class AWSSQS extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_aws_sqs_pb.AWSSQSConn | undefined;
            setConn(value?: backends_aws_sqs_pb.AWSSQSConn): AWSSQS;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_aws_sqs_pb.AWSSQSReadArgs | undefined;
            setArgs(value?: backends_aws_sqs_pb.AWSSQSReadArgs): AWSSQS;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): AWSSQS.AsObject;
            static toObject(includeInstance: boolean, msg: AWSSQS): AWSSQS.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: AWSSQS, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): AWSSQS;
            static deserializeBinaryFromReader(message: AWSSQS, reader: jspb.BinaryReader): AWSSQS;
        }

        export namespace AWSSQS {
            export type AsObject = {
                conn?: backends_aws_sqs_pb.AWSSQSConn.AsObject,
                args?: backends_aws_sqs_pb.AWSSQSReadArgs.AsObject,
            }
        }

        export class Mongo extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_mongo_pb.MongoConn | undefined;
            setConn(value?: backends_mongo_pb.MongoConn): Mongo;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_mongo_pb.MongoReadArgs | undefined;
            setArgs(value?: backends_mongo_pb.MongoReadArgs): Mongo;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Mongo.AsObject;
            static toObject(includeInstance: boolean, msg: Mongo): Mongo.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Mongo, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Mongo;
            static deserializeBinaryFromReader(message: Mongo, reader: jspb.BinaryReader): Mongo;
        }

        export namespace Mongo {
            export type AsObject = {
                conn?: backends_mongo_pb.MongoConn.AsObject,
                args?: backends_mongo_pb.MongoReadArgs.AsObject,
            }
        }

        export class Nats extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_nats_pb.NatsConn | undefined;
            setConn(value?: backends_nats_pb.NatsConn): Nats;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_nats_pb.NatsReadArgs | undefined;
            setArgs(value?: backends_nats_pb.NatsReadArgs): Nats;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Nats.AsObject;
            static toObject(includeInstance: boolean, msg: Nats): Nats.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Nats, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Nats;
            static deserializeBinaryFromReader(message: Nats, reader: jspb.BinaryReader): Nats;
        }

        export namespace Nats {
            export type AsObject = {
                conn?: backends_nats_pb.NatsConn.AsObject,
                args?: backends_nats_pb.NatsReadArgs.AsObject,
            }
        }

        export class NatsStreaming extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_nats_streaming_pb.NatsStreamingConn | undefined;
            setConn(value?: backends_nats_streaming_pb.NatsStreamingConn): NatsStreaming;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_nats_streaming_pb.NatsStreamingReadArgs | undefined;
            setArgs(value?: backends_nats_streaming_pb.NatsStreamingReadArgs): NatsStreaming;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): NatsStreaming.AsObject;
            static toObject(includeInstance: boolean, msg: NatsStreaming): NatsStreaming.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: NatsStreaming, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): NatsStreaming;
            static deserializeBinaryFromReader(message: NatsStreaming, reader: jspb.BinaryReader): NatsStreaming;
        }

        export namespace NatsStreaming {
            export type AsObject = {
                conn?: backends_nats_streaming_pb.NatsStreamingConn.AsObject,
                args?: backends_nats_streaming_pb.NatsStreamingReadArgs.AsObject,
            }
        }

        export class NSQ extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_nsq_pb.NSQConn | undefined;
            setConn(value?: backends_nsq_pb.NSQConn): NSQ;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_nsq_pb.NSQReadArgs | undefined;
            setArgs(value?: backends_nsq_pb.NSQReadArgs): NSQ;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): NSQ.AsObject;
            static toObject(includeInstance: boolean, msg: NSQ): NSQ.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: NSQ, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): NSQ;
            static deserializeBinaryFromReader(message: NSQ, reader: jspb.BinaryReader): NSQ;
        }

        export namespace NSQ {
            export type AsObject = {
                conn?: backends_nsq_pb.NSQConn.AsObject,
                args?: backends_nsq_pb.NSQReadArgs.AsObject,
            }
        }

        export class Postgres extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_postgres_pb.PostgresConn | undefined;
            setConn(value?: backends_postgres_pb.PostgresConn): Postgres;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_postgres_pb.PostgresReadArgs | undefined;
            setArgs(value?: backends_postgres_pb.PostgresReadArgs): Postgres;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Postgres.AsObject;
            static toObject(includeInstance: boolean, msg: Postgres): Postgres.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Postgres, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Postgres;
            static deserializeBinaryFromReader(message: Postgres, reader: jspb.BinaryReader): Postgres;
        }

        export namespace Postgres {
            export type AsObject = {
                conn?: backends_postgres_pb.PostgresConn.AsObject,
                args?: backends_postgres_pb.PostgresReadArgs.AsObject,
            }
        }

        export class Pulsar extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_pulsar_pb.PulsarConn | undefined;
            setConn(value?: backends_pulsar_pb.PulsarConn): Pulsar;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_pulsar_pb.PulsarReadArgs | undefined;
            setArgs(value?: backends_pulsar_pb.PulsarReadArgs): Pulsar;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Pulsar.AsObject;
            static toObject(includeInstance: boolean, msg: Pulsar): Pulsar.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Pulsar, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Pulsar;
            static deserializeBinaryFromReader(message: Pulsar, reader: jspb.BinaryReader): Pulsar;
        }

        export namespace Pulsar {
            export type AsObject = {
                conn?: backends_pulsar_pb.PulsarConn.AsObject,
                args?: backends_pulsar_pb.PulsarReadArgs.AsObject,
            }
        }

        export class Rabbit extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_rabbit_pb.RabbitConn | undefined;
            setConn(value?: backends_rabbit_pb.RabbitConn): Rabbit;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_rabbit_pb.RabbitReadArgs | undefined;
            setArgs(value?: backends_rabbit_pb.RabbitReadArgs): Rabbit;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Rabbit.AsObject;
            static toObject(includeInstance: boolean, msg: Rabbit): Rabbit.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Rabbit, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Rabbit;
            static deserializeBinaryFromReader(message: Rabbit, reader: jspb.BinaryReader): Rabbit;
        }

        export namespace Rabbit {
            export type AsObject = {
                conn?: backends_rabbit_pb.RabbitConn.AsObject,
                args?: backends_rabbit_pb.RabbitReadArgs.AsObject,
            }
        }

        export class RabbitStreams extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_rabbit_streams_pb.RabbitStreamsConn | undefined;
            setConn(value?: backends_rabbit_streams_pb.RabbitStreamsConn): RabbitStreams;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_rabbit_streams_pb.RabbitStreamsReadArgs | undefined;
            setArgs(value?: backends_rabbit_streams_pb.RabbitStreamsReadArgs): RabbitStreams;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): RabbitStreams.AsObject;
            static toObject(includeInstance: boolean, msg: RabbitStreams): RabbitStreams.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: RabbitStreams, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): RabbitStreams;
            static deserializeBinaryFromReader(message: RabbitStreams, reader: jspb.BinaryReader): RabbitStreams;
        }

        export namespace RabbitStreams {
            export type AsObject = {
                conn?: backends_rabbit_streams_pb.RabbitStreamsConn.AsObject,
                args?: backends_rabbit_streams_pb.RabbitStreamsReadArgs.AsObject,
            }
        }

        export class RedisPubSub extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_redis_pubsub_pb.RedisPubSubConn | undefined;
            setConn(value?: backends_redis_pubsub_pb.RedisPubSubConn): RedisPubSub;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_redis_pubsub_pb.RedisPubSubReadArgs | undefined;
            setArgs(value?: backends_redis_pubsub_pb.RedisPubSubReadArgs): RedisPubSub;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): RedisPubSub.AsObject;
            static toObject(includeInstance: boolean, msg: RedisPubSub): RedisPubSub.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: RedisPubSub, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): RedisPubSub;
            static deserializeBinaryFromReader(message: RedisPubSub, reader: jspb.BinaryReader): RedisPubSub;
        }

        export namespace RedisPubSub {
            export type AsObject = {
                conn?: backends_redis_pubsub_pb.RedisPubSubConn.AsObject,
                args?: backends_redis_pubsub_pb.RedisPubSubReadArgs.AsObject,
            }
        }

        export class RedisStreams extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_redis_streams_pb.RedisStreamsConn | undefined;
            setConn(value?: backends_redis_streams_pb.RedisStreamsConn): RedisStreams;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_redis_streams_pb.RedisStreamsReadArgs | undefined;
            setArgs(value?: backends_redis_streams_pb.RedisStreamsReadArgs): RedisStreams;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): RedisStreams.AsObject;
            static toObject(includeInstance: boolean, msg: RedisStreams): RedisStreams.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: RedisStreams, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): RedisStreams;
            static deserializeBinaryFromReader(message: RedisStreams, reader: jspb.BinaryReader): RedisStreams;
        }

        export namespace RedisStreams {
            export type AsObject = {
                conn?: backends_redis_streams_pb.RedisStreamsConn.AsObject,
                args?: backends_redis_streams_pb.RedisStreamsReadArgs.AsObject,
            }
        }

        export class AzureEventHub extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_azure_event_hub_pb.AzureEventHubConn | undefined;
            setConn(value?: backends_azure_event_hub_pb.AzureEventHubConn): AzureEventHub;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_azure_event_hub_pb.AzureEventHubReadArgs | undefined;
            setArgs(value?: backends_azure_event_hub_pb.AzureEventHubReadArgs): AzureEventHub;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): AzureEventHub.AsObject;
            static toObject(includeInstance: boolean, msg: AzureEventHub): AzureEventHub.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: AzureEventHub, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): AzureEventHub;
            static deserializeBinaryFromReader(message: AzureEventHub, reader: jspb.BinaryReader): AzureEventHub;
        }

        export namespace AzureEventHub {
            export type AsObject = {
                conn?: backends_azure_event_hub_pb.AzureEventHubConn.AsObject,
                args?: backends_azure_event_hub_pb.AzureEventHubReadArgs.AsObject,
            }
        }

        export class AzureServiceBus extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_azure_service_bus_pb.AzureServiceBusConn | undefined;
            setConn(value?: backends_azure_service_bus_pb.AzureServiceBusConn): AzureServiceBus;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_azure_service_bus_pb.AzureServiceBusReadArgs | undefined;
            setArgs(value?: backends_azure_service_bus_pb.AzureServiceBusReadArgs): AzureServiceBus;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): AzureServiceBus.AsObject;
            static toObject(includeInstance: boolean, msg: AzureServiceBus): AzureServiceBus.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: AzureServiceBus, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): AzureServiceBus;
            static deserializeBinaryFromReader(message: AzureServiceBus, reader: jspb.BinaryReader): AzureServiceBus;
        }

        export namespace AzureServiceBus {
            export type AsObject = {
                conn?: backends_azure_service_bus_pb.AzureServiceBusConn.AsObject,
                args?: backends_azure_service_bus_pb.AzureServiceBusReadArgs.AsObject,
            }
        }

        export class MQTT extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_mqtt_pb.MQTTConn | undefined;
            setConn(value?: backends_mqtt_pb.MQTTConn): MQTT;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_mqtt_pb.MQTTReadArgs | undefined;
            setArgs(value?: backends_mqtt_pb.MQTTReadArgs): MQTT;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): MQTT.AsObject;
            static toObject(includeInstance: boolean, msg: MQTT): MQTT.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: MQTT, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): MQTT;
            static deserializeBinaryFromReader(message: MQTT, reader: jspb.BinaryReader): MQTT;
        }

        export namespace MQTT {
            export type AsObject = {
                conn?: backends_mqtt_pb.MQTTConn.AsObject,
                args?: backends_mqtt_pb.MQTTReadArgs.AsObject,
            }
        }

        export class GCPPubSub extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_gcp_pubsub_pb.GCPPubSubConn | undefined;
            setConn(value?: backends_gcp_pubsub_pb.GCPPubSubConn): GCPPubSub;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_gcp_pubsub_pb.GCPPubSubReadArgs | undefined;
            setArgs(value?: backends_gcp_pubsub_pb.GCPPubSubReadArgs): GCPPubSub;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): GCPPubSub.AsObject;
            static toObject(includeInstance: boolean, msg: GCPPubSub): GCPPubSub.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: GCPPubSub, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): GCPPubSub;
            static deserializeBinaryFromReader(message: GCPPubSub, reader: jspb.BinaryReader): GCPPubSub;
        }

        export namespace GCPPubSub {
            export type AsObject = {
                conn?: backends_gcp_pubsub_pb.GCPPubSubConn.AsObject,
                args?: backends_gcp_pubsub_pb.GCPPubSubReadArgs.AsObject,
            }
        }

        export class KubeMQQueue extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_kubemq_queue_pb.KubeMQQueueConn | undefined;
            setConn(value?: backends_kubemq_queue_pb.KubeMQQueueConn): KubeMQQueue;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_kubemq_queue_pb.KubeMQQueueReadArgs | undefined;
            setArgs(value?: backends_kubemq_queue_pb.KubeMQQueueReadArgs): KubeMQQueue;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): KubeMQQueue.AsObject;
            static toObject(includeInstance: boolean, msg: KubeMQQueue): KubeMQQueue.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: KubeMQQueue, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): KubeMQQueue;
            static deserializeBinaryFromReader(message: KubeMQQueue, reader: jspb.BinaryReader): KubeMQQueue;
        }

        export namespace KubeMQQueue {
            export type AsObject = {
                conn?: backends_kubemq_queue_pb.KubeMQQueueConn.AsObject,
                args?: backends_kubemq_queue_pb.KubeMQQueueReadArgs.AsObject,
            }
        }

    }

}

export class ReadConfig extends jspb.Message { 
    getName(): string;
    setName(value: string): ReadConfig;
    getConnectionId(): string;
    setConnectionId(value: string): ReadConfig;
    getContinuous(): boolean;
    setContinuous(value: boolean): ReadConfig;

    hasSampleOptions(): boolean;
    clearSampleOptions(): void;
    getSampleOptions(): ReadSampleOptions | undefined;
    setSampleOptions(value?: ReadSampleOptions): ReadConfig;

    hasDecodeOptions(): boolean;
    clearDecodeOptions(): void;
    getDecodeOptions(): encoding_options_pb.DecodeOptions | undefined;
    setDecodeOptions(value?: encoding_options_pb.DecodeOptions): ReadConfig;
    getId(): string;
    setId(value: string): ReadConfig;
    getActive(): boolean;
    setActive(value: boolean): ReadConfig;

    hasCliConfig(): boolean;
    clearCliConfig(): void;
    getCliConfig(): ReadCLIConfig | undefined;
    setCliConfig(value?: ReadCLIConfig): ReadConfig;

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
        name: string,
        connectionId: string,
        continuous: boolean,
        sampleOptions?: ReadSampleOptions.AsObject,
        decodeOptions?: encoding_options_pb.DecodeOptions.AsObject,
        Id: string,
        Active: boolean,
        CliConfig?: ReadCLIConfig.AsObject,
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

export enum ConvertOption {
    UNSET = 0,
    BASE64 = 1,
    GZIP = 2,
}
