// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct PostgresConn {
  /// @gotags: kong:"help='Postgres server hostname',env='PLUMBER_RELAY_CDCPOSTGRES_HOSTNAME',required"
  pub address: ::std::string::String,
  /// @gotags: kong:"help='Postgres port',env='PLUMBER_RELAY_CDCPOSTGRES_PORT',default=5432,required"
  pub port: u32,
  /// @gotags: kong:"help='Postgres username',env='PLUMBER_RELAY_CDCPOSTGRES_USERNAME',required"
  pub username: ::std::string::String,
  /// @gotags: kong:"help='Postgres server password',env='PLUMBER_RELAY_CDCPOSTGRES_PASSWORD'"
  pub password: ::std::string::String,
  /// @gotags: kong:"help='Postgres server database name',env='PLUMBER_RELAY_CDCPOSTGRES_DATABASE',required"
  pub database: ::std::string::String,
  /// @gotags: kong:"help='Enable TLS usage',env='PLUMBER_RELAY_CDCPOSTGRES_USE_TLS'"
  pub use_tls: bool,
  /// @gotags: kong:"help='Whether to verify server certificate',env='PLUMBER_RELAY_CDCPOSTGRES_SKIP_VERIFY_TLS'"
  pub tls_skip_verify: bool,
}
impl ::std::default::Default for PostgresConn {
  fn default() -> Self {
    PostgresConn {
      address: ::std::default::Default::default(),
      port: ::std::default::Default::default(),
      username: ::std::default::Default::default(),
      password: ::std::default::Default::default(),
      database: ::std::default::Default::default(),
      use_tls: ::std::default::Default::default(),
      tls_skip_verify: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref PostgresConn_default: PostgresConn = PostgresConn::default();
}
impl ::pb_jelly::Message for PostgresConn {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "PostgresConn",
      full_name: "protos.args.PostgresConn",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "address",
          full_name: "protos.args.PostgresConn.address",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "port",
          full_name: "protos.args.PostgresConn.port",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "username",
          full_name: "protos.args.PostgresConn.username",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "password",
          full_name: "protos.args.PostgresConn.password",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "database",
          full_name: "protos.args.PostgresConn.database",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "use_tls",
          full_name: "protos.args.PostgresConn.use_tls",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_skip_verify",
          full_name: "protos.args.PostgresConn.tls_skip_verify",
          index: 6,
          number: 7,
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
    let mut port_size = 0;
    if self.port != <u32 as ::std::default::Default>::default() {
      let val = &self.port;
      let l = ::pb_jelly::Message::compute_size(val);
      port_size += ::pb_jelly::wire_format::serialized_length(2);
      port_size += l;
    }
    size += port_size;
    let mut username_size = 0;
    if self.username != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.username;
      let l = ::pb_jelly::Message::compute_size(val);
      username_size += ::pb_jelly::wire_format::serialized_length(3);
      username_size += ::pb_jelly::varint::serialized_length(l as u64);
      username_size += l;
    }
    size += username_size;
    let mut password_size = 0;
    if self.password != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.password;
      let l = ::pb_jelly::Message::compute_size(val);
      password_size += ::pb_jelly::wire_format::serialized_length(4);
      password_size += ::pb_jelly::varint::serialized_length(l as u64);
      password_size += l;
    }
    size += password_size;
    let mut database_size = 0;
    if self.database != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.database;
      let l = ::pb_jelly::Message::compute_size(val);
      database_size += ::pb_jelly::wire_format::serialized_length(5);
      database_size += ::pb_jelly::varint::serialized_length(l as u64);
      database_size += l;
    }
    size += database_size;
    let mut use_tls_size = 0;
    if self.use_tls != <bool as ::std::default::Default>::default() {
      let val = &self.use_tls;
      let l = ::pb_jelly::Message::compute_size(val);
      use_tls_size += ::pb_jelly::wire_format::serialized_length(6);
      use_tls_size += l;
    }
    size += use_tls_size;
    let mut tls_skip_verify_size = 0;
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_skip_verify_size += ::pb_jelly::wire_format::serialized_length(7);
      tls_skip_verify_size += l;
    }
    size += tls_skip_verify_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.address;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.port != <u32 as ::std::default::Default>::default() {
      let val = &self.port;
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
    if self.database != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.database;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.use_tls != <bool as ::std::default::Default>::default() {
      let val = &self.use_tls;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
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
    if self.port != <u32 as ::std::default::Default>::default() {
      let val = &self.port;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.username != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.username;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.password != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.password;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.database != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.database;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.use_tls != <bool as ::std::default::Default>::default() {
      let val = &self.use_tls;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      ::pb_jelly::wire_format::write(7, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "PostgresConn", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.address = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "PostgresConn", 2)?;
          let mut val: u32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.port = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "PostgresConn", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.username = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "PostgresConn", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.password = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "PostgresConn", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.database = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "PostgresConn", 6)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.use_tls = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "PostgresConn", 7)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.tls_skip_verify = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for PostgresConn {
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
      "port" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.port)
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
      "use_tls" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.use_tls)
      }
      "tls_skip_verify" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.tls_skip_verify)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct PostgresReadArgs {
  /// @gotags: kong:"help='CDC replication slot name',env='PLUMBER_RELAY_CDCPOSTGRES_SLOT',required"
  pub replication_slot_name: ::std::string::String,
  /// @gotags: kong:"help='CDC publisher name',env='PLUMBER_RELAY_CDCPOSTGRES_PUBLISHER',required"
  pub publisher_name: ::std::string::String,
}
impl ::std::default::Default for PostgresReadArgs {
  fn default() -> Self {
    PostgresReadArgs {
      replication_slot_name: ::std::default::Default::default(),
      publisher_name: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref PostgresReadArgs_default: PostgresReadArgs = PostgresReadArgs::default();
}
impl ::pb_jelly::Message for PostgresReadArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "PostgresReadArgs",
      full_name: "protos.args.PostgresReadArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "replication_slot_name",
          full_name: "protos.args.PostgresReadArgs.replication_slot_name",
          index: 0,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "publisher_name",
          full_name: "protos.args.PostgresReadArgs.publisher_name",
          index: 1,
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
    let mut replication_slot_name_size = 0;
    if self.replication_slot_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.replication_slot_name;
      let l = ::pb_jelly::Message::compute_size(val);
      replication_slot_name_size += ::pb_jelly::wire_format::serialized_length(2);
      replication_slot_name_size += ::pb_jelly::varint::serialized_length(l as u64);
      replication_slot_name_size += l;
    }
    size += replication_slot_name_size;
    let mut publisher_name_size = 0;
    if self.publisher_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.publisher_name;
      let l = ::pb_jelly::Message::compute_size(val);
      publisher_name_size += ::pb_jelly::wire_format::serialized_length(3);
      publisher_name_size += ::pb_jelly::varint::serialized_length(l as u64);
      publisher_name_size += l;
    }
    size += publisher_name_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.replication_slot_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.replication_slot_name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.publisher_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.publisher_name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.replication_slot_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.replication_slot_name;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.publisher_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.publisher_name;
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
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "PostgresReadArgs", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.replication_slot_name = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "PostgresReadArgs", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.publisher_name = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for PostgresReadArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "replication_slot_name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.replication_slot_name)
      }
      "publisher_name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.publisher_name)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

