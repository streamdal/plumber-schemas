// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct AzureEventHub {
  pub id: ::std::string::String,
  pub system_properties: ::std::vec::Vec<AzureEventHub_SystemPropertiesEntry>,
  pub timestamp: i64,
  pub value: ::std::vec::Vec<u8>,
}
impl ::std::default::Default for AzureEventHub {
  fn default() -> Self {
    AzureEventHub {
      id: ::std::default::Default::default(),
      system_properties: ::std::default::Default::default(),
      timestamp: ::std::default::Default::default(),
      value: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref AzureEventHub_default: AzureEventHub = AzureEventHub::default();
}
impl ::pb_jelly::Message for AzureEventHub {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AzureEventHub",
      full_name: "protos.records.AzureEventHub",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "id",
          full_name: "protos.records.AzureEventHub.id",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "system_properties",
          full_name: "protos.records.AzureEventHub.system_properties",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Repeated,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "timestamp",
          full_name: "protos.records.AzureEventHub.timestamp",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "value",
          full_name: "protos.records.AzureEventHub.value",
          index: 3,
          number: 4,
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
    let mut id_size = 0;
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      let l = ::pb_jelly::Message::compute_size(val);
      id_size += ::pb_jelly::wire_format::serialized_length(1);
      id_size += ::pb_jelly::varint::serialized_length(l as u64);
      id_size += l;
    }
    size += id_size;
    let mut system_properties_size = 0;
    for val in &self.system_properties {
      let l = ::pb_jelly::Message::compute_size(val);
      system_properties_size += ::pb_jelly::wire_format::serialized_length(2);
      system_properties_size += ::pb_jelly::varint::serialized_length(l as u64);
      system_properties_size += l;
    }
    size += system_properties_size;
    let mut timestamp_size = 0;
    if self.timestamp != <i64 as ::std::default::Default>::default() {
      let val = &self.timestamp;
      let l = ::pb_jelly::Message::compute_size(val);
      timestamp_size += ::pb_jelly::wire_format::serialized_length(3);
      timestamp_size += l;
    }
    size += timestamp_size;
    let mut value_size = 0;
    if self.value != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.value;
      let l = ::pb_jelly::Message::compute_size(val);
      value_size += ::pb_jelly::wire_format::serialized_length(4);
      value_size += ::pb_jelly::varint::serialized_length(l as u64);
      value_size += l;
    }
    size += value_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.system_properties {
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
    if self.id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.id;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.system_properties {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.timestamp != <i64 as ::std::default::Default>::default() {
      let val = &self.timestamp;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.value != <::std::vec::Vec<u8> as ::std::default::Default>::default() {
      let val = &self.value;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureEventHub", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.id = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureEventHub", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: AzureEventHub_SystemPropertiesEntry = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.system_properties.push(val);
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "AzureEventHub", 3)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.timestamp = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureEventHub", 4)?;
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
impl ::pb_jelly::Reflection for AzureEventHub {
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
      "system_properties" => {
        unimplemented!("Repeated fields are not currently supported.")
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
pub struct AzureEventHub_SystemPropertiesEntry {
  pub key: ::std::string::String,
  pub value: ::std::string::String,
}
impl ::std::default::Default for AzureEventHub_SystemPropertiesEntry {
  fn default() -> Self {
    AzureEventHub_SystemPropertiesEntry {
      key: ::std::default::Default::default(),
      value: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref AzureEventHub_SystemPropertiesEntry_default: AzureEventHub_SystemPropertiesEntry = AzureEventHub_SystemPropertiesEntry::default();
}
impl ::pb_jelly::Message for AzureEventHub_SystemPropertiesEntry {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AzureEventHub_SystemPropertiesEntry",
      full_name: "protos.records.AzureEventHub_SystemPropertiesEntry",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "key",
          full_name: "protos.records.AzureEventHub_SystemPropertiesEntry.key",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "value",
          full_name: "protos.records.AzureEventHub_SystemPropertiesEntry.value",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureEventHub_SystemPropertiesEntry", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.key = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureEventHub_SystemPropertiesEntry", 2)?;
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
impl ::pb_jelly::Reflection for AzureEventHub_SystemPropertiesEntry {
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

