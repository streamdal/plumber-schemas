// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct AzureEventHubConn {
  /// @gotags: kong:"help='Connection string',env='EVENTHUB_CONNECTION_STRING',required"
  pub connection_string: ::std::string::String,
}
impl ::std::default::Default for AzureEventHubConn {
  fn default() -> Self {
    AzureEventHubConn {
      connection_string: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref AzureEventHubConn_default: AzureEventHubConn = AzureEventHubConn::default();
}
impl ::pb_jelly::Message for AzureEventHubConn {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AzureEventHubConn",
      full_name: "protos.args.AzureEventHubConn",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "connection_string",
          full_name: "protos.args.AzureEventHubConn.connection_string",
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
    let mut connection_string_size = 0;
    if self.connection_string != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_string;
      let l = ::pb_jelly::Message::compute_size(val);
      connection_string_size += ::pb_jelly::wire_format::serialized_length(1);
      connection_string_size += ::pb_jelly::varint::serialized_length(l as u64);
      connection_string_size += l;
    }
    size += connection_string_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.connection_string != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_string;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.connection_string != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.connection_string;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureEventHubConn", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.connection_string = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for AzureEventHubConn {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "connection_string" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.connection_string)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

/// None
#[derive(Clone, Copy, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct AzureEventHubReadArgs {
}
impl ::std::default::Default for AzureEventHubReadArgs {
  fn default() -> Self {
    AzureEventHubReadArgs {
    }
  }
}
lazy_static! {
  pub static ref AzureEventHubReadArgs_default: AzureEventHubReadArgs = AzureEventHubReadArgs::default();
}
impl ::pb_jelly::Message for AzureEventHubReadArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AzureEventHubReadArgs",
      full_name: "protos.args.AzureEventHubReadArgs",
      fields: &[
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    0
  }
  fn compute_grpc_slices_size(&self) -> usize {
    0
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for AzureEventHubReadArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct AzureEventHubWriteArgs {
  /// @gotags: kong:"help='Send message with this ID'"
  pub message_id: ::std::string::String,
  /// @gotags: kong:"help='Send message with this partition key'"
  pub partition_key: ::std::string::String,
}
impl ::std::default::Default for AzureEventHubWriteArgs {
  fn default() -> Self {
    AzureEventHubWriteArgs {
      message_id: ::std::default::Default::default(),
      partition_key: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref AzureEventHubWriteArgs_default: AzureEventHubWriteArgs = AzureEventHubWriteArgs::default();
}
impl ::pb_jelly::Message for AzureEventHubWriteArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AzureEventHubWriteArgs",
      full_name: "protos.args.AzureEventHubWriteArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "message_id",
          full_name: "protos.args.AzureEventHubWriteArgs.message_id",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "partition_key",
          full_name: "protos.args.AzureEventHubWriteArgs.partition_key",
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
    let mut message_id_size = 0;
    if self.message_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message_id;
      let l = ::pb_jelly::Message::compute_size(val);
      message_id_size += ::pb_jelly::wire_format::serialized_length(1);
      message_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      message_id_size += l;
    }
    size += message_id_size;
    let mut partition_key_size = 0;
    if self.partition_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.partition_key;
      let l = ::pb_jelly::Message::compute_size(val);
      partition_key_size += ::pb_jelly::wire_format::serialized_length(2);
      partition_key_size += ::pb_jelly::varint::serialized_length(l as u64);
      partition_key_size += l;
    }
    size += partition_key_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.message_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.partition_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.partition_key;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.message_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message_id;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.partition_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.partition_key;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureEventHubWriteArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.message_id = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureEventHubWriteArgs", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.partition_key = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for AzureEventHubWriteArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "message_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.message_id)
      }
      "partition_key" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.partition_key)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

