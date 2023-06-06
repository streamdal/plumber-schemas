// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct NSQConn {
  /// @gotags: kong:"help='Address of NSQ server (Ex: localhost:4150)',env='PLUMBER_RELAY_NSQ_NSQD_ADDRESS',default='localhost:4150',xor=nsq_addressZ"
  pub nsqd_address: ::std::string::String,
  /// @gotags: kong:"help='Address of LookupD server (Ex: localhost:4161)',env='PLUMBER_RELAY_NSQ_LOOKUPD_ADDRESS',xor=nsq_address"
  pub lookupd_address: ::std::string::String,
  /// @gotags: kong:"help='Enable TLS usage',env='PLUMBER_RELAY_NSQ_USE_TLS'"
  pub use_tls: bool,
  /// @gotags: kong:"help='Whether to verify server certificate',env='PLUMBER_RELAY_NSQ_SKIP_VERIFY_TLS'"
  pub tls_skip_verify: bool,
  /// @gotags: kong:"help='CA file',env='PLUMBER_RELAY_NSQ_TLS_CA_CERT'"
  pub tls_ca_cert: ::std::string::String,
  /// @gotags: kong:"help='Client cert file',env='PLUMBER_RELAY_NSQ_TLS_CLIENT_CERT'"
  pub tls_client_cert: ::std::string::String,
  /// @gotags: kong:"help='Client key file',env='PLUMBER_RELAY_NSQ_TLS_CLIENT_KEY'"
  pub tls_client_key: ::std::string::String,
  /// @gotags: kong:"help='Authentication secret',env='PLUMBER_RELAY_NSQ_AUTH_SECRET'"
  pub auth_secret: ::std::string::String,
  /// @gotags: kong:"help='Client ID to identify as',env='PLUMBER_RELAY_NSQ_CLIENT_ID',default=plumber"
  pub client_id: ::std::string::String,
}
impl ::std::default::Default for NSQConn {
  fn default() -> Self {
    NSQConn {
      nsqd_address: ::std::default::Default::default(),
      lookupd_address: ::std::default::Default::default(),
      use_tls: ::std::default::Default::default(),
      tls_skip_verify: ::std::default::Default::default(),
      tls_ca_cert: ::std::default::Default::default(),
      tls_client_cert: ::std::default::Default::default(),
      tls_client_key: ::std::default::Default::default(),
      auth_secret: ::std::default::Default::default(),
      client_id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref NSQConn_default: NSQConn = NSQConn::default();
}
impl ::pb_jelly::Message for NSQConn {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "NSQConn",
      full_name: "protos.args.NSQConn",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "nsqd_address",
          full_name: "protos.args.NSQConn.nsqd_address",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "lookupd_address",
          full_name: "protos.args.NSQConn.lookupd_address",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "use_tls",
          full_name: "protos.args.NSQConn.use_tls",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_skip_verify",
          full_name: "protos.args.NSQConn.tls_skip_verify",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_ca_cert",
          full_name: "protos.args.NSQConn.tls_ca_cert",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_client_cert",
          full_name: "protos.args.NSQConn.tls_client_cert",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_client_key",
          full_name: "protos.args.NSQConn.tls_client_key",
          index: 6,
          number: 7,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "auth_secret",
          full_name: "protos.args.NSQConn.auth_secret",
          index: 7,
          number: 8,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "client_id",
          full_name: "protos.args.NSQConn.client_id",
          index: 8,
          number: 9,
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
    let mut nsqd_address_size = 0;
    if self.nsqd_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.nsqd_address;
      let l = ::pb_jelly::Message::compute_size(val);
      nsqd_address_size += ::pb_jelly::wire_format::serialized_length(1);
      nsqd_address_size += ::pb_jelly::varint::serialized_length(l as u64);
      nsqd_address_size += l;
    }
    size += nsqd_address_size;
    let mut lookupd_address_size = 0;
    if self.lookupd_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.lookupd_address;
      let l = ::pb_jelly::Message::compute_size(val);
      lookupd_address_size += ::pb_jelly::wire_format::serialized_length(2);
      lookupd_address_size += ::pb_jelly::varint::serialized_length(l as u64);
      lookupd_address_size += l;
    }
    size += lookupd_address_size;
    let mut use_tls_size = 0;
    if self.use_tls != <bool as ::std::default::Default>::default() {
      let val = &self.use_tls;
      let l = ::pb_jelly::Message::compute_size(val);
      use_tls_size += ::pb_jelly::wire_format::serialized_length(3);
      use_tls_size += l;
    }
    size += use_tls_size;
    let mut tls_skip_verify_size = 0;
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_skip_verify_size += ::pb_jelly::wire_format::serialized_length(4);
      tls_skip_verify_size += l;
    }
    size += tls_skip_verify_size;
    let mut tls_ca_cert_size = 0;
    if self.tls_ca_cert != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_ca_cert;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_ca_cert_size += ::pb_jelly::wire_format::serialized_length(5);
      tls_ca_cert_size += ::pb_jelly::varint::serialized_length(l as u64);
      tls_ca_cert_size += l;
    }
    size += tls_ca_cert_size;
    let mut tls_client_cert_size = 0;
    if self.tls_client_cert != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_cert;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_client_cert_size += ::pb_jelly::wire_format::serialized_length(6);
      tls_client_cert_size += ::pb_jelly::varint::serialized_length(l as u64);
      tls_client_cert_size += l;
    }
    size += tls_client_cert_size;
    let mut tls_client_key_size = 0;
    if self.tls_client_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_key;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_client_key_size += ::pb_jelly::wire_format::serialized_length(7);
      tls_client_key_size += ::pb_jelly::varint::serialized_length(l as u64);
      tls_client_key_size += l;
    }
    size += tls_client_key_size;
    let mut auth_secret_size = 0;
    if self.auth_secret != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.auth_secret;
      let l = ::pb_jelly::Message::compute_size(val);
      auth_secret_size += ::pb_jelly::wire_format::serialized_length(8);
      auth_secret_size += ::pb_jelly::varint::serialized_length(l as u64);
      auth_secret_size += l;
    }
    size += auth_secret_size;
    let mut client_id_size = 0;
    if self.client_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.client_id;
      let l = ::pb_jelly::Message::compute_size(val);
      client_id_size += ::pb_jelly::wire_format::serialized_length(9);
      client_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      client_id_size += l;
    }
    size += client_id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.nsqd_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.nsqd_address;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.lookupd_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.lookupd_address;
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
    if self.auth_secret != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.auth_secret;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.client_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.client_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.nsqd_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.nsqd_address;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.lookupd_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.lookupd_address;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.use_tls != <bool as ::std::default::Default>::default() {
      let val = &self.use_tls;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.tls_ca_cert != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_ca_cert;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.tls_client_cert != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_cert;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.tls_client_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_client_key;
      ::pb_jelly::wire_format::write(7, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.auth_secret != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.auth_secret;
      ::pb_jelly::wire_format::write(8, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.client_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.client_id;
      ::pb_jelly::wire_format::write(9, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NSQConn", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.nsqd_address = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NSQConn", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.lookupd_address = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "NSQConn", 3)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.use_tls = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "NSQConn", 4)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.tls_skip_verify = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NSQConn", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_ca_cert = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NSQConn", 6)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_client_cert = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NSQConn", 7)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_client_key = val;
        }
        8 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NSQConn", 8)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.auth_secret = val;
        }
        9 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NSQConn", 9)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.client_id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for NSQConn {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "nsqd_address" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.nsqd_address)
      }
      "lookupd_address" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.lookupd_address)
      }
      "use_tls" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.use_tls)
      }
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
      "auth_secret" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.auth_secret)
      }
      "client_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.client_id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct NSQReadArgs {
  /// @gotags: kong:"help='NSQ topic to read from',env='PLUMBER_RELAY_NSQ_TOPIC',required"
  pub topic: ::std::string::String,
  /// @gotags: kong:"help='Output channel',env='PLUMBER_RELAY_NSQ_CHANNEL',required"
  pub channel: ::std::string::String,
}
impl ::std::default::Default for NSQReadArgs {
  fn default() -> Self {
    NSQReadArgs {
      topic: ::std::default::Default::default(),
      channel: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref NSQReadArgs_default: NSQReadArgs = NSQReadArgs::default();
}
impl ::pb_jelly::Message for NSQReadArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "NSQReadArgs",
      full_name: "protos.args.NSQReadArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "topic",
          full_name: "protos.args.NSQReadArgs.topic",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "channel",
          full_name: "protos.args.NSQReadArgs.channel",
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
    let mut topic_size = 0;
    if self.topic != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic;
      let l = ::pb_jelly::Message::compute_size(val);
      topic_size += ::pb_jelly::wire_format::serialized_length(1);
      topic_size += ::pb_jelly::varint::serialized_length(l as u64);
      topic_size += l;
    }
    size += topic_size;
    let mut channel_size = 0;
    if self.channel != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.channel;
      let l = ::pb_jelly::Message::compute_size(val);
      channel_size += ::pb_jelly::wire_format::serialized_length(2);
      channel_size += ::pb_jelly::varint::serialized_length(l as u64);
      channel_size += l;
    }
    size += channel_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.topic != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.channel != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.channel;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.topic != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.channel != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.channel;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NSQReadArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.topic = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NSQReadArgs", 2)?;
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
impl ::pb_jelly::Reflection for NSQReadArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "topic" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.topic)
      }
      "channel" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.channel)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct NSQWriteArgs {
  /// @gotags: kong:"help='NSQ topic to write to',required"
  pub topic: ::std::string::String,
}
impl ::std::default::Default for NSQWriteArgs {
  fn default() -> Self {
    NSQWriteArgs {
      topic: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref NSQWriteArgs_default: NSQWriteArgs = NSQWriteArgs::default();
}
impl ::pb_jelly::Message for NSQWriteArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "NSQWriteArgs",
      full_name: "protos.args.NSQWriteArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "topic",
          full_name: "protos.args.NSQWriteArgs.topic",
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
    let mut topic_size = 0;
    if self.topic != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic;
      let l = ::pb_jelly::Message::compute_size(val);
      topic_size += ::pb_jelly::wire_format::serialized_length(1);
      topic_size += ::pb_jelly::varint::serialized_length(l as u64);
      topic_size += l;
    }
    size += topic_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.topic != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.topic != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NSQWriteArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.topic = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for NSQWriteArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "topic" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.topic)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

