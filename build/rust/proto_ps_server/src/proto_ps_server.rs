// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct GetServerOptionsRequest {
  /// Every gRPC request must have a valid auth config
  pub auth: ::std::option::Option<::proto_common::ps_common_auth::Auth>,
}
impl ::std::default::Default for GetServerOptionsRequest {
  fn default() -> Self {
    GetServerOptionsRequest {
      auth: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref GetServerOptionsRequest_default: GetServerOptionsRequest = GetServerOptionsRequest::default();
}
impl ::pb_jelly::Message for GetServerOptionsRequest {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "GetServerOptionsRequest",
      full_name: "protos.GetServerOptionsRequest",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "auth",
          full_name: "protos.GetServerOptionsRequest.auth",
          index: 0,
          number: 9999,
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
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.auth {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GetServerOptionsRequest", 9999)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_auth::Auth = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.auth = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for GetServerOptionsRequest {
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
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct GetServerOptionsResponse {
  pub server_options: ::std::option::Option<::proto_opts::ps_opts_server::ServerOptions>,
}
impl ::std::default::Default for GetServerOptionsResponse {
  fn default() -> Self {
    GetServerOptionsResponse {
      server_options: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref GetServerOptionsResponse_default: GetServerOptionsResponse = GetServerOptionsResponse::default();
}
impl ::pb_jelly::Message for GetServerOptionsResponse {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "GetServerOptionsResponse",
      full_name: "protos.GetServerOptionsResponse",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "server_options",
          full_name: "protos.GetServerOptionsResponse.server_options",
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
    let mut server_options_size = 0;
    for val in &self.server_options {
      let l = ::pb_jelly::Message::compute_size(val);
      server_options_size += ::pb_jelly::wire_format::serialized_length(1);
      server_options_size += ::pb_jelly::varint::serialized_length(l as u64);
      server_options_size += l;
    }
    size += server_options_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.server_options {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.server_options {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GetServerOptionsResponse", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_opts::ps_opts_server::ServerOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.server_options = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for GetServerOptionsResponse {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "server_options" => {
        ::pb_jelly::reflection::FieldMut::Value(self.server_options.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

