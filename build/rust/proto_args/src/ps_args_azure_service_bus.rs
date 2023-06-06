// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct AzureServiceBusConn {
  /// NOTE: This is an azure-defined env var
  /// @gotags: kong:"help='Connection string',env='SERVICEBUS_CONNECTION_STRING',required"
  pub connection_string: ::std::string::String,
}
impl ::std::default::Default for AzureServiceBusConn {
  fn default() -> Self {
    AzureServiceBusConn {
      connection_string: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref AzureServiceBusConn_default: AzureServiceBusConn = AzureServiceBusConn::default();
}
impl ::pb_jelly::Message for AzureServiceBusConn {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AzureServiceBusConn",
      full_name: "protos.args.AzureServiceBusConn",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "connection_string",
          full_name: "protos.args.AzureServiceBusConn.connection_string",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureServiceBusConn", 1)?;
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
impl ::pb_jelly::Reflection for AzureServiceBusConn {
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

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct AzureServiceBusReadArgs {
  /// @gotags: kong:"help='Queue name',env='PLUMBER_RELAY_AZURE_QUEUE_NAME',xor=asb_read"
  pub queue: ::std::string::String,
  /// @gotags: kong:"help='Topic name',env='PLUMBER_RELAY_AZURE_TOPIC_NAME',xor=asb_read"
  pub topic: ::std::string::String,
  /// @gotags: kong:"help='Subscription name',env='PLUMBER_RELAY_AZURE_SUBSCRIPTION',required"
  pub subscription_name: ::std::string::String,
}
impl ::std::default::Default for AzureServiceBusReadArgs {
  fn default() -> Self {
    AzureServiceBusReadArgs {
      queue: ::std::default::Default::default(),
      topic: ::std::default::Default::default(),
      subscription_name: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref AzureServiceBusReadArgs_default: AzureServiceBusReadArgs = AzureServiceBusReadArgs::default();
}
impl ::pb_jelly::Message for AzureServiceBusReadArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AzureServiceBusReadArgs",
      full_name: "protos.args.AzureServiceBusReadArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "queue",
          full_name: "protos.args.AzureServiceBusReadArgs.queue",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "topic",
          full_name: "protos.args.AzureServiceBusReadArgs.topic",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "subscription_name",
          full_name: "protos.args.AzureServiceBusReadArgs.subscription_name",
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
    let mut queue_size = 0;
    if self.queue != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.queue;
      let l = ::pb_jelly::Message::compute_size(val);
      queue_size += ::pb_jelly::wire_format::serialized_length(1);
      queue_size += ::pb_jelly::varint::serialized_length(l as u64);
      queue_size += l;
    }
    size += queue_size;
    let mut topic_size = 0;
    if self.topic != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic;
      let l = ::pb_jelly::Message::compute_size(val);
      topic_size += ::pb_jelly::wire_format::serialized_length(2);
      topic_size += ::pb_jelly::varint::serialized_length(l as u64);
      topic_size += l;
    }
    size += topic_size;
    let mut subscription_name_size = 0;
    if self.subscription_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.subscription_name;
      let l = ::pb_jelly::Message::compute_size(val);
      subscription_name_size += ::pb_jelly::wire_format::serialized_length(3);
      subscription_name_size += ::pb_jelly::varint::serialized_length(l as u64);
      subscription_name_size += l;
    }
    size += subscription_name_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.queue != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.queue;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.topic != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.subscription_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.subscription_name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.queue != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.queue;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.topic != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.subscription_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.subscription_name;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureServiceBusReadArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.queue = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureServiceBusReadArgs", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.topic = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureServiceBusReadArgs", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.subscription_name = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for AzureServiceBusReadArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "queue" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.queue)
      }
      "topic" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.topic)
      }
      "subscription_name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.subscription_name)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct AzureServiceBusWriteArgs {
  /// @gotags: kong:"help='Queue name',xor=asb_write"
  pub queue: ::std::string::String,
  /// @gotags: kong:"help='Topic name',xor=asb_write"
  pub topic: ::std::string::String,
}
impl ::std::default::Default for AzureServiceBusWriteArgs {
  fn default() -> Self {
    AzureServiceBusWriteArgs {
      queue: ::std::default::Default::default(),
      topic: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref AzureServiceBusWriteArgs_default: AzureServiceBusWriteArgs = AzureServiceBusWriteArgs::default();
}
impl ::pb_jelly::Message for AzureServiceBusWriteArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AzureServiceBusWriteArgs",
      full_name: "protos.args.AzureServiceBusWriteArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "queue",
          full_name: "protos.args.AzureServiceBusWriteArgs.queue",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "topic",
          full_name: "protos.args.AzureServiceBusWriteArgs.topic",
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
    let mut queue_size = 0;
    if self.queue != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.queue;
      let l = ::pb_jelly::Message::compute_size(val);
      queue_size += ::pb_jelly::wire_format::serialized_length(1);
      queue_size += ::pb_jelly::varint::serialized_length(l as u64);
      queue_size += l;
    }
    size += queue_size;
    let mut topic_size = 0;
    if self.topic != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic;
      let l = ::pb_jelly::Message::compute_size(val);
      topic_size += ::pb_jelly::wire_format::serialized_length(2);
      topic_size += ::pb_jelly::varint::serialized_length(l as u64);
      topic_size += l;
    }
    size += topic_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.queue != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.queue;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.topic != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.queue != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.queue;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.topic != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureServiceBusWriteArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.queue = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AzureServiceBusWriteArgs", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.topic = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for AzureServiceBusWriteArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "queue" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.queue)
      }
      "topic" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.topic)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

