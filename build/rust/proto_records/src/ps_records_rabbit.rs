// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RabbitHeader {
  pub key: ::std::string::String,
  pub value: ::std::string::String,
}
impl ::std::default::Default for RabbitHeader {
  fn default() -> Self {
    RabbitHeader {
      key: ::std::default::Default::default(),
      value: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RabbitHeader_default: RabbitHeader = RabbitHeader::default();
}
impl ::pb_jelly::Message for RabbitHeader {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RabbitHeader",
      full_name: "protos.records.RabbitHeader",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "key",
          full_name: "protos.records.RabbitHeader.key",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "value",
          full_name: "protos.records.RabbitHeader.value",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitHeader", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.key = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitHeader", 2)?;
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
impl ::pb_jelly::Reflection for RabbitHeader {
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
pub struct Rabbit {
  pub body: ::std::vec::Vec<u8>,
  pub timestamp: i64,
  pub type_: ::std::string::String,
  pub exchange: ::std::string::String,
  pub routing_key: ::std::string::String,
  pub content_type: ::std::string::String,
  pub content_encoding: ::std::string::String,
  pub priority: i32,
  pub expiration: ::std::string::String,
  pub message_id: ::std::string::String,
  pub user_id: ::std::string::String,
  pub app_id: ::std::string::String,
  pub reply_to: ::std::string::String,
  pub correlation_id: ::std::string::String,
  pub headers: ::std::vec::Vec<RabbitHeader>,
}
impl ::std::default::Default for Rabbit {
  fn default() -> Self {
    Rabbit {
      body: ::std::default::Default::default(),
      timestamp: ::std::default::Default::default(),
      type_: ::std::default::Default::default(),
      exchange: ::std::default::Default::default(),
      routing_key: ::std::default::Default::default(),
      content_type: ::std::default::Default::default(),
      content_encoding: ::std::default::Default::default(),
      priority: ::std::default::Default::default(),
      expiration: ::std::default::Default::default(),
      message_id: ::std::default::Default::default(),
      user_id: ::std::default::Default::default(),
      app_id: ::std::default::Default::default(),
      reply_to: ::std::default::Default::default(),
      correlation_id: ::std::default::Default::default(),
      headers: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref Rabbit_default: Rabbit = Rabbit::default();
}
impl ::pb_jelly::Message for Rabbit {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "Rabbit",
      full_name: "protos.records.Rabbit",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "body",
          full_name: "protos.records.Rabbit.body",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "timestamp",
          full_name: "protos.records.Rabbit.timestamp",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "type_",
          full_name: "protos.records.Rabbit.type_",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "exchange",
          full_name: "protos.records.Rabbit.exchange",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "routing_key",
          full_name: "protos.records.Rabbit.routing_key",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "content_type",
          full_name: "protos.records.Rabbit.content_type",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "content_encoding",
          full_name: "protos.records.Rabbit.content_encoding",
          index: 6,
          number: 7,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "priority",
          full_name: "protos.records.Rabbit.priority",
          index: 7,
          number: 8,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "expiration",
          full_name: "protos.records.Rabbit.expiration",
          index: 8,
          number: 9,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "message_id",
          full_name: "protos.records.Rabbit.message_id",
          index: 9,
          number: 10,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "user_id",
          full_name: "protos.records.Rabbit.user_id",
          index: 10,
          number: 11,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "app_id",
          full_name: "protos.records.Rabbit.app_id",
          index: 11,
          number: 12,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "reply_to",
          full_name: "protos.records.Rabbit.reply_to",
          index: 12,
          number: 13,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "correlation_id",
          full_name: "protos.records.Rabbit.correlation_id",
          index: 13,
          number: 14,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "headers",
          full_name: "protos.records.Rabbit.headers",
          index: 14,
          number: 15,
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
    let mut body_size = 0;
    if self.body != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.body;
      let l = ::pb_jelly::Message::compute_size(val);
      body_size += ::pb_jelly::wire_format::serialized_length(1);
      body_size += ::pb_jelly::varint::serialized_length(l as u64);
      body_size += l;
    }
    size += body_size;
    let mut timestamp_size = 0;
    if self.timestamp != <i64 as ::std::default::Default>::default() {
      let val = &self.timestamp;
      let l = ::pb_jelly::Message::compute_size(val);
      timestamp_size += ::pb_jelly::wire_format::serialized_length(2);
      timestamp_size += l;
    }
    size += timestamp_size;
    let mut type__size = 0;
    if self.type_ != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.type_;
      let l = ::pb_jelly::Message::compute_size(val);
      type__size += ::pb_jelly::wire_format::serialized_length(3);
      type__size += ::pb_jelly::varint::serialized_length(l as u64);
      type__size += l;
    }
    size += type__size;
    let mut exchange_size = 0;
    if self.exchange != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.exchange;
      let l = ::pb_jelly::Message::compute_size(val);
      exchange_size += ::pb_jelly::wire_format::serialized_length(4);
      exchange_size += ::pb_jelly::varint::serialized_length(l as u64);
      exchange_size += l;
    }
    size += exchange_size;
    let mut routing_key_size = 0;
    if self.routing_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.routing_key;
      let l = ::pb_jelly::Message::compute_size(val);
      routing_key_size += ::pb_jelly::wire_format::serialized_length(5);
      routing_key_size += ::pb_jelly::varint::serialized_length(l as u64);
      routing_key_size += l;
    }
    size += routing_key_size;
    let mut content_type_size = 0;
    if self.content_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.content_type;
      let l = ::pb_jelly::Message::compute_size(val);
      content_type_size += ::pb_jelly::wire_format::serialized_length(6);
      content_type_size += ::pb_jelly::varint::serialized_length(l as u64);
      content_type_size += l;
    }
    size += content_type_size;
    let mut content_encoding_size = 0;
    if self.content_encoding != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.content_encoding;
      let l = ::pb_jelly::Message::compute_size(val);
      content_encoding_size += ::pb_jelly::wire_format::serialized_length(7);
      content_encoding_size += ::pb_jelly::varint::serialized_length(l as u64);
      content_encoding_size += l;
    }
    size += content_encoding_size;
    let mut priority_size = 0;
    if self.priority != <i32 as ::std::default::Default>::default() {
      let val = &self.priority;
      let l = ::pb_jelly::Message::compute_size(val);
      priority_size += ::pb_jelly::wire_format::serialized_length(8);
      priority_size += l;
    }
    size += priority_size;
    let mut expiration_size = 0;
    if self.expiration != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.expiration;
      let l = ::pb_jelly::Message::compute_size(val);
      expiration_size += ::pb_jelly::wire_format::serialized_length(9);
      expiration_size += ::pb_jelly::varint::serialized_length(l as u64);
      expiration_size += l;
    }
    size += expiration_size;
    let mut message_id_size = 0;
    if self.message_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message_id;
      let l = ::pb_jelly::Message::compute_size(val);
      message_id_size += ::pb_jelly::wire_format::serialized_length(10);
      message_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      message_id_size += l;
    }
    size += message_id_size;
    let mut user_id_size = 0;
    if self.user_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.user_id;
      let l = ::pb_jelly::Message::compute_size(val);
      user_id_size += ::pb_jelly::wire_format::serialized_length(11);
      user_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      user_id_size += l;
    }
    size += user_id_size;
    let mut app_id_size = 0;
    if self.app_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.app_id;
      let l = ::pb_jelly::Message::compute_size(val);
      app_id_size += ::pb_jelly::wire_format::serialized_length(12);
      app_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      app_id_size += l;
    }
    size += app_id_size;
    let mut reply_to_size = 0;
    if self.reply_to != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.reply_to;
      let l = ::pb_jelly::Message::compute_size(val);
      reply_to_size += ::pb_jelly::wire_format::serialized_length(13);
      reply_to_size += ::pb_jelly::varint::serialized_length(l as u64);
      reply_to_size += l;
    }
    size += reply_to_size;
    let mut correlation_id_size = 0;
    if self.correlation_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.correlation_id;
      let l = ::pb_jelly::Message::compute_size(val);
      correlation_id_size += ::pb_jelly::wire_format::serialized_length(14);
      correlation_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      correlation_id_size += l;
    }
    size += correlation_id_size;
    let mut headers_size = 0;
    for val in &self.headers {
      let l = ::pb_jelly::Message::compute_size(val);
      headers_size += ::pb_jelly::wire_format::serialized_length(15);
      headers_size += ::pb_jelly::varint::serialized_length(l as u64);
      headers_size += l;
    }
    size += headers_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.body != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.body;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.timestamp != <i64 as ::std::default::Default>::default() {
      let val = &self.timestamp;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.type_ != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.type_;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.exchange != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.exchange;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.routing_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.routing_key;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.content_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.content_type;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.content_encoding != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.content_encoding;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.priority != <i32 as ::std::default::Default>::default() {
      let val = &self.priority;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.expiration != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.expiration;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.message_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.user_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.user_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.app_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.app_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.reply_to != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.reply_to;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.correlation_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.correlation_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.headers {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.body != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.body;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.timestamp != <i64 as ::std::default::Default>::default() {
      let val = &self.timestamp;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.type_ != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.type_;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.exchange != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.exchange;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.routing_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.routing_key;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.content_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.content_type;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.content_encoding != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.content_encoding;
      ::pb_jelly::wire_format::write(7, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.priority != <i32 as ::std::default::Default>::default() {
      let val = &self.priority;
      ::pb_jelly::wire_format::write(8, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.expiration != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.expiration;
      ::pb_jelly::wire_format::write(9, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.message_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message_id;
      ::pb_jelly::wire_format::write(10, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.user_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.user_id;
      ::pb_jelly::wire_format::write(11, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.app_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.app_id;
      ::pb_jelly::wire_format::write(12, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.reply_to != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.reply_to;
      ::pb_jelly::wire_format::write(13, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.correlation_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.correlation_id;
      ::pb_jelly::wire_format::write(14, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.headers {
      ::pb_jelly::wire_format::write(15, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Rabbit", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::vec::Vec<u8> = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.body = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "Rabbit", 2)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.timestamp = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Rabbit", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.type_ = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Rabbit", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.exchange = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Rabbit", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.routing_key = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Rabbit", 6)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.content_type = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Rabbit", 7)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.content_encoding = val;
        }
        8 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "Rabbit", 8)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.priority = val;
        }
        9 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Rabbit", 9)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.expiration = val;
        }
        10 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Rabbit", 10)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.message_id = val;
        }
        11 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Rabbit", 11)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.user_id = val;
        }
        12 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Rabbit", 12)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.app_id = val;
        }
        13 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Rabbit", 13)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.reply_to = val;
        }
        14 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Rabbit", 14)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.correlation_id = val;
        }
        15 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Rabbit", 15)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RabbitHeader = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.headers.push(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for Rabbit {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "body" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.body)
      }
      "timestamp" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.timestamp)
      }
      "type_" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.type_)
      }
      "exchange" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.exchange)
      }
      "routing_key" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.routing_key)
      }
      "content_type" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.content_type)
      }
      "content_encoding" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.content_encoding)
      }
      "priority" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.priority)
      }
      "expiration" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.expiration)
      }
      "message_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.message_id)
      }
      "user_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.user_id)
      }
      "app_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.app_id)
      }
      "reply_to" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.reply_to)
      }
      "correlation_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.correlation_id)
      }
      "headers" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

