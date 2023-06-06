// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct GCPPubSubConn {
  /// @gotags: kong:"help='Project ID',env='PLUMBER_RELAY_GCP_PROJECT_ID',required"
  pub project_id: ::std::string::String,
  /// @gotags: kong:"help='GCP Credentials in JSON format',env='PLUMBER_RELAY_GCP_CREDENTIALS'"
  pub credentials_json: ::std::string::String,
  /// @gotags: kong:"help='Path to GCP credentials JSON file',env='GOOGLE_APPLICATION_CREDENTIALS'"
  pub credentials_file: ::std::string::String,
}
impl ::std::default::Default for GCPPubSubConn {
  fn default() -> Self {
    GCPPubSubConn {
      project_id: ::std::default::Default::default(),
      credentials_json: ::std::default::Default::default(),
      credentials_file: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref GCPPubSubConn_default: GCPPubSubConn = GCPPubSubConn::default();
}
impl ::pb_jelly::Message for GCPPubSubConn {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "GCPPubSubConn",
      full_name: "protos.args.GCPPubSubConn",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "project_id",
          full_name: "protos.args.GCPPubSubConn.project_id",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "credentials_json",
          full_name: "protos.args.GCPPubSubConn.credentials_json",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "credentials_file",
          full_name: "protos.args.GCPPubSubConn.credentials_file",
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
    let mut project_id_size = 0;
    if self.project_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.project_id;
      let l = ::pb_jelly::Message::compute_size(val);
      project_id_size += ::pb_jelly::wire_format::serialized_length(1);
      project_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      project_id_size += l;
    }
    size += project_id_size;
    let mut credentials_json_size = 0;
    if self.credentials_json != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.credentials_json;
      let l = ::pb_jelly::Message::compute_size(val);
      credentials_json_size += ::pb_jelly::wire_format::serialized_length(2);
      credentials_json_size += ::pb_jelly::varint::serialized_length(l as u64);
      credentials_json_size += l;
    }
    size += credentials_json_size;
    let mut credentials_file_size = 0;
    if self.credentials_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.credentials_file;
      let l = ::pb_jelly::Message::compute_size(val);
      credentials_file_size += ::pb_jelly::wire_format::serialized_length(3);
      credentials_file_size += ::pb_jelly::varint::serialized_length(l as u64);
      credentials_file_size += l;
    }
    size += credentials_file_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.project_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.project_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.credentials_json != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.credentials_json;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.credentials_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.credentials_file;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.project_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.project_id;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.credentials_json != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.credentials_json;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.credentials_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.credentials_file;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GCPPubSubConn", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.project_id = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GCPPubSubConn", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.credentials_json = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GCPPubSubConn", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.credentials_file = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for GCPPubSubConn {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "project_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.project_id)
      }
      "credentials_json" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.credentials_json)
      }
      "credentials_file" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.credentials_file)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct GCPPubSubReadArgs {
  /// @gotags: kong:"help='Subscription ID',env='PLUMBER_RELAY_GCP_SUBSCRIPTION_ID',required"
  pub subscription_id: ::std::string::String,
  /// @gotags: kong:"help='Whether to acknowledge message receive',env='PLUMBER_RELAY_GCP_ACK_MESSAGE',default=true"
  pub ack_messages: bool,
}
impl ::std::default::Default for GCPPubSubReadArgs {
  fn default() -> Self {
    GCPPubSubReadArgs {
      subscription_id: ::std::default::Default::default(),
      ack_messages: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref GCPPubSubReadArgs_default: GCPPubSubReadArgs = GCPPubSubReadArgs::default();
}
impl ::pb_jelly::Message for GCPPubSubReadArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "GCPPubSubReadArgs",
      full_name: "protos.args.GCPPubSubReadArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "subscription_id",
          full_name: "protos.args.GCPPubSubReadArgs.subscription_id",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "ack_messages",
          full_name: "protos.args.GCPPubSubReadArgs.ack_messages",
          index: 1,
          number: 2,
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
    let mut subscription_id_size = 0;
    if self.subscription_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.subscription_id;
      let l = ::pb_jelly::Message::compute_size(val);
      subscription_id_size += ::pb_jelly::wire_format::serialized_length(1);
      subscription_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      subscription_id_size += l;
    }
    size += subscription_id_size;
    let mut ack_messages_size = 0;
    if self.ack_messages != <bool as ::std::default::Default>::default() {
      let val = &self.ack_messages;
      let l = ::pb_jelly::Message::compute_size(val);
      ack_messages_size += ::pb_jelly::wire_format::serialized_length(2);
      ack_messages_size += l;
    }
    size += ack_messages_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.subscription_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.subscription_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.ack_messages != <bool as ::std::default::Default>::default() {
      let val = &self.ack_messages;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.subscription_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.subscription_id;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.ack_messages != <bool as ::std::default::Default>::default() {
      let val = &self.ack_messages;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GCPPubSubReadArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.subscription_id = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "GCPPubSubReadArgs", 2)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.ack_messages = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for GCPPubSubReadArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "subscription_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.subscription_id)
      }
      "ack_messages" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.ack_messages)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct GCPPubSubWriteArgs {
  /// @gotags: kong:"help='Topic ID to publish message(s) to',required"
  pub topic_id: ::std::string::String,
}
impl ::std::default::Default for GCPPubSubWriteArgs {
  fn default() -> Self {
    GCPPubSubWriteArgs {
      topic_id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref GCPPubSubWriteArgs_default: GCPPubSubWriteArgs = GCPPubSubWriteArgs::default();
}
impl ::pb_jelly::Message for GCPPubSubWriteArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "GCPPubSubWriteArgs",
      full_name: "protos.args.GCPPubSubWriteArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "topic_id",
          full_name: "protos.args.GCPPubSubWriteArgs.topic_id",
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
    let mut topic_id_size = 0;
    if self.topic_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic_id;
      let l = ::pb_jelly::Message::compute_size(val);
      topic_id_size += ::pb_jelly::wire_format::serialized_length(1);
      topic_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      topic_id_size += l;
    }
    size += topic_id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.topic_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.topic_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic_id;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GCPPubSubWriteArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.topic_id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for GCPPubSubWriteArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "topic_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.topic_id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

