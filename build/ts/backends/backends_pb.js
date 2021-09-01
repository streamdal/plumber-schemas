// source: backends/backends.proto
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

goog.exportSymbol('proto.protos.backends.Type', null, global);
/**
 * @enum {number}
 */
proto.protos.backends.Type = {
  UNSET: 0,
  KAFKA: 1,
  RABBIT: 2,
  RABBIT_STREAMS: 3,
  NSQ: 4,
  NATS: 5,
  NATS_STREAMING: 6,
  GCP_PUBSUB: 7,
  AZURE_SERVICE_BUS: 8,
  AZURE_EVENT_HUB: 9,
  AWS_SQS: 10,
  AWS_SNS: 11,
  REDIS_PUBSUB: 12,
  REDIS_STREAMS: 13,
  ACTIVEMQ: 14,
  PULSAR: 15,
  MQTT: 16,
  POSTGRES_CDC: 17,
  MONGODB_CDC: 18,
  KUBE_MQ: 19
};

goog.object.extend(exports, proto.protos.backends);
