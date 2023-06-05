// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct Foreman {
  pub auth_token: ::std::string::String,
  pub plumber_cluster_id: ::std::string::String,
  pub team_id: ::std::string::String,
}
impl ::std::default::Default for Foreman {
  fn default() -> Self {
    Foreman {
      auth_token: ::std::default::Default::default(),
      plumber_cluster_id: ::std::default::Default::default(),
      team_id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref Foreman_default: Foreman = Foreman::default();
}
impl ::pb_jelly::Message for Foreman {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "Foreman",
      full_name: "protos.common.Foreman",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "auth_token",
          full_name: "protos.common.Foreman.auth_token",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "plumber_cluster_id",
          full_name: "protos.common.Foreman.plumber_cluster_id",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "team_id",
          full_name: "protos.common.Foreman.team_id",
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
    let mut auth_token_size = 0;
    if self.auth_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.auth_token;
      let l = ::pb_jelly::Message::compute_size(val);
      auth_token_size += ::pb_jelly::wire_format::serialized_length(1);
      auth_token_size += ::pb_jelly::varint::serialized_length(l as u64);
      auth_token_size += l;
    }
    size += auth_token_size;
    let mut plumber_cluster_id_size = 0;
    if self.plumber_cluster_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.plumber_cluster_id;
      let l = ::pb_jelly::Message::compute_size(val);
      plumber_cluster_id_size += ::pb_jelly::wire_format::serialized_length(2);
      plumber_cluster_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      plumber_cluster_id_size += l;
    }
    size += plumber_cluster_id_size;
    let mut team_id_size = 0;
    if self.team_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.team_id;
      let l = ::pb_jelly::Message::compute_size(val);
      team_id_size += ::pb_jelly::wire_format::serialized_length(3);
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
    if self.plumber_cluster_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.plumber_cluster_id;
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
    if self.plumber_cluster_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.plumber_cluster_id;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.team_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.team_id;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Foreman", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.auth_token = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Foreman", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.plumber_cluster_id = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Foreman", 3)?;
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
impl ::pb_jelly::Reflection for Foreman {
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
      "plumber_cluster_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.plumber_cluster_id)
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
pub struct SourceManager {
  pub server_token: ::std::string::String,
  pub source_id: ::std::string::String,
}
impl ::std::default::Default for SourceManager {
  fn default() -> Self {
    SourceManager {
      server_token: ::std::default::Default::default(),
      source_id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref SourceManager_default: SourceManager = SourceManager::default();
}
impl ::pb_jelly::Message for SourceManager {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "SourceManager",
      full_name: "protos.common.SourceManager",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "server_token",
          full_name: "protos.common.SourceManager.server_token",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "source_id",
          full_name: "protos.common.SourceManager.source_id",
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
    let mut server_token_size = 0;
    if self.server_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.server_token;
      let l = ::pb_jelly::Message::compute_size(val);
      server_token_size += ::pb_jelly::wire_format::serialized_length(1);
      server_token_size += ::pb_jelly::varint::serialized_length(l as u64);
      server_token_size += l;
    }
    size += server_token_size;
    let mut source_id_size = 0;
    if self.source_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.source_id;
      let l = ::pb_jelly::Message::compute_size(val);
      source_id_size += ::pb_jelly::wire_format::serialized_length(2);
      source_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      source_id_size += l;
    }
    size += source_id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.server_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.server_token;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.source_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.source_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.server_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.server_token;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.source_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.source_id;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "SourceManager", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.server_token = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "SourceManager", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.source_id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for SourceManager {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "server_token" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.server_token)
      }
      "source_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.source_id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct Auth {
  pub token: ::std::string::String,
  /// Filled out by Streamdal. Not intended to be used by plumber.
  pub _foreman: ::std::option::Option<Foreman>,
  /// Filled out by Streamdal. Not intended to be used by Plumber.
  pub _source_manager: ::std::option::Option<SourceManager>,
}
impl ::std::default::Default for Auth {
  fn default() -> Self {
    Auth {
      token: ::std::default::Default::default(),
      _foreman: ::std::default::Default::default(),
      _source_manager: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref Auth_default: Auth = Auth::default();
}
impl ::pb_jelly::Message for Auth {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "Auth",
      full_name: "protos.common.Auth",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "token",
          full_name: "protos.common.Auth.token",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_foreman",
          full_name: "protos.common.Auth._foreman",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_source_manager",
          full_name: "protos.common.Auth._source_manager",
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
    let mut token_size = 0;
    if self.token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.token;
      let l = ::pb_jelly::Message::compute_size(val);
      token_size += ::pb_jelly::wire_format::serialized_length(1);
      token_size += ::pb_jelly::varint::serialized_length(l as u64);
      token_size += l;
    }
    size += token_size;
    let mut _foreman_size = 0;
    for val in &self._foreman {
      let l = ::pb_jelly::Message::compute_size(val);
      _foreman_size += ::pb_jelly::wire_format::serialized_length(2);
      _foreman_size += ::pb_jelly::varint::serialized_length(l as u64);
      _foreman_size += l;
    }
    size += _foreman_size;
    let mut _source_manager_size = 0;
    for val in &self._source_manager {
      let l = ::pb_jelly::Message::compute_size(val);
      _source_manager_size += ::pb_jelly::wire_format::serialized_length(3);
      _source_manager_size += ::pb_jelly::varint::serialized_length(l as u64);
      _source_manager_size += l;
    }
    size += _source_manager_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.token;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self._foreman {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self._source_manager {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.token;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self._foreman {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self._source_manager {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Auth", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.token = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Auth", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: Foreman = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._foreman = Some(val);
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Auth", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: SourceManager = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._source_manager = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for Auth {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "token" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.token)
      }
      "_foreman" => {
        ::pb_jelly::reflection::FieldMut::Value(self._foreman.get_or_insert_with(::std::default::Default::default))
      }
      "_source_manager" => {
        ::pb_jelly::reflection::FieldMut::Value(self._source_manager.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

