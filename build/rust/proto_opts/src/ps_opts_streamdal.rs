// @generated, do not edit
#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[repr(transparent)]
pub struct StreamdalOutputType(i32);
impl StreamdalOutputType {
  pub const TABLE: StreamdalOutputType = StreamdalOutputType(0);
  pub const JSON: StreamdalOutputType = StreamdalOutputType(1);
  pub const KNOWN_VARIANTS: [StreamdalOutputType; 2] = [StreamdalOutputType::TABLE, StreamdalOutputType::JSON];
  pub const fn value(self) -> i32 {
    self.0
  }
  pub fn into_known(self) -> ::std::option::Option<StreamdalOutputType_Closed> {
    match self {
      StreamdalOutputType::TABLE => Some(StreamdalOutputType_Closed::TABLE),
      StreamdalOutputType::JSON => Some(StreamdalOutputType_Closed::JSON),
      _ => None,
    }
  }
}
impl ::std::default::Default for StreamdalOutputType {
  fn default() -> Self {
    StreamdalOutputType::TABLE
  }
}
impl From<StreamdalOutputType> for i32 {
  fn from(v: StreamdalOutputType) -> i32 {
    v.0
  }
}
impl From<i32> for StreamdalOutputType {
  fn from(v: i32) -> StreamdalOutputType {
    StreamdalOutputType(v)
  }
}
impl From<StreamdalOutputType_Closed> for StreamdalOutputType {
  fn from(v: StreamdalOutputType_Closed) -> StreamdalOutputType {
    StreamdalOutputType(v as i32)
  }
}
impl ::pb_jelly::ProtoEnum for StreamdalOutputType {
}
impl ::pb_jelly::OpenProtoEnum for StreamdalOutputType {
  fn name(self) -> ::std::option::Option<&'static str> {
    match self {
      StreamdalOutputType::TABLE => Some("TABLE"),
      StreamdalOutputType::JSON => Some("JSON"),
      _ => None,
    }
  }
  fn is_known(self) -> bool {
    match self {
      StreamdalOutputType::TABLE => true,
      StreamdalOutputType::JSON => true,
      _ => false,
    }
  }
}
impl ::std::fmt::Debug for StreamdalOutputType {
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
pub enum StreamdalOutputType_Closed {
  TABLE = 0,
  JSON = 1,
}
impl StreamdalOutputType_Closed {
  pub const KNOWN_VARIANTS: [StreamdalOutputType_Closed; 2] = [StreamdalOutputType_Closed::TABLE, StreamdalOutputType_Closed::JSON];
}
impl ::std::default::Default for StreamdalOutputType_Closed {
  fn default() -> Self {
    StreamdalOutputType_Closed::TABLE
  }
}
impl From<StreamdalOutputType_Closed> for i32 {
  fn from(v: StreamdalOutputType_Closed) -> i32 {
    match v {
      StreamdalOutputType_Closed::TABLE => 0,
      StreamdalOutputType_Closed::JSON => 1,
    }
  }
}
impl ::std::convert::TryFrom<i32> for StreamdalOutputType_Closed {
  type Error = i32;
  fn try_from(v: i32) -> ::std::result::Result<Self, i32> {
    match v {
      0 => Ok(StreamdalOutputType_Closed::TABLE),
      1 => Ok(StreamdalOutputType_Closed::JSON),
      _ => Err(v),
    }
  }
}
impl ::pb_jelly::ProtoEnum for StreamdalOutputType_Closed {
}
impl ::pb_jelly::ClosedProtoEnum for StreamdalOutputType_Closed {
  fn name(self) -> &'static str {
    match self {
      StreamdalOutputType_Closed::TABLE => "TABLE",
      StreamdalOutputType_Closed::JSON => "JSON",
    }
  }
}

#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[repr(transparent)]
pub struct StreamdalReplayType(i32);
impl StreamdalReplayType {
  pub const SINGLE: StreamdalReplayType = StreamdalReplayType(0);
  pub const CONTINUOUS: StreamdalReplayType = StreamdalReplayType(1);
  pub const KNOWN_VARIANTS: [StreamdalReplayType; 2] = [StreamdalReplayType::SINGLE, StreamdalReplayType::CONTINUOUS];
  pub const fn value(self) -> i32 {
    self.0
  }
  pub fn into_known(self) -> ::std::option::Option<StreamdalReplayType_Closed> {
    match self {
      StreamdalReplayType::SINGLE => Some(StreamdalReplayType_Closed::SINGLE),
      StreamdalReplayType::CONTINUOUS => Some(StreamdalReplayType_Closed::CONTINUOUS),
      _ => None,
    }
  }
}
impl ::std::default::Default for StreamdalReplayType {
  fn default() -> Self {
    StreamdalReplayType::SINGLE
  }
}
impl From<StreamdalReplayType> for i32 {
  fn from(v: StreamdalReplayType) -> i32 {
    v.0
  }
}
impl From<i32> for StreamdalReplayType {
  fn from(v: i32) -> StreamdalReplayType {
    StreamdalReplayType(v)
  }
}
impl From<StreamdalReplayType_Closed> for StreamdalReplayType {
  fn from(v: StreamdalReplayType_Closed) -> StreamdalReplayType {
    StreamdalReplayType(v as i32)
  }
}
impl ::pb_jelly::ProtoEnum for StreamdalReplayType {
}
impl ::pb_jelly::OpenProtoEnum for StreamdalReplayType {
  fn name(self) -> ::std::option::Option<&'static str> {
    match self {
      StreamdalReplayType::SINGLE => Some("SINGLE"),
      StreamdalReplayType::CONTINUOUS => Some("CONTINUOUS"),
      _ => None,
    }
  }
  fn is_known(self) -> bool {
    match self {
      StreamdalReplayType::SINGLE => true,
      StreamdalReplayType::CONTINUOUS => true,
      _ => false,
    }
  }
}
impl ::std::fmt::Debug for StreamdalReplayType {
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
pub enum StreamdalReplayType_Closed {
  SINGLE = 0,
  CONTINUOUS = 1,
}
impl StreamdalReplayType_Closed {
  pub const KNOWN_VARIANTS: [StreamdalReplayType_Closed; 2] = [StreamdalReplayType_Closed::SINGLE, StreamdalReplayType_Closed::CONTINUOUS];
}
impl ::std::default::Default for StreamdalReplayType_Closed {
  fn default() -> Self {
    StreamdalReplayType_Closed::SINGLE
  }
}
impl From<StreamdalReplayType_Closed> for i32 {
  fn from(v: StreamdalReplayType_Closed) -> i32 {
    match v {
      StreamdalReplayType_Closed::SINGLE => 0,
      StreamdalReplayType_Closed::CONTINUOUS => 1,
    }
  }
}
impl ::std::convert::TryFrom<i32> for StreamdalReplayType_Closed {
  type Error = i32;
  fn try_from(v: i32) -> ::std::result::Result<Self, i32> {
    match v {
      0 => Ok(StreamdalReplayType_Closed::SINGLE),
      1 => Ok(StreamdalReplayType_Closed::CONTINUOUS),
      _ => Err(v),
    }
  }
}
impl ::pb_jelly::ProtoEnum for StreamdalReplayType_Closed {
}
impl ::pb_jelly::ClosedProtoEnum for StreamdalReplayType_Closed {
  fn name(self) -> &'static str {
    match self {
      StreamdalReplayType_Closed::SINGLE => "SINGLE",
      StreamdalReplayType_Closed::CONTINUOUS => "CONTINUOUS",
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct StreamdalOptions {
  /// @gotags: kong:"help='How to output results (options: table json)',default=table,type=pbenum,pbenum_lowercase"
  pub output_type: StreamdalOutputType,
  /// @gotags: kong:"help='Alternative URL to use for Streamdal API',default='https://api.streamdal.com'"
  pub api_url: ::std::string::String,
  /// @gotags: kong:"cmd,help='Login to the Streamdal platform'"
  pub login: ::std::option::Option<StreamdalLoginOptions>,
  /// @gotags: kong:"cmd,help='Login to Streamdal'"
  pub logout: ::std::option::Option<StreamdalLogoutOptions>,
  /// @gotags: kong:"cmd,help='List Streamdal resources'"
  pub list: ::std::option::Option<StreamdalListOptions>,
  /// @gotags: kong:"cmd,help='Create operations'"
  pub create: ::std::option::Option<StreamdalCreateOptions>,
  /// @gotags: kong:"cmd,help='Search operations'"
  pub search: ::std::option::Option<StreamdalSearchOptions>,
  /// @gotags: kong:"cmd,help='Archive a resource'"
  pub archive: ::std::option::Option<StreamdalArchiveOptions>,
}
impl ::std::default::Default for StreamdalOptions {
  fn default() -> Self {
    StreamdalOptions {
      output_type: ::std::default::Default::default(),
      api_url: ::std::default::Default::default(),
      login: ::std::default::Default::default(),
      logout: ::std::default::Default::default(),
      list: ::std::default::Default::default(),
      create: ::std::default::Default::default(),
      search: ::std::default::Default::default(),
      archive: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref StreamdalOptions_default: StreamdalOptions = StreamdalOptions::default();
}
impl ::pb_jelly::Message for StreamdalOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "StreamdalOptions",
      full_name: "protos.opts.StreamdalOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "output_type",
          full_name: "protos.opts.StreamdalOptions.output_type",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "api_url",
          full_name: "protos.opts.StreamdalOptions.api_url",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "login",
          full_name: "protos.opts.StreamdalOptions.login",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "logout",
          full_name: "protos.opts.StreamdalOptions.logout",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "list",
          full_name: "protos.opts.StreamdalOptions.list",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "create",
          full_name: "protos.opts.StreamdalOptions.create",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "search",
          full_name: "protos.opts.StreamdalOptions.search",
          index: 6,
          number: 7,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "archive",
          full_name: "protos.opts.StreamdalOptions.archive",
          index: 7,
          number: 8,
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
    let mut output_type_size = 0;
    if self.output_type != <StreamdalOutputType as ::std::default::Default>::default() {
      let val = &self.output_type;
      let l = ::pb_jelly::Message::compute_size(val);
      output_type_size += ::pb_jelly::wire_format::serialized_length(1);
      output_type_size += l;
    }
    size += output_type_size;
    let mut api_url_size = 0;
    if self.api_url != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.api_url;
      let l = ::pb_jelly::Message::compute_size(val);
      api_url_size += ::pb_jelly::wire_format::serialized_length(2);
      api_url_size += ::pb_jelly::varint::serialized_length(l as u64);
      api_url_size += l;
    }
    size += api_url_size;
    let mut login_size = 0;
    for val in &self.login {
      let l = ::pb_jelly::Message::compute_size(val);
      login_size += ::pb_jelly::wire_format::serialized_length(3);
      login_size += ::pb_jelly::varint::serialized_length(l as u64);
      login_size += l;
    }
    size += login_size;
    let mut logout_size = 0;
    for val in &self.logout {
      let l = ::pb_jelly::Message::compute_size(val);
      logout_size += ::pb_jelly::wire_format::serialized_length(4);
      logout_size += ::pb_jelly::varint::serialized_length(l as u64);
      logout_size += l;
    }
    size += logout_size;
    let mut list_size = 0;
    for val in &self.list {
      let l = ::pb_jelly::Message::compute_size(val);
      list_size += ::pb_jelly::wire_format::serialized_length(5);
      list_size += ::pb_jelly::varint::serialized_length(l as u64);
      list_size += l;
    }
    size += list_size;
    let mut create_size = 0;
    for val in &self.create {
      let l = ::pb_jelly::Message::compute_size(val);
      create_size += ::pb_jelly::wire_format::serialized_length(6);
      create_size += ::pb_jelly::varint::serialized_length(l as u64);
      create_size += l;
    }
    size += create_size;
    let mut search_size = 0;
    for val in &self.search {
      let l = ::pb_jelly::Message::compute_size(val);
      search_size += ::pb_jelly::wire_format::serialized_length(7);
      search_size += ::pb_jelly::varint::serialized_length(l as u64);
      search_size += l;
    }
    size += search_size;
    let mut archive_size = 0;
    for val in &self.archive {
      let l = ::pb_jelly::Message::compute_size(val);
      archive_size += ::pb_jelly::wire_format::serialized_length(8);
      archive_size += ::pb_jelly::varint::serialized_length(l as u64);
      archive_size += l;
    }
    size += archive_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.output_type != <StreamdalOutputType as ::std::default::Default>::default() {
      let val = &self.output_type;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.api_url != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.api_url;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.login {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.logout {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.list {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.create {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.search {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.archive {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.output_type != <StreamdalOutputType as ::std::default::Default>::default() {
      let val = &self.output_type;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.api_url != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.api_url;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.login {
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.logout {
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.list {
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.create {
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.search {
      ::pb_jelly::wire_format::write(7, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.archive {
      ::pb_jelly::wire_format::write(8, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "StreamdalOptions", 1)?;
          let mut val: StreamdalOutputType = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.output_type = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.api_url = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalOptions", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: StreamdalLoginOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.login = Some(val);
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalOptions", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: StreamdalLogoutOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.logout = Some(val);
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalOptions", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: StreamdalListOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.list = Some(val);
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalOptions", 6)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: StreamdalCreateOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.create = Some(val);
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalOptions", 7)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: StreamdalSearchOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.search = Some(val);
        }
        8 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalOptions", 8)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: StreamdalArchiveOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.archive = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for StreamdalOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "output_type" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.output_type)
      }
      "api_url" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.api_url)
      }
      "login" => {
        ::pb_jelly::reflection::FieldMut::Value(self.login.get_or_insert_with(::std::default::Default::default))
      }
      "logout" => {
        ::pb_jelly::reflection::FieldMut::Value(self.logout.get_or_insert_with(::std::default::Default::default))
      }
      "list" => {
        ::pb_jelly::reflection::FieldMut::Value(self.list.get_or_insert_with(::std::default::Default::default))
      }
      "create" => {
        ::pb_jelly::reflection::FieldMut::Value(self.create.get_or_insert_with(::std::default::Default::default))
      }
      "search" => {
        ::pb_jelly::reflection::FieldMut::Value(self.search.get_or_insert_with(::std::default::Default::default))
      }
      "archive" => {
        ::pb_jelly::reflection::FieldMut::Value(self.archive.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

/// None
#[derive(Clone, Copy, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct StreamdalLoginOptions {
}
impl ::std::default::Default for StreamdalLoginOptions {
  fn default() -> Self {
    StreamdalLoginOptions {
    }
  }
}
lazy_static! {
  pub static ref StreamdalLoginOptions_default: StreamdalLoginOptions = StreamdalLoginOptions::default();
}
impl ::pb_jelly::Message for StreamdalLoginOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "StreamdalLoginOptions",
      full_name: "protos.opts.StreamdalLoginOptions",
      fields: &[
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    0
  }
  fn compute_grpc_slices_size(&self) -> usize {
    0
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for StreamdalLoginOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

/// None
#[derive(Clone, Copy, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct StreamdalLogoutOptions {
}
impl ::std::default::Default for StreamdalLogoutOptions {
  fn default() -> Self {
    StreamdalLogoutOptions {
    }
  }
}
lazy_static! {
  pub static ref StreamdalLogoutOptions_default: StreamdalLogoutOptions = StreamdalLogoutOptions::default();
}
impl ::pb_jelly::Message for StreamdalLogoutOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "StreamdalLogoutOptions",
      full_name: "protos.opts.StreamdalLogoutOptions",
      fields: &[
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    0
  }
  fn compute_grpc_slices_size(&self) -> usize {
    0
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for StreamdalLogoutOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

/// None
#[derive(Clone, Copy, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct StreamdalListCollectionOptions {
}
impl ::std::default::Default for StreamdalListCollectionOptions {
  fn default() -> Self {
    StreamdalListCollectionOptions {
    }
  }
}
lazy_static! {
  pub static ref StreamdalListCollectionOptions_default: StreamdalListCollectionOptions = StreamdalListCollectionOptions::default();
}
impl ::pb_jelly::Message for StreamdalListCollectionOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "StreamdalListCollectionOptions",
      full_name: "protos.opts.StreamdalListCollectionOptions",
      fields: &[
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    0
  }
  fn compute_grpc_slices_size(&self) -> usize {
    0
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for StreamdalListCollectionOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

/// None
#[derive(Clone, Copy, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct StreamdalListDestinationOptions {
}
impl ::std::default::Default for StreamdalListDestinationOptions {
  fn default() -> Self {
    StreamdalListDestinationOptions {
    }
  }
}
lazy_static! {
  pub static ref StreamdalListDestinationOptions_default: StreamdalListDestinationOptions = StreamdalListDestinationOptions::default();
}
impl ::pb_jelly::Message for StreamdalListDestinationOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "StreamdalListDestinationOptions",
      full_name: "protos.opts.StreamdalListDestinationOptions",
      fields: &[
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    0
  }
  fn compute_grpc_slices_size(&self) -> usize {
    0
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for StreamdalListDestinationOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

/// None
#[derive(Clone, Copy, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct StreamdalListSchemaOptions {
}
impl ::std::default::Default for StreamdalListSchemaOptions {
  fn default() -> Self {
    StreamdalListSchemaOptions {
    }
  }
}
lazy_static! {
  pub static ref StreamdalListSchemaOptions_default: StreamdalListSchemaOptions = StreamdalListSchemaOptions::default();
}
impl ::pb_jelly::Message for StreamdalListSchemaOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "StreamdalListSchemaOptions",
      full_name: "protos.opts.StreamdalListSchemaOptions",
      fields: &[
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    0
  }
  fn compute_grpc_slices_size(&self) -> usize {
    0
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for StreamdalListSchemaOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

/// None
#[derive(Clone, Copy, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct StreamdalListReplayOptions {
}
impl ::std::default::Default for StreamdalListReplayOptions {
  fn default() -> Self {
    StreamdalListReplayOptions {
    }
  }
}
lazy_static! {
  pub static ref StreamdalListReplayOptions_default: StreamdalListReplayOptions = StreamdalListReplayOptions::default();
}
impl ::pb_jelly::Message for StreamdalListReplayOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "StreamdalListReplayOptions",
      full_name: "protos.opts.StreamdalListReplayOptions",
      fields: &[
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    0
  }
  fn compute_grpc_slices_size(&self) -> usize {
    0
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for StreamdalListReplayOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct StreamdalArchiveOptions {
  /// @gotags: kong:"embed,cmd,help='Archive a replay'"
  pub replay: ::std::option::Option<StreamdalArchiveReplayOptions>,
}
impl ::std::default::Default for StreamdalArchiveOptions {
  fn default() -> Self {
    StreamdalArchiveOptions {
      replay: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref StreamdalArchiveOptions_default: StreamdalArchiveOptions = StreamdalArchiveOptions::default();
}
impl ::pb_jelly::Message for StreamdalArchiveOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "StreamdalArchiveOptions",
      full_name: "protos.opts.StreamdalArchiveOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "replay",
          full_name: "protos.opts.StreamdalArchiveOptions.replay",
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
    let mut replay_size = 0;
    for val in &self.replay {
      let l = ::pb_jelly::Message::compute_size(val);
      replay_size += ::pb_jelly::wire_format::serialized_length(1);
      replay_size += ::pb_jelly::varint::serialized_length(l as u64);
      replay_size += l;
    }
    size += replay_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.replay {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.replay {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalArchiveOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: StreamdalArchiveReplayOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.replay = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for StreamdalArchiveOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "replay" => {
        ::pb_jelly::reflection::FieldMut::Value(self.replay.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct StreamdalArchiveReplayOptions {
  /// @gotags: kong:"help='Replay ID to archive',required"
  pub replay_id: ::std::string::String,
}
impl ::std::default::Default for StreamdalArchiveReplayOptions {
  fn default() -> Self {
    StreamdalArchiveReplayOptions {
      replay_id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref StreamdalArchiveReplayOptions_default: StreamdalArchiveReplayOptions = StreamdalArchiveReplayOptions::default();
}
impl ::pb_jelly::Message for StreamdalArchiveReplayOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "StreamdalArchiveReplayOptions",
      full_name: "protos.opts.StreamdalArchiveReplayOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "replay_id",
          full_name: "protos.opts.StreamdalArchiveReplayOptions.replay_id",
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
    let mut replay_id_size = 0;
    if self.replay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.replay_id;
      let l = ::pb_jelly::Message::compute_size(val);
      replay_id_size += ::pb_jelly::wire_format::serialized_length(1);
      replay_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      replay_id_size += l;
    }
    size += replay_id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.replay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.replay_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.replay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.replay_id;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalArchiveReplayOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.replay_id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for StreamdalArchiveReplayOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "replay_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.replay_id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Copy, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct StreamdalListOptions {
  /// @gotags: kong:"cmd,help='List all collections'"
  pub collection: ::std::option::Option<StreamdalListCollectionOptions>,
  /// @gotags: kong:"cmd,help='List all destinations'"
  pub destination: ::std::option::Option<StreamdalListDestinationOptions>,
  /// @gotags: kong:"cmd,help='List all replays'"
  pub replay: ::std::option::Option<StreamdalListReplayOptions>,
  /// @gotags: kong:"cmd,help='List all schemas'"
  pub schema: ::std::option::Option<StreamdalListSchemaOptions>,
}
impl ::std::default::Default for StreamdalListOptions {
  fn default() -> Self {
    StreamdalListOptions {
      collection: ::std::default::Default::default(),
      destination: ::std::default::Default::default(),
      replay: ::std::default::Default::default(),
      schema: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref StreamdalListOptions_default: StreamdalListOptions = StreamdalListOptions::default();
}
impl ::pb_jelly::Message for StreamdalListOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "StreamdalListOptions",
      full_name: "protos.opts.StreamdalListOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "collection",
          full_name: "protos.opts.StreamdalListOptions.collection",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "destination",
          full_name: "protos.opts.StreamdalListOptions.destination",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "replay",
          full_name: "protos.opts.StreamdalListOptions.replay",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "schema",
          full_name: "protos.opts.StreamdalListOptions.schema",
          index: 3,
          number: 4,
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
    let mut collection_size = 0;
    for val in &self.collection {
      let l = ::pb_jelly::Message::compute_size(val);
      collection_size += ::pb_jelly::wire_format::serialized_length(1);
      collection_size += ::pb_jelly::varint::serialized_length(l as u64);
      collection_size += l;
    }
    size += collection_size;
    let mut destination_size = 0;
    for val in &self.destination {
      let l = ::pb_jelly::Message::compute_size(val);
      destination_size += ::pb_jelly::wire_format::serialized_length(2);
      destination_size += ::pb_jelly::varint::serialized_length(l as u64);
      destination_size += l;
    }
    size += destination_size;
    let mut replay_size = 0;
    for val in &self.replay {
      let l = ::pb_jelly::Message::compute_size(val);
      replay_size += ::pb_jelly::wire_format::serialized_length(3);
      replay_size += ::pb_jelly::varint::serialized_length(l as u64);
      replay_size += l;
    }
    size += replay_size;
    let mut schema_size = 0;
    for val in &self.schema {
      let l = ::pb_jelly::Message::compute_size(val);
      schema_size += ::pb_jelly::wire_format::serialized_length(4);
      schema_size += ::pb_jelly::varint::serialized_length(l as u64);
      schema_size += l;
    }
    size += schema_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.collection {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.destination {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.replay {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.schema {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.collection {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.destination {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.replay {
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.schema {
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalListOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: StreamdalListCollectionOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.collection = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalListOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: StreamdalListDestinationOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.destination = Some(val);
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalListOptions", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: StreamdalListReplayOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.replay = Some(val);
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalListOptions", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: StreamdalListSchemaOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.schema = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for StreamdalListOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "collection" => {
        ::pb_jelly::reflection::FieldMut::Value(self.collection.get_or_insert_with(::std::default::Default::default))
      }
      "destination" => {
        ::pb_jelly::reflection::FieldMut::Value(self.destination.get_or_insert_with(::std::default::Default::default))
      }
      "replay" => {
        ::pb_jelly::reflection::FieldMut::Value(self.replay.get_or_insert_with(::std::default::Default::default))
      }
      "schema" => {
        ::pb_jelly::reflection::FieldMut::Value(self.schema.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct StreamdalCreateOptions {
  /// @gotags: kong:"cmd,help='Create a collection'"
  pub collection: ::std::option::Option<StreamdalCreateCollectionOptions>,
  /// @gotags: kong:"cmd,help='Create a replay'"
  pub replay: ::std::option::Option<StreamdalCreateReplayOptions>,
  /// @gotags: kong:"cmd,help='Create a destination'"
  pub destination: ::std::option::Option<StreamdalCreateDestinationOptions>,
}
impl ::std::default::Default for StreamdalCreateOptions {
  fn default() -> Self {
    StreamdalCreateOptions {
      collection: ::std::default::Default::default(),
      replay: ::std::default::Default::default(),
      destination: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref StreamdalCreateOptions_default: StreamdalCreateOptions = StreamdalCreateOptions::default();
}
impl ::pb_jelly::Message for StreamdalCreateOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "StreamdalCreateOptions",
      full_name: "protos.opts.StreamdalCreateOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "collection",
          full_name: "protos.opts.StreamdalCreateOptions.collection",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "replay",
          full_name: "protos.opts.StreamdalCreateOptions.replay",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "destination",
          full_name: "protos.opts.StreamdalCreateOptions.destination",
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
    let mut collection_size = 0;
    for val in &self.collection {
      let l = ::pb_jelly::Message::compute_size(val);
      collection_size += ::pb_jelly::wire_format::serialized_length(1);
      collection_size += ::pb_jelly::varint::serialized_length(l as u64);
      collection_size += l;
    }
    size += collection_size;
    let mut replay_size = 0;
    for val in &self.replay {
      let l = ::pb_jelly::Message::compute_size(val);
      replay_size += ::pb_jelly::wire_format::serialized_length(2);
      replay_size += ::pb_jelly::varint::serialized_length(l as u64);
      replay_size += l;
    }
    size += replay_size;
    let mut destination_size = 0;
    for val in &self.destination {
      let l = ::pb_jelly::Message::compute_size(val);
      destination_size += ::pb_jelly::wire_format::serialized_length(3);
      destination_size += ::pb_jelly::varint::serialized_length(l as u64);
      destination_size += l;
    }
    size += destination_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.collection {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.replay {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.destination {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.collection {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.replay {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.destination {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: StreamdalCreateCollectionOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.collection = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: StreamdalCreateReplayOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.replay = Some(val);
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateOptions", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: StreamdalCreateDestinationOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.destination = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for StreamdalCreateOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "collection" => {
        ::pb_jelly::reflection::FieldMut::Value(self.collection.get_or_insert_with(::std::default::Default::default))
      }
      "replay" => {
        ::pb_jelly::reflection::FieldMut::Value(self.replay.get_or_insert_with(::std::default::Default::default))
      }
      "destination" => {
        ::pb_jelly::reflection::FieldMut::Value(self.destination.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct StreamdalSearchOptions {
  /// @gotags: kong:"help='Query to perform',default='*'"
  pub query: ::std::string::String,
  /// @gotags: kong:"help='Collection id to query',required"
  pub collection_id: ::std::string::String,
  /// @gotags: kong:"help='Which page to display',default=1"
  pub page: i32,
}
impl ::std::default::Default for StreamdalSearchOptions {
  fn default() -> Self {
    StreamdalSearchOptions {
      query: ::std::default::Default::default(),
      collection_id: ::std::default::Default::default(),
      page: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref StreamdalSearchOptions_default: StreamdalSearchOptions = StreamdalSearchOptions::default();
}
impl ::pb_jelly::Message for StreamdalSearchOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "StreamdalSearchOptions",
      full_name: "protos.opts.StreamdalSearchOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "query",
          full_name: "protos.opts.StreamdalSearchOptions.query",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "collection_id",
          full_name: "protos.opts.StreamdalSearchOptions.collection_id",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "page",
          full_name: "protos.opts.StreamdalSearchOptions.page",
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
    let mut query_size = 0;
    if self.query != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.query;
      let l = ::pb_jelly::Message::compute_size(val);
      query_size += ::pb_jelly::wire_format::serialized_length(1);
      query_size += ::pb_jelly::varint::serialized_length(l as u64);
      query_size += l;
    }
    size += query_size;
    let mut collection_id_size = 0;
    if self.collection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.collection_id;
      let l = ::pb_jelly::Message::compute_size(val);
      collection_id_size += ::pb_jelly::wire_format::serialized_length(2);
      collection_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      collection_id_size += l;
    }
    size += collection_id_size;
    let mut page_size = 0;
    if self.page != <i32 as ::std::default::Default>::default() {
      let val = &self.page;
      let l = ::pb_jelly::Message::compute_size(val);
      page_size += ::pb_jelly::wire_format::serialized_length(3);
      page_size += l;
    }
    size += page_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.query != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.query;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.collection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.collection_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.page != <i32 as ::std::default::Default>::default() {
      let val = &self.page;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.query != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.query;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.collection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.collection_id;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.page != <i32 as ::std::default::Default>::default() {
      let val = &self.page;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalSearchOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.query = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalSearchOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.collection_id = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "StreamdalSearchOptions", 3)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.page = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for StreamdalSearchOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "query" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.query)
      }
      "collection_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.collection_id)
      }
      "page" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.page)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct StreamdalCreateCollectionOptions {
  /// @gotags: kong:"help='Friendly name for the collection',required"
  pub name: ::std::string::String,
  /// @gotags: kong:"help='Schema the collection will use (can be obtained running _plumber streamdal list schema_)',required"
  pub schema_id: ::std::string::String,
  /// @gotags: kong:"help='Optional notes for the collection'"
  pub notes: ::std::string::String,
  /// @gotags: kong:"help='(Protobuf Schemas Only) Envelope Type (deep or shallow)',default='deep'"
  pub envelope_type: ::std::string::String,
  /// @gotags: kong:"help='(Protobuf Schemas Only) Envelope Message Name (Ex: events.MessageEnvelope)'"
  pub envelope_root_message: ::std::string::String,
  /// @gotags: kong:"help='(Shallow Envelope Protobuf Schemas Only) Payload Message Name (Ex: events.ShallowPayload)'"
  pub payload_field_message: ::std::string::String,
  /// @gotags: kong:"help='(Shallow Envelope Protobuf Schemas Only) Field ID containing the message encoded with Payload Message'"
  pub payload_field_id: ::std::string::String,
}
impl ::std::default::Default for StreamdalCreateCollectionOptions {
  fn default() -> Self {
    StreamdalCreateCollectionOptions {
      name: ::std::default::Default::default(),
      schema_id: ::std::default::Default::default(),
      notes: ::std::default::Default::default(),
      envelope_type: ::std::default::Default::default(),
      envelope_root_message: ::std::default::Default::default(),
      payload_field_message: ::std::default::Default::default(),
      payload_field_id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref StreamdalCreateCollectionOptions_default: StreamdalCreateCollectionOptions = StreamdalCreateCollectionOptions::default();
}
impl ::pb_jelly::Message for StreamdalCreateCollectionOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "StreamdalCreateCollectionOptions",
      full_name: "protos.opts.StreamdalCreateCollectionOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "name",
          full_name: "protos.opts.StreamdalCreateCollectionOptions.name",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "schema_id",
          full_name: "protos.opts.StreamdalCreateCollectionOptions.schema_id",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "notes",
          full_name: "protos.opts.StreamdalCreateCollectionOptions.notes",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "envelope_type",
          full_name: "protos.opts.StreamdalCreateCollectionOptions.envelope_type",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "envelope_root_message",
          full_name: "protos.opts.StreamdalCreateCollectionOptions.envelope_root_message",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "payload_field_message",
          full_name: "protos.opts.StreamdalCreateCollectionOptions.payload_field_message",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "payload_field_id",
          full_name: "protos.opts.StreamdalCreateCollectionOptions.payload_field_id",
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
    let mut name_size = 0;
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
      let l = ::pb_jelly::Message::compute_size(val);
      name_size += ::pb_jelly::wire_format::serialized_length(1);
      name_size += ::pb_jelly::varint::serialized_length(l as u64);
      name_size += l;
    }
    size += name_size;
    let mut schema_id_size = 0;
    if self.schema_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.schema_id;
      let l = ::pb_jelly::Message::compute_size(val);
      schema_id_size += ::pb_jelly::wire_format::serialized_length(2);
      schema_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      schema_id_size += l;
    }
    size += schema_id_size;
    let mut notes_size = 0;
    if self.notes != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.notes;
      let l = ::pb_jelly::Message::compute_size(val);
      notes_size += ::pb_jelly::wire_format::serialized_length(3);
      notes_size += ::pb_jelly::varint::serialized_length(l as u64);
      notes_size += l;
    }
    size += notes_size;
    let mut envelope_type_size = 0;
    if self.envelope_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.envelope_type;
      let l = ::pb_jelly::Message::compute_size(val);
      envelope_type_size += ::pb_jelly::wire_format::serialized_length(4);
      envelope_type_size += ::pb_jelly::varint::serialized_length(l as u64);
      envelope_type_size += l;
    }
    size += envelope_type_size;
    let mut envelope_root_message_size = 0;
    if self.envelope_root_message != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.envelope_root_message;
      let l = ::pb_jelly::Message::compute_size(val);
      envelope_root_message_size += ::pb_jelly::wire_format::serialized_length(5);
      envelope_root_message_size += ::pb_jelly::varint::serialized_length(l as u64);
      envelope_root_message_size += l;
    }
    size += envelope_root_message_size;
    let mut payload_field_message_size = 0;
    if self.payload_field_message != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.payload_field_message;
      let l = ::pb_jelly::Message::compute_size(val);
      payload_field_message_size += ::pb_jelly::wire_format::serialized_length(6);
      payload_field_message_size += ::pb_jelly::varint::serialized_length(l as u64);
      payload_field_message_size += l;
    }
    size += payload_field_message_size;
    let mut payload_field_id_size = 0;
    if self.payload_field_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.payload_field_id;
      let l = ::pb_jelly::Message::compute_size(val);
      payload_field_id_size += ::pb_jelly::wire_format::serialized_length(7);
      payload_field_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      payload_field_id_size += l;
    }
    size += payload_field_id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.schema_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.schema_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.notes != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.notes;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.envelope_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.envelope_type;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.envelope_root_message != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.envelope_root_message;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.payload_field_message != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.payload_field_message;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.payload_field_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.payload_field_id;
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
    if self.schema_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.schema_id;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.notes != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.notes;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.envelope_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.envelope_type;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.envelope_root_message != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.envelope_root_message;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.payload_field_message != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.payload_field_message;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.payload_field_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.payload_field_id;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateCollectionOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.name = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateCollectionOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.schema_id = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateCollectionOptions", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.notes = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateCollectionOptions", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.envelope_type = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateCollectionOptions", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.envelope_root_message = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateCollectionOptions", 6)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.payload_field_message = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateCollectionOptions", 7)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.payload_field_id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for StreamdalCreateCollectionOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
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
      "schema_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.schema_id)
      }
      "notes" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.notes)
      }
      "envelope_type" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.envelope_type)
      }
      "envelope_root_message" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.envelope_root_message)
      }
      "payload_field_message" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.payload_field_message)
      }
      "payload_field_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.payload_field_id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct StreamdalCreateReplayOptions {
  /// @gotags: kong:"help='Friendly name to assign to the replay',required"
  pub name: ::std::string::String,
  /// @gotags: kong:"help='One-time/single or continuous replay (options: single, continuous)',type=pbenum,pbenum_lowercase,default=single"
  pub type_: StreamdalReplayType,
  /// @gotags: kong:"help='Notes to attach to the replay'"
  pub notes: ::std::string::String,
  /// @gotags: kong:"help='Collection ID to replay from',required"
  pub collection_id: ::std::string::String,
  /// @gotags: kong:"help='Destination ID to replay to',required"
  pub destination_id: ::std::string::String,
  /// @gotags: kong:"help='Search query',default='*'"
  pub query: ::std::string::String,
  /// @gotags: kong:"help='Where to begin search (RFC3339 timestamp)',required"
  pub from_timestamp: ::std::string::String,
  /// @gotags: kong:"help='Where to end search (RFC3339 timestamp)',required"
  pub to_timestamp: ::std::string::String,
}
impl ::std::default::Default for StreamdalCreateReplayOptions {
  fn default() -> Self {
    StreamdalCreateReplayOptions {
      name: ::std::default::Default::default(),
      type_: ::std::default::Default::default(),
      notes: ::std::default::Default::default(),
      collection_id: ::std::default::Default::default(),
      destination_id: ::std::default::Default::default(),
      query: ::std::default::Default::default(),
      from_timestamp: ::std::default::Default::default(),
      to_timestamp: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref StreamdalCreateReplayOptions_default: StreamdalCreateReplayOptions = StreamdalCreateReplayOptions::default();
}
impl ::pb_jelly::Message for StreamdalCreateReplayOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "StreamdalCreateReplayOptions",
      full_name: "protos.opts.StreamdalCreateReplayOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "name",
          full_name: "protos.opts.StreamdalCreateReplayOptions.name",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "type_",
          full_name: "protos.opts.StreamdalCreateReplayOptions.type_",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "notes",
          full_name: "protos.opts.StreamdalCreateReplayOptions.notes",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "collection_id",
          full_name: "protos.opts.StreamdalCreateReplayOptions.collection_id",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "destination_id",
          full_name: "protos.opts.StreamdalCreateReplayOptions.destination_id",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "query",
          full_name: "protos.opts.StreamdalCreateReplayOptions.query",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "from_timestamp",
          full_name: "protos.opts.StreamdalCreateReplayOptions.from_timestamp",
          index: 6,
          number: 7,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "to_timestamp",
          full_name: "protos.opts.StreamdalCreateReplayOptions.to_timestamp",
          index: 7,
          number: 8,
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
    let mut name_size = 0;
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
      let l = ::pb_jelly::Message::compute_size(val);
      name_size += ::pb_jelly::wire_format::serialized_length(1);
      name_size += ::pb_jelly::varint::serialized_length(l as u64);
      name_size += l;
    }
    size += name_size;
    let mut type__size = 0;
    if self.type_ != <StreamdalReplayType as ::std::default::Default>::default() {
      let val = &self.type_;
      let l = ::pb_jelly::Message::compute_size(val);
      type__size += ::pb_jelly::wire_format::serialized_length(2);
      type__size += l;
    }
    size += type__size;
    let mut notes_size = 0;
    if self.notes != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.notes;
      let l = ::pb_jelly::Message::compute_size(val);
      notes_size += ::pb_jelly::wire_format::serialized_length(3);
      notes_size += ::pb_jelly::varint::serialized_length(l as u64);
      notes_size += l;
    }
    size += notes_size;
    let mut collection_id_size = 0;
    if self.collection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.collection_id;
      let l = ::pb_jelly::Message::compute_size(val);
      collection_id_size += ::pb_jelly::wire_format::serialized_length(4);
      collection_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      collection_id_size += l;
    }
    size += collection_id_size;
    let mut destination_id_size = 0;
    if self.destination_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.destination_id;
      let l = ::pb_jelly::Message::compute_size(val);
      destination_id_size += ::pb_jelly::wire_format::serialized_length(5);
      destination_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      destination_id_size += l;
    }
    size += destination_id_size;
    let mut query_size = 0;
    if self.query != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.query;
      let l = ::pb_jelly::Message::compute_size(val);
      query_size += ::pb_jelly::wire_format::serialized_length(6);
      query_size += ::pb_jelly::varint::serialized_length(l as u64);
      query_size += l;
    }
    size += query_size;
    let mut from_timestamp_size = 0;
    if self.from_timestamp != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.from_timestamp;
      let l = ::pb_jelly::Message::compute_size(val);
      from_timestamp_size += ::pb_jelly::wire_format::serialized_length(7);
      from_timestamp_size += ::pb_jelly::varint::serialized_length(l as u64);
      from_timestamp_size += l;
    }
    size += from_timestamp_size;
    let mut to_timestamp_size = 0;
    if self.to_timestamp != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.to_timestamp;
      let l = ::pb_jelly::Message::compute_size(val);
      to_timestamp_size += ::pb_jelly::wire_format::serialized_length(8);
      to_timestamp_size += ::pb_jelly::varint::serialized_length(l as u64);
      to_timestamp_size += l;
    }
    size += to_timestamp_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.type_ != <StreamdalReplayType as ::std::default::Default>::default() {
      let val = &self.type_;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.notes != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.notes;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.collection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.collection_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.destination_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.destination_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.query != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.query;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.from_timestamp != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.from_timestamp;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.to_timestamp != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.to_timestamp;
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
    if self.type_ != <StreamdalReplayType as ::std::default::Default>::default() {
      let val = &self.type_;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.notes != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.notes;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.collection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.collection_id;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.destination_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.destination_id;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.query != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.query;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.from_timestamp != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.from_timestamp;
      ::pb_jelly::wire_format::write(7, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.to_timestamp != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.to_timestamp;
      ::pb_jelly::wire_format::write(8, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateReplayOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.name = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "StreamdalCreateReplayOptions", 2)?;
          let mut val: StreamdalReplayType = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.type_ = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateReplayOptions", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.notes = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateReplayOptions", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.collection_id = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateReplayOptions", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.destination_id = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateReplayOptions", 6)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.query = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateReplayOptions", 7)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.from_timestamp = val;
        }
        8 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateReplayOptions", 8)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.to_timestamp = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for StreamdalCreateReplayOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
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
      "type_" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.type_)
      }
      "notes" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.notes)
      }
      "collection_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.collection_id)
      }
      "destination_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.destination_id)
      }
      "query" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.query)
      }
      "from_timestamp" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.from_timestamp)
      }
      "to_timestamp" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.to_timestamp)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct StreamdalCreateDestinationOptions {
  /// @gotags: kong:"help='Friendly name to assign to the destination',required"
  pub name: ::std::string::String,
  /// @gotags: kong:"help='Any notes to include with the destination'"
  pub notes: ::std::string::String,
  /// Used internally by CLI
  /// @gotags: kong:"-"
  pub _api_destination_type: ::std::string::String,
  /// @gotags: kong:"cmd,help='Apache Kafka'"
  pub kafka: ::std::option::Option<super::ps_opts_write::WriteGroupKafkaOptions>,
  /// @gotags: kong:"cmd,help='RabbitMQ'"
  pub rabbit: ::std::option::Option<super::ps_opts_write::WriteGroupRabbitOptions>,
  /// @gotags: kong:"cmd,help='KubeMQ Queue'"
  pub kubemq_queue: ::std::option::Option<super::ps_opts_write::WriteGroupKubeMQQueueOptions>,
  /// @gotags: kong:"cmd,help='AWS Simple Queue System'"
  pub aws_sqs: ::std::option::Option<super::ps_opts_write::WriteGroupAWSSQSOptions>,
  /// @gotags: kong:"cmd,help='HTTP Destination (POST)'"
  pub http: ::std::option::Option<HTTPDestination>,
}
impl ::std::default::Default for StreamdalCreateDestinationOptions {
  fn default() -> Self {
    StreamdalCreateDestinationOptions {
      name: ::std::default::Default::default(),
      notes: ::std::default::Default::default(),
      _api_destination_type: ::std::default::Default::default(),
      kafka: ::std::default::Default::default(),
      rabbit: ::std::default::Default::default(),
      kubemq_queue: ::std::default::Default::default(),
      aws_sqs: ::std::default::Default::default(),
      http: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref StreamdalCreateDestinationOptions_default: StreamdalCreateDestinationOptions = StreamdalCreateDestinationOptions::default();
}
impl ::pb_jelly::Message for StreamdalCreateDestinationOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "StreamdalCreateDestinationOptions",
      full_name: "protos.opts.StreamdalCreateDestinationOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "name",
          full_name: "protos.opts.StreamdalCreateDestinationOptions.name",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "notes",
          full_name: "protos.opts.StreamdalCreateDestinationOptions.notes",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_api_destination_type",
          full_name: "protos.opts.StreamdalCreateDestinationOptions._api_destination_type",
          index: 2,
          number: 1000,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "kafka",
          full_name: "protos.opts.StreamdalCreateDestinationOptions.kafka",
          index: 3,
          number: 100,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "rabbit",
          full_name: "protos.opts.StreamdalCreateDestinationOptions.rabbit",
          index: 4,
          number: 101,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "kubemq_queue",
          full_name: "protos.opts.StreamdalCreateDestinationOptions.kubemq_queue",
          index: 5,
          number: 102,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_sqs",
          full_name: "protos.opts.StreamdalCreateDestinationOptions.aws_sqs",
          index: 6,
          number: 103,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "http",
          full_name: "protos.opts.StreamdalCreateDestinationOptions.http",
          index: 7,
          number: 104,
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
    let mut _api_destination_type_size = 0;
    if self._api_destination_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._api_destination_type;
      let l = ::pb_jelly::Message::compute_size(val);
      _api_destination_type_size += ::pb_jelly::wire_format::serialized_length(1000);
      _api_destination_type_size += ::pb_jelly::varint::serialized_length(l as u64);
      _api_destination_type_size += l;
    }
    size += _api_destination_type_size;
    let mut kafka_size = 0;
    for val in &self.kafka {
      let l = ::pb_jelly::Message::compute_size(val);
      kafka_size += ::pb_jelly::wire_format::serialized_length(100);
      kafka_size += ::pb_jelly::varint::serialized_length(l as u64);
      kafka_size += l;
    }
    size += kafka_size;
    let mut rabbit_size = 0;
    for val in &self.rabbit {
      let l = ::pb_jelly::Message::compute_size(val);
      rabbit_size += ::pb_jelly::wire_format::serialized_length(101);
      rabbit_size += ::pb_jelly::varint::serialized_length(l as u64);
      rabbit_size += l;
    }
    size += rabbit_size;
    let mut kubemq_queue_size = 0;
    for val in &self.kubemq_queue {
      let l = ::pb_jelly::Message::compute_size(val);
      kubemq_queue_size += ::pb_jelly::wire_format::serialized_length(102);
      kubemq_queue_size += ::pb_jelly::varint::serialized_length(l as u64);
      kubemq_queue_size += l;
    }
    size += kubemq_queue_size;
    let mut aws_sqs_size = 0;
    for val in &self.aws_sqs {
      let l = ::pb_jelly::Message::compute_size(val);
      aws_sqs_size += ::pb_jelly::wire_format::serialized_length(103);
      aws_sqs_size += ::pb_jelly::varint::serialized_length(l as u64);
      aws_sqs_size += l;
    }
    size += aws_sqs_size;
    let mut http_size = 0;
    for val in &self.http {
      let l = ::pb_jelly::Message::compute_size(val);
      http_size += ::pb_jelly::wire_format::serialized_length(104);
      http_size += ::pb_jelly::varint::serialized_length(l as u64);
      http_size += l;
    }
    size += http_size;
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
    if self._api_destination_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._api_destination_type;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.kafka {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.rabbit {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.kubemq_queue {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.aws_sqs {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.http {
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
    for val in &self.kafka {
      ::pb_jelly::wire_format::write(100, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.rabbit {
      ::pb_jelly::wire_format::write(101, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.kubemq_queue {
      ::pb_jelly::wire_format::write(102, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.aws_sqs {
      ::pb_jelly::wire_format::write(103, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.http {
      ::pb_jelly::wire_format::write(104, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self._api_destination_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._api_destination_type;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateDestinationOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.name = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateDestinationOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.notes = val;
        }
        1000 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateDestinationOptions", 1000)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._api_destination_type = val;
        }
        100 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateDestinationOptions", 100)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_write::WriteGroupKafkaOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.kafka = Some(val);
        }
        101 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateDestinationOptions", 101)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_write::WriteGroupRabbitOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.rabbit = Some(val);
        }
        102 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateDestinationOptions", 102)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_write::WriteGroupKubeMQQueueOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.kubemq_queue = Some(val);
        }
        103 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateDestinationOptions", 103)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_write::WriteGroupAWSSQSOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.aws_sqs = Some(val);
        }
        104 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StreamdalCreateDestinationOptions", 104)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: HTTPDestination = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.http = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for StreamdalCreateDestinationOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
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
      "_api_destination_type" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._api_destination_type)
      }
      "kafka" => {
        ::pb_jelly::reflection::FieldMut::Value(self.kafka.get_or_insert_with(::std::default::Default::default))
      }
      "rabbit" => {
        ::pb_jelly::reflection::FieldMut::Value(self.rabbit.get_or_insert_with(::std::default::Default::default))
      }
      "kubemq_queue" => {
        ::pb_jelly::reflection::FieldMut::Value(self.kubemq_queue.get_or_insert_with(::std::default::Default::default))
      }
      "aws_sqs" => {
        ::pb_jelly::reflection::FieldMut::Value(self.aws_sqs.get_or_insert_with(::std::default::Default::default))
      }
      "http" => {
        ::pb_jelly::reflection::FieldMut::Value(self.http.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct HTTPDestination {
  /// @gotags: kong:"help='Full URL to HTTP server (ex: https://example.com/some/path)',required"
  pub url: ::std::string::String,
  /// @gotags: kong:"help='Optional map of headers to pass on replay (--headers key1=value1,key2=value2..)'"
  pub headers: ::std::vec::Vec<HTTPDestination_HeadersEntry>,
}
impl ::std::default::Default for HTTPDestination {
  fn default() -> Self {
    HTTPDestination {
      url: ::std::default::Default::default(),
      headers: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref HTTPDestination_default: HTTPDestination = HTTPDestination::default();
}
impl ::pb_jelly::Message for HTTPDestination {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "HTTPDestination",
      full_name: "protos.opts.HTTPDestination",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "url",
          full_name: "protos.opts.HTTPDestination.url",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "headers",
          full_name: "protos.opts.HTTPDestination.headers",
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
    let mut url_size = 0;
    if self.url != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.url;
      let l = ::pb_jelly::Message::compute_size(val);
      url_size += ::pb_jelly::wire_format::serialized_length(1);
      url_size += ::pb_jelly::varint::serialized_length(l as u64);
      url_size += l;
    }
    size += url_size;
    let mut headers_size = 0;
    for val in &self.headers {
      let l = ::pb_jelly::Message::compute_size(val);
      headers_size += ::pb_jelly::wire_format::serialized_length(2);
      headers_size += ::pb_jelly::varint::serialized_length(l as u64);
      headers_size += l;
    }
    size += headers_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.url != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.url;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.headers {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.url != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.url;
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
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "HTTPDestination", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.url = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "HTTPDestination", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: HTTPDestination_HeadersEntry = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.headers.push(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for HTTPDestination {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "url" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.url)
      }
      "headers" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct HTTPDestination_HeadersEntry {
  pub key: ::std::string::String,
  pub value: ::std::string::String,
}
impl ::std::default::Default for HTTPDestination_HeadersEntry {
  fn default() -> Self {
    HTTPDestination_HeadersEntry {
      key: ::std::default::Default::default(),
      value: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref HTTPDestination_HeadersEntry_default: HTTPDestination_HeadersEntry = HTTPDestination_HeadersEntry::default();
}
impl ::pb_jelly::Message for HTTPDestination_HeadersEntry {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "HTTPDestination_HeadersEntry",
      full_name: "protos.opts.HTTPDestination_HeadersEntry",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "key",
          full_name: "protos.opts.HTTPDestination_HeadersEntry.key",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "value",
          full_name: "protos.opts.HTTPDestination_HeadersEntry.value",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "HTTPDestination_HeadersEntry", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.key = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "HTTPDestination_HeadersEntry", 2)?;
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
impl ::pb_jelly::Reflection for HTTPDestination_HeadersEntry {
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

