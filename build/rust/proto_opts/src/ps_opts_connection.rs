// @generated, do not edit
/// ConnectionConfig is used for creating a new backend. CLI creates an instance
/// of this structure by injecting the conn struct it receives via *Args.
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct ConnectionOptions {
  /// Friendly name to identify this connection by (used in plumber-server logs)
  pub name: ::std::string::String,
  /// Any notes associated with this connection (stored plumber-server side)
  pub notes: ::std::string::String,
  // --------------------------------------------------------------------- //
  //                          PRIVATE FIELDS (1000+)                       //
  // --------------------------------------------------------------------- //

  /// Used internally by plumber
  pub _id: ::std::string::String,
  pub conn: ::std::option::Option<ConnectionOptions_Conn>,
}
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub enum ConnectionOptions_Conn {
  Kafka(::proto_args::ps_args_kafka::KafkaConn),
  ActiveMq(::proto_args::ps_args_activemq::ActiveMQConn),
  AwsSqs(::proto_args::ps_args_aws_sqs::AWSSQSConn),
  AwsSns(::proto_args::ps_args_aws_sns::AWSSNSConn),
  Mongo(::proto_args::ps_args_mongo::MongoConn),
  Nats(::proto_args::ps_args_nats::NatsConn),
  NatsStreaming(::proto_args::ps_args_nats_streaming::NatsStreamingConn),
  Nsq(::proto_args::ps_args_nsq::NSQConn),
  Postgres(::proto_args::ps_args_postgres::PostgresConn),
  Pulsar(::proto_args::ps_args_pulsar::PulsarConn),
  Rabbit(::proto_args::ps_args_rabbit::RabbitConn),
  RabbitStreams(::proto_args::ps_args_rabbit_streams::RabbitStreamsConn),
  RedisPubsub(::proto_args::ps_args_redis_pubsub::RedisPubSubConn),
  RedisStreams(::proto_args::ps_args_redis_streams::RedisStreamsConn),
  AzureEventHub(::proto_args::ps_args_azure_event_hub::AzureEventHubConn),
  AzureServiceBus(::proto_args::ps_args_azure_service_bus::AzureServiceBusConn),
  Mqtt(::proto_args::ps_args_mqtt::MQTTConn),
  KubemqQueue(::proto_args::ps_args_kubemq_queue::KubeMQQueueConn),
  GcpPubsub(::proto_args::ps_args_gcp_pubsub::GCPPubSubConn),
  NatsJetstream(::proto_args::ps_args_nats_jetstream::NatsJetstreamConn),
  AwsKinesis(::proto_args::ps_args_aws_kinesis::AWSKinesisConn),
  Memphis(::proto_args::ps_args_memphis::MemphisConn),
}
impl ::std::default::Default for ConnectionOptions {
  fn default() -> Self {
    ConnectionOptions {
      name: ::std::default::Default::default(),
      notes: ::std::default::Default::default(),
      _id: ::std::default::Default::default(),
      conn: None,
    }
  }
}
lazy_static! {
  pub static ref ConnectionOptions_default: ConnectionOptions = ConnectionOptions::default();
}
impl ::pb_jelly::Message for ConnectionOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ConnectionOptions",
      full_name: "protos.opts.ConnectionOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "name",
          full_name: "protos.opts.ConnectionOptions.name",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "notes",
          full_name: "protos.opts.ConnectionOptions.notes",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "kafka",
          full_name: "protos.opts.ConnectionOptions.kafka",
          index: 2,
          number: 100,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "active_mq",
          full_name: "protos.opts.ConnectionOptions.active_mq",
          index: 3,
          number: 101,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_sqs",
          full_name: "protos.opts.ConnectionOptions.aws_sqs",
          index: 4,
          number: 102,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_sns",
          full_name: "protos.opts.ConnectionOptions.aws_sns",
          index: 5,
          number: 103,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "mongo",
          full_name: "protos.opts.ConnectionOptions.mongo",
          index: 6,
          number: 104,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "nats",
          full_name: "protos.opts.ConnectionOptions.nats",
          index: 7,
          number: 105,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "nats_streaming",
          full_name: "protos.opts.ConnectionOptions.nats_streaming",
          index: 8,
          number: 106,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "nsq",
          full_name: "protos.opts.ConnectionOptions.nsq",
          index: 9,
          number: 107,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "postgres",
          full_name: "protos.opts.ConnectionOptions.postgres",
          index: 10,
          number: 108,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "pulsar",
          full_name: "protos.opts.ConnectionOptions.pulsar",
          index: 11,
          number: 109,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "rabbit",
          full_name: "protos.opts.ConnectionOptions.rabbit",
          index: 12,
          number: 110,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "rabbit_streams",
          full_name: "protos.opts.ConnectionOptions.rabbit_streams",
          index: 13,
          number: 111,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "redis_pubsub",
          full_name: "protos.opts.ConnectionOptions.redis_pubsub",
          index: 14,
          number: 112,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "redis_streams",
          full_name: "protos.opts.ConnectionOptions.redis_streams",
          index: 15,
          number: 113,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "azure_event_hub",
          full_name: "protos.opts.ConnectionOptions.azure_event_hub",
          index: 16,
          number: 114,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "azure_service_bus",
          full_name: "protos.opts.ConnectionOptions.azure_service_bus",
          index: 17,
          number: 115,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "mqtt",
          full_name: "protos.opts.ConnectionOptions.mqtt",
          index: 18,
          number: 116,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "kubemq_queue",
          full_name: "protos.opts.ConnectionOptions.kubemq_queue",
          index: 19,
          number: 117,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "gcp_pubsub",
          full_name: "protos.opts.ConnectionOptions.gcp_pubsub",
          index: 20,
          number: 118,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "nats_jetstream",
          full_name: "protos.opts.ConnectionOptions.nats_jetstream",
          index: 21,
          number: 119,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_kinesis",
          full_name: "protos.opts.ConnectionOptions.aws_kinesis",
          index: 22,
          number: 120,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "memphis",
          full_name: "protos.opts.ConnectionOptions.memphis",
          index: 23,
          number: 121,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "_id",
          full_name: "protos.opts.ConnectionOptions._id",
          index: 24,
          number: 1000,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
        ::pb_jelly::OneofDescriptor {
          name: "conn",
        },
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut name_size = 0;
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
      let l = ::pb_jelly::Message::compute_size(val);
      name_size += ::pb_jelly::wire_format::serialized_length(1);
      name_size += ::pb_jelly::varint::serialized_length(l as u64);
      name_size += l;
    }
    size += name_size;
    let mut notes_size = 0;
    if self.notes != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.notes;
      let l = ::pb_jelly::Message::compute_size(val);
      notes_size += ::pb_jelly::wire_format::serialized_length(2);
      notes_size += ::pb_jelly::varint::serialized_length(l as u64);
      notes_size += l;
    }
    size += notes_size;
    let mut kafka_size = 0;
    if let Some(ConnectionOptions_Conn::Kafka(ref val)) = self.conn {
      let l = ::pb_jelly::Message::compute_size(val);
      kafka_size += ::pb_jelly::wire_format::serialized_length(100);
      kafka_size += ::pb_jelly::varint::serialized_length(l as u64);
      kafka_size += l;
    }
    size += kafka_size;
    let mut active_mq_size = 0;
    if let Some(ConnectionOptions_Conn::ActiveMq(ref val)) = self.conn {
      let l = ::pb_jelly::Message::compute_size(val);
      active_mq_size += ::pb_jelly::wire_format::serialized_length(101);
      active_mq_size += ::pb_jelly::varint::serialized_length(l as u64);
      active_mq_size += l;
    }
    size += active_mq_size;
    let mut aws_sqs_size = 0;
    if let Some(ConnectionOptions_Conn::AwsSqs(ref val)) = self.conn {
      let l = ::pb_jelly::Message::compute_size(val);
      aws_sqs_size += ::pb_jelly::wire_format::serialized_length(102);
      aws_sqs_size += ::pb_jelly::varint::serialized_length(l as u64);
      aws_sqs_size += l;
    }
    size += aws_sqs_size;
    let mut aws_sns_size = 0;
    if let Some(ConnectionOptions_Conn::AwsSns(ref val)) = self.conn {
      let l = ::pb_jelly::Message::compute_size(val);
      aws_sns_size += ::pb_jelly::wire_format::serialized_length(103);
      aws_sns_size += ::pb_jelly::varint::serialized_length(l as u64);
      aws_sns_size += l;
    }
    size += aws_sns_size;
    let mut mongo_size = 0;
    if let Some(ConnectionOptions_Conn::Mongo(ref val)) = self.conn {
      let l = ::pb_jelly::Message::compute_size(val);
      mongo_size += ::pb_jelly::wire_format::serialized_length(104);
      mongo_size += ::pb_jelly::varint::serialized_length(l as u64);
      mongo_size += l;
    }
    size += mongo_size;
    let mut nats_size = 0;
    if let Some(ConnectionOptions_Conn::Nats(ref val)) = self.conn {
      let l = ::pb_jelly::Message::compute_size(val);
      nats_size += ::pb_jelly::wire_format::serialized_length(105);
      nats_size += ::pb_jelly::varint::serialized_length(l as u64);
      nats_size += l;
    }
    size += nats_size;
    let mut nats_streaming_size = 0;
    if let Some(ConnectionOptions_Conn::NatsStreaming(ref val)) = self.conn {
      let l = ::pb_jelly::Message::compute_size(val);
      nats_streaming_size += ::pb_jelly::wire_format::serialized_length(106);
      nats_streaming_size += ::pb_jelly::varint::serialized_length(l as u64);
      nats_streaming_size += l;
    }
    size += nats_streaming_size;
    let mut nsq_size = 0;
    if let Some(ConnectionOptions_Conn::Nsq(ref val)) = self.conn {
      let l = ::pb_jelly::Message::compute_size(val);
      nsq_size += ::pb_jelly::wire_format::serialized_length(107);
      nsq_size += ::pb_jelly::varint::serialized_length(l as u64);
      nsq_size += l;
    }
    size += nsq_size;
    let mut postgres_size = 0;
    if let Some(ConnectionOptions_Conn::Postgres(ref val)) = self.conn {
      let l = ::pb_jelly::Message::compute_size(val);
      postgres_size += ::pb_jelly::wire_format::serialized_length(108);
      postgres_size += ::pb_jelly::varint::serialized_length(l as u64);
      postgres_size += l;
    }
    size += postgres_size;
    let mut pulsar_size = 0;
    if let Some(ConnectionOptions_Conn::Pulsar(ref val)) = self.conn {
      let l = ::pb_jelly::Message::compute_size(val);
      pulsar_size += ::pb_jelly::wire_format::serialized_length(109);
      pulsar_size += ::pb_jelly::varint::serialized_length(l as u64);
      pulsar_size += l;
    }
    size += pulsar_size;
    let mut rabbit_size = 0;
    if let Some(ConnectionOptions_Conn::Rabbit(ref val)) = self.conn {
      let l = ::pb_jelly::Message::compute_size(val);
      rabbit_size += ::pb_jelly::wire_format::serialized_length(110);
      rabbit_size += ::pb_jelly::varint::serialized_length(l as u64);
      rabbit_size += l;
    }
    size += rabbit_size;
    let mut rabbit_streams_size = 0;
    if let Some(ConnectionOptions_Conn::RabbitStreams(ref val)) = self.conn {
      let l = ::pb_jelly::Message::compute_size(val);
      rabbit_streams_size += ::pb_jelly::wire_format::serialized_length(111);
      rabbit_streams_size += ::pb_jelly::varint::serialized_length(l as u64);
      rabbit_streams_size += l;
    }
    size += rabbit_streams_size;
    let mut redis_pubsub_size = 0;
    if let Some(ConnectionOptions_Conn::RedisPubsub(ref val)) = self.conn {
      let l = ::pb_jelly::Message::compute_size(val);
      redis_pubsub_size += ::pb_jelly::wire_format::serialized_length(112);
      redis_pubsub_size += ::pb_jelly::varint::serialized_length(l as u64);
      redis_pubsub_size += l;
    }
    size += redis_pubsub_size;
    let mut redis_streams_size = 0;
    if let Some(ConnectionOptions_Conn::RedisStreams(ref val)) = self.conn {
      let l = ::pb_jelly::Message::compute_size(val);
      redis_streams_size += ::pb_jelly::wire_format::serialized_length(113);
      redis_streams_size += ::pb_jelly::varint::serialized_length(l as u64);
      redis_streams_size += l;
    }
    size += redis_streams_size;
    let mut azure_event_hub_size = 0;
    if let Some(ConnectionOptions_Conn::AzureEventHub(ref val)) = self.conn {
      let l = ::pb_jelly::Message::compute_size(val);
      azure_event_hub_size += ::pb_jelly::wire_format::serialized_length(114);
      azure_event_hub_size += ::pb_jelly::varint::serialized_length(l as u64);
      azure_event_hub_size += l;
    }
    size += azure_event_hub_size;
    let mut azure_service_bus_size = 0;
    if let Some(ConnectionOptions_Conn::AzureServiceBus(ref val)) = self.conn {
      let l = ::pb_jelly::Message::compute_size(val);
      azure_service_bus_size += ::pb_jelly::wire_format::serialized_length(115);
      azure_service_bus_size += ::pb_jelly::varint::serialized_length(l as u64);
      azure_service_bus_size += l;
    }
    size += azure_service_bus_size;
    let mut mqtt_size = 0;
    if let Some(ConnectionOptions_Conn::Mqtt(ref val)) = self.conn {
      let l = ::pb_jelly::Message::compute_size(val);
      mqtt_size += ::pb_jelly::wire_format::serialized_length(116);
      mqtt_size += ::pb_jelly::varint::serialized_length(l as u64);
      mqtt_size += l;
    }
    size += mqtt_size;
    let mut kubemq_queue_size = 0;
    if let Some(ConnectionOptions_Conn::KubemqQueue(ref val)) = self.conn {
      let l = ::pb_jelly::Message::compute_size(val);
      kubemq_queue_size += ::pb_jelly::wire_format::serialized_length(117);
      kubemq_queue_size += ::pb_jelly::varint::serialized_length(l as u64);
      kubemq_queue_size += l;
    }
    size += kubemq_queue_size;
    let mut gcp_pubsub_size = 0;
    if let Some(ConnectionOptions_Conn::GcpPubsub(ref val)) = self.conn {
      let l = ::pb_jelly::Message::compute_size(val);
      gcp_pubsub_size += ::pb_jelly::wire_format::serialized_length(118);
      gcp_pubsub_size += ::pb_jelly::varint::serialized_length(l as u64);
      gcp_pubsub_size += l;
    }
    size += gcp_pubsub_size;
    let mut nats_jetstream_size = 0;
    if let Some(ConnectionOptions_Conn::NatsJetstream(ref val)) = self.conn {
      let l = ::pb_jelly::Message::compute_size(val);
      nats_jetstream_size += ::pb_jelly::wire_format::serialized_length(119);
      nats_jetstream_size += ::pb_jelly::varint::serialized_length(l as u64);
      nats_jetstream_size += l;
    }
    size += nats_jetstream_size;
    let mut aws_kinesis_size = 0;
    if let Some(ConnectionOptions_Conn::AwsKinesis(ref val)) = self.conn {
      let l = ::pb_jelly::Message::compute_size(val);
      aws_kinesis_size += ::pb_jelly::wire_format::serialized_length(120);
      aws_kinesis_size += ::pb_jelly::varint::serialized_length(l as u64);
      aws_kinesis_size += l;
    }
    size += aws_kinesis_size;
    let mut memphis_size = 0;
    if let Some(ConnectionOptions_Conn::Memphis(ref val)) = self.conn {
      let l = ::pb_jelly::Message::compute_size(val);
      memphis_size += ::pb_jelly::wire_format::serialized_length(121);
      memphis_size += ::pb_jelly::varint::serialized_length(l as u64);
      memphis_size += l;
    }
    size += memphis_size;
    let mut _id_size = 0;
    if self._id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._id;
      let l = ::pb_jelly::Message::compute_size(val);
      _id_size += ::pb_jelly::wire_format::serialized_length(1000);
      _id_size += ::pb_jelly::varint::serialized_length(l as u64);
      _id_size += l;
    }
    size += _id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.notes != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.notes;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ConnectionOptions_Conn::Kafka(ref val)) = self.conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ConnectionOptions_Conn::ActiveMq(ref val)) = self.conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ConnectionOptions_Conn::AwsSqs(ref val)) = self.conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ConnectionOptions_Conn::AwsSns(ref val)) = self.conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ConnectionOptions_Conn::Mongo(ref val)) = self.conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ConnectionOptions_Conn::Nats(ref val)) = self.conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ConnectionOptions_Conn::NatsStreaming(ref val)) = self.conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ConnectionOptions_Conn::Nsq(ref val)) = self.conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ConnectionOptions_Conn::Postgres(ref val)) = self.conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ConnectionOptions_Conn::Pulsar(ref val)) = self.conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ConnectionOptions_Conn::Rabbit(ref val)) = self.conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ConnectionOptions_Conn::RabbitStreams(ref val)) = self.conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ConnectionOptions_Conn::RedisPubsub(ref val)) = self.conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ConnectionOptions_Conn::RedisStreams(ref val)) = self.conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ConnectionOptions_Conn::AzureEventHub(ref val)) = self.conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ConnectionOptions_Conn::AzureServiceBus(ref val)) = self.conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ConnectionOptions_Conn::Mqtt(ref val)) = self.conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ConnectionOptions_Conn::KubemqQueue(ref val)) = self.conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ConnectionOptions_Conn::GcpPubsub(ref val)) = self.conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ConnectionOptions_Conn::NatsJetstream(ref val)) = self.conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ConnectionOptions_Conn::AwsKinesis(ref val)) = self.conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ConnectionOptions_Conn::Memphis(ref val)) = self.conn {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.notes != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.notes;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ConnectionOptions_Conn::Kafka(ref val)) = self.conn {
      ::pb_jelly::wire_format::write(100, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ConnectionOptions_Conn::ActiveMq(ref val)) = self.conn {
      ::pb_jelly::wire_format::write(101, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ConnectionOptions_Conn::AwsSqs(ref val)) = self.conn {
      ::pb_jelly::wire_format::write(102, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ConnectionOptions_Conn::AwsSns(ref val)) = self.conn {
      ::pb_jelly::wire_format::write(103, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ConnectionOptions_Conn::Mongo(ref val)) = self.conn {
      ::pb_jelly::wire_format::write(104, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ConnectionOptions_Conn::Nats(ref val)) = self.conn {
      ::pb_jelly::wire_format::write(105, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ConnectionOptions_Conn::NatsStreaming(ref val)) = self.conn {
      ::pb_jelly::wire_format::write(106, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ConnectionOptions_Conn::Nsq(ref val)) = self.conn {
      ::pb_jelly::wire_format::write(107, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ConnectionOptions_Conn::Postgres(ref val)) = self.conn {
      ::pb_jelly::wire_format::write(108, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ConnectionOptions_Conn::Pulsar(ref val)) = self.conn {
      ::pb_jelly::wire_format::write(109, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ConnectionOptions_Conn::Rabbit(ref val)) = self.conn {
      ::pb_jelly::wire_format::write(110, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ConnectionOptions_Conn::RabbitStreams(ref val)) = self.conn {
      ::pb_jelly::wire_format::write(111, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ConnectionOptions_Conn::RedisPubsub(ref val)) = self.conn {
      ::pb_jelly::wire_format::write(112, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ConnectionOptions_Conn::RedisStreams(ref val)) = self.conn {
      ::pb_jelly::wire_format::write(113, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ConnectionOptions_Conn::AzureEventHub(ref val)) = self.conn {
      ::pb_jelly::wire_format::write(114, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ConnectionOptions_Conn::AzureServiceBus(ref val)) = self.conn {
      ::pb_jelly::wire_format::write(115, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ConnectionOptions_Conn::Mqtt(ref val)) = self.conn {
      ::pb_jelly::wire_format::write(116, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ConnectionOptions_Conn::KubemqQueue(ref val)) = self.conn {
      ::pb_jelly::wire_format::write(117, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ConnectionOptions_Conn::GcpPubsub(ref val)) = self.conn {
      ::pb_jelly::wire_format::write(118, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ConnectionOptions_Conn::NatsJetstream(ref val)) = self.conn {
      ::pb_jelly::wire_format::write(119, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ConnectionOptions_Conn::AwsKinesis(ref val)) = self.conn {
      ::pb_jelly::wire_format::write(120, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ConnectionOptions_Conn::Memphis(ref val)) = self.conn {
      ::pb_jelly::wire_format::write(121, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self._id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._id;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.name = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.notes = val;
        }
        100 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 100)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_kafka::KafkaConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.conn = Some(ConnectionOptions_Conn::Kafka(val));
        }
        101 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 101)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_activemq::ActiveMQConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.conn = Some(ConnectionOptions_Conn::ActiveMq(val));
        }
        102 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 102)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_aws_sqs::AWSSQSConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.conn = Some(ConnectionOptions_Conn::AwsSqs(val));
        }
        103 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 103)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_aws_sns::AWSSNSConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.conn = Some(ConnectionOptions_Conn::AwsSns(val));
        }
        104 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 104)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_mongo::MongoConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.conn = Some(ConnectionOptions_Conn::Mongo(val));
        }
        105 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 105)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats::NatsConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.conn = Some(ConnectionOptions_Conn::Nats(val));
        }
        106 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 106)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats_streaming::NatsStreamingConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.conn = Some(ConnectionOptions_Conn::NatsStreaming(val));
        }
        107 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 107)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nsq::NSQConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.conn = Some(ConnectionOptions_Conn::Nsq(val));
        }
        108 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 108)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_postgres::PostgresConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.conn = Some(ConnectionOptions_Conn::Postgres(val));
        }
        109 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 109)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_pulsar::PulsarConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.conn = Some(ConnectionOptions_Conn::Pulsar(val));
        }
        110 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 110)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_rabbit::RabbitConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.conn = Some(ConnectionOptions_Conn::Rabbit(val));
        }
        111 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 111)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_rabbit_streams::RabbitStreamsConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.conn = Some(ConnectionOptions_Conn::RabbitStreams(val));
        }
        112 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 112)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_redis_pubsub::RedisPubSubConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.conn = Some(ConnectionOptions_Conn::RedisPubsub(val));
        }
        113 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 113)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_redis_streams::RedisStreamsConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.conn = Some(ConnectionOptions_Conn::RedisStreams(val));
        }
        114 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 114)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_azure_event_hub::AzureEventHubConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.conn = Some(ConnectionOptions_Conn::AzureEventHub(val));
        }
        115 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 115)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_azure_service_bus::AzureServiceBusConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.conn = Some(ConnectionOptions_Conn::AzureServiceBus(val));
        }
        116 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 116)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_mqtt::MQTTConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.conn = Some(ConnectionOptions_Conn::Mqtt(val));
        }
        117 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 117)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_kubemq_queue::KubeMQQueueConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.conn = Some(ConnectionOptions_Conn::KubemqQueue(val));
        }
        118 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 118)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_gcp_pubsub::GCPPubSubConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.conn = Some(ConnectionOptions_Conn::GcpPubsub(val));
        }
        119 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 119)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats_jetstream::NatsJetstreamConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.conn = Some(ConnectionOptions_Conn::NatsJetstream(val));
        }
        120 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 120)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_aws_kinesis::AWSKinesisConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.conn = Some(ConnectionOptions_Conn::AwsKinesis(val));
        }
        121 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 121)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_memphis::MemphisConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.conn = Some(ConnectionOptions_Conn::Memphis(val));
        }
        1000 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ConnectionOptions", 1000)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for ConnectionOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      "conn" => {
        if let Some(ConnectionOptions_Conn::Kafka(ref val)) = self.conn {
          return Some("kafka");
        }
        if let Some(ConnectionOptions_Conn::ActiveMq(ref val)) = self.conn {
          return Some("active_mq");
        }
        if let Some(ConnectionOptions_Conn::AwsSqs(ref val)) = self.conn {
          return Some("aws_sqs");
        }
        if let Some(ConnectionOptions_Conn::AwsSns(ref val)) = self.conn {
          return Some("aws_sns");
        }
        if let Some(ConnectionOptions_Conn::Mongo(ref val)) = self.conn {
          return Some("mongo");
        }
        if let Some(ConnectionOptions_Conn::Nats(ref val)) = self.conn {
          return Some("nats");
        }
        if let Some(ConnectionOptions_Conn::NatsStreaming(ref val)) = self.conn {
          return Some("nats_streaming");
        }
        if let Some(ConnectionOptions_Conn::Nsq(ref val)) = self.conn {
          return Some("nsq");
        }
        if let Some(ConnectionOptions_Conn::Postgres(ref val)) = self.conn {
          return Some("postgres");
        }
        if let Some(ConnectionOptions_Conn::Pulsar(ref val)) = self.conn {
          return Some("pulsar");
        }
        if let Some(ConnectionOptions_Conn::Rabbit(ref val)) = self.conn {
          return Some("rabbit");
        }
        if let Some(ConnectionOptions_Conn::RabbitStreams(ref val)) = self.conn {
          return Some("rabbit_streams");
        }
        if let Some(ConnectionOptions_Conn::RedisPubsub(ref val)) = self.conn {
          return Some("redis_pubsub");
        }
        if let Some(ConnectionOptions_Conn::RedisStreams(ref val)) = self.conn {
          return Some("redis_streams");
        }
        if let Some(ConnectionOptions_Conn::AzureEventHub(ref val)) = self.conn {
          return Some("azure_event_hub");
        }
        if let Some(ConnectionOptions_Conn::AzureServiceBus(ref val)) = self.conn {
          return Some("azure_service_bus");
        }
        if let Some(ConnectionOptions_Conn::Mqtt(ref val)) = self.conn {
          return Some("mqtt");
        }
        if let Some(ConnectionOptions_Conn::KubemqQueue(ref val)) = self.conn {
          return Some("kubemq_queue");
        }
        if let Some(ConnectionOptions_Conn::GcpPubsub(ref val)) = self.conn {
          return Some("gcp_pubsub");
        }
        if let Some(ConnectionOptions_Conn::NatsJetstream(ref val)) = self.conn {
          return Some("nats_jetstream");
        }
        if let Some(ConnectionOptions_Conn::AwsKinesis(ref val)) = self.conn {
          return Some("aws_kinesis");
        }
        if let Some(ConnectionOptions_Conn::Memphis(ref val)) = self.conn {
          return Some("memphis");
        }
        None
      }
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.name)
      }
      "notes" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.notes)
      }
      "kafka" => {
        match self.conn {
          Some(ConnectionOptions_Conn::Kafka(_)) => (),
          _ => {
            self.conn = Some(ConnectionOptions_Conn::Kafka(::std::default::Default::default()));
          },
        }
        if let Some(ConnectionOptions_Conn::Kafka(ref mut val)) = self.conn {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "active_mq" => {
        match self.conn {
          Some(ConnectionOptions_Conn::ActiveMq(_)) => (),
          _ => {
            self.conn = Some(ConnectionOptions_Conn::ActiveMq(::std::default::Default::default()));
          },
        }
        if let Some(ConnectionOptions_Conn::ActiveMq(ref mut val)) = self.conn {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "aws_sqs" => {
        match self.conn {
          Some(ConnectionOptions_Conn::AwsSqs(_)) => (),
          _ => {
            self.conn = Some(ConnectionOptions_Conn::AwsSqs(::std::default::Default::default()));
          },
        }
        if let Some(ConnectionOptions_Conn::AwsSqs(ref mut val)) = self.conn {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "aws_sns" => {
        match self.conn {
          Some(ConnectionOptions_Conn::AwsSns(_)) => (),
          _ => {
            self.conn = Some(ConnectionOptions_Conn::AwsSns(::std::default::Default::default()));
          },
        }
        if let Some(ConnectionOptions_Conn::AwsSns(ref mut val)) = self.conn {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "mongo" => {
        match self.conn {
          Some(ConnectionOptions_Conn::Mongo(_)) => (),
          _ => {
            self.conn = Some(ConnectionOptions_Conn::Mongo(::std::default::Default::default()));
          },
        }
        if let Some(ConnectionOptions_Conn::Mongo(ref mut val)) = self.conn {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "nats" => {
        match self.conn {
          Some(ConnectionOptions_Conn::Nats(_)) => (),
          _ => {
            self.conn = Some(ConnectionOptions_Conn::Nats(::std::default::Default::default()));
          },
        }
        if let Some(ConnectionOptions_Conn::Nats(ref mut val)) = self.conn {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "nats_streaming" => {
        match self.conn {
          Some(ConnectionOptions_Conn::NatsStreaming(_)) => (),
          _ => {
            self.conn = Some(ConnectionOptions_Conn::NatsStreaming(::std::default::Default::default()));
          },
        }
        if let Some(ConnectionOptions_Conn::NatsStreaming(ref mut val)) = self.conn {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "nsq" => {
        match self.conn {
          Some(ConnectionOptions_Conn::Nsq(_)) => (),
          _ => {
            self.conn = Some(ConnectionOptions_Conn::Nsq(::std::default::Default::default()));
          },
        }
        if let Some(ConnectionOptions_Conn::Nsq(ref mut val)) = self.conn {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "postgres" => {
        match self.conn {
          Some(ConnectionOptions_Conn::Postgres(_)) => (),
          _ => {
            self.conn = Some(ConnectionOptions_Conn::Postgres(::std::default::Default::default()));
          },
        }
        if let Some(ConnectionOptions_Conn::Postgres(ref mut val)) = self.conn {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "pulsar" => {
        match self.conn {
          Some(ConnectionOptions_Conn::Pulsar(_)) => (),
          _ => {
            self.conn = Some(ConnectionOptions_Conn::Pulsar(::std::default::Default::default()));
          },
        }
        if let Some(ConnectionOptions_Conn::Pulsar(ref mut val)) = self.conn {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "rabbit" => {
        match self.conn {
          Some(ConnectionOptions_Conn::Rabbit(_)) => (),
          _ => {
            self.conn = Some(ConnectionOptions_Conn::Rabbit(::std::default::Default::default()));
          },
        }
        if let Some(ConnectionOptions_Conn::Rabbit(ref mut val)) = self.conn {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "rabbit_streams" => {
        match self.conn {
          Some(ConnectionOptions_Conn::RabbitStreams(_)) => (),
          _ => {
            self.conn = Some(ConnectionOptions_Conn::RabbitStreams(::std::default::Default::default()));
          },
        }
        if let Some(ConnectionOptions_Conn::RabbitStreams(ref mut val)) = self.conn {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "redis_pubsub" => {
        match self.conn {
          Some(ConnectionOptions_Conn::RedisPubsub(_)) => (),
          _ => {
            self.conn = Some(ConnectionOptions_Conn::RedisPubsub(::std::default::Default::default()));
          },
        }
        if let Some(ConnectionOptions_Conn::RedisPubsub(ref mut val)) = self.conn {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "redis_streams" => {
        match self.conn {
          Some(ConnectionOptions_Conn::RedisStreams(_)) => (),
          _ => {
            self.conn = Some(ConnectionOptions_Conn::RedisStreams(::std::default::Default::default()));
          },
        }
        if let Some(ConnectionOptions_Conn::RedisStreams(ref mut val)) = self.conn {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "azure_event_hub" => {
        match self.conn {
          Some(ConnectionOptions_Conn::AzureEventHub(_)) => (),
          _ => {
            self.conn = Some(ConnectionOptions_Conn::AzureEventHub(::std::default::Default::default()));
          },
        }
        if let Some(ConnectionOptions_Conn::AzureEventHub(ref mut val)) = self.conn {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "azure_service_bus" => {
        match self.conn {
          Some(ConnectionOptions_Conn::AzureServiceBus(_)) => (),
          _ => {
            self.conn = Some(ConnectionOptions_Conn::AzureServiceBus(::std::default::Default::default()));
          },
        }
        if let Some(ConnectionOptions_Conn::AzureServiceBus(ref mut val)) = self.conn {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "mqtt" => {
        match self.conn {
          Some(ConnectionOptions_Conn::Mqtt(_)) => (),
          _ => {
            self.conn = Some(ConnectionOptions_Conn::Mqtt(::std::default::Default::default()));
          },
        }
        if let Some(ConnectionOptions_Conn::Mqtt(ref mut val)) = self.conn {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "kubemq_queue" => {
        match self.conn {
          Some(ConnectionOptions_Conn::KubemqQueue(_)) => (),
          _ => {
            self.conn = Some(ConnectionOptions_Conn::KubemqQueue(::std::default::Default::default()));
          },
        }
        if let Some(ConnectionOptions_Conn::KubemqQueue(ref mut val)) = self.conn {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "gcp_pubsub" => {
        match self.conn {
          Some(ConnectionOptions_Conn::GcpPubsub(_)) => (),
          _ => {
            self.conn = Some(ConnectionOptions_Conn::GcpPubsub(::std::default::Default::default()));
          },
        }
        if let Some(ConnectionOptions_Conn::GcpPubsub(ref mut val)) = self.conn {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "nats_jetstream" => {
        match self.conn {
          Some(ConnectionOptions_Conn::NatsJetstream(_)) => (),
          _ => {
            self.conn = Some(ConnectionOptions_Conn::NatsJetstream(::std::default::Default::default()));
          },
        }
        if let Some(ConnectionOptions_Conn::NatsJetstream(ref mut val)) = self.conn {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "aws_kinesis" => {
        match self.conn {
          Some(ConnectionOptions_Conn::AwsKinesis(_)) => (),
          _ => {
            self.conn = Some(ConnectionOptions_Conn::AwsKinesis(::std::default::Default::default()));
          },
        }
        if let Some(ConnectionOptions_Conn::AwsKinesis(ref mut val)) = self.conn {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "memphis" => {
        match self.conn {
          Some(ConnectionOptions_Conn::Memphis(_)) => (),
          _ => {
            self.conn = Some(ConnectionOptions_Conn::Memphis(::std::default::Default::default()));
          },
        }
        if let Some(ConnectionOptions_Conn::Memphis(ref mut val)) = self.conn {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

