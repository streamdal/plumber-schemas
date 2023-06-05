// @generated, do not edit
#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[repr(transparent)]
pub struct EncodeType(i32);
impl EncodeType {
  pub const ENCODE_TYPE_UNSET: EncodeType = EncodeType(0);
  pub const ENCODE_TYPE_JSONPB: EncodeType = EncodeType(1);
  pub const ENCODE_TYPE_AVRO: EncodeType = EncodeType(2);
  pub const ENCODE_TYPE_CLOUDEVENT: EncodeType = EncodeType(3);
  pub const KNOWN_VARIANTS: [EncodeType; 4] = [EncodeType::ENCODE_TYPE_UNSET, EncodeType::ENCODE_TYPE_JSONPB, EncodeType::ENCODE_TYPE_AVRO, EncodeType::ENCODE_TYPE_CLOUDEVENT];
  pub const fn value(self) -> i32 {
    self.0
  }
  pub fn into_known(self) -> ::std::option::Option<EncodeType_Closed> {
    match self {
      EncodeType::ENCODE_TYPE_UNSET => Some(EncodeType_Closed::ENCODE_TYPE_UNSET),
      EncodeType::ENCODE_TYPE_JSONPB => Some(EncodeType_Closed::ENCODE_TYPE_JSONPB),
      EncodeType::ENCODE_TYPE_AVRO => Some(EncodeType_Closed::ENCODE_TYPE_AVRO),
      EncodeType::ENCODE_TYPE_CLOUDEVENT => Some(EncodeType_Closed::ENCODE_TYPE_CLOUDEVENT),
      _ => None,
    }
  }
}
impl ::std::default::Default for EncodeType {
  fn default() -> Self {
    EncodeType::ENCODE_TYPE_UNSET
  }
}
impl From<EncodeType> for i32 {
  fn from(v: EncodeType) -> i32 {
    v.0
  }
}
impl From<i32> for EncodeType {
  fn from(v: i32) -> EncodeType {
    EncodeType(v)
  }
}
impl From<EncodeType_Closed> for EncodeType {
  fn from(v: EncodeType_Closed) -> EncodeType {
    EncodeType(v as i32)
  }
}
impl ::pb_jelly::ProtoEnum for EncodeType {
}
impl ::pb_jelly::OpenProtoEnum for EncodeType {
  fn name(self) -> ::std::option::Option<&'static str> {
    match self {
      EncodeType::ENCODE_TYPE_UNSET => Some("ENCODE_TYPE_UNSET"),
      EncodeType::ENCODE_TYPE_JSONPB => Some("ENCODE_TYPE_JSONPB"),
      EncodeType::ENCODE_TYPE_AVRO => Some("ENCODE_TYPE_AVRO"),
      EncodeType::ENCODE_TYPE_CLOUDEVENT => Some("ENCODE_TYPE_CLOUDEVENT"),
      _ => None,
    }
  }
  fn is_known(self) -> bool {
    match self {
      EncodeType::ENCODE_TYPE_UNSET => true,
      EncodeType::ENCODE_TYPE_JSONPB => true,
      EncodeType::ENCODE_TYPE_AVRO => true,
      EncodeType::ENCODE_TYPE_CLOUDEVENT => true,
      _ => false,
    }
  }
}
impl ::std::fmt::Debug for EncodeType {
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
pub enum EncodeType_Closed {
  ENCODE_TYPE_UNSET = 0,
  ENCODE_TYPE_JSONPB = 1,
  ENCODE_TYPE_AVRO = 2,
  ENCODE_TYPE_CLOUDEVENT = 3,
}
impl EncodeType_Closed {
  pub const KNOWN_VARIANTS: [EncodeType_Closed; 4] = [EncodeType_Closed::ENCODE_TYPE_UNSET, EncodeType_Closed::ENCODE_TYPE_JSONPB, EncodeType_Closed::ENCODE_TYPE_AVRO, EncodeType_Closed::ENCODE_TYPE_CLOUDEVENT];
}
impl ::std::default::Default for EncodeType_Closed {
  fn default() -> Self {
    EncodeType_Closed::ENCODE_TYPE_UNSET
  }
}
impl From<EncodeType_Closed> for i32 {
  fn from(v: EncodeType_Closed) -> i32 {
    match v {
      EncodeType_Closed::ENCODE_TYPE_UNSET => 0,
      EncodeType_Closed::ENCODE_TYPE_JSONPB => 1,
      EncodeType_Closed::ENCODE_TYPE_AVRO => 2,
      EncodeType_Closed::ENCODE_TYPE_CLOUDEVENT => 3,
    }
  }
}
impl ::std::convert::TryFrom<i32> for EncodeType_Closed {
  type Error = i32;
  fn try_from(v: i32) -> ::std::result::Result<Self, i32> {
    match v {
      0 => Ok(EncodeType_Closed::ENCODE_TYPE_UNSET),
      1 => Ok(EncodeType_Closed::ENCODE_TYPE_JSONPB),
      2 => Ok(EncodeType_Closed::ENCODE_TYPE_AVRO),
      3 => Ok(EncodeType_Closed::ENCODE_TYPE_CLOUDEVENT),
      _ => Err(v),
    }
  }
}
impl ::pb_jelly::ProtoEnum for EncodeType_Closed {
}
impl ::pb_jelly::ClosedProtoEnum for EncodeType_Closed {
  fn name(self) -> &'static str {
    match self {
      EncodeType_Closed::ENCODE_TYPE_UNSET => "ENCODE_TYPE_UNSET",
      EncodeType_Closed::ENCODE_TYPE_JSONPB => "ENCODE_TYPE_JSONPB",
      EncodeType_Closed::ENCODE_TYPE_AVRO => "ENCODE_TYPE_AVRO",
      EncodeType_Closed::ENCODE_TYPE_CLOUDEVENT => "ENCODE_TYPE_CLOUDEVENT",
    }
  }
}

#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[repr(transparent)]
pub struct DecodeType(i32);
impl DecodeType {
  pub const DECODE_TYPE_UNSET: DecodeType = DecodeType(0);
  pub const DECODE_TYPE_PROTOBUF: DecodeType = DecodeType(1);
  pub const DECODE_TYPE_AVRO: DecodeType = DecodeType(2);
  pub const DECODE_TYPE_THRIFT: DecodeType = DecodeType(3);
  pub const DECODE_TYPE_FLATBUFFER: DecodeType = DecodeType(4);
  pub const KNOWN_VARIANTS: [DecodeType; 5] = [DecodeType::DECODE_TYPE_UNSET, DecodeType::DECODE_TYPE_PROTOBUF, DecodeType::DECODE_TYPE_AVRO, DecodeType::DECODE_TYPE_THRIFT, DecodeType::DECODE_TYPE_FLATBUFFER];
  pub const fn value(self) -> i32 {
    self.0
  }
  pub fn into_known(self) -> ::std::option::Option<DecodeType_Closed> {
    match self {
      DecodeType::DECODE_TYPE_UNSET => Some(DecodeType_Closed::DECODE_TYPE_UNSET),
      DecodeType::DECODE_TYPE_PROTOBUF => Some(DecodeType_Closed::DECODE_TYPE_PROTOBUF),
      DecodeType::DECODE_TYPE_AVRO => Some(DecodeType_Closed::DECODE_TYPE_AVRO),
      DecodeType::DECODE_TYPE_THRIFT => Some(DecodeType_Closed::DECODE_TYPE_THRIFT),
      DecodeType::DECODE_TYPE_FLATBUFFER => Some(DecodeType_Closed::DECODE_TYPE_FLATBUFFER),
      _ => None,
    }
  }
}
impl ::std::default::Default for DecodeType {
  fn default() -> Self {
    DecodeType::DECODE_TYPE_UNSET
  }
}
impl From<DecodeType> for i32 {
  fn from(v: DecodeType) -> i32 {
    v.0
  }
}
impl From<i32> for DecodeType {
  fn from(v: i32) -> DecodeType {
    DecodeType(v)
  }
}
impl From<DecodeType_Closed> for DecodeType {
  fn from(v: DecodeType_Closed) -> DecodeType {
    DecodeType(v as i32)
  }
}
impl ::pb_jelly::ProtoEnum for DecodeType {
}
impl ::pb_jelly::OpenProtoEnum for DecodeType {
  fn name(self) -> ::std::option::Option<&'static str> {
    match self {
      DecodeType::DECODE_TYPE_UNSET => Some("DECODE_TYPE_UNSET"),
      DecodeType::DECODE_TYPE_PROTOBUF => Some("DECODE_TYPE_PROTOBUF"),
      DecodeType::DECODE_TYPE_AVRO => Some("DECODE_TYPE_AVRO"),
      DecodeType::DECODE_TYPE_THRIFT => Some("DECODE_TYPE_THRIFT"),
      DecodeType::DECODE_TYPE_FLATBUFFER => Some("DECODE_TYPE_FLATBUFFER"),
      _ => None,
    }
  }
  fn is_known(self) -> bool {
    match self {
      DecodeType::DECODE_TYPE_UNSET => true,
      DecodeType::DECODE_TYPE_PROTOBUF => true,
      DecodeType::DECODE_TYPE_AVRO => true,
      DecodeType::DECODE_TYPE_THRIFT => true,
      DecodeType::DECODE_TYPE_FLATBUFFER => true,
      _ => false,
    }
  }
}
impl ::std::fmt::Debug for DecodeType {
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
pub enum DecodeType_Closed {
  DECODE_TYPE_UNSET = 0,
  DECODE_TYPE_PROTOBUF = 1,
  DECODE_TYPE_AVRO = 2,
  DECODE_TYPE_THRIFT = 3,
  DECODE_TYPE_FLATBUFFER = 4,
}
impl DecodeType_Closed {
  pub const KNOWN_VARIANTS: [DecodeType_Closed; 5] = [DecodeType_Closed::DECODE_TYPE_UNSET, DecodeType_Closed::DECODE_TYPE_PROTOBUF, DecodeType_Closed::DECODE_TYPE_AVRO, DecodeType_Closed::DECODE_TYPE_THRIFT, DecodeType_Closed::DECODE_TYPE_FLATBUFFER];
}
impl ::std::default::Default for DecodeType_Closed {
  fn default() -> Self {
    DecodeType_Closed::DECODE_TYPE_UNSET
  }
}
impl From<DecodeType_Closed> for i32 {
  fn from(v: DecodeType_Closed) -> i32 {
    match v {
      DecodeType_Closed::DECODE_TYPE_UNSET => 0,
      DecodeType_Closed::DECODE_TYPE_PROTOBUF => 1,
      DecodeType_Closed::DECODE_TYPE_AVRO => 2,
      DecodeType_Closed::DECODE_TYPE_THRIFT => 3,
      DecodeType_Closed::DECODE_TYPE_FLATBUFFER => 4,
    }
  }
}
impl ::std::convert::TryFrom<i32> for DecodeType_Closed {
  type Error = i32;
  fn try_from(v: i32) -> ::std::result::Result<Self, i32> {
    match v {
      0 => Ok(DecodeType_Closed::DECODE_TYPE_UNSET),
      1 => Ok(DecodeType_Closed::DECODE_TYPE_PROTOBUF),
      2 => Ok(DecodeType_Closed::DECODE_TYPE_AVRO),
      3 => Ok(DecodeType_Closed::DECODE_TYPE_THRIFT),
      4 => Ok(DecodeType_Closed::DECODE_TYPE_FLATBUFFER),
      _ => Err(v),
    }
  }
}
impl ::pb_jelly::ProtoEnum for DecodeType_Closed {
}
impl ::pb_jelly::ClosedProtoEnum for DecodeType_Closed {
  fn name(self) -> &'static str {
    match self {
      DecodeType_Closed::DECODE_TYPE_UNSET => "DECODE_TYPE_UNSET",
      DecodeType_Closed::DECODE_TYPE_PROTOBUF => "DECODE_TYPE_PROTOBUF",
      DecodeType_Closed::DECODE_TYPE_AVRO => "DECODE_TYPE_AVRO",
      DecodeType_Closed::DECODE_TYPE_THRIFT => "DECODE_TYPE_THRIFT",
      DecodeType_Closed::DECODE_TYPE_FLATBUFFER => "DECODE_TYPE_FLATBUFFER",
    }
  }
}

#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[repr(transparent)]
pub struct EnvelopeType(i32);
impl EnvelopeType {
  pub const ENVELOPE_TYPE_UNSET: EnvelopeType = EnvelopeType(0);
  pub const ENVELOPE_TYPE_DEEP: EnvelopeType = EnvelopeType(1);
  pub const ENVELOPE_TYPE_SHALLOW: EnvelopeType = EnvelopeType(2);
  pub const KNOWN_VARIANTS: [EnvelopeType; 3] = [EnvelopeType::ENVELOPE_TYPE_UNSET, EnvelopeType::ENVELOPE_TYPE_DEEP, EnvelopeType::ENVELOPE_TYPE_SHALLOW];
  pub const fn value(self) -> i32 {
    self.0
  }
  pub fn into_known(self) -> ::std::option::Option<EnvelopeType_Closed> {
    match self {
      EnvelopeType::ENVELOPE_TYPE_UNSET => Some(EnvelopeType_Closed::ENVELOPE_TYPE_UNSET),
      EnvelopeType::ENVELOPE_TYPE_DEEP => Some(EnvelopeType_Closed::ENVELOPE_TYPE_DEEP),
      EnvelopeType::ENVELOPE_TYPE_SHALLOW => Some(EnvelopeType_Closed::ENVELOPE_TYPE_SHALLOW),
      _ => None,
    }
  }
}
impl ::std::default::Default for EnvelopeType {
  fn default() -> Self {
    EnvelopeType::ENVELOPE_TYPE_UNSET
  }
}
impl From<EnvelopeType> for i32 {
  fn from(v: EnvelopeType) -> i32 {
    v.0
  }
}
impl From<i32> for EnvelopeType {
  fn from(v: i32) -> EnvelopeType {
    EnvelopeType(v)
  }
}
impl From<EnvelopeType_Closed> for EnvelopeType {
  fn from(v: EnvelopeType_Closed) -> EnvelopeType {
    EnvelopeType(v as i32)
  }
}
impl ::pb_jelly::ProtoEnum for EnvelopeType {
}
impl ::pb_jelly::OpenProtoEnum for EnvelopeType {
  fn name(self) -> ::std::option::Option<&'static str> {
    match self {
      EnvelopeType::ENVELOPE_TYPE_UNSET => Some("ENVELOPE_TYPE_UNSET"),
      EnvelopeType::ENVELOPE_TYPE_DEEP => Some("ENVELOPE_TYPE_DEEP"),
      EnvelopeType::ENVELOPE_TYPE_SHALLOW => Some("ENVELOPE_TYPE_SHALLOW"),
      _ => None,
    }
  }
  fn is_known(self) -> bool {
    match self {
      EnvelopeType::ENVELOPE_TYPE_UNSET => true,
      EnvelopeType::ENVELOPE_TYPE_DEEP => true,
      EnvelopeType::ENVELOPE_TYPE_SHALLOW => true,
      _ => false,
    }
  }
}
impl ::std::fmt::Debug for EnvelopeType {
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
pub enum EnvelopeType_Closed {
  ENVELOPE_TYPE_UNSET = 0,
  ENVELOPE_TYPE_DEEP = 1,
  ENVELOPE_TYPE_SHALLOW = 2,
}
impl EnvelopeType_Closed {
  pub const KNOWN_VARIANTS: [EnvelopeType_Closed; 3] = [EnvelopeType_Closed::ENVELOPE_TYPE_UNSET, EnvelopeType_Closed::ENVELOPE_TYPE_DEEP, EnvelopeType_Closed::ENVELOPE_TYPE_SHALLOW];
}
impl ::std::default::Default for EnvelopeType_Closed {
  fn default() -> Self {
    EnvelopeType_Closed::ENVELOPE_TYPE_UNSET
  }
}
impl From<EnvelopeType_Closed> for i32 {
  fn from(v: EnvelopeType_Closed) -> i32 {
    match v {
      EnvelopeType_Closed::ENVELOPE_TYPE_UNSET => 0,
      EnvelopeType_Closed::ENVELOPE_TYPE_DEEP => 1,
      EnvelopeType_Closed::ENVELOPE_TYPE_SHALLOW => 2,
    }
  }
}
impl ::std::convert::TryFrom<i32> for EnvelopeType_Closed {
  type Error = i32;
  fn try_from(v: i32) -> ::std::result::Result<Self, i32> {
    match v {
      0 => Ok(EnvelopeType_Closed::ENVELOPE_TYPE_UNSET),
      1 => Ok(EnvelopeType_Closed::ENVELOPE_TYPE_DEEP),
      2 => Ok(EnvelopeType_Closed::ENVELOPE_TYPE_SHALLOW),
      _ => Err(v),
    }
  }
}
impl ::pb_jelly::ProtoEnum for EnvelopeType_Closed {
}
impl ::pb_jelly::ClosedProtoEnum for EnvelopeType_Closed {
  fn name(self) -> &'static str {
    match self {
      EnvelopeType_Closed::ENVELOPE_TYPE_UNSET => "ENVELOPE_TYPE_UNSET",
      EnvelopeType_Closed::ENVELOPE_TYPE_DEEP => "ENVELOPE_TYPE_DEEP",
      EnvelopeType_Closed::ENVELOPE_TYPE_SHALLOW => "ENVELOPE_TYPE_SHALLOW",
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct ProtobufSettings {
  /// @gotags: kong:"help='Input message(s) should be encoded with this message envelope'"
  pub protobuf_root_message: ::std::string::String,
  /// Desktop/server should not use this.
  /// @gotags: kong:"help='One or more directories which contains protobuf schemas',existingdir"
  pub protobuf_dirs: ::std::vec::Vec<::std::string::String>,
  /// Directory where protos are stored (used for github import)
  /// @gotags: kong:"-"
  pub _protobuf_root_dir: ::std::string::String,
  /// Used by server/desktop when creating a read without an existing schema
  /// @gotags: kong:"-"
  pub archive: ::std::vec::Vec<u8>,
  /// Used internally by the server
  /// @gotags: kong:"-"
  pub _message_descriptor: ::std::vec::Vec<u8>,
  /// @gotags: kong:"help='Envelope type (options: deep, shallow)',type=pbenum,pbenum_strip_prefix=ENVELOPE_TYPE_,pbenum_lowercase,default=deep"
  pub protobuf_envelope_type: EnvelopeType,
  /// @gotags: kong:"help='For shallow envelope messages, the payload field should be encoded with this message name'"
  pub shallow_envelope_message: ::std::string::String,
  /// @gotags: kong:"help='For shallow envelope messages, the field number of the root message that contains the shallow envelope payload'"
  pub shallow_envelope_field_number: i32,
  /// Used internally by the server
  /// @gotags: kong:"-"
  pub _shallow_envelope_message_descriptor: ::std::vec::Vec<u8>,
  /// @gotags: kong:"help='Protobuf descriptor set(.protoset or .fds file)'"
  pub protobuf_descriptor_set: ::std::string::String,
}
impl ::std::default::Default for ProtobufSettings {
  fn default() -> Self {
    ProtobufSettings {
      protobuf_root_message: ::std::default::Default::default(),
      protobuf_dirs: ::std::default::Default::default(),
      _protobuf_root_dir: ::std::default::Default::default(),
      archive: ::std::default::Default::default(),
      _message_descriptor: ::std::default::Default::default(),
      protobuf_envelope_type: ::std::default::Default::default(),
      shallow_envelope_message: ::std::default::Default::default(),
      shallow_envelope_field_number: ::std::default::Default::default(),
      _shallow_envelope_message_descriptor: ::std::default::Default::default(),
      protobuf_descriptor_set: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ProtobufSettings_default: ProtobufSettings = ProtobufSettings::default();
}
impl ::pb_jelly::Message for ProtobufSettings {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ProtobufSettings",
      full_name: "protos.encoding.ProtobufSettings",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "protobuf_root_message",
          full_name: "protos.encoding.ProtobufSettings.protobuf_root_message",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "protobuf_dirs",
          full_name: "protos.encoding.ProtobufSettings.protobuf_dirs",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Repeated,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_protobuf_root_dir",
          full_name: "protos.encoding.ProtobufSettings._protobuf_root_dir",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "archive",
          full_name: "protos.encoding.ProtobufSettings.archive",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_message_descriptor",
          full_name: "protos.encoding.ProtobufSettings._message_descriptor",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "protobuf_envelope_type",
          full_name: "protos.encoding.ProtobufSettings.protobuf_envelope_type",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "shallow_envelope_message",
          full_name: "protos.encoding.ProtobufSettings.shallow_envelope_message",
          index: 6,
          number: 7,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "shallow_envelope_field_number",
          full_name: "protos.encoding.ProtobufSettings.shallow_envelope_field_number",
          index: 7,
          number: 8,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_shallow_envelope_message_descriptor",
          full_name: "protos.encoding.ProtobufSettings._shallow_envelope_message_descriptor",
          index: 8,
          number: 9,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "protobuf_descriptor_set",
          full_name: "protos.encoding.ProtobufSettings.protobuf_descriptor_set",
          index: 9,
          number: 10,
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
    let mut protobuf_root_message_size = 0;
    if self.protobuf_root_message != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.protobuf_root_message;
      let l = ::pb_jelly::Message::compute_size(val);
      protobuf_root_message_size += ::pb_jelly::wire_format::serialized_length(1);
      protobuf_root_message_size += ::pb_jelly::varint::serialized_length(l as u64);
      protobuf_root_message_size += l;
    }
    size += protobuf_root_message_size;
    let mut protobuf_dirs_size = 0;
    for val in &self.protobuf_dirs {
      let l = ::pb_jelly::Message::compute_size(val);
      protobuf_dirs_size += ::pb_jelly::wire_format::serialized_length(2);
      protobuf_dirs_size += ::pb_jelly::varint::serialized_length(l as u64);
      protobuf_dirs_size += l;
    }
    size += protobuf_dirs_size;
    let mut _protobuf_root_dir_size = 0;
    if self._protobuf_root_dir != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._protobuf_root_dir;
      let l = ::pb_jelly::Message::compute_size(val);
      _protobuf_root_dir_size += ::pb_jelly::wire_format::serialized_length(3);
      _protobuf_root_dir_size += ::pb_jelly::varint::serialized_length(l as u64);
      _protobuf_root_dir_size += l;
    }
    size += _protobuf_root_dir_size;
    let mut archive_size = 0;
    if self.archive != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.archive;
      let l = ::pb_jelly::Message::compute_size(val);
      archive_size += ::pb_jelly::wire_format::serialized_length(4);
      archive_size += ::pb_jelly::varint::serialized_length(l as u64);
      archive_size += l;
    }
    size += archive_size;
    let mut _message_descriptor_size = 0;
    if self._message_descriptor != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self._message_descriptor;
      let l = ::pb_jelly::Message::compute_size(val);
      _message_descriptor_size += ::pb_jelly::wire_format::serialized_length(5);
      _message_descriptor_size += ::pb_jelly::varint::serialized_length(l as u64);
      _message_descriptor_size += l;
    }
    size += _message_descriptor_size;
    let mut protobuf_envelope_type_size = 0;
    if self.protobuf_envelope_type != <EnvelopeType as ::std::default::Default>::default() {
      let val = &self.protobuf_envelope_type;
      let l = ::pb_jelly::Message::compute_size(val);
      protobuf_envelope_type_size += ::pb_jelly::wire_format::serialized_length(6);
      protobuf_envelope_type_size += l;
    }
    size += protobuf_envelope_type_size;
    let mut shallow_envelope_message_size = 0;
    if self.shallow_envelope_message != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.shallow_envelope_message;
      let l = ::pb_jelly::Message::compute_size(val);
      shallow_envelope_message_size += ::pb_jelly::wire_format::serialized_length(7);
      shallow_envelope_message_size += ::pb_jelly::varint::serialized_length(l as u64);
      shallow_envelope_message_size += l;
    }
    size += shallow_envelope_message_size;
    let mut shallow_envelope_field_number_size = 0;
    if self.shallow_envelope_field_number != <i32 as ::std::default::Default>::default() {
      let val = &self.shallow_envelope_field_number;
      let l = ::pb_jelly::Message::compute_size(val);
      shallow_envelope_field_number_size += ::pb_jelly::wire_format::serialized_length(8);
      shallow_envelope_field_number_size += l;
    }
    size += shallow_envelope_field_number_size;
    let mut _shallow_envelope_message_descriptor_size = 0;
    if self._shallow_envelope_message_descriptor != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self._shallow_envelope_message_descriptor;
      let l = ::pb_jelly::Message::compute_size(val);
      _shallow_envelope_message_descriptor_size += ::pb_jelly::wire_format::serialized_length(9);
      _shallow_envelope_message_descriptor_size += ::pb_jelly::varint::serialized_length(l as u64);
      _shallow_envelope_message_descriptor_size += l;
    }
    size += _shallow_envelope_message_descriptor_size;
    let mut protobuf_descriptor_set_size = 0;
    if self.protobuf_descriptor_set != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.protobuf_descriptor_set;
      let l = ::pb_jelly::Message::compute_size(val);
      protobuf_descriptor_set_size += ::pb_jelly::wire_format::serialized_length(10);
      protobuf_descriptor_set_size += ::pb_jelly::varint::serialized_length(l as u64);
      protobuf_descriptor_set_size += l;
    }
    size += protobuf_descriptor_set_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.protobuf_root_message != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.protobuf_root_message;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.protobuf_dirs {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._protobuf_root_dir != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._protobuf_root_dir;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.archive != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.archive;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._message_descriptor != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self._message_descriptor;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.protobuf_envelope_type != <EnvelopeType as ::std::default::Default>::default() {
      let val = &self.protobuf_envelope_type;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.shallow_envelope_message != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.shallow_envelope_message;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.shallow_envelope_field_number != <i32 as ::std::default::Default>::default() {
      let val = &self.shallow_envelope_field_number;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._shallow_envelope_message_descriptor != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self._shallow_envelope_message_descriptor;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.protobuf_descriptor_set != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.protobuf_descriptor_set;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.protobuf_root_message != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.protobuf_root_message;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.protobuf_dirs {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self._protobuf_root_dir != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._protobuf_root_dir;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.archive != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.archive;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self._message_descriptor != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self._message_descriptor;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.protobuf_envelope_type != <EnvelopeType as ::std::default::Default>::default() {
      let val = &self.protobuf_envelope_type;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.shallow_envelope_message != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.shallow_envelope_message;
      ::pb_jelly::wire_format::write(7, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.shallow_envelope_field_number != <i32 as ::std::default::Default>::default() {
      let val = &self.shallow_envelope_field_number;
      ::pb_jelly::wire_format::write(8, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self._shallow_envelope_message_descriptor != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self._shallow_envelope_message_descriptor;
      ::pb_jelly::wire_format::write(9, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.protobuf_descriptor_set != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.protobuf_descriptor_set;
      ::pb_jelly::wire_format::write(10, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ProtobufSettings", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.protobuf_root_message = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ProtobufSettings", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.protobuf_dirs.push(val);
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ProtobufSettings", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._protobuf_root_dir = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ProtobufSettings", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::vec::Vec<u8> = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.archive = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ProtobufSettings", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::vec::Vec<u8> = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._message_descriptor = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "ProtobufSettings", 6)?;
          let mut val: EnvelopeType = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.protobuf_envelope_type = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ProtobufSettings", 7)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.shallow_envelope_message = val;
        }
        8 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "ProtobufSettings", 8)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.shallow_envelope_field_number = val;
        }
        9 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ProtobufSettings", 9)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::vec::Vec<u8> = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._shallow_envelope_message_descriptor = val;
        }
        10 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ProtobufSettings", 10)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.protobuf_descriptor_set = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for ProtobufSettings {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "protobuf_root_message" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.protobuf_root_message)
      }
      "protobuf_dirs" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      "_protobuf_root_dir" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._protobuf_root_dir)
      }
      "archive" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.archive)
      }
      "_message_descriptor" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._message_descriptor)
      }
      "protobuf_envelope_type" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.protobuf_envelope_type)
      }
      "shallow_envelope_message" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.shallow_envelope_message)
      }
      "shallow_envelope_field_number" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.shallow_envelope_field_number)
      }
      "_shallow_envelope_message_descriptor" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._shallow_envelope_message_descriptor)
      }
      "protobuf_descriptor_set" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.protobuf_descriptor_set)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct AvroSettings {
  /// Used by CLI; desktop should not set/use this.
  /// @gotags: kong:"help='If encode-type is set to avro, must specify avro schema file',existingfile"
  pub avro_schema_file: ::std::string::String,
  /// Used by desktop; CLI should not set/use this.
  /// @gotags: kong:"-"
  pub schema: ::std::vec::Vec<u8>,
}
impl ::std::default::Default for AvroSettings {
  fn default() -> Self {
    AvroSettings {
      avro_schema_file: ::std::default::Default::default(),
      schema: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref AvroSettings_default: AvroSettings = AvroSettings::default();
}
impl ::pb_jelly::Message for AvroSettings {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AvroSettings",
      full_name: "protos.encoding.AvroSettings",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "avro_schema_file",
          full_name: "protos.encoding.AvroSettings.avro_schema_file",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "schema",
          full_name: "protos.encoding.AvroSettings.schema",
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
    let mut avro_schema_file_size = 0;
    if self.avro_schema_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.avro_schema_file;
      let l = ::pb_jelly::Message::compute_size(val);
      avro_schema_file_size += ::pb_jelly::wire_format::serialized_length(1);
      avro_schema_file_size += ::pb_jelly::varint::serialized_length(l as u64);
      avro_schema_file_size += l;
    }
    size += avro_schema_file_size;
    let mut schema_size = 0;
    if self.schema != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.schema;
      let l = ::pb_jelly::Message::compute_size(val);
      schema_size += ::pb_jelly::wire_format::serialized_length(2);
      schema_size += ::pb_jelly::varint::serialized_length(l as u64);
      schema_size += l;
    }
    size += schema_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.avro_schema_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.avro_schema_file;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.schema != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.schema;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.avro_schema_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.avro_schema_file;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.schema != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.schema;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AvroSettings", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.avro_schema_file = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AvroSettings", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::vec::Vec<u8> = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.schema = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for AvroSettings {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "avro_schema_file" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.avro_schema_file)
      }
      "schema" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.schema)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct ThriftSettings {
  /// @gotags: kong:"help='One or more directories containing Thrift IDL files'"
  pub thrift_dirs: ::std::vec::Vec<::std::string::String>,
  /// @gotags: kong:"help='Namespace and struct name to decode the message with. Ex: com.mycompany.Account'"
  pub thrift_struct: ::std::string::String,
}
impl ::std::default::Default for ThriftSettings {
  fn default() -> Self {
    ThriftSettings {
      thrift_dirs: ::std::default::Default::default(),
      thrift_struct: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ThriftSettings_default: ThriftSettings = ThriftSettings::default();
}
impl ::pb_jelly::Message for ThriftSettings {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ThriftSettings",
      full_name: "protos.encoding.ThriftSettings",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "thrift_dirs",
          full_name: "protos.encoding.ThriftSettings.thrift_dirs",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Repeated,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "thrift_struct",
          full_name: "protos.encoding.ThriftSettings.thrift_struct",
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
    let mut thrift_dirs_size = 0;
    for val in &self.thrift_dirs {
      let l = ::pb_jelly::Message::compute_size(val);
      thrift_dirs_size += ::pb_jelly::wire_format::serialized_length(1);
      thrift_dirs_size += ::pb_jelly::varint::serialized_length(l as u64);
      thrift_dirs_size += l;
    }
    size += thrift_dirs_size;
    let mut thrift_struct_size = 0;
    if self.thrift_struct != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.thrift_struct;
      let l = ::pb_jelly::Message::compute_size(val);
      thrift_struct_size += ::pb_jelly::wire_format::serialized_length(2);
      thrift_struct_size += ::pb_jelly::varint::serialized_length(l as u64);
      thrift_struct_size += l;
    }
    size += thrift_struct_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.thrift_dirs {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.thrift_struct != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.thrift_struct;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.thrift_dirs {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.thrift_struct != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.thrift_struct;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ThriftSettings", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.thrift_dirs.push(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ThriftSettings", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.thrift_struct = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for ThriftSettings {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "thrift_dirs" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      "thrift_struct" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.thrift_struct)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct JSONSchemaSettings {
  /// Used by desktop; CLI should not set/use this.
  /// @gotags: kong:"-"
  pub schema: ::std::vec::Vec<u8>,
}
impl ::std::default::Default for JSONSchemaSettings {
  fn default() -> Self {
    JSONSchemaSettings {
      schema: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref JSONSchemaSettings_default: JSONSchemaSettings = JSONSchemaSettings::default();
}
impl ::pb_jelly::Message for JSONSchemaSettings {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "JSONSchemaSettings",
      full_name: "protos.encoding.JSONSchemaSettings",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "schema",
          full_name: "protos.encoding.JSONSchemaSettings.schema",
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
    let mut schema_size = 0;
    if self.schema != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.schema;
      let l = ::pb_jelly::Message::compute_size(val);
      schema_size += ::pb_jelly::wire_format::serialized_length(1);
      schema_size += ::pb_jelly::varint::serialized_length(l as u64);
      schema_size += l;
    }
    size += schema_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.schema != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.schema;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.schema != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.schema;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "JSONSchemaSettings", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::vec::Vec<u8> = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.schema = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for JSONSchemaSettings {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "schema" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.schema)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct CloudEventSettings {
  /// @gotags: kong:"help='ID to give cloud event. If left blank, plumber will auto-generate a random UUIDv4'"
  pub ce_id: ::std::string::String,
  /// @gotags: kong:"help='Source for cloud event',default='plumber'"
  pub ce_source: ::std::string::String,
  /// @gotags: kong:"help='Cloud event type'"
  pub ce_type: ::std::string::String,
  /// @gotags: kong:"help='Cloud event subject'"
  pub ce_subject: ::std::string::String,
  /// @gotags: kong:"help='Cloud event specification version, ex: 0.1, 0.2, 0.3, 1.0',default='1.0'"
  pub ce_spec_version: ::std::string::String,
  /// @gotags: kong:"help='Type of encoding of the event data',default='application/json; charset=utf-8'"
  pub ce_data_content_type: ::std::string::String,
  /// @gotags: kong:"help='Path to JSON schema file for the cloud event'"
  pub ce_data_schema: ::std::string::String,
}
impl ::std::default::Default for CloudEventSettings {
  fn default() -> Self {
    CloudEventSettings {
      ce_id: ::std::default::Default::default(),
      ce_source: ::std::default::Default::default(),
      ce_type: ::std::default::Default::default(),
      ce_subject: ::std::default::Default::default(),
      ce_spec_version: ::std::default::Default::default(),
      ce_data_content_type: ::std::default::Default::default(),
      ce_data_schema: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref CloudEventSettings_default: CloudEventSettings = CloudEventSettings::default();
}
impl ::pb_jelly::Message for CloudEventSettings {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "CloudEventSettings",
      full_name: "protos.encoding.CloudEventSettings",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "ce_id",
          full_name: "protos.encoding.CloudEventSettings.ce_id",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "ce_source",
          full_name: "protos.encoding.CloudEventSettings.ce_source",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "ce_type",
          full_name: "protos.encoding.CloudEventSettings.ce_type",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "ce_subject",
          full_name: "protos.encoding.CloudEventSettings.ce_subject",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "ce_spec_version",
          full_name: "protos.encoding.CloudEventSettings.ce_spec_version",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "ce_data_content_type",
          full_name: "protos.encoding.CloudEventSettings.ce_data_content_type",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "ce_data_schema",
          full_name: "protos.encoding.CloudEventSettings.ce_data_schema",
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
    let mut ce_id_size = 0;
    if self.ce_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ce_id;
      let l = ::pb_jelly::Message::compute_size(val);
      ce_id_size += ::pb_jelly::wire_format::serialized_length(1);
      ce_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      ce_id_size += l;
    }
    size += ce_id_size;
    let mut ce_source_size = 0;
    if self.ce_source != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ce_source;
      let l = ::pb_jelly::Message::compute_size(val);
      ce_source_size += ::pb_jelly::wire_format::serialized_length(2);
      ce_source_size += ::pb_jelly::varint::serialized_length(l as u64);
      ce_source_size += l;
    }
    size += ce_source_size;
    let mut ce_type_size = 0;
    if self.ce_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ce_type;
      let l = ::pb_jelly::Message::compute_size(val);
      ce_type_size += ::pb_jelly::wire_format::serialized_length(3);
      ce_type_size += ::pb_jelly::varint::serialized_length(l as u64);
      ce_type_size += l;
    }
    size += ce_type_size;
    let mut ce_subject_size = 0;
    if self.ce_subject != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ce_subject;
      let l = ::pb_jelly::Message::compute_size(val);
      ce_subject_size += ::pb_jelly::wire_format::serialized_length(4);
      ce_subject_size += ::pb_jelly::varint::serialized_length(l as u64);
      ce_subject_size += l;
    }
    size += ce_subject_size;
    let mut ce_spec_version_size = 0;
    if self.ce_spec_version != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ce_spec_version;
      let l = ::pb_jelly::Message::compute_size(val);
      ce_spec_version_size += ::pb_jelly::wire_format::serialized_length(5);
      ce_spec_version_size += ::pb_jelly::varint::serialized_length(l as u64);
      ce_spec_version_size += l;
    }
    size += ce_spec_version_size;
    let mut ce_data_content_type_size = 0;
    if self.ce_data_content_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ce_data_content_type;
      let l = ::pb_jelly::Message::compute_size(val);
      ce_data_content_type_size += ::pb_jelly::wire_format::serialized_length(6);
      ce_data_content_type_size += ::pb_jelly::varint::serialized_length(l as u64);
      ce_data_content_type_size += l;
    }
    size += ce_data_content_type_size;
    let mut ce_data_schema_size = 0;
    if self.ce_data_schema != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ce_data_schema;
      let l = ::pb_jelly::Message::compute_size(val);
      ce_data_schema_size += ::pb_jelly::wire_format::serialized_length(7);
      ce_data_schema_size += ::pb_jelly::varint::serialized_length(l as u64);
      ce_data_schema_size += l;
    }
    size += ce_data_schema_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.ce_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ce_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.ce_source != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ce_source;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.ce_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ce_type;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.ce_subject != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ce_subject;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.ce_spec_version != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ce_spec_version;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.ce_data_content_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ce_data_content_type;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.ce_data_schema != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ce_data_schema;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.ce_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ce_id;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.ce_source != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ce_source;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.ce_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ce_type;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.ce_subject != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ce_subject;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.ce_spec_version != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ce_spec_version;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.ce_data_content_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ce_data_content_type;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.ce_data_schema != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ce_data_schema;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CloudEventSettings", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.ce_id = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CloudEventSettings", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.ce_source = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CloudEventSettings", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.ce_type = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CloudEventSettings", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.ce_subject = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CloudEventSettings", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.ce_spec_version = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CloudEventSettings", 6)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.ce_data_content_type = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CloudEventSettings", 7)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.ce_data_schema = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for CloudEventSettings {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "ce_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.ce_id)
      }
      "ce_source" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.ce_source)
      }
      "ce_type" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.ce_type)
      }
      "ce_subject" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.ce_subject)
      }
      "ce_spec_version" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.ce_spec_version)
      }
      "ce_data_content_type" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.ce_data_content_type)
      }
      "ce_data_schema" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.ce_data_schema)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct EncodeOptions {
  /// Use an existing schema for encoding (and ignore all other encode settings)
  /// @gotags: kong:"-"
  pub schema_id: ::std::string::String,
  /// @gotags: kong:"help='Encode type (options: unset, jsonpb, avro)',default=unset,type=pbenum,pbenum_strip_prefix=ENCODE_TYPE_,pbenum_lowercase"
  pub encode_type: EncodeType,
  /// @gotags: kong:"embed,group=protobuf"
  pub protobuf_settings: ::std::option::Option<ProtobufSettings>,
  /// @gotags: kong:"embed,group=avro"
  pub avro_settings: ::std::option::Option<AvroSettings>,
  /// @gotags: kong:"embed,group=cloudevent"
  pub cloudevent_settings: ::std::option::Option<CloudEventSettings>,
}
impl ::std::default::Default for EncodeOptions {
  fn default() -> Self {
    EncodeOptions {
      schema_id: ::std::default::Default::default(),
      encode_type: ::std::default::Default::default(),
      protobuf_settings: ::std::default::Default::default(),
      avro_settings: ::std::default::Default::default(),
      cloudevent_settings: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref EncodeOptions_default: EncodeOptions = EncodeOptions::default();
}
impl ::pb_jelly::Message for EncodeOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "EncodeOptions",
      full_name: "protos.encoding.EncodeOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "schema_id",
          full_name: "protos.encoding.EncodeOptions.schema_id",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "encode_type",
          full_name: "protos.encoding.EncodeOptions.encode_type",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "protobuf_settings",
          full_name: "protos.encoding.EncodeOptions.protobuf_settings",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "avro_settings",
          full_name: "protos.encoding.EncodeOptions.avro_settings",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "cloudevent_settings",
          full_name: "protos.encoding.EncodeOptions.cloudevent_settings",
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
    let mut schema_id_size = 0;
    if self.schema_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.schema_id;
      let l = ::pb_jelly::Message::compute_size(val);
      schema_id_size += ::pb_jelly::wire_format::serialized_length(1);
      schema_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      schema_id_size += l;
    }
    size += schema_id_size;
    let mut encode_type_size = 0;
    if self.encode_type != <EncodeType as ::std::default::Default>::default() {
      let val = &self.encode_type;
      let l = ::pb_jelly::Message::compute_size(val);
      encode_type_size += ::pb_jelly::wire_format::serialized_length(2);
      encode_type_size += l;
    }
    size += encode_type_size;
    let mut protobuf_settings_size = 0;
    for val in &self.protobuf_settings {
      let l = ::pb_jelly::Message::compute_size(val);
      protobuf_settings_size += ::pb_jelly::wire_format::serialized_length(3);
      protobuf_settings_size += ::pb_jelly::varint::serialized_length(l as u64);
      protobuf_settings_size += l;
    }
    size += protobuf_settings_size;
    let mut avro_settings_size = 0;
    for val in &self.avro_settings {
      let l = ::pb_jelly::Message::compute_size(val);
      avro_settings_size += ::pb_jelly::wire_format::serialized_length(4);
      avro_settings_size += ::pb_jelly::varint::serialized_length(l as u64);
      avro_settings_size += l;
    }
    size += avro_settings_size;
    let mut cloudevent_settings_size = 0;
    for val in &self.cloudevent_settings {
      let l = ::pb_jelly::Message::compute_size(val);
      cloudevent_settings_size += ::pb_jelly::wire_format::serialized_length(5);
      cloudevent_settings_size += ::pb_jelly::varint::serialized_length(l as u64);
      cloudevent_settings_size += l;
    }
    size += cloudevent_settings_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.schema_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.schema_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.encode_type != <EncodeType as ::std::default::Default>::default() {
      let val = &self.encode_type;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.protobuf_settings {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.avro_settings {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.cloudevent_settings {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.schema_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.schema_id;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.encode_type != <EncodeType as ::std::default::Default>::default() {
      let val = &self.encode_type;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.protobuf_settings {
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.avro_settings {
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.cloudevent_settings {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "EncodeOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.schema_id = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "EncodeOptions", 2)?;
          let mut val: EncodeType = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.encode_type = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "EncodeOptions", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ProtobufSettings = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.protobuf_settings = Some(val);
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "EncodeOptions", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: AvroSettings = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.avro_settings = Some(val);
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "EncodeOptions", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: CloudEventSettings = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.cloudevent_settings = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for EncodeOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "schema_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.schema_id)
      }
      "encode_type" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.encode_type)
      }
      "protobuf_settings" => {
        ::pb_jelly::reflection::FieldMut::Value(self.protobuf_settings.get_or_insert_with(::std::default::Default::default))
      }
      "avro_settings" => {
        ::pb_jelly::reflection::FieldMut::Value(self.avro_settings.get_or_insert_with(::std::default::Default::default))
      }
      "cloudevent_settings" => {
        ::pb_jelly::reflection::FieldMut::Value(self.cloudevent_settings.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct DecodeOptions {
  /// Use an existing schema for decoding (and ignore all other decode settings)
  /// @gotags: kong:"-"
  pub schema_id: ::std::string::String,
  /// @gotags: kong:"help='Decode type (options: unset, protobuf, avro, thrift, flatbuffer)',type=pbenum,pbenum_strip_prefix=DECODE_TYPE_,pbenum_lowercase,default=unset"
  pub decode_type: DecodeType,
  /// @gotags: kong:"embed,group=protobuf"
  pub protobuf_settings: ::std::option::Option<ProtobufSettings>,
  /// @gotags: kong:"embed,group=avro"
  pub avro_settings: ::std::option::Option<AvroSettings>,
  /// @gotags: kong:"embed,group=thrift"
  pub thrift_settings: ::std::option::Option<ThriftSettings>,
}
impl ::std::default::Default for DecodeOptions {
  fn default() -> Self {
    DecodeOptions {
      schema_id: ::std::default::Default::default(),
      decode_type: ::std::default::Default::default(),
      protobuf_settings: ::std::default::Default::default(),
      avro_settings: ::std::default::Default::default(),
      thrift_settings: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref DecodeOptions_default: DecodeOptions = DecodeOptions::default();
}
impl ::pb_jelly::Message for DecodeOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "DecodeOptions",
      full_name: "protos.encoding.DecodeOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "schema_id",
          full_name: "protos.encoding.DecodeOptions.schema_id",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "decode_type",
          full_name: "protos.encoding.DecodeOptions.decode_type",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "protobuf_settings",
          full_name: "protos.encoding.DecodeOptions.protobuf_settings",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "avro_settings",
          full_name: "protos.encoding.DecodeOptions.avro_settings",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "thrift_settings",
          full_name: "protos.encoding.DecodeOptions.thrift_settings",
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
    let mut schema_id_size = 0;
    if self.schema_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.schema_id;
      let l = ::pb_jelly::Message::compute_size(val);
      schema_id_size += ::pb_jelly::wire_format::serialized_length(1);
      schema_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      schema_id_size += l;
    }
    size += schema_id_size;
    let mut decode_type_size = 0;
    if self.decode_type != <DecodeType as ::std::default::Default>::default() {
      let val = &self.decode_type;
      let l = ::pb_jelly::Message::compute_size(val);
      decode_type_size += ::pb_jelly::wire_format::serialized_length(2);
      decode_type_size += l;
    }
    size += decode_type_size;
    let mut protobuf_settings_size = 0;
    for val in &self.protobuf_settings {
      let l = ::pb_jelly::Message::compute_size(val);
      protobuf_settings_size += ::pb_jelly::wire_format::serialized_length(3);
      protobuf_settings_size += ::pb_jelly::varint::serialized_length(l as u64);
      protobuf_settings_size += l;
    }
    size += protobuf_settings_size;
    let mut avro_settings_size = 0;
    for val in &self.avro_settings {
      let l = ::pb_jelly::Message::compute_size(val);
      avro_settings_size += ::pb_jelly::wire_format::serialized_length(4);
      avro_settings_size += ::pb_jelly::varint::serialized_length(l as u64);
      avro_settings_size += l;
    }
    size += avro_settings_size;
    let mut thrift_settings_size = 0;
    for val in &self.thrift_settings {
      let l = ::pb_jelly::Message::compute_size(val);
      thrift_settings_size += ::pb_jelly::wire_format::serialized_length(5);
      thrift_settings_size += ::pb_jelly::varint::serialized_length(l as u64);
      thrift_settings_size += l;
    }
    size += thrift_settings_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.schema_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.schema_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.decode_type != <DecodeType as ::std::default::Default>::default() {
      let val = &self.decode_type;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.protobuf_settings {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.avro_settings {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.thrift_settings {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.schema_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.schema_id;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.decode_type != <DecodeType as ::std::default::Default>::default() {
      let val = &self.decode_type;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.protobuf_settings {
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.avro_settings {
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.thrift_settings {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "DecodeOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.schema_id = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "DecodeOptions", 2)?;
          let mut val: DecodeType = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.decode_type = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "DecodeOptions", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ProtobufSettings = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.protobuf_settings = Some(val);
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "DecodeOptions", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: AvroSettings = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.avro_settings = Some(val);
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "DecodeOptions", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ThriftSettings = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.thrift_settings = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for DecodeOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "schema_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.schema_id)
      }
      "decode_type" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.decode_type)
      }
      "protobuf_settings" => {
        ::pb_jelly::reflection::FieldMut::Value(self.protobuf_settings.get_or_insert_with(::std::default::Default::default))
      }
      "avro_settings" => {
        ::pb_jelly::reflection::FieldMut::Value(self.avro_settings.get_or_insert_with(::std::default::Default::default))
      }
      "thrift_settings" => {
        ::pb_jelly::reflection::FieldMut::Value(self.thrift_settings.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

