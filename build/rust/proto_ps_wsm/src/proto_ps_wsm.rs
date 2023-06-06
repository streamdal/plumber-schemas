// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct UploadWasmFileRequest {
  /// Every gRPC request must have a valid auth config
  pub auth: ::std::option::Option<::proto_common::ps_common_auth::Auth>,
  pub name: ::std::string::String,
  pub data: ::std::vec::Vec<u8>,
}
impl ::std::default::Default for UploadWasmFileRequest {
  fn default() -> Self {
    UploadWasmFileRequest {
      auth: ::std::default::Default::default(),
      name: ::std::default::Default::default(),
      data: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref UploadWasmFileRequest_default: UploadWasmFileRequest = UploadWasmFileRequest::default();
}
impl ::pb_jelly::Message for UploadWasmFileRequest {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "UploadWasmFileRequest",
      full_name: "protos.UploadWasmFileRequest",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "auth",
          full_name: "protos.UploadWasmFileRequest.auth",
          index: 0,
          number: 9999,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "name",
          full_name: "protos.UploadWasmFileRequest.name",
          index: 1,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "data",
          full_name: "protos.UploadWasmFileRequest.data",
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
    let mut name_size = 0;
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
      let l = ::pb_jelly::Message::compute_size(val);
      name_size += ::pb_jelly::wire_format::serialized_length(1);
      name_size += ::pb_jelly::varint::serialized_length(l as u64);
      name_size += l;
    }
    size += name_size;
    let mut data_size = 0;
    if self.data != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.data;
      let l = ::pb_jelly::Message::compute_size(val);
      data_size += ::pb_jelly::wire_format::serialized_length(2);
      data_size += ::pb_jelly::varint::serialized_length(l as u64);
      data_size += l;
    }
    size += data_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.auth {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.data != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.data;
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
    if self.data != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.data;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "UploadWasmFileRequest", 9999)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_auth::Auth = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.auth = Some(val);
        }
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "UploadWasmFileRequest", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.name = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "UploadWasmFileRequest", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::vec::Vec<u8> = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.data = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for UploadWasmFileRequest {
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
      "name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.name)
      }
      "data" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.data)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct UploadWasmFileResponse {
  pub status: ::std::option::Option<::proto_common::ps_common_status::Status>,
}
impl ::std::default::Default for UploadWasmFileResponse {
  fn default() -> Self {
    UploadWasmFileResponse {
      status: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref UploadWasmFileResponse_default: UploadWasmFileResponse = UploadWasmFileResponse::default();
}
impl ::pb_jelly::Message for UploadWasmFileResponse {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "UploadWasmFileResponse",
      full_name: "protos.UploadWasmFileResponse",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "status",
          full_name: "protos.UploadWasmFileResponse.status",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "UploadWasmFileResponse", 1000)?;
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
impl ::pb_jelly::Reflection for UploadWasmFileResponse {
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

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct DownloadWasmFileRequest {
  /// Every gRPC request must have a valid auth config
  pub auth: ::std::option::Option<::proto_common::ps_common_auth::Auth>,
  pub name: ::std::string::String,
}
impl ::std::default::Default for DownloadWasmFileRequest {
  fn default() -> Self {
    DownloadWasmFileRequest {
      auth: ::std::default::Default::default(),
      name: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref DownloadWasmFileRequest_default: DownloadWasmFileRequest = DownloadWasmFileRequest::default();
}
impl ::pb_jelly::Message for DownloadWasmFileRequest {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "DownloadWasmFileRequest",
      full_name: "protos.DownloadWasmFileRequest",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "auth",
          full_name: "protos.DownloadWasmFileRequest.auth",
          index: 0,
          number: 9999,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "name",
          full_name: "protos.DownloadWasmFileRequest.name",
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
    let mut name_size = 0;
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
      let l = ::pb_jelly::Message::compute_size(val);
      name_size += ::pb_jelly::wire_format::serialized_length(1);
      name_size += ::pb_jelly::varint::serialized_length(l as u64);
      name_size += l;
    }
    size += name_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.auth {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "DownloadWasmFileRequest", 9999)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_auth::Auth = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.auth = Some(val);
        }
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "DownloadWasmFileRequest", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.name = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for DownloadWasmFileRequest {
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
      "name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.name)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct DownloadWasmFileResponse {
  pub status: ::std::option::Option<::proto_common::ps_common_status::Status>,
  pub data: ::std::vec::Vec<u8>,
}
impl ::std::default::Default for DownloadWasmFileResponse {
  fn default() -> Self {
    DownloadWasmFileResponse {
      status: ::std::default::Default::default(),
      data: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref DownloadWasmFileResponse_default: DownloadWasmFileResponse = DownloadWasmFileResponse::default();
}
impl ::pb_jelly::Message for DownloadWasmFileResponse {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "DownloadWasmFileResponse",
      full_name: "protos.DownloadWasmFileResponse",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "status",
          full_name: "protos.DownloadWasmFileResponse.status",
          index: 0,
          number: 1000,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "data",
          full_name: "protos.DownloadWasmFileResponse.data",
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
    let mut data_size = 0;
    if self.data != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.data;
      let l = ::pb_jelly::Message::compute_size(val);
      data_size += ::pb_jelly::wire_format::serialized_length(1);
      data_size += ::pb_jelly::varint::serialized_length(l as u64);
      data_size += l;
    }
    size += data_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.status {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.data != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.data;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "DownloadWasmFileResponse", 1000)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_status::Status = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.status = Some(val);
        }
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "DownloadWasmFileResponse", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::vec::Vec<u8> = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.data = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for DownloadWasmFileResponse {
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
      "data" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.data)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct ListWasmFilesRequest {
  /// Every gRPC request must have a valid auth config
  pub auth: ::std::option::Option<::proto_common::ps_common_auth::Auth>,
}
impl ::std::default::Default for ListWasmFilesRequest {
  fn default() -> Self {
    ListWasmFilesRequest {
      auth: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ListWasmFilesRequest_default: ListWasmFilesRequest = ListWasmFilesRequest::default();
}
impl ::pb_jelly::Message for ListWasmFilesRequest {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ListWasmFilesRequest",
      full_name: "protos.ListWasmFilesRequest",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "auth",
          full_name: "protos.ListWasmFilesRequest.auth",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ListWasmFilesRequest", 9999)?;
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
impl ::pb_jelly::Reflection for ListWasmFilesRequest {
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
pub struct ListWasmFilesResponse {
  pub status: ::std::option::Option<::proto_common::ps_common_status::Status>,
  pub names: ::std::vec::Vec<::std::string::String>,
}
impl ::std::default::Default for ListWasmFilesResponse {
  fn default() -> Self {
    ListWasmFilesResponse {
      status: ::std::default::Default::default(),
      names: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ListWasmFilesResponse_default: ListWasmFilesResponse = ListWasmFilesResponse::default();
}
impl ::pb_jelly::Message for ListWasmFilesResponse {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ListWasmFilesResponse",
      full_name: "protos.ListWasmFilesResponse",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "status",
          full_name: "protos.ListWasmFilesResponse.status",
          index: 0,
          number: 1000,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "names",
          full_name: "protos.ListWasmFilesResponse.names",
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
    let mut names_size = 0;
    for val in &self.names {
      let l = ::pb_jelly::Message::compute_size(val);
      names_size += ::pb_jelly::wire_format::serialized_length(1);
      names_size += ::pb_jelly::varint::serialized_length(l as u64);
      names_size += l;
    }
    size += names_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.status {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.names {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.names {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ListWasmFilesResponse", 1000)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_status::Status = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.status = Some(val);
        }
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ListWasmFilesResponse", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.names.push(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for ListWasmFilesResponse {
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
      "names" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct DeleteWasmFileRequest {
  /// Every gRPC request must have a valid auth config
  pub auth: ::std::option::Option<::proto_common::ps_common_auth::Auth>,
  pub name: ::std::string::String,
}
impl ::std::default::Default for DeleteWasmFileRequest {
  fn default() -> Self {
    DeleteWasmFileRequest {
      auth: ::std::default::Default::default(),
      name: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref DeleteWasmFileRequest_default: DeleteWasmFileRequest = DeleteWasmFileRequest::default();
}
impl ::pb_jelly::Message for DeleteWasmFileRequest {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "DeleteWasmFileRequest",
      full_name: "protos.DeleteWasmFileRequest",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "auth",
          full_name: "protos.DeleteWasmFileRequest.auth",
          index: 0,
          number: 9999,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "name",
          full_name: "protos.DeleteWasmFileRequest.name",
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
    let mut name_size = 0;
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
      let l = ::pb_jelly::Message::compute_size(val);
      name_size += ::pb_jelly::wire_format::serialized_length(1);
      name_size += ::pb_jelly::varint::serialized_length(l as u64);
      name_size += l;
    }
    size += name_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.auth {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.name;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "DeleteWasmFileRequest", 9999)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::proto_common::ps_common_auth::Auth = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.auth = Some(val);
        }
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "DeleteWasmFileRequest", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.name = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for DeleteWasmFileRequest {
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
      "name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.name)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct DeleteWasmFileResponse {
  pub status: ::std::option::Option<::proto_common::ps_common_status::Status>,
}
impl ::std::default::Default for DeleteWasmFileResponse {
  fn default() -> Self {
    DeleteWasmFileResponse {
      status: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref DeleteWasmFileResponse_default: DeleteWasmFileResponse = DeleteWasmFileResponse::default();
}
impl ::pb_jelly::Message for DeleteWasmFileResponse {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "DeleteWasmFileResponse",
      full_name: "protos.DeleteWasmFileResponse",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "status",
          full_name: "protos.DeleteWasmFileResponse.status",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "DeleteWasmFileResponse", 1000)?;
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
impl ::pb_jelly::Reflection for DeleteWasmFileResponse {
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

