// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct MongoConn {
  /// @gotags: kong:"help='Dial string for mongo server (Ex: mongodb://localhost:27017)',env='PLUMBER_RELAY_CDCMONGO_DSN',default='mongodb://localhost:27017'"
  pub dsn: ::std::string::String,
}
impl ::std::default::Default for MongoConn {
  fn default() -> Self {
    MongoConn {
      dsn: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref MongoConn_default: MongoConn = MongoConn::default();
}
impl ::pb_jelly::Message for MongoConn {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "MongoConn",
      full_name: "protos.args.MongoConn",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "dsn",
          full_name: "protos.args.MongoConn.dsn",
          index: 0,
          number: 1,
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
    let mut dsn_size = 0;
    if self.dsn != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.dsn;
      let l = ::pb_jelly::Message::compute_size(val);
      dsn_size += ::pb_jelly::wire_format::serialized_length(1);
      dsn_size += ::pb_jelly::varint::serialized_length(l as u64);
      dsn_size += l;
    }
    size += dsn_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.dsn != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.dsn;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.dsn != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.dsn;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "MongoConn", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.dsn = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for MongoConn {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "dsn" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.dsn)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct MongoReadArgs {
  /// @gotags: kong:"help='Database name',env='PLUMBER_RELAY_CDCMONGO_DATABASE'"
  pub database: ::std::string::String,
  /// @gotags: kong:"help='Collection name',env='PLUMBER_RELAY_CDCMONGO_COLLECTION'"
  pub collection: ::std::string::String,
  /// @gotags: kong:"help='Include full document in update in update changes (default - return deltas only)',env='PLUMBER_RELAY_CDCMONGO_INCLUDE_FULL_DOC'"
  pub include_full_document: bool,
}
impl ::std::default::Default for MongoReadArgs {
  fn default() -> Self {
    MongoReadArgs {
      database: ::std::default::Default::default(),
      collection: ::std::default::Default::default(),
      include_full_document: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref MongoReadArgs_default: MongoReadArgs = MongoReadArgs::default();
}
impl ::pb_jelly::Message for MongoReadArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "MongoReadArgs",
      full_name: "protos.args.MongoReadArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "database",
          full_name: "protos.args.MongoReadArgs.database",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "collection",
          full_name: "protos.args.MongoReadArgs.collection",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "include_full_document",
          full_name: "protos.args.MongoReadArgs.include_full_document",
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
    let mut database_size = 0;
    if self.database != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.database;
      let l = ::pb_jelly::Message::compute_size(val);
      database_size += ::pb_jelly::wire_format::serialized_length(1);
      database_size += ::pb_jelly::varint::serialized_length(l as u64);
      database_size += l;
    }
    size += database_size;
    let mut collection_size = 0;
    if self.collection != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.collection;
      let l = ::pb_jelly::Message::compute_size(val);
      collection_size += ::pb_jelly::wire_format::serialized_length(2);
      collection_size += ::pb_jelly::varint::serialized_length(l as u64);
      collection_size += l;
    }
    size += collection_size;
    let mut include_full_document_size = 0;
    if self.include_full_document != <bool as ::std::default::Default>::default() {
      let val = &self.include_full_document;
      let l = ::pb_jelly::Message::compute_size(val);
      include_full_document_size += ::pb_jelly::wire_format::serialized_length(3);
      include_full_document_size += l;
    }
    size += include_full_document_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.database != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.database;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.collection != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.collection;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.include_full_document != <bool as ::std::default::Default>::default() {
      let val = &self.include_full_document;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.database != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.database;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.collection != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.collection;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.include_full_document != <bool as ::std::default::Default>::default() {
      let val = &self.include_full_document;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "MongoReadArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.database = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "MongoReadArgs", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.collection = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "MongoReadArgs", 3)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.include_full_document = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for MongoReadArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "database" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.database)
      }
      "collection" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.collection)
      }
      "include_full_document" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.include_full_document)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

