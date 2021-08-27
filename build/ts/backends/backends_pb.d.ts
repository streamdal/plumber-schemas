// package: protos.backends
// file: backends/backends.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export enum Type {
    UNSET = 0,
    KAFKA = 1,
    RABBIT = 2,
    RABBIT_STREAMS = 3,
    NSQ = 4,
    NATS = 5,
    NATS_STREAMING = 6,
    GCP_PUBSUB = 7,
    AZURE_SERVICE_BUS = 8,
    AZURE_EVENT_HUB = 9,
    AWS_SQS = 10,
    AWS_SNS = 11,
    REDIS_PUBSUB = 12,
    REDIS_STREAMS = 13,
    ACTIVEMQ = 14,
    PULSAR = 15,
    MQTT = 16,
    POSTGRES_CDC = 17,
    MONGODB_CDC = 18,
    KUBE_MQ = 19,
}
