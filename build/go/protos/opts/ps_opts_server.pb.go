// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.6
// source: opts/ps_opts_server.proto

package opts

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type ServerOptions struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// @gotags: kong:"default=plumber1,help='Unique ID that identifies this plumber node',env='PLUMBER_SERVER_NODE_ID',required"
	NodeId string `protobuf:"bytes,1,opt,name=node_id,json=nodeId,proto3" json:"node_id,omitempty" kong:"default=plumber1,help='Unique ID that identifies this plumber node',env='PLUMBER_SERVER_NODE_ID',required"`
	// @gotags: kong:"default=aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa,help='ID of the plumber cluster (has to be the same across all nodes)',env='PLUMBER_SERVER_CLUSTER_ID',required"
	ClusterId string `protobuf:"bytes,2,opt,name=cluster_id,json=clusterId,proto3" json:"cluster_id,omitempty" kong:"default=aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa,help='ID of the plumber cluster (has to be the same across all nodes)',env='PLUMBER_SERVER_CLUSTER_ID',required"`
	// @gotags: kong:"help='Host:port that the gRPC server will bind to',env='PLUMBER_SERVER_GRPC_LISTEN_ADDRESS',default=0.0.0.0:9090"
	GrpcListenAddress string `protobuf:"bytes,3,opt,name=grpc_listen_address,json=grpcListenAddress,proto3" json:"grpc_listen_address,omitempty" kong:"help='Host:port that the gRPC server will bind to',env='PLUMBER_SERVER_GRPC_LISTEN_ADDRESS',default=0.0.0.0:9090"`
	// @gotags: kong:"default=streamdal,help='All gRPC requests require this auth token to be set',env='PLUMBER_SERVER_AUTH_TOKEN',required"
	AuthToken string `protobuf:"bytes,4,opt,name=auth_token,json=authToken,proto3" json:"auth_token,omitempty" kong:"default=streamdal,help='All gRPC requests require this auth token to be set',env='PLUMBER_SERVER_AUTH_TOKEN',required"`
	// @gotags: kong:"help='Comma separated list of NATS server URLs (can contain user:password if using auth; only used if --enable-cluster is true)',env='PLUMBER_SERVER_NATS_URL',default='nats://localhost:4222'"
	NatsUrl []string `protobuf:"bytes,5,rep,name=nats_url,json=natsUrl,proto3" json:"nats_url,omitempty" kong:"help='Comma separated list of NATS server URLs (can contain user:password if using auth; only used if --enable-cluster is true)',env='PLUMBER_SERVER_NATS_URL',default='nats://localhost:4222'"`
	// @gotags: kong:"help='Whether to use TLS (only used if --enable-cluster is true)',env='PLUMBER_SERVER_USE_TLS'"
	UseTls bool `protobuf:"varint,500,opt,name=use_tls,json=useTls,proto3" json:"use_tls,omitempty" kong:"help='Whether to use TLS (only used if --enable-cluster is true)',env='PLUMBER_SERVER_USE_TLS'"`
	// @gotags: kong:"help='TLS client cert file (only used if --enable-cluster is true)',env='PLUMBER_SERVER_TLS_CERT_FILE'"
	TlsCertFile string `protobuf:"bytes,6,opt,name=tls_cert_file,json=tlsCertFile,proto3" json:"tls_cert_file,omitempty" kong:"help='TLS client cert file (only used if --enable-cluster is true)',env='PLUMBER_SERVER_TLS_CERT_FILE'"`
	// @gotags: kong:"help='TLS client key file (only used if --enable-cluster is true)',env='PLUMBER_SERVER_TLS_KEY_FILE'"
	TlsKeyFile string `protobuf:"bytes,7,opt,name=tls_key_file,json=tlsKeyFile,proto3" json:"tls_key_file,omitempty" kong:"help='TLS client key file (only used if --enable-cluster is true)',env='PLUMBER_SERVER_TLS_KEY_FILE'"`
	// @gotags: kong:"help='TLS CA certificate file (only used if --enable-cluster is true)',env='PLUMBER_SERVER_TLS_CA_FILE'"
	TlsCaFile string `protobuf:"bytes,8,opt,name=tls_ca_file,json=tlsCaFile,proto3" json:"tls_ca_file,omitempty" kong:"help='TLS CA certificate file (only used if --enable-cluster is true)',env='PLUMBER_SERVER_TLS_CA_FILE'"`
	// @gotags: kong:"help='Skip server cert verification (only used if --enable-cluster is true)',env='PLUMBER_SERVER_TLS_SKIP_VERIFY',default=false"
	TlsSkipVerify bool `protobuf:"varint,9,opt,name=tls_skip_verify,json=tlsSkipVerify,proto3" json:"tls_skip_verify,omitempty" kong:"help='Skip server cert verification (only used if --enable-cluster is true)',env='PLUMBER_SERVER_TLS_SKIP_VERIFY',default=false"`
	// @gotags: kong:"help='Run plumber in cluster mode (will use NATS)',env='PLUMBER_SERVER_ENABLE_CLUSTER',default=false"
	EnableCluster bool `protobuf:"varint,10,opt,name=enable_cluster,json=enableCluster,proto3" json:"enable_cluster,omitempty" kong:"help='Run plumber in cluster mode (will use NATS)',env='PLUMBER_SERVER_ENABLE_CLUSTER',default=false"`
	// @gotags: kong:"help='Location to store time-series data for counters',default='./.tsdata'"
	StatsDatabasePath string `protobuf:"bytes,14,opt,name=stats_database_path,json=statsDatabasePath,proto3" json:"stats_database_path,omitempty" kong:"help='Location to store time-series data for counters',default='./.tsdata'"`
	// @gotags: kong:"help='How often to flush time-series data (in seconds) from memory to storage',default='60'"
	StatsFlushIntervalSeconds int32 `protobuf:"varint,15,opt,name=stats_flush_interval_seconds,json=statsFlushIntervalSeconds,proto3" json:"stats_flush_interval_seconds,omitempty" kong:"help='How often to flush time-series data (in seconds) from memory to storage',default='60'"`
	// @gotags: kong:"help='What address to bind the built-in HTTP server to',env='PLUMBER_SERVER_HTTP_LISTEN_ADDRESS',default='0.0.0.0:9191'"
	HttpListenAddress string `protobuf:"bytes,16,opt,name=http_listen_address,json=httpListenAddress,proto3" json:"http_listen_address,omitempty" kong:"help='What address to bind the built-in HTTP server to',env='PLUMBER_SERVER_HTTP_LISTEN_ADDRESS',default='0.0.0.0:9191'"`
	// @gotags: kong:"help='Allow plumber to be controlled from https://console.streamdal.com',env='PLUMBER_REMOTE_CONTROL_ENABLED',default=false"
	RemoteControlEnabled bool `protobuf:"varint,17,opt,name=remote_control_enabled,json=remoteControlEnabled,proto3" json:"remote_control_enabled,omitempty" kong:"help='Allow plumber to be controlled from https://console.streamdal.com',env='PLUMBER_REMOTE_CONTROL_ENABLED',default=false"`
	// @gotags: kong:"help='Address of Streamdal Plumber remote control service',env='PLUMBER_REMOTE_CONTROL_ADDRESS',default='foreman.streamdal.com:443'"
	RemoteControlAddress string `protobuf:"bytes,18,opt,name=remote_control_address,json=remoteControlAddress,proto3" json:"remote_control_address,omitempty" kong:"help='Address of Streamdal Plumber remote control service',env='PLUMBER_REMOTE_CONTROL_ADDRESS',default='foreman.streamdal.com:443'"`
	// @gotags: kong:"help='Streamdal API token, needed to access remote control service',env='PLUMBER_REMOTE_CONTROL_API_TOKEN'"
	RemoteControlApiToken string `protobuf:"bytes,19,opt,name=remote_control_api_token,json=remoteControlApiToken,proto3" json:"remote_control_api_token,omitempty" kong:"help='Streamdal API token, needed to access remote control service',env='PLUMBER_REMOTE_CONTROL_API_TOKEN'"`
	// @gotags: kong:"help='Connect to remote control server without TLS',default=false"
	RemoteControlDisableTls bool `protobuf:"varint,20,opt,name=remote_control_disable_tls,json=remoteControlDisableTls,proto3" json:"remote_control_disable_tls,omitempty" kong:"help='Connect to remote control server without TLS',default=false"`
	// @gotags: kong:"help='GRPC Collector address',default='grpc-collector.streamdal.com:443'"
	XGrpcAddress string `protobuf:"bytes,21,opt,name=_grpc_address,json=GrpcAddress,proto3" json:"_grpc_address,omitempty" kong:"help='GRPC Collector address',default='grpc-collector.streamdal.com:443'"`
	// @gotags: kong:"help='GRPC Collector initial connection timeout',default=5"
	XGrpcTimeoutSeconds uint32 `protobuf:"varint,22,opt,name=_grpc_timeout_seconds,json=GrpcTimeoutSeconds,proto3" json:"_grpc_timeout_seconds,omitempty" kong:"help='GRPC Collector initial connection timeout',default=5"`
	// @gotags: kong:"help='Use gRPC insecure mode when talking to Streamdal'"
	XGrpcInsecure bool `protobuf:"varint,23,opt,name=_grpc_insecure,json=GrpcInsecure,proto3" json:"_grpc_insecure,omitempty" kong:"help='Use gRPC insecure mode when talking to Streamdal'"`
}

func (x *ServerOptions) Reset() {
	*x = ServerOptions{}
	if protoimpl.UnsafeEnabled {
		mi := &file_opts_ps_opts_server_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ServerOptions) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ServerOptions) ProtoMessage() {}

func (x *ServerOptions) ProtoReflect() protoreflect.Message {
	mi := &file_opts_ps_opts_server_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ServerOptions.ProtoReflect.Descriptor instead.
func (*ServerOptions) Descriptor() ([]byte, []int) {
	return file_opts_ps_opts_server_proto_rawDescGZIP(), []int{0}
}

func (x *ServerOptions) GetNodeId() string {
	if x != nil {
		return x.NodeId
	}
	return ""
}

func (x *ServerOptions) GetClusterId() string {
	if x != nil {
		return x.ClusterId
	}
	return ""
}

func (x *ServerOptions) GetGrpcListenAddress() string {
	if x != nil {
		return x.GrpcListenAddress
	}
	return ""
}

func (x *ServerOptions) GetAuthToken() string {
	if x != nil {
		return x.AuthToken
	}
	return ""
}

func (x *ServerOptions) GetNatsUrl() []string {
	if x != nil {
		return x.NatsUrl
	}
	return nil
}

func (x *ServerOptions) GetUseTls() bool {
	if x != nil {
		return x.UseTls
	}
	return false
}

func (x *ServerOptions) GetTlsCertFile() string {
	if x != nil {
		return x.TlsCertFile
	}
	return ""
}

func (x *ServerOptions) GetTlsKeyFile() string {
	if x != nil {
		return x.TlsKeyFile
	}
	return ""
}

func (x *ServerOptions) GetTlsCaFile() string {
	if x != nil {
		return x.TlsCaFile
	}
	return ""
}

func (x *ServerOptions) GetTlsSkipVerify() bool {
	if x != nil {
		return x.TlsSkipVerify
	}
	return false
}

func (x *ServerOptions) GetEnableCluster() bool {
	if x != nil {
		return x.EnableCluster
	}
	return false
}

func (x *ServerOptions) GetStatsDatabasePath() string {
	if x != nil {
		return x.StatsDatabasePath
	}
	return ""
}

func (x *ServerOptions) GetStatsFlushIntervalSeconds() int32 {
	if x != nil {
		return x.StatsFlushIntervalSeconds
	}
	return 0
}

func (x *ServerOptions) GetHttpListenAddress() string {
	if x != nil {
		return x.HttpListenAddress
	}
	return ""
}

func (x *ServerOptions) GetRemoteControlEnabled() bool {
	if x != nil {
		return x.RemoteControlEnabled
	}
	return false
}

func (x *ServerOptions) GetRemoteControlAddress() string {
	if x != nil {
		return x.RemoteControlAddress
	}
	return ""
}

func (x *ServerOptions) GetRemoteControlApiToken() string {
	if x != nil {
		return x.RemoteControlApiToken
	}
	return ""
}

func (x *ServerOptions) GetRemoteControlDisableTls() bool {
	if x != nil {
		return x.RemoteControlDisableTls
	}
	return false
}

func (x *ServerOptions) GetXGrpcAddress() string {
	if x != nil {
		return x.XGrpcAddress
	}
	return ""
}

func (x *ServerOptions) GetXGrpcTimeoutSeconds() uint32 {
	if x != nil {
		return x.XGrpcTimeoutSeconds
	}
	return 0
}

func (x *ServerOptions) GetXGrpcInsecure() bool {
	if x != nil {
		return x.XGrpcInsecure
	}
	return false
}

var File_opts_ps_opts_server_proto protoreflect.FileDescriptor

var file_opts_ps_opts_server_proto_rawDesc = []byte{
	0x0a, 0x19, 0x6f, 0x70, 0x74, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x6f, 0x70, 0x74, 0x73, 0x5f, 0x73,
	0x65, 0x72, 0x76, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x73, 0x2e, 0x6f, 0x70, 0x74, 0x73, 0x22, 0x86, 0x07, 0x0a, 0x0d, 0x53, 0x65, 0x72,
	0x76, 0x65, 0x72, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x17, 0x0a, 0x07, 0x6e, 0x6f,
	0x64, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x6e, 0x6f, 0x64,
	0x65, 0x49, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x5f, 0x69,
	0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72,
	0x49, 0x64, 0x12, 0x2e, 0x0a, 0x13, 0x67, 0x72, 0x70, 0x63, 0x5f, 0x6c, 0x69, 0x73, 0x74, 0x65,
	0x6e, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x11, 0x67, 0x72, 0x70, 0x63, 0x4c, 0x69, 0x73, 0x74, 0x65, 0x6e, 0x41, 0x64, 0x64, 0x72, 0x65,
	0x73, 0x73, 0x12, 0x1d, 0x0a, 0x0a, 0x61, 0x75, 0x74, 0x68, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e,
	0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x61, 0x75, 0x74, 0x68, 0x54, 0x6f, 0x6b, 0x65,
	0x6e, 0x12, 0x19, 0x0a, 0x08, 0x6e, 0x61, 0x74, 0x73, 0x5f, 0x75, 0x72, 0x6c, 0x18, 0x05, 0x20,
	0x03, 0x28, 0x09, 0x52, 0x07, 0x6e, 0x61, 0x74, 0x73, 0x55, 0x72, 0x6c, 0x12, 0x18, 0x0a, 0x07,
	0x75, 0x73, 0x65, 0x5f, 0x74, 0x6c, 0x73, 0x18, 0xf4, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06,
	0x75, 0x73, 0x65, 0x54, 0x6c, 0x73, 0x12, 0x22, 0x0a, 0x0d, 0x74, 0x6c, 0x73, 0x5f, 0x63, 0x65,
	0x72, 0x74, 0x5f, 0x66, 0x69, 0x6c, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x74,
	0x6c, 0x73, 0x43, 0x65, 0x72, 0x74, 0x46, 0x69, 0x6c, 0x65, 0x12, 0x20, 0x0a, 0x0c, 0x74, 0x6c,
	0x73, 0x5f, 0x6b, 0x65, 0x79, 0x5f, 0x66, 0x69, 0x6c, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0a, 0x74, 0x6c, 0x73, 0x4b, 0x65, 0x79, 0x46, 0x69, 0x6c, 0x65, 0x12, 0x1e, 0x0a, 0x0b,
	0x74, 0x6c, 0x73, 0x5f, 0x63, 0x61, 0x5f, 0x66, 0x69, 0x6c, 0x65, 0x18, 0x08, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x09, 0x74, 0x6c, 0x73, 0x43, 0x61, 0x46, 0x69, 0x6c, 0x65, 0x12, 0x26, 0x0a, 0x0f,
	0x74, 0x6c, 0x73, 0x5f, 0x73, 0x6b, 0x69, 0x70, 0x5f, 0x76, 0x65, 0x72, 0x69, 0x66, 0x79, 0x18,
	0x09, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0d, 0x74, 0x6c, 0x73, 0x53, 0x6b, 0x69, 0x70, 0x56, 0x65,
	0x72, 0x69, 0x66, 0x79, 0x12, 0x25, 0x0a, 0x0e, 0x65, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x5f, 0x63,
	0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0d, 0x65, 0x6e,
	0x61, 0x62, 0x6c, 0x65, 0x43, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x12, 0x2e, 0x0a, 0x13, 0x73,
	0x74, 0x61, 0x74, 0x73, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x62, 0x61, 0x73, 0x65, 0x5f, 0x70, 0x61,
	0x74, 0x68, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x09, 0x52, 0x11, 0x73, 0x74, 0x61, 0x74, 0x73, 0x44,
	0x61, 0x74, 0x61, 0x62, 0x61, 0x73, 0x65, 0x50, 0x61, 0x74, 0x68, 0x12, 0x3f, 0x0a, 0x1c, 0x73,
	0x74, 0x61, 0x74, 0x73, 0x5f, 0x66, 0x6c, 0x75, 0x73, 0x68, 0x5f, 0x69, 0x6e, 0x74, 0x65, 0x72,
	0x76, 0x61, 0x6c, 0x5f, 0x73, 0x65, 0x63, 0x6f, 0x6e, 0x64, 0x73, 0x18, 0x0f, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x19, 0x73, 0x74, 0x61, 0x74, 0x73, 0x46, 0x6c, 0x75, 0x73, 0x68, 0x49, 0x6e, 0x74,
	0x65, 0x72, 0x76, 0x61, 0x6c, 0x53, 0x65, 0x63, 0x6f, 0x6e, 0x64, 0x73, 0x12, 0x2e, 0x0a, 0x13,
	0x68, 0x74, 0x74, 0x70, 0x5f, 0x6c, 0x69, 0x73, 0x74, 0x65, 0x6e, 0x5f, 0x61, 0x64, 0x64, 0x72,
	0x65, 0x73, 0x73, 0x18, 0x10, 0x20, 0x01, 0x28, 0x09, 0x52, 0x11, 0x68, 0x74, 0x74, 0x70, 0x4c,
	0x69, 0x73, 0x74, 0x65, 0x6e, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x34, 0x0a, 0x16,
	0x72, 0x65, 0x6d, 0x6f, 0x74, 0x65, 0x5f, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x5f, 0x65,
	0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x18, 0x11, 0x20, 0x01, 0x28, 0x08, 0x52, 0x14, 0x72, 0x65,
	0x6d, 0x6f, 0x74, 0x65, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x45, 0x6e, 0x61, 0x62, 0x6c,
	0x65, 0x64, 0x12, 0x34, 0x0a, 0x16, 0x72, 0x65, 0x6d, 0x6f, 0x74, 0x65, 0x5f, 0x63, 0x6f, 0x6e,
	0x74, 0x72, 0x6f, 0x6c, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x12, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x14, 0x72, 0x65, 0x6d, 0x6f, 0x74, 0x65, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x6f,
	0x6c, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x37, 0x0a, 0x18, 0x72, 0x65, 0x6d, 0x6f,
	0x74, 0x65, 0x5f, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x5f, 0x61, 0x70, 0x69, 0x5f, 0x74,
	0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x13, 0x20, 0x01, 0x28, 0x09, 0x52, 0x15, 0x72, 0x65, 0x6d, 0x6f,
	0x74, 0x65, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x41, 0x70, 0x69, 0x54, 0x6f, 0x6b, 0x65,
	0x6e, 0x12, 0x3b, 0x0a, 0x1a, 0x72, 0x65, 0x6d, 0x6f, 0x74, 0x65, 0x5f, 0x63, 0x6f, 0x6e, 0x74,
	0x72, 0x6f, 0x6c, 0x5f, 0x64, 0x69, 0x73, 0x61, 0x62, 0x6c, 0x65, 0x5f, 0x74, 0x6c, 0x73, 0x18,
	0x14, 0x20, 0x01, 0x28, 0x08, 0x52, 0x17, 0x72, 0x65, 0x6d, 0x6f, 0x74, 0x65, 0x43, 0x6f, 0x6e,
	0x74, 0x72, 0x6f, 0x6c, 0x44, 0x69, 0x73, 0x61, 0x62, 0x6c, 0x65, 0x54, 0x6c, 0x73, 0x12, 0x22,
	0x0a, 0x0d, 0x5f, 0x67, 0x72, 0x70, 0x63, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18,
	0x15, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x47, 0x72, 0x70, 0x63, 0x41, 0x64, 0x64, 0x72, 0x65,
	0x73, 0x73, 0x12, 0x31, 0x0a, 0x15, 0x5f, 0x67, 0x72, 0x70, 0x63, 0x5f, 0x74, 0x69, 0x6d, 0x65,
	0x6f, 0x75, 0x74, 0x5f, 0x73, 0x65, 0x63, 0x6f, 0x6e, 0x64, 0x73, 0x18, 0x16, 0x20, 0x01, 0x28,
	0x0d, 0x52, 0x12, 0x47, 0x72, 0x70, 0x63, 0x54, 0x69, 0x6d, 0x65, 0x6f, 0x75, 0x74, 0x53, 0x65,
	0x63, 0x6f, 0x6e, 0x64, 0x73, 0x12, 0x24, 0x0a, 0x0e, 0x5f, 0x67, 0x72, 0x70, 0x63, 0x5f, 0x69,
	0x6e, 0x73, 0x65, 0x63, 0x75, 0x72, 0x65, 0x18, 0x17, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0c, 0x47,
	0x72, 0x70, 0x63, 0x49, 0x6e, 0x73, 0x65, 0x63, 0x75, 0x72, 0x65, 0x4a, 0x04, 0x08, 0x0b, 0x10,
	0x0e, 0x42, 0x3b, 0x5a, 0x39, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f,
	0x62, 0x61, 0x74, 0x63, 0x68, 0x63, 0x6f, 0x72, 0x70, 0x2f, 0x70, 0x6c, 0x75, 0x6d, 0x62, 0x65,
	0x72, 0x2d, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x73, 0x2f, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x2f,
	0x67, 0x6f, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x6f, 0x70, 0x74, 0x73, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_opts_ps_opts_server_proto_rawDescOnce sync.Once
	file_opts_ps_opts_server_proto_rawDescData = file_opts_ps_opts_server_proto_rawDesc
)

func file_opts_ps_opts_server_proto_rawDescGZIP() []byte {
	file_opts_ps_opts_server_proto_rawDescOnce.Do(func() {
		file_opts_ps_opts_server_proto_rawDescData = protoimpl.X.CompressGZIP(file_opts_ps_opts_server_proto_rawDescData)
	})
	return file_opts_ps_opts_server_proto_rawDescData
}

var file_opts_ps_opts_server_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_opts_ps_opts_server_proto_goTypes = []interface{}{
	(*ServerOptions)(nil), // 0: protos.opts.ServerOptions
}
var file_opts_ps_opts_server_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_opts_ps_opts_server_proto_init() }
func file_opts_ps_opts_server_proto_init() {
	if File_opts_ps_opts_server_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_opts_ps_opts_server_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ServerOptions); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_opts_ps_opts_server_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_opts_ps_opts_server_proto_goTypes,
		DependencyIndexes: file_opts_ps_opts_server_proto_depIdxs,
		MessageInfos:      file_opts_ps_opts_server_proto_msgTypes,
	}.Build()
	File_opts_ps_opts_server_proto = out.File
	file_opts_ps_opts_server_proto_rawDesc = nil
	file_opts_ps_opts_server_proto_goTypes = nil
	file_opts_ps_opts_server_proto_depIdxs = nil
}
