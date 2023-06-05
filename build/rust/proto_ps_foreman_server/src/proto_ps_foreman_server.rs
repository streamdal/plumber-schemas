// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct PlumberInfo {
  pub team_id: ::std::string::String,
  pub cluster_id: ::std::string::String,
}
impl ::std::default::Default for PlumberInfo {
  fn default() -> Self {
    PlumberInfo {
      team_id: ::std::default::Default::default(),
      cluster_id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref PlumberInfo_default: PlumberInfo = PlumberInfo::default();
}
impl ::pb_jelly::Message for PlumberInfo {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "PlumberInfo",
      full_name: "protos.PlumberInfo",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "team_id",
          full_name: "protos.PlumberInfo.team_id",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "cluster_id",
          full_name: "protos.PlumberInfo.cluster_id",
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
    let mut team_id_size = 0;
    if self.team_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.team_id;
      let l = ::pb_jelly::Message::compute_size(val);
      team_id_size += ::pb_jelly::wire_format::serialized_length(1);
      team_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      team_id_size += l;
    }
    size += team_id_size;
    let mut cluster_id_size = 0;
    if self.cluster_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.cluster_id;
      let l = ::pb_jelly::Message::compute_size(val);
      cluster_id_size += ::pb_jelly::wire_format::serialized_length(2);
      cluster_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      cluster_id_size += l;
    }
    size += cluster_id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.team_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.team_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.cluster_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.cluster_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.team_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.team_id;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.cluster_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.cluster_id;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "PlumberInfo", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.team_id = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "PlumberInfo", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.cluster_id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for PlumberInfo {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "team_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.team_id)
      }
      "cluster_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.cluster_id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct ListPlumbersRequest {
  /// Authenticate between ui-bff and Foreman
  pub auth_token: ::std::string::String,
  /// Team ID to list connected plumbers for
  pub team_id: ::std::string::String,
}
impl ::std::default::Default for ListPlumbersRequest {
  fn default() -> Self {
    ListPlumbersRequest {
      auth_token: ::std::default::Default::default(),
      team_id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ListPlumbersRequest_default: ListPlumbersRequest = ListPlumbersRequest::default();
}
impl ::pb_jelly::Message for ListPlumbersRequest {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ListPlumbersRequest",
      full_name: "protos.ListPlumbersRequest",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "auth_token",
          full_name: "protos.ListPlumbersRequest.auth_token",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "team_id",
          full_name: "protos.ListPlumbersRequest.team_id",
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
    let mut auth_token_size = 0;
    if self.auth_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.auth_token;
      let l = ::pb_jelly::Message::compute_size(val);
      auth_token_size += ::pb_jelly::wire_format::serialized_length(1);
      auth_token_size += ::pb_jelly::varint::serialized_length(l as u64);
      auth_token_size += l;
    }
    size += auth_token_size;
    let mut team_id_size = 0;
    if self.team_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.team_id;
      let l = ::pb_jelly::Message::compute_size(val);
      team_id_size += ::pb_jelly::wire_format::serialized_length(2);
      team_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      team_id_size += l;
    }
    size += team_id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.auth_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.auth_token;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.team_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.team_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.auth_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.auth_token;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.team_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.team_id;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ListPlumbersRequest", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.auth_token = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ListPlumbersRequest", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.team_id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for ListPlumbersRequest {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "auth_token" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.auth_token)
      }
      "team_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.team_id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct ListPlumbersResponse {
  /// List of plumbers
  pub plumbers: ::std::vec::Vec<PlumberInfo>,
}
impl ::std::default::Default for ListPlumbersResponse {
  fn default() -> Self {
    ListPlumbersResponse {
      plumbers: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ListPlumbersResponse_default: ListPlumbersResponse = ListPlumbersResponse::default();
}
impl ::pb_jelly::Message for ListPlumbersResponse {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ListPlumbersResponse",
      full_name: "protos.ListPlumbersResponse",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "plumbers",
          full_name: "protos.ListPlumbersResponse.plumbers",
          index: 0,
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
    let mut plumbers_size = 0;
    for val in &self.plumbers {
      let l = ::pb_jelly::Message::compute_size(val);
      plumbers_size += ::pb_jelly::wire_format::serialized_length(1);
      plumbers_size += ::pb_jelly::varint::serialized_length(l as u64);
      plumbers_size += l;
    }
    size += plumbers_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.plumbers {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.plumbers {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ListPlumbersResponse", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: PlumberInfo = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.plumbers.push(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for ListPlumbersResponse {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "plumbers" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

