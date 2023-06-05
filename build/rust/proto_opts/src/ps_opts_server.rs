// @generated, do not edit
#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct ServerOptions {
  /// @gotags: kong:"default=plumber1,help='Unique ID that identifies this plumber node',env='PLUMBER_SERVER_NODE_ID',required"
  pub node_id: ::std::string::String,
  /// @gotags: kong:"default=aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa,help='ID of the plumber cluster (has to be the same across all nodes)',env='PLUMBER_SERVER_CLUSTER_ID',required"
  pub cluster_id: ::std::string::String,
  /// @gotags: kong:"help='Host:port that the gRPC server will bind to',env='PLUMBER_SERVER_GRPC_LISTEN_ADDRESS',default=0.0.0.0:9090"
  pub grpc_listen_address: ::std::string::String,
  /// @gotags: kong:"default=streamdal,help='All gRPC requests require this auth token to be set',env='PLUMBER_SERVER_AUTH_TOKEN',required"
  pub auth_token: ::std::string::String,
  /// @gotags: kong:"help='Comma separated list of NATS server URLs (can contain user:password if using auth; only used if --enable-cluster is true)',env='PLUMBER_SERVER_NATS_URL',default='nats://localhost:4222'"
  pub nats_url: ::std::vec::Vec<::std::string::String>,
  /// @gotags: kong:"help='Whether to use TLS (only used if --enable-cluster is true)',env='PLUMBER_SERVER_USE_TLS'"
  pub use_tls: bool,
  /// @gotags: kong:"help='TLS client cert file (only used if --enable-cluster is true)',env='PLUMBER_SERVER_TLS_CERT_FILE'"
  pub tls_cert_file: ::std::string::String,
  /// @gotags: kong:"help='TLS client key file (only used if --enable-cluster is true)',env='PLUMBER_SERVER_TLS_KEY_FILE'"
  pub tls_key_file: ::std::string::String,
  /// @gotags: kong:"help='TLS CA certificate file (only used if --enable-cluster is true)',env='PLUMBER_SERVER_TLS_CA_FILE'"
  pub tls_ca_file: ::std::string::String,
  /// @gotags: kong:"help='Skip server cert verification (only used if --enable-cluster is true)',env='PLUMBER_SERVER_TLS_SKIP_VERIFY',default=false"
  pub tls_skip_verify: bool,
  /// @gotags: kong:"help='Run plumber in cluster mode (will use NATS)',env='PLUMBER_SERVER_ENABLE_CLUSTER',default=false"
  pub enable_cluster: bool,
  /// @gotags: kong:"help='Location to store time-series data for counters',default='./.tsdata'"
  pub stats_database_path: ::std::string::String,
  /// @gotags: kong:"help='How often to flush time-series data (in seconds) from memory to storage',default='60'"
  pub stats_flush_interval_seconds: i32,
  /// @gotags: kong:"help='What address to bind the built-in HTTP server to',default='0.0.0.0:9191'"
  pub http_listen_address: ::std::string::String,
  /// @gotags: kong:"help='Allow plumber to be controlled from https://console.streamdal.com',env='PLUMBER_REMOTE_CONTROL_ENABLED',default=false"
  pub remote_control_enabled: bool,
  /// @gotags: kong:"help='Address of Streamdal Plumber remote control service',env='PLUMBER_REMOTE_CONTROL_ADDRESS',default='foreman.streamdal.com:443'"
  pub remote_control_address: ::std::string::String,
  /// @gotags: kong:"help='Streamdal API token, needed to access remote control service',env='PLUMBER_REMOTE_CONTROL_API_TOKEN'"
  pub remote_control_api_token: ::std::string::String,
  /// @gotags: kong:"help='Connect to remote control server without TLS',default=false"
  pub remote_control_disable_tls: bool,
}
impl ::std::default::Default for ServerOptions {
  fn default() -> Self {
    ServerOptions {
      node_id: ::std::default::Default::default(),
      cluster_id: ::std::default::Default::default(),
      grpc_listen_address: ::std::default::Default::default(),
      auth_token: ::std::default::Default::default(),
      nats_url: ::std::default::Default::default(),
      use_tls: ::std::default::Default::default(),
      tls_cert_file: ::std::default::Default::default(),
      tls_key_file: ::std::default::Default::default(),
      tls_ca_file: ::std::default::Default::default(),
      tls_skip_verify: ::std::default::Default::default(),
      enable_cluster: ::std::default::Default::default(),
      stats_database_path: ::std::default::Default::default(),
      stats_flush_interval_seconds: ::std::default::Default::default(),
      http_listen_address: ::std::default::Default::default(),
      remote_control_enabled: ::std::default::Default::default(),
      remote_control_address: ::std::default::Default::default(),
      remote_control_api_token: ::std::default::Default::default(),
      remote_control_disable_tls: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref ServerOptions_default: ServerOptions = ServerOptions::default();
}
impl ::pb_jelly::Message for ServerOptions {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "ServerOptions",
      full_name: "protos.opts.ServerOptions",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "node_id",
          full_name: "protos.opts.ServerOptions.node_id",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "cluster_id",
          full_name: "protos.opts.ServerOptions.cluster_id",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "grpc_listen_address",
          full_name: "protos.opts.ServerOptions.grpc_listen_address",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "auth_token",
          full_name: "protos.opts.ServerOptions.auth_token",
          index: 3,
          number: 4,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "nats_url",
          full_name: "protos.opts.ServerOptions.nats_url",
          index: 4,
          number: 5,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Repeated,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "use_tls",
          full_name: "protos.opts.ServerOptions.use_tls",
          index: 5,
          number: 500,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_cert_file",
          full_name: "protos.opts.ServerOptions.tls_cert_file",
          index: 6,
          number: 6,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_key_file",
          full_name: "protos.opts.ServerOptions.tls_key_file",
          index: 7,
          number: 7,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_ca_file",
          full_name: "protos.opts.ServerOptions.tls_ca_file",
          index: 8,
          number: 8,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "tls_skip_verify",
          full_name: "protos.opts.ServerOptions.tls_skip_verify",
          index: 9,
          number: 9,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "enable_cluster",
          full_name: "protos.opts.ServerOptions.enable_cluster",
          index: 10,
          number: 10,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "stats_database_path",
          full_name: "protos.opts.ServerOptions.stats_database_path",
          index: 11,
          number: 14,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "stats_flush_interval_seconds",
          full_name: "protos.opts.ServerOptions.stats_flush_interval_seconds",
          index: 12,
          number: 15,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "http_listen_address",
          full_name: "protos.opts.ServerOptions.http_listen_address",
          index: 13,
          number: 16,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "remote_control_enabled",
          full_name: "protos.opts.ServerOptions.remote_control_enabled",
          index: 14,
          number: 17,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "remote_control_address",
          full_name: "protos.opts.ServerOptions.remote_control_address",
          index: 15,
          number: 18,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "remote_control_api_token",
          full_name: "protos.opts.ServerOptions.remote_control_api_token",
          index: 16,
          number: 19,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "remote_control_disable_tls",
          full_name: "protos.opts.ServerOptions.remote_control_disable_tls",
          index: 17,
          number: 20,
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
    let mut node_id_size = 0;
    if self.node_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.node_id;
      let l = ::pb_jelly::Message::compute_size(val);
      node_id_size += ::pb_jelly::wire_format::serialized_length(1);
      node_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      node_id_size += l;
    }
    size += node_id_size;
    let mut cluster_id_size = 0;
    if self.cluster_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.cluster_id;
      let l = ::pb_jelly::Message::compute_size(val);
      cluster_id_size += ::pb_jelly::wire_format::serialized_length(2);
      cluster_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      cluster_id_size += l;
    }
    size += cluster_id_size;
    let mut grpc_listen_address_size = 0;
    if self.grpc_listen_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.grpc_listen_address;
      let l = ::pb_jelly::Message::compute_size(val);
      grpc_listen_address_size += ::pb_jelly::wire_format::serialized_length(3);
      grpc_listen_address_size += ::pb_jelly::varint::serialized_length(l as u64);
      grpc_listen_address_size += l;
    }
    size += grpc_listen_address_size;
    let mut auth_token_size = 0;
    if self.auth_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.auth_token;
      let l = ::pb_jelly::Message::compute_size(val);
      auth_token_size += ::pb_jelly::wire_format::serialized_length(4);
      auth_token_size += ::pb_jelly::varint::serialized_length(l as u64);
      auth_token_size += l;
    }
    size += auth_token_size;
    let mut nats_url_size = 0;
    for val in &self.nats_url {
      let l = ::pb_jelly::Message::compute_size(val);
      nats_url_size += ::pb_jelly::wire_format::serialized_length(5);
      nats_url_size += ::pb_jelly::varint::serialized_length(l as u64);
      nats_url_size += l;
    }
    size += nats_url_size;
    let mut use_tls_size = 0;
    if self.use_tls != <bool as ::std::default::Default>::default() {
      let val = &self.use_tls;
      let l = ::pb_jelly::Message::compute_size(val);
      use_tls_size += ::pb_jelly::wire_format::serialized_length(500);
      use_tls_size += l;
    }
    size += use_tls_size;
    let mut tls_cert_file_size = 0;
    if self.tls_cert_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_cert_file;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_cert_file_size += ::pb_jelly::wire_format::serialized_length(6);
      tls_cert_file_size += ::pb_jelly::varint::serialized_length(l as u64);
      tls_cert_file_size += l;
    }
    size += tls_cert_file_size;
    let mut tls_key_file_size = 0;
    if self.tls_key_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_key_file;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_key_file_size += ::pb_jelly::wire_format::serialized_length(7);
      tls_key_file_size += ::pb_jelly::varint::serialized_length(l as u64);
      tls_key_file_size += l;
    }
    size += tls_key_file_size;
    let mut tls_ca_file_size = 0;
    if self.tls_ca_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_ca_file;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_ca_file_size += ::pb_jelly::wire_format::serialized_length(8);
      tls_ca_file_size += ::pb_jelly::varint::serialized_length(l as u64);
      tls_ca_file_size += l;
    }
    size += tls_ca_file_size;
    let mut tls_skip_verify_size = 0;
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      let l = ::pb_jelly::Message::compute_size(val);
      tls_skip_verify_size += ::pb_jelly::wire_format::serialized_length(9);
      tls_skip_verify_size += l;
    }
    size += tls_skip_verify_size;
    let mut enable_cluster_size = 0;
    if self.enable_cluster != <bool as ::std::default::Default>::default() {
      let val = &self.enable_cluster;
      let l = ::pb_jelly::Message::compute_size(val);
      enable_cluster_size += ::pb_jelly::wire_format::serialized_length(10);
      enable_cluster_size += l;
    }
    size += enable_cluster_size;
    let mut stats_database_path_size = 0;
    if self.stats_database_path != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.stats_database_path;
      let l = ::pb_jelly::Message::compute_size(val);
      stats_database_path_size += ::pb_jelly::wire_format::serialized_length(14);
      stats_database_path_size += ::pb_jelly::varint::serialized_length(l as u64);
      stats_database_path_size += l;
    }
    size += stats_database_path_size;
    let mut stats_flush_interval_seconds_size = 0;
    if self.stats_flush_interval_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.stats_flush_interval_seconds;
      let l = ::pb_jelly::Message::compute_size(val);
      stats_flush_interval_seconds_size += ::pb_jelly::wire_format::serialized_length(15);
      stats_flush_interval_seconds_size += l;
    }
    size += stats_flush_interval_seconds_size;
    let mut http_listen_address_size = 0;
    if self.http_listen_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.http_listen_address;
      let l = ::pb_jelly::Message::compute_size(val);
      http_listen_address_size += ::pb_jelly::wire_format::serialized_length(16);
      http_listen_address_size += ::pb_jelly::varint::serialized_length(l as u64);
      http_listen_address_size += l;
    }
    size += http_listen_address_size;
    let mut remote_control_enabled_size = 0;
    if self.remote_control_enabled != <bool as ::std::default::Default>::default() {
      let val = &self.remote_control_enabled;
      let l = ::pb_jelly::Message::compute_size(val);
      remote_control_enabled_size += ::pb_jelly::wire_format::serialized_length(17);
      remote_control_enabled_size += l;
    }
    size += remote_control_enabled_size;
    let mut remote_control_address_size = 0;
    if self.remote_control_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.remote_control_address;
      let l = ::pb_jelly::Message::compute_size(val);
      remote_control_address_size += ::pb_jelly::wire_format::serialized_length(18);
      remote_control_address_size += ::pb_jelly::varint::serialized_length(l as u64);
      remote_control_address_size += l;
    }
    size += remote_control_address_size;
    let mut remote_control_api_token_size = 0;
    if self.remote_control_api_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.remote_control_api_token;
      let l = ::pb_jelly::Message::compute_size(val);
      remote_control_api_token_size += ::pb_jelly::wire_format::serialized_length(19);
      remote_control_api_token_size += ::pb_jelly::varint::serialized_length(l as u64);
      remote_control_api_token_size += l;
    }
    size += remote_control_api_token_size;
    let mut remote_control_disable_tls_size = 0;
    if self.remote_control_disable_tls != <bool as ::std::default::Default>::default() {
      let val = &self.remote_control_disable_tls;
      let l = ::pb_jelly::Message::compute_size(val);
      remote_control_disable_tls_size += ::pb_jelly::wire_format::serialized_length(20);
      remote_control_disable_tls_size += l;
    }
    size += remote_control_disable_tls_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.node_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.node_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.cluster_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.cluster_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.grpc_listen_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.grpc_listen_address;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.auth_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.auth_token;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    for val in &self.nats_url {
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.use_tls != <bool as ::std::default::Default>::default() {
      let val = &self.use_tls;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.tls_cert_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_cert_file;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.tls_key_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_key_file;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.tls_ca_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_ca_file;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.enable_cluster != <bool as ::std::default::Default>::default() {
      let val = &self.enable_cluster;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.stats_database_path != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.stats_database_path;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.stats_flush_interval_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.stats_flush_interval_seconds;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.http_listen_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.http_listen_address;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.remote_control_enabled != <bool as ::std::default::Default>::default() {
      let val = &self.remote_control_enabled;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.remote_control_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.remote_control_address;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.remote_control_api_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.remote_control_api_token;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.remote_control_disable_tls != <bool as ::std::default::Default>::default() {
      let val = &self.remote_control_disable_tls;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.node_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.node_id;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.cluster_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.cluster_id;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.grpc_listen_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.grpc_listen_address;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.auth_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.auth_token;
      ::pb_jelly::wire_format::write(4, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    for val in &self.nats_url {
      ::pb_jelly::wire_format::write(5, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.tls_cert_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_cert_file;
      ::pb_jelly::wire_format::write(6, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.tls_key_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_key_file;
      ::pb_jelly::wire_format::write(7, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.tls_ca_file != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.tls_ca_file;
      ::pb_jelly::wire_format::write(8, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.tls_skip_verify != <bool as ::std::default::Default>::default() {
      let val = &self.tls_skip_verify;
      ::pb_jelly::wire_format::write(9, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.enable_cluster != <bool as ::std::default::Default>::default() {
      let val = &self.enable_cluster;
      ::pb_jelly::wire_format::write(10, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.stats_database_path != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.stats_database_path;
      ::pb_jelly::wire_format::write(14, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.stats_flush_interval_seconds != <i32 as ::std::default::Default>::default() {
      let val = &self.stats_flush_interval_seconds;
      ::pb_jelly::wire_format::write(15, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.http_listen_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.http_listen_address;
      ::pb_jelly::wire_format::write(16, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.remote_control_enabled != <bool as ::std::default::Default>::default() {
      let val = &self.remote_control_enabled;
      ::pb_jelly::wire_format::write(17, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.remote_control_address != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.remote_control_address;
      ::pb_jelly::wire_format::write(18, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.remote_control_api_token != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.remote_control_api_token;
      ::pb_jelly::wire_format::write(19, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.remote_control_disable_tls != <bool as ::std::default::Default>::default() {
      let val = &self.remote_control_disable_tls;
      ::pb_jelly::wire_format::write(20, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.use_tls != <bool as ::std::default::Default>::default() {
      let val = &self.use_tls;
      ::pb_jelly::wire_format::write(500, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ServerOptions", 1)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.node_id = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ServerOptions", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.cluster_id = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ServerOptions", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.grpc_listen_address = val;
        }
        4 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ServerOptions", 4)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.auth_token = val;
        }
        5 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ServerOptions", 5)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.nats_url.push(val);
        }
        500 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "ServerOptions", 500)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.use_tls = val;
        }
        6 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ServerOptions", 6)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_cert_file = val;
        }
        7 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ServerOptions", 7)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_key_file = val;
        }
        8 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ServerOptions", 8)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.tls_ca_file = val;
        }
        9 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "ServerOptions", 9)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.tls_skip_verify = val;
        }
        10 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "ServerOptions", 10)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.enable_cluster = val;
        }
        14 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ServerOptions", 14)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.stats_database_path = val;
        }
        15 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "ServerOptions", 15)?;
          let mut val: i32 = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.stats_flush_interval_seconds = val;
        }
        16 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ServerOptions", 16)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.http_listen_address = val;
        }
        17 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "ServerOptions", 17)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.remote_control_enabled = val;
        }
        18 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ServerOptions", 18)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.remote_control_address = val;
        }
        19 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "ServerOptions", 19)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.remote_control_api_token = val;
        }
        20 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "ServerOptions", 20)?;
          let mut val: bool = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.remote_control_disable_tls = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for ServerOptions {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "node_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.node_id)
      }
      "cluster_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.cluster_id)
      }
      "grpc_listen_address" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.grpc_listen_address)
      }
      "auth_token" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.auth_token)
      }
      "nats_url" => {
        unimplemented!("Repeated fields are not currently supported.")
      }
      "use_tls" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.use_tls)
      }
      "tls_cert_file" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.tls_cert_file)
      }
      "tls_key_file" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.tls_key_file)
      }
      "tls_ca_file" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.tls_ca_file)
      }
      "tls_skip_verify" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.tls_skip_verify)
      }
      "enable_cluster" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.enable_cluster)
      }
      "stats_database_path" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.stats_database_path)
      }
      "stats_flush_interval_seconds" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.stats_flush_interval_seconds)
      }
      "http_listen_address" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.http_listen_address)
      }
      "remote_control_enabled" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.remote_control_enabled)
      }
      "remote_control_address" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.remote_control_address)
      }
      "remote_control_api_token" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.remote_control_api_token)
      }
      "remote_control_disable_tls" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.remote_control_disable_tls)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

