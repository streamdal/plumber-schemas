// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct NatsJetstream {
  pub stream: ::std::string::String,
  pub value: ::std::vec::Vec<u8>,
  pub consumer_name: ::std::string::String,
  pub sequence: i64,
}
impl ::std::default::Default for NatsJetstream {
  fn default() -> Self {
    NatsJetstream {
      stream: ::std::default::Default::default(),
      value: ::std::default::Default::default(),
      consumer_name: ::std::default::Default::default(),
      sequence: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref NatsJetstream_default: NatsJetstream = NatsJetstream::default();
}
impl ::pb_jelly::Message for NatsJetstream {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "NatsJetstream",
      full_name: "protos.records.NatsJetstream",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "stream",
          full_name: "protos.records.NatsJetstream.stream",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "value",
          full_name: "protos.records.NatsJetstream.value",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "consumer_name",
          full_name: "protos.records.NatsJetstream.consumer_name",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "sequence",
          full_name: "protos.records.NatsJetstream.sequence",
          index: 3,
          number: 4,
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
    let mut stream_size = 0;
    if self.stream != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.stream;
      let l = ::pb_jelly::Message::compute_size(val);
      stream_size += ::pb_jelly::wire_format::serialized_length(1);
      stream_size += ::pb_jelly::varint::serialized_length(l as u64);
      stream_size += l;
    }
    size += stream_size;
    let mut value_size = 0;
    if self.value != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.value;
      let l = ::pb_jelly::Message::compute_size(val);
      value_size += ::pb_jelly::wire_format::serialized_length(2);
      value_size += ::pb_jelly::varint::serialized_length(l as u64);
      value_size += l;
    }
    size += value_size;
    let mut consumer_name_size = 0;
    if self.consumer_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_name;
      let l = ::pb_jelly::Message::compute_size(val);
      consumer_name_size += ::pb_jelly::wire_format::serialized_length(3);
      consumer_name_size += ::pb_jelly::varint::serialized_length(l as u64);
      consumer_name_size += l;
    }
    size += consumer_name_size;
    let mut sequence_size = 0;
    if self.sequence != <i64 as ::std::default::Default>::default() {
      let val = &self.sequence;
      let l = ::pb_jelly::Message::compute_size(val);
      sequence_size += ::pb_jelly::wire_format::serialized_length(4);
      sequence_size += l;
    }
    size += sequence_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.stream != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.stream;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.value != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.value;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.consumer_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.sequence != <i64 as ::std::default::Default>::default() {
      let val = &self.sequence;
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
    if self.value != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.value;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.consumer_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_name;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.sequence != <i64 as ::std::default::Default>::default() {
      let val = &self.sequence;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsJetstream", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.stream = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsJetstream", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::vec::Vec<u8> = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.value = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "NatsJetstream", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.consumer_name = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "NatsJetstream", 4)?;
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
impl ::pb_jelly::Reflection for NatsJetstream {
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
      "value" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.value)
      }
      "consumer_name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.consumer_name)
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

