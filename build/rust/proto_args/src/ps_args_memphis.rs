// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct MemphisConn {
  /// @gotags: kong:"help='Address of Memphis broker (Ex: localhost:6666)',default='localhost:6666'"
  pub address: ::std::string::String,
  /// @gotags: kong:"help='Broker username',default='plumber'"
  pub username: ::std::string::String,
  /// @gotags: kong:"help='Broker access token',default='memphis'"
  pub broker_token: ::std::string::String,
}
impl ::std::default::Default for MemphisConn {
  fn default() -> Self {
    MemphisConn {
      address: ::std::default::Default::default(),
      username: ::std::default::Default::default(),
      broker_token: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref MemphisConn_default: MemphisConn = MemphisConn::default();
}
impl ::pb_jelly::Message for MemphisConn {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "MemphisConn",
      full_name: "protos.args.MemphisConn",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "address",
          full_name: "protos.args.MemphisConn.address",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "username",
          full_name: "protos.args.MemphisConn.username",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "broker_token",
          full_name: "protos.args.MemphisConn.broker_token",
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
    let mut address_size = 0;
    if self.address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.address;
      let l = ::pb_jelly::Message::compute_size(val);
      address_size += ::pb_jelly::wire_format::serialized_length(1);
      address_size += ::pb_jelly::varint::serialized_length(l as u64);
      address_size += l;
    }
    size += address_size;
    let mut username_size = 0;
    if self.username != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.username;
      let l = ::pb_jelly::Message::compute_size(val);
      username_size += ::pb_jelly::wire_format::serialized_length(2);
      username_size += ::pb_jelly::varint::serialized_length(l as u64);
      username_size += l;
    }
    size += username_size;
    let mut broker_token_size = 0;
    if self.broker_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.broker_token;
      let l = ::pb_jelly::Message::compute_size(val);
      broker_token_size += ::pb_jelly::wire_format::serialized_length(3);
      broker_token_size += ::pb_jelly::varint::serialized_length(l as u64);
      broker_token_size += l;
    }
    size += broker_token_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.address;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.username != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.username;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.broker_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.broker_token;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.address;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.username != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.username;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.broker_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.broker_token;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "MemphisConn", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.address = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "MemphisConn", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.username = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "MemphisConn", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.broker_token = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for MemphisConn {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "address" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.address)
      }
      "username" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.username)
      }
      "broker_token" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.broker_token)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct MemphisReadArgs {
  /// @gotags: kong:"help='Station name to consume from',required"
  pub station: ::std::string::String,
  /// @gotags: kong:"help='Consumer Name',default='plumber'"
  pub consumer_name: ::std::string::String,
  /// @gotags: kong:"help='Consumer Group, defaults to consumer-name if not specified',env='PLUMBER_RELAY_MEMPHIS_CONSUMER_GROUP'"
  pub consumer_group: ::std::string::String,
}
impl ::std::default::Default for MemphisReadArgs {
  fn default() -> Self {
    MemphisReadArgs {
      station: ::std::default::Default::default(),
      consumer_name: ::std::default::Default::default(),
      consumer_group: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref MemphisReadArgs_default: MemphisReadArgs = MemphisReadArgs::default();
}
impl ::pb_jelly::Message for MemphisReadArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "MemphisReadArgs",
      full_name: "protos.args.MemphisReadArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "station",
          full_name: "protos.args.MemphisReadArgs.station",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "consumer_name",
          full_name: "protos.args.MemphisReadArgs.consumer_name",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "consumer_group",
          full_name: "protos.args.MemphisReadArgs.consumer_group",
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
    let mut station_size = 0;
    if self.station != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.station;
      let l = ::pb_jelly::Message::compute_size(val);
      station_size += ::pb_jelly::wire_format::serialized_length(1);
      station_size += ::pb_jelly::varint::serialized_length(l as u64);
      station_size += l;
    }
    size += station_size;
    let mut consumer_name_size = 0;
    if self.consumer_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_name;
      let l = ::pb_jelly::Message::compute_size(val);
      consumer_name_size += ::pb_jelly::wire_format::serialized_length(2);
      consumer_name_size += ::pb_jelly::varint::serialized_length(l as u64);
      consumer_name_size += l;
    }
    size += consumer_name_size;
    let mut consumer_group_size = 0;
    if self.consumer_group != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_group;
      let l = ::pb_jelly::Message::compute_size(val);
      consumer_group_size += ::pb_jelly::wire_format::serialized_length(3);
      consumer_group_size += ::pb_jelly::varint::serialized_length(l as u64);
      consumer_group_size += l;
    }
    size += consumer_group_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.station != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.station;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.consumer_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.consumer_group != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_group;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.station != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.station;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.consumer_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_name;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.consumer_group != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.consumer_group;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "MemphisReadArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.station = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "MemphisReadArgs", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.consumer_name = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "MemphisReadArgs", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.consumer_group = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for MemphisReadArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "station" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.station)
      }
      "consumer_name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.consumer_name)
      }
      "consumer_group" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.consumer_group)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct MemphisWriteArgs {
  /// @gotags: kong:"help='Station name to write to',required"
  pub station: ::std::string::String,
  /// @gotags: kong:"help='Producer name',default='plumber'"
  pub producer_name: ::std::string::String,
  /// @gotags: kong:"help='Add one or more headers (optional; repeat flags to specify multiple)'"
  pub headers: ::std::vec::Vec<MemphisWriteArgs_HeadersEntry>,
  /// @gotags: kong:"help='ID to give message'"
  pub message_id: ::std::string::String,
}
impl ::std::default::Default for MemphisWriteArgs {
  fn default() -> Self {
    MemphisWriteArgs {
      station: ::std::default::Default::default(),
      producer_name: ::std::default::Default::default(),
      headers: ::std::default::Default::default(),
      message_id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref MemphisWriteArgs_default: MemphisWriteArgs = MemphisWriteArgs::default();
}
impl ::pb_jelly::Message for MemphisWriteArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "MemphisWriteArgs",
      full_name: "protos.args.MemphisWriteArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "station",
          full_name: "protos.args.MemphisWriteArgs.station",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "producer_name",
          full_name: "protos.args.MemphisWriteArgs.producer_name",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "headers",
          full_name: "protos.args.MemphisWriteArgs.headers",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Repeated,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "message_id",
          full_name: "protos.args.MemphisWriteArgs.message_id",
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
    let mut station_size = 0;
    if self.station != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.station;
      let l = ::pb_jelly::Message::compute_size(val);
      station_size += ::pb_jelly::wire_format::serialized_length(1);
      station_size += ::pb_jelly::varint::serialized_length(l as u64);
      station_size += l;
    }
    size += station_size;
    let mut producer_name_size = 0;
    if self.producer_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.producer_name;
      let l = ::pb_jelly::Message::compute_size(val);
      producer_name_size += ::pb_jelly::wire_format::serialized_length(2);
      producer_name_size += ::pb_jelly::varint::serialized_length(l as u64);
      producer_name_size += l;
    }
    size += producer_name_size;
    let mut headers_size = 0;
    for val in &self.headers {
      let l = ::pb_jelly::Message::compute_size(val);
      headers_size += ::pb_jelly::wire_format::serialized_length(3);
      headers_size += ::pb_jelly::varint::serialized_length(l as u64);
      headers_size += l;
    }
    size += headers_size;
    let mut message_id_size = 0;
    if self.message_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message_id;
      let l = ::pb_jelly::Message::compute_size(val);
      message_id_size += ::pb_jelly::wire_format::serialized_length(4);
      message_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      message_id_size += l;
    }
    size += message_id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.station != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.station;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.producer_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.producer_name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.headers {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.message_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.station != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.station;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.producer_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.producer_name;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.headers {
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.message_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message_id;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "MemphisWriteArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.station = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "MemphisWriteArgs", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.producer_name = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "MemphisWriteArgs", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: MemphisWriteArgs_HeadersEntry = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.headers.push(val);
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "MemphisWriteArgs", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.message_id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for MemphisWriteArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "station" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.station)
      }
      "producer_name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.producer_name)
      }
      "headers" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      "message_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.message_id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct MemphisWriteArgs_HeadersEntry {
  pub key: ::std::string::String,
  pub value: ::std::string::String,
}
impl ::std::default::Default for MemphisWriteArgs_HeadersEntry {
  fn default() -> Self {
    MemphisWriteArgs_HeadersEntry {
      key: ::std::default::Default::default(),
      value: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref MemphisWriteArgs_HeadersEntry_default: MemphisWriteArgs_HeadersEntry = MemphisWriteArgs_HeadersEntry::default();
}
impl ::pb_jelly::Message for MemphisWriteArgs_HeadersEntry {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "MemphisWriteArgs_HeadersEntry",
      full_name: "protos.args.MemphisWriteArgs_HeadersEntry",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "key",
          full_name: "protos.args.MemphisWriteArgs_HeadersEntry.key",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "value",
          full_name: "protos.args.MemphisWriteArgs_HeadersEntry.value",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "MemphisWriteArgs_HeadersEntry", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.key = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "MemphisWriteArgs_HeadersEntry", 2)?;
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
impl ::pb_jelly::Reflection for MemphisWriteArgs_HeadersEntry {
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

