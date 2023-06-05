// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct GlobalCLIOptions {
  /// @gotags: kong:"help='Enable debug output',short=d"
  pub debug: bool,
  /// @gotags: kong:"help='Disable fancy output (like curl -s)',short=q"
  pub quiet: bool,
  /// @gotags: kong:"help='Display plumber version'"
  pub version: bool,
  // --------------------------------------------------------------------- //
  //                          PRIVATE FIELDS (1000+)                       //
  // --------------------------------------------------------------------- //

  /// @gotags: kong:"-"
  pub _full_command: ::std::string::String,
  /// @gotags: kong:"-"
  pub _action: ::std::string::String,
  /// @gotags: kong:"-"
  pub _backend: ::std::string::String,
  /// @gotags: kong:"-"
  pub _commands: ::std::vec::Vec<::std::string::String>,
}
impl ::std::default::Default for GlobalCLIOptions {
  fn default() -> Self {
    GlobalCLIOptions {
      debug: ::std::default::Default::default(),
      quiet: ::std::default::Default::default(),
      version: ::std::default::Default::default(),
      _full_command: ::std::default::Default::default(),
      _action: ::std::default::Default::default(),
      _backend: ::std::default::Default::default(),
      _commands: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref GlobalCLIOptions_default: GlobalCLIOptions = GlobalCLIOptions::default();
}
impl ::pb_jelly::Message for GlobalCLIOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "GlobalCLIOptions",
      full_name: "protos.opts.GlobalCLIOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "debug",
          full_name: "protos.opts.GlobalCLIOptions.debug",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "quiet",
          full_name: "protos.opts.GlobalCLIOptions.quiet",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "version",
          full_name: "protos.opts.GlobalCLIOptions.version",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_full_command",
          full_name: "protos.opts.GlobalCLIOptions._full_command",
          index: 3,
          number: 1000,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_action",
          full_name: "protos.opts.GlobalCLIOptions._action",
          index: 4,
          number: 1001,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_backend",
          full_name: "protos.opts.GlobalCLIOptions._backend",
          index: 5,
          number: 1002,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "_commands",
          full_name: "protos.opts.GlobalCLIOptions._commands",
          index: 6,
          number: 1003,
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
    let mut debug_size = 0;
    if self.debug != <bool as ::std::default::Default>::default() {
      let val = &self.debug;
      let l = ::pb_jelly::Message::compute_size(val);
      debug_size += ::pb_jelly::wire_format::serialized_length(1);
      debug_size += l;
    }
    size += debug_size;
    let mut quiet_size = 0;
    if self.quiet != <bool as ::std::default::Default>::default() {
      let val = &self.quiet;
      let l = ::pb_jelly::Message::compute_size(val);
      quiet_size += ::pb_jelly::wire_format::serialized_length(2);
      quiet_size += l;
    }
    size += quiet_size;
    let mut version_size = 0;
    if self.version != <bool as ::std::default::Default>::default() {
      let val = &self.version;
      let l = ::pb_jelly::Message::compute_size(val);
      version_size += ::pb_jelly::wire_format::serialized_length(3);
      version_size += l;
    }
    size += version_size;
    let mut _full_command_size = 0;
    if self._full_command != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._full_command;
      let l = ::pb_jelly::Message::compute_size(val);
      _full_command_size += ::pb_jelly::wire_format::serialized_length(1000);
      _full_command_size += ::pb_jelly::varint::serialized_length(l as u64);
      _full_command_size += l;
    }
    size += _full_command_size;
    let mut _action_size = 0;
    if self._action != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._action;
      let l = ::pb_jelly::Message::compute_size(val);
      _action_size += ::pb_jelly::wire_format::serialized_length(1001);
      _action_size += ::pb_jelly::varint::serialized_length(l as u64);
      _action_size += l;
    }
    size += _action_size;
    let mut _backend_size = 0;
    if self._backend != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._backend;
      let l = ::pb_jelly::Message::compute_size(val);
      _backend_size += ::pb_jelly::wire_format::serialized_length(1002);
      _backend_size += ::pb_jelly::varint::serialized_length(l as u64);
      _backend_size += l;
    }
    size += _backend_size;
    let mut _commands_size = 0;
    for val in &self._commands {
      let l = ::pb_jelly::Message::compute_size(val);
      _commands_size += ::pb_jelly::wire_format::serialized_length(1003);
      _commands_size += ::pb_jelly::varint::serialized_length(l as u64);
      _commands_size += l;
    }
    size += _commands_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.debug != <bool as ::std::default::Default>::default() {
      let val = &self.debug;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.quiet != <bool as ::std::default::Default>::default() {
      let val = &self.quiet;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.version != <bool as ::std::default::Default>::default() {
      let val = &self.version;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._full_command != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._full_command;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._action != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._action;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self._backend != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._backend;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self._commands {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.debug != <bool as ::std::default::Default>::default() {
      let val = &self.debug;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.quiet != <bool as ::std::default::Default>::default() {
      let val = &self.quiet;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.version != <bool as ::std::default::Default>::default() {
      let val = &self.version;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self._full_command != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._full_command;
      ::pb_jelly::wire_format::write(1000, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self._action != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._action;
      ::pb_jelly::wire_format::write(1001, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self._backend != <::std::string::String as ::std::default::Default>::default() {
      let val = &self._backend;
      ::pb_jelly::wire_format::write(1002, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self._commands {
      ::pb_jelly::wire_format::write(1003, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "GlobalCLIOptions", 1)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.debug = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "GlobalCLIOptions", 2)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.quiet = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "GlobalCLIOptions", 3)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.version = val;
        }
        1000 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GlobalCLIOptions", 1000)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._full_command = val;
        }
        1001 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GlobalCLIOptions", 1001)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._action = val;
        }
        1002 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GlobalCLIOptions", 1002)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._backend = val;
        }
        1003 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "GlobalCLIOptions", 1003)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self._commands.push(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for GlobalCLIOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "debug" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.debug)
      }
      "quiet" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.quiet)
      }
      "version" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.version)
      }
      "_full_command" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._full_command)
      }
      "_action" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._action)
      }
      "_backend" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self._backend)
      }
      "_commands" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

/// CLI options in plumber are derived 100% from the protobuf schemas.
/// The CLIOptions type is used for populating base CLI options. Introducing
/// a top-level CLI option should begin here (and trickle all the way down to
/// any newly introduced types).

/// For more info, check README_CLI.md
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct CLIOptions {
  /// @gotags: kong:"embed"
  pub global: ::std::option::Option<GlobalCLIOptions>,
  /// @gotags: kong:"cmd,help='Read message(s) from messaging system'"
  pub read: ::std::option::Option<super::ps_opts_read::ReadOptions>,
  /// @gotags: kong:"cmd,help='Write message(s) to messaging system'"
  pub write: ::std::option::Option<super::ps_opts_write::WriteOptions>,
  /// @gotags: kong:"cmd,help='Relay message(s) from messaging system to Streamdal'"
  pub relay: ::std::option::Option<super::ps_opts_relay::RelayOptions>,
  /// @gotags: kong:"cmd,help='Use plumber as a destination tunnel in Streamdal'"
  pub tunnel: ::std::option::Option<super::ps_opts_tunnel::TunnelOptions>,
  /// @gotags: kong:"cmd,help='Control your Streamdal resources via the public API'"
  pub streamdal: ::std::option::Option<super::ps_opts_streamdal::StreamdalOptions>,
  /// @gotags: kong:"cmd,help='Run plumber in server mode'"
  pub server: ::std::option::Option<super::ps_opts_server::ServerOptions>,
  /// @gotags: kong:"cmd,help='Manage plumber server'"
  pub manage: ::std::option::Option<super::ps_opts_manage::ManageOptions>,
}
impl ::std::default::Default for CLIOptions {
  fn default() -> Self {
    CLIOptions {
      global: ::std::default::Default::default(),
      read: ::std::default::Default::default(),
      write: ::std::default::Default::default(),
      relay: ::std::default::Default::default(),
      tunnel: ::std::default::Default::default(),
      streamdal: ::std::default::Default::default(),
      server: ::std::default::Default::default(),
      manage: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref CLIOptions_default: CLIOptions = CLIOptions::default();
}
impl ::pb_jelly::Message for CLIOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "CLIOptions",
      full_name: "protos.opts.CLIOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "global",
          full_name: "protos.opts.CLIOptions.global",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "read",
          full_name: "protos.opts.CLIOptions.read",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "write",
          full_name: "protos.opts.CLIOptions.write",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "relay",
          full_name: "protos.opts.CLIOptions.relay",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tunnel",
          full_name: "protos.opts.CLIOptions.tunnel",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "streamdal",
          full_name: "protos.opts.CLIOptions.streamdal",
          index: 5,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "server",
          full_name: "protos.opts.CLIOptions.server",
          index: 6,
          number: 7,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "manage",
          full_name: "protos.opts.CLIOptions.manage",
          index: 7,
          number: 8,
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
    let mut global_size = 0;
    for val in &self.global {
      let l = ::pb_jelly::Message::compute_size(val);
      global_size += ::pb_jelly::wire_format::serialized_length(1);
      global_size += ::pb_jelly::varint::serialized_length(l as u64);
      global_size += l;
    }
    size += global_size;
    let mut read_size = 0;
    for val in &self.read {
      let l = ::pb_jelly::Message::compute_size(val);
      read_size += ::pb_jelly::wire_format::serialized_length(2);
      read_size += ::pb_jelly::varint::serialized_length(l as u64);
      read_size += l;
    }
    size += read_size;
    let mut write_size = 0;
    for val in &self.write {
      let l = ::pb_jelly::Message::compute_size(val);
      write_size += ::pb_jelly::wire_format::serialized_length(3);
      write_size += ::pb_jelly::varint::serialized_length(l as u64);
      write_size += l;
    }
    size += write_size;
    let mut relay_size = 0;
    for val in &self.relay {
      let l = ::pb_jelly::Message::compute_size(val);
      relay_size += ::pb_jelly::wire_format::serialized_length(4);
      relay_size += ::pb_jelly::varint::serialized_length(l as u64);
      relay_size += l;
    }
    size += relay_size;
    let mut tunnel_size = 0;
    for val in &self.tunnel {
      let l = ::pb_jelly::Message::compute_size(val);
      tunnel_size += ::pb_jelly::wire_format::serialized_length(5);
      tunnel_size += ::pb_jelly::varint::serialized_length(l as u64);
      tunnel_size += l;
    }
    size += tunnel_size;
    let mut streamdal_size = 0;
    for val in &self.streamdal {
      let l = ::pb_jelly::Message::compute_size(val);
      streamdal_size += ::pb_jelly::wire_format::serialized_length(6);
      streamdal_size += ::pb_jelly::varint::serialized_length(l as u64);
      streamdal_size += l;
    }
    size += streamdal_size;
    let mut server_size = 0;
    for val in &self.server {
      let l = ::pb_jelly::Message::compute_size(val);
      server_size += ::pb_jelly::wire_format::serialized_length(7);
      server_size += ::pb_jelly::varint::serialized_length(l as u64);
      server_size += l;
    }
    size += server_size;
    let mut manage_size = 0;
    for val in &self.manage {
      let l = ::pb_jelly::Message::compute_size(val);
      manage_size += ::pb_jelly::wire_format::serialized_length(8);
      manage_size += ::pb_jelly::varint::serialized_length(l as u64);
      manage_size += l;
    }
    size += manage_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    for val in &self.global {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.read {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.write {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.relay {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.tunnel {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.streamdal {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.server {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.manage {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    for val in &self.global {
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.read {
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.write {
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.relay {
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.tunnel {
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.streamdal {
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.server {
      ::pb_jelly::wire_format::write(7, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.manage {
      ::pb_jelly::wire_format::write(8, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
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
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CLIOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: GlobalCLIOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.global = Some(val);
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CLIOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_read::ReadOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.read = Some(val);
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CLIOptions", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_write::WriteOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.write = Some(val);
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CLIOptions", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_relay::RelayOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.relay = Some(val);
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CLIOptions", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_tunnel::TunnelOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tunnel = Some(val);
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CLIOptions", 6)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_streamdal::StreamdalOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.streamdal = Some(val);
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CLIOptions", 7)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_server::ServerOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.server = Some(val);
        }
        8 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "CLIOptions", 8)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: super::ps_opts_manage::ManageOptions = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.manage = Some(val);
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for CLIOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "global" => {
        ::pb_jelly::reflection::FieldMut::Value(self.global.get_or_insert_with(::std::default::Default::default))
      }
      "read" => {
        ::pb_jelly::reflection::FieldMut::Value(self.read.get_or_insert_with(::std::default::Default::default))
      }
      "write" => {
        ::pb_jelly::reflection::FieldMut::Value(self.write.get_or_insert_with(::std::default::Default::default))
      }
      "relay" => {
        ::pb_jelly::reflection::FieldMut::Value(self.relay.get_or_insert_with(::std::default::Default::default))
      }
      "tunnel" => {
        ::pb_jelly::reflection::FieldMut::Value(self.tunnel.get_or_insert_with(::std::default::Default::default))
      }
      "streamdal" => {
        ::pb_jelly::reflection::FieldMut::Value(self.streamdal.get_or_insert_with(::std::default::Default::default))
      }
      "server" => {
        ::pb_jelly::reflection::FieldMut::Value(self.server.get_or_insert_with(::std::default::Default::default))
      }
      "manage" => {
        ::pb_jelly::reflection::FieldMut::Value(self.manage.get_or_insert_with(::std::default::Default::default))
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

