// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct GetAllRelaysRequest {
  /// Every gRPC request must have a valid auth config
  pub auth: ::std::option::Option<::proto_common::ps_common_auth::Auth>,
}
impl ::std::default::Default for GetAllRelaysRequest {
  fn default() -> Self {
    GetAllRelaysRequest {
      auth: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref GetAllRelaysRequest_default: GetAllRelaysRequest = GetAllRelaysRequest::default();
}
impl ::pb_jelly::Message for GetAllRelaysRequest {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "GetAllRelaysRequest",
      full_name: "protos.GetAllRelaysRequest",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "auth",
          full_name: "protos.GetAllRelaysRequest.auth",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GetAllRelaysRequest", 9999)?;
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
impl ::pb_jelly::Reflection for GetAllRelaysRequest {
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
pub struct GetAllRelaysResponse {
  pub status: ::std::option::Option<::proto_common::ps_common_status::Status>,
  /// Will be set as empty []Relay if no relays are configured
  pub opts: ::std::vec::Vec<::proto_opts::ps_opts_relay::RelayOptions>,
}
impl ::std::default::Default for GetAllRelaysResponse {
  fn default() -> Self {
    GetAllRelaysResponse {
      status: ::std::default::Default::default(),
      opts: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref GetAllRelaysResponse_default: GetAllRelaysResponse = GetAllRelaysResponse::default();
}
impl ::pb_jelly::Message for GetAllRelaysResponse {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "GetAllRelaysResponse",
      full_name: "protos.GetAllRelaysResponse",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "status",
          full_name: "protos.GetAllRelaysResponse.status",
          index: 0,
          number: 1000,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "opts",
          full_name: "protos.GetAllRelaysResponse.opts",
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
    let mut opts_size = 0;
    for val in &self.opts {
      let l = ::pb_jelly::Message::compute_size(val);
      opts_size += ::pb_jelly::wire_format::serialized_length(1);
      opts_size += ::pb_jelly::varint::serialized_length(l as u64);
      opts_size += l;
    }
    size += opts_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.status {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.opts {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.opts {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GetAllRelaysResponse", 1000)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_status::Status = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.status = Some(val);
        }
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GetAllRelaysResponse", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_opts::ps_opts_relay::RelayOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.opts.push(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for GetAllRelaysResponse {
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
      "opts" => {
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
pub struct GetRelayRequest {
  /// Every gRPC request must have a valid auth config
  pub auth: ::std::option::Option<::proto_common::ps_common_auth::Auth>,
  pub relay_id: ::std::string::String,
}
impl ::std::default::Default for GetRelayRequest {
  fn default() -> Self {
    GetRelayRequest {
      auth: ::std::default::Default::default(),
      relay_id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref GetRelayRequest_default: GetRelayRequest = GetRelayRequest::default();
}
impl ::pb_jelly::Message for GetRelayRequest {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "GetRelayRequest",
      full_name: "protos.GetRelayRequest",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "auth",
          full_name: "protos.GetRelayRequest.auth",
          index: 0,
          number: 9999,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "relay_id",
          full_name: "protos.GetRelayRequest.relay_id",
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
    let mut relay_id_size = 0;
    if self.relay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.relay_id;
      let l = ::pb_jelly::Message::compute_size(val);
      relay_id_size += ::pb_jelly::wire_format::serialized_length(1);
      relay_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      relay_id_size += l;
    }
    size += relay_id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.auth {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.relay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.relay_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.relay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.relay_id;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GetRelayRequest", 9999)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_auth::Auth = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.auth = Some(val);
        }
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GetRelayRequest", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.relay_id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for GetRelayRequest {
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
      "relay_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.relay_id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct GetRelayResponse {
  pub status: ::std::option::Option<::proto_common::ps_common_status::Status>,
  /// Set only if status is OK
  pub opts: ::std::option::Option<::proto_opts::ps_opts_relay::RelayOptions>,
}
impl ::std::default::Default for GetRelayResponse {
  fn default() -> Self {
    GetRelayResponse {
      status: ::std::default::Default::default(),
      opts: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref GetRelayResponse_default: GetRelayResponse = GetRelayResponse::default();
}
impl ::pb_jelly::Message for GetRelayResponse {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "GetRelayResponse",
      full_name: "protos.GetRelayResponse",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "status",
          full_name: "protos.GetRelayResponse.status",
          index: 0,
          number: 1000,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "opts",
          full_name: "protos.GetRelayResponse.opts",
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
    let mut status_size = 0;
    for val in &self.status {
      let l = ::pb_jelly::Message::compute_size(val);
      status_size += ::pb_jelly::wire_format::serialized_length(1000);
      status_size += ::pb_jelly::varint::serialized_length(l as u64);
      status_size += l;
    }
    size += status_size;
    let mut opts_size = 0;
    for val in &self.opts {
      let l = ::pb_jelly::Message::compute_size(val);
      opts_size += ::pb_jelly::wire_format::serialized_length(1);
      opts_size += ::pb_jelly::varint::serialized_length(l as u64);
      opts_size += l;
    }
    size += opts_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.status {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.opts {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.opts {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GetRelayResponse", 1000)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_status::Status = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.status = Some(val);
        }
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GetRelayResponse", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_opts::ps_opts_relay::RelayOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.opts = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for GetRelayResponse {
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
      "opts" => {
        ::pb_jelly::reflection::FieldMut::Value(self.opts.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

///////////////////////////////////////////////////////////////////////////////

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct CreateRelayRequest {
  /// Every gRPC request must have a valid auth config
  pub auth: ::std::option::Option<::proto_common::ps_common_auth::Auth>,
  pub opts: ::std::option::Option<::proto_opts::ps_opts_relay::RelayOptions>,
}
impl ::std::default::Default for CreateRelayRequest {
  fn default() -> Self {
    CreateRelayRequest {
      auth: ::std::default::Default::default(),
      opts: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref CreateRelayRequest_default: CreateRelayRequest = CreateRelayRequest::default();
}
impl ::pb_jelly::Message for CreateRelayRequest {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "CreateRelayRequest",
      full_name: "protos.CreateRelayRequest",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "auth",
          full_name: "protos.CreateRelayRequest.auth",
          index: 0,
          number: 9999,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "opts",
          full_name: "protos.CreateRelayRequest.opts",
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
    let mut opts_size = 0;
    for val in &self.opts {
      let l = ::pb_jelly::Message::compute_size(val);
      opts_size += ::pb_jelly::wire_format::serialized_length(1);
      opts_size += ::pb_jelly::varint::serialized_length(l as u64);
      opts_size += l;
    }
    size += opts_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.auth {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.opts {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.opts {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateRelayRequest", 9999)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_auth::Auth = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.auth = Some(val);
        }
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateRelayRequest", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_opts::ps_opts_relay::RelayOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.opts = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for CreateRelayRequest {
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
      "opts" => {
        ::pb_jelly::reflection::FieldMut::Value(self.opts.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct CreateRelayResponse {
  pub status: ::std::option::Option<::proto_common::ps_common_status::Status>,
  /// ID of the created relay entry
  pub relay_id: ::std::string::String,
}
impl ::std::default::Default for CreateRelayResponse {
  fn default() -> Self {
    CreateRelayResponse {
      status: ::std::default::Default::default(),
      relay_id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref CreateRelayResponse_default: CreateRelayResponse = CreateRelayResponse::default();
}
impl ::pb_jelly::Message for CreateRelayResponse {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "CreateRelayResponse",
      full_name: "protos.CreateRelayResponse",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "status",
          full_name: "protos.CreateRelayResponse.status",
          index: 0,
          number: 1000,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "relay_id",
          full_name: "protos.CreateRelayResponse.relay_id",
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
    let mut status_size = 0;
    for val in &self.status {
      let l = ::pb_jelly::Message::compute_size(val);
      status_size += ::pb_jelly::wire_format::serialized_length(1000);
      status_size += ::pb_jelly::varint::serialized_length(l as u64);
      status_size += l;
    }
    size += status_size;
    let mut relay_id_size = 0;
    if self.relay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.relay_id;
      let l = ::pb_jelly::Message::compute_size(val);
      relay_id_size += ::pb_jelly::wire_format::serialized_length(1);
      relay_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      relay_id_size += l;
    }
    size += relay_id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.status {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.relay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.relay_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.relay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.relay_id;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateRelayResponse", 1000)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_status::Status = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.status = Some(val);
        }
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateRelayResponse", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.relay_id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for CreateRelayResponse {
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
      "relay_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.relay_id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

///////////////////////////////////////////////////////////////////////////////

/// WARNING: Any in-progress relay will be interrupted/restarted
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct UpdateRelayRequest {
  /// Every gRPC request must have a valid auth config
  pub auth: ::std::option::Option<::proto_common::ps_common_auth::Auth>,
  pub relay_id: ::std::string::String,
  pub opts: ::std::option::Option<::proto_opts::ps_opts_relay::RelayOptions>,
}
impl ::std::default::Default for UpdateRelayRequest {
  fn default() -> Self {
    UpdateRelayRequest {
      auth: ::std::default::Default::default(),
      relay_id: ::std::default::Default::default(),
      opts: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref UpdateRelayRequest_default: UpdateRelayRequest = UpdateRelayRequest::default();
}
impl ::pb_jelly::Message for UpdateRelayRequest {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "UpdateRelayRequest",
      full_name: "protos.UpdateRelayRequest",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "auth",
          full_name: "protos.UpdateRelayRequest.auth",
          index: 0,
          number: 9999,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "relay_id",
          full_name: "protos.UpdateRelayRequest.relay_id",
          index: 1,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "opts",
          full_name: "protos.UpdateRelayRequest.opts",
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
    let mut relay_id_size = 0;
    if self.relay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.relay_id;
      let l = ::pb_jelly::Message::compute_size(val);
      relay_id_size += ::pb_jelly::wire_format::serialized_length(1);
      relay_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      relay_id_size += l;
    }
    size += relay_id_size;
    let mut opts_size = 0;
    for val in &self.opts {
      let l = ::pb_jelly::Message::compute_size(val);
      opts_size += ::pb_jelly::wire_format::serialized_length(2);
      opts_size += ::pb_jelly::varint::serialized_length(l as u64);
      opts_size += l;
    }
    size += opts_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.auth {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.relay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.relay_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.opts {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.relay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.relay_id;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.opts {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "UpdateRelayRequest", 9999)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_auth::Auth = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.auth = Some(val);
        }
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "UpdateRelayRequest", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.relay_id = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "UpdateRelayRequest", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_opts::ps_opts_relay::RelayOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.opts = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for UpdateRelayRequest {
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
      "relay_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.relay_id)
      }
      "opts" => {
        ::pb_jelly::reflection::FieldMut::Value(self.opts.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct UpdateRelayResponse {
  pub status: ::std::option::Option<::proto_common::ps_common_status::Status>,
}
impl ::std::default::Default for UpdateRelayResponse {
  fn default() -> Self {
    UpdateRelayResponse {
      status: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref UpdateRelayResponse_default: UpdateRelayResponse = UpdateRelayResponse::default();
}
impl ::pb_jelly::Message for UpdateRelayResponse {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "UpdateRelayResponse",
      full_name: "protos.UpdateRelayResponse",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "status",
          full_name: "protos.UpdateRelayResponse.status",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "UpdateRelayResponse", 1000)?;
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
impl ::pb_jelly::Reflection for UpdateRelayResponse {
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

/// Resume a paused relay
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct ResumeRelayRequest {
  /// Every gRPC request must have a valid auth config
  pub auth: ::std::option::Option<::proto_common::ps_common_auth::Auth>,
  pub relay_id: ::std::string::String,
}
impl ::std::default::Default for ResumeRelayRequest {
  fn default() -> Self {
    ResumeRelayRequest {
      auth: ::std::default::Default::default(),
      relay_id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ResumeRelayRequest_default: ResumeRelayRequest = ResumeRelayRequest::default();
}
impl ::pb_jelly::Message for ResumeRelayRequest {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ResumeRelayRequest",
      full_name: "protos.ResumeRelayRequest",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "auth",
          full_name: "protos.ResumeRelayRequest.auth",
          index: 0,
          number: 9999,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "relay_id",
          full_name: "protos.ResumeRelayRequest.relay_id",
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
    let mut relay_id_size = 0;
    if self.relay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.relay_id;
      let l = ::pb_jelly::Message::compute_size(val);
      relay_id_size += ::pb_jelly::wire_format::serialized_length(1);
      relay_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      relay_id_size += l;
    }
    size += relay_id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.auth {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.relay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.relay_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.relay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.relay_id;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ResumeRelayRequest", 9999)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_auth::Auth = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.auth = Some(val);
        }
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ResumeRelayRequest", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.relay_id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for ResumeRelayRequest {
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
      "relay_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.relay_id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct ResumeRelayResponse {
  pub status: ::std::option::Option<::proto_common::ps_common_status::Status>,
}
impl ::std::default::Default for ResumeRelayResponse {
  fn default() -> Self {
    ResumeRelayResponse {
      status: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ResumeRelayResponse_default: ResumeRelayResponse = ResumeRelayResponse::default();
}
impl ::pb_jelly::Message for ResumeRelayResponse {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ResumeRelayResponse",
      full_name: "protos.ResumeRelayResponse",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "status",
          full_name: "protos.ResumeRelayResponse.status",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ResumeRelayResponse", 1000)?;
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
impl ::pb_jelly::Reflection for ResumeRelayResponse {
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

/// Temporarily stop/pause a relay
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct StopRelayRequest {
  /// Every gRPC request must have a valid auth config
  pub auth: ::std::option::Option<::proto_common::ps_common_auth::Auth>,
  pub relay_id: ::std::string::String,
}
impl ::std::default::Default for StopRelayRequest {
  fn default() -> Self {
    StopRelayRequest {
      auth: ::std::default::Default::default(),
      relay_id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref StopRelayRequest_default: StopRelayRequest = StopRelayRequest::default();
}
impl ::pb_jelly::Message for StopRelayRequest {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "StopRelayRequest",
      full_name: "protos.StopRelayRequest",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "auth",
          full_name: "protos.StopRelayRequest.auth",
          index: 0,
          number: 9999,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "relay_id",
          full_name: "protos.StopRelayRequest.relay_id",
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
    let mut relay_id_size = 0;
    if self.relay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.relay_id;
      let l = ::pb_jelly::Message::compute_size(val);
      relay_id_size += ::pb_jelly::wire_format::serialized_length(1);
      relay_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      relay_id_size += l;
    }
    size += relay_id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.auth {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.relay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.relay_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.relay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.relay_id;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StopRelayRequest", 9999)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_auth::Auth = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.auth = Some(val);
        }
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StopRelayRequest", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.relay_id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for StopRelayRequest {
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
      "relay_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.relay_id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct StopRelayResponse {
  pub status: ::std::option::Option<::proto_common::ps_common_status::Status>,
}
impl ::std::default::Default for StopRelayResponse {
  fn default() -> Self {
    StopRelayResponse {
      status: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref StopRelayResponse_default: StopRelayResponse = StopRelayResponse::default();
}
impl ::pb_jelly::Message for StopRelayResponse {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "StopRelayResponse",
      full_name: "protos.StopRelayResponse",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "status",
          full_name: "protos.StopRelayResponse.status",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StopRelayResponse", 1000)?;
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
impl ::pb_jelly::Reflection for StopRelayResponse {
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
pub struct DeleteRelayRequest {
  /// Every gRPC request must have a valid auth config
  pub auth: ::std::option::Option<::proto_common::ps_common_auth::Auth>,
  pub relay_id: ::std::string::String,
}
impl ::std::default::Default for DeleteRelayRequest {
  fn default() -> Self {
    DeleteRelayRequest {
      auth: ::std::default::Default::default(),
      relay_id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref DeleteRelayRequest_default: DeleteRelayRequest = DeleteRelayRequest::default();
}
impl ::pb_jelly::Message for DeleteRelayRequest {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "DeleteRelayRequest",
      full_name: "protos.DeleteRelayRequest",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "auth",
          full_name: "protos.DeleteRelayRequest.auth",
          index: 0,
          number: 9999,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "relay_id",
          full_name: "protos.DeleteRelayRequest.relay_id",
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
    let mut relay_id_size = 0;
    if self.relay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.relay_id;
      let l = ::pb_jelly::Message::compute_size(val);
      relay_id_size += ::pb_jelly::wire_format::serialized_length(1);
      relay_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      relay_id_size += l;
    }
    size += relay_id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.auth {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.relay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.relay_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.relay_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.relay_id;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "DeleteRelayRequest", 9999)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_auth::Auth = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.auth = Some(val);
        }
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "DeleteRelayRequest", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.relay_id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for DeleteRelayRequest {
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
      "relay_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.relay_id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct DeleteRelayResponse {
  pub status: ::std::option::Option<::proto_common::ps_common_status::Status>,
}
impl ::std::default::Default for DeleteRelayResponse {
  fn default() -> Self {
    DeleteRelayResponse {
      status: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref DeleteRelayResponse_default: DeleteRelayResponse = DeleteRelayResponse::default();
}
impl ::pb_jelly::Message for DeleteRelayResponse {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "DeleteRelayResponse",
      full_name: "protos.DeleteRelayResponse",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "status",
          full_name: "protos.DeleteRelayResponse.status",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "DeleteRelayResponse", 1000)?;
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
impl ::pb_jelly::Reflection for DeleteRelayResponse {
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

