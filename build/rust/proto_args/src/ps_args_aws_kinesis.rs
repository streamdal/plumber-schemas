// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct AWSKinesisConn {
  /// @gotags: kong:"env=AWS_DEFAULT_REGION,hidden"
  pub aws_region: ::std::string::String,
  /// @gotags: kong:"env=AWS_ACCESS_KEY_ID,hidden"
  pub aws_access_key_id: ::std::string::String,
  /// @gotags: kong:"env=AWS_SECRET_ACCESS_KEY,hidden"
  pub aws_secret_access_key: ::std::string::String,
  /// @gotags: kong:"env=AWS_PROFILE,hidden"
  pub aws_profile: ::std::string::String,
}
impl ::std::default::Default for AWSKinesisConn {
  fn default() -> Self {
    AWSKinesisConn {
      aws_region: ::std::default::Default::default(),
      aws_access_key_id: ::std::default::Default::default(),
      aws_secret_access_key: ::std::default::Default::default(),
      aws_profile: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref AWSKinesisConn_default: AWSKinesisConn = AWSKinesisConn::default();
}
impl ::pb_jelly::Message for AWSKinesisConn {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AWSKinesisConn",
      full_name: "protos.args.AWSKinesisConn",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "aws_region",
          full_name: "protos.args.AWSKinesisConn.aws_region",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_access_key_id",
          full_name: "protos.args.AWSKinesisConn.aws_access_key_id",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_secret_access_key",
          full_name: "protos.args.AWSKinesisConn.aws_secret_access_key",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "aws_profile",
          full_name: "protos.args.AWSKinesisConn.aws_profile",
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSKinesisConn", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.aws_region = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSKinesisConn", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.aws_access_key_id = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSKinesisConn", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.aws_secret_access_key = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSKinesisConn", 4)?;
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
impl ::pb_jelly::Reflection for AWSKinesisConn {
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
pub struct AWSKinesisReadArgs {
  /// @gotags: kong:"help='Stream Name',required"
  pub stream: ::std::string::String,
  /// @gotags: kong:"help='Shard ID. If empty, will read from all shards'"
  pub shard: ::std::string::String,
  /// @gotags: kong:"help='Maximum number of records to read from kinesis',default=1"
  pub max_records: i64,
  /// @gotags: kong:"help='Deliver starting at this timestamp',xor=kinesis_delivery_option"
  pub read_from_timestamp: i64,
  /// @gotags: kong:"help='Deliver messages starting at sequence number',xor=kinesis_delivery_option"
  pub read_sequence_number: ::std::string::String,
  /// @gotags: kong:"help='Deliver messages starting after this sequence number',xor=kinesis_delivery_option"
  pub read_after_sequence_number: ::std::string::String,
  /// @gotags: kong:"help='Deliver messages starting at the last untrimmed record in the shard in the system, which is the oldest data record in the shard.',xor=kinesis_delivery_option"
  pub read_trim_horizon: bool,
  /// @gotags: kong:"help='Deliver messages after the most recent record',xor=kinesis_delivery_option"
  pub read_latest: bool,
}
impl ::std::default::Default for AWSKinesisReadArgs {
  fn default() -> Self {
    AWSKinesisReadArgs {
      stream: ::std::default::Default::default(),
      shard: ::std::default::Default::default(),
      max_records: ::std::default::Default::default(),
      read_from_timestamp: ::std::default::Default::default(),
      read_sequence_number: ::std::default::Default::default(),
      read_after_sequence_number: ::std::default::Default::default(),
      read_trim_horizon: ::std::default::Default::default(),
      read_latest: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref AWSKinesisReadArgs_default: AWSKinesisReadArgs = AWSKinesisReadArgs::default();
}
impl ::pb_jelly::Message for AWSKinesisReadArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AWSKinesisReadArgs",
      full_name: "protos.args.AWSKinesisReadArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "stream",
          full_name: "protos.args.AWSKinesisReadArgs.stream",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "shard",
          full_name: "protos.args.AWSKinesisReadArgs.shard",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "max_records",
          full_name: "protos.args.AWSKinesisReadArgs.max_records",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "read_from_timestamp",
          full_name: "protos.args.AWSKinesisReadArgs.read_from_timestamp",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "read_sequence_number",
          full_name: "protos.args.AWSKinesisReadArgs.read_sequence_number",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "read_after_sequence_number",
          full_name: "protos.args.AWSKinesisReadArgs.read_after_sequence_number",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "read_trim_horizon",
          full_name: "protos.args.AWSKinesisReadArgs.read_trim_horizon",
          index: 6,
          number: 7,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "read_latest",
          full_name: "protos.args.AWSKinesisReadArgs.read_latest",
          index: 7,
          number: 8,
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
    let mut stream_size = 0;
    if self.stream != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.stream;
      let l = ::pb_jelly::Message::compute_size(val);
      stream_size += ::pb_jelly::wire_format::serialized_length(1);
      stream_size += ::pb_jelly::varint::serialized_length(l as u64);
      stream_size += l;
    }
    size += stream_size;
    let mut shard_size = 0;
    if self.shard != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.shard;
      let l = ::pb_jelly::Message::compute_size(val);
      shard_size += ::pb_jelly::wire_format::serialized_length(2);
      shard_size += ::pb_jelly::varint::serialized_length(l as u64);
      shard_size += l;
    }
    size += shard_size;
    let mut max_records_size = 0;
    if self.max_records != <i64 as ::std::default::Default>::default() {
      let val = &self.max_records;
      let l = ::pb_jelly::Message::compute_size(val);
      max_records_size += ::pb_jelly::wire_format::serialized_length(3);
      max_records_size += l;
    }
    size += max_records_size;
    let mut read_from_timestamp_size = 0;
    if self.read_from_timestamp != <i64 as ::std::default::Default>::default() {
      let val = &self.read_from_timestamp;
      let l = ::pb_jelly::Message::compute_size(val);
      read_from_timestamp_size += ::pb_jelly::wire_format::serialized_length(4);
      read_from_timestamp_size += l;
    }
    size += read_from_timestamp_size;
    let mut read_sequence_number_size = 0;
    if self.read_sequence_number != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.read_sequence_number;
      let l = ::pb_jelly::Message::compute_size(val);
      read_sequence_number_size += ::pb_jelly::wire_format::serialized_length(5);
      read_sequence_number_size += ::pb_jelly::varint::serialized_length(l as u64);
      read_sequence_number_size += l;
    }
    size += read_sequence_number_size;
    let mut read_after_sequence_number_size = 0;
    if self.read_after_sequence_number != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.read_after_sequence_number;
      let l = ::pb_jelly::Message::compute_size(val);
      read_after_sequence_number_size += ::pb_jelly::wire_format::serialized_length(6);
      read_after_sequence_number_size += ::pb_jelly::varint::serialized_length(l as u64);
      read_after_sequence_number_size += l;
    }
    size += read_after_sequence_number_size;
    let mut read_trim_horizon_size = 0;
    if self.read_trim_horizon != <bool as ::std::default::Default>::default() {
      let val = &self.read_trim_horizon;
      let l = ::pb_jelly::Message::compute_size(val);
      read_trim_horizon_size += ::pb_jelly::wire_format::serialized_length(7);
      read_trim_horizon_size += l;
    }
    size += read_trim_horizon_size;
    let mut read_latest_size = 0;
    if self.read_latest != <bool as ::std::default::Default>::default() {
      let val = &self.read_latest;
      let l = ::pb_jelly::Message::compute_size(val);
      read_latest_size += ::pb_jelly::wire_format::serialized_length(8);
      read_latest_size += l;
    }
    size += read_latest_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.stream != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.stream;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.shard != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.shard;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.max_records != <i64 as ::std::default::Default>::default() {
      let val = &self.max_records;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.read_from_timestamp != <i64 as ::std::default::Default>::default() {
      let val = &self.read_from_timestamp;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.read_sequence_number != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.read_sequence_number;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.read_after_sequence_number != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.read_after_sequence_number;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.read_trim_horizon != <bool as ::std::default::Default>::default() {
      let val = &self.read_trim_horizon;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.read_latest != <bool as ::std::default::Default>::default() {
      let val = &self.read_latest;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.stream != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.stream;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.shard != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.shard;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.max_records != <i64 as ::std::default::Default>::default() {
      let val = &self.max_records;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.read_from_timestamp != <i64 as ::std::default::Default>::default() {
      let val = &self.read_from_timestamp;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.read_sequence_number != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.read_sequence_number;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.read_after_sequence_number != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.read_after_sequence_number;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.read_trim_horizon != <bool as ::std::default::Default>::default() {
      let val = &self.read_trim_horizon;
      ::pb_jelly::wire_format::write(7, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.read_latest != <bool as ::std::default::Default>::default() {
      let val = &self.read_latest;
      ::pb_jelly::wire_format::write(8, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSKinesisReadArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.stream = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSKinesisReadArgs", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.shard = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "AWSKinesisReadArgs", 3)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.max_records = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "AWSKinesisReadArgs", 4)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.read_from_timestamp = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSKinesisReadArgs", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.read_sequence_number = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSKinesisReadArgs", 6)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.read_after_sequence_number = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "AWSKinesisReadArgs", 7)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.read_trim_horizon = val;
        }
        8 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "AWSKinesisReadArgs", 8)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.read_latest = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for AWSKinesisReadArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "stream" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.stream)
      }
      "shard" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.shard)
      }
      "max_records" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.max_records)
      }
      "read_from_timestamp" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.read_from_timestamp)
      }
      "read_sequence_number" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.read_sequence_number)
      }
      "read_after_sequence_number" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.read_after_sequence_number)
      }
      "read_trim_horizon" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.read_trim_horizon)
      }
      "read_latest" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.read_latest)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct AWSKinesisWriteArgs {
  /// @gotags: kong:"help='Stream Name',required"
  pub stream: ::std::string::String,
  /// @gotags: kong:"help='Partition Key',required"
  pub partition_key: ::std::string::String,
  /// @gotags: kong:"help='Sequence number for ordering'"
  pub sequence_number: ::std::string::String,
}
impl ::std::default::Default for AWSKinesisWriteArgs {
  fn default() -> Self {
    AWSKinesisWriteArgs {
      stream: ::std::default::Default::default(),
      partition_key: ::std::default::Default::default(),
      sequence_number: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref AWSKinesisWriteArgs_default: AWSKinesisWriteArgs = AWSKinesisWriteArgs::default();
}
impl ::pb_jelly::Message for AWSKinesisWriteArgs {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "AWSKinesisWriteArgs",
      full_name: "protos.args.AWSKinesisWriteArgs",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "stream",
          full_name: "protos.args.AWSKinesisWriteArgs.stream",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "partition_key",
          full_name: "protos.args.AWSKinesisWriteArgs.partition_key",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "sequence_number",
          full_name: "protos.args.AWSKinesisWriteArgs.sequence_number",
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
    let mut stream_size = 0;
    if self.stream != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.stream;
      let l = ::pb_jelly::Message::compute_size(val);
      stream_size += ::pb_jelly::wire_format::serialized_length(1);
      stream_size += ::pb_jelly::varint::serialized_length(l as u64);
      stream_size += l;
    }
    size += stream_size;
    let mut partition_key_size = 0;
    if self.partition_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.partition_key;
      let l = ::pb_jelly::Message::compute_size(val);
      partition_key_size += ::pb_jelly::wire_format::serialized_length(2);
      partition_key_size += ::pb_jelly::varint::serialized_length(l as u64);
      partition_key_size += l;
    }
    size += partition_key_size;
    let mut sequence_number_size = 0;
    if self.sequence_number != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.sequence_number;
      let l = ::pb_jelly::Message::compute_size(val);
      sequence_number_size += ::pb_jelly::wire_format::serialized_length(3);
      sequence_number_size += ::pb_jelly::varint::serialized_length(l as u64);
      sequence_number_size += l;
    }
    size += sequence_number_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.stream != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.stream;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.partition_key != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.partition_key;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.sequence_number != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.sequence_number;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.stream != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.stream;
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
    if self.sequence_number != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.sequence_number;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSKinesisWriteArgs", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.stream = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSKinesisWriteArgs", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.partition_key = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "AWSKinesisWriteArgs", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.sequence_number = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for AWSKinesisWriteArgs {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "stream" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.stream)
      }
      "partition_key" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.partition_key)
      }
      "sequence_number" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.sequence_number)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

