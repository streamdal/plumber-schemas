// package: protos
// file: write.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as records_kafka_pb from "./records/kafka_pb";
import * as common_auth_pb from "./common/auth_pb";
import * as records_base_pb from "./records/base_pb";
import * as common_status_pb from "./common/status_pb";
import * as encoding_options_pb from "./encoding/options_pb";
import * as backends_backends_pb from "./backends/backends_pb";
import * as backends_activemq_pb from "./backends/activemq_pb";
import * as backends_azure_service_bus_pb from "./backends/azure-service-bus_pb";
import * as backends_azure_event_hub_pb from "./backends/azure-event-hub_pb";
import * as backends_aws_sns_pb from "./backends/aws-sns_pb";
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

export class WriteCLIConfig extends jspb.Message { 
    getInputIsJsonArray(): boolean;
    setInputIsJsonArray(value: boolean): WriteCLIConfig;
    getBackendType(): backends_backends_pb.Type;
    setBackendType(value: backends_backends_pb.Type): WriteCLIConfig;

    hasWriteBackend(): boolean;
    clearWriteBackend(): void;
    getWriteBackend(): WriteCLIConfig.WriteBackend | undefined;
    setWriteBackend(value?: WriteCLIConfig.WriteBackend): WriteCLIConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteCLIConfig.AsObject;
    static toObject(includeInstance: boolean, msg: WriteCLIConfig): WriteCLIConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteCLIConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteCLIConfig;
    static deserializeBinaryFromReader(message: WriteCLIConfig, reader: jspb.BinaryReader): WriteCLIConfig;
}

export namespace WriteCLIConfig {
    export type AsObject = {
        inputIsJsonArray: boolean,
        BackendType: backends_backends_pb.Type,
        WriteBackend?: WriteCLIConfig.WriteBackend.AsObject,
    }


    export class WriteBackend extends jspb.Message { 

        hasKafka(): boolean;
        clearKafka(): void;
        getKafka(): WriteCLIConfig.WriteBackend.Kafka | undefined;
        setKafka(value?: WriteCLIConfig.WriteBackend.Kafka): WriteBackend;

        hasActivemq(): boolean;
        clearActivemq(): void;
        getActivemq(): WriteCLIConfig.WriteBackend.ActiveMQ | undefined;
        setActivemq(value?: WriteCLIConfig.WriteBackend.ActiveMQ): WriteBackend;

        hasAwssqs(): boolean;
        clearAwssqs(): void;
        getAwssqs(): WriteCLIConfig.WriteBackend.AWSSQS | undefined;
        setAwssqs(value?: WriteCLIConfig.WriteBackend.AWSSQS): WriteBackend;

        hasAwssns(): boolean;
        clearAwssns(): void;
        getAwssns(): WriteCLIConfig.WriteBackend.AWSSNS | undefined;
        setAwssns(value?: WriteCLIConfig.WriteBackend.AWSSNS): WriteBackend;

        hasNats(): boolean;
        clearNats(): void;
        getNats(): WriteCLIConfig.WriteBackend.Nats | undefined;
        setNats(value?: WriteCLIConfig.WriteBackend.Nats): WriteBackend;

        hasNatsStreaming(): boolean;
        clearNatsStreaming(): void;
        getNatsStreaming(): WriteCLIConfig.WriteBackend.NatsStreaming | undefined;
        setNatsStreaming(value?: WriteCLIConfig.WriteBackend.NatsStreaming): WriteBackend;

        hasNsq(): boolean;
        clearNsq(): void;
        getNsq(): WriteCLIConfig.WriteBackend.NSQ | undefined;
        setNsq(value?: WriteCLIConfig.WriteBackend.NSQ): WriteBackend;

        hasPulsar(): boolean;
        clearPulsar(): void;
        getPulsar(): WriteCLIConfig.WriteBackend.Pulsar | undefined;
        setPulsar(value?: WriteCLIConfig.WriteBackend.Pulsar): WriteBackend;

        hasRabbit(): boolean;
        clearRabbit(): void;
        getRabbit(): WriteCLIConfig.WriteBackend.Rabbit | undefined;
        setRabbit(value?: WriteCLIConfig.WriteBackend.Rabbit): WriteBackend;

        hasRabbitStreams(): boolean;
        clearRabbitStreams(): void;
        getRabbitStreams(): WriteCLIConfig.WriteBackend.RabbitStreams | undefined;
        setRabbitStreams(value?: WriteCLIConfig.WriteBackend.RabbitStreams): WriteBackend;

        hasMqtt(): boolean;
        clearMqtt(): void;
        getMqtt(): WriteCLIConfig.WriteBackend.MQTT | undefined;
        setMqtt(value?: WriteCLIConfig.WriteBackend.MQTT): WriteBackend;

        hasAzureServiceBus(): boolean;
        clearAzureServiceBus(): void;
        getAzureServiceBus(): WriteCLIConfig.WriteBackend.AzureServiceBus | undefined;
        setAzureServiceBus(value?: WriteCLIConfig.WriteBackend.AzureServiceBus): WriteBackend;

        hasAzureEventHub(): boolean;
        clearAzureEventHub(): void;
        getAzureEventHub(): WriteCLIConfig.WriteBackend.AzureEventHub | undefined;
        setAzureEventHub(value?: WriteCLIConfig.WriteBackend.AzureEventHub): WriteBackend;

        hasGcpPubsub(): boolean;
        clearGcpPubsub(): void;
        getGcpPubsub(): WriteCLIConfig.WriteBackend.GCPPubSub | undefined;
        setGcpPubsub(value?: WriteCLIConfig.WriteBackend.GCPPubSub): WriteBackend;

        hasKubemqQueue(): boolean;
        clearKubemqQueue(): void;
        getKubemqQueue(): WriteCLIConfig.WriteBackend.KubeMQQueue | undefined;
        setKubemqQueue(value?: WriteCLIConfig.WriteBackend.KubeMQQueue): WriteBackend;

        hasRedisPubsub(): boolean;
        clearRedisPubsub(): void;
        getRedisPubsub(): WriteCLIConfig.WriteBackend.RedisPubSub | undefined;
        setRedisPubsub(value?: WriteCLIConfig.WriteBackend.RedisPubSub): WriteBackend;

        hasRedisStreams(): boolean;
        clearRedisStreams(): void;
        getRedisStreams(): WriteCLIConfig.WriteBackend.RedisStreams | undefined;
        setRedisStreams(value?: WriteCLIConfig.WriteBackend.RedisStreams): WriteBackend;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): WriteBackend.AsObject;
        static toObject(includeInstance: boolean, msg: WriteBackend): WriteBackend.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: WriteBackend, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): WriteBackend;
        static deserializeBinaryFromReader(message: WriteBackend, reader: jspb.BinaryReader): WriteBackend;
    }

    export namespace WriteBackend {
        export type AsObject = {
            kafka?: WriteCLIConfig.WriteBackend.Kafka.AsObject,
            activemq?: WriteCLIConfig.WriteBackend.ActiveMQ.AsObject,
            awssqs?: WriteCLIConfig.WriteBackend.AWSSQS.AsObject,
            awssns?: WriteCLIConfig.WriteBackend.AWSSNS.AsObject,
            nats?: WriteCLIConfig.WriteBackend.Nats.AsObject,
            natsStreaming?: WriteCLIConfig.WriteBackend.NatsStreaming.AsObject,
            nsq?: WriteCLIConfig.WriteBackend.NSQ.AsObject,
            pulsar?: WriteCLIConfig.WriteBackend.Pulsar.AsObject,
            rabbit?: WriteCLIConfig.WriteBackend.Rabbit.AsObject,
            rabbitStreams?: WriteCLIConfig.WriteBackend.RabbitStreams.AsObject,
            mqtt?: WriteCLIConfig.WriteBackend.MQTT.AsObject,
            azureServiceBus?: WriteCLIConfig.WriteBackend.AzureServiceBus.AsObject,
            azureEventHub?: WriteCLIConfig.WriteBackend.AzureEventHub.AsObject,
            gcpPubsub?: WriteCLIConfig.WriteBackend.GCPPubSub.AsObject,
            kubemqQueue?: WriteCLIConfig.WriteBackend.KubeMQQueue.AsObject,
            redisPubsub?: WriteCLIConfig.WriteBackend.RedisPubSub.AsObject,
            redisStreams?: WriteCLIConfig.WriteBackend.RedisStreams.AsObject,
        }


        export class Kafka extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_kafka_pb.KafkaConn | undefined;
            setConn(value?: backends_kafka_pb.KafkaConn): Kafka;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_kafka_pb.KafkaWriteArgs | undefined;
            setArgs(value?: backends_kafka_pb.KafkaWriteArgs): Kafka;

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
                args?: backends_kafka_pb.KafkaWriteArgs.AsObject,
            }
        }

        export class ActiveMQ extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_activemq_pb.ActiveMQConn | undefined;
            setConn(value?: backends_activemq_pb.ActiveMQConn): ActiveMQ;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_activemq_pb.ActiveMQWriteArgs | undefined;
            setArgs(value?: backends_activemq_pb.ActiveMQWriteArgs): ActiveMQ;

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
                args?: backends_activemq_pb.ActiveMQWriteArgs.AsObject,
            }
        }

        export class AWSSQS extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_aws_sqs_pb.AWSSQSConn | undefined;
            setConn(value?: backends_aws_sqs_pb.AWSSQSConn): AWSSQS;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_aws_sqs_pb.AWSSQSWriteArgs | undefined;
            setArgs(value?: backends_aws_sqs_pb.AWSSQSWriteArgs): AWSSQS;

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
                args?: backends_aws_sqs_pb.AWSSQSWriteArgs.AsObject,
            }
        }

        export class AWSSNS extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_aws_sns_pb.AWSSNSConn | undefined;
            setConn(value?: backends_aws_sns_pb.AWSSNSConn): AWSSNS;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_aws_sns_pb.AWSSNSWriteArgs | undefined;
            setArgs(value?: backends_aws_sns_pb.AWSSNSWriteArgs): AWSSNS;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): AWSSNS.AsObject;
            static toObject(includeInstance: boolean, msg: AWSSNS): AWSSNS.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: AWSSNS, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): AWSSNS;
            static deserializeBinaryFromReader(message: AWSSNS, reader: jspb.BinaryReader): AWSSNS;
        }

        export namespace AWSSNS {
            export type AsObject = {
                conn?: backends_aws_sns_pb.AWSSNSConn.AsObject,
                args?: backends_aws_sns_pb.AWSSNSWriteArgs.AsObject,
            }
        }

        export class Nats extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_nats_pb.NatsConn | undefined;
            setConn(value?: backends_nats_pb.NatsConn): Nats;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_nats_pb.NatsWriteArgs | undefined;
            setArgs(value?: backends_nats_pb.NatsWriteArgs): Nats;

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
                args?: backends_nats_pb.NatsWriteArgs.AsObject,
            }
        }

        export class NatsStreaming extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_nats_streaming_pb.NatsStreamingConn | undefined;
            setConn(value?: backends_nats_streaming_pb.NatsStreamingConn): NatsStreaming;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_nats_streaming_pb.NatsStreamingWriteArgs | undefined;
            setArgs(value?: backends_nats_streaming_pb.NatsStreamingWriteArgs): NatsStreaming;

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
                args?: backends_nats_streaming_pb.NatsStreamingWriteArgs.AsObject,
            }
        }

        export class NSQ extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_nsq_pb.NSQConn | undefined;
            setConn(value?: backends_nsq_pb.NSQConn): NSQ;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_nsq_pb.NSQWriteArgs | undefined;
            setArgs(value?: backends_nsq_pb.NSQWriteArgs): NSQ;

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
                args?: backends_nsq_pb.NSQWriteArgs.AsObject,
            }
        }

        export class Pulsar extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_pulsar_pb.PulsarConn | undefined;
            setConn(value?: backends_pulsar_pb.PulsarConn): Pulsar;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_pulsar_pb.PulsarWriteArgs | undefined;
            setArgs(value?: backends_pulsar_pb.PulsarWriteArgs): Pulsar;

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
                args?: backends_pulsar_pb.PulsarWriteArgs.AsObject,
            }
        }

        export class Rabbit extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_rabbit_pb.RabbitConn | undefined;
            setConn(value?: backends_rabbit_pb.RabbitConn): Rabbit;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_rabbit_pb.RabbitWriteArgs | undefined;
            setArgs(value?: backends_rabbit_pb.RabbitWriteArgs): Rabbit;

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
                args?: backends_rabbit_pb.RabbitWriteArgs.AsObject,
            }
        }

        export class RabbitStreams extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_rabbit_streams_pb.RabbitStreamsConn | undefined;
            setConn(value?: backends_rabbit_streams_pb.RabbitStreamsConn): RabbitStreams;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_rabbit_streams_pb.RabbitStreamsWriteArgs | undefined;
            setArgs(value?: backends_rabbit_streams_pb.RabbitStreamsWriteArgs): RabbitStreams;

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
                args?: backends_rabbit_streams_pb.RabbitStreamsWriteArgs.AsObject,
            }
        }

        export class RedisPubSub extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_redis_pubsub_pb.RedisPubSubConn | undefined;
            setConn(value?: backends_redis_pubsub_pb.RedisPubSubConn): RedisPubSub;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_redis_pubsub_pb.RedisPubSubWriteArgs | undefined;
            setArgs(value?: backends_redis_pubsub_pb.RedisPubSubWriteArgs): RedisPubSub;

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
                args?: backends_redis_pubsub_pb.RedisPubSubWriteArgs.AsObject,
            }
        }

        export class RedisStreams extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_redis_streams_pb.RedisStreamsConn | undefined;
            setConn(value?: backends_redis_streams_pb.RedisStreamsConn): RedisStreams;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_redis_streams_pb.RedisStreamsWriteArgs | undefined;
            setArgs(value?: backends_redis_streams_pb.RedisStreamsWriteArgs): RedisStreams;

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
                args?: backends_redis_streams_pb.RedisStreamsWriteArgs.AsObject,
            }
        }

        export class AzureEventHub extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_azure_event_hub_pb.AzureEventHubConn | undefined;
            setConn(value?: backends_azure_event_hub_pb.AzureEventHubConn): AzureEventHub;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_azure_event_hub_pb.AzureEventHubWriteArgs | undefined;
            setArgs(value?: backends_azure_event_hub_pb.AzureEventHubWriteArgs): AzureEventHub;

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
                args?: backends_azure_event_hub_pb.AzureEventHubWriteArgs.AsObject,
            }
        }

        export class AzureServiceBus extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_azure_service_bus_pb.AzureServiceBusConn | undefined;
            setConn(value?: backends_azure_service_bus_pb.AzureServiceBusConn): AzureServiceBus;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_azure_service_bus_pb.AzureServiceBusWriteArgs | undefined;
            setArgs(value?: backends_azure_service_bus_pb.AzureServiceBusWriteArgs): AzureServiceBus;

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
                args?: backends_azure_service_bus_pb.AzureServiceBusWriteArgs.AsObject,
            }
        }

        export class MQTT extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_mqtt_pb.MQTTConn | undefined;
            setConn(value?: backends_mqtt_pb.MQTTConn): MQTT;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_mqtt_pb.MQTTWriteArgs | undefined;
            setArgs(value?: backends_mqtt_pb.MQTTWriteArgs): MQTT;

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
                args?: backends_mqtt_pb.MQTTWriteArgs.AsObject,
            }
        }

        export class GCPPubSub extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_gcp_pubsub_pb.GCPPubSubConn | undefined;
            setConn(value?: backends_gcp_pubsub_pb.GCPPubSubConn): GCPPubSub;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_gcp_pubsub_pb.GCPPubSubWriteArgs | undefined;
            setArgs(value?: backends_gcp_pubsub_pb.GCPPubSubWriteArgs): GCPPubSub;

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
                args?: backends_gcp_pubsub_pb.GCPPubSubWriteArgs.AsObject,
            }
        }

        export class KubeMQQueue extends jspb.Message { 

            hasConn(): boolean;
            clearConn(): void;
            getConn(): backends_kubemq_queue_pb.KubeMQQueueConn | undefined;
            setConn(value?: backends_kubemq_queue_pb.KubeMQQueueConn): KubeMQQueue;

            hasArgs(): boolean;
            clearArgs(): void;
            getArgs(): backends_kubemq_queue_pb.KubeMQQueueWriteArgs | undefined;
            setArgs(value?: backends_kubemq_queue_pb.KubeMQQueueWriteArgs): KubeMQQueue;

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
                args?: backends_kubemq_queue_pb.KubeMQQueueWriteArgs.AsObject,
            }
        }

    }

}

export class WriteConfig extends jspb.Message { 
    getConnectionId(): string;
    setConnectionId(value: string): WriteConfig;
    clearRecordList(): void;
    getRecordList(): Array<records_base_pb.WriteRecord>;
    setRecordList(value: Array<records_base_pb.WriteRecord>): WriteConfig;
    addRecord(value?: records_base_pb.WriteRecord, index?: number): records_base_pb.WriteRecord;

    hasEncodeOptions(): boolean;
    clearEncodeOptions(): void;
    getEncodeOptions(): encoding_options_pb.EncodeOptions | undefined;
    setEncodeOptions(value?: encoding_options_pb.EncodeOptions): WriteConfig;

    hasCliConfig(): boolean;
    clearCliConfig(): void;
    getCliConfig(): WriteCLIConfig | undefined;
    setCliConfig(value?: WriteCLIConfig): WriteConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteConfig.AsObject;
    static toObject(includeInstance: boolean, msg: WriteConfig): WriteConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteConfig;
    static deserializeBinaryFromReader(message: WriteConfig, reader: jspb.BinaryReader): WriteConfig;
}

export namespace WriteConfig {
    export type AsObject = {
        connectionId: string,
        recordList: Array<records_base_pb.WriteRecord.AsObject>,
        encodeOptions?: encoding_options_pb.EncodeOptions.AsObject,
        CliConfig?: WriteCLIConfig.AsObject,
    }
}

export class WriteRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): WriteRequest;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): WriteConfig | undefined;
    setConfig(value?: WriteConfig): WriteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WriteRequest): WriteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteRequest;
    static deserializeBinaryFromReader(message: WriteRequest, reader: jspb.BinaryReader): WriteRequest;
}

export namespace WriteRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        config?: WriteConfig.AsObject,
    }
}

export class WriteResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): WriteResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WriteResponse): WriteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteResponse;
    static deserializeBinaryFromReader(message: WriteResponse, reader: jspb.BinaryReader): WriteResponse;
}

export namespace WriteResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
    }
}

export enum InputType {
    PLAIN = 0,
    JSONPB = 1,
}
