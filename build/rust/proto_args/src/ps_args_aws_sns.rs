// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct AWSSNSConn {
  /// @gotags: kong:"env=AWS_DEFAULT_REGION,hidden"
  pub aws_region: ::std::string::String,
  /// @gotags: kong:"env=AWS_ACCESS_KEY_ID,hidden"
  pub aws_access_key_id: ::std::string::String,
  /// @gotags: kong:"env=AWS_SECRET_ACCESS_KEY,hidden"
  pub aws_secret_access_key: ::std::string::String,
  /// @gotags: kong:"env=AWS_PROFILE,hidden"
  pub aws_profile: ::std::string::String,
}
impl ::std::default::Default for AWSSNSConn {
  fn default() -> Self {
    AWSSNSConn {
      aws_region: ::std::default::Default::default(),
      aws_access_key_id: ::std::default::Default::default(),
      aws_secret_access_key: ::std::default::Default::default(),
      aws_profile: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref AWSSNSConn_default: AWSSNSConn = AWSSNSConn::default();
}
impl ::pb_jelly::Message for AWSSNSConn {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AWSSNSConn",
      full_name: "protos.args.AWSSNSConn",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "aws_region",
          full_name: "protos.args.AWSSNSConn.aws_region",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_access_key_id",
          full_name: "protos.args.AWSSNSConn.aws_access_key_id",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_secret_access_key",
          full_name: "protos.args.AWSSNSConn.aws_secret_access_key",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_profile",
          full_name: "protos.args.AWSSNSConn.aws_profile",
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
    let mut aws_region_size = 0;
    if self.aws_region != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.aws_region;
      let l = ::pb_jelly::Message::compute_size(val);
      aws_region_size += ::pb_jelly::wire_format::serialized_length(1);
      aws_region_size += ::pb_jelly::varint::serialized_length(l as u64);
      aws_region_size += l;
    }
    size += aws_region_size;
    let mut aws_access_key_id_size = 0;
    if self.aws_access_key_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.aws_access_key_id;
      let l = ::pb_jelly::Message::compute_size(val);
      aws_access_key_id_size += ::pb_jelly::wire_format::serialized_length(2);
      aws_access_key_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      aws_access_key_id_size += l;
    }
    size += aws_access_key_id_size;
    let mut aws_secret_access_key_size = 0;
    if self.aws_secret_access_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.aws_secret_access_key;
      let l = ::pb_jelly::Message::compute_size(val);
      aws_secret_access_key_size += ::pb_jelly::wire_format::serialized_length(3);
      aws_secret_access_key_size += ::pb_jelly::varint::serialized_length(l as u64);
      aws_secret_access_key_size += l;
    }
    size += aws_secret_access_key_size;
    let mut aws_profile_size = 0;
    if self.aws_profile != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.aws_profile;
      let l = ::pb_jelly::Message::compute_size(val);
      aws_profile_size += ::pb_jelly::wire_format::serialized_length(4);
      aws_profile_size += ::pb_jelly::varint::serialized_length(l as u64);
      aws_profile_size += l;
    }
    size += aws_profile_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.aws_region != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.aws_region;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.aws_access_key_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.aws_access_key_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.aws_secret_access_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.aws_secret_access_key;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.aws_profile != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.aws_profile;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.aws_region != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.aws_region;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.aws_access_key_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.aws_access_key_id;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.aws_secret_access_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.aws_secret_access_key;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.aws_profile != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.aws_profile;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSSNSConn", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.aws_region = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSSNSConn", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.aws_access_key_id = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSSNSConn", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.aws_secret_access_key = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSSNSConn", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.aws_profile = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for AWSSNSConn {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "aws_region" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.aws_region)
      }
      "aws_access_key_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.aws_access_key_id)
      }
      "aws_secret_access_key" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.aws_secret_access_key)
      }
      "aws_profile" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.aws_profile)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

// SNS has no read functionality

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct AWSSNSWriteArgs {
  /// @gotags: kong:"help='Topic ARN',required"
  pub topic: ::std::string::String,
}
impl ::std::default::Default for AWSSNSWriteArgs {
  fn default() -> Self {
    AWSSNSWriteArgs {
      topic: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref AWSSNSWriteArgs_default: AWSSNSWriteArgs = AWSSNSWriteArgs::default();
}
impl ::pb_jelly::Message for AWSSNSWriteArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AWSSNSWriteArgs",
      full_name: "protos.args.AWSSNSWriteArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "topic",
          full_name: "protos.args.AWSSNSWriteArgs.topic",
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
    let mut topic_size = 0;
    if self.topic != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic;
      let l = ::pb_jelly::Message::compute_size(val);
      topic_size += ::pb_jelly::wire_format::serialized_length(1);
      topic_size += ::pb_jelly::varint::serialized_length(l as u64);
      topic_size += l;
    }
    size += topic_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.topic != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.topic != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.topic;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSSNSWriteArgs", 1)?;
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
impl ::pb_jelly::Reflection for AWSSNSWriteArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "topic" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.topic)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

