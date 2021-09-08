// package: protos
// file: connect.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as args_kafka_pb from "./args/kafka_pb";
import * as args_activemq_pb from "./args/activemq_pb";
import * as args_aws_sns_pb from "./args/aws-sns_pb";
import * as args_aws_sqs_pb from "./args/aws-sqs_pb";
import * as args_mongo_pb from "./args/mongo_pb";
import * as args_nats_pb from "./args/nats_pb";
import * as args_nats_streaming_pb from "./args/nats-streaming_pb";
import * as args_nsq_pb from "./args/nsq_pb";
import * as args_mqtt_pb from "./args/mqtt_pb";
import * as args_gcp_pubsub_pb from "./args/gcp-pubsub_pb";
import * as args_kubemq_queue_pb from "./args/kubemq-queue_pb";
import * as args_postgres_pb from "./args/postgres_pb";
import * as args_pulsar_pb from "./args/pulsar_pb";
import * as args_rabbit_pb from "./args/rabbit_pb";
import * as args_rabbit_streams_pb from "./args/rabbit-streams_pb";
import * as args_redis_pubsub_pb from "./args/redis-pubsub_pb";
import * as args_redis_streams_pb from "./args/redis-streams_pb";
import * as args_azure_service_bus_pb from "./args/azure-service-bus_pb";
import * as args_azure_event_hub_pb from "./args/azure-event-hub_pb";
import * as common_auth_pb from "./common/auth_pb";
import * as common_status_pb from "./common/status_pb";

export class ConnectionConfig extends jspb.Message { 
    getName(): string;
    setName(value: string): ConnectionConfig;
    getNotes(): string;
    setNotes(value: string): ConnectionConfig;
    getId(): string;
    setId(value: string): ConnectionConfig;

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): args_kafka_pb.KafkaConn | undefined;
    setKafka(value?: args_kafka_pb.KafkaConn): ConnectionConfig;

    hasActiveMq(): boolean;
    clearActiveMq(): void;
    getActiveMq(): args_activemq_pb.ActiveMQConn | undefined;
    setActiveMq(value?: args_activemq_pb.ActiveMQConn): ConnectionConfig;

    hasAwssqs(): boolean;
    clearAwssqs(): void;
    getAwssqs(): args_aws_sqs_pb.AWSSQSConn | undefined;
    setAwssqs(value?: args_aws_sqs_pb.AWSSQSConn): ConnectionConfig;

    hasAwssns(): boolean;
    clearAwssns(): void;
    getAwssns(): args_aws_sns_pb.AWSSNSConn | undefined;
    setAwssns(value?: args_aws_sns_pb.AWSSNSConn): ConnectionConfig;

    hasMongo(): boolean;
    clearMongo(): void;
    getMongo(): args_mongo_pb.MongoConn | undefined;
    setMongo(value?: args_mongo_pb.MongoConn): ConnectionConfig;

    hasNats(): boolean;
    clearNats(): void;
    getNats(): args_nats_pb.NatsConn | undefined;
    setNats(value?: args_nats_pb.NatsConn): ConnectionConfig;

    hasNatsStreaming(): boolean;
    clearNatsStreaming(): void;
    getNatsStreaming(): args_nats_streaming_pb.NatsStreamingConn | undefined;
    setNatsStreaming(value?: args_nats_streaming_pb.NatsStreamingConn): ConnectionConfig;

    hasNsq(): boolean;
    clearNsq(): void;
    getNsq(): args_nsq_pb.NSQConn | undefined;
    setNsq(value?: args_nsq_pb.NSQConn): ConnectionConfig;

    hasPostgres(): boolean;
    clearPostgres(): void;
    getPostgres(): args_postgres_pb.PostgresConn | undefined;
    setPostgres(value?: args_postgres_pb.PostgresConn): ConnectionConfig;

    hasPulsar(): boolean;
    clearPulsar(): void;
    getPulsar(): args_pulsar_pb.PulsarConn | undefined;
    setPulsar(value?: args_pulsar_pb.PulsarConn): ConnectionConfig;

    hasRabbit(): boolean;
    clearRabbit(): void;
    getRabbit(): args_rabbit_pb.RabbitConn | undefined;
    setRabbit(value?: args_rabbit_pb.RabbitConn): ConnectionConfig;

    hasRabbitStreams(): boolean;
    clearRabbitStreams(): void;
    getRabbitStreams(): args_rabbit_streams_pb.RabbitStreamsConn | undefined;
    setRabbitStreams(value?: args_rabbit_streams_pb.RabbitStreamsConn): ConnectionConfig;

    hasRedisPubsub(): boolean;
    clearRedisPubsub(): void;
    getRedisPubsub(): args_redis_pubsub_pb.RedisPubSubConn | undefined;
    setRedisPubsub(value?: args_redis_pubsub_pb.RedisPubSubConn): ConnectionConfig;

    hasRedisStreams(): boolean;
    clearRedisStreams(): void;
    getRedisStreams(): args_redis_streams_pb.RedisStreamsConn | undefined;
    setRedisStreams(value?: args_redis_streams_pb.RedisStreamsConn): ConnectionConfig;

    hasAzureEventHub(): boolean;
    clearAzureEventHub(): void;
    getAzureEventHub(): args_azure_event_hub_pb.AzureEventHubConn | undefined;
    setAzureEventHub(value?: args_azure_event_hub_pb.AzureEventHubConn): ConnectionConfig;

    hasAzureServiceBus(): boolean;
    clearAzureServiceBus(): void;
    getAzureServiceBus(): args_azure_service_bus_pb.AzureServiceBusConn | undefined;
    setAzureServiceBus(value?: args_azure_service_bus_pb.AzureServiceBusConn): ConnectionConfig;

    hasMqtt(): boolean;
    clearMqtt(): void;
    getMqtt(): args_mqtt_pb.MQTTConn | undefined;
    setMqtt(value?: args_mqtt_pb.MQTTConn): ConnectionConfig;

    hasKubemqQueue(): boolean;
    clearKubemqQueue(): void;
    getKubemqQueue(): args_kubemq_queue_pb.KubeMQQueueConn | undefined;
    setKubemqQueue(value?: args_kubemq_queue_pb.KubeMQQueueConn): ConnectionConfig;

    hasGcpPubsub(): boolean;
    clearGcpPubsub(): void;
    getGcpPubsub(): args_gcp_pubsub_pb.GCPPubSubConn | undefined;
    setGcpPubsub(value?: args_gcp_pubsub_pb.GCPPubSubConn): ConnectionConfig;

    getConnCase(): ConnectionConfig.ConnCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectionConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectionConfig): ConnectionConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectionConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectionConfig;
    static deserializeBinaryFromReader(message: ConnectionConfig, reader: jspb.BinaryReader): ConnectionConfig;
}

export namespace ConnectionConfig {
    export type AsObject = {
        name: string,
        notes: string,
        Id: string,
        kafka?: args_kafka_pb.KafkaConn.AsObject,
        activeMq?: args_activemq_pb.ActiveMQConn.AsObject,
        awssqs?: args_aws_sqs_pb.AWSSQSConn.AsObject,
        awssns?: args_aws_sns_pb.AWSSNSConn.AsObject,
        mongo?: args_mongo_pb.MongoConn.AsObject,
        nats?: args_nats_pb.NatsConn.AsObject,
        natsStreaming?: args_nats_streaming_pb.NatsStreamingConn.AsObject,
        nsq?: args_nsq_pb.NSQConn.AsObject,
        postgres?: args_postgres_pb.PostgresConn.AsObject,
        pulsar?: args_pulsar_pb.PulsarConn.AsObject,
        rabbit?: args_rabbit_pb.RabbitConn.AsObject,
        rabbitStreams?: args_rabbit_streams_pb.RabbitStreamsConn.AsObject,
        redisPubsub?: args_redis_pubsub_pb.RedisPubSubConn.AsObject,
        redisStreams?: args_redis_streams_pb.RedisStreamsConn.AsObject,
        azureEventHub?: args_azure_event_hub_pb.AzureEventHubConn.AsObject,
        azureServiceBus?: args_azure_service_bus_pb.AzureServiceBusConn.AsObject,
        mqtt?: args_mqtt_pb.MQTTConn.AsObject,
        kubemqQueue?: args_kubemq_queue_pb.KubeMQQueueConn.AsObject,
        gcpPubsub?: args_gcp_pubsub_pb.GCPPubSubConn.AsObject,
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

export class GetAllConnectionsRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): GetAllConnectionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllConnectionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllConnectionsRequest): GetAllConnectionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllConnectionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllConnectionsRequest;
    static deserializeBinaryFromReader(message: GetAllConnectionsRequest, reader: jspb.BinaryReader): GetAllConnectionsRequest;
}

export namespace GetAllConnectionsRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
    }
}

export class GetAllConnectionsResponse extends jspb.Message { 
    clearConfigsList(): void;
    getConfigsList(): Array<ConnectionConfig>;
    setConfigsList(value: Array<ConnectionConfig>): GetAllConnectionsResponse;
    addConfigs(value?: ConnectionConfig, index?: number): ConnectionConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllConnectionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllConnectionsResponse): GetAllConnectionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllConnectionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllConnectionsResponse;
    static deserializeBinaryFromReader(message: GetAllConnectionsResponse, reader: jspb.BinaryReader): GetAllConnectionsResponse;
}

export namespace GetAllConnectionsResponse {
    export type AsObject = {
        configsList: Array<ConnectionConfig.AsObject>,
    }
}

export class GetConnectionRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): GetConnectionRequest;
    getConnectionId(): string;
    setConnectionId(value: string): GetConnectionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetConnectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetConnectionRequest): GetConnectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetConnectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetConnectionRequest;
    static deserializeBinaryFromReader(message: GetConnectionRequest, reader: jspb.BinaryReader): GetConnectionRequest;
}

export namespace GetConnectionRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        connectionId: string,
    }
}

export class GetConnectionResponse extends jspb.Message { 

    hasConnection(): boolean;
    clearConnection(): void;
    getConnection(): ConnectionConfig | undefined;
    setConnection(value?: ConnectionConfig): GetConnectionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetConnectionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetConnectionResponse): GetConnectionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetConnectionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetConnectionResponse;
    static deserializeBinaryFromReader(message: GetConnectionResponse, reader: jspb.BinaryReader): GetConnectionResponse;
}

export namespace GetConnectionResponse {
    export type AsObject = {
        connection?: ConnectionConfig.AsObject,
    }
}

export class CreateConnectionRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): CreateConnectionRequest;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): ConnectionConfig | undefined;
    setConfig(value?: ConnectionConfig): CreateConnectionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateConnectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateConnectionRequest): CreateConnectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateConnectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateConnectionRequest;
    static deserializeBinaryFromReader(message: CreateConnectionRequest, reader: jspb.BinaryReader): CreateConnectionRequest;
}

export namespace CreateConnectionRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        config?: ConnectionConfig.AsObject,
    }
}

export class CreateConnectionResponse extends jspb.Message { 
    getConnectionId(): string;
    setConnectionId(value: string): CreateConnectionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateConnectionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateConnectionResponse): CreateConnectionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateConnectionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateConnectionResponse;
    static deserializeBinaryFromReader(message: CreateConnectionResponse, reader: jspb.BinaryReader): CreateConnectionResponse;
}

export namespace CreateConnectionResponse {
    export type AsObject = {
        connectionId: string,
    }
}

export class TestConnectionRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): TestConnectionRequest;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): ConnectionConfig | undefined;
    setConfig(value?: ConnectionConfig): TestConnectionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestConnectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TestConnectionRequest): TestConnectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestConnectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestConnectionRequest;
    static deserializeBinaryFromReader(message: TestConnectionRequest, reader: jspb.BinaryReader): TestConnectionRequest;
}

export namespace TestConnectionRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        config?: ConnectionConfig.AsObject,
    }
}

export class TestConnectionResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): TestConnectionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestConnectionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TestConnectionResponse): TestConnectionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestConnectionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestConnectionResponse;
    static deserializeBinaryFromReader(message: TestConnectionResponse, reader: jspb.BinaryReader): TestConnectionResponse;
}

export namespace TestConnectionResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
    }
}

export class UpdateConnectionRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): UpdateConnectionRequest;
    getConnectionId(): string;
    setConnectionId(value: string): UpdateConnectionRequest;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): ConnectionConfig | undefined;
    setConfig(value?: ConnectionConfig): UpdateConnectionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateConnectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateConnectionRequest): UpdateConnectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateConnectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateConnectionRequest;
    static deserializeBinaryFromReader(message: UpdateConnectionRequest, reader: jspb.BinaryReader): UpdateConnectionRequest;
}

export namespace UpdateConnectionRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        connectionId: string,
        config?: ConnectionConfig.AsObject,
    }
}

export class UpdateConnectionResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): UpdateConnectionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateConnectionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateConnectionResponse): UpdateConnectionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateConnectionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateConnectionResponse;
    static deserializeBinaryFromReader(message: UpdateConnectionResponse, reader: jspb.BinaryReader): UpdateConnectionResponse;
}

export namespace UpdateConnectionResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
    }
}

export class DeleteConnectionRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): DeleteConnectionRequest;
    getConnectionId(): string;
    setConnectionId(value: string): DeleteConnectionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteConnectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteConnectionRequest): DeleteConnectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteConnectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteConnectionRequest;
    static deserializeBinaryFromReader(message: DeleteConnectionRequest, reader: jspb.BinaryReader): DeleteConnectionRequest;
}

export namespace DeleteConnectionRequest {
    export type AsObject = {
        auth?: common_auth_pb.Auth.AsObject,
        connectionId: string,
    }
}

export class DeleteConnectionResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): common_status_pb.Status | undefined;
    setStatus(value?: common_status_pb.Status): DeleteConnectionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteConnectionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteConnectionResponse): DeleteConnectionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteConnectionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteConnectionResponse;
    static deserializeBinaryFromReader(message: DeleteConnectionResponse, reader: jspb.BinaryReader): DeleteConnectionResponse;
}

export namespace DeleteConnectionResponse {
    export type AsObject = {
        status?: common_status_pb.Status.AsObject,
    }
}
