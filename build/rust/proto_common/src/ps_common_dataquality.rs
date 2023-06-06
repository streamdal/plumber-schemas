// @generated, do not edit
#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[repr(transparent)]
pub struct RuleType(i32);
impl RuleType {
  pub const RULE_TYPE_UNSET: RuleType = RuleType(0);
  pub const RULE_TYPE_MATCH: RuleType = RuleType(1);
  pub const RULE_TYPE_CUSTOM: RuleType = RuleType(2);
  pub const KNOWN_VARIANTS: [RuleType; 3] = [RuleType::RULE_TYPE_UNSET, RuleType::RULE_TYPE_MATCH, RuleType::RULE_TYPE_CUSTOM];
  pub const fn value(self) -> i32 {
    self.0
  }
  pub fn into_known(self) -> ::std::option::Option<RuleType_Closed> {
    match self {
      RuleType::RULE_TYPE_UNSET => Some(RuleType_Closed::RULE_TYPE_UNSET),
      RuleType::RULE_TYPE_MATCH => Some(RuleType_Closed::RULE_TYPE_MATCH),
      RuleType::RULE_TYPE_CUSTOM => Some(RuleType_Closed::RULE_TYPE_CUSTOM),
      _ => None,
    }
  }
}
impl ::std::default::Default for RuleType {
  fn default() -> Self {
    RuleType::RULE_TYPE_UNSET
  }
}
impl From<RuleType> for i32 {
  fn from(v: RuleType) -> i32 {
    v.0
  }
}
impl From<i32> for RuleType {
  fn from(v: i32) -> RuleType {
    RuleType(v)
  }
}
impl From<RuleType_Closed> for RuleType {
  fn from(v: RuleType_Closed) -> RuleType {
    RuleType(v as i32)
  }
}
impl ::pb_jelly::ProtoEnum for RuleType {
}
impl ::pb_jelly::OpenProtoEnum for RuleType {
  fn name(self) -> ::std::option::Option<&'static str> {
    match self {
      RuleType::RULE_TYPE_UNSET => Some("RULE_TYPE_UNSET"),
      RuleType::RULE_TYPE_MATCH => Some("RULE_TYPE_MATCH"),
      RuleType::RULE_TYPE_CUSTOM => Some("RULE_TYPE_CUSTOM"),
      _ => None,
    }
  }
  fn is_known(self) -> bool {
    match self {
      RuleType::RULE_TYPE_UNSET => true,
      RuleType::RULE_TYPE_MATCH => true,
      RuleType::RULE_TYPE_CUSTOM => true,
      _ => false,
    }
  }
}
impl ::std::fmt::Debug for RuleType {
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
pub enum RuleType_Closed {
  RULE_TYPE_UNSET = 0,
  RULE_TYPE_MATCH = 1,
  RULE_TYPE_CUSTOM = 2,
}
impl RuleType_Closed {
  pub const KNOWN_VARIANTS: [RuleType_Closed; 3] = [RuleType_Closed::RULE_TYPE_UNSET, RuleType_Closed::RULE_TYPE_MATCH, RuleType_Closed::RULE_TYPE_CUSTOM];
}
impl ::std::default::Default for RuleType_Closed {
  fn default() -> Self {
    RuleType_Closed::RULE_TYPE_UNSET
  }
}
impl From<RuleType_Closed> for i32 {
  fn from(v: RuleType_Closed) -> i32 {
    match v {
      RuleType_Closed::RULE_TYPE_UNSET => 0,
      RuleType_Closed::RULE_TYPE_MATCH => 1,
      RuleType_Closed::RULE_TYPE_CUSTOM => 2,
    }
  }
}
impl ::std::convert::TryFrom<i32> for RuleType_Closed {
  type Error = i32;
  fn try_from(v: i32) -> ::std::result::Result<Self, i32> {
    match v {
      0 => Ok(RuleType_Closed::RULE_TYPE_UNSET),
      1 => Ok(RuleType_Closed::RULE_TYPE_MATCH),
      2 => Ok(RuleType_Closed::RULE_TYPE_CUSTOM),
      _ => Err(v),
    }
  }
}
impl ::pb_jelly::ProtoEnum for RuleType_Closed {
}
impl ::pb_jelly::ClosedProtoEnum for RuleType_Closed {
  fn name(self) -> &'static str {
    match self {
      RuleType_Closed::RULE_TYPE_UNSET => "RULE_TYPE_UNSET",
      RuleType_Closed::RULE_TYPE_MATCH => "RULE_TYPE_MATCH",
      RuleType_Closed::RULE_TYPE_CUSTOM => "RULE_TYPE_CUSTOM",
    }
  }
}

#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[repr(transparent)]
pub struct RuleMode(i32);
impl RuleMode {
  pub const RULE_MODE_UNSET: RuleMode = RuleMode(0);
  pub const RULE_MODE_PUBLISH: RuleMode = RuleMode(1);
  pub const RULE_MODE_CONSUME: RuleMode = RuleMode(2);
  pub const KNOWN_VARIANTS: [RuleMode; 3] = [RuleMode::RULE_MODE_UNSET, RuleMode::RULE_MODE_PUBLISH, RuleMode::RULE_MODE_CONSUME];
  pub const fn value(self) -> i32 {
    self.0
  }
  pub fn into_known(self) -> ::std::option::Option<RuleMode_Closed> {
    match self {
      RuleMode::RULE_MODE_UNSET => Some(RuleMode_Closed::RULE_MODE_UNSET),
      RuleMode::RULE_MODE_PUBLISH => Some(RuleMode_Closed::RULE_MODE_PUBLISH),
      RuleMode::RULE_MODE_CONSUME => Some(RuleMode_Closed::RULE_MODE_CONSUME),
      _ => None,
    }
  }
}
impl ::std::default::Default for RuleMode {
  fn default() -> Self {
    RuleMode::RULE_MODE_UNSET
  }
}
impl From<RuleMode> for i32 {
  fn from(v: RuleMode) -> i32 {
    v.0
  }
}
impl From<i32> for RuleMode {
  fn from(v: i32) -> RuleMode {
    RuleMode(v)
  }
}
impl From<RuleMode_Closed> for RuleMode {
  fn from(v: RuleMode_Closed) -> RuleMode {
    RuleMode(v as i32)
  }
}
impl ::pb_jelly::ProtoEnum for RuleMode {
}
impl ::pb_jelly::OpenProtoEnum for RuleMode {
  fn name(self) -> ::std::option::Option<&'static str> {
    match self {
      RuleMode::RULE_MODE_UNSET => Some("RULE_MODE_UNSET"),
      RuleMode::RULE_MODE_PUBLISH => Some("RULE_MODE_PUBLISH"),
      RuleMode::RULE_MODE_CONSUME => Some("RULE_MODE_CONSUME"),
      _ => None,
    }
  }
  fn is_known(self) -> bool {
    match self {
      RuleMode::RULE_MODE_UNSET => true,
      RuleMode::RULE_MODE_PUBLISH => true,
      RuleMode::RULE_MODE_CONSUME => true,
      _ => false,
    }
  }
}
impl ::std::fmt::Debug for RuleMode {
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
pub enum RuleMode_Closed {
  RULE_MODE_UNSET = 0,
  RULE_MODE_PUBLISH = 1,
  RULE_MODE_CONSUME = 2,
}
impl RuleMode_Closed {
  pub const KNOWN_VARIANTS: [RuleMode_Closed; 3] = [RuleMode_Closed::RULE_MODE_UNSET, RuleMode_Closed::RULE_MODE_PUBLISH, RuleMode_Closed::RULE_MODE_CONSUME];
}
impl ::std::default::Default for RuleMode_Closed {
  fn default() -> Self {
    RuleMode_Closed::RULE_MODE_UNSET
  }
}
impl From<RuleMode_Closed> for i32 {
  fn from(v: RuleMode_Closed) -> i32 {
    match v {
      RuleMode_Closed::RULE_MODE_UNSET => 0,
      RuleMode_Closed::RULE_MODE_PUBLISH => 1,
      RuleMode_Closed::RULE_MODE_CONSUME => 2,
    }
  }
}
impl ::std::convert::TryFrom<i32> for RuleMode_Closed {
  type Error = i32;
  fn try_from(v: i32) -> ::std::result::Result<Self, i32> {
    match v {
      0 => Ok(RuleMode_Closed::RULE_MODE_UNSET),
      1 => Ok(RuleMode_Closed::RULE_MODE_PUBLISH),
      2 => Ok(RuleMode_Closed::RULE_MODE_CONSUME),
      _ => Err(v),
    }
  }
}
impl ::pb_jelly::ProtoEnum for RuleMode_Closed {
}
impl ::pb_jelly::ClosedProtoEnum for RuleMode_Closed {
  fn name(self) -> &'static str {
    match self {
      RuleMode_Closed::RULE_MODE_UNSET => "RULE_MODE_UNSET",
      RuleMode_Closed::RULE_MODE_PUBLISH => "RULE_MODE_PUBLISH",
      RuleMode_Closed::RULE_MODE_CONSUME => "RULE_MODE_CONSUME",
    }
  }
}

#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[repr(transparent)]
pub struct RuleFailureMode(i32);
impl RuleFailureMode {
  pub const RULE_FAILURE_MODE_UNSET: RuleFailureMode = RuleFailureMode(0);
  /// Reject message on publish, ignore message on consume
  pub const RULE_FAILURE_MODE_REJECT: RuleFailureMode = RuleFailureMode(1);
  /// Send message to Streamdal DLQ
  pub const RULE_FAILURE_MODE_DLQ: RuleFailureMode = RuleFailureMode(2);
  /// Run a transform on the message
  pub const RULE_FAILURE_MODE_TRANSFORM: RuleFailureMode = RuleFailureMode(3);
  /// Send an alert to slack
  pub const RULE_FAILURE_MODE_ALERT_SLACK: RuleFailureMode = RuleFailureMode(4);
  pub const KNOWN_VARIANTS: [RuleFailureMode; 5] = [RuleFailureMode::RULE_FAILURE_MODE_UNSET, RuleFailureMode::RULE_FAILURE_MODE_REJECT, RuleFailureMode::RULE_FAILURE_MODE_DLQ, RuleFailureMode::RULE_FAILURE_MODE_TRANSFORM, RuleFailureMode::RULE_FAILURE_MODE_ALERT_SLACK];
  pub const fn value(self) -> i32 {
    self.0
  }
  pub fn into_known(self) -> ::std::option::Option<RuleFailureMode_Closed> {
    match self {
      RuleFailureMode::RULE_FAILURE_MODE_UNSET => Some(RuleFailureMode_Closed::RULE_FAILURE_MODE_UNSET),
      RuleFailureMode::RULE_FAILURE_MODE_REJECT => Some(RuleFailureMode_Closed::RULE_FAILURE_MODE_REJECT),
      RuleFailureMode::RULE_FAILURE_MODE_DLQ => Some(RuleFailureMode_Closed::RULE_FAILURE_MODE_DLQ),
      RuleFailureMode::RULE_FAILURE_MODE_TRANSFORM => Some(RuleFailureMode_Closed::RULE_FAILURE_MODE_TRANSFORM),
      RuleFailureMode::RULE_FAILURE_MODE_ALERT_SLACK => Some(RuleFailureMode_Closed::RULE_FAILURE_MODE_ALERT_SLACK),
      _ => None,
    }
  }
}
impl ::std::default::Default for RuleFailureMode {
  fn default() -> Self {
    RuleFailureMode::RULE_FAILURE_MODE_UNSET
  }
}
impl From<RuleFailureMode> for i32 {
  fn from(v: RuleFailureMode) -> i32 {
    v.0
  }
}
impl From<i32> for RuleFailureMode {
  fn from(v: i32) -> RuleFailureMode {
    RuleFailureMode(v)
  }
}
impl From<RuleFailureMode_Closed> for RuleFailureMode {
  fn from(v: RuleFailureMode_Closed) -> RuleFailureMode {
    RuleFailureMode(v as i32)
  }
}
impl ::pb_jelly::ProtoEnum for RuleFailureMode {
}
impl ::pb_jelly::OpenProtoEnum for RuleFailureMode {
  fn name(self) -> ::std::option::Option<&'static str> {
    match self {
      RuleFailureMode::RULE_FAILURE_MODE_UNSET => Some("RULE_FAILURE_MODE_UNSET"),
      RuleFailureMode::RULE_FAILURE_MODE_REJECT => Some("RULE_FAILURE_MODE_REJECT"),
      RuleFailureMode::RULE_FAILURE_MODE_DLQ => Some("RULE_FAILURE_MODE_DLQ"),
      RuleFailureMode::RULE_FAILURE_MODE_TRANSFORM => Some("RULE_FAILURE_MODE_TRANSFORM"),
      RuleFailureMode::RULE_FAILURE_MODE_ALERT_SLACK => Some("RULE_FAILURE_MODE_ALERT_SLACK"),
      _ => None,
    }
  }
  fn is_known(self) -> bool {
    match self {
      RuleFailureMode::RULE_FAILURE_MODE_UNSET => true,
      RuleFailureMode::RULE_FAILURE_MODE_REJECT => true,
      RuleFailureMode::RULE_FAILURE_MODE_DLQ => true,
      RuleFailureMode::RULE_FAILURE_MODE_TRANSFORM => true,
      RuleFailureMode::RULE_FAILURE_MODE_ALERT_SLACK => true,
      _ => false,
    }
  }
}
impl ::std::fmt::Debug for RuleFailureMode {
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
pub enum RuleFailureMode_Closed {
  RULE_FAILURE_MODE_UNSET = 0,
  /// Reject message on publish, ignore message on consume
  RULE_FAILURE_MODE_REJECT = 1,
  /// Send message to Streamdal DLQ
  RULE_FAILURE_MODE_DLQ = 2,
  /// Run a transform on the message
  RULE_FAILURE_MODE_TRANSFORM = 3,
  /// Send an alert to slack
  RULE_FAILURE_MODE_ALERT_SLACK = 4,
}
impl RuleFailureMode_Closed {
  pub const KNOWN_VARIANTS: [RuleFailureMode_Closed; 5] = [RuleFailureMode_Closed::RULE_FAILURE_MODE_UNSET, RuleFailureMode_Closed::RULE_FAILURE_MODE_REJECT, RuleFailureMode_Closed::RULE_FAILURE_MODE_DLQ, RuleFailureMode_Closed::RULE_FAILURE_MODE_TRANSFORM, RuleFailureMode_Closed::RULE_FAILURE_MODE_ALERT_SLACK];
}
impl ::std::default::Default for RuleFailureMode_Closed {
  fn default() -> Self {
    RuleFailureMode_Closed::RULE_FAILURE_MODE_UNSET
  }
}
impl From<RuleFailureMode_Closed> for i32 {
  fn from(v: RuleFailureMode_Closed) -> i32 {
    match v {
      RuleFailureMode_Closed::RULE_FAILURE_MODE_UNSET => 0,
      RuleFailureMode_Closed::RULE_FAILURE_MODE_REJECT => 1,
      RuleFailureMode_Closed::RULE_FAILURE_MODE_DLQ => 2,
      RuleFailureMode_Closed::RULE_FAILURE_MODE_TRANSFORM => 3,
      RuleFailureMode_Closed::RULE_FAILURE_MODE_ALERT_SLACK => 4,
    }
  }
}
impl ::std::convert::TryFrom<i32> for RuleFailureMode_Closed {
  type Error = i32;
  fn try_from(v: i32) -> ::std::result::Result<Self, i32> {
    match v {
      0 => Ok(RuleFailureMode_Closed::RULE_FAILURE_MODE_UNSET),
      1 => Ok(RuleFailureMode_Closed::RULE_FAILURE_MODE_REJECT),
      2 => Ok(RuleFailureMode_Closed::RULE_FAILURE_MODE_DLQ),
      3 => Ok(RuleFailureMode_Closed::RULE_FAILURE_MODE_TRANSFORM),
      4 => Ok(RuleFailureMode_Closed::RULE_FAILURE_MODE_ALERT_SLACK),
      _ => Err(v),
    }
  }
}
impl ::pb_jelly::ProtoEnum for RuleFailureMode_Closed {
}
impl ::pb_jelly::ClosedProtoEnum for RuleFailureMode_Closed {
  fn name(self) -> &'static str {
    match self {
      RuleFailureMode_Closed::RULE_FAILURE_MODE_UNSET => "RULE_FAILURE_MODE_UNSET",
      RuleFailureMode_Closed::RULE_FAILURE_MODE_REJECT => "RULE_FAILURE_MODE_REJECT",
      RuleFailureMode_Closed::RULE_FAILURE_MODE_DLQ => "RULE_FAILURE_MODE_DLQ",
      RuleFailureMode_Closed::RULE_FAILURE_MODE_TRANSFORM => "RULE_FAILURE_MODE_TRANSFORM",
      RuleFailureMode_Closed::RULE_FAILURE_MODE_ALERT_SLACK => "RULE_FAILURE_MODE_ALERT_SLACK",
    }
  }
}

#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[repr(transparent)]
pub struct FailureModeTransform_TransformType(i32);
impl FailureModeTransform_TransformType {
  pub const TRANSFORM_TYPE_UNSET: FailureModeTransform_TransformType = FailureModeTransform_TransformType(0);
  pub const TRANSFORM_TYPE_REPLACE: FailureModeTransform_TransformType = FailureModeTransform_TransformType(1);
  pub const TRANSFORM_TYPE_DELETE: FailureModeTransform_TransformType = FailureModeTransform_TransformType(2);
  pub const KNOWN_VARIANTS: [FailureModeTransform_TransformType; 3] = [FailureModeTransform_TransformType::TRANSFORM_TYPE_UNSET, FailureModeTransform_TransformType::TRANSFORM_TYPE_REPLACE, FailureModeTransform_TransformType::TRANSFORM_TYPE_DELETE];
  pub const fn value(self) -> i32 {
    self.0
  }
  pub fn into_known(self) -> ::std::option::Option<FailureModeTransform_TransformType_Closed> {
    match self {
      FailureModeTransform_TransformType::TRANSFORM_TYPE_UNSET => Some(FailureModeTransform_TransformType_Closed::TRANSFORM_TYPE_UNSET),
      FailureModeTransform_TransformType::TRANSFORM_TYPE_REPLACE => Some(FailureModeTransform_TransformType_Closed::TRANSFORM_TYPE_REPLACE),
      FailureModeTransform_TransformType::TRANSFORM_TYPE_DELETE => Some(FailureModeTransform_TransformType_Closed::TRANSFORM_TYPE_DELETE),
      _ => None,
    }
  }
}
impl ::std::default::Default for FailureModeTransform_TransformType {
  fn default() -> Self {
    FailureModeTransform_TransformType::TRANSFORM_TYPE_UNSET
  }
}
impl From<FailureModeTransform_TransformType> for i32 {
  fn from(v: FailureModeTransform_TransformType) -> i32 {
    v.0
  }
}
impl From<i32> for FailureModeTransform_TransformType {
  fn from(v: i32) -> FailureModeTransform_TransformType {
    FailureModeTransform_TransformType(v)
  }
}
impl From<FailureModeTransform_TransformType_Closed> for FailureModeTransform_TransformType {
  fn from(v: FailureModeTransform_TransformType_Closed) -> FailureModeTransform_TransformType {
    FailureModeTransform_TransformType(v as i32)
  }
}
impl ::pb_jelly::ProtoEnum for FailureModeTransform_TransformType {
}
impl ::pb_jelly::OpenProtoEnum for FailureModeTransform_TransformType {
  fn name(self) -> ::std::option::Option<&'static str> {
    match self {
      FailureModeTransform_TransformType::TRANSFORM_TYPE_UNSET => Some("TRANSFORM_TYPE_UNSET"),
      FailureModeTransform_TransformType::TRANSFORM_TYPE_REPLACE => Some("TRANSFORM_TYPE_REPLACE"),
      FailureModeTransform_TransformType::TRANSFORM_TYPE_DELETE => Some("TRANSFORM_TYPE_DELETE"),
      _ => None,
    }
  }
  fn is_known(self) -> bool {
    match self {
      FailureModeTransform_TransformType::TRANSFORM_TYPE_UNSET => true,
      FailureModeTransform_TransformType::TRANSFORM_TYPE_REPLACE => true,
      FailureModeTransform_TransformType::TRANSFORM_TYPE_DELETE => true,
      _ => false,
    }
  }
}
impl ::std::fmt::Debug for FailureModeTransform_TransformType {
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
pub enum FailureModeTransform_TransformType_Closed {
  TRANSFORM_TYPE_UNSET = 0,
  TRANSFORM_TYPE_REPLACE = 1,
  TRANSFORM_TYPE_DELETE = 2,
}
impl FailureModeTransform_TransformType_Closed {
  pub const KNOWN_VARIANTS: [FailureModeTransform_TransformType_Closed; 3] = [FailureModeTransform_TransformType_Closed::TRANSFORM_TYPE_UNSET, FailureModeTransform_TransformType_Closed::TRANSFORM_TYPE_REPLACE, FailureModeTransform_TransformType_Closed::TRANSFORM_TYPE_DELETE];
}
impl ::std::default::Default for FailureModeTransform_TransformType_Closed {
  fn default() -> Self {
    FailureModeTransform_TransformType_Closed::TRANSFORM_TYPE_UNSET
  }
}
impl From<FailureModeTransform_TransformType_Closed> for i32 {
  fn from(v: FailureModeTransform_TransformType_Closed) -> i32 {
    match v {
      FailureModeTransform_TransformType_Closed::TRANSFORM_TYPE_UNSET => 0,
      FailureModeTransform_TransformType_Closed::TRANSFORM_TYPE_REPLACE => 1,
      FailureModeTransform_TransformType_Closed::TRANSFORM_TYPE_DELETE => 2,
    }
  }
}
impl ::std::convert::TryFrom<i32> for FailureModeTransform_TransformType_Closed {
  type Error = i32;
  fn try_from(v: i32) -> ::std::result::Result<Self, i32> {
    match v {
      0 => Ok(FailureModeTransform_TransformType_Closed::TRANSFORM_TYPE_UNSET),
      1 => Ok(FailureModeTransform_TransformType_Closed::TRANSFORM_TYPE_REPLACE),
      2 => Ok(FailureModeTransform_TransformType_Closed::TRANSFORM_TYPE_DELETE),
      _ => Err(v),
    }
  }
}
impl ::pb_jelly::ProtoEnum for FailureModeTransform_TransformType_Closed {
}
impl ::pb_jelly::ClosedProtoEnum for FailureModeTransform_TransformType_Closed {
  fn name(self) -> &'static str {
    match self {
      FailureModeTransform_TransformType_Closed::TRANSFORM_TYPE_UNSET => "TRANSFORM_TYPE_UNSET",
      FailureModeTransform_TransformType_Closed::TRANSFORM_TYPE_REPLACE => "TRANSFORM_TYPE_REPLACE",
      FailureModeTransform_TransformType_Closed::TRANSFORM_TYPE_DELETE => "TRANSFORM_TYPE_DELETE",
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RuleSet {
  pub id: ::std::string::String,
  /// name will be used to identify this rule set in the frontend, it serves no other purpose
  pub name: ::std::string::String,
  /// Determines when this rule is ran
  pub mode: RuleMode,
  pub rules: ::std::vec::Vec<RuleSet_RulesEntry>,
  /// The bus this rule set is associated with
  pub bus: ::std::string::String,
  /// Incrementing number to track rule set versions. Set by plumber
  pub version: i32,
  /// What key to run these rules on
  /// Kafka:
  ///   - Key is the topic being published to, or read from
  /// RabbitMQ
  ///   - Key is the binding/routing key depending on publish or consume
  pub key: ::std::string::String,
}
impl ::std::default::Default for RuleSet {
  fn default() -> Self {
    RuleSet {
      id: ::std::default::Default::default(),
      name: ::std::default::Default::default(),
      mode: ::std::default::Default::default(),
      rules: ::std::default::Default::default(),
      bus: ::std::default::Default::default(),
      version: ::std::default::Default::default(),
      key: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RuleSet_default: RuleSet = RuleSet::default();
}
impl ::pb_jelly::Message for RuleSet {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RuleSet",
      full_name: "protos.common.RuleSet",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "id",
          full_name: "protos.common.RuleSet.id",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "name",
          full_name: "protos.common.RuleSet.name",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "mode",
          full_name: "protos.common.RuleSet.mode",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "rules",
          full_name: "protos.common.RuleSet.rules",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Repeated,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "bus",
          full_name: "protos.common.RuleSet.bus",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "version",
          full_name: "protos.common.RuleSet.version",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "key",
          full_name: "protos.common.RuleSet.key",
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
    let mut id_size = 0;
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      let l = ::pb_jelly::Message::compute_size(val);
      id_size += ::pb_jelly::wire_format::serialized_length(1);
      id_size += ::pb_jelly::varint::serialized_length(l as u64);
      id_size += l;
    }
    size += id_size;
    let mut name_size = 0;
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
      let l = ::pb_jelly::Message::compute_size(val);
      name_size += ::pb_jelly::wire_format::serialized_length(2);
      name_size += ::pb_jelly::varint::serialized_length(l as u64);
      name_size += l;
    }
    size += name_size;
    let mut mode_size = 0;
    if self.mode != <RuleMode as ::std::default::Default>::default() {
      let val = &self.mode;
      let l = ::pb_jelly::Message::compute_size(val);
      mode_size += ::pb_jelly::wire_format::serialized_length(3);
      mode_size += l;
    }
    size += mode_size;
    let mut rules_size = 0;
    for val in &self.rules {
      let l = ::pb_jelly::Message::compute_size(val);
      rules_size += ::pb_jelly::wire_format::serialized_length(4);
      rules_size += ::pb_jelly::varint::serialized_length(l as u64);
      rules_size += l;
    }
    size += rules_size;
    let mut bus_size = 0;
    if self.bus != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.bus;
      let l = ::pb_jelly::Message::compute_size(val);
      bus_size += ::pb_jelly::wire_format::serialized_length(5);
      bus_size += ::pb_jelly::varint::serialized_length(l as u64);
      bus_size += l;
    }
    size += bus_size;
    let mut version_size = 0;
    if self.version != <i32 as ::std::default::Default>::default() {
      let val = &self.version;
      let l = ::pb_jelly::Message::compute_size(val);
      version_size += ::pb_jelly::wire_format::serialized_length(6);
      version_size += l;
    }
    size += version_size;
    let mut key_size = 0;
    if self.key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.key;
      let l = ::pb_jelly::Message::compute_size(val);
      key_size += ::pb_jelly::wire_format::serialized_length(7);
      key_size += ::pb_jelly::varint::serialized_length(l as u64);
      key_size += l;
    }
    size += key_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.mode != <RuleMode as ::std::default::Default>::default() {
      let val = &self.mode;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.rules {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.bus != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.bus;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.version != <i32 as ::std::default::Default>::default() {
      let val = &self.version;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.key;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.mode != <RuleMode as ::std::default::Default>::default() {
      let val = &self.mode;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.rules {
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.bus != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.bus;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.version != <i32 as ::std::default::Default>::default() {
      let val = &self.version;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.key;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RuleSet", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.id = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RuleSet", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.name = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RuleSet", 3)?;
          let mut val: RuleMode = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.mode = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RuleSet", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RuleSet_RulesEntry = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.rules.push(val);
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RuleSet", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.bus = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RuleSet", 6)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.version = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RuleSet", 7)?;
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
impl ::pb_jelly::Reflection for RuleSet {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.id)
      }
      "name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.name)
      }
      "mode" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.mode)
      }
      "rules" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      "bus" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.bus)
      }
      "version" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.version)
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

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RuleSet_RulesEntry {
  pub key: ::std::string::String,
  pub value: ::std::option::Option<Rule>,
}
impl ::std::default::Default for RuleSet_RulesEntry {
  fn default() -> Self {
    RuleSet_RulesEntry {
      key: ::std::default::Default::default(),
      value: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RuleSet_RulesEntry_default: RuleSet_RulesEntry = RuleSet_RulesEntry::default();
}
impl ::pb_jelly::Message for RuleSet_RulesEntry {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RuleSet_RulesEntry",
      full_name: "protos.common.RuleSet_RulesEntry",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "key",
          full_name: "protos.common.RuleSet_RulesEntry.key",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "value",
          full_name: "protos.common.RuleSet_RulesEntry.value",
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
    for val in &self.value {
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
    for val in &self.value {
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
    for val in &self.value {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RuleSet_RulesEntry", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.key = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RuleSet_RulesEntry", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: Rule = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.value = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for RuleSet_RulesEntry {
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
        ::pb_jelly::reflection::FieldMut::Value(self.value.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct Rule {
  pub id: ::std::string::String,
  /// Defines which kind of wasm function we're executing
  pub type_: RuleType,
  /// The failure mode to use if the rule fails
  pub failure_mode: RuleFailureMode,
  pub rule_config: ::std::option::Option<Rule_RuleConfig>,
  pub failure_mode_config: ::std::option::Option<Rule_FailureModeConfig>,
}
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub enum Rule_RuleConfig {
  MatchConfig(RuleConfigMatch),
  CustomConfig(RuleConfigCustom),
}
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub enum Rule_FailureModeConfig {
  Reject(FailureModeReject),
  Dlq(FailureModeDLQ),
  Transform(FailureModeTransform),
  AlertSlack(FailureModeAlertSlack),
}
impl ::std::default::Default for Rule {
  fn default() -> Self {
    Rule {
      id: ::std::default::Default::default(),
      type_: ::std::default::Default::default(),
      failure_mode: ::std::default::Default::default(),
      rule_config: None,
      failure_mode_config: None,
    }
  }
}
lazy_static! {
  pub static ref Rule_default: Rule = Rule::default();
}
impl ::pb_jelly::Message for Rule {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "Rule",
      full_name: "protos.common.Rule",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "id",
          full_name: "protos.common.Rule.id",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "type_",
          full_name: "protos.common.Rule.type_",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "failure_mode",
          full_name: "protos.common.Rule.failure_mode",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "match_config",
          full_name: "protos.common.Rule.match_config",
          index: 3,
          number: 1000,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "custom_config",
          full_name: "protos.common.Rule.custom_config",
          index: 4,
          number: 1001,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(0),
        },
        ::pb_jelly::FieldDescriptor {
          name: "reject",
          full_name: "protos.common.Rule.reject",
          index: 5,
          number: 2000,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(1),
        },
        ::pb_jelly::FieldDescriptor {
          name: "dlq",
          full_name: "protos.common.Rule.dlq",
          index: 6,
          number: 2001,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(1),
        },
        ::pb_jelly::FieldDescriptor {
          name: "transform",
          full_name: "protos.common.Rule.transform",
          index: 7,
          number: 2002,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(1),
        },
        ::pb_jelly::FieldDescriptor {
          name: "alert_slack",
          full_name: "protos.common.Rule.alert_slack",
          index: 8,
          number: 2003,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: Some(1),
        },
      ],
      oneofs: &[
        ::pb_jelly::OneofDescriptor {
          name: "rule_config",
        },
        ::pb_jelly::OneofDescriptor {
          name: "failure_mode_config",
        },
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut id_size = 0;
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      let l = ::pb_jelly::Message::compute_size(val);
      id_size += ::pb_jelly::wire_format::serialized_length(1);
      id_size += ::pb_jelly::varint::serialized_length(l as u64);
      id_size += l;
    }
    size += id_size;
    let mut type__size = 0;
    if self.type_ != <RuleType as ::std::default::Default>::default() {
      let val = &self.type_;
      let l = ::pb_jelly::Message::compute_size(val);
      type__size += ::pb_jelly::wire_format::serialized_length(2);
      type__size += l;
    }
    size += type__size;
    let mut failure_mode_size = 0;
    if self.failure_mode != <RuleFailureMode as ::std::default::Default>::default() {
      let val = &self.failure_mode;
      let l = ::pb_jelly::Message::compute_size(val);
      failure_mode_size += ::pb_jelly::wire_format::serialized_length(3);
      failure_mode_size += l;
    }
    size += failure_mode_size;
    let mut match_config_size = 0;
    if let Some(Rule_RuleConfig::MatchConfig(ref val)) = self.rule_config {
      let l = ::pb_jelly::Message::compute_size(val);
      match_config_size += ::pb_jelly::wire_format::serialized_length(1000);
      match_config_size += ::pb_jelly::varint::serialized_length(l as u64);
      match_config_size += l;
    }
    size += match_config_size;
    let mut custom_config_size = 0;
    if let Some(Rule_RuleConfig::CustomConfig(ref val)) = self.rule_config {
      let l = ::pb_jelly::Message::compute_size(val);
      custom_config_size += ::pb_jelly::wire_format::serialized_length(1001);
      custom_config_size += ::pb_jelly::varint::serialized_length(l as u64);
      custom_config_size += l;
    }
    size += custom_config_size;
    let mut reject_size = 0;
    if let Some(Rule_FailureModeConfig::Reject(ref val)) = self.failure_mode_config {
      let l = ::pb_jelly::Message::compute_size(val);
      reject_size += ::pb_jelly::wire_format::serialized_length(2000);
      reject_size += ::pb_jelly::varint::serialized_length(l as u64);
      reject_size += l;
    }
    size += reject_size;
    let mut dlq_size = 0;
    if let Some(Rule_FailureModeConfig::Dlq(ref val)) = self.failure_mode_config {
      let l = ::pb_jelly::Message::compute_size(val);
      dlq_size += ::pb_jelly::wire_format::serialized_length(2001);
      dlq_size += ::pb_jelly::varint::serialized_length(l as u64);
      dlq_size += l;
    }
    size += dlq_size;
    let mut transform_size = 0;
    if let Some(Rule_FailureModeConfig::Transform(ref val)) = self.failure_mode_config {
      let l = ::pb_jelly::Message::compute_size(val);
      transform_size += ::pb_jelly::wire_format::serialized_length(2002);
      transform_size += ::pb_jelly::varint::serialized_length(l as u64);
      transform_size += l;
    }
    size += transform_size;
    let mut alert_slack_size = 0;
    if let Some(Rule_FailureModeConfig::AlertSlack(ref val)) = self.failure_mode_config {
      let l = ::pb_jelly::Message::compute_size(val);
      alert_slack_size += ::pb_jelly::wire_format::serialized_length(2003);
      alert_slack_size += ::pb_jelly::varint::serialized_length(l as u64);
      alert_slack_size += l;
    }
    size += alert_slack_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.type_ != <RuleType as ::std::default::Default>::default() {
      let val = &self.type_;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.failure_mode != <RuleFailureMode as ::std::default::Default>::default() {
      let val = &self.failure_mode;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(Rule_RuleConfig::MatchConfig(ref val)) = self.rule_config {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(Rule_RuleConfig::CustomConfig(ref val)) = self.rule_config {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(Rule_FailureModeConfig::Reject(ref val)) = self.failure_mode_config {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(Rule_FailureModeConfig::Dlq(ref val)) = self.failure_mode_config {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(Rule_FailureModeConfig::Transform(ref val)) = self.failure_mode_config {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if let Some(Rule_FailureModeConfig::AlertSlack(ref val)) = self.failure_mode_config {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.type_ != <RuleType as ::std::default::Default>::default() {
      let val = &self.type_;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.failure_mode != <RuleFailureMode as ::std::default::Default>::default() {
      let val = &self.failure_mode;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(Rule_RuleConfig::MatchConfig(ref val)) = self.rule_config {
      ::pb_jelly::wire_format::write(1000, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(Rule_RuleConfig::CustomConfig(ref val)) = self.rule_config {
      ::pb_jelly::wire_format::write(1001, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(Rule_FailureModeConfig::Reject(ref val)) = self.failure_mode_config {
      ::pb_jelly::wire_format::write(2000, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(Rule_FailureModeConfig::Dlq(ref val)) = self.failure_mode_config {
      ::pb_jelly::wire_format::write(2001, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(Rule_FailureModeConfig::Transform(ref val)) = self.failure_mode_config {
      ::pb_jelly::wire_format::write(2002, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if let Some(Rule_FailureModeConfig::AlertSlack(ref val)) = self.failure_mode_config {
      ::pb_jelly::wire_format::write(2003, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Rule", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.id = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "Rule", 2)?;
          let mut val: RuleType = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.type_ = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "Rule", 3)?;
          let mut val: RuleFailureMode = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.failure_mode = val;
        }
        1000 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Rule", 1000)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RuleConfigMatch = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.rule_config = Some(Rule_RuleConfig::MatchConfig(val));
        }
        1001 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Rule", 1001)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RuleConfigCustom = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.rule_config = Some(Rule_RuleConfig::CustomConfig(val));
        }
        2000 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Rule", 2000)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: FailureModeReject = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.failure_mode_config = Some(Rule_FailureModeConfig::Reject(val));
        }
        2001 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Rule", 2001)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: FailureModeDLQ = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.failure_mode_config = Some(Rule_FailureModeConfig::Dlq(val));
        }
        2002 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Rule", 2002)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: FailureModeTransform = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.failure_mode_config = Some(Rule_FailureModeConfig::Transform(val));
        }
        2003 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Rule", 2003)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: FailureModeAlertSlack = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.failure_mode_config = Some(Rule_FailureModeConfig::AlertSlack(val));
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for Rule {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      "rule_config" => {
        if let Some(Rule_RuleConfig::MatchConfig(ref val)) = self.rule_config {
          return Some("match_config");
        }
        if let Some(Rule_RuleConfig::CustomConfig(ref val)) = self.rule_config {
          return Some("custom_config");
        }
        None
      }
      "failure_mode_config" => {
        if let Some(Rule_FailureModeConfig::Reject(ref val)) = self.failure_mode_config {
          return Some("reject");
        }
        if let Some(Rule_FailureModeConfig::Dlq(ref val)) = self.failure_mode_config {
          return Some("dlq");
        }
        if let Some(Rule_FailureModeConfig::Transform(ref val)) = self.failure_mode_config {
          return Some("transform");
        }
        if let Some(Rule_FailureModeConfig::AlertSlack(ref val)) = self.failure_mode_config {
          return Some("alert_slack");
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
      "id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.id)
      }
      "type_" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.type_)
      }
      "failure_mode" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.failure_mode)
      }
      "match_config" => {
        match self.rule_config {
          Some(Rule_RuleConfig::MatchConfig(_)) => (),
          _ => {
            self.rule_config = Some(Rule_RuleConfig::MatchConfig(::std::default::Default::default()));
          },
        }
        if let Some(Rule_RuleConfig::MatchConfig(ref mut val)) = self.rule_config {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "custom_config" => {
        match self.rule_config {
          Some(Rule_RuleConfig::CustomConfig(_)) => (),
          _ => {
            self.rule_config = Some(Rule_RuleConfig::CustomConfig(::std::default::Default::default()));
          },
        }
        if let Some(Rule_RuleConfig::CustomConfig(ref mut val)) = self.rule_config {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "reject" => {
        match self.failure_mode_config {
          Some(Rule_FailureModeConfig::Reject(_)) => (),
          _ => {
            self.failure_mode_config = Some(Rule_FailureModeConfig::Reject(::std::default::Default::default()));
          },
        }
        if let Some(Rule_FailureModeConfig::Reject(ref mut val)) = self.failure_mode_config {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "dlq" => {
        match self.failure_mode_config {
          Some(Rule_FailureModeConfig::Dlq(_)) => (),
          _ => {
            self.failure_mode_config = Some(Rule_FailureModeConfig::Dlq(::std::default::Default::default()));
          },
        }
        if let Some(Rule_FailureModeConfig::Dlq(ref mut val)) = self.failure_mode_config {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "transform" => {
        match self.failure_mode_config {
          Some(Rule_FailureModeConfig::Transform(_)) => (),
          _ => {
            self.failure_mode_config = Some(Rule_FailureModeConfig::Transform(::std::default::Default::default()));
          },
        }
        if let Some(Rule_FailureModeConfig::Transform(ref mut val)) = self.failure_mode_config {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      "alert_slack" => {
        match self.failure_mode_config {
          Some(Rule_FailureModeConfig::AlertSlack(_)) => (),
          _ => {
            self.failure_mode_config = Some(Rule_FailureModeConfig::AlertSlack(::std::default::Default::default()));
          },
        }
        if let Some(Rule_FailureModeConfig::AlertSlack(ref mut val)) = self.failure_mode_config {
          return ::pb_jelly::reflection::FieldMut::Value(val);
        }
        unreachable!()
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RuleConfigMatch {
  /// The json path we are matching on
  pub path: ::std::string::String,
  /// The type of detective matcher we're using.
  /// See MatchType in https://github.com/streamdal/dataqual/blob/main/detective/detective.go
  pub type_: ::std::string::String,
  /// The values we are matching on if the matcher takes arguments (ex: string_contains_any),
  /// otherwise this is ignored
  pub args: ::std::vec::Vec<::std::string::String>,
}
impl ::std::default::Default for RuleConfigMatch {
  fn default() -> Self {
    RuleConfigMatch {
      path: ::std::default::Default::default(),
      type_: ::std::default::Default::default(),
      args: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RuleConfigMatch_default: RuleConfigMatch = RuleConfigMatch::default();
}
impl ::pb_jelly::Message for RuleConfigMatch {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RuleConfigMatch",
      full_name: "protos.common.RuleConfigMatch",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "path",
          full_name: "protos.common.RuleConfigMatch.path",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "type_",
          full_name: "protos.common.RuleConfigMatch.type_",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "args",
          full_name: "protos.common.RuleConfigMatch.args",
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
    let mut path_size = 0;
    if self.path != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.path;
      let l = ::pb_jelly::Message::compute_size(val);
      path_size += ::pb_jelly::wire_format::serialized_length(1);
      path_size += ::pb_jelly::varint::serialized_length(l as u64);
      path_size += l;
    }
    size += path_size;
    let mut type__size = 0;
    if self.type_ != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.type_;
      let l = ::pb_jelly::Message::compute_size(val);
      type__size += ::pb_jelly::wire_format::serialized_length(2);
      type__size += ::pb_jelly::varint::serialized_length(l as u64);
      type__size += l;
    }
    size += type__size;
    let mut args_size = 0;
    for val in &self.args {
      let l = ::pb_jelly::Message::compute_size(val);
      args_size += ::pb_jelly::wire_format::serialized_length(3);
      args_size += ::pb_jelly::varint::serialized_length(l as u64);
      args_size += l;
    }
    size += args_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.path != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.path;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.type_ != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.type_;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.args {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.path != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.path;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.type_ != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.type_;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.args {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RuleConfigMatch", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.path = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RuleConfigMatch", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.type_ = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RuleConfigMatch", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.args.push(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for RuleConfigMatch {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "path" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.path)
      }
      "type_" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.type_)
      }
      "args" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

/// TODO
#[derive(Clone, Copy, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RuleConfigCustom {
}
impl ::std::default::Default for RuleConfigCustom {
  fn default() -> Self {
    RuleConfigCustom {
    }
  }
}
lazy_static! {
  pub static ref RuleConfigCustom_default: RuleConfigCustom = RuleConfigCustom::default();
}
impl ::pb_jelly::Message for RuleConfigCustom {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RuleConfigCustom",
      full_name: "protos.common.RuleConfigCustom",
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
impl ::pb_jelly::Reflection for RuleConfigCustom {
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

/// Purposefully blank
#[derive(Clone, Copy, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct FailureModeReject {
}
impl ::std::default::Default for FailureModeReject {
  fn default() -> Self {
    FailureModeReject {
    }
  }
}
lazy_static! {
  pub static ref FailureModeReject_default: FailureModeReject = FailureModeReject::default();
}
impl ::pb_jelly::Message for FailureModeReject {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "FailureModeReject",
      full_name: "protos.common.FailureModeReject",
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
impl ::pb_jelly::Reflection for FailureModeReject {
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
pub struct FailureModeDLQ {
  pub streamdal_token: ::std::string::String,
}
impl ::std::default::Default for FailureModeDLQ {
  fn default() -> Self {
    FailureModeDLQ {
      streamdal_token: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref FailureModeDLQ_default: FailureModeDLQ = FailureModeDLQ::default();
}
impl ::pb_jelly::Message for FailureModeDLQ {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "FailureModeDLQ",
      full_name: "protos.common.FailureModeDLQ",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "streamdal_token",
          full_name: "protos.common.FailureModeDLQ.streamdal_token",
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
    let mut streamdal_token_size = 0;
    if self.streamdal_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.streamdal_token;
      let l = ::pb_jelly::Message::compute_size(val);
      streamdal_token_size += ::pb_jelly::wire_format::serialized_length(1);
      streamdal_token_size += ::pb_jelly::varint::serialized_length(l as u64);
      streamdal_token_size += l;
    }
    size += streamdal_token_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.streamdal_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.streamdal_token;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.streamdal_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.streamdal_token;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "FailureModeDLQ", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.streamdal_token = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for FailureModeDLQ {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "streamdal_token" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.streamdal_token)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct FailureModeTransform {
  /// The key we are replacing
  pub path: ::std::string::String,
  /// The value we are replacing it with
  pub value: ::std::string::String,
  pub type_: FailureModeTransform_TransformType,
}
impl ::std::default::Default for FailureModeTransform {
  fn default() -> Self {
    FailureModeTransform {
      path: ::std::default::Default::default(),
      value: ::std::default::Default::default(),
      type_: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref FailureModeTransform_default: FailureModeTransform = FailureModeTransform::default();
}
impl ::pb_jelly::Message for FailureModeTransform {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "FailureModeTransform",
      full_name: "protos.common.FailureModeTransform",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "path",
          full_name: "protos.common.FailureModeTransform.path",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "value",
          full_name: "protos.common.FailureModeTransform.value",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "type_",
          full_name: "protos.common.FailureModeTransform.type_",
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
    let mut path_size = 0;
    if self.path != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.path;
      let l = ::pb_jelly::Message::compute_size(val);
      path_size += ::pb_jelly::wire_format::serialized_length(1);
      path_size += ::pb_jelly::varint::serialized_length(l as u64);
      path_size += l;
    }
    size += path_size;
    let mut value_size = 0;
    if self.value != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.value;
      let l = ::pb_jelly::Message::compute_size(val);
      value_size += ::pb_jelly::wire_format::serialized_length(2);
      value_size += ::pb_jelly::varint::serialized_length(l as u64);
      value_size += l;
    }
    size += value_size;
    let mut type__size = 0;
    if self.type_ != <FailureModeTransform_TransformType as ::std::default::Default>::default() {
      let val = &self.type_;
      let l = ::pb_jelly::Message::compute_size(val);
      type__size += ::pb_jelly::wire_format::serialized_length(3);
      type__size += l;
    }
    size += type__size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.path != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.path;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.value != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.value;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.type_ != <FailureModeTransform_TransformType as ::std::default::Default>::default() {
      let val = &self.type_;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.path != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.path;
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
    if self.type_ != <FailureModeTransform_TransformType as ::std::default::Default>::default() {
      let val = &self.type_;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "FailureModeTransform", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.path = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "FailureModeTransform", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.value = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "FailureModeTransform", 3)?;
          let mut val: FailureModeTransform_TransformType = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.type_ = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for FailureModeTransform {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "path" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.path)
      }
      "value" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.value)
      }
      "type_" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.type_)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct FailureModeAlertSlack {
  pub slack_channel: ::std::string::String,
}
impl ::std::default::Default for FailureModeAlertSlack {
  fn default() -> Self {
    FailureModeAlertSlack {
      slack_channel: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref FailureModeAlertSlack_default: FailureModeAlertSlack = FailureModeAlertSlack::default();
}
impl ::pb_jelly::Message for FailureModeAlertSlack {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "FailureModeAlertSlack",
      full_name: "protos.common.FailureModeAlertSlack",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "slack_channel",
          full_name: "protos.common.FailureModeAlertSlack.slack_channel",
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
    let mut slack_channel_size = 0;
    if self.slack_channel != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.slack_channel;
      let l = ::pb_jelly::Message::compute_size(val);
      slack_channel_size += ::pb_jelly::wire_format::serialized_length(1);
      slack_channel_size += ::pb_jelly::varint::serialized_length(l as u64);
      slack_channel_size += l;
    }
    size += slack_channel_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.slack_channel != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.slack_channel;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.slack_channel != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.slack_channel;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "FailureModeAlertSlack", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.slack_channel = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for FailureModeAlertSlack {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "slack_channel" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.slack_channel)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

