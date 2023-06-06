// @generated, do not edit
#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[repr(transparent)]
pub struct SASLType(i32);
impl SASLType {
  pub const NONE: SASLType = SASLType(0);
  pub const PLAIN: SASLType = SASLType(1);
  pub const SCRAM: SASLType = SASLType(2);
  pub const KNOWN_VARIANTS: [SASLType; 3] = [SASLType::NONE, SASLType::PLAIN, SASLType::SCRAM];
  pub const fn value(self) -> i32 {
    self.0
  }
  pub fn into_known(self) -> ::std::option::Option<SASLType_Closed> {
    match self {
      SASLType::NONE => Some(SASLType_Closed::NONE),
      SASLType::PLAIN => Some(SASLType_Closed::PLAIN),
      SASLType::SCRAM => Some(SASLType_Closed::SCRAM),
      _ => None,
    }
  }
}
impl ::std::default::Default for SASLType {
  fn default() -> Self {
    SASLType::NONE
  }
}
impl From<SASLType> for i32 {
  fn from(v: SASLType) -> i32 {
    v.0
  }
}
impl From<i32> for SASLType {
  fn from(v: i32) -> SASLType {
    SASLType(v)
  }
}
impl From<SASLType_Closed> for SASLType {
  fn from(v: SASLType_Closed) -> SASLType {
    SASLType(v as i32)
  }
}
impl ::pb_jelly::ProtoEnum for SASLType {
}
impl ::pb_jelly::OpenProtoEnum for SASLType {
  fn name(self) -> ::std::option::Option<&'static str> {
    match self {
      SASLType::NONE => Some("NONE"),
      SASLType::PLAIN => Some("PLAIN"),
      SASLType::SCRAM => Some("SCRAM"),
      _ => None,
    }
  }
  fn is_known(self) -> bool {
    match self {
      SASLType::NONE => true,
      SASLType::PLAIN => true,
      SASLType::SCRAM => true,
      _ => false,
    }
  }
}
impl ::std::fmt::Debug for SASLType {
  fn fmt(&self, f: &mut ::std::fmt::Formatter<'_>) -> ::std::fmt::Result {
    use ::pb_jelly::OpenProtoEnum;
    match self.name() {
      Some(s) => write!(f, "{}", s),
      None => write!(f, "Unknown({})", self.0),
    }
  }
}
#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Debug, Hash)]
#[repr(i32)]
pub enum SASLType_Closed {
  NONE = 0,
  PLAIN = 1,
  SCRAM = 2,
}
impl SASLType_Closed {
  pub const KNOWN_VARIANTS: [SASLType_Closed; 3] = [SASLType_Closed::NONE, SASLType_Closed::PLAIN, SASLType_Closed::SCRAM];
}
impl ::std::default::Default for SASLType_Closed {
  fn default() -> Self {
    SASLType_Closed::NONE
  }
}
impl From<SASLType_Closed> for i32 {
  fn from(v: SASLType_Closed) -> i32 {
    match v {
      SASLType_Closed::NONE => 0,
      SASLType_Closed::PLAIN => 1,
      SASLType_Closed::SCRAM => 2,
    }
  }
}
impl ::std::convert::TryFrom<i32> for SASLType_Closed {
  type Error = i32;
  fn try_from(v: i32) -> ::std::result::Result<Self, i32> {
    match v {
      0 => Ok(SASLType_Closed::NONE),
      1 => Ok(SASLType_Closed::PLAIN),
      2 => Ok(SASLType_Closed::SCRAM),
      _ => Err(v),
    }
  }
}
impl ::pb_jelly::ProtoEnum for SASLType_Closed {
}
impl ::pb_jelly::ClosedProtoEnum for SASLType_Closed {
  fn name(self) -> &'static str {
    match self {
      SASLType_Closed::NONE => "NONE",
      SASLType_Closed::PLAIN => "PLAIN",
      SASLType_Closed::SCRAM => "SCRAM",
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct KafkaConn {
  /// @gotags: kong:"help='Kafka broker address (you may specify this flag multiple times)',env=PLUMBER_RELAY_KAFKA_ADDRESS,default='localhost:9092',required"
  pub address: ::std::vec::Vec<::std::string::String>,
  /// @gotags: kong:"help='Connect timeout',env=PLUMBER_RELAY_TIMEOUT_SECONDS,default=10"
  pub timeout_seconds: i32,
  /// @gotags: kong:"help='Enable TLS usage',env=PLUMBER_RELAY_USE_TLS"
  pub use_tls: bool,
  /// @gotags: kong:"help='Allow insecure TLS usage',env=PLUMBER_RELAY_KAFKA_INSECURE_TLS"
  pub tls_skip_verify: bool,
  /// @gotags: kong:"help='SASL authentication type (options: none plain scram)',env=PLUMBER_RELAY_KAFKA_SASL_TYPE,type=pbenum,pbenum_lowercase,default=none"
  pub sasl_type: SASLType,
  /// @gotags: kong:"help='SASL Username',env=PLUMBER_RELAY_KAFKA_USERNAME"
  pub sasl_username: ::std::string::String,
  /// Required if sasl_type is not NONE
  /// @gotags: kong:"help='SASL Password. You will be prompted for the password if omitted',env=PLUMBER_RELAY_KAFKA_PASSWORD"
  pub sasl_password: ::std::string::String,
}
impl ::std::default::Default for KafkaConn {
  fn default() -> Self {
    KafkaConn {
      address: ::std::default::Default::default(),
      timeout_seconds: ::std::default::Default::default(),
      use_tls: ::std::default::Default::default(),
      tls_skip_verify: ::std::default::Default::default(),
      sasl_type: ::std::default::Default::default(),
      sasl_username: ::std::default::Default::default(),
      sasl_password: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref KafkaConn_default: KafkaConn = KafkaConn::default();
}
impl ::pb_jelly::Message for KafkaConn {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "KafkaConn",
      full_name: "protos.args.KafkaConn",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "address",
          full_name: "protos.args.KafkaConn.address",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Repeated,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "timeout_seconds",
          full_name: "protos.args.KafkaConn.timeout_seconds",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "use_tls",
          full_name: "protos.args.KafkaConn.use_tls",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_skip_verify",
          full_name: "protos.args.KafkaConn.tls_skip_verify",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "sasl_type",
          full_name: "protos.args.KafkaConn.sasl_type",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "sasl_username",
          full_name: "protos.args.KafkaConn.sasl_username",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "sasl_password",
          full_name: "protos.args.KafkaConn.sasl_password",
          index: 6,
          number: 7,
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
    let mut address_size = 0;
    for val in &self.address {
      let l = ::pb_jelly::Message::compute_size(val);
      address_size += ::pb_jelly::wire_format::serialized_length(1);
      address_size += ::pb_jelly::varint::serialized_length(l as u64);
      address_size += l;
    }
    size += address_size;
    let mut timeout_seconds_size = 0;
    if self.timeout_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.timeout_seconds;
      let l = ::pb_jelly::Message::compute_size(val);
      timeout_seconds_size += ::pb_jelly::wire_format::serialized_length(2);
      timeout_seconds_size += l;
    }
    size += timeout_seconds_size;
    let mut use_tls_size = 0;
    if self.use_tls != <bool as ::std::default::Default>::default() {
      let val = &self.use_tls;
      let l = ::pb_jelly::Message::compute_size(val);
      use_tls_size += ::pb_jelly::wire_format::serialized_length(3);
      use_tls_size += l;
    }
    size += use_tls_size;
    let mut tls_skip_verify_size = 0;
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_skip_verify_size += ::pb_jelly::wire_format::serialized_length(4);
      tls_skip_verify_size += l;
    }
    size += tls_skip_verify_size;
    let mut sasl_type_size = 0;
    if self.sasl_type != <SASLType as ::std::default::Default>::default() {
      let val = &self.sasl_type;
      let l = ::pb_jelly::Message::compute_size(val);
      sasl_type_size += ::pb_jelly::wire_format::serialized_length(5);
      sasl_type_size += l;
    }
    size += sasl_type_size;
    let mut sasl_username_size = 0;
    if self.sasl_username != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.sasl_username;
      let l = ::pb_jelly::Message::compute_size(val);
      sasl_username_size += ::pb_jelly::wire_format::serialized_length(6);
      sasl_username_size += ::pb_jelly::varint::serialized_length(l as u64);
      sasl_username_size += l;
    }
    size += sasl_username_size;
    let mut sasl_password_size = 0;
    if self.sasl_password != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.sasl_password;
      let l = ::pb_jelly::Message::compute_size(val);
      sasl_password_size += ::pb_jelly::wire_format::serialized_length(7);
      sasl_password_size += ::pb_jelly::varint::serialized_length(l as u64);
      sasl_password_size += l;
    }
    size += sasl_password_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.address {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.timeout_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.timeout_seconds;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.use_tls != <bool as ::std::default::Default>::default() {
      let val = &self.use_tls;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.sasl_type != <SASLType as ::std::default::Default>::default() {
      let val = &self.sasl_type;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.sasl_username != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.sasl_username;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.sasl_password != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.sasl_password;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.address {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.timeout_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.timeout_seconds;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.use_tls != <bool as ::std::default::Default>::default() {
      let val = &self.use_tls;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.sasl_type != <SASLType as ::std::default::Default>::default() {
      let val = &self.sasl_type;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.sasl_username != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.sasl_username;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.sasl_password != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.sasl_password;
      ::pb_jelly::wire_format::write(7, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "KafkaConn", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.address.push(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KafkaConn", 2)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.timeout_seconds = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KafkaConn", 3)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.use_tls = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KafkaConn", 4)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.tls_skip_verify = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KafkaConn", 5)?;
          let mut val: SASLType = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.sasl_type = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "KafkaConn", 6)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.sasl_username = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "KafkaConn", 7)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.sasl_password = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for KafkaConn {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "address" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      "timeout_seconds" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.timeout_seconds)
      }
      "use_tls" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.use_tls)
      }
      "tls_skip_verify" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.tls_skip_verify)
      }
      "sasl_type" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.sasl_type)
      }
      "sasl_username" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.sasl_username)
      }
      "sasl_password" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.sasl_password)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct KafkaReadArgs {
  /// @gotags: kong:"help='Topic(s) to read from',required"
  pub topics: ::std::vec::Vec<::std::string::String>,
  /// @gotags: kong:"help='Specify what offset the consumer should read from (only works if --use-consumer-group is false)',default=0"
  pub read_offset: i64,
  /// @gotags: kong:"help='Whether plumber should use a consumer group',default=true"
  pub use_consumer_group: bool,
  /// @gotags: kong:"help='Specify a specific group-id to use when reading from kafka',default=plumber"
  pub consumer_group_name: ::std::string::String,
  /// @gotags: kong:"help='How long to wait for new data when reading batches of messages',default=1"
  pub max_wait_seconds: i32,
  /// @gotags: kong:"help='Minimum number of bytes to fetch in a single kafka request (throughput optimization)',default=1"
  pub min_bytes: i32,
  /// @gotags: kong:"help='Maximum number of bytes to fetch in a single kafka request (throughput optimization)',default=1"
  pub max_bytes: i32,
  /// @gotags: kong:"help='How often to commit offsets to broker (0 = synchronous)',default=5"
  pub commit_interval_seconds: i32,
  /// @gotags: kong:"help='How long a coordinator will wait for member joins as part of a rebalance',default=0"
  pub rebalance_timeout_seconds: i32,
  /// @gotags: kong:"help='Internal library queue capacity (throughput optimization)',default=1"
  pub queue_capacity: i32,
  /// @gotags: kong:"help='Display consumer offset stats during read'"
  pub include_offset_info: bool,
  /// @gotags: kong:"help='Only lookup consumer group lag',group=lag"
  pub lag: bool,
  /// @gotags: kong:"help='What consumer group to lookup lag for (required if --lag is set)',group=lag"
  pub lag_consumer_group: ::std::string::String,
}
impl ::std::default::Default for KafkaReadArgs {
  fn default() -> Self {
    KafkaReadArgs {
      topics: ::std::default::Default::default(),
      read_offset: ::std::default::Default::default(),
      use_consumer_group: ::std::default::Default::default(),
      consumer_group_name: ::std::default::Default::default(),
      max_wait_seconds: ::std::default::Default::default(),
      min_bytes: ::std::default::Default::default(),
      max_bytes: ::std::default::Default::default(),
      commit_interval_seconds: ::std::default::Default::default(),
      rebalance_timeout_seconds: ::std::default::Default::default(),
      queue_capacity: ::std::default::Default::default(),
      include_offset_info: ::std::default::Default::default(),
      lag: ::std::default::Default::default(),
      lag_consumer_group: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref KafkaReadArgs_default: KafkaReadArgs = KafkaReadArgs::default();
}
impl ::pb_jelly::Message for KafkaReadArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "KafkaReadArgs",
      full_name: "protos.args.KafkaReadArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "topics",
          full_name: "protos.args.KafkaReadArgs.topics",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Repeated,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "read_offset",
          full_name: "protos.args.KafkaReadArgs.read_offset",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "use_consumer_group",
          full_name: "protos.args.KafkaReadArgs.use_consumer_group",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "consumer_group_name",
          full_name: "protos.args.KafkaReadArgs.consumer_group_name",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "max_wait_seconds",
          full_name: "protos.args.KafkaReadArgs.max_wait_seconds",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "min_bytes",
          full_name: "protos.args.KafkaReadArgs.min_bytes",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "max_bytes",
          full_name: "protos.args.KafkaReadArgs.max_bytes",
          index: 6,
          number: 7,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "commit_interval_seconds",
          full_name: "protos.args.KafkaReadArgs.commit_interval_seconds",
          index: 7,
          number: 8,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "rebalance_timeout_seconds",
          full_name: "protos.args.KafkaReadArgs.rebalance_timeout_seconds",
          index: 8,
          number: 9,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "queue_capacity",
          full_name: "protos.args.KafkaReadArgs.queue_capacity",
          index: 9,
          number: 10,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "include_offset_info",
          full_name: "protos.args.KafkaReadArgs.include_offset_info",
          index: 10,
          number: 11,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "lag",
          full_name: "protos.args.KafkaReadArgs.lag",
          index: 11,
          number: 12,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "lag_consumer_group",
          full_name: "protos.args.KafkaReadArgs.lag_consumer_group",
          index: 12,
          number: 13,
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
    let mut topics_size = 0;
    for val in &self.topics {
      let l = ::pb_jelly::Message::compute_size(val);
      topics_size += ::pb_jelly::wire_format::serialized_length(1);
      topics_size += ::pb_jelly::varint::serialized_length(l as u64);
      topics_size += l;
    }
    size += topics_size;
    let mut read_offset_size = 0;
    if self.read_offset != <i64 as ::std::default::Default>::default() {
      let val = &self.read_offset;
      let l = ::pb_jelly::Message::compute_size(val);
      read_offset_size += ::pb_jelly::wire_format::serialized_length(2);
      read_offset_size += l;
    }
    size += read_offset_size;
    let mut use_consumer_group_size = 0;
    if self.use_consumer_group != <bool as ::std::default::Default>::default() {
      let val = &self.use_consumer_group;
      let l = ::pb_jelly::Message::compute_size(val);
      use_consumer_group_size += ::pb_jelly::wire_format::serialized_length(3);
      use_consumer_group_size += l;
    }
    size += use_consumer_group_size;
    let mut consumer_group_name_size = 0;
    if self.consumer_group_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_group_name;
      let l = ::pb_jelly::Message::compute_size(val);
      consumer_group_name_size += ::pb_jelly::wire_format::serialized_length(4);
      consumer_group_name_size += ::pb_jelly::varint::serialized_length(l as u64);
      consumer_group_name_size += l;
    }
    size += consumer_group_name_size;
    let mut max_wait_seconds_size = 0;
    if self.max_wait_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.max_wait_seconds;
      let l = ::pb_jelly::Message::compute_size(val);
      max_wait_seconds_size += ::pb_jelly::wire_format::serialized_length(5);
      max_wait_seconds_size += l;
    }
    size += max_wait_seconds_size;
    let mut min_bytes_size = 0;
    if self.min_bytes != <i32 as ::std::default::Default>::default() {
      let val = &self.min_bytes;
      let l = ::pb_jelly::Message::compute_size(val);
      min_bytes_size += ::pb_jelly::wire_format::serialized_length(6);
      min_bytes_size += l;
    }
    size += min_bytes_size;
    let mut max_bytes_size = 0;
    if self.max_bytes != <i32 as ::std::default::Default>::default() {
      let val = &self.max_bytes;
      let l = ::pb_jelly::Message::compute_size(val);
      max_bytes_size += ::pb_jelly::wire_format::serialized_length(7);
      max_bytes_size += l;
    }
    size += max_bytes_size;
    let mut commit_interval_seconds_size = 0;
    if self.commit_interval_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.commit_interval_seconds;
      let l = ::pb_jelly::Message::compute_size(val);
      commit_interval_seconds_size += ::pb_jelly::wire_format::serialized_length(8);
      commit_interval_seconds_size += l;
    }
    size += commit_interval_seconds_size;
    let mut rebalance_timeout_seconds_size = 0;
    if self.rebalance_timeout_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.rebalance_timeout_seconds;
      let l = ::pb_jelly::Message::compute_size(val);
      rebalance_timeout_seconds_size += ::pb_jelly::wire_format::serialized_length(9);
      rebalance_timeout_seconds_size += l;
    }
    size += rebalance_timeout_seconds_size;
    let mut queue_capacity_size = 0;
    if self.queue_capacity != <i32 as ::std::default::Default>::default() {
      let val = &self.queue_capacity;
      let l = ::pb_jelly::Message::compute_size(val);
      queue_capacity_size += ::pb_jelly::wire_format::serialized_length(10);
      queue_capacity_size += l;
    }
    size += queue_capacity_size;
    let mut include_offset_info_size = 0;
    if self.include_offset_info != <bool as ::std::default::Default>::default() {
      let val = &self.include_offset_info;
      let l = ::pb_jelly::Message::compute_size(val);
      include_offset_info_size += ::pb_jelly::wire_format::serialized_length(11);
      include_offset_info_size += l;
    }
    size += include_offset_info_size;
    let mut lag_size = 0;
    if self.lag != <bool as ::std::default::Default>::default() {
      let val = &self.lag;
      let l = ::pb_jelly::Message::compute_size(val);
      lag_size += ::pb_jelly::wire_format::serialized_length(12);
      lag_size += l;
    }
    size += lag_size;
    let mut lag_consumer_group_size = 0;
    if self.lag_consumer_group != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.lag_consumer_group;
      let l = ::pb_jelly::Message::compute_size(val);
      lag_consumer_group_size += ::pb_jelly::wire_format::serialized_length(13);
      lag_consumer_group_size += ::pb_jelly::varint::serialized_length(l as u64);
      lag_consumer_group_size += l;
    }
    size += lag_consumer_group_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.topics {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.read_offset != <i64 as ::std::default::Default>::default() {
      let val = &self.read_offset;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.use_consumer_group != <bool as ::std::default::Default>::default() {
      let val = &self.use_consumer_group;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.consumer_group_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_group_name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.max_wait_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.max_wait_seconds;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.min_bytes != <i32 as ::std::default::Default>::default() {
      let val = &self.min_bytes;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.max_bytes != <i32 as ::std::default::Default>::default() {
      let val = &self.max_bytes;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.commit_interval_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.commit_interval_seconds;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.rebalance_timeout_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.rebalance_timeout_seconds;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.queue_capacity != <i32 as ::std::default::Default>::default() {
      let val = &self.queue_capacity;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.include_offset_info != <bool as ::std::default::Default>::default() {
      let val = &self.include_offset_info;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.lag != <bool as ::std::default::Default>::default() {
      let val = &self.lag;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.lag_consumer_group != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.lag_consumer_group;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.topics {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.read_offset != <i64 as ::std::default::Default>::default() {
      let val = &self.read_offset;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.use_consumer_group != <bool as ::std::default::Default>::default() {
      let val = &self.use_consumer_group;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.consumer_group_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_group_name;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.max_wait_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.max_wait_seconds;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.min_bytes != <i32 as ::std::default::Default>::default() {
      let val = &self.min_bytes;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.max_bytes != <i32 as ::std::default::Default>::default() {
      let val = &self.max_bytes;
      ::pb_jelly::wire_format::write(7, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.commit_interval_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.commit_interval_seconds;
      ::pb_jelly::wire_format::write(8, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.rebalance_timeout_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.rebalance_timeout_seconds;
      ::pb_jelly::wire_format::write(9, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.queue_capacity != <i32 as ::std::default::Default>::default() {
      let val = &self.queue_capacity;
      ::pb_jelly::wire_format::write(10, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.include_offset_info != <bool as ::std::default::Default>::default() {
      let val = &self.include_offset_info;
      ::pb_jelly::wire_format::write(11, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.lag != <bool as ::std::default::Default>::default() {
      let val = &self.lag;
      ::pb_jelly::wire_format::write(12, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.lag_consumer_group != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.lag_consumer_group;
      ::pb_jelly::wire_format::write(13, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "KafkaReadArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.topics.push(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KafkaReadArgs", 2)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.read_offset = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KafkaReadArgs", 3)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.use_consumer_group = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "KafkaReadArgs", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.consumer_group_name = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KafkaReadArgs", 5)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.max_wait_seconds = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KafkaReadArgs", 6)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.min_bytes = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KafkaReadArgs", 7)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.max_bytes = val;
        }
        8 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KafkaReadArgs", 8)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.commit_interval_seconds = val;
        }
        9 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KafkaReadArgs", 9)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.rebalance_timeout_seconds = val;
        }
        10 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KafkaReadArgs", 10)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.queue_capacity = val;
        }
        11 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KafkaReadArgs", 11)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.include_offset_info = val;
        }
        12 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KafkaReadArgs", 12)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.lag = val;
        }
        13 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "KafkaReadArgs", 13)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.lag_consumer_group = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for KafkaReadArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "topics" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      "read_offset" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.read_offset)
      }
      "use_consumer_group" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.use_consumer_group)
      }
      "consumer_group_name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.consumer_group_name)
      }
      "max_wait_seconds" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.max_wait_seconds)
      }
      "min_bytes" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.min_bytes)
      }
      "max_bytes" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.max_bytes)
      }
      "commit_interval_seconds" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.commit_interval_seconds)
      }
      "rebalance_timeout_seconds" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.rebalance_timeout_seconds)
      }
      "queue_capacity" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.queue_capacity)
      }
      "include_offset_info" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.include_offset_info)
      }
      "lag" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.lag)
      }
      "lag_consumer_group" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.lag_consumer_group)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct KafkaWriteArgs {
  /// @gotags: kong:"help='Key to write to kafka (optional)'"
  pub key: ::std::string::String,
  /// @gotags: kong:"help='Add one or more headers (optional; repeat flags to specify multiple)'"
  pub headers: ::std::vec::Vec<KafkaWriteArgs_HeadersEntry>,
  /// @gotags: kong:"help='Topic(s) to write to',required"
  pub topics: ::std::vec::Vec<::std::string::String>,
}
impl ::std::default::Default for KafkaWriteArgs {
  fn default() -> Self {
    KafkaWriteArgs {
      key: ::std::default::Default::default(),
      headers: ::std::default::Default::default(),
      topics: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref KafkaWriteArgs_default: KafkaWriteArgs = KafkaWriteArgs::default();
}
impl ::pb_jelly::Message for KafkaWriteArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "KafkaWriteArgs",
      full_name: "protos.args.KafkaWriteArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "key",
          full_name: "protos.args.KafkaWriteArgs.key",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "headers",
          full_name: "protos.args.KafkaWriteArgs.headers",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Repeated,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "topics",
          full_name: "protos.args.KafkaWriteArgs.topics",
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
    let mut key_size = 0;
    if self.key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.key;
      let l = ::pb_jelly::Message::compute_size(val);
      key_size += ::pb_jelly::wire_format::serialized_length(1);
      key_size += ::pb_jelly::varint::serialized_length(l as u64);
      key_size += l;
    }
    size += key_size;
    let mut headers_size = 0;
    for val in &self.headers {
      let l = ::pb_jelly::Message::compute_size(val);
      headers_size += ::pb_jelly::wire_format::serialized_length(2);
      headers_size += ::pb_jelly::varint::serialized_length(l as u64);
      headers_size += l;
    }
    size += headers_size;
    let mut topics_size = 0;
    for val in &self.topics {
      let l = ::pb_jelly::Message::compute_size(val);
      topics_size += ::pb_jelly::wire_format::serialized_length(3);
      topics_size += ::pb_jelly::varint::serialized_length(l as u64);
      topics_size += l;
    }
    size += topics_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.key;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.headers {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.topics {
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
    for val in &self.headers {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.topics {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "KafkaWriteArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.key = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "KafkaWriteArgs", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: KafkaWriteArgs_HeadersEntry = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.headers.push(val);
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "KafkaWriteArgs", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.topics.push(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for KafkaWriteArgs {
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
      "headers" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      "topics" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct KafkaWriteArgs_HeadersEntry {
  pub key: ::std::string::String,
  pub value: ::std::string::String,
}
impl ::std::default::Default for KafkaWriteArgs_HeadersEntry {
  fn default() -> Self {
    KafkaWriteArgs_HeadersEntry {
      key: ::std::default::Default::default(),
      value: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref KafkaWriteArgs_HeadersEntry_default: KafkaWriteArgs_HeadersEntry = KafkaWriteArgs_HeadersEntry::default();
}
impl ::pb_jelly::Message for KafkaWriteArgs_HeadersEntry {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "KafkaWriteArgs_HeadersEntry",
      full_name: "protos.args.KafkaWriteArgs_HeadersEntry",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "key",
          full_name: "protos.args.KafkaWriteArgs_HeadersEntry.key",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "value",
          full_name: "protos.args.KafkaWriteArgs_HeadersEntry.value",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "KafkaWriteArgs_HeadersEntry", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.key = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "KafkaWriteArgs_HeadersEntry", 2)?;
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
impl ::pb_jelly::Reflection for KafkaWriteArgs_HeadersEntry {
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

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct KafkaRelayArgs {
  /// @gotags: kong:"help='Topic(s) to read, write or get lag stats for',env=PLUMBER_RELAY_KAFKA_TOPIC,required"
  pub topics: ::std::vec::Vec<::std::string::String>,
  /// @gotags: kong:"help='Specify what offset the consumer should read from (only works if --use-consumer-group is false)',env=PLUMBER_RELAY_KAFKA_READ_OFFSET,default=0"
  pub read_offset: i64,
  /// @gotags: kong:"help='Whether plumber should use a consumer group',env=PLUMBER_RELAY_KAFKA_USE_CONSUMER_GROUP,default=true"
  pub use_consumer_group: bool,
  /// @gotags: kong:"help='Specify a specific group-id to use when reading from kafka',env=PLUMBER_RELAY_KAFKA_GROUP_ID,default=plumber"
  pub consumer_group_name: ::std::string::String,
  /// @gotags: kong:"help='How long to wait for new data when reading batches of messages',env=PLUMBER_RELAY_KAFKA_MAX_WAIT,default=5"
  pub max_wait_seconds: i32,
  /// @gotags: kong:"help='Minimum number of bytes to fetch in a single kafka request (throughput optimization)',env=PLUMBER_RELAY_KAFKA_MIN_BYTES,default=1048576"
  pub min_bytes: i32,
  /// @gotags: kong:"help='Maximum number of bytes to fetch in a single kafka request (throughput optimization)',env=PLUMBER_RELAY_KAFKA_MAX_BYTES,default=1048576"
  pub max_bytes: i32,
  /// @gotags: kong:"help='How often to commit offsets to broker (0 = synchronous)',env=PLUMBER_RELAY_KAFKA_COMMIT_INTERVAL,default=5"
  pub commit_interval_seconds: i32,
  /// @gotags: kong:"help='How long a coordinator will wait for member joins as part of a rebalance',env=PLUMBER_RELAY_KAFKA_REBALANCE_TIMEOUT,default=5"
  pub rebalance_timeout_seconds: i32,
  /// @gotags: kong:"help='Internal library queue capacity (throughput optimization)',env=PLUMBER_RELAY_KAFKA_QUEUE_CAPACITY,default=1000"
  pub queue_capacity: i32,
}
impl ::std::default::Default for KafkaRelayArgs {
  fn default() -> Self {
    KafkaRelayArgs {
      topics: ::std::default::Default::default(),
      read_offset: ::std::default::Default::default(),
      use_consumer_group: ::std::default::Default::default(),
      consumer_group_name: ::std::default::Default::default(),
      max_wait_seconds: ::std::default::Default::default(),
      min_bytes: ::std::default::Default::default(),
      max_bytes: ::std::default::Default::default(),
      commit_interval_seconds: ::std::default::Default::default(),
      rebalance_timeout_seconds: ::std::default::Default::default(),
      queue_capacity: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref KafkaRelayArgs_default: KafkaRelayArgs = KafkaRelayArgs::default();
}
impl ::pb_jelly::Message for KafkaRelayArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "KafkaRelayArgs",
      full_name: "protos.args.KafkaRelayArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "topics",
          full_name: "protos.args.KafkaRelayArgs.topics",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Repeated,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "read_offset",
          full_name: "protos.args.KafkaRelayArgs.read_offset",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "use_consumer_group",
          full_name: "protos.args.KafkaRelayArgs.use_consumer_group",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "consumer_group_name",
          full_name: "protos.args.KafkaRelayArgs.consumer_group_name",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "max_wait_seconds",
          full_name: "protos.args.KafkaRelayArgs.max_wait_seconds",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "min_bytes",
          full_name: "protos.args.KafkaRelayArgs.min_bytes",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "max_bytes",
          full_name: "protos.args.KafkaRelayArgs.max_bytes",
          index: 6,
          number: 7,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "commit_interval_seconds",
          full_name: "protos.args.KafkaRelayArgs.commit_interval_seconds",
          index: 7,
          number: 8,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "rebalance_timeout_seconds",
          full_name: "protos.args.KafkaRelayArgs.rebalance_timeout_seconds",
          index: 8,
          number: 9,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "queue_capacity",
          full_name: "protos.args.KafkaRelayArgs.queue_capacity",
          index: 9,
          number: 10,
          typ: ::pb_jelly::wire_format::Type::Varint,
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
    let mut topics_size = 0;
    for val in &self.topics {
      let l = ::pb_jelly::Message::compute_size(val);
      topics_size += ::pb_jelly::wire_format::serialized_length(1);
      topics_size += ::pb_jelly::varint::serialized_length(l as u64);
      topics_size += l;
    }
    size += topics_size;
    let mut read_offset_size = 0;
    if self.read_offset != <i64 as ::std::default::Default>::default() {
      let val = &self.read_offset;
      let l = ::pb_jelly::Message::compute_size(val);
      read_offset_size += ::pb_jelly::wire_format::serialized_length(2);
      read_offset_size += l;
    }
    size += read_offset_size;
    let mut use_consumer_group_size = 0;
    if self.use_consumer_group != <bool as ::std::default::Default>::default() {
      let val = &self.use_consumer_group;
      let l = ::pb_jelly::Message::compute_size(val);
      use_consumer_group_size += ::pb_jelly::wire_format::serialized_length(3);
      use_consumer_group_size += l;
    }
    size += use_consumer_group_size;
    let mut consumer_group_name_size = 0;
    if self.consumer_group_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_group_name;
      let l = ::pb_jelly::Message::compute_size(val);
      consumer_group_name_size += ::pb_jelly::wire_format::serialized_length(4);
      consumer_group_name_size += ::pb_jelly::varint::serialized_length(l as u64);
      consumer_group_name_size += l;
    }
    size += consumer_group_name_size;
    let mut max_wait_seconds_size = 0;
    if self.max_wait_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.max_wait_seconds;
      let l = ::pb_jelly::Message::compute_size(val);
      max_wait_seconds_size += ::pb_jelly::wire_format::serialized_length(5);
      max_wait_seconds_size += l;
    }
    size += max_wait_seconds_size;
    let mut min_bytes_size = 0;
    if self.min_bytes != <i32 as ::std::default::Default>::default() {
      let val = &self.min_bytes;
      let l = ::pb_jelly::Message::compute_size(val);
      min_bytes_size += ::pb_jelly::wire_format::serialized_length(6);
      min_bytes_size += l;
    }
    size += min_bytes_size;
    let mut max_bytes_size = 0;
    if self.max_bytes != <i32 as ::std::default::Default>::default() {
      let val = &self.max_bytes;
      let l = ::pb_jelly::Message::compute_size(val);
      max_bytes_size += ::pb_jelly::wire_format::serialized_length(7);
      max_bytes_size += l;
    }
    size += max_bytes_size;
    let mut commit_interval_seconds_size = 0;
    if self.commit_interval_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.commit_interval_seconds;
      let l = ::pb_jelly::Message::compute_size(val);
      commit_interval_seconds_size += ::pb_jelly::wire_format::serialized_length(8);
      commit_interval_seconds_size += l;
    }
    size += commit_interval_seconds_size;
    let mut rebalance_timeout_seconds_size = 0;
    if self.rebalance_timeout_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.rebalance_timeout_seconds;
      let l = ::pb_jelly::Message::compute_size(val);
      rebalance_timeout_seconds_size += ::pb_jelly::wire_format::serialized_length(9);
      rebalance_timeout_seconds_size += l;
    }
    size += rebalance_timeout_seconds_size;
    let mut queue_capacity_size = 0;
    if self.queue_capacity != <i32 as ::std::default::Default>::default() {
      let val = &self.queue_capacity;
      let l = ::pb_jelly::Message::compute_size(val);
      queue_capacity_size += ::pb_jelly::wire_format::serialized_length(10);
      queue_capacity_size += l;
    }
    size += queue_capacity_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.topics {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.read_offset != <i64 as ::std::default::Default>::default() {
      let val = &self.read_offset;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.use_consumer_group != <bool as ::std::default::Default>::default() {
      let val = &self.use_consumer_group;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.consumer_group_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_group_name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.max_wait_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.max_wait_seconds;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.min_bytes != <i32 as ::std::default::Default>::default() {
      let val = &self.min_bytes;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.max_bytes != <i32 as ::std::default::Default>::default() {
      let val = &self.max_bytes;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.commit_interval_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.commit_interval_seconds;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.rebalance_timeout_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.rebalance_timeout_seconds;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.queue_capacity != <i32 as ::std::default::Default>::default() {
      let val = &self.queue_capacity;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.topics {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.read_offset != <i64 as ::std::default::Default>::default() {
      let val = &self.read_offset;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.use_consumer_group != <bool as ::std::default::Default>::default() {
      let val = &self.use_consumer_group;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.consumer_group_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_group_name;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.max_wait_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.max_wait_seconds;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.min_bytes != <i32 as ::std::default::Default>::default() {
      let val = &self.min_bytes;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.max_bytes != <i32 as ::std::default::Default>::default() {
      let val = &self.max_bytes;
      ::pb_jelly::wire_format::write(7, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.commit_interval_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.commit_interval_seconds;
      ::pb_jelly::wire_format::write(8, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.rebalance_timeout_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.rebalance_timeout_seconds;
      ::pb_jelly::wire_format::write(9, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.queue_capacity != <i32 as ::std::default::Default>::default() {
      let val = &self.queue_capacity;
      ::pb_jelly::wire_format::write(10, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "KafkaRelayArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.topics.push(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KafkaRelayArgs", 2)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.read_offset = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KafkaRelayArgs", 3)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.use_consumer_group = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "KafkaRelayArgs", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.consumer_group_name = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KafkaRelayArgs", 5)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.max_wait_seconds = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KafkaRelayArgs", 6)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.min_bytes = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KafkaRelayArgs", 7)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.max_bytes = val;
        }
        8 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KafkaRelayArgs", 8)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.commit_interval_seconds = val;
        }
        9 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KafkaRelayArgs", 9)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.rebalance_timeout_seconds = val;
        }
        10 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KafkaRelayArgs", 10)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.queue_capacity = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for KafkaRelayArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "topics" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      "read_offset" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.read_offset)
      }
      "use_consumer_group" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.use_consumer_group)
      }
      "consumer_group_name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.consumer_group_name)
      }
      "max_wait_seconds" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.max_wait_seconds)
      }
      "min_bytes" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.min_bytes)
      }
      "max_bytes" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.max_bytes)
      }
      "commit_interval_seconds" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.commit_interval_seconds)
      }
      "rebalance_timeout_seconds" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.rebalance_timeout_seconds)
      }
      "queue_capacity" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.queue_capacity)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

