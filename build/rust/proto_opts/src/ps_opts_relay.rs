// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RelayCLIOptions {
  /// @gotags: kong:"help='What address to bind the built-in HTTP server to',env='PLUMBER_RELAY_HTTP_LISTEN_ADDRESS',default='localhost:9191'"
  pub http_listen_address: ::std::string::String,
}
impl ::std::default::Default for RelayCLIOptions {
  fn default() -> Self {
    RelayCLIOptions {
      http_listen_address: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RelayCLIOptions_default: RelayCLIOptions = RelayCLIOptions::default();
}
impl ::pb_jelly::Message for RelayCLIOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RelayCLIOptions",
      full_name: "protos.opts.RelayCLIOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "http_listen_address",
          full_name: "protos.opts.RelayCLIOptions.http_listen_address",
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
    let mut http_listen_address_size = 0;
    if self.http_listen_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.http_listen_address;
      let l = ::pb_jelly::Message::compute_size(val);
      http_listen_address_size += ::pb_jelly::wire_format::serialized_length(1);
      http_listen_address_size += ::pb_jelly::varint::serialized_length(l as u64);
      http_listen_address_size += l;
    }
    size += http_listen_address_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.http_listen_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.http_listen_address;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.http_listen_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.http_listen_address;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayCLIOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.http_listen_address = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for RelayCLIOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "http_listen_address" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.http_listen_address)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

/// Relay is the structure that backends accept for facilitating a relay.
/// NOTE: _conn is only used by the CLI - desktop does not need to set it.
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RelayOptions {
  /// @gotags: kong:"help='Secret collection token',env='PLUMBER_RELAY_TOKEN',name=token,required"
  pub collection_token: ::std::string::String,
  /// @gotags: kong:"help='How many messages to send in a single batch',env='PLUMBER_RELAY_BATCH_SIZE',default=1000"
  pub batch_size: i32,
  /// @gotags: kong:"help='How many times plumber will try re-sending a batch',env='PLUMBER_RELAY_BATCH_MAX_RETRY',default=3"
  pub batch_max_retry: i32,
  /// Required for desktop; ignored in CLI.
  /// @gotags: kong:"-"
  pub connection_id: ::std::string::String,
  /// @gotags: kong:"help='How many workers to launch per relay',env='PLUMBER_RELAY_NUM_WORKERS',default=10"
  pub num_workers: i32,
  /// @gotags: kong:"group=stats,help='Display periodic read stats'"
  pub stats_enable: bool,
  /// @gotags: kong:"group=stats,help='How often to print stats',default=5"
  pub stats_report_interval_sec: i32,
  /// @gotags: kong:"help='Consumed messages are intended to be dead-lettered',env='PLUMBER_RELAY_DEAD_LETTER'"
  pub dead_letter: bool,
  // --------------------------------------------------------------------- //
  //                          PRIVATE FIELDS (1000+)                       //
  // --------------------------------------------------------------------- //

  /// @gotags: kong:"help='Alternative collector to relay events to',name='grpc-address',env='PLUMBER_RELAY_GRPC_ADDRESS',default='grpc-collector.streamdal.com:9000'"
  pub _streamdal_grpc_address: ::std::string::String,
  /// @gotags: kong:"help='Whether to use TLS with collector',name=grpc-disable-tls,env='PLUMBER_RELAY_GRPC_DISABLE_TLS',default=false"
  pub _streamdal_grpc_disable_tls: bool,
  /// @gotags: kong:"help='How long to wait before giving up talking to the gRPC collector',name='grpc-timeout-seconds',env='PLUMBER_RELAY_GRPC_TIMEOUT',default=5"
  pub _streamdal_grpc_timeout_seconds: i32,
  /// ID of the created relay entry; populated by plumber.
  /// @gotags: kong:"-"
  pub _relay_id: ::std::string::String,
  /// @gotags: kong:"embed"
  pub _cli_options: ::std::option::Option<RelayCLIOptions>,
  /// Populated by plumber server during GetRelay* methods
  /// @gotags: kong:"-"
  pub _active: bool,
  // --------------------------------------------------------------------- //
  //                       SUPPORTED BACKENDS (100-999)                    //
  // --------------------------------------------------------------------- //

  /// @gotags: kong:"cmd,help='Apache Kafka'"
  pub kafka: ::std::option::Option<RelayGroupKafkaOptions>,
  /// @gotags: kong:"cmd,help='AWS Simple Queue System'"
  pub aws_sqs: ::std::option::Option<RelayGroupAWSSQSOptions>,
  /// @gotags: kong:"cmd,help='MongoDB (CDC)'"
  pub mongo: ::std::option::Option<RelayGroupMongoOptions>,
  /// @gotags: kong:"cmd,help='NSQ'"
  pub nsq: ::std::option::Option<RelayGroupNSQOptions>,
  /// @gotags: kong:"cmd,help='MQTT'"
  pub rabbit: ::std::option::Option<RelayGroupRabbitOptions>,
  /// @gotags: kong:"cmd,help='MQTT'"
  pub mqtt: ::std::option::Option<RelayGroupMQTTOptions>,
  /// @gotags: kong:"cmd,help='Azure Service Bus'"
  pub azure_service_bus: ::std::option::Option<RelayGroupAzureServiceBusOptions>,
  /// @gotags: kong:"cmd,help='Google Cloud Platform Pub/Sub'"
  pub gcp_pubsub: ::std::option::Option<RelayGroupGCPPubSubOptions>,
  /// @gotags: kong:"cmd,help='KubeMQ Queue'"
  pub kubemq_queue: ::std::option::Option<RelayGroupKubeMQQueueOptions>,
  /// @gotags: kong:"cmd,help='Redis PubSub'"
  pub redis_pubsub: ::std::option::Option<RelayGroupRedisPubSubOptions>,
  /// @gotags: kong:"cmd,help='Redis Streams'"
  pub redis_streams: ::std::option::Option<RelayGroupRedisStreamsOptions>,
  /// @gotags: kong:"cmd,help='PostgreSQL (CDC)'"
  pub postgres: ::std::option::Option<RelayGroupPostgresOptions>,
  /// @gotags: kong:"cmd,help='NATS'"
  pub nats: ::std::option::Option<RelayGroupNatsOptions>,
  /// @gotags: kong:"cmd,help='NATS Streaming'"
  pub nats_streaming: ::std::option::Option<RelayGroupNatsStreamingOptions>,
  /// @gotags: kong:"cmd,help='NATS JetStream'"
  pub nats_jetstream: ::std::option::Option<RelayGroupNatsJetStreamOptions>,
}
impl ::std::default::Default for RelayOptions {
  fn default() -> Self {
    RelayOptions {
      collection_token: ::std::default::Default::default(),
      batch_size: ::std::default::Default::default(),
      batch_max_retry: ::std::default::Default::default(),
      connection_id: ::std::default::Default::default(),
      num_workers: ::std::default::Default::default(),
      stats_enable: ::std::default::Default::default(),
      stats_report_interval_sec: ::std::default::Default::default(),
      dead_letter: ::std::default::Default::default(),
      _streamdal_grpc_address: ::std::default::Default::default(),
      _streamdal_grpc_disable_tls: ::std::default::Default::default(),
      _streamdal_grpc_timeout_seconds: ::std::default::Default::default(),
      _relay_id: ::std::default::Default::default(),
      _cli_options: ::std::default::Default::default(),
      _active: ::std::default::Default::default(),
      kafka: ::std::default::Default::default(),
      aws_sqs: ::std::default::Default::default(),
      mongo: ::std::default::Default::default(),
      nsq: ::std::default::Default::default(),
      rabbit: ::std::default::Default::default(),
      mqtt: ::std::default::Default::default(),
      azure_service_bus: ::std::default::Default::default(),
      gcp_pubsub: ::std::default::Default::default(),
      kubemq_queue: ::std::default::Default::default(),
      redis_pubsub: ::std::default::Default::default(),
      redis_streams: ::std::default::Default::default(),
      postgres: ::std::default::Default::default(),
      nats: ::std::default::Default::default(),
      nats_streaming: ::std::default::Default::default(),
      nats_jetstream: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RelayOptions_default: RelayOptions = RelayOptions::default();
}
impl ::pb_jelly::Message for RelayOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RelayOptions",
      full_name: "protos.opts.RelayOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "collection_token",
          full_name: "protos.opts.RelayOptions.collection_token",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "batch_size",
          full_name: "protos.opts.RelayOptions.batch_size",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "batch_max_retry",
          full_name: "protos.opts.RelayOptions.batch_max_retry",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "connection_id",
          full_name: "protos.opts.RelayOptions.connection_id",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "num_workers",
          full_name: "protos.opts.RelayOptions.num_workers",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "stats_enable",
          full_name: "protos.opts.RelayOptions.stats_enable",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "stats_report_interval_sec",
          full_name: "protos.opts.RelayOptions.stats_report_interval_sec",
          index: 6,
          number: 7,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "dead_letter",
          full_name: "protos.opts.RelayOptions.dead_letter",
          index: 7,
          number: 8,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_streamdal_grpc_address",
          full_name: "protos.opts.RelayOptions._streamdal_grpc_address",
          index: 8,
          number: 1000,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_streamdal_grpc_disable_tls",
          full_name: "protos.opts.RelayOptions._streamdal_grpc_disable_tls",
          index: 9,
          number: 1001,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_streamdal_grpc_timeout_seconds",
          full_name: "protos.opts.RelayOptions._streamdal_grpc_timeout_seconds",
          index: 10,
          number: 1002,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_relay_id",
          full_name: "protos.opts.RelayOptions._relay_id",
          index: 11,
          number: 1003,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_cli_options",
          full_name: "protos.opts.RelayOptions._cli_options",
          index: 12,
          number: 1004,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_active",
          full_name: "protos.opts.RelayOptions._active",
          index: 13,
          number: 1005,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "kafka",
          full_name: "protos.opts.RelayOptions.kafka",
          index: 14,
          number: 100,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_sqs",
          full_name: "protos.opts.RelayOptions.aws_sqs",
          index: 15,
          number: 101,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "mongo",
          full_name: "protos.opts.RelayOptions.mongo",
          index: 16,
          number: 102,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "nsq",
          full_name: "protos.opts.RelayOptions.nsq",
          index: 17,
          number: 103,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "rabbit",
          full_name: "protos.opts.RelayOptions.rabbit",
          index: 18,
          number: 104,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "mqtt",
          full_name: "protos.opts.RelayOptions.mqtt",
          index: 19,
          number: 105,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "azure_service_bus",
          full_name: "protos.opts.RelayOptions.azure_service_bus",
          index: 20,
          number: 106,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "gcp_pubsub",
          full_name: "protos.opts.RelayOptions.gcp_pubsub",
          index: 21,
          number: 107,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "kubemq_queue",
          full_name: "protos.opts.RelayOptions.kubemq_queue",
          index: 22,
          number: 108,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "redis_pubsub",
          full_name: "protos.opts.RelayOptions.redis_pubsub",
          index: 23,
          number: 109,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "redis_streams",
          full_name: "protos.opts.RelayOptions.redis_streams",
          index: 24,
          number: 111,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "postgres",
          full_name: "protos.opts.RelayOptions.postgres",
          index: 25,
          number: 112,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "nats",
          full_name: "protos.opts.RelayOptions.nats",
          index: 26,
          number: 113,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "nats_streaming",
          full_name: "protos.opts.RelayOptions.nats_streaming",
          index: 27,
          number: 114,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "nats_jetstream",
          full_name: "protos.opts.RelayOptions.nats_jetstream",
          index: 28,
          number: 115,
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
    let mut collection_token_size = 0;
    if self.collection_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.collection_token;
      let l = ::pb_jelly::Message::compute_size(val);
      collection_token_size += ::pb_jelly::wire_format::serialized_length(1);
      collection_token_size += ::pb_jelly::varint::serialized_length(l as u64);
      collection_token_size += l;
    }
    size += collection_token_size;
    let mut batch_size_size = 0;
    if self.batch_size != <i32 as ::std::default::Default>::default() {
      let val = &self.batch_size;
      let l = ::pb_jelly::Message::compute_size(val);
      batch_size_size += ::pb_jelly::wire_format::serialized_length(2);
      batch_size_size += l;
    }
    size += batch_size_size;
    let mut batch_max_retry_size = 0;
    if self.batch_max_retry != <i32 as ::std::default::Default>::default() {
      let val = &self.batch_max_retry;
      let l = ::pb_jelly::Message::compute_size(val);
      batch_max_retry_size += ::pb_jelly::wire_format::serialized_length(3);
      batch_max_retry_size += l;
    }
    size += batch_max_retry_size;
    let mut connection_id_size = 0;
    if self.connection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_id;
      let l = ::pb_jelly::Message::compute_size(val);
      connection_id_size += ::pb_jelly::wire_format::serialized_length(4);
      connection_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      connection_id_size += l;
    }
    size += connection_id_size;
    let mut num_workers_size = 0;
    if self.num_workers != <i32 as ::std::default::Default>::default() {
      let val = &self.num_workers;
      let l = ::pb_jelly::Message::compute_size(val);
      num_workers_size += ::pb_jelly::wire_format::serialized_length(5);
      num_workers_size += l;
    }
    size += num_workers_size;
    let mut stats_enable_size = 0;
    if self.stats_enable != <bool as ::std::default::Default>::default() {
      let val = &self.stats_enable;
      let l = ::pb_jelly::Message::compute_size(val);
      stats_enable_size += ::pb_jelly::wire_format::serialized_length(6);
      stats_enable_size += l;
    }
    size += stats_enable_size;
    let mut stats_report_interval_sec_size = 0;
    if self.stats_report_interval_sec != <i32 as ::std::default::Default>::default() {
      let val = &self.stats_report_interval_sec;
      let l = ::pb_jelly::Message::compute_size(val);
      stats_report_interval_sec_size += ::pb_jelly::wire_format::serialized_length(7);
      stats_report_interval_sec_size += l;
    }
    size += stats_report_interval_sec_size;
    let mut dead_letter_size = 0;
    if self.dead_letter != <bool as ::std::default::Default>::default() {
      let val = &self.dead_letter;
      let l = ::pb_jelly::Message::compute_size(val);
      dead_letter_size += ::pb_jelly::wire_format::serialized_length(8);
      dead_letter_size += l;
    }
    size += dead_letter_size;
    let mut _streamdal_grpc_address_size = 0;
    if self._streamdal_grpc_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._streamdal_grpc_address;
      let l = ::pb_jelly::Message::compute_size(val);
      _streamdal_grpc_address_size += ::pb_jelly::wire_format::serialized_length(1000);
      _streamdal_grpc_address_size += ::pb_jelly::varint::serialized_length(l as u64);
      _streamdal_grpc_address_size += l;
    }
    size += _streamdal_grpc_address_size;
    let mut _streamdal_grpc_disable_tls_size = 0;
    if self._streamdal_grpc_disable_tls != <bool as ::std::default::Default>::default() {
      let val = &self._streamdal_grpc_disable_tls;
      let l = ::pb_jelly::Message::compute_size(val);
      _streamdal_grpc_disable_tls_size += ::pb_jelly::wire_format::serialized_length(1001);
      _streamdal_grpc_disable_tls_size += l;
    }
    size += _streamdal_grpc_disable_tls_size;
    let mut _streamdal_grpc_timeout_seconds_size = 0;
    if self._streamdal_grpc_timeout_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self._streamdal_grpc_timeout_seconds;
      let l = ::pb_jelly::Message::compute_size(val);
      _streamdal_grpc_timeout_seconds_size += ::pb_jelly::wire_format::serialized_length(1002);
      _streamdal_grpc_timeout_seconds_size += l;
    }
    size += _streamdal_grpc_timeout_seconds_size;
    let mut _relay_id_size = 0;
    if self._relay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._relay_id;
      let l = ::pb_jelly::Message::compute_size(val);
      _relay_id_size += ::pb_jelly::wire_format::serialized_length(1003);
      _relay_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      _relay_id_size += l;
    }
    size += _relay_id_size;
    let mut _cli_options_size = 0;
    for val in &self._cli_options {
      let l = ::pb_jelly::Message::compute_size(val);
      _cli_options_size += ::pb_jelly::wire_format::serialized_length(1004);
      _cli_options_size += ::pb_jelly::varint::serialized_length(l as u64);
      _cli_options_size += l;
    }
    size += _cli_options_size;
    let mut _active_size = 0;
    if self._active != <bool as ::std::default::Default>::default() {
      let val = &self._active;
      let l = ::pb_jelly::Message::compute_size(val);
      _active_size += ::pb_jelly::wire_format::serialized_length(1005);
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
    let mut aws_sqs_size = 0;
    for val in &self.aws_sqs {
      let l = ::pb_jelly::Message::compute_size(val);
      aws_sqs_size += ::pb_jelly::wire_format::serialized_length(101);
      aws_sqs_size += ::pb_jelly::varint::serialized_length(l as u64);
      aws_sqs_size += l;
    }
    size += aws_sqs_size;
    let mut mongo_size = 0;
    for val in &self.mongo {
      let l = ::pb_jelly::Message::compute_size(val);
      mongo_size += ::pb_jelly::wire_format::serialized_length(102);
      mongo_size += ::pb_jelly::varint::serialized_length(l as u64);
      mongo_size += l;
    }
    size += mongo_size;
    let mut nsq_size = 0;
    for val in &self.nsq {
      let l = ::pb_jelly::Message::compute_size(val);
      nsq_size += ::pb_jelly::wire_format::serialized_length(103);
      nsq_size += ::pb_jelly::varint::serialized_length(l as u64);
      nsq_size += l;
    }
    size += nsq_size;
    let mut rabbit_size = 0;
    for val in &self.rabbit {
      let l = ::pb_jelly::Message::compute_size(val);
      rabbit_size += ::pb_jelly::wire_format::serialized_length(104);
      rabbit_size += ::pb_jelly::varint::serialized_length(l as u64);
      rabbit_size += l;
    }
    size += rabbit_size;
    let mut mqtt_size = 0;
    for val in &self.mqtt {
      let l = ::pb_jelly::Message::compute_size(val);
      mqtt_size += ::pb_jelly::wire_format::serialized_length(105);
      mqtt_size += ::pb_jelly::varint::serialized_length(l as u64);
      mqtt_size += l;
    }
    size += mqtt_size;
    let mut azure_service_bus_size = 0;
    for val in &self.azure_service_bus {
      let l = ::pb_jelly::Message::compute_size(val);
      azure_service_bus_size += ::pb_jelly::wire_format::serialized_length(106);
      azure_service_bus_size += ::pb_jelly::varint::serialized_length(l as u64);
      azure_service_bus_size += l;
    }
    size += azure_service_bus_size;
    let mut gcp_pubsub_size = 0;
    for val in &self.gcp_pubsub {
      let l = ::pb_jelly::Message::compute_size(val);
      gcp_pubsub_size += ::pb_jelly::wire_format::serialized_length(107);
      gcp_pubsub_size += ::pb_jelly::varint::serialized_length(l as u64);
      gcp_pubsub_size += l;
    }
    size += gcp_pubsub_size;
    let mut kubemq_queue_size = 0;
    for val in &self.kubemq_queue {
      let l = ::pb_jelly::Message::compute_size(val);
      kubemq_queue_size += ::pb_jelly::wire_format::serialized_length(108);
      kubemq_queue_size += ::pb_jelly::varint::serialized_length(l as u64);
      kubemq_queue_size += l;
    }
    size += kubemq_queue_size;
    let mut redis_pubsub_size = 0;
    for val in &self.redis_pubsub {
      let l = ::pb_jelly::Message::compute_size(val);
      redis_pubsub_size += ::pb_jelly::wire_format::serialized_length(109);
      redis_pubsub_size += ::pb_jelly::varint::serialized_length(l as u64);
      redis_pubsub_size += l;
    }
    size += redis_pubsub_size;
    let mut redis_streams_size = 0;
    for val in &self.redis_streams {
      let l = ::pb_jelly::Message::compute_size(val);
      redis_streams_size += ::pb_jelly::wire_format::serialized_length(111);
      redis_streams_size += ::pb_jelly::varint::serialized_length(l as u64);
      redis_streams_size += l;
    }
    size += redis_streams_size;
    let mut postgres_size = 0;
    for val in &self.postgres {
      let l = ::pb_jelly::Message::compute_size(val);
      postgres_size += ::pb_jelly::wire_format::serialized_length(112);
      postgres_size += ::pb_jelly::varint::serialized_length(l as u64);
      postgres_size += l;
    }
    size += postgres_size;
    let mut nats_size = 0;
    for val in &self.nats {
      let l = ::pb_jelly::Message::compute_size(val);
      nats_size += ::pb_jelly::wire_format::serialized_length(113);
      nats_size += ::pb_jelly::varint::serialized_length(l as u64);
      nats_size += l;
    }
    size += nats_size;
    let mut nats_streaming_size = 0;
    for val in &self.nats_streaming {
      let l = ::pb_jelly::Message::compute_size(val);
      nats_streaming_size += ::pb_jelly::wire_format::serialized_length(114);
      nats_streaming_size += ::pb_jelly::varint::serialized_length(l as u64);
      nats_streaming_size += l;
    }
    size += nats_streaming_size;
    let mut nats_jetstream_size = 0;
    for val in &self.nats_jetstream {
      let l = ::pb_jelly::Message::compute_size(val);
      nats_jetstream_size += ::pb_jelly::wire_format::serialized_length(115);
      nats_jetstream_size += ::pb_jelly::varint::serialized_length(l as u64);
      nats_jetstream_size += l;
    }
    size += nats_jetstream_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.collection_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.collection_token;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.batch_size != <i32 as ::std::default::Default>::default() {
      let val = &self.batch_size;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.batch_max_retry != <i32 as ::std::default::Default>::default() {
      let val = &self.batch_max_retry;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.connection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.num_workers != <i32 as ::std::default::Default>::default() {
      let val = &self.num_workers;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.stats_enable != <bool as ::std::default::Default>::default() {
      let val = &self.stats_enable;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.stats_report_interval_sec != <i32 as ::std::default::Default>::default() {
      let val = &self.stats_report_interval_sec;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.dead_letter != <bool as ::std::default::Default>::default() {
      let val = &self.dead_letter;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._streamdal_grpc_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._streamdal_grpc_address;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._streamdal_grpc_disable_tls != <bool as ::std::default::Default>::default() {
      let val = &self._streamdal_grpc_disable_tls;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._streamdal_grpc_timeout_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self._streamdal_grpc_timeout_seconds;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._relay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._relay_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self._cli_options {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._active != <bool as ::std::default::Default>::default() {
      let val = &self._active;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.kafka {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.aws_sqs {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.mongo {
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
    for val in &self.postgres {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.nats {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.nats_streaming {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.nats_jetstream {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.collection_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.collection_token;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.batch_size != <i32 as ::std::default::Default>::default() {
      let val = &self.batch_size;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.batch_max_retry != <i32 as ::std::default::Default>::default() {
      let val = &self.batch_max_retry;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.connection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_id;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.num_workers != <i32 as ::std::default::Default>::default() {
      let val = &self.num_workers;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.stats_enable != <bool as ::std::default::Default>::default() {
      let val = &self.stats_enable;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.stats_report_interval_sec != <i32 as ::std::default::Default>::default() {
      let val = &self.stats_report_interval_sec;
      ::pb_jelly::wire_format::write(7, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.dead_letter != <bool as ::std::default::Default>::default() {
      let val = &self.dead_letter;
      ::pb_jelly::wire_format::write(8, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.kafka {
      ::pb_jelly::wire_format::write(100, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.aws_sqs {
      ::pb_jelly::wire_format::write(101, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.mongo {
      ::pb_jelly::wire_format::write(102, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.nsq {
      ::pb_jelly::wire_format::write(103, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.rabbit {
      ::pb_jelly::wire_format::write(104, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.mqtt {
      ::pb_jelly::wire_format::write(105, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.azure_service_bus {
      ::pb_jelly::wire_format::write(106, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.gcp_pubsub {
      ::pb_jelly::wire_format::write(107, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.kubemq_queue {
      ::pb_jelly::wire_format::write(108, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.redis_pubsub {
      ::pb_jelly::wire_format::write(109, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.redis_streams {
      ::pb_jelly::wire_format::write(111, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.postgres {
      ::pb_jelly::wire_format::write(112, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.nats {
      ::pb_jelly::wire_format::write(113, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.nats_streaming {
      ::pb_jelly::wire_format::write(114, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.nats_jetstream {
      ::pb_jelly::wire_format::write(115, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self._streamdal_grpc_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._streamdal_grpc_address;
      ::pb_jelly::wire_format::write(1000, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self._streamdal_grpc_disable_tls != <bool as ::std::default::Default>::default() {
      let val = &self._streamdal_grpc_disable_tls;
      ::pb_jelly::wire_format::write(1001, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self._streamdal_grpc_timeout_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self._streamdal_grpc_timeout_seconds;
      ::pb_jelly::wire_format::write(1002, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self._relay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._relay_id;
      ::pb_jelly::wire_format::write(1003, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self._cli_options {
      ::pb_jelly::wire_format::write(1004, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self._active != <bool as ::std::default::Default>::default() {
      let val = &self._active;
      ::pb_jelly::wire_format::write(1005, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.collection_token = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RelayOptions", 2)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.batch_size = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RelayOptions", 3)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.batch_max_retry = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayOptions", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.connection_id = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RelayOptions", 5)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.num_workers = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RelayOptions", 6)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.stats_enable = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RelayOptions", 7)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.stats_report_interval_sec = val;
        }
        8 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RelayOptions", 8)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.dead_letter = val;
        }
        1000 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayOptions", 1000)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._streamdal_grpc_address = val;
        }
        1001 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RelayOptions", 1001)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self._streamdal_grpc_disable_tls = val;
        }
        1002 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RelayOptions", 1002)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self._streamdal_grpc_timeout_seconds = val;
        }
        1003 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayOptions", 1003)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._relay_id = val;
        }
        1004 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayOptions", 1004)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RelayCLIOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._cli_options = Some(val);
        }
        1005 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RelayOptions", 1005)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self._active = val;
        }
        100 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayOptions", 100)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RelayGroupKafkaOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.kafka = Some(val);
        }
        101 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayOptions", 101)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RelayGroupAWSSQSOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.aws_sqs = Some(val);
        }
        102 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayOptions", 102)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RelayGroupMongoOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.mongo = Some(val);
        }
        103 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayOptions", 103)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RelayGroupNSQOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.nsq = Some(val);
        }
        104 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayOptions", 104)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RelayGroupRabbitOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.rabbit = Some(val);
        }
        105 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayOptions", 105)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RelayGroupMQTTOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.mqtt = Some(val);
        }
        106 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayOptions", 106)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RelayGroupAzureServiceBusOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.azure_service_bus = Some(val);
        }
        107 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayOptions", 107)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RelayGroupGCPPubSubOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.gcp_pubsub = Some(val);
        }
        108 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayOptions", 108)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RelayGroupKubeMQQueueOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.kubemq_queue = Some(val);
        }
        109 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayOptions", 109)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RelayGroupRedisPubSubOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.redis_pubsub = Some(val);
        }
        111 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayOptions", 111)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RelayGroupRedisStreamsOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.redis_streams = Some(val);
        }
        112 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayOptions", 112)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RelayGroupPostgresOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.postgres = Some(val);
        }
        113 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayOptions", 113)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RelayGroupNatsOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.nats = Some(val);
        }
        114 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayOptions", 114)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RelayGroupNatsStreamingOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.nats_streaming = Some(val);
        }
        115 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayOptions", 115)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RelayGroupNatsJetStreamOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.nats_jetstream = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for RelayOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "collection_token" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.collection_token)
      }
      "batch_size" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.batch_size)
      }
      "batch_max_retry" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.batch_max_retry)
      }
      "connection_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.connection_id)
      }
      "num_workers" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.num_workers)
      }
      "stats_enable" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.stats_enable)
      }
      "stats_report_interval_sec" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.stats_report_interval_sec)
      }
      "dead_letter" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.dead_letter)
      }
      "_streamdal_grpc_address" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._streamdal_grpc_address)
      }
      "_streamdal_grpc_disable_tls" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._streamdal_grpc_disable_tls)
      }
      "_streamdal_grpc_timeout_seconds" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._streamdal_grpc_timeout_seconds)
      }
      "_relay_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._relay_id)
      }
      "_cli_options" => {
        ::pb_jelly::reflection::FieldMut::Value(self._cli_options.get_or_insert_with(::std::default::Default::default))
      }
      "_active" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._active)
      }
      "kafka" => {
        ::pb_jelly::reflection::FieldMut::Value(self.kafka.get_or_insert_with(::std::default::Default::default))
      }
      "aws_sqs" => {
        ::pb_jelly::reflection::FieldMut::Value(self.aws_sqs.get_or_insert_with(::std::default::Default::default))
      }
      "mongo" => {
        ::pb_jelly::reflection::FieldMut::Value(self.mongo.get_or_insert_with(::std::default::Default::default))
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
      "postgres" => {
        ::pb_jelly::reflection::FieldMut::Value(self.postgres.get_or_insert_with(::std::default::Default::default))
      }
      "nats" => {
        ::pb_jelly::reflection::FieldMut::Value(self.nats.get_or_insert_with(::std::default::Default::default))
      }
      "nats_streaming" => {
        ::pb_jelly::reflection::FieldMut::Value(self.nats_streaming.get_or_insert_with(::std::default::Default::default))
      }
      "nats_jetstream" => {
        ::pb_jelly::reflection::FieldMut::Value(self.nats_jetstream.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RelayGroupKafkaOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_kafka::KafkaConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_kafka::KafkaRelayArgs>,
}
impl ::std::default::Default for RelayGroupKafkaOptions {
  fn default() -> Self {
    RelayGroupKafkaOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RelayGroupKafkaOptions_default: RelayGroupKafkaOptions = RelayGroupKafkaOptions::default();
}
impl ::pb_jelly::Message for RelayGroupKafkaOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RelayGroupKafkaOptions",
      full_name: "protos.opts.RelayGroupKafkaOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.RelayGroupKafkaOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.RelayGroupKafkaOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupKafkaOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_kafka::KafkaConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupKafkaOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_kafka::KafkaRelayArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for RelayGroupKafkaOptions {
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
pub struct RelayGroupAWSSQSOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_aws_sqs::AWSSQSConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_aws_sqs::AWSSQSRelayArgs>,
}
impl ::std::default::Default for RelayGroupAWSSQSOptions {
  fn default() -> Self {
    RelayGroupAWSSQSOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RelayGroupAWSSQSOptions_default: RelayGroupAWSSQSOptions = RelayGroupAWSSQSOptions::default();
}
impl ::pb_jelly::Message for RelayGroupAWSSQSOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RelayGroupAWSSQSOptions",
      full_name: "protos.opts.RelayGroupAWSSQSOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.RelayGroupAWSSQSOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.RelayGroupAWSSQSOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupAWSSQSOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_aws_sqs::AWSSQSConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupAWSSQSOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_aws_sqs::AWSSQSRelayArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for RelayGroupAWSSQSOptions {
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
pub struct RelayGroupMongoOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_mongo::MongoConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_mongo::MongoReadArgs>,
}
impl ::std::default::Default for RelayGroupMongoOptions {
  fn default() -> Self {
    RelayGroupMongoOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RelayGroupMongoOptions_default: RelayGroupMongoOptions = RelayGroupMongoOptions::default();
}
impl ::pb_jelly::Message for RelayGroupMongoOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RelayGroupMongoOptions",
      full_name: "protos.opts.RelayGroupMongoOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.RelayGroupMongoOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.RelayGroupMongoOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupMongoOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_mongo::MongoConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupMongoOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_mongo::MongoReadArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for RelayGroupMongoOptions {
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
pub struct RelayGroupNSQOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_nsq::NSQConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_nsq::NSQReadArgs>,
}
impl ::std::default::Default for RelayGroupNSQOptions {
  fn default() -> Self {
    RelayGroupNSQOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RelayGroupNSQOptions_default: RelayGroupNSQOptions = RelayGroupNSQOptions::default();
}
impl ::pb_jelly::Message for RelayGroupNSQOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RelayGroupNSQOptions",
      full_name: "protos.opts.RelayGroupNSQOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.RelayGroupNSQOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.RelayGroupNSQOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupNSQOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nsq::NSQConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupNSQOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nsq::NSQReadArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for RelayGroupNSQOptions {
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
pub struct RelayGroupPostgresOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_postgres::PostgresConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_postgres::PostgresReadArgs>,
}
impl ::std::default::Default for RelayGroupPostgresOptions {
  fn default() -> Self {
    RelayGroupPostgresOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RelayGroupPostgresOptions_default: RelayGroupPostgresOptions = RelayGroupPostgresOptions::default();
}
impl ::pb_jelly::Message for RelayGroupPostgresOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RelayGroupPostgresOptions",
      full_name: "protos.opts.RelayGroupPostgresOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.RelayGroupPostgresOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.RelayGroupPostgresOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupPostgresOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_postgres::PostgresConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupPostgresOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_postgres::PostgresReadArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for RelayGroupPostgresOptions {
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
pub struct RelayGroupRabbitOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_rabbit::RabbitConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_rabbit::RabbitReadArgs>,
}
impl ::std::default::Default for RelayGroupRabbitOptions {
  fn default() -> Self {
    RelayGroupRabbitOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RelayGroupRabbitOptions_default: RelayGroupRabbitOptions = RelayGroupRabbitOptions::default();
}
impl ::pb_jelly::Message for RelayGroupRabbitOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RelayGroupRabbitOptions",
      full_name: "protos.opts.RelayGroupRabbitOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.RelayGroupRabbitOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.RelayGroupRabbitOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupRabbitOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_rabbit::RabbitConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupRabbitOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_rabbit::RabbitReadArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for RelayGroupRabbitOptions {
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
pub struct RelayGroupRedisPubSubOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_redis_pubsub::RedisPubSubConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_redis_pubsub::RedisPubSubReadArgs>,
}
impl ::std::default::Default for RelayGroupRedisPubSubOptions {
  fn default() -> Self {
    RelayGroupRedisPubSubOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RelayGroupRedisPubSubOptions_default: RelayGroupRedisPubSubOptions = RelayGroupRedisPubSubOptions::default();
}
impl ::pb_jelly::Message for RelayGroupRedisPubSubOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RelayGroupRedisPubSubOptions",
      full_name: "protos.opts.RelayGroupRedisPubSubOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.RelayGroupRedisPubSubOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.RelayGroupRedisPubSubOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupRedisPubSubOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_redis_pubsub::RedisPubSubConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupRedisPubSubOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_redis_pubsub::RedisPubSubReadArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for RelayGroupRedisPubSubOptions {
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
pub struct RelayGroupRedisStreamsOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_redis_streams::RedisStreamsConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_redis_streams::RedisStreamsReadArgs>,
}
impl ::std::default::Default for RelayGroupRedisStreamsOptions {
  fn default() -> Self {
    RelayGroupRedisStreamsOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RelayGroupRedisStreamsOptions_default: RelayGroupRedisStreamsOptions = RelayGroupRedisStreamsOptions::default();
}
impl ::pb_jelly::Message for RelayGroupRedisStreamsOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RelayGroupRedisStreamsOptions",
      full_name: "protos.opts.RelayGroupRedisStreamsOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.RelayGroupRedisStreamsOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.RelayGroupRedisStreamsOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupRedisStreamsOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_redis_streams::RedisStreamsConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupRedisStreamsOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_redis_streams::RedisStreamsReadArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for RelayGroupRedisStreamsOptions {
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
pub struct RelayGroupAzureServiceBusOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_azure_service_bus::AzureServiceBusConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_azure_service_bus::AzureServiceBusReadArgs>,
}
impl ::std::default::Default for RelayGroupAzureServiceBusOptions {
  fn default() -> Self {
    RelayGroupAzureServiceBusOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RelayGroupAzureServiceBusOptions_default: RelayGroupAzureServiceBusOptions = RelayGroupAzureServiceBusOptions::default();
}
impl ::pb_jelly::Message for RelayGroupAzureServiceBusOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RelayGroupAzureServiceBusOptions",
      full_name: "protos.opts.RelayGroupAzureServiceBusOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.RelayGroupAzureServiceBusOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.RelayGroupAzureServiceBusOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupAzureServiceBusOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_azure_service_bus::AzureServiceBusConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupAzureServiceBusOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_azure_service_bus::AzureServiceBusReadArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for RelayGroupAzureServiceBusOptions {
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
pub struct RelayGroupMQTTOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_mqtt::MQTTConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_mqtt::MQTTReadArgs>,
}
impl ::std::default::Default for RelayGroupMQTTOptions {
  fn default() -> Self {
    RelayGroupMQTTOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RelayGroupMQTTOptions_default: RelayGroupMQTTOptions = RelayGroupMQTTOptions::default();
}
impl ::pb_jelly::Message for RelayGroupMQTTOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RelayGroupMQTTOptions",
      full_name: "protos.opts.RelayGroupMQTTOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.RelayGroupMQTTOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.RelayGroupMQTTOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupMQTTOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_mqtt::MQTTConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupMQTTOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_mqtt::MQTTReadArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for RelayGroupMQTTOptions {
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
pub struct RelayGroupGCPPubSubOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_gcp_pubsub::GCPPubSubConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_gcp_pubsub::GCPPubSubReadArgs>,
}
impl ::std::default::Default for RelayGroupGCPPubSubOptions {
  fn default() -> Self {
    RelayGroupGCPPubSubOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RelayGroupGCPPubSubOptions_default: RelayGroupGCPPubSubOptions = RelayGroupGCPPubSubOptions::default();
}
impl ::pb_jelly::Message for RelayGroupGCPPubSubOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RelayGroupGCPPubSubOptions",
      full_name: "protos.opts.RelayGroupGCPPubSubOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.RelayGroupGCPPubSubOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.RelayGroupGCPPubSubOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupGCPPubSubOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_gcp_pubsub::GCPPubSubConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupGCPPubSubOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_gcp_pubsub::GCPPubSubReadArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for RelayGroupGCPPubSubOptions {
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
pub struct RelayGroupKubeMQQueueOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_kubemq_queue::KubeMQQueueConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_kubemq_queue::KubeMQQueueReadArgs>,
}
impl ::std::default::Default for RelayGroupKubeMQQueueOptions {
  fn default() -> Self {
    RelayGroupKubeMQQueueOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RelayGroupKubeMQQueueOptions_default: RelayGroupKubeMQQueueOptions = RelayGroupKubeMQQueueOptions::default();
}
impl ::pb_jelly::Message for RelayGroupKubeMQQueueOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RelayGroupKubeMQQueueOptions",
      full_name: "protos.opts.RelayGroupKubeMQQueueOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.RelayGroupKubeMQQueueOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.RelayGroupKubeMQQueueOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupKubeMQQueueOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_kubemq_queue::KubeMQQueueConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupKubeMQQueueOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_kubemq_queue::KubeMQQueueReadArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for RelayGroupKubeMQQueueOptions {
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
pub struct RelayGroupNatsOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_nats::NatsConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_nats::NatsReadArgs>,
}
impl ::std::default::Default for RelayGroupNatsOptions {
  fn default() -> Self {
    RelayGroupNatsOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RelayGroupNatsOptions_default: RelayGroupNatsOptions = RelayGroupNatsOptions::default();
}
impl ::pb_jelly::Message for RelayGroupNatsOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RelayGroupNatsOptions",
      full_name: "protos.opts.RelayGroupNatsOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.RelayGroupNatsOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.RelayGroupNatsOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupNatsOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats::NatsConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupNatsOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats::NatsReadArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for RelayGroupNatsOptions {
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
pub struct RelayGroupNatsStreamingOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_nats_streaming::NatsStreamingConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_nats_streaming::NatsStreamingReadArgs>,
}
impl ::std::default::Default for RelayGroupNatsStreamingOptions {
  fn default() -> Self {
    RelayGroupNatsStreamingOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RelayGroupNatsStreamingOptions_default: RelayGroupNatsStreamingOptions = RelayGroupNatsStreamingOptions::default();
}
impl ::pb_jelly::Message for RelayGroupNatsStreamingOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RelayGroupNatsStreamingOptions",
      full_name: "protos.opts.RelayGroupNatsStreamingOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.RelayGroupNatsStreamingOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.RelayGroupNatsStreamingOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupNatsStreamingOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats_streaming::NatsStreamingConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupNatsStreamingOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats_streaming::NatsStreamingReadArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for RelayGroupNatsStreamingOptions {
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
pub struct RelayGroupNatsJetStreamOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_nats_jetstream::NatsJetstreamConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_nats_jetstream::NatsJetstreamReadArgs>,
}
impl ::std::default::Default for RelayGroupNatsJetStreamOptions {
  fn default() -> Self {
    RelayGroupNatsJetStreamOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RelayGroupNatsJetStreamOptions_default: RelayGroupNatsJetStreamOptions = RelayGroupNatsJetStreamOptions::default();
}
impl ::pb_jelly::Message for RelayGroupNatsJetStreamOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RelayGroupNatsJetStreamOptions",
      full_name: "protos.opts.RelayGroupNatsJetStreamOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.RelayGroupNatsJetStreamOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.RelayGroupNatsJetStreamOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupNatsJetStreamOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats_jetstream::NatsJetstreamConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RelayGroupNatsJetStreamOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats_jetstream::NatsJetstreamReadArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for RelayGroupNatsJetStreamOptions {
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

