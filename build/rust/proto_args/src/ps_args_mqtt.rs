// @generated, do not edit
#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[repr(transparent)]
pub struct MQTTQoSLevel(i32);
impl MQTTQoSLevel {
  pub const MQTT_QOS_LEVEL_AT_MOST_ONCE: MQTTQoSLevel = MQTTQoSLevel(0);
  pub const MQTT_QOS_LEVEL_AT_LEAST_ONCE: MQTTQoSLevel = MQTTQoSLevel(1);
  pub const MQTT_QOS_LEVEL_EXACTLY_ONCE: MQTTQoSLevel = MQTTQoSLevel(2);
  pub const KNOWN_VARIANTS: [MQTTQoSLevel; 3] = [MQTTQoSLevel::MQTT_QOS_LEVEL_AT_MOST_ONCE, MQTTQoSLevel::MQTT_QOS_LEVEL_AT_LEAST_ONCE, MQTTQoSLevel::MQTT_QOS_LEVEL_EXACTLY_ONCE];
  pub const fn value(self) -> i32 {
    self.0
  }
  pub fn into_known(self) -> ::std::option::Option<MQTTQoSLevel_Closed> {
    match self {
      MQTTQoSLevel::MQTT_QOS_LEVEL_AT_MOST_ONCE => Some(MQTTQoSLevel_Closed::MQTT_QOS_LEVEL_AT_MOST_ONCE),
      MQTTQoSLevel::MQTT_QOS_LEVEL_AT_LEAST_ONCE => Some(MQTTQoSLevel_Closed::MQTT_QOS_LEVEL_AT_LEAST_ONCE),
      MQTTQoSLevel::MQTT_QOS_LEVEL_EXACTLY_ONCE => Some(MQTTQoSLevel_Closed::MQTT_QOS_LEVEL_EXACTLY_ONCE),
      _ => None,
    }
  }
}
impl ::std::default::Default for MQTTQoSLevel {
  fn default() -> Self {
    MQTTQoSLevel::MQTT_QOS_LEVEL_AT_MOST_ONCE
  }
}
impl From<MQTTQoSLevel> for i32 {
  fn from(v: MQTTQoSLevel) -> i32 {
    v.0
  }
}
impl From<i32> for MQTTQoSLevel {
  fn from(v: i32) -> MQTTQoSLevel {
    MQTTQoSLevel(v)
  }
}
impl From<MQTTQoSLevel_Closed> for MQTTQoSLevel {
  fn from(v: MQTTQoSLevel_Closed) -> MQTTQoSLevel {
    MQTTQoSLevel(v as i32)
  }
}
impl ::pb_jelly::ProtoEnum for MQTTQoSLevel {
}
impl ::pb_jelly::OpenProtoEnum for MQTTQoSLevel {
  fn name(self) -> ::std::option::Option<&'static str> {
    match self {
      MQTTQoSLevel::MQTT_QOS_LEVEL_AT_MOST_ONCE => Some("MQTT_QOS_LEVEL_AT_MOST_ONCE"),
      MQTTQoSLevel::MQTT_QOS_LEVEL_AT_LEAST_ONCE => Some("MQTT_QOS_LEVEL_AT_LEAST_ONCE"),
      MQTTQoSLevel::MQTT_QOS_LEVEL_EXACTLY_ONCE => Some("MQTT_QOS_LEVEL_EXACTLY_ONCE"),
      _ => None,
    }
  }
  fn is_known(self) -> bool {
    match self {
      MQTTQoSLevel::MQTT_QOS_LEVEL_AT_MOST_ONCE => true,
      MQTTQoSLevel::MQTT_QOS_LEVEL_AT_LEAST_ONCE => true,
      MQTTQoSLevel::MQTT_QOS_LEVEL_EXACTLY_ONCE => true,
      _ => false,
    }
  }
}
impl ::std::fmt::Debug for MQTTQoSLevel {
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
pub enum MQTTQoSLevel_Closed {
  MQTT_QOS_LEVEL_AT_MOST_ONCE = 0,
  MQTT_QOS_LEVEL_AT_LEAST_ONCE = 1,
  MQTT_QOS_LEVEL_EXACTLY_ONCE = 2,
}
impl MQTTQoSLevel_Closed {
  pub const KNOWN_VARIANTS: [MQTTQoSLevel_Closed; 3] = [MQTTQoSLevel_Closed::MQTT_QOS_LEVEL_AT_MOST_ONCE, MQTTQoSLevel_Closed::MQTT_QOS_LEVEL_AT_LEAST_ONCE, MQTTQoSLevel_Closed::MQTT_QOS_LEVEL_EXACTLY_ONCE];
}
impl ::std::default::Default for MQTTQoSLevel_Closed {
  fn default() -> Self {
    MQTTQoSLevel_Closed::MQTT_QOS_LEVEL_AT_MOST_ONCE
  }
}
impl From<MQTTQoSLevel_Closed> for i32 {
  fn from(v: MQTTQoSLevel_Closed) -> i32 {
    match v {
      MQTTQoSLevel_Closed::MQTT_QOS_LEVEL_AT_MOST_ONCE => 0,
      MQTTQoSLevel_Closed::MQTT_QOS_LEVEL_AT_LEAST_ONCE => 1,
      MQTTQoSLevel_Closed::MQTT_QOS_LEVEL_EXACTLY_ONCE => 2,
    }
  }
}
impl ::std::convert::TryFrom<i32> for MQTTQoSLevel_Closed {
  type Error = i32;
  fn try_from(v: i32) -> ::std::result::Result<Self, i32> {
    match v {
      0 => Ok(MQTTQoSLevel_Closed::MQTT_QOS_LEVEL_AT_MOST_ONCE),
      1 => Ok(MQTTQoSLevel_Closed::MQTT_QOS_LEVEL_AT_LEAST_ONCE),
      2 => Ok(MQTTQoSLevel_Closed::MQTT_QOS_LEVEL_EXACTLY_ONCE),
      _ => Err(v),
    }
  }
}
impl ::pb_jelly::ProtoEnum for MQTTQoSLevel_Closed {
}
impl ::pb_jelly::ClosedProtoEnum for MQTTQoSLevel_Closed {
  fn name(self) -> &'static str {
    match self {
      MQTTQoSLevel_Closed::MQTT_QOS_LEVEL_AT_MOST_ONCE => "MQTT_QOS_LEVEL_AT_MOST_ONCE",
      MQTTQoSLevel_Closed::MQTT_QOS_LEVEL_AT_LEAST_ONCE => "MQTT_QOS_LEVEL_AT_LEAST_ONCE",
      MQTTQoSLevel_Closed::MQTT_QOS_LEVEL_EXACTLY_ONCE => "MQTT_QOS_LEVEL_EXACTLY_ONCE",
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct MQTTTLSOptions {
  /// @gotags: kong:"help='CA cert (only needed if addr is ssl://)',env=PLUMBER_RELAY_MQTT_TLS_CA_CERT"
  pub tls_ca_cert: ::std::string::String,
  /// @gotags: kong:"help='Client cert file (only needed if addr is ssl://)',env=PLUMBER_RELAY_MQTT_TLS_CLIENT_CERT"
  pub tls_client_cert: ::std::string::String,
  /// @gotags: kong:"help='Client key file (only needed if addr is ssl://)',env=PLUMBER_RELAY_MQTT_TLS_CLIENT_KEY"
  pub tls_client_key: ::std::string::String,
  /// @gotags: kong:"help='Whether to verify server certificate',env=PLUMBER_RELAY_MQTT_SKIP_VERIFY_TLS"
  pub tls_skip_verify: bool,
}
impl ::std::default::Default for MQTTTLSOptions {
  fn default() -> Self {
    MQTTTLSOptions {
      tls_ca_cert: ::std::default::Default::default(),
      tls_client_cert: ::std::default::Default::default(),
      tls_client_key: ::std::default::Default::default(),
      tls_skip_verify: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref MQTTTLSOptions_default: MQTTTLSOptions = MQTTTLSOptions::default();
}
impl ::pb_jelly::Message for MQTTTLSOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "MQTTTLSOptions",
      full_name: "protos.args.MQTTTLSOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "tls_ca_cert",
          full_name: "protos.args.MQTTTLSOptions.tls_ca_cert",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_client_cert",
          full_name: "protos.args.MQTTTLSOptions.tls_client_cert",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_client_key",
          full_name: "protos.args.MQTTTLSOptions.tls_client_key",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_skip_verify",
          full_name: "protos.args.MQTTTLSOptions.tls_skip_verify",
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
    let mut tls_ca_cert_size = 0;
    if self.tls_ca_cert != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_ca_cert;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_ca_cert_size += ::pb_jelly::wire_format::serialized_length(1);
      tls_ca_cert_size += ::pb_jelly::varint::serialized_length(l as u64);
      tls_ca_cert_size += l;
    }
    size += tls_ca_cert_size;
    let mut tls_client_cert_size = 0;
    if self.tls_client_cert != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_cert;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_client_cert_size += ::pb_jelly::wire_format::serialized_length(2);
      tls_client_cert_size += ::pb_jelly::varint::serialized_length(l as u64);
      tls_client_cert_size += l;
    }
    size += tls_client_cert_size;
    let mut tls_client_key_size = 0;
    if self.tls_client_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_key;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_client_key_size += ::pb_jelly::wire_format::serialized_length(3);
      tls_client_key_size += ::pb_jelly::varint::serialized_length(l as u64);
      tls_client_key_size += l;
    }
    size += tls_client_key_size;
    let mut tls_skip_verify_size = 0;
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_skip_verify_size += ::pb_jelly::wire_format::serialized_length(4);
      tls_skip_verify_size += l;
    }
    size += tls_skip_verify_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.tls_ca_cert != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_ca_cert;
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
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.tls_ca_cert != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_ca_cert;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.tls_client_cert != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_cert;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.tls_client_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_key;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "MQTTTLSOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_ca_cert = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "MQTTTLSOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_client_cert = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "MQTTTLSOptions", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_client_key = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "MQTTTLSOptions", 4)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.tls_skip_verify = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for MQTTTLSOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "tls_ca_cert" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.tls_ca_cert)
      }
      "tls_client_cert" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.tls_client_cert)
      }
      "tls_client_key" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.tls_client_key)
      }
      "tls_skip_verify" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.tls_skip_verify)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct MQTTConn {
  /// @gotags: kong:"help='MQTT address',default='tcp://localhost:1883',env='PLUMBER_RELAY_MQTT_ADDRESS',required"
  pub address: ::std::string::String,
  /// @gotags: kong:"help='How long to attempt to connect for',env='PLUMBER_RELAY_MQTT_CONNECT_TIMEOUT',default=5"
  pub conn_timeout_seconds: u32,
  /// @gotags: kong:"help='Client id presented to MQTT broker',env='PLUMBER_RELAY_MQTT_CLIENT_ID',default=plumber"
  pub client_id: ::std::string::String,
  /// @gotags: kong:"help='QoS level to use for pub/sub (options: at_most_once, at_least_once, exactly_once)',env=PLUMBER_RELAY_MQTT_QOS,type=pbenum,pbenum_strip_prefix=MQTT_QOS_LEVEL_,pbenum_lowercase,default=at_most_once"
  pub qos_level: MQTTQoSLevel,
  /// @gotags: kong:"embed"
  pub tls_options: ::std::option::Option<MQTTTLSOptions>,
}
impl ::std::default::Default for MQTTConn {
  fn default() -> Self {
    MQTTConn {
      address: ::std::default::Default::default(),
      conn_timeout_seconds: ::std::default::Default::default(),
      client_id: ::std::default::Default::default(),
      qos_level: ::std::default::Default::default(),
      tls_options: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref MQTTConn_default: MQTTConn = MQTTConn::default();
}
impl ::pb_jelly::Message for MQTTConn {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "MQTTConn",
      full_name: "protos.args.MQTTConn",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "address",
          full_name: "protos.args.MQTTConn.address",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "conn_timeout_seconds",
          full_name: "protos.args.MQTTConn.conn_timeout_seconds",
          index: 1,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "client_id",
          full_name: "protos.args.MQTTConn.client_id",
          index: 2,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "qos_level",
          full_name: "protos.args.MQTTConn.qos_level",
          index: 3,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_options",
          full_name: "protos.args.MQTTConn.tls_options",
          index: 4,
          number: 6,
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
    if self.address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.address;
      let l = ::pb_jelly::Message::compute_size(val);
      address_size += ::pb_jelly::wire_format::serialized_length(1);
      address_size += ::pb_jelly::varint::serialized_length(l as u64);
      address_size += l;
    }
    size += address_size;
    let mut conn_timeout_seconds_size = 0;
    if self.conn_timeout_seconds != <u32 as ::std::default::Default>::default() {
      let val = &self.conn_timeout_seconds;
      let l = ::pb_jelly::Message::compute_size(val);
      conn_timeout_seconds_size += ::pb_jelly::wire_format::serialized_length(3);
      conn_timeout_seconds_size += l;
    }
    size += conn_timeout_seconds_size;
    let mut client_id_size = 0;
    if self.client_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.client_id;
      let l = ::pb_jelly::Message::compute_size(val);
      client_id_size += ::pb_jelly::wire_format::serialized_length(4);
      client_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      client_id_size += l;
    }
    size += client_id_size;
    let mut qos_level_size = 0;
    if self.qos_level != <MQTTQoSLevel as ::std::default::Default>::default() {
      let val = &self.qos_level;
      let l = ::pb_jelly::Message::compute_size(val);
      qos_level_size += ::pb_jelly::wire_format::serialized_length(5);
      qos_level_size += l;
    }
    size += qos_level_size;
    let mut tls_options_size = 0;
    for val in &self.tls_options {
      let l = ::pb_jelly::Message::compute_size(val);
      tls_options_size += ::pb_jelly::wire_format::serialized_length(6);
      tls_options_size += ::pb_jelly::varint::serialized_length(l as u64);
      tls_options_size += l;
    }
    size += tls_options_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.address;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.conn_timeout_seconds != <u32 as ::std::default::Default>::default() {
      let val = &self.conn_timeout_seconds;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.client_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.client_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.qos_level != <MQTTQoSLevel as ::std::default::Default>::default() {
      let val = &self.qos_level;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.tls_options {
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
    if self.conn_timeout_seconds != <u32 as ::std::default::Default>::default() {
      let val = &self.conn_timeout_seconds;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.client_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.client_id;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.qos_level != <MQTTQoSLevel as ::std::default::Default>::default() {
      let val = &self.qos_level;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.tls_options {
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "MQTTConn", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.address = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "MQTTConn", 3)?;
          let mut val: u32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.conn_timeout_seconds = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "MQTTConn", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.client_id = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "MQTTConn", 5)?;
          let mut val: MQTTQoSLevel = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.qos_level = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "MQTTConn", 6)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: MQTTTLSOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_options = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for MQTTConn {
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
      "conn_timeout_seconds" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.conn_timeout_seconds)
      }
      "client_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.client_id)
      }
      "qos_level" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.qos_level)
      }
      "tls_options" => {
        ::pb_jelly::reflection::FieldMut::Value(self.tls_options.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct MQTTReadArgs {
  /// @gotags: kong:"help='Topic to read message(s) from',env='PLUMBER_RELAY_MQTT_TOPIC',required"
  pub topic: ::std::string::String,
  /// @gotags: kong:"help='How long to attempt to read message(s)',default=0,env='PLUMBER_RELAY_MQTT_READ_TIMEOUT_SECONDS'"
  pub read_timeout_seconds: u32,
}
impl ::std::default::Default for MQTTReadArgs {
  fn default() -> Self {
    MQTTReadArgs {
      topic: ::std::default::Default::default(),
      read_timeout_seconds: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref MQTTReadArgs_default: MQTTReadArgs = MQTTReadArgs::default();
}
impl ::pb_jelly::Message for MQTTReadArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "MQTTReadArgs",
      full_name: "protos.args.MQTTReadArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "topic",
          full_name: "protos.args.MQTTReadArgs.topic",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "read_timeout_seconds",
          full_name: "protos.args.MQTTReadArgs.read_timeout_seconds",
          index: 1,
          number: 2,
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
    let mut read_timeout_seconds_size = 0;
    if self.read_timeout_seconds != <u32 as ::std::default::Default>::default() {
      let val = &self.read_timeout_seconds;
      let l = ::pb_jelly::Message::compute_size(val);
      read_timeout_seconds_size += ::pb_jelly::wire_format::serialized_length(2);
      read_timeout_seconds_size += l;
    }
    size += read_timeout_seconds_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.topic != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.read_timeout_seconds != <u32 as ::std::default::Default>::default() {
      let val = &self.read_timeout_seconds;
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
    if self.read_timeout_seconds != <u32 as ::std::default::Default>::default() {
      let val = &self.read_timeout_seconds;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "MQTTReadArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.topic = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "MQTTReadArgs", 2)?;
          let mut val: u32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.read_timeout_seconds = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for MQTTReadArgs {
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
      "read_timeout_seconds" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.read_timeout_seconds)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct MQTTWriteArgs {
  /// @gotags: kong:"help='Topic to write message(s) to',required"
  pub topic: ::std::string::String,
  /// @gotags: kong:"help='How long to attempt to publish message(s)',default=5"
  pub write_timeout_seconds: u32,
}
impl ::std::default::Default for MQTTWriteArgs {
  fn default() -> Self {
    MQTTWriteArgs {
      topic: ::std::default::Default::default(),
      write_timeout_seconds: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref MQTTWriteArgs_default: MQTTWriteArgs = MQTTWriteArgs::default();
}
impl ::pb_jelly::Message for MQTTWriteArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "MQTTWriteArgs",
      full_name: "protos.args.MQTTWriteArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "topic",
          full_name: "protos.args.MQTTWriteArgs.topic",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "write_timeout_seconds",
          full_name: "protos.args.MQTTWriteArgs.write_timeout_seconds",
          index: 1,
          number: 2,
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
    let mut write_timeout_seconds_size = 0;
    if self.write_timeout_seconds != <u32 as ::std::default::Default>::default() {
      let val = &self.write_timeout_seconds;
      let l = ::pb_jelly::Message::compute_size(val);
      write_timeout_seconds_size += ::pb_jelly::wire_format::serialized_length(2);
      write_timeout_seconds_size += l;
    }
    size += write_timeout_seconds_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.topic != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.write_timeout_seconds != <u32 as ::std::default::Default>::default() {
      let val = &self.write_timeout_seconds;
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
    if self.write_timeout_seconds != <u32 as ::std::default::Default>::default() {
      let val = &self.write_timeout_seconds;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "MQTTWriteArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.topic = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "MQTTWriteArgs", 2)?;
          let mut val: u32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.write_timeout_seconds = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for MQTTWriteArgs {
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
      "write_timeout_seconds" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.write_timeout_seconds)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

