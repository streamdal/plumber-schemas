// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RedisPubSubConn {
  /// @gotags: kong:"help='Address of redis server',env='PLUMBER_RELAY_REDIS_PUBSUB_ADDRESS',default=localhost:6379"
  pub address: ::std::string::String,
  /// @gotags: kong:"help='Optional username to auth with (redis >= v6.0.0)',env='PLUMBER_RELAY_REDIS_PUBSUB_USERNAME'"
  pub username: ::std::string::String,
  /// @gotags: kong:"help='Optional password to auth with (redis >= v6.0.0)',env='PLUMBER_RELAY_REDIS_PUBSUB_PASSWORD'"
  pub password: ::std::string::String,
  /// @gotags: kong:"help='Database (0-16)',env='PLUMBER_RELAY_REDIS_PUBSUB_DATABASE'"
  pub database: u32,
}
impl ::std::default::Default for RedisPubSubConn {
  fn default() -> Self {
    RedisPubSubConn {
      address: ::std::default::Default::default(),
      username: ::std::default::Default::default(),
      password: ::std::default::Default::default(),
      database: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RedisPubSubConn_default: RedisPubSubConn = RedisPubSubConn::default();
}
impl ::pb_jelly::Message for RedisPubSubConn {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RedisPubSubConn",
      full_name: "protos.args.RedisPubSubConn",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "address",
          full_name: "protos.args.RedisPubSubConn.address",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "username",
          full_name: "protos.args.RedisPubSubConn.username",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "password",
          full_name: "protos.args.RedisPubSubConn.password",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "database",
          full_name: "protos.args.RedisPubSubConn.database",
          index: 3,
          number: 4,
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
    let mut address_size = 0;
    if self.address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.address;
      let l = ::pb_jelly::Message::compute_size(val);
      address_size += ::pb_jelly::wire_format::serialized_length(1);
      address_size += ::pb_jelly::varint::serialized_length(l as u64);
      address_size += l;
    }
    size += address_size;
    let mut username_size = 0;
    if self.username != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.username;
      let l = ::pb_jelly::Message::compute_size(val);
      username_size += ::pb_jelly::wire_format::serialized_length(2);
      username_size += ::pb_jelly::varint::serialized_length(l as u64);
      username_size += l;
    }
    size += username_size;
    let mut password_size = 0;
    if self.password != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.password;
      let l = ::pb_jelly::Message::compute_size(val);
      password_size += ::pb_jelly::wire_format::serialized_length(3);
      password_size += ::pb_jelly::varint::serialized_length(l as u64);
      password_size += l;
    }
    size += password_size;
    let mut database_size = 0;
    if self.database != <u32 as ::std::default::Default>::default() {
      let val = &self.database;
      let l = ::pb_jelly::Message::compute_size(val);
      database_size += ::pb_jelly::wire_format::serialized_length(4);
      database_size += l;
    }
    size += database_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.address;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.username != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.username;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.password != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.password;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.database != <u32 as ::std::default::Default>::default() {
      let val = &self.database;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.address;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.username != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.username;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.password != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.password;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.database != <u32 as ::std::default::Default>::default() {
      let val = &self.database;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RedisPubSubConn", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.address = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RedisPubSubConn", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.username = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RedisPubSubConn", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.password = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RedisPubSubConn", 4)?;
          let mut val: u32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.database = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for RedisPubSubConn {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "address" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.address)
      }
      "username" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.username)
      }
      "password" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.password)
      }
      "database" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.database)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RedisPubSubReadArgs {
  /// @gotags: kong:"help='Comma separated list of channels to read from',env='PLUMBER_RELAY_REDIS_PUBSUB_CHANNELS',required"
  pub channels: ::std::vec::Vec<::std::string::String>,
}
impl ::std::default::Default for RedisPubSubReadArgs {
  fn default() -> Self {
    RedisPubSubReadArgs {
      channels: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RedisPubSubReadArgs_default: RedisPubSubReadArgs = RedisPubSubReadArgs::default();
}
impl ::pb_jelly::Message for RedisPubSubReadArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RedisPubSubReadArgs",
      full_name: "protos.args.RedisPubSubReadArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "channels",
          full_name: "protos.args.RedisPubSubReadArgs.channels",
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
    let mut channels_size = 0;
    for val in &self.channels {
      let l = ::pb_jelly::Message::compute_size(val);
      channels_size += ::pb_jelly::wire_format::serialized_length(1);
      channels_size += ::pb_jelly::varint::serialized_length(l as u64);
      channels_size += l;
    }
    size += channels_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.channels {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.channels {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RedisPubSubReadArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.channels.push(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for RedisPubSubReadArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "channels" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RedisPubSubWriteArgs {
  /// @gotags: kong:"help='Comma separated list of channels to write to',required"
  pub channels: ::std::vec::Vec<::std::string::String>,
}
impl ::std::default::Default for RedisPubSubWriteArgs {
  fn default() -> Self {
    RedisPubSubWriteArgs {
      channels: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RedisPubSubWriteArgs_default: RedisPubSubWriteArgs = RedisPubSubWriteArgs::default();
}
impl ::pb_jelly::Message for RedisPubSubWriteArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RedisPubSubWriteArgs",
      full_name: "protos.args.RedisPubSubWriteArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "channels",
          full_name: "protos.args.RedisPubSubWriteArgs.channels",
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
    let mut channels_size = 0;
    for val in &self.channels {
      let l = ::pb_jelly::Message::compute_size(val);
      channels_size += ::pb_jelly::wire_format::serialized_length(1);
      channels_size += ::pb_jelly::varint::serialized_length(l as u64);
      channels_size += l;
    }
    size += channels_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.channels {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.channels {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RedisPubSubWriteArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.channels.push(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for RedisPubSubWriteArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "channels" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

