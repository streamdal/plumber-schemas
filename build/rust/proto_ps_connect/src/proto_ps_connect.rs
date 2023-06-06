// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct GetAllConnectionsRequest {
  /// Every gRPC request must have a valid auth config
  pub auth: ::std::option::Option<::proto_common::ps_common_auth::Auth>,
}
impl ::std::default::Default for GetAllConnectionsRequest {
  fn default() -> Self {
    GetAllConnectionsRequest {
      auth: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref GetAllConnectionsRequest_default: GetAllConnectionsRequest = GetAllConnectionsRequest::default();
}
impl ::pb_jelly::Message for GetAllConnectionsRequest {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "GetAllConnectionsRequest",
      full_name: "protos.GetAllConnectionsRequest",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "auth",
          full_name: "protos.GetAllConnectionsRequest.auth",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GetAllConnectionsRequest", 9999)?;
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
impl ::pb_jelly::Reflection for GetAllConnectionsRequest {
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
pub struct GetAllConnectionsResponse {
  pub options: ::std::vec::Vec<::proto_opts::ps_opts_connection::ConnectionOptions>,
}
impl ::std::default::Default for GetAllConnectionsResponse {
  fn default() -> Self {
    GetAllConnectionsResponse {
      options: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref GetAllConnectionsResponse_default: GetAllConnectionsResponse = GetAllConnectionsResponse::default();
}
impl ::pb_jelly::Message for GetAllConnectionsResponse {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "GetAllConnectionsResponse",
      full_name: "protos.GetAllConnectionsResponse",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "options",
          full_name: "protos.GetAllConnectionsResponse.options",
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
    let mut options_size = 0;
    for val in &self.options {
      let l = ::pb_jelly::Message::compute_size(val);
      options_size += ::pb_jelly::wire_format::serialized_length(1);
      options_size += ::pb_jelly::varint::serialized_length(l as u64);
      options_size += l;
    }
    size += options_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.options {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.options {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GetAllConnectionsResponse", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_opts::ps_opts_connection::ConnectionOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.options.push(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for GetAllConnectionsResponse {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "options" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

///////////////////////////////////////////////////////////////////////////////

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct GetConnectionRequest {
  /// Every gRPC request must have a valid auth config
  pub auth: ::std::option::Option<::proto_common::ps_common_auth::Auth>,
  pub connection_id: ::std::string::String,
}
impl ::std::default::Default for GetConnectionRequest {
  fn default() -> Self {
    GetConnectionRequest {
      auth: ::std::default::Default::default(),
      connection_id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref GetConnectionRequest_default: GetConnectionRequest = GetConnectionRequest::default();
}
impl ::pb_jelly::Message for GetConnectionRequest {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "GetConnectionRequest",
      full_name: "protos.GetConnectionRequest",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "auth",
          full_name: "protos.GetConnectionRequest.auth",
          index: 0,
          number: 9999,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "connection_id",
          full_name: "protos.GetConnectionRequest.connection_id",
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
    let mut connection_id_size = 0;
    if self.connection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_id;
      let l = ::pb_jelly::Message::compute_size(val);
      connection_id_size += ::pb_jelly::wire_format::serialized_length(1);
      connection_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      connection_id_size += l;
    }
    size += connection_id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.auth {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.connection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.connection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_id;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GetConnectionRequest", 9999)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_auth::Auth = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.auth = Some(val);
        }
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GetConnectionRequest", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.connection_id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for GetConnectionRequest {
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
      "connection_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.connection_id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct GetConnectionResponse {
  pub options: ::std::option::Option<::proto_opts::ps_opts_connection::ConnectionOptions>,
}
impl ::std::default::Default for GetConnectionResponse {
  fn default() -> Self {
    GetConnectionResponse {
      options: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref GetConnectionResponse_default: GetConnectionResponse = GetConnectionResponse::default();
}
impl ::pb_jelly::Message for GetConnectionResponse {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "GetConnectionResponse",
      full_name: "protos.GetConnectionResponse",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "options",
          full_name: "protos.GetConnectionResponse.options",
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
    let mut options_size = 0;
    for val in &self.options {
      let l = ::pb_jelly::Message::compute_size(val);
      options_size += ::pb_jelly::wire_format::serialized_length(1);
      options_size += ::pb_jelly::varint::serialized_length(l as u64);
      options_size += l;
    }
    size += options_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.options {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.options {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GetConnectionResponse", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_opts::ps_opts_connection::ConnectionOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.options = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for GetConnectionResponse {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "options" => {
        ::pb_jelly::reflection::FieldMut::Value(self.options.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

///////////////////////////////////////////////////////////////////////////////

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct CreateConnectionRequest {
  /// Every gRPC request must have a valid auth config
  pub auth: ::std::option::Option<::proto_common::ps_common_auth::Auth>,
  pub options: ::std::option::Option<::proto_opts::ps_opts_connection::ConnectionOptions>,
}
impl ::std::default::Default for CreateConnectionRequest {
  fn default() -> Self {
    CreateConnectionRequest {
      auth: ::std::default::Default::default(),
      options: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref CreateConnectionRequest_default: CreateConnectionRequest = CreateConnectionRequest::default();
}
impl ::pb_jelly::Message for CreateConnectionRequest {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "CreateConnectionRequest",
      full_name: "protos.CreateConnectionRequest",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "auth",
          full_name: "protos.CreateConnectionRequest.auth",
          index: 0,
          number: 9999,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "options",
          full_name: "protos.CreateConnectionRequest.options",
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
    let mut options_size = 0;
    for val in &self.options {
      let l = ::pb_jelly::Message::compute_size(val);
      options_size += ::pb_jelly::wire_format::serialized_length(1);
      options_size += ::pb_jelly::varint::serialized_length(l as u64);
      options_size += l;
    }
    size += options_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.auth {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.options {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.options {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateConnectionRequest", 9999)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_auth::Auth = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.auth = Some(val);
        }
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateConnectionRequest", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_opts::ps_opts_connection::ConnectionOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.options = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for CreateConnectionRequest {
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
      "options" => {
        ::pb_jelly::reflection::FieldMut::Value(self.options.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct CreateConnectionResponse {
  /// Set with uuid that represents connection if create is successful
  pub connection_id: ::std::string::String,
}
impl ::std::default::Default for CreateConnectionResponse {
  fn default() -> Self {
    CreateConnectionResponse {
      connection_id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref CreateConnectionResponse_default: CreateConnectionResponse = CreateConnectionResponse::default();
}
impl ::pb_jelly::Message for CreateConnectionResponse {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "CreateConnectionResponse",
      full_name: "protos.CreateConnectionResponse",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "connection_id",
          full_name: "protos.CreateConnectionResponse.connection_id",
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
    let mut connection_id_size = 0;
    if self.connection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_id;
      let l = ::pb_jelly::Message::compute_size(val);
      connection_id_size += ::pb_jelly::wire_format::serialized_length(1);
      connection_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      connection_id_size += l;
    }
    size += connection_id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.connection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.connection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_id;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateConnectionResponse", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.connection_id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for CreateConnectionResponse {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "connection_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.connection_id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

///////////////////////////////////////////////////////////////////////////////

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct TestConnectionRequest {
  /// Every gRPC request must have a valid auth config
  pub auth: ::std::option::Option<::proto_common::ps_common_auth::Auth>,
  pub options: ::std::option::Option<::proto_opts::ps_opts_connection::ConnectionOptions>,
}
impl ::std::default::Default for TestConnectionRequest {
  fn default() -> Self {
    TestConnectionRequest {
      auth: ::std::default::Default::default(),
      options: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref TestConnectionRequest_default: TestConnectionRequest = TestConnectionRequest::default();
}
impl ::pb_jelly::Message for TestConnectionRequest {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "TestConnectionRequest",
      full_name: "protos.TestConnectionRequest",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "auth",
          full_name: "protos.TestConnectionRequest.auth",
          index: 0,
          number: 9999,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "options",
          full_name: "protos.TestConnectionRequest.options",
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
    let mut options_size = 0;
    for val in &self.options {
      let l = ::pb_jelly::Message::compute_size(val);
      options_size += ::pb_jelly::wire_format::serialized_length(1);
      options_size += ::pb_jelly::varint::serialized_length(l as u64);
      options_size += l;
    }
    size += options_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.auth {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.options {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.options {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TestConnectionRequest", 9999)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_auth::Auth = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.auth = Some(val);
        }
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TestConnectionRequest", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_opts::ps_opts_connection::ConnectionOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.options = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for TestConnectionRequest {
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
      "options" => {
        ::pb_jelly::reflection::FieldMut::Value(self.options.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct TestConnectionResponse {
  pub status: ::std::option::Option<::proto_common::ps_common_status::Status>,
}
impl ::std::default::Default for TestConnectionResponse {
  fn default() -> Self {
    TestConnectionResponse {
      status: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref TestConnectionResponse_default: TestConnectionResponse = TestConnectionResponse::default();
}
impl ::pb_jelly::Message for TestConnectionResponse {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "TestConnectionResponse",
      full_name: "protos.TestConnectionResponse",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "status",
          full_name: "protos.TestConnectionResponse.status",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "TestConnectionResponse", 1000)?;
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
impl ::pb_jelly::Reflection for TestConnectionResponse {
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

///////////////////////////////////////////////////////////////////////////////

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct UpdateConnectionRequest {
  /// Every gRPC request must have a valid auth config
  pub auth: ::std::option::Option<::proto_common::ps_common_auth::Auth>,
  pub connection_id: ::std::string::String,
  pub options: ::std::option::Option<::proto_opts::ps_opts_connection::ConnectionOptions>,
}
impl ::std::default::Default for UpdateConnectionRequest {
  fn default() -> Self {
    UpdateConnectionRequest {
      auth: ::std::default::Default::default(),
      connection_id: ::std::default::Default::default(),
      options: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref UpdateConnectionRequest_default: UpdateConnectionRequest = UpdateConnectionRequest::default();
}
impl ::pb_jelly::Message for UpdateConnectionRequest {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "UpdateConnectionRequest",
      full_name: "protos.UpdateConnectionRequest",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "auth",
          full_name: "protos.UpdateConnectionRequest.auth",
          index: 0,
          number: 9999,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "connection_id",
          full_name: "protos.UpdateConnectionRequest.connection_id",
          index: 1,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "options",
          full_name: "protos.UpdateConnectionRequest.options",
          index: 2,
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
    let mut auth_size = 0;
    for val in &self.auth {
      let l = ::pb_jelly::Message::compute_size(val);
      auth_size += ::pb_jelly::wire_format::serialized_length(9999);
      auth_size += ::pb_jelly::varint::serialized_length(l as u64);
      auth_size += l;
    }
    size += auth_size;
    let mut connection_id_size = 0;
    if self.connection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_id;
      let l = ::pb_jelly::Message::compute_size(val);
      connection_id_size += ::pb_jelly::wire_format::serialized_length(1);
      connection_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      connection_id_size += l;
    }
    size += connection_id_size;
    let mut options_size = 0;
    for val in &self.options {
      let l = ::pb_jelly::Message::compute_size(val);
      options_size += ::pb_jelly::wire_format::serialized_length(2);
      options_size += ::pb_jelly::varint::serialized_length(l as u64);
      options_size += l;
    }
    size += options_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.auth {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.connection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.options {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.connection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_id;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.options {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "UpdateConnectionRequest", 9999)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_auth::Auth = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.auth = Some(val);
        }
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "UpdateConnectionRequest", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.connection_id = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "UpdateConnectionRequest", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_opts::ps_opts_connection::ConnectionOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.options = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for UpdateConnectionRequest {
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
      "connection_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.connection_id)
      }
      "options" => {
        ::pb_jelly::reflection::FieldMut::Value(self.options.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct UpdateConnectionResponse {
  pub status: ::std::option::Option<::proto_common::ps_common_status::Status>,
}
impl ::std::default::Default for UpdateConnectionResponse {
  fn default() -> Self {
    UpdateConnectionResponse {
      status: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref UpdateConnectionResponse_default: UpdateConnectionResponse = UpdateConnectionResponse::default();
}
impl ::pb_jelly::Message for UpdateConnectionResponse {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "UpdateConnectionResponse",
      full_name: "protos.UpdateConnectionResponse",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "status",
          full_name: "protos.UpdateConnectionResponse.status",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "UpdateConnectionResponse", 1000)?;
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
impl ::pb_jelly::Reflection for UpdateConnectionResponse {
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

///////////////////////////////////////////////////////////////////////////////

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct DeleteConnectionRequest {
  /// Every gRPC request must have a valid auth config
  pub auth: ::std::option::Option<::proto_common::ps_common_auth::Auth>,
  pub connection_id: ::std::string::String,
}
impl ::std::default::Default for DeleteConnectionRequest {
  fn default() -> Self {
    DeleteConnectionRequest {
      auth: ::std::default::Default::default(),
      connection_id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref DeleteConnectionRequest_default: DeleteConnectionRequest = DeleteConnectionRequest::default();
}
impl ::pb_jelly::Message for DeleteConnectionRequest {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "DeleteConnectionRequest",
      full_name: "protos.DeleteConnectionRequest",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "auth",
          full_name: "protos.DeleteConnectionRequest.auth",
          index: 0,
          number: 9999,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "connection_id",
          full_name: "protos.DeleteConnectionRequest.connection_id",
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
    let mut connection_id_size = 0;
    if self.connection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_id;
      let l = ::pb_jelly::Message::compute_size(val);
      connection_id_size += ::pb_jelly::wire_format::serialized_length(1);
      connection_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      connection_id_size += l;
    }
    size += connection_id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.auth {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.connection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.connection_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_id;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "DeleteConnectionRequest", 9999)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_auth::Auth = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.auth = Some(val);
        }
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "DeleteConnectionRequest", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.connection_id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for DeleteConnectionRequest {
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
      "connection_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.connection_id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct DeleteConnectionResponse {
  pub status: ::std::option::Option<::proto_common::ps_common_status::Status>,
}
impl ::std::default::Default for DeleteConnectionResponse {
  fn default() -> Self {
    DeleteConnectionResponse {
      status: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref DeleteConnectionResponse_default: DeleteConnectionResponse = DeleteConnectionResponse::default();
}
impl ::pb_jelly::Message for DeleteConnectionResponse {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "DeleteConnectionResponse",
      full_name: "protos.DeleteConnectionResponse",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "status",
          full_name: "protos.DeleteConnectionResponse.status",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "DeleteConnectionResponse", 1000)?;
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
impl ::pb_jelly::Reflection for DeleteConnectionResponse {
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

