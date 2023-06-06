// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct KubeMQ {
  pub id: ::std::string::String,
  pub client_id: ::std::string::String,
  pub channel: ::std::string::String,
  pub value: ::std::vec::Vec<u8>,
  pub timestamp: i64,
  pub sequence: i64,
}
impl ::std::default::Default for KubeMQ {
  fn default() -> Self {
    KubeMQ {
      id: ::std::default::Default::default(),
      client_id: ::std::default::Default::default(),
      channel: ::std::default::Default::default(),
      value: ::std::default::Default::default(),
      timestamp: ::std::default::Default::default(),
      sequence: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref KubeMQ_default: KubeMQ = KubeMQ::default();
}
impl ::pb_jelly::Message for KubeMQ {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "KubeMQ",
      full_name: "protos.records.KubeMQ",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "id",
          full_name: "protos.records.KubeMQ.id",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "client_id",
          full_name: "protos.records.KubeMQ.client_id",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "channel",
          full_name: "protos.records.KubeMQ.channel",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "value",
          full_name: "protos.records.KubeMQ.value",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "timestamp",
          full_name: "protos.records.KubeMQ.timestamp",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "sequence",
          full_name: "protos.records.KubeMQ.sequence",
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
    let mut id_size = 0;
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      let l = ::pb_jelly::Message::compute_size(val);
      id_size += ::pb_jelly::wire_format::serialized_length(1);
      id_size += ::pb_jelly::varint::serialized_length(l as u64);
      id_size += l;
    }
    size += id_size;
    let mut client_id_size = 0;
    if self.client_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.client_id;
      let l = ::pb_jelly::Message::compute_size(val);
      client_id_size += ::pb_jelly::wire_format::serialized_length(2);
      client_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      client_id_size += l;
    }
    size += client_id_size;
    let mut channel_size = 0;
    if self.channel != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.channel;
      let l = ::pb_jelly::Message::compute_size(val);
      channel_size += ::pb_jelly::wire_format::serialized_length(3);
      channel_size += ::pb_jelly::varint::serialized_length(l as u64);
      channel_size += l;
    }
    size += channel_size;
    let mut value_size = 0;
    if self.value != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.value;
      let l = ::pb_jelly::Message::compute_size(val);
      value_size += ::pb_jelly::wire_format::serialized_length(4);
      value_size += ::pb_jelly::varint::serialized_length(l as u64);
      value_size += l;
    }
    size += value_size;
    let mut timestamp_size = 0;
    if self.timestamp != <i64 as ::std::default::Default>::default() {
      let val = &self.timestamp;
      let l = ::pb_jelly::Message::compute_size(val);
      timestamp_size += ::pb_jelly::wire_format::serialized_length(5);
      timestamp_size += l;
    }
    size += timestamp_size;
    let mut sequence_size = 0;
    if self.sequence != <i64 as ::std::default::Default>::default() {
      let val = &self.sequence;
      let l = ::pb_jelly::Message::compute_size(val);
      sequence_size += ::pb_jelly::wire_format::serialized_length(6);
      sequence_size += l;
    }
    size += sequence_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.client_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.client_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.channel != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.channel;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.value != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.value;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.timestamp != <i64 as ::std::default::Default>::default() {
      let val = &self.timestamp;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.sequence != <i64 as ::std::default::Default>::default() {
      let val = &self.sequence;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.client_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.client_id;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.channel != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.channel;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.value != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.value;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.timestamp != <i64 as ::std::default::Default>::default() {
      let val = &self.timestamp;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.sequence != <i64 as ::std::default::Default>::default() {
      let val = &self.sequence;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "KubeMQ", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.id = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "KubeMQ", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.client_id = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "KubeMQ", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.channel = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "KubeMQ", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::vec::Vec<u8> = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.value = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KubeMQ", 5)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.timestamp = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "KubeMQ", 6)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.sequence = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for KubeMQ {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.id)
      }
      "client_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.client_id)
      }
      "channel" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.channel)
      }
      "value" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.value)
      }
      "timestamp" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.timestamp)
      }
      "sequence" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.sequence)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

