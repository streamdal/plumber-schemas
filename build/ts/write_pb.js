// source: write.proto
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

var records_kafka_pb = require('./records/kafka_pb.js');
goog.object.extend(proto, records_kafka_pb);
var common_auth_pb = require('./common/auth_pb.js');
goog.object.extend(proto, common_auth_pb);
var records_base_pb = require('./records/base_pb.js');
goog.object.extend(proto, records_base_pb);
var common_status_pb = require('./common/status_pb.js');
goog.object.extend(proto, common_status_pb);
var encoding_options_pb = require('./encoding/options_pb.js');
goog.object.extend(proto, encoding_options_pb);
var backends_backends_pb = require('./backends/backends_pb.js');
goog.object.extend(proto, backends_backends_pb);
var backends_activemq_pb = require('./backends/activemq_pb.js');
goog.object.extend(proto, backends_activemq_pb);
var backends_azure$service$bus_pb = require('./backends/azure-service-bus_pb.js');
goog.object.extend(proto, backends_azure$service$bus_pb);
var backends_azure$event$hub_pb = require('./backends/azure-event-hub_pb.js');
goog.object.extend(proto, backends_azure$event$hub_pb);
var backends_aws$sns_pb = require('./backends/aws-sns_pb.js');
goog.object.extend(proto, backends_aws$sns_pb);
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
goog.exportSymbol('proto.protos.InputType', null, global);
goog.exportSymbol('proto.protos.WriteCLIConfig', null, global);
goog.exportSymbol('proto.protos.WriteCLIConfig.WriteBackend', null, global);
goog.exportSymbol('proto.protos.WriteCLIConfig.WriteBackend.AWSSNS', null, global);
goog.exportSymbol('proto.protos.WriteCLIConfig.WriteBackend.AWSSQS', null, global);
goog.exportSymbol('proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ', null, global);
goog.exportSymbol('proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub', null, global);
goog.exportSymbol('proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus', null, global);
goog.exportSymbol('proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub', null, global);
goog.exportSymbol('proto.protos.WriteCLIConfig.WriteBackend.Kafka', null, global);
goog.exportSymbol('proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue', null, global);
goog.exportSymbol('proto.protos.WriteCLIConfig.WriteBackend.MQTT', null, global);
goog.exportSymbol('proto.protos.WriteCLIConfig.WriteBackend.NSQ', null, global);
goog.exportSymbol('proto.protos.WriteCLIConfig.WriteBackend.Nats', null, global);
goog.exportSymbol('proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming', null, global);
goog.exportSymbol('proto.protos.WriteCLIConfig.WriteBackend.Pulsar', null, global);
goog.exportSymbol('proto.protos.WriteCLIConfig.WriteBackend.Rabbit', null, global);
goog.exportSymbol('proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams', null, global);
goog.exportSymbol('proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub', null, global);
goog.exportSymbol('proto.protos.WriteCLIConfig.WriteBackend.RedisStreams', null, global);
goog.exportSymbol('proto.protos.WriteConfig', null, global);
goog.exportSymbol('proto.protos.WriteRequest', null, global);
goog.exportSymbol('proto.protos.WriteResponse', null, global);
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
proto.protos.WriteCLIConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.WriteCLIConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.WriteCLIConfig.displayName = 'proto.protos.WriteCLIConfig';
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
proto.protos.WriteCLIConfig.WriteBackend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.WriteCLIConfig.WriteBackend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.WriteCLIConfig.WriteBackend.displayName = 'proto.protos.WriteCLIConfig.WriteBackend';
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
proto.protos.WriteCLIConfig.WriteBackend.Kafka = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.WriteCLIConfig.WriteBackend.Kafka, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.WriteCLIConfig.WriteBackend.Kafka.displayName = 'proto.protos.WriteCLIConfig.WriteBackend.Kafka';
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
proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ.displayName = 'proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ';
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
proto.protos.WriteCLIConfig.WriteBackend.AWSSQS = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.WriteCLIConfig.WriteBackend.AWSSQS, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.WriteCLIConfig.WriteBackend.AWSSQS.displayName = 'proto.protos.WriteCLIConfig.WriteBackend.AWSSQS';
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
proto.protos.WriteCLIConfig.WriteBackend.AWSSNS = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.WriteCLIConfig.WriteBackend.AWSSNS, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.WriteCLIConfig.WriteBackend.AWSSNS.displayName = 'proto.protos.WriteCLIConfig.WriteBackend.AWSSNS';
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
proto.protos.WriteCLIConfig.WriteBackend.Nats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.WriteCLIConfig.WriteBackend.Nats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.WriteCLIConfig.WriteBackend.Nats.displayName = 'proto.protos.WriteCLIConfig.WriteBackend.Nats';
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
proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming.displayName = 'proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming';
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
proto.protos.WriteCLIConfig.WriteBackend.NSQ = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.WriteCLIConfig.WriteBackend.NSQ, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.WriteCLIConfig.WriteBackend.NSQ.displayName = 'proto.protos.WriteCLIConfig.WriteBackend.NSQ';
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
proto.protos.WriteCLIConfig.WriteBackend.Pulsar = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.WriteCLIConfig.WriteBackend.Pulsar, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.WriteCLIConfig.WriteBackend.Pulsar.displayName = 'proto.protos.WriteCLIConfig.WriteBackend.Pulsar';
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
proto.protos.WriteCLIConfig.WriteBackend.Rabbit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.WriteCLIConfig.WriteBackend.Rabbit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.WriteCLIConfig.WriteBackend.Rabbit.displayName = 'proto.protos.WriteCLIConfig.WriteBackend.Rabbit';
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
proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams.displayName = 'proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams';
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
proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub.displayName = 'proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub';
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
proto.protos.WriteCLIConfig.WriteBackend.RedisStreams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.WriteCLIConfig.WriteBackend.RedisStreams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.WriteCLIConfig.WriteBackend.RedisStreams.displayName = 'proto.protos.WriteCLIConfig.WriteBackend.RedisStreams';
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
proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub.displayName = 'proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub';
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
proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus.displayName = 'proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus';
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
proto.protos.WriteCLIConfig.WriteBackend.MQTT = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.WriteCLIConfig.WriteBackend.MQTT, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.WriteCLIConfig.WriteBackend.MQTT.displayName = 'proto.protos.WriteCLIConfig.WriteBackend.MQTT';
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
proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub.displayName = 'proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub';
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
proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue.displayName = 'proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue';
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
proto.protos.WriteConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protos.WriteConfig.repeatedFields_, null);
};
goog.inherits(proto.protos.WriteConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.WriteConfig.displayName = 'proto.protos.WriteConfig';
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
proto.protos.WriteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.WriteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.WriteRequest.displayName = 'proto.protos.WriteRequest';
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
proto.protos.WriteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.WriteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.WriteResponse.displayName = 'proto.protos.WriteResponse';
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
proto.protos.WriteCLIConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.WriteCLIConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.WriteCLIConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    inputIsJsonArray: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    backendType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    writeBackend: (f = msg.getWriteBackend()) && proto.protos.WriteCLIConfig.WriteBackend.toObject(includeInstance, f)
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
 * @return {!proto.protos.WriteCLIConfig}
 */
proto.protos.WriteCLIConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.WriteCLIConfig;
  return proto.protos.WriteCLIConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.WriteCLIConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.WriteCLIConfig}
 */
proto.protos.WriteCLIConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInputIsJsonArray(value);
      break;
    case 2:
      var value = /** @type {!proto.protos.backends.Type} */ (reader.readEnum());
      msg.setBackendType(value);
      break;
    case 3:
      var value = new proto.protos.WriteCLIConfig.WriteBackend;
      reader.readMessage(value,proto.protos.WriteCLIConfig.WriteBackend.deserializeBinaryFromReader);
      msg.setWriteBackend(value);
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
proto.protos.WriteCLIConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.WriteCLIConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.WriteCLIConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInputIsJsonArray();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getBackendType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getWriteBackend();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.protos.WriteCLIConfig.WriteBackend.serializeBinaryToWriter
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
proto.protos.WriteCLIConfig.WriteBackend.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.WriteCLIConfig.WriteBackend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.WriteCLIConfig.WriteBackend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.toObject = function(includeInstance, msg) {
  var f, obj = {
    kafka: (f = msg.getKafka()) && proto.protos.WriteCLIConfig.WriteBackend.Kafka.toObject(includeInstance, f),
    activemq: (f = msg.getActivemq()) && proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ.toObject(includeInstance, f),
    awssqs: (f = msg.getAwssqs()) && proto.protos.WriteCLIConfig.WriteBackend.AWSSQS.toObject(includeInstance, f),
    awssns: (f = msg.getAwssns()) && proto.protos.WriteCLIConfig.WriteBackend.AWSSNS.toObject(includeInstance, f),
    nats: (f = msg.getNats()) && proto.protos.WriteCLIConfig.WriteBackend.Nats.toObject(includeInstance, f),
    natsStreaming: (f = msg.getNatsStreaming()) && proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming.toObject(includeInstance, f),
    nsq: (f = msg.getNsq()) && proto.protos.WriteCLIConfig.WriteBackend.NSQ.toObject(includeInstance, f),
    pulsar: (f = msg.getPulsar()) && proto.protos.WriteCLIConfig.WriteBackend.Pulsar.toObject(includeInstance, f),
    rabbit: (f = msg.getRabbit()) && proto.protos.WriteCLIConfig.WriteBackend.Rabbit.toObject(includeInstance, f),
    rabbitStreams: (f = msg.getRabbitStreams()) && proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams.toObject(includeInstance, f),
    mqtt: (f = msg.getMqtt()) && proto.protos.WriteCLIConfig.WriteBackend.MQTT.toObject(includeInstance, f),
    azureServiceBus: (f = msg.getAzureServiceBus()) && proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus.toObject(includeInstance, f),
    azureEventHub: (f = msg.getAzureEventHub()) && proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub.toObject(includeInstance, f),
    gcpPubsub: (f = msg.getGcpPubsub()) && proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub.toObject(includeInstance, f),
    kubemqQueue: (f = msg.getKubemqQueue()) && proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue.toObject(includeInstance, f),
    redisPubsub: (f = msg.getRedisPubsub()) && proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub.toObject(includeInstance, f),
    redisStreams: (f = msg.getRedisStreams()) && proto.protos.WriteCLIConfig.WriteBackend.RedisStreams.toObject(includeInstance, f)
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
 * @return {!proto.protos.WriteCLIConfig.WriteBackend}
 */
proto.protos.WriteCLIConfig.WriteBackend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.WriteCLIConfig.WriteBackend;
  return proto.protos.WriteCLIConfig.WriteBackend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend}
 */
proto.protos.WriteCLIConfig.WriteBackend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protos.WriteCLIConfig.WriteBackend.Kafka;
      reader.readMessage(value,proto.protos.WriteCLIConfig.WriteBackend.Kafka.deserializeBinaryFromReader);
      msg.setKafka(value);
      break;
    case 2:
      var value = new proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ;
      reader.readMessage(value,proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ.deserializeBinaryFromReader);
      msg.setActivemq(value);
      break;
    case 3:
      var value = new proto.protos.WriteCLIConfig.WriteBackend.AWSSQS;
      reader.readMessage(value,proto.protos.WriteCLIConfig.WriteBackend.AWSSQS.deserializeBinaryFromReader);
      msg.setAwssqs(value);
      break;
    case 4:
      var value = new proto.protos.WriteCLIConfig.WriteBackend.AWSSNS;
      reader.readMessage(value,proto.protos.WriteCLIConfig.WriteBackend.AWSSNS.deserializeBinaryFromReader);
      msg.setAwssns(value);
      break;
    case 5:
      var value = new proto.protos.WriteCLIConfig.WriteBackend.Nats;
      reader.readMessage(value,proto.protos.WriteCLIConfig.WriteBackend.Nats.deserializeBinaryFromReader);
      msg.setNats(value);
      break;
    case 6:
      var value = new proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming;
      reader.readMessage(value,proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming.deserializeBinaryFromReader);
      msg.setNatsStreaming(value);
      break;
    case 7:
      var value = new proto.protos.WriteCLIConfig.WriteBackend.NSQ;
      reader.readMessage(value,proto.protos.WriteCLIConfig.WriteBackend.NSQ.deserializeBinaryFromReader);
      msg.setNsq(value);
      break;
    case 8:
      var value = new proto.protos.WriteCLIConfig.WriteBackend.Pulsar;
      reader.readMessage(value,proto.protos.WriteCLIConfig.WriteBackend.Pulsar.deserializeBinaryFromReader);
      msg.setPulsar(value);
      break;
    case 9:
      var value = new proto.protos.WriteCLIConfig.WriteBackend.Rabbit;
      reader.readMessage(value,proto.protos.WriteCLIConfig.WriteBackend.Rabbit.deserializeBinaryFromReader);
      msg.setRabbit(value);
      break;
    case 10:
      var value = new proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams;
      reader.readMessage(value,proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams.deserializeBinaryFromReader);
      msg.setRabbitStreams(value);
      break;
    case 11:
      var value = new proto.protos.WriteCLIConfig.WriteBackend.MQTT;
      reader.readMessage(value,proto.protos.WriteCLIConfig.WriteBackend.MQTT.deserializeBinaryFromReader);
      msg.setMqtt(value);
      break;
    case 12:
      var value = new proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus;
      reader.readMessage(value,proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus.deserializeBinaryFromReader);
      msg.setAzureServiceBus(value);
      break;
    case 13:
      var value = new proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub;
      reader.readMessage(value,proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub.deserializeBinaryFromReader);
      msg.setAzureEventHub(value);
      break;
    case 14:
      var value = new proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub;
      reader.readMessage(value,proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub.deserializeBinaryFromReader);
      msg.setGcpPubsub(value);
      break;
    case 15:
      var value = new proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue;
      reader.readMessage(value,proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue.deserializeBinaryFromReader);
      msg.setKubemqQueue(value);
      break;
    case 16:
      var value = new proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub;
      reader.readMessage(value,proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub.deserializeBinaryFromReader);
      msg.setRedisPubsub(value);
      break;
    case 17:
      var value = new proto.protos.WriteCLIConfig.WriteBackend.RedisStreams;
      reader.readMessage(value,proto.protos.WriteCLIConfig.WriteBackend.RedisStreams.deserializeBinaryFromReader);
      msg.setRedisStreams(value);
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
proto.protos.WriteCLIConfig.WriteBackend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.WriteCLIConfig.WriteBackend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKafka();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protos.WriteCLIConfig.WriteBackend.Kafka.serializeBinaryToWriter
    );
  }
  f = message.getActivemq();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ.serializeBinaryToWriter
    );
  }
  f = message.getAwssqs();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.protos.WriteCLIConfig.WriteBackend.AWSSQS.serializeBinaryToWriter
    );
  }
  f = message.getAwssns();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.protos.WriteCLIConfig.WriteBackend.AWSSNS.serializeBinaryToWriter
    );
  }
  f = message.getNats();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.protos.WriteCLIConfig.WriteBackend.Nats.serializeBinaryToWriter
    );
  }
  f = message.getNatsStreaming();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming.serializeBinaryToWriter
    );
  }
  f = message.getNsq();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.protos.WriteCLIConfig.WriteBackend.NSQ.serializeBinaryToWriter
    );
  }
  f = message.getPulsar();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.protos.WriteCLIConfig.WriteBackend.Pulsar.serializeBinaryToWriter
    );
  }
  f = message.getRabbit();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.protos.WriteCLIConfig.WriteBackend.Rabbit.serializeBinaryToWriter
    );
  }
  f = message.getRabbitStreams();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams.serializeBinaryToWriter
    );
  }
  f = message.getMqtt();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.protos.WriteCLIConfig.WriteBackend.MQTT.serializeBinaryToWriter
    );
  }
  f = message.getAzureServiceBus();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus.serializeBinaryToWriter
    );
  }
  f = message.getAzureEventHub();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub.serializeBinaryToWriter
    );
  }
  f = message.getGcpPubsub();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub.serializeBinaryToWriter
    );
  }
  f = message.getKubemqQueue();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue.serializeBinaryToWriter
    );
  }
  f = message.getRedisPubsub();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub.serializeBinaryToWriter
    );
  }
  f = message.getRedisStreams();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.protos.WriteCLIConfig.WriteBackend.RedisStreams.serializeBinaryToWriter
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
proto.protos.WriteCLIConfig.WriteBackend.Kafka.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.WriteCLIConfig.WriteBackend.Kafka.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.Kafka} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.Kafka.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_kafka_pb.KafkaConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_kafka_pb.KafkaWriteArgs.toObject(includeInstance, f)
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
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Kafka}
 */
proto.protos.WriteCLIConfig.WriteBackend.Kafka.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.WriteCLIConfig.WriteBackend.Kafka;
  return proto.protos.WriteCLIConfig.WriteBackend.Kafka.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.Kafka} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Kafka}
 */
proto.protos.WriteCLIConfig.WriteBackend.Kafka.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new backends_kafka_pb.KafkaWriteArgs;
      reader.readMessage(value,backends_kafka_pb.KafkaWriteArgs.deserializeBinaryFromReader);
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
proto.protos.WriteCLIConfig.WriteBackend.Kafka.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.WriteCLIConfig.WriteBackend.Kafka.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.Kafka} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.Kafka.serializeBinaryToWriter = function(message, writer) {
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
      backends_kafka_pb.KafkaWriteArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.KafkaConn conn = 1;
 * @return {?proto.protos.backends.KafkaConn}
 */
proto.protos.WriteCLIConfig.WriteBackend.Kafka.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.KafkaConn} */ (
    jspb.Message.getWrapperField(this, backends_kafka_pb.KafkaConn, 1));
};


/**
 * @param {?proto.protos.backends.KafkaConn|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Kafka} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.Kafka.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Kafka} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.Kafka.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.Kafka.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.KafkaWriteArgs args = 2;
 * @return {?proto.protos.backends.KafkaWriteArgs}
 */
proto.protos.WriteCLIConfig.WriteBackend.Kafka.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.KafkaWriteArgs} */ (
    jspb.Message.getWrapperField(this, backends_kafka_pb.KafkaWriteArgs, 2));
};


/**
 * @param {?proto.protos.backends.KafkaWriteArgs|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Kafka} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.Kafka.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Kafka} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.Kafka.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.Kafka.prototype.hasArgs = function() {
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
proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_activemq_pb.ActiveMQConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_activemq_pb.ActiveMQWriteArgs.toObject(includeInstance, f)
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
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ}
 */
proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ;
  return proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ}
 */
proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new backends_activemq_pb.ActiveMQWriteArgs;
      reader.readMessage(value,backends_activemq_pb.ActiveMQWriteArgs.deserializeBinaryFromReader);
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
proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ.serializeBinaryToWriter = function(message, writer) {
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
      backends_activemq_pb.ActiveMQWriteArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.ActiveMQConn conn = 1;
 * @return {?proto.protos.backends.ActiveMQConn}
 */
proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.ActiveMQConn} */ (
    jspb.Message.getWrapperField(this, backends_activemq_pb.ActiveMQConn, 1));
};


/**
 * @param {?proto.protos.backends.ActiveMQConn|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.ActiveMQWriteArgs args = 2;
 * @return {?proto.protos.backends.ActiveMQWriteArgs}
 */
proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.ActiveMQWriteArgs} */ (
    jspb.Message.getWrapperField(this, backends_activemq_pb.ActiveMQWriteArgs, 2));
};


/**
 * @param {?proto.protos.backends.ActiveMQWriteArgs|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ.prototype.hasArgs = function() {
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
proto.protos.WriteCLIConfig.WriteBackend.AWSSQS.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.WriteCLIConfig.WriteBackend.AWSSQS.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.AWSSQS} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.AWSSQS.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_aws$sqs_pb.AWSSQSConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_aws$sqs_pb.AWSSQSWriteArgs.toObject(includeInstance, f)
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
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AWSSQS}
 */
proto.protos.WriteCLIConfig.WriteBackend.AWSSQS.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.WriteCLIConfig.WriteBackend.AWSSQS;
  return proto.protos.WriteCLIConfig.WriteBackend.AWSSQS.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.AWSSQS} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AWSSQS}
 */
proto.protos.WriteCLIConfig.WriteBackend.AWSSQS.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new backends_aws$sqs_pb.AWSSQSWriteArgs;
      reader.readMessage(value,backends_aws$sqs_pb.AWSSQSWriteArgs.deserializeBinaryFromReader);
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
proto.protos.WriteCLIConfig.WriteBackend.AWSSQS.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.WriteCLIConfig.WriteBackend.AWSSQS.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.AWSSQS} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.AWSSQS.serializeBinaryToWriter = function(message, writer) {
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
      backends_aws$sqs_pb.AWSSQSWriteArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.AWSSQSConn conn = 1;
 * @return {?proto.protos.backends.AWSSQSConn}
 */
proto.protos.WriteCLIConfig.WriteBackend.AWSSQS.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.AWSSQSConn} */ (
    jspb.Message.getWrapperField(this, backends_aws$sqs_pb.AWSSQSConn, 1));
};


/**
 * @param {?proto.protos.backends.AWSSQSConn|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AWSSQS} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.AWSSQS.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AWSSQS} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.AWSSQS.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.AWSSQS.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.AWSSQSWriteArgs args = 2;
 * @return {?proto.protos.backends.AWSSQSWriteArgs}
 */
proto.protos.WriteCLIConfig.WriteBackend.AWSSQS.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.AWSSQSWriteArgs} */ (
    jspb.Message.getWrapperField(this, backends_aws$sqs_pb.AWSSQSWriteArgs, 2));
};


/**
 * @param {?proto.protos.backends.AWSSQSWriteArgs|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AWSSQS} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.AWSSQS.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AWSSQS} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.AWSSQS.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.AWSSQS.prototype.hasArgs = function() {
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
proto.protos.WriteCLIConfig.WriteBackend.AWSSNS.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.WriteCLIConfig.WriteBackend.AWSSNS.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.AWSSNS} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.AWSSNS.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_aws$sns_pb.AWSSNSConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_aws$sns_pb.AWSSNSWriteArgs.toObject(includeInstance, f)
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
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AWSSNS}
 */
proto.protos.WriteCLIConfig.WriteBackend.AWSSNS.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.WriteCLIConfig.WriteBackend.AWSSNS;
  return proto.protos.WriteCLIConfig.WriteBackend.AWSSNS.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.AWSSNS} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AWSSNS}
 */
proto.protos.WriteCLIConfig.WriteBackend.AWSSNS.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new backends_aws$sns_pb.AWSSNSConn;
      reader.readMessage(value,backends_aws$sns_pb.AWSSNSConn.deserializeBinaryFromReader);
      msg.setConn(value);
      break;
    case 2:
      var value = new backends_aws$sns_pb.AWSSNSWriteArgs;
      reader.readMessage(value,backends_aws$sns_pb.AWSSNSWriteArgs.deserializeBinaryFromReader);
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
proto.protos.WriteCLIConfig.WriteBackend.AWSSNS.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.WriteCLIConfig.WriteBackend.AWSSNS.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.AWSSNS} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.AWSSNS.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      backends_aws$sns_pb.AWSSNSConn.serializeBinaryToWriter
    );
  }
  f = message.getArgs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      backends_aws$sns_pb.AWSSNSWriteArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.AWSSNSConn conn = 1;
 * @return {?proto.protos.backends.AWSSNSConn}
 */
proto.protos.WriteCLIConfig.WriteBackend.AWSSNS.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.AWSSNSConn} */ (
    jspb.Message.getWrapperField(this, backends_aws$sns_pb.AWSSNSConn, 1));
};


/**
 * @param {?proto.protos.backends.AWSSNSConn|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AWSSNS} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.AWSSNS.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AWSSNS} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.AWSSNS.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.AWSSNS.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.AWSSNSWriteArgs args = 2;
 * @return {?proto.protos.backends.AWSSNSWriteArgs}
 */
proto.protos.WriteCLIConfig.WriteBackend.AWSSNS.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.AWSSNSWriteArgs} */ (
    jspb.Message.getWrapperField(this, backends_aws$sns_pb.AWSSNSWriteArgs, 2));
};


/**
 * @param {?proto.protos.backends.AWSSNSWriteArgs|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AWSSNS} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.AWSSNS.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AWSSNS} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.AWSSNS.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.AWSSNS.prototype.hasArgs = function() {
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
proto.protos.WriteCLIConfig.WriteBackend.Nats.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.WriteCLIConfig.WriteBackend.Nats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.Nats} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.Nats.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_nats_pb.NatsConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_nats_pb.NatsWriteArgs.toObject(includeInstance, f)
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
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Nats}
 */
proto.protos.WriteCLIConfig.WriteBackend.Nats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.WriteCLIConfig.WriteBackend.Nats;
  return proto.protos.WriteCLIConfig.WriteBackend.Nats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.Nats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Nats}
 */
proto.protos.WriteCLIConfig.WriteBackend.Nats.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new backends_nats_pb.NatsWriteArgs;
      reader.readMessage(value,backends_nats_pb.NatsWriteArgs.deserializeBinaryFromReader);
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
proto.protos.WriteCLIConfig.WriteBackend.Nats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.WriteCLIConfig.WriteBackend.Nats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.Nats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.Nats.serializeBinaryToWriter = function(message, writer) {
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
      backends_nats_pb.NatsWriteArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.NatsConn conn = 1;
 * @return {?proto.protos.backends.NatsConn}
 */
proto.protos.WriteCLIConfig.WriteBackend.Nats.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.NatsConn} */ (
    jspb.Message.getWrapperField(this, backends_nats_pb.NatsConn, 1));
};


/**
 * @param {?proto.protos.backends.NatsConn|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Nats} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.Nats.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Nats} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.Nats.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.Nats.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.NatsWriteArgs args = 2;
 * @return {?proto.protos.backends.NatsWriteArgs}
 */
proto.protos.WriteCLIConfig.WriteBackend.Nats.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.NatsWriteArgs} */ (
    jspb.Message.getWrapperField(this, backends_nats_pb.NatsWriteArgs, 2));
};


/**
 * @param {?proto.protos.backends.NatsWriteArgs|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Nats} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.Nats.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Nats} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.Nats.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.Nats.prototype.hasArgs = function() {
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
proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_nats$streaming_pb.NatsStreamingConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_nats$streaming_pb.NatsStreamingWriteArgs.toObject(includeInstance, f)
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
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming}
 */
proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming;
  return proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming}
 */
proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new backends_nats$streaming_pb.NatsStreamingWriteArgs;
      reader.readMessage(value,backends_nats$streaming_pb.NatsStreamingWriteArgs.deserializeBinaryFromReader);
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
proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming.serializeBinaryToWriter = function(message, writer) {
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
      backends_nats$streaming_pb.NatsStreamingWriteArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.NatsStreamingConn conn = 1;
 * @return {?proto.protos.backends.NatsStreamingConn}
 */
proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.NatsStreamingConn} */ (
    jspb.Message.getWrapperField(this, backends_nats$streaming_pb.NatsStreamingConn, 1));
};


/**
 * @param {?proto.protos.backends.NatsStreamingConn|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.NatsStreamingWriteArgs args = 2;
 * @return {?proto.protos.backends.NatsStreamingWriteArgs}
 */
proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.NatsStreamingWriteArgs} */ (
    jspb.Message.getWrapperField(this, backends_nats$streaming_pb.NatsStreamingWriteArgs, 2));
};


/**
 * @param {?proto.protos.backends.NatsStreamingWriteArgs|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming.prototype.hasArgs = function() {
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
proto.protos.WriteCLIConfig.WriteBackend.NSQ.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.WriteCLIConfig.WriteBackend.NSQ.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.NSQ} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.NSQ.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_nsq_pb.NSQConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_nsq_pb.NSQWriteArgs.toObject(includeInstance, f)
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
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.NSQ}
 */
proto.protos.WriteCLIConfig.WriteBackend.NSQ.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.WriteCLIConfig.WriteBackend.NSQ;
  return proto.protos.WriteCLIConfig.WriteBackend.NSQ.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.NSQ} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.NSQ}
 */
proto.protos.WriteCLIConfig.WriteBackend.NSQ.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new backends_nsq_pb.NSQWriteArgs;
      reader.readMessage(value,backends_nsq_pb.NSQWriteArgs.deserializeBinaryFromReader);
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
proto.protos.WriteCLIConfig.WriteBackend.NSQ.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.WriteCLIConfig.WriteBackend.NSQ.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.NSQ} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.NSQ.serializeBinaryToWriter = function(message, writer) {
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
      backends_nsq_pb.NSQWriteArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.NSQConn conn = 1;
 * @return {?proto.protos.backends.NSQConn}
 */
proto.protos.WriteCLIConfig.WriteBackend.NSQ.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.NSQConn} */ (
    jspb.Message.getWrapperField(this, backends_nsq_pb.NSQConn, 1));
};


/**
 * @param {?proto.protos.backends.NSQConn|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.NSQ} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.NSQ.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.NSQ} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.NSQ.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.NSQ.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.NSQWriteArgs args = 2;
 * @return {?proto.protos.backends.NSQWriteArgs}
 */
proto.protos.WriteCLIConfig.WriteBackend.NSQ.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.NSQWriteArgs} */ (
    jspb.Message.getWrapperField(this, backends_nsq_pb.NSQWriteArgs, 2));
};


/**
 * @param {?proto.protos.backends.NSQWriteArgs|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.NSQ} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.NSQ.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.NSQ} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.NSQ.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.NSQ.prototype.hasArgs = function() {
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
proto.protos.WriteCLIConfig.WriteBackend.Pulsar.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.WriteCLIConfig.WriteBackend.Pulsar.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.Pulsar} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.Pulsar.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_pulsar_pb.PulsarConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_pulsar_pb.PulsarWriteArgs.toObject(includeInstance, f)
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
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Pulsar}
 */
proto.protos.WriteCLIConfig.WriteBackend.Pulsar.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.WriteCLIConfig.WriteBackend.Pulsar;
  return proto.protos.WriteCLIConfig.WriteBackend.Pulsar.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.Pulsar} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Pulsar}
 */
proto.protos.WriteCLIConfig.WriteBackend.Pulsar.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new backends_pulsar_pb.PulsarWriteArgs;
      reader.readMessage(value,backends_pulsar_pb.PulsarWriteArgs.deserializeBinaryFromReader);
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
proto.protos.WriteCLIConfig.WriteBackend.Pulsar.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.WriteCLIConfig.WriteBackend.Pulsar.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.Pulsar} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.Pulsar.serializeBinaryToWriter = function(message, writer) {
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
      backends_pulsar_pb.PulsarWriteArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.PulsarConn conn = 1;
 * @return {?proto.protos.backends.PulsarConn}
 */
proto.protos.WriteCLIConfig.WriteBackend.Pulsar.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.PulsarConn} */ (
    jspb.Message.getWrapperField(this, backends_pulsar_pb.PulsarConn, 1));
};


/**
 * @param {?proto.protos.backends.PulsarConn|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Pulsar} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.Pulsar.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Pulsar} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.Pulsar.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.Pulsar.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.PulsarWriteArgs args = 2;
 * @return {?proto.protos.backends.PulsarWriteArgs}
 */
proto.protos.WriteCLIConfig.WriteBackend.Pulsar.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.PulsarWriteArgs} */ (
    jspb.Message.getWrapperField(this, backends_pulsar_pb.PulsarWriteArgs, 2));
};


/**
 * @param {?proto.protos.backends.PulsarWriteArgs|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Pulsar} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.Pulsar.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Pulsar} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.Pulsar.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.Pulsar.prototype.hasArgs = function() {
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
proto.protos.WriteCLIConfig.WriteBackend.Rabbit.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.WriteCLIConfig.WriteBackend.Rabbit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.Rabbit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.Rabbit.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_rabbit_pb.RabbitConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_rabbit_pb.RabbitWriteArgs.toObject(includeInstance, f)
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
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Rabbit}
 */
proto.protos.WriteCLIConfig.WriteBackend.Rabbit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.WriteCLIConfig.WriteBackend.Rabbit;
  return proto.protos.WriteCLIConfig.WriteBackend.Rabbit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.Rabbit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Rabbit}
 */
proto.protos.WriteCLIConfig.WriteBackend.Rabbit.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new backends_rabbit_pb.RabbitWriteArgs;
      reader.readMessage(value,backends_rabbit_pb.RabbitWriteArgs.deserializeBinaryFromReader);
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
proto.protos.WriteCLIConfig.WriteBackend.Rabbit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.WriteCLIConfig.WriteBackend.Rabbit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.Rabbit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.Rabbit.serializeBinaryToWriter = function(message, writer) {
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
      backends_rabbit_pb.RabbitWriteArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.RabbitConn conn = 1;
 * @return {?proto.protos.backends.RabbitConn}
 */
proto.protos.WriteCLIConfig.WriteBackend.Rabbit.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.RabbitConn} */ (
    jspb.Message.getWrapperField(this, backends_rabbit_pb.RabbitConn, 1));
};


/**
 * @param {?proto.protos.backends.RabbitConn|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Rabbit} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.Rabbit.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Rabbit} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.Rabbit.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.Rabbit.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.RabbitWriteArgs args = 2;
 * @return {?proto.protos.backends.RabbitWriteArgs}
 */
proto.protos.WriteCLIConfig.WriteBackend.Rabbit.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.RabbitWriteArgs} */ (
    jspb.Message.getWrapperField(this, backends_rabbit_pb.RabbitWriteArgs, 2));
};


/**
 * @param {?proto.protos.backends.RabbitWriteArgs|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Rabbit} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.Rabbit.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.Rabbit} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.Rabbit.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.Rabbit.prototype.hasArgs = function() {
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
proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_rabbit$streams_pb.RabbitStreamsConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_rabbit$streams_pb.RabbitStreamsWriteArgs.toObject(includeInstance, f)
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
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams}
 */
proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams;
  return proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams}
 */
proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new backends_rabbit$streams_pb.RabbitStreamsWriteArgs;
      reader.readMessage(value,backends_rabbit$streams_pb.RabbitStreamsWriteArgs.deserializeBinaryFromReader);
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
proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams.serializeBinaryToWriter = function(message, writer) {
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
      backends_rabbit$streams_pb.RabbitStreamsWriteArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.RabbitStreamsConn conn = 1;
 * @return {?proto.protos.backends.RabbitStreamsConn}
 */
proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.RabbitStreamsConn} */ (
    jspb.Message.getWrapperField(this, backends_rabbit$streams_pb.RabbitStreamsConn, 1));
};


/**
 * @param {?proto.protos.backends.RabbitStreamsConn|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.RabbitStreamsWriteArgs args = 2;
 * @return {?proto.protos.backends.RabbitStreamsWriteArgs}
 */
proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.RabbitStreamsWriteArgs} */ (
    jspb.Message.getWrapperField(this, backends_rabbit$streams_pb.RabbitStreamsWriteArgs, 2));
};


/**
 * @param {?proto.protos.backends.RabbitStreamsWriteArgs|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams.prototype.hasArgs = function() {
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
proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_redis$pubsub_pb.RedisPubSubConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_redis$pubsub_pb.RedisPubSubWriteArgs.toObject(includeInstance, f)
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
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub}
 */
proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub;
  return proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub}
 */
proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new backends_redis$pubsub_pb.RedisPubSubWriteArgs;
      reader.readMessage(value,backends_redis$pubsub_pb.RedisPubSubWriteArgs.deserializeBinaryFromReader);
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
proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub.serializeBinaryToWriter = function(message, writer) {
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
      backends_redis$pubsub_pb.RedisPubSubWriteArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.RedisPubSubConn conn = 1;
 * @return {?proto.protos.backends.RedisPubSubConn}
 */
proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.RedisPubSubConn} */ (
    jspb.Message.getWrapperField(this, backends_redis$pubsub_pb.RedisPubSubConn, 1));
};


/**
 * @param {?proto.protos.backends.RedisPubSubConn|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.RedisPubSubWriteArgs args = 2;
 * @return {?proto.protos.backends.RedisPubSubWriteArgs}
 */
proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.RedisPubSubWriteArgs} */ (
    jspb.Message.getWrapperField(this, backends_redis$pubsub_pb.RedisPubSubWriteArgs, 2));
};


/**
 * @param {?proto.protos.backends.RedisPubSubWriteArgs|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub.prototype.hasArgs = function() {
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
proto.protos.WriteCLIConfig.WriteBackend.RedisStreams.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.WriteCLIConfig.WriteBackend.RedisStreams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.RedisStreams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.RedisStreams.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_redis$streams_pb.RedisStreamsConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_redis$streams_pb.RedisStreamsWriteArgs.toObject(includeInstance, f)
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
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.RedisStreams}
 */
proto.protos.WriteCLIConfig.WriteBackend.RedisStreams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.WriteCLIConfig.WriteBackend.RedisStreams;
  return proto.protos.WriteCLIConfig.WriteBackend.RedisStreams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.RedisStreams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.RedisStreams}
 */
proto.protos.WriteCLIConfig.WriteBackend.RedisStreams.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new backends_redis$streams_pb.RedisStreamsWriteArgs;
      reader.readMessage(value,backends_redis$streams_pb.RedisStreamsWriteArgs.deserializeBinaryFromReader);
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
proto.protos.WriteCLIConfig.WriteBackend.RedisStreams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.WriteCLIConfig.WriteBackend.RedisStreams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.RedisStreams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.RedisStreams.serializeBinaryToWriter = function(message, writer) {
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
      backends_redis$streams_pb.RedisStreamsWriteArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.RedisStreamsConn conn = 1;
 * @return {?proto.protos.backends.RedisStreamsConn}
 */
proto.protos.WriteCLIConfig.WriteBackend.RedisStreams.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.RedisStreamsConn} */ (
    jspb.Message.getWrapperField(this, backends_redis$streams_pb.RedisStreamsConn, 1));
};


/**
 * @param {?proto.protos.backends.RedisStreamsConn|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.RedisStreams} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.RedisStreams.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.RedisStreams} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.RedisStreams.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.RedisStreams.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.RedisStreamsWriteArgs args = 2;
 * @return {?proto.protos.backends.RedisStreamsWriteArgs}
 */
proto.protos.WriteCLIConfig.WriteBackend.RedisStreams.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.RedisStreamsWriteArgs} */ (
    jspb.Message.getWrapperField(this, backends_redis$streams_pb.RedisStreamsWriteArgs, 2));
};


/**
 * @param {?proto.protos.backends.RedisStreamsWriteArgs|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.RedisStreams} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.RedisStreams.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.RedisStreams} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.RedisStreams.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.RedisStreams.prototype.hasArgs = function() {
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
proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_azure$event$hub_pb.AzureEventHubConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_azure$event$hub_pb.AzureEventHubWriteArgs.toObject(includeInstance, f)
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
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub}
 */
proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub;
  return proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub}
 */
proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new backends_azure$event$hub_pb.AzureEventHubWriteArgs;
      reader.readMessage(value,backends_azure$event$hub_pb.AzureEventHubWriteArgs.deserializeBinaryFromReader);
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
proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub.serializeBinaryToWriter = function(message, writer) {
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
      backends_azure$event$hub_pb.AzureEventHubWriteArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.AzureEventHubConn conn = 1;
 * @return {?proto.protos.backends.AzureEventHubConn}
 */
proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.AzureEventHubConn} */ (
    jspb.Message.getWrapperField(this, backends_azure$event$hub_pb.AzureEventHubConn, 1));
};


/**
 * @param {?proto.protos.backends.AzureEventHubConn|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.AzureEventHubWriteArgs args = 2;
 * @return {?proto.protos.backends.AzureEventHubWriteArgs}
 */
proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.AzureEventHubWriteArgs} */ (
    jspb.Message.getWrapperField(this, backends_azure$event$hub_pb.AzureEventHubWriteArgs, 2));
};


/**
 * @param {?proto.protos.backends.AzureEventHubWriteArgs|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub.prototype.hasArgs = function() {
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
proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_azure$service$bus_pb.AzureServiceBusConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_azure$service$bus_pb.AzureServiceBusWriteArgs.toObject(includeInstance, f)
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
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus}
 */
proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus;
  return proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus}
 */
proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new backends_azure$service$bus_pb.AzureServiceBusWriteArgs;
      reader.readMessage(value,backends_azure$service$bus_pb.AzureServiceBusWriteArgs.deserializeBinaryFromReader);
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
proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus.serializeBinaryToWriter = function(message, writer) {
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
      backends_azure$service$bus_pb.AzureServiceBusWriteArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.AzureServiceBusConn conn = 1;
 * @return {?proto.protos.backends.AzureServiceBusConn}
 */
proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.AzureServiceBusConn} */ (
    jspb.Message.getWrapperField(this, backends_azure$service$bus_pb.AzureServiceBusConn, 1));
};


/**
 * @param {?proto.protos.backends.AzureServiceBusConn|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.AzureServiceBusWriteArgs args = 2;
 * @return {?proto.protos.backends.AzureServiceBusWriteArgs}
 */
proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.AzureServiceBusWriteArgs} */ (
    jspb.Message.getWrapperField(this, backends_azure$service$bus_pb.AzureServiceBusWriteArgs, 2));
};


/**
 * @param {?proto.protos.backends.AzureServiceBusWriteArgs|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus.prototype.hasArgs = function() {
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
proto.protos.WriteCLIConfig.WriteBackend.MQTT.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.WriteCLIConfig.WriteBackend.MQTT.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.MQTT} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.MQTT.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_mqtt_pb.MQTTConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_mqtt_pb.MQTTWriteArgs.toObject(includeInstance, f)
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
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.MQTT}
 */
proto.protos.WriteCLIConfig.WriteBackend.MQTT.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.WriteCLIConfig.WriteBackend.MQTT;
  return proto.protos.WriteCLIConfig.WriteBackend.MQTT.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.MQTT} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.MQTT}
 */
proto.protos.WriteCLIConfig.WriteBackend.MQTT.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new backends_mqtt_pb.MQTTWriteArgs;
      reader.readMessage(value,backends_mqtt_pb.MQTTWriteArgs.deserializeBinaryFromReader);
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
proto.protos.WriteCLIConfig.WriteBackend.MQTT.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.WriteCLIConfig.WriteBackend.MQTT.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.MQTT} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.MQTT.serializeBinaryToWriter = function(message, writer) {
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
      backends_mqtt_pb.MQTTWriteArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.MQTTConn conn = 1;
 * @return {?proto.protos.backends.MQTTConn}
 */
proto.protos.WriteCLIConfig.WriteBackend.MQTT.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.MQTTConn} */ (
    jspb.Message.getWrapperField(this, backends_mqtt_pb.MQTTConn, 1));
};


/**
 * @param {?proto.protos.backends.MQTTConn|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.MQTT} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.MQTT.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.MQTT} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.MQTT.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.MQTT.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.MQTTWriteArgs args = 2;
 * @return {?proto.protos.backends.MQTTWriteArgs}
 */
proto.protos.WriteCLIConfig.WriteBackend.MQTT.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.MQTTWriteArgs} */ (
    jspb.Message.getWrapperField(this, backends_mqtt_pb.MQTTWriteArgs, 2));
};


/**
 * @param {?proto.protos.backends.MQTTWriteArgs|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.MQTT} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.MQTT.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.MQTT} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.MQTT.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.MQTT.prototype.hasArgs = function() {
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
proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_gcp$pubsub_pb.GCPPubSubConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_gcp$pubsub_pb.GCPPubSubWriteArgs.toObject(includeInstance, f)
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
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub}
 */
proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub;
  return proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub}
 */
proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new backends_gcp$pubsub_pb.GCPPubSubWriteArgs;
      reader.readMessage(value,backends_gcp$pubsub_pb.GCPPubSubWriteArgs.deserializeBinaryFromReader);
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
proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub.serializeBinaryToWriter = function(message, writer) {
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
      backends_gcp$pubsub_pb.GCPPubSubWriteArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.GCPPubSubConn conn = 1;
 * @return {?proto.protos.backends.GCPPubSubConn}
 */
proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.GCPPubSubConn} */ (
    jspb.Message.getWrapperField(this, backends_gcp$pubsub_pb.GCPPubSubConn, 1));
};


/**
 * @param {?proto.protos.backends.GCPPubSubConn|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.GCPPubSubWriteArgs args = 2;
 * @return {?proto.protos.backends.GCPPubSubWriteArgs}
 */
proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.GCPPubSubWriteArgs} */ (
    jspb.Message.getWrapperField(this, backends_gcp$pubsub_pb.GCPPubSubWriteArgs, 2));
};


/**
 * @param {?proto.protos.backends.GCPPubSubWriteArgs|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub.prototype.hasArgs = function() {
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
proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue.toObject = function(includeInstance, msg) {
  var f, obj = {
    conn: (f = msg.getConn()) && backends_kubemq$queue_pb.KubeMQQueueConn.toObject(includeInstance, f),
    args: (f = msg.getArgs()) && backends_kubemq$queue_pb.KubeMQQueueWriteArgs.toObject(includeInstance, f)
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
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue}
 */
proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue;
  return proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue}
 */
proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new backends_kubemq$queue_pb.KubeMQQueueWriteArgs;
      reader.readMessage(value,backends_kubemq$queue_pb.KubeMQQueueWriteArgs.deserializeBinaryFromReader);
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
proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue.serializeBinaryToWriter = function(message, writer) {
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
      backends_kubemq$queue_pb.KubeMQQueueWriteArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional backends.KubeMQQueueConn conn = 1;
 * @return {?proto.protos.backends.KubeMQQueueConn}
 */
proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.KubeMQQueueConn} */ (
    jspb.Message.getWrapperField(this, backends_kubemq$queue_pb.KubeMQQueueConn, 1));
};


/**
 * @param {?proto.protos.backends.KubeMQQueueConn|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.KubeMQQueueWriteArgs args = 2;
 * @return {?proto.protos.backends.KubeMQQueueWriteArgs}
 */
proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.KubeMQQueueWriteArgs} */ (
    jspb.Message.getWrapperField(this, backends_kubemq$queue_pb.KubeMQQueueWriteArgs, 2));
};


/**
 * @param {?proto.protos.backends.KubeMQQueueWriteArgs|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue.prototype.hasArgs = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Kafka kafka = 1;
 * @return {?proto.protos.WriteCLIConfig.WriteBackend.Kafka}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.getKafka = function() {
  return /** @type{?proto.protos.WriteCLIConfig.WriteBackend.Kafka} */ (
    jspb.Message.getWrapperField(this, proto.protos.WriteCLIConfig.WriteBackend.Kafka, 1));
};


/**
 * @param {?proto.protos.WriteCLIConfig.WriteBackend.Kafka|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.prototype.setKafka = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.clearKafka = function() {
  return this.setKafka(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.hasKafka = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ActiveMQ activemq = 2;
 * @return {?proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.getActivemq = function() {
  return /** @type{?proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ} */ (
    jspb.Message.getWrapperField(this, proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ, 2));
};


/**
 * @param {?proto.protos.WriteCLIConfig.WriteBackend.ActiveMQ|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.prototype.setActivemq = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.clearActivemq = function() {
  return this.setActivemq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.hasActivemq = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AWSSQS awssqs = 3;
 * @return {?proto.protos.WriteCLIConfig.WriteBackend.AWSSQS}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.getAwssqs = function() {
  return /** @type{?proto.protos.WriteCLIConfig.WriteBackend.AWSSQS} */ (
    jspb.Message.getWrapperField(this, proto.protos.WriteCLIConfig.WriteBackend.AWSSQS, 3));
};


/**
 * @param {?proto.protos.WriteCLIConfig.WriteBackend.AWSSQS|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.prototype.setAwssqs = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.clearAwssqs = function() {
  return this.setAwssqs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.hasAwssqs = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AWSSNS awssns = 4;
 * @return {?proto.protos.WriteCLIConfig.WriteBackend.AWSSNS}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.getAwssns = function() {
  return /** @type{?proto.protos.WriteCLIConfig.WriteBackend.AWSSNS} */ (
    jspb.Message.getWrapperField(this, proto.protos.WriteCLIConfig.WriteBackend.AWSSNS, 4));
};


/**
 * @param {?proto.protos.WriteCLIConfig.WriteBackend.AWSSNS|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.prototype.setAwssns = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.clearAwssns = function() {
  return this.setAwssns(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.hasAwssns = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Nats nats = 5;
 * @return {?proto.protos.WriteCLIConfig.WriteBackend.Nats}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.getNats = function() {
  return /** @type{?proto.protos.WriteCLIConfig.WriteBackend.Nats} */ (
    jspb.Message.getWrapperField(this, proto.protos.WriteCLIConfig.WriteBackend.Nats, 5));
};


/**
 * @param {?proto.protos.WriteCLIConfig.WriteBackend.Nats|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.prototype.setNats = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.clearNats = function() {
  return this.setNats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.hasNats = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional NatsStreaming nats_streaming = 6;
 * @return {?proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.getNatsStreaming = function() {
  return /** @type{?proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming} */ (
    jspb.Message.getWrapperField(this, proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming, 6));
};


/**
 * @param {?proto.protos.WriteCLIConfig.WriteBackend.NatsStreaming|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.prototype.setNatsStreaming = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.clearNatsStreaming = function() {
  return this.setNatsStreaming(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.hasNatsStreaming = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional NSQ nsq = 7;
 * @return {?proto.protos.WriteCLIConfig.WriteBackend.NSQ}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.getNsq = function() {
  return /** @type{?proto.protos.WriteCLIConfig.WriteBackend.NSQ} */ (
    jspb.Message.getWrapperField(this, proto.protos.WriteCLIConfig.WriteBackend.NSQ, 7));
};


/**
 * @param {?proto.protos.WriteCLIConfig.WriteBackend.NSQ|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.prototype.setNsq = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.clearNsq = function() {
  return this.setNsq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.hasNsq = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Pulsar pulsar = 8;
 * @return {?proto.protos.WriteCLIConfig.WriteBackend.Pulsar}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.getPulsar = function() {
  return /** @type{?proto.protos.WriteCLIConfig.WriteBackend.Pulsar} */ (
    jspb.Message.getWrapperField(this, proto.protos.WriteCLIConfig.WriteBackend.Pulsar, 8));
};


/**
 * @param {?proto.protos.WriteCLIConfig.WriteBackend.Pulsar|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.prototype.setPulsar = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.clearPulsar = function() {
  return this.setPulsar(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.hasPulsar = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Rabbit rabbit = 9;
 * @return {?proto.protos.WriteCLIConfig.WriteBackend.Rabbit}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.getRabbit = function() {
  return /** @type{?proto.protos.WriteCLIConfig.WriteBackend.Rabbit} */ (
    jspb.Message.getWrapperField(this, proto.protos.WriteCLIConfig.WriteBackend.Rabbit, 9));
};


/**
 * @param {?proto.protos.WriteCLIConfig.WriteBackend.Rabbit|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.prototype.setRabbit = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.clearRabbit = function() {
  return this.setRabbit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.hasRabbit = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional RabbitStreams rabbit_streams = 10;
 * @return {?proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.getRabbitStreams = function() {
  return /** @type{?proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams} */ (
    jspb.Message.getWrapperField(this, proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams, 10));
};


/**
 * @param {?proto.protos.WriteCLIConfig.WriteBackend.RabbitStreams|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.prototype.setRabbitStreams = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.clearRabbitStreams = function() {
  return this.setRabbitStreams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.hasRabbitStreams = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional MQTT mqtt = 11;
 * @return {?proto.protos.WriteCLIConfig.WriteBackend.MQTT}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.getMqtt = function() {
  return /** @type{?proto.protos.WriteCLIConfig.WriteBackend.MQTT} */ (
    jspb.Message.getWrapperField(this, proto.protos.WriteCLIConfig.WriteBackend.MQTT, 11));
};


/**
 * @param {?proto.protos.WriteCLIConfig.WriteBackend.MQTT|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.prototype.setMqtt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.clearMqtt = function() {
  return this.setMqtt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.hasMqtt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional AzureServiceBus azure_service_bus = 12;
 * @return {?proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.getAzureServiceBus = function() {
  return /** @type{?proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus} */ (
    jspb.Message.getWrapperField(this, proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus, 12));
};


/**
 * @param {?proto.protos.WriteCLIConfig.WriteBackend.AzureServiceBus|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.prototype.setAzureServiceBus = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.clearAzureServiceBus = function() {
  return this.setAzureServiceBus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.hasAzureServiceBus = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional AzureEventHub azure_event_hub = 13;
 * @return {?proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.getAzureEventHub = function() {
  return /** @type{?proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub} */ (
    jspb.Message.getWrapperField(this, proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub, 13));
};


/**
 * @param {?proto.protos.WriteCLIConfig.WriteBackend.AzureEventHub|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.prototype.setAzureEventHub = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.clearAzureEventHub = function() {
  return this.setAzureEventHub(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.hasAzureEventHub = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional GCPPubSub gcp_pubsub = 14;
 * @return {?proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.getGcpPubsub = function() {
  return /** @type{?proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub} */ (
    jspb.Message.getWrapperField(this, proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub, 14));
};


/**
 * @param {?proto.protos.WriteCLIConfig.WriteBackend.GCPPubSub|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.prototype.setGcpPubsub = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.clearGcpPubsub = function() {
  return this.setGcpPubsub(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.hasGcpPubsub = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional KubeMQQueue kubemq_queue = 15;
 * @return {?proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.getKubemqQueue = function() {
  return /** @type{?proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue} */ (
    jspb.Message.getWrapperField(this, proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue, 15));
};


/**
 * @param {?proto.protos.WriteCLIConfig.WriteBackend.KubeMQQueue|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.prototype.setKubemqQueue = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.clearKubemqQueue = function() {
  return this.setKubemqQueue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.hasKubemqQueue = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional RedisPubSub redis_pubsub = 16;
 * @return {?proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.getRedisPubsub = function() {
  return /** @type{?proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub} */ (
    jspb.Message.getWrapperField(this, proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub, 16));
};


/**
 * @param {?proto.protos.WriteCLIConfig.WriteBackend.RedisPubSub|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.prototype.setRedisPubsub = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.clearRedisPubsub = function() {
  return this.setRedisPubsub(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.hasRedisPubsub = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional RedisStreams redis_streams = 17;
 * @return {?proto.protos.WriteCLIConfig.WriteBackend.RedisStreams}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.getRedisStreams = function() {
  return /** @type{?proto.protos.WriteCLIConfig.WriteBackend.RedisStreams} */ (
    jspb.Message.getWrapperField(this, proto.protos.WriteCLIConfig.WriteBackend.RedisStreams, 17));
};


/**
 * @param {?proto.protos.WriteCLIConfig.WriteBackend.RedisStreams|undefined} value
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
*/
proto.protos.WriteCLIConfig.WriteBackend.prototype.setRedisStreams = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig.WriteBackend} returns this
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.clearRedisStreams = function() {
  return this.setRedisStreams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.WriteBackend.prototype.hasRedisStreams = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool input_is_json_array = 1;
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.prototype.getInputIsJsonArray = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protos.WriteCLIConfig} returns this
 */
proto.protos.WriteCLIConfig.prototype.setInputIsJsonArray = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional backends.Type _backend_type = 2;
 * @return {!proto.protos.backends.Type}
 */
proto.protos.WriteCLIConfig.prototype.getBackendType = function() {
  return /** @type {!proto.protos.backends.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.protos.backends.Type} value
 * @return {!proto.protos.WriteCLIConfig} returns this
 */
proto.protos.WriteCLIConfig.prototype.setBackendType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional WriteBackend _write_backend = 3;
 * @return {?proto.protos.WriteCLIConfig.WriteBackend}
 */
proto.protos.WriteCLIConfig.prototype.getWriteBackend = function() {
  return /** @type{?proto.protos.WriteCLIConfig.WriteBackend} */ (
    jspb.Message.getWrapperField(this, proto.protos.WriteCLIConfig.WriteBackend, 3));
};


/**
 * @param {?proto.protos.WriteCLIConfig.WriteBackend|undefined} value
 * @return {!proto.protos.WriteCLIConfig} returns this
*/
proto.protos.WriteCLIConfig.prototype.setWriteBackend = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteCLIConfig} returns this
 */
proto.protos.WriteCLIConfig.prototype.clearWriteBackend = function() {
  return this.setWriteBackend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteCLIConfig.prototype.hasWriteBackend = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protos.WriteConfig.repeatedFields_ = [2];



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
proto.protos.WriteConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.WriteConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.WriteConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    recordList: jspb.Message.toObjectList(msg.getRecordList(),
    records_base_pb.WriteRecord.toObject, includeInstance),
    encodeOptions: (f = msg.getEncodeOptions()) && encoding_options_pb.EncodeOptions.toObject(includeInstance, f),
    cliConfig: (f = msg.getCliConfig()) && proto.protos.WriteCLIConfig.toObject(includeInstance, f)
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
 * @return {!proto.protos.WriteConfig}
 */
proto.protos.WriteConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.WriteConfig;
  return proto.protos.WriteConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.WriteConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.WriteConfig}
 */
proto.protos.WriteConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionId(value);
      break;
    case 2:
      var value = new records_base_pb.WriteRecord;
      reader.readMessage(value,records_base_pb.WriteRecord.deserializeBinaryFromReader);
      msg.addRecord(value);
      break;
    case 3:
      var value = new encoding_options_pb.EncodeOptions;
      reader.readMessage(value,encoding_options_pb.EncodeOptions.deserializeBinaryFromReader);
      msg.setEncodeOptions(value);
      break;
    case 4:
      var value = new proto.protos.WriteCLIConfig;
      reader.readMessage(value,proto.protos.WriteCLIConfig.deserializeBinaryFromReader);
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
proto.protos.WriteConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.WriteConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.WriteConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRecordList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      records_base_pb.WriteRecord.serializeBinaryToWriter
    );
  }
  f = message.getEncodeOptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      encoding_options_pb.EncodeOptions.serializeBinaryToWriter
    );
  }
  f = message.getCliConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.protos.WriteCLIConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string connection_id = 1;
 * @return {string}
 */
proto.protos.WriteConfig.prototype.getConnectionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.WriteConfig} returns this
 */
proto.protos.WriteConfig.prototype.setConnectionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated records.WriteRecord record = 2;
 * @return {!Array<!proto.protos.records.WriteRecord>}
 */
proto.protos.WriteConfig.prototype.getRecordList = function() {
  return /** @type{!Array<!proto.protos.records.WriteRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, records_base_pb.WriteRecord, 2));
};


/**
 * @param {!Array<!proto.protos.records.WriteRecord>} value
 * @return {!proto.protos.WriteConfig} returns this
*/
proto.protos.WriteConfig.prototype.setRecordList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protos.records.WriteRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protos.records.WriteRecord}
 */
proto.protos.WriteConfig.prototype.addRecord = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protos.records.WriteRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protos.WriteConfig} returns this
 */
proto.protos.WriteConfig.prototype.clearRecordList = function() {
  return this.setRecordList([]);
};


/**
 * optional encoding.EncodeOptions encode_options = 3;
 * @return {?proto.protos.encoding.EncodeOptions}
 */
proto.protos.WriteConfig.prototype.getEncodeOptions = function() {
  return /** @type{?proto.protos.encoding.EncodeOptions} */ (
    jspb.Message.getWrapperField(this, encoding_options_pb.EncodeOptions, 3));
};


/**
 * @param {?proto.protos.encoding.EncodeOptions|undefined} value
 * @return {!proto.protos.WriteConfig} returns this
*/
proto.protos.WriteConfig.prototype.setEncodeOptions = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteConfig} returns this
 */
proto.protos.WriteConfig.prototype.clearEncodeOptions = function() {
  return this.setEncodeOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteConfig.prototype.hasEncodeOptions = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional WriteCLIConfig _cli_config = 4;
 * @return {?proto.protos.WriteCLIConfig}
 */
proto.protos.WriteConfig.prototype.getCliConfig = function() {
  return /** @type{?proto.protos.WriteCLIConfig} */ (
    jspb.Message.getWrapperField(this, proto.protos.WriteCLIConfig, 4));
};


/**
 * @param {?proto.protos.WriteCLIConfig|undefined} value
 * @return {!proto.protos.WriteConfig} returns this
*/
proto.protos.WriteConfig.prototype.setCliConfig = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteConfig} returns this
 */
proto.protos.WriteConfig.prototype.clearCliConfig = function() {
  return this.setCliConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteConfig.prototype.hasCliConfig = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.protos.WriteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.WriteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.WriteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && common_auth_pb.Auth.toObject(includeInstance, f),
    config: (f = msg.getConfig()) && proto.protos.WriteConfig.toObject(includeInstance, f)
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
 * @return {!proto.protos.WriteRequest}
 */
proto.protos.WriteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.WriteRequest;
  return proto.protos.WriteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.WriteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.WriteRequest}
 */
proto.protos.WriteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.protos.WriteConfig;
      reader.readMessage(value,proto.protos.WriteConfig.deserializeBinaryFromReader);
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
proto.protos.WriteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.WriteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.WriteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.protos.WriteConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional common.Auth auth = 9999;
 * @return {?proto.protos.common.Auth}
 */
proto.protos.WriteRequest.prototype.getAuth = function() {
  return /** @type{?proto.protos.common.Auth} */ (
    jspb.Message.getWrapperField(this, common_auth_pb.Auth, 9999));
};


/**
 * @param {?proto.protos.common.Auth|undefined} value
 * @return {!proto.protos.WriteRequest} returns this
*/
proto.protos.WriteRequest.prototype.setAuth = function(value) {
  return jspb.Message.setWrapperField(this, 9999, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteRequest} returns this
 */
proto.protos.WriteRequest.prototype.clearAuth = function() {
  return this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteRequest.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 9999) != null;
};


/**
 * optional WriteConfig config = 1;
 * @return {?proto.protos.WriteConfig}
 */
proto.protos.WriteRequest.prototype.getConfig = function() {
  return /** @type{?proto.protos.WriteConfig} */ (
    jspb.Message.getWrapperField(this, proto.protos.WriteConfig, 1));
};


/**
 * @param {?proto.protos.WriteConfig|undefined} value
 * @return {!proto.protos.WriteRequest} returns this
*/
proto.protos.WriteRequest.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteRequest} returns this
 */
proto.protos.WriteRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteRequest.prototype.hasConfig = function() {
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
proto.protos.WriteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.WriteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.WriteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protos.WriteResponse}
 */
proto.protos.WriteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.WriteResponse;
  return proto.protos.WriteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.WriteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.WriteResponse}
 */
proto.protos.WriteResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protos.WriteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.WriteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.WriteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.WriteResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.protos.WriteResponse.prototype.getStatus = function() {
  return /** @type{?proto.protos.common.Status} */ (
    jspb.Message.getWrapperField(this, common_status_pb.Status, 1000));
};


/**
 * @param {?proto.protos.common.Status|undefined} value
 * @return {!proto.protos.WriteResponse} returns this
*/
proto.protos.WriteResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.WriteResponse} returns this
 */
proto.protos.WriteResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.WriteResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1000) != null;
};


/**
 * @enum {number}
 */
proto.protos.InputType = {
  PLAIN: 0,
  JSONPB: 1
};

goog.object.extend(exports, proto.protos);
