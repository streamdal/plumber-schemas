// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct AWSSQSConn {
  /// @gotags: kong:"env=AWS_DEFAULT_REGION,hidden"
  pub aws_region: ::std::string::String,
  /// @gotags: kong:"env=AWS_ACCESS_KEY_ID,hidden"
  pub aws_access_key_id: ::std::string::String,
  /// @gotags: kong:"env=AWS_SECRET_ACCESS_KEY,hidden"
  pub aws_secret_access_key: ::std::string::String,
  /// @gotags: kong:"env=AWS_PROFILE,hidden"
  pub aws_profile: ::std::string::String,
}
impl ::std::default::Default for AWSSQSConn {
  fn default() -> Self {
    AWSSQSConn {
      aws_region: ::std::default::Default::default(),
      aws_access_key_id: ::std::default::Default::default(),
      aws_secret_access_key: ::std::default::Default::default(),
      aws_profile: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref AWSSQSConn_default: AWSSQSConn = AWSSQSConn::default();
}
impl ::pb_jelly::Message for AWSSQSConn {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AWSSQSConn",
      full_name: "protos.args.AWSSQSConn",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "aws_region",
          full_name: "protos.args.AWSSQSConn.aws_region",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_access_key_id",
          full_name: "protos.args.AWSSQSConn.aws_access_key_id",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_secret_access_key",
          full_name: "protos.args.AWSSQSConn.aws_secret_access_key",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_profile",
          full_name: "protos.args.AWSSQSConn.aws_profile",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSSQSConn", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.aws_region = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSSQSConn", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.aws_access_key_id = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSSQSConn", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.aws_secret_access_key = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSSQSConn", 4)?;
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
impl ::pb_jelly::Reflection for AWSSQSConn {
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

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct AWSSQSReadArgs {
  /// @gotags: kong:"help='Queue name'"
  pub queue_name: ::std::string::String,
  /// @gotags: kong:"help='Remote AWS account ID',optional"
  pub remote_account_id: ::std::string::String,
  /// @gotags: kong:"help='Max number of messages to read',default=1"
  pub max_num_messages: i64,
  /// @gotags: kong:"help='An id to identify this read request by',default='plumber/relay'"
  pub receive_request_attempt_id: ::std::string::String,
  /// @gotags: kong:"help='Auto-delete read/received message(s)'"
  pub auto_delete: bool,
  /// @gotags: kong:"help='Number of seconds to wait for messages (not used when using --continuous)',default=5"
  pub wait_time_seconds: i64,
}
impl ::std::default::Default for AWSSQSReadArgs {
  fn default() -> Self {
    AWSSQSReadArgs {
      queue_name: ::std::default::Default::default(),
      remote_account_id: ::std::default::Default::default(),
      max_num_messages: ::std::default::Default::default(),
      receive_request_attempt_id: ::std::default::Default::default(),
      auto_delete: ::std::default::Default::default(),
      wait_time_seconds: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref AWSSQSReadArgs_default: AWSSQSReadArgs = AWSSQSReadArgs::default();
}
impl ::pb_jelly::Message for AWSSQSReadArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AWSSQSReadArgs",
      full_name: "protos.args.AWSSQSReadArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "queue_name",
          full_name: "protos.args.AWSSQSReadArgs.queue_name",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "remote_account_id",
          full_name: "protos.args.AWSSQSReadArgs.remote_account_id",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "max_num_messages",
          full_name: "protos.args.AWSSQSReadArgs.max_num_messages",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "receive_request_attempt_id",
          full_name: "protos.args.AWSSQSReadArgs.receive_request_attempt_id",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "auto_delete",
          full_name: "protos.args.AWSSQSReadArgs.auto_delete",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "wait_time_seconds",
          full_name: "protos.args.AWSSQSReadArgs.wait_time_seconds",
          index: 5,
          number: 6,
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
    let mut queue_name_size = 0;
    if self.queue_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.queue_name;
      let l = ::pb_jelly::Message::compute_size(val);
      queue_name_size += ::pb_jelly::wire_format::serialized_length(1);
      queue_name_size += ::pb_jelly::varint::serialized_length(l as u64);
      queue_name_size += l;
    }
    size += queue_name_size;
    let mut remote_account_id_size = 0;
    if self.remote_account_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.remote_account_id;
      let l = ::pb_jelly::Message::compute_size(val);
      remote_account_id_size += ::pb_jelly::wire_format::serialized_length(2);
      remote_account_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      remote_account_id_size += l;
    }
    size += remote_account_id_size;
    let mut max_num_messages_size = 0;
    if self.max_num_messages != <i64 as ::std::default::Default>::default() {
      let val = &self.max_num_messages;
      let l = ::pb_jelly::Message::compute_size(val);
      max_num_messages_size += ::pb_jelly::wire_format::serialized_length(3);
      max_num_messages_size += l;
    }
    size += max_num_messages_size;
    let mut receive_request_attempt_id_size = 0;
    if self.receive_request_attempt_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.receive_request_attempt_id;
      let l = ::pb_jelly::Message::compute_size(val);
      receive_request_attempt_id_size += ::pb_jelly::wire_format::serialized_length(4);
      receive_request_attempt_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      receive_request_attempt_id_size += l;
    }
    size += receive_request_attempt_id_size;
    let mut auto_delete_size = 0;
    if self.auto_delete != <bool as ::std::default::Default>::default() {
      let val = &self.auto_delete;
      let l = ::pb_jelly::Message::compute_size(val);
      auto_delete_size += ::pb_jelly::wire_format::serialized_length(5);
      auto_delete_size += l;
    }
    size += auto_delete_size;
    let mut wait_time_seconds_size = 0;
    if self.wait_time_seconds != <i64 as ::std::default::Default>::default() {
      let val = &self.wait_time_seconds;
      let l = ::pb_jelly::Message::compute_size(val);
      wait_time_seconds_size += ::pb_jelly::wire_format::serialized_length(6);
      wait_time_seconds_size += l;
    }
    size += wait_time_seconds_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.queue_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.queue_name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.remote_account_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.remote_account_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.max_num_messages != <i64 as ::std::default::Default>::default() {
      let val = &self.max_num_messages;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.receive_request_attempt_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.receive_request_attempt_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.auto_delete != <bool as ::std::default::Default>::default() {
      let val = &self.auto_delete;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.wait_time_seconds != <i64 as ::std::default::Default>::default() {
      let val = &self.wait_time_seconds;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.queue_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.queue_name;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.remote_account_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.remote_account_id;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.max_num_messages != <i64 as ::std::default::Default>::default() {
      let val = &self.max_num_messages;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.receive_request_attempt_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.receive_request_attempt_id;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.auto_delete != <bool as ::std::default::Default>::default() {
      let val = &self.auto_delete;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.wait_time_seconds != <i64 as ::std::default::Default>::default() {
      let val = &self.wait_time_seconds;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSSQSReadArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.queue_name = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSSQSReadArgs", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.remote_account_id = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "AWSSQSReadArgs", 3)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.max_num_messages = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSSQSReadArgs", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.receive_request_attempt_id = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "AWSSQSReadArgs", 5)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.auto_delete = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "AWSSQSReadArgs", 6)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.wait_time_seconds = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for AWSSQSReadArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "queue_name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.queue_name)
      }
      "remote_account_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.remote_account_id)
      }
      "max_num_messages" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.max_num_messages)
      }
      "receive_request_attempt_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.receive_request_attempt_id)
      }
      "auto_delete" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.auto_delete)
      }
      "wait_time_seconds" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.wait_time_seconds)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct AWSSQSWriteArgs {
  /// @gotags: kong:"help='Queue name'"
  pub queue_name: ::std::string::String,
  /// @gotags: kong:"help='Remote AWS account ID',optional"
  pub remote_account_id: ::std::string::String,
  /// @gotags: kong:"help='How many seconds to delay message delivery by',default=0"
  pub delay_seconds: i64,
  /// @gotags: kong:"help='Add optional attributes to outgoing message (assign: k=v delimit: ;)'"
  pub attributes: ::std::vec::Vec<AWSSQSWriteArgs_AttributesEntry>,
  /// @gotags: kong:"help='Message Group ID. For FIFO queues only'"
  pub message_group_id: ::std::string::String,
  /// @gotags: kong:"help='Required when publishing to a FIFO queue that does not have content based deduplication enabled'"
  pub message_deduplication_id: ::std::string::String,
}
impl ::std::default::Default for AWSSQSWriteArgs {
  fn default() -> Self {
    AWSSQSWriteArgs {
      queue_name: ::std::default::Default::default(),
      remote_account_id: ::std::default::Default::default(),
      delay_seconds: ::std::default::Default::default(),
      attributes: ::std::default::Default::default(),
      message_group_id: ::std::default::Default::default(),
      message_deduplication_id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref AWSSQSWriteArgs_default: AWSSQSWriteArgs = AWSSQSWriteArgs::default();
}
impl ::pb_jelly::Message for AWSSQSWriteArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AWSSQSWriteArgs",
      full_name: "protos.args.AWSSQSWriteArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "queue_name",
          full_name: "protos.args.AWSSQSWriteArgs.queue_name",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "remote_account_id",
          full_name: "protos.args.AWSSQSWriteArgs.remote_account_id",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "delay_seconds",
          full_name: "protos.args.AWSSQSWriteArgs.delay_seconds",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "attributes",
          full_name: "protos.args.AWSSQSWriteArgs.attributes",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Repeated,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "message_group_id",
          full_name: "protos.args.AWSSQSWriteArgs.message_group_id",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "message_deduplication_id",
          full_name: "protos.args.AWSSQSWriteArgs.message_deduplication_id",
          index: 5,
          number: 6,
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
    let mut queue_name_size = 0;
    if self.queue_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.queue_name;
      let l = ::pb_jelly::Message::compute_size(val);
      queue_name_size += ::pb_jelly::wire_format::serialized_length(1);
      queue_name_size += ::pb_jelly::varint::serialized_length(l as u64);
      queue_name_size += l;
    }
    size += queue_name_size;
    let mut remote_account_id_size = 0;
    if self.remote_account_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.remote_account_id;
      let l = ::pb_jelly::Message::compute_size(val);
      remote_account_id_size += ::pb_jelly::wire_format::serialized_length(2);
      remote_account_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      remote_account_id_size += l;
    }
    size += remote_account_id_size;
    let mut delay_seconds_size = 0;
    if self.delay_seconds != <i64 as ::std::default::Default>::default() {
      let val = &self.delay_seconds;
      let l = ::pb_jelly::Message::compute_size(val);
      delay_seconds_size += ::pb_jelly::wire_format::serialized_length(3);
      delay_seconds_size += l;
    }
    size += delay_seconds_size;
    let mut attributes_size = 0;
    for val in &self.attributes {
      let l = ::pb_jelly::Message::compute_size(val);
      attributes_size += ::pb_jelly::wire_format::serialized_length(4);
      attributes_size += ::pb_jelly::varint::serialized_length(l as u64);
      attributes_size += l;
    }
    size += attributes_size;
    let mut message_group_id_size = 0;
    if self.message_group_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message_group_id;
      let l = ::pb_jelly::Message::compute_size(val);
      message_group_id_size += ::pb_jelly::wire_format::serialized_length(5);
      message_group_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      message_group_id_size += l;
    }
    size += message_group_id_size;
    let mut message_deduplication_id_size = 0;
    if self.message_deduplication_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message_deduplication_id;
      let l = ::pb_jelly::Message::compute_size(val);
      message_deduplication_id_size += ::pb_jelly::wire_format::serialized_length(6);
      message_deduplication_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      message_deduplication_id_size += l;
    }
    size += message_deduplication_id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.queue_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.queue_name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.remote_account_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.remote_account_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.delay_seconds != <i64 as ::std::default::Default>::default() {
      let val = &self.delay_seconds;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.attributes {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.message_group_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message_group_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.message_deduplication_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message_deduplication_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.queue_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.queue_name;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.remote_account_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.remote_account_id;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.delay_seconds != <i64 as ::std::default::Default>::default() {
      let val = &self.delay_seconds;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.attributes {
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.message_group_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message_group_id;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.message_deduplication_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message_deduplication_id;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSSQSWriteArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.queue_name = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSSQSWriteArgs", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.remote_account_id = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "AWSSQSWriteArgs", 3)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.delay_seconds = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSSQSWriteArgs", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: AWSSQSWriteArgs_AttributesEntry = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.attributes.push(val);
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSSQSWriteArgs", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.message_group_id = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSSQSWriteArgs", 6)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.message_deduplication_id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for AWSSQSWriteArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "queue_name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.queue_name)
      }
      "remote_account_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.remote_account_id)
      }
      "delay_seconds" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.delay_seconds)
      }
      "attributes" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      "message_group_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.message_group_id)
      }
      "message_deduplication_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.message_deduplication_id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct AWSSQSWriteArgs_AttributesEntry {
  pub key: ::std::string::String,
  pub value: ::std::string::String,
}
impl ::std::default::Default for AWSSQSWriteArgs_AttributesEntry {
  fn default() -> Self {
    AWSSQSWriteArgs_AttributesEntry {
      key: ::std::default::Default::default(),
      value: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref AWSSQSWriteArgs_AttributesEntry_default: AWSSQSWriteArgs_AttributesEntry = AWSSQSWriteArgs_AttributesEntry::default();
}
impl ::pb_jelly::Message for AWSSQSWriteArgs_AttributesEntry {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AWSSQSWriteArgs_AttributesEntry",
      full_name: "protos.args.AWSSQSWriteArgs_AttributesEntry",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "key",
          full_name: "protos.args.AWSSQSWriteArgs_AttributesEntry.key",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "value",
          full_name: "protos.args.AWSSQSWriteArgs_AttributesEntry.value",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSSQSWriteArgs_AttributesEntry", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.key = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSSQSWriteArgs_AttributesEntry", 2)?;
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
impl ::pb_jelly::Reflection for AWSSQSWriteArgs_AttributesEntry {
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

/// SQS has a dedicated RelayArgs struct as relay has different defaults than read
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct AWSSQSRelayArgs {
  /// @gotags: kong:"help='Queue name',env=PLUMBER_RELAY_SQS_QUEUE_NAME"
  pub queue_name: ::std::string::String,
  /// @gotags: kong:"help='Remote AWS account ID',env=PLUMBER_RELAY_SQS_REMOTE_ACCOUNT_ID,optional"
  pub remote_account_id: ::std::string::String,
  /// @gotags: kong:"help='Max number of messages to read',env=PLUMBER_RELAY_SQS_MAX_NUM_MESSAGES,default=1"
  pub max_num_messages: i64,
  /// @gotags: kong:"help='An id to identify this read request by',env=PLUMBER_RELAY_SQS_RECEIVE_REQUEST_ATTEMPT_ID,default='plumber/relay'"
  pub receive_request_attempt_id: ::std::string::String,
  /// @gotags: kong:"help='Auto-delete read/received message(s)',env=PLUMBER_RELAY_SQS_AUTO_DELETE"
  pub auto_delete: bool,
  /// @gotags: kong:"help='Number of seconds to wait for messages (not used when using --continuous)',env=PLUMBER_RELAY_SQS_WAIT_TIME_SECONDS,default=5"
  pub wait_time_seconds: i64,
}
impl ::std::default::Default for AWSSQSRelayArgs {
  fn default() -> Self {
    AWSSQSRelayArgs {
      queue_name: ::std::default::Default::default(),
      remote_account_id: ::std::default::Default::default(),
      max_num_messages: ::std::default::Default::default(),
      receive_request_attempt_id: ::std::default::Default::default(),
      auto_delete: ::std::default::Default::default(),
      wait_time_seconds: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref AWSSQSRelayArgs_default: AWSSQSRelayArgs = AWSSQSRelayArgs::default();
}
impl ::pb_jelly::Message for AWSSQSRelayArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AWSSQSRelayArgs",
      full_name: "protos.args.AWSSQSRelayArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "queue_name",
          full_name: "protos.args.AWSSQSRelayArgs.queue_name",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "remote_account_id",
          full_name: "protos.args.AWSSQSRelayArgs.remote_account_id",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "max_num_messages",
          full_name: "protos.args.AWSSQSRelayArgs.max_num_messages",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "receive_request_attempt_id",
          full_name: "protos.args.AWSSQSRelayArgs.receive_request_attempt_id",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "auto_delete",
          full_name: "protos.args.AWSSQSRelayArgs.auto_delete",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "wait_time_seconds",
          full_name: "protos.args.AWSSQSRelayArgs.wait_time_seconds",
          index: 5,
          number: 6,
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
    let mut queue_name_size = 0;
    if self.queue_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.queue_name;
      let l = ::pb_jelly::Message::compute_size(val);
      queue_name_size += ::pb_jelly::wire_format::serialized_length(1);
      queue_name_size += ::pb_jelly::varint::serialized_length(l as u64);
      queue_name_size += l;
    }
    size += queue_name_size;
    let mut remote_account_id_size = 0;
    if self.remote_account_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.remote_account_id;
      let l = ::pb_jelly::Message::compute_size(val);
      remote_account_id_size += ::pb_jelly::wire_format::serialized_length(2);
      remote_account_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      remote_account_id_size += l;
    }
    size += remote_account_id_size;
    let mut max_num_messages_size = 0;
    if self.max_num_messages != <i64 as ::std::default::Default>::default() {
      let val = &self.max_num_messages;
      let l = ::pb_jelly::Message::compute_size(val);
      max_num_messages_size += ::pb_jelly::wire_format::serialized_length(3);
      max_num_messages_size += l;
    }
    size += max_num_messages_size;
    let mut receive_request_attempt_id_size = 0;
    if self.receive_request_attempt_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.receive_request_attempt_id;
      let l = ::pb_jelly::Message::compute_size(val);
      receive_request_attempt_id_size += ::pb_jelly::wire_format::serialized_length(4);
      receive_request_attempt_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      receive_request_attempt_id_size += l;
    }
    size += receive_request_attempt_id_size;
    let mut auto_delete_size = 0;
    if self.auto_delete != <bool as ::std::default::Default>::default() {
      let val = &self.auto_delete;
      let l = ::pb_jelly::Message::compute_size(val);
      auto_delete_size += ::pb_jelly::wire_format::serialized_length(5);
      auto_delete_size += l;
    }
    size += auto_delete_size;
    let mut wait_time_seconds_size = 0;
    if self.wait_time_seconds != <i64 as ::std::default::Default>::default() {
      let val = &self.wait_time_seconds;
      let l = ::pb_jelly::Message::compute_size(val);
      wait_time_seconds_size += ::pb_jelly::wire_format::serialized_length(6);
      wait_time_seconds_size += l;
    }
    size += wait_time_seconds_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.queue_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.queue_name;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.remote_account_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.remote_account_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.max_num_messages != <i64 as ::std::default::Default>::default() {
      let val = &self.max_num_messages;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.receive_request_attempt_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.receive_request_attempt_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.auto_delete != <bool as ::std::default::Default>::default() {
      let val = &self.auto_delete;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.wait_time_seconds != <i64 as ::std::default::Default>::default() {
      let val = &self.wait_time_seconds;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.queue_name != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.queue_name;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.remote_account_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.remote_account_id;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.max_num_messages != <i64 as ::std::default::Default>::default() {
      let val = &self.max_num_messages;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.receive_request_attempt_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.receive_request_attempt_id;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.auto_delete != <bool as ::std::default::Default>::default() {
      let val = &self.auto_delete;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.wait_time_seconds != <i64 as ::std::default::Default>::default() {
      let val = &self.wait_time_seconds;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSSQSRelayArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.queue_name = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSSQSRelayArgs", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.remote_account_id = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "AWSSQSRelayArgs", 3)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.max_num_messages = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSSQSRelayArgs", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.receive_request_attempt_id = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "AWSSQSRelayArgs", 5)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.auto_delete = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "AWSSQSRelayArgs", 6)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.wait_time_seconds = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for AWSSQSRelayArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "queue_name" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.queue_name)
      }
      "remote_account_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.remote_account_id)
      }
      "max_num_messages" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.max_num_messages)
      }
      "receive_request_attempt_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.receive_request_attempt_id)
      }
      "auto_delete" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.auto_delete)
      }
      "wait_time_seconds" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.wait_time_seconds)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

