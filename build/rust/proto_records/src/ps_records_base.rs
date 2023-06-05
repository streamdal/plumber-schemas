// @generated, do not edit
/// Returned for read requests (server & cli)
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct ReadRecord {
  /// Unique id automatically created by plumber
  pub message_id: ::std::string::String,
  /// Plumber counts the number of messages it reads; this number represents
  /// the message number (useful for CLI).
  pub num: i64,
  /// Metadata may contain properties that cannot be found in the Raw message.
  /// For example: read lag in Kafka.

  /// Metadata may also contain data such as "count" which is an incremental
  /// number that plumber assigns to each message it receives. This is used
  /// with read via CLI functionality to allow the user to quickly discern
  /// whether this is message #1 or #500, etc.
  pub metadata: ::std::vec::Vec<ReadRecord_MetadataEntry>,
  /// UTC unix timestamp of when plumber received the message; a backend record
  /// entry might have its own timestamp as well. This should be seconds.
  pub received_at_unix_ts_utc: i64,

  // >>> Intentionally leaving this index space for future use <<<

  /// Set _outside_ the backend; will contain the final value, regardless of
  /// whether decoding options were specified for a read.
  /// _This_ is what both CLI and desktop should display for the payload.
  pub payload: ::std::vec::Vec<u8>,
  // --------------------------------------------------------------------- //
  //                          PRIVATE FIELDS (1000+)                       //
  // --------------------------------------------------------------------- //

  /// Original backend message (encoded with gob, ie. *skafka.Message, etc.).
  /// In most cases, you should use the oneof record instead of the raw message.
  pub _raw: ::std::vec::Vec<u8>,
  /// Identifies which plumber instance received the event (set outside the backend)
  pub _plumber_id: ::std::string::String,
  pub Record: ::std::option::Option<ReadRecord_Record>,
}
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub enum ReadRecord_Record {
  Kafka(super::ps_records_kafka::Kafka),
  Rabbit(super::ps_records_rabbit::Rabbit),
  Activemq(super::ps_records_activemq::ActiveMQ),
  AwsSqs(super::ps_records_aws_sqs::AWSSQS),
  AzureEventHub(super::ps_records_azure_event_hub::AzureEventHub),
  AzureServiceBus(super::ps_records_azure_service_bus::AzureServiceBus),
  GcpPubsub(super::ps_records_gcp_pubsub::GCPPubSub),
  Kubemq(super::ps_records_kubemq::KubeMQ),
  Mongo(super::ps_records_mongo::Mongo),
  Mqtt(super::ps_records_mqtt::MQTT),
  Nats(super::ps_records_nats::Nats),
  NatsStreaming(super::ps_records_nats_streaming::NatsStreaming),
  Nsq(super::ps_records_nsq::NSQ),
  Postgres(super::ps_records_postgres::Postgres),
  Pulsar(super::ps_records_pulsar::Pulsar),
  RabbitStreams(super::ps_records_rabbit_streams::RabbitStreams),
  RedisPubsub(super::ps_records_redis_pubsub::RedisPubsub),
  RedisStreams(super::ps_records_redis_streams::RedisStreams),
  NatsJetstream(super::ps_records_nats_jetstream::NatsJetstream),
  AwsKinesis(super::ps_records_aws_kinesis::AWSKinesis),
  Memphis(super::ps_records_memphis::Memphis),
}
impl ::std::default::Default for ReadRecord {
  fn default() -> Self {
    ReadRecord {
      message_id: ::std::default::Default::default(),
      num: ::std::default::Default::default(),
      metadata: ::std::default::Default::default(),
      received_at_unix_ts_utc: ::std::default::Default::default(),
      payload: ::std::default::Default::default(),
      _raw: ::std::default::Default::default(),
      _plumber_id: ::std::default::Default::default(),
      Record: None,
    }
  }
}
lazy_static! {
  pub static ref ReadRecord_default: ReadRecord = ReadRecord::default();
}
impl ::pb_jelly::Message for ReadRecord {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadRecord",
      full_name: "protos.records.ReadRecord",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "message_id",
          full_name: "protos.records.ReadRecord.message_id",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "num",
          full_name: "protos.records.ReadRecord.num",
          index: 1,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "metadata",
          full_name: "protos.records.ReadRecord.metadata",
          index: 2,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Repeated,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "received_at_unix_ts_utc",
          full_name: "protos.records.ReadRecord.received_at_unix_ts_utc",
          index: 3,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "payload",
          full_name: "protos.records.ReadRecord.payload",
          index: 4,
          number: 99,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "kafka",
          full_name: "protos.records.ReadRecord.kafka",
          index: 5,
          number: 100,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "rabbit",
          full_name: "protos.records.ReadRecord.rabbit",
          index: 6,
          number: 101,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "activemq",
          full_name: "protos.records.ReadRecord.activemq",
          index: 7,
          number: 102,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_sqs",
          full_name: "protos.records.ReadRecord.aws_sqs",
          index: 8,
          number: 103,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "azure_event_hub",
          full_name: "protos.records.ReadRecord.azure_event_hub",
          index: 9,
          number: 104,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "azure_service_bus",
          full_name: "protos.records.ReadRecord.azure_service_bus",
          index: 10,
          number: 105,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "gcp_pubsub",
          full_name: "protos.records.ReadRecord.gcp_pubsub",
          index: 11,
          number: 106,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "kubemq",
          full_name: "protos.records.ReadRecord.kubemq",
          index: 12,
          number: 107,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "mongo",
          full_name: "protos.records.ReadRecord.mongo",
          index: 13,
          number: 108,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "mqtt",
          full_name: "protos.records.ReadRecord.mqtt",
          index: 14,
          number: 109,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "nats",
          full_name: "protos.records.ReadRecord.nats",
          index: 15,
          number: 110,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "nats_streaming",
          full_name: "protos.records.ReadRecord.nats_streaming",
          index: 16,
          number: 111,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "nsq",
          full_name: "protos.records.ReadRecord.nsq",
          index: 17,
          number: 112,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "postgres",
          full_name: "protos.records.ReadRecord.postgres",
          index: 18,
          number: 113,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "pulsar",
          full_name: "protos.records.ReadRecord.pulsar",
          index: 19,
          number: 114,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "rabbit_streams",
          full_name: "protos.records.ReadRecord.rabbit_streams",
          index: 20,
          number: 115,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "redis_pubsub",
          full_name: "protos.records.ReadRecord.redis_pubsub",
          index: 21,
          number: 116,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "redis_streams",
          full_name: "protos.records.ReadRecord.redis_streams",
          index: 22,
          number: 117,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "nats_jetstream",
          full_name: "protos.records.ReadRecord.nats_jetstream",
          index: 23,
          number: 118,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_kinesis",
          full_name: "protos.records.ReadRecord.aws_kinesis",
          index: 24,
          number: 119,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "memphis",
          full_name: "protos.records.ReadRecord.memphis",
          index: 25,
          number: 120,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "_raw",
          full_name: "protos.records.ReadRecord._raw",
          index: 26,
          number: 1000,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_plumber_id",
          full_name: "protos.records.ReadRecord._plumber_id",
          index: 27,
          number: 1001,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
        ::pb_jelly::OneofDescriptor {
          name: "Record",
        },
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut message_id_size = 0;
    if self.message_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message_id;
      let l = ::pb_jelly::Message::compute_size(val);
      message_id_size += ::pb_jelly::wire_format::serialized_length(1);
      message_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      message_id_size += l;
    }
    size += message_id_size;
    let mut num_size = 0;
    if self.num != <i64 as ::std::default::Default>::default() {
      let val = &self.num;
      let l = ::pb_jelly::Message::compute_size(val);
      num_size += ::pb_jelly::wire_format::serialized_length(3);
      num_size += l;
    }
    size += num_size;
    let mut metadata_size = 0;
    for val in &self.metadata {
      let l = ::pb_jelly::Message::compute_size(val);
      metadata_size += ::pb_jelly::wire_format::serialized_length(4);
      metadata_size += ::pb_jelly::varint::serialized_length(l as u64);
      metadata_size += l;
    }
    size += metadata_size;
    let mut received_at_unix_ts_utc_size = 0;
    if self.received_at_unix_ts_utc != <i64 as ::std::default::Default>::default() {
      let val = &self.received_at_unix_ts_utc;
      let l = ::pb_jelly::Message::compute_size(val);
      received_at_unix_ts_utc_size += ::pb_jelly::wire_format::serialized_length(6);
      received_at_unix_ts_utc_size += l;
    }
    size += received_at_unix_ts_utc_size;
    let mut payload_size = 0;
    if self.payload != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.payload;
      let l = ::pb_jelly::Message::compute_size(val);
      payload_size += ::pb_jelly::wire_format::serialized_length(99);
      payload_size += ::pb_jelly::varint::serialized_length(l as u64);
      payload_size += l;
    }
    size += payload_size;
    let mut kafka_size = 0;
    if let Some(ReadRecord_Record::Kafka(ref val)) = self.Record {
      let l = ::pb_jelly::Message::compute_size(val);
      kafka_size += ::pb_jelly::wire_format::serialized_length(100);
      kafka_size += ::pb_jelly::varint::serialized_length(l as u64);
      kafka_size += l;
    }
    size += kafka_size;
    let mut rabbit_size = 0;
    if let Some(ReadRecord_Record::Rabbit(ref val)) = self.Record {
      let l = ::pb_jelly::Message::compute_size(val);
      rabbit_size += ::pb_jelly::wire_format::serialized_length(101);
      rabbit_size += ::pb_jelly::varint::serialized_length(l as u64);
      rabbit_size += l;
    }
    size += rabbit_size;
    let mut activemq_size = 0;
    if let Some(ReadRecord_Record::Activemq(ref val)) = self.Record {
      let l = ::pb_jelly::Message::compute_size(val);
      activemq_size += ::pb_jelly::wire_format::serialized_length(102);
      activemq_size += ::pb_jelly::varint::serialized_length(l as u64);
      activemq_size += l;
    }
    size += activemq_size;
    let mut aws_sqs_size = 0;
    if let Some(ReadRecord_Record::AwsSqs(ref val)) = self.Record {
      let l = ::pb_jelly::Message::compute_size(val);
      aws_sqs_size += ::pb_jelly::wire_format::serialized_length(103);
      aws_sqs_size += ::pb_jelly::varint::serialized_length(l as u64);
      aws_sqs_size += l;
    }
    size += aws_sqs_size;
    let mut azure_event_hub_size = 0;
    if let Some(ReadRecord_Record::AzureEventHub(ref val)) = self.Record {
      let l = ::pb_jelly::Message::compute_size(val);
      azure_event_hub_size += ::pb_jelly::wire_format::serialized_length(104);
      azure_event_hub_size += ::pb_jelly::varint::serialized_length(l as u64);
      azure_event_hub_size += l;
    }
    size += azure_event_hub_size;
    let mut azure_service_bus_size = 0;
    if let Some(ReadRecord_Record::AzureServiceBus(ref val)) = self.Record {
      let l = ::pb_jelly::Message::compute_size(val);
      azure_service_bus_size += ::pb_jelly::wire_format::serialized_length(105);
      azure_service_bus_size += ::pb_jelly::varint::serialized_length(l as u64);
      azure_service_bus_size += l;
    }
    size += azure_service_bus_size;
    let mut gcp_pubsub_size = 0;
    if let Some(ReadRecord_Record::GcpPubsub(ref val)) = self.Record {
      let l = ::pb_jelly::Message::compute_size(val);
      gcp_pubsub_size += ::pb_jelly::wire_format::serialized_length(106);
      gcp_pubsub_size += ::pb_jelly::varint::serialized_length(l as u64);
      gcp_pubsub_size += l;
    }
    size += gcp_pubsub_size;
    let mut kubemq_size = 0;
    if let Some(ReadRecord_Record::Kubemq(ref val)) = self.Record {
      let l = ::pb_jelly::Message::compute_size(val);
      kubemq_size += ::pb_jelly::wire_format::serialized_length(107);
      kubemq_size += ::pb_jelly::varint::serialized_length(l as u64);
      kubemq_size += l;
    }
    size += kubemq_size;
    let mut mongo_size = 0;
    if let Some(ReadRecord_Record::Mongo(ref val)) = self.Record {
      let l = ::pb_jelly::Message::compute_size(val);
      mongo_size += ::pb_jelly::wire_format::serialized_length(108);
      mongo_size += ::pb_jelly::varint::serialized_length(l as u64);
      mongo_size += l;
    }
    size += mongo_size;
    let mut mqtt_size = 0;
    if let Some(ReadRecord_Record::Mqtt(ref val)) = self.Record {
      let l = ::pb_jelly::Message::compute_size(val);
      mqtt_size += ::pb_jelly::wire_format::serialized_length(109);
      mqtt_size += ::pb_jelly::varint::serialized_length(l as u64);
      mqtt_size += l;
    }
    size += mqtt_size;
    let mut nats_size = 0;
    if let Some(ReadRecord_Record::Nats(ref val)) = self.Record {
      let l = ::pb_jelly::Message::compute_size(val);
      nats_size += ::pb_jelly::wire_format::serialized_length(110);
      nats_size += ::pb_jelly::varint::serialized_length(l as u64);
      nats_size += l;
    }
    size += nats_size;
    let mut nats_streaming_size = 0;
    if let Some(ReadRecord_Record::NatsStreaming(ref val)) = self.Record {
      let l = ::pb_jelly::Message::compute_size(val);
      nats_streaming_size += ::pb_jelly::wire_format::serialized_length(111);
      nats_streaming_size += ::pb_jelly::varint::serialized_length(l as u64);
      nats_streaming_size += l;
    }
    size += nats_streaming_size;
    let mut nsq_size = 0;
    if let Some(ReadRecord_Record::Nsq(ref val)) = self.Record {
      let l = ::pb_jelly::Message::compute_size(val);
      nsq_size += ::pb_jelly::wire_format::serialized_length(112);
      nsq_size += ::pb_jelly::varint::serialized_length(l as u64);
      nsq_size += l;
    }
    size += nsq_size;
    let mut postgres_size = 0;
    if let Some(ReadRecord_Record::Postgres(ref val)) = self.Record {
      let l = ::pb_jelly::Message::compute_size(val);
      postgres_size += ::pb_jelly::wire_format::serialized_length(113);
      postgres_size += ::pb_jelly::varint::serialized_length(l as u64);
      postgres_size += l;
    }
    size += postgres_size;
    let mut pulsar_size = 0;
    if let Some(ReadRecord_Record::Pulsar(ref val)) = self.Record {
      let l = ::pb_jelly::Message::compute_size(val);
      pulsar_size += ::pb_jelly::wire_format::serialized_length(114);
      pulsar_size += ::pb_jelly::varint::serialized_length(l as u64);
      pulsar_size += l;
    }
    size += pulsar_size;
    let mut rabbit_streams_size = 0;
    if let Some(ReadRecord_Record::RabbitStreams(ref val)) = self.Record {
      let l = ::pb_jelly::Message::compute_size(val);
      rabbit_streams_size += ::pb_jelly::wire_format::serialized_length(115);
      rabbit_streams_size += ::pb_jelly::varint::serialized_length(l as u64);
      rabbit_streams_size += l;
    }
    size += rabbit_streams_size;
    let mut redis_pubsub_size = 0;
    if let Some(ReadRecord_Record::RedisPubsub(ref val)) = self.Record {
      let l = ::pb_jelly::Message::compute_size(val);
      redis_pubsub_size += ::pb_jelly::wire_format::serialized_length(116);
      redis_pubsub_size += ::pb_jelly::varint::serialized_length(l as u64);
      redis_pubsub_size += l;
    }
    size += redis_pubsub_size;
    let mut redis_streams_size = 0;
    if let Some(ReadRecord_Record::RedisStreams(ref val)) = self.Record {
      let l = ::pb_jelly::Message::compute_size(val);
      redis_streams_size += ::pb_jelly::wire_format::serialized_length(117);
      redis_streams_size += ::pb_jelly::varint::serialized_length(l as u64);
      redis_streams_size += l;
    }
    size += redis_streams_size;
    let mut nats_jetstream_size = 0;
    if let Some(ReadRecord_Record::NatsJetstream(ref val)) = self.Record {
      let l = ::pb_jelly::Message::compute_size(val);
      nats_jetstream_size += ::pb_jelly::wire_format::serialized_length(118);
      nats_jetstream_size += ::pb_jelly::varint::serialized_length(l as u64);
      nats_jetstream_size += l;
    }
    size += nats_jetstream_size;
    let mut aws_kinesis_size = 0;
    if let Some(ReadRecord_Record::AwsKinesis(ref val)) = self.Record {
      let l = ::pb_jelly::Message::compute_size(val);
      aws_kinesis_size += ::pb_jelly::wire_format::serialized_length(119);
      aws_kinesis_size += ::pb_jelly::varint::serialized_length(l as u64);
      aws_kinesis_size += l;
    }
    size += aws_kinesis_size;
    let mut memphis_size = 0;
    if let Some(ReadRecord_Record::Memphis(ref val)) = self.Record {
      let l = ::pb_jelly::Message::compute_size(val);
      memphis_size += ::pb_jelly::wire_format::serialized_length(120);
      memphis_size += ::pb_jelly::varint::serialized_length(l as u64);
      memphis_size += l;
    }
    size += memphis_size;
    let mut _raw_size = 0;
    if self._raw != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self._raw;
      let l = ::pb_jelly::Message::compute_size(val);
      _raw_size += ::pb_jelly::wire_format::serialized_length(1000);
      _raw_size += ::pb_jelly::varint::serialized_length(l as u64);
      _raw_size += l;
    }
    size += _raw_size;
    let mut _plumber_id_size = 0;
    if self._plumber_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._plumber_id;
      let l = ::pb_jelly::Message::compute_size(val);
      _plumber_id_size += ::pb_jelly::wire_format::serialized_length(1001);
      _plumber_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      _plumber_id_size += l;
    }
    size += _plumber_id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.message_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.num != <i64 as ::std::default::Default>::default() {
      let val = &self.num;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.metadata {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.received_at_unix_ts_utc != <i64 as ::std::default::Default>::default() {
      let val = &self.received_at_unix_ts_utc;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.payload != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.payload;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ReadRecord_Record::Kafka(ref val)) = self.Record {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ReadRecord_Record::Rabbit(ref val)) = self.Record {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ReadRecord_Record::Activemq(ref val)) = self.Record {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ReadRecord_Record::AwsSqs(ref val)) = self.Record {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ReadRecord_Record::AzureEventHub(ref val)) = self.Record {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ReadRecord_Record::AzureServiceBus(ref val)) = self.Record {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ReadRecord_Record::GcpPubsub(ref val)) = self.Record {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ReadRecord_Record::Kubemq(ref val)) = self.Record {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ReadRecord_Record::Mongo(ref val)) = self.Record {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ReadRecord_Record::Mqtt(ref val)) = self.Record {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ReadRecord_Record::Nats(ref val)) = self.Record {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ReadRecord_Record::NatsStreaming(ref val)) = self.Record {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ReadRecord_Record::Nsq(ref val)) = self.Record {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ReadRecord_Record::Postgres(ref val)) = self.Record {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ReadRecord_Record::Pulsar(ref val)) = self.Record {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ReadRecord_Record::RabbitStreams(ref val)) = self.Record {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ReadRecord_Record::RedisPubsub(ref val)) = self.Record {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ReadRecord_Record::RedisStreams(ref val)) = self.Record {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ReadRecord_Record::NatsJetstream(ref val)) = self.Record {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ReadRecord_Record::AwsKinesis(ref val)) = self.Record {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(ReadRecord_Record::Memphis(ref val)) = self.Record {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._raw != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self._raw;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._plumber_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._plumber_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.message_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message_id;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.num != <i64 as ::std::default::Default>::default() {
      let val = &self.num;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.metadata {
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.received_at_unix_ts_utc != <i64 as ::std::default::Default>::default() {
      let val = &self.received_at_unix_ts_utc;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.payload != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.payload;
      ::pb_jelly::wire_format::write(99, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ReadRecord_Record::Kafka(ref val)) = self.Record {
      ::pb_jelly::wire_format::write(100, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ReadRecord_Record::Rabbit(ref val)) = self.Record {
      ::pb_jelly::wire_format::write(101, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ReadRecord_Record::Activemq(ref val)) = self.Record {
      ::pb_jelly::wire_format::write(102, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ReadRecord_Record::AwsSqs(ref val)) = self.Record {
      ::pb_jelly::wire_format::write(103, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ReadRecord_Record::AzureEventHub(ref val)) = self.Record {
      ::pb_jelly::wire_format::write(104, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ReadRecord_Record::AzureServiceBus(ref val)) = self.Record {
      ::pb_jelly::wire_format::write(105, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ReadRecord_Record::GcpPubsub(ref val)) = self.Record {
      ::pb_jelly::wire_format::write(106, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ReadRecord_Record::Kubemq(ref val)) = self.Record {
      ::pb_jelly::wire_format::write(107, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ReadRecord_Record::Mongo(ref val)) = self.Record {
      ::pb_jelly::wire_format::write(108, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ReadRecord_Record::Mqtt(ref val)) = self.Record {
      ::pb_jelly::wire_format::write(109, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ReadRecord_Record::Nats(ref val)) = self.Record {
      ::pb_jelly::wire_format::write(110, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ReadRecord_Record::NatsStreaming(ref val)) = self.Record {
      ::pb_jelly::wire_format::write(111, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ReadRecord_Record::Nsq(ref val)) = self.Record {
      ::pb_jelly::wire_format::write(112, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ReadRecord_Record::Postgres(ref val)) = self.Record {
      ::pb_jelly::wire_format::write(113, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ReadRecord_Record::Pulsar(ref val)) = self.Record {
      ::pb_jelly::wire_format::write(114, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ReadRecord_Record::RabbitStreams(ref val)) = self.Record {
      ::pb_jelly::wire_format::write(115, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ReadRecord_Record::RedisPubsub(ref val)) = self.Record {
      ::pb_jelly::wire_format::write(116, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ReadRecord_Record::RedisStreams(ref val)) = self.Record {
      ::pb_jelly::wire_format::write(117, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ReadRecord_Record::NatsJetstream(ref val)) = self.Record {
      ::pb_jelly::wire_format::write(118, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ReadRecord_Record::AwsKinesis(ref val)) = self.Record {
      ::pb_jelly::wire_format::write(119, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(ReadRecord_Record::Memphis(ref val)) = self.Record {
      ::pb_jelly::wire_format::write(120, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self._raw != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self._raw;
      ::pb_jelly::wire_format::write(1000, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self._plumber_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._plumber_id;
      ::pb_jelly::wire_format::write(1001, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.message_id = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "ReadRecord", 3)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.num = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadRecord_MetadataEntry = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.metadata.push(val);
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "ReadRecord", 6)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.received_at_unix_ts_utc = val;
        }
        99 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 99)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::vec::Vec<u8> = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.payload = val;
        }
        100 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 100)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_records_kafka::Kafka = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.Record = Some(ReadRecord_Record::Kafka(val));
        }
        101 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 101)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_records_rabbit::Rabbit = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.Record = Some(ReadRecord_Record::Rabbit(val));
        }
        102 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 102)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_records_activemq::ActiveMQ = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.Record = Some(ReadRecord_Record::Activemq(val));
        }
        103 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 103)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_records_aws_sqs::AWSSQS = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.Record = Some(ReadRecord_Record::AwsSqs(val));
        }
        104 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 104)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_records_azure_event_hub::AzureEventHub = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.Record = Some(ReadRecord_Record::AzureEventHub(val));
        }
        105 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 105)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_records_azure_service_bus::AzureServiceBus = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.Record = Some(ReadRecord_Record::AzureServiceBus(val));
        }
        106 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 106)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_records_gcp_pubsub::GCPPubSub = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.Record = Some(ReadRecord_Record::GcpPubsub(val));
        }
        107 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 107)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_records_kubemq::KubeMQ = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.Record = Some(ReadRecord_Record::Kubemq(val));
        }
        108 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 108)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_records_mongo::Mongo = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.Record = Some(ReadRecord_Record::Mongo(val));
        }
        109 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 109)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_records_mqtt::MQTT = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.Record = Some(ReadRecord_Record::Mqtt(val));
        }
        110 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 110)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_records_nats::Nats = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.Record = Some(ReadRecord_Record::Nats(val));
        }
        111 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 111)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_records_nats_streaming::NatsStreaming = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.Record = Some(ReadRecord_Record::NatsStreaming(val));
        }
        112 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 112)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_records_nsq::NSQ = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.Record = Some(ReadRecord_Record::Nsq(val));
        }
        113 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 113)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_records_postgres::Postgres = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.Record = Some(ReadRecord_Record::Postgres(val));
        }
        114 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 114)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_records_pulsar::Pulsar = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.Record = Some(ReadRecord_Record::Pulsar(val));
        }
        115 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 115)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_records_rabbit_streams::RabbitStreams = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.Record = Some(ReadRecord_Record::RabbitStreams(val));
        }
        116 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 116)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_records_redis_pubsub::RedisPubsub = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.Record = Some(ReadRecord_Record::RedisPubsub(val));
        }
        117 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 117)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_records_redis_streams::RedisStreams = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.Record = Some(ReadRecord_Record::RedisStreams(val));
        }
        118 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 118)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_records_nats_jetstream::NatsJetstream = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.Record = Some(ReadRecord_Record::NatsJetstream(val));
        }
        119 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 119)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_records_aws_kinesis::AWSKinesis = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.Record = Some(ReadRecord_Record::AwsKinesis(val));
        }
        120 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 120)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_records_memphis::Memphis = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.Record = Some(ReadRecord_Record::Memphis(val));
        }
        1000 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 1000)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::vec::Vec<u8> = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._raw = val;
        }
        1001 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord", 1001)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._plumber_id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for ReadRecord {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      "Record" => {
        if let Some(ReadRecord_Record::Kafka(ref val)) = self.Record {
          return Some("kafka");
        }
        if let Some(ReadRecord_Record::Rabbit(ref val)) = self.Record {
          return Some("rabbit");
        }
        if let Some(ReadRecord_Record::Activemq(ref val)) = self.Record {
          return Some("activemq");
        }
        if let Some(ReadRecord_Record::AwsSqs(ref val)) = self.Record {
          return Some("aws_sqs");
        }
        if let Some(ReadRecord_Record::AzureEventHub(ref val)) = self.Record {
          return Some("azure_event_hub");
        }
        if let Some(ReadRecord_Record::AzureServiceBus(ref val)) = self.Record {
          return Some("azure_service_bus");
        }
        if let Some(ReadRecord_Record::GcpPubsub(ref val)) = self.Record {
          return Some("gcp_pubsub");
        }
        if let Some(ReadRecord_Record::Kubemq(ref val)) = self.Record {
          return Some("kubemq");
        }
        if let Some(ReadRecord_Record::Mongo(ref val)) = self.Record {
          return Some("mongo");
        }
        if let Some(ReadRecord_Record::Mqtt(ref val)) = self.Record {
          return Some("mqtt");
        }
        if let Some(ReadRecord_Record::Nats(ref val)) = self.Record {
          return Some("nats");
        }
        if let Some(ReadRecord_Record::NatsStreaming(ref val)) = self.Record {
          return Some("nats_streaming");
        }
        if let Some(ReadRecord_Record::Nsq(ref val)) = self.Record {
          return Some("nsq");
        }
        if let Some(ReadRecord_Record::Postgres(ref val)) = self.Record {
          return Some("postgres");
        }
        if let Some(ReadRecord_Record::Pulsar(ref val)) = self.Record {
          return Some("pulsar");
        }
        if let Some(ReadRecord_Record::RabbitStreams(ref val)) = self.Record {
          return Some("rabbit_streams");
        }
        if let Some(ReadRecord_Record::RedisPubsub(ref val)) = self.Record {
          return Some("redis_pubsub");
        }
        if let Some(ReadRecord_Record::RedisStreams(ref val)) = self.Record {
          return Some("redis_streams");
        }
        if let Some(ReadRecord_Record::NatsJetstream(ref val)) = self.Record {
          return Some("nats_jetstream");
        }
        if let Some(ReadRecord_Record::AwsKinesis(ref val)) = self.Record {
          return Some("aws_kinesis");
        }
        if let Some(ReadRecord_Record::Memphis(ref val)) = self.Record {
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
      "message_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.message_id)
      }
      "num" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.num)
      }
      "metadata" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      "received_at_unix_ts_utc" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.received_at_unix_ts_utc)
      }
      "payload" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.payload)
      }
      "kafka" => {
        match self.Record {
          Some(ReadRecord_Record::Kafka(_)) => (),
          _ => {
            self.Record = Some(ReadRecord_Record::Kafka(::std::default::Default::default()));
          },
        }
        if let Some(ReadRecord_Record::Kafka(ref mut val)) = self.Record {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "rabbit" => {
        match self.Record {
          Some(ReadRecord_Record::Rabbit(_)) => (),
          _ => {
            self.Record = Some(ReadRecord_Record::Rabbit(::std::default::Default::default()));
          },
        }
        if let Some(ReadRecord_Record::Rabbit(ref mut val)) = self.Record {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "activemq" => {
        match self.Record {
          Some(ReadRecord_Record::Activemq(_)) => (),
          _ => {
            self.Record = Some(ReadRecord_Record::Activemq(::std::default::Default::default()));
          },
        }
        if let Some(ReadRecord_Record::Activemq(ref mut val)) = self.Record {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "aws_sqs" => {
        match self.Record {
          Some(ReadRecord_Record::AwsSqs(_)) => (),
          _ => {
            self.Record = Some(ReadRecord_Record::AwsSqs(::std::default::Default::default()));
          },
        }
        if let Some(ReadRecord_Record::AwsSqs(ref mut val)) = self.Record {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "azure_event_hub" => {
        match self.Record {
          Some(ReadRecord_Record::AzureEventHub(_)) => (),
          _ => {
            self.Record = Some(ReadRecord_Record::AzureEventHub(::std::default::Default::default()));
          },
        }
        if let Some(ReadRecord_Record::AzureEventHub(ref mut val)) = self.Record {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "azure_service_bus" => {
        match self.Record {
          Some(ReadRecord_Record::AzureServiceBus(_)) => (),
          _ => {
            self.Record = Some(ReadRecord_Record::AzureServiceBus(::std::default::Default::default()));
          },
        }
        if let Some(ReadRecord_Record::AzureServiceBus(ref mut val)) = self.Record {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "gcp_pubsub" => {
        match self.Record {
          Some(ReadRecord_Record::GcpPubsub(_)) => (),
          _ => {
            self.Record = Some(ReadRecord_Record::GcpPubsub(::std::default::Default::default()));
          },
        }
        if let Some(ReadRecord_Record::GcpPubsub(ref mut val)) = self.Record {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "kubemq" => {
        match self.Record {
          Some(ReadRecord_Record::Kubemq(_)) => (),
          _ => {
            self.Record = Some(ReadRecord_Record::Kubemq(::std::default::Default::default()));
          },
        }
        if let Some(ReadRecord_Record::Kubemq(ref mut val)) = self.Record {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "mongo" => {
        match self.Record {
          Some(ReadRecord_Record::Mongo(_)) => (),
          _ => {
            self.Record = Some(ReadRecord_Record::Mongo(::std::default::Default::default()));
          },
        }
        if let Some(ReadRecord_Record::Mongo(ref mut val)) = self.Record {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "mqtt" => {
        match self.Record {
          Some(ReadRecord_Record::Mqtt(_)) => (),
          _ => {
            self.Record = Some(ReadRecord_Record::Mqtt(::std::default::Default::default()));
          },
        }
        if let Some(ReadRecord_Record::Mqtt(ref mut val)) = self.Record {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "nats" => {
        match self.Record {
          Some(ReadRecord_Record::Nats(_)) => (),
          _ => {
            self.Record = Some(ReadRecord_Record::Nats(::std::default::Default::default()));
          },
        }
        if let Some(ReadRecord_Record::Nats(ref mut val)) = self.Record {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "nats_streaming" => {
        match self.Record {
          Some(ReadRecord_Record::NatsStreaming(_)) => (),
          _ => {
            self.Record = Some(ReadRecord_Record::NatsStreaming(::std::default::Default::default()));
          },
        }
        if let Some(ReadRecord_Record::NatsStreaming(ref mut val)) = self.Record {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "nsq" => {
        match self.Record {
          Some(ReadRecord_Record::Nsq(_)) => (),
          _ => {
            self.Record = Some(ReadRecord_Record::Nsq(::std::default::Default::default()));
          },
        }
        if let Some(ReadRecord_Record::Nsq(ref mut val)) = self.Record {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "postgres" => {
        match self.Record {
          Some(ReadRecord_Record::Postgres(_)) => (),
          _ => {
            self.Record = Some(ReadRecord_Record::Postgres(::std::default::Default::default()));
          },
        }
        if let Some(ReadRecord_Record::Postgres(ref mut val)) = self.Record {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "pulsar" => {
        match self.Record {
          Some(ReadRecord_Record::Pulsar(_)) => (),
          _ => {
            self.Record = Some(ReadRecord_Record::Pulsar(::std::default::Default::default()));
          },
        }
        if let Some(ReadRecord_Record::Pulsar(ref mut val)) = self.Record {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "rabbit_streams" => {
        match self.Record {
          Some(ReadRecord_Record::RabbitStreams(_)) => (),
          _ => {
            self.Record = Some(ReadRecord_Record::RabbitStreams(::std::default::Default::default()));
          },
        }
        if let Some(ReadRecord_Record::RabbitStreams(ref mut val)) = self.Record {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "redis_pubsub" => {
        match self.Record {
          Some(ReadRecord_Record::RedisPubsub(_)) => (),
          _ => {
            self.Record = Some(ReadRecord_Record::RedisPubsub(::std::default::Default::default()));
          },
        }
        if let Some(ReadRecord_Record::RedisPubsub(ref mut val)) = self.Record {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "redis_streams" => {
        match self.Record {
          Some(ReadRecord_Record::RedisStreams(_)) => (),
          _ => {
            self.Record = Some(ReadRecord_Record::RedisStreams(::std::default::Default::default()));
          },
        }
        if let Some(ReadRecord_Record::RedisStreams(ref mut val)) = self.Record {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "nats_jetstream" => {
        match self.Record {
          Some(ReadRecord_Record::NatsJetstream(_)) => (),
          _ => {
            self.Record = Some(ReadRecord_Record::NatsJetstream(::std::default::Default::default()));
          },
        }
        if let Some(ReadRecord_Record::NatsJetstream(ref mut val)) = self.Record {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "aws_kinesis" => {
        match self.Record {
          Some(ReadRecord_Record::AwsKinesis(_)) => (),
          _ => {
            self.Record = Some(ReadRecord_Record::AwsKinesis(::std::default::Default::default()));
          },
        }
        if let Some(ReadRecord_Record::AwsKinesis(ref mut val)) = self.Record {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "memphis" => {
        match self.Record {
          Some(ReadRecord_Record::Memphis(_)) => (),
          _ => {
            self.Record = Some(ReadRecord_Record::Memphis(::std::default::Default::default()));
          },
        }
        if let Some(ReadRecord_Record::Memphis(ref mut val)) = self.Record {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "_raw" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._raw)
      }
      "_plumber_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._plumber_id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct ReadRecord_MetadataEntry {
  pub key: ::std::string::String,
  pub value: ::std::string::String,
}
impl ::std::default::Default for ReadRecord_MetadataEntry {
  fn default() -> Self {
    ReadRecord_MetadataEntry {
      key: ::std::default::Default::default(),
      value: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadRecord_MetadataEntry_default: ReadRecord_MetadataEntry = ReadRecord_MetadataEntry::default();
}
impl ::pb_jelly::Message for ReadRecord_MetadataEntry {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadRecord_MetadataEntry",
      full_name: "protos.records.ReadRecord_MetadataEntry",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "key",
          full_name: "protos.records.ReadRecord_MetadataEntry.key",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "value",
          full_name: "protos.records.ReadRecord_MetadataEntry.value",
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
    let mut key_size = 0;
    if self.key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.key;
      let l = ::pb_jelly::Message::compute_size(val);
      key_size += ::pb_jelly::wire_format::serialized_length(1);
      key_size += ::pb_jelly::varint::serialized_length(l as u64);
      key_size += l;
    }
    size += key_size;
    let mut value_size = 0;
    if self.value != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.value;
      let l = ::pb_jelly::Message::compute_size(val);
      value_size += ::pb_jelly::wire_format::serialized_length(2);
      value_size += ::pb_jelly::varint::serialized_length(l as u64);
      value_size += l;
    }
    size += value_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.key;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.value != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.value;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.key;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.value != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.value;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord_MetadataEntry", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.key = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadRecord_MetadataEntry", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.value = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for ReadRecord_MetadataEntry {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "key" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.key)
      }
      "value" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.value)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

/// Used as an arg for write requests (server & cli)
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteRecord {
  /// If encoding options are provided, this value will be updated by plumber
  /// to contain the encoded payload _before_ passing it to the backend.
  /// @gotags: kong:"help='Input string',name=input,xor=input,default"
  pub input: ::std::string::String,
  /// @gotags: kong:"help='Optional metadata a backend may use (key1=value,key2=value,etc)',name=input-metadata"
  pub input_metadata: ::std::vec::Vec<WriteRecord_InputMetadataEntry>,
}
impl ::std::default::Default for WriteRecord {
  fn default() -> Self {
    WriteRecord {
      input: ::std::default::Default::default(),
      input_metadata: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteRecord_default: WriteRecord = WriteRecord::default();
}
impl ::pb_jelly::Message for WriteRecord {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteRecord",
      full_name: "protos.records.WriteRecord",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "input",
          full_name: "protos.records.WriteRecord.input",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "input_metadata",
          full_name: "protos.records.WriteRecord.input_metadata",
          index: 1,
          number: 2,
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
    let mut input_size = 0;
    if self.input != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.input;
      let l = ::pb_jelly::Message::compute_size(val);
      input_size += ::pb_jelly::wire_format::serialized_length(1);
      input_size += ::pb_jelly::varint::serialized_length(l as u64);
      input_size += l;
    }
    size += input_size;
    let mut input_metadata_size = 0;
    for val in &self.input_metadata {
      let l = ::pb_jelly::Message::compute_size(val);
      input_metadata_size += ::pb_jelly::wire_format::serialized_length(2);
      input_metadata_size += ::pb_jelly::varint::serialized_length(l as u64);
      input_metadata_size += l;
    }
    size += input_metadata_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.input != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.input;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.input_metadata {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.input != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.input;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.input_metadata {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteRecord", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.input = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteRecord", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: WriteRecord_InputMetadataEntry = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.input_metadata.push(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteRecord {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "input" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.input)
      }
      "input_metadata" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct WriteRecord_InputMetadataEntry {
  pub key: ::std::string::String,
  pub value: ::std::string::String,
}
impl ::std::default::Default for WriteRecord_InputMetadataEntry {
  fn default() -> Self {
    WriteRecord_InputMetadataEntry {
      key: ::std::default::Default::default(),
      value: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref WriteRecord_InputMetadataEntry_default: WriteRecord_InputMetadataEntry = WriteRecord_InputMetadataEntry::default();
}
impl ::pb_jelly::Message for WriteRecord_InputMetadataEntry {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "WriteRecord_InputMetadataEntry",
      full_name: "protos.records.WriteRecord_InputMetadataEntry",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "key",
          full_name: "protos.records.WriteRecord_InputMetadataEntry.key",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "value",
          full_name: "protos.records.WriteRecord_InputMetadataEntry.value",
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
    let mut key_size = 0;
    if self.key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.key;
      let l = ::pb_jelly::Message::compute_size(val);
      key_size += ::pb_jelly::wire_format::serialized_length(1);
      key_size += ::pb_jelly::varint::serialized_length(l as u64);
      key_size += l;
    }
    size += key_size;
    let mut value_size = 0;
    if self.value != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.value;
      let l = ::pb_jelly::Message::compute_size(val);
      value_size += ::pb_jelly::wire_format::serialized_length(2);
      value_size += ::pb_jelly::varint::serialized_length(l as u64);
      value_size += l;
    }
    size += value_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.key;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.value != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.value;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.key;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.value != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.value;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteRecord_InputMetadataEntry", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.key = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "WriteRecord_InputMetadataEntry", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.value = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for WriteRecord_InputMetadataEntry {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "key" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.key)
      }
      "value" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.value)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

/// Used for communicating errors that occur during a read, write, relay, etc.
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct ErrorRecord {
  pub occurred_at_unix_ts_utc: i64,
  pub error: ::std::string::String,
  pub metadata: ::std::vec::Vec<ErrorRecord_MetadataEntry>,
}
impl ::std::default::Default for ErrorRecord {
  fn default() -> Self {
    ErrorRecord {
      occurred_at_unix_ts_utc: ::std::default::Default::default(),
      error: ::std::default::Default::default(),
      metadata: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ErrorRecord_default: ErrorRecord = ErrorRecord::default();
}
impl ::pb_jelly::Message for ErrorRecord {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ErrorRecord",
      full_name: "protos.records.ErrorRecord",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "occurred_at_unix_ts_utc",
          full_name: "protos.records.ErrorRecord.occurred_at_unix_ts_utc",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "error",
          full_name: "protos.records.ErrorRecord.error",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "metadata",
          full_name: "protos.records.ErrorRecord.metadata",
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
    let mut occurred_at_unix_ts_utc_size = 0;
    if self.occurred_at_unix_ts_utc != <i64 as ::std::default::Default>::default() {
      let val = &self.occurred_at_unix_ts_utc;
      let l = ::pb_jelly::Message::compute_size(val);
      occurred_at_unix_ts_utc_size += ::pb_jelly::wire_format::serialized_length(1);
      occurred_at_unix_ts_utc_size += l;
    }
    size += occurred_at_unix_ts_utc_size;
    let mut error_size = 0;
    if self.error != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.error;
      let l = ::pb_jelly::Message::compute_size(val);
      error_size += ::pb_jelly::wire_format::serialized_length(2);
      error_size += ::pb_jelly::varint::serialized_length(l as u64);
      error_size += l;
    }
    size += error_size;
    let mut metadata_size = 0;
    for val in &self.metadata {
      let l = ::pb_jelly::Message::compute_size(val);
      metadata_size += ::pb_jelly::wire_format::serialized_length(3);
      metadata_size += ::pb_jelly::varint::serialized_length(l as u64);
      metadata_size += l;
    }
    size += metadata_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.occurred_at_unix_ts_utc != <i64 as ::std::default::Default>::default() {
      let val = &self.occurred_at_unix_ts_utc;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.error != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.error;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.metadata {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.occurred_at_unix_ts_utc != <i64 as ::std::default::Default>::default() {
      let val = &self.occurred_at_unix_ts_utc;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.error != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.error;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.metadata {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "ErrorRecord", 1)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.occurred_at_unix_ts_utc = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ErrorRecord", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.error = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ErrorRecord", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ErrorRecord_MetadataEntry = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.metadata.push(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for ErrorRecord {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "occurred_at_unix_ts_utc" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.occurred_at_unix_ts_utc)
      }
      "error" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.error)
      }
      "metadata" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct ErrorRecord_MetadataEntry {
  pub key: ::std::string::String,
  pub value: ::std::vec::Vec<u8>,
}
impl ::std::default::Default for ErrorRecord_MetadataEntry {
  fn default() -> Self {
    ErrorRecord_MetadataEntry {
      key: ::std::default::Default::default(),
      value: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ErrorRecord_MetadataEntry_default: ErrorRecord_MetadataEntry = ErrorRecord_MetadataEntry::default();
}
impl ::pb_jelly::Message for ErrorRecord_MetadataEntry {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ErrorRecord_MetadataEntry",
      full_name: "protos.records.ErrorRecord_MetadataEntry",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "key",
          full_name: "protos.records.ErrorRecord_MetadataEntry.key",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "value",
          full_name: "protos.records.ErrorRecord_MetadataEntry.value",
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
    let mut key_size = 0;
    if self.key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.key;
      let l = ::pb_jelly::Message::compute_size(val);
      key_size += ::pb_jelly::wire_format::serialized_length(1);
      key_size += ::pb_jelly::varint::serialized_length(l as u64);
      key_size += l;
    }
    size += key_size;
    let mut value_size = 0;
    if self.value != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.value;
      let l = ::pb_jelly::Message::compute_size(val);
      value_size += ::pb_jelly::wire_format::serialized_length(2);
      value_size += ::pb_jelly::varint::serialized_length(l as u64);
      value_size += l;
    }
    size += value_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.key;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.value != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.value;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.key;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.value != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.value;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ErrorRecord_MetadataEntry", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.key = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ErrorRecord_MetadataEntry", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::vec::Vec<u8> = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.value = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for ErrorRecord_MetadataEntry {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "key" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.key)
      }
      "value" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.value)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

