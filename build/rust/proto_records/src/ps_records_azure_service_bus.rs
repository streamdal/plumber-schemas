// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct AzureServiceBus {
  pub content_type: ::std::string::String,
  pub correlation_id: ::std::string::String,
  pub value: ::std::vec::Vec<u8>,
  pub delivery_count: u32,
  pub session_id: ::std::string::String,
  pub group_sequence: u32,
  pub id: ::std::string::String,
  pub label: ::std::string::String,
  pub reply_to: ::std::string::String,
  pub reply_to_group_id: ::std::string::String,
  pub to: ::std::string::String,
  pub ttl: i64,
  pub lock_token: ::std::string::String,
  pub system_properties: ::std::option::Option<AzureSystemProperties>,
  pub user_properties: ::std::vec::Vec<AzureServiceBus_UserPropertiesEntry>,
  pub format: u32,
}
impl ::std::default::Default for AzureServiceBus {
  fn default() -> Self {
    AzureServiceBus {
      content_type: ::std::default::Default::default(),
      correlation_id: ::std::default::Default::default(),
      value: ::std::default::Default::default(),
      delivery_count: ::std::default::Default::default(),
      session_id: ::std::default::Default::default(),
      group_sequence: ::std::default::Default::default(),
      id: ::std::default::Default::default(),
      label: ::std::default::Default::default(),
      reply_to: ::std::default::Default::default(),
      reply_to_group_id: ::std::default::Default::default(),
      to: ::std::default::Default::default(),
      ttl: ::std::default::Default::default(),
      lock_token: ::std::default::Default::default(),
      system_properties: ::std::default::Default::default(),
      user_properties: ::std::default::Default::default(),
      format: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref AzureServiceBus_default: AzureServiceBus = AzureServiceBus::default();
}
impl ::pb_jelly::Message for AzureServiceBus {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AzureServiceBus",
      full_name: "protos.records.AzureServiceBus",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "content_type",
          full_name: "protos.records.AzureServiceBus.content_type",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "correlation_id",
          full_name: "protos.records.AzureServiceBus.correlation_id",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "value",
          full_name: "protos.records.AzureServiceBus.value",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "delivery_count",
          full_name: "protos.records.AzureServiceBus.delivery_count",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "session_id",
          full_name: "protos.records.AzureServiceBus.session_id",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "group_sequence",
          full_name: "protos.records.AzureServiceBus.group_sequence",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "id",
          full_name: "protos.records.AzureServiceBus.id",
          index: 6,
          number: 7,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "label",
          full_name: "protos.records.AzureServiceBus.label",
          index: 7,
          number: 8,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "reply_to",
          full_name: "protos.records.AzureServiceBus.reply_to",
          index: 8,
          number: 9,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "reply_to_group_id",
          full_name: "protos.records.AzureServiceBus.reply_to_group_id",
          index: 9,
          number: 10,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "to",
          full_name: "protos.records.AzureServiceBus.to",
          index: 10,
          number: 11,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "ttl",
          full_name: "protos.records.AzureServiceBus.ttl",
          index: 11,
          number: 12,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "lock_token",
          full_name: "protos.records.AzureServiceBus.lock_token",
          index: 12,
          number: 13,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "system_properties",
          full_name: "protos.records.AzureServiceBus.system_properties",
          index: 13,
          number: 14,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "user_properties",
          full_name: "protos.records.AzureServiceBus.user_properties",
          index: 14,
          number: 15,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Repeated,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "format",
          full_name: "protos.records.AzureServiceBus.format",
          index: 15,
          number: 16,
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
    let mut content_type_size = 0;
    if self.content_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.content_type;
      let l = ::pb_jelly::Message::compute_size(val);
      content_type_size += ::pb_jelly::wire_format::serialized_length(1);
      content_type_size += ::pb_jelly::varint::serialized_length(l as u64);
      content_type_size += l;
    }
    size += content_type_size;
    let mut correlation_id_size = 0;
    if self.correlation_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.correlation_id;
      let l = ::pb_jelly::Message::compute_size(val);
      correlation_id_size += ::pb_jelly::wire_format::serialized_length(2);
      correlation_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      correlation_id_size += l;
    }
    size += correlation_id_size;
    let mut value_size = 0;
    if self.value != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.value;
      let l = ::pb_jelly::Message::compute_size(val);
      value_size += ::pb_jelly::wire_format::serialized_length(3);
      value_size += ::pb_jelly::varint::serialized_length(l as u64);
      value_size += l;
    }
    size += value_size;
    let mut delivery_count_size = 0;
    if self.delivery_count != <u32 as ::std::default::Default>::default() {
      let val = &self.delivery_count;
      let l = ::pb_jelly::Message::compute_size(val);
      delivery_count_size += ::pb_jelly::wire_format::serialized_length(4);
      delivery_count_size += l;
    }
    size += delivery_count_size;
    let mut session_id_size = 0;
    if self.session_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.session_id;
      let l = ::pb_jelly::Message::compute_size(val);
      session_id_size += ::pb_jelly::wire_format::serialized_length(5);
      session_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      session_id_size += l;
    }
    size += session_id_size;
    let mut group_sequence_size = 0;
    if self.group_sequence != <u32 as ::std::default::Default>::default() {
      let val = &self.group_sequence;
      let l = ::pb_jelly::Message::compute_size(val);
      group_sequence_size += ::pb_jelly::wire_format::serialized_length(6);
      group_sequence_size += l;
    }
    size += group_sequence_size;
    let mut id_size = 0;
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      let l = ::pb_jelly::Message::compute_size(val);
      id_size += ::pb_jelly::wire_format::serialized_length(7);
      id_size += ::pb_jelly::varint::serialized_length(l as u64);
      id_size += l;
    }
    size += id_size;
    let mut label_size = 0;
    if self.label != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.label;
      let l = ::pb_jelly::Message::compute_size(val);
      label_size += ::pb_jelly::wire_format::serialized_length(8);
      label_size += ::pb_jelly::varint::serialized_length(l as u64);
      label_size += l;
    }
    size += label_size;
    let mut reply_to_size = 0;
    if self.reply_to != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.reply_to;
      let l = ::pb_jelly::Message::compute_size(val);
      reply_to_size += ::pb_jelly::wire_format::serialized_length(9);
      reply_to_size += ::pb_jelly::varint::serialized_length(l as u64);
      reply_to_size += l;
    }
    size += reply_to_size;
    let mut reply_to_group_id_size = 0;
    if self.reply_to_group_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.reply_to_group_id;
      let l = ::pb_jelly::Message::compute_size(val);
      reply_to_group_id_size += ::pb_jelly::wire_format::serialized_length(10);
      reply_to_group_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      reply_to_group_id_size += l;
    }
    size += reply_to_group_id_size;
    let mut to_size = 0;
    if self.to != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.to;
      let l = ::pb_jelly::Message::compute_size(val);
      to_size += ::pb_jelly::wire_format::serialized_length(11);
      to_size += ::pb_jelly::varint::serialized_length(l as u64);
      to_size += l;
    }
    size += to_size;
    let mut ttl_size = 0;
    if self.ttl != <i64 as ::std::default::Default>::default() {
      let val = &self.ttl;
      let l = ::pb_jelly::Message::compute_size(val);
      ttl_size += ::pb_jelly::wire_format::serialized_length(12);
      ttl_size += l;
    }
    size += ttl_size;
    let mut lock_token_size = 0;
    if self.lock_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.lock_token;
      let l = ::pb_jelly::Message::compute_size(val);
      lock_token_size += ::pb_jelly::wire_format::serialized_length(13);
      lock_token_size += ::pb_jelly::varint::serialized_length(l as u64);
      lock_token_size += l;
    }
    size += lock_token_size;
    let mut system_properties_size = 0;
    for val in &self.system_properties {
      let l = ::pb_jelly::Message::compute_size(val);
      system_properties_size += ::pb_jelly::wire_format::serialized_length(14);
      system_properties_size += ::pb_jelly::varint::serialized_length(l as u64);
      system_properties_size += l;
    }
    size += system_properties_size;
    let mut user_properties_size = 0;
    for val in &self.user_properties {
      let l = ::pb_jelly::Message::compute_size(val);
      user_properties_size += ::pb_jelly::wire_format::serialized_length(15);
      user_properties_size += ::pb_jelly::varint::serialized_length(l as u64);
      user_properties_size += l;
    }
    size += user_properties_size;
    let mut format_size = 0;
    if self.format != <u32 as ::std::default::Default>::default() {
      let val = &self.format;
      let l = ::pb_jelly::Message::compute_size(val);
      format_size += ::pb_jelly::wire_format::serialized_length(16);
      format_size += l;
    }
    size += format_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.content_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.content_type;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.correlation_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.correlation_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.value != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.value;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.delivery_count != <u32 as ::std::default::Default>::default() {
      let val = &self.delivery_count;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.session_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.session_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.group_sequence != <u32 as ::std::default::Default>::default() {
      let val = &self.group_sequence;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.label != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.label;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.reply_to != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.reply_to;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.reply_to_group_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.reply_to_group_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.to != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.to;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.ttl != <i64 as ::std::default::Default>::default() {
      let val = &self.ttl;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.lock_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.lock_token;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.system_properties {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.user_properties {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.format != <u32 as ::std::default::Default>::default() {
      let val = &self.format;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.content_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.content_type;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.correlation_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.correlation_id;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.value != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.value;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.delivery_count != <u32 as ::std::default::Default>::default() {
      let val = &self.delivery_count;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.session_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.session_id;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.group_sequence != <u32 as ::std::default::Default>::default() {
      let val = &self.group_sequence;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      ::pb_jelly::wire_format::write(7, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.label != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.label;
      ::pb_jelly::wire_format::write(8, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.reply_to != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.reply_to;
      ::pb_jelly::wire_format::write(9, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.reply_to_group_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.reply_to_group_id;
      ::pb_jelly::wire_format::write(10, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.to != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.to;
      ::pb_jelly::wire_format::write(11, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.ttl != <i64 as ::std::default::Default>::default() {
      let val = &self.ttl;
      ::pb_jelly::wire_format::write(12, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.lock_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.lock_token;
      ::pb_jelly::wire_format::write(13, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.system_properties {
      ::pb_jelly::wire_format::write(14, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.user_properties {
      ::pb_jelly::wire_format::write(15, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.format != <u32 as ::std::default::Default>::default() {
      let val = &self.format;
      ::pb_jelly::wire_format::write(16, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureServiceBus", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.content_type = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureServiceBus", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.correlation_id = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureServiceBus", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::vec::Vec<u8> = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.value = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "AzureServiceBus", 4)?;
          let mut val: u32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.delivery_count = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureServiceBus", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.session_id = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "AzureServiceBus", 6)?;
          let mut val: u32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.group_sequence = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureServiceBus", 7)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.id = val;
        }
        8 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureServiceBus", 8)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.label = val;
        }
        9 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureServiceBus", 9)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.reply_to = val;
        }
        10 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureServiceBus", 10)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.reply_to_group_id = val;
        }
        11 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureServiceBus", 11)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.to = val;
        }
        12 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "AzureServiceBus", 12)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.ttl = val;
        }
        13 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureServiceBus", 13)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.lock_token = val;
        }
        14 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureServiceBus", 14)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: AzureSystemProperties = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.system_properties = Some(val);
        }
        15 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureServiceBus", 15)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: AzureServiceBus_UserPropertiesEntry = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.user_properties.push(val);
        }
        16 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "AzureServiceBus", 16)?;
          let mut val: u32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.format = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for AzureServiceBus {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "content_type" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.content_type)
      }
      "correlation_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.correlation_id)
      }
      "value" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.value)
      }
      "delivery_count" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.delivery_count)
      }
      "session_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.session_id)
      }
      "group_sequence" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.group_sequence)
      }
      "id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.id)
      }
      "label" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.label)
      }
      "reply_to" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.reply_to)
      }
      "reply_to_group_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.reply_to_group_id)
      }
      "to" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.to)
      }
      "ttl" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.ttl)
      }
      "lock_token" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.lock_token)
      }
      "system_properties" => {
        ::pb_jelly::reflection::FieldMut::Value(self.system_properties.get_or_insert_with(::std::default::Default::default))
      }
      "user_properties" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      "format" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.format)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct AzureServiceBus_UserPropertiesEntry {
  pub key: ::std::string::String,
  pub value: ::std::string::String,
}
impl ::std::default::Default for AzureServiceBus_UserPropertiesEntry {
  fn default() -> Self {
    AzureServiceBus_UserPropertiesEntry {
      key: ::std::default::Default::default(),
      value: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref AzureServiceBus_UserPropertiesEntry_default: AzureServiceBus_UserPropertiesEntry = AzureServiceBus_UserPropertiesEntry::default();
}
impl ::pb_jelly::Message for AzureServiceBus_UserPropertiesEntry {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AzureServiceBus_UserPropertiesEntry",
      full_name: "protos.records.AzureServiceBus_UserPropertiesEntry",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "key",
          full_name: "protos.records.AzureServiceBus_UserPropertiesEntry.key",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "value",
          full_name: "protos.records.AzureServiceBus_UserPropertiesEntry.value",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureServiceBus_UserPropertiesEntry", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.key = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureServiceBus_UserPropertiesEntry", 2)?;
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
impl ::pb_jelly::Reflection for AzureServiceBus_UserPropertiesEntry {
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
pub struct AzureSystemProperties {
  pub locked_until: i64,
  pub sequence_number: i64,
  pub partition_id: i32,
  pub partition_key: ::std::string::String,
  pub enqueued_time: i64,
  pub dead_letter_source: ::std::string::String,
  pub scheduled_enqueue_time: i64,
  pub enqueued_sequence_number: i64,
  pub via_partition_key: ::std::string::String,
  pub annotations: ::std::vec::Vec<AzureSystemProperties_AnnotationsEntry>,
}
impl ::std::default::Default for AzureSystemProperties {
  fn default() -> Self {
    AzureSystemProperties {
      locked_until: ::std::default::Default::default(),
      sequence_number: ::std::default::Default::default(),
      partition_id: ::std::default::Default::default(),
      partition_key: ::std::default::Default::default(),
      enqueued_time: ::std::default::Default::default(),
      dead_letter_source: ::std::default::Default::default(),
      scheduled_enqueue_time: ::std::default::Default::default(),
      enqueued_sequence_number: ::std::default::Default::default(),
      via_partition_key: ::std::default::Default::default(),
      annotations: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref AzureSystemProperties_default: AzureSystemProperties = AzureSystemProperties::default();
}
impl ::pb_jelly::Message for AzureSystemProperties {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AzureSystemProperties",
      full_name: "protos.records.AzureSystemProperties",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "locked_until",
          full_name: "protos.records.AzureSystemProperties.locked_until",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "sequence_number",
          full_name: "protos.records.AzureSystemProperties.sequence_number",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "partition_id",
          full_name: "protos.records.AzureSystemProperties.partition_id",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "partition_key",
          full_name: "protos.records.AzureSystemProperties.partition_key",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "enqueued_time",
          full_name: "protos.records.AzureSystemProperties.enqueued_time",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "dead_letter_source",
          full_name: "protos.records.AzureSystemProperties.dead_letter_source",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "scheduled_enqueue_time",
          full_name: "protos.records.AzureSystemProperties.scheduled_enqueue_time",
          index: 6,
          number: 7,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "enqueued_sequence_number",
          full_name: "protos.records.AzureSystemProperties.enqueued_sequence_number",
          index: 7,
          number: 8,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "via_partition_key",
          full_name: "protos.records.AzureSystemProperties.via_partition_key",
          index: 8,
          number: 9,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "annotations",
          full_name: "protos.records.AzureSystemProperties.annotations",
          index: 9,
          number: 10,
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
    let mut locked_until_size = 0;
    if self.locked_until != <i64 as ::std::default::Default>::default() {
      let val = &self.locked_until;
      let l = ::pb_jelly::Message::compute_size(val);
      locked_until_size += ::pb_jelly::wire_format::serialized_length(1);
      locked_until_size += l;
    }
    size += locked_until_size;
    let mut sequence_number_size = 0;
    if self.sequence_number != <i64 as ::std::default::Default>::default() {
      let val = &self.sequence_number;
      let l = ::pb_jelly::Message::compute_size(val);
      sequence_number_size += ::pb_jelly::wire_format::serialized_length(2);
      sequence_number_size += l;
    }
    size += sequence_number_size;
    let mut partition_id_size = 0;
    if self.partition_id != <i32 as ::std::default::Default>::default() {
      let val = &self.partition_id;
      let l = ::pb_jelly::Message::compute_size(val);
      partition_id_size += ::pb_jelly::wire_format::serialized_length(3);
      partition_id_size += l;
    }
    size += partition_id_size;
    let mut partition_key_size = 0;
    if self.partition_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.partition_key;
      let l = ::pb_jelly::Message::compute_size(val);
      partition_key_size += ::pb_jelly::wire_format::serialized_length(4);
      partition_key_size += ::pb_jelly::varint::serialized_length(l as u64);
      partition_key_size += l;
    }
    size += partition_key_size;
    let mut enqueued_time_size = 0;
    if self.enqueued_time != <i64 as ::std::default::Default>::default() {
      let val = &self.enqueued_time;
      let l = ::pb_jelly::Message::compute_size(val);
      enqueued_time_size += ::pb_jelly::wire_format::serialized_length(5);
      enqueued_time_size += l;
    }
    size += enqueued_time_size;
    let mut dead_letter_source_size = 0;
    if self.dead_letter_source != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.dead_letter_source;
      let l = ::pb_jelly::Message::compute_size(val);
      dead_letter_source_size += ::pb_jelly::wire_format::serialized_length(6);
      dead_letter_source_size += ::pb_jelly::varint::serialized_length(l as u64);
      dead_letter_source_size += l;
    }
    size += dead_letter_source_size;
    let mut scheduled_enqueue_time_size = 0;
    if self.scheduled_enqueue_time != <i64 as ::std::default::Default>::default() {
      let val = &self.scheduled_enqueue_time;
      let l = ::pb_jelly::Message::compute_size(val);
      scheduled_enqueue_time_size += ::pb_jelly::wire_format::serialized_length(7);
      scheduled_enqueue_time_size += l;
    }
    size += scheduled_enqueue_time_size;
    let mut enqueued_sequence_number_size = 0;
    if self.enqueued_sequence_number != <i64 as ::std::default::Default>::default() {
      let val = &self.enqueued_sequence_number;
      let l = ::pb_jelly::Message::compute_size(val);
      enqueued_sequence_number_size += ::pb_jelly::wire_format::serialized_length(8);
      enqueued_sequence_number_size += l;
    }
    size += enqueued_sequence_number_size;
    let mut via_partition_key_size = 0;
    if self.via_partition_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.via_partition_key;
      let l = ::pb_jelly::Message::compute_size(val);
      via_partition_key_size += ::pb_jelly::wire_format::serialized_length(9);
      via_partition_key_size += ::pb_jelly::varint::serialized_length(l as u64);
      via_partition_key_size += l;
    }
    size += via_partition_key_size;
    let mut annotations_size = 0;
    for val in &self.annotations {
      let l = ::pb_jelly::Message::compute_size(val);
      annotations_size += ::pb_jelly::wire_format::serialized_length(10);
      annotations_size += ::pb_jelly::varint::serialized_length(l as u64);
      annotations_size += l;
    }
    size += annotations_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.locked_until != <i64 as ::std::default::Default>::default() {
      let val = &self.locked_until;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.sequence_number != <i64 as ::std::default::Default>::default() {
      let val = &self.sequence_number;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.partition_id != <i32 as ::std::default::Default>::default() {
      let val = &self.partition_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.partition_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.partition_key;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.enqueued_time != <i64 as ::std::default::Default>::default() {
      let val = &self.enqueued_time;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.dead_letter_source != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.dead_letter_source;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.scheduled_enqueue_time != <i64 as ::std::default::Default>::default() {
      let val = &self.scheduled_enqueue_time;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.enqueued_sequence_number != <i64 as ::std::default::Default>::default() {
      let val = &self.enqueued_sequence_number;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.via_partition_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.via_partition_key;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.annotations {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.locked_until != <i64 as ::std::default::Default>::default() {
      let val = &self.locked_until;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.sequence_number != <i64 as ::std::default::Default>::default() {
      let val = &self.sequence_number;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.partition_id != <i32 as ::std::default::Default>::default() {
      let val = &self.partition_id;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.partition_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.partition_key;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.enqueued_time != <i64 as ::std::default::Default>::default() {
      let val = &self.enqueued_time;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.dead_letter_source != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.dead_letter_source;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.scheduled_enqueue_time != <i64 as ::std::default::Default>::default() {
      let val = &self.scheduled_enqueue_time;
      ::pb_jelly::wire_format::write(7, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.enqueued_sequence_number != <i64 as ::std::default::Default>::default() {
      let val = &self.enqueued_sequence_number;
      ::pb_jelly::wire_format::write(8, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.via_partition_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.via_partition_key;
      ::pb_jelly::wire_format::write(9, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.annotations {
      ::pb_jelly::wire_format::write(10, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "AzureSystemProperties", 1)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.locked_until = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "AzureSystemProperties", 2)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.sequence_number = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "AzureSystemProperties", 3)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.partition_id = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureSystemProperties", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.partition_key = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "AzureSystemProperties", 5)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.enqueued_time = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureSystemProperties", 6)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.dead_letter_source = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "AzureSystemProperties", 7)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.scheduled_enqueue_time = val;
        }
        8 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "AzureSystemProperties", 8)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.enqueued_sequence_number = val;
        }
        9 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureSystemProperties", 9)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.via_partition_key = val;
        }
        10 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureSystemProperties", 10)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: AzureSystemProperties_AnnotationsEntry = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.annotations.push(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for AzureSystemProperties {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "locked_until" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.locked_until)
      }
      "sequence_number" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.sequence_number)
      }
      "partition_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.partition_id)
      }
      "partition_key" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.partition_key)
      }
      "enqueued_time" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.enqueued_time)
      }
      "dead_letter_source" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.dead_letter_source)
      }
      "scheduled_enqueue_time" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.scheduled_enqueue_time)
      }
      "enqueued_sequence_number" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.enqueued_sequence_number)
      }
      "via_partition_key" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.via_partition_key)
      }
      "annotations" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct AzureSystemProperties_AnnotationsEntry {
  pub key: ::std::string::String,
  pub value: ::std::string::String,
}
impl ::std::default::Default for AzureSystemProperties_AnnotationsEntry {
  fn default() -> Self {
    AzureSystemProperties_AnnotationsEntry {
      key: ::std::default::Default::default(),
      value: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref AzureSystemProperties_AnnotationsEntry_default: AzureSystemProperties_AnnotationsEntry = AzureSystemProperties_AnnotationsEntry::default();
}
impl ::pb_jelly::Message for AzureSystemProperties_AnnotationsEntry {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AzureSystemProperties_AnnotationsEntry",
      full_name: "protos.records.AzureSystemProperties_AnnotationsEntry",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "key",
          full_name: "protos.records.AzureSystemProperties_AnnotationsEntry.key",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "value",
          full_name: "protos.records.AzureSystemProperties_AnnotationsEntry.value",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureSystemProperties_AnnotationsEntry", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.key = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureSystemProperties_AnnotationsEntry", 2)?;
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
impl ::pb_jelly::Reflection for AzureSystemProperties_AnnotationsEntry {
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

