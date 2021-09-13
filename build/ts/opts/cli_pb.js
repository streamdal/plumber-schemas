// source: opts/cli.proto
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

var opts_read_pb = require('../opts/read_pb.js');
goog.object.extend(proto, opts_read_pb);
var opts_write_pb = require('../opts/write_pb.js');
goog.object.extend(proto, opts_write_pb);
var opts_relay_pb = require('../opts/relay_pb.js');
goog.object.extend(proto, opts_relay_pb);
var opts_server_pb = require('../opts/server_pb.js');
goog.object.extend(proto, opts_server_pb);
var opts_batch_pb = require('../opts/batch_pb.js');
goog.object.extend(proto, opts_batch_pb);
var opts_dynamic_pb = require('../opts/dynamic_pb.js');
goog.object.extend(proto, opts_dynamic_pb);
goog.exportSymbol('proto.protos.opts.CLIOptions', null, global);
goog.exportSymbol('proto.protos.opts.GlobalCLIOptions', null, global);
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
proto.protos.opts.GlobalCLIOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.protos.opts.GlobalCLIOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.opts.GlobalCLIOptions.displayName = 'proto.protos.opts.GlobalCLIOptions';
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
proto.protos.opts.CLIOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.opts.CLIOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.opts.CLIOptions.displayName = 'proto.protos.opts.CLIOptions';
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
proto.protos.opts.GlobalCLIOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.opts.GlobalCLIOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.opts.GlobalCLIOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.opts.GlobalCLIOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    debug: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    quiet: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    version: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    fullCommand: jspb.Message.getFieldWithDefault(msg, 1000, ""),
    action: jspb.Message.getFieldWithDefault(msg, 1001, ""),
    backend: jspb.Message.getFieldWithDefault(msg, 1002, "")
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
 * @return {!proto.protos.opts.GlobalCLIOptions}
 */
proto.protos.opts.GlobalCLIOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.opts.GlobalCLIOptions;
  return proto.protos.opts.GlobalCLIOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.opts.GlobalCLIOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.opts.GlobalCLIOptions}
 */
proto.protos.opts.GlobalCLIOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDebug(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuiet(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVersion(value);
      break;
    case 1000:
      var value = /** @type {string} */ (reader.readString());
      msg.setFullCommand(value);
      break;
    case 1001:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    case 1002:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackend(value);
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
proto.protos.opts.GlobalCLIOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.opts.GlobalCLIOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.opts.GlobalCLIOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.opts.GlobalCLIOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDebug();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getQuiet();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getFullCommand();
  if (f.length > 0) {
    writer.writeString(
      1000,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      1001,
      f
    );
  }
  f = message.getBackend();
  if (f.length > 0) {
    writer.writeString(
      1002,
      f
    );
  }
};


/**
 * optional bool debug = 1;
 * @return {boolean}
 */
proto.protos.opts.GlobalCLIOptions.prototype.getDebug = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protos.opts.GlobalCLIOptions} returns this
 */
proto.protos.opts.GlobalCLIOptions.prototype.setDebug = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool quiet = 2;
 * @return {boolean}
 */
proto.protos.opts.GlobalCLIOptions.prototype.getQuiet = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protos.opts.GlobalCLIOptions} returns this
 */
proto.protos.opts.GlobalCLIOptions.prototype.setQuiet = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool version = 3;
 * @return {boolean}
 */
proto.protos.opts.GlobalCLIOptions.prototype.getVersion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protos.opts.GlobalCLIOptions} returns this
 */
proto.protos.opts.GlobalCLIOptions.prototype.setVersion = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string _full_command = 1000;
 * @return {string}
 */
proto.protos.opts.GlobalCLIOptions.prototype.getFullCommand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1000, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.opts.GlobalCLIOptions} returns this
 */
proto.protos.opts.GlobalCLIOptions.prototype.setFullCommand = function(value) {
  return jspb.Message.setProto3StringField(this, 1000, value);
};


/**
 * optional string _action = 1001;
 * @return {string}
 */
proto.protos.opts.GlobalCLIOptions.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1001, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.opts.GlobalCLIOptions} returns this
 */
proto.protos.opts.GlobalCLIOptions.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 1001, value);
};


/**
 * optional string _backend = 1002;
 * @return {string}
 */
proto.protos.opts.GlobalCLIOptions.prototype.getBackend = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1002, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.opts.GlobalCLIOptions} returns this
 */
proto.protos.opts.GlobalCLIOptions.prototype.setBackend = function(value) {
  return jspb.Message.setProto3StringField(this, 1002, value);
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
proto.protos.opts.CLIOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.opts.CLIOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.opts.CLIOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.opts.CLIOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    global: (f = msg.getGlobal()) && proto.protos.opts.GlobalCLIOptions.toObject(includeInstance, f),
    read: (f = msg.getRead()) && opts_read_pb.ReadOptions.toObject(includeInstance, f),
    write: (f = msg.getWrite()) && opts_write_pb.WriteOptions.toObject(includeInstance, f),
    relay: (f = msg.getRelay()) && opts_relay_pb.RelayOptions.toObject(includeInstance, f),
    dynamic: (f = msg.getDynamic()) && opts_dynamic_pb.DynamicOptions.toObject(includeInstance, f),
    batch: (f = msg.getBatch()) && opts_batch_pb.BatchOptions.toObject(includeInstance, f),
    server: (f = msg.getServer()) && opts_server_pb.ServerOptions.toObject(includeInstance, f)
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
 * @return {!proto.protos.opts.CLIOptions}
 */
proto.protos.opts.CLIOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.opts.CLIOptions;
  return proto.protos.opts.CLIOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.opts.CLIOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.opts.CLIOptions}
 */
proto.protos.opts.CLIOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protos.opts.GlobalCLIOptions;
      reader.readMessage(value,proto.protos.opts.GlobalCLIOptions.deserializeBinaryFromReader);
      msg.setGlobal(value);
      break;
    case 2:
      var value = new opts_read_pb.ReadOptions;
      reader.readMessage(value,opts_read_pb.ReadOptions.deserializeBinaryFromReader);
      msg.setRead(value);
      break;
    case 3:
      var value = new opts_write_pb.WriteOptions;
      reader.readMessage(value,opts_write_pb.WriteOptions.deserializeBinaryFromReader);
      msg.setWrite(value);
      break;
    case 4:
      var value = new opts_relay_pb.RelayOptions;
      reader.readMessage(value,opts_relay_pb.RelayOptions.deserializeBinaryFromReader);
      msg.setRelay(value);
      break;
    case 5:
      var value = new opts_dynamic_pb.DynamicOptions;
      reader.readMessage(value,opts_dynamic_pb.DynamicOptions.deserializeBinaryFromReader);
      msg.setDynamic(value);
      break;
    case 6:
      var value = new opts_batch_pb.BatchOptions;
      reader.readMessage(value,opts_batch_pb.BatchOptions.deserializeBinaryFromReader);
      msg.setBatch(value);
      break;
    case 7:
      var value = new opts_server_pb.ServerOptions;
      reader.readMessage(value,opts_server_pb.ServerOptions.deserializeBinaryFromReader);
      msg.setServer(value);
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
proto.protos.opts.CLIOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.opts.CLIOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.opts.CLIOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.opts.CLIOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGlobal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protos.opts.GlobalCLIOptions.serializeBinaryToWriter
    );
  }
  f = message.getRead();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      opts_read_pb.ReadOptions.serializeBinaryToWriter
    );
  }
  f = message.getWrite();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      opts_write_pb.WriteOptions.serializeBinaryToWriter
    );
  }
  f = message.getRelay();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      opts_relay_pb.RelayOptions.serializeBinaryToWriter
    );
  }
  f = message.getDynamic();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      opts_dynamic_pb.DynamicOptions.serializeBinaryToWriter
    );
  }
  f = message.getBatch();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      opts_batch_pb.BatchOptions.serializeBinaryToWriter
    );
  }
  f = message.getServer();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      opts_server_pb.ServerOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional GlobalCLIOptions global = 1;
 * @return {?proto.protos.opts.GlobalCLIOptions}
 */
proto.protos.opts.CLIOptions.prototype.getGlobal = function() {
  return /** @type{?proto.protos.opts.GlobalCLIOptions} */ (
    jspb.Message.getWrapperField(this, proto.protos.opts.GlobalCLIOptions, 1));
};


/**
 * @param {?proto.protos.opts.GlobalCLIOptions|undefined} value
 * @return {!proto.protos.opts.CLIOptions} returns this
*/
proto.protos.opts.CLIOptions.prototype.setGlobal = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.opts.CLIOptions} returns this
 */
proto.protos.opts.CLIOptions.prototype.clearGlobal = function() {
  return this.setGlobal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.opts.CLIOptions.prototype.hasGlobal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ReadOptions read = 2;
 * @return {?proto.protos.opts.ReadOptions}
 */
proto.protos.opts.CLIOptions.prototype.getRead = function() {
  return /** @type{?proto.protos.opts.ReadOptions} */ (
    jspb.Message.getWrapperField(this, opts_read_pb.ReadOptions, 2));
};


/**
 * @param {?proto.protos.opts.ReadOptions|undefined} value
 * @return {!proto.protos.opts.CLIOptions} returns this
*/
proto.protos.opts.CLIOptions.prototype.setRead = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.opts.CLIOptions} returns this
 */
proto.protos.opts.CLIOptions.prototype.clearRead = function() {
  return this.setRead(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.opts.CLIOptions.prototype.hasRead = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional WriteOptions write = 3;
 * @return {?proto.protos.opts.WriteOptions}
 */
proto.protos.opts.CLIOptions.prototype.getWrite = function() {
  return /** @type{?proto.protos.opts.WriteOptions} */ (
    jspb.Message.getWrapperField(this, opts_write_pb.WriteOptions, 3));
};


/**
 * @param {?proto.protos.opts.WriteOptions|undefined} value
 * @return {!proto.protos.opts.CLIOptions} returns this
*/
proto.protos.opts.CLIOptions.prototype.setWrite = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.opts.CLIOptions} returns this
 */
proto.protos.opts.CLIOptions.prototype.clearWrite = function() {
  return this.setWrite(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.opts.CLIOptions.prototype.hasWrite = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RelayOptions relay = 4;
 * @return {?proto.protos.opts.RelayOptions}
 */
proto.protos.opts.CLIOptions.prototype.getRelay = function() {
  return /** @type{?proto.protos.opts.RelayOptions} */ (
    jspb.Message.getWrapperField(this, opts_relay_pb.RelayOptions, 4));
};


/**
 * @param {?proto.protos.opts.RelayOptions|undefined} value
 * @return {!proto.protos.opts.CLIOptions} returns this
*/
proto.protos.opts.CLIOptions.prototype.setRelay = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.opts.CLIOptions} returns this
 */
proto.protos.opts.CLIOptions.prototype.clearRelay = function() {
  return this.setRelay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.opts.CLIOptions.prototype.hasRelay = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DynamicOptions dynamic = 5;
 * @return {?proto.protos.opts.DynamicOptions}
 */
proto.protos.opts.CLIOptions.prototype.getDynamic = function() {
  return /** @type{?proto.protos.opts.DynamicOptions} */ (
    jspb.Message.getWrapperField(this, opts_dynamic_pb.DynamicOptions, 5));
};


/**
 * @param {?proto.protos.opts.DynamicOptions|undefined} value
 * @return {!proto.protos.opts.CLIOptions} returns this
*/
proto.protos.opts.CLIOptions.prototype.setDynamic = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.opts.CLIOptions} returns this
 */
proto.protos.opts.CLIOptions.prototype.clearDynamic = function() {
  return this.setDynamic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.opts.CLIOptions.prototype.hasDynamic = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional BatchOptions batch = 6;
 * @return {?proto.protos.opts.BatchOptions}
 */
proto.protos.opts.CLIOptions.prototype.getBatch = function() {
  return /** @type{?proto.protos.opts.BatchOptions} */ (
    jspb.Message.getWrapperField(this, opts_batch_pb.BatchOptions, 6));
};


/**
 * @param {?proto.protos.opts.BatchOptions|undefined} value
 * @return {!proto.protos.opts.CLIOptions} returns this
*/
proto.protos.opts.CLIOptions.prototype.setBatch = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.opts.CLIOptions} returns this
 */
proto.protos.opts.CLIOptions.prototype.clearBatch = function() {
  return this.setBatch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.opts.CLIOptions.prototype.hasBatch = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ServerOptions server = 7;
 * @return {?proto.protos.opts.ServerOptions}
 */
proto.protos.opts.CLIOptions.prototype.getServer = function() {
  return /** @type{?proto.protos.opts.ServerOptions} */ (
    jspb.Message.getWrapperField(this, opts_server_pb.ServerOptions, 7));
};


/**
 * @param {?proto.protos.opts.ServerOptions|undefined} value
 * @return {!proto.protos.opts.CLIOptions} returns this
*/
proto.protos.opts.CLIOptions.prototype.setServer = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protos.opts.CLIOptions} returns this
 */
proto.protos.opts.CLIOptions.prototype.clearServer = function() {
  return this.setServer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.opts.CLIOptions.prototype.hasServer = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.protos.opts);
