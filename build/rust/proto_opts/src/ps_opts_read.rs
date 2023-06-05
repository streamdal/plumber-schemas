// @generated, do not edit
#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[repr(transparent)]
pub struct ConvertOption(i32);
impl ConvertOption {
  pub const CONVERT_OPTION_UNSET: ConvertOption = ConvertOption(0);
  pub const CONVERT_OPTION_BASE64: ConvertOption = ConvertOption(1);
  pub const CONVERT_OPTION_GZIP: ConvertOption = ConvertOption(2);
  pub const KNOWN_VARIANTS: [ConvertOption; 3] = [ConvertOption::CONVERT_OPTION_UNSET, ConvertOption::CONVERT_OPTION_BASE64, ConvertOption::CONVERT_OPTION_GZIP];
  pub const fn value(self) -> i32 {
    self.0
  }
  pub fn into_known(self) -> ::std::option::Option<ConvertOption_Closed> {
    match self {
      ConvertOption::CONVERT_OPTION_UNSET => Some(ConvertOption_Closed::CONVERT_OPTION_UNSET),
      ConvertOption::CONVERT_OPTION_BASE64 => Some(ConvertOption_Closed::CONVERT_OPTION_BASE64),
      ConvertOption::CONVERT_OPTION_GZIP => Some(ConvertOption_Closed::CONVERT_OPTION_GZIP),
      _ => None,
    }
  }
}
impl ::std::default::Default for ConvertOption {
  fn default() -> Self {
    ConvertOption::CONVERT_OPTION_UNSET
  }
}
impl From<ConvertOption> for i32 {
  fn from(v: ConvertOption) -> i32 {
    v.0
  }
}
impl From<i32> for ConvertOption {
  fn from(v: i32) -> ConvertOption {
    ConvertOption(v)
  }
}
impl From<ConvertOption_Closed> for ConvertOption {
  fn from(v: ConvertOption_Closed) -> ConvertOption {
    ConvertOption(v as i32)
  }
}
impl ::pb_jelly::ProtoEnum for ConvertOption {
}
impl ::pb_jelly::OpenProtoEnum for ConvertOption {
  fn name(self) -> ::std::option::Option<&'static str> {
    match self {
      ConvertOption::CONVERT_OPTION_UNSET => Some("CONVERT_OPTION_UNSET"),
      ConvertOption::CONVERT_OPTION_BASE64 => Some("CONVERT_OPTION_BASE64"),
      ConvertOption::CONVERT_OPTION_GZIP => Some("CONVERT_OPTION_GZIP"),
      _ => None,
    }
  }
  fn is_known(self) -> bool {
    match self {
      ConvertOption::CONVERT_OPTION_UNSET => true,
      ConvertOption::CONVERT_OPTION_BASE64 => true,
      ConvertOption::CONVERT_OPTION_GZIP => true,
      _ => false,
    }
  }
}
impl ::std::fmt::Debug for ConvertOption {
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
pub enum ConvertOption_Closed {
  CONVERT_OPTION_UNSET = 0,
  CONVERT_OPTION_BASE64 = 1,
  CONVERT_OPTION_GZIP = 2,
}
impl ConvertOption_Closed {
  pub const KNOWN_VARIANTS: [ConvertOption_Closed; 3] = [ConvertOption_Closed::CONVERT_OPTION_UNSET, ConvertOption_Closed::CONVERT_OPTION_BASE64, ConvertOption_Closed::CONVERT_OPTION_GZIP];
}
impl ::std::default::Default for ConvertOption_Closed {
  fn default() -> Self {
    ConvertOption_Closed::CONVERT_OPTION_UNSET
  }
}
impl From<ConvertOption_Closed> for i32 {
  fn from(v: ConvertOption_Closed) -> i32 {
    match v {
      ConvertOption_Closed::CONVERT_OPTION_UNSET => 0,
      ConvertOption_Closed::CONVERT_OPTION_BASE64 => 1,
      ConvertOption_Closed::CONVERT_OPTION_GZIP => 2,
    }
  }
}
impl ::std::convert::TryFrom<i32> for ConvertOption_Closed {
  type Error = i32;
  fn try_from(v: i32) -> ::std::result::Result<Self, i32> {
    match v {
      0 => Ok(ConvertOption_Closed::CONVERT_OPTION_UNSET),
      1 => Ok(ConvertOption_Closed::CONVERT_OPTION_BASE64),
      2 => Ok(ConvertOption_Closed::CONVERT_OPTION_GZIP),
      _ => Err(v),
    }
  }
}
impl ::pb_jelly::ProtoEnum for ConvertOption_Closed {
}
impl ::pb_jelly::ClosedProtoEnum for ConvertOption_Closed {
  fn name(self) -> &'static str {
    match self {
      ConvertOption_Closed::CONVERT_OPTION_UNSET => "CONVERT_OPTION_UNSET",
      ConvertOption_Closed::CONVERT_OPTION_BASE64 => "CONVERT_OPTION_BASE64",
      ConvertOption_Closed::CONVERT_OPTION_GZIP => "CONVERT_OPTION_GZIP",
    }
  }
}

#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[repr(transparent)]
pub struct InferSchemaOptions_Type(i32);
impl InferSchemaOptions_Type {
  pub const UNSET: InferSchemaOptions_Type = InferSchemaOptions_Type(0);
  /// TODO: expand with other types when we support them
  pub const JSONSCHEMA: InferSchemaOptions_Type = InferSchemaOptions_Type(1);
  pub const KNOWN_VARIANTS: [InferSchemaOptions_Type; 2] = [InferSchemaOptions_Type::UNSET, InferSchemaOptions_Type::JSONSCHEMA];
  pub const fn value(self) -> i32 {
    self.0
  }
  pub fn into_known(self) -> ::std::option::Option<InferSchemaOptions_Type_Closed> {
    match self {
      InferSchemaOptions_Type::UNSET => Some(InferSchemaOptions_Type_Closed::UNSET),
      InferSchemaOptions_Type::JSONSCHEMA => Some(InferSchemaOptions_Type_Closed::JSONSCHEMA),
      _ => None,
    }
  }
}
impl ::std::default::Default for InferSchemaOptions_Type {
  fn default() -> Self {
    InferSchemaOptions_Type::UNSET
  }
}
impl From<InferSchemaOptions_Type> for i32 {
  fn from(v: InferSchemaOptions_Type) -> i32 {
    v.0
  }
}
impl From<i32> for InferSchemaOptions_Type {
  fn from(v: i32) -> InferSchemaOptions_Type {
    InferSchemaOptions_Type(v)
  }
}
impl From<InferSchemaOptions_Type_Closed> for InferSchemaOptions_Type {
  fn from(v: InferSchemaOptions_Type_Closed) -> InferSchemaOptions_Type {
    InferSchemaOptions_Type(v as i32)
  }
}
impl ::pb_jelly::ProtoEnum for InferSchemaOptions_Type {
}
impl ::pb_jelly::OpenProtoEnum for InferSchemaOptions_Type {
  fn name(self) -> ::std::option::Option<&'static str> {
    match self {
      InferSchemaOptions_Type::UNSET => Some("UNSET"),
      InferSchemaOptions_Type::JSONSCHEMA => Some("JSONSCHEMA"),
      _ => None,
    }
  }
  fn is_known(self) -> bool {
    match self {
      InferSchemaOptions_Type::UNSET => true,
      InferSchemaOptions_Type::JSONSCHEMA => true,
      _ => false,
    }
  }
}
impl ::std::fmt::Debug for InferSchemaOptions_Type {
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
pub enum InferSchemaOptions_Type_Closed {
  UNSET = 0,
  /// TODO: expand with other types when we support them
  JSONSCHEMA = 1,
}
impl InferSchemaOptions_Type_Closed {
  pub const KNOWN_VARIANTS: [InferSchemaOptions_Type_Closed; 2] = [InferSchemaOptions_Type_Closed::UNSET, InferSchemaOptions_Type_Closed::JSONSCHEMA];
}
impl ::std::default::Default for InferSchemaOptions_Type_Closed {
  fn default() -> Self {
    InferSchemaOptions_Type_Closed::UNSET
  }
}
impl From<InferSchemaOptions_Type_Closed> for i32 {
  fn from(v: InferSchemaOptions_Type_Closed) -> i32 {
    match v {
      InferSchemaOptions_Type_Closed::UNSET => 0,
      InferSchemaOptions_Type_Closed::JSONSCHEMA => 1,
    }
  }
}
impl ::std::convert::TryFrom<i32> for InferSchemaOptions_Type_Closed {
  type Error = i32;
  fn try_from(v: i32) -> ::std::result::Result<Self, i32> {
    match v {
      0 => Ok(InferSchemaOptions_Type_Closed::UNSET),
      1 => Ok(InferSchemaOptions_Type_Closed::JSONSCHEMA),
      _ => Err(v),
    }
  }
}
impl ::pb_jelly::ProtoEnum for InferSchemaOptions_Type_Closed {
}
impl ::pb_jelly::ClosedProtoEnum for InferSchemaOptions_Type_Closed {
  fn name(self) -> &'static str {
    match self {
      InferSchemaOptions_Type_Closed::UNSET => "UNSET",
      InferSchemaOptions_Type_Closed::JSONSCHEMA => "JSONSCHEMA",
    }
  }
}

#[derive(Clone, Copy, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct ReadCLIOptions {
  /// @gotags: kong:"help='Display more verbose information during reads (varies by backend)'"
  pub verbose_output: bool,
  /// @gotags: kong:"help='Pretty (colorized) output'"
  pub pretty: bool,
  /// @gotags: kong:"help='Display all output as JSON (including tabular metadata)'"
  pub json: bool,
}
impl ::std::default::Default for ReadCLIOptions {
  fn default() -> Self {
    ReadCLIOptions {
      verbose_output: ::std::default::Default::default(),
      pretty: ::std::default::Default::default(),
      json: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadCLIOptions_default: ReadCLIOptions = ReadCLIOptions::default();
}
impl ::pb_jelly::Message for ReadCLIOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadCLIOptions",
      full_name: "protos.opts.ReadCLIOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "verbose_output",
          full_name: "protos.opts.ReadCLIOptions.verbose_output",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "pretty",
          full_name: "protos.opts.ReadCLIOptions.pretty",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "json",
          full_name: "protos.opts.ReadCLIOptions.json",
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
    let mut verbose_output_size = 0;
    if self.verbose_output != <bool as ::std::default::Default>::default() {
      let val = &self.verbose_output;
      let l = ::pb_jelly::Message::compute_size(val);
      verbose_output_size += ::pb_jelly::wire_format::serialized_length(1);
      verbose_output_size += l;
    }
    size += verbose_output_size;
    let mut pretty_size = 0;
    if self.pretty != <bool as ::std::default::Default>::default() {
      let val = &self.pretty;
      let l = ::pb_jelly::Message::compute_size(val);
      pretty_size += ::pb_jelly::wire_format::serialized_length(2);
      pretty_size += l;
    }
    size += pretty_size;
    let mut json_size = 0;
    if self.json != <bool as ::std::default::Default>::default() {
      let val = &self.json;
      let l = ::pb_jelly::Message::compute_size(val);
      json_size += ::pb_jelly::wire_format::serialized_length(3);
      json_size += l;
    }
    size += json_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.verbose_output != <bool as ::std::default::Default>::default() {
      let val = &self.verbose_output;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.pretty != <bool as ::std::default::Default>::default() {
      let val = &self.pretty;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.json != <bool as ::std::default::Default>::default() {
      let val = &self.json;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.verbose_output != <bool as ::std::default::Default>::default() {
      let val = &self.verbose_output;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.pretty != <bool as ::std::default::Default>::default() {
      let val = &self.pretty;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.json != <bool as ::std::default::Default>::default() {
      let val = &self.json;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "ReadCLIOptions", 1)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.verbose_output = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "ReadCLIOptions", 2)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.pretty = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "ReadCLIOptions", 3)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.json = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for ReadCLIOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "verbose_output" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.verbose_output)
      }
      "pretty" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.pretty)
      }
      "json" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.json)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Copy, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct ReadSampleOptions {
  /// @gotags: kong:"help='How many events to fetch during a sample interval',default=100"
  pub sample_rate: u32,
  /// @gotags: kong:"help='Sample interval seconds',enum:'1,60',default=60"
  pub sample_interval_seconds: u32,
}
impl ::std::default::Default for ReadSampleOptions {
  fn default() -> Self {
    ReadSampleOptions {
      sample_rate: ::std::default::Default::default(),
      sample_interval_seconds: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadSampleOptions_default: ReadSampleOptions = ReadSampleOptions::default();
}
impl ::pb_jelly::Message for ReadSampleOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadSampleOptions",
      full_name: "protos.opts.ReadSampleOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "sample_rate",
          full_name: "protos.opts.ReadSampleOptions.sample_rate",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "sample_interval_seconds",
          full_name: "protos.opts.ReadSampleOptions.sample_interval_seconds",
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
    let mut sample_rate_size = 0;
    if self.sample_rate != <u32 as ::std::default::Default>::default() {
      let val = &self.sample_rate;
      let l = ::pb_jelly::Message::compute_size(val);
      sample_rate_size += ::pb_jelly::wire_format::serialized_length(1);
      sample_rate_size += l;
    }
    size += sample_rate_size;
    let mut sample_interval_seconds_size = 0;
    if self.sample_interval_seconds != <u32 as ::std::default::Default>::default() {
      let val = &self.sample_interval_seconds;
      let l = ::pb_jelly::Message::compute_size(val);
      sample_interval_seconds_size += ::pb_jelly::wire_format::serialized_length(2);
      sample_interval_seconds_size += l;
    }
    size += sample_interval_seconds_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.sample_rate != <u32 as ::std::default::Default>::default() {
      let val = &self.sample_rate;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.sample_interval_seconds != <u32 as ::std::default::Default>::default() {
      let val = &self.sample_interval_seconds;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.sample_rate != <u32 as ::std::default::Default>::default() {
      let val = &self.sample_rate;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.sample_interval_seconds != <u32 as ::std::default::Default>::default() {
      let val = &self.sample_interval_seconds;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "ReadSampleOptions", 1)?;
          let mut val: u32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.sample_rate = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "ReadSampleOptions", 2)?;
          let mut val: u32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.sample_interval_seconds = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for ReadSampleOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "sample_rate" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.sample_rate)
      }
      "sample_interval_seconds" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.sample_interval_seconds)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct ReadFilterOptions {
  /// @gotags: kong:"-"
  pub query: ::std::string::String,
}
impl ::std::default::Default for ReadFilterOptions {
  fn default() -> Self {
    ReadFilterOptions {
      query: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadFilterOptions_default: ReadFilterOptions = ReadFilterOptions::default();
}
impl ::pb_jelly::Message for ReadFilterOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadFilterOptions",
      full_name: "protos.opts.ReadFilterOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "query",
          full_name: "protos.opts.ReadFilterOptions.query",
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
    let mut query_size = 0;
    if self.query != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.query;
      let l = ::pb_jelly::Message::compute_size(val);
      query_size += ::pb_jelly::wire_format::serialized_length(1);
      query_size += ::pb_jelly::varint::serialized_length(l as u64);
      query_size += l;
    }
    size += query_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.query != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.query;
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
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadFilterOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.query = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for ReadFilterOptions {
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
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

/// Relay is the structure that backends accept for facilitating a relay.
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct ReadOptions {
  /// Required; friendly name for the read
  /// @gotags: kong:"-"
  pub name: ::std::string::String,
  /// Required for desktop; ignored in CLI.
  /// @gotags: kong:"-"
  pub connection_id: ::std::string::String,
  /// Required; specify if a read is continuous or not (default: false)
  /// @gotags: kong:"help='Follow/read continuously',short=f"
  pub continuous: bool,
  /// Optional; specify if reading should utilize sampling
  /// @gotags: kong:"embed,group=sampling"
  pub sample_options: ::std::option::Option<ReadSampleOptions>,
  /// Optional; decode_options specify how to decode the _value_ in a message.
  /// If left unset, plumber will still populate records.ReadRecord.Decoded
  /// with the (untouched) value.
  /// @gotags: kong:"embed,group=decode"
  pub decode_options: ::std::option::Option<::proto_encoding::ps_encoding_options::DecodeOptions>,
  /// @gotags: kong:"help='Convert output before it is printed to STDOUT (options: unset; base64; gzip)',type=pbenum,pbenum_strip_prefix=CONVERT_OPTION_,pbenum_lowercase,default=unset"
  pub convert_output: ConvertOption,
  /// @gotags: kong:"-"
  pub filter: ::std::option::Option<ReadFilterOptions>,
  /// Whether to infer a JSON schema from this read. Ignored if schema_id is populated. Desktop use only
  /// @gotags: kong:"-"
  pub infer_schema_options: ::std::option::Option<InferSchemaOptions>,
  // --------------------------------------------------------------------- //
  //                          PRIVATE FIELDS (1000+)                       //
  // --------------------------------------------------------------------- //

  /// Automatically set by plumber when a new read is created
  /// @gotags: kong:"-"
  pub _id: ::std::string::String,
  /// Used by plumber to set read state
  /// @gotags: kong:"-"
  pub _active: bool,
  /// Contains options/fields specific to the CLI
  /// @gotags: kong:"embed"
  pub _cli_options: ::std::option::Option<ReadCLIOptions>,
  // --------------------------------------------------------------------- //
  //                       SUPPORTED BACKENDS (100-999)                    //
  // --------------------------------------------------------------------- //

  /// @gotags: kong:"cmd,help='Apache Kafka'"
  pub kafka: ::std::option::Option<ReadGroupKafkaOptions>,
  /// @gotags: kong:"cmd,help='Apache ActiveMQ (STOMP)'"
  pub activemq: ::std::option::Option<ReadGroupActiveMQOptions>,
  /// @gotags: kong:"cmd,help='AWS Simple Queue System'"
  pub aws_sqs: ::std::option::Option<ReadGroupAWSSQSOptions>,
  /// @gotags: kong:"cmd,help='MongoDB'"
  pub mongo: ::std::option::Option<ReadGroupMongoOptions>,
  /// @gotags: kong:"cmd,help='NATS'"
  pub nats: ::std::option::Option<ReadGroupNatsOptions>,
  /// @gotags: kong:"cmd,help='NATS Streaming'"
  pub nats_streaming: ::std::option::Option<ReadGroupNatsStreamingOptions>,
  /// @gotags: kong:"cmd,help='NSQ'"
  pub nsq: ::std::option::Option<ReadGroupNSQOptions>,
  /// @gotags: kong:"cmd,help='Apache Pulsar'"
  pub pulsar: ::std::option::Option<ReadGroupPulsarOptions>,
  /// @gotags: kong:"cmd,help='RabbitMQ'"
  pub rabbit: ::std::option::Option<ReadGroupRabbitOptions>,
  /// @gotags: kong:"cmd,help='RabbitMQ Streams'"
  pub rabbit_streams: ::std::option::Option<ReadGroupRabbitStreamsOptions>,
  /// @gotags: kong:"cmd,help='MQTT'"
  pub mqtt: ::std::option::Option<ReadGroupMQTTOptions>,
  /// @gotags: kong:"cmd,help='Azure Service Bus'"
  pub azure_service_bus: ::std::option::Option<ReadGroupAzureServiceBusOptions>,
  /// @gotags: kong:"cmd,help='Azure Event Hub'"
  pub azure_event_hub: ::std::option::Option<ReadGroupAzureEventHubOptions>,
  /// @gotags: kong:"cmd,help='Google Cloud Platform Pub/Sub'"
  pub gcp_pubsub: ::std::option::Option<ReadGroupGCPPubSubOptions>,
  /// @gotags: kong:"cmd,help='KubeMQ Queue'"
  pub kubemq_queue: ::std::option::Option<ReadGroupKubeMQQueueOptions>,
  /// @gotags: kong:"cmd,help='Redis PubSub'"
  pub redis_pubsub: ::std::option::Option<ReadGroupRedisPubSubOptions>,
  /// @gotags: kong:"cmd,help='Redis Streams'"
  pub redis_streams: ::std::option::Option<ReadGroupRedisStreamsOptions>,
  /// @gotags: kong:"cmd,help='PostgreSQL'"
  pub postgres: ::std::option::Option<ReadGroupPostgresOptions>,
  /// @gotags: kong:"cmd,help='NATS Jetstream'"
  pub nats_jetstream: ::std::option::Option<ReadGroupNatsJetstreamOptions>,
  /// @gotags: kong:"cmd,help='AWS Kinesis Streams'"
  pub aws_kinesis: ::std::option::Option<ReadGroupAWSKinesisOptions>,
  /// @gotags: kong:"cmd,help='Memphis'"
  pub memphis: ::std::option::Option<ReadGroupMemphisOptions>,
}
impl ::std::default::Default for ReadOptions {
  fn default() -> Self {
    ReadOptions {
      name: ::std::default::Default::default(),
      connection_id: ::std::default::Default::default(),
      continuous: ::std::default::Default::default(),
      sample_options: ::std::default::Default::default(),
      decode_options: ::std::default::Default::default(),
      convert_output: ::std::default::Default::default(),
      filter: ::std::default::Default::default(),
      infer_schema_options: ::std::default::Default::default(),
      _id: ::std::default::Default::default(),
      _active: ::std::default::Default::default(),
      _cli_options: ::std::default::Default::default(),
      kafka: ::std::default::Default::default(),
      activemq: ::std::default::Default::default(),
      aws_sqs: ::std::default::Default::default(),
      mongo: ::std::default::Default::default(),
      nats: ::std::default::Default::default(),
      nats_streaming: ::std::default::Default::default(),
      nsq: ::std::default::Default::default(),
      pulsar: ::std::default::Default::default(),
      rabbit: ::std::default::Default::default(),
      rabbit_streams: ::std::default::Default::default(),
      mqtt: ::std::default::Default::default(),
      azure_service_bus: ::std::default::Default::default(),
      azure_event_hub: ::std::default::Default::default(),
      gcp_pubsub: ::std::default::Default::default(),
      kubemq_queue: ::std::default::Default::default(),
      redis_pubsub: ::std::default::Default::default(),
      redis_streams: ::std::default::Default::default(),
      postgres: ::std::default::Default::default(),
      nats_jetstream: ::std::default::Default::default(),
      aws_kinesis: ::std::default::Default::default(),
      memphis: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadOptions_default: ReadOptions = ReadOptions::default();
}
impl ::pb_jelly::Message for ReadOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadOptions",
      full_name: "protos.opts.ReadOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "name",
          full_name: "protos.opts.ReadOptions.name",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "connection_id",
          full_name: "protos.opts.ReadOptions.connection_id",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "continuous",
          full_name: "protos.opts.ReadOptions.continuous",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "sample_options",
          full_name: "protos.opts.ReadOptions.sample_options",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "decode_options",
          full_name: "protos.opts.ReadOptions.decode_options",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "convert_output",
          full_name: "protos.opts.ReadOptions.convert_output",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "filter",
          full_name: "protos.opts.ReadOptions.filter",
          index: 6,
          number: 7,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "infer_schema_options",
          full_name: "protos.opts.ReadOptions.infer_schema_options",
          index: 7,
          number: 8,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_id",
          full_name: "protos.opts.ReadOptions._id",
          index: 8,
          number: 1000,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_active",
          full_name: "protos.opts.ReadOptions._active",
          index: 9,
          number: 1001,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_cli_options",
          full_name: "protos.opts.ReadOptions._cli_options",
          index: 10,
          number: 1002,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "kafka",
          full_name: "protos.opts.ReadOptions.kafka",
          index: 11,
          number: 100,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "activemq",
          full_name: "protos.opts.ReadOptions.activemq",
          index: 12,
          number: 101,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_sqs",
          full_name: "protos.opts.ReadOptions.aws_sqs",
          index: 13,
          number: 102,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "mongo",
          full_name: "protos.opts.ReadOptions.mongo",
          index: 14,
          number: 103,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "nats",
          full_name: "protos.opts.ReadOptions.nats",
          index: 15,
          number: 104,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "nats_streaming",
          full_name: "protos.opts.ReadOptions.nats_streaming",
          index: 16,
          number: 105,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "nsq",
          full_name: "protos.opts.ReadOptions.nsq",
          index: 17,
          number: 106,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "pulsar",
          full_name: "protos.opts.ReadOptions.pulsar",
          index: 18,
          number: 107,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "rabbit",
          full_name: "protos.opts.ReadOptions.rabbit",
          index: 19,
          number: 108,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "rabbit_streams",
          full_name: "protos.opts.ReadOptions.rabbit_streams",
          index: 20,
          number: 109,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "mqtt",
          full_name: "protos.opts.ReadOptions.mqtt",
          index: 21,
          number: 110,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "azure_service_bus",
          full_name: "protos.opts.ReadOptions.azure_service_bus",
          index: 22,
          number: 111,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "azure_event_hub",
          full_name: "protos.opts.ReadOptions.azure_event_hub",
          index: 23,
          number: 112,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "gcp_pubsub",
          full_name: "protos.opts.ReadOptions.gcp_pubsub",
          index: 24,
          number: 113,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "kubemq_queue",
          full_name: "protos.opts.ReadOptions.kubemq_queue",
          index: 25,
          number: 114,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "redis_pubsub",
          full_name: "protos.opts.ReadOptions.redis_pubsub",
          index: 26,
          number: 115,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "redis_streams",
          full_name: "protos.opts.ReadOptions.redis_streams",
          index: 27,
          number: 116,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "postgres",
          full_name: "protos.opts.ReadOptions.postgres",
          index: 28,
          number: 117,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "nats_jetstream",
          full_name: "protos.opts.ReadOptions.nats_jetstream",
          index: 29,
          number: 118,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_kinesis",
          full_name: "protos.opts.ReadOptions.aws_kinesis",
          index: 30,
          number: 119,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "memphis",
          full_name: "protos.opts.ReadOptions.memphis",
          index: 31,
          number: 120,
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
    let mut connection_id_size = 0;
    if self.connection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_id;
      let l = ::pb_jelly::Message::compute_size(val);
      connection_id_size += ::pb_jelly::wire_format::serialized_length(2);
      connection_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      connection_id_size += l;
    }
    size += connection_id_size;
    let mut continuous_size = 0;
    if self.continuous != <bool as ::std::default::Default>::default() {
      let val = &self.continuous;
      let l = ::pb_jelly::Message::compute_size(val);
      continuous_size += ::pb_jelly::wire_format::serialized_length(3);
      continuous_size += l;
    }
    size += continuous_size;
    let mut sample_options_size = 0;
    for val in &self.sample_options {
      let l = ::pb_jelly::Message::compute_size(val);
      sample_options_size += ::pb_jelly::wire_format::serialized_length(4);
      sample_options_size += ::pb_jelly::varint::serialized_length(l as u64);
      sample_options_size += l;
    }
    size += sample_options_size;
    let mut decode_options_size = 0;
    for val in &self.decode_options {
      let l = ::pb_jelly::Message::compute_size(val);
      decode_options_size += ::pb_jelly::wire_format::serialized_length(5);
      decode_options_size += ::pb_jelly::varint::serialized_length(l as u64);
      decode_options_size += l;
    }
    size += decode_options_size;
    let mut convert_output_size = 0;
    if self.convert_output != <ConvertOption as ::std::default::Default>::default() {
      let val = &self.convert_output;
      let l = ::pb_jelly::Message::compute_size(val);
      convert_output_size += ::pb_jelly::wire_format::serialized_length(6);
      convert_output_size += l;
    }
    size += convert_output_size;
    let mut filter_size = 0;
    for val in &self.filter {
      let l = ::pb_jelly::Message::compute_size(val);
      filter_size += ::pb_jelly::wire_format::serialized_length(7);
      filter_size += ::pb_jelly::varint::serialized_length(l as u64);
      filter_size += l;
    }
    size += filter_size;
    let mut infer_schema_options_size = 0;
    for val in &self.infer_schema_options {
      let l = ::pb_jelly::Message::compute_size(val);
      infer_schema_options_size += ::pb_jelly::wire_format::serialized_length(8);
      infer_schema_options_size += ::pb_jelly::varint::serialized_length(l as u64);
      infer_schema_options_size += l;
    }
    size += infer_schema_options_size;
    let mut _id_size = 0;
    if self._id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._id;
      let l = ::pb_jelly::Message::compute_size(val);
      _id_size += ::pb_jelly::wire_format::serialized_length(1000);
      _id_size += ::pb_jelly::varint::serialized_length(l as u64);
      _id_size += l;
    }
    size += _id_size;
    let mut _active_size = 0;
    if self._active != <bool as ::std::default::Default>::default() {
      let val = &self._active;
      let l = ::pb_jelly::Message::compute_size(val);
      _active_size += ::pb_jelly::wire_format::serialized_length(1001);
      _active_size += l;
    }
    size += _active_size;
    let mut _cli_options_size = 0;
    for val in &self._cli_options {
      let l = ::pb_jelly::Message::compute_size(val);
      _cli_options_size += ::pb_jelly::wire_format::serialized_length(1002);
      _cli_options_size += ::pb_jelly::varint::serialized_length(l as u64);
      _cli_options_size += l;
    }
    size += _cli_options_size;
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
    let mut mongo_size = 0;
    for val in &self.mongo {
      let l = ::pb_jelly::Message::compute_size(val);
      mongo_size += ::pb_jelly::wire_format::serialized_length(103);
      mongo_size += ::pb_jelly::varint::serialized_length(l as u64);
      mongo_size += l;
    }
    size += mongo_size;
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
    let mut pulsar_size = 0;
    for val in &self.pulsar {
      let l = ::pb_jelly::Message::compute_size(val);
      pulsar_size += ::pb_jelly::wire_format::serialized_length(107);
      pulsar_size += ::pb_jelly::varint::serialized_length(l as u64);
      pulsar_size += l;
    }
    size += pulsar_size;
    let mut rabbit_size = 0;
    for val in &self.rabbit {
      let l = ::pb_jelly::Message::compute_size(val);
      rabbit_size += ::pb_jelly::wire_format::serialized_length(108);
      rabbit_size += ::pb_jelly::varint::serialized_length(l as u64);
      rabbit_size += l;
    }
    size += rabbit_size;
    let mut rabbit_streams_size = 0;
    for val in &self.rabbit_streams {
      let l = ::pb_jelly::Message::compute_size(val);
      rabbit_streams_size += ::pb_jelly::wire_format::serialized_length(109);
      rabbit_streams_size += ::pb_jelly::varint::serialized_length(l as u64);
      rabbit_streams_size += l;
    }
    size += rabbit_streams_size;
    let mut mqtt_size = 0;
    for val in &self.mqtt {
      let l = ::pb_jelly::Message::compute_size(val);
      mqtt_size += ::pb_jelly::wire_format::serialized_length(110);
      mqtt_size += ::pb_jelly::varint::serialized_length(l as u64);
      mqtt_size += l;
    }
    size += mqtt_size;
    let mut azure_service_bus_size = 0;
    for val in &self.azure_service_bus {
      let l = ::pb_jelly::Message::compute_size(val);
      azure_service_bus_size += ::pb_jelly::wire_format::serialized_length(111);
      azure_service_bus_size += ::pb_jelly::varint::serialized_length(l as u64);
      azure_service_bus_size += l;
    }
    size += azure_service_bus_size;
    let mut azure_event_hub_size = 0;
    for val in &self.azure_event_hub {
      let l = ::pb_jelly::Message::compute_size(val);
      azure_event_hub_size += ::pb_jelly::wire_format::serialized_length(112);
      azure_event_hub_size += ::pb_jelly::varint::serialized_length(l as u64);
      azure_event_hub_size += l;
    }
    size += azure_event_hub_size;
    let mut gcp_pubsub_size = 0;
    for val in &self.gcp_pubsub {
      let l = ::pb_jelly::Message::compute_size(val);
      gcp_pubsub_size += ::pb_jelly::wire_format::serialized_length(113);
      gcp_pubsub_size += ::pb_jelly::varint::serialized_length(l as u64);
      gcp_pubsub_size += l;
    }
    size += gcp_pubsub_size;
    let mut kubemq_queue_size = 0;
    for val in &self.kubemq_queue {
      let l = ::pb_jelly::Message::compute_size(val);
      kubemq_queue_size += ::pb_jelly::wire_format::serialized_length(114);
      kubemq_queue_size += ::pb_jelly::varint::serialized_length(l as u64);
      kubemq_queue_size += l;
    }
    size += kubemq_queue_size;
    let mut redis_pubsub_size = 0;
    for val in &self.redis_pubsub {
      let l = ::pb_jelly::Message::compute_size(val);
      redis_pubsub_size += ::pb_jelly::wire_format::serialized_length(115);
      redis_pubsub_size += ::pb_jelly::varint::serialized_length(l as u64);
      redis_pubsub_size += l;
    }
    size += redis_pubsub_size;
    let mut redis_streams_size = 0;
    for val in &self.redis_streams {
      let l = ::pb_jelly::Message::compute_size(val);
      redis_streams_size += ::pb_jelly::wire_format::serialized_length(116);
      redis_streams_size += ::pb_jelly::varint::serialized_length(l as u64);
      redis_streams_size += l;
    }
    size += redis_streams_size;
    let mut postgres_size = 0;
    for val in &self.postgres {
      let l = ::pb_jelly::Message::compute_size(val);
      postgres_size += ::pb_jelly::wire_format::serialized_length(117);
      postgres_size += ::pb_jelly::varint::serialized_length(l as u64);
      postgres_size += l;
    }
    size += postgres_size;
    let mut nats_jetstream_size = 0;
    for val in &self.nats_jetstream {
      let l = ::pb_jelly::Message::compute_size(val);
      nats_jetstream_size += ::pb_jelly::wire_format::serialized_length(118);
      nats_jetstream_size += ::pb_jelly::varint::serialized_length(l as u64);
      nats_jetstream_size += l;
    }
    size += nats_jetstream_size;
    let mut aws_kinesis_size = 0;
    for val in &self.aws_kinesis {
      let l = ::pb_jelly::Message::compute_size(val);
      aws_kinesis_size += ::pb_jelly::wire_format::serialized_length(119);
      aws_kinesis_size += ::pb_jelly::varint::serialized_length(l as u64);
      aws_kinesis_size += l;
    }
    size += aws_kinesis_size;
    let mut memphis_size = 0;
    for val in &self.memphis {
      let l = ::pb_jelly::Message::compute_size(val);
      memphis_size += ::pb_jelly::wire_format::serialized_length(120);
      memphis_size += ::pb_jelly::varint::serialized_length(l as u64);
      memphis_size += l;
    }
    size += memphis_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.connection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.continuous != <bool as ::std::default::Default>::default() {
      let val = &self.continuous;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.sample_options {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.decode_options {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.convert_output != <ConvertOption as ::std::default::Default>::default() {
      let val = &self.convert_output;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.filter {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.infer_schema_options {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._active != <bool as ::std::default::Default>::default() {
      let val = &self._active;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self._cli_options {
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
    for val in &self.mongo {
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
    for val in &self.pulsar {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.rabbit {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.rabbit_streams {
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
    for val in &self.postgres {
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
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
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
    if self.continuous != <bool as ::std::default::Default>::default() {
      let val = &self.continuous;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.sample_options {
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.decode_options {
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.convert_output != <ConvertOption as ::std::default::Default>::default() {
      let val = &self.convert_output;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.filter {
      ::pb_jelly::wire_format::write(7, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.infer_schema_options {
      ::pb_jelly::wire_format::write(8, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
    for val in &self.mongo {
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
    for val in &self.pulsar {
      ::pb_jelly::wire_format::write(107, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.rabbit {
      ::pb_jelly::wire_format::write(108, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.rabbit_streams {
      ::pb_jelly::wire_format::write(109, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.mqtt {
      ::pb_jelly::wire_format::write(110, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.azure_service_bus {
      ::pb_jelly::wire_format::write(111, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.azure_event_hub {
      ::pb_jelly::wire_format::write(112, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.gcp_pubsub {
      ::pb_jelly::wire_format::write(113, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.kubemq_queue {
      ::pb_jelly::wire_format::write(114, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.redis_pubsub {
      ::pb_jelly::wire_format::write(115, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.redis_streams {
      ::pb_jelly::wire_format::write(116, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.postgres {
      ::pb_jelly::wire_format::write(117, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.nats_jetstream {
      ::pb_jelly::wire_format::write(118, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.aws_kinesis {
      ::pb_jelly::wire_format::write(119, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.memphis {
      ::pb_jelly::wire_format::write(120, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
    if self._active != <bool as ::std::default::Default>::default() {
      let val = &self._active;
      ::pb_jelly::wire_format::write(1001, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self._cli_options {
      ::pb_jelly::wire_format::write(1002, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.name = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.connection_id = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "ReadOptions", 3)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.continuous = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadSampleOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.sample_options = Some(val);
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_encoding::ps_encoding_options::DecodeOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.decode_options = Some(val);
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "ReadOptions", 6)?;
          let mut val: ConvertOption = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.convert_output = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 7)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadFilterOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.filter = Some(val);
        }
        8 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 8)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: InferSchemaOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.infer_schema_options = Some(val);
        }
        1000 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 1000)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._id = val;
        }
        1001 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "ReadOptions", 1001)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self._active = val;
        }
        1002 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 1002)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadCLIOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._cli_options = Some(val);
        }
        100 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 100)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadGroupKafkaOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.kafka = Some(val);
        }
        101 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 101)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadGroupActiveMQOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.activemq = Some(val);
        }
        102 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 102)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadGroupAWSSQSOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.aws_sqs = Some(val);
        }
        103 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 103)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadGroupMongoOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.mongo = Some(val);
        }
        104 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 104)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadGroupNatsOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.nats = Some(val);
        }
        105 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 105)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadGroupNatsStreamingOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.nats_streaming = Some(val);
        }
        106 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 106)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadGroupNSQOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.nsq = Some(val);
        }
        107 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 107)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadGroupPulsarOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.pulsar = Some(val);
        }
        108 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 108)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadGroupRabbitOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.rabbit = Some(val);
        }
        109 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 109)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadGroupRabbitStreamsOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.rabbit_streams = Some(val);
        }
        110 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 110)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadGroupMQTTOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.mqtt = Some(val);
        }
        111 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 111)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadGroupAzureServiceBusOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.azure_service_bus = Some(val);
        }
        112 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 112)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadGroupAzureEventHubOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.azure_event_hub = Some(val);
        }
        113 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 113)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadGroupGCPPubSubOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.gcp_pubsub = Some(val);
        }
        114 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 114)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadGroupKubeMQQueueOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.kubemq_queue = Some(val);
        }
        115 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 115)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadGroupRedisPubSubOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.redis_pubsub = Some(val);
        }
        116 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 116)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadGroupRedisStreamsOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.redis_streams = Some(val);
        }
        117 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 117)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadGroupPostgresOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.postgres = Some(val);
        }
        118 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 118)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadGroupNatsJetstreamOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.nats_jetstream = Some(val);
        }
        119 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 119)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadGroupAWSKinesisOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.aws_kinesis = Some(val);
        }
        120 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadOptions", 120)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ReadGroupMemphisOptions = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for ReadOptions {
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
      "connection_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.connection_id)
      }
      "continuous" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.continuous)
      }
      "sample_options" => {
        ::pb_jelly::reflection::FieldMut::Value(self.sample_options.get_or_insert_with(::std::default::Default::default))
      }
      "decode_options" => {
        ::pb_jelly::reflection::FieldMut::Value(self.decode_options.get_or_insert_with(::std::default::Default::default))
      }
      "convert_output" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.convert_output)
      }
      "filter" => {
        ::pb_jelly::reflection::FieldMut::Value(self.filter.get_or_insert_with(::std::default::Default::default))
      }
      "infer_schema_options" => {
        ::pb_jelly::reflection::FieldMut::Value(self.infer_schema_options.get_or_insert_with(::std::default::Default::default))
      }
      "_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._id)
      }
      "_active" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._active)
      }
      "_cli_options" => {
        ::pb_jelly::reflection::FieldMut::Value(self._cli_options.get_or_insert_with(::std::default::Default::default))
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
      "mongo" => {
        ::pb_jelly::reflection::FieldMut::Value(self.mongo.get_or_insert_with(::std::default::Default::default))
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
      "pulsar" => {
        ::pb_jelly::reflection::FieldMut::Value(self.pulsar.get_or_insert_with(::std::default::Default::default))
      }
      "rabbit" => {
        ::pb_jelly::reflection::FieldMut::Value(self.rabbit.get_or_insert_with(::std::default::Default::default))
      }
      "rabbit_streams" => {
        ::pb_jelly::reflection::FieldMut::Value(self.rabbit_streams.get_or_insert_with(::std::default::Default::default))
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
      "postgres" => {
        ::pb_jelly::reflection::FieldMut::Value(self.postgres.get_or_insert_with(::std::default::Default::default))
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
pub struct ReadGroupKafkaOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_kafka::KafkaConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_kafka::KafkaReadArgs>,
}
impl ::std::default::Default for ReadGroupKafkaOptions {
  fn default() -> Self {
    ReadGroupKafkaOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadGroupKafkaOptions_default: ReadGroupKafkaOptions = ReadGroupKafkaOptions::default();
}
impl ::pb_jelly::Message for ReadGroupKafkaOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadGroupKafkaOptions",
      full_name: "protos.opts.ReadGroupKafkaOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.ReadGroupKafkaOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.ReadGroupKafkaOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupKafkaOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_kafka::KafkaConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupKafkaOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_kafka::KafkaReadArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for ReadGroupKafkaOptions {
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
pub struct ReadGroupActiveMQOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_activemq::ActiveMQConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_activemq::ActiveMQReadArgs>,
}
impl ::std::default::Default for ReadGroupActiveMQOptions {
  fn default() -> Self {
    ReadGroupActiveMQOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadGroupActiveMQOptions_default: ReadGroupActiveMQOptions = ReadGroupActiveMQOptions::default();
}
impl ::pb_jelly::Message for ReadGroupActiveMQOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadGroupActiveMQOptions",
      full_name: "protos.opts.ReadGroupActiveMQOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.ReadGroupActiveMQOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.ReadGroupActiveMQOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupActiveMQOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_activemq::ActiveMQConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupActiveMQOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_activemq::ActiveMQReadArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for ReadGroupActiveMQOptions {
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
pub struct ReadGroupAWSSQSOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_aws_sqs::AWSSQSConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_aws_sqs::AWSSQSReadArgs>,
}
impl ::std::default::Default for ReadGroupAWSSQSOptions {
  fn default() -> Self {
    ReadGroupAWSSQSOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadGroupAWSSQSOptions_default: ReadGroupAWSSQSOptions = ReadGroupAWSSQSOptions::default();
}
impl ::pb_jelly::Message for ReadGroupAWSSQSOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadGroupAWSSQSOptions",
      full_name: "protos.opts.ReadGroupAWSSQSOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.ReadGroupAWSSQSOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.ReadGroupAWSSQSOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupAWSSQSOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_aws_sqs::AWSSQSConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupAWSSQSOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_aws_sqs::AWSSQSReadArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for ReadGroupAWSSQSOptions {
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
pub struct ReadGroupMongoOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_mongo::MongoConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_mongo::MongoReadArgs>,
}
impl ::std::default::Default for ReadGroupMongoOptions {
  fn default() -> Self {
    ReadGroupMongoOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadGroupMongoOptions_default: ReadGroupMongoOptions = ReadGroupMongoOptions::default();
}
impl ::pb_jelly::Message for ReadGroupMongoOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadGroupMongoOptions",
      full_name: "protos.opts.ReadGroupMongoOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.ReadGroupMongoOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.ReadGroupMongoOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupMongoOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_mongo::MongoConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupMongoOptions", 2)?;
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
impl ::pb_jelly::Reflection for ReadGroupMongoOptions {
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
pub struct ReadGroupNatsOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_nats::NatsConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_nats::NatsReadArgs>,
}
impl ::std::default::Default for ReadGroupNatsOptions {
  fn default() -> Self {
    ReadGroupNatsOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadGroupNatsOptions_default: ReadGroupNatsOptions = ReadGroupNatsOptions::default();
}
impl ::pb_jelly::Message for ReadGroupNatsOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadGroupNatsOptions",
      full_name: "protos.opts.ReadGroupNatsOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.ReadGroupNatsOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.ReadGroupNatsOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupNatsOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats::NatsConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupNatsOptions", 2)?;
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
impl ::pb_jelly::Reflection for ReadGroupNatsOptions {
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
pub struct ReadGroupNatsStreamingOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_nats_streaming::NatsStreamingConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_nats_streaming::NatsStreamingReadArgs>,
}
impl ::std::default::Default for ReadGroupNatsStreamingOptions {
  fn default() -> Self {
    ReadGroupNatsStreamingOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadGroupNatsStreamingOptions_default: ReadGroupNatsStreamingOptions = ReadGroupNatsStreamingOptions::default();
}
impl ::pb_jelly::Message for ReadGroupNatsStreamingOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadGroupNatsStreamingOptions",
      full_name: "protos.opts.ReadGroupNatsStreamingOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.ReadGroupNatsStreamingOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.ReadGroupNatsStreamingOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupNatsStreamingOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats_streaming::NatsStreamingConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupNatsStreamingOptions", 2)?;
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
impl ::pb_jelly::Reflection for ReadGroupNatsStreamingOptions {
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
pub struct ReadGroupNatsJetstreamOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_nats_jetstream::NatsJetstreamConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_nats_jetstream::NatsJetstreamReadArgs>,
}
impl ::std::default::Default for ReadGroupNatsJetstreamOptions {
  fn default() -> Self {
    ReadGroupNatsJetstreamOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadGroupNatsJetstreamOptions_default: ReadGroupNatsJetstreamOptions = ReadGroupNatsJetstreamOptions::default();
}
impl ::pb_jelly::Message for ReadGroupNatsJetstreamOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadGroupNatsJetstreamOptions",
      full_name: "protos.opts.ReadGroupNatsJetstreamOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.ReadGroupNatsJetstreamOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.ReadGroupNatsJetstreamOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupNatsJetstreamOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nats_jetstream::NatsJetstreamConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupNatsJetstreamOptions", 2)?;
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
impl ::pb_jelly::Reflection for ReadGroupNatsJetstreamOptions {
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
pub struct ReadGroupNSQOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_nsq::NSQConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_nsq::NSQReadArgs>,
}
impl ::std::default::Default for ReadGroupNSQOptions {
  fn default() -> Self {
    ReadGroupNSQOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadGroupNSQOptions_default: ReadGroupNSQOptions = ReadGroupNSQOptions::default();
}
impl ::pb_jelly::Message for ReadGroupNSQOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadGroupNSQOptions",
      full_name: "protos.opts.ReadGroupNSQOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.ReadGroupNSQOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.ReadGroupNSQOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupNSQOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_nsq::NSQConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupNSQOptions", 2)?;
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
impl ::pb_jelly::Reflection for ReadGroupNSQOptions {
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
pub struct ReadGroupPostgresOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_postgres::PostgresConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_postgres::PostgresReadArgs>,
}
impl ::std::default::Default for ReadGroupPostgresOptions {
  fn default() -> Self {
    ReadGroupPostgresOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadGroupPostgresOptions_default: ReadGroupPostgresOptions = ReadGroupPostgresOptions::default();
}
impl ::pb_jelly::Message for ReadGroupPostgresOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadGroupPostgresOptions",
      full_name: "protos.opts.ReadGroupPostgresOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.ReadGroupPostgresOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.ReadGroupPostgresOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupPostgresOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_postgres::PostgresConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupPostgresOptions", 2)?;
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
impl ::pb_jelly::Reflection for ReadGroupPostgresOptions {
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
pub struct ReadGroupPulsarOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_pulsar::PulsarConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_pulsar::PulsarReadArgs>,
}
impl ::std::default::Default for ReadGroupPulsarOptions {
  fn default() -> Self {
    ReadGroupPulsarOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadGroupPulsarOptions_default: ReadGroupPulsarOptions = ReadGroupPulsarOptions::default();
}
impl ::pb_jelly::Message for ReadGroupPulsarOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadGroupPulsarOptions",
      full_name: "protos.opts.ReadGroupPulsarOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.ReadGroupPulsarOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.ReadGroupPulsarOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupPulsarOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_pulsar::PulsarConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupPulsarOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_pulsar::PulsarReadArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for ReadGroupPulsarOptions {
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
pub struct ReadGroupRabbitOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_rabbit::RabbitConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_rabbit::RabbitReadArgs>,
}
impl ::std::default::Default for ReadGroupRabbitOptions {
  fn default() -> Self {
    ReadGroupRabbitOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadGroupRabbitOptions_default: ReadGroupRabbitOptions = ReadGroupRabbitOptions::default();
}
impl ::pb_jelly::Message for ReadGroupRabbitOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadGroupRabbitOptions",
      full_name: "protos.opts.ReadGroupRabbitOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.ReadGroupRabbitOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.ReadGroupRabbitOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupRabbitOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_rabbit::RabbitConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupRabbitOptions", 2)?;
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
impl ::pb_jelly::Reflection for ReadGroupRabbitOptions {
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
pub struct ReadGroupRabbitStreamsOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_rabbit_streams::RabbitStreamsConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_rabbit_streams::RabbitStreamsReadArgs>,
}
impl ::std::default::Default for ReadGroupRabbitStreamsOptions {
  fn default() -> Self {
    ReadGroupRabbitStreamsOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadGroupRabbitStreamsOptions_default: ReadGroupRabbitStreamsOptions = ReadGroupRabbitStreamsOptions::default();
}
impl ::pb_jelly::Message for ReadGroupRabbitStreamsOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadGroupRabbitStreamsOptions",
      full_name: "protos.opts.ReadGroupRabbitStreamsOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.ReadGroupRabbitStreamsOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.ReadGroupRabbitStreamsOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupRabbitStreamsOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_rabbit_streams::RabbitStreamsConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupRabbitStreamsOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_rabbit_streams::RabbitStreamsReadArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for ReadGroupRabbitStreamsOptions {
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
pub struct ReadGroupRedisPubSubOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_redis_pubsub::RedisPubSubConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_redis_pubsub::RedisPubSubReadArgs>,
}
impl ::std::default::Default for ReadGroupRedisPubSubOptions {
  fn default() -> Self {
    ReadGroupRedisPubSubOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadGroupRedisPubSubOptions_default: ReadGroupRedisPubSubOptions = ReadGroupRedisPubSubOptions::default();
}
impl ::pb_jelly::Message for ReadGroupRedisPubSubOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadGroupRedisPubSubOptions",
      full_name: "protos.opts.ReadGroupRedisPubSubOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.ReadGroupRedisPubSubOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.ReadGroupRedisPubSubOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupRedisPubSubOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_redis_pubsub::RedisPubSubConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupRedisPubSubOptions", 2)?;
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
impl ::pb_jelly::Reflection for ReadGroupRedisPubSubOptions {
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
pub struct ReadGroupRedisStreamsOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_redis_streams::RedisStreamsConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_redis_streams::RedisStreamsReadArgs>,
}
impl ::std::default::Default for ReadGroupRedisStreamsOptions {
  fn default() -> Self {
    ReadGroupRedisStreamsOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadGroupRedisStreamsOptions_default: ReadGroupRedisStreamsOptions = ReadGroupRedisStreamsOptions::default();
}
impl ::pb_jelly::Message for ReadGroupRedisStreamsOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadGroupRedisStreamsOptions",
      full_name: "protos.opts.ReadGroupRedisStreamsOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.ReadGroupRedisStreamsOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.ReadGroupRedisStreamsOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupRedisStreamsOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_redis_streams::RedisStreamsConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupRedisStreamsOptions", 2)?;
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
impl ::pb_jelly::Reflection for ReadGroupRedisStreamsOptions {
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
pub struct ReadGroupAzureEventHubOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_azure_event_hub::AzureEventHubConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_azure_event_hub::AzureEventHubReadArgs>,
}
impl ::std::default::Default for ReadGroupAzureEventHubOptions {
  fn default() -> Self {
    ReadGroupAzureEventHubOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadGroupAzureEventHubOptions_default: ReadGroupAzureEventHubOptions = ReadGroupAzureEventHubOptions::default();
}
impl ::pb_jelly::Message for ReadGroupAzureEventHubOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadGroupAzureEventHubOptions",
      full_name: "protos.opts.ReadGroupAzureEventHubOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.ReadGroupAzureEventHubOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.ReadGroupAzureEventHubOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupAzureEventHubOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_azure_event_hub::AzureEventHubConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupAzureEventHubOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_azure_event_hub::AzureEventHubReadArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for ReadGroupAzureEventHubOptions {
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
pub struct ReadGroupAzureServiceBusOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_azure_service_bus::AzureServiceBusConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_azure_service_bus::AzureServiceBusReadArgs>,
}
impl ::std::default::Default for ReadGroupAzureServiceBusOptions {
  fn default() -> Self {
    ReadGroupAzureServiceBusOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadGroupAzureServiceBusOptions_default: ReadGroupAzureServiceBusOptions = ReadGroupAzureServiceBusOptions::default();
}
impl ::pb_jelly::Message for ReadGroupAzureServiceBusOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadGroupAzureServiceBusOptions",
      full_name: "protos.opts.ReadGroupAzureServiceBusOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.ReadGroupAzureServiceBusOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.ReadGroupAzureServiceBusOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupAzureServiceBusOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_azure_service_bus::AzureServiceBusConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupAzureServiceBusOptions", 2)?;
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
impl ::pb_jelly::Reflection for ReadGroupAzureServiceBusOptions {
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
pub struct ReadGroupMQTTOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_mqtt::MQTTConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_mqtt::MQTTReadArgs>,
}
impl ::std::default::Default for ReadGroupMQTTOptions {
  fn default() -> Self {
    ReadGroupMQTTOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadGroupMQTTOptions_default: ReadGroupMQTTOptions = ReadGroupMQTTOptions::default();
}
impl ::pb_jelly::Message for ReadGroupMQTTOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadGroupMQTTOptions",
      full_name: "protos.opts.ReadGroupMQTTOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.ReadGroupMQTTOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.ReadGroupMQTTOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupMQTTOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_mqtt::MQTTConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupMQTTOptions", 2)?;
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
impl ::pb_jelly::Reflection for ReadGroupMQTTOptions {
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
pub struct ReadGroupGCPPubSubOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_gcp_pubsub::GCPPubSubConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_gcp_pubsub::GCPPubSubReadArgs>,
}
impl ::std::default::Default for ReadGroupGCPPubSubOptions {
  fn default() -> Self {
    ReadGroupGCPPubSubOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadGroupGCPPubSubOptions_default: ReadGroupGCPPubSubOptions = ReadGroupGCPPubSubOptions::default();
}
impl ::pb_jelly::Message for ReadGroupGCPPubSubOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadGroupGCPPubSubOptions",
      full_name: "protos.opts.ReadGroupGCPPubSubOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.ReadGroupGCPPubSubOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.ReadGroupGCPPubSubOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupGCPPubSubOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_gcp_pubsub::GCPPubSubConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupGCPPubSubOptions", 2)?;
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
impl ::pb_jelly::Reflection for ReadGroupGCPPubSubOptions {
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
pub struct ReadGroupKubeMQQueueOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_kubemq_queue::KubeMQQueueConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_kubemq_queue::KubeMQQueueReadArgs>,
}
impl ::std::default::Default for ReadGroupKubeMQQueueOptions {
  fn default() -> Self {
    ReadGroupKubeMQQueueOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadGroupKubeMQQueueOptions_default: ReadGroupKubeMQQueueOptions = ReadGroupKubeMQQueueOptions::default();
}
impl ::pb_jelly::Message for ReadGroupKubeMQQueueOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadGroupKubeMQQueueOptions",
      full_name: "protos.opts.ReadGroupKubeMQQueueOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.ReadGroupKubeMQQueueOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.ReadGroupKubeMQQueueOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupKubeMQQueueOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_kubemq_queue::KubeMQQueueConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupKubeMQQueueOptions", 2)?;
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
impl ::pb_jelly::Reflection for ReadGroupKubeMQQueueOptions {
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
pub struct ReadGroupAWSKinesisOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_aws_kinesis::AWSKinesisConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_aws_kinesis::AWSKinesisReadArgs>,
}
impl ::std::default::Default for ReadGroupAWSKinesisOptions {
  fn default() -> Self {
    ReadGroupAWSKinesisOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadGroupAWSKinesisOptions_default: ReadGroupAWSKinesisOptions = ReadGroupAWSKinesisOptions::default();
}
impl ::pb_jelly::Message for ReadGroupAWSKinesisOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadGroupAWSKinesisOptions",
      full_name: "protos.opts.ReadGroupAWSKinesisOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.ReadGroupAWSKinesisOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.ReadGroupAWSKinesisOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupAWSKinesisOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_aws_kinesis::AWSKinesisConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupAWSKinesisOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_aws_kinesis::AWSKinesisReadArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for ReadGroupAWSKinesisOptions {
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
pub struct ReadGroupMemphisOptions {
  /// @gotags: kong:"embed"
  pub _conn: ::std::option::Option<::proto_args::ps_args_memphis::MemphisConn>,
  /// @gotags: kong:"embed"
  pub args: ::std::option::Option<::proto_args::ps_args_memphis::MemphisReadArgs>,
}
impl ::std::default::Default for ReadGroupMemphisOptions {
  fn default() -> Self {
    ReadGroupMemphisOptions {
      _conn: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ReadGroupMemphisOptions_default: ReadGroupMemphisOptions = ReadGroupMemphisOptions::default();
}
impl ::pb_jelly::Message for ReadGroupMemphisOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ReadGroupMemphisOptions",
      full_name: "protos.opts.ReadGroupMemphisOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_conn",
          full_name: "protos.opts.ReadGroupMemphisOptions._conn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.opts.ReadGroupMemphisOptions.args",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupMemphisOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_memphis::MemphisConn = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._conn = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ReadGroupMemphisOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_args::ps_args_memphis::MemphisReadArgs = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for ReadGroupMemphisOptions {
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
pub struct InferSchemaOptions {
  /// Type of schema to infer from the data
  /// @gotags: kong:"-"
  pub type_: InferSchemaOptions_Type,
  /// Existing schema ID. Can be filled out by end user, or by plumber
  /// If filled out by end user, plumber will pull the schema and evolve from it
  /// If empty, plumber will make a new schema, save and publish to other instances, and then evolve from it
  /// @gotags: kong:"-"
  pub schema_id: ::std::string::String,
}
impl ::std::default::Default for InferSchemaOptions {
  fn default() -> Self {
    InferSchemaOptions {
      type_: ::std::default::Default::default(),
      schema_id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref InferSchemaOptions_default: InferSchemaOptions = InferSchemaOptions::default();
}
impl ::pb_jelly::Message for InferSchemaOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "InferSchemaOptions",
      full_name: "protos.opts.InferSchemaOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "type_",
          full_name: "protos.opts.InferSchemaOptions.type_",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "schema_id",
          full_name: "protos.opts.InferSchemaOptions.schema_id",
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
    let mut type__size = 0;
    if self.type_ != <InferSchemaOptions_Type as ::std::default::Default>::default() {
      let val = &self.type_;
      let l = ::pb_jelly::Message::compute_size(val);
      type__size += ::pb_jelly::wire_format::serialized_length(1);
      type__size += l;
    }
    size += type__size;
    let mut schema_id_size = 0;
    if self.schema_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.schema_id;
      let l = ::pb_jelly::Message::compute_size(val);
      schema_id_size += ::pb_jelly::wire_format::serialized_length(2);
      schema_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      schema_id_size += l;
    }
    size += schema_id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.type_ != <InferSchemaOptions_Type as ::std::default::Default>::default() {
      let val = &self.type_;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.schema_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.schema_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.type_ != <InferSchemaOptions_Type as ::std::default::Default>::default() {
      let val = &self.type_;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.schema_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.schema_id;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "InferSchemaOptions", 1)?;
          let mut val: InferSchemaOptions_Type = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.type_ = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "InferSchemaOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.schema_id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for InferSchemaOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "type_" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.type_)
      }
      "schema_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.schema_id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

