// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct AWSKinesis {
  pub partition_key: ::std::string::String,
  pub sequence_number: ::std::string::String,
  pub encryption_type: ::std::string::String,
  pub shard_id: ::std::string::String,
  pub value: ::std::vec::Vec<u8>,
}
impl ::std::default::Default for AWSKinesis {
  fn default() -> Self {
    AWSKinesis {
      partition_key: ::std::default::Default::default(),
      sequence_number: ::std::default::Default::default(),
      encryption_type: ::std::default::Default::default(),
      shard_id: ::std::default::Default::default(),
      value: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref AWSKinesis_default: AWSKinesis = AWSKinesis::default();
}
impl ::pb_jelly::Message for AWSKinesis {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AWSKinesis",
      full_name: "protos.records.AWSKinesis",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "partition_key",
          full_name: "protos.records.AWSKinesis.partition_key",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "sequence_number",
          full_name: "protos.records.AWSKinesis.sequence_number",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "encryption_type",
          full_name: "protos.records.AWSKinesis.encryption_type",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "shard_id",
          full_name: "protos.records.AWSKinesis.shard_id",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "value",
          full_name: "protos.records.AWSKinesis.value",
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
    let mut partition_key_size = 0;
    if self.partition_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.partition_key;
      let l = ::pb_jelly::Message::compute_size(val);
      partition_key_size += ::pb_jelly::wire_format::serialized_length(1);
      partition_key_size += ::pb_jelly::varint::serialized_length(l as u64);
      partition_key_size += l;
    }
    size += partition_key_size;
    let mut sequence_number_size = 0;
    if self.sequence_number != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.sequence_number;
      let l = ::pb_jelly::Message::compute_size(val);
      sequence_number_size += ::pb_jelly::wire_format::serialized_length(2);
      sequence_number_size += ::pb_jelly::varint::serialized_length(l as u64);
      sequence_number_size += l;
    }
    size += sequence_number_size;
    let mut encryption_type_size = 0;
    if self.encryption_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.encryption_type;
      let l = ::pb_jelly::Message::compute_size(val);
      encryption_type_size += ::pb_jelly::wire_format::serialized_length(3);
      encryption_type_size += ::pb_jelly::varint::serialized_length(l as u64);
      encryption_type_size += l;
    }
    size += encryption_type_size;
    let mut shard_id_size = 0;
    if self.shard_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.shard_id;
      let l = ::pb_jelly::Message::compute_size(val);
      shard_id_size += ::pb_jelly::wire_format::serialized_length(4);
      shard_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      shard_id_size += l;
    }
    size += shard_id_size;
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
    if self.partition_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.partition_key;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.sequence_number != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.sequence_number;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.encryption_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.encryption_type;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.shard_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.shard_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.value != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.value;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.partition_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.partition_key;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.sequence_number != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.sequence_number;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.encryption_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.encryption_type;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.shard_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.shard_id;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSKinesis", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.partition_key = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSKinesis", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.sequence_number = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSKinesis", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.encryption_type = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSKinesis", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.shard_id = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSKinesis", 5)?;
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
impl ::pb_jelly::Reflection for AWSKinesis {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "partition_key" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.partition_key)
      }
      "sequence_number" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.sequence_number)
      }
      "encryption_type" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.encryption_type)
      }
      "shard_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.shard_id)
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

