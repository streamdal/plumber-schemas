// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteCLIOptions {
  /// @gotags: kong:"help='Write data from input file',existingfile,xor=input"
  pub input_file: ::std::string::String,
  /// @gotags: kong:"help='Treat input as JSON array - each array element will be written as a separate message'"
  pub input_as_json_array: bool,
  /// @gotags: kong:"-"
  pub input_stdin: ::std::vec::Vec<::std::string::String>,
}
impl ::std::default::Default for WriteCLIOptions {
  fn default() -> Self {
    WriteCLIOptions {
      input_file: ::std::default::Default::default(),
      input_as_json_array: ::std::default::Default::default(),
      input_stdin: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteCLIOptions_default: WriteCLIOptions = WriteCLIOptions::default();
}
impl ::pb_jelly::Message for WriteCLIOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteCLIOptions",
      full_name: "protos.opts.WriteCLIOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "input_file",
          full_name: "protos.opts.WriteCLIOptions.input_file",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "input_as_json_array",
          full_name: "protos.opts.WriteCLIOptions.input_as_json_array",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "input_stdin",
          full_name: "protos.opts.WriteCLIOptions.input_stdin",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Repeated,
          oneof_index: None,
        },
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut input_file_size = 0;
    if self.input_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.input_file;
      let l = ::pb_jelly::Message::compute_size(val);
      input_file_size += ::pb_jelly::wire_format::serialized_length(1);
      input_file_size += ::pb_jelly::varint::serialized_length(l as u64);
      input_file_size += l;
    }
    size += input_file_size;
    let mut input_as_json_array_size = 0;
    if self.input_as_json_array != <bool as ::std::default::Default>::default() {
      let val = &self.input_as_json_array;
      let l = ::pb_jelly::Message::compute_size(val);
      input_as_json_array_size += ::pb_jelly::wire_format::serialized_length(2);
      input_as_json_array_size += l;
    }
    size += input_as_json_array_size;
    let mut input_stdin_size = 0;
    for val in &self.input_stdin {
      let l = ::pb_jelly::Message::compute_size(val);
      input_stdin_size += ::pb_jelly::wire_format::serialized_length(3);
      input_stdin_size += ::pb_jelly::varint::serialized_length(l as u64);
      input_stdin_size += l;
    }
    size += input_stdin_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.input_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.input_file;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.input_as_json_array != <bool as ::std::default::Default>::default() {
      let val = &self.input_as_json_array;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.input_stdin {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.input_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.input_file;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.input_as_json_array != <bool as ::std::default::Default>::default() {
      let val = &self.input_as_json_array;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.input_stdin {
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteCLIOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.input_file = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "WriteCLIOptions", 2)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.input_as_json_array = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteCLIOptions", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.input_stdin.push(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteCLIOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "input_file" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.input_file)
      }
      "input_as_json_array" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.input_as_json_array)
      }
      "input_stdin" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

/// Write is the structure that backends accept for facilitating a write.
/// NOTE: _conn is only used by the CLI - desktop does not need to set it.
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteOptions {
  /// Required for desktop; ignored in CLI.
  /// @gotags: kong:"-"
  pub connection_id: ::std::string::String,
  /// @gotags: kong:"embed"
  pub record: ::std::option::Option<::proto_records::ps_records_base::WriteRecord>,
  /// @gotags: kong:"embed"
  pub encode_options: ::std::option::Option<::proto_encoding::ps_encoding_options::EncodeOptions>,
  // --------------------------------------------------------------------- //
  //                          PRIVATE FIELDS (1000+)                       //
  // --------------------------------------------------------------------- //

  /// Optional; CLI-specific and non-backend-specific options
  /// @gotags: kong:"embed"
  pub _cli_options: ::std::option::Option<WriteCLIOptions>,
  // --------------------------------------------------------------------- //
  //                       SUPPORTED BACKENDS (100-999)                    //
  // --------------------------------------------------------------------- //

  /// @gotags: kong:"cmd,help='Apache Kafka'"
  pub kafka: ::std::option::Option<WriteGroupKafkaOptions>,
  /// @gotags: kong:"cmd,help='Apache ActiveMQ'"
  pub activemq: ::std::option::Option<WriteGroupActiveMQOptions>,
  /// @gotags: kong:"cmd,help='AWS Simple Queue System'"
  pub aws_sqs: ::std::option::Option<WriteGroupAWSSQSOptions>,
  /// @gotags: kong:"cmd,help='AWS Simple Notification System'"
  pub aws_sns: ::std::option::Option<WriteGroupAWSSNSOptions>,
  /// @gotags: kong:"cmd,help='NATS'"
  pub nats: ::std::option::Option<WriteGroupNatsOptions>,
  /// @gotags: kong:"cmd,help='NATS Streaming'"
  pub nats_streaming: ::std::option::Option<WriteGroupNatsStreamingOptions>,
  /// @gotags: kong:"cmd,help='NSQ'"
  pub nsq: ::std::option::Option<WriteGroupNSQOptions>,
  /// @gotags: kong:"cmd,help='Apache Pulsar'"
  pub pulsar: ::std::option::Option<WriteGroupPulsarOptions>,
  /// @gotags: kong:"cmd,help='RabbitMQ'"
  pub rabbit: ::std::option::Option<WriteGroupRabbitOptions>,
  /// @gotags: kong:"cmd,help='RabbitMQ Streams'"
  pub rabbit_streams: ::std::option::Option<WriteGroupRabbitStreamsOptions>,
  /// @gotags: kong:"cmd,help='MQTT'"
  pub mqtt: ::std::option::Option<WriteGroupMQTTOptions>,
  /// @gotags: kong:"cmd,help='Azure Service Bus'"
  pub azure_service_bus: ::std::option::Option<WriteGroupAzureServiceBusOptions>,
  /// @gotags: kong:"cmd,help='Azure Event Hub'"
  pub azure_event_hub: ::std::option::Option<WriteGroupAzureEventHubOptions>,
  /// @gotags: kong:"cmd,help='Google Cloud Platform Pub/Sub'"
  pub gcp_pubsub: ::std::option::Option<WriteGroupGCPPubSubOptions>,
  /// @gotags: kong:"cmd,help='KubeMQ Queue'"
  pub kubemq_queue: ::std::option::Option<WriteGroupKubeMQQueueOptions>,
  /// @gotags: kong:"cmd,help='Redis PubSub'"
  pub redis_pubsub: ::std::option::Option<WriteGroupRedisPubSubOptions>,
  /// @gotags: kong:"cmd,help='Redis Streams'"
  pub redis_streams: ::std::option::Option<WriteGroupRedisStreamsOptions>,
  /// @gotags: kong:"cmd,help='NATS JetStream'"
  pub nats_jetstream: ::std::option::Option<WriteGroupNatsJetstreamOptions>,
  /// @gotags: kong:"cmd,help='AWS Kinesis Streams'"
  pub aws_kinesis: ::std::option::Option<WriteGroupAWSKinesisOptions>,
  /// @gotags: kong:"cmd,help='Memphis'"
  pub memphis: ::std::option::Option<WriteGroupMemphisOptions>,
}
impl ::std::default::Default for WriteOptions {
  fn default() -> Self {
    WriteOptions {
      connection_id: ::std::default::Default::default(),
      record: ::std::default::Default::default(),
      encode_options: ::std::default::Default::default(),
      _cli_options: ::std::default::Default::default(),
      kafka: ::std::default::Default::default(),
      activemq: ::std::default::Default::default(),
      aws_sqs: ::std::default::Default::default(),
      aws_sns: ::std::default::Default::default(),
      nats: ::std::default::Default::default(),
      nats_streaming: ::std::default::Default::default(),
      nsq: ::std::default::Default::default(),
      pulsar: ::std::default::Default::default(),
      rabbit: ::std::default::Default::default(),
      rabbit_streams: ::std::default::Default::default(),
      mqtt: ::std::default::Default::default(),
      azure_service_bus: ::std::default::Default::default(),
      azure_event_hub: ::std::default::Default::default(),
      gcp_pubsub: ::std::default::Default::default(),
      kubemq_queue: ::std::default::Default::default(),
      redis_pubsub: ::std::default::Default::default(),
      redis_streams: ::std::default::Default::default(),
      nats_jetstream: ::std::default::Default::default(),
      aws_kinesis: ::std::default::Default::default(),
      memphis: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteOptions_default: WriteOptions = WriteOptions::default();
}
impl ::pb_jelly::Message for WriteOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteOptions",
      full_name: "protos.opts.WriteOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "connection_id",
          full_name: "protos.opts.WriteOptions.connection_id",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "record",
          full_name: "protos.opts.WriteOptions.record",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "encode_options",
          full_name: "protos.opts.WriteOptions.encode_options",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_cli_options",
          full_name: "protos.opts.WriteOptions._cli_options",
          index: 3,
          number: 1000,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "kafka",
          full_name: "protos.opts.WriteOptions.kafka",
          index: 4,
          number: 100,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "activemq",
          full_name: "protos.opts.WriteOptions.activemq",
          index: 5,
          number: 101,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_sqs",
          full_name: "protos.opts.WriteOptions.aws_sqs",
          index: 6,
          number: 102,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_sns",
          full_name: "protos.opts.WriteOptions.aws_sns",
          index: 7,
          number: 103,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "nats",
          full_name: "protos.opts.WriteOptions.nats",
          index: 8,
          number: 104,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "nats_streaming",
          full_name: "protos.opts.WriteOptions.nats_streaming",
          index: 9,
          number: 105,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "nsq",
          full_name: "protos.opts.WriteOptions.nsq",
          index: 10,
          number: 106,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "pulsar",
          full_name: "protos.opts.WriteOptions.pulsar",
          index: 11,
          number: 107,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "rabbit",
          full_name: "protos.opts.WriteOptions.rabbit",
          index: 12,
          number: 108,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "rabbit_streams",
          full_name: "protos.opts.WriteOptions.rabbit_streams",
          index: 13,
          number: 109,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "mqtt",
          full_name: "protos.opts.WriteOptions.mqtt",
          index: 14,
          number: 110,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "azure_service_bus",
          full_name: "protos.opts.WriteOptions.azure_service_bus",
          index: 15,
          number: 111,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "azure_event_hub",
          full_name: "protos.opts.WriteOptions.azure_event_hub",
          index: 16,
          number: 112,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "gcp_pubsub",
          full_name: "protos.opts.WriteOptions.gcp_pubsub",
          index: 17,
          number: 113,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "kubemq_queue",
          full_name: "protos.opts.WriteOptions.kubemq_queue",
          index: 18,
          number: 114,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "redis_pubsub",
          full_name: "protos.opts.WriteOptions.redis_pubsub",
          index: 19,
          number: 115,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "redis_streams",
          full_name: "protos.opts.WriteOptions.redis_streams",
          index: 20,
          number: 116,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "nats_jetstream",
          full_name: "protos.opts.WriteOptions.nats_jetstream",
          index: 21,
          number: 117,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_kinesis",
          full_name: "protos.opts.WriteOptions.aws_kinesis",
          index: 22,
          number: 118,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "memphis",
          full_name: "protos.opts.WriteOptions.memphis",
          index: 23,
          number: 119,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut connection_id_size = 0;
    if self.connection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_id;
      let l = ::pb_jelly::Message::compute_size(val);
      connection_id_size += ::pb_jelly::wire_format::serialized_length(1);
      connection_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      connection_id_size += l;
    }
    size += connection_id_size;
    let mut record_size = 0;
    for val in &self.record {
      let l = ::pb_jelly::Message::compute_size(val);
      record_size += ::pb_jelly::wire_format::serialized_length(2);
      record_size += ::pb_jelly::varint::serialized_length(l as u64);
      record_size += l;
    }
    size += record_size;
    let mut encode_options_size = 0;
    for val in &self.encode_options {
      let l = ::pb_jelly::Message::compute_size(val);
      encode_options_size += ::pb_jelly::wire_format::serialized_length(3);
      encode_options_size += ::pb_jelly::varint::serialized_length(l as u64);
      encode_options_size += l;
    }
    size += encode_options_size;
    let mut _cli_options_size = 0;
    for val in &self._cli_options {
      let l = ::pb_jelly::Message::compute_size(val);
      _cli_options_size += ::pb_jelly::wire_format::serialized_length(1000);
      _cli_options_size += ::pb_jelly::varint::serialized_length(l as u64);
      _cli_options_size += l;
    }
    size += _cli_options_size;
    let mut kafka_size = 0;
    for val in &self.kafka {
      let l = ::pb_jelly::Message::compute_size(val);
      kafka_size += ::pb_jelly::wire_format::serialized_length(100);
      kafka_size += ::pb_jelly::varint::serialized_length(l as u64);
      kafka_size += l;
    }
    size += kafka_size;
    let mut activemq_size = 0;
    for val in &self.activemq {
      let l = ::pb_jelly::Message::compute_size(val);
      activemq_size += ::pb_jelly::wire_format::serialized_length(101);
      activemq_size += ::pb_jelly::varint::serialized_length(l as u64);
      activemq_size += l;
    }
    size += activemq_size;
    let mut aws_sqs_size = 0;
    for val in &self.aws_sqs {
      let l = ::pb_jelly::Message::compute_size(val);
      aws_sqs_size += ::pb_jelly::wire_format::serialized_length(102);
      aws_sqs_size += ::pb_jelly::varint::serialized_length(l as u64);
      aws_sqs_size += l;
    }
    size += aws_sqs_size;
    let mut aws_sns_size = 0;
    for val in &self.aws_sns {
      let l = ::pb_jelly::Message::compute_size(val);
      aws_sns_size += ::pb_jelly::wire_format::serialized_length(103);
      aws_sns_size += ::pb_jelly::varint::serialized_length(l as u64);
      aws_sns_size += l;
    }
    size += aws_sns_size;
    let mut nats_size = 0;
    for val in &self.nats {
      let l = ::pb_jelly::Message::compute_size(val);
      nats_size += ::pb_jelly::wire_format::serialized_length(104);
      nats_size += ::pb_jelly::varint::serialized_length(l as u64);
      nats_size += l;
    }
    size += nats_size;
    let mut nats_streaming_size = 0;
    for val in &self.nats_streaming {
      let l = ::pb_jelly::Message::compute_size(val);
      nats_streaming_size += ::pb_jelly::wire_format::serialized_length(105);
      nats_streaming_size += ::pb_jelly::varint::serialized_length(l as u64);
      nats_streaming_size += l;
    }
    size += nats_streaming_size;
    let mut nsq_size = 0;
    for val in &self.nsq {
      let l = ::pb_jelly::Message::compute_size(val);
      nsq_size += ::pb_jelly::wire_format::serialized_length(106);
      nsq_size += ::pb_jelly::varint::serialized_length(l as u64);
      nsq_size += l;
    }
    size += nsq_size;
    let mut pulsar_size = 0;
    for val in &self.pulsar {
      let l = ::pb_jelly::Message::compute_size(val);
      pulsar_size += ::pb_jelly::wire_format::serialized_length(107);
      pulsar_size += ::pb_jelly::varint::serialized_length(l as u64);
      pulsar_size += l;
    }
    size += pulsar_size;
    let mut rabbit_size = 0;
    for val in &self.rabbit {
      let l = ::pb_jelly::Message::compute_size(val);
      rabbit_size += ::pb_jelly::wire_format::serialized_length(108);
      rabbit_size += ::pb_jelly::varint::serialized_length(l as u64);
      rabbit_size += l;
    }
    size += rabbit_size;
    let mut rabbit_streams_size = 0;
    for val in &self.rabbit_streams {
      let l = ::pb_jelly::Message::compute_size(val);
      rabbit_streams_size += ::pb_jelly::wire_format::serialized_length(109);
      rabbit_streams_size += ::pb_jelly::varint::serialized_length(l as u64);
      rabbit_streams_size += l;
    }
    size += rabbit_streams_size;
    let mut mqtt_size = 0;
    for val in &self.mqtt {
      let l = ::pb_jelly::Message::compute_size(val);
      mqtt_size += ::pb_jelly::wire_format::serialized_length(110);
      mqtt_size += ::pb_jelly::varint::serialized_length(l as u64);
      mqtt_size += l;
    }
    size += mqtt_size;
    let mut azure_service_bus_size = 0;
    for val in &self.azure_service_bus {
      let l = ::pb_jelly::Message::compute_size(val);
      azure_service_bus_size += ::pb_jelly::wire_format::serialized_length(111);
      azure_service_bus_size += ::pb_jelly::varint::serialized_length(l as u64);
      azure_service_bus_size += l;
    }
    size += azure_service_bus_size;
    let mut azure_event_hub_size = 0;
    for val in &self.azure_event_hub {
      let l = ::pb_jelly::Message::compute_size(val);
      azure_event_hub_size += ::pb_jelly::wire_format::serialized_length(112);
      azure_event_hub_size += ::pb_jelly::varint::serialized_length(l as u64);
      azure_event_hub_size += l;
    }
    size += azure_event_hub_size;
    let mut gcp_pubsub_size = 0;
    for val in &self.gcp_pubsub {
      let l = ::pb_jelly::Message::compute_size(val);
      gcp_pubsub_size += ::pb_jelly::wire_format::serialized_length(113);
      gcp_pubsub_size += ::pb_jelly::varint::serialized_length(l as u64);
      gcp_pubsub_size += l;
    }
    size += gcp_pubsub_size;
    let mut kubemq_queue_size = 0;
    for val in &self.kubemq_queue {
      let l = ::pb_jelly::Message::compute_size(val);
      kubemq_queue_size += ::pb_jelly::wire_format::serialized_length(114);
      kubemq_queue_size += ::pb_jelly::varint::serialized_length(l as u64);
      kubemq_queue_size += l;
    }
    size += kubemq_queue_size;
    let mut redis_pubsub_size = 0;
    for val in &self.redis_pubsub {
      let l = ::pb_jelly::Message::compute_size(val);
      redis_pubsub_size += ::pb_jelly::wire_format::serialized_length(115);
      redis_pubsub_size += ::pb_jelly::varint::serialized_length(l as u64);
      redis_pubsub_size += l;
    }
    size += redis_pubsub_size;
    let mut redis_streams_size = 0;
    for val in &self.redis_streams {
      let l = ::pb_jelly::Message::compute_size(val);
      redis_streams_size += ::pb_jelly::wire_format::serialized_length(116);
      redis_streams_size += ::pb_jelly::varint::serialized_length(l as u64);
      redis_streams_size += l;
    }
    size += redis_streams_size;
    let mut nats_jetstream_size = 0;
    for val in &self.nats_jetstream {
      let l = ::pb_jelly::Message::compute_size(val);
      nats_jetstream_size += ::pb_jelly::wire_format::serialized_length(117);
      nats_jetstream_size += ::pb_jelly::varint::serialized_length(l as u64);
      nats_jetstream_size += l;
    }
    size += nats_jetstream_size;
    let mut aws_kinesis_size = 0;
    for val in &self.aws_kinesis {
      let l = ::pb_jelly::Message::compute_size(val);
      aws_kinesis_size += ::pb_jelly::wire_format::serialized_length(118);
      aws_kinesis_size += ::pb_jelly::varint::serialized_length(l as u64);
      aws_kinesis_size += l;
    }
    size += aws_kinesis_size;
    let mut memphis_size = 0;
    for val in &self.memphis {
      let l = ::pb_jelly::Message::compute_size(val);
      memphis_size += ::pb_jelly::wire_format::serialized_length(119);
      memphis_size += ::pb_jelly::varint::serialized_length(l as u64);
      memphis_size += l;
    }
    size += memphis_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.connection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.record {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.encode_options {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self._cli_options {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.kafka {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.activemq {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.aws_sqs {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.aws_sns {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.nats {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.nats_streaming {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.nsq {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.pulsar {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.rabbit {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.rabbit_streams {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.mqtt {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.azure_service_bus {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.azure_event_hub {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.gcp_pubsub {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.kubemq_queue {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.redis_pubsub {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.redis_streams {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.nats_jetstream {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.aws_kinesis {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.memphis {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.connection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_id;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.record {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.encode_options {
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.kafka {
      ::pb_jelly::wire_format::write(100, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.activemq {
      ::pb_jelly::wire_format::write(101, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.aws_sqs {
      ::pb_jelly::wire_format::write(102, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.aws_sns {
      ::pb_jelly::wire_format::write(103, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.nats {
      ::pb_jelly::wire_format::write(104, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.nats_streaming {
      ::pb_jelly::wire_format::write(105, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.nsq {
      ::pb_jelly::wire_format::write(106, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.pulsar {
      ::pb_jelly::wire_format::write(107, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.rabbit {
      ::pb_jelly::wire_format::write(108, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.rabbit_streams {
      ::pb_jelly::wire_format::write(109, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.mqtt {
      ::pb_jelly::wire_format::write(110, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.azure_service_bus {
      ::pb_jelly::wire_format::write(111, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.azure_event_hub {
      ::pb_jelly::wire_format::write(112, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.gcp_pubsub {
      ::pb_jelly::wire_format::write(113, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.kubemq_queue {
      ::pb_jelly::wire_format::write(114, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.redis_pubsub {
      ::pb_jelly::wire_format::write(115, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.redis_streams {
      ::pb_jelly::wire_format::write(116, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.nats_jetstream {
      ::pb_jelly::wire_format::write(117, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.aws_kinesis {
      ::pb_jelly::wire_format::write(118, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.memphis {
      ::pb_jelly::wire_format::write(119, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self._cli_options {
      ::pb_jelly::wire_format::write(1000, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.connection_id = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_records::ps_records_base::WriteRecord = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.record = Some(val);
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_encoding::ps_encoding_options::EncodeOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.encode_options = Some(val);
        }
        1000 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 1000)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: WriteCLIOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._cli_options = Some(val);
        }
        100 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 100)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: WriteGroupKafkaOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.kafka = Some(val);
        }
        101 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 101)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: WriteGroupActiveMQOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.activemq = Some(val);
        }
        102 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 102)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: WriteGroupAWSSQSOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.aws_sqs = Some(val);
        }
        103 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 103)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: WriteGroupAWSSNSOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.aws_sns = Some(val);
        }
        104 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 104)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: WriteGroupNatsOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.nats = Some(val);
        }
        105 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 105)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: WriteGroupNatsStreamingOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.nats_streaming = Some(val);
        }
        106 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 106)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: WriteGroupNSQOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.nsq = Some(val);
        }
        107 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 107)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: WriteGroupPulsarOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.pulsar = Some(val);
        }
        108 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 108)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: WriteGroupRabbitOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.rabbit = Some(val);
        }
        109 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 109)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: WriteGroupRabbitStreamsOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.rabbit_streams = Some(val);
        }
        110 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 110)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: WriteGroupMQTTOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.mqtt = Some(val);
        }
        111 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 111)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: WriteGroupAzureServiceBusOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.azure_service_bus = Some(val);
        }
        112 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 112)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: WriteGroupAzureEventHubOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.azure_event_hub = Some(val);
        }
        113 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 113)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: WriteGroupGCPPubSubOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.gcp_pubsub = Some(val);
        }
        114 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 114)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: WriteGroupKubeMQQueueOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.kubemq_queue = Some(val);
        }
        115 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 115)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: WriteGroupRedisPubSubOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.redis_pubsub = Some(val);
        }
        116 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 116)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: WriteGroupRedisStreamsOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.redis_streams = Some(val);
        }
        117 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 117)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: WriteGroupNatsJetstreamOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.nats_jetstream = Some(val);
        }
        118 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 118)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: WriteGroupAWSKinesisOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.aws_kinesis = Some(val);
        }
        119 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteOptions", 119)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: WriteGroupMemphisOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.memphis = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "connection_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.connection_id)
      }
      "record" => {
        ::pb_jelly::reflection::FieldMut::Value(self.record.get_or_insert_with(::std::default::Default::default))
      }
      "encode_options" => {
        ::pb_jelly::reflection::FieldMut::Value(self.encode_options.get_or_insert_with(::std::default::Default::default))
      }
      "_cli_options" => {
        ::pb_jelly::reflection::FieldMut::Value(self._cli_options.get_or_insert_with(::std::default::Default::default))
      }
      "kafka" => {
        ::pb_jelly::reflection::FieldMut::Value(self.kafka.get_or_insert_with(::std::default::Default::default))
      }
      "activemq" => {
        ::pb_jelly::reflection::FieldMut::Value(self.activemq.get_or_insert_with(::std::default::Default::default))
      }
      "aws_sqs" => {
        ::pb_jelly::reflection::FieldMut::Value(self.aws_sqs.get_or_insert_with(::std::default::Default::default))
      }
      "aws_sns" => {
        ::pb_jelly::reflection::FieldMut::Value(self.aws_sns.get_or_insert_with(::std::default::Default::default))
      }
      "nats" => {
        ::pb_jelly::reflection::FieldMut::Value(self.nats.get_or_insert_with(::std::default::Default::default))
      }
      "nats_streaming" => {
        ::pb_jelly::reflection::FieldMut::Value(self.nats_streaming.get_or_insert_with(::std::default::Default::default))
      }
      "nsq" => {
        ::pb_jelly::reflection::FieldMut::Value(self.nsq.get_or_insert_with(::std::default::Default::default))
      }
      "pulsar" => {
        ::pb_jelly::reflection::FieldMut::Value(self.pulsar.get_or_insert_with(::std::default::Default::default))
      }
      "rabbit" => {
        ::pb_jelly::reflection::FieldMut::Value(self.rabbit.get_or_insert_with(::std::default::Default::default))
      }
      "rabbit_streams" => {
        ::pb_jelly::reflection::FieldMut::Value(self.rabbit_streams.get_or_insert_with(::std::default::Default::default))
      }
      "mqtt" => {
        ::pb_jelly::reflection::FieldMut::Value(self.mqtt.get_or_insert_with(::std::default::Default::default))
      }
      "azure_service_bus" => {
        ::pb_jelly::reflection::FieldMut::Value(self.azure_service_bus.get_or_insert_with(::std::default::Default::default))
      }
      "azure_event_hub" => {
        ::pb_jelly::reflection::FieldMut::Value(self.azure_event_hub.get_or_insert_with(::std::default::Default::default))
      }
      "gcp_pubsub" => {
        ::pb_jelly::reflection::FieldMut::Value(self.gcp_pubsub.get_or_insert_with(::std::default::Default::default))
      }
      "kubemq_queue" => {
        ::pb_jelly::reflection::FieldMut::Value(self.kubemq_queue.get_or_insert_with(::std::default::Default::default))
      }
      "redis_pubsub" => {
        ::pb_jelly::reflection::FieldMut::Value(self.redis_pubsub.get_or_insert_with(::std::default::Default::default))
      }
      "redis_streams" => {
        ::pb_jelly::reflection::FieldMut::Value(self.redis_streams.get_or_insert_with(::std::default::Default::default))
      }
      "nats_jetstream" => {
        ::pb_jelly::reflection::FieldMut::Value(self.nats_jetstream.get_or_insert_with(::std::default::Default::default))
      }
      "aws_kinesis" => {
        ::pb_jelly::reflection::FieldMut::Value(self.aws_kinesis.get_or_insert_with(::std::default::Default::default))
      }
      "memphis" => {
        ::pb_jelly::reflection::FieldMut::Value(self.memphis.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteGroupKafkaOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_kafka::KafkaConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_kafka::KafkaWriteArgs>,
}
impl ::std::default::Default for WriteGroupKafkaOptions {
  fn default() -> Self {
    WriteGroupKafkaOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteGroupKafkaOptions_default: WriteGroupKafkaOptions = WriteGroupKafkaOptions::default();
}
impl ::pb_jelly::Message for WriteGroupKafkaOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteGroupKafkaOptions",
      full_name: "protos.opts.WriteGroupKafkaOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.WriteGroupKafkaOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.WriteGroupKafkaOptions.args",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut _conn_size = 0;
    for val in &self._conn {
      let l = ::pb_jelly::Message::compute_size(val);
      _conn_size += ::pb_jelly::wire_format::serialized_length(1);
      _conn_size += ::pb_jelly::varint::serialized_length(l as u64);
      _conn_size += l;
    }
    size += _conn_size;
    let mut args_size = 0;
    for val in &self.args {
      let l = ::pb_jelly::Message::compute_size(val);
      args_size += ::pb_jelly::wire_format::serialized_length(2);
      args_size += ::pb_jelly::varint::serialized_length(l as u64);
      args_size += l;
    }
    size += args_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self._conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.args {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self._conn {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.args {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupKafkaOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_kafka::KafkaConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupKafkaOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_kafka::KafkaWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.args = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteGroupKafkaOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "_conn" => {
        ::pb_jelly::reflection::FieldMut::Value(self._conn.get_or_insert_with(::std::default::Default::default))
      }
      "args" => {
        ::pb_jelly::reflection::FieldMut::Value(self.args.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteGroupActiveMQOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_activemq::ActiveMQConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_activemq::ActiveMQWriteArgs>,
}
impl ::std::default::Default for WriteGroupActiveMQOptions {
  fn default() -> Self {
    WriteGroupActiveMQOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteGroupActiveMQOptions_default: WriteGroupActiveMQOptions = WriteGroupActiveMQOptions::default();
}
impl ::pb_jelly::Message for WriteGroupActiveMQOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteGroupActiveMQOptions",
      full_name: "protos.opts.WriteGroupActiveMQOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.WriteGroupActiveMQOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.WriteGroupActiveMQOptions.args",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut _conn_size = 0;
    for val in &self._conn {
      let l = ::pb_jelly::Message::compute_size(val);
      _conn_size += ::pb_jelly::wire_format::serialized_length(1);
      _conn_size += ::pb_jelly::varint::serialized_length(l as u64);
      _conn_size += l;
    }
    size += _conn_size;
    let mut args_size = 0;
    for val in &self.args {
      let l = ::pb_jelly::Message::compute_size(val);
      args_size += ::pb_jelly::wire_format::serialized_length(2);
      args_size += ::pb_jelly::varint::serialized_length(l as u64);
      args_size += l;
    }
    size += args_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self._conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.args {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self._conn {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.args {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupActiveMQOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_activemq::ActiveMQConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupActiveMQOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_activemq::ActiveMQWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.args = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteGroupActiveMQOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "_conn" => {
        ::pb_jelly::reflection::FieldMut::Value(self._conn.get_or_insert_with(::std::default::Default::default))
      }
      "args" => {
        ::pb_jelly::reflection::FieldMut::Value(self.args.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteGroupAWSSQSOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_aws_sqs::AWSSQSConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_aws_sqs::AWSSQSWriteArgs>,
}
impl ::std::default::Default for WriteGroupAWSSQSOptions {
  fn default() -> Self {
    WriteGroupAWSSQSOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteGroupAWSSQSOptions_default: WriteGroupAWSSQSOptions = WriteGroupAWSSQSOptions::default();
}
impl ::pb_jelly::Message for WriteGroupAWSSQSOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteGroupAWSSQSOptions",
      full_name: "protos.opts.WriteGroupAWSSQSOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.WriteGroupAWSSQSOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.WriteGroupAWSSQSOptions.args",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut _conn_size = 0;
    for val in &self._conn {
      let l = ::pb_jelly::Message::compute_size(val);
      _conn_size += ::pb_jelly::wire_format::serialized_length(1);
      _conn_size += ::pb_jelly::varint::serialized_length(l as u64);
      _conn_size += l;
    }
    size += _conn_size;
    let mut args_size = 0;
    for val in &self.args {
      let l = ::pb_jelly::Message::compute_size(val);
      args_size += ::pb_jelly::wire_format::serialized_length(2);
      args_size += ::pb_jelly::varint::serialized_length(l as u64);
      args_size += l;
    }
    size += args_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self._conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.args {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self._conn {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.args {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupAWSSQSOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_aws_sqs::AWSSQSConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupAWSSQSOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_aws_sqs::AWSSQSWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.args = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteGroupAWSSQSOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "_conn" => {
        ::pb_jelly::reflection::FieldMut::Value(self._conn.get_or_insert_with(::std::default::Default::default))
      }
      "args" => {
        ::pb_jelly::reflection::FieldMut::Value(self.args.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteGroupAWSSNSOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_aws_sns::AWSSNSConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_aws_sns::AWSSNSWriteArgs>,
}
impl ::std::default::Default for WriteGroupAWSSNSOptions {
  fn default() -> Self {
    WriteGroupAWSSNSOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteGroupAWSSNSOptions_default: WriteGroupAWSSNSOptions = WriteGroupAWSSNSOptions::default();
}
impl ::pb_jelly::Message for WriteGroupAWSSNSOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteGroupAWSSNSOptions",
      full_name: "protos.opts.WriteGroupAWSSNSOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.WriteGroupAWSSNSOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.WriteGroupAWSSNSOptions.args",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut _conn_size = 0;
    for val in &self._conn {
      let l = ::pb_jelly::Message::compute_size(val);
      _conn_size += ::pb_jelly::wire_format::serialized_length(1);
      _conn_size += ::pb_jelly::varint::serialized_length(l as u64);
      _conn_size += l;
    }
    size += _conn_size;
    let mut args_size = 0;
    for val in &self.args {
      let l = ::pb_jelly::Message::compute_size(val);
      args_size += ::pb_jelly::wire_format::serialized_length(2);
      args_size += ::pb_jelly::varint::serialized_length(l as u64);
      args_size += l;
    }
    size += args_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self._conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.args {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self._conn {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.args {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupAWSSNSOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_aws_sns::AWSSNSConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupAWSSNSOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_aws_sns::AWSSNSWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.args = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteGroupAWSSNSOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "_conn" => {
        ::pb_jelly::reflection::FieldMut::Value(self._conn.get_or_insert_with(::std::default::Default::default))
      }
      "args" => {
        ::pb_jelly::reflection::FieldMut::Value(self.args.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteGroupNatsOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_nats::NatsConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_nats::NatsWriteArgs>,
}
impl ::std::default::Default for WriteGroupNatsOptions {
  fn default() -> Self {
    WriteGroupNatsOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteGroupNatsOptions_default: WriteGroupNatsOptions = WriteGroupNatsOptions::default();
}
impl ::pb_jelly::Message for WriteGroupNatsOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteGroupNatsOptions",
      full_name: "protos.opts.WriteGroupNatsOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.WriteGroupNatsOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.WriteGroupNatsOptions.args",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut _conn_size = 0;
    for val in &self._conn {
      let l = ::pb_jelly::Message::compute_size(val);
      _conn_size += ::pb_jelly::wire_format::serialized_length(1);
      _conn_size += ::pb_jelly::varint::serialized_length(l as u64);
      _conn_size += l;
    }
    size += _conn_size;
    let mut args_size = 0;
    for val in &self.args {
      let l = ::pb_jelly::Message::compute_size(val);
      args_size += ::pb_jelly::wire_format::serialized_length(2);
      args_size += ::pb_jelly::varint::serialized_length(l as u64);
      args_size += l;
    }
    size += args_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self._conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.args {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self._conn {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.args {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupNatsOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats::NatsConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupNatsOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats::NatsWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.args = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteGroupNatsOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "_conn" => {
        ::pb_jelly::reflection::FieldMut::Value(self._conn.get_or_insert_with(::std::default::Default::default))
      }
      "args" => {
        ::pb_jelly::reflection::FieldMut::Value(self.args.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteGroupNatsJetstreamOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_nats_jetstream::NatsJetstreamConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_nats_jetstream::NatsJetstreamWriteArgs>,
}
impl ::std::default::Default for WriteGroupNatsJetstreamOptions {
  fn default() -> Self {
    WriteGroupNatsJetstreamOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteGroupNatsJetstreamOptions_default: WriteGroupNatsJetstreamOptions = WriteGroupNatsJetstreamOptions::default();
}
impl ::pb_jelly::Message for WriteGroupNatsJetstreamOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteGroupNatsJetstreamOptions",
      full_name: "protos.opts.WriteGroupNatsJetstreamOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.WriteGroupNatsJetstreamOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.WriteGroupNatsJetstreamOptions.args",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut _conn_size = 0;
    for val in &self._conn {
      let l = ::pb_jelly::Message::compute_size(val);
      _conn_size += ::pb_jelly::wire_format::serialized_length(1);
      _conn_size += ::pb_jelly::varint::serialized_length(l as u64);
      _conn_size += l;
    }
    size += _conn_size;
    let mut args_size = 0;
    for val in &self.args {
      let l = ::pb_jelly::Message::compute_size(val);
      args_size += ::pb_jelly::wire_format::serialized_length(2);
      args_size += ::pb_jelly::varint::serialized_length(l as u64);
      args_size += l;
    }
    size += args_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self._conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.args {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self._conn {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.args {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupNatsJetstreamOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats_jetstream::NatsJetstreamConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupNatsJetstreamOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats_jetstream::NatsJetstreamWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.args = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteGroupNatsJetstreamOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "_conn" => {
        ::pb_jelly::reflection::FieldMut::Value(self._conn.get_or_insert_with(::std::default::Default::default))
      }
      "args" => {
        ::pb_jelly::reflection::FieldMut::Value(self.args.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteGroupNatsStreamingOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_nats_streaming::NatsStreamingConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_nats_streaming::NatsStreamingWriteArgs>,
}
impl ::std::default::Default for WriteGroupNatsStreamingOptions {
  fn default() -> Self {
    WriteGroupNatsStreamingOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteGroupNatsStreamingOptions_default: WriteGroupNatsStreamingOptions = WriteGroupNatsStreamingOptions::default();
}
impl ::pb_jelly::Message for WriteGroupNatsStreamingOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteGroupNatsStreamingOptions",
      full_name: "protos.opts.WriteGroupNatsStreamingOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.WriteGroupNatsStreamingOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.WriteGroupNatsStreamingOptions.args",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut _conn_size = 0;
    for val in &self._conn {
      let l = ::pb_jelly::Message::compute_size(val);
      _conn_size += ::pb_jelly::wire_format::serialized_length(1);
      _conn_size += ::pb_jelly::varint::serialized_length(l as u64);
      _conn_size += l;
    }
    size += _conn_size;
    let mut args_size = 0;
    for val in &self.args {
      let l = ::pb_jelly::Message::compute_size(val);
      args_size += ::pb_jelly::wire_format::serialized_length(2);
      args_size += ::pb_jelly::varint::serialized_length(l as u64);
      args_size += l;
    }
    size += args_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self._conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.args {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self._conn {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.args {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupNatsStreamingOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats_streaming::NatsStreamingConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupNatsStreamingOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats_streaming::NatsStreamingWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.args = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteGroupNatsStreamingOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "_conn" => {
        ::pb_jelly::reflection::FieldMut::Value(self._conn.get_or_insert_with(::std::default::Default::default))
      }
      "args" => {
        ::pb_jelly::reflection::FieldMut::Value(self.args.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteGroupNSQOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_nsq::NSQConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_nsq::NSQWriteArgs>,
}
impl ::std::default::Default for WriteGroupNSQOptions {
  fn default() -> Self {
    WriteGroupNSQOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteGroupNSQOptions_default: WriteGroupNSQOptions = WriteGroupNSQOptions::default();
}
impl ::pb_jelly::Message for WriteGroupNSQOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteGroupNSQOptions",
      full_name: "protos.opts.WriteGroupNSQOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.WriteGroupNSQOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.WriteGroupNSQOptions.args",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut _conn_size = 0;
    for val in &self._conn {
      let l = ::pb_jelly::Message::compute_size(val);
      _conn_size += ::pb_jelly::wire_format::serialized_length(1);
      _conn_size += ::pb_jelly::varint::serialized_length(l as u64);
      _conn_size += l;
    }
    size += _conn_size;
    let mut args_size = 0;
    for val in &self.args {
      let l = ::pb_jelly::Message::compute_size(val);
      args_size += ::pb_jelly::wire_format::serialized_length(2);
      args_size += ::pb_jelly::varint::serialized_length(l as u64);
      args_size += l;
    }
    size += args_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self._conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.args {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self._conn {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.args {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupNSQOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nsq::NSQConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupNSQOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nsq::NSQWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.args = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteGroupNSQOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "_conn" => {
        ::pb_jelly::reflection::FieldMut::Value(self._conn.get_or_insert_with(::std::default::Default::default))
      }
      "args" => {
        ::pb_jelly::reflection::FieldMut::Value(self.args.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteGroupPulsarOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_pulsar::PulsarConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_pulsar::PulsarWriteArgs>,
}
impl ::std::default::Default for WriteGroupPulsarOptions {
  fn default() -> Self {
    WriteGroupPulsarOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteGroupPulsarOptions_default: WriteGroupPulsarOptions = WriteGroupPulsarOptions::default();
}
impl ::pb_jelly::Message for WriteGroupPulsarOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteGroupPulsarOptions",
      full_name: "protos.opts.WriteGroupPulsarOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.WriteGroupPulsarOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.WriteGroupPulsarOptions.args",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut _conn_size = 0;
    for val in &self._conn {
      let l = ::pb_jelly::Message::compute_size(val);
      _conn_size += ::pb_jelly::wire_format::serialized_length(1);
      _conn_size += ::pb_jelly::varint::serialized_length(l as u64);
      _conn_size += l;
    }
    size += _conn_size;
    let mut args_size = 0;
    for val in &self.args {
      let l = ::pb_jelly::Message::compute_size(val);
      args_size += ::pb_jelly::wire_format::serialized_length(2);
      args_size += ::pb_jelly::varint::serialized_length(l as u64);
      args_size += l;
    }
    size += args_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self._conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.args {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self._conn {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.args {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupPulsarOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_pulsar::PulsarConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupPulsarOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_pulsar::PulsarWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.args = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteGroupPulsarOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "_conn" => {
        ::pb_jelly::reflection::FieldMut::Value(self._conn.get_or_insert_with(::std::default::Default::default))
      }
      "args" => {
        ::pb_jelly::reflection::FieldMut::Value(self.args.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteGroupRabbitOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_rabbit::RabbitConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_rabbit::RabbitWriteArgs>,
}
impl ::std::default::Default for WriteGroupRabbitOptions {
  fn default() -> Self {
    WriteGroupRabbitOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteGroupRabbitOptions_default: WriteGroupRabbitOptions = WriteGroupRabbitOptions::default();
}
impl ::pb_jelly::Message for WriteGroupRabbitOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteGroupRabbitOptions",
      full_name: "protos.opts.WriteGroupRabbitOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.WriteGroupRabbitOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.WriteGroupRabbitOptions.args",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut _conn_size = 0;
    for val in &self._conn {
      let l = ::pb_jelly::Message::compute_size(val);
      _conn_size += ::pb_jelly::wire_format::serialized_length(1);
      _conn_size += ::pb_jelly::varint::serialized_length(l as u64);
      _conn_size += l;
    }
    size += _conn_size;
    let mut args_size = 0;
    for val in &self.args {
      let l = ::pb_jelly::Message::compute_size(val);
      args_size += ::pb_jelly::wire_format::serialized_length(2);
      args_size += ::pb_jelly::varint::serialized_length(l as u64);
      args_size += l;
    }
    size += args_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self._conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.args {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self._conn {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.args {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupRabbitOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_rabbit::RabbitConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupRabbitOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_rabbit::RabbitWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.args = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteGroupRabbitOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "_conn" => {
        ::pb_jelly::reflection::FieldMut::Value(self._conn.get_or_insert_with(::std::default::Default::default))
      }
      "args" => {
        ::pb_jelly::reflection::FieldMut::Value(self.args.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteGroupRabbitStreamsOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_rabbit_streams::RabbitStreamsConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_rabbit_streams::RabbitStreamsWriteArgs>,
}
impl ::std::default::Default for WriteGroupRabbitStreamsOptions {
  fn default() -> Self {
    WriteGroupRabbitStreamsOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteGroupRabbitStreamsOptions_default: WriteGroupRabbitStreamsOptions = WriteGroupRabbitStreamsOptions::default();
}
impl ::pb_jelly::Message for WriteGroupRabbitStreamsOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteGroupRabbitStreamsOptions",
      full_name: "protos.opts.WriteGroupRabbitStreamsOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.WriteGroupRabbitStreamsOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.WriteGroupRabbitStreamsOptions.args",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut _conn_size = 0;
    for val in &self._conn {
      let l = ::pb_jelly::Message::compute_size(val);
      _conn_size += ::pb_jelly::wire_format::serialized_length(1);
      _conn_size += ::pb_jelly::varint::serialized_length(l as u64);
      _conn_size += l;
    }
    size += _conn_size;
    let mut args_size = 0;
    for val in &self.args {
      let l = ::pb_jelly::Message::compute_size(val);
      args_size += ::pb_jelly::wire_format::serialized_length(2);
      args_size += ::pb_jelly::varint::serialized_length(l as u64);
      args_size += l;
    }
    size += args_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self._conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.args {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self._conn {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.args {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupRabbitStreamsOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_rabbit_streams::RabbitStreamsConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupRabbitStreamsOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_rabbit_streams::RabbitStreamsWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.args = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteGroupRabbitStreamsOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "_conn" => {
        ::pb_jelly::reflection::FieldMut::Value(self._conn.get_or_insert_with(::std::default::Default::default))
      }
      "args" => {
        ::pb_jelly::reflection::FieldMut::Value(self.args.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteGroupRedisPubSubOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_redis_pubsub::RedisPubSubConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_redis_pubsub::RedisPubSubWriteArgs>,
}
impl ::std::default::Default for WriteGroupRedisPubSubOptions {
  fn default() -> Self {
    WriteGroupRedisPubSubOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteGroupRedisPubSubOptions_default: WriteGroupRedisPubSubOptions = WriteGroupRedisPubSubOptions::default();
}
impl ::pb_jelly::Message for WriteGroupRedisPubSubOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteGroupRedisPubSubOptions",
      full_name: "protos.opts.WriteGroupRedisPubSubOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.WriteGroupRedisPubSubOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.WriteGroupRedisPubSubOptions.args",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut _conn_size = 0;
    for val in &self._conn {
      let l = ::pb_jelly::Message::compute_size(val);
      _conn_size += ::pb_jelly::wire_format::serialized_length(1);
      _conn_size += ::pb_jelly::varint::serialized_length(l as u64);
      _conn_size += l;
    }
    size += _conn_size;
    let mut args_size = 0;
    for val in &self.args {
      let l = ::pb_jelly::Message::compute_size(val);
      args_size += ::pb_jelly::wire_format::serialized_length(2);
      args_size += ::pb_jelly::varint::serialized_length(l as u64);
      args_size += l;
    }
    size += args_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self._conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.args {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self._conn {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.args {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupRedisPubSubOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_redis_pubsub::RedisPubSubConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupRedisPubSubOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_redis_pubsub::RedisPubSubWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.args = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteGroupRedisPubSubOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "_conn" => {
        ::pb_jelly::reflection::FieldMut::Value(self._conn.get_or_insert_with(::std::default::Default::default))
      }
      "args" => {
        ::pb_jelly::reflection::FieldMut::Value(self.args.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteGroupRedisStreamsOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_redis_streams::RedisStreamsConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_redis_streams::RedisStreamsWriteArgs>,
}
impl ::std::default::Default for WriteGroupRedisStreamsOptions {
  fn default() -> Self {
    WriteGroupRedisStreamsOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteGroupRedisStreamsOptions_default: WriteGroupRedisStreamsOptions = WriteGroupRedisStreamsOptions::default();
}
impl ::pb_jelly::Message for WriteGroupRedisStreamsOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteGroupRedisStreamsOptions",
      full_name: "protos.opts.WriteGroupRedisStreamsOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.WriteGroupRedisStreamsOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.WriteGroupRedisStreamsOptions.args",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut _conn_size = 0;
    for val in &self._conn {
      let l = ::pb_jelly::Message::compute_size(val);
      _conn_size += ::pb_jelly::wire_format::serialized_length(1);
      _conn_size += ::pb_jelly::varint::serialized_length(l as u64);
      _conn_size += l;
    }
    size += _conn_size;
    let mut args_size = 0;
    for val in &self.args {
      let l = ::pb_jelly::Message::compute_size(val);
      args_size += ::pb_jelly::wire_format::serialized_length(2);
      args_size += ::pb_jelly::varint::serialized_length(l as u64);
      args_size += l;
    }
    size += args_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self._conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.args {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self._conn {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.args {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupRedisStreamsOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_redis_streams::RedisStreamsConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupRedisStreamsOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_redis_streams::RedisStreamsWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.args = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteGroupRedisStreamsOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "_conn" => {
        ::pb_jelly::reflection::FieldMut::Value(self._conn.get_or_insert_with(::std::default::Default::default))
      }
      "args" => {
        ::pb_jelly::reflection::FieldMut::Value(self.args.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteGroupAzureEventHubOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_azure_event_hub::AzureEventHubConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_azure_event_hub::AzureEventHubWriteArgs>,
}
impl ::std::default::Default for WriteGroupAzureEventHubOptions {
  fn default() -> Self {
    WriteGroupAzureEventHubOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteGroupAzureEventHubOptions_default: WriteGroupAzureEventHubOptions = WriteGroupAzureEventHubOptions::default();
}
impl ::pb_jelly::Message for WriteGroupAzureEventHubOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteGroupAzureEventHubOptions",
      full_name: "protos.opts.WriteGroupAzureEventHubOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.WriteGroupAzureEventHubOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.WriteGroupAzureEventHubOptions.args",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut _conn_size = 0;
    for val in &self._conn {
      let l = ::pb_jelly::Message::compute_size(val);
      _conn_size += ::pb_jelly::wire_format::serialized_length(1);
      _conn_size += ::pb_jelly::varint::serialized_length(l as u64);
      _conn_size += l;
    }
    size += _conn_size;
    let mut args_size = 0;
    for val in &self.args {
      let l = ::pb_jelly::Message::compute_size(val);
      args_size += ::pb_jelly::wire_format::serialized_length(2);
      args_size += ::pb_jelly::varint::serialized_length(l as u64);
      args_size += l;
    }
    size += args_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self._conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.args {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self._conn {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.args {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupAzureEventHubOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_azure_event_hub::AzureEventHubConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupAzureEventHubOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_azure_event_hub::AzureEventHubWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.args = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteGroupAzureEventHubOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "_conn" => {
        ::pb_jelly::reflection::FieldMut::Value(self._conn.get_or_insert_with(::std::default::Default::default))
      }
      "args" => {
        ::pb_jelly::reflection::FieldMut::Value(self.args.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteGroupAzureServiceBusOptions {
  /// @gotags: kong:"embed"{
  pub _conn: ::std::option::Option<::proto_args::ps_args_azure_service_bus::AzureServiceBusConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_azure_service_bus::AzureServiceBusWriteArgs>,
}
impl ::std::default::Default for WriteGroupAzureServiceBusOptions {
  fn default() -> Self {
    WriteGroupAzureServiceBusOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteGroupAzureServiceBusOptions_default: WriteGroupAzureServiceBusOptions = WriteGroupAzureServiceBusOptions::default();
}
impl ::pb_jelly::Message for WriteGroupAzureServiceBusOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteGroupAzureServiceBusOptions",
      full_name: "protos.opts.WriteGroupAzureServiceBusOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.WriteGroupAzureServiceBusOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.WriteGroupAzureServiceBusOptions.args",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut _conn_size = 0;
    for val in &self._conn {
      let l = ::pb_jelly::Message::compute_size(val);
      _conn_size += ::pb_jelly::wire_format::serialized_length(1);
      _conn_size += ::pb_jelly::varint::serialized_length(l as u64);
      _conn_size += l;
    }
    size += _conn_size;
    let mut args_size = 0;
    for val in &self.args {
      let l = ::pb_jelly::Message::compute_size(val);
      args_size += ::pb_jelly::wire_format::serialized_length(2);
      args_size += ::pb_jelly::varint::serialized_length(l as u64);
      args_size += l;
    }
    size += args_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self._conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.args {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self._conn {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.args {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupAzureServiceBusOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_azure_service_bus::AzureServiceBusConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupAzureServiceBusOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_azure_service_bus::AzureServiceBusWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.args = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteGroupAzureServiceBusOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "_conn" => {
        ::pb_jelly::reflection::FieldMut::Value(self._conn.get_or_insert_with(::std::default::Default::default))
      }
      "args" => {
        ::pb_jelly::reflection::FieldMut::Value(self.args.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteGroupMQTTOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_mqtt::MQTTConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_mqtt::MQTTWriteArgs>,
}
impl ::std::default::Default for WriteGroupMQTTOptions {
  fn default() -> Self {
    WriteGroupMQTTOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteGroupMQTTOptions_default: WriteGroupMQTTOptions = WriteGroupMQTTOptions::default();
}
impl ::pb_jelly::Message for WriteGroupMQTTOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteGroupMQTTOptions",
      full_name: "protos.opts.WriteGroupMQTTOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.WriteGroupMQTTOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.WriteGroupMQTTOptions.args",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut _conn_size = 0;
    for val in &self._conn {
      let l = ::pb_jelly::Message::compute_size(val);
      _conn_size += ::pb_jelly::wire_format::serialized_length(1);
      _conn_size += ::pb_jelly::varint::serialized_length(l as u64);
      _conn_size += l;
    }
    size += _conn_size;
    let mut args_size = 0;
    for val in &self.args {
      let l = ::pb_jelly::Message::compute_size(val);
      args_size += ::pb_jelly::wire_format::serialized_length(2);
      args_size += ::pb_jelly::varint::serialized_length(l as u64);
      args_size += l;
    }
    size += args_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self._conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.args {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self._conn {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.args {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupMQTTOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_mqtt::MQTTConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupMQTTOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_mqtt::MQTTWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.args = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteGroupMQTTOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "_conn" => {
        ::pb_jelly::reflection::FieldMut::Value(self._conn.get_or_insert_with(::std::default::Default::default))
      }
      "args" => {
        ::pb_jelly::reflection::FieldMut::Value(self.args.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteGroupGCPPubSubOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_gcp_pubsub::GCPPubSubConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_gcp_pubsub::GCPPubSubWriteArgs>,
}
impl ::std::default::Default for WriteGroupGCPPubSubOptions {
  fn default() -> Self {
    WriteGroupGCPPubSubOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteGroupGCPPubSubOptions_default: WriteGroupGCPPubSubOptions = WriteGroupGCPPubSubOptions::default();
}
impl ::pb_jelly::Message for WriteGroupGCPPubSubOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteGroupGCPPubSubOptions",
      full_name: "protos.opts.WriteGroupGCPPubSubOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.WriteGroupGCPPubSubOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.WriteGroupGCPPubSubOptions.args",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut _conn_size = 0;
    for val in &self._conn {
      let l = ::pb_jelly::Message::compute_size(val);
      _conn_size += ::pb_jelly::wire_format::serialized_length(1);
      _conn_size += ::pb_jelly::varint::serialized_length(l as u64);
      _conn_size += l;
    }
    size += _conn_size;
    let mut args_size = 0;
    for val in &self.args {
      let l = ::pb_jelly::Message::compute_size(val);
      args_size += ::pb_jelly::wire_format::serialized_length(2);
      args_size += ::pb_jelly::varint::serialized_length(l as u64);
      args_size += l;
    }
    size += args_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self._conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.args {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self._conn {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.args {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupGCPPubSubOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_gcp_pubsub::GCPPubSubConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupGCPPubSubOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_gcp_pubsub::GCPPubSubWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.args = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteGroupGCPPubSubOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "_conn" => {
        ::pb_jelly::reflection::FieldMut::Value(self._conn.get_or_insert_with(::std::default::Default::default))
      }
      "args" => {
        ::pb_jelly::reflection::FieldMut::Value(self.args.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteGroupKubeMQQueueOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_kubemq_queue::KubeMQQueueConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_kubemq_queue::KubeMQQueueWriteArgs>,
}
impl ::std::default::Default for WriteGroupKubeMQQueueOptions {
  fn default() -> Self {
    WriteGroupKubeMQQueueOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteGroupKubeMQQueueOptions_default: WriteGroupKubeMQQueueOptions = WriteGroupKubeMQQueueOptions::default();
}
impl ::pb_jelly::Message for WriteGroupKubeMQQueueOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteGroupKubeMQQueueOptions",
      full_name: "protos.opts.WriteGroupKubeMQQueueOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.WriteGroupKubeMQQueueOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.WriteGroupKubeMQQueueOptions.args",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut _conn_size = 0;
    for val in &self._conn {
      let l = ::pb_jelly::Message::compute_size(val);
      _conn_size += ::pb_jelly::wire_format::serialized_length(1);
      _conn_size += ::pb_jelly::varint::serialized_length(l as u64);
      _conn_size += l;
    }
    size += _conn_size;
    let mut args_size = 0;
    for val in &self.args {
      let l = ::pb_jelly::Message::compute_size(val);
      args_size += ::pb_jelly::wire_format::serialized_length(2);
      args_size += ::pb_jelly::varint::serialized_length(l as u64);
      args_size += l;
    }
    size += args_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self._conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.args {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self._conn {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.args {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupKubeMQQueueOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_kubemq_queue::KubeMQQueueConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupKubeMQQueueOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_kubemq_queue::KubeMQQueueWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.args = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteGroupKubeMQQueueOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "_conn" => {
        ::pb_jelly::reflection::FieldMut::Value(self._conn.get_or_insert_with(::std::default::Default::default))
      }
      "args" => {
        ::pb_jelly::reflection::FieldMut::Value(self.args.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteGroupAWSKinesisOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_aws_kinesis::AWSKinesisConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_aws_kinesis::AWSKinesisWriteArgs>,
}
impl ::std::default::Default for WriteGroupAWSKinesisOptions {
  fn default() -> Self {
    WriteGroupAWSKinesisOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteGroupAWSKinesisOptions_default: WriteGroupAWSKinesisOptions = WriteGroupAWSKinesisOptions::default();
}
impl ::pb_jelly::Message for WriteGroupAWSKinesisOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteGroupAWSKinesisOptions",
      full_name: "protos.opts.WriteGroupAWSKinesisOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.WriteGroupAWSKinesisOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.WriteGroupAWSKinesisOptions.args",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut _conn_size = 0;
    for val in &self._conn {
      let l = ::pb_jelly::Message::compute_size(val);
      _conn_size += ::pb_jelly::wire_format::serialized_length(1);
      _conn_size += ::pb_jelly::varint::serialized_length(l as u64);
      _conn_size += l;
    }
    size += _conn_size;
    let mut args_size = 0;
    for val in &self.args {
      let l = ::pb_jelly::Message::compute_size(val);
      args_size += ::pb_jelly::wire_format::serialized_length(2);
      args_size += ::pb_jelly::varint::serialized_length(l as u64);
      args_size += l;
    }
    size += args_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self._conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.args {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self._conn {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.args {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupAWSKinesisOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_aws_kinesis::AWSKinesisConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupAWSKinesisOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_aws_kinesis::AWSKinesisWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.args = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteGroupAWSKinesisOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "_conn" => {
        ::pb_jelly::reflection::FieldMut::Value(self._conn.get_or_insert_with(::std::default::Default::default))
      }
      "args" => {
        ::pb_jelly::reflection::FieldMut::Value(self.args.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteGroupMemphisOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_memphis::MemphisConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_memphis::MemphisWriteArgs>,
}
impl ::std::default::Default for WriteGroupMemphisOptions {
  fn default() -> Self {
    WriteGroupMemphisOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteGroupMemphisOptions_default: WriteGroupMemphisOptions = WriteGroupMemphisOptions::default();
}
impl ::pb_jelly::Message for WriteGroupMemphisOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteGroupMemphisOptions",
      full_name: "protos.opts.WriteGroupMemphisOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.WriteGroupMemphisOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.WriteGroupMemphisOptions.args",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut _conn_size = 0;
    for val in &self._conn {
      let l = ::pb_jelly::Message::compute_size(val);
      _conn_size += ::pb_jelly::wire_format::serialized_length(1);
      _conn_size += ::pb_jelly::varint::serialized_length(l as u64);
      _conn_size += l;
    }
    size += _conn_size;
    let mut args_size = 0;
    for val in &self.args {
      let l = ::pb_jelly::Message::compute_size(val);
      args_size += ::pb_jelly::wire_format::serialized_length(2);
      args_size += ::pb_jelly::varint::serialized_length(l as u64);
      args_size += l;
    }
    size += args_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self._conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.args {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self._conn {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.args {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupMemphisOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_memphis::MemphisConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteGroupMemphisOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_memphis::MemphisWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.args = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteGroupMemphisOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "_conn" => {
        ::pb_jelly::reflection::FieldMut::Value(self._conn.get_or_insert_with(::std::default::Default::default))
      }
      "args" => {
        ::pb_jelly::reflection::FieldMut::Value(self.args.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

