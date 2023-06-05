// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct GetTunnelOptions {
  /// @gotags: kong:"help='ID of the tunnel to get (leave empty to get all)'"
  pub id: ::std::string::String,
}
impl ::std::default::Default for GetTunnelOptions {
  fn default() -> Self {
    GetTunnelOptions {
      id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref GetTunnelOptions_default: GetTunnelOptions = GetTunnelOptions::default();
}
impl ::pb_jelly::Message for GetTunnelOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "GetTunnelOptions",
      full_name: "protos.opts.GetTunnelOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "id",
          full_name: "protos.opts.GetTunnelOptions.id",
          index: 0,
          number: 1,
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
    let mut id_size = 0;
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      let l = ::pb_jelly::Message::compute_size(val);
      id_size += ::pb_jelly::wire_format::serialized_length(1);
      id_size += ::pb_jelly::varint::serialized_length(l as u64);
      id_size += l;
    }
    size += id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GetTunnelOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for GetTunnelOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct CreateTunnelOptions {
  /// @gotags: kong:"help='Connection ID for the tunnel to use',required=true"
  pub connection_id: ::std::string::String,
  /// @gotags: kong:"help='Streamdal API token (create in settings -> security)',required=true"
  pub tunnel_token: ::std::string::String,
  /// @gotags: kong:"help='Name for the tunnel (auto-generated if left empty)'"
  pub name: ::std::string::String,
  /// @gotags: kong:"help='Notes associated with the tunnel'"
  pub notes: ::std::string::String,
  /// @gotags: kong:"help='Tunnel API address',default='dproxy.streamdal.com:443'"
  pub _tunnel_address: ::std::string::String,
  /// @gotags: kong:"help='Tunnel API initial connection timeout',default=5"
  pub _tunnel_timeout_seconds: u32,
  /// @gotags: kong:"help='Use gRPC insecure mode when talking to Streamdal Tunnel API'"
  pub _tunnel_insecure: bool,
  // --------------------------------------------------------------------- //
  //                       SUPPORTED BACKENDS (100-999)                    //
  // --------------------------------------------------------------------- //

  /// @gotags: kong:"cmd,help='Apache Kafka'"
  pub kafka: ::std::option::Option<::proto_args::ps_args_kafka::KafkaWriteArgs>,
  /// @gotags: kong:"cmd,help='Apache ActiveMQ'"
  pub activemq: ::std::option::Option<::proto_args::ps_args_activemq::ActiveMQWriteArgs>,
  /// @gotags: kong:"cmd,help='AWS Simple Queue System'"
  pub aws_sqs: ::std::option::Option<::proto_args::ps_args_aws_sqs::AWSSQSWriteArgs>,
  /// @gotags: kong:"cmd,help='AWS Simple Notification System'"
  pub aws_sns: ::std::option::Option<::proto_args::ps_args_aws_sns::AWSSNSWriteArgs>,
  /// @gotags: kong:"cmd,help='NATS'"
  pub nats: ::std::option::Option<::proto_args::ps_args_nats::NatsWriteArgs>,
  /// @gotags: kong:"cmd,help='NATS Streaming'"
  pub nats_streaming: ::std::option::Option<::proto_args::ps_args_nats_streaming::NatsStreamingWriteArgs>,
  /// @gotags: kong:"cmd,help='NSQ'"
  pub nsq: ::std::option::Option<::proto_args::ps_args_nsq::NSQWriteArgs>,
  /// @gotags: kong:"cmd,help='RabbitMQ'"
  pub rabbit: ::std::option::Option<::proto_args::ps_args_rabbit::RabbitWriteArgs>,
  /// @gotags: kong:"cmd,help='MQTT'"
  pub mqtt: ::std::option::Option<::proto_args::ps_args_mqtt::MQTTWriteArgs>,
  /// @gotags: kong:"cmd,help='Azure Service Bus'"
  pub azure_service_bus: ::std::option::Option<::proto_args::ps_args_azure_service_bus::AzureServiceBusWriteArgs>,
  /// @gotags: kong:"cmd,help='Azure Event Hub'"
  pub azure_event_hub: ::std::option::Option<::proto_args::ps_args_azure_event_hub::AzureEventHubWriteArgs>,
  /// @gotags: kong:"cmd,help='Google Cloud Platform Pub/Sub'"
  pub gcp_pubsub: ::std::option::Option<::proto_args::ps_args_gcp_pubsub::GCPPubSubWriteArgs>,
  /// @gotags: kong:"cmd,help='KubeMQ Queue'"
  pub kubemq_queue: ::std::option::Option<::proto_args::ps_args_kubemq_queue::KubeMQQueueWriteArgs>,
  /// @gotags: kong:"cmd,help='Redis PubSub'"
  pub redis_pubsub: ::std::option::Option<::proto_args::ps_args_redis_pubsub::RedisPubSubWriteArgs>,
  /// @gotags: kong:"cmd,help='Redis Streams'"
  pub redis_streams: ::std::option::Option<::proto_args::ps_args_redis_streams::RedisStreamsWriteArgs>,
  /// @gotags: kong:"cmd,help='Apache Pulsar'"
  pub pulsar: ::std::option::Option<::proto_args::ps_args_pulsar::PulsarWriteArgs>,
  /// @gotags: kong:"cmd,help='RabbitMQ Streams'"
  pub rabbit_streams: ::std::option::Option<::proto_args::ps_args_rabbit_streams::RabbitStreamsWriteArgs>,
  /// @gotags: kong:"cmd,help='NATS JetStream'"
  pub nats_jetstream: ::std::option::Option<::proto_args::ps_args_nats_jetstream::NatsJetstreamWriteArgs>,
  /// @gotags: kong:"cmd,help='AWS Kinesis Streams'"
  pub aws_kinesis: ::std::option::Option<::proto_args::ps_args_aws_kinesis::AWSKinesisWriteArgs>,
  /// @gotags: kong:"cmd,help='Memphis'"
  pub memphis: ::std::option::Option<::proto_args::ps_args_memphis::MemphisWriteArgs>,
}
impl ::std::default::Default for CreateTunnelOptions {
  fn default() -> Self {
    CreateTunnelOptions {
      connection_id: ::std::default::Default::default(),
      tunnel_token: ::std::default::Default::default(),
      name: ::std::default::Default::default(),
      notes: ::std::default::Default::default(),
      _tunnel_address: ::std::default::Default::default(),
      _tunnel_timeout_seconds: ::std::default::Default::default(),
      _tunnel_insecure: ::std::default::Default::default(),
      kafka: ::std::default::Default::default(),
      activemq: ::std::default::Default::default(),
      aws_sqs: ::std::default::Default::default(),
      aws_sns: ::std::default::Default::default(),
      nats: ::std::default::Default::default(),
      nats_streaming: ::std::default::Default::default(),
      nsq: ::std::default::Default::default(),
      rabbit: ::std::default::Default::default(),
      mqtt: ::std::default::Default::default(),
      azure_service_bus: ::std::default::Default::default(),
      azure_event_hub: ::std::default::Default::default(),
      gcp_pubsub: ::std::default::Default::default(),
      kubemq_queue: ::std::default::Default::default(),
      redis_pubsub: ::std::default::Default::default(),
      redis_streams: ::std::default::Default::default(),
      pulsar: ::std::default::Default::default(),
      rabbit_streams: ::std::default::Default::default(),
      nats_jetstream: ::std::default::Default::default(),
      aws_kinesis: ::std::default::Default::default(),
      memphis: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref CreateTunnelOptions_default: CreateTunnelOptions = CreateTunnelOptions::default();
}
impl ::pb_jelly::Message for CreateTunnelOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "CreateTunnelOptions",
      full_name: "protos.opts.CreateTunnelOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "connection_id",
          full_name: "protos.opts.CreateTunnelOptions.connection_id",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tunnel_token",
          full_name: "protos.opts.CreateTunnelOptions.tunnel_token",
          index: 1,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "name",
          full_name: "protos.opts.CreateTunnelOptions.name",
          index: 2,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "notes",
          full_name: "protos.opts.CreateTunnelOptions.notes",
          index: 3,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_tunnel_address",
          full_name: "protos.opts.CreateTunnelOptions._tunnel_address",
          index: 4,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_tunnel_timeout_seconds",
          full_name: "protos.opts.CreateTunnelOptions._tunnel_timeout_seconds",
          index: 5,
          number: 7,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_tunnel_insecure",
          full_name: "protos.opts.CreateTunnelOptions._tunnel_insecure",
          index: 6,
          number: 8,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "kafka",
          full_name: "protos.opts.CreateTunnelOptions.kafka",
          index: 7,
          number: 100,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "activemq",
          full_name: "protos.opts.CreateTunnelOptions.activemq",
          index: 8,
          number: 101,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_sqs",
          full_name: "protos.opts.CreateTunnelOptions.aws_sqs",
          index: 9,
          number: 102,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_sns",
          full_name: "protos.opts.CreateTunnelOptions.aws_sns",
          index: 10,
          number: 103,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "nats",
          full_name: "protos.opts.CreateTunnelOptions.nats",
          index: 11,
          number: 104,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "nats_streaming",
          full_name: "protos.opts.CreateTunnelOptions.nats_streaming",
          index: 12,
          number: 105,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "nsq",
          full_name: "protos.opts.CreateTunnelOptions.nsq",
          index: 13,
          number: 106,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "rabbit",
          full_name: "protos.opts.CreateTunnelOptions.rabbit",
          index: 14,
          number: 107,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "mqtt",
          full_name: "protos.opts.CreateTunnelOptions.mqtt",
          index: 15,
          number: 108,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "azure_service_bus",
          full_name: "protos.opts.CreateTunnelOptions.azure_service_bus",
          index: 16,
          number: 109,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "azure_event_hub",
          full_name: "protos.opts.CreateTunnelOptions.azure_event_hub",
          index: 17,
          number: 110,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "gcp_pubsub",
          full_name: "protos.opts.CreateTunnelOptions.gcp_pubsub",
          index: 18,
          number: 111,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "kubemq_queue",
          full_name: "protos.opts.CreateTunnelOptions.kubemq_queue",
          index: 19,
          number: 112,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "redis_pubsub",
          full_name: "protos.opts.CreateTunnelOptions.redis_pubsub",
          index: 20,
          number: 113,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "redis_streams",
          full_name: "protos.opts.CreateTunnelOptions.redis_streams",
          index: 21,
          number: 114,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "pulsar",
          full_name: "protos.opts.CreateTunnelOptions.pulsar",
          index: 22,
          number: 115,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "rabbit_streams",
          full_name: "protos.opts.CreateTunnelOptions.rabbit_streams",
          index: 23,
          number: 116,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "nats_jetstream",
          full_name: "protos.opts.CreateTunnelOptions.nats_jetstream",
          index: 24,
          number: 117,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_kinesis",
          full_name: "protos.opts.CreateTunnelOptions.aws_kinesis",
          index: 25,
          number: 118,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "memphis",
          full_name: "protos.opts.CreateTunnelOptions.memphis",
          index: 26,
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
    let mut tunnel_token_size = 0;
    if self.tunnel_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tunnel_token;
      let l = ::pb_jelly::Message::compute_size(val);
      tunnel_token_size += ::pb_jelly::wire_format::serialized_length(3);
      tunnel_token_size += ::pb_jelly::varint::serialized_length(l as u64);
      tunnel_token_size += l;
    }
    size += tunnel_token_size;
    let mut name_size = 0;
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
      let l = ::pb_jelly::Message::compute_size(val);
      name_size += ::pb_jelly::wire_format::serialized_length(4);
      name_size += ::pb_jelly::varint::serialized_length(l as u64);
      name_size += l;
    }
    size += name_size;
    let mut notes_size = 0;
    if self.notes != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.notes;
      let l = ::pb_jelly::Message::compute_size(val);
      notes_size += ::pb_jelly::wire_format::serialized_length(5);
      notes_size += ::pb_jelly::varint::serialized_length(l as u64);
      notes_size += l;
    }
    size += notes_size;
    let mut _tunnel_address_size = 0;
    if self._tunnel_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._tunnel_address;
      let l = ::pb_jelly::Message::compute_size(val);
      _tunnel_address_size += ::pb_jelly::wire_format::serialized_length(6);
      _tunnel_address_size += ::pb_jelly::varint::serialized_length(l as u64);
      _tunnel_address_size += l;
    }
    size += _tunnel_address_size;
    let mut _tunnel_timeout_seconds_size = 0;
    if self._tunnel_timeout_seconds != <u32 as ::std::default::Default>::default() {
      let val = &self._tunnel_timeout_seconds;
      let l = ::pb_jelly::Message::compute_size(val);
      _tunnel_timeout_seconds_size += ::pb_jelly::wire_format::serialized_length(7);
      _tunnel_timeout_seconds_size += l;
    }
    size += _tunnel_timeout_seconds_size;
    let mut _tunnel_insecure_size = 0;
    if self._tunnel_insecure != <bool as ::std::default::Default>::default() {
      let val = &self._tunnel_insecure;
      let l = ::pb_jelly::Message::compute_size(val);
      _tunnel_insecure_size += ::pb_jelly::wire_format::serialized_length(8);
      _tunnel_insecure_size += l;
    }
    size += _tunnel_insecure_size;
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
    let mut rabbit_size = 0;
    for val in &self.rabbit {
      let l = ::pb_jelly::Message::compute_size(val);
      rabbit_size += ::pb_jelly::wire_format::serialized_length(107);
      rabbit_size += ::pb_jelly::varint::serialized_length(l as u64);
      rabbit_size += l;
    }
    size += rabbit_size;
    let mut mqtt_size = 0;
    for val in &self.mqtt {
      let l = ::pb_jelly::Message::compute_size(val);
      mqtt_size += ::pb_jelly::wire_format::serialized_length(108);
      mqtt_size += ::pb_jelly::varint::serialized_length(l as u64);
      mqtt_size += l;
    }
    size += mqtt_size;
    let mut azure_service_bus_size = 0;
    for val in &self.azure_service_bus {
      let l = ::pb_jelly::Message::compute_size(val);
      azure_service_bus_size += ::pb_jelly::wire_format::serialized_length(109);
      azure_service_bus_size += ::pb_jelly::varint::serialized_length(l as u64);
      azure_service_bus_size += l;
    }
    size += azure_service_bus_size;
    let mut azure_event_hub_size = 0;
    for val in &self.azure_event_hub {
      let l = ::pb_jelly::Message::compute_size(val);
      azure_event_hub_size += ::pb_jelly::wire_format::serialized_length(110);
      azure_event_hub_size += ::pb_jelly::varint::serialized_length(l as u64);
      azure_event_hub_size += l;
    }
    size += azure_event_hub_size;
    let mut gcp_pubsub_size = 0;
    for val in &self.gcp_pubsub {
      let l = ::pb_jelly::Message::compute_size(val);
      gcp_pubsub_size += ::pb_jelly::wire_format::serialized_length(111);
      gcp_pubsub_size += ::pb_jelly::varint::serialized_length(l as u64);
      gcp_pubsub_size += l;
    }
    size += gcp_pubsub_size;
    let mut kubemq_queue_size = 0;
    for val in &self.kubemq_queue {
      let l = ::pb_jelly::Message::compute_size(val);
      kubemq_queue_size += ::pb_jelly::wire_format::serialized_length(112);
      kubemq_queue_size += ::pb_jelly::varint::serialized_length(l as u64);
      kubemq_queue_size += l;
    }
    size += kubemq_queue_size;
    let mut redis_pubsub_size = 0;
    for val in &self.redis_pubsub {
      let l = ::pb_jelly::Message::compute_size(val);
      redis_pubsub_size += ::pb_jelly::wire_format::serialized_length(113);
      redis_pubsub_size += ::pb_jelly::varint::serialized_length(l as u64);
      redis_pubsub_size += l;
    }
    size += redis_pubsub_size;
    let mut redis_streams_size = 0;
    for val in &self.redis_streams {
      let l = ::pb_jelly::Message::compute_size(val);
      redis_streams_size += ::pb_jelly::wire_format::serialized_length(114);
      redis_streams_size += ::pb_jelly::varint::serialized_length(l as u64);
      redis_streams_size += l;
    }
    size += redis_streams_size;
    let mut pulsar_size = 0;
    for val in &self.pulsar {
      let l = ::pb_jelly::Message::compute_size(val);
      pulsar_size += ::pb_jelly::wire_format::serialized_length(115);
      pulsar_size += ::pb_jelly::varint::serialized_length(l as u64);
      pulsar_size += l;
    }
    size += pulsar_size;
    let mut rabbit_streams_size = 0;
    for val in &self.rabbit_streams {
      let l = ::pb_jelly::Message::compute_size(val);
      rabbit_streams_size += ::pb_jelly::wire_format::serialized_length(116);
      rabbit_streams_size += ::pb_jelly::varint::serialized_length(l as u64);
      rabbit_streams_size += l;
    }
    size += rabbit_streams_size;
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
    if self.tunnel_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tunnel_token;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.notes != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.notes;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._tunnel_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._tunnel_address;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._tunnel_timeout_seconds != <u32 as ::std::default::Default>::default() {
      let val = &self._tunnel_timeout_seconds;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._tunnel_insecure != <bool as ::std::default::Default>::default() {
      let val = &self._tunnel_insecure;
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
    for val in &self.rabbit {
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
    for val in &self.pulsar {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.rabbit_streams {
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
    if self.tunnel_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tunnel_token;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.notes != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.notes;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self._tunnel_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._tunnel_address;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self._tunnel_timeout_seconds != <u32 as ::std::default::Default>::default() {
      let val = &self._tunnel_timeout_seconds;
      ::pb_jelly::wire_format::write(7, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self._tunnel_insecure != <bool as ::std::default::Default>::default() {
      let val = &self._tunnel_insecure;
      ::pb_jelly::wire_format::write(8, ::pb_jelly::wire_format::Type::Varint, w)?;
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
    for val in &self.rabbit {
      ::pb_jelly::wire_format::write(107, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.mqtt {
      ::pb_jelly::wire_format::write(108, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.azure_service_bus {
      ::pb_jelly::wire_format::write(109, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.azure_event_hub {
      ::pb_jelly::wire_format::write(110, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.gcp_pubsub {
      ::pb_jelly::wire_format::write(111, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.kubemq_queue {
      ::pb_jelly::wire_format::write(112, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.redis_pubsub {
      ::pb_jelly::wire_format::write(113, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.redis_streams {
      ::pb_jelly::wire_format::write(114, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.pulsar {
      ::pb_jelly::wire_format::write(115, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.rabbit_streams {
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
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.connection_id = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tunnel_token = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.name = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.notes = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 6)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._tunnel_address = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "CreateTunnelOptions", 7)?;
          let mut val: u32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self._tunnel_timeout_seconds = val;
        }
        8 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "CreateTunnelOptions", 8)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self._tunnel_insecure = val;
        }
        100 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 100)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_kafka::KafkaWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.kafka = Some(val);
        }
        101 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 101)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_activemq::ActiveMQWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.activemq = Some(val);
        }
        102 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 102)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_aws_sqs::AWSSQSWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.aws_sqs = Some(val);
        }
        103 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 103)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_aws_sns::AWSSNSWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.aws_sns = Some(val);
        }
        104 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 104)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats::NatsWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.nats = Some(val);
        }
        105 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 105)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats_streaming::NatsStreamingWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.nats_streaming = Some(val);
        }
        106 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 106)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nsq::NSQWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.nsq = Some(val);
        }
        107 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 107)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_rabbit::RabbitWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.rabbit = Some(val);
        }
        108 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 108)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_mqtt::MQTTWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.mqtt = Some(val);
        }
        109 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 109)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_azure_service_bus::AzureServiceBusWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.azure_service_bus = Some(val);
        }
        110 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 110)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_azure_event_hub::AzureEventHubWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.azure_event_hub = Some(val);
        }
        111 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 111)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_gcp_pubsub::GCPPubSubWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.gcp_pubsub = Some(val);
        }
        112 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 112)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_kubemq_queue::KubeMQQueueWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.kubemq_queue = Some(val);
        }
        113 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 113)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_redis_pubsub::RedisPubSubWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.redis_pubsub = Some(val);
        }
        114 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 114)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_redis_streams::RedisStreamsWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.redis_streams = Some(val);
        }
        115 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 115)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_pulsar::PulsarWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.pulsar = Some(val);
        }
        116 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 116)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_rabbit_streams::RabbitStreamsWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.rabbit_streams = Some(val);
        }
        117 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 117)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats_jetstream::NatsJetstreamWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.nats_jetstream = Some(val);
        }
        118 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 118)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_aws_kinesis::AWSKinesisWriteArgs = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.aws_kinesis = Some(val);
        }
        119 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateTunnelOptions", 119)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_memphis::MemphisWriteArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for CreateTunnelOptions {
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
      "tunnel_token" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.tunnel_token)
      }
      "name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.name)
      }
      "notes" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.notes)
      }
      "_tunnel_address" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._tunnel_address)
      }
      "_tunnel_timeout_seconds" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._tunnel_timeout_seconds)
      }
      "_tunnel_insecure" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._tunnel_insecure)
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
      "rabbit" => {
        ::pb_jelly::reflection::FieldMut::Value(self.rabbit.get_or_insert_with(::std::default::Default::default))
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
      "pulsar" => {
        ::pb_jelly::reflection::FieldMut::Value(self.pulsar.get_or_insert_with(::std::default::Default::default))
      }
      "rabbit_streams" => {
        ::pb_jelly::reflection::FieldMut::Value(self.rabbit_streams.get_or_insert_with(::std::default::Default::default))
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
pub struct DeleteTunnelOptions {
  /// @gotags: kong:"help='ID of the tunnel to delete',required=true"
  pub id: ::std::string::String,
}
impl ::std::default::Default for DeleteTunnelOptions {
  fn default() -> Self {
    DeleteTunnelOptions {
      id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref DeleteTunnelOptions_default: DeleteTunnelOptions = DeleteTunnelOptions::default();
}
impl ::pb_jelly::Message for DeleteTunnelOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "DeleteTunnelOptions",
      full_name: "protos.opts.DeleteTunnelOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "id",
          full_name: "protos.opts.DeleteTunnelOptions.id",
          index: 0,
          number: 1,
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
    let mut id_size = 0;
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      let l = ::pb_jelly::Message::compute_size(val);
      id_size += ::pb_jelly::wire_format::serialized_length(1);
      id_size += ::pb_jelly::varint::serialized_length(l as u64);
      id_size += l;
    }
    size += id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "DeleteTunnelOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for DeleteTunnelOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct StopTunnelOptions {
  /// @gotags: kong:"help='ID of the tunnel to stop',required=true"
  pub id: ::std::string::String,
}
impl ::std::default::Default for StopTunnelOptions {
  fn default() -> Self {
    StopTunnelOptions {
      id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref StopTunnelOptions_default: StopTunnelOptions = StopTunnelOptions::default();
}
impl ::pb_jelly::Message for StopTunnelOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "StopTunnelOptions",
      full_name: "protos.opts.StopTunnelOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "id",
          full_name: "protos.opts.StopTunnelOptions.id",
          index: 0,
          number: 1,
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
    let mut id_size = 0;
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      let l = ::pb_jelly::Message::compute_size(val);
      id_size += ::pb_jelly::wire_format::serialized_length(1);
      id_size += ::pb_jelly::varint::serialized_length(l as u64);
      id_size += l;
    }
    size += id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StopTunnelOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for StopTunnelOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct ResumeTunnelOptions {
  /// @gotags: kong:"help='ID of the tunnel to resume',required=true"
  pub id: ::std::string::String,
}
impl ::std::default::Default for ResumeTunnelOptions {
  fn default() -> Self {
    ResumeTunnelOptions {
      id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ResumeTunnelOptions_default: ResumeTunnelOptions = ResumeTunnelOptions::default();
}
impl ::pb_jelly::Message for ResumeTunnelOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ResumeTunnelOptions",
      full_name: "protos.opts.ResumeTunnelOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "id",
          full_name: "protos.opts.ResumeTunnelOptions.id",
          index: 0,
          number: 1,
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
    let mut id_size = 0;
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      let l = ::pb_jelly::Message::compute_size(val);
      id_size += ::pb_jelly::wire_format::serialized_length(1);
      id_size += ::pb_jelly::varint::serialized_length(l as u64);
      id_size += l;
    }
    size += id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ResumeTunnelOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for ResumeTunnelOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

