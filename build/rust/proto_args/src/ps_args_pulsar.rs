// @generated, do not edit
#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[repr(transparent)]
pub struct SubscriptionType(i32);
impl SubscriptionType {
  pub const SHARED: SubscriptionType = SubscriptionType(0);
  pub const EXCLUSIVE: SubscriptionType = SubscriptionType(1);
  pub const FAILOVER: SubscriptionType = SubscriptionType(2);
  pub const KEYSHARED: SubscriptionType = SubscriptionType(3);
  pub const KNOWN_VARIANTS: [SubscriptionType; 4] = [SubscriptionType::SHARED, SubscriptionType::EXCLUSIVE, SubscriptionType::FAILOVER, SubscriptionType::KEYSHARED];
  pub const fn value(self) -> i32 {
    self.0
  }
  pub fn into_known(self) -> ::std::option::Option<SubscriptionType_Closed> {
    match self {
      SubscriptionType::SHARED => Some(SubscriptionType_Closed::SHARED),
      SubscriptionType::EXCLUSIVE => Some(SubscriptionType_Closed::EXCLUSIVE),
      SubscriptionType::FAILOVER => Some(SubscriptionType_Closed::FAILOVER),
      SubscriptionType::KEYSHARED => Some(SubscriptionType_Closed::KEYSHARED),
      _ => None,
    }
  }
}
impl ::std::default::Default for SubscriptionType {
  fn default() -> Self {
    SubscriptionType::SHARED
  }
}
impl From<SubscriptionType> for i32 {
  fn from(v: SubscriptionType) -> i32 {
    v.0
  }
}
impl From<i32> for SubscriptionType {
  fn from(v: i32) -> SubscriptionType {
    SubscriptionType(v)
  }
}
impl From<SubscriptionType_Closed> for SubscriptionType {
  fn from(v: SubscriptionType_Closed) -> SubscriptionType {
    SubscriptionType(v as i32)
  }
}
impl ::pb_jelly::ProtoEnum for SubscriptionType {
}
impl ::pb_jelly::OpenProtoEnum for SubscriptionType {
  fn name(self) -> ::std::option::Option<&'static str> {
    match self {
      SubscriptionType::SHARED => Some("SHARED"),
      SubscriptionType::EXCLUSIVE => Some("EXCLUSIVE"),
      SubscriptionType::FAILOVER => Some("FAILOVER"),
      SubscriptionType::KEYSHARED => Some("KEYSHARED"),
      _ => None,
    }
  }
  fn is_known(self) -> bool {
    match self {
      SubscriptionType::SHARED => true,
      SubscriptionType::EXCLUSIVE => true,
      SubscriptionType::FAILOVER => true,
      SubscriptionType::KEYSHARED => true,
      _ => false,
    }
  }
}
impl ::std::fmt::Debug for SubscriptionType {
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
pub enum SubscriptionType_Closed {
  SHARED = 0,
  EXCLUSIVE = 1,
  FAILOVER = 2,
  KEYSHARED = 3,
}
impl SubscriptionType_Closed {
  pub const KNOWN_VARIANTS: [SubscriptionType_Closed; 4] = [SubscriptionType_Closed::SHARED, SubscriptionType_Closed::EXCLUSIVE, SubscriptionType_Closed::FAILOVER, SubscriptionType_Closed::KEYSHARED];
}
impl ::std::default::Default for SubscriptionType_Closed {
  fn default() -> Self {
    SubscriptionType_Closed::SHARED
  }
}
impl From<SubscriptionType_Closed> for i32 {
  fn from(v: SubscriptionType_Closed) -> i32 {
    match v {
      SubscriptionType_Closed::SHARED => 0,
      SubscriptionType_Closed::EXCLUSIVE => 1,
      SubscriptionType_Closed::FAILOVER => 2,
      SubscriptionType_Closed::KEYSHARED => 3,
    }
  }
}
impl ::std::convert::TryFrom<i32> for SubscriptionType_Closed {
  type Error = i32;
  fn try_from(v: i32) -> ::std::result::Result<Self, i32> {
    match v {
      0 => Ok(SubscriptionType_Closed::SHARED),
      1 => Ok(SubscriptionType_Closed::EXCLUSIVE),
      2 => Ok(SubscriptionType_Closed::FAILOVER),
      3 => Ok(SubscriptionType_Closed::KEYSHARED),
      _ => Err(v),
    }
  }
}
impl ::pb_jelly::ProtoEnum for SubscriptionType_Closed {
}
impl ::pb_jelly::ClosedProtoEnum for SubscriptionType_Closed {
  fn name(self) -> &'static str {
    match self {
      SubscriptionType_Closed::SHARED => "SHARED",
      SubscriptionType_Closed::EXCLUSIVE => "EXCLUSIVE",
      SubscriptionType_Closed::FAILOVER => "FAILOVER",
      SubscriptionType_Closed::KEYSHARED => "KEYSHARED",
    }
  }
}

#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[repr(transparent)]
pub struct SubscriptionInitialPosition(i32);
impl SubscriptionInitialPosition {
  pub const PULSAR_LATEST: SubscriptionInitialPosition = SubscriptionInitialPosition(0);
  pub const PULSAR_EARLIEST: SubscriptionInitialPosition = SubscriptionInitialPosition(1);
  pub const KNOWN_VARIANTS: [SubscriptionInitialPosition; 2] = [SubscriptionInitialPosition::PULSAR_LATEST, SubscriptionInitialPosition::PULSAR_EARLIEST];
  pub const fn value(self) -> i32 {
    self.0
  }
  pub fn into_known(self) -> ::std::option::Option<SubscriptionInitialPosition_Closed> {
    match self {
      SubscriptionInitialPosition::PULSAR_LATEST => Some(SubscriptionInitialPosition_Closed::PULSAR_LATEST),
      SubscriptionInitialPosition::PULSAR_EARLIEST => Some(SubscriptionInitialPosition_Closed::PULSAR_EARLIEST),
      _ => None,
    }
  }
}
impl ::std::default::Default for SubscriptionInitialPosition {
  fn default() -> Self {
    SubscriptionInitialPosition::PULSAR_LATEST
  }
}
impl From<SubscriptionInitialPosition> for i32 {
  fn from(v: SubscriptionInitialPosition) -> i32 {
    v.0
  }
}
impl From<i32> for SubscriptionInitialPosition {
  fn from(v: i32) -> SubscriptionInitialPosition {
    SubscriptionInitialPosition(v)
  }
}
impl From<SubscriptionInitialPosition_Closed> for SubscriptionInitialPosition {
  fn from(v: SubscriptionInitialPosition_Closed) -> SubscriptionInitialPosition {
    SubscriptionInitialPosition(v as i32)
  }
}
impl ::pb_jelly::ProtoEnum for SubscriptionInitialPosition {
}
impl ::pb_jelly::OpenProtoEnum for SubscriptionInitialPosition {
  fn name(self) -> ::std::option::Option<&'static str> {
    match self {
      SubscriptionInitialPosition::PULSAR_LATEST => Some("PULSAR_LATEST"),
      SubscriptionInitialPosition::PULSAR_EARLIEST => Some("PULSAR_EARLIEST"),
      _ => None,
    }
  }
  fn is_known(self) -> bool {
    match self {
      SubscriptionInitialPosition::PULSAR_LATEST => true,
      SubscriptionInitialPosition::PULSAR_EARLIEST => true,
      _ => false,
    }
  }
}
impl ::std::fmt::Debug for SubscriptionInitialPosition {
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
pub enum SubscriptionInitialPosition_Closed {
  PULSAR_LATEST = 0,
  PULSAR_EARLIEST = 1,
}
impl SubscriptionInitialPosition_Closed {
  pub const KNOWN_VARIANTS: [SubscriptionInitialPosition_Closed; 2] = [SubscriptionInitialPosition_Closed::PULSAR_LATEST, SubscriptionInitialPosition_Closed::PULSAR_EARLIEST];
}
impl ::std::default::Default for SubscriptionInitialPosition_Closed {
  fn default() -> Self {
    SubscriptionInitialPosition_Closed::PULSAR_LATEST
  }
}
impl From<SubscriptionInitialPosition_Closed> for i32 {
  fn from(v: SubscriptionInitialPosition_Closed) -> i32 {
    match v {
      SubscriptionInitialPosition_Closed::PULSAR_LATEST => 0,
      SubscriptionInitialPosition_Closed::PULSAR_EARLIEST => 1,
    }
  }
}
impl ::std::convert::TryFrom<i32> for SubscriptionInitialPosition_Closed {
  type Error = i32;
  fn try_from(v: i32) -> ::std::result::Result<Self, i32> {
    match v {
      0 => Ok(SubscriptionInitialPosition_Closed::PULSAR_LATEST),
      1 => Ok(SubscriptionInitialPosition_Closed::PULSAR_EARLIEST),
      _ => Err(v),
    }
  }
}
impl ::pb_jelly::ProtoEnum for SubscriptionInitialPosition_Closed {
}
impl ::pb_jelly::ClosedProtoEnum for SubscriptionInitialPosition_Closed {
  fn name(self) -> &'static str {
    match self {
      SubscriptionInitialPosition_Closed::PULSAR_LATEST => "PULSAR_LATEST",
      SubscriptionInitialPosition_Closed::PULSAR_EARLIEST => "PULSAR_EARLIEST",
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct PulsarConn {
  /// @gotags: kong:"help='Full DSN to connect to Pulsar',default='pulsar://localhost:6650',required"
  pub dsn: ::std::string::String,
  /// @gotags: kong:"help='Connection timeout',default=10"
  pub connect_timeout_seconds: u32,
  /// @gotags: kong:"help='Whether to verify server certificate'"
  pub tls_skip_verify: bool,
  /// @gotags: kong:"help='TLS client certificate file'"
  pub tls_client_cert: ::std::string::String,
  /// @gotags: kong:"help='TLS client key file'"
  pub tls_client_key: ::std::string::String,
  /// @gotags: kong:"help='Authentication token file'"
  pub token: ::std::string::String,
  /// @gotags: kong:"help='Listener name'"
  pub listener_name: ::std::string::String,
}
impl ::std::default::Default for PulsarConn {
  fn default() -> Self {
    PulsarConn {
      dsn: ::std::default::Default::default(),
      connect_timeout_seconds: ::std::default::Default::default(),
      tls_skip_verify: ::std::default::Default::default(),
      tls_client_cert: ::std::default::Default::default(),
      tls_client_key: ::std::default::Default::default(),
      token: ::std::default::Default::default(),
      listener_name: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref PulsarConn_default: PulsarConn = PulsarConn::default();
}
impl ::pb_jelly::Message for PulsarConn {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "PulsarConn",
      full_name: "protos.args.PulsarConn",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "dsn",
          full_name: "protos.args.PulsarConn.dsn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "connect_timeout_seconds",
          full_name: "protos.args.PulsarConn.connect_timeout_seconds",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_skip_verify",
          full_name: "protos.args.PulsarConn.tls_skip_verify",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_client_cert",
          full_name: "protos.args.PulsarConn.tls_client_cert",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_client_key",
          full_name: "protos.args.PulsarConn.tls_client_key",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "token",
          full_name: "protos.args.PulsarConn.token",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "listener_name",
          full_name: "protos.args.PulsarConn.listener_name",
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
    let mut dsn_size = 0;
    if self.dsn != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.dsn;
      let l = ::pb_jelly::Message::compute_size(val);
      dsn_size += ::pb_jelly::wire_format::serialized_length(1);
      dsn_size += ::pb_jelly::varint::serialized_length(l as u64);
      dsn_size += l;
    }
    size += dsn_size;
    let mut connect_timeout_seconds_size = 0;
    if self.connect_timeout_seconds != <u32 as ::std::default::Default>::default() {
      let val = &self.connect_timeout_seconds;
      let l = ::pb_jelly::Message::compute_size(val);
      connect_timeout_seconds_size += ::pb_jelly::wire_format::serialized_length(2);
      connect_timeout_seconds_size += l;
    }
    size += connect_timeout_seconds_size;
    let mut tls_skip_verify_size = 0;
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_skip_verify_size += ::pb_jelly::wire_format::serialized_length(3);
      tls_skip_verify_size += l;
    }
    size += tls_skip_verify_size;
    let mut tls_client_cert_size = 0;
    if self.tls_client_cert != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_cert;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_client_cert_size += ::pb_jelly::wire_format::serialized_length(4);
      tls_client_cert_size += ::pb_jelly::varint::serialized_length(l as u64);
      tls_client_cert_size += l;
    }
    size += tls_client_cert_size;
    let mut tls_client_key_size = 0;
    if self.tls_client_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_key;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_client_key_size += ::pb_jelly::wire_format::serialized_length(5);
      tls_client_key_size += ::pb_jelly::varint::serialized_length(l as u64);
      tls_client_key_size += l;
    }
    size += tls_client_key_size;
    let mut token_size = 0;
    if self.token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.token;
      let l = ::pb_jelly::Message::compute_size(val);
      token_size += ::pb_jelly::wire_format::serialized_length(6);
      token_size += ::pb_jelly::varint::serialized_length(l as u64);
      token_size += l;
    }
    size += token_size;
    let mut listener_name_size = 0;
    if self.listener_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.listener_name;
      let l = ::pb_jelly::Message::compute_size(val);
      listener_name_size += ::pb_jelly::wire_format::serialized_length(7);
      listener_name_size += ::pb_jelly::varint::serialized_length(l as u64);
      listener_name_size += l;
    }
    size += listener_name_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.dsn != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.dsn;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.connect_timeout_seconds != <u32 as ::std::default::Default>::default() {
      let val = &self.connect_timeout_seconds;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.tls_client_cert != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_cert;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.tls_client_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_key;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.token;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.listener_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.listener_name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.dsn != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.dsn;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.connect_timeout_seconds != <u32 as ::std::default::Default>::default() {
      let val = &self.connect_timeout_seconds;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.tls_client_cert != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_cert;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.tls_client_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_key;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.token;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.listener_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.listener_name;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "PulsarConn", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.dsn = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "PulsarConn", 2)?;
          let mut val: u32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.connect_timeout_seconds = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "PulsarConn", 3)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.tls_skip_verify = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "PulsarConn", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_client_cert = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "PulsarConn", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_client_key = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "PulsarConn", 6)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.token = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "PulsarConn", 7)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.listener_name = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for PulsarConn {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "dsn" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.dsn)
      }
      "connect_timeout_seconds" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.connect_timeout_seconds)
      }
      "tls_skip_verify" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.tls_skip_verify)
      }
      "tls_client_cert" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.tls_client_cert)
      }
      "tls_client_key" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.tls_client_key)
      }
      "token" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.token)
      }
      "listener_name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.listener_name)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct PulsarReadArgs {
  /// @gotags: kong:"help='Topic to read messages from',required"
  pub topic: ::std::string::String,
  /// @gotags: kong:"help='Subscription name',required"
  pub subscription_name: ::std::string::String,
  /// @gotags: kong:"help='Subscription type (options: shared exclusive failover keyshared)',default=shared,type=pbenum,pbenum_lowercase"
  pub subscription_type: SubscriptionType,
  /// @gotags: kong:"help='Subscription initial position (options: latest earliest)',default=latest,type=pbenum,pbenum_lowercase,pbenum_strip_prefix=PULSAR_"
  pub initial_position: SubscriptionInitialPosition,
}
impl ::std::default::Default for PulsarReadArgs {
  fn default() -> Self {
    PulsarReadArgs {
      topic: ::std::default::Default::default(),
      subscription_name: ::std::default::Default::default(),
      subscription_type: ::std::default::Default::default(),
      initial_position: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref PulsarReadArgs_default: PulsarReadArgs = PulsarReadArgs::default();
}
impl ::pb_jelly::Message for PulsarReadArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "PulsarReadArgs",
      full_name: "protos.args.PulsarReadArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "topic",
          full_name: "protos.args.PulsarReadArgs.topic",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "subscription_name",
          full_name: "protos.args.PulsarReadArgs.subscription_name",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "subscription_type",
          full_name: "protos.args.PulsarReadArgs.subscription_type",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "initial_position",
          full_name: "protos.args.PulsarReadArgs.initial_position",
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
    let mut topic_size = 0;
    if self.topic != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic;
      let l = ::pb_jelly::Message::compute_size(val);
      topic_size += ::pb_jelly::wire_format::serialized_length(1);
      topic_size += ::pb_jelly::varint::serialized_length(l as u64);
      topic_size += l;
    }
    size += topic_size;
    let mut subscription_name_size = 0;
    if self.subscription_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.subscription_name;
      let l = ::pb_jelly::Message::compute_size(val);
      subscription_name_size += ::pb_jelly::wire_format::serialized_length(2);
      subscription_name_size += ::pb_jelly::varint::serialized_length(l as u64);
      subscription_name_size += l;
    }
    size += subscription_name_size;
    let mut subscription_type_size = 0;
    if self.subscription_type != <SubscriptionType as ::std::default::Default>::default() {
      let val = &self.subscription_type;
      let l = ::pb_jelly::Message::compute_size(val);
      subscription_type_size += ::pb_jelly::wire_format::serialized_length(3);
      subscription_type_size += l;
    }
    size += subscription_type_size;
    let mut initial_position_size = 0;
    if self.initial_position != <SubscriptionInitialPosition as ::std::default::Default>::default() {
      let val = &self.initial_position;
      let l = ::pb_jelly::Message::compute_size(val);
      initial_position_size += ::pb_jelly::wire_format::serialized_length(4);
      initial_position_size += l;
    }
    size += initial_position_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.topic != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.subscription_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.subscription_name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.subscription_type != <SubscriptionType as ::std::default::Default>::default() {
      let val = &self.subscription_type;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.initial_position != <SubscriptionInitialPosition as ::std::default::Default>::default() {
      let val = &self.initial_position;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.topic != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.subscription_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.subscription_name;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.subscription_type != <SubscriptionType as ::std::default::Default>::default() {
      let val = &self.subscription_type;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.initial_position != <SubscriptionInitialPosition as ::std::default::Default>::default() {
      let val = &self.initial_position;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "PulsarReadArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.topic = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "PulsarReadArgs", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.subscription_name = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "PulsarReadArgs", 3)?;
          let mut val: SubscriptionType = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.subscription_type = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "PulsarReadArgs", 4)?;
          let mut val: SubscriptionInitialPosition = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.initial_position = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for PulsarReadArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "topic" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.topic)
      }
      "subscription_name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.subscription_name)
      }
      "subscription_type" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.subscription_type)
      }
      "initial_position" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.initial_position)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct PulsarWriteArgs {
  /// @gotags: kong:"help='topic to write messages to'"
  pub topic: ::std::string::String,
}
impl ::std::default::Default for PulsarWriteArgs {
  fn default() -> Self {
    PulsarWriteArgs {
      topic: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref PulsarWriteArgs_default: PulsarWriteArgs = PulsarWriteArgs::default();
}
impl ::pb_jelly::Message for PulsarWriteArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "PulsarWriteArgs",
      full_name: "protos.args.PulsarWriteArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "topic",
          full_name: "protos.args.PulsarWriteArgs.topic",
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
    let mut topic_size = 0;
    if self.topic != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic;
      let l = ::pb_jelly::Message::compute_size(val);
      topic_size += ::pb_jelly::wire_format::serialized_length(1);
      topic_size += ::pb_jelly::varint::serialized_length(l as u64);
      topic_size += l;
    }
    size += topic_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.topic != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.topic != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "PulsarWriteArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.topic = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for PulsarWriteArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "topic" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.topic)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

