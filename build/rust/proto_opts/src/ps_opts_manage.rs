// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct ManageOptions {
  /// @gotags: kong:"embed"
  pub global_options: ::std::option::Option<GlobalManageOptions>,
  /// @gotags: kong:"cmd,help='Get resource(s) from plumber server'"
  pub get: ::std::option::Option<GetOptions>,
  /// @gotags: kong:"cmd,help='Create resources in plumber server'"
  pub create: ::std::option::Option<CreateOptions>,
  /// @gotags: kong:"cmd,help='Delete resources in plumber server'"
  pub delete: ::std::option::Option<DeleteOptions>,
  /// @gotags: kong:"cmd,help='Stop resources in plumber server'"
  pub stop: ::std::option::Option<StopOptions>,
  /// @gotags: kong:"cmd,help='Resume/Start resources in plumber server'"
  pub resume: ::std::option::Option<ResumeOptions>,
}
impl ::std::default::Default for ManageOptions {
  fn default() -> Self {
    ManageOptions {
      global_options: ::std::default::Default::default(),
      get: ::std::default::Default::default(),
      create: ::std::default::Default::default(),
      delete: ::std::default::Default::default(),
      stop: ::std::default::Default::default(),
      resume: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ManageOptions_default: ManageOptions = ManageOptions::default();
}
impl ::pb_jelly::Message for ManageOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ManageOptions",
      full_name: "protos.opts.ManageOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "global_options",
          full_name: "protos.opts.ManageOptions.global_options",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "get",
          full_name: "protos.opts.ManageOptions.get",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "create",
          full_name: "protos.opts.ManageOptions.create",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "delete",
          full_name: "protos.opts.ManageOptions.delete",
          index: 3,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "stop",
          full_name: "protos.opts.ManageOptions.stop",
          index: 4,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "resume",
          full_name: "protos.opts.ManageOptions.resume",
          index: 5,
          number: 7,
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
    let mut global_options_size = 0;
    for val in &self.global_options {
      let l = ::pb_jelly::Message::compute_size(val);
      global_options_size += ::pb_jelly::wire_format::serialized_length(1);
      global_options_size += ::pb_jelly::varint::serialized_length(l as u64);
      global_options_size += l;
    }
    size += global_options_size;
    let mut get_size = 0;
    for val in &self.get {
      let l = ::pb_jelly::Message::compute_size(val);
      get_size += ::pb_jelly::wire_format::serialized_length(2);
      get_size += ::pb_jelly::varint::serialized_length(l as u64);
      get_size += l;
    }
    size += get_size;
    let mut create_size = 0;
    for val in &self.create {
      let l = ::pb_jelly::Message::compute_size(val);
      create_size += ::pb_jelly::wire_format::serialized_length(3);
      create_size += ::pb_jelly::varint::serialized_length(l as u64);
      create_size += l;
    }
    size += create_size;
    let mut delete_size = 0;
    for val in &self.delete {
      let l = ::pb_jelly::Message::compute_size(val);
      delete_size += ::pb_jelly::wire_format::serialized_length(5);
      delete_size += ::pb_jelly::varint::serialized_length(l as u64);
      delete_size += l;
    }
    size += delete_size;
    let mut stop_size = 0;
    for val in &self.stop {
      let l = ::pb_jelly::Message::compute_size(val);
      stop_size += ::pb_jelly::wire_format::serialized_length(6);
      stop_size += ::pb_jelly::varint::serialized_length(l as u64);
      stop_size += l;
    }
    size += stop_size;
    let mut resume_size = 0;
    for val in &self.resume {
      let l = ::pb_jelly::Message::compute_size(val);
      resume_size += ::pb_jelly::wire_format::serialized_length(7);
      resume_size += ::pb_jelly::varint::serialized_length(l as u64);
      resume_size += l;
    }
    size += resume_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.global_options {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.get {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.create {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.delete {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.stop {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.resume {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.global_options {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.get {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.create {
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.delete {
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.stop {
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.resume {
      ::pb_jelly::wire_format::write(7, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ManageOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: GlobalManageOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.global_options = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ManageOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: GetOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.get = Some(val);
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ManageOptions", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: CreateOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.create = Some(val);
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ManageOptions", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: DeleteOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.delete = Some(val);
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ManageOptions", 6)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: StopOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.stop = Some(val);
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ManageOptions", 7)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ResumeOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.resume = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for ManageOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "global_options" => {
        ::pb_jelly::reflection::FieldMut::Value(self.global_options.get_or_insert_with(::std::default::Default::default))
      }
      "get" => {
        ::pb_jelly::reflection::FieldMut::Value(self.get.get_or_insert_with(::std::default::Default::default))
      }
      "create" => {
        ::pb_jelly::reflection::FieldMut::Value(self.create.get_or_insert_with(::std::default::Default::default))
      }
      "delete" => {
        ::pb_jelly::reflection::FieldMut::Value(self.delete.get_or_insert_with(::std::default::Default::default))
      }
      "stop" => {
        ::pb_jelly::reflection::FieldMut::Value(self.stop.get_or_insert_with(::std::default::Default::default))
      }
      "resume" => {
        ::pb_jelly::reflection::FieldMut::Value(self.resume.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

/// Fields are namespaced with 'manage_' so they don't cause conflicts with
/// embedded kong entries.
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct GlobalManageOptions {
  /// @gotags: kong:"help='Plumber server gRPC API address',default='localhost:9090'"
  pub manage_address: ::std::string::String,
  /// @gotags: kong:"help='Plumber server auth token',default='streamdal'"
  pub manage_token: ::std::string::String,
  /// @gotags: kong:"help='gRPC call timeout seconds',default=10"
  pub manage_timeout_seconds: i64,
  /// @gotags: kong:"help='Use TLS when talking to plumber server',default='false'"
  pub manage_use_tls: bool,
  /// @gotags: kong:"help='Skip TLS server certificate verification',default='false'"
  pub manage_insecure_tls: bool,
  /// @gotags: kong:"help='TLS CA file'"
  pub manage_tls_ca_file: ::std::string::String,
  /// @gotags: kong:"help='TLS client cert file'"
  pub manage_tls_cert_file: ::std::string::String,
  /// @gotags: kong:"help='TLS client key file'"
  pub manage_tls_key_file: ::std::string::String,
  /// @gotags: kong:"help='Disable pretty/colorized output',default='false'"
  pub disable_pretty: bool,
}
impl ::std::default::Default for GlobalManageOptions {
  fn default() -> Self {
    GlobalManageOptions {
      manage_address: ::std::default::Default::default(),
      manage_token: ::std::default::Default::default(),
      manage_timeout_seconds: ::std::default::Default::default(),
      manage_use_tls: ::std::default::Default::default(),
      manage_insecure_tls: ::std::default::Default::default(),
      manage_tls_ca_file: ::std::default::Default::default(),
      manage_tls_cert_file: ::std::default::Default::default(),
      manage_tls_key_file: ::std::default::Default::default(),
      disable_pretty: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref GlobalManageOptions_default: GlobalManageOptions = GlobalManageOptions::default();
}
impl ::pb_jelly::Message for GlobalManageOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "GlobalManageOptions",
      full_name: "protos.opts.GlobalManageOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "manage_address",
          full_name: "protos.opts.GlobalManageOptions.manage_address",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "manage_token",
          full_name: "protos.opts.GlobalManageOptions.manage_token",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "manage_timeout_seconds",
          full_name: "protos.opts.GlobalManageOptions.manage_timeout_seconds",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "manage_use_tls",
          full_name: "protos.opts.GlobalManageOptions.manage_use_tls",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "manage_insecure_tls",
          full_name: "protos.opts.GlobalManageOptions.manage_insecure_tls",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "manage_tls_ca_file",
          full_name: "protos.opts.GlobalManageOptions.manage_tls_ca_file",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "manage_tls_cert_file",
          full_name: "protos.opts.GlobalManageOptions.manage_tls_cert_file",
          index: 6,
          number: 7,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "manage_tls_key_file",
          full_name: "protos.opts.GlobalManageOptions.manage_tls_key_file",
          index: 7,
          number: 8,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "disable_pretty",
          full_name: "protos.opts.GlobalManageOptions.disable_pretty",
          index: 8,
          number: 9,
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
    let mut manage_address_size = 0;
    if self.manage_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.manage_address;
      let l = ::pb_jelly::Message::compute_size(val);
      manage_address_size += ::pb_jelly::wire_format::serialized_length(1);
      manage_address_size += ::pb_jelly::varint::serialized_length(l as u64);
      manage_address_size += l;
    }
    size += manage_address_size;
    let mut manage_token_size = 0;
    if self.manage_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.manage_token;
      let l = ::pb_jelly::Message::compute_size(val);
      manage_token_size += ::pb_jelly::wire_format::serialized_length(2);
      manage_token_size += ::pb_jelly::varint::serialized_length(l as u64);
      manage_token_size += l;
    }
    size += manage_token_size;
    let mut manage_timeout_seconds_size = 0;
    if self.manage_timeout_seconds != <i64 as ::std::default::Default>::default() {
      let val = &self.manage_timeout_seconds;
      let l = ::pb_jelly::Message::compute_size(val);
      manage_timeout_seconds_size += ::pb_jelly::wire_format::serialized_length(3);
      manage_timeout_seconds_size += l;
    }
    size += manage_timeout_seconds_size;
    let mut manage_use_tls_size = 0;
    if self.manage_use_tls != <bool as ::std::default::Default>::default() {
      let val = &self.manage_use_tls;
      let l = ::pb_jelly::Message::compute_size(val);
      manage_use_tls_size += ::pb_jelly::wire_format::serialized_length(4);
      manage_use_tls_size += l;
    }
    size += manage_use_tls_size;
    let mut manage_insecure_tls_size = 0;
    if self.manage_insecure_tls != <bool as ::std::default::Default>::default() {
      let val = &self.manage_insecure_tls;
      let l = ::pb_jelly::Message::compute_size(val);
      manage_insecure_tls_size += ::pb_jelly::wire_format::serialized_length(5);
      manage_insecure_tls_size += l;
    }
    size += manage_insecure_tls_size;
    let mut manage_tls_ca_file_size = 0;
    if self.manage_tls_ca_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.manage_tls_ca_file;
      let l = ::pb_jelly::Message::compute_size(val);
      manage_tls_ca_file_size += ::pb_jelly::wire_format::serialized_length(6);
      manage_tls_ca_file_size += ::pb_jelly::varint::serialized_length(l as u64);
      manage_tls_ca_file_size += l;
    }
    size += manage_tls_ca_file_size;
    let mut manage_tls_cert_file_size = 0;
    if self.manage_tls_cert_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.manage_tls_cert_file;
      let l = ::pb_jelly::Message::compute_size(val);
      manage_tls_cert_file_size += ::pb_jelly::wire_format::serialized_length(7);
      manage_tls_cert_file_size += ::pb_jelly::varint::serialized_length(l as u64);
      manage_tls_cert_file_size += l;
    }
    size += manage_tls_cert_file_size;
    let mut manage_tls_key_file_size = 0;
    if self.manage_tls_key_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.manage_tls_key_file;
      let l = ::pb_jelly::Message::compute_size(val);
      manage_tls_key_file_size += ::pb_jelly::wire_format::serialized_length(8);
      manage_tls_key_file_size += ::pb_jelly::varint::serialized_length(l as u64);
      manage_tls_key_file_size += l;
    }
    size += manage_tls_key_file_size;
    let mut disable_pretty_size = 0;
    if self.disable_pretty != <bool as ::std::default::Default>::default() {
      let val = &self.disable_pretty;
      let l = ::pb_jelly::Message::compute_size(val);
      disable_pretty_size += ::pb_jelly::wire_format::serialized_length(9);
      disable_pretty_size += l;
    }
    size += disable_pretty_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.manage_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.manage_address;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.manage_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.manage_token;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.manage_timeout_seconds != <i64 as ::std::default::Default>::default() {
      let val = &self.manage_timeout_seconds;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.manage_use_tls != <bool as ::std::default::Default>::default() {
      let val = &self.manage_use_tls;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.manage_insecure_tls != <bool as ::std::default::Default>::default() {
      let val = &self.manage_insecure_tls;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.manage_tls_ca_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.manage_tls_ca_file;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.manage_tls_cert_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.manage_tls_cert_file;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.manage_tls_key_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.manage_tls_key_file;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.disable_pretty != <bool as ::std::default::Default>::default() {
      let val = &self.disable_pretty;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.manage_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.manage_address;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.manage_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.manage_token;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.manage_timeout_seconds != <i64 as ::std::default::Default>::default() {
      let val = &self.manage_timeout_seconds;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.manage_use_tls != <bool as ::std::default::Default>::default() {
      let val = &self.manage_use_tls;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.manage_insecure_tls != <bool as ::std::default::Default>::default() {
      let val = &self.manage_insecure_tls;
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.manage_tls_ca_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.manage_tls_ca_file;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.manage_tls_cert_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.manage_tls_cert_file;
      ::pb_jelly::wire_format::write(7, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.manage_tls_key_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.manage_tls_key_file;
      ::pb_jelly::wire_format::write(8, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.disable_pretty != <bool as ::std::default::Default>::default() {
      let val = &self.disable_pretty;
      ::pb_jelly::wire_format::write(9, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GlobalManageOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.manage_address = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GlobalManageOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.manage_token = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "GlobalManageOptions", 3)?;
          let mut val: i64 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.manage_timeout_seconds = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "GlobalManageOptions", 4)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.manage_use_tls = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "GlobalManageOptions", 5)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.manage_insecure_tls = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GlobalManageOptions", 6)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.manage_tls_ca_file = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GlobalManageOptions", 7)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.manage_tls_cert_file = val;
        }
        8 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GlobalManageOptions", 8)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.manage_tls_key_file = val;
        }
        9 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "GlobalManageOptions", 9)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.disable_pretty = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for GlobalManageOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "manage_address" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.manage_address)
      }
      "manage_token" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.manage_token)
      }
      "manage_timeout_seconds" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.manage_timeout_seconds)
      }
      "manage_use_tls" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.manage_use_tls)
      }
      "manage_insecure_tls" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.manage_insecure_tls)
      }
      "manage_tls_ca_file" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.manage_tls_ca_file)
      }
      "manage_tls_cert_file" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.manage_tls_cert_file)
      }
      "manage_tls_key_file" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.manage_tls_key_file)
      }
      "disable_pretty" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.disable_pretty)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct GetOptions {
  /// @gotags: kong:"cmd,help='Get connection(s) from plumber server'"
  pub connection: ::std::option::Option<super::ps_opts_manage_connection::GetConnectionOptions>,
  /// @gotags: kong:"cmd,help='Get relay(s) from plumber server'"
  pub relay: ::std::option::Option<super::ps_opts_manage_relay::GetRelayOptions>,
  /// @gotags: kong:"cmd,help='Get tunnel(s) from plumber server'"
  pub tunnel: ::std::option::Option<super::ps_opts_manage_tunnel::GetTunnelOptions>,
}
impl ::std::default::Default for GetOptions {
  fn default() -> Self {
    GetOptions {
      connection: ::std::default::Default::default(),
      relay: ::std::default::Default::default(),
      tunnel: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref GetOptions_default: GetOptions = GetOptions::default();
}
impl ::pb_jelly::Message for GetOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "GetOptions",
      full_name: "protos.opts.GetOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "connection",
          full_name: "protos.opts.GetOptions.connection",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "relay",
          full_name: "protos.opts.GetOptions.relay",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tunnel",
          full_name: "protos.opts.GetOptions.tunnel",
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
    let mut connection_size = 0;
    for val in &self.connection {
      let l = ::pb_jelly::Message::compute_size(val);
      connection_size += ::pb_jelly::wire_format::serialized_length(1);
      connection_size += ::pb_jelly::varint::serialized_length(l as u64);
      connection_size += l;
    }
    size += connection_size;
    let mut relay_size = 0;
    for val in &self.relay {
      let l = ::pb_jelly::Message::compute_size(val);
      relay_size += ::pb_jelly::wire_format::serialized_length(2);
      relay_size += ::pb_jelly::varint::serialized_length(l as u64);
      relay_size += l;
    }
    size += relay_size;
    let mut tunnel_size = 0;
    for val in &self.tunnel {
      let l = ::pb_jelly::Message::compute_size(val);
      tunnel_size += ::pb_jelly::wire_format::serialized_length(3);
      tunnel_size += ::pb_jelly::varint::serialized_length(l as u64);
      tunnel_size += l;
    }
    size += tunnel_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.connection {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.relay {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.tunnel {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.connection {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.relay {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.tunnel {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GetOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_manage_connection::GetConnectionOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.connection = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GetOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_manage_relay::GetRelayOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.relay = Some(val);
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GetOptions", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_manage_tunnel::GetTunnelOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tunnel = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for GetOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "connection" => {
        ::pb_jelly::reflection::FieldMut::Value(self.connection.get_or_insert_with(::std::default::Default::default))
      }
      "relay" => {
        ::pb_jelly::reflection::FieldMut::Value(self.relay.get_or_insert_with(::std::default::Default::default))
      }
      "tunnel" => {
        ::pb_jelly::reflection::FieldMut::Value(self.tunnel.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct CreateOptions {
  /// @gotags: kong:"cmd,help='Create connection in plumber server'"
  pub connection: ::std::option::Option<super::ps_opts_manage_connection::CreateConnectionOptions>,
  /// @gotags: kong:"cmd,help='Create relay in plumber server'"
  pub relay: ::std::option::Option<super::ps_opts_manage_relay::CreateRelayOptions>,
  /// @gotags: kong:"cmd,help='Create tunnel in plumber server'"
  pub tunnel: ::std::option::Option<super::ps_opts_manage_tunnel::CreateTunnelOptions>,
}
impl ::std::default::Default for CreateOptions {
  fn default() -> Self {
    CreateOptions {
      connection: ::std::default::Default::default(),
      relay: ::std::default::Default::default(),
      tunnel: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref CreateOptions_default: CreateOptions = CreateOptions::default();
}
impl ::pb_jelly::Message for CreateOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "CreateOptions",
      full_name: "protos.opts.CreateOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "connection",
          full_name: "protos.opts.CreateOptions.connection",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "relay",
          full_name: "protos.opts.CreateOptions.relay",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tunnel",
          full_name: "protos.opts.CreateOptions.tunnel",
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
    let mut connection_size = 0;
    for val in &self.connection {
      let l = ::pb_jelly::Message::compute_size(val);
      connection_size += ::pb_jelly::wire_format::serialized_length(1);
      connection_size += ::pb_jelly::varint::serialized_length(l as u64);
      connection_size += l;
    }
    size += connection_size;
    let mut relay_size = 0;
    for val in &self.relay {
      let l = ::pb_jelly::Message::compute_size(val);
      relay_size += ::pb_jelly::wire_format::serialized_length(2);
      relay_size += ::pb_jelly::varint::serialized_length(l as u64);
      relay_size += l;
    }
    size += relay_size;
    let mut tunnel_size = 0;
    for val in &self.tunnel {
      let l = ::pb_jelly::Message::compute_size(val);
      tunnel_size += ::pb_jelly::wire_format::serialized_length(3);
      tunnel_size += ::pb_jelly::varint::serialized_length(l as u64);
      tunnel_size += l;
    }
    size += tunnel_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.connection {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.relay {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.tunnel {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.connection {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.relay {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.tunnel {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_manage_connection::CreateConnectionOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.connection = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_manage_relay::CreateRelayOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.relay = Some(val);
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CreateOptions", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_manage_tunnel::CreateTunnelOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tunnel = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for CreateOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "connection" => {
        ::pb_jelly::reflection::FieldMut::Value(self.connection.get_or_insert_with(::std::default::Default::default))
      }
      "relay" => {
        ::pb_jelly::reflection::FieldMut::Value(self.relay.get_or_insert_with(::std::default::Default::default))
      }
      "tunnel" => {
        ::pb_jelly::reflection::FieldMut::Value(self.tunnel.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct DeleteOptions {
  /// @gotags: kong:"cmd,help='Delete connection in plumber server'"
  pub connection: ::std::option::Option<super::ps_opts_manage_connection::DeleteConnectionOptions>,
  /// @gotags: kong:"cmd,help='Delete relay in plumber server'"
  pub relay: ::std::option::Option<super::ps_opts_manage_relay::DeleteRelayOptions>,
  /// @gotags: kong:"cmd,help='Delete tunnel in plumber server'"
  pub tunnel: ::std::option::Option<super::ps_opts_manage_tunnel::DeleteTunnelOptions>,
}
impl ::std::default::Default for DeleteOptions {
  fn default() -> Self {
    DeleteOptions {
      connection: ::std::default::Default::default(),
      relay: ::std::default::Default::default(),
      tunnel: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref DeleteOptions_default: DeleteOptions = DeleteOptions::default();
}
impl ::pb_jelly::Message for DeleteOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "DeleteOptions",
      full_name: "protos.opts.DeleteOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "connection",
          full_name: "protos.opts.DeleteOptions.connection",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "relay",
          full_name: "protos.opts.DeleteOptions.relay",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tunnel",
          full_name: "protos.opts.DeleteOptions.tunnel",
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
    let mut connection_size = 0;
    for val in &self.connection {
      let l = ::pb_jelly::Message::compute_size(val);
      connection_size += ::pb_jelly::wire_format::serialized_length(1);
      connection_size += ::pb_jelly::varint::serialized_length(l as u64);
      connection_size += l;
    }
    size += connection_size;
    let mut relay_size = 0;
    for val in &self.relay {
      let l = ::pb_jelly::Message::compute_size(val);
      relay_size += ::pb_jelly::wire_format::serialized_length(2);
      relay_size += ::pb_jelly::varint::serialized_length(l as u64);
      relay_size += l;
    }
    size += relay_size;
    let mut tunnel_size = 0;
    for val in &self.tunnel {
      let l = ::pb_jelly::Message::compute_size(val);
      tunnel_size += ::pb_jelly::wire_format::serialized_length(3);
      tunnel_size += ::pb_jelly::varint::serialized_length(l as u64);
      tunnel_size += l;
    }
    size += tunnel_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.connection {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.relay {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.tunnel {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.connection {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.relay {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.tunnel {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "DeleteOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_manage_connection::DeleteConnectionOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.connection = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "DeleteOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_manage_relay::DeleteRelayOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.relay = Some(val);
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "DeleteOptions", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_manage_tunnel::DeleteTunnelOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tunnel = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for DeleteOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "connection" => {
        ::pb_jelly::reflection::FieldMut::Value(self.connection.get_or_insert_with(::std::default::Default::default))
      }
      "relay" => {
        ::pb_jelly::reflection::FieldMut::Value(self.relay.get_or_insert_with(::std::default::Default::default))
      }
      "tunnel" => {
        ::pb_jelly::reflection::FieldMut::Value(self.tunnel.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct StopOptions {
  /// @gotags: kong:"cmd,help='Stop relay in plumber server'"
  pub relay: ::std::option::Option<super::ps_opts_manage_relay::StopRelayOptions>,
  /// @gotags: kong:"cmd,help='Stop tunnel in plumber server'"
  pub tunnel: ::std::option::Option<super::ps_opts_manage_tunnel::StopTunnelOptions>,
}
impl ::std::default::Default for StopOptions {
  fn default() -> Self {
    StopOptions {
      relay: ::std::default::Default::default(),
      tunnel: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref StopOptions_default: StopOptions = StopOptions::default();
}
impl ::pb_jelly::Message for StopOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "StopOptions",
      full_name: "protos.opts.StopOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "relay",
          full_name: "protos.opts.StopOptions.relay",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tunnel",
          full_name: "protos.opts.StopOptions.tunnel",
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
    let mut relay_size = 0;
    for val in &self.relay {
      let l = ::pb_jelly::Message::compute_size(val);
      relay_size += ::pb_jelly::wire_format::serialized_length(1);
      relay_size += ::pb_jelly::varint::serialized_length(l as u64);
      relay_size += l;
    }
    size += relay_size;
    let mut tunnel_size = 0;
    for val in &self.tunnel {
      let l = ::pb_jelly::Message::compute_size(val);
      tunnel_size += ::pb_jelly::wire_format::serialized_length(2);
      tunnel_size += ::pb_jelly::varint::serialized_length(l as u64);
      tunnel_size += l;
    }
    size += tunnel_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.relay {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.tunnel {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.relay {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.tunnel {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StopOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_manage_relay::StopRelayOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.relay = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "StopOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_manage_tunnel::StopTunnelOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tunnel = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for StopOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "relay" => {
        ::pb_jelly::reflection::FieldMut::Value(self.relay.get_or_insert_with(::std::default::Default::default))
      }
      "tunnel" => {
        ::pb_jelly::reflection::FieldMut::Value(self.tunnel.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct ResumeOptions {
  /// @gotags: kong:"cmd,help='Resume/Start relay in plumber server'"
  pub relay: ::std::option::Option<super::ps_opts_manage_relay::ResumeRelayOptions>,
  /// @gotags: kong:"cmd,help='Resume/Start tunnel in plumber server'"
  pub tunnel: ::std::option::Option<super::ps_opts_manage_tunnel::ResumeTunnelOptions>,
}
impl ::std::default::Default for ResumeOptions {
  fn default() -> Self {
    ResumeOptions {
      relay: ::std::default::Default::default(),
      tunnel: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ResumeOptions_default: ResumeOptions = ResumeOptions::default();
}
impl ::pb_jelly::Message for ResumeOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ResumeOptions",
      full_name: "protos.opts.ResumeOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "relay",
          full_name: "protos.opts.ResumeOptions.relay",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tunnel",
          full_name: "protos.opts.ResumeOptions.tunnel",
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
    let mut relay_size = 0;
    for val in &self.relay {
      let l = ::pb_jelly::Message::compute_size(val);
      relay_size += ::pb_jelly::wire_format::serialized_length(1);
      relay_size += ::pb_jelly::varint::serialized_length(l as u64);
      relay_size += l;
    }
    size += relay_size;
    let mut tunnel_size = 0;
    for val in &self.tunnel {
      let l = ::pb_jelly::Message::compute_size(val);
      tunnel_size += ::pb_jelly::wire_format::serialized_length(2);
      tunnel_size += ::pb_jelly::varint::serialized_length(l as u64);
      tunnel_size += l;
    }
    size += tunnel_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.relay {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.tunnel {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.relay {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.tunnel {
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ResumeOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_manage_relay::ResumeRelayOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.relay = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ResumeOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_manage_tunnel::ResumeTunnelOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tunnel = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for ResumeOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "relay" => {
        ::pb_jelly::reflection::FieldMut::Value(self.relay.get_or_insert_with(::std::default::Default::default))
      }
      "tunnel" => {
        ::pb_jelly::reflection::FieldMut::Value(self.tunnel.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

