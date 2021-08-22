// package: protos
// file: connect.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as conns_kafka_pb from "./conns/kafka_pb";
import * as conns_activemq_pb from "./conns/activemq_pb";
import * as conns_aws_sns_pb from "./conns/aws-sns_pb";
import * as conns_aws_sqs_pb from "./conns/aws-sqs_pb";
import * as conns_mongo_pb from "./conns/mongo_pb";
import * as conns_nats_pb from "./conns/nats_pb";
import * as conns_nats_streaming_pb from "./conns/nats-streaming_pb";
import * as conns_nsq_pb from "./conns/nsq_pb";
import * as conns_postgres_pb from "./conns/postgres_pb";
import * as conns_pulsar_pb from "./conns/pulsar_pb";
import * as conns_rabbit_pb from "./conns/rabbit_pb";
import * as conns_rabbit_streams_pb from "./conns/rabbit-streams_pb";
import * as conns_redis_pubsub_pb from "./conns/redis-pubsub_pb";
import * as conns_redis_streams_pb from "./conns/redis-streams_pb";
import * as conns_azure_service_bus_pb from "./conns/azure-service-bus_pb";
import * as conns_azure_event_hub_pb from "./conns/azure-event-hub_pb";
import * as common_auth_pb from "./common/auth_pb";
import * as common_status_pb from "./common/status_pb";

export class Connection extends jspb.Message { 
    getName(): string;
    setName(value: string): Connection;
    getNotes(): string;
    setNotes(value: string): Connection;
    getId(): string;
    setId(value: string): Connection;

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): conns_kafka_pb.Kafka | undefined;
    setKafka(value?: conns_kafka_pb.Kafka): Connection;

    hasActiveMq(): boolean;
    clearActiveMq(): void;
    getActiveMq(): conns_activemq_pb.ActiveMQ | undefined;
    setActiveMq(value?: conns_activemq_pb.ActiveMQ): Connection;

    hasAwssqs(): boolean;
    clearAwssqs(): void;
    getAwssqs(): conns_aws_sqs_pb.AWSSQS | undefined;
    setAwssqs(value?: conns_aws_sqs_pb.AWSSQS): Connection;

    hasAwssns(): boolean;
    clearAwssns(): void;
    getAwssns(): conns_aws_sns_pb.AWSSNS | undefined;
    setAwssns(value?: conns_aws_sns_pb.AWSSNS): Connection;

    hasMongo(): boolean;
    clearMongo(): void;
    getMongo(): conns_mongo_pb.Mongo | undefined;
    setMongo(value?: conns_mongo_pb.Mongo): Connection;

    hasNats(): boolean;
    clearNats(): void;
    getNats(): conns_nats_pb.Nats | undefined;
    setNats(value?: conns_nats_pb.Nats): Connection;

    hasNatsStreaming(): boolean;
    clearNatsStreaming(): void;
    getNatsStreaming(): conns_nats_streaming_pb.NatsStreaming | undefined;
    setNatsStreaming(value?: conns_nats_streaming_pb.NatsStreaming): Connection;

    hasNsq(): boolean;
    clearNsq(): void;
    getNsq(): conns_nsq_pb.NSQ | undefined;
    setNsq(value?: conns_nsq_pb.NSQ): Connection;

    hasPostgres(): boolean;
    clearPostgres(): void;
    getPostgres(): conns_postgres_pb.Postgres | undefined;
    setPostgres(value?: conns_postgres_pb.Postgres): Connection;

    hasPulsar(): boolean;
    clearPulsar(): void;
    getPulsar(): conns_pulsar_pb.Pulsar | undefined;
    setPulsar(value?: conns_pulsar_pb.Pulsar): Connection;

    hasRabbit(): boolean;
    clearRabbit(): void;
    getRabbit(): conns_rabbit_pb.Rabbit | undefined;
    setRabbit(value?: conns_rabbit_pb.Rabbit): Connection;

    hasRabbitStreams(): boolean;
    clearRabbitStreams(): void;
    getRabbitStreams(): conns_rabbit_streams_pb.RabbitStreams | undefined;
    setRabbitStreams(value?: conns_rabbit_streams_pb.RabbitStreams): Connection;

    hasRedisPubsub(): boolean;
    clearRedisPubsub(): void;
    getRedisPubsub(): conns_redis_pubsub_pb.RedisPubsub | undefined;
    setRedisPubsub(value?: conns_redis_pubsub_pb.RedisPubsub): Connection;

    hasRedisStreams(): boolean;
    clearRedisStreams(): void;
    getRedisStreams(): conns_redis_streams_pb.RedisStreams | undefined;
    setRedisStreams(value?: conns_redis_streams_pb.RedisStreams): Connection;

    hasAzureEventHub(): boolean;
    clearAzureEventHub(): void;
    getAzureEventHub(): conns_azure_event_hub_pb.AzureEventHub | undefined;
    setAzureEventHub(value?: conns_azure_event_hub_pb.AzureEventHub): Connection;

    hasAzureServiceBus(): boolean;
    clearAzureServiceBus(): void;
    getAzureServiceBus(): conns_azure_service_bus_pb.AzureServiceBus | undefined;
    setAzureServiceBus(value?: conns_azure_service_bus_pb.AzureServiceBus): Connection;

    getConnCase(): Connection.ConnCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Connection.AsObject;
    static toObject(includeInstance: boolean, msg: Connection): Connection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Connection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Connection;
    static deserializeBinaryFromReader(message: Connection, reader: jspb.BinaryReader): Connection;
}

export namespace Connection {
    export type AsObject = {
        name: string,
        notes: string,
        id: string,
        kafka?: conns_kafka_pb.Kafka.AsObject,
        activeMq?: conns_activemq_pb.ActiveMQ.AsObject,
        awssqs?: conns_aws_sqs_pb.AWSSQS.AsObject,
        awssns?: conns_aws_sns_pb.AWSSNS.AsObject,
        mongo?: conns_mongo_pb.Mongo.AsObject,
        nats?: conns_nats_pb.Nats.AsObject,
        natsStreaming?: conns_nats_streaming_pb.NatsStreaming.AsObject,
        nsq?: conns_nsq_pb.NSQ.AsObject,
        postgres?: conns_postgres_pb.Postgres.AsObject,
        pulsar?: conns_pulsar_pb.Pulsar.AsObject,
        rabbit?: conns_rabbit_pb.Rabbit.AsObject,
        rabbitStreams?: conns_rabbit_streams_pb.RabbitStreams.AsObject,
        redisPubsub?: conns_redis_pubsub_pb.RedisPubsub.AsObject,
        redisStreams?: conns_redis_streams_pb.RedisStreams.AsObject,
        azureEventHub?: conns_azure_event_hub_pb.AzureEventHub.AsObject,
        azureServiceBus?: conns_azure_service_bus_pb.AzureServiceBus.AsObject,
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
    clearConnectionsList(): void;
    getConnectionsList(): Array<Connection>;
    setConnectionsList(value: Array<Connection>): GetAllConnectionsResponse;
    addConnections(value?: Connection, index?: number): Connection;

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
        connectionsList: Array<Connection.AsObject>,
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
    getConnection(): Connection | undefined;
    setConnection(value?: Connection): GetConnectionResponse;

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
        connection?: Connection.AsObject,
    }
}

export class CreateConnectionRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): common_auth_pb.Auth | undefined;
    setAuth(value?: common_auth_pb.Auth): CreateConnectionRequest;

    hasConnection(): boolean;
    clearConnection(): void;
    getConnection(): Connection | undefined;
    setConnection(value?: Connection): CreateConnectionRequest;

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
        connection?: Connection.AsObject,
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

    hasConnection(): boolean;
    clearConnection(): void;
    getConnection(): Connection | undefined;
    setConnection(value?: Connection): TestConnectionRequest;

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
        connection?: Connection.AsObject,
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

    hasConnection(): boolean;
    clearConnection(): void;
    getConnection(): Connection | undefined;
    setConnection(value?: Connection): UpdateConnectionRequest;

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
        connection?: Connection.AsObject,
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
