// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct NatsConn {
  /// @gotags: kong:"help='Dial string for NATS server. Ex: nats://localhost:4222',default='nats://localhost:4222',env='PLUMBER_RELAY_NATS_DSN'"
  pub dsn: ::std::string::String,
  /// @gotags: kong:"help='NATS .creds file containing authentication credentials',env='PLUMBER_RELAY_NATS_CREDENTIALS'"
  pub user_credentials: ::std::string::String,
  /// @gotags: kong:"embed"
  pub tls_options: ::std::option::Option<NatsTLSOptions>,
  /// @gotags: kong:"help='File containing NATS NKey',env='PLUMBER_RELAY_NATS_NKEY'"
  pub nkey: ::std::string::String,
}
impl ::std::default::Default for NatsConn {
  fn default() -> Self {
    NatsConn {
      dsn: ::std::default::Default::default(),
      user_credentials: ::std::default::Default::default(),
      tls_options: ::std::default::Default::default(),
      nkey: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref NatsConn_default: NatsConn = NatsConn::default();
}
impl ::pb_jelly::Message for NatsConn {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "NatsConn",
      full_name: "protos.args.NatsConn",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "dsn",
          full_name: "protos.args.NatsConn.dsn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "user_credentials",
          full_name: "protos.args.NatsConn.user_credentials",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_options",
          full_name: "protos.args.NatsConn.tls_options",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "nkey",
          full_name: "protos.args.NatsConn.nkey",
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
    let mut dsn_size = 0;
    if self.dsn != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.dsn;
      let l = ::pb_jelly::Message::compute_size(val);
      dsn_size += ::pb_jelly::wire_format::serialized_length(1);
      dsn_size += ::pb_jelly::varint::serialized_length(l as u64);
      dsn_size += l;
    }
    size += dsn_size;
    let mut user_credentials_size = 0;
    if self.user_credentials != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.user_credentials;
      let l = ::pb_jelly::Message::compute_size(val);
      user_credentials_size += ::pb_jelly::wire_format::serialized_length(2);
      user_credentials_size += ::pb_jelly::varint::serialized_length(l as u64);
      user_credentials_size += l;
    }
    size += user_credentials_size;
    let mut tls_options_size = 0;
    for val in &self.tls_options {
      let l = ::pb_jelly::Message::compute_size(val);
      tls_options_size += ::pb_jelly::wire_format::serialized_length(3);
      tls_options_size += ::pb_jelly::varint::serialized_length(l as u64);
      tls_options_size += l;
    }
    size += tls_options_size;
    let mut nkey_size = 0;
    if self.nkey != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.nkey;
      let l = ::pb_jelly::Message::compute_size(val);
      nkey_size += ::pb_jelly::wire_format::serialized_length(4);
      nkey_size += ::pb_jelly::varint::serialized_length(l as u64);
      nkey_size += l;
    }
    size += nkey_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.dsn != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.dsn;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.user_credentials != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.user_credentials;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.tls_options {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.nkey != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.nkey;
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
    if self.user_credentials != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.user_credentials;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.tls_options {
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.nkey != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.nkey;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsConn", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.dsn = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsConn", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.user_credentials = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsConn", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: NatsTLSOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_options = Some(val);
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsConn", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.nkey = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for NatsConn {
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
      "user_credentials" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.user_credentials)
      }
      "tls_options" => {
        ::pb_jelly::reflection::FieldMut::Value(self.tls_options.get_or_insert_with(::std::default::Default::default))
      }
      "nkey" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.nkey)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct NatsTLSOptions {
  /// @gotags: kong:"help='Whether to verify server certificate',env='PLUMBER_RELAY_NATS_SKIP_VERIFY_TLS'"
  pub tls_skip_verify: bool,
  /// @gotags: kong:"help='CA file (only needed if addr is tls://)',env='PLUMBER_RELAY_NATS_TLS_CA_CERT'"
  pub tls_ca_cert: ::std::string::String,
  /// @gotags: kong:"help='Client cert file (only needed if addr is tls://)',env='PLUMBER_RELAY_NATS_TLS_CLIENT_CERT'"
  pub tls_client_cert: ::std::string::String,
  /// @gotags: kong:"help='client key file (only needed if addr is tls://)',env='PLUMBER_RELAY_NATS_TLS_CLIENT_KEY'"
  pub tls_client_key: ::std::string::String,
  /// @gotags: kong:"help='Enable TLS',env='PLUMBER_RELAY_NATS_USE_TLS'"
  pub use_tls: bool,
}
impl ::std::default::Default for NatsTLSOptions {
  fn default() -> Self {
    NatsTLSOptions {
      tls_skip_verify: ::std::default::Default::default(),
      tls_ca_cert: ::std::default::Default::default(),
      tls_client_cert: ::std::default::Default::default(),
      tls_client_key: ::std::default::Default::default(),
      use_tls: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref NatsTLSOptions_default: NatsTLSOptions = NatsTLSOptions::default();
}
impl ::pb_jelly::Message for NatsTLSOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "NatsTLSOptions",
      full_name: "protos.args.NatsTLSOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "tls_skip_verify",
          full_name: "protos.args.NatsTLSOptions.tls_skip_verify",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_ca_cert",
          full_name: "protos.args.NatsTLSOptions.tls_ca_cert",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_client_cert",
          full_name: "protos.args.NatsTLSOptions.tls_client_cert",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_client_key",
          full_name: "protos.args.NatsTLSOptions.tls_client_key",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "use_tls",
          full_name: "protos.args.NatsTLSOptions.use_tls",
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
    let mut tls_skip_verify_size = 0;
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_skip_verify_size += ::pb_jelly::wire_format::serialized_length(1);
      tls_skip_verify_size += l;
    }
    size += tls_skip_verify_size;
    let mut tls_ca_cert_size = 0;
    if self.tls_ca_cert != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_ca_cert;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_ca_cert_size += ::pb_jelly::wire_format::serialized_length(2);
      tls_ca_cert_size += ::pb_jelly::varint::serialized_length(l as u64);
      tls_ca_cert_size += l;
    }
    size += tls_ca_cert_size;
    let mut tls_client_cert_size = 0;
    if self.tls_client_cert != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_cert;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_client_cert_size += ::pb_jelly::wire_format::serialized_length(3);
      tls_client_cert_size += ::pb_jelly::varint::serialized_length(l as u64);
      tls_client_cert_size += l;
    }
    size += tls_client_cert_size;
    let mut tls_client_key_size = 0;
    if self.tls_client_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_key;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_client_key_size += ::pb_jelly::wire_format::serialized_length(4);
      tls_client_key_size += ::pb_jelly::varint::serialized_length(l as u64);
      tls_client_key_size += l;
    }
    size += tls_client_key_size;
    let mut use_tls_size = 0;
    if self.use_tls != <bool as ::std::default::Default>::default() {
      let val = &self.use_tls;
      let l = ::pb_jelly::Message::compute_size(val);
      use_tls_size += ::pb_jelly::wire_format::serialized_length(5);
      use_tls_size += l;
    }
    size += use_tls_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.tls_ca_cert != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_ca_cert;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.tls_client_cert != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_cert;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.tls_client_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_key;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.use_tls != <bool as ::std::default::Default>::default() {
      let val = &self.use_tls;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.tls_ca_cert != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_ca_cert;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.tls_client_cert != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_cert;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.tls_client_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_key;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.use_tls != <bool as ::std::default::Default>::default() {
      let val = &self.use_tls;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "NatsTLSOptions", 1)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.tls_skip_verify = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsTLSOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_ca_cert = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsTLSOptions", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_client_cert = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsTLSOptions", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_client_key = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "NatsTLSOptions", 5)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.use_tls = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for NatsTLSOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "tls_skip_verify" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.tls_skip_verify)
      }
      "tls_ca_cert" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.tls_ca_cert)
      }
      "tls_client_cert" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.tls_client_cert)
      }
      "tls_client_key" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.tls_client_key)
      }
      "use_tls" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.use_tls)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct NatsReadArgs {
  /// @gotags: kong:"help='NATS Subject. Ex: foo.bar.*',env='PLUMBER_RELAY_NATS_SUBJECT'"
  pub subject: ::std::string::String,
}
impl ::std::default::Default for NatsReadArgs {
  fn default() -> Self {
    NatsReadArgs {
      subject: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref NatsReadArgs_default: NatsReadArgs = NatsReadArgs::default();
}
impl ::pb_jelly::Message for NatsReadArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "NatsReadArgs",
      full_name: "protos.args.NatsReadArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "subject",
          full_name: "protos.args.NatsReadArgs.subject",
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
    let mut subject_size = 0;
    if self.subject != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.subject;
      let l = ::pb_jelly::Message::compute_size(val);
      subject_size += ::pb_jelly::wire_format::serialized_length(1);
      subject_size += ::pb_jelly::varint::serialized_length(l as u64);
      subject_size += l;
    }
    size += subject_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.subject != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.subject;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.subject != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.subject;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsReadArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.subject = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for NatsReadArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "subject" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.subject)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct NatsWriteArgs {
  /// @gotags: kong:"help='NATS Subject. Ex: foo.bar.*'"
  pub subject: ::std::string::String,
}
impl ::std::default::Default for NatsWriteArgs {
  fn default() -> Self {
    NatsWriteArgs {
      subject: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref NatsWriteArgs_default: NatsWriteArgs = NatsWriteArgs::default();
}
impl ::pb_jelly::Message for NatsWriteArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "NatsWriteArgs",
      full_name: "protos.args.NatsWriteArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "subject",
          full_name: "protos.args.NatsWriteArgs.subject",
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
    let mut subject_size = 0;
    if self.subject != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.subject;
      let l = ::pb_jelly::Message::compute_size(val);
      subject_size += ::pb_jelly::wire_format::serialized_length(1);
      subject_size += ::pb_jelly::varint::serialized_length(l as u64);
      subject_size += l;
    }
    size += subject_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.subject != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.subject;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.subject != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.subject;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsWriteArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.subject = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for NatsWriteArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "subject" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.subject)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

