// package: protos
// file: relay.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as backends_backends_pb from "./backends/backends_pb";
import * as backends_kafka_pb from "./backends/kafka_pb";
import * as backends_aws_sqs_pb from "./backends/aws-sqs_pb";
import * as backends_mongo_pb from "./backends/mongo_pb";
import * as backends_nsq_pb from "./backends/nsq_pb";
import * as backends_postgres_pb from "./backends/postgres_pb";
import * as backends_rabbit_pb from "./backends/rabbit_pb";
import * as backends_redis_pubsub_pb from "./backends/redis-pubsub_pb";
import * as backends_redis_streams_pb from "./backends/redis-streams_pb";
import * as backends_azure_service_bus_pb from "./backends/azure-service-bus_pb";
import * as backends_mqtt_pb from "./backends/mqtt_pb";
import * as backends_gcp_pubsub_pb from "./backends/gcp-pubsub_pb";
import * as backends_kubemq_queue_pb from "./backends/kubemq-queue_pb";
import * as common_auth_pb from "./common/auth_pb";
import * as common_status_pb from "./common/status_pb";

export class CLIRelayConfig extends jspb.Message { 
    getHttpListenAddress(): string;
    setHttpListenAddress(value: string): CLIRelayConfig;
    getBackendType(): backends_backends_pb.Type;
    setBackendType(value: backends_backends_pb.Type): CLIRelayConfig;

    hasRelayBackend(): boolean;
    clearRelayBackend(): void;
    getRelayBackend(): CLIRelayConfig.RelayBackend | undefined;
    setRelayBackend(value?: CLIRelayConfig.RelayBackend): CLIRelayConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CLIRelayConfig.AsObject;
    static toObject(includeInstance: boolean, msg: CLIRelayConfig): CLIRelayConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CLIRelayConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CLIRelayConfig;
    static deserializeBinaryFromReader(message: CLIRelayConfig, reader: jspb.BinaryReader): CLIRelayConfig;
}

export namespace CLIRelayConfig {
    export type AsObject = {
        httpListenAddress: string,
        BackendType: backends_backends_pb.Type,
        RelayBackend?: CLIRelayConfig.RelayBackend.AsObject,
    }


    export class RelayBackend extends jspb.Message { 

        hasKafka(): boolean;
        clearKafka(): void;
        getKafka(): CLIRelayConfig.RelayBackend.Kafka | undefined;
        setKafka(value?: CLIRelayConfig.RelayBackend.Kafka): RelayBackend;

        hasAwssqs(): boolean;
        clearAwssqs(): void;
        getAwssqs(): CLIRelayConfig.RelayBackend.AWSSQS | undefined;
        setAwssqs(value?: CLIRelayConfig.RelayBackend.AWSSQS): RelayBackend;

        hasMongo(): boolean;
        clearMongo(): void;
        getMongo(): CLIRelayConfig.RelayBackend.Mongo | undefined;
        setMongo(value?: CLIRelayConfig.RelayBackend.Mongo): RelayBackend;

        hasNsq(): boolean;
        clearNsq(): void;
        getNsq(): CLIRelayConfig.RelayBackend.NSQ | undefined;
        setNsq(value?: CLIRelayConfig.RelayBackend.NSQ): RelayBackend;

        hasRabbit(): boolean;
        clearRabbit(): void;
        getRabbit(): CLIRelayConfig.RelayBackend.Rabbit | undefined;
        setRabbit(value?: CLIRelayConfig.RelayBackend.Rabbit): RelayBackend;

        hasMqtt(): boolean;
        clearMqtt(): void;
        getMqtt(): CLIRelayConfig.RelayBackend.MQTT | undefined;
        setMqtt(value?: CLIRelayConfig.RelayBackend.MQTT): RelayBackend;

        hasAzureServiceBus(): boolean;
        clearAzureServiceBus(): void;
        getAzureServiceBus(): CLIRelayConfig.RelayBackend.AzureServiceBus | undefined;
        setAzureServiceBus(value?: CLIRelayConfig.RelayBackend.AzureServiceBus): RelayBackend;

        hasGcpPubsub(): boolean;
        clearGcpPubsub(): void;
        getGcpPubsub(): CLIRelayConfig.RelayBackend.GCPPubSub | undefined;
        setGcpPubsub(value?: CLIRelayConfig.RelayBackend.GCPPubSub): RelayBackend;

        hasKubemqQueue(): boolean;
        clearKubemqQueue(): void;
        getKubemqQueue(): CLIRelayConfig.RelayBackend.KubeMQQueue | undefined;
        setKubemqQueue(value?: CLIRelayConfig.RelayBackend.KubeMQQueue): RelayBackend;

        hasRedisPubsub(): boolean;
        clearRedisPubsub(): void;
        getRedisPubsub(): CLIRelayConfig.RelayBackend.RedisPubSub | undefined;
        setRedisPubsub(value?: CLIRelayConfig.RelayBackend.RedisPubSub): RelayBackend;

        hasRedisStreams(): boolean;
        clearRedisStreams(): void;
        getRedisStreams(): CLIRelayConfig.RelayBackend.RedisStreams | undefined;
        setRedisStreams(value?: CLIRelayConfig.RelayBackend.RedisStreams): RelayBackend;

        hasPostgres(): boolean;
        clearPostgres(): void;
        getPostgres(): CLIRelayConfig.RelayBackend.Postgres | undefined;
        setPostgres(value?: CLIRelayConfig.RelayBackend.Postgres): RelayBackend;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RelayBackend.AsObject;
        static toObject(includeInstance: boolean, msg: RelayBackend): RelayBackend.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RelayBackend, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RelayBackend;
        static deserializeBinaryFromReader(message: RelayBackend, reader: jspb.BinaryReader): RelayBackend;
    }

    export namespace RelayBackend {
        export type AsObject = {
            kafka?: CLIRelayConfig.RelayBackend.Kafka.AsObject,
            awssqs?: CLIRelayConfig.RelayBackend.AWSSQS.AsObject,
            mongo?: CLIRelayConfig.RelayBackend.Mongo.AsObject,
            nsq?: CLIRelayConfig.RelayBackend.NSQ.AsObject,
            rabbit?: CLIRelayConfig.RelayBackend.Rabbit.AsObject,
            mqtt?: CLIRelayConfig.RelayBackend.MQTT.AsObject,
            azureServiceBus?: CLIRelayConfig.RelayBackend.AzureServiceBus.AsObject,
            gcpPubsub?: CLIRelayConfig.RelayBackend.GCPPubSub.AsObject,
            kubemqQueue?: CLIRelayConfig.RelayBackend.KubeMQQueue.AsObject,
            redisPubsub?: CLIRelayConfig.RelayBackend.RedisPubSub.AsObject,
            redisStreams?: CLIRelayConfig.RelayBackend.RedisStreams.AsObject,
            postgres?: CLIRelayConfig.RelayBackend.Postgres.AsObject,
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

export class RelayConfig extends jspb.Message { 
    getCollectionToken(): string;
    setCollectionToken(value: string): RelayConfig;
    getBatchSize(): number;
    setBatchSize(value: number): RelayConfig;
    getBatchMaxRetry(): number;
    setBatchMaxRetry(value: number): RelayConfig;
    getConnectionId(): string;
    setConnectionId(value: string): RelayConfig;
    getNumWorkers(): number;
    setNumWorkers(value: number): RelayConfig;
    getBatchshGrpcAddress(): string;
    setBatchshGrpcAddress(value: string): RelayConfig;
    getBatchshGrpcDisableTls(): boolean;
    setBatchshGrpcDisableTls(value: boolean): RelayConfig;
    getBatchshGrpcTimeoutSeconds(): number;
    setBatchshGrpcTimeoutSeconds(value: number): RelayConfig;
    getRelayId(): string;
    setRelayId(value: string): RelayConfig;

    hasCliConfig(): boolean;
    clearCliConfig(): void;
    getCliConfig(): CLIRelayConfig | undefined;
    setCliConfig(value?: CLIRelayConfig): RelayConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelayConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RelayConfig): RelayConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelayConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelayConfig;
    static deserializeBinaryFromReader(message: RelayConfig, reader: jspb.BinaryReader): RelayConfig;
}

export namespace RelayConfig {
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
        CliConfig?: CLIRelayConfig.AsObject,
    }
}

export class GetAllRelaysRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): GetAllRelaysRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllRelaysRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllRelaysRequest): GetAllRelaysRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllRelaysRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllRelaysRequest;
    static deserializeBinaryFromReader(message: GetAllRelaysRequest, reader: jspb.BinaryReader): GetAllRelaysRequest;
}

export namespace GetAllRelaysRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
    }
}

export class GetAllRelaysResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): GetAllRelaysResponse;
    clearConfigsList(): void;
    getConfigsList(): Array<RelayConfig>;
    setConfigsList(value: Array<RelayConfig>): GetAllRelaysResponse;
    addConfigs(value?: RelayConfig, index?: number): RelayConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllRelaysResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllRelaysResponse): GetAllRelaysResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllRelaysResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllRelaysResponse;
    static deserializeBinaryFromReader(message: GetAllRelaysResponse, reader: jspb.BinaryReader): GetAllRelaysResponse;
}

export namespace GetAllRelaysResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
        configsList: Array<RelayConfig.AsObject>,
    }
}

export class GetRelayRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): GetRelayRequest;
    getRelayId(): string;
    setRelayId(value: string): GetRelayRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRelayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRelayRequest): GetRelayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRelayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRelayRequest;
    static deserializeBinaryFromReader(message: GetRelayRequest, reader: jspb.BinaryReader): GetRelayRequest;
}

export namespace GetRelayRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        relayId: string,
    }
}

export class GetRelayResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): GetRelayResponse;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): RelayConfig | undefined;
    setConfig(value?: RelayConfig): GetRelayResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRelayResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRelayResponse): GetRelayResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRelayResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRelayResponse;
    static deserializeBinaryFromReader(message: GetRelayResponse, reader: jspb.BinaryReader): GetRelayResponse;
}

export namespace GetRelayResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
        config?: RelayConfig.AsObject,
    }
}

export class CreateRelayRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): CreateRelayRequest;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): RelayConfig | undefined;
    setConfig(value?: RelayConfig): CreateRelayRequest;

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): backends_kafka_pb.KafkaReadArgs | undefined;
    setKafka(value?: backends_kafka_pb.KafkaReadArgs): CreateRelayRequest;

    hasMqtt(): boolean;
    clearMqtt(): void;
    getMqtt(): backends_mqtt_pb.MQTTReadArgs | undefined;
    setMqtt(value?: backends_mqtt_pb.MQTTReadArgs): CreateRelayRequest;

    hasAwssqs(): boolean;
    clearAwssqs(): void;
    getAwssqs(): backends_aws_sqs_pb.AWSSQSReadArgs | undefined;
    setAwssqs(value?: backends_aws_sqs_pb.AWSSQSReadArgs): CreateRelayRequest;

    hasMongo(): boolean;
    clearMongo(): void;
    getMongo(): backends_mongo_pb.MongoReadArgs | undefined;
    setMongo(value?: backends_mongo_pb.MongoReadArgs): CreateRelayRequest;

    hasGcpPubsub(): boolean;
    clearGcpPubsub(): void;
    getGcpPubsub(): backends_gcp_pubsub_pb.GCPPubSubReadArgs | undefined;
    setGcpPubsub(value?: backends_gcp_pubsub_pb.GCPPubSubReadArgs): CreateRelayRequest;

    hasAzureServiceBus(): boolean;
    clearAzureServiceBus(): void;
    getAzureServiceBus(): backends_azure_service_bus_pb.AzureServiceBusReadArgs | undefined;
    setAzureServiceBus(value?: backends_azure_service_bus_pb.AzureServiceBusReadArgs): CreateRelayRequest;

    hasNsq(): boolean;
    clearNsq(): void;
    getNsq(): backends_nsq_pb.NSQReadArgs | undefined;
    setNsq(value?: backends_nsq_pb.NSQReadArgs): CreateRelayRequest;

    hasPostgres(): boolean;
    clearPostgres(): void;
    getPostgres(): backends_postgres_pb.PostgresReadArgs | undefined;
    setPostgres(value?: backends_postgres_pb.PostgresReadArgs): CreateRelayRequest;

    hasRabbit(): boolean;
    clearRabbit(): void;
    getRabbit(): backends_rabbit_pb.RabbitReadArgs | undefined;
    setRabbit(value?: backends_rabbit_pb.RabbitReadArgs): CreateRelayRequest;

    hasRedisPubsub(): boolean;
    clearRedisPubsub(): void;
    getRedisPubsub(): backends_redis_pubsub_pb.RedisPubSubReadArgs | undefined;
    setRedisPubsub(value?: backends_redis_pubsub_pb.RedisPubSubReadArgs): CreateRelayRequest;

    hasRedisStreams(): boolean;
    clearRedisStreams(): void;
    getRedisStreams(): backends_redis_streams_pb.RedisStreamsReadArgs | undefined;
    setRedisStreams(value?: backends_redis_streams_pb.RedisStreamsReadArgs): CreateRelayRequest;

    getBackendsCase(): CreateRelayRequest.BackendsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRelayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRelayRequest): CreateRelayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRelayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRelayRequest;
    static deserializeBinaryFromReader(message: CreateRelayRequest, reader: jspb.BinaryReader): CreateRelayRequest;
}

export namespace CreateRelayRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        config?: RelayConfig.AsObject,
        kafka?: backends_kafka_pb.KafkaReadArgs.AsObject,
        mqtt?: backends_mqtt_pb.MQTTReadArgs.AsObject,
        awssqs?: backends_aws_sqs_pb.AWSSQSReadArgs.AsObject,
        mongo?: backends_mongo_pb.MongoReadArgs.AsObject,
        gcpPubsub?: backends_gcp_pubsub_pb.GCPPubSubReadArgs.AsObject,
        azureServiceBus?: backends_azure_service_bus_pb.AzureServiceBusReadArgs.AsObject,
        nsq?: backends_nsq_pb.NSQReadArgs.AsObject,
        postgres?: backends_postgres_pb.PostgresReadArgs.AsObject,
        rabbit?: backends_rabbit_pb.RabbitReadArgs.AsObject,
        redisPubsub?: backends_redis_pubsub_pb.RedisPubSubReadArgs.AsObject,
        redisStreams?: backends_redis_streams_pb.RedisStreamsReadArgs.AsObject,
    }

    export enum BackendsCase {
        BACKENDS_NOT_SET = 0,
        KAFKA = 100,
        MQTT = 101,
        AWSSQS = 102,
        MONGO = 104,
        GCP_PUBSUB = 105,
        AZURE_SERVICE_BUS = 106,
        NSQ = 107,
        POSTGRES = 108,
        RABBIT = 109,
        REDIS_PUBSUB = 111,
        REDIS_STREAMS = 112,
    }

}

export class CreateRelayResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): CreateRelayResponse;
    getRelayId(): string;
    setRelayId(value: string): CreateRelayResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRelayResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRelayResponse): CreateRelayResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRelayResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRelayResponse;
    static deserializeBinaryFromReader(message: CreateRelayResponse, reader: jspb.BinaryReader): CreateRelayResponse;
}

export namespace CreateRelayResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
        relayId: string,
    }
}

export class UpdateRelayRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): UpdateRelayRequest;
    getRelayId(): string;
    setRelayId(value: string): UpdateRelayRequest;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): RelayConfig | undefined;
    setConfig(value?: RelayConfig): UpdateRelayRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRelayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRelayRequest): UpdateRelayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRelayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRelayRequest;
    static deserializeBinaryFromReader(message: UpdateRelayRequest, reader: jspb.BinaryReader): UpdateRelayRequest;
}

export namespace UpdateRelayRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        relayId: string,
        config?: RelayConfig.AsObject,
    }
}

export class UpdateRelayResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): UpdateRelayResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRelayResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRelayResponse): UpdateRelayResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRelayResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRelayResponse;
    static deserializeBinaryFromReader(message: UpdateRelayResponse, reader: jspb.BinaryReader): UpdateRelayResponse;
}

export namespace UpdateRelayResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
    }
}

export class ResumeRelayRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): ResumeRelayRequest;
    getRelayId(): string;
    setRelayId(value: string): ResumeRelayRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResumeRelayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ResumeRelayRequest): ResumeRelayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResumeRelayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResumeRelayRequest;
    static deserializeBinaryFromReader(message: ResumeRelayRequest, reader: jspb.BinaryReader): ResumeRelayRequest;
}

export namespace ResumeRelayRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        relayId: string,
    }
}

export class ResumeRelayResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): ResumeRelayResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResumeRelayResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ResumeRelayResponse): ResumeRelayResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResumeRelayResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResumeRelayResponse;
    static deserializeBinaryFromReader(message: ResumeRelayResponse, reader: jspb.BinaryReader): ResumeRelayResponse;
}

export namespace ResumeRelayResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
    }
}

export class StopRelayRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): StopRelayRequest;
    getRelayId(): string;
    setRelayId(value: string): StopRelayRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopRelayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopRelayRequest): StopRelayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopRelayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopRelayRequest;
    static deserializeBinaryFromReader(message: StopRelayRequest, reader: jspb.BinaryReader): StopRelayRequest;
}

export namespace StopRelayRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        relayId: string,
    }
}

export class StopRelayResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): StopRelayResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopRelayResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StopRelayResponse): StopRelayResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopRelayResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopRelayResponse;
    static deserializeBinaryFromReader(message: StopRelayResponse, reader: jspb.BinaryReader): StopRelayResponse;
}

export namespace StopRelayResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
    }
}

export class DeleteRelayRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): DeleteRelayRequest;
    getRelayId(): string;
    setRelayId(value: string): DeleteRelayRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRelayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRelayRequest): DeleteRelayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRelayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRelayRequest;
    static deserializeBinaryFromReader(message: DeleteRelayRequest, reader: jspb.BinaryReader): DeleteRelayRequest;
}

export namespace DeleteRelayRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        relayId: string,
    }
}

export class DeleteRelayResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): DeleteRelayResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRelayResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRelayResponse): DeleteRelayResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRelayResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRelayResponse;
    static deserializeBinaryFromReader(message: DeleteRelayResponse, reader: jspb.BinaryReader): DeleteRelayResponse;
}

export namespace DeleteRelayResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
    }
}
