// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct TunnelOptions {
  /// @gotags: kong:"help='API token to use for tunnel (create here: https://console.streamdal.com/account/security)',required"
  pub api_token: ::std::string::String,
  /// @gotags: kong:"-"
  pub connection_id: ::std::string::String,
  /// @gotags: kong:"help='Tunnel API address',default='dproxy.streamdal.com:443'"
  pub _grpc_address: ::std::string::String,
  /// @gotags: kong:"help='Tunnel API initial connection timeout',default=5"
  pub _grpc_timeout_seconds: u32,
  /// @gotags: kong:"help='Use gRPC insecure mode when talking to Streamdal'"
  pub _grpc_insecure: bool,
  /// Optional for server and CLI
  /// NOTE: CLI-based tunnels will be treated as ephemeral.
  /// @gotags: kong:"help='Name to identify tunnel in Streamdal console. If omitted, your IP address will be used'"
  pub name: ::std::string::String,
  /// ID of the created tunnel; populated by plumber.
  /// @gotags: kong:"-"
  pub _tunnel_id: ::std::string::String,
  /// Set by CreateTunnel() StopTunnel() and ResumeTunnel() methods in Plumber
  /// @gotags: kong:"-"
  pub _active: bool,
  // --------------------------------------------------------------------- //
  //                       SUPPORTED BACKENDS (100-999)                    //
  // --------------------------------------------------------------------- //

  /// @gotags: kong:"cmd,help='Apache Kafka'"
  pub kafka: ::std::option::Option<TunnelGroupKafkaOptions>,
  /// @gotags: kong:"cmd,help='Apache ActiveMQ'"
  pub activemq: ::std::option::Option<TunnelGroupActiveMQOptions>,
  /// @gotags: kong:"cmd,help='AWS Simple Queue System'"
  pub aws_sqs: ::std::option::Option<TunnelGroupAWSSQSOptions>,
  /// @gotags: kong:"cmd,help='AWS Simple Notification System'"
  pub aws_sns: ::std::option::Option<TunnelGroupAWSSNSOptions>,
  /// @gotags: kong:"cmd,help='NATS'"
  pub nats: ::std::option::Option<TunnelGroupNatsOptions>,
  /// @gotags: kong:"cmd,help='NATS Streaming'"
  pub nats_streaming: ::std::option::Option<TunnelGroupNatsStreamingOptions>,
  /// @gotags: kong:"cmd,help='NSQ'"
  pub nsq: ::std::option::Option<TunnelGroupNSQOptions>,
  /// @gotags: kong:"cmd,help='RabbitMQ'"
  pub rabbit: ::std::option::Option<TunnelGroupRabbitOptions>,
  /// @gotags: kong:"cmd,help='MQTT'"
  pub mqtt: ::std::option::Option<TunnelGroupMQTTOptions>,
  /// @gotags: kong:"cmd,help='Azure Service Bus'"
  pub azure_service_bus: ::std::option::Option<TunnelGroupAzureServiceBusOptions>,
  /// @gotags: kong:"cmd,help='Azure Event Hub'"
  pub azure_event_hub: ::std::option::Option<TunnelGroupAzureEventHubOptions>,
  /// @gotags: kong:"cmd,help='Google Cloud Platform Pub/Sub'"
  pub gcp_pubsub: ::std::option::Option<TunnelGroupGCPPubSubOptions>,
  /// @gotags: kong:"cmd,help='KubeMQ Queue'"
  pub kubemq_queue: ::std::option::Option<TunnelGroupKubeMQQueueOptions>,
  /// @gotags: kong:"cmd,help='Redis PubSub'"
  pub redis_pubsub: ::std::option::Option<TunnelGroupRedisPubSubOptions>,
  /// @gotags: kong:"cmd,help='Redis Streams'"
  pub redis_streams: ::std::option::Option<TunnelGroupRedisStreamsOptions>,
  /// @gotags: kong:"cmd,help='Apache Pulsar'"
  pub pulsar: ::std::option::Option<TunnelGroupPulsarOptions>,
  /// @gotags: kong:"cmd,help='RabbitMQ Streams'"
  pub rabbit_streams: ::std::option::Option<TunnelGroupRabbitStreamsOptions>,
  /// @gotags: kong:"cmd,help='NATS JetStream'"
  pub nats_jetstream: ::std::option::Option<TunnelGroupNatsJetstreamOptions>,
  /// @gotags: kong:"cmd,help='AWS Kinesis Streams'"
  pub aws_kinesis: ::std::option::Option<TunnelGroupAWSKinesisOptions>,
  /// @gotags: kong:"cmd,help='Memphis'"
  pub memphis: ::std::option::Option<TunnelGroupMemphisOptions>,
}
impl ::std::default::Default for TunnelOptions {
  fn default() -> Self {
    TunnelOptions {
      api_token: ::std::default::Default::default(),
      connection_id: ::std::default::Default::default(),
      _grpc_address: ::std::default::Default::default(),
      _grpc_timeout_seconds: ::std::default::Default::default(),
      _grpc_insecure: ::std::default::Default::default(),
      name: ::std::default::Default::default(),
      _tunnel_id: ::std::default::Default::default(),
      _active: ::std::default::Default::default(),
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
  pub static ref TunnelOptions_default: TunnelOptions = TunnelOptions::default();
}
impl ::pb_jelly::Message for TunnelOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "TunnelOptions",
      full_name: "protos.opts.TunnelOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "api_token",
          full_name: "protos.opts.TunnelOptions.api_token",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "connection_id",
          full_name: "protos.opts.TunnelOptions.connection_id",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_grpc_address",
          full_name: "protos.opts.TunnelOptions._grpc_address",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_grpc_timeout_seconds",
          full_name: "protos.opts.TunnelOptions._grpc_timeout_seconds",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_grpc_insecure",
          full_name: "protos.opts.TunnelOptions._grpc_insecure",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "name",
          full_name: "protos.opts.TunnelOptions.name",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_tunnel_id",
          full_name: "protos.opts.TunnelOptions._tunnel_id",
          index: 6,
          number: 1000,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_active",
          full_name: "protos.opts.TunnelOptions._active",
          index: 7,
          number: 1001,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "kafka",
          full_name: "protos.opts.TunnelOptions.kafka",
          index: 8,
          number: 100,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "activemq",
          full_name: "protos.opts.TunnelOptions.activemq",
          index: 9,
          number: 101,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_sqs",
          full_name: "protos.opts.TunnelOptions.aws_sqs",
          index: 10,
          number: 102,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_sns",
          full_name: "protos.opts.TunnelOptions.aws_sns",
          index: 11,
          number: 103,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "nats",
          full_name: "protos.opts.TunnelOptions.nats",
          index: 12,
          number: 104,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "nats_streaming",
          full_name: "protos.opts.TunnelOptions.nats_streaming",
          index: 13,
          number: 105,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "nsq",
          full_name: "protos.opts.TunnelOptions.nsq",
          index: 14,
          number: 106,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "rabbit",
          full_name: "protos.opts.TunnelOptions.rabbit",
          index: 15,
          number: 107,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "mqtt",
          full_name: "protos.opts.TunnelOptions.mqtt",
          index: 16,
          number: 108,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "azure_service_bus",
          full_name: "protos.opts.TunnelOptions.azure_service_bus",
          index: 17,
          number: 109,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "azure_event_hub",
          full_name: "protos.opts.TunnelOptions.azure_event_hub",
          index: 18,
          number: 110,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "gcp_pubsub",
          full_name: "protos.opts.TunnelOptions.gcp_pubsub",
          index: 19,
          number: 111,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "kubemq_queue",
          full_name: "protos.opts.TunnelOptions.kubemq_queue",
          index: 20,
          number: 112,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "redis_pubsub",
          full_name: "protos.opts.TunnelOptions.redis_pubsub",
          index: 21,
          number: 113,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "redis_streams",
          full_name: "protos.opts.TunnelOptions.redis_streams",
          index: 22,
          number: 114,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "pulsar",
          full_name: "protos.opts.TunnelOptions.pulsar",
          index: 23,
          number: 115,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "rabbit_streams",
          full_name: "protos.opts.TunnelOptions.rabbit_streams",
          index: 24,
          number: 116,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "nats_jetstream",
          full_name: "protos.opts.TunnelOptions.nats_jetstream",
          index: 25,
          number: 117,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_kinesis",
          full_name: "protos.opts.TunnelOptions.aws_kinesis",
          index: 26,
          number: 118,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "memphis",
          full_name: "protos.opts.TunnelOptions.memphis",
          index: 27,
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
    let mut api_token_size = 0;
    if self.api_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.api_token;
      let l = ::pb_jelly::Message::compute_size(val);
      api_token_size += ::pb_jelly::wire_format::serialized_length(1);
      api_token_size += ::pb_jelly::varint::serialized_length(l as u64);
      api_token_size += l;
    }
    size += api_token_size;
    let mut connection_id_size = 0;
    if self.connection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_id;
      let l = ::pb_jelly::Message::compute_size(val);
      connection_id_size += ::pb_jelly::wire_format::serialized_length(2);
      connection_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      connection_id_size += l;
    }
    size += connection_id_size;
    let mut _grpc_address_size = 0;
    if self._grpc_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._grpc_address;
      let l = ::pb_jelly::Message::compute_size(val);
      _grpc_address_size += ::pb_jelly::wire_format::serialized_length(3);
      _grpc_address_size += ::pb_jelly::varint::serialized_length(l as u64);
      _grpc_address_size += l;
    }
    size += _grpc_address_size;
    let mut _grpc_timeout_seconds_size = 0;
    if self._grpc_timeout_seconds != <u32 as ::std::default::Default>::default() {
      let val = &self._grpc_timeout_seconds;
      let l = ::pb_jelly::Message::compute_size(val);
      _grpc_timeout_seconds_size += ::pb_jelly::wire_format::serialized_length(4);
      _grpc_timeout_seconds_size += l;
    }
    size += _grpc_timeout_seconds_size;
    let mut _grpc_insecure_size = 0;
    if self._grpc_insecure != <bool as ::std::default::Default>::default() {
      let val = &self._grpc_insecure;
      let l = ::pb_jelly::Message::compute_size(val);
      _grpc_insecure_size += ::pb_jelly::wire_format::serialized_length(5);
      _grpc_insecure_size += l;
    }
    size += _grpc_insecure_size;
    let mut name_size = 0;
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
      let l = ::pb_jelly::Message::compute_size(val);
      name_size += ::pb_jelly::wire_format::serialized_length(6);
      name_size += ::pb_jelly::varint::serialized_length(l as u64);
      name_size += l;
    }
    size += name_size;
    let mut _tunnel_id_size = 0;
    if self._tunnel_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._tunnel_id;
      let l = ::pb_jelly::Message::compute_size(val);
      _tunnel_id_size += ::pb_jelly::wire_format::serialized_length(1000);
      _tunnel_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      _tunnel_id_size += l;
    }
    size += _tunnel_id_size;
    let mut _active_size = 0;
    if self._active != <bool as ::std::default::Default>::default() {
      let val = &self._active;
      let l = ::pb_jelly::Message::compute_size(val);
      _active_size += ::pb_jelly::wire_format::serialized_length(1001);
      _active_size += l;
    }
    size += _active_size;
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
    if self.api_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.api_token;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.connection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._grpc_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._grpc_address;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._grpc_timeout_seconds != <u32 as ::std::default::Default>::default() {
      let val = &self._grpc_timeout_seconds;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._grpc_insecure != <bool as ::std::default::Default>::default() {
      let val = &self._grpc_insecure;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._tunnel_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._tunnel_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._active != <bool as ::std::default::Default>::default() {
      let val = &self._active;
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
    if self.api_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.api_token;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.connection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_id;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self._grpc_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._grpc_address;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self._grpc_timeout_seconds != <u32 as ::std::default::Default>::default() {
      let val = &self._grpc_timeout_seconds;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self._grpc_insecure != <bool as ::std::default::Default>::default() {
      let val = &self._grpc_insecure;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
    if self._tunnel_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._tunnel_id;
      ::pb_jelly::wire_format::write(1000, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self._active != <bool as ::std::default::Default>::default() {
      let val = &self._active;
      ::pb_jelly::wire_format::write(1001, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.api_token = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.connection_id = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._grpc_address = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "TunnelOptions", 4)?;
          let mut val: u32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self._grpc_timeout_seconds = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "TunnelOptions", 5)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self._grpc_insecure = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 6)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.name = val;
        }
        1000 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 1000)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._tunnel_id = val;
        }
        1001 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "TunnelOptions", 1001)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self._active = val;
        }
        100 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 100)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: TunnelGroupKafkaOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.kafka = Some(val);
        }
        101 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 101)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: TunnelGroupActiveMQOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.activemq = Some(val);
        }
        102 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 102)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: TunnelGroupAWSSQSOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.aws_sqs = Some(val);
        }
        103 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 103)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: TunnelGroupAWSSNSOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.aws_sns = Some(val);
        }
        104 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 104)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: TunnelGroupNatsOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.nats = Some(val);
        }
        105 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 105)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: TunnelGroupNatsStreamingOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.nats_streaming = Some(val);
        }
        106 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 106)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: TunnelGroupNSQOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.nsq = Some(val);
        }
        107 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 107)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: TunnelGroupRabbitOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.rabbit = Some(val);
        }
        108 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 108)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: TunnelGroupMQTTOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.mqtt = Some(val);
        }
        109 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 109)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: TunnelGroupAzureServiceBusOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.azure_service_bus = Some(val);
        }
        110 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 110)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: TunnelGroupAzureEventHubOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.azure_event_hub = Some(val);
        }
        111 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 111)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: TunnelGroupGCPPubSubOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.gcp_pubsub = Some(val);
        }
        112 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 112)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: TunnelGroupKubeMQQueueOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.kubemq_queue = Some(val);
        }
        113 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 113)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: TunnelGroupRedisPubSubOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.redis_pubsub = Some(val);
        }
        114 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 114)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: TunnelGroupRedisStreamsOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.redis_streams = Some(val);
        }
        115 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 115)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: TunnelGroupPulsarOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.pulsar = Some(val);
        }
        116 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 116)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: TunnelGroupRabbitStreamsOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.rabbit_streams = Some(val);
        }
        117 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 117)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: TunnelGroupNatsJetstreamOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.nats_jetstream = Some(val);
        }
        118 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 118)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: TunnelGroupAWSKinesisOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.aws_kinesis = Some(val);
        }
        119 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelOptions", 119)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: TunnelGroupMemphisOptions = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for TunnelOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "api_token" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.api_token)
      }
      "connection_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.connection_id)
      }
      "_grpc_address" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._grpc_address)
      }
      "_grpc_timeout_seconds" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._grpc_timeout_seconds)
      }
      "_grpc_insecure" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._grpc_insecure)
      }
      "name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.name)
      }
      "_tunnel_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._tunnel_id)
      }
      "_active" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._active)
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
pub struct TunnelGroupKafkaOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_kafka::KafkaConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_kafka::KafkaWriteArgs>,
}
impl ::std::default::Default for TunnelGroupKafkaOptions {
  fn default() -> Self {
    TunnelGroupKafkaOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref TunnelGroupKafkaOptions_default: TunnelGroupKafkaOptions = TunnelGroupKafkaOptions::default();
}
impl ::pb_jelly::Message for TunnelGroupKafkaOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "TunnelGroupKafkaOptions",
      full_name: "protos.opts.TunnelGroupKafkaOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.TunnelGroupKafkaOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.TunnelGroupKafkaOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupKafkaOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_kafka::KafkaConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupKafkaOptions", 2)?;
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
impl ::pb_jelly::Reflection for TunnelGroupKafkaOptions {
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
pub struct TunnelGroupActiveMQOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_activemq::ActiveMQConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_activemq::ActiveMQWriteArgs>,
}
impl ::std::default::Default for TunnelGroupActiveMQOptions {
  fn default() -> Self {
    TunnelGroupActiveMQOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref TunnelGroupActiveMQOptions_default: TunnelGroupActiveMQOptions = TunnelGroupActiveMQOptions::default();
}
impl ::pb_jelly::Message for TunnelGroupActiveMQOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "TunnelGroupActiveMQOptions",
      full_name: "protos.opts.TunnelGroupActiveMQOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.TunnelGroupActiveMQOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.TunnelGroupActiveMQOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupActiveMQOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_activemq::ActiveMQConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupActiveMQOptions", 2)?;
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
impl ::pb_jelly::Reflection for TunnelGroupActiveMQOptions {
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
pub struct TunnelGroupAWSSQSOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_aws_sqs::AWSSQSConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_aws_sqs::AWSSQSWriteArgs>,
}
impl ::std::default::Default for TunnelGroupAWSSQSOptions {
  fn default() -> Self {
    TunnelGroupAWSSQSOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref TunnelGroupAWSSQSOptions_default: TunnelGroupAWSSQSOptions = TunnelGroupAWSSQSOptions::default();
}
impl ::pb_jelly::Message for TunnelGroupAWSSQSOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "TunnelGroupAWSSQSOptions",
      full_name: "protos.opts.TunnelGroupAWSSQSOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.TunnelGroupAWSSQSOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.TunnelGroupAWSSQSOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupAWSSQSOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_aws_sqs::AWSSQSConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupAWSSQSOptions", 2)?;
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
impl ::pb_jelly::Reflection for TunnelGroupAWSSQSOptions {
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
pub struct TunnelGroupAWSSNSOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_aws_sns::AWSSNSConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_aws_sns::AWSSNSWriteArgs>,
}
impl ::std::default::Default for TunnelGroupAWSSNSOptions {
  fn default() -> Self {
    TunnelGroupAWSSNSOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref TunnelGroupAWSSNSOptions_default: TunnelGroupAWSSNSOptions = TunnelGroupAWSSNSOptions::default();
}
impl ::pb_jelly::Message for TunnelGroupAWSSNSOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "TunnelGroupAWSSNSOptions",
      full_name: "protos.opts.TunnelGroupAWSSNSOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.TunnelGroupAWSSNSOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.TunnelGroupAWSSNSOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupAWSSNSOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_aws_sns::AWSSNSConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupAWSSNSOptions", 2)?;
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
impl ::pb_jelly::Reflection for TunnelGroupAWSSNSOptions {
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
pub struct TunnelGroupNatsOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_nats::NatsConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_nats::NatsWriteArgs>,
}
impl ::std::default::Default for TunnelGroupNatsOptions {
  fn default() -> Self {
    TunnelGroupNatsOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref TunnelGroupNatsOptions_default: TunnelGroupNatsOptions = TunnelGroupNatsOptions::default();
}
impl ::pb_jelly::Message for TunnelGroupNatsOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "TunnelGroupNatsOptions",
      full_name: "protos.opts.TunnelGroupNatsOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.TunnelGroupNatsOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.TunnelGroupNatsOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupNatsOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats::NatsConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupNatsOptions", 2)?;
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
impl ::pb_jelly::Reflection for TunnelGroupNatsOptions {
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
pub struct TunnelGroupNatsJetstreamOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_nats_jetstream::NatsJetstreamConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_nats_jetstream::NatsJetstreamWriteArgs>,
}
impl ::std::default::Default for TunnelGroupNatsJetstreamOptions {
  fn default() -> Self {
    TunnelGroupNatsJetstreamOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref TunnelGroupNatsJetstreamOptions_default: TunnelGroupNatsJetstreamOptions = TunnelGroupNatsJetstreamOptions::default();
}
impl ::pb_jelly::Message for TunnelGroupNatsJetstreamOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "TunnelGroupNatsJetstreamOptions",
      full_name: "protos.opts.TunnelGroupNatsJetstreamOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.TunnelGroupNatsJetstreamOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.TunnelGroupNatsJetstreamOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupNatsJetstreamOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats_jetstream::NatsJetstreamConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupNatsJetstreamOptions", 2)?;
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
impl ::pb_jelly::Reflection for TunnelGroupNatsJetstreamOptions {
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
pub struct TunnelGroupNatsStreamingOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_nats_streaming::NatsStreamingConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_nats_streaming::NatsStreamingWriteArgs>,
}
impl ::std::default::Default for TunnelGroupNatsStreamingOptions {
  fn default() -> Self {
    TunnelGroupNatsStreamingOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref TunnelGroupNatsStreamingOptions_default: TunnelGroupNatsStreamingOptions = TunnelGroupNatsStreamingOptions::default();
}
impl ::pb_jelly::Message for TunnelGroupNatsStreamingOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "TunnelGroupNatsStreamingOptions",
      full_name: "protos.opts.TunnelGroupNatsStreamingOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.TunnelGroupNatsStreamingOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.TunnelGroupNatsStreamingOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupNatsStreamingOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats_streaming::NatsStreamingConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupNatsStreamingOptions", 2)?;
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
impl ::pb_jelly::Reflection for TunnelGroupNatsStreamingOptions {
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
pub struct TunnelGroupNSQOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_nsq::NSQConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_nsq::NSQWriteArgs>,
}
impl ::std::default::Default for TunnelGroupNSQOptions {
  fn default() -> Self {
    TunnelGroupNSQOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref TunnelGroupNSQOptions_default: TunnelGroupNSQOptions = TunnelGroupNSQOptions::default();
}
impl ::pb_jelly::Message for TunnelGroupNSQOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "TunnelGroupNSQOptions",
      full_name: "protos.opts.TunnelGroupNSQOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.TunnelGroupNSQOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.TunnelGroupNSQOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupNSQOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nsq::NSQConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupNSQOptions", 2)?;
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
impl ::pb_jelly::Reflection for TunnelGroupNSQOptions {
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
pub struct TunnelGroupRabbitOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_rabbit::RabbitConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_rabbit::RabbitWriteArgs>,
}
impl ::std::default::Default for TunnelGroupRabbitOptions {
  fn default() -> Self {
    TunnelGroupRabbitOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref TunnelGroupRabbitOptions_default: TunnelGroupRabbitOptions = TunnelGroupRabbitOptions::default();
}
impl ::pb_jelly::Message for TunnelGroupRabbitOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "TunnelGroupRabbitOptions",
      full_name: "protos.opts.TunnelGroupRabbitOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.TunnelGroupRabbitOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.TunnelGroupRabbitOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupRabbitOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_rabbit::RabbitConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupRabbitOptions", 2)?;
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
impl ::pb_jelly::Reflection for TunnelGroupRabbitOptions {
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
pub struct TunnelGroupRabbitStreamsOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_rabbit_streams::RabbitStreamsConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_rabbit_streams::RabbitStreamsWriteArgs>,
}
impl ::std::default::Default for TunnelGroupRabbitStreamsOptions {
  fn default() -> Self {
    TunnelGroupRabbitStreamsOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref TunnelGroupRabbitStreamsOptions_default: TunnelGroupRabbitStreamsOptions = TunnelGroupRabbitStreamsOptions::default();
}
impl ::pb_jelly::Message for TunnelGroupRabbitStreamsOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "TunnelGroupRabbitStreamsOptions",
      full_name: "protos.opts.TunnelGroupRabbitStreamsOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.TunnelGroupRabbitStreamsOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.TunnelGroupRabbitStreamsOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupRabbitStreamsOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_rabbit_streams::RabbitStreamsConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupRabbitStreamsOptions", 2)?;
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
impl ::pb_jelly::Reflection for TunnelGroupRabbitStreamsOptions {
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
pub struct TunnelGroupRedisPubSubOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_redis_pubsub::RedisPubSubConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_redis_pubsub::RedisPubSubWriteArgs>,
}
impl ::std::default::Default for TunnelGroupRedisPubSubOptions {
  fn default() -> Self {
    TunnelGroupRedisPubSubOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref TunnelGroupRedisPubSubOptions_default: TunnelGroupRedisPubSubOptions = TunnelGroupRedisPubSubOptions::default();
}
impl ::pb_jelly::Message for TunnelGroupRedisPubSubOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "TunnelGroupRedisPubSubOptions",
      full_name: "protos.opts.TunnelGroupRedisPubSubOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.TunnelGroupRedisPubSubOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.TunnelGroupRedisPubSubOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupRedisPubSubOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_redis_pubsub::RedisPubSubConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupRedisPubSubOptions", 2)?;
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
impl ::pb_jelly::Reflection for TunnelGroupRedisPubSubOptions {
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
pub struct TunnelGroupRedisStreamsOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_redis_streams::RedisStreamsConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_redis_streams::RedisStreamsWriteArgs>,
}
impl ::std::default::Default for TunnelGroupRedisStreamsOptions {
  fn default() -> Self {
    TunnelGroupRedisStreamsOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref TunnelGroupRedisStreamsOptions_default: TunnelGroupRedisStreamsOptions = TunnelGroupRedisStreamsOptions::default();
}
impl ::pb_jelly::Message for TunnelGroupRedisStreamsOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "TunnelGroupRedisStreamsOptions",
      full_name: "protos.opts.TunnelGroupRedisStreamsOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.TunnelGroupRedisStreamsOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.TunnelGroupRedisStreamsOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupRedisStreamsOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_redis_streams::RedisStreamsConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupRedisStreamsOptions", 2)?;
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
impl ::pb_jelly::Reflection for TunnelGroupRedisStreamsOptions {
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
pub struct TunnelGroupAzureEventHubOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_azure_event_hub::AzureEventHubConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_azure_event_hub::AzureEventHubWriteArgs>,
}
impl ::std::default::Default for TunnelGroupAzureEventHubOptions {
  fn default() -> Self {
    TunnelGroupAzureEventHubOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref TunnelGroupAzureEventHubOptions_default: TunnelGroupAzureEventHubOptions = TunnelGroupAzureEventHubOptions::default();
}
impl ::pb_jelly::Message for TunnelGroupAzureEventHubOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "TunnelGroupAzureEventHubOptions",
      full_name: "protos.opts.TunnelGroupAzureEventHubOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.TunnelGroupAzureEventHubOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.TunnelGroupAzureEventHubOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupAzureEventHubOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_azure_event_hub::AzureEventHubConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupAzureEventHubOptions", 2)?;
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
impl ::pb_jelly::Reflection for TunnelGroupAzureEventHubOptions {
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
pub struct TunnelGroupAzureServiceBusOptions {
  /// @gotags: kong:"embed"{
  pub _conn: ::std::option::Option<::proto_args::ps_args_azure_service_bus::AzureServiceBusConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_azure_service_bus::AzureServiceBusWriteArgs>,
}
impl ::std::default::Default for TunnelGroupAzureServiceBusOptions {
  fn default() -> Self {
    TunnelGroupAzureServiceBusOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref TunnelGroupAzureServiceBusOptions_default: TunnelGroupAzureServiceBusOptions = TunnelGroupAzureServiceBusOptions::default();
}
impl ::pb_jelly::Message for TunnelGroupAzureServiceBusOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "TunnelGroupAzureServiceBusOptions",
      full_name: "protos.opts.TunnelGroupAzureServiceBusOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.TunnelGroupAzureServiceBusOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.TunnelGroupAzureServiceBusOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupAzureServiceBusOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_azure_service_bus::AzureServiceBusConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupAzureServiceBusOptions", 2)?;
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
impl ::pb_jelly::Reflection for TunnelGroupAzureServiceBusOptions {
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
pub struct TunnelGroupMQTTOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_mqtt::MQTTConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_mqtt::MQTTWriteArgs>,
}
impl ::std::default::Default for TunnelGroupMQTTOptions {
  fn default() -> Self {
    TunnelGroupMQTTOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref TunnelGroupMQTTOptions_default: TunnelGroupMQTTOptions = TunnelGroupMQTTOptions::default();
}
impl ::pb_jelly::Message for TunnelGroupMQTTOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "TunnelGroupMQTTOptions",
      full_name: "protos.opts.TunnelGroupMQTTOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.TunnelGroupMQTTOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.TunnelGroupMQTTOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupMQTTOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_mqtt::MQTTConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupMQTTOptions", 2)?;
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
impl ::pb_jelly::Reflection for TunnelGroupMQTTOptions {
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
pub struct TunnelGroupGCPPubSubOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_gcp_pubsub::GCPPubSubConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_gcp_pubsub::GCPPubSubWriteArgs>,
}
impl ::std::default::Default for TunnelGroupGCPPubSubOptions {
  fn default() -> Self {
    TunnelGroupGCPPubSubOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref TunnelGroupGCPPubSubOptions_default: TunnelGroupGCPPubSubOptions = TunnelGroupGCPPubSubOptions::default();
}
impl ::pb_jelly::Message for TunnelGroupGCPPubSubOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "TunnelGroupGCPPubSubOptions",
      full_name: "protos.opts.TunnelGroupGCPPubSubOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.TunnelGroupGCPPubSubOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.TunnelGroupGCPPubSubOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupGCPPubSubOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_gcp_pubsub::GCPPubSubConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupGCPPubSubOptions", 2)?;
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
impl ::pb_jelly::Reflection for TunnelGroupGCPPubSubOptions {
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
pub struct TunnelGroupKubeMQQueueOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_kubemq_queue::KubeMQQueueConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_kubemq_queue::KubeMQQueueWriteArgs>,
}
impl ::std::default::Default for TunnelGroupKubeMQQueueOptions {
  fn default() -> Self {
    TunnelGroupKubeMQQueueOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref TunnelGroupKubeMQQueueOptions_default: TunnelGroupKubeMQQueueOptions = TunnelGroupKubeMQQueueOptions::default();
}
impl ::pb_jelly::Message for TunnelGroupKubeMQQueueOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "TunnelGroupKubeMQQueueOptions",
      full_name: "protos.opts.TunnelGroupKubeMQQueueOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.TunnelGroupKubeMQQueueOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.TunnelGroupKubeMQQueueOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupKubeMQQueueOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_kubemq_queue::KubeMQQueueConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupKubeMQQueueOptions", 2)?;
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
impl ::pb_jelly::Reflection for TunnelGroupKubeMQQueueOptions {
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
pub struct TunnelGroupPulsarOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_pulsar::PulsarConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_pulsar::PulsarWriteArgs>,
}
impl ::std::default::Default for TunnelGroupPulsarOptions {
  fn default() -> Self {
    TunnelGroupPulsarOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref TunnelGroupPulsarOptions_default: TunnelGroupPulsarOptions = TunnelGroupPulsarOptions::default();
}
impl ::pb_jelly::Message for TunnelGroupPulsarOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "TunnelGroupPulsarOptions",
      full_name: "protos.opts.TunnelGroupPulsarOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.TunnelGroupPulsarOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.TunnelGroupPulsarOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupPulsarOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_pulsar::PulsarConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupPulsarOptions", 2)?;
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
impl ::pb_jelly::Reflection for TunnelGroupPulsarOptions {
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
pub struct TunnelGroupAWSKinesisOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_aws_kinesis::AWSKinesisConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_aws_kinesis::AWSKinesisWriteArgs>,
}
impl ::std::default::Default for TunnelGroupAWSKinesisOptions {
  fn default() -> Self {
    TunnelGroupAWSKinesisOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref TunnelGroupAWSKinesisOptions_default: TunnelGroupAWSKinesisOptions = TunnelGroupAWSKinesisOptions::default();
}
impl ::pb_jelly::Message for TunnelGroupAWSKinesisOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "TunnelGroupAWSKinesisOptions",
      full_name: "protos.opts.TunnelGroupAWSKinesisOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.TunnelGroupAWSKinesisOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.TunnelGroupAWSKinesisOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupAWSKinesisOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_aws_kinesis::AWSKinesisConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupAWSKinesisOptions", 2)?;
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
impl ::pb_jelly::Reflection for TunnelGroupAWSKinesisOptions {
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
pub struct TunnelGroupMemphisOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_memphis::MemphisConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_memphis::MemphisWriteArgs>,
}
impl ::std::default::Default for TunnelGroupMemphisOptions {
  fn default() -> Self {
    TunnelGroupMemphisOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref TunnelGroupMemphisOptions_default: TunnelGroupMemphisOptions = TunnelGroupMemphisOptions::default();
}
impl ::pb_jelly::Message for TunnelGroupMemphisOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "TunnelGroupMemphisOptions",
      full_name: "protos.opts.TunnelGroupMemphisOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.TunnelGroupMemphisOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.TunnelGroupMemphisOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupMemphisOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_memphis::MemphisConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TunnelGroupMemphisOptions", 2)?;
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
impl ::pb_jelly::Reflection for TunnelGroupMemphisOptions {
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

