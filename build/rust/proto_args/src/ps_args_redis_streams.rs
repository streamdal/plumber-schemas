// @generated, do not edit
#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[repr(transparent)]
pub struct OffsetStart(i32);
impl OffsetStart {
  pub const LATEST: OffsetStart = OffsetStart(0);
  pub const OLDEST: OffsetStart = OffsetStart(1);
  pub const KNOWN_VARIANTS: [OffsetStart; 2] = [OffsetStart::LATEST, OffsetStart::OLDEST];
  pub const fn value(self) -> i32 {
    self.0
  }
  pub fn into_known(self) -> ::std::option::Option<OffsetStart_Closed> {
    match self {
      OffsetStart::LATEST => Some(OffsetStart_Closed::LATEST),
      OffsetStart::OLDEST => Some(OffsetStart_Closed::OLDEST),
      _ => None,
    }
  }
}
impl ::std::default::Default for OffsetStart {
  fn default() -> Self {
    OffsetStart::LATEST
  }
}
impl From<OffsetStart> for i32 {
  fn from(v: OffsetStart) -> i32 {
    v.0
  }
}
impl From<i32> for OffsetStart {
  fn from(v: i32) -> OffsetStart {
    OffsetStart(v)
  }
}
impl From<OffsetStart_Closed> for OffsetStart {
  fn from(v: OffsetStart_Closed) -> OffsetStart {
    OffsetStart(v as i32)
  }
}
impl ::pb_jelly::ProtoEnum for OffsetStart {
}
impl ::pb_jelly::OpenProtoEnum for OffsetStart {
  fn name(self) -> ::std::option::Option<&'static str> {
    match self {
      OffsetStart::LATEST => Some("LATEST"),
      OffsetStart::OLDEST => Some("OLDEST"),
      _ => None,
    }
  }
  fn is_known(self) -> bool {
    match self {
      OffsetStart::LATEST => true,
      OffsetStart::OLDEST => true,
      _ => false,
    }
  }
}
impl ::std::fmt::Debug for OffsetStart {
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
pub enum OffsetStart_Closed {
  LATEST = 0,
  OLDEST = 1,
}
impl OffsetStart_Closed {
  pub const KNOWN_VARIANTS: [OffsetStart_Closed; 2] = [OffsetStart_Closed::LATEST, OffsetStart_Closed::OLDEST];
}
impl ::std::default::Default for OffsetStart_Closed {
  fn default() -> Self {
    OffsetStart_Closed::LATEST
  }
}
impl From<OffsetStart_Closed> for i32 {
  fn from(v: OffsetStart_Closed) -> i32 {
    match v {
      OffsetStart_Closed::LATEST => 0,
      OffsetStart_Closed::OLDEST => 1,
    }
  }
}
impl ::std::convert::TryFrom<i32> for OffsetStart_Closed {
  type Error = i32;
  fn try_from(v: i32) -> ::std::result::Result<Self, i32> {
    match v {
      0 => Ok(OffsetStart_Closed::LATEST),
      1 => Ok(OffsetStart_Closed::OLDEST),
      _ => Err(v),
    }
  }
}
impl ::pb_jelly::ProtoEnum for OffsetStart_Closed {
}
impl ::pb_jelly::ClosedProtoEnum for OffsetStart_Closed {
  fn name(self) -> &'static str {
    match self {
      OffsetStart_Closed::LATEST => "LATEST",
      OffsetStart_Closed::OLDEST => "OLDEST",
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RedisStreamsConn {
  /// @gotags: kong:"help='Address of redis server',default=localhost:6379,required,env='PLUMBER_RELAY_REDIS_STREAMS_ADDRESS'"
  pub address: ::std::string::String,
  /// @gotags: kong:"help='Username (redis >= v6.0.0)',env='PLUMBER_RELAY_REDIS_STREAMS_USERNAME'"
  pub username: ::std::string::String,
  /// @gotags: kong:"help='Password (redis >= v6.0.0)',env='PLUMBER_RELAY_REDIS_STREAMS_PASSWORD'"
  pub password: ::std::string::String,
  /// @gotags: kong:"help='Database (0-16)',env='PLUMBER_RELAY_REDIS_PUBSUB_DATABASE'"
  pub database: u32,
}
impl ::std::default::Default for RedisStreamsConn {
  fn default() -> Self {
    RedisStreamsConn {
      address: ::std::default::Default::default(),
      username: ::std::default::Default::default(),
      password: ::std::default::Default::default(),
      database: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RedisStreamsConn_default: RedisStreamsConn = RedisStreamsConn::default();
}
impl ::pb_jelly::Message for RedisStreamsConn {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RedisStreamsConn",
      full_name: "protos.args.RedisStreamsConn",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "address",
          full_name: "protos.args.RedisStreamsConn.address",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "username",
          full_name: "protos.args.RedisStreamsConn.username",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "password",
          full_name: "protos.args.RedisStreamsConn.password",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "database",
          full_name: "protos.args.RedisStreamsConn.database",
          index: 3,
          number: 4,
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
    let mut address_size = 0;
    if self.address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.address;
      let l = ::pb_jelly::Message::compute_size(val);
      address_size += ::pb_jelly::wire_format::serialized_length(1);
      address_size += ::pb_jelly::varint::serialized_length(l as u64);
      address_size += l;
    }
    size += address_size;
    let mut username_size = 0;
    if self.username != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.username;
      let l = ::pb_jelly::Message::compute_size(val);
      username_size += ::pb_jelly::wire_format::serialized_length(2);
      username_size += ::pb_jelly::varint::serialized_length(l as u64);
      username_size += l;
    }
    size += username_size;
    let mut password_size = 0;
    if self.password != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.password;
      let l = ::pb_jelly::Message::compute_size(val);
      password_size += ::pb_jelly::wire_format::serialized_length(3);
      password_size += ::pb_jelly::varint::serialized_length(l as u64);
      password_size += l;
    }
    size += password_size;
    let mut database_size = 0;
    if self.database != <u32 as ::std::default::Default>::default() {
      let val = &self.database;
      let l = ::pb_jelly::Message::compute_size(val);
      database_size += ::pb_jelly::wire_format::serialized_length(4);
      database_size += l;
    }
    size += database_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.address;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.username != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.username;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.password != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.password;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.database != <u32 as ::std::default::Default>::default() {
      let val = &self.database;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.address;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.username != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.username;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.password != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.password;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.database != <u32 as ::std::default::Default>::default() {
      let val = &self.database;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RedisStreamsConn", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.address = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RedisStreamsConn", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.username = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RedisStreamsConn", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.password = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RedisStreamsConn", 4)?;
          let mut val: u32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.database = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for RedisStreamsConn {
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
        ::pb_jelly::reflection::FieldMut::Value(&mut self.address)
      }
      "username" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.username)
      }
      "password" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.password)
      }
      "database" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.database)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Copy, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct CreateConsumerConfig {
  /// @gotags: kong:"help='Create the streams if creating a new consumer group',env='PLUMBER_RELAY_REDIS_STREAMS_CREATE_STREAMS'"
  pub create_streams: bool,
  /// @gotags: kong:"help='Recreate this consumer group if it does not exist',env='PLUMBER_RELAY_REDIS_STREAMS_RECREATE_CONSUMER_GROUP'"
  pub recreate_consumer_group: bool,
  /// @gotags: kong:"help='What offset to start reading at (options: latest oldest)',default=latest,required,env='PLUMBER_RELAY_REDIS_STREAMS_START_ID',type=pbenum,pbenum_lowercase"
  pub offset_start: OffsetStart,
}
impl ::std::default::Default for CreateConsumerConfig {
  fn default() -> Self {
    CreateConsumerConfig {
      create_streams: ::std::default::Default::default(),
      recreate_consumer_group: ::std::default::Default::default(),
      offset_start: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref CreateConsumerConfig_default: CreateConsumerConfig = CreateConsumerConfig::default();
}
impl ::pb_jelly::Message for CreateConsumerConfig {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "CreateConsumerConfig",
      full_name: "protos.args.CreateConsumerConfig",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "create_streams",
          full_name: "protos.args.CreateConsumerConfig.create_streams",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "recreate_consumer_group",
          full_name: "protos.args.CreateConsumerConfig.recreate_consumer_group",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "offset_start",
          full_name: "protos.args.CreateConsumerConfig.offset_start",
          index: 2,
          number: 3,
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
    let mut create_streams_size = 0;
    if self.create_streams != <bool as ::std::default::Default>::default() {
      let val = &self.create_streams;
      let l = ::pb_jelly::Message::compute_size(val);
      create_streams_size += ::pb_jelly::wire_format::serialized_length(1);
      create_streams_size += l;
    }
    size += create_streams_size;
    let mut recreate_consumer_group_size = 0;
    if self.recreate_consumer_group != <bool as ::std::default::Default>::default() {
      let val = &self.recreate_consumer_group;
      let l = ::pb_jelly::Message::compute_size(val);
      recreate_consumer_group_size += ::pb_jelly::wire_format::serialized_length(2);
      recreate_consumer_group_size += l;
    }
    size += recreate_consumer_group_size;
    let mut offset_start_size = 0;
    if self.offset_start != <OffsetStart as ::std::default::Default>::default() {
      let val = &self.offset_start;
      let l = ::pb_jelly::Message::compute_size(val);
      offset_start_size += ::pb_jelly::wire_format::serialized_length(3);
      offset_start_size += l;
    }
    size += offset_start_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.create_streams != <bool as ::std::default::Default>::default() {
      let val = &self.create_streams;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.recreate_consumer_group != <bool as ::std::default::Default>::default() {
      let val = &self.recreate_consumer_group;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.offset_start != <OffsetStart as ::std::default::Default>::default() {
      let val = &self.offset_start;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.create_streams != <bool as ::std::default::Default>::default() {
      let val = &self.create_streams;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.recreate_consumer_group != <bool as ::std::default::Default>::default() {
      let val = &self.recreate_consumer_group;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.offset_start != <OffsetStart as ::std::default::Default>::default() {
      let val = &self.offset_start;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "CreateConsumerConfig", 1)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.create_streams = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "CreateConsumerConfig", 2)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.recreate_consumer_group = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "CreateConsumerConfig", 3)?;
          let mut val: OffsetStart = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.offset_start = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for CreateConsumerConfig {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "create_streams" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.create_streams)
      }
      "recreate_consumer_group" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.recreate_consumer_group)
      }
      "offset_start" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.offset_start)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RedisStreamsReadArgs {
  /// @gotags: kong:"help='Streams to read from',required,env='PLUMBER_RELAY_REDIS_STREAMS_STREAMS'"
  pub streams: ::std::vec::Vec<::std::string::String>,
  /// @gotags: kong:"help='Consumer group name',env='PLUMBER_RELAY_REDIS_STREAMS_CONSUMER_GROUP',default=plumber"
  pub consumer_group: ::std::string::String,
  /// @gotags: kong:"help='Consumer name',env='PLUMBER_RELAY_REDIS_STREAMS_CONSUMER_NAME',default=plumber-consumer-1"
  pub consumer_name: ::std::string::String,
  /// @gotags: kong:"help='Number of records to read from stream(s) per read',env='PLUMBER_RELAY_REDIS_STREAMS_COUNT',default=10"
  pub count: u32,
  /// @gotags: kong:"embed"
  pub create_consumer_config: ::std::option::Option<CreateConsumerConfig>,
}
impl ::std::default::Default for RedisStreamsReadArgs {
  fn default() -> Self {
    RedisStreamsReadArgs {
      streams: ::std::default::Default::default(),
      consumer_group: ::std::default::Default::default(),
      consumer_name: ::std::default::Default::default(),
      count: ::std::default::Default::default(),
      create_consumer_config: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RedisStreamsReadArgs_default: RedisStreamsReadArgs = RedisStreamsReadArgs::default();
}
impl ::pb_jelly::Message for RedisStreamsReadArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RedisStreamsReadArgs",
      full_name: "protos.args.RedisStreamsReadArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "streams",
          full_name: "protos.args.RedisStreamsReadArgs.streams",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Repeated,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "consumer_group",
          full_name: "protos.args.RedisStreamsReadArgs.consumer_group",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "consumer_name",
          full_name: "protos.args.RedisStreamsReadArgs.consumer_name",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "count",
          full_name: "protos.args.RedisStreamsReadArgs.count",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "create_consumer_config",
          full_name: "protos.args.RedisStreamsReadArgs.create_consumer_config",
          index: 4,
          number: 5,
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
    let mut streams_size = 0;
    for val in &self.streams {
      let l = ::pb_jelly::Message::compute_size(val);
      streams_size += ::pb_jelly::wire_format::serialized_length(1);
      streams_size += ::pb_jelly::varint::serialized_length(l as u64);
      streams_size += l;
    }
    size += streams_size;
    let mut consumer_group_size = 0;
    if self.consumer_group != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_group;
      let l = ::pb_jelly::Message::compute_size(val);
      consumer_group_size += ::pb_jelly::wire_format::serialized_length(2);
      consumer_group_size += ::pb_jelly::varint::serialized_length(l as u64);
      consumer_group_size += l;
    }
    size += consumer_group_size;
    let mut consumer_name_size = 0;
    if self.consumer_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_name;
      let l = ::pb_jelly::Message::compute_size(val);
      consumer_name_size += ::pb_jelly::wire_format::serialized_length(3);
      consumer_name_size += ::pb_jelly::varint::serialized_length(l as u64);
      consumer_name_size += l;
    }
    size += consumer_name_size;
    let mut count_size = 0;
    if self.count != <u32 as ::std::default::Default>::default() {
      let val = &self.count;
      let l = ::pb_jelly::Message::compute_size(val);
      count_size += ::pb_jelly::wire_format::serialized_length(4);
      count_size += l;
    }
    size += count_size;
    let mut create_consumer_config_size = 0;
    for val in &self.create_consumer_config {
      let l = ::pb_jelly::Message::compute_size(val);
      create_consumer_config_size += ::pb_jelly::wire_format::serialized_length(5);
      create_consumer_config_size += ::pb_jelly::varint::serialized_length(l as u64);
      create_consumer_config_size += l;
    }
    size += create_consumer_config_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.streams {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.consumer_group != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_group;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.consumer_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.count != <u32 as ::std::default::Default>::default() {
      let val = &self.count;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.create_consumer_config {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.streams {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.consumer_group != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_group;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.consumer_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_name;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.count != <u32 as ::std::default::Default>::default() {
      let val = &self.count;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.create_consumer_config {
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RedisStreamsReadArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.streams.push(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RedisStreamsReadArgs", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.consumer_group = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RedisStreamsReadArgs", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.consumer_name = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RedisStreamsReadArgs", 4)?;
          let mut val: u32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.count = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RedisStreamsReadArgs", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: CreateConsumerConfig = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.create_consumer_config = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for RedisStreamsReadArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "streams" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      "consumer_group" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.consumer_group)
      }
      "consumer_name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.consumer_name)
      }
      "count" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.count)
      }
      "create_consumer_config" => {
        ::pb_jelly::reflection::FieldMut::Value(self.create_consumer_config.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RedisStreamsWriteArgs {
  /// @gotags: kong:"help='What redis ID to use for input data (* = auto-generate)',default='*'"
  pub write_id: ::std::string::String,
  /// @gotags: kong:"help='Streams to write to'"
  pub streams: ::std::vec::Vec<::std::string::String>,
  /// @gotags: kong:"help='Key name to write input data to'"
  pub key: ::std::string::String,
}
impl ::std::default::Default for RedisStreamsWriteArgs {
  fn default() -> Self {
    RedisStreamsWriteArgs {
      write_id: ::std::default::Default::default(),
      streams: ::std::default::Default::default(),
      key: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RedisStreamsWriteArgs_default: RedisStreamsWriteArgs = RedisStreamsWriteArgs::default();
}
impl ::pb_jelly::Message for RedisStreamsWriteArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RedisStreamsWriteArgs",
      full_name: "protos.args.RedisStreamsWriteArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "write_id",
          full_name: "protos.args.RedisStreamsWriteArgs.write_id",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "streams",
          full_name: "protos.args.RedisStreamsWriteArgs.streams",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Repeated,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "key",
          full_name: "protos.args.RedisStreamsWriteArgs.key",
          index: 2,
          number: 3,
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
    let mut write_id_size = 0;
    if self.write_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.write_id;
      let l = ::pb_jelly::Message::compute_size(val);
      write_id_size += ::pb_jelly::wire_format::serialized_length(1);
      write_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      write_id_size += l;
    }
    size += write_id_size;
    let mut streams_size = 0;
    for val in &self.streams {
      let l = ::pb_jelly::Message::compute_size(val);
      streams_size += ::pb_jelly::wire_format::serialized_length(2);
      streams_size += ::pb_jelly::varint::serialized_length(l as u64);
      streams_size += l;
    }
    size += streams_size;
    let mut key_size = 0;
    if self.key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.key;
      let l = ::pb_jelly::Message::compute_size(val);
      key_size += ::pb_jelly::wire_format::serialized_length(3);
      key_size += ::pb_jelly::varint::serialized_length(l as u64);
      key_size += l;
    }
    size += key_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.write_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.write_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.streams {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.key;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.write_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.write_id;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.streams {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.key;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RedisStreamsWriteArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.write_id = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RedisStreamsWriteArgs", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.streams.push(val);
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RedisStreamsWriteArgs", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.key = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for RedisStreamsWriteArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "write_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.write_id)
      }
      "streams" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      "key" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.key)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

