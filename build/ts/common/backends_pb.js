// source: common/backends.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.protos.common.BackendType', null, global);
/**
 * @enum {number}
 */
proto.protos.common.BackendType = {
  BACKEND_TYPE_UNSET: 0,
  BACKEND_TYPE_KAFKA: 1,
  BACKEND_TYPE_RABBIT: 2,
  BACKEND_TYPE_RABBIT_STREAMS: 3,
  BACKEND_TYPE_NSQ: 4,
  BACKEND_TYPE_NATS: 5,
  BACKEND_TYPE_NATS_STREAMING: 6,
  BACKEND_TYPE_GCP_PUBSUB: 7,
  BACKEND_TYPE_AZURE_SERVICE_BUS: 8,
  BACKEND_TYPE_AZURE_EVENT_HUB: 9,
  BACKEND_TYPE_AWS_SQS: 10,
  BACKEND_TYPE_AWS_SNS: 11,
  BACKEND_TYPE_REDIS_PUBSUB: 12,
  BACKEND_TYPE_REDIS_STREAMS: 13,
  BACKEND_TYPE_ACTIVEMQ: 14,
  BACKEND_TYPE_PULSAR: 15,
  BACKEND_TYPE_MQTT: 16,
  BACKEND_TYPE_POSTGRES_CDC: 17,
  BACKEND_TYPE_MONGODB_CDC: 18,
  BACKEND_TYPE_KUBE_MQ: 19
};

goog.object.extend(exports, proto.protos.common);
