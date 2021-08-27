// source: relay.proto
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

var backends_backends_pb = require('./backends/backends_pb.js');
goog.object.extend(proto, backends_backends_pb);
var backends_kafka_pb = require('./backends/kafka_pb.js');
goog.object.extend(proto, backends_kafka_pb);
var backends_activemq_pb = require('./backends/activemq_pb.js');
goog.object.extend(proto, backends_activemq_pb);
var backends_aws$sns_pb = require('./backends/aws-sns_pb.js');
goog.object.extend(proto, backends_aws$sns_pb);
var backends_aws$sqs_pb = require('./backends/aws-sqs_pb.js');
goog.object.extend(proto, backends_aws$sqs_pb);
var backends_mongo_pb = require('./backends/mongo_pb.js');
goog.object.extend(proto, backends_mongo_pb);
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
var backends_azure$service$bus_pb = require('./backends/azure-service-bus_pb.js');
goog.object.extend(proto, backends_azure$service$bus_pb);
var backends_azure$event$hub_pb = require('./backends/azure-event-hub_pb.js');
goog.object.extend(proto, backends_azure$event$hub_pb);
var backends_mqtt_pb = require('./backends/mqtt_pb.js');
goog.object.extend(proto, backends_mqtt_pb);
var backends_gcp$pubsub_pb = require('./backends/gcp-pubsub_pb.js');
goog.object.extend(proto, backends_gcp$pubsub_pb);
var backends_kubemq$queue_pb = require('./backends/kubemq-queue_pb.js');
goog.object.extend(proto, backends_kubemq$queue_pb);
var common_auth_pb = require('./common/auth_pb.js');
goog.object.extend(proto, common_auth_pb);
var common_status_pb = require('./common/status_pb.js');
goog.object.extend(proto, common_status_pb);
goog.exportSymbol('proto.protos.CLIRelayConfig', null, global);
goog.exportSymbol('proto.protos.CLIRelayConfig.RelayBackend', null, global);
goog.exportSymbol('proto.protos.CLIRelayConfig.RelayBackend.AWSSQS', null, global);
goog.exportSymbol('proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus', null, global);
goog.exportSymbol('proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub', null, global);
goog.exportSymbol('proto.protos.CLIRelayConfig.RelayBackend.Kafka', null, global);
goog.exportSymbol('proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue', null, global);
goog.exportSymbol('proto.protos.CLIRelayConfig.RelayBackend.MQTT', null, global);
goog.exportSymbol('proto.protos.CLIRelayConfig.RelayBackend.Mongo', null, global);
goog.exportSymbol('proto.protos.CLIRelayConfig.RelayBackend.NSQ', null, global);
goog.exportSymbol('proto.protos.CLIRelayConfig.RelayBackend.Postgres', null, global);
goog.exportSymbol('proto.protos.CLIRelayConfig.RelayBackend.Rabbit', null, global);
goog.exportSymbol('proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub', null, global);
goog.exportSymbol('proto.protos.CLIRelayConfig.RelayBackend.RedisStreams', null, global);
goog.exportSymbol('proto.protos.CreateRelayRequest', null, global);
goog.exportSymbol('proto.protos.CreateRelayRequest.BackendsCase', null, global);
goog.exportSymbol('proto.protos.CreateRelayResponse', null, global);
goog.exportSymbol('proto.protos.DeleteRelayRequest', null, global);
goog.exportSymbol('proto.protos.DeleteRelayResponse', null, global);
goog.exportSymbol('proto.protos.GetAllRelaysRequest', null, global);
goog.exportSymbol('proto.protos.GetAllRelaysResponse', null, global);
goog.exportSymbol('proto.protos.GetRelayRequest', null, global);
goog.exportSymbol('proto.protos.GetRelayResponse', null, global);
goog.exportSymbol('proto.protos.RelayConfig', null, global);
goog.exportSymbol('proto.protos.ResumeRelayRequest', null, global);
goog.exportSymbol('proto.protos.ResumeRelayResponse', null, global);
goog.exportSymbol('proto.protos.StopRelayRequest', null, global);
goog.exportSymbol('proto.protos.StopRelayResponse', null, global);
goog.exportSymbol('proto.protos.UpdateRelayRequest', null, global);
goog.exportSymbol('proto.protos.UpdateRelayResponse', null, global);
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
proto.protos.CLIRelayConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.CLIRelayConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.CLIRelayConfig.displayName = 'proto.protos.CLIRelayConfig';
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
proto.protos.CLIRelayConfig.RelayBackend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.CLIRelayConfig.RelayBackend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.CLIRelayConfig.RelayBackend.displayName = 'proto.protos.CLIRelayConfig.RelayBackend';
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
proto.protos.CLIRelayConfig.RelayBackend.Kafka = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.CLIRelayConfig.RelayBackend.Kafka, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.CLIRelayConfig.RelayBackend.Kafka.displayName = 'proto.protos.CLIRelayConfig.RelayBackend.Kafka';
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
proto.protos.CLIRelayConfig.RelayBackend.AWSSQS = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.CLIRelayConfig.RelayBackend.AWSSQS, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.CLIRelayConfig.RelayBackend.AWSSQS.displayName = 'proto.protos.CLIRelayConfig.RelayBackend.AWSSQS';
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
proto.protos.CLIRelayConfig.RelayBackend.Mongo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.CLIRelayConfig.RelayBackend.Mongo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.CLIRelayConfig.RelayBackend.Mongo.displayName = 'proto.protos.CLIRelayConfig.RelayBackend.Mongo';
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
proto.protos.CLIRelayConfig.RelayBackend.NSQ = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.CLIRelayConfig.RelayBackend.NSQ, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.CLIRelayConfig.RelayBackend.NSQ.displayName = 'proto.protos.CLIRelayConfig.RelayBackend.NSQ';
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
proto.protos.CLIRelayConfig.RelayBackend.Postgres = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.CLIRelayConfig.RelayBackend.Postgres, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.CLIRelayConfig.RelayBackend.Postgres.displayName = 'proto.protos.CLIRelayConfig.RelayBackend.Postgres';
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
proto.protos.CLIRelayConfig.RelayBackend.Rabbit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.CLIRelayConfig.RelayBackend.Rabbit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.CLIRelayConfig.RelayBackend.Rabbit.displayName = 'proto.protos.CLIRelayConfig.RelayBackend.Rabbit';
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
proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub.displayName = 'proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub';
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
proto.protos.CLIRelayConfig.RelayBackend.RedisStreams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.CLIRelayConfig.RelayBackend.RedisStreams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.CLIRelayConfig.RelayBackend.RedisStreams.displayName = 'proto.protos.CLIRelayConfig.RelayBackend.RedisStreams';
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
proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus.displayName = 'proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus';
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
proto.protos.CLIRelayConfig.RelayBackend.MQTT = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.CLIRelayConfig.RelayBackend.MQTT, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.CLIRelayConfig.RelayBackend.MQTT.displayName = 'proto.protos.CLIRelayConfig.RelayBackend.MQTT';
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
proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub.displayName = 'proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub';
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
proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue.displayName = 'proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue';
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
proto.protos.RelayConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.RelayConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.RelayConfig.displayName = 'proto.protos.RelayConfig';
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
proto.protos.GetAllRelaysRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.GetAllRelaysRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.GetAllRelaysRequest.displayName = 'proto.protos.GetAllRelaysRequest';
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
proto.protos.GetAllRelaysResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.protos.GetAllRelaysResponse.repeatedFields_, null);
};
goog.inherits(proto.protos.GetAllRelaysResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.GetAllRelaysResponse.displayName = 'proto.protos.GetAllRelaysResponse';
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
proto.protos.GetRelayRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.GetRelayRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.GetRelayRequest.displayName = 'proto.protos.GetRelayRequest';
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
proto.protos.GetRelayResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.GetRelayResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.GetRelayResponse.displayName = 'proto.protos.GetRelayResponse';
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
proto.protos.CreateRelayRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, proto.protos.CreateRelayRequest.oneofGroups_);
};
goog.inherits(proto.protos.CreateRelayRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.CreateRelayRequest.displayName = 'proto.protos.CreateRelayRequest';
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
proto.protos.CreateRelayResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.CreateRelayResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.CreateRelayResponse.displayName = 'proto.protos.CreateRelayResponse';
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
proto.protos.UpdateRelayRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.UpdateRelayRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.UpdateRelayRequest.displayName = 'proto.protos.UpdateRelayRequest';
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
proto.protos.UpdateRelayResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.UpdateRelayResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.UpdateRelayResponse.displayName = 'proto.protos.UpdateRelayResponse';
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
proto.protos.ResumeRelayRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.ResumeRelayRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ResumeRelayRequest.displayName = 'proto.protos.ResumeRelayRequest';
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
proto.protos.ResumeRelayResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.ResumeRelayResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ResumeRelayResponse.displayName = 'proto.protos.ResumeRelayResponse';
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
proto.protos.StopRelayRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.StopRelayRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.StopRelayRequest.displayName = 'proto.protos.StopRelayRequest';
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
proto.protos.StopRelayResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.StopRelayResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.StopRelayResponse.displayName = 'proto.protos.StopRelayResponse';
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
proto.protos.DeleteRelayRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.DeleteRelayRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.DeleteRelayRequest.displayName = 'proto.protos.DeleteRelayRequest';
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
proto.protos.DeleteRelayResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.DeleteRelayResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.DeleteRelayResponse.displayName = 'proto.protos.DeleteRelayResponse';
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
proto.protos.CLIRelayConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.CLIRelayConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.CLIRelayConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    httpListenAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    backendType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    relayBackend: (f = msg.getRelayBackend()) && proto.protos.CLIRelayConfig.RelayBackend.toObject(includeInstance, f)
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
 * @return {!proto.protos.CLIRelayConfig}
 */
proto.protos.CLIRelayConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.CLIRelayConfig;
  return proto.protos.CLIRelayConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.CLIRelayConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.CLIRelayConfig}
 */
proto.protos.CLIRelayConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHttpListenAddress(value);
      break;
    case 2:
      var value = /** @type {!proto.protos.backends.Type} */ (reader.readEnum());
      msg.setBackendType(value);
      break;
    case 3:
      var value = new proto.protos.CLIRelayConfig.RelayBackend;
      reader.readMessage(value,proto.protos.CLIRelayConfig.RelayBackend.deserializeBinaryFromReader);
      msg.setRelayBackend(value);
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
proto.protos.CLIRelayConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.CLIRelayConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.CLIRelayConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHttpListenAddress();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getRelayBackend();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.protos.CLIRelayConfig.RelayBackend.serializeBinaryToWriter
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
proto.protos.CLIRelayConfig.RelayBackend.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.CLIRelayConfig.RelayBackend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.CLIRelayConfig.RelayBackend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.toObject = function(includeInstance, msg) {
  var f, obj = {
    kafka: (f = msg.getKafka()) && proto.protos.CLIRelayConfig.RelayBackend.Kafka.toObject(includeInstance, f),
    awssqs: (f = msg.getAwssqs()) && proto.protos.CLIRelayConfig.RelayBackend.AWSSQS.toObject(includeInstance, f),
    mongo: (f = msg.getMongo()) && proto.protos.CLIRelayConfig.RelayBackend.Mongo.toObject(includeInstance, f),
    nsq: (f = msg.getNsq()) && proto.protos.CLIRelayConfig.RelayBackend.NSQ.toObject(includeInstance, f),
    rabbit: (f = msg.getRabbit()) && proto.protos.CLIRelayConfig.RelayBackend.Rabbit.toObject(includeInstance, f),
    mqtt: (f = msg.getMqtt()) && proto.protos.CLIRelayConfig.RelayBackend.MQTT.toObject(includeInstance, f),
    azureServiceBus: (f = msg.getAzureServiceBus()) && proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus.toObject(includeInstance, f),
    gcpPubsub: (f = msg.getGcpPubsub()) && proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub.toObject(includeInstance, f),
    kubemqQueue: (f = msg.getKubemqQueue()) && proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue.toObject(includeInstance, f),
    redisPubsub: (f = msg.getRedisPubsub()) && proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub.toObject(includeInstance, f),
    redisStreams: (f = msg.getRedisStreams()) && proto.protos.CLIRelayConfig.RelayBackend.RedisStreams.toObject(includeInstance, f),
    postgres: (f = msg.getPostgres()) && proto.protos.CLIRelayConfig.RelayBackend.Postgres.toObject(includeInstance, f)
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
 * @return {!proto.protos.CLIRelayConfig.RelayBackend}
 */
proto.protos.CLIRelayConfig.RelayBackend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.CLIRelayConfig.RelayBackend;
  return proto.protos.CLIRelayConfig.RelayBackend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend}
 */
proto.protos.CLIRelayConfig.RelayBackend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protos.CLIRelayConfig.RelayBackend.Kafka;
      reader.readMessage(value,proto.protos.CLIRelayConfig.RelayBackend.Kafka.deserializeBinaryFromReader);
      msg.setKafka(value);
      break;
    case 2:
      var value = new proto.protos.CLIRelayConfig.RelayBackend.AWSSQS;
      reader.readMessage(value,proto.protos.CLIRelayConfig.RelayBackend.AWSSQS.deserializeBinaryFromReader);
      msg.setAwssqs(value);
      break;
    case 3:
      var value = new proto.protos.CLIRelayConfig.RelayBackend.Mongo;
      reader.readMessage(value,proto.protos.CLIRelayConfig.RelayBackend.Mongo.deserializeBinaryFromReader);
      msg.setMongo(value);
      break;
    case 4:
      var value = new proto.protos.CLIRelayConfig.RelayBackend.NSQ;
      reader.readMessage(value,proto.protos.CLIRelayConfig.RelayBackend.NSQ.deserializeBinaryFromReader);
      msg.setNsq(value);
      break;
    case 5:
      var value = new proto.protos.CLIRelayConfig.RelayBackend.Rabbit;
      reader.readMessage(value,proto.protos.CLIRelayConfig.RelayBackend.Rabbit.deserializeBinaryFromReader);
      msg.setRabbit(value);
      break;
    case 6:
      var value = new proto.protos.CLIRelayConfig.RelayBackend.MQTT;
      reader.readMessage(value,proto.protos.CLIRelayConfig.RelayBackend.MQTT.deserializeBinaryFromReader);
      msg.setMqtt(value);
      break;
    case 7:
      var value = new proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus;
      reader.readMessage(value,proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus.deserializeBinaryFromReader);
      msg.setAzureServiceBus(value);
      break;
    case 8:
      var value = new proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub;
      reader.readMessage(value,proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub.deserializeBinaryFromReader);
      msg.setGcpPubsub(value);
      break;
    case 9:
      var value = new proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue;
      reader.readMessage(value,proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue.deserializeBinaryFromReader);
      msg.setKubemqQueue(value);
      break;
    case 10:
      var value = new proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub;
      reader.readMessage(value,proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub.deserializeBinaryFromReader);
      msg.setRedisPubsub(value);
      break;
    case 11:
      var value = new proto.protos.CLIRelayConfig.RelayBackend.RedisStreams;
      reader.readMessage(value,proto.protos.CLIRelayConfig.RelayBackend.RedisStreams.deserializeBinaryFromReader);
      msg.setRedisStreams(value);
      break;
    case 12:
      var value = new proto.protos.CLIRelayConfig.RelayBackend.Postgres;
      reader.readMessage(value,proto.protos.CLIRelayConfig.RelayBackend.Postgres.deserializeBinaryFromReader);
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
proto.protos.CLIRelayConfig.RelayBackend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.CLIRelayConfig.RelayBackend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKafka();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protos.CLIRelayConfig.RelayBackend.Kafka.serializeBinaryToWriter
    );
  }
  f = message.getAwssqs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.protos.CLIRelayConfig.RelayBackend.AWSSQS.serializeBinaryToWriter
    );
  }
  f = message.getMongo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.protos.CLIRelayConfig.RelayBackend.Mongo.serializeBinaryToWriter
    );
  }
  f = message.getNsq();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.protos.CLIRelayConfig.RelayBackend.NSQ.serializeBinaryToWriter
    );
  }
  f = message.getRabbit();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.protos.CLIRelayConfig.RelayBackend.Rabbit.serializeBinaryToWriter
    );
  }
  f = message.getMqtt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.protos.CLIRelayConfig.RelayBackend.MQTT.serializeBinaryToWriter
    );
  }
  f = message.getAzureServiceBus();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus.serializeBinaryToWriter
    );
  }
  f = message.getGcpPubsub();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub.serializeBinaryToWriter
    );
  }
  f = message.getKubemqQueue();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue.serializeBinaryToWriter
    );
  }
  f = message.getRedisPubsub();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub.serializeBinaryToWriter
    );
  }
  f = message.getRedisStreams();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.protos.CLIRelayConfig.RelayBackend.RedisStreams.serializeBinaryToWriter
    );
  }
  f = message.getPostgres();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.protos.CLIRelayConfig.RelayBackend.Postgres.serializeBinaryToWriter
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
proto.protos.CLIRelayConfig.RelayBackend.Kafka.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.CLIRelayConfig.RelayBackend.Kafka.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.Kafka} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.Kafka.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Kafka}
 */
proto.protos.CLIRelayConfig.RelayBackend.Kafka.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.CLIRelayConfig.RelayBackend.Kafka;
  return proto.protos.CLIRelayConfig.RelayBackend.Kafka.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.Kafka} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Kafka}
 */
proto.protos.CLIRelayConfig.RelayBackend.Kafka.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protos.CLIRelayConfig.RelayBackend.Kafka.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.CLIRelayConfig.RelayBackend.Kafka.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.Kafka} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.Kafka.serializeBinaryToWriter = function(message, writer) {
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
proto.protos.CLIRelayConfig.RelayBackend.Kafka.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.KafkaConn} */ (
    jspb.Message.getWrapperField(this, backends_kafka_pb.KafkaConn, 1));
};


/**
 * @param {?proto.protos.backends.KafkaConn|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Kafka} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.Kafka.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Kafka} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.Kafka.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.Kafka.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.KafkaReadArgs args = 2;
 * @return {?proto.protos.backends.KafkaReadArgs}
 */
proto.protos.CLIRelayConfig.RelayBackend.Kafka.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.KafkaReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_kafka_pb.KafkaReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.KafkaReadArgs|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Kafka} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.Kafka.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Kafka} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.Kafka.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.Kafka.prototype.hasArgs = function() {
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
proto.protos.CLIRelayConfig.RelayBackend.AWSSQS.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.CLIRelayConfig.RelayBackend.AWSSQS.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.AWSSQS} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.AWSSQS.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.AWSSQS}
 */
proto.protos.CLIRelayConfig.RelayBackend.AWSSQS.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.CLIRelayConfig.RelayBackend.AWSSQS;
  return proto.protos.CLIRelayConfig.RelayBackend.AWSSQS.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.AWSSQS} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.AWSSQS}
 */
proto.protos.CLIRelayConfig.RelayBackend.AWSSQS.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protos.CLIRelayConfig.RelayBackend.AWSSQS.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.CLIRelayConfig.RelayBackend.AWSSQS.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.AWSSQS} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.AWSSQS.serializeBinaryToWriter = function(message, writer) {
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
proto.protos.CLIRelayConfig.RelayBackend.AWSSQS.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.AWSSQSConn} */ (
    jspb.Message.getWrapperField(this, backends_aws$sqs_pb.AWSSQSConn, 1));
};


/**
 * @param {?proto.protos.backends.AWSSQSConn|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.AWSSQS} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.AWSSQS.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.AWSSQS} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.AWSSQS.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.AWSSQS.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.AWSSQSReadArgs args = 2;
 * @return {?proto.protos.backends.AWSSQSReadArgs}
 */
proto.protos.CLIRelayConfig.RelayBackend.AWSSQS.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.AWSSQSReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_aws$sqs_pb.AWSSQSReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.AWSSQSReadArgs|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.AWSSQS} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.AWSSQS.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.AWSSQS} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.AWSSQS.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.AWSSQS.prototype.hasArgs = function() {
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
proto.protos.CLIRelayConfig.RelayBackend.Mongo.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.CLIRelayConfig.RelayBackend.Mongo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.Mongo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.Mongo.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Mongo}
 */
proto.protos.CLIRelayConfig.RelayBackend.Mongo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.CLIRelayConfig.RelayBackend.Mongo;
  return proto.protos.CLIRelayConfig.RelayBackend.Mongo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.Mongo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Mongo}
 */
proto.protos.CLIRelayConfig.RelayBackend.Mongo.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protos.CLIRelayConfig.RelayBackend.Mongo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.CLIRelayConfig.RelayBackend.Mongo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.Mongo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.Mongo.serializeBinaryToWriter = function(message, writer) {
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
proto.protos.CLIRelayConfig.RelayBackend.Mongo.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.MongoConn} */ (
    jspb.Message.getWrapperField(this, backends_mongo_pb.MongoConn, 1));
};


/**
 * @param {?proto.protos.backends.MongoConn|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Mongo} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.Mongo.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Mongo} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.Mongo.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.Mongo.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.MongoReadArgs args = 2;
 * @return {?proto.protos.backends.MongoReadArgs}
 */
proto.protos.CLIRelayConfig.RelayBackend.Mongo.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.MongoReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_mongo_pb.MongoReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.MongoReadArgs|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Mongo} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.Mongo.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Mongo} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.Mongo.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.Mongo.prototype.hasArgs = function() {
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
proto.protos.CLIRelayConfig.RelayBackend.NSQ.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.CLIRelayConfig.RelayBackend.NSQ.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.NSQ} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.NSQ.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.NSQ}
 */
proto.protos.CLIRelayConfig.RelayBackend.NSQ.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.CLIRelayConfig.RelayBackend.NSQ;
  return proto.protos.CLIRelayConfig.RelayBackend.NSQ.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.NSQ} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.NSQ}
 */
proto.protos.CLIRelayConfig.RelayBackend.NSQ.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protos.CLIRelayConfig.RelayBackend.NSQ.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.CLIRelayConfig.RelayBackend.NSQ.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.NSQ} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.NSQ.serializeBinaryToWriter = function(message, writer) {
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
proto.protos.CLIRelayConfig.RelayBackend.NSQ.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.NSQConn} */ (
    jspb.Message.getWrapperField(this, backends_nsq_pb.NSQConn, 1));
};


/**
 * @param {?proto.protos.backends.NSQConn|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.NSQ} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.NSQ.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.NSQ} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.NSQ.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.NSQ.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.NSQReadArgs args = 2;
 * @return {?proto.protos.backends.NSQReadArgs}
 */
proto.protos.CLIRelayConfig.RelayBackend.NSQ.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.NSQReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_nsq_pb.NSQReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.NSQReadArgs|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.NSQ} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.NSQ.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.NSQ} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.NSQ.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.NSQ.prototype.hasArgs = function() {
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
proto.protos.CLIRelayConfig.RelayBackend.Postgres.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.CLIRelayConfig.RelayBackend.Postgres.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.Postgres} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.Postgres.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Postgres}
 */
proto.protos.CLIRelayConfig.RelayBackend.Postgres.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.CLIRelayConfig.RelayBackend.Postgres;
  return proto.protos.CLIRelayConfig.RelayBackend.Postgres.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.Postgres} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Postgres}
 */
proto.protos.CLIRelayConfig.RelayBackend.Postgres.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protos.CLIRelayConfig.RelayBackend.Postgres.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.CLIRelayConfig.RelayBackend.Postgres.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.Postgres} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.Postgres.serializeBinaryToWriter = function(message, writer) {
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
proto.protos.CLIRelayConfig.RelayBackend.Postgres.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.PostgresConn} */ (
    jspb.Message.getWrapperField(this, backends_postgres_pb.PostgresConn, 1));
};


/**
 * @param {?proto.protos.backends.PostgresConn|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Postgres} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.Postgres.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Postgres} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.Postgres.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.Postgres.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.PostgresReadArgs args = 2;
 * @return {?proto.protos.backends.PostgresReadArgs}
 */
proto.protos.CLIRelayConfig.RelayBackend.Postgres.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.PostgresReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_postgres_pb.PostgresReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.PostgresReadArgs|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Postgres} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.Postgres.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Postgres} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.Postgres.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.Postgres.prototype.hasArgs = function() {
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
proto.protos.CLIRelayConfig.RelayBackend.Rabbit.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.CLIRelayConfig.RelayBackend.Rabbit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.Rabbit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.Rabbit.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Rabbit}
 */
proto.protos.CLIRelayConfig.RelayBackend.Rabbit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.CLIRelayConfig.RelayBackend.Rabbit;
  return proto.protos.CLIRelayConfig.RelayBackend.Rabbit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.Rabbit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Rabbit}
 */
proto.protos.CLIRelayConfig.RelayBackend.Rabbit.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protos.CLIRelayConfig.RelayBackend.Rabbit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.CLIRelayConfig.RelayBackend.Rabbit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.Rabbit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.Rabbit.serializeBinaryToWriter = function(message, writer) {
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
proto.protos.CLIRelayConfig.RelayBackend.Rabbit.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.RabbitConn} */ (
    jspb.Message.getWrapperField(this, backends_rabbit_pb.RabbitConn, 1));
};


/**
 * @param {?proto.protos.backends.RabbitConn|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Rabbit} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.Rabbit.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Rabbit} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.Rabbit.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.Rabbit.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.RabbitReadArgs args = 2;
 * @return {?proto.protos.backends.RabbitReadArgs}
 */
proto.protos.CLIRelayConfig.RelayBackend.Rabbit.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.RabbitReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_rabbit_pb.RabbitReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.RabbitReadArgs|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Rabbit} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.Rabbit.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.Rabbit} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.Rabbit.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.Rabbit.prototype.hasArgs = function() {
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
proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub}
 */
proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub;
  return proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub}
 */
proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub.serializeBinaryToWriter = function(message, writer) {
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
proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.RedisPubSubConn} */ (
    jspb.Message.getWrapperField(this, backends_redis$pubsub_pb.RedisPubSubConn, 1));
};


/**
 * @param {?proto.protos.backends.RedisPubSubConn|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.RedisPubSubReadArgs args = 2;
 * @return {?proto.protos.backends.RedisPubSubReadArgs}
 */
proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.RedisPubSubReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_redis$pubsub_pb.RedisPubSubReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.RedisPubSubReadArgs|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub.prototype.hasArgs = function() {
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
proto.protos.CLIRelayConfig.RelayBackend.RedisStreams.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.CLIRelayConfig.RelayBackend.RedisStreams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.RedisStreams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.RedisStreams.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.RedisStreams}
 */
proto.protos.CLIRelayConfig.RelayBackend.RedisStreams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.CLIRelayConfig.RelayBackend.RedisStreams;
  return proto.protos.CLIRelayConfig.RelayBackend.RedisStreams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.RedisStreams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.RedisStreams}
 */
proto.protos.CLIRelayConfig.RelayBackend.RedisStreams.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protos.CLIRelayConfig.RelayBackend.RedisStreams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.CLIRelayConfig.RelayBackend.RedisStreams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.RedisStreams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.RedisStreams.serializeBinaryToWriter = function(message, writer) {
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
proto.protos.CLIRelayConfig.RelayBackend.RedisStreams.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.RedisStreamsConn} */ (
    jspb.Message.getWrapperField(this, backends_redis$streams_pb.RedisStreamsConn, 1));
};


/**
 * @param {?proto.protos.backends.RedisStreamsConn|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.RedisStreams} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.RedisStreams.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.RedisStreams} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.RedisStreams.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.RedisStreams.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.RedisStreamsReadArgs args = 2;
 * @return {?proto.protos.backends.RedisStreamsReadArgs}
 */
proto.protos.CLIRelayConfig.RelayBackend.RedisStreams.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.RedisStreamsReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_redis$streams_pb.RedisStreamsReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.RedisStreamsReadArgs|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.RedisStreams} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.RedisStreams.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.RedisStreams} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.RedisStreams.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.RedisStreams.prototype.hasArgs = function() {
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
proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus}
 */
proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus;
  return proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus}
 */
proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus.serializeBinaryToWriter = function(message, writer) {
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
proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.AzureServiceBusConn} */ (
    jspb.Message.getWrapperField(this, backends_azure$service$bus_pb.AzureServiceBusConn, 1));
};


/**
 * @param {?proto.protos.backends.AzureServiceBusConn|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.AzureServiceBusReadArgs args = 2;
 * @return {?proto.protos.backends.AzureServiceBusReadArgs}
 */
proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.AzureServiceBusReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_azure$service$bus_pb.AzureServiceBusReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.AzureServiceBusReadArgs|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus.prototype.hasArgs = function() {
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
proto.protos.CLIRelayConfig.RelayBackend.MQTT.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.CLIRelayConfig.RelayBackend.MQTT.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.MQTT} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.MQTT.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.MQTT}
 */
proto.protos.CLIRelayConfig.RelayBackend.MQTT.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.CLIRelayConfig.RelayBackend.MQTT;
  return proto.protos.CLIRelayConfig.RelayBackend.MQTT.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.MQTT} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.MQTT}
 */
proto.protos.CLIRelayConfig.RelayBackend.MQTT.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protos.CLIRelayConfig.RelayBackend.MQTT.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.CLIRelayConfig.RelayBackend.MQTT.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.MQTT} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.MQTT.serializeBinaryToWriter = function(message, writer) {
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
proto.protos.CLIRelayConfig.RelayBackend.MQTT.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.MQTTConn} */ (
    jspb.Message.getWrapperField(this, backends_mqtt_pb.MQTTConn, 1));
};


/**
 * @param {?proto.protos.backends.MQTTConn|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.MQTT} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.MQTT.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.MQTT} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.MQTT.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.MQTT.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.MQTTReadArgs args = 2;
 * @return {?proto.protos.backends.MQTTReadArgs}
 */
proto.protos.CLIRelayConfig.RelayBackend.MQTT.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.MQTTReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_mqtt_pb.MQTTReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.MQTTReadArgs|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.MQTT} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.MQTT.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.MQTT} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.MQTT.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.MQTT.prototype.hasArgs = function() {
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
proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub}
 */
proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub;
  return proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub}
 */
proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub.serializeBinaryToWriter = function(message, writer) {
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
proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.GCPPubSubConn} */ (
    jspb.Message.getWrapperField(this, backends_gcp$pubsub_pb.GCPPubSubConn, 1));
};


/**
 * @param {?proto.protos.backends.GCPPubSubConn|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.GCPPubSubReadArgs args = 2;
 * @return {?proto.protos.backends.GCPPubSubReadArgs}
 */
proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.GCPPubSubReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_gcp$pubsub_pb.GCPPubSubReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.GCPPubSubReadArgs|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub.prototype.hasArgs = function() {
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
proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue}
 */
proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue;
  return proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue}
 */
proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue.serializeBinaryToWriter = function(message, writer) {
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
proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue.prototype.getConn = function() {
  return /** @type{?proto.protos.backends.KubeMQQueueConn} */ (
    jspb.Message.getWrapperField(this, backends_kubemq$queue_pb.KubeMQQueueConn, 1));
};


/**
 * @param {?proto.protos.backends.KubeMQQueueConn|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue.prototype.setConn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue.prototype.clearConn = function() {
  return this.setConn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue.prototype.hasConn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.KubeMQQueueReadArgs args = 2;
 * @return {?proto.protos.backends.KubeMQQueueReadArgs}
 */
proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue.prototype.getArgs = function() {
  return /** @type{?proto.protos.backends.KubeMQQueueReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_kubemq$queue_pb.KubeMQQueueReadArgs, 2));
};


/**
 * @param {?proto.protos.backends.KubeMQQueueReadArgs|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue.prototype.hasArgs = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Kafka kafka = 1;
 * @return {?proto.protos.CLIRelayConfig.RelayBackend.Kafka}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.getKafka = function() {
  return /** @type{?proto.protos.CLIRelayConfig.RelayBackend.Kafka} */ (
    jspb.Message.getWrapperField(this, proto.protos.CLIRelayConfig.RelayBackend.Kafka, 1));
};


/**
 * @param {?proto.protos.CLIRelayConfig.RelayBackend.Kafka|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.prototype.setKafka = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.clearKafka = function() {
  return this.setKafka(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.hasKafka = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AWSSQS awssqs = 2;
 * @return {?proto.protos.CLIRelayConfig.RelayBackend.AWSSQS}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.getAwssqs = function() {
  return /** @type{?proto.protos.CLIRelayConfig.RelayBackend.AWSSQS} */ (
    jspb.Message.getWrapperField(this, proto.protos.CLIRelayConfig.RelayBackend.AWSSQS, 2));
};


/**
 * @param {?proto.protos.CLIRelayConfig.RelayBackend.AWSSQS|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.prototype.setAwssqs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.clearAwssqs = function() {
  return this.setAwssqs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.hasAwssqs = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Mongo mongo = 3;
 * @return {?proto.protos.CLIRelayConfig.RelayBackend.Mongo}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.getMongo = function() {
  return /** @type{?proto.protos.CLIRelayConfig.RelayBackend.Mongo} */ (
    jspb.Message.getWrapperField(this, proto.protos.CLIRelayConfig.RelayBackend.Mongo, 3));
};


/**
 * @param {?proto.protos.CLIRelayConfig.RelayBackend.Mongo|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.prototype.setMongo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.clearMongo = function() {
  return this.setMongo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.hasMongo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional NSQ nsq = 4;
 * @return {?proto.protos.CLIRelayConfig.RelayBackend.NSQ}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.getNsq = function() {
  return /** @type{?proto.protos.CLIRelayConfig.RelayBackend.NSQ} */ (
    jspb.Message.getWrapperField(this, proto.protos.CLIRelayConfig.RelayBackend.NSQ, 4));
};


/**
 * @param {?proto.protos.CLIRelayConfig.RelayBackend.NSQ|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.prototype.setNsq = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.clearNsq = function() {
  return this.setNsq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.hasNsq = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Rabbit rabbit = 5;
 * @return {?proto.protos.CLIRelayConfig.RelayBackend.Rabbit}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.getRabbit = function() {
  return /** @type{?proto.protos.CLIRelayConfig.RelayBackend.Rabbit} */ (
    jspb.Message.getWrapperField(this, proto.protos.CLIRelayConfig.RelayBackend.Rabbit, 5));
};


/**
 * @param {?proto.protos.CLIRelayConfig.RelayBackend.Rabbit|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.prototype.setRabbit = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.clearRabbit = function() {
  return this.setRabbit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.hasRabbit = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MQTT mqtt = 6;
 * @return {?proto.protos.CLIRelayConfig.RelayBackend.MQTT}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.getMqtt = function() {
  return /** @type{?proto.protos.CLIRelayConfig.RelayBackend.MQTT} */ (
    jspb.Message.getWrapperField(this, proto.protos.CLIRelayConfig.RelayBackend.MQTT, 6));
};


/**
 * @param {?proto.protos.CLIRelayConfig.RelayBackend.MQTT|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.prototype.setMqtt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.clearMqtt = function() {
  return this.setMqtt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.hasMqtt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional AzureServiceBus azure_service_bus = 7;
 * @return {?proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.getAzureServiceBus = function() {
  return /** @type{?proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus} */ (
    jspb.Message.getWrapperField(this, proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus, 7));
};


/**
 * @param {?proto.protos.CLIRelayConfig.RelayBackend.AzureServiceBus|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.prototype.setAzureServiceBus = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.clearAzureServiceBus = function() {
  return this.setAzureServiceBus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.hasAzureServiceBus = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional GCPPubSub gcp_pubsub = 8;
 * @return {?proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.getGcpPubsub = function() {
  return /** @type{?proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub} */ (
    jspb.Message.getWrapperField(this, proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub, 8));
};


/**
 * @param {?proto.protos.CLIRelayConfig.RelayBackend.GCPPubSub|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.prototype.setGcpPubsub = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.clearGcpPubsub = function() {
  return this.setGcpPubsub(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.hasGcpPubsub = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional KubeMQQueue kubemq_queue = 9;
 * @return {?proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.getKubemqQueue = function() {
  return /** @type{?proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue} */ (
    jspb.Message.getWrapperField(this, proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue, 9));
};


/**
 * @param {?proto.protos.CLIRelayConfig.RelayBackend.KubeMQQueue|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.prototype.setKubemqQueue = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.clearKubemqQueue = function() {
  return this.setKubemqQueue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.hasKubemqQueue = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional RedisPubSub redis_pubsub = 10;
 * @return {?proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.getRedisPubsub = function() {
  return /** @type{?proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub} */ (
    jspb.Message.getWrapperField(this, proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub, 10));
};


/**
 * @param {?proto.protos.CLIRelayConfig.RelayBackend.RedisPubSub|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.prototype.setRedisPubsub = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.clearRedisPubsub = function() {
  return this.setRedisPubsub(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.hasRedisPubsub = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional RedisStreams redis_streams = 11;
 * @return {?proto.protos.CLIRelayConfig.RelayBackend.RedisStreams}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.getRedisStreams = function() {
  return /** @type{?proto.protos.CLIRelayConfig.RelayBackend.RedisStreams} */ (
    jspb.Message.getWrapperField(this, proto.protos.CLIRelayConfig.RelayBackend.RedisStreams, 11));
};


/**
 * @param {?proto.protos.CLIRelayConfig.RelayBackend.RedisStreams|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.prototype.setRedisStreams = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.clearRedisStreams = function() {
  return this.setRedisStreams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.hasRedisStreams = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Postgres postgres = 12;
 * @return {?proto.protos.CLIRelayConfig.RelayBackend.Postgres}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.getPostgres = function() {
  return /** @type{?proto.protos.CLIRelayConfig.RelayBackend.Postgres} */ (
    jspb.Message.getWrapperField(this, proto.protos.CLIRelayConfig.RelayBackend.Postgres, 12));
};


/**
 * @param {?proto.protos.CLIRelayConfig.RelayBackend.Postgres|undefined} value
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
*/
proto.protos.CLIRelayConfig.RelayBackend.prototype.setPostgres = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig.RelayBackend} returns this
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.clearPostgres = function() {
  return this.setPostgres(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.RelayBackend.prototype.hasPostgres = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string http_listen_address = 1;
 * @return {string}
 */
proto.protos.CLIRelayConfig.prototype.getHttpListenAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.CLIRelayConfig} returns this
 */
proto.protos.CLIRelayConfig.prototype.setHttpListenAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional backends.Type _backend_type = 2;
 * @return {!proto.protos.backends.Type}
 */
proto.protos.CLIRelayConfig.prototype.getBackendType = function() {
  return /** @type {!proto.protos.backends.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.protos.backends.Type} value
 * @return {!proto.protos.CLIRelayConfig} returns this
 */
proto.protos.CLIRelayConfig.prototype.setBackendType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional RelayBackend _relay_backend = 3;
 * @return {?proto.protos.CLIRelayConfig.RelayBackend}
 */
proto.protos.CLIRelayConfig.prototype.getRelayBackend = function() {
  return /** @type{?proto.protos.CLIRelayConfig.RelayBackend} */ (
    jspb.Message.getWrapperField(this, proto.protos.CLIRelayConfig.RelayBackend, 3));
};


/**
 * @param {?proto.protos.CLIRelayConfig.RelayBackend|undefined} value
 * @return {!proto.protos.CLIRelayConfig} returns this
*/
proto.protos.CLIRelayConfig.prototype.setRelayBackend = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CLIRelayConfig} returns this
 */
proto.protos.CLIRelayConfig.prototype.clearRelayBackend = function() {
  return this.setRelayBackend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CLIRelayConfig.prototype.hasRelayBackend = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.protos.RelayConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.RelayConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.RelayConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.RelayConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    collectionToken: jspb.Message.getFieldWithDefault(msg, 1, ""),
    batchSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    batchMaxRetry: jspb.Message.getFieldWithDefault(msg, 3, 0),
    connectionId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    numWorkers: jspb.Message.getFieldWithDefault(msg, 5, 0),
    batchshGrpcAddress: jspb.Message.getFieldWithDefault(msg, 6, ""),
    batchshGrpcDisableTls: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    batchshGrpcTimeoutSeconds: jspb.Message.getFieldWithDefault(msg, 8, 0),
    relayId: jspb.Message.getFieldWithDefault(msg, 9, ""),
    cliConfig: (f = msg.getCliConfig()) && proto.protos.CLIRelayConfig.toObject(includeInstance, f)
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
 * @return {!proto.protos.RelayConfig}
 */
proto.protos.RelayConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.RelayConfig;
  return proto.protos.RelayConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.RelayConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.RelayConfig}
 */
proto.protos.RelayConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionToken(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBatchSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBatchMaxRetry(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumWorkers(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBatchshGrpcAddress(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBatchshGrpcDisableTls(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBatchshGrpcTimeoutSeconds(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setRelayId(value);
      break;
    case 10:
      var value = new proto.protos.CLIRelayConfig;
      reader.readMessage(value,proto.protos.CLIRelayConfig.deserializeBinaryFromReader);
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
proto.protos.RelayConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.RelayConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.RelayConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.RelayConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCollectionToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBatchSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getBatchMaxRetry();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getConnectionId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNumWorkers();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getBatchshGrpcAddress();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBatchshGrpcDisableTls();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getBatchshGrpcTimeoutSeconds();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getRelayId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCliConfig();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.protos.CLIRelayConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string collection_token = 1;
 * @return {string}
 */
proto.protos.RelayConfig.prototype.getCollectionToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.RelayConfig} returns this
 */
proto.protos.RelayConfig.prototype.setCollectionToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 batch_size = 2;
 * @return {number}
 */
proto.protos.RelayConfig.prototype.getBatchSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protos.RelayConfig} returns this
 */
proto.protos.RelayConfig.prototype.setBatchSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 batch_max_retry = 3;
 * @return {number}
 */
proto.protos.RelayConfig.prototype.getBatchMaxRetry = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.protos.RelayConfig} returns this
 */
proto.protos.RelayConfig.prototype.setBatchMaxRetry = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string connection_id = 4;
 * @return {string}
 */
proto.protos.RelayConfig.prototype.getConnectionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.RelayConfig} returns this
 */
proto.protos.RelayConfig.prototype.setConnectionId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 num_workers = 5;
 * @return {number}
 */
proto.protos.RelayConfig.prototype.getNumWorkers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.protos.RelayConfig} returns this
 */
proto.protos.RelayConfig.prototype.setNumWorkers = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string _batchsh_grpc_address = 6;
 * @return {string}
 */
proto.protos.RelayConfig.prototype.getBatchshGrpcAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.RelayConfig} returns this
 */
proto.protos.RelayConfig.prototype.setBatchshGrpcAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool _batchsh_grpc_disable_tls = 7;
 * @return {boolean}
 */
proto.protos.RelayConfig.prototype.getBatchshGrpcDisableTls = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protos.RelayConfig} returns this
 */
proto.protos.RelayConfig.prototype.setBatchshGrpcDisableTls = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional int32 _batchsh_grpc_timeout_seconds = 8;
 * @return {number}
 */
proto.protos.RelayConfig.prototype.getBatchshGrpcTimeoutSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.protos.RelayConfig} returns this
 */
proto.protos.RelayConfig.prototype.setBatchshGrpcTimeoutSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string _relay_id = 9;
 * @return {string}
 */
proto.protos.RelayConfig.prototype.getRelayId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.RelayConfig} returns this
 */
proto.protos.RelayConfig.prototype.setRelayId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional CLIRelayConfig _cli_config = 10;
 * @return {?proto.protos.CLIRelayConfig}
 */
proto.protos.RelayConfig.prototype.getCliConfig = function() {
  return /** @type{?proto.protos.CLIRelayConfig} */ (
    jspb.Message.getWrapperField(this, proto.protos.CLIRelayConfig, 10));
};


/**
 * @param {?proto.protos.CLIRelayConfig|undefined} value
 * @return {!proto.protos.RelayConfig} returns this
*/
proto.protos.RelayConfig.prototype.setCliConfig = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.RelayConfig} returns this
 */
proto.protos.RelayConfig.prototype.clearCliConfig = function() {
  return this.setCliConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.RelayConfig.prototype.hasCliConfig = function() {
  return jspb.Message.getField(this, 10) != null;
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
proto.protos.GetAllRelaysRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.GetAllRelaysRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.GetAllRelaysRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.GetAllRelaysRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protos.GetAllRelaysRequest}
 */
proto.protos.GetAllRelaysRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.GetAllRelaysRequest;
  return proto.protos.GetAllRelaysRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.GetAllRelaysRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.GetAllRelaysRequest}
 */
proto.protos.GetAllRelaysRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protos.GetAllRelaysRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.GetAllRelaysRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.GetAllRelaysRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.GetAllRelaysRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.protos.GetAllRelaysRequest.prototype.getAuth = function() {
  return /** @type{?proto.protos.common.Auth} */ (
    jspb.Message.getWrapperField(this, common_auth_pb.Auth, 9999));
};


/**
 * @param {?proto.protos.common.Auth|undefined} value
 * @return {!proto.protos.GetAllRelaysRequest} returns this
*/
proto.protos.GetAllRelaysRequest.prototype.setAuth = function(value) {
  return jspb.Message.setWrapperField(this, 9999, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.GetAllRelaysRequest} returns this
 */
proto.protos.GetAllRelaysRequest.prototype.clearAuth = function() {
  return this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.GetAllRelaysRequest.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 9999) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protos.GetAllRelaysResponse.repeatedFields_ = [1];



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
proto.protos.GetAllRelaysResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.GetAllRelaysResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.GetAllRelaysResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.GetAllRelaysResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && common_status_pb.Status.toObject(includeInstance, f),
    configsList: jspb.Message.toObjectList(msg.getConfigsList(),
    proto.protos.RelayConfig.toObject, includeInstance)
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
 * @return {!proto.protos.GetAllRelaysResponse}
 */
proto.protos.GetAllRelaysResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.GetAllRelaysResponse;
  return proto.protos.GetAllRelaysResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.GetAllRelaysResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.GetAllRelaysResponse}
 */
proto.protos.GetAllRelaysResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.protos.RelayConfig;
      reader.readMessage(value,proto.protos.RelayConfig.deserializeBinaryFromReader);
      msg.addConfigs(value);
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
proto.protos.GetAllRelaysResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.GetAllRelaysResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.GetAllRelaysResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.GetAllRelaysResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      common_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getConfigsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protos.RelayConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional common.Status status = 1000;
 * @return {?proto.protos.common.Status}
 */
proto.protos.GetAllRelaysResponse.prototype.getStatus = function() {
  return /** @type{?proto.protos.common.Status} */ (
    jspb.Message.getWrapperField(this, common_status_pb.Status, 1000));
};


/**
 * @param {?proto.protos.common.Status|undefined} value
 * @return {!proto.protos.GetAllRelaysResponse} returns this
*/
proto.protos.GetAllRelaysResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.GetAllRelaysResponse} returns this
 */
proto.protos.GetAllRelaysResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.GetAllRelaysResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1000) != null;
};


/**
 * repeated RelayConfig configs = 1;
 * @return {!Array<!proto.protos.RelayConfig>}
 */
proto.protos.GetAllRelaysResponse.prototype.getConfigsList = function() {
  return /** @type{!Array<!proto.protos.RelayConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protos.RelayConfig, 1));
};


/**
 * @param {!Array<!proto.protos.RelayConfig>} value
 * @return {!proto.protos.GetAllRelaysResponse} returns this
*/
proto.protos.GetAllRelaysResponse.prototype.setConfigsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protos.RelayConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protos.RelayConfig}
 */
proto.protos.GetAllRelaysResponse.prototype.addConfigs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protos.RelayConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protos.GetAllRelaysResponse} returns this
 */
proto.protos.GetAllRelaysResponse.prototype.clearConfigsList = function() {
  return this.setConfigsList([]);
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
proto.protos.GetRelayRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.GetRelayRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.GetRelayRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.GetRelayRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && common_auth_pb.Auth.toObject(includeInstance, f),
    relayId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.protos.GetRelayRequest}
 */
proto.protos.GetRelayRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.GetRelayRequest;
  return proto.protos.GetRelayRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.GetRelayRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.GetRelayRequest}
 */
proto.protos.GetRelayRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setRelayId(value);
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
proto.protos.GetRelayRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.GetRelayRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.GetRelayRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.GetRelayRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      9999,
      f,
      common_auth_pb.Auth.serializeBinaryToWriter
    );
  }
  f = message.getRelayId();
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
proto.protos.GetRelayRequest.prototype.getAuth = function() {
  return /** @type{?proto.protos.common.Auth} */ (
    jspb.Message.getWrapperField(this, common_auth_pb.Auth, 9999));
};


/**
 * @param {?proto.protos.common.Auth|undefined} value
 * @return {!proto.protos.GetRelayRequest} returns this
*/
proto.protos.GetRelayRequest.prototype.setAuth = function(value) {
  return jspb.Message.setWrapperField(this, 9999, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.GetRelayRequest} returns this
 */
proto.protos.GetRelayRequest.prototype.clearAuth = function() {
  return this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.GetRelayRequest.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 9999) != null;
};


/**
 * optional string relay_id = 1;
 * @return {string}
 */
proto.protos.GetRelayRequest.prototype.getRelayId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.GetRelayRequest} returns this
 */
proto.protos.GetRelayRequest.prototype.setRelayId = function(value) {
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
proto.protos.GetRelayResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.GetRelayResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.GetRelayResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.GetRelayResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && common_status_pb.Status.toObject(includeInstance, f),
    config: (f = msg.getConfig()) && proto.protos.RelayConfig.toObject(includeInstance, f)
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
 * @return {!proto.protos.GetRelayResponse}
 */
proto.protos.GetRelayResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.GetRelayResponse;
  return proto.protos.GetRelayResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.GetRelayResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.GetRelayResponse}
 */
proto.protos.GetRelayResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.protos.RelayConfig;
      reader.readMessage(value,proto.protos.RelayConfig.deserializeBinaryFromReader);
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
proto.protos.GetRelayResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.GetRelayResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.GetRelayResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.GetRelayResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      common_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protos.RelayConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional common.Status status = 1000;
 * @return {?proto.protos.common.Status}
 */
proto.protos.GetRelayResponse.prototype.getStatus = function() {
  return /** @type{?proto.protos.common.Status} */ (
    jspb.Message.getWrapperField(this, common_status_pb.Status, 1000));
};


/**
 * @param {?proto.protos.common.Status|undefined} value
 * @return {!proto.protos.GetRelayResponse} returns this
*/
proto.protos.GetRelayResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.GetRelayResponse} returns this
 */
proto.protos.GetRelayResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.GetRelayResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1000) != null;
};


/**
 * optional RelayConfig config = 1;
 * @return {?proto.protos.RelayConfig}
 */
proto.protos.GetRelayResponse.prototype.getConfig = function() {
  return /** @type{?proto.protos.RelayConfig} */ (
    jspb.Message.getWrapperField(this, proto.protos.RelayConfig, 1));
};


/**
 * @param {?proto.protos.RelayConfig|undefined} value
 * @return {!proto.protos.GetRelayResponse} returns this
*/
proto.protos.GetRelayResponse.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.GetRelayResponse} returns this
 */
proto.protos.GetRelayResponse.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.GetRelayResponse.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.protos.CreateRelayRequest.oneofGroups_ = [[100,101,102,104,105,106,107,108,109,111,112]];

/**
 * @enum {number}
 */
proto.protos.CreateRelayRequest.BackendsCase = {
  BACKENDS_NOT_SET: 0,
  KAFKA: 100,
  MQTT: 101,
  AWSSQS: 102,
  MONGO: 104,
  GCP_PUBSUB: 105,
  AZURE_SERVICE_BUS: 106,
  NSQ: 107,
  POSTGRES: 108,
  RABBIT: 109,
  REDIS_PUBSUB: 111,
  REDIS_STREAMS: 112
};

/**
 * @return {proto.protos.CreateRelayRequest.BackendsCase}
 */
proto.protos.CreateRelayRequest.prototype.getBackendsCase = function() {
  return /** @type {proto.protos.CreateRelayRequest.BackendsCase} */(jspb.Message.computeOneofCase(this, proto.protos.CreateRelayRequest.oneofGroups_[0]));
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
proto.protos.CreateRelayRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.CreateRelayRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.CreateRelayRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CreateRelayRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && common_auth_pb.Auth.toObject(includeInstance, f),
    config: (f = msg.getConfig()) && proto.protos.RelayConfig.toObject(includeInstance, f),
    kafka: (f = msg.getKafka()) && backends_kafka_pb.KafkaReadArgs.toObject(includeInstance, f),
    mqtt: (f = msg.getMqtt()) && backends_mqtt_pb.MQTTReadArgs.toObject(includeInstance, f),
    awssqs: (f = msg.getAwssqs()) && backends_aws$sqs_pb.AWSSQSReadArgs.toObject(includeInstance, f),
    mongo: (f = msg.getMongo()) && backends_mongo_pb.MongoReadArgs.toObject(includeInstance, f),
    gcpPubsub: (f = msg.getGcpPubsub()) && backends_gcp$pubsub_pb.GCPPubSubReadArgs.toObject(includeInstance, f),
    azureServiceBus: (f = msg.getAzureServiceBus()) && backends_azure$service$bus_pb.AzureServiceBusReadArgs.toObject(includeInstance, f),
    nsq: (f = msg.getNsq()) && backends_nsq_pb.NSQReadArgs.toObject(includeInstance, f),
    postgres: (f = msg.getPostgres()) && backends_postgres_pb.PostgresReadArgs.toObject(includeInstance, f),
    rabbit: (f = msg.getRabbit()) && backends_rabbit_pb.RabbitReadArgs.toObject(includeInstance, f),
    redisPubsub: (f = msg.getRedisPubsub()) && backends_redis$pubsub_pb.RedisPubSubReadArgs.toObject(includeInstance, f),
    redisStreams: (f = msg.getRedisStreams()) && backends_redis$streams_pb.RedisStreamsReadArgs.toObject(includeInstance, f)
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
 * @return {!proto.protos.CreateRelayRequest}
 */
proto.protos.CreateRelayRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.CreateRelayRequest;
  return proto.protos.CreateRelayRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.CreateRelayRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.CreateRelayRequest}
 */
proto.protos.CreateRelayRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.protos.RelayConfig;
      reader.readMessage(value,proto.protos.RelayConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 100:
      var value = new backends_kafka_pb.KafkaReadArgs;
      reader.readMessage(value,backends_kafka_pb.KafkaReadArgs.deserializeBinaryFromReader);
      msg.setKafka(value);
      break;
    case 101:
      var value = new backends_mqtt_pb.MQTTReadArgs;
      reader.readMessage(value,backends_mqtt_pb.MQTTReadArgs.deserializeBinaryFromReader);
      msg.setMqtt(value);
      break;
    case 102:
      var value = new backends_aws$sqs_pb.AWSSQSReadArgs;
      reader.readMessage(value,backends_aws$sqs_pb.AWSSQSReadArgs.deserializeBinaryFromReader);
      msg.setAwssqs(value);
      break;
    case 104:
      var value = new backends_mongo_pb.MongoReadArgs;
      reader.readMessage(value,backends_mongo_pb.MongoReadArgs.deserializeBinaryFromReader);
      msg.setMongo(value);
      break;
    case 105:
      var value = new backends_gcp$pubsub_pb.GCPPubSubReadArgs;
      reader.readMessage(value,backends_gcp$pubsub_pb.GCPPubSubReadArgs.deserializeBinaryFromReader);
      msg.setGcpPubsub(value);
      break;
    case 106:
      var value = new backends_azure$service$bus_pb.AzureServiceBusReadArgs;
      reader.readMessage(value,backends_azure$service$bus_pb.AzureServiceBusReadArgs.deserializeBinaryFromReader);
      msg.setAzureServiceBus(value);
      break;
    case 107:
      var value = new backends_nsq_pb.NSQReadArgs;
      reader.readMessage(value,backends_nsq_pb.NSQReadArgs.deserializeBinaryFromReader);
      msg.setNsq(value);
      break;
    case 108:
      var value = new backends_postgres_pb.PostgresReadArgs;
      reader.readMessage(value,backends_postgres_pb.PostgresReadArgs.deserializeBinaryFromReader);
      msg.setPostgres(value);
      break;
    case 109:
      var value = new backends_rabbit_pb.RabbitReadArgs;
      reader.readMessage(value,backends_rabbit_pb.RabbitReadArgs.deserializeBinaryFromReader);
      msg.setRabbit(value);
      break;
    case 111:
      var value = new backends_redis$pubsub_pb.RedisPubSubReadArgs;
      reader.readMessage(value,backends_redis$pubsub_pb.RedisPubSubReadArgs.deserializeBinaryFromReader);
      msg.setRedisPubsub(value);
      break;
    case 112:
      var value = new backends_redis$streams_pb.RedisStreamsReadArgs;
      reader.readMessage(value,backends_redis$streams_pb.RedisStreamsReadArgs.deserializeBinaryFromReader);
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
proto.protos.CreateRelayRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.CreateRelayRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.CreateRelayRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CreateRelayRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.protos.RelayConfig.serializeBinaryToWriter
    );
  }
  f = message.getKafka();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      backends_kafka_pb.KafkaReadArgs.serializeBinaryToWriter
    );
  }
  f = message.getMqtt();
  if (f != null) {
    writer.writeMessage(
      101,
      f,
      backends_mqtt_pb.MQTTReadArgs.serializeBinaryToWriter
    );
  }
  f = message.getAwssqs();
  if (f != null) {
    writer.writeMessage(
      102,
      f,
      backends_aws$sqs_pb.AWSSQSReadArgs.serializeBinaryToWriter
    );
  }
  f = message.getMongo();
  if (f != null) {
    writer.writeMessage(
      104,
      f,
      backends_mongo_pb.MongoReadArgs.serializeBinaryToWriter
    );
  }
  f = message.getGcpPubsub();
  if (f != null) {
    writer.writeMessage(
      105,
      f,
      backends_gcp$pubsub_pb.GCPPubSubReadArgs.serializeBinaryToWriter
    );
  }
  f = message.getAzureServiceBus();
  if (f != null) {
    writer.writeMessage(
      106,
      f,
      backends_azure$service$bus_pb.AzureServiceBusReadArgs.serializeBinaryToWriter
    );
  }
  f = message.getNsq();
  if (f != null) {
    writer.writeMessage(
      107,
      f,
      backends_nsq_pb.NSQReadArgs.serializeBinaryToWriter
    );
  }
  f = message.getPostgres();
  if (f != null) {
    writer.writeMessage(
      108,
      f,
      backends_postgres_pb.PostgresReadArgs.serializeBinaryToWriter
    );
  }
  f = message.getRabbit();
  if (f != null) {
    writer.writeMessage(
      109,
      f,
      backends_rabbit_pb.RabbitReadArgs.serializeBinaryToWriter
    );
  }
  f = message.getRedisPubsub();
  if (f != null) {
    writer.writeMessage(
      111,
      f,
      backends_redis$pubsub_pb.RedisPubSubReadArgs.serializeBinaryToWriter
    );
  }
  f = message.getRedisStreams();
  if (f != null) {
    writer.writeMessage(
      112,
      f,
      backends_redis$streams_pb.RedisStreamsReadArgs.serializeBinaryToWriter
    );
  }
};


/**
 * optional common.Auth auth = 9999;
 * @return {?proto.protos.common.Auth}
 */
proto.protos.CreateRelayRequest.prototype.getAuth = function() {
  return /** @type{?proto.protos.common.Auth} */ (
    jspb.Message.getWrapperField(this, common_auth_pb.Auth, 9999));
};


/**
 * @param {?proto.protos.common.Auth|undefined} value
 * @return {!proto.protos.CreateRelayRequest} returns this
*/
proto.protos.CreateRelayRequest.prototype.setAuth = function(value) {
  return jspb.Message.setWrapperField(this, 9999, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CreateRelayRequest} returns this
 */
proto.protos.CreateRelayRequest.prototype.clearAuth = function() {
  return this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CreateRelayRequest.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 9999) != null;
};


/**
 * optional RelayConfig config = 1;
 * @return {?proto.protos.RelayConfig}
 */
proto.protos.CreateRelayRequest.prototype.getConfig = function() {
  return /** @type{?proto.protos.RelayConfig} */ (
    jspb.Message.getWrapperField(this, proto.protos.RelayConfig, 1));
};


/**
 * @param {?proto.protos.RelayConfig|undefined} value
 * @return {!proto.protos.CreateRelayRequest} returns this
*/
proto.protos.CreateRelayRequest.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CreateRelayRequest} returns this
 */
proto.protos.CreateRelayRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CreateRelayRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional backends.KafkaReadArgs kafka = 100;
 * @return {?proto.protos.backends.KafkaReadArgs}
 */
proto.protos.CreateRelayRequest.prototype.getKafka = function() {
  return /** @type{?proto.protos.backends.KafkaReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_kafka_pb.KafkaReadArgs, 100));
};


/**
 * @param {?proto.protos.backends.KafkaReadArgs|undefined} value
 * @return {!proto.protos.CreateRelayRequest} returns this
*/
proto.protos.CreateRelayRequest.prototype.setKafka = function(value) {
  return jspb.Message.setOneofWrapperField(this, 100, proto.protos.CreateRelayRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CreateRelayRequest} returns this
 */
proto.protos.CreateRelayRequest.prototype.clearKafka = function() {
  return this.setKafka(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CreateRelayRequest.prototype.hasKafka = function() {
  return jspb.Message.getField(this, 100) != null;
};


/**
 * optional backends.MQTTReadArgs mqtt = 101;
 * @return {?proto.protos.backends.MQTTReadArgs}
 */
proto.protos.CreateRelayRequest.prototype.getMqtt = function() {
  return /** @type{?proto.protos.backends.MQTTReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_mqtt_pb.MQTTReadArgs, 101));
};


/**
 * @param {?proto.protos.backends.MQTTReadArgs|undefined} value
 * @return {!proto.protos.CreateRelayRequest} returns this
*/
proto.protos.CreateRelayRequest.prototype.setMqtt = function(value) {
  return jspb.Message.setOneofWrapperField(this, 101, proto.protos.CreateRelayRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CreateRelayRequest} returns this
 */
proto.protos.CreateRelayRequest.prototype.clearMqtt = function() {
  return this.setMqtt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CreateRelayRequest.prototype.hasMqtt = function() {
  return jspb.Message.getField(this, 101) != null;
};


/**
 * optional backends.AWSSQSReadArgs awssqs = 102;
 * @return {?proto.protos.backends.AWSSQSReadArgs}
 */
proto.protos.CreateRelayRequest.prototype.getAwssqs = function() {
  return /** @type{?proto.protos.backends.AWSSQSReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_aws$sqs_pb.AWSSQSReadArgs, 102));
};


/**
 * @param {?proto.protos.backends.AWSSQSReadArgs|undefined} value
 * @return {!proto.protos.CreateRelayRequest} returns this
*/
proto.protos.CreateRelayRequest.prototype.setAwssqs = function(value) {
  return jspb.Message.setOneofWrapperField(this, 102, proto.protos.CreateRelayRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CreateRelayRequest} returns this
 */
proto.protos.CreateRelayRequest.prototype.clearAwssqs = function() {
  return this.setAwssqs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CreateRelayRequest.prototype.hasAwssqs = function() {
  return jspb.Message.getField(this, 102) != null;
};


/**
 * optional backends.MongoReadArgs mongo = 104;
 * @return {?proto.protos.backends.MongoReadArgs}
 */
proto.protos.CreateRelayRequest.prototype.getMongo = function() {
  return /** @type{?proto.protos.backends.MongoReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_mongo_pb.MongoReadArgs, 104));
};


/**
 * @param {?proto.protos.backends.MongoReadArgs|undefined} value
 * @return {!proto.protos.CreateRelayRequest} returns this
*/
proto.protos.CreateRelayRequest.prototype.setMongo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 104, proto.protos.CreateRelayRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CreateRelayRequest} returns this
 */
proto.protos.CreateRelayRequest.prototype.clearMongo = function() {
  return this.setMongo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CreateRelayRequest.prototype.hasMongo = function() {
  return jspb.Message.getField(this, 104) != null;
};


/**
 * optional backends.GCPPubSubReadArgs gcp_pubsub = 105;
 * @return {?proto.protos.backends.GCPPubSubReadArgs}
 */
proto.protos.CreateRelayRequest.prototype.getGcpPubsub = function() {
  return /** @type{?proto.protos.backends.GCPPubSubReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_gcp$pubsub_pb.GCPPubSubReadArgs, 105));
};


/**
 * @param {?proto.protos.backends.GCPPubSubReadArgs|undefined} value
 * @return {!proto.protos.CreateRelayRequest} returns this
*/
proto.protos.CreateRelayRequest.prototype.setGcpPubsub = function(value) {
  return jspb.Message.setOneofWrapperField(this, 105, proto.protos.CreateRelayRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CreateRelayRequest} returns this
 */
proto.protos.CreateRelayRequest.prototype.clearGcpPubsub = function() {
  return this.setGcpPubsub(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CreateRelayRequest.prototype.hasGcpPubsub = function() {
  return jspb.Message.getField(this, 105) != null;
};


/**
 * optional backends.AzureServiceBusReadArgs azure_service_bus = 106;
 * @return {?proto.protos.backends.AzureServiceBusReadArgs}
 */
proto.protos.CreateRelayRequest.prototype.getAzureServiceBus = function() {
  return /** @type{?proto.protos.backends.AzureServiceBusReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_azure$service$bus_pb.AzureServiceBusReadArgs, 106));
};


/**
 * @param {?proto.protos.backends.AzureServiceBusReadArgs|undefined} value
 * @return {!proto.protos.CreateRelayRequest} returns this
*/
proto.protos.CreateRelayRequest.prototype.setAzureServiceBus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 106, proto.protos.CreateRelayRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CreateRelayRequest} returns this
 */
proto.protos.CreateRelayRequest.prototype.clearAzureServiceBus = function() {
  return this.setAzureServiceBus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CreateRelayRequest.prototype.hasAzureServiceBus = function() {
  return jspb.Message.getField(this, 106) != null;
};


/**
 * optional backends.NSQReadArgs nsq = 107;
 * @return {?proto.protos.backends.NSQReadArgs}
 */
proto.protos.CreateRelayRequest.prototype.getNsq = function() {
  return /** @type{?proto.protos.backends.NSQReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_nsq_pb.NSQReadArgs, 107));
};


/**
 * @param {?proto.protos.backends.NSQReadArgs|undefined} value
 * @return {!proto.protos.CreateRelayRequest} returns this
*/
proto.protos.CreateRelayRequest.prototype.setNsq = function(value) {
  return jspb.Message.setOneofWrapperField(this, 107, proto.protos.CreateRelayRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CreateRelayRequest} returns this
 */
proto.protos.CreateRelayRequest.prototype.clearNsq = function() {
  return this.setNsq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CreateRelayRequest.prototype.hasNsq = function() {
  return jspb.Message.getField(this, 107) != null;
};


/**
 * optional backends.PostgresReadArgs postgres = 108;
 * @return {?proto.protos.backends.PostgresReadArgs}
 */
proto.protos.CreateRelayRequest.prototype.getPostgres = function() {
  return /** @type{?proto.protos.backends.PostgresReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_postgres_pb.PostgresReadArgs, 108));
};


/**
 * @param {?proto.protos.backends.PostgresReadArgs|undefined} value
 * @return {!proto.protos.CreateRelayRequest} returns this
*/
proto.protos.CreateRelayRequest.prototype.setPostgres = function(value) {
  return jspb.Message.setOneofWrapperField(this, 108, proto.protos.CreateRelayRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CreateRelayRequest} returns this
 */
proto.protos.CreateRelayRequest.prototype.clearPostgres = function() {
  return this.setPostgres(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CreateRelayRequest.prototype.hasPostgres = function() {
  return jspb.Message.getField(this, 108) != null;
};


/**
 * optional backends.RabbitReadArgs rabbit = 109;
 * @return {?proto.protos.backends.RabbitReadArgs}
 */
proto.protos.CreateRelayRequest.prototype.getRabbit = function() {
  return /** @type{?proto.protos.backends.RabbitReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_rabbit_pb.RabbitReadArgs, 109));
};


/**
 * @param {?proto.protos.backends.RabbitReadArgs|undefined} value
 * @return {!proto.protos.CreateRelayRequest} returns this
*/
proto.protos.CreateRelayRequest.prototype.setRabbit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 109, proto.protos.CreateRelayRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CreateRelayRequest} returns this
 */
proto.protos.CreateRelayRequest.prototype.clearRabbit = function() {
  return this.setRabbit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CreateRelayRequest.prototype.hasRabbit = function() {
  return jspb.Message.getField(this, 109) != null;
};


/**
 * optional backends.RedisPubSubReadArgs redis_pubsub = 111;
 * @return {?proto.protos.backends.RedisPubSubReadArgs}
 */
proto.protos.CreateRelayRequest.prototype.getRedisPubsub = function() {
  return /** @type{?proto.protos.backends.RedisPubSubReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_redis$pubsub_pb.RedisPubSubReadArgs, 111));
};


/**
 * @param {?proto.protos.backends.RedisPubSubReadArgs|undefined} value
 * @return {!proto.protos.CreateRelayRequest} returns this
*/
proto.protos.CreateRelayRequest.prototype.setRedisPubsub = function(value) {
  return jspb.Message.setOneofWrapperField(this, 111, proto.protos.CreateRelayRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CreateRelayRequest} returns this
 */
proto.protos.CreateRelayRequest.prototype.clearRedisPubsub = function() {
  return this.setRedisPubsub(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CreateRelayRequest.prototype.hasRedisPubsub = function() {
  return jspb.Message.getField(this, 111) != null;
};


/**
 * optional backends.RedisStreamsReadArgs redis_streams = 112;
 * @return {?proto.protos.backends.RedisStreamsReadArgs}
 */
proto.protos.CreateRelayRequest.prototype.getRedisStreams = function() {
  return /** @type{?proto.protos.backends.RedisStreamsReadArgs} */ (
    jspb.Message.getWrapperField(this, backends_redis$streams_pb.RedisStreamsReadArgs, 112));
};


/**
 * @param {?proto.protos.backends.RedisStreamsReadArgs|undefined} value
 * @return {!proto.protos.CreateRelayRequest} returns this
*/
proto.protos.CreateRelayRequest.prototype.setRedisStreams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 112, proto.protos.CreateRelayRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CreateRelayRequest} returns this
 */
proto.protos.CreateRelayRequest.prototype.clearRedisStreams = function() {
  return this.setRedisStreams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CreateRelayRequest.prototype.hasRedisStreams = function() {
  return jspb.Message.getField(this, 112) != null;
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
proto.protos.CreateRelayResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.CreateRelayResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.CreateRelayResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CreateRelayResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && common_status_pb.Status.toObject(includeInstance, f),
    relayId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.protos.CreateRelayResponse}
 */
proto.protos.CreateRelayResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.CreateRelayResponse;
  return proto.protos.CreateRelayResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.CreateRelayResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.CreateRelayResponse}
 */
proto.protos.CreateRelayResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setRelayId(value);
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
proto.protos.CreateRelayResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.CreateRelayResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.CreateRelayResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CreateRelayResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      common_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getRelayId();
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
proto.protos.CreateRelayResponse.prototype.getStatus = function() {
  return /** @type{?proto.protos.common.Status} */ (
    jspb.Message.getWrapperField(this, common_status_pb.Status, 1000));
};


/**
 * @param {?proto.protos.common.Status|undefined} value
 * @return {!proto.protos.CreateRelayResponse} returns this
*/
proto.protos.CreateRelayResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.CreateRelayResponse} returns this
 */
proto.protos.CreateRelayResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.CreateRelayResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1000) != null;
};


/**
 * optional string relay_id = 1;
 * @return {string}
 */
proto.protos.CreateRelayResponse.prototype.getRelayId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.CreateRelayResponse} returns this
 */
proto.protos.CreateRelayResponse.prototype.setRelayId = function(value) {
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
proto.protos.UpdateRelayRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.UpdateRelayRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.UpdateRelayRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.UpdateRelayRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && common_auth_pb.Auth.toObject(includeInstance, f),
    relayId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    config: (f = msg.getConfig()) && proto.protos.RelayConfig.toObject(includeInstance, f)
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
 * @return {!proto.protos.UpdateRelayRequest}
 */
proto.protos.UpdateRelayRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.UpdateRelayRequest;
  return proto.protos.UpdateRelayRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.UpdateRelayRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.UpdateRelayRequest}
 */
proto.protos.UpdateRelayRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setRelayId(value);
      break;
    case 2:
      var value = new proto.protos.RelayConfig;
      reader.readMessage(value,proto.protos.RelayConfig.deserializeBinaryFromReader);
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
proto.protos.UpdateRelayRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.UpdateRelayRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.UpdateRelayRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.UpdateRelayRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      9999,
      f,
      common_auth_pb.Auth.serializeBinaryToWriter
    );
  }
  f = message.getRelayId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.protos.RelayConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional common.Auth auth = 9999;
 * @return {?proto.protos.common.Auth}
 */
proto.protos.UpdateRelayRequest.prototype.getAuth = function() {
  return /** @type{?proto.protos.common.Auth} */ (
    jspb.Message.getWrapperField(this, common_auth_pb.Auth, 9999));
};


/**
 * @param {?proto.protos.common.Auth|undefined} value
 * @return {!proto.protos.UpdateRelayRequest} returns this
*/
proto.protos.UpdateRelayRequest.prototype.setAuth = function(value) {
  return jspb.Message.setWrapperField(this, 9999, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.UpdateRelayRequest} returns this
 */
proto.protos.UpdateRelayRequest.prototype.clearAuth = function() {
  return this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.UpdateRelayRequest.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 9999) != null;
};


/**
 * optional string relay_id = 1;
 * @return {string}
 */
proto.protos.UpdateRelayRequest.prototype.getRelayId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.UpdateRelayRequest} returns this
 */
proto.protos.UpdateRelayRequest.prototype.setRelayId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional RelayConfig config = 2;
 * @return {?proto.protos.RelayConfig}
 */
proto.protos.UpdateRelayRequest.prototype.getConfig = function() {
  return /** @type{?proto.protos.RelayConfig} */ (
    jspb.Message.getWrapperField(this, proto.protos.RelayConfig, 2));
};


/**
 * @param {?proto.protos.RelayConfig|undefined} value
 * @return {!proto.protos.UpdateRelayRequest} returns this
*/
proto.protos.UpdateRelayRequest.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.UpdateRelayRequest} returns this
 */
proto.protos.UpdateRelayRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.UpdateRelayRequest.prototype.hasConfig = function() {
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
proto.protos.UpdateRelayResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.UpdateRelayResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.UpdateRelayResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.UpdateRelayResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protos.UpdateRelayResponse}
 */
proto.protos.UpdateRelayResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.UpdateRelayResponse;
  return proto.protos.UpdateRelayResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.UpdateRelayResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.UpdateRelayResponse}
 */
proto.protos.UpdateRelayResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protos.UpdateRelayResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.UpdateRelayResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.UpdateRelayResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.UpdateRelayResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.protos.UpdateRelayResponse.prototype.getStatus = function() {
  return /** @type{?proto.protos.common.Status} */ (
    jspb.Message.getWrapperField(this, common_status_pb.Status, 1000));
};


/**
 * @param {?proto.protos.common.Status|undefined} value
 * @return {!proto.protos.UpdateRelayResponse} returns this
*/
proto.protos.UpdateRelayResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.UpdateRelayResponse} returns this
 */
proto.protos.UpdateRelayResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.UpdateRelayResponse.prototype.hasStatus = function() {
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
proto.protos.ResumeRelayRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ResumeRelayRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ResumeRelayRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ResumeRelayRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && common_auth_pb.Auth.toObject(includeInstance, f),
    relayId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.protos.ResumeRelayRequest}
 */
proto.protos.ResumeRelayRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ResumeRelayRequest;
  return proto.protos.ResumeRelayRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ResumeRelayRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ResumeRelayRequest}
 */
proto.protos.ResumeRelayRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setRelayId(value);
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
proto.protos.ResumeRelayRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ResumeRelayRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ResumeRelayRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ResumeRelayRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      9999,
      f,
      common_auth_pb.Auth.serializeBinaryToWriter
    );
  }
  f = message.getRelayId();
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
proto.protos.ResumeRelayRequest.prototype.getAuth = function() {
  return /** @type{?proto.protos.common.Auth} */ (
    jspb.Message.getWrapperField(this, common_auth_pb.Auth, 9999));
};


/**
 * @param {?proto.protos.common.Auth|undefined} value
 * @return {!proto.protos.ResumeRelayRequest} returns this
*/
proto.protos.ResumeRelayRequest.prototype.setAuth = function(value) {
  return jspb.Message.setWrapperField(this, 9999, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ResumeRelayRequest} returns this
 */
proto.protos.ResumeRelayRequest.prototype.clearAuth = function() {
  return this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ResumeRelayRequest.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 9999) != null;
};


/**
 * optional string relay_id = 1;
 * @return {string}
 */
proto.protos.ResumeRelayRequest.prototype.getRelayId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.ResumeRelayRequest} returns this
 */
proto.protos.ResumeRelayRequest.prototype.setRelayId = function(value) {
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
proto.protos.ResumeRelayResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ResumeRelayResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ResumeRelayResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ResumeRelayResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protos.ResumeRelayResponse}
 */
proto.protos.ResumeRelayResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ResumeRelayResponse;
  return proto.protos.ResumeRelayResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ResumeRelayResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ResumeRelayResponse}
 */
proto.protos.ResumeRelayResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protos.ResumeRelayResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ResumeRelayResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ResumeRelayResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ResumeRelayResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.protos.ResumeRelayResponse.prototype.getStatus = function() {
  return /** @type{?proto.protos.common.Status} */ (
    jspb.Message.getWrapperField(this, common_status_pb.Status, 1000));
};


/**
 * @param {?proto.protos.common.Status|undefined} value
 * @return {!proto.protos.ResumeRelayResponse} returns this
*/
proto.protos.ResumeRelayResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.ResumeRelayResponse} returns this
 */
proto.protos.ResumeRelayResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ResumeRelayResponse.prototype.hasStatus = function() {
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
proto.protos.StopRelayRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.StopRelayRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.StopRelayRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.StopRelayRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && common_auth_pb.Auth.toObject(includeInstance, f),
    relayId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.protos.StopRelayRequest}
 */
proto.protos.StopRelayRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.StopRelayRequest;
  return proto.protos.StopRelayRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.StopRelayRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.StopRelayRequest}
 */
proto.protos.StopRelayRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setRelayId(value);
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
proto.protos.StopRelayRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.StopRelayRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.StopRelayRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.StopRelayRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      9999,
      f,
      common_auth_pb.Auth.serializeBinaryToWriter
    );
  }
  f = message.getRelayId();
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
proto.protos.StopRelayRequest.prototype.getAuth = function() {
  return /** @type{?proto.protos.common.Auth} */ (
    jspb.Message.getWrapperField(this, common_auth_pb.Auth, 9999));
};


/**
 * @param {?proto.protos.common.Auth|undefined} value
 * @return {!proto.protos.StopRelayRequest} returns this
*/
proto.protos.StopRelayRequest.prototype.setAuth = function(value) {
  return jspb.Message.setWrapperField(this, 9999, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.StopRelayRequest} returns this
 */
proto.protos.StopRelayRequest.prototype.clearAuth = function() {
  return this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.StopRelayRequest.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 9999) != null;
};


/**
 * optional string relay_id = 1;
 * @return {string}
 */
proto.protos.StopRelayRequest.prototype.getRelayId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.StopRelayRequest} returns this
 */
proto.protos.StopRelayRequest.prototype.setRelayId = function(value) {
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
proto.protos.StopRelayResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.StopRelayResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.StopRelayResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.StopRelayResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protos.StopRelayResponse}
 */
proto.protos.StopRelayResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.StopRelayResponse;
  return proto.protos.StopRelayResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.StopRelayResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.StopRelayResponse}
 */
proto.protos.StopRelayResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protos.StopRelayResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.StopRelayResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.StopRelayResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.StopRelayResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.protos.StopRelayResponse.prototype.getStatus = function() {
  return /** @type{?proto.protos.common.Status} */ (
    jspb.Message.getWrapperField(this, common_status_pb.Status, 1000));
};


/**
 * @param {?proto.protos.common.Status|undefined} value
 * @return {!proto.protos.StopRelayResponse} returns this
*/
proto.protos.StopRelayResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.StopRelayResponse} returns this
 */
proto.protos.StopRelayResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.StopRelayResponse.prototype.hasStatus = function() {
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
proto.protos.DeleteRelayRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.DeleteRelayRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.DeleteRelayRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.DeleteRelayRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && common_auth_pb.Auth.toObject(includeInstance, f),
    relayId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.protos.DeleteRelayRequest}
 */
proto.protos.DeleteRelayRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.DeleteRelayRequest;
  return proto.protos.DeleteRelayRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.DeleteRelayRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.DeleteRelayRequest}
 */
proto.protos.DeleteRelayRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setRelayId(value);
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
proto.protos.DeleteRelayRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.DeleteRelayRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.DeleteRelayRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.DeleteRelayRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      9999,
      f,
      common_auth_pb.Auth.serializeBinaryToWriter
    );
  }
  f = message.getRelayId();
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
proto.protos.DeleteRelayRequest.prototype.getAuth = function() {
  return /** @type{?proto.protos.common.Auth} */ (
    jspb.Message.getWrapperField(this, common_auth_pb.Auth, 9999));
};


/**
 * @param {?proto.protos.common.Auth|undefined} value
 * @return {!proto.protos.DeleteRelayRequest} returns this
*/
proto.protos.DeleteRelayRequest.prototype.setAuth = function(value) {
  return jspb.Message.setWrapperField(this, 9999, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.DeleteRelayRequest} returns this
 */
proto.protos.DeleteRelayRequest.prototype.clearAuth = function() {
  return this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.DeleteRelayRequest.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 9999) != null;
};


/**
 * optional string relay_id = 1;
 * @return {string}
 */
proto.protos.DeleteRelayRequest.prototype.getRelayId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.DeleteRelayRequest} returns this
 */
proto.protos.DeleteRelayRequest.prototype.setRelayId = function(value) {
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
proto.protos.DeleteRelayResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.DeleteRelayResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.DeleteRelayResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.DeleteRelayResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protos.DeleteRelayResponse}
 */
proto.protos.DeleteRelayResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.DeleteRelayResponse;
  return proto.protos.DeleteRelayResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.DeleteRelayResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.DeleteRelayResponse}
 */
proto.protos.DeleteRelayResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protos.DeleteRelayResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.DeleteRelayResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.DeleteRelayResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.DeleteRelayResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.protos.DeleteRelayResponse.prototype.getStatus = function() {
  return /** @type{?proto.protos.common.Status} */ (
    jspb.Message.getWrapperField(this, common_status_pb.Status, 1000));
};


/**
 * @param {?proto.protos.common.Status|undefined} value
 * @return {!proto.protos.DeleteRelayResponse} returns this
*/
proto.protos.DeleteRelayResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.DeleteRelayResponse} returns this
 */
proto.protos.DeleteRelayResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.DeleteRelayResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1000) != null;
};


goog.object.extend(exports, proto.protos);
