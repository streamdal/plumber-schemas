// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RabbitStreamsConn {
  /// @gotags: kong:"help='DSN used to connect to RabbitMQ',default='rabbitmq-stream://guest:guest@localhost:5552',required"
  pub dsn: ::std::string::String,
  /// @gotags: kong:"help='Enable TLS usage (regardless of DSN)'"
  pub use_tls: bool,
  /// @gotags: kong:"help='Whether to verify server certificate'"
  pub tls_skip_verify: bool,
  /// @gotags: kong:"help='Username to authenticate to server with',default=guest"
  pub username: ::std::string::String,
  /// @gotags: kong:"help='Password used to authenticate to server with',default=guest"
  pub password: ::std::string::String,
  /// @gotags: kong:"help='Consumer or producer name to identify as to RabbitMQ',default=plumber,required"
  pub client_name: ::std::string::String,
}
impl ::std::default::Default for RabbitStreamsConn {
  fn default() -> Self {
    RabbitStreamsConn {
      dsn: ::std::default::Default::default(),
      use_tls: ::std::default::Default::default(),
      tls_skip_verify: ::std::default::Default::default(),
      username: ::std::default::Default::default(),
      password: ::std::default::Default::default(),
      client_name: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RabbitStreamsConn_default: RabbitStreamsConn = RabbitStreamsConn::default();
}
impl ::pb_jelly::Message for RabbitStreamsConn {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RabbitStreamsConn",
      full_name: "protos.args.RabbitStreamsConn",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "dsn",
          full_name: "protos.args.RabbitStreamsConn.dsn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "use_tls",
          full_name: "protos.args.RabbitStreamsConn.use_tls",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_skip_verify",
          full_name: "protos.args.RabbitStreamsConn.tls_skip_verify",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "username",
          full_name: "protos.args.RabbitStreamsConn.username",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "password",
          full_name: "protos.args.RabbitStreamsConn.password",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "client_name",
          full_name: "protos.args.RabbitStreamsConn.client_name",
          index: 5,
          number: 6,
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
    let mut dsn_size = 0;
    if self.dsn != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.dsn;
      let l = ::pb_jelly::Message::compute_size(val);
      dsn_size += ::pb_jelly::wire_format::serialized_length(1);
      dsn_size += ::pb_jelly::varint::serialized_length(l as u64);
      dsn_size += l;
    }
    size += dsn_size;
    let mut use_tls_size = 0;
    if self.use_tls != <bool as ::std::default::Default>::default() {
      let val = &self.use_tls;
      let l = ::pb_jelly::Message::compute_size(val);
      use_tls_size += ::pb_jelly::wire_format::serialized_length(2);
      use_tls_size += l;
    }
    size += use_tls_size;
    let mut tls_skip_verify_size = 0;
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_skip_verify_size += ::pb_jelly::wire_format::serialized_length(3);
      tls_skip_verify_size += l;
    }
    size += tls_skip_verify_size;
    let mut username_size = 0;
    if self.username != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.username;
      let l = ::pb_jelly::Message::compute_size(val);
      username_size += ::pb_jelly::wire_format::serialized_length(4);
      username_size += ::pb_jelly::varint::serialized_length(l as u64);
      username_size += l;
    }
    size += username_size;
    let mut password_size = 0;
    if self.password != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.password;
      let l = ::pb_jelly::Message::compute_size(val);
      password_size += ::pb_jelly::wire_format::serialized_length(5);
      password_size += ::pb_jelly::varint::serialized_length(l as u64);
      password_size += l;
    }
    size += password_size;
    let mut client_name_size = 0;
    if self.client_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.client_name;
      let l = ::pb_jelly::Message::compute_size(val);
      client_name_size += ::pb_jelly::wire_format::serialized_length(6);
      client_name_size += ::pb_jelly::varint::serialized_length(l as u64);
      client_name_size += l;
    }
    size += client_name_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.dsn != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.dsn;
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
    if self.username != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.username;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.password != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.password;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.client_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.client_name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.dsn != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.dsn;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.use_tls != <bool as ::std::default::Default>::default() {
      let val = &self.use_tls;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.username != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.username;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.password != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.password;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.client_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.client_name;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitStreamsConn", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.dsn = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitStreamsConn", 2)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.use_tls = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitStreamsConn", 3)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.tls_skip_verify = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitStreamsConn", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.username = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitStreamsConn", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.password = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitStreamsConn", 6)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.client_name = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for RabbitStreamsConn {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "dsn" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.dsn)
      }
      "use_tls" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.use_tls)
      }
      "tls_skip_verify" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.tls_skip_verify)
      }
      "username" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.username)
      }
      "password" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.password)
      }
      "client_name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.client_name)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Copy, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RabbitStreamsOffsetOptions {
  /// @gotags: kong:"group=offset,xor=offset"
  pub specific_offset: i64,
  /// @gotags: kong:"group=offset,xor=offset"
  pub last_offset: bool,
  /// @gotags: kong:"group=offset,xor=offset"
  pub last_consumed: bool,
  /// @gotags: kong:"group=offset,xor=offset"
  pub first_offset: bool,
  /// @gotags: kong:"group=offset,xor=offset"
  pub next_offset: bool,
}
impl ::std::default::Default for RabbitStreamsOffsetOptions {
  fn default() -> Self {
    RabbitStreamsOffsetOptions {
      specific_offset: ::std::default::Default::default(),
      last_offset: ::std::default::Default::default(),
      last_consumed: ::std::default::Default::default(),
      first_offset: ::std::default::Default::default(),
      next_offset: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RabbitStreamsOffsetOptions_default: RabbitStreamsOffsetOptions = RabbitStreamsOffsetOptions::default();
}
impl ::pb_jelly::Message for RabbitStreamsOffsetOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RabbitStreamsOffsetOptions",
      full_name: "protos.args.RabbitStreamsOffsetOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "specific_offset",
          full_name: "protos.args.RabbitStreamsOffsetOptions.specific_offset",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "last_offset",
          full_name: "protos.args.RabbitStreamsOffsetOptions.last_offset",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "last_consumed",
          full_name: "protos.args.RabbitStreamsOffsetOptions.last_consumed",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "first_offset",
          full_name: "protos.args.RabbitStreamsOffsetOptions.first_offset",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "next_offset",
          full_name: "protos.args.RabbitStreamsOffsetOptions.next_offset",
          index: 4,
          number: 5,
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
    let mut specific_offset_size = 0;
    if self.specific_offset != <i64 as ::std::default::Default>::default() {
      let val = &self.specific_offset;
      let l = ::pb_jelly::Message::compute_size(val);
      specific_offset_size += ::pb_jelly::wire_format::serialized_length(1);
      specific_offset_size += l;
    }
    size += specific_offset_size;
    let mut last_offset_size = 0;
    if self.last_offset != <bool as ::std::default::Default>::default() {
      let val = &self.last_offset;
      let l = ::pb_jelly::Message::compute_size(val);
      last_offset_size += ::pb_jelly::wire_format::serialized_length(2);
      last_offset_size += l;
    }
    size += last_offset_size;
    let mut last_consumed_size = 0;
    if self.last_consumed != <bool as ::std::default::Default>::default() {
      let val = &self.last_consumed;
      let l = ::pb_jelly::Message::compute_size(val);
      last_consumed_size += ::pb_jelly::wire_format::serialized_length(3);
      last_consumed_size += l;
    }
    size += last_consumed_size;
    let mut first_offset_size = 0;
    if self.first_offset != <bool as ::std::default::Default>::default() {
      let val = &self.first_offset;
      let l = ::pb_jelly::Message::compute_size(val);
      first_offset_size += ::pb_jelly::wire_format::serialized_length(4);
      first_offset_size += l;
    }
    size += first_offset_size;
    let mut next_offset_size = 0;
    if self.next_offset != <bool as ::std::default::Default>::default() {
      let val = &self.next_offset;
      let l = ::pb_jelly::Message::compute_size(val);
      next_offset_size += ::pb_jelly::wire_format::serialized_length(5);
      next_offset_size += l;
    }
    size += next_offset_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.specific_offset != <i64 as ::std::default::Default>::default() {
      let val = &self.specific_offset;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.last_offset != <bool as ::std::default::Default>::default() {
      let val = &self.last_offset;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.last_consumed != <bool as ::std::default::Default>::default() {
      let val = &self.last_consumed;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.first_offset != <bool as ::std::default::Default>::default() {
      let val = &self.first_offset;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.next_offset != <bool as ::std::default::Default>::default() {
      let val = &self.next_offset;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.specific_offset != <i64 as ::std::default::Default>::default() {
      let val = &self.specific_offset;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.last_offset != <bool as ::std::default::Default>::default() {
      let val = &self.last_offset;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.last_consumed != <bool as ::std::default::Default>::default() {
      let val = &self.last_consumed;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.first_offset != <bool as ::std::default::Default>::default() {
      let val = &self.first_offset;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.next_offset != <bool as ::std::default::Default>::default() {
      let val = &self.next_offset;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitStreamsOffsetOptions", 1)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.specific_offset = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitStreamsOffsetOptions", 2)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.last_offset = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitStreamsOffsetOptions", 3)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.last_consumed = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitStreamsOffsetOptions", 4)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.first_offset = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitStreamsOffsetOptions", 5)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.next_offset = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for RabbitStreamsOffsetOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "specific_offset" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.specific_offset)
      }
      "last_offset" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.last_offset)
      }
      "last_consumed" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.last_consumed)
      }
      "first_offset" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.first_offset)
      }
      "next_offset" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.next_offset)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RabbitStreamsReadArgs {
  /// @gotags: kong:"help='Stream name',required"
  pub stream: ::std::string::String,
  /// @gotags: kong:"help='Declare the stream if it does not exist'"
  pub declare_stream: bool,
  /// @gotags: kong:"help='Stream capacity to declare (required if declare_stream is true; ex: 1024k; 10mb; 3gb)'"
  pub declare_stream_size: ::std::string::String,
  /// TODO: Will this break? Might just need to be a string.
  /// @gotags: kong:"help='Offset to start reading at',embed"
  pub offset_options: ::std::option::Option<RabbitStreamsOffsetOptions>,
}
impl ::std::default::Default for RabbitStreamsReadArgs {
  fn default() -> Self {
    RabbitStreamsReadArgs {
      stream: ::std::default::Default::default(),
      declare_stream: ::std::default::Default::default(),
      declare_stream_size: ::std::default::Default::default(),
      offset_options: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RabbitStreamsReadArgs_default: RabbitStreamsReadArgs = RabbitStreamsReadArgs::default();
}
impl ::pb_jelly::Message for RabbitStreamsReadArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RabbitStreamsReadArgs",
      full_name: "protos.args.RabbitStreamsReadArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "stream",
          full_name: "protos.args.RabbitStreamsReadArgs.stream",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "declare_stream",
          full_name: "protos.args.RabbitStreamsReadArgs.declare_stream",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "declare_stream_size",
          full_name: "protos.args.RabbitStreamsReadArgs.declare_stream_size",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "offset_options",
          full_name: "protos.args.RabbitStreamsReadArgs.offset_options",
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
    let mut stream_size = 0;
    if self.stream != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.stream;
      let l = ::pb_jelly::Message::compute_size(val);
      stream_size += ::pb_jelly::wire_format::serialized_length(1);
      stream_size += ::pb_jelly::varint::serialized_length(l as u64);
      stream_size += l;
    }
    size += stream_size;
    let mut declare_stream_size = 0;
    if self.declare_stream != <bool as ::std::default::Default>::default() {
      let val = &self.declare_stream;
      let l = ::pb_jelly::Message::compute_size(val);
      declare_stream_size += ::pb_jelly::wire_format::serialized_length(2);
      declare_stream_size += l;
    }
    size += declare_stream_size;
    let mut declare_stream_size_size = 0;
    if self.declare_stream_size != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.declare_stream_size;
      let l = ::pb_jelly::Message::compute_size(val);
      declare_stream_size_size += ::pb_jelly::wire_format::serialized_length(3);
      declare_stream_size_size += ::pb_jelly::varint::serialized_length(l as u64);
      declare_stream_size_size += l;
    }
    size += declare_stream_size_size;
    let mut offset_options_size = 0;
    for val in &self.offset_options {
      let l = ::pb_jelly::Message::compute_size(val);
      offset_options_size += ::pb_jelly::wire_format::serialized_length(4);
      offset_options_size += ::pb_jelly::varint::serialized_length(l as u64);
      offset_options_size += l;
    }
    size += offset_options_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.stream != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.stream;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.declare_stream != <bool as ::std::default::Default>::default() {
      let val = &self.declare_stream;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.declare_stream_size != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.declare_stream_size;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.offset_options {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.stream != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.stream;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.declare_stream != <bool as ::std::default::Default>::default() {
      let val = &self.declare_stream;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.declare_stream_size != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.declare_stream_size;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.offset_options {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitStreamsReadArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.stream = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitStreamsReadArgs", 2)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.declare_stream = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitStreamsReadArgs", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.declare_stream_size = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitStreamsReadArgs", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RabbitStreamsOffsetOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.offset_options = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for RabbitStreamsReadArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "stream" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.stream)
      }
      "declare_stream" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.declare_stream)
      }
      "declare_stream_size" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.declare_stream_size)
      }
      "offset_options" => {
        ::pb_jelly::reflection::FieldMut::Value(self.offset_options.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RabbitStreamsWriteArgs {
  /// @gotags: kong:"help='Stream name',required"
  pub stream: ::std::string::String,
  /// @gotags: kong:"help='Declare the stream if it does not exist'"
  pub declare_stream: bool,
  /// @gotags: kong:"help='Stream capacity to declare (required if declare_stream is true; ex: 1024k, 10mb, 3gb',default=10mb"
  pub declare_stream_size: ::std::string::String,
}
impl ::std::default::Default for RabbitStreamsWriteArgs {
  fn default() -> Self {
    RabbitStreamsWriteArgs {
      stream: ::std::default::Default::default(),
      declare_stream: ::std::default::Default::default(),
      declare_stream_size: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RabbitStreamsWriteArgs_default: RabbitStreamsWriteArgs = RabbitStreamsWriteArgs::default();
}
impl ::pb_jelly::Message for RabbitStreamsWriteArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RabbitStreamsWriteArgs",
      full_name: "protos.args.RabbitStreamsWriteArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "stream",
          full_name: "protos.args.RabbitStreamsWriteArgs.stream",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "declare_stream",
          full_name: "protos.args.RabbitStreamsWriteArgs.declare_stream",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "declare_stream_size",
          full_name: "protos.args.RabbitStreamsWriteArgs.declare_stream_size",
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
    let mut stream_size = 0;
    if self.stream != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.stream;
      let l = ::pb_jelly::Message::compute_size(val);
      stream_size += ::pb_jelly::wire_format::serialized_length(1);
      stream_size += ::pb_jelly::varint::serialized_length(l as u64);
      stream_size += l;
    }
    size += stream_size;
    let mut declare_stream_size = 0;
    if self.declare_stream != <bool as ::std::default::Default>::default() {
      let val = &self.declare_stream;
      let l = ::pb_jelly::Message::compute_size(val);
      declare_stream_size += ::pb_jelly::wire_format::serialized_length(2);
      declare_stream_size += l;
    }
    size += declare_stream_size;
    let mut declare_stream_size_size = 0;
    if self.declare_stream_size != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.declare_stream_size;
      let l = ::pb_jelly::Message::compute_size(val);
      declare_stream_size_size += ::pb_jelly::wire_format::serialized_length(3);
      declare_stream_size_size += ::pb_jelly::varint::serialized_length(l as u64);
      declare_stream_size_size += l;
    }
    size += declare_stream_size_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.stream != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.stream;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.declare_stream != <bool as ::std::default::Default>::default() {
      let val = &self.declare_stream;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.declare_stream_size != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.declare_stream_size;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.stream != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.stream;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.declare_stream != <bool as ::std::default::Default>::default() {
      let val = &self.declare_stream;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.declare_stream_size != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.declare_stream_size;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitStreamsWriteArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.stream = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitStreamsWriteArgs", 2)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.declare_stream = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitStreamsWriteArgs", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.declare_stream_size = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for RabbitStreamsWriteArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "stream" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.stream)
      }
      "declare_stream" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.declare_stream)
      }
      "declare_stream_size" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.declare_stream_size)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

