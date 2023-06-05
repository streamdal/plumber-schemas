// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct NatsJetstreamTLSOptions {
  /// @gotags: kong:"help='CA file (only needed if addr is tls://*)',env='PLUMBER_RELAY_NATS_JETSTREAM_TLS_CA_CERT'"
  pub tls_ca_cert: ::std::string::String,
  /// @gotags: kong:"help='Client cert file (only needed if addr is tls://*)',env='PLUMBER_RELAY_NATS_JETSTREAM_TLS_CLIENT_CERT'"
  pub tls_client_cert: ::std::string::String,
  /// @gotags: kong:"help='Client key file (only needed if addr is tls://*)',env='PLUMBER_RELAY_NATS_JETSTREAM_TLS_CLIENT_KEY'"
  pub tls_client_key: ::std::string::String,
  /// @gotags: kong:"help='Whether to verify server certificate',env='PLUMBER_RELAY_NATS_JETSTREAM_SKIP_VERIFY_TLS'"
  pub tls_skip_verify: bool,
  /// @gotags: kong:"help='Enable TLS',env='PLUMBER_RELAY_NATS_JETSTREAM_USE_TLS'"
  pub use_tls: bool,
}
impl ::std::default::Default for NatsJetstreamTLSOptions {
  fn default() -> Self {
    NatsJetstreamTLSOptions {
      tls_ca_cert: ::std::default::Default::default(),
      tls_client_cert: ::std::default::Default::default(),
      tls_client_key: ::std::default::Default::default(),
      tls_skip_verify: ::std::default::Default::default(),
      use_tls: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref NatsJetstreamTLSOptions_default: NatsJetstreamTLSOptions = NatsJetstreamTLSOptions::default();
}
impl ::pb_jelly::Message for NatsJetstreamTLSOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "NatsJetstreamTLSOptions",
      full_name: "protos.args.NatsJetstreamTLSOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "tls_ca_cert",
          full_name: "protos.args.NatsJetstreamTLSOptions.tls_ca_cert",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_client_cert",
          full_name: "protos.args.NatsJetstreamTLSOptions.tls_client_cert",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_client_key",
          full_name: "protos.args.NatsJetstreamTLSOptions.tls_client_key",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_skip_verify",
          full_name: "protos.args.NatsJetstreamTLSOptions.tls_skip_verify",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "use_tls",
          full_name: "protos.args.NatsJetstreamTLSOptions.use_tls",
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
    let mut tls_ca_cert_size = 0;
    if self.tls_ca_cert != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_ca_cert;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_ca_cert_size += ::pb_jelly::wire_format::serialized_length(1);
      tls_ca_cert_size += ::pb_jelly::varint::serialized_length(l as u64);
      tls_ca_cert_size += l;
    }
    size += tls_ca_cert_size;
    let mut tls_client_cert_size = 0;
    if self.tls_client_cert != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_cert;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_client_cert_size += ::pb_jelly::wire_format::serialized_length(2);
      tls_client_cert_size += ::pb_jelly::varint::serialized_length(l as u64);
      tls_client_cert_size += l;
    }
    size += tls_client_cert_size;
    let mut tls_client_key_size = 0;
    if self.tls_client_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_key;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_client_key_size += ::pb_jelly::wire_format::serialized_length(3);
      tls_client_key_size += ::pb_jelly::varint::serialized_length(l as u64);
      tls_client_key_size += l;
    }
    size += tls_client_key_size;
    let mut tls_skip_verify_size = 0;
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_skip_verify_size += ::pb_jelly::wire_format::serialized_length(4);
      tls_skip_verify_size += l;
    }
    size += tls_skip_verify_size;
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
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.use_tls != <bool as ::std::default::Default>::default() {
      let val = &self.use_tls;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.tls_ca_cert != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_ca_cert;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.tls_client_cert != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_cert;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.tls_client_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_key;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::Varint, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsJetstreamTLSOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_ca_cert = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsJetstreamTLSOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_client_cert = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsJetstreamTLSOptions", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_client_key = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "NatsJetstreamTLSOptions", 4)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.tls_skip_verify = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "NatsJetstreamTLSOptions", 5)?;
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
impl ::pb_jelly::Reflection for NatsJetstreamTLSOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "tls_ca_cert" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.tls_ca_cert)
      }
      "tls_client_cert" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.tls_client_cert)
      }
      "tls_client_key" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.tls_client_key)
      }
      "tls_skip_verify" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.tls_skip_verify)
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
pub struct NatsJetstreamConn {
  /// @gotags: kong:"help='Dial string for NATS server. Ex: nats://localhost:4222',default='nats://localhost:4222',env='PLUMBER_RELAY_NATS_JETSTREAM_DSN'"
  pub dsn: ::std::string::String,
  /// @gotags: kong:"help='NATS .creds file containing authentication credentials',env='PLUMBER_RELAY_NATS_JETSTREAM_CREDENTIALS'"
  pub user_credentials: ::std::string::String,
  /// @gotags: kong:"help='User specified client ID to connect with',default=plumber,env='PLUMBER_RELAY_NATS_JETSTREAM_CLIENT_ID'"
  pub client_id: ::std::string::String,
  /// @gotags: kong:"embed"
  pub tls_options: ::std::option::Option<NatsJetstreamTLSOptions>,
  /// @gotags: kong:"help='File containing NATS NKey',env='PLUMBER_RELAY_NATS_JETSTREAM_NKEY'"
  pub nkey: ::std::string::String,
}
impl ::std::default::Default for NatsJetstreamConn {
  fn default() -> Self {
    NatsJetstreamConn {
      dsn: ::std::default::Default::default(),
      user_credentials: ::std::default::Default::default(),
      client_id: ::std::default::Default::default(),
      tls_options: ::std::default::Default::default(),
      nkey: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref NatsJetstreamConn_default: NatsJetstreamConn = NatsJetstreamConn::default();
}
impl ::pb_jelly::Message for NatsJetstreamConn {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "NatsJetstreamConn",
      full_name: "protos.args.NatsJetstreamConn",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "dsn",
          full_name: "protos.args.NatsJetstreamConn.dsn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "user_credentials",
          full_name: "protos.args.NatsJetstreamConn.user_credentials",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "client_id",
          full_name: "protos.args.NatsJetstreamConn.client_id",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_options",
          full_name: "protos.args.NatsJetstreamConn.tls_options",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "nkey",
          full_name: "protos.args.NatsJetstreamConn.nkey",
          index: 4,
          number: 5,
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
    let mut client_id_size = 0;
    if self.client_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.client_id;
      let l = ::pb_jelly::Message::compute_size(val);
      client_id_size += ::pb_jelly::wire_format::serialized_length(3);
      client_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      client_id_size += l;
    }
    size += client_id_size;
    let mut tls_options_size = 0;
    for val in &self.tls_options {
      let l = ::pb_jelly::Message::compute_size(val);
      tls_options_size += ::pb_jelly::wire_format::serialized_length(4);
      tls_options_size += ::pb_jelly::varint::serialized_length(l as u64);
      tls_options_size += l;
    }
    size += tls_options_size;
    let mut nkey_size = 0;
    if self.nkey != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.nkey;
      let l = ::pb_jelly::Message::compute_size(val);
      nkey_size += ::pb_jelly::wire_format::serialized_length(5);
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
    if self.client_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.client_id;
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
    if self.client_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.client_id;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.tls_options {
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.nkey != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.nkey;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsJetstreamConn", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.dsn = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsJetstreamConn", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.user_credentials = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsJetstreamConn", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.client_id = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsJetstreamConn", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: NatsJetstreamTLSOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_options = Some(val);
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsJetstreamConn", 5)?;
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
impl ::pb_jelly::Reflection for NatsJetstreamConn {
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
      "client_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.client_id)
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
pub struct NatsJetstreamReadArgs {
  /// @gotags: kong:"help='NATS JetStream stream name. Ex: orders.>',env='PLUMBER_RELAY_NATS_JETSTREAM_STREAM'"
  pub stream: ::std::string::String,
  /// @gotags: kong:"help='Consumer name (default: random consumer name; has no effect if create_durable_consumer or existing_durable_consumer is not set)',env='PLUMBER_RELAY_NATS_JETSTREAM_CONSUMER_NAME'"
  pub consumer_name: ::std::string::String,
  /// @gotags: kong:"help='Create a new durable consumer (default: use ephemeral consumer)',env='PLUMBER_RELAY_NATS_JETSTREAM_CREATE_DURABLE_CONSUMER'"
  pub create_durable_consumer: bool,
  /// @gotags: kong:"help='Use an existing durable consumer (default: use ephemeral consumer)',env='PLUMBER_RELAY_NATS_JETSTREAM_EXISTING_DURABLE_CONSUMER'"
  pub existing_durable_consumer: bool,
  /// @gotags: kong:"help='Do not delete consumer after operation is done (default: delete on exit)',env='PLUMBER_RELAY_NATS_JETSTREAM_KEEP_CONSUMER'"
  pub keep_consumer: bool,
  /// @gotags: kong:"help='Where to start read in stream (default: from start)',env='PLUMBER_RELAY_NATS_JETSTREAM_CONSUMER_START_SEQUENCE'"
  pub consumer_start_sequence: i64,
  /// @gotags: kong:"help='At what time to start stream (RFC3339 format, Ex: 2016-06-20T12:41:45.14Z)',env='PLUMBER_RELAY_NATS_JETSTREAM_CONSUMER_START_TIME'"
  pub consumer_start_time: ::std::string::String,
  /// @gotags: kong:"help='Only receive a subset of messages from the Stream based on the subject',env='PLUMBER_RELAY_NATS_JETSTREAM_CONSUMER_FILTER_SUBJECT'"
  pub consumer_filter_subject: ::std::string::String,
}
impl ::std::default::Default for NatsJetstreamReadArgs {
  fn default() -> Self {
    NatsJetstreamReadArgs {
      stream: ::std::default::Default::default(),
      consumer_name: ::std::default::Default::default(),
      create_durable_consumer: ::std::default::Default::default(),
      existing_durable_consumer: ::std::default::Default::default(),
      keep_consumer: ::std::default::Default::default(),
      consumer_start_sequence: ::std::default::Default::default(),
      consumer_start_time: ::std::default::Default::default(),
      consumer_filter_subject: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref NatsJetstreamReadArgs_default: NatsJetstreamReadArgs = NatsJetstreamReadArgs::default();
}
impl ::pb_jelly::Message for NatsJetstreamReadArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "NatsJetstreamReadArgs",
      full_name: "protos.args.NatsJetstreamReadArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "stream",
          full_name: "protos.args.NatsJetstreamReadArgs.stream",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "consumer_name",
          full_name: "protos.args.NatsJetstreamReadArgs.consumer_name",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "create_durable_consumer",
          full_name: "protos.args.NatsJetstreamReadArgs.create_durable_consumer",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "existing_durable_consumer",
          full_name: "protos.args.NatsJetstreamReadArgs.existing_durable_consumer",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "keep_consumer",
          full_name: "protos.args.NatsJetstreamReadArgs.keep_consumer",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "consumer_start_sequence",
          full_name: "protos.args.NatsJetstreamReadArgs.consumer_start_sequence",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "consumer_start_time",
          full_name: "protos.args.NatsJetstreamReadArgs.consumer_start_time",
          index: 6,
          number: 7,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "consumer_filter_subject",
          full_name: "protos.args.NatsJetstreamReadArgs.consumer_filter_subject",
          index: 7,
          number: 8,
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
    let mut consumer_name_size = 0;
    if self.consumer_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_name;
      let l = ::pb_jelly::Message::compute_size(val);
      consumer_name_size += ::pb_jelly::wire_format::serialized_length(2);
      consumer_name_size += ::pb_jelly::varint::serialized_length(l as u64);
      consumer_name_size += l;
    }
    size += consumer_name_size;
    let mut create_durable_consumer_size = 0;
    if self.create_durable_consumer != <bool as ::std::default::Default>::default() {
      let val = &self.create_durable_consumer;
      let l = ::pb_jelly::Message::compute_size(val);
      create_durable_consumer_size += ::pb_jelly::wire_format::serialized_length(3);
      create_durable_consumer_size += l;
    }
    size += create_durable_consumer_size;
    let mut existing_durable_consumer_size = 0;
    if self.existing_durable_consumer != <bool as ::std::default::Default>::default() {
      let val = &self.existing_durable_consumer;
      let l = ::pb_jelly::Message::compute_size(val);
      existing_durable_consumer_size += ::pb_jelly::wire_format::serialized_length(4);
      existing_durable_consumer_size += l;
    }
    size += existing_durable_consumer_size;
    let mut keep_consumer_size = 0;
    if self.keep_consumer != <bool as ::std::default::Default>::default() {
      let val = &self.keep_consumer;
      let l = ::pb_jelly::Message::compute_size(val);
      keep_consumer_size += ::pb_jelly::wire_format::serialized_length(5);
      keep_consumer_size += l;
    }
    size += keep_consumer_size;
    let mut consumer_start_sequence_size = 0;
    if self.consumer_start_sequence != <i64 as ::std::default::Default>::default() {
      let val = &self.consumer_start_sequence;
      let l = ::pb_jelly::Message::compute_size(val);
      consumer_start_sequence_size += ::pb_jelly::wire_format::serialized_length(6);
      consumer_start_sequence_size += l;
    }
    size += consumer_start_sequence_size;
    let mut consumer_start_time_size = 0;
    if self.consumer_start_time != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_start_time;
      let l = ::pb_jelly::Message::compute_size(val);
      consumer_start_time_size += ::pb_jelly::wire_format::serialized_length(7);
      consumer_start_time_size += ::pb_jelly::varint::serialized_length(l as u64);
      consumer_start_time_size += l;
    }
    size += consumer_start_time_size;
    let mut consumer_filter_subject_size = 0;
    if self.consumer_filter_subject != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_filter_subject;
      let l = ::pb_jelly::Message::compute_size(val);
      consumer_filter_subject_size += ::pb_jelly::wire_format::serialized_length(8);
      consumer_filter_subject_size += ::pb_jelly::varint::serialized_length(l as u64);
      consumer_filter_subject_size += l;
    }
    size += consumer_filter_subject_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.stream != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.stream;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.consumer_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.create_durable_consumer != <bool as ::std::default::Default>::default() {
      let val = &self.create_durable_consumer;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.existing_durable_consumer != <bool as ::std::default::Default>::default() {
      let val = &self.existing_durable_consumer;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.keep_consumer != <bool as ::std::default::Default>::default() {
      let val = &self.keep_consumer;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.consumer_start_sequence != <i64 as ::std::default::Default>::default() {
      let val = &self.consumer_start_sequence;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.consumer_start_time != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_start_time;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.consumer_filter_subject != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_filter_subject;
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
    if self.consumer_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_name;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.create_durable_consumer != <bool as ::std::default::Default>::default() {
      let val = &self.create_durable_consumer;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.existing_durable_consumer != <bool as ::std::default::Default>::default() {
      let val = &self.existing_durable_consumer;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.keep_consumer != <bool as ::std::default::Default>::default() {
      let val = &self.keep_consumer;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.consumer_start_sequence != <i64 as ::std::default::Default>::default() {
      let val = &self.consumer_start_sequence;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.consumer_start_time != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_start_time;
      ::pb_jelly::wire_format::write(7, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.consumer_filter_subject != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_filter_subject;
      ::pb_jelly::wire_format::write(8, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsJetstreamReadArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.stream = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsJetstreamReadArgs", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.consumer_name = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "NatsJetstreamReadArgs", 3)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.create_durable_consumer = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "NatsJetstreamReadArgs", 4)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.existing_durable_consumer = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "NatsJetstreamReadArgs", 5)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.keep_consumer = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "NatsJetstreamReadArgs", 6)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.consumer_start_sequence = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsJetstreamReadArgs", 7)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.consumer_start_time = val;
        }
        8 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsJetstreamReadArgs", 8)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.consumer_filter_subject = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for NatsJetstreamReadArgs {
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
      "consumer_name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.consumer_name)
      }
      "create_durable_consumer" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.create_durable_consumer)
      }
      "existing_durable_consumer" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.existing_durable_consumer)
      }
      "keep_consumer" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.keep_consumer)
      }
      "consumer_start_sequence" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.consumer_start_sequence)
      }
      "consumer_start_time" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.consumer_start_time)
      }
      "consumer_filter_subject" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.consumer_filter_subject)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct NatsJetstreamWriteArgs {
  /// @gotags: kong:"help='NATS JetStream subject name to write to. Ex: orders.>'"
  pub subject: ::std::string::String,
}
impl ::std::default::Default for NatsJetstreamWriteArgs {
  fn default() -> Self {
    NatsJetstreamWriteArgs {
      subject: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref NatsJetstreamWriteArgs_default: NatsJetstreamWriteArgs = NatsJetstreamWriteArgs::default();
}
impl ::pb_jelly::Message for NatsJetstreamWriteArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "NatsJetstreamWriteArgs",
      full_name: "protos.args.NatsJetstreamWriteArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "subject",
          full_name: "protos.args.NatsJetstreamWriteArgs.subject",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsJetstreamWriteArgs", 1)?;
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
impl ::pb_jelly::Reflection for NatsJetstreamWriteArgs {
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

