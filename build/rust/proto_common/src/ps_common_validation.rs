// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct Validation {
  pub _id: ::std::string::String,
  pub schema_id: ::std::string::String,
  pub fields: ::std::vec::Vec<Validation_Field>,
}
impl ::std::default::Default for Validation {
  fn default() -> Self {
    Validation {
      _id: ::std::default::Default::default(),
      schema_id: ::std::default::Default::default(),
      fields: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref Validation_default: Validation = Validation::default();
}
impl ::pb_jelly::Message for Validation {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "Validation",
      full_name: "protos.common.Validation",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "_id",
          full_name: "protos.common.Validation._id",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "schema_id",
          full_name: "protos.common.Validation.schema_id",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "fields",
          full_name: "protos.common.Validation.fields",
          index: 2,
          number: 3,
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
    let mut _id_size = 0;
    if self._id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._id;
      let l = ::pb_jelly::Message::compute_size(val);
      _id_size += ::pb_jelly::wire_format::serialized_length(1);
      _id_size += ::pb_jelly::varint::serialized_length(l as u64);
      _id_size += l;
    }
    size += _id_size;
    let mut schema_id_size = 0;
    if self.schema_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.schema_id;
      let l = ::pb_jelly::Message::compute_size(val);
      schema_id_size += ::pb_jelly::wire_format::serialized_length(2);
      schema_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      schema_id_size += l;
    }
    size += schema_id_size;
    let mut fields_size = 0;
    for val in &self.fields {
      let l = ::pb_jelly::Message::compute_size(val);
      fields_size += ::pb_jelly::wire_format::serialized_length(3);
      fields_size += ::pb_jelly::varint::serialized_length(l as u64);
      fields_size += l;
    }
    size += fields_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self._id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.schema_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.schema_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.fields {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self._id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._id;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.schema_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.schema_id;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.fields {
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Validation", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._id = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Validation", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.schema_id = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Validation", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: Validation_Field = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.fields.push(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for Validation {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._id)
      }
      "schema_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.schema_id)
      }
      "fields" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct Validation_Field {
  /// path in our jsonquery filter syntax
  pub path: ::std::string::String,
  /// https://github.com/batchcorp/lucene2x/blob/55f43862dfc294d5594758cba6a5c0ba088c0040/jsonquery/validate.go#L22
  pub validation_type: ::std::string::String,
  /// For Regex / HasPrefix / HasSuffix / StringContains validation types only. Ignored for all others
  pub match_value: ::std::string::String,
}
impl ::std::default::Default for Validation_Field {
  fn default() -> Self {
    Validation_Field {
      path: ::std::default::Default::default(),
      validation_type: ::std::default::Default::default(),
      match_value: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref Validation_Field_default: Validation_Field = Validation_Field::default();
}
impl ::pb_jelly::Message for Validation_Field {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "Validation_Field",
      full_name: "protos.common.Validation_Field",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "path",
          full_name: "protos.common.Validation_Field.path",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "validation_type",
          full_name: "protos.common.Validation_Field.validation_type",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "match_value",
          full_name: "protos.common.Validation_Field.match_value",
          index: 2,
          number: 3,
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
    let mut path_size = 0;
    if self.path != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.path;
      let l = ::pb_jelly::Message::compute_size(val);
      path_size += ::pb_jelly::wire_format::serialized_length(1);
      path_size += ::pb_jelly::varint::serialized_length(l as u64);
      path_size += l;
    }
    size += path_size;
    let mut validation_type_size = 0;
    if self.validation_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.validation_type;
      let l = ::pb_jelly::Message::compute_size(val);
      validation_type_size += ::pb_jelly::wire_format::serialized_length(2);
      validation_type_size += ::pb_jelly::varint::serialized_length(l as u64);
      validation_type_size += l;
    }
    size += validation_type_size;
    let mut match_value_size = 0;
    if self.match_value != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.match_value;
      let l = ::pb_jelly::Message::compute_size(val);
      match_value_size += ::pb_jelly::wire_format::serialized_length(3);
      match_value_size += ::pb_jelly::varint::serialized_length(l as u64);
      match_value_size += l;
    }
    size += match_value_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.path != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.path;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.validation_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.validation_type;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.match_value != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.match_value;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.path != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.path;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.validation_type != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.validation_type;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.match_value != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.match_value;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Validation_Field", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.path = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Validation_Field", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.validation_type = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Validation_Field", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.match_value = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for Validation_Field {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "path" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.path)
      }
      "validation_type" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.validation_type)
      }
      "match_value" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.match_value)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

