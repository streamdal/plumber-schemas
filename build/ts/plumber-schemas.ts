import * as grpc from "grpc";
import { Observable } from "rxjs";
/** Namespace protos. */
export namespace protos {
  /** Contains all the RPC service clients. */
  export interface ClientFactory {
    /**
     * Returns the PlumberServer service client.
     */
    getPlumberServer(): protos.PlumberServer;
  }

  /** Builder for an RPC service server. */
  export interface ServerBuilder {
    /**
     * Adds a PlumberServer service implementation.
     * @param impl PlumberServer service implementation
     */
    addPlumberServer(impl: protos.PlumberServer): protos.ServerBuilder;
  }

  /** Constructs a new PlumberServer service. */
  export interface PlumberServer {
    /**
     * Calls GetAllConnections.
     * @param request GetAllConnectionsRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getAllConnections(
      request: protos.GetAllConnectionsRequest,
      metadata?: grpc.Metadata
    ): Observable<protos.GetAllConnectionsResponse>;

    /**
     * Calls GetConnection.
     * @param request GetConnectionRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getConnection(
      request: protos.GetConnectionRequest,
      metadata?: grpc.Metadata
    ): Observable<protos.GetConnectionResponse>;

    /**
     * Calls CreateConnection.
     * @param request CreateConnectionRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    createConnection(
      request: protos.CreateConnectionRequest,
      metadata?: grpc.Metadata
    ): Observable<protos.CreateConnectionResponse>;

    /**
     * Calls TestConnection.
     * @param request TestConnectionRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    testConnection(
      request: protos.TestConnectionRequest,
      metadata?: grpc.Metadata
    ): Observable<protos.TestConnectionResponse>;

    /**
     * Calls UpdateConnection.
     * @param request UpdateConnectionRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    updateConnection(
      request: protos.UpdateConnectionRequest,
      metadata?: grpc.Metadata
    ): Observable<protos.UpdateConnectionResponse>;

    /**
     * Calls DeleteConnection.
     * @param request DeleteConnectionRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    deleteConnection(
      request: protos.DeleteConnectionRequest,
      metadata?: grpc.Metadata
    ): Observable<protos.DeleteConnectionResponse>;

    /**
     * Calls StartRead.
     * @param request StartReadRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    startRead(
      request: protos.StartReadRequest,
      metadata?: grpc.Metadata
    ): Observable<protos.StartReadResponse>;

    /**
     * Calls StopRead.
     * @param request StopReadRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    stopRead(
      request: protos.StopReadRequest,
      metadata?: grpc.Metadata
    ): Observable<protos.StopReadResponse>;

    /**
     * Calls Write.
     * @param request WriteRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    write(
      request: protos.WriteRequest,
      metadata?: grpc.Metadata
    ): Observable<protos.WriteResponse>;

    /**
     * Calls CreateRelay.
     * @param request CreateRelayRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    createRelay(
      request: protos.CreateRelayRequest,
      metadata?: grpc.Metadata
    ): Observable<protos.CreateRelayResponse>;

    /**
     * Calls UpdateRelay.
     * @param request UpdateRelayRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    updateRelay(
      request: protos.UpdateRelayRequest,
      metadata?: grpc.Metadata
    ): Observable<protos.UpdateRelayResponse>;

    /**
     * Calls StopRelay.
     * @param request StopRelayRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    stopRelay(
      request: protos.StopRelayRequest,
      metadata?: grpc.Metadata
    ): Observable<protos.StopRelayResponse>;

    /**
     * Calls DeleteRelay.
     * @param request DeleteRelayRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    deleteRelay(
      request: protos.DeleteRelayRequest,
      metadata?: grpc.Metadata
    ): Observable<protos.DeleteRelayResponse>;
  }

  /** Properties of a Connection. */
  export interface Connection {
    /** Connection name */
    name?: string | null;

    /** Connection notes */
    notes?: string | null;

    /** Connection kafka */
    kafka?: protos.conns.Kafka | null;

    /** Connection conn. */
    conn?: "kafka";
  }

  /** Properties of a GetAllConnectionsRequest. */
  export interface GetAllConnectionsRequest {
    /** GetAllConnectionsRequest auth */
    auth?: protos.common.Auth | null;
  }

  /** Properties of a GetAllConnectionsResponse. */
  export interface GetAllConnectionsResponse {
    /** GetAllConnectionsResponse connections */
    connections?: { [k: string]: protos.Connection } | null;
  }

  /** Properties of a GetConnectionRequest. */
  export interface GetConnectionRequest {
    /** GetConnectionRequest auth */
    auth?: protos.common.Auth | null;

    /** GetConnectionRequest connection_id */
    connection_id?: string | null;
  }

  /** Properties of a GetConnectionResponse. */
  export interface GetConnectionResponse {
    /** GetConnectionResponse connection */
    connection?: protos.Connection | null;
  }

  /** Properties of a CreateConnectionRequest. */
  export interface CreateConnectionRequest {
    /** CreateConnectionRequest auth */
    auth?: protos.common.Auth | null;

    /** CreateConnectionRequest connection */
    connection?: protos.Connection | null;
  }

  /** Properties of a CreateConnectionResponse. */
  export interface CreateConnectionResponse {
    /** CreateConnectionResponse connection_id */
    connection_id?: string | null;
  }

  /** Properties of a TestConnectionRequest. */
  export interface TestConnectionRequest {
    /** TestConnectionRequest auth */
    auth?: protos.common.Auth | null;

    /** TestConnectionRequest connection */
    connection?: protos.Connection | null;
  }

  /** Properties of a TestConnectionResponse. */
  export interface TestConnectionResponse {
    /** TestConnectionResponse status */
    status?: protos.common.Status | null;
  }

  /** Properties of an UpdateConnectionRequest. */
  export interface UpdateConnectionRequest {
    /** UpdateConnectionRequest auth */
    auth?: protos.common.Auth | null;

    /** UpdateConnectionRequest connection_id */
    connection_id?: string | null;

    /** UpdateConnectionRequest connection */
    connection?: protos.Connection | null;
  }

  /** Properties of an UpdateConnectionResponse. */
  export interface UpdateConnectionResponse {
    /** UpdateConnectionResponse status */
    status?: protos.common.Status | null;
  }

  /** Properties of a DeleteConnectionRequest. */
  export interface DeleteConnectionRequest {
    /** DeleteConnectionRequest auth */
    auth?: protos.common.Auth | null;

    /** DeleteConnectionRequest connection_id */
    connection_id?: string | null;
  }

  /** Properties of a DeleteConnectionResponse. */
  export interface DeleteConnectionResponse {
    /** DeleteConnectionResponse status */
    status?: protos.common.Status | null;
  }

  /** Namespace conns. */
  export namespace conns {
    /** Contains all the RPC service clients. */
    export interface ClientFactory {}

    /** Builder for an RPC service server. */
    export interface ServerBuilder {}

    /** SASLType enum. */
    export enum SASLType {
      NONE = 0,
      PLAIN = 1,
      SCRAM = 2,
    }

    /** Properties of a Kafka. */
    export interface Kafka {
      /** Kafka address */
      address?: string[] | null;

      /** Kafka timeout_seconds */
      timeout_seconds?: number | null;

      /** Kafka use_tls */
      use_tls?: boolean | null;

      /** Kafka insecure_tls */
      insecure_tls?: boolean | null;

      /** Kafka sasl_type */
      sasl_type?: protos.conns.SASLType | null;

      /** Kafka sasl_username */
      sasl_username?: string | null;

      /** Kafka sasl_password */
      sasl_password?: string | null;
    }
  }

  /** Namespace common. */
  export namespace common {
    /** Contains all the RPC service clients. */
    export interface ClientFactory {}

    /** Builder for an RPC service server. */
    export interface ServerBuilder {}

    /** Properties of an Auth. */
    export interface Auth {
      /** Auth token */
      token?: string | null;
    }

    /** Code enum. */
    export enum Code {
      OK = 0,
      CANCELLED = 1,
      UNKNOWN = 2,
      INVALID_ARGUMENT = 3,
      DEADLINE_EXCEEDED = 4,
      NOT_FOUND = 5,
      ALREADY_EXISTS = 6,
      PERMISSION_DENIED = 7,
      UNAUTHENTICATED = 16,
      RESOURCE_EXHAUSTED = 8,
      FAILED_PRECONDITION = 9,
      ABORTED = 10,
      OUT_OF_RANGE = 11,
      UNIMPLEMENTED = 12,
      INTERNAL = 13,
      UNAVAILABLE = 14,
      DATA_LOSS = 15,
    }

    /** Properties of a Status. */
    export interface Status {
      /** Status code */
      code?: protos.common.Code | null;

      /** Status message */
      message?: string | null;

      /** Status request_id */
      request_id?: string | null;
    }
  }

  /** Properties of a ReadOptions. */
  export interface ReadOptions {}

  export namespace ReadOptions {
    /** Type enum. */
    export enum Type {
      ONE_TIME = 0,
      CONTINUOUS = 1,
    }
  }

  /** Properties of a SampleOptions. */
  export interface SampleOptions {
    /** SampleOptions sample_rate */
    sample_rate?: number | null;

    /** SampleOptions sample_interval */
    sample_interval?: protos.SampleOptions.Interval | null;
  }

  export namespace SampleOptions {
    /** Interval enum. */
    export enum Interval {
      SECOND = 0,
      MINUTE = 1,
      HOUR = 2,
    }
  }

  /** Properties of a StartReadRequest. */
  export interface StartReadRequest {
    /** StartReadRequest auth */
    auth?: protos.common.Auth | null;

    /** StartReadRequest connection_id */
    connection_id?: string | null;

    /** StartReadRequest read_options */
    read_options?: protos.ReadOptions | null;

    /** StartReadRequest sample_options */
    sample_options?: protos.SampleOptions | null;

    /** StartReadRequest decode_options */
    decode_options?: protos.encoding.Options | null;

    /** StartReadRequest kafka */
    kafka?: protos.args.Kafka | null;

    /** StartReadRequest Args. */
    Args?: "kafka";
  }

  /** Properties of a StartReadResponse. */
  export interface StartReadResponse {
    /** StartReadResponse status */
    status?: protos.common.Status | null;

    /** StartReadResponse read_id */
    read_id?: string | null;

    /** StartReadResponse messages */
    messages?: protos.records.Message[] | null;
  }

  /** Properties of a StopReadRequest. */
  export interface StopReadRequest {
    /** StopReadRequest auth */
    auth?: protos.common.Auth | null;

    /** StopReadRequest read_id */
    read_id?: string | null;
  }

  /** Properties of a StopReadResponse. */
  export interface StopReadResponse {
    /** StopReadResponse status */
    status?: protos.common.Status | null;
  }

  /** Namespace args. */
  export namespace args {
    /** Contains all the RPC service clients. */
    export interface ClientFactory {}

    /** Builder for an RPC service server. */
    export interface ServerBuilder {}

    /** Properties of a Kafka. */
    export interface Kafka {
      /** Kafka topics */
      topics?: string[] | null;

      /** Kafka read_offset */
      read_offset?: number | Long | null;

      /** Kafka use_consumer_group */
      use_consumer_group?: boolean | null;

      /** Kafka consumer_group_name */
      consumer_group_name?: string | null;

      /** Kafka max_wait_seconds */
      max_wait_seconds?: number | null;

      /** Kafka min_bytes */
      min_bytes?: number | null;

      /** Kafka max_bytes */
      max_bytes?: number | null;

      /** Kafka commit_interval_seconds */
      commit_interval_seconds?: number | null;

      /** Kafka rebalance_timeout_seconds */
      rebalance_timeout_seconds?: number | null;
    }
  }

  /** Namespace encoding. */
  export namespace encoding {
    /** Contains all the RPC service clients. */
    export interface ClientFactory {}

    /** Builder for an RPC service server. */
    export interface ServerBuilder {}

    /** Type enum. */
    export enum Type {
      NONE = 0,
      JSON = 1,
      JSON_SCHEMA = 2,
      PROTOBUF = 3,
      AVRO = 4,
    }

    /** Properties of a Protobuf. */
    export interface Protobuf {
      /** Protobuf root_type */
      root_type?: string | null;

      /** Protobuf zip_archive */
      zip_archive?: Uint8Array | null;
    }

    /** Properties of a JSONSchema. */
    export interface JSONSchema {}

    /** Properties of an Avro. */
    export interface Avro {}

    /** Properties of an Options. */
    export interface Options {
      /** Options type */
      type?: protos.encoding.Type | null;

      /** Options protobuf */
      protobuf?: protos.encoding.Protobuf | null;

      /** Options avro */
      avro?: protos.encoding.Avro | null;

      /** Options json_schema */
      json_schema?: protos.encoding.JSONSchema | null;

      /** Options Encoding. */
      Encoding?: "protobuf" | "avro" | "json_schema";
    }
  }

  /** Namespace records. */
  export namespace records {
    /** Contains all the RPC service clients. */
    export interface ClientFactory {}

    /** Builder for an RPC service server. */
    export interface ServerBuilder {}

    /** Properties of a Message. */
    export interface Message {
      /** Message message_id */
      message_id?: string | null;

      /** Message plumber_id */
      plumber_id?: string | null;

      /** Message unix_timestamp_utc */
      unix_timestamp_utc?: number | Long | null;

      /** Message kafka */
      kafka?: protos.records.Kafka | null;

      /** Message Message. */
      Message?: "kafka";
    }

    /** Properties of a KafkaHeader. */
    export interface KafkaHeader {
      /** KafkaHeader key */
      key?: string | null;

      /** KafkaHeader value */
      value?: string | null;
    }

    /** Properties of a Kafka. */
    export interface Kafka {
      /** Kafka topic */
      topic?: string | null;

      /** Kafka key */
      key?: Uint8Array | null;

      /** Kafka value */
      value?: Uint8Array | null;

      /** Kafka blob */
      blob?: Uint8Array | null;

      /** Kafka timestamp */
      timestamp?: number | Long | null;

      /** Kafka offset */
      offset?: number | Long | null;

      /** Kafka partition */
      partition?: number | null;

      /** Kafka headers */
      headers?: protos.records.KafkaHeader[] | null;
    }
  }

  /** Properties of a WriteRecord. */
  export interface WriteRecord {
    /** WriteRecord kafka */
    kafka?: protos.records.Kafka | null;

    /** WriteRecord Records. */
    Records?: "kafka";
  }

  /** Properties of a WriteRequest. */
  export interface WriteRequest {
    /** WriteRequest auth */
    auth?: protos.common.Auth | null;

    /** WriteRequest connection_id */
    connection_id?: string | null;

    /** WriteRequest records */
    records?: protos.WriteRecord[] | null;
  }

  /** Properties of a WriteResponse. */
  export interface WriteResponse {
    /** WriteResponse status */
    status?: protos.common.Status | null;
  }

  /** Properties of a Relay. */
  export interface Relay {
    /** Relay batch_collection_token */
    batch_collection_token?: string | null;

    /** Relay batch_size */
    batch_size?: number | null;

    /** Relay batch_max_retry */
    batch_max_retry?: number | null;

    /** Relay connection_id */
    connection_id?: string | null;

    /** Relay batchsh_grpc_address */
    batchsh_grpc_address?: string | null;

    /** Relay batchsh_grpc_disable_tls */
    batchsh_grpc_disable_tls?: boolean | null;

    /** Relay batchsh_grpc_timeout */
    batchsh_grpc_timeout?: boolean | null;

    /** Relay kafka */
    kafka?: protos.args.Kafka | null;

    /** Relay Args. */
    Args?: "kafka";
  }

  /** Properties of a GetAllRelaysRequest. */
  export interface GetAllRelaysRequest {
    /** GetAllRelaysRequest auth */
    auth?: protos.common.Auth | null;
  }

  /** Properties of a GetAllRelaysResponse. */
  export interface GetAllRelaysResponse {
    /** GetAllRelaysResponse status */
    status?: protos.common.Status | null;

    /** GetAllRelaysResponse relays */
    relays?: protos.Relay[] | null;
  }

  /** Properties of a GetRelayRequest. */
  export interface GetRelayRequest {
    /** GetRelayRequest auth */
    auth?: protos.common.Auth | null;

    /** GetRelayRequest relay_id */
    relay_id?: string | null;
  }

  /** Properties of a GetRelayResponse. */
  export interface GetRelayResponse {
    /** GetRelayResponse status */
    status?: protos.common.Status | null;

    /** GetRelayResponse relay */
    relay?: protos.Relay | null;
  }

  /** Properties of a CreateRelayRequest. */
  export interface CreateRelayRequest {
    /** CreateRelayRequest auth */
    auth?: protos.common.Auth | null;

    /** CreateRelayRequest relay */
    relay?: protos.Relay | null;

    /** CreateRelayRequest kafka */
    kafka?: protos.args.Kafka | null;

    /** CreateRelayRequest Args. */
    Args?: "kafka";
  }

  /** Properties of a CreateRelayResponse. */
  export interface CreateRelayResponse {
    /** CreateRelayResponse status */
    status?: protos.common.Status | null;

    /** CreateRelayResponse relay_id */
    relay_id?: string | null;
  }

  /** Properties of an UpdateRelayRequest. */
  export interface UpdateRelayRequest {
    /** UpdateRelayRequest auth */
    auth?: protos.common.Auth | null;

    /** UpdateRelayRequest relay_id */
    relay_id?: string | null;

    /** UpdateRelayRequest relay */
    relay?: protos.Relay | null;
  }

  /** Properties of an UpdateRelayResponse. */
  export interface UpdateRelayResponse {
    /** UpdateRelayResponse status */
    status?: protos.common.Status | null;
  }

  /** Properties of a StopRelayRequest. */
  export interface StopRelayRequest {
    /** StopRelayRequest auth */
    auth?: protos.common.Auth | null;

    /** StopRelayRequest relay_id */
    relay_id?: string | null;
  }

  /** Properties of a StopRelayResponse. */
  export interface StopRelayResponse {
    /** StopRelayResponse status */
    status?: protos.common.Status | null;
  }

  /** Properties of a DeleteRelayRequest. */
  export interface DeleteRelayRequest {
    /** DeleteRelayRequest auth */
    auth?: protos.common.Auth | null;

    /** DeleteRelayRequest relay_id */
    relay_id?: string | null;
  }

  /** Properties of a DeleteRelayResponse. */
  export interface DeleteRelayResponse {
    /** DeleteRelayResponse status */
    status?: protos.common.Status | null;
  }
}
