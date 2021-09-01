// source: read.proto
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

var common_auth_pb = require('./common/auth_pb.js');
goog.object.extend(proto, common_auth_pb);
var common_status_pb = require('./common/status_pb.js');
goog.object.extend(proto, common_status_pb);
var encoding_options_pb = require('./encoding/options_pb.js');
goog.object.extend(proto, encoding_options_pb);
var records_base_pb = require('./records/base_pb.js');
goog.object.extend(proto, records_base_pb);
var backends_backends_pb = require('./backends/backends_pb.js');
goog.object.extend(proto, backends_backends_pb);
var backends_activemq_pb = require('./backends/activemq_pb.js');
goog.object.extend(proto, backends_activemq_pb);
var backends_azure$service$bus_pb = require('./backends/azure-service-bus_pb.js');
goog.object.extend(proto, backends_azure$service$bus_pb);
var backends_azure$event$hub_pb = require('./backends/azure-event-hub_pb.js');
goog.object.extend(proto, backends_azure$event$hub_pb);
var backends_aws$sqs_pb = require('./backends/aws-sqs_pb.js');
goog.object.extend(proto, backends_aws$sqs_pb);
var backends_gcp$pubsub_pb = require('./backends/gcp-pubsub_pb.js');
goog.object.extend(proto, backends_gcp$pubsub_pb);
var backends_kafka_pb = require('./backends/kafka_pb.js');
goog.object.extend(proto, backends_kafka_pb);
var backends_kubemq$queue_pb = require('./backends/kubemq-queue_pb.js');
goog.object.extend(proto, backends_kubemq$queue_pb);
var backends_mongo_pb = require('./backends/mongo_pb.js');
goog.object.extend(proto, backends_mongo_pb);
var backends_mqtt_pb = require('./backends/mqtt_pb.js');
goog.object.extend(proto, backends_mqtt_pb);
var backends_nats_pb = require('./backends/nats_pb.js');
goog.object.extend(proto, backends_nats_pb);
var backends_nats$streaming_pb = require('./backends/nats-streaming_pb.js');
goog.object.extend(proto, backends_nats$streaming_pb);
var backends_nsq_pb = require('./backends/nsq_pb.js');
goog.object.extend(proto, backends_nsq_pb);
var backends_postgres_pb = require('./backends/postgres_pb.js');
goog.object.extend(proto, backends_postgres_pb);
var backends_pulsar_pb = require('./backends/pulsar_pb.js');
goog.object.extend(proto, backends_pulsar_pb);
var backends_rabbit_pb = require('./backends/rabbit_pb.js');
goog.object.extend(proto, backends_rabbit_pb);
var backends_rabbit$streams_pb = require('./backends/rabbit-streams_pb.js');
goog.object.extend(proto, backends_rabbit$streams_pb);
var backends_redis$pubsub_pb = require('./backends/redis-pubsub_pb.js');
goog.object.extend(proto, backends_redis$pubsub_pb);
var backends_redis$streams_pb = require('./backends/redis-streams_pb.js');
goog.object.extend(proto, backends_redis$streams_pb);
goog.exportSymbol('proto.protos.ConvertOption', null, global);
goog.exportSymbol('proto.protos.CreateReadRequest', null, global);
goog.exportSymbol('proto.protos.CreateReadResponse', null, global);
goog.exportSymbol('proto.protos.DeleteReadRequest', null, global);
goog.exportSymbol('proto.protos.DeleteReadResponse', null, global);
goog.exportSymbol('proto.protos.GetAllReadsRequest', null, global);
goog.exportSymbol('proto.protos.GetAllReadsResponse', null, global);
goog.exportSymbol('proto.protos.ReadCLIConfig', null, global);
goog.exportSymbol('proto.protos.ReadCLIConfig.ReadBackend', null, global);
goog.exportSymbol('proto.protos.ReadCLIConfig.ReadBackend.AWSSQS', null, global);
goog.exportSymbol('proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ', null, global);
goog.exportSymbol('proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub', null, global);
goog.exportSymbol('proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus', null, global);
goog.exportSymbol('proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub', null, global);
goog.exportSymbol('proto.protos.ReadCLIConfig.ReadBackend.Kafka', null, global);
goog.exportSymbol('proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue', null, global);
goog.exportSymbol('proto.protos.ReadCLIConfig.ReadBackend.MQTT', null, global);
goog.exportSymbol('proto.protos.ReadCLIConfig.ReadBackend.Mongo', null, global);
goog.exportSymbol('proto.protos.ReadCLIConfig.ReadBackend.NSQ', null, global);
goog.exportSymbol('proto.protos.ReadCLIConfig.ReadBackend.Nats', null, global);
goog.exportSymbol('proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming', null, global);
goog.exportSymbol('proto.protos.ReadCLIConfig.ReadBackend.Postgres', null, global);
goog.exportSymbol('proto.protos.ReadCLIConfig.ReadBackend.Pulsar', null, global);
goog.exportSymbol('proto.protos.ReadCLIConfig.ReadBackend.Rabbit', null, global);
goog.exportSymbol('proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams', null, global);
goog.exportSymbol('proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub', null, global);
goog.exportSymbol('proto.protos.ReadCLIConfig.ReadBackend.RedisStreams', null, global);
goog.exportSymbol('proto.protos.ReadConfig', null, global);
goog.exportSymbol('proto.protos.ReadSampleOptions', null, global);
goog.exportSymbol('proto.protos.ResumeReadRequest', null, global);
goog.exportSymbol('proto.protos.ResumeReadResponse', null, global);
goog.exportSymbol('proto.protos.StartReadRequest', null, global);
goog.exportSymbol('proto.protos.StartReadResponse', null, global);
goog.exportSymbol('proto.protos.StopReadRequest', null, global);
goog.exportSymbol('proto.protos.StopReadResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ReadSampleOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ReadSampleOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ReadSampleOptions.displayName = 'proto.protos.ReadSampleOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ReadCLIConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protos.ReadCLIConfig.repeatedFields_, null);
};
goog.inherits(proto.protos.ReadCLIConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ReadCLIConfig.displayName = 'proto.protos.ReadCLIConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ReadCLIConfig.ReadBackend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ReadCLIConfig.ReadBackend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ReadCLIConfig.ReadBackend.displayName = 'proto.protos.ReadCLIConfig.ReadBackend';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ReadCLIConfig.ReadBackend.Kafka = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ReadCLIConfig.ReadBackend.Kafka, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ReadCLIConfig.ReadBackend.Kafka.displayName = 'proto.protos.ReadCLIConfig.ReadBackend.Kafka';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ.displayName = 'proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ReadCLIConfig.ReadBackend.AWSSQS = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ReadCLIConfig.ReadBackend.AWSSQS, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ReadCLIConfig.ReadBackend.AWSSQS.displayName = 'proto.protos.ReadCLIConfig.ReadBackend.AWSSQS';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ReadCLIConfig.ReadBackend.Mongo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ReadCLIConfig.ReadBackend.Mongo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ReadCLIConfig.ReadBackend.Mongo.displayName = 'proto.protos.ReadCLIConfig.ReadBackend.Mongo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ReadCLIConfig.ReadBackend.Nats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ReadCLIConfig.ReadBackend.Nats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ReadCLIConfig.ReadBackend.Nats.displayName = 'proto.protos.ReadCLIConfig.ReadBackend.Nats';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming.displayName = 'proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ReadCLIConfig.ReadBackend.NSQ = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ReadCLIConfig.ReadBackend.NSQ, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ReadCLIConfig.ReadBackend.NSQ.displayName = 'proto.protos.ReadCLIConfig.ReadBackend.NSQ';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ReadCLIConfig.ReadBackend.Postgres = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ReadCLIConfig.ReadBackend.Postgres, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ReadCLIConfig.ReadBackend.Postgres.displayName = 'proto.protos.ReadCLIConfig.ReadBackend.Postgres';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ReadCLIConfig.ReadBackend.Pulsar = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ReadCLIConfig.ReadBackend.Pulsar, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ReadCLIConfig.ReadBackend.Pulsar.displayName = 'proto.protos.ReadCLIConfig.ReadBackend.Pulsar';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ReadCLIConfig.ReadBackend.Rabbit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ReadCLIConfig.ReadBackend.Rabbit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ReadCLIConfig.ReadBackend.Rabbit.displayName = 'proto.protos.ReadCLIConfig.ReadBackend.Rabbit';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams.displayName = 'proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub.displayName = 'proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisStreams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ReadCLIConfig.ReadBackend.RedisStreams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ReadCLIConfig.ReadBackend.RedisStreams.displayName = 'proto.protos.ReadCLIConfig.ReadBackend.RedisStreams';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub.displayName = 'proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus.displayName = 'proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ReadCLIConfig.ReadBackend.MQTT = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ReadCLIConfig.ReadBackend.MQTT, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ReadCLIConfig.ReadBackend.MQTT.displayName = 'proto.protos.ReadCLIConfig.ReadBackend.MQTT';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub.displayName = 'proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue.displayName = 'proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ReadConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.ReadConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ReadConfig.displayName = 'proto.protos.ReadConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.CreateReadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.CreateReadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.CreateReadRequest.displayName = 'proto.protos.CreateReadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.CreateReadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.CreateReadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.CreateReadResponse.displayName = 'proto.protos.CreateReadResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.StopReadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.StopReadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.StopReadRequest.displayName = 'proto.protos.StopReadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.StopReadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.StopReadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.StopReadResponse.displayName = 'proto.protos.StopReadResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ResumeReadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.ResumeReadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ResumeReadRequest.displayName = 'proto.protos.ResumeReadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.ResumeReadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.ResumeReadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ResumeReadResponse.displayName = 'proto.protos.ResumeReadResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.DeleteReadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.DeleteReadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.DeleteReadRequest.displayName = 'proto.protos.DeleteReadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.DeleteReadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.DeleteReadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.DeleteReadResponse.displayName = 'proto.protos.DeleteReadResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.StartReadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.StartReadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.StartReadRequest.displayName = 'proto.protos.StartReadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.StartReadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.protos.StartReadResponse.repeatedFields_, null);
};
goog.inherits(proto.protos.StartReadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.StartReadResponse.displayName = 'proto.protos.StartReadResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.GetAllReadsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.GetAllReadsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.GetAllReadsRequest.displayName = 'proto.protos.GetAllReadsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.GetAllReadsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.protos.GetAllReadsResponse.repeatedFields_, null);
};
goog.inherits(proto.protos.GetAllReadsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.GetAllReadsResponse.displayName = 'proto.protos.GetAllReadsResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ReadSampleOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ReadSampleOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ReadSampleOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadSampleOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    sampleRate: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sampleIntervalSeconds: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ReadSampleOptions}
 */
proto.protos.ReadSampleOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ReadSampleOptions;
  return proto.protos.ReadSampleOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ReadSampleOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ReadSampleOptions}
 */
proto.protos.ReadSampleOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSampleRate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSampleIntervalSeconds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ReadSampleOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ReadSampleOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ReadSampleOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadSampleOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSampleRate();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSampleIntervalSeconds();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 sample_rate = 1;
 * @return {number}
 */
proto.protos.ReadSampleOptions.prototype.getSampleRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protos.ReadSampleOptions} returns this
 */
proto.protos.ReadSampleOptions.prototype.setSampleRate = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 sample_interval_seconds = 2;
 * @return {number}
 */
proto.protos.ReadSampleOptions.prototype.getSampleIntervalSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protos.ReadSampleOptions} returns this
 */
proto.protos.ReadSampleOptions.prototype.setSampleIntervalSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protos.ReadCLIConfig.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ReadCLIConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ReadCLIConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ReadCLIConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    displayOffsetStats: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    convertOutputList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    verboseOutput: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    statsEnable: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    statsReportIntervalSec: jspb.Message.getFieldWithDefault(msg, 5, 0),
    backendType: jspb.Message.getFieldWithDefault(msg, 6, 0),
    readBackend: (f = msg.getReadBackend()) && proto.protos.ReadCLIConfig.ReadBackend.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ReadCLIConfig}
 */
proto.protos.ReadCLIConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ReadCLIConfig;
  return proto.protos.ReadCLIConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ReadCLIConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ReadCLIConfig}
 */
proto.protos.ReadCLIConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayOffsetStats(value);
      break;
    case 2:
      var values = /** @type {!Array<!proto.protos.ConvertOption>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addConvertOutput(values[i]);
      }
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVerboseOutput(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStatsEnable(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatsReportIntervalSec(value);
      break;
    case 6:
      var value = /** @type {!proto.protos.backends.Type} */ (reader.readEnum());
      msg.setBackendType(value);
      break;
    case 7:
      var value = new proto.protos.ReadCLIConfig.ReadBackend;
      reader.readMessage(value,proto.protos.ReadCLIConfig.ReadBackend.deserializeBinaryFromReader);
      msg.setReadBackend(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ReadCLIConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ReadCLIConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ReadCLIConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplayOffsetStats();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getConvertOutputList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
  f = message.getVerboseOutput();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getStatsEnable();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getStatsReportIntervalSec();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getBackendType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getReadBackend();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.protos.ReadCLIConfig.ReadBackend.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ReadCLIConfig.ReadBackend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ReadCLIConfig.ReadBackend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.toObject = function(includeInstance, msg) {
  var f, obj = {
    kafka: (f = msg.getKafka()) && proto.protos.ReadCLIConfig.ReadBackend.Kafka.toObject(includeInstance, f),
    activemq: (f = msg.getActivemq()) && proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ.toObject(includeInstance, f),
    awssqs: (f = msg.getAwssqs()) && proto.protos.ReadCLIConfig.ReadBackend.AWSSQS.toObject(includeInstance, f),
    mongo: (f = msg.getMongo()) && proto.protos.ReadCLIConfig.ReadBackend.Mongo.toObject(includeInstance, f),
    nats: (f = msg.getNats()) && proto.protos.ReadCLIConfig.ReadBackend.Nats.toObject(includeInstance, f),
    natsStreaming: (f = msg.getNatsStreaming()) && proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming.toObject(includeInstance, f),
    nsq: (f = msg.getNsq()) && proto.protos.ReadCLIConfig.ReadBackend.NSQ.toObject(includeInstance, f),
    pulsar: (f = msg.getPulsar()) && proto.protos.ReadCLIConfig.ReadBackend.Pulsar.toObject(includeInstance, f),
    rabbit: (f = msg.getRabbit()) && proto.protos.ReadCLIConfig.ReadBackend.Rabbit.toObject(includeInstance, f),
    rabbitStreams: (f = msg.getRabbitStreams()) && proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams.toObject(includeInstance, f),
    mqtt: (f = msg.getMqtt()) && proto.protos.ReadCLIConfig.ReadBackend.MQTT.toObject(includeInstance, f),
    azureServiceBus: (f = msg.getAzureServiceBus()) && proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus.toObject(includeInstance, f),
    azureEventHub: (f = msg.getAzureEventHub()) && proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub.toObject(includeInstance, f),
    gcpPubsub: (f = msg.getGcpPubsub()) && proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub.toObject(includeInstance, f),
    kubemqQueue: (f = msg.getKubemqQueue()) && proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue.toObject(includeInstance, f),
    redisPubsub: (f = msg.getRedisPubsub()) && proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub.toObject(includeInstance, f),
    redisStreams: (f = msg.getRedisStreams()) && proto.protos.ReadCLIConfig.ReadBackend.RedisStreams.toObject(includeInstance, f),
    postgres: (f = msg.getPostgres()) && proto.protos.ReadCLIConfig.ReadBackend.Postgres.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend}
 */
proto.protos.ReadCLIConfig.ReadBackend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ReadCLIConfig.ReadBackend;
  return proto.protos.ReadCLIConfig.ReadBackend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend}
 */
proto.protos.ReadCLIConfig.ReadBackend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protos.ReadCLIConfig.ReadBackend.Kafka;
      reader.readMessage(value,proto.protos.ReadCLIConfig.ReadBackend.Kafka.deserializeBinaryFromReader);
      msg.setKafka(value);
      break;
    case 2:
      var value = new proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ;
      reader.readMessage(value,proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ.deserializeBinaryFromReader);
      msg.setActivemq(value);
      break;
    case 3:
      var value = new proto.protos.ReadCLIConfig.ReadBackend.AWSSQS;
      reader.readMessage(value,proto.protos.ReadCLIConfig.ReadBackend.AWSSQS.deserializeBinaryFromReader);
      msg.setAwssqs(value);
      break;
    case 4:
      var value = new proto.protos.ReadCLIConfig.ReadBackend.Mongo;
      reader.readMessage(value,proto.protos.ReadCLIConfig.ReadBackend.Mongo.deserializeBinaryFromReader);
      msg.setMongo(value);
      break;
    case 5:
      var value = new proto.protos.ReadCLIConfig.ReadBackend.Nats;
      reader.readMessage(value,proto.protos.ReadCLIConfig.ReadBackend.Nats.deserializeBinaryFromReader);
      msg.setNats(value);
      break;
    case 6:
      var value = new proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming;
      reader.readMessage(value,proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming.deserializeBinaryFromReader);
      msg.setNatsStreaming(value);
      break;
    case 7:
      var value = new proto.protos.ReadCLIConfig.ReadBackend.NSQ;
      reader.readMessage(value,proto.protos.ReadCLIConfig.ReadBackend.NSQ.deserializeBinaryFromReader);
      msg.setNsq(value);
      break;
    case 8:
      var value = new proto.protos.ReadCLIConfig.ReadBackend.Pulsar;
      reader.readMessage(value,proto.protos.ReadCLIConfig.ReadBackend.Pulsar.deserializeBinaryFromReader);
      msg.setPulsar(value);
      break;
    case 9:
      var value = new proto.protos.ReadCLIConfig.ReadBackend.Rabbit;
      reader.readMessage(value,proto.protos.ReadCLIConfig.ReadBackend.Rabbit.deserializeBinaryFromReader);
      msg.setRabbit(value);
      break;
    case 10:
      var value = new proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams;
      reader.readMessage(value,proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams.deserializeBinaryFromReader);
      msg.setRabbitStreams(value);
      break;
    case 11:
      var value = new proto.protos.ReadCLIConfig.ReadBackend.MQTT;
      reader.readMessage(value,proto.protos.ReadCLIConfig.ReadBackend.MQTT.deserializeBinaryFromReader);
      msg.setMqtt(value);
      break;
    case 12:
      var value = new proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus;
      reader.readMessage(value,proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus.deserializeBinaryFromReader);
      msg.setAzureServiceBus(value);
      break;
    case 13:
      var value = new proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub;
      reader.readMessage(value,proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub.deserializeBinaryFromReader);
      msg.setAzureEventHub(value);
      break;
    case 14:
      var value = new proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub;
      reader.readMessage(value,proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub.deserializeBinaryFromReader);
      msg.setGcpPubsub(value);
      break;
    case 15:
      var value = new proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue;
      reader.readMessage(value,proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue.deserializeBinaryFromReader);
      msg.setKubemqQueue(value);
      break;
    case 16:
      var value = new proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub;
      reader.readMessage(value,proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub.deserializeBinaryFromReader);
      msg.setRedisPubsub(value);
      break;
    case 17:
      var value = new proto.protos.ReadCLIConfig.ReadBackend.RedisStreams;
      reader.readMessage(value,proto.protos.ReadCLIConfig.ReadBackend.RedisStreams.deserializeBinaryFromReader);
      msg.setRedisStreams(value);
      break;
    case 18:
      var value = new proto.protos.ReadCLIConfig.ReadBackend.Postgres;
      reader.readMessage(value,proto.protos.ReadCLIConfig.ReadBackend.Postgres.deserializeBinaryFromReader);
      msg.setPostgres(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ReadCLIConfig.ReadBackend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKafka();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protos.ReadCLIConfig.ReadBackend.Kafka.serializeBinaryToWriter
    );
  }
  f = message.getActivemq();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ.serializeBinaryToWriter
    );
  }
  f = message.getAwssqs();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.protos.ReadCLIConfig.ReadBackend.AWSSQS.serializeBinaryToWriter
    );
  }
  f = message.getMongo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.protos.ReadCLIConfig.ReadBackend.Mongo.serializeBinaryToWriter
    );
  }
  f = message.getNats();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.protos.ReadCLIConfig.ReadBackend.Nats.serializeBinaryToWriter
    );
  }
  f = message.getNatsStreaming();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming.serializeBinaryToWriter
    );
  }
  f = message.getNsq();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.protos.ReadCLIConfig.ReadBackend.NSQ.serializeBinaryToWriter
    );
  }
  f = message.getPulsar();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.protos.ReadCLIConfig.ReadBackend.Pulsar.serializeBinaryToWriter
    );
  }
  f = message.getRabbit();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.protos.ReadCLIConfig.ReadBackend.Rabbit.serializeBinaryToWriter
    );
  }
  f = message.getRabbitStreams();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams.serializeBinaryToWriter
    );
  }
  f = message.getMqtt();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.protos.ReadCLIConfig.ReadBackend.MQTT.serializeBinaryToWriter
    );
  }
  f = message.getAzureServiceBus();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus.serializeBinaryToWriter
    );
  }
  f = message.getAzureEventHub();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub.serializeBinaryToWriter
    );
  }
  f = message.getGcpPubsub();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub.serializeBinaryToWriter
    );
  }
  f = message.getKubemqQueue();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue.serializeBinaryToWriter
    );
  }
  f = message.getRedisPubsub();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub.serializeBinaryToWriter
    );
  }
  f = message.getRedisStreams();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.protos.ReadCLIConfig.ReadBackend.RedisStreams.serializeBinaryToWriter
    );
  }
  f = message.getPostgres();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.protos.ReadCLIConfig.ReadBackend.Postgres.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ReadCLIConfig.ReadBackend.Kafka.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ReadCLIConfig.ReadBackend.Kafka.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.Kafka} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.Kafka.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_kafka_pb.KafkaConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_kafka_pb.KafkaReadArgs.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Kafka}
 */
proto.protos.ReadCLIConfig.ReadBackend.Kafka.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ReadCLIConfig.ReadBackend.Kafka;
  return proto.protos.ReadCLIConfig.ReadBackend.Kafka.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.Kafka} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Kafka}
 */
proto.protos.ReadCLIConfig.ReadBackend.Kafka.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new backends_kafka_pb.KafkaConn;
      reader.readMessage(value,backends_kafka_pb.KafkaConn.deserializeBinaryFromReader);
      msg.setConn(value);
      break;
    case 2:
      var value = new backends_kafka_pb.KafkaReadArgs;
      reader.readMessage(value,backends_kafka_pb.KafkaReadArgs.deserializeBinaryFromReader);
      msg.setArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ReadCLIConfig.ReadBackend.Kafka.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ReadCLIConfig.ReadBackend.Kafka.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.Kafka} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.Kafka.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      backends_kafka_pb.KafkaConn.serializeBinaryToWriter
    );
  }
  f = message.getArgs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      backends_kafka_pb.KafkaReadArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.KafkaConn conn = 1;
 * @return {?proto.protos.backends.KafkaConn}
 */
proto.protos.ReadCLIConfig.ReadBackend.Kafka.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.KafkaConn} */ (
    jspb.Message.getWrapperField(this, backends_kafka_pb.KafkaConn, 1));
};


/**
 * @param {?proto.protos.backends.KafkaConn|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Kafka} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.Kafka.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Kafka} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.Kafka.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.Kafka.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.KafkaReadArgs args = 2;
 * @return {?proto.protos.backends.KafkaReadArgs}
 */
proto.protos.ReadCLIConfig.ReadBackend.Kafka.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.KafkaReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_kafka_pb.KafkaReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.KafkaReadArgs|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Kafka} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.Kafka.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Kafka} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.Kafka.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.Kafka.prototype.hasArgs = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_activemq_pb.ActiveMQConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_activemq_pb.ActiveMQReadArgs.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ}
 */
proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ;
  return proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ}
 */
proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new backends_activemq_pb.ActiveMQConn;
      reader.readMessage(value,backends_activemq_pb.ActiveMQConn.deserializeBinaryFromReader);
      msg.setConn(value);
      break;
    case 2:
      var value = new backends_activemq_pb.ActiveMQReadArgs;
      reader.readMessage(value,backends_activemq_pb.ActiveMQReadArgs.deserializeBinaryFromReader);
      msg.setArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      backends_activemq_pb.ActiveMQConn.serializeBinaryToWriter
    );
  }
  f = message.getArgs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      backends_activemq_pb.ActiveMQReadArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.ActiveMQConn conn = 1;
 * @return {?proto.protos.backends.ActiveMQConn}
 */
proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.ActiveMQConn} */ (
    jspb.Message.getWrapperField(this, backends_activemq_pb.ActiveMQConn, 1));
};


/**
 * @param {?proto.protos.backends.ActiveMQConn|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.ActiveMQReadArgs args = 2;
 * @return {?proto.protos.backends.ActiveMQReadArgs}
 */
proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.ActiveMQReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_activemq_pb.ActiveMQReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.ActiveMQReadArgs|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ.prototype.hasArgs = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ReadCLIConfig.ReadBackend.AWSSQS.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ReadCLIConfig.ReadBackend.AWSSQS.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.AWSSQS} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.AWSSQS.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_aws$sqs_pb.AWSSQSConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_aws$sqs_pb.AWSSQSReadArgs.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.AWSSQS}
 */
proto.protos.ReadCLIConfig.ReadBackend.AWSSQS.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ReadCLIConfig.ReadBackend.AWSSQS;
  return proto.protos.ReadCLIConfig.ReadBackend.AWSSQS.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.AWSSQS} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.AWSSQS}
 */
proto.protos.ReadCLIConfig.ReadBackend.AWSSQS.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new backends_aws$sqs_pb.AWSSQSConn;
      reader.readMessage(value,backends_aws$sqs_pb.AWSSQSConn.deserializeBinaryFromReader);
      msg.setConn(value);
      break;
    case 2:
      var value = new backends_aws$sqs_pb.AWSSQSReadArgs;
      reader.readMessage(value,backends_aws$sqs_pb.AWSSQSReadArgs.deserializeBinaryFromReader);
      msg.setArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ReadCLIConfig.ReadBackend.AWSSQS.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ReadCLIConfig.ReadBackend.AWSSQS.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.AWSSQS} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.AWSSQS.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      backends_aws$sqs_pb.AWSSQSConn.serializeBinaryToWriter
    );
  }
  f = message.getArgs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      backends_aws$sqs_pb.AWSSQSReadArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.AWSSQSConn conn = 1;
 * @return {?proto.protos.backends.AWSSQSConn}
 */
proto.protos.ReadCLIConfig.ReadBackend.AWSSQS.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.AWSSQSConn} */ (
    jspb.Message.getWrapperField(this, backends_aws$sqs_pb.AWSSQSConn, 1));
};


/**
 * @param {?proto.protos.backends.AWSSQSConn|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.AWSSQS} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.AWSSQS.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.AWSSQS} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.AWSSQS.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.AWSSQS.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.AWSSQSReadArgs args = 2;
 * @return {?proto.protos.backends.AWSSQSReadArgs}
 */
proto.protos.ReadCLIConfig.ReadBackend.AWSSQS.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.AWSSQSReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_aws$sqs_pb.AWSSQSReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.AWSSQSReadArgs|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.AWSSQS} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.AWSSQS.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.AWSSQS} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.AWSSQS.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.AWSSQS.prototype.hasArgs = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ReadCLIConfig.ReadBackend.Mongo.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ReadCLIConfig.ReadBackend.Mongo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.Mongo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.Mongo.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_mongo_pb.MongoConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_mongo_pb.MongoReadArgs.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Mongo}
 */
proto.protos.ReadCLIConfig.ReadBackend.Mongo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ReadCLIConfig.ReadBackend.Mongo;
  return proto.protos.ReadCLIConfig.ReadBackend.Mongo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.Mongo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Mongo}
 */
proto.protos.ReadCLIConfig.ReadBackend.Mongo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new backends_mongo_pb.MongoConn;
      reader.readMessage(value,backends_mongo_pb.MongoConn.deserializeBinaryFromReader);
      msg.setConn(value);
      break;
    case 2:
      var value = new backends_mongo_pb.MongoReadArgs;
      reader.readMessage(value,backends_mongo_pb.MongoReadArgs.deserializeBinaryFromReader);
      msg.setArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ReadCLIConfig.ReadBackend.Mongo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ReadCLIConfig.ReadBackend.Mongo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.Mongo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.Mongo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      backends_mongo_pb.MongoConn.serializeBinaryToWriter
    );
  }
  f = message.getArgs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      backends_mongo_pb.MongoReadArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.MongoConn conn = 1;
 * @return {?proto.protos.backends.MongoConn}
 */
proto.protos.ReadCLIConfig.ReadBackend.Mongo.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.MongoConn} */ (
    jspb.Message.getWrapperField(this, backends_mongo_pb.MongoConn, 1));
};


/**
 * @param {?proto.protos.backends.MongoConn|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Mongo} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.Mongo.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Mongo} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.Mongo.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.Mongo.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.MongoReadArgs args = 2;
 * @return {?proto.protos.backends.MongoReadArgs}
 */
proto.protos.ReadCLIConfig.ReadBackend.Mongo.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.MongoReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_mongo_pb.MongoReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.MongoReadArgs|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Mongo} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.Mongo.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Mongo} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.Mongo.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.Mongo.prototype.hasArgs = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ReadCLIConfig.ReadBackend.Nats.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ReadCLIConfig.ReadBackend.Nats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.Nats} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.Nats.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_nats_pb.NatsConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_nats_pb.NatsReadArgs.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Nats}
 */
proto.protos.ReadCLIConfig.ReadBackend.Nats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ReadCLIConfig.ReadBackend.Nats;
  return proto.protos.ReadCLIConfig.ReadBackend.Nats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.Nats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Nats}
 */
proto.protos.ReadCLIConfig.ReadBackend.Nats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new backends_nats_pb.NatsConn;
      reader.readMessage(value,backends_nats_pb.NatsConn.deserializeBinaryFromReader);
      msg.setConn(value);
      break;
    case 2:
      var value = new backends_nats_pb.NatsReadArgs;
      reader.readMessage(value,backends_nats_pb.NatsReadArgs.deserializeBinaryFromReader);
      msg.setArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ReadCLIConfig.ReadBackend.Nats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ReadCLIConfig.ReadBackend.Nats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.Nats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.Nats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      backends_nats_pb.NatsConn.serializeBinaryToWriter
    );
  }
  f = message.getArgs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      backends_nats_pb.NatsReadArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.NatsConn conn = 1;
 * @return {?proto.protos.backends.NatsConn}
 */
proto.protos.ReadCLIConfig.ReadBackend.Nats.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.NatsConn} */ (
    jspb.Message.getWrapperField(this, backends_nats_pb.NatsConn, 1));
};


/**
 * @param {?proto.protos.backends.NatsConn|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Nats} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.Nats.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Nats} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.Nats.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.Nats.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.NatsReadArgs args = 2;
 * @return {?proto.protos.backends.NatsReadArgs}
 */
proto.protos.ReadCLIConfig.ReadBackend.Nats.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.NatsReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_nats_pb.NatsReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.NatsReadArgs|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Nats} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.Nats.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Nats} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.Nats.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.Nats.prototype.hasArgs = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_nats$streaming_pb.NatsStreamingConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_nats$streaming_pb.NatsStreamingReadArgs.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming}
 */
proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming;
  return proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming}
 */
proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new backends_nats$streaming_pb.NatsStreamingConn;
      reader.readMessage(value,backends_nats$streaming_pb.NatsStreamingConn.deserializeBinaryFromReader);
      msg.setConn(value);
      break;
    case 2:
      var value = new backends_nats$streaming_pb.NatsStreamingReadArgs;
      reader.readMessage(value,backends_nats$streaming_pb.NatsStreamingReadArgs.deserializeBinaryFromReader);
      msg.setArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      backends_nats$streaming_pb.NatsStreamingConn.serializeBinaryToWriter
    );
  }
  f = message.getArgs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      backends_nats$streaming_pb.NatsStreamingReadArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.NatsStreamingConn conn = 1;
 * @return {?proto.protos.backends.NatsStreamingConn}
 */
proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.NatsStreamingConn} */ (
    jspb.Message.getWrapperField(this, backends_nats$streaming_pb.NatsStreamingConn, 1));
};


/**
 * @param {?proto.protos.backends.NatsStreamingConn|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.NatsStreamingReadArgs args = 2;
 * @return {?proto.protos.backends.NatsStreamingReadArgs}
 */
proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.NatsStreamingReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_nats$streaming_pb.NatsStreamingReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.NatsStreamingReadArgs|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming.prototype.hasArgs = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ReadCLIConfig.ReadBackend.NSQ.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ReadCLIConfig.ReadBackend.NSQ.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.NSQ} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.NSQ.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_nsq_pb.NSQConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_nsq_pb.NSQReadArgs.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.NSQ}
 */
proto.protos.ReadCLIConfig.ReadBackend.NSQ.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ReadCLIConfig.ReadBackend.NSQ;
  return proto.protos.ReadCLIConfig.ReadBackend.NSQ.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.NSQ} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.NSQ}
 */
proto.protos.ReadCLIConfig.ReadBackend.NSQ.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new backends_nsq_pb.NSQConn;
      reader.readMessage(value,backends_nsq_pb.NSQConn.deserializeBinaryFromReader);
      msg.setConn(value);
      break;
    case 2:
      var value = new backends_nsq_pb.NSQReadArgs;
      reader.readMessage(value,backends_nsq_pb.NSQReadArgs.deserializeBinaryFromReader);
      msg.setArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ReadCLIConfig.ReadBackend.NSQ.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ReadCLIConfig.ReadBackend.NSQ.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.NSQ} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.NSQ.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      backends_nsq_pb.NSQConn.serializeBinaryToWriter
    );
  }
  f = message.getArgs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      backends_nsq_pb.NSQReadArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.NSQConn conn = 1;
 * @return {?proto.protos.backends.NSQConn}
 */
proto.protos.ReadCLIConfig.ReadBackend.NSQ.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.NSQConn} */ (
    jspb.Message.getWrapperField(this, backends_nsq_pb.NSQConn, 1));
};


/**
 * @param {?proto.protos.backends.NSQConn|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.NSQ} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.NSQ.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.NSQ} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.NSQ.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.NSQ.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.NSQReadArgs args = 2;
 * @return {?proto.protos.backends.NSQReadArgs}
 */
proto.protos.ReadCLIConfig.ReadBackend.NSQ.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.NSQReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_nsq_pb.NSQReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.NSQReadArgs|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.NSQ} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.NSQ.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.NSQ} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.NSQ.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.NSQ.prototype.hasArgs = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ReadCLIConfig.ReadBackend.Postgres.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ReadCLIConfig.ReadBackend.Postgres.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.Postgres} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.Postgres.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_postgres_pb.PostgresConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_postgres_pb.PostgresReadArgs.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Postgres}
 */
proto.protos.ReadCLIConfig.ReadBackend.Postgres.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ReadCLIConfig.ReadBackend.Postgres;
  return proto.protos.ReadCLIConfig.ReadBackend.Postgres.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.Postgres} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Postgres}
 */
proto.protos.ReadCLIConfig.ReadBackend.Postgres.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new backends_postgres_pb.PostgresConn;
      reader.readMessage(value,backends_postgres_pb.PostgresConn.deserializeBinaryFromReader);
      msg.setConn(value);
      break;
    case 2:
      var value = new backends_postgres_pb.PostgresReadArgs;
      reader.readMessage(value,backends_postgres_pb.PostgresReadArgs.deserializeBinaryFromReader);
      msg.setArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ReadCLIConfig.ReadBackend.Postgres.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ReadCLIConfig.ReadBackend.Postgres.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.Postgres} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.Postgres.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      backends_postgres_pb.PostgresConn.serializeBinaryToWriter
    );
  }
  f = message.getArgs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      backends_postgres_pb.PostgresReadArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.PostgresConn conn = 1;
 * @return {?proto.protos.backends.PostgresConn}
 */
proto.protos.ReadCLIConfig.ReadBackend.Postgres.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.PostgresConn} */ (
    jspb.Message.getWrapperField(this, backends_postgres_pb.PostgresConn, 1));
};


/**
 * @param {?proto.protos.backends.PostgresConn|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Postgres} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.Postgres.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Postgres} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.Postgres.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.Postgres.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.PostgresReadArgs args = 2;
 * @return {?proto.protos.backends.PostgresReadArgs}
 */
proto.protos.ReadCLIConfig.ReadBackend.Postgres.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.PostgresReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_postgres_pb.PostgresReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.PostgresReadArgs|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Postgres} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.Postgres.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Postgres} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.Postgres.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.Postgres.prototype.hasArgs = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ReadCLIConfig.ReadBackend.Pulsar.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ReadCLIConfig.ReadBackend.Pulsar.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.Pulsar} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.Pulsar.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_pulsar_pb.PulsarConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_pulsar_pb.PulsarReadArgs.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Pulsar}
 */
proto.protos.ReadCLIConfig.ReadBackend.Pulsar.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ReadCLIConfig.ReadBackend.Pulsar;
  return proto.protos.ReadCLIConfig.ReadBackend.Pulsar.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.Pulsar} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Pulsar}
 */
proto.protos.ReadCLIConfig.ReadBackend.Pulsar.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new backends_pulsar_pb.PulsarConn;
      reader.readMessage(value,backends_pulsar_pb.PulsarConn.deserializeBinaryFromReader);
      msg.setConn(value);
      break;
    case 2:
      var value = new backends_pulsar_pb.PulsarReadArgs;
      reader.readMessage(value,backends_pulsar_pb.PulsarReadArgs.deserializeBinaryFromReader);
      msg.setArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ReadCLIConfig.ReadBackend.Pulsar.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ReadCLIConfig.ReadBackend.Pulsar.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.Pulsar} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.Pulsar.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      backends_pulsar_pb.PulsarConn.serializeBinaryToWriter
    );
  }
  f = message.getArgs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      backends_pulsar_pb.PulsarReadArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.PulsarConn conn = 1;
 * @return {?proto.protos.backends.PulsarConn}
 */
proto.protos.ReadCLIConfig.ReadBackend.Pulsar.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.PulsarConn} */ (
    jspb.Message.getWrapperField(this, backends_pulsar_pb.PulsarConn, 1));
};


/**
 * @param {?proto.protos.backends.PulsarConn|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Pulsar} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.Pulsar.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Pulsar} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.Pulsar.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.Pulsar.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.PulsarReadArgs args = 2;
 * @return {?proto.protos.backends.PulsarReadArgs}
 */
proto.protos.ReadCLIConfig.ReadBackend.Pulsar.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.PulsarReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_pulsar_pb.PulsarReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.PulsarReadArgs|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Pulsar} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.Pulsar.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Pulsar} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.Pulsar.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.Pulsar.prototype.hasArgs = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ReadCLIConfig.ReadBackend.Rabbit.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ReadCLIConfig.ReadBackend.Rabbit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.Rabbit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.Rabbit.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_rabbit_pb.RabbitConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_rabbit_pb.RabbitReadArgs.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Rabbit}
 */
proto.protos.ReadCLIConfig.ReadBackend.Rabbit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ReadCLIConfig.ReadBackend.Rabbit;
  return proto.protos.ReadCLIConfig.ReadBackend.Rabbit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.Rabbit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Rabbit}
 */
proto.protos.ReadCLIConfig.ReadBackend.Rabbit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new backends_rabbit_pb.RabbitConn;
      reader.readMessage(value,backends_rabbit_pb.RabbitConn.deserializeBinaryFromReader);
      msg.setConn(value);
      break;
    case 2:
      var value = new backends_rabbit_pb.RabbitReadArgs;
      reader.readMessage(value,backends_rabbit_pb.RabbitReadArgs.deserializeBinaryFromReader);
      msg.setArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ReadCLIConfig.ReadBackend.Rabbit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ReadCLIConfig.ReadBackend.Rabbit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.Rabbit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.Rabbit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      backends_rabbit_pb.RabbitConn.serializeBinaryToWriter
    );
  }
  f = message.getArgs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      backends_rabbit_pb.RabbitReadArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.RabbitConn conn = 1;
 * @return {?proto.protos.backends.RabbitConn}
 */
proto.protos.ReadCLIConfig.ReadBackend.Rabbit.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.RabbitConn} */ (
    jspb.Message.getWrapperField(this, backends_rabbit_pb.RabbitConn, 1));
};


/**
 * @param {?proto.protos.backends.RabbitConn|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Rabbit} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.Rabbit.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Rabbit} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.Rabbit.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.Rabbit.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.RabbitReadArgs args = 2;
 * @return {?proto.protos.backends.RabbitReadArgs}
 */
proto.protos.ReadCLIConfig.ReadBackend.Rabbit.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.RabbitReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_rabbit_pb.RabbitReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.RabbitReadArgs|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Rabbit} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.Rabbit.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.Rabbit} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.Rabbit.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.Rabbit.prototype.hasArgs = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_rabbit$streams_pb.RabbitStreamsConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_rabbit$streams_pb.RabbitStreamsReadArgs.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams}
 */
proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams;
  return proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams}
 */
proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new backends_rabbit$streams_pb.RabbitStreamsConn;
      reader.readMessage(value,backends_rabbit$streams_pb.RabbitStreamsConn.deserializeBinaryFromReader);
      msg.setConn(value);
      break;
    case 2:
      var value = new backends_rabbit$streams_pb.RabbitStreamsReadArgs;
      reader.readMessage(value,backends_rabbit$streams_pb.RabbitStreamsReadArgs.deserializeBinaryFromReader);
      msg.setArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      backends_rabbit$streams_pb.RabbitStreamsConn.serializeBinaryToWriter
    );
  }
  f = message.getArgs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      backends_rabbit$streams_pb.RabbitStreamsReadArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.RabbitStreamsConn conn = 1;
 * @return {?proto.protos.backends.RabbitStreamsConn}
 */
proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.RabbitStreamsConn} */ (
    jspb.Message.getWrapperField(this, backends_rabbit$streams_pb.RabbitStreamsConn, 1));
};


/**
 * @param {?proto.protos.backends.RabbitStreamsConn|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.RabbitStreamsReadArgs args = 2;
 * @return {?proto.protos.backends.RabbitStreamsReadArgs}
 */
proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.RabbitStreamsReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_rabbit$streams_pb.RabbitStreamsReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.RabbitStreamsReadArgs|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams.prototype.hasArgs = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_redis$pubsub_pb.RedisPubSubConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_redis$pubsub_pb.RedisPubSubReadArgs.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub}
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub;
  return proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub}
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new backends_redis$pubsub_pb.RedisPubSubConn;
      reader.readMessage(value,backends_redis$pubsub_pb.RedisPubSubConn.deserializeBinaryFromReader);
      msg.setConn(value);
      break;
    case 2:
      var value = new backends_redis$pubsub_pb.RedisPubSubReadArgs;
      reader.readMessage(value,backends_redis$pubsub_pb.RedisPubSubReadArgs.deserializeBinaryFromReader);
      msg.setArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      backends_redis$pubsub_pb.RedisPubSubConn.serializeBinaryToWriter
    );
  }
  f = message.getArgs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      backends_redis$pubsub_pb.RedisPubSubReadArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.RedisPubSubConn conn = 1;
 * @return {?proto.protos.backends.RedisPubSubConn}
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.RedisPubSubConn} */ (
    jspb.Message.getWrapperField(this, backends_redis$pubsub_pb.RedisPubSubConn, 1));
};


/**
 * @param {?proto.protos.backends.RedisPubSubConn|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.RedisPubSubReadArgs args = 2;
 * @return {?proto.protos.backends.RedisPubSubReadArgs}
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.RedisPubSubReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_redis$pubsub_pb.RedisPubSubReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.RedisPubSubReadArgs|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub.prototype.hasArgs = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisStreams.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ReadCLIConfig.ReadBackend.RedisStreams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.RedisStreams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisStreams.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_redis$streams_pb.RedisStreamsConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_redis$streams_pb.RedisStreamsReadArgs.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.RedisStreams}
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisStreams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ReadCLIConfig.ReadBackend.RedisStreams;
  return proto.protos.ReadCLIConfig.ReadBackend.RedisStreams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.RedisStreams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.RedisStreams}
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisStreams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new backends_redis$streams_pb.RedisStreamsConn;
      reader.readMessage(value,backends_redis$streams_pb.RedisStreamsConn.deserializeBinaryFromReader);
      msg.setConn(value);
      break;
    case 2:
      var value = new backends_redis$streams_pb.RedisStreamsReadArgs;
      reader.readMessage(value,backends_redis$streams_pb.RedisStreamsReadArgs.deserializeBinaryFromReader);
      msg.setArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisStreams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ReadCLIConfig.ReadBackend.RedisStreams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.RedisStreams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisStreams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      backends_redis$streams_pb.RedisStreamsConn.serializeBinaryToWriter
    );
  }
  f = message.getArgs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      backends_redis$streams_pb.RedisStreamsReadArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.RedisStreamsConn conn = 1;
 * @return {?proto.protos.backends.RedisStreamsConn}
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisStreams.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.RedisStreamsConn} */ (
    jspb.Message.getWrapperField(this, backends_redis$streams_pb.RedisStreamsConn, 1));
};


/**
 * @param {?proto.protos.backends.RedisStreamsConn|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.RedisStreams} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.RedisStreams.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.RedisStreams} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisStreams.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisStreams.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.RedisStreamsReadArgs args = 2;
 * @return {?proto.protos.backends.RedisStreamsReadArgs}
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisStreams.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.RedisStreamsReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_redis$streams_pb.RedisStreamsReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.RedisStreamsReadArgs|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.RedisStreams} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.RedisStreams.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.RedisStreams} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisStreams.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.RedisStreams.prototype.hasArgs = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_azure$event$hub_pb.AzureEventHubConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_azure$event$hub_pb.AzureEventHubReadArgs.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub}
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub;
  return proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub}
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new backends_azure$event$hub_pb.AzureEventHubConn;
      reader.readMessage(value,backends_azure$event$hub_pb.AzureEventHubConn.deserializeBinaryFromReader);
      msg.setConn(value);
      break;
    case 2:
      var value = new backends_azure$event$hub_pb.AzureEventHubReadArgs;
      reader.readMessage(value,backends_azure$event$hub_pb.AzureEventHubReadArgs.deserializeBinaryFromReader);
      msg.setArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      backends_azure$event$hub_pb.AzureEventHubConn.serializeBinaryToWriter
    );
  }
  f = message.getArgs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      backends_azure$event$hub_pb.AzureEventHubReadArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.AzureEventHubConn conn = 1;
 * @return {?proto.protos.backends.AzureEventHubConn}
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.AzureEventHubConn} */ (
    jspb.Message.getWrapperField(this, backends_azure$event$hub_pb.AzureEventHubConn, 1));
};


/**
 * @param {?proto.protos.backends.AzureEventHubConn|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.AzureEventHubReadArgs args = 2;
 * @return {?proto.protos.backends.AzureEventHubReadArgs}
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.AzureEventHubReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_azure$event$hub_pb.AzureEventHubReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.AzureEventHubReadArgs|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub.prototype.hasArgs = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_azure$service$bus_pb.AzureServiceBusConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_azure$service$bus_pb.AzureServiceBusReadArgs.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus}
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus;
  return proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus}
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new backends_azure$service$bus_pb.AzureServiceBusConn;
      reader.readMessage(value,backends_azure$service$bus_pb.AzureServiceBusConn.deserializeBinaryFromReader);
      msg.setConn(value);
      break;
    case 2:
      var value = new backends_azure$service$bus_pb.AzureServiceBusReadArgs;
      reader.readMessage(value,backends_azure$service$bus_pb.AzureServiceBusReadArgs.deserializeBinaryFromReader);
      msg.setArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      backends_azure$service$bus_pb.AzureServiceBusConn.serializeBinaryToWriter
    );
  }
  f = message.getArgs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      backends_azure$service$bus_pb.AzureServiceBusReadArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.AzureServiceBusConn conn = 1;
 * @return {?proto.protos.backends.AzureServiceBusConn}
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.AzureServiceBusConn} */ (
    jspb.Message.getWrapperField(this, backends_azure$service$bus_pb.AzureServiceBusConn, 1));
};


/**
 * @param {?proto.protos.backends.AzureServiceBusConn|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.AzureServiceBusReadArgs args = 2;
 * @return {?proto.protos.backends.AzureServiceBusReadArgs}
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.AzureServiceBusReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_azure$service$bus_pb.AzureServiceBusReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.AzureServiceBusReadArgs|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus.prototype.hasArgs = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ReadCLIConfig.ReadBackend.MQTT.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ReadCLIConfig.ReadBackend.MQTT.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.MQTT} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.MQTT.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_mqtt_pb.MQTTConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_mqtt_pb.MQTTReadArgs.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.MQTT}
 */
proto.protos.ReadCLIConfig.ReadBackend.MQTT.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ReadCLIConfig.ReadBackend.MQTT;
  return proto.protos.ReadCLIConfig.ReadBackend.MQTT.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.MQTT} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.MQTT}
 */
proto.protos.ReadCLIConfig.ReadBackend.MQTT.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new backends_mqtt_pb.MQTTConn;
      reader.readMessage(value,backends_mqtt_pb.MQTTConn.deserializeBinaryFromReader);
      msg.setConn(value);
      break;
    case 2:
      var value = new backends_mqtt_pb.MQTTReadArgs;
      reader.readMessage(value,backends_mqtt_pb.MQTTReadArgs.deserializeBinaryFromReader);
      msg.setArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ReadCLIConfig.ReadBackend.MQTT.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ReadCLIConfig.ReadBackend.MQTT.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.MQTT} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.MQTT.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      backends_mqtt_pb.MQTTConn.serializeBinaryToWriter
    );
  }
  f = message.getArgs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      backends_mqtt_pb.MQTTReadArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.MQTTConn conn = 1;
 * @return {?proto.protos.backends.MQTTConn}
 */
proto.protos.ReadCLIConfig.ReadBackend.MQTT.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.MQTTConn} */ (
    jspb.Message.getWrapperField(this, backends_mqtt_pb.MQTTConn, 1));
};


/**
 * @param {?proto.protos.backends.MQTTConn|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.MQTT} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.MQTT.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.MQTT} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.MQTT.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.MQTT.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.MQTTReadArgs args = 2;
 * @return {?proto.protos.backends.MQTTReadArgs}
 */
proto.protos.ReadCLIConfig.ReadBackend.MQTT.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.MQTTReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_mqtt_pb.MQTTReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.MQTTReadArgs|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.MQTT} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.MQTT.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.MQTT} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.MQTT.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.MQTT.prototype.hasArgs = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_gcp$pubsub_pb.GCPPubSubConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_gcp$pubsub_pb.GCPPubSubReadArgs.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub}
 */
proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub;
  return proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub}
 */
proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new backends_gcp$pubsub_pb.GCPPubSubConn;
      reader.readMessage(value,backends_gcp$pubsub_pb.GCPPubSubConn.deserializeBinaryFromReader);
      msg.setConn(value);
      break;
    case 2:
      var value = new backends_gcp$pubsub_pb.GCPPubSubReadArgs;
      reader.readMessage(value,backends_gcp$pubsub_pb.GCPPubSubReadArgs.deserializeBinaryFromReader);
      msg.setArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      backends_gcp$pubsub_pb.GCPPubSubConn.serializeBinaryToWriter
    );
  }
  f = message.getArgs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      backends_gcp$pubsub_pb.GCPPubSubReadArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.GCPPubSubConn conn = 1;
 * @return {?proto.protos.backends.GCPPubSubConn}
 */
proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.GCPPubSubConn} */ (
    jspb.Message.getWrapperField(this, backends_gcp$pubsub_pb.GCPPubSubConn, 1));
};


/**
 * @param {?proto.protos.backends.GCPPubSubConn|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.GCPPubSubReadArgs args = 2;
 * @return {?proto.protos.backends.GCPPubSubReadArgs}
 */
proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.GCPPubSubReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_gcp$pubsub_pb.GCPPubSubReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.GCPPubSubReadArgs|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub.prototype.hasArgs = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_kubemq$queue_pb.KubeMQQueueConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_kubemq$queue_pb.KubeMQQueueReadArgs.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue}
 */
proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue;
  return proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue}
 */
proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new backends_kubemq$queue_pb.KubeMQQueueConn;
      reader.readMessage(value,backends_kubemq$queue_pb.KubeMQQueueConn.deserializeBinaryFromReader);
      msg.setConn(value);
      break;
    case 2:
      var value = new backends_kubemq$queue_pb.KubeMQQueueReadArgs;
      reader.readMessage(value,backends_kubemq$queue_pb.KubeMQQueueReadArgs.deserializeBinaryFromReader);
      msg.setArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      backends_kubemq$queue_pb.KubeMQQueueConn.serializeBinaryToWriter
    );
  }
  f = message.getArgs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      backends_kubemq$queue_pb.KubeMQQueueReadArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.KubeMQQueueConn conn = 1;
 * @return {?proto.protos.backends.KubeMQQueueConn}
 */
proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.KubeMQQueueConn} */ (
    jspb.Message.getWrapperField(this, backends_kubemq$queue_pb.KubeMQQueueConn, 1));
};


/**
 * @param {?proto.protos.backends.KubeMQQueueConn|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.KubeMQQueueReadArgs args = 2;
 * @return {?proto.protos.backends.KubeMQQueueReadArgs}
 */
proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.KubeMQQueueReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_kubemq$queue_pb.KubeMQQueueReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.KubeMQQueueReadArgs|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue.prototype.hasArgs = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Kafka kafka = 1;
 * @return {?proto.protos.ReadCLIConfig.ReadBackend.Kafka}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.getKafka = function() {
  return /** @type{?proto.protos.ReadCLIConfig.ReadBackend.Kafka} */ (
    jspb.Message.getWrapperField(this, proto.protos.ReadCLIConfig.ReadBackend.Kafka, 1));
};


/**
 * @param {?proto.protos.ReadCLIConfig.ReadBackend.Kafka|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.prototype.setKafka = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.clearKafka = function() {
  return this.setKafka(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.hasKafka = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ActiveMQ activemq = 2;
 * @return {?proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.getActivemq = function() {
  return /** @type{?proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ} */ (
    jspb.Message.getWrapperField(this, proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ, 2));
};


/**
 * @param {?proto.protos.ReadCLIConfig.ReadBackend.ActiveMQ|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.prototype.setActivemq = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.clearActivemq = function() {
  return this.setActivemq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.hasActivemq = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AWSSQS awssqs = 3;
 * @return {?proto.protos.ReadCLIConfig.ReadBackend.AWSSQS}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.getAwssqs = function() {
  return /** @type{?proto.protos.ReadCLIConfig.ReadBackend.AWSSQS} */ (
    jspb.Message.getWrapperField(this, proto.protos.ReadCLIConfig.ReadBackend.AWSSQS, 3));
};


/**
 * @param {?proto.protos.ReadCLIConfig.ReadBackend.AWSSQS|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.prototype.setAwssqs = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.clearAwssqs = function() {
  return this.setAwssqs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.hasAwssqs = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Mongo mongo = 4;
 * @return {?proto.protos.ReadCLIConfig.ReadBackend.Mongo}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.getMongo = function() {
  return /** @type{?proto.protos.ReadCLIConfig.ReadBackend.Mongo} */ (
    jspb.Message.getWrapperField(this, proto.protos.ReadCLIConfig.ReadBackend.Mongo, 4));
};


/**
 * @param {?proto.protos.ReadCLIConfig.ReadBackend.Mongo|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.prototype.setMongo = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.clearMongo = function() {
  return this.setMongo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.hasMongo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Nats nats = 5;
 * @return {?proto.protos.ReadCLIConfig.ReadBackend.Nats}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.getNats = function() {
  return /** @type{?proto.protos.ReadCLIConfig.ReadBackend.Nats} */ (
    jspb.Message.getWrapperField(this, proto.protos.ReadCLIConfig.ReadBackend.Nats, 5));
};


/**
 * @param {?proto.protos.ReadCLIConfig.ReadBackend.Nats|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.prototype.setNats = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.clearNats = function() {
  return this.setNats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.hasNats = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional NatsStreaming nats_streaming = 6;
 * @return {?proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.getNatsStreaming = function() {
  return /** @type{?proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming} */ (
    jspb.Message.getWrapperField(this, proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming, 6));
};


/**
 * @param {?proto.protos.ReadCLIConfig.ReadBackend.NatsStreaming|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.prototype.setNatsStreaming = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.clearNatsStreaming = function() {
  return this.setNatsStreaming(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.hasNatsStreaming = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional NSQ nsq = 7;
 * @return {?proto.protos.ReadCLIConfig.ReadBackend.NSQ}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.getNsq = function() {
  return /** @type{?proto.protos.ReadCLIConfig.ReadBackend.NSQ} */ (
    jspb.Message.getWrapperField(this, proto.protos.ReadCLIConfig.ReadBackend.NSQ, 7));
};


/**
 * @param {?proto.protos.ReadCLIConfig.ReadBackend.NSQ|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.prototype.setNsq = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.clearNsq = function() {
  return this.setNsq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.hasNsq = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Pulsar pulsar = 8;
 * @return {?proto.protos.ReadCLIConfig.ReadBackend.Pulsar}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.getPulsar = function() {
  return /** @type{?proto.protos.ReadCLIConfig.ReadBackend.Pulsar} */ (
    jspb.Message.getWrapperField(this, proto.protos.ReadCLIConfig.ReadBackend.Pulsar, 8));
};


/**
 * @param {?proto.protos.ReadCLIConfig.ReadBackend.Pulsar|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.prototype.setPulsar = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.clearPulsar = function() {
  return this.setPulsar(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.hasPulsar = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Rabbit rabbit = 9;
 * @return {?proto.protos.ReadCLIConfig.ReadBackend.Rabbit}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.getRabbit = function() {
  return /** @type{?proto.protos.ReadCLIConfig.ReadBackend.Rabbit} */ (
    jspb.Message.getWrapperField(this, proto.protos.ReadCLIConfig.ReadBackend.Rabbit, 9));
};


/**
 * @param {?proto.protos.ReadCLIConfig.ReadBackend.Rabbit|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.prototype.setRabbit = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.clearRabbit = function() {
  return this.setRabbit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.hasRabbit = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional RabbitStreams rabbit_streams = 10;
 * @return {?proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.getRabbitStreams = function() {
  return /** @type{?proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams} */ (
    jspb.Message.getWrapperField(this, proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams, 10));
};


/**
 * @param {?proto.protos.ReadCLIConfig.ReadBackend.RabbitStreams|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.prototype.setRabbitStreams = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.clearRabbitStreams = function() {
  return this.setRabbitStreams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.hasRabbitStreams = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional MQTT mqtt = 11;
 * @return {?proto.protos.ReadCLIConfig.ReadBackend.MQTT}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.getMqtt = function() {
  return /** @type{?proto.protos.ReadCLIConfig.ReadBackend.MQTT} */ (
    jspb.Message.getWrapperField(this, proto.protos.ReadCLIConfig.ReadBackend.MQTT, 11));
};


/**
 * @param {?proto.protos.ReadCLIConfig.ReadBackend.MQTT|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.prototype.setMqtt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.clearMqtt = function() {
  return this.setMqtt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.hasMqtt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional AzureServiceBus azure_service_bus = 12;
 * @return {?proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.getAzureServiceBus = function() {
  return /** @type{?proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus} */ (
    jspb.Message.getWrapperField(this, proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus, 12));
};


/**
 * @param {?proto.protos.ReadCLIConfig.ReadBackend.AzureServiceBus|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.prototype.setAzureServiceBus = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.clearAzureServiceBus = function() {
  return this.setAzureServiceBus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.hasAzureServiceBus = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional AzureEventHub azure_event_hub = 13;
 * @return {?proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.getAzureEventHub = function() {
  return /** @type{?proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub} */ (
    jspb.Message.getWrapperField(this, proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub, 13));
};


/**
 * @param {?proto.protos.ReadCLIConfig.ReadBackend.AzureEventHub|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.prototype.setAzureEventHub = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.clearAzureEventHub = function() {
  return this.setAzureEventHub(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.hasAzureEventHub = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional GCPPubSub gcp_pubsub = 14;
 * @return {?proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.getGcpPubsub = function() {
  return /** @type{?proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub} */ (
    jspb.Message.getWrapperField(this, proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub, 14));
};


/**
 * @param {?proto.protos.ReadCLIConfig.ReadBackend.GCPPubSub|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.prototype.setGcpPubsub = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.clearGcpPubsub = function() {
  return this.setGcpPubsub(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.hasGcpPubsub = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional KubeMQQueue kubemq_queue = 15;
 * @return {?proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.getKubemqQueue = function() {
  return /** @type{?proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue} */ (
    jspb.Message.getWrapperField(this, proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue, 15));
};


/**
 * @param {?proto.protos.ReadCLIConfig.ReadBackend.KubeMQQueue|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.prototype.setKubemqQueue = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.clearKubemqQueue = function() {
  return this.setKubemqQueue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.hasKubemqQueue = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional RedisPubSub redis_pubsub = 16;
 * @return {?proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.getRedisPubsub = function() {
  return /** @type{?proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub} */ (
    jspb.Message.getWrapperField(this, proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub, 16));
};


/**
 * @param {?proto.protos.ReadCLIConfig.ReadBackend.RedisPubSub|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.prototype.setRedisPubsub = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.clearRedisPubsub = function() {
  return this.setRedisPubsub(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.hasRedisPubsub = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional RedisStreams redis_streams = 17;
 * @return {?proto.protos.ReadCLIConfig.ReadBackend.RedisStreams}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.getRedisStreams = function() {
  return /** @type{?proto.protos.ReadCLIConfig.ReadBackend.RedisStreams} */ (
    jspb.Message.getWrapperField(this, proto.protos.ReadCLIConfig.ReadBackend.RedisStreams, 17));
};


/**
 * @param {?proto.protos.ReadCLIConfig.ReadBackend.RedisStreams|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.prototype.setRedisStreams = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.clearRedisStreams = function() {
  return this.setRedisStreams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.hasRedisStreams = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional Postgres postgres = 18;
 * @return {?proto.protos.ReadCLIConfig.ReadBackend.Postgres}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.getPostgres = function() {
  return /** @type{?proto.protos.ReadCLIConfig.ReadBackend.Postgres} */ (
    jspb.Message.getWrapperField(this, proto.protos.ReadCLIConfig.ReadBackend.Postgres, 18));
};


/**
 * @param {?proto.protos.ReadCLIConfig.ReadBackend.Postgres|undefined} value
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
*/
proto.protos.ReadCLIConfig.ReadBackend.prototype.setPostgres = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig.ReadBackend} returns this
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.clearPostgres = function() {
  return this.setPostgres(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.ReadBackend.prototype.hasPostgres = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional bool display_offset_stats = 1;
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.prototype.getDisplayOffsetStats = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protos.ReadCLIConfig} returns this
 */
proto.protos.ReadCLIConfig.prototype.setDisplayOffsetStats = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated ConvertOption convert_output = 2;
 * @return {!Array<!proto.protos.ConvertOption>}
 */
proto.protos.ReadCLIConfig.prototype.getConvertOutputList = function() {
  return /** @type {!Array<!proto.protos.ConvertOption>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.protos.ConvertOption>} value
 * @return {!proto.protos.ReadCLIConfig} returns this
 */
proto.protos.ReadCLIConfig.prototype.setConvertOutputList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.protos.ConvertOption} value
 * @param {number=} opt_index
 * @return {!proto.protos.ReadCLIConfig} returns this
 */
proto.protos.ReadCLIConfig.prototype.addConvertOutput = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protos.ReadCLIConfig} returns this
 */
proto.protos.ReadCLIConfig.prototype.clearConvertOutputList = function() {
  return this.setConvertOutputList([]);
};


/**
 * optional bool verbose_output = 3;
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.prototype.getVerboseOutput = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protos.ReadCLIConfig} returns this
 */
proto.protos.ReadCLIConfig.prototype.setVerboseOutput = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool stats_enable = 4;
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.prototype.getStatsEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protos.ReadCLIConfig} returns this
 */
proto.protos.ReadCLIConfig.prototype.setStatsEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int32 stats_report_interval_sec = 5;
 * @return {number}
 */
proto.protos.ReadCLIConfig.prototype.getStatsReportIntervalSec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.protos.ReadCLIConfig} returns this
 */
proto.protos.ReadCLIConfig.prototype.setStatsReportIntervalSec = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional backends.Type _backend_type = 6;
 * @return {!proto.protos.backends.Type}
 */
proto.protos.ReadCLIConfig.prototype.getBackendType = function() {
  return /** @type {!proto.protos.backends.Type} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.protos.backends.Type} value
 * @return {!proto.protos.ReadCLIConfig} returns this
 */
proto.protos.ReadCLIConfig.prototype.setBackendType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional ReadBackend _read_backend = 7;
 * @return {?proto.protos.ReadCLIConfig.ReadBackend}
 */
proto.protos.ReadCLIConfig.prototype.getReadBackend = function() {
  return /** @type{?proto.protos.ReadCLIConfig.ReadBackend} */ (
    jspb.Message.getWrapperField(this, proto.protos.ReadCLIConfig.ReadBackend, 7));
};


/**
 * @param {?proto.protos.ReadCLIConfig.ReadBackend|undefined} value
 * @return {!proto.protos.ReadCLIConfig} returns this
*/
proto.protos.ReadCLIConfig.prototype.setReadBackend = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadCLIConfig} returns this
 */
proto.protos.ReadCLIConfig.prototype.clearReadBackend = function() {
  return this.setReadBackend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadCLIConfig.prototype.hasReadBackend = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ReadConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ReadConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ReadConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    connectionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    continuous: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    sampleOptions: (f = msg.getSampleOptions()) && proto.protos.ReadSampleOptions.toObject(includeInstance, f),
    decodeOptions: (f = msg.getDecodeOptions()) && encoding_options_pb.DecodeOptions.toObject(includeInstance, f),
    id: jspb.Message.getFieldWithDefault(msg, 1000, ""),
    active: jspb.Message.getBooleanFieldWithDefault(msg, 1001, false),
    cliConfig: (f = msg.getCliConfig()) && proto.protos.ReadCLIConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ReadConfig}
 */
proto.protos.ReadConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ReadConfig;
  return proto.protos.ReadConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ReadConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ReadConfig}
 */
proto.protos.ReadConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionId(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setContinuous(value);
      break;
    case 4:
      var value = new proto.protos.ReadSampleOptions;
      reader.readMessage(value,proto.protos.ReadSampleOptions.deserializeBinaryFromReader);
      msg.setSampleOptions(value);
      break;
    case 5:
      var value = new encoding_options_pb.DecodeOptions;
      reader.readMessage(value,encoding_options_pb.DecodeOptions.deserializeBinaryFromReader);
      msg.setDecodeOptions(value);
      break;
    case 1000:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 1002:
      var value = new proto.protos.ReadCLIConfig;
      reader.readMessage(value,proto.protos.ReadCLIConfig.deserializeBinaryFromReader);
      msg.setCliConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ReadConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ReadConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ReadConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReadConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConnectionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContinuous();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getSampleOptions();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.protos.ReadSampleOptions.serializeBinaryToWriter
    );
  }
  f = message.getDecodeOptions();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      encoding_options_pb.DecodeOptions.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1000,
      f
    );
  }
  f = message.getActive();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = message.getCliConfig();
  if (f != null) {
    writer.writeMessage(
      1002,
      f,
      proto.protos.ReadCLIConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.protos.ReadConfig.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.ReadConfig} returns this
 */
proto.protos.ReadConfig.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string connection_id = 2;
 * @return {string}
 */
proto.protos.ReadConfig.prototype.getConnectionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.ReadConfig} returns this
 */
proto.protos.ReadConfig.prototype.setConnectionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool continuous = 3;
 * @return {boolean}
 */
proto.protos.ReadConfig.prototype.getContinuous = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protos.ReadConfig} returns this
 */
proto.protos.ReadConfig.prototype.setContinuous = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional ReadSampleOptions sample_options = 4;
 * @return {?proto.protos.ReadSampleOptions}
 */
proto.protos.ReadConfig.prototype.getSampleOptions = function() {
  return /** @type{?proto.protos.ReadSampleOptions} */ (
    jspb.Message.getWrapperField(this, proto.protos.ReadSampleOptions, 4));
};


/**
 * @param {?proto.protos.ReadSampleOptions|undefined} value
 * @return {!proto.protos.ReadConfig} returns this
*/
proto.protos.ReadConfig.prototype.setSampleOptions = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadConfig} returns this
 */
proto.protos.ReadConfig.prototype.clearSampleOptions = function() {
  return this.setSampleOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadConfig.prototype.hasSampleOptions = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional encoding.DecodeOptions decode_options = 5;
 * @return {?proto.protos.encoding.DecodeOptions}
 */
proto.protos.ReadConfig.prototype.getDecodeOptions = function() {
  return /** @type{?proto.protos.encoding.DecodeOptions} */ (
    jspb.Message.getWrapperField(this, encoding_options_pb.DecodeOptions, 5));
};


/**
 * @param {?proto.protos.encoding.DecodeOptions|undefined} value
 * @return {!proto.protos.ReadConfig} returns this
*/
proto.protos.ReadConfig.prototype.setDecodeOptions = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadConfig} returns this
 */
proto.protos.ReadConfig.prototype.clearDecodeOptions = function() {
  return this.setDecodeOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadConfig.prototype.hasDecodeOptions = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string _id = 1000;
 * @return {string}
 */
proto.protos.ReadConfig.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1000, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.ReadConfig} returns this
 */
proto.protos.ReadConfig.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1000, value);
};


/**
 * optional bool _active = 1001;
 * @return {boolean}
 */
proto.protos.ReadConfig.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1001, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protos.ReadConfig} returns this
 */
proto.protos.ReadConfig.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1001, value);
};


/**
 * optional ReadCLIConfig _cli_config = 1002;
 * @return {?proto.protos.ReadCLIConfig}
 */
proto.protos.ReadConfig.prototype.getCliConfig = function() {
  return /** @type{?proto.protos.ReadCLIConfig} */ (
    jspb.Message.getWrapperField(this, proto.protos.ReadCLIConfig, 1002));
};


/**
 * @param {?proto.protos.ReadCLIConfig|undefined} value
 * @return {!proto.protos.ReadConfig} returns this
*/
proto.protos.ReadConfig.prototype.setCliConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1002, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ReadConfig} returns this
 */
proto.protos.ReadConfig.prototype.clearCliConfig = function() {
  return this.setCliConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ReadConfig.prototype.hasCliConfig = function() {
  return jspb.Message.getField(this, 1002) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.CreateReadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.CreateReadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.CreateReadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CreateReadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && common_auth_pb.Auth.toObject(includeInstance, f),
    config: (f = msg.getConfig()) && proto.protos.ReadConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.CreateReadRequest}
 */
proto.protos.CreateReadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.CreateReadRequest;
  return proto.protos.CreateReadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.CreateReadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.CreateReadRequest}
 */
proto.protos.CreateReadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9999:
      var value = new common_auth_pb.Auth;
      reader.readMessage(value,common_auth_pb.Auth.deserializeBinaryFromReader);
      msg.setAuth(value);
      break;
    case 1:
      var value = new proto.protos.ReadConfig;
      reader.readMessage(value,proto.protos.ReadConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.CreateReadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.CreateReadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.CreateReadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CreateReadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      9999,
      f,
      common_auth_pb.Auth.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protos.ReadConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional common.Auth auth = 9999;
 * @return {?proto.protos.common.Auth}
 */
proto.protos.CreateReadRequest.prototype.getAuth = function() {
  return /** @type{?proto.protos.common.Auth} */ (
    jspb.Message.getWrapperField(this, common_auth_pb.Auth, 9999));
};


/**
 * @param {?proto.protos.common.Auth|undefined} value
 * @return {!proto.protos.CreateReadRequest} returns this
*/
proto.protos.CreateReadRequest.prototype.setAuth = function(value) {
  return jspb.Message.setWrapperField(this, 9999, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CreateReadRequest} returns this
 */
proto.protos.CreateReadRequest.prototype.clearAuth = function() {
  return this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CreateReadRequest.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 9999) != null;
};


/**
 * optional ReadConfig config = 1;
 * @return {?proto.protos.ReadConfig}
 */
proto.protos.CreateReadRequest.prototype.getConfig = function() {
  return /** @type{?proto.protos.ReadConfig} */ (
    jspb.Message.getWrapperField(this, proto.protos.ReadConfig, 1));
};


/**
 * @param {?proto.protos.ReadConfig|undefined} value
 * @return {!proto.protos.CreateReadRequest} returns this
*/
proto.protos.CreateReadRequest.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CreateReadRequest} returns this
 */
proto.protos.CreateReadRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CreateReadRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.CreateReadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.CreateReadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.CreateReadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CreateReadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && common_status_pb.Status.toObject(includeInstance, f),
    readId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.CreateReadResponse}
 */
proto.protos.CreateReadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.CreateReadResponse;
  return proto.protos.CreateReadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.CreateReadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.CreateReadResponse}
 */
proto.protos.CreateReadResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1000:
      var value = new common_status_pb.Status;
      reader.readMessage(value,common_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReadId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.CreateReadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.CreateReadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.CreateReadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CreateReadResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      common_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getReadId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional common.Status status = 1000;
 * @return {?proto.protos.common.Status}
 */
proto.protos.CreateReadResponse.prototype.getStatus = function() {
  return /** @type{?proto.protos.common.Status} */ (
    jspb.Message.getWrapperField(this, common_status_pb.Status, 1000));
};


/**
 * @param {?proto.protos.common.Status|undefined} value
 * @return {!proto.protos.CreateReadResponse} returns this
*/
proto.protos.CreateReadResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CreateReadResponse} returns this
 */
proto.protos.CreateReadResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CreateReadResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1000) != null;
};


/**
 * optional string read_id = 1;
 * @return {string}
 */
proto.protos.CreateReadResponse.prototype.getReadId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.CreateReadResponse} returns this
 */
proto.protos.CreateReadResponse.prototype.setReadId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.StopReadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.StopReadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.StopReadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.StopReadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && common_auth_pb.Auth.toObject(includeInstance, f),
    readId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.StopReadRequest}
 */
proto.protos.StopReadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.StopReadRequest;
  return proto.protos.StopReadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.StopReadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.StopReadRequest}
 */
proto.protos.StopReadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9999:
      var value = new common_auth_pb.Auth;
      reader.readMessage(value,common_auth_pb.Auth.deserializeBinaryFromReader);
      msg.setAuth(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReadId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.StopReadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.StopReadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.StopReadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.StopReadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      9999,
      f,
      common_auth_pb.Auth.serializeBinaryToWriter
    );
  }
  f = message.getReadId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional common.Auth auth = 9999;
 * @return {?proto.protos.common.Auth}
 */
proto.protos.StopReadRequest.prototype.getAuth = function() {
  return /** @type{?proto.protos.common.Auth} */ (
    jspb.Message.getWrapperField(this, common_auth_pb.Auth, 9999));
};


/**
 * @param {?proto.protos.common.Auth|undefined} value
 * @return {!proto.protos.StopReadRequest} returns this
*/
proto.protos.StopReadRequest.prototype.setAuth = function(value) {
  return jspb.Message.setWrapperField(this, 9999, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.StopReadRequest} returns this
 */
proto.protos.StopReadRequest.prototype.clearAuth = function() {
  return this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.StopReadRequest.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 9999) != null;
};


/**
 * optional string read_id = 1;
 * @return {string}
 */
proto.protos.StopReadRequest.prototype.getReadId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.StopReadRequest} returns this
 */
proto.protos.StopReadRequest.prototype.setReadId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.StopReadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.StopReadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.StopReadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.StopReadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && common_status_pb.Status.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.StopReadResponse}
 */
proto.protos.StopReadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.StopReadResponse;
  return proto.protos.StopReadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.StopReadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.StopReadResponse}
 */
proto.protos.StopReadResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1000:
      var value = new common_status_pb.Status;
      reader.readMessage(value,common_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.StopReadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.StopReadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.StopReadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.StopReadResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      common_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional common.Status status = 1000;
 * @return {?proto.protos.common.Status}
 */
proto.protos.StopReadResponse.prototype.getStatus = function() {
  return /** @type{?proto.protos.common.Status} */ (
    jspb.Message.getWrapperField(this, common_status_pb.Status, 1000));
};


/**
 * @param {?proto.protos.common.Status|undefined} value
 * @return {!proto.protos.StopReadResponse} returns this
*/
proto.protos.StopReadResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.StopReadResponse} returns this
 */
proto.protos.StopReadResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.StopReadResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ResumeReadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ResumeReadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ResumeReadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ResumeReadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && common_auth_pb.Auth.toObject(includeInstance, f),
    readId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ResumeReadRequest}
 */
proto.protos.ResumeReadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ResumeReadRequest;
  return proto.protos.ResumeReadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ResumeReadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ResumeReadRequest}
 */
proto.protos.ResumeReadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9999:
      var value = new common_auth_pb.Auth;
      reader.readMessage(value,common_auth_pb.Auth.deserializeBinaryFromReader);
      msg.setAuth(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReadId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ResumeReadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ResumeReadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ResumeReadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ResumeReadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      9999,
      f,
      common_auth_pb.Auth.serializeBinaryToWriter
    );
  }
  f = message.getReadId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional common.Auth auth = 9999;
 * @return {?proto.protos.common.Auth}
 */
proto.protos.ResumeReadRequest.prototype.getAuth = function() {
  return /** @type{?proto.protos.common.Auth} */ (
    jspb.Message.getWrapperField(this, common_auth_pb.Auth, 9999));
};


/**
 * @param {?proto.protos.common.Auth|undefined} value
 * @return {!proto.protos.ResumeReadRequest} returns this
*/
proto.protos.ResumeReadRequest.prototype.setAuth = function(value) {
  return jspb.Message.setWrapperField(this, 9999, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ResumeReadRequest} returns this
 */
proto.protos.ResumeReadRequest.prototype.clearAuth = function() {
  return this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ResumeReadRequest.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 9999) != null;
};


/**
 * optional string read_id = 1;
 * @return {string}
 */
proto.protos.ResumeReadRequest.prototype.getReadId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.ResumeReadRequest} returns this
 */
proto.protos.ResumeReadRequest.prototype.setReadId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ResumeReadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ResumeReadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ResumeReadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ResumeReadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && common_status_pb.Status.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.ResumeReadResponse}
 */
proto.protos.ResumeReadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ResumeReadResponse;
  return proto.protos.ResumeReadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ResumeReadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ResumeReadResponse}
 */
proto.protos.ResumeReadResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1000:
      var value = new common_status_pb.Status;
      reader.readMessage(value,common_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.ResumeReadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ResumeReadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ResumeReadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ResumeReadResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      common_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional common.Status status = 1000;
 * @return {?proto.protos.common.Status}
 */
proto.protos.ResumeReadResponse.prototype.getStatus = function() {
  return /** @type{?proto.protos.common.Status} */ (
    jspb.Message.getWrapperField(this, common_status_pb.Status, 1000));
};


/**
 * @param {?proto.protos.common.Status|undefined} value
 * @return {!proto.protos.ResumeReadResponse} returns this
*/
proto.protos.ResumeReadResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ResumeReadResponse} returns this
 */
proto.protos.ResumeReadResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ResumeReadResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.DeleteReadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.DeleteReadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.DeleteReadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.DeleteReadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && common_auth_pb.Auth.toObject(includeInstance, f),
    readId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.DeleteReadRequest}
 */
proto.protos.DeleteReadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.DeleteReadRequest;
  return proto.protos.DeleteReadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.DeleteReadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.DeleteReadRequest}
 */
proto.protos.DeleteReadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9999:
      var value = new common_auth_pb.Auth;
      reader.readMessage(value,common_auth_pb.Auth.deserializeBinaryFromReader);
      msg.setAuth(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReadId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.DeleteReadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.DeleteReadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.DeleteReadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.DeleteReadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      9999,
      f,
      common_auth_pb.Auth.serializeBinaryToWriter
    );
  }
  f = message.getReadId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional common.Auth auth = 9999;
 * @return {?proto.protos.common.Auth}
 */
proto.protos.DeleteReadRequest.prototype.getAuth = function() {
  return /** @type{?proto.protos.common.Auth} */ (
    jspb.Message.getWrapperField(this, common_auth_pb.Auth, 9999));
};


/**
 * @param {?proto.protos.common.Auth|undefined} value
 * @return {!proto.protos.DeleteReadRequest} returns this
*/
proto.protos.DeleteReadRequest.prototype.setAuth = function(value) {
  return jspb.Message.setWrapperField(this, 9999, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.DeleteReadRequest} returns this
 */
proto.protos.DeleteReadRequest.prototype.clearAuth = function() {
  return this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.DeleteReadRequest.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 9999) != null;
};


/**
 * optional string read_id = 1;
 * @return {string}
 */
proto.protos.DeleteReadRequest.prototype.getReadId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.DeleteReadRequest} returns this
 */
proto.protos.DeleteReadRequest.prototype.setReadId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.DeleteReadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.DeleteReadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.DeleteReadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.DeleteReadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && common_status_pb.Status.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.DeleteReadResponse}
 */
proto.protos.DeleteReadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.DeleteReadResponse;
  return proto.protos.DeleteReadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.DeleteReadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.DeleteReadResponse}
 */
proto.protos.DeleteReadResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1000:
      var value = new common_status_pb.Status;
      reader.readMessage(value,common_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.DeleteReadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.DeleteReadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.DeleteReadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.DeleteReadResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      common_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional common.Status status = 1000;
 * @return {?proto.protos.common.Status}
 */
proto.protos.DeleteReadResponse.prototype.getStatus = function() {
  return /** @type{?proto.protos.common.Status} */ (
    jspb.Message.getWrapperField(this, common_status_pb.Status, 1000));
};


/**
 * @param {?proto.protos.common.Status|undefined} value
 * @return {!proto.protos.DeleteReadResponse} returns this
*/
proto.protos.DeleteReadResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.DeleteReadResponse} returns this
 */
proto.protos.DeleteReadResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.DeleteReadResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.StartReadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.StartReadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.StartReadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.StartReadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && common_auth_pb.Auth.toObject(includeInstance, f),
    readId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.StartReadRequest}
 */
proto.protos.StartReadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.StartReadRequest;
  return proto.protos.StartReadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.StartReadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.StartReadRequest}
 */
proto.protos.StartReadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9999:
      var value = new common_auth_pb.Auth;
      reader.readMessage(value,common_auth_pb.Auth.deserializeBinaryFromReader);
      msg.setAuth(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReadId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.StartReadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.StartReadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.StartReadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.StartReadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      9999,
      f,
      common_auth_pb.Auth.serializeBinaryToWriter
    );
  }
  f = message.getReadId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional common.Auth auth = 9999;
 * @return {?proto.protos.common.Auth}
 */
proto.protos.StartReadRequest.prototype.getAuth = function() {
  return /** @type{?proto.protos.common.Auth} */ (
    jspb.Message.getWrapperField(this, common_auth_pb.Auth, 9999));
};


/**
 * @param {?proto.protos.common.Auth|undefined} value
 * @return {!proto.protos.StartReadRequest} returns this
*/
proto.protos.StartReadRequest.prototype.setAuth = function(value) {
  return jspb.Message.setWrapperField(this, 9999, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.StartReadRequest} returns this
 */
proto.protos.StartReadRequest.prototype.clearAuth = function() {
  return this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.StartReadRequest.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 9999) != null;
};


/**
 * optional string read_id = 1;
 * @return {string}
 */
proto.protos.StartReadRequest.prototype.getReadId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.StartReadRequest} returns this
 */
proto.protos.StartReadRequest.prototype.setReadId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protos.StartReadResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.StartReadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.StartReadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.StartReadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.StartReadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    records_base_pb.ReadRecord.toObject, includeInstance),
    status: (f = msg.getStatus()) && common_status_pb.Status.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.StartReadResponse}
 */
proto.protos.StartReadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.StartReadResponse;
  return proto.protos.StartReadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.StartReadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.StartReadResponse}
 */
proto.protos.StartReadResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new records_base_pb.ReadRecord;
      reader.readMessage(value,records_base_pb.ReadRecord.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    case 1000:
      var value = new common_status_pb.Status;
      reader.readMessage(value,common_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.StartReadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.StartReadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.StartReadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.StartReadResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      records_base_pb.ReadRecord.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      common_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * repeated records.ReadRecord records = 1;
 * @return {!Array<!proto.protos.records.ReadRecord>}
 */
proto.protos.StartReadResponse.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.protos.records.ReadRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, records_base_pb.ReadRecord, 1));
};


/**
 * @param {!Array<!proto.protos.records.ReadRecord>} value
 * @return {!proto.protos.StartReadResponse} returns this
*/
proto.protos.StartReadResponse.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protos.records.ReadRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protos.records.ReadRecord}
 */
proto.protos.StartReadResponse.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protos.records.ReadRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protos.StartReadResponse} returns this
 */
proto.protos.StartReadResponse.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};


/**
 * optional common.Status status = 1000;
 * @return {?proto.protos.common.Status}
 */
proto.protos.StartReadResponse.prototype.getStatus = function() {
  return /** @type{?proto.protos.common.Status} */ (
    jspb.Message.getWrapperField(this, common_status_pb.Status, 1000));
};


/**
 * @param {?proto.protos.common.Status|undefined} value
 * @return {!proto.protos.StartReadResponse} returns this
*/
proto.protos.StartReadResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.StartReadResponse} returns this
 */
proto.protos.StartReadResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.StartReadResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.GetAllReadsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.GetAllReadsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.GetAllReadsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.GetAllReadsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && common_auth_pb.Auth.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.GetAllReadsRequest}
 */
proto.protos.GetAllReadsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.GetAllReadsRequest;
  return proto.protos.GetAllReadsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.GetAllReadsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.GetAllReadsRequest}
 */
proto.protos.GetAllReadsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9999:
      var value = new common_auth_pb.Auth;
      reader.readMessage(value,common_auth_pb.Auth.deserializeBinaryFromReader);
      msg.setAuth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.GetAllReadsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.GetAllReadsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.GetAllReadsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.GetAllReadsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      9999,
      f,
      common_auth_pb.Auth.serializeBinaryToWriter
    );
  }
};


/**
 * optional common.Auth auth = 9999;
 * @return {?proto.protos.common.Auth}
 */
proto.protos.GetAllReadsRequest.prototype.getAuth = function() {
  return /** @type{?proto.protos.common.Auth} */ (
    jspb.Message.getWrapperField(this, common_auth_pb.Auth, 9999));
};


/**
 * @param {?proto.protos.common.Auth|undefined} value
 * @return {!proto.protos.GetAllReadsRequest} returns this
*/
proto.protos.GetAllReadsRequest.prototype.setAuth = function(value) {
  return jspb.Message.setWrapperField(this, 9999, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.GetAllReadsRequest} returns this
 */
proto.protos.GetAllReadsRequest.prototype.clearAuth = function() {
  return this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.GetAllReadsRequest.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 9999) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protos.GetAllReadsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.GetAllReadsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.GetAllReadsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.GetAllReadsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.GetAllReadsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    readList: jspb.Message.toObjectList(msg.getReadList(),
    proto.protos.ReadConfig.toObject, includeInstance),
    status: (f = msg.getStatus()) && common_status_pb.Status.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.GetAllReadsResponse}
 */
proto.protos.GetAllReadsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.GetAllReadsResponse;
  return proto.protos.GetAllReadsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.GetAllReadsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.GetAllReadsResponse}
 */
proto.protos.GetAllReadsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protos.ReadConfig;
      reader.readMessage(value,proto.protos.ReadConfig.deserializeBinaryFromReader);
      msg.addRead(value);
      break;
    case 1000:
      var value = new common_status_pb.Status;
      reader.readMessage(value,common_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.GetAllReadsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.GetAllReadsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.GetAllReadsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.GetAllReadsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReadList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protos.ReadConfig.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      common_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ReadConfig read = 1;
 * @return {!Array<!proto.protos.ReadConfig>}
 */
proto.protos.GetAllReadsResponse.prototype.getReadList = function() {
  return /** @type{!Array<!proto.protos.ReadConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protos.ReadConfig, 1));
};


/**
 * @param {!Array<!proto.protos.ReadConfig>} value
 * @return {!proto.protos.GetAllReadsResponse} returns this
*/
proto.protos.GetAllReadsResponse.prototype.setReadList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protos.ReadConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protos.ReadConfig}
 */
proto.protos.GetAllReadsResponse.prototype.addRead = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protos.ReadConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protos.GetAllReadsResponse} returns this
 */
proto.protos.GetAllReadsResponse.prototype.clearReadList = function() {
  return this.setReadList([]);
};


/**
 * optional common.Status status = 1000;
 * @return {?proto.protos.common.Status}
 */
proto.protos.GetAllReadsResponse.prototype.getStatus = function() {
  return /** @type{?proto.protos.common.Status} */ (
    jspb.Message.getWrapperField(this, common_status_pb.Status, 1000));
};


/**
 * @param {?proto.protos.common.Status|undefined} value
 * @return {!proto.protos.GetAllReadsResponse} returns this
*/
proto.protos.GetAllReadsResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.GetAllReadsResponse} returns this
 */
proto.protos.GetAllReadsResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.GetAllReadsResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1000) != null;
};


/**
 * @enum {number}
 */
proto.protos.ConvertOption = {
  UNSET: 0,
  BASE64: 1,
  GZIP: 2
};

goog.object.extend(exports, proto.protos);
