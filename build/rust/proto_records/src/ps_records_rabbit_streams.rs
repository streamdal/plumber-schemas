// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RabbitStreams {
  pub delivery_tag: ::std::string::String,
  pub format: u32,
  pub header: ::std::option::Option<RabbitStreamsHeader>,
  pub delivery_annotations: ::std::vec::Vec<RabbitStreams_DeliveryAnnotationsEntry>,
  pub send_settled: bool,
  pub stream_name: ::std::string::String,
  pub timestamp: i64,
  pub value: ::std::vec::Vec<u8>,
}
impl ::std::default::Default for RabbitStreams {
  fn default() -> Self {
    RabbitStreams {
      delivery_tag: ::std::default::Default::default(),
      format: ::std::default::Default::default(),
      header: ::std::default::Default::default(),
      delivery_annotations: ::std::default::Default::default(),
      send_settled: ::std::default::Default::default(),
      stream_name: ::std::default::Default::default(),
      timestamp: ::std::default::Default::default(),
      value: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RabbitStreams_default: RabbitStreams = RabbitStreams::default();
}
impl ::pb_jelly::Message for RabbitStreams {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RabbitStreams",
      full_name: "protos.records.RabbitStreams",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "delivery_tag",
          full_name: "protos.records.RabbitStreams.delivery_tag",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "format",
          full_name: "protos.records.RabbitStreams.format",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "header",
          full_name: "protos.records.RabbitStreams.header",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "delivery_annotations",
          full_name: "protos.records.RabbitStreams.delivery_annotations",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Repeated,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "send_settled",
          full_name: "protos.records.RabbitStreams.send_settled",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "stream_name",
          full_name: "protos.records.RabbitStreams.stream_name",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "timestamp",
          full_name: "protos.records.RabbitStreams.timestamp",
          index: 6,
          number: 7,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "value",
          full_name: "protos.records.RabbitStreams.value",
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
    let mut delivery_tag_size = 0;
    if self.delivery_tag != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.delivery_tag;
      let l = ::pb_jelly::Message::compute_size(val);
      delivery_tag_size += ::pb_jelly::wire_format::serialized_length(1);
      delivery_tag_size += ::pb_jelly::varint::serialized_length(l as u64);
      delivery_tag_size += l;
    }
    size += delivery_tag_size;
    let mut format_size = 0;
    if self.format != <u32 as ::std::default::Default>::default() {
      let val = &self.format;
      let l = ::pb_jelly::Message::compute_size(val);
      format_size += ::pb_jelly::wire_format::serialized_length(2);
      format_size += l;
    }
    size += format_size;
    let mut header_size = 0;
    for val in &self.header {
      let l = ::pb_jelly::Message::compute_size(val);
      header_size += ::pb_jelly::wire_format::serialized_length(3);
      header_size += ::pb_jelly::varint::serialized_length(l as u64);
      header_size += l;
    }
    size += header_size;
    let mut delivery_annotations_size = 0;
    for val in &self.delivery_annotations {
      let l = ::pb_jelly::Message::compute_size(val);
      delivery_annotations_size += ::pb_jelly::wire_format::serialized_length(4);
      delivery_annotations_size += ::pb_jelly::varint::serialized_length(l as u64);
      delivery_annotations_size += l;
    }
    size += delivery_annotations_size;
    let mut send_settled_size = 0;
    if self.send_settled != <bool as ::std::default::Default>::default() {
      let val = &self.send_settled;
      let l = ::pb_jelly::Message::compute_size(val);
      send_settled_size += ::pb_jelly::wire_format::serialized_length(5);
      send_settled_size += l;
    }
    size += send_settled_size;
    let mut stream_name_size = 0;
    if self.stream_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.stream_name;
      let l = ::pb_jelly::Message::compute_size(val);
      stream_name_size += ::pb_jelly::wire_format::serialized_length(6);
      stream_name_size += ::pb_jelly::varint::serialized_length(l as u64);
      stream_name_size += l;
    }
    size += stream_name_size;
    let mut timestamp_size = 0;
    if self.timestamp != <i64 as ::std::default::Default>::default() {
      let val = &self.timestamp;
      let l = ::pb_jelly::Message::compute_size(val);
      timestamp_size += ::pb_jelly::wire_format::serialized_length(7);
      timestamp_size += l;
    }
    size += timestamp_size;
    let mut value_size = 0;
    if self.value != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.value;
      let l = ::pb_jelly::Message::compute_size(val);
      value_size += ::pb_jelly::wire_format::serialized_length(8);
      value_size += ::pb_jelly::varint::serialized_length(l as u64);
      value_size += l;
    }
    size += value_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.delivery_tag != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.delivery_tag;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.format != <u32 as ::std::default::Default>::default() {
      let val = &self.format;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.header {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.delivery_annotations {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.send_settled != <bool as ::std::default::Default>::default() {
      let val = &self.send_settled;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.stream_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.stream_name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.timestamp != <i64 as ::std::default::Default>::default() {
      let val = &self.timestamp;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.value != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.value;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.delivery_tag != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.delivery_tag;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.format != <u32 as ::std::default::Default>::default() {
      let val = &self.format;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.header {
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.delivery_annotations {
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.send_settled != <bool as ::std::default::Default>::default() {
      let val = &self.send_settled;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.stream_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.stream_name;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.timestamp != <i64 as ::std::default::Default>::default() {
      let val = &self.timestamp;
      ::pb_jelly::wire_format::write(7, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.value != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.value;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitStreams", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.delivery_tag = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitStreams", 2)?;
          let mut val: u32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.format = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitStreams", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RabbitStreamsHeader = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.header = Some(val);
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitStreams", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: RabbitStreams_DeliveryAnnotationsEntry = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.delivery_annotations.push(val);
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitStreams", 5)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.send_settled = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitStreams", 6)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.stream_name = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitStreams", 7)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.timestamp = val;
        }
        8 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitStreams", 8)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::vec::Vec<u8> = ::std::default::Default::default();
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
impl ::pb_jelly::Reflection for RabbitStreams {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "delivery_tag" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.delivery_tag)
      }
      "format" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.format)
      }
      "header" => {
        ::pb_jelly::reflection::FieldMut::Value(self.header.get_or_insert_with(::std::default::Default::default))
      }
      "delivery_annotations" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      "send_settled" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.send_settled)
      }
      "stream_name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.stream_name)
      }
      "timestamp" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.timestamp)
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
pub struct RabbitStreams_DeliveryAnnotationsEntry {
  pub key: ::std::string::String,
  pub value: ::std::string::String,
}
impl ::std::default::Default for RabbitStreams_DeliveryAnnotationsEntry {
  fn default() -> Self {
    RabbitStreams_DeliveryAnnotationsEntry {
      key: ::std::default::Default::default(),
      value: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RabbitStreams_DeliveryAnnotationsEntry_default: RabbitStreams_DeliveryAnnotationsEntry = RabbitStreams_DeliveryAnnotationsEntry::default();
}
impl ::pb_jelly::Message for RabbitStreams_DeliveryAnnotationsEntry {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RabbitStreams_DeliveryAnnotationsEntry",
      full_name: "protos.records.RabbitStreams_DeliveryAnnotationsEntry",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "key",
          full_name: "protos.records.RabbitStreams_DeliveryAnnotationsEntry.key",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "value",
          full_name: "protos.records.RabbitStreams_DeliveryAnnotationsEntry.value",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitStreams_DeliveryAnnotationsEntry", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.key = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "RabbitStreams_DeliveryAnnotationsEntry", 2)?;
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
impl ::pb_jelly::Reflection for RabbitStreams_DeliveryAnnotationsEntry {
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

#[derive(Clone, Copy, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct RabbitStreamsHeader {
  pub durable: bool,
  pub priority: u32,
  pub ttl: i64,
  pub first_acquirer: bool,
  pub delivery_count: u32,
}
impl ::std::default::Default for RabbitStreamsHeader {
  fn default() -> Self {
    RabbitStreamsHeader {
      durable: ::std::default::Default::default(),
      priority: ::std::default::Default::default(),
      ttl: ::std::default::Default::default(),
      first_acquirer: ::std::default::Default::default(),
      delivery_count: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref RabbitStreamsHeader_default: RabbitStreamsHeader = RabbitStreamsHeader::default();
}
impl ::pb_jelly::Message for RabbitStreamsHeader {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "RabbitStreamsHeader",
      full_name: "protos.records.RabbitStreamsHeader",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "durable",
          full_name: "protos.records.RabbitStreamsHeader.durable",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "priority",
          full_name: "protos.records.RabbitStreamsHeader.priority",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "ttl",
          full_name: "protos.records.RabbitStreamsHeader.ttl",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "first_acquirer",
          full_name: "protos.records.RabbitStreamsHeader.first_acquirer",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "delivery_count",
          full_name: "protos.records.RabbitStreamsHeader.delivery_count",
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
    let mut durable_size = 0;
    if self.durable != <bool as ::std::default::Default>::default() {
      let val = &self.durable;
      let l = ::pb_jelly::Message::compute_size(val);
      durable_size += ::pb_jelly::wire_format::serialized_length(1);
      durable_size += l;
    }
    size += durable_size;
    let mut priority_size = 0;
    if self.priority != <u32 as ::std::default::Default>::default() {
      let val = &self.priority;
      let l = ::pb_jelly::Message::compute_size(val);
      priority_size += ::pb_jelly::wire_format::serialized_length(2);
      priority_size += l;
    }
    size += priority_size;
    let mut ttl_size = 0;
    if self.ttl != <i64 as ::std::default::Default>::default() {
      let val = &self.ttl;
      let l = ::pb_jelly::Message::compute_size(val);
      ttl_size += ::pb_jelly::wire_format::serialized_length(3);
      ttl_size += l;
    }
    size += ttl_size;
    let mut first_acquirer_size = 0;
    if self.first_acquirer != <bool as ::std::default::Default>::default() {
      let val = &self.first_acquirer;
      let l = ::pb_jelly::Message::compute_size(val);
      first_acquirer_size += ::pb_jelly::wire_format::serialized_length(4);
      first_acquirer_size += l;
    }
    size += first_acquirer_size;
    let mut delivery_count_size = 0;
    if self.delivery_count != <u32 as ::std::default::Default>::default() {
      let val = &self.delivery_count;
      let l = ::pb_jelly::Message::compute_size(val);
      delivery_count_size += ::pb_jelly::wire_format::serialized_length(5);
      delivery_count_size += l;
    }
    size += delivery_count_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.durable != <bool as ::std::default::Default>::default() {
      let val = &self.durable;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.priority != <u32 as ::std::default::Default>::default() {
      let val = &self.priority;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.ttl != <i64 as ::std::default::Default>::default() {
      let val = &self.ttl;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.first_acquirer != <bool as ::std::default::Default>::default() {
      let val = &self.first_acquirer;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.delivery_count != <u32 as ::std::default::Default>::default() {
      let val = &self.delivery_count;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.durable != <bool as ::std::default::Default>::default() {
      let val = &self.durable;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.priority != <u32 as ::std::default::Default>::default() {
      let val = &self.priority;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.ttl != <i64 as ::std::default::Default>::default() {
      let val = &self.ttl;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.first_acquirer != <bool as ::std::default::Default>::default() {
      let val = &self.first_acquirer;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.delivery_count != <u32 as ::std::default::Default>::default() {
      let val = &self.delivery_count;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitStreamsHeader", 1)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.durable = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitStreamsHeader", 2)?;
          let mut val: u32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.priority = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitStreamsHeader", 3)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.ttl = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitStreamsHeader", 4)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.first_acquirer = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "RabbitStreamsHeader", 5)?;
          let mut val: u32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.delivery_count = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for RabbitStreamsHeader {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "durable" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.durable)
      }
      "priority" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.priority)
      }
      "ttl" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.ttl)
      }
      "first_acquirer" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.first_acquirer)
      }
      "delivery_count" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.delivery_count)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

