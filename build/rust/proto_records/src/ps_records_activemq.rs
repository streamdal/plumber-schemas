// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct ActiveMQ {
  pub destination: ::std::string::String,
  pub content_type: ::std::string::String,
  pub subscription_id: ::std::string::String,
  pub timestamp: i64,
  pub value: ::std::vec::Vec<u8>,
}
impl ::std::default::Default for ActiveMQ {
  fn default() -> Self {
    ActiveMQ {
      destination: ::std::default::Default::default(),
      content_type: ::std::default::Default::default(),
      subscription_id: ::std::default::Default::default(),
      timestamp: ::std::default::Default::default(),
      value: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ActiveMQ_default: ActiveMQ = ActiveMQ::default();
}
impl ::pb_jelly::Message for ActiveMQ {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ActiveMQ",
      full_name: "protos.records.ActiveMQ",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "destination",
          full_name: "protos.records.ActiveMQ.destination",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "content_type",
          full_name: "protos.records.ActiveMQ.content_type",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "subscription_id",
          full_name: "protos.records.ActiveMQ.subscription_id",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "timestamp",
          full_name: "protos.records.ActiveMQ.timestamp",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "value",
          full_name: "protos.records.ActiveMQ.value",
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
    let mut destination_size = 0;
    if self.destination != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.destination;
      let l = ::pb_jelly::Message::compute_size(val);
      destination_size += ::pb_jelly::wire_format::serialized_length(1);
      destination_size += ::pb_jelly::varint::serialized_length(l as u64);
      destination_size += l;
    }
    size += destination_size;
    let mut content_type_size = 0;
    if self.content_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.content_type;
      let l = ::pb_jelly::Message::compute_size(val);
      content_type_size += ::pb_jelly::wire_format::serialized_length(2);
      content_type_size += ::pb_jelly::varint::serialized_length(l as u64);
      content_type_size += l;
    }
    size += content_type_size;
    let mut subscription_id_size = 0;
    if self.subscription_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.subscription_id;
      let l = ::pb_jelly::Message::compute_size(val);
      subscription_id_size += ::pb_jelly::wire_format::serialized_length(3);
      subscription_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      subscription_id_size += l;
    }
    size += subscription_id_size;
    let mut timestamp_size = 0;
    if self.timestamp != <i64 as ::std::default::Default>::default() {
      let val = &self.timestamp;
      let l = ::pb_jelly::Message::compute_size(val);
      timestamp_size += ::pb_jelly::wire_format::serialized_length(4);
      timestamp_size += l;
    }
    size += timestamp_size;
    let mut value_size = 0;
    if self.value != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.value;
      let l = ::pb_jelly::Message::compute_size(val);
      value_size += ::pb_jelly::wire_format::serialized_length(5);
      value_size += ::pb_jelly::varint::serialized_length(l as u64);
      value_size += l;
    }
    size += value_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.destination != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.destination;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.content_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.content_type;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.subscription_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.subscription_id;
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
    if self.destination != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.destination;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.content_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.content_type;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.subscription_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.subscription_id;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.timestamp != <i64 as ::std::default::Default>::default() {
      let val = &self.timestamp;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.value != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.value;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ActiveMQ", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.destination = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ActiveMQ", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.content_type = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ActiveMQ", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.subscription_id = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "ActiveMQ", 4)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.timestamp = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ActiveMQ", 5)?;
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
impl ::pb_jelly::Reflection for ActiveMQ {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "destination" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.destination)
      }
      "content_type" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.content_type)
      }
      "subscription_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.subscription_id)
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

