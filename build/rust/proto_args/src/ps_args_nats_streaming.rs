// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct NatsStreamingTLSOptions {
  /// @gotags: kong:"help='CA file (only needed if addr is tls://*)',env='PLUMBER_RELAY_NATS_STREAMING_TLS_CA_CERT'"
  pub tls_ca_cert: ::std::string::String,
  /// @gotags: kong:"help='Client cert file (only needed if addr is tls://*)',env='PLUMBER_RELAY_NATS_STREAMING_TLS_CLIENT_CERT'"
  pub tls_client_cert: ::std::string::String,
  /// @gotags: kong:"help='Client key file (only needed if addr is tls://*)',env='PLUMBER_RELAY_NATS_STREAMING_TLS_CLIENT_KEY'"
  pub tls_client_key: ::std::string::String,
  /// @gotags: kong:"help='Whether to verify server certificate',env='PLUMBER_RELAY_NATS_STREAMING_SKIP_VERIFY_TLS'"
  pub tls_skip_verify: bool,
  /// @gotags: kong:"help='Enable TLS',env='PLUMBER_RELAY_NATS_STREAMING_USE_TLS'"
  pub use_tls: bool,
}
impl ::std::default::Default for NatsStreamingTLSOptions {
  fn default() -> Self {
    NatsStreamingTLSOptions {
      tls_ca_cert: ::std::default::Default::default(),
      tls_client_cert: ::std::default::Default::default(),
      tls_client_key: ::std::default::Default::default(),
      tls_skip_verify: ::std::default::Default::default(),
      use_tls: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref NatsStreamingTLSOptions_default: NatsStreamingTLSOptions = NatsStreamingTLSOptions::default();
}
impl ::pb_jelly::Message for NatsStreamingTLSOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "NatsStreamingTLSOptions",
      full_name: "protos.args.NatsStreamingTLSOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "tls_ca_cert",
          full_name: "protos.args.NatsStreamingTLSOptions.tls_ca_cert",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_client_cert",
          full_name: "protos.args.NatsStreamingTLSOptions.tls_client_cert",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_client_key",
          full_name: "protos.args.NatsStreamingTLSOptions.tls_client_key",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_skip_verify",
          full_name: "protos.args.NatsStreamingTLSOptions.tls_skip_verify",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "use_tls",
          full_name: "protos.args.NatsStreamingTLSOptions.use_tls",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsStreamingTLSOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_ca_cert = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsStreamingTLSOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_client_cert = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsStreamingTLSOptions", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_client_key = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "NatsStreamingTLSOptions", 4)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.tls_skip_verify = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "NatsStreamingTLSOptions", 5)?;
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
impl ::pb_jelly::Reflection for NatsStreamingTLSOptions {
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
pub struct NatsStreamingConn {
  /// @gotags: kong:"help='Dial string for NATS server. Ex: nats://localhost:4222',default='nats://localhost:4222',env='PLUMBER_RELAY_NATS_STREAMING_DSN'"
  pub dsn: ::std::string::String,
  /// @gotags: kong:"help='NATS .creds file containing authentication credentials',env='PLUMBER_RELAY_NATS_STREAMING_CREDENTIALS'"
  pub user_credentials: ::std::string::String,
  /// @gotags: kong:"help='Cluster ID of the Nats server',required,env='PLUMBER_RELAY_NATS_STREAMING_CLUSTER_ID'"
  pub cluster_id: ::std::string::String,
  /// @gotags: kong:"help='User specified client ID to connect with',default='plumber',env='PLUMBER_RELAY_NATS_STREAMING_CLIENT_ID'"
  pub client_id: ::std::string::String,
  /// @gotags: kong:"embed"
  pub tls_options: ::std::option::Option<NatsStreamingTLSOptions>,
}
impl ::std::default::Default for NatsStreamingConn {
  fn default() -> Self {
    NatsStreamingConn {
      dsn: ::std::default::Default::default(),
      user_credentials: ::std::default::Default::default(),
      cluster_id: ::std::default::Default::default(),
      client_id: ::std::default::Default::default(),
      tls_options: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref NatsStreamingConn_default: NatsStreamingConn = NatsStreamingConn::default();
}
impl ::pb_jelly::Message for NatsStreamingConn {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "NatsStreamingConn",
      full_name: "protos.args.NatsStreamingConn",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "dsn",
          full_name: "protos.args.NatsStreamingConn.dsn",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "user_credentials",
          full_name: "protos.args.NatsStreamingConn.user_credentials",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "cluster_id",
          full_name: "protos.args.NatsStreamingConn.cluster_id",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "client_id",
          full_name: "protos.args.NatsStreamingConn.client_id",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_options",
          full_name: "protos.args.NatsStreamingConn.tls_options",
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
    let mut cluster_id_size = 0;
    if self.cluster_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.cluster_id;
      let l = ::pb_jelly::Message::compute_size(val);
      cluster_id_size += ::pb_jelly::wire_format::serialized_length(3);
      cluster_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      cluster_id_size += l;
    }
    size += cluster_id_size;
    let mut client_id_size = 0;
    if self.client_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.client_id;
      let l = ::pb_jelly::Message::compute_size(val);
      client_id_size += ::pb_jelly::wire_format::serialized_length(4);
      client_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      client_id_size += l;
    }
    size += client_id_size;
    let mut tls_options_size = 0;
    for val in &self.tls_options {
      let l = ::pb_jelly::Message::compute_size(val);
      tls_options_size += ::pb_jelly::wire_format::serialized_length(5);
      tls_options_size += ::pb_jelly::varint::serialized_length(l as u64);
      tls_options_size += l;
    }
    size += tls_options_size;
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
    if self.cluster_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.cluster_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.client_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.client_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.tls_options {
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
    if self.cluster_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.cluster_id;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.client_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.client_id;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.tls_options {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsStreamingConn", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.dsn = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsStreamingConn", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.user_credentials = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsStreamingConn", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.cluster_id = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsStreamingConn", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.client_id = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsStreamingConn", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: NatsStreamingTLSOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_options = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for NatsStreamingConn {
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
      "cluster_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.cluster_id)
      }
      "client_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.client_id)
      }
      "tls_options" => {
        ::pb_jelly::reflection::FieldMut::Value(self.tls_options.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct NatsStreamingReadArgs {
  /// @gotags: kong:"help='NATS stream channel. Ex: orders',env='PLUMBER_RELAY_NATS_STREAMING_CHANNEL'"
  pub channel: ::std::string::String,
  /// @gotags: kong:"help='Create a durable subscription with this name for the given channel',env='PLUMBER_RELAY_NATS_STREAMING_DURABLE_SUBSCRIPTION_NAME'"
  pub durable_name: ::std::string::String,
  /// @gotags: kong:"help='Deliver starting with last published message',xor=nats_delivery_option,env='PLUMBER_RELAY_NATS_STREAMING_READ_LAST'"
  pub read_last_available: bool,
  /// @gotags: kong:"help='Deliver messages starting at sequence number',xor=nats_delivery_option,env='PLUMBER_RELAY_NATS_STREAMING_READ_SEQUENCE'"
  pub read_sequence_number: u32,
  /// @gotags: kong:"help='Deliver messages in last interval (e.g. 1s, 1h)',xor=nats_delivery_option,env='PLUMBER_RELAY_NATS_STREAMING_READ_SINCE'"
  pub read_since: ::std::string::String,
  /// @gotags: kong:"help='Deliver all available messages',xor=nats_delivery_option,env='PLUMBER_RELAY_NATS_STREAMING_READ_ALL'"
  pub read_all: bool,
}
impl ::std::default::Default for NatsStreamingReadArgs {
  fn default() -> Self {
    NatsStreamingReadArgs {
      channel: ::std::default::Default::default(),
      durable_name: ::std::default::Default::default(),
      read_last_available: ::std::default::Default::default(),
      read_sequence_number: ::std::default::Default::default(),
      read_since: ::std::default::Default::default(),
      read_all: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref NatsStreamingReadArgs_default: NatsStreamingReadArgs = NatsStreamingReadArgs::default();
}
impl ::pb_jelly::Message for NatsStreamingReadArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "NatsStreamingReadArgs",
      full_name: "protos.args.NatsStreamingReadArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "channel",
          full_name: "protos.args.NatsStreamingReadArgs.channel",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "durable_name",
          full_name: "protos.args.NatsStreamingReadArgs.durable_name",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "read_last_available",
          full_name: "protos.args.NatsStreamingReadArgs.read_last_available",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "read_sequence_number",
          full_name: "protos.args.NatsStreamingReadArgs.read_sequence_number",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "read_since",
          full_name: "protos.args.NatsStreamingReadArgs.read_since",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "read_all",
          full_name: "protos.args.NatsStreamingReadArgs.read_all",
          index: 5,
          number: 6,
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
    let mut channel_size = 0;
    if self.channel != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.channel;
      let l = ::pb_jelly::Message::compute_size(val);
      channel_size += ::pb_jelly::wire_format::serialized_length(1);
      channel_size += ::pb_jelly::varint::serialized_length(l as u64);
      channel_size += l;
    }
    size += channel_size;
    let mut durable_name_size = 0;
    if self.durable_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.durable_name;
      let l = ::pb_jelly::Message::compute_size(val);
      durable_name_size += ::pb_jelly::wire_format::serialized_length(2);
      durable_name_size += ::pb_jelly::varint::serialized_length(l as u64);
      durable_name_size += l;
    }
    size += durable_name_size;
    let mut read_last_available_size = 0;
    if self.read_last_available != <bool as ::std::default::Default>::default() {
      let val = &self.read_last_available;
      let l = ::pb_jelly::Message::compute_size(val);
      read_last_available_size += ::pb_jelly::wire_format::serialized_length(3);
      read_last_available_size += l;
    }
    size += read_last_available_size;
    let mut read_sequence_number_size = 0;
    if self.read_sequence_number != <u32 as ::std::default::Default>::default() {
      let val = &self.read_sequence_number;
      let l = ::pb_jelly::Message::compute_size(val);
      read_sequence_number_size += ::pb_jelly::wire_format::serialized_length(4);
      read_sequence_number_size += l;
    }
    size += read_sequence_number_size;
    let mut read_since_size = 0;
    if self.read_since != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.read_since;
      let l = ::pb_jelly::Message::compute_size(val);
      read_since_size += ::pb_jelly::wire_format::serialized_length(5);
      read_since_size += ::pb_jelly::varint::serialized_length(l as u64);
      read_since_size += l;
    }
    size += read_since_size;
    let mut read_all_size = 0;
    if self.read_all != <bool as ::std::default::Default>::default() {
      let val = &self.read_all;
      let l = ::pb_jelly::Message::compute_size(val);
      read_all_size += ::pb_jelly::wire_format::serialized_length(6);
      read_all_size += l;
    }
    size += read_all_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.channel != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.channel;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.durable_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.durable_name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.read_last_available != <bool as ::std::default::Default>::default() {
      let val = &self.read_last_available;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.read_sequence_number != <u32 as ::std::default::Default>::default() {
      let val = &self.read_sequence_number;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.read_since != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.read_since;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.read_all != <bool as ::std::default::Default>::default() {
      let val = &self.read_all;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.channel != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.channel;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.durable_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.durable_name;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.read_last_available != <bool as ::std::default::Default>::default() {
      let val = &self.read_last_available;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.read_sequence_number != <u32 as ::std::default::Default>::default() {
      let val = &self.read_sequence_number;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.read_since != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.read_since;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.read_all != <bool as ::std::default::Default>::default() {
      let val = &self.read_all;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsStreamingReadArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.channel = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsStreamingReadArgs", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.durable_name = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "NatsStreamingReadArgs", 3)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.read_last_available = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "NatsStreamingReadArgs", 4)?;
          let mut val: u32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.read_sequence_number = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsStreamingReadArgs", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.read_since = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "NatsStreamingReadArgs", 6)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.read_all = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for NatsStreamingReadArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "channel" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.channel)
      }
      "durable_name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.durable_name)
      }
      "read_last_available" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.read_last_available)
      }
      "read_sequence_number" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.read_sequence_number)
      }
      "read_since" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.read_since)
      }
      "read_all" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.read_all)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct NatsStreamingWriteArgs {
  /// @gotags: kong:"help='NATS stream channel. Ex: orders'"
  pub channel: ::std::string::String,
}
impl ::std::default::Default for NatsStreamingWriteArgs {
  fn default() -> Self {
    NatsStreamingWriteArgs {
      channel: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref NatsStreamingWriteArgs_default: NatsStreamingWriteArgs = NatsStreamingWriteArgs::default();
}
impl ::pb_jelly::Message for NatsStreamingWriteArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "NatsStreamingWriteArgs",
      full_name: "protos.args.NatsStreamingWriteArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "channel",
          full_name: "protos.args.NatsStreamingWriteArgs.channel",
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
    let mut channel_size = 0;
    if self.channel != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.channel;
      let l = ::pb_jelly::Message::compute_size(val);
      channel_size += ::pb_jelly::wire_format::serialized_length(1);
      channel_size += ::pb_jelly::varint::serialized_length(l as u64);
      channel_size += l;
    }
    size += channel_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.channel != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.channel;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.channel != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.channel;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsStreamingWriteArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.channel = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for NatsStreamingWriteArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "channel" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.channel)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

