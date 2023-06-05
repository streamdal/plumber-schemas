// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RabbitConn {
  /// @gotags: kong:"help='Destination host address (full DSN)',env='PLUMBER_RELAY_RABBIT_ADDRESS',default='amqp://localhost',required"
  pub address: ::std::string::String,
  /// @gotags: kong:"help='Force TLS usage (regardless of DSN)',env='PLUMBER_RELAY_RABBIT_USE_TLS'"
  pub use_tls: bool,
  /// @gotags: kong:"help='Whether to verify server TLS certificate',env='PLUMBER_RELAY_RABBIT_SKIP_VERIFY_TLS'"
  pub tls_skip_verify: bool,
}
impl ::std::default::Default for RabbitConn {
  fn default() -> Self {
    RabbitConn {
      address: ::std::default::Default::default(),
      use_tls: ::std::default::Default::default(),
      tls_skip_verify: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RabbitConn_default: RabbitConn = RabbitConn::default();
}
impl ::pb_jelly::Message for RabbitConn {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RabbitConn",
      full_name: "protos.args.RabbitConn",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "address",
          full_name: "protos.args.RabbitConn.address",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "use_tls",
          full_name: "protos.args.RabbitConn.use_tls",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_skip_verify",
          full_name: "protos.args.RabbitConn.tls_skip_verify",
          index: 2,
          number: 3,
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
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.address;
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
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitConn", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.address = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitConn", 2)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.use_tls = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitConn", 3)?;
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
impl ::pb_jelly::Reflection for RabbitConn {
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
pub struct RabbitReadArgs {
  /// @gotags: kong:"help='Name of the exchange',env='PLUMBER_RELAY_RABBIT_EXCHANGE',required"
  pub exchange_name: ::std::string::String,
  /// @gotags: kong:"help='Name of the queue where messages will be routed to',env='PLUMBER_RELAY_RABBIT_QUEUE',required"
  pub queue_name: ::std::string::String,
  /// @gotags: kong:"help='Binding key for topic based exchanges',env='PLUMBER_RELAY_RABBIT_ROUTING_KEY',required"
  pub binding_key: ::std::string::String,
  /// @gotags: kong:"help='Whether plumber should be the only one using the queue',env='PLUMBER_RELAY_RABBIT_QUEUE_EXCLUSIVE'"
  pub queue_exclusive: bool,
  /// @gotags: kong:"help='Whether to create/declare the queue (if it does not exist)',env='PLUMBER_RELAY_RABBIT_QUEUE_DECLARE',default=true"
  pub queue_declare: bool,
  /// @gotags: kong:"help='Whether the queue should survive after disconnect',env='PLUMBER_RELAY_RABBIT_QUEUE_DURABLE'"
  pub queue_durable: bool,
  /// @gotags: kong:"help='Automatically acknowledge receipt of read/received messages',env='PLUMBER_RELAY_RABBIT_AUTOACK',default=true"
  pub auto_ack: bool,
  /// @gotags: kong:"help='How to identify the consumer to RabbitMQ',env='PLUMBER_RELAY_CONSUMER_TAG',default=plumber"
  pub consumer_tag: ::std::string::String,
  /// @gotags: kong:"help='Whether to auto-delete the queue after plumber has disconnected',env='PLUMBER_RELAY_RABBIT_QUEUE_AUTO_DELETE',default=true"
  pub queue_delete: bool,
  /// @gotags: kong:"help='Key=Value pair for sending additional queue argument to RabbitMQ. Example: --queue-arg x-dead-letter-exchange=mydlexchange --queue-arg x-queue-mode=lazy',env='PLUMBER_RELAY_RABBIT_QUEUE_ARGS'"
  pub queue_arg: ::std::vec::Vec<RabbitReadArgs_QueueArgEntry>,
  /// @gotags: kong:"help='Exclude messages with routing key matching regex',env='PLUMBER_RELAY_RABBIT_BINDING_KEY_EXCLUDE_REGEX'"
  pub exclude_binding_key_regex: ::std::string::String,
}
impl ::std::default::Default for RabbitReadArgs {
  fn default() -> Self {
    RabbitReadArgs {
      exchange_name: ::std::default::Default::default(),
      queue_name: ::std::default::Default::default(),
      binding_key: ::std::default::Default::default(),
      queue_exclusive: ::std::default::Default::default(),
      queue_declare: ::std::default::Default::default(),
      queue_durable: ::std::default::Default::default(),
      auto_ack: ::std::default::Default::default(),
      consumer_tag: ::std::default::Default::default(),
      queue_delete: ::std::default::Default::default(),
      queue_arg: ::std::default::Default::default(),
      exclude_binding_key_regex: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RabbitReadArgs_default: RabbitReadArgs = RabbitReadArgs::default();
}
impl ::pb_jelly::Message for RabbitReadArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RabbitReadArgs",
      full_name: "protos.args.RabbitReadArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "exchange_name",
          full_name: "protos.args.RabbitReadArgs.exchange_name",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "queue_name",
          full_name: "protos.args.RabbitReadArgs.queue_name",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "binding_key",
          full_name: "protos.args.RabbitReadArgs.binding_key",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "queue_exclusive",
          full_name: "protos.args.RabbitReadArgs.queue_exclusive",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "queue_declare",
          full_name: "protos.args.RabbitReadArgs.queue_declare",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "queue_durable",
          full_name: "protos.args.RabbitReadArgs.queue_durable",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "auto_ack",
          full_name: "protos.args.RabbitReadArgs.auto_ack",
          index: 6,
          number: 7,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "consumer_tag",
          full_name: "protos.args.RabbitReadArgs.consumer_tag",
          index: 7,
          number: 8,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "queue_delete",
          full_name: "protos.args.RabbitReadArgs.queue_delete",
          index: 8,
          number: 9,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "queue_arg",
          full_name: "protos.args.RabbitReadArgs.queue_arg",
          index: 9,
          number: 10,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Repeated,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "exclude_binding_key_regex",
          full_name: "protos.args.RabbitReadArgs.exclude_binding_key_regex",
          index: 10,
          number: 11,
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
    let mut exchange_name_size = 0;
    if self.exchange_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.exchange_name;
      let l = ::pb_jelly::Message::compute_size(val);
      exchange_name_size += ::pb_jelly::wire_format::serialized_length(1);
      exchange_name_size += ::pb_jelly::varint::serialized_length(l as u64);
      exchange_name_size += l;
    }
    size += exchange_name_size;
    let mut queue_name_size = 0;
    if self.queue_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.queue_name;
      let l = ::pb_jelly::Message::compute_size(val);
      queue_name_size += ::pb_jelly::wire_format::serialized_length(2);
      queue_name_size += ::pb_jelly::varint::serialized_length(l as u64);
      queue_name_size += l;
    }
    size += queue_name_size;
    let mut binding_key_size = 0;
    if self.binding_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.binding_key;
      let l = ::pb_jelly::Message::compute_size(val);
      binding_key_size += ::pb_jelly::wire_format::serialized_length(3);
      binding_key_size += ::pb_jelly::varint::serialized_length(l as u64);
      binding_key_size += l;
    }
    size += binding_key_size;
    let mut queue_exclusive_size = 0;
    if self.queue_exclusive != <bool as ::std::default::Default>::default() {
      let val = &self.queue_exclusive;
      let l = ::pb_jelly::Message::compute_size(val);
      queue_exclusive_size += ::pb_jelly::wire_format::serialized_length(4);
      queue_exclusive_size += l;
    }
    size += queue_exclusive_size;
    let mut queue_declare_size = 0;
    if self.queue_declare != <bool as ::std::default::Default>::default() {
      let val = &self.queue_declare;
      let l = ::pb_jelly::Message::compute_size(val);
      queue_declare_size += ::pb_jelly::wire_format::serialized_length(5);
      queue_declare_size += l;
    }
    size += queue_declare_size;
    let mut queue_durable_size = 0;
    if self.queue_durable != <bool as ::std::default::Default>::default() {
      let val = &self.queue_durable;
      let l = ::pb_jelly::Message::compute_size(val);
      queue_durable_size += ::pb_jelly::wire_format::serialized_length(6);
      queue_durable_size += l;
    }
    size += queue_durable_size;
    let mut auto_ack_size = 0;
    if self.auto_ack != <bool as ::std::default::Default>::default() {
      let val = &self.auto_ack;
      let l = ::pb_jelly::Message::compute_size(val);
      auto_ack_size += ::pb_jelly::wire_format::serialized_length(7);
      auto_ack_size += l;
    }
    size += auto_ack_size;
    let mut consumer_tag_size = 0;
    if self.consumer_tag != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_tag;
      let l = ::pb_jelly::Message::compute_size(val);
      consumer_tag_size += ::pb_jelly::wire_format::serialized_length(8);
      consumer_tag_size += ::pb_jelly::varint::serialized_length(l as u64);
      consumer_tag_size += l;
    }
    size += consumer_tag_size;
    let mut queue_delete_size = 0;
    if self.queue_delete != <bool as ::std::default::Default>::default() {
      let val = &self.queue_delete;
      let l = ::pb_jelly::Message::compute_size(val);
      queue_delete_size += ::pb_jelly::wire_format::serialized_length(9);
      queue_delete_size += l;
    }
    size += queue_delete_size;
    let mut queue_arg_size = 0;
    for val in &self.queue_arg {
      let l = ::pb_jelly::Message::compute_size(val);
      queue_arg_size += ::pb_jelly::wire_format::serialized_length(10);
      queue_arg_size += ::pb_jelly::varint::serialized_length(l as u64);
      queue_arg_size += l;
    }
    size += queue_arg_size;
    let mut exclude_binding_key_regex_size = 0;
    if self.exclude_binding_key_regex != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.exclude_binding_key_regex;
      let l = ::pb_jelly::Message::compute_size(val);
      exclude_binding_key_regex_size += ::pb_jelly::wire_format::serialized_length(11);
      exclude_binding_key_regex_size += ::pb_jelly::varint::serialized_length(l as u64);
      exclude_binding_key_regex_size += l;
    }
    size += exclude_binding_key_regex_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.exchange_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.exchange_name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.queue_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.queue_name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.binding_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.binding_key;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.queue_exclusive != <bool as ::std::default::Default>::default() {
      let val = &self.queue_exclusive;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.queue_declare != <bool as ::std::default::Default>::default() {
      let val = &self.queue_declare;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.queue_durable != <bool as ::std::default::Default>::default() {
      let val = &self.queue_durable;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.auto_ack != <bool as ::std::default::Default>::default() {
      let val = &self.auto_ack;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.consumer_tag != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_tag;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.queue_delete != <bool as ::std::default::Default>::default() {
      let val = &self.queue_delete;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.queue_arg {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.exclude_binding_key_regex != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.exclude_binding_key_regex;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.exchange_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.exchange_name;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.queue_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.queue_name;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.binding_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.binding_key;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.queue_exclusive != <bool as ::std::default::Default>::default() {
      let val = &self.queue_exclusive;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.queue_declare != <bool as ::std::default::Default>::default() {
      let val = &self.queue_declare;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.queue_durable != <bool as ::std::default::Default>::default() {
      let val = &self.queue_durable;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.auto_ack != <bool as ::std::default::Default>::default() {
      let val = &self.auto_ack;
      ::pb_jelly::wire_format::write(7, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.consumer_tag != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_tag;
      ::pb_jelly::wire_format::write(8, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.queue_delete != <bool as ::std::default::Default>::default() {
      let val = &self.queue_delete;
      ::pb_jelly::wire_format::write(9, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.queue_arg {
      ::pb_jelly::wire_format::write(10, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.exclude_binding_key_regex != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.exclude_binding_key_regex;
      ::pb_jelly::wire_format::write(11, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitReadArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.exchange_name = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitReadArgs", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.queue_name = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitReadArgs", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.binding_key = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitReadArgs", 4)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.queue_exclusive = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitReadArgs", 5)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.queue_declare = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitReadArgs", 6)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.queue_durable = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitReadArgs", 7)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.auto_ack = val;
        }
        8 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitReadArgs", 8)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.consumer_tag = val;
        }
        9 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitReadArgs", 9)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.queue_delete = val;
        }
        10 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitReadArgs", 10)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RabbitReadArgs_QueueArgEntry = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.queue_arg.push(val);
        }
        11 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitReadArgs", 11)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.exclude_binding_key_regex = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for RabbitReadArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "exchange_name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.exchange_name)
      }
      "queue_name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.queue_name)
      }
      "binding_key" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.binding_key)
      }
      "queue_exclusive" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.queue_exclusive)
      }
      "queue_declare" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.queue_declare)
      }
      "queue_durable" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.queue_durable)
      }
      "auto_ack" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.auto_ack)
      }
      "consumer_tag" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.consumer_tag)
      }
      "queue_delete" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.queue_delete)
      }
      "queue_arg" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      "exclude_binding_key_regex" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.exclude_binding_key_regex)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RabbitReadArgs_QueueArgEntry {
  pub key: ::std::string::String,
  pub value: ::std::string::String,
}
impl ::std::default::Default for RabbitReadArgs_QueueArgEntry {
  fn default() -> Self {
    RabbitReadArgs_QueueArgEntry {
      key: ::std::default::Default::default(),
      value: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RabbitReadArgs_QueueArgEntry_default: RabbitReadArgs_QueueArgEntry = RabbitReadArgs_QueueArgEntry::default();
}
impl ::pb_jelly::Message for RabbitReadArgs_QueueArgEntry {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RabbitReadArgs_QueueArgEntry",
      full_name: "protos.args.RabbitReadArgs_QueueArgEntry",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "key",
          full_name: "protos.args.RabbitReadArgs_QueueArgEntry.key",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "value",
          full_name: "protos.args.RabbitReadArgs_QueueArgEntry.value",
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
    let mut key_size = 0;
    if self.key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.key;
      let l = ::pb_jelly::Message::compute_size(val);
      key_size += ::pb_jelly::wire_format::serialized_length(1);
      key_size += ::pb_jelly::varint::serialized_length(l as u64);
      key_size += l;
    }
    size += key_size;
    let mut value_size = 0;
    if self.value != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.value;
      let l = ::pb_jelly::Message::compute_size(val);
      value_size += ::pb_jelly::wire_format::serialized_length(2);
      value_size += ::pb_jelly::varint::serialized_length(l as u64);
      value_size += l;
    }
    size += value_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.key;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.value != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.value;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.key;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.value != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.value;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitReadArgs_QueueArgEntry", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.key = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitReadArgs_QueueArgEntry", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.value = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for RabbitReadArgs_QueueArgEntry {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "key" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.key)
      }
      "value" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.value)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RabbitWriteArgs {
  /// @gotags: kong:"help='Exchange to write message(s) to',required"
  pub exchange_name: ::std::string::String,
  /// @gotags: kong:"help='Routing key to write message(s) to',required"
  pub routing_key: ::std::string::String,
  /// @gotags: kong:"help='Fills message properties $app_id with this value',default=plumber"
  pub app_id: ::std::string::String,
  /// @gotags: kong:"help='The type of exchange we are working with',enum='direct,topic,headers,fanout',default=topic,group=exchange"
  pub exchange_type: ::std::string::String,
  /// @gotags: kong:"help='Whether to declare an exchange (if it does not exist)',group=exchange"
  pub exchange_declare: bool,
  /// @gotags: kong:"help='Whether to make a declared exchange durable',group=exchange"
  pub exchange_durable: bool,
  /// @gotags: kong:"help='Whether to auto-delete the exchange (after writes)',group=exchange"
  pub exchange_auto_delete: bool,
}
impl ::std::default::Default for RabbitWriteArgs {
  fn default() -> Self {
    RabbitWriteArgs {
      exchange_name: ::std::default::Default::default(),
      routing_key: ::std::default::Default::default(),
      app_id: ::std::default::Default::default(),
      exchange_type: ::std::default::Default::default(),
      exchange_declare: ::std::default::Default::default(),
      exchange_durable: ::std::default::Default::default(),
      exchange_auto_delete: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RabbitWriteArgs_default: RabbitWriteArgs = RabbitWriteArgs::default();
}
impl ::pb_jelly::Message for RabbitWriteArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RabbitWriteArgs",
      full_name: "protos.args.RabbitWriteArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "exchange_name",
          full_name: "protos.args.RabbitWriteArgs.exchange_name",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "routing_key",
          full_name: "protos.args.RabbitWriteArgs.routing_key",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "app_id",
          full_name: "protos.args.RabbitWriteArgs.app_id",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "exchange_type",
          full_name: "protos.args.RabbitWriteArgs.exchange_type",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "exchange_declare",
          full_name: "protos.args.RabbitWriteArgs.exchange_declare",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "exchange_durable",
          full_name: "protos.args.RabbitWriteArgs.exchange_durable",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "exchange_auto_delete",
          full_name: "protos.args.RabbitWriteArgs.exchange_auto_delete",
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
    let mut exchange_name_size = 0;
    if self.exchange_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.exchange_name;
      let l = ::pb_jelly::Message::compute_size(val);
      exchange_name_size += ::pb_jelly::wire_format::serialized_length(1);
      exchange_name_size += ::pb_jelly::varint::serialized_length(l as u64);
      exchange_name_size += l;
    }
    size += exchange_name_size;
    let mut routing_key_size = 0;
    if self.routing_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.routing_key;
      let l = ::pb_jelly::Message::compute_size(val);
      routing_key_size += ::pb_jelly::wire_format::serialized_length(2);
      routing_key_size += ::pb_jelly::varint::serialized_length(l as u64);
      routing_key_size += l;
    }
    size += routing_key_size;
    let mut app_id_size = 0;
    if self.app_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.app_id;
      let l = ::pb_jelly::Message::compute_size(val);
      app_id_size += ::pb_jelly::wire_format::serialized_length(3);
      app_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      app_id_size += l;
    }
    size += app_id_size;
    let mut exchange_type_size = 0;
    if self.exchange_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.exchange_type;
      let l = ::pb_jelly::Message::compute_size(val);
      exchange_type_size += ::pb_jelly::wire_format::serialized_length(4);
      exchange_type_size += ::pb_jelly::varint::serialized_length(l as u64);
      exchange_type_size += l;
    }
    size += exchange_type_size;
    let mut exchange_declare_size = 0;
    if self.exchange_declare != <bool as ::std::default::Default>::default() {
      let val = &self.exchange_declare;
      let l = ::pb_jelly::Message::compute_size(val);
      exchange_declare_size += ::pb_jelly::wire_format::serialized_length(5);
      exchange_declare_size += l;
    }
    size += exchange_declare_size;
    let mut exchange_durable_size = 0;
    if self.exchange_durable != <bool as ::std::default::Default>::default() {
      let val = &self.exchange_durable;
      let l = ::pb_jelly::Message::compute_size(val);
      exchange_durable_size += ::pb_jelly::wire_format::serialized_length(6);
      exchange_durable_size += l;
    }
    size += exchange_durable_size;
    let mut exchange_auto_delete_size = 0;
    if self.exchange_auto_delete != <bool as ::std::default::Default>::default() {
      let val = &self.exchange_auto_delete;
      let l = ::pb_jelly::Message::compute_size(val);
      exchange_auto_delete_size += ::pb_jelly::wire_format::serialized_length(7);
      exchange_auto_delete_size += l;
    }
    size += exchange_auto_delete_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.exchange_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.exchange_name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.routing_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.routing_key;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.app_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.app_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.exchange_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.exchange_type;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.exchange_declare != <bool as ::std::default::Default>::default() {
      let val = &self.exchange_declare;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.exchange_durable != <bool as ::std::default::Default>::default() {
      let val = &self.exchange_durable;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.exchange_auto_delete != <bool as ::std::default::Default>::default() {
      let val = &self.exchange_auto_delete;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.exchange_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.exchange_name;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.routing_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.routing_key;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.app_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.app_id;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.exchange_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.exchange_type;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.exchange_declare != <bool as ::std::default::Default>::default() {
      let val = &self.exchange_declare;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.exchange_durable != <bool as ::std::default::Default>::default() {
      let val = &self.exchange_durable;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.exchange_auto_delete != <bool as ::std::default::Default>::default() {
      let val = &self.exchange_auto_delete;
      ::pb_jelly::wire_format::write(7, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitWriteArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.exchange_name = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitWriteArgs", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.routing_key = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitWriteArgs", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.app_id = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitWriteArgs", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.exchange_type = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitWriteArgs", 5)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.exchange_declare = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitWriteArgs", 6)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.exchange_durable = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitWriteArgs", 7)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.exchange_auto_delete = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for RabbitWriteArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "exchange_name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.exchange_name)
      }
      "routing_key" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.routing_key)
      }
      "app_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.app_id)
      }
      "exchange_type" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.exchange_type)
      }
      "exchange_declare" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.exchange_declare)
      }
      "exchange_durable" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.exchange_durable)
      }
      "exchange_auto_delete" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.exchange_auto_delete)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

