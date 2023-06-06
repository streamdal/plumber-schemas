// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RegisterRequest {
  /// API token obtained from https://console.streamdal.com/account/security
  pub api_token: ::std::string::String,
  /// Plumber cluster ID
  pub cluster_id: ::std::string::String,
  /// Token used to authenticate calls to this plumber instance
  /// This is filled out by plumber, and then stored in memory while it is connected
  /// All requests back to plumber need to provide this token
  pub plumber_token: ::std::string::String,
  /// Individual plumber instance ID
  pub node_id: ::std::string::String,
}
impl ::std::default::Default for RegisterRequest {
  fn default() -> Self {
    RegisterRequest {
      api_token: ::std::default::Default::default(),
      cluster_id: ::std::default::Default::default(),
      plumber_token: ::std::default::Default::default(),
      node_id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RegisterRequest_default: RegisterRequest = RegisterRequest::default();
}
impl ::pb_jelly::Message for RegisterRequest {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RegisterRequest",
      full_name: "protos.RegisterRequest",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "api_token",
          full_name: "protos.RegisterRequest.api_token",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "cluster_id",
          full_name: "protos.RegisterRequest.cluster_id",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "plumber_token",
          full_name: "protos.RegisterRequest.plumber_token",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "node_id",
          full_name: "protos.RegisterRequest.node_id",
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
    let mut api_token_size = 0;
    if self.api_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.api_token;
      let l = ::pb_jelly::Message::compute_size(val);
      api_token_size += ::pb_jelly::wire_format::serialized_length(1);
      api_token_size += ::pb_jelly::varint::serialized_length(l as u64);
      api_token_size += l;
    }
    size += api_token_size;
    let mut cluster_id_size = 0;
    if self.cluster_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.cluster_id;
      let l = ::pb_jelly::Message::compute_size(val);
      cluster_id_size += ::pb_jelly::wire_format::serialized_length(2);
      cluster_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      cluster_id_size += l;
    }
    size += cluster_id_size;
    let mut plumber_token_size = 0;
    if self.plumber_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.plumber_token;
      let l = ::pb_jelly::Message::compute_size(val);
      plumber_token_size += ::pb_jelly::wire_format::serialized_length(3);
      plumber_token_size += ::pb_jelly::varint::serialized_length(l as u64);
      plumber_token_size += l;
    }
    size += plumber_token_size;
    let mut node_id_size = 0;
    if self.node_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.node_id;
      let l = ::pb_jelly::Message::compute_size(val);
      node_id_size += ::pb_jelly::wire_format::serialized_length(4);
      node_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      node_id_size += l;
    }
    size += node_id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.api_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.api_token;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.cluster_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.cluster_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.plumber_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.plumber_token;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.node_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.node_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.api_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.api_token;
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
    if self.plumber_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.plumber_token;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.node_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.node_id;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RegisterRequest", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.api_token = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RegisterRequest", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.cluster_id = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RegisterRequest", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.plumber_token = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RegisterRequest", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.node_id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for RegisterRequest {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "api_token" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.api_token)
      }
      "cluster_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.cluster_id)
      }
      "plumber_token" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.plumber_token)
      }
      "node_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.node_id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RegisterResponse {
  /// Authorized or not
  pub success: bool,
  /// Error message if any
  /// Will be empty on success
  pub message: ::std::string::String,
}
impl ::std::default::Default for RegisterResponse {
  fn default() -> Self {
    RegisterResponse {
      success: ::std::default::Default::default(),
      message: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RegisterResponse_default: RegisterResponse = RegisterResponse::default();
}
impl ::pb_jelly::Message for RegisterResponse {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RegisterResponse",
      full_name: "protos.RegisterResponse",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "success",
          full_name: "protos.RegisterResponse.success",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "message",
          full_name: "protos.RegisterResponse.message",
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
    let mut success_size = 0;
    if self.success != <bool as ::std::default::Default>::default() {
      let val = &self.success;
      let l = ::pb_jelly::Message::compute_size(val);
      success_size += ::pb_jelly::wire_format::serialized_length(1);
      success_size += l;
    }
    size += success_size;
    let mut message_size = 0;
    if self.message != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message;
      let l = ::pb_jelly::Message::compute_size(val);
      message_size += ::pb_jelly::wire_format::serialized_length(2);
      message_size += ::pb_jelly::varint::serialized_length(l as u64);
      message_size += l;
    }
    size += message_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.success != <bool as ::std::default::Default>::default() {
      let val = &self.success;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.message != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.success != <bool as ::std::default::Default>::default() {
      let val = &self.success;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.message != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RegisterResponse", 1)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.success = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RegisterResponse", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.message = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for RegisterResponse {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "success" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.success)
      }
      "message" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.message)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

