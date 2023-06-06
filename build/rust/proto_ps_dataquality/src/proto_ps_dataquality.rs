// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct GetDataQualityRulesRequest {
  /// Every gRPC request must have a valid auth config
  pub auth: ::std::option::Option<::proto_common::ps_common_auth::Auth>,
  /// The message bus we're pulling rules for
  pub bus: ::std::string::String,
}
impl ::std::default::Default for GetDataQualityRulesRequest {
  fn default() -> Self {
    GetDataQualityRulesRequest {
      auth: ::std::default::Default::default(),
      bus: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref GetDataQualityRulesRequest_default: GetDataQualityRulesRequest = GetDataQualityRulesRequest::default();
}
impl ::pb_jelly::Message for GetDataQualityRulesRequest {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "GetDataQualityRulesRequest",
      full_name: "protos.GetDataQualityRulesRequest",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "auth",
          full_name: "protos.GetDataQualityRulesRequest.auth",
          index: 0,
          number: 9999,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "bus",
          full_name: "protos.GetDataQualityRulesRequest.bus",
          index: 1,
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
    let mut auth_size = 0;
    for val in &self.auth {
      let l = ::pb_jelly::Message::compute_size(val);
      auth_size += ::pb_jelly::wire_format::serialized_length(9999);
      auth_size += ::pb_jelly::varint::serialized_length(l as u64);
      auth_size += l;
    }
    size += auth_size;
    let mut bus_size = 0;
    if self.bus != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.bus;
      let l = ::pb_jelly::Message::compute_size(val);
      bus_size += ::pb_jelly::wire_format::serialized_length(1);
      bus_size += ::pb_jelly::varint::serialized_length(l as u64);
      bus_size += l;
    }
    size += bus_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.auth {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.bus != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.bus;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.bus != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.bus;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.auth {
      ::pb_jelly::wire_format::write(9999, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        9999 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GetDataQualityRulesRequest", 9999)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_auth::Auth = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.auth = Some(val);
        }
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GetDataQualityRulesRequest", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.bus = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for GetDataQualityRulesRequest {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "auth" => {
        ::pb_jelly::reflection::FieldMut::Value(self.auth.get_or_insert_with(::std::default::Default::default))
      }
      "bus" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.bus)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct GetDataQualityRulesResponse {
  pub status: ::std::option::Option<::proto_common::ps_common_status::Status>,
  pub rule_sets: ::std::vec::Vec<::proto_common::ps_common_dataquality::RuleSet>,
}
impl ::std::default::Default for GetDataQualityRulesResponse {
  fn default() -> Self {
    GetDataQualityRulesResponse {
      status: ::std::default::Default::default(),
      rule_sets: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref GetDataQualityRulesResponse_default: GetDataQualityRulesResponse = GetDataQualityRulesResponse::default();
}
impl ::pb_jelly::Message for GetDataQualityRulesResponse {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "GetDataQualityRulesResponse",
      full_name: "protos.GetDataQualityRulesResponse",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "status",
          full_name: "protos.GetDataQualityRulesResponse.status",
          index: 0,
          number: 1000,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "rule_sets",
          full_name: "protos.GetDataQualityRulesResponse.rule_sets",
          index: 1,
          number: 1,
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
    let mut status_size = 0;
    for val in &self.status {
      let l = ::pb_jelly::Message::compute_size(val);
      status_size += ::pb_jelly::wire_format::serialized_length(1000);
      status_size += ::pb_jelly::varint::serialized_length(l as u64);
      status_size += l;
    }
    size += status_size;
    let mut rule_sets_size = 0;
    for val in &self.rule_sets {
      let l = ::pb_jelly::Message::compute_size(val);
      rule_sets_size += ::pb_jelly::wire_format::serialized_length(1);
      rule_sets_size += ::pb_jelly::varint::serialized_length(l as u64);
      rule_sets_size += l;
    }
    size += rule_sets_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.status {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.rule_sets {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.rule_sets {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.status {
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
        1000 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GetDataQualityRulesResponse", 1000)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_status::Status = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.status = Some(val);
        }
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GetDataQualityRulesResponse", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_dataquality::RuleSet = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.rule_sets.push(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for GetDataQualityRulesResponse {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "status" => {
        ::pb_jelly::reflection::FieldMut::Value(self.status.get_or_insert_with(::std::default::Default::default))
      }
      "rule_sets" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct SendRuleNotificationRequest {
  /// Every gRPC request must have a valid auth config
  pub auth: ::std::option::Option<::proto_common::ps_common_auth::Auth>,
  pub data: ::std::vec::Vec<u8>,
  pub ruleset_id: ::std::string::String,
  pub rule_id: ::std::string::String,
}
impl ::std::default::Default for SendRuleNotificationRequest {
  fn default() -> Self {
    SendRuleNotificationRequest {
      auth: ::std::default::Default::default(),
      data: ::std::default::Default::default(),
      ruleset_id: ::std::default::Default::default(),
      rule_id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref SendRuleNotificationRequest_default: SendRuleNotificationRequest = SendRuleNotificationRequest::default();
}
impl ::pb_jelly::Message for SendRuleNotificationRequest {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "SendRuleNotificationRequest",
      full_name: "protos.SendRuleNotificationRequest",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "auth",
          full_name: "protos.SendRuleNotificationRequest.auth",
          index: 0,
          number: 9999,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "data",
          full_name: "protos.SendRuleNotificationRequest.data",
          index: 1,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "ruleset_id",
          full_name: "protos.SendRuleNotificationRequest.ruleset_id",
          index: 2,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "rule_id",
          full_name: "protos.SendRuleNotificationRequest.rule_id",
          index: 3,
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
    let mut auth_size = 0;
    for val in &self.auth {
      let l = ::pb_jelly::Message::compute_size(val);
      auth_size += ::pb_jelly::wire_format::serialized_length(9999);
      auth_size += ::pb_jelly::varint::serialized_length(l as u64);
      auth_size += l;
    }
    size += auth_size;
    let mut data_size = 0;
    if self.data != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.data;
      let l = ::pb_jelly::Message::compute_size(val);
      data_size += ::pb_jelly::wire_format::serialized_length(1);
      data_size += ::pb_jelly::varint::serialized_length(l as u64);
      data_size += l;
    }
    size += data_size;
    let mut ruleset_id_size = 0;
    if self.ruleset_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ruleset_id;
      let l = ::pb_jelly::Message::compute_size(val);
      ruleset_id_size += ::pb_jelly::wire_format::serialized_length(2);
      ruleset_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      ruleset_id_size += l;
    }
    size += ruleset_id_size;
    let mut rule_id_size = 0;
    if self.rule_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.rule_id;
      let l = ::pb_jelly::Message::compute_size(val);
      rule_id_size += ::pb_jelly::wire_format::serialized_length(3);
      rule_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      rule_id_size += l;
    }
    size += rule_id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.auth {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.data != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.data;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.ruleset_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ruleset_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.rule_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.rule_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.data != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.data;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.ruleset_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.ruleset_id;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.rule_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.rule_id;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.auth {
      ::pb_jelly::wire_format::write(9999, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        9999 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "SendRuleNotificationRequest", 9999)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_auth::Auth = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.auth = Some(val);
        }
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "SendRuleNotificationRequest", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::vec::Vec<u8> = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.data = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "SendRuleNotificationRequest", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.ruleset_id = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "SendRuleNotificationRequest", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.rule_id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for SendRuleNotificationRequest {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "auth" => {
        ::pb_jelly::reflection::FieldMut::Value(self.auth.get_or_insert_with(::std::default::Default::default))
      }
      "data" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.data)
      }
      "ruleset_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.ruleset_id)
      }
      "rule_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.rule_id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct SendRuleNotificationResponse {
  pub status: ::std::option::Option<::proto_common::ps_common_status::Status>,
}
impl ::std::default::Default for SendRuleNotificationResponse {
  fn default() -> Self {
    SendRuleNotificationResponse {
      status: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref SendRuleNotificationResponse_default: SendRuleNotificationResponse = SendRuleNotificationResponse::default();
}
impl ::pb_jelly::Message for SendRuleNotificationResponse {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "SendRuleNotificationResponse",
      full_name: "protos.SendRuleNotificationResponse",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "status",
          full_name: "protos.SendRuleNotificationResponse.status",
          index: 0,
          number: 1000,
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
    let mut status_size = 0;
    for val in &self.status {
      let l = ::pb_jelly::Message::compute_size(val);
      status_size += ::pb_jelly::wire_format::serialized_length(1000);
      status_size += ::pb_jelly::varint::serialized_length(l as u64);
      status_size += l;
    }
    size += status_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.status {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.status {
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
        1000 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "SendRuleNotificationResponse", 1000)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_status::Status = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.status = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for SendRuleNotificationResponse {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "status" => {
        ::pb_jelly::reflection::FieldMut::Value(self.status.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

