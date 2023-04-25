// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.6
// source: ps_args_nats_streaming.proto

package args

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

type NatsStreamingTLSOptions struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// @gotags: kong:"help='CA file (only needed if addr is tls://*)',env='PLUMBER_RELAY_NATS_STREAMING_TLS_CA_CERT'"
	TlsCaCert string `protobuf:"bytes,1,opt,name=tls_ca_cert,json=tlsCaCert,proto3" json:"tls_ca_cert,omitempty"`
	// @gotags: kong:"help='Client cert file (only needed if addr is tls://*)',env='PLUMBER_RELAY_NATS_STREAMING_TLS_CLIENT_CERT'"
	TlsClientCert string `protobuf:"bytes,2,opt,name=tls_client_cert,json=tlsClientCert,proto3" json:"tls_client_cert,omitempty"`
	// @gotags: kong:"help='Client key file (only needed if addr is tls://*)',env='PLUMBER_RELAY_NATS_STREAMING_TLS_CLIENT_KEY'"
	TlsClientKey string `protobuf:"bytes,3,opt,name=tls_client_key,json=tlsClientKey,proto3" json:"tls_client_key,omitempty"`
	// @gotags: kong:"help='Whether to verify server certificate',env='PLUMBER_RELAY_NATS_STREAMING_SKIP_VERIFY_TLS'"
	TlsSkipVerify bool `protobuf:"varint,4,opt,name=tls_skip_verify,json=tlsSkipVerify,proto3" json:"tls_skip_verify,omitempty"`
	// @gotags: kong:"help='Enable TLS',env='PLUMBER_RELAY_NATS_STREAMING_USE_TLS'"
	UseTls bool `protobuf:"varint,5,opt,name=use_tls,json=useTls,proto3" json:"use_tls,omitempty"`
}

func (x *NatsStreamingTLSOptions) Reset() {
	*x = NatsStreamingTLSOptions{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_args_nats_streaming_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NatsStreamingTLSOptions) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NatsStreamingTLSOptions) ProtoMessage() {}

func (x *NatsStreamingTLSOptions) ProtoReflect() protoreflect.Message {
	mi := &file_ps_args_nats_streaming_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NatsStreamingTLSOptions.ProtoReflect.Descriptor instead.
func (*NatsStreamingTLSOptions) Descriptor() ([]byte, []int) {
	return file_ps_args_nats_streaming_proto_rawDescGZIP(), []int{0}
}

func (x *NatsStreamingTLSOptions) GetTlsCaCert() string {
	if x != nil {
		return x.TlsCaCert
	}
	return ""
}

func (x *NatsStreamingTLSOptions) GetTlsClientCert() string {
	if x != nil {
		return x.TlsClientCert
	}
	return ""
}

func (x *NatsStreamingTLSOptions) GetTlsClientKey() string {
	if x != nil {
		return x.TlsClientKey
	}
	return ""
}

func (x *NatsStreamingTLSOptions) GetTlsSkipVerify() bool {
	if x != nil {
		return x.TlsSkipVerify
	}
	return false
}

func (x *NatsStreamingTLSOptions) GetUseTls() bool {
	if x != nil {
		return x.UseTls
	}
	return false
}

type NatsStreamingConn struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// @gotags: kong:"help='Dial string for NATS server. Ex: nats://localhost:4222',default='nats://localhost:4222',env='PLUMBER_RELAY_NATS_STREAMING_DSN'"
	Dsn string `protobuf:"bytes,1,opt,name=dsn,proto3" json:"dsn,omitempty"`
	// @gotags: kong:"help='NATS .creds file containing authentication credentials',env='PLUMBER_RELAY_NATS_STREAMING_CREDENTIALS'"
	UserCredentials string `protobuf:"bytes,2,opt,name=user_credentials,json=userCredentials,proto3" json:"user_credentials,omitempty"`
	// @gotags: kong:"help='Cluster ID of the Nats server',required,env='PLUMBER_RELAY_NATS_STREAMING_CLUSTER_ID'"
	ClusterId string `protobuf:"bytes,3,opt,name=cluster_id,json=clusterId,proto3" json:"cluster_id,omitempty"`
	// @gotags: kong:"help='User specified client ID to connect with',default='plumber',env='PLUMBER_RELAY_NATS_STREAMING_CLIENT_ID'"
	ClientId string `protobuf:"bytes,4,opt,name=client_id,json=clientId,proto3" json:"client_id,omitempty"`
	// @gotags: kong:"embed"
	TlsOptions *NatsStreamingTLSOptions `protobuf:"bytes,5,opt,name=tls_options,json=tlsOptions,proto3" json:"tls_options,omitempty"`
}

func (x *NatsStreamingConn) Reset() {
	*x = NatsStreamingConn{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_args_nats_streaming_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NatsStreamingConn) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NatsStreamingConn) ProtoMessage() {}

func (x *NatsStreamingConn) ProtoReflect() protoreflect.Message {
	mi := &file_ps_args_nats_streaming_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NatsStreamingConn.ProtoReflect.Descriptor instead.
func (*NatsStreamingConn) Descriptor() ([]byte, []int) {
	return file_ps_args_nats_streaming_proto_rawDescGZIP(), []int{1}
}

func (x *NatsStreamingConn) GetDsn() string {
	if x != nil {
		return x.Dsn
	}
	return ""
}

func (x *NatsStreamingConn) GetUserCredentials() string {
	if x != nil {
		return x.UserCredentials
	}
	return ""
}

func (x *NatsStreamingConn) GetClusterId() string {
	if x != nil {
		return x.ClusterId
	}
	return ""
}

func (x *NatsStreamingConn) GetClientId() string {
	if x != nil {
		return x.ClientId
	}
	return ""
}

func (x *NatsStreamingConn) GetTlsOptions() *NatsStreamingTLSOptions {
	if x != nil {
		return x.TlsOptions
	}
	return nil
}

type NatsStreamingReadArgs struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// @gotags: kong:"help='NATS stream channel. Ex: orders',env='PLUMBER_RELAY_NATS_STREAMING_CHANNEL'"
	Channel string `protobuf:"bytes,1,opt,name=channel,proto3" json:"channel,omitempty"`
	// @gotags: kong:"help='Create a durable subscription with this name for the given channel',env='PLUMBER_RELAY_NATS_STREAMING_DURABLE_SUBSCRIPTION_NAME'"
	DurableName string `protobuf:"bytes,2,opt,name=durable_name,json=durableName,proto3" json:"durable_name,omitempty"`
	// @gotags: kong:"help='Deliver starting with last published message',xor=nats_delivery_option,env='PLUMBER_RELAY_NATS_STREAMING_READ_LAST'"
	ReadLastAvailable bool `protobuf:"varint,3,opt,name=read_last_available,json=readLastAvailable,proto3" json:"read_last_available,omitempty"`
	// @gotags: kong:"help='Deliver messages starting at sequence number',xor=nats_delivery_option,env='PLUMBER_RELAY_NATS_STREAMING_READ_SEQUENCE'"
	ReadSequenceNumber uint32 `protobuf:"varint,4,opt,name=read_sequence_number,json=readSequenceNumber,proto3" json:"read_sequence_number,omitempty"`
	// @gotags: kong:"help='Deliver messages in last interval (e.g. 1s, 1h)',xor=nats_delivery_option,env='PLUMBER_RELAY_NATS_STREAMING_READ_SINCE'"
	ReadSince string `protobuf:"bytes,5,opt,name=read_since,json=readSince,proto3" json:"read_since,omitempty"`
	// @gotags: kong:"help='Deliver all available messages',xor=nats_delivery_option,env='PLUMBER_RELAY_NATS_STREAMING_READ_ALL'"
	ReadAll bool `protobuf:"varint,6,opt,name=read_all,json=readAll,proto3" json:"read_all,omitempty"`
}

func (x *NatsStreamingReadArgs) Reset() {
	*x = NatsStreamingReadArgs{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_args_nats_streaming_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NatsStreamingReadArgs) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NatsStreamingReadArgs) ProtoMessage() {}

func (x *NatsStreamingReadArgs) ProtoReflect() protoreflect.Message {
	mi := &file_ps_args_nats_streaming_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NatsStreamingReadArgs.ProtoReflect.Descriptor instead.
func (*NatsStreamingReadArgs) Descriptor() ([]byte, []int) {
	return file_ps_args_nats_streaming_proto_rawDescGZIP(), []int{2}
}

func (x *NatsStreamingReadArgs) GetChannel() string {
	if x != nil {
		return x.Channel
	}
	return ""
}

func (x *NatsStreamingReadArgs) GetDurableName() string {
	if x != nil {
		return x.DurableName
	}
	return ""
}

func (x *NatsStreamingReadArgs) GetReadLastAvailable() bool {
	if x != nil {
		return x.ReadLastAvailable
	}
	return false
}

func (x *NatsStreamingReadArgs) GetReadSequenceNumber() uint32 {
	if x != nil {
		return x.ReadSequenceNumber
	}
	return 0
}

func (x *NatsStreamingReadArgs) GetReadSince() string {
	if x != nil {
		return x.ReadSince
	}
	return ""
}

func (x *NatsStreamingReadArgs) GetReadAll() bool {
	if x != nil {
		return x.ReadAll
	}
	return false
}

type NatsStreamingWriteArgs struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// @gotags: kong:"help='NATS stream channel. Ex: orders'"
	Channel string `protobuf:"bytes,1,opt,name=channel,proto3" json:"channel,omitempty"`
}

func (x *NatsStreamingWriteArgs) Reset() {
	*x = NatsStreamingWriteArgs{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_args_nats_streaming_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NatsStreamingWriteArgs) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NatsStreamingWriteArgs) ProtoMessage() {}

func (x *NatsStreamingWriteArgs) ProtoReflect() protoreflect.Message {
	mi := &file_ps_args_nats_streaming_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NatsStreamingWriteArgs.ProtoReflect.Descriptor instead.
func (*NatsStreamingWriteArgs) Descriptor() ([]byte, []int) {
	return file_ps_args_nats_streaming_proto_rawDescGZIP(), []int{3}
}

func (x *NatsStreamingWriteArgs) GetChannel() string {
	if x != nil {
		return x.Channel
	}
	return ""
}

var File_ps_args_nats_streaming_proto protoreflect.FileDescriptor

var file_ps_args_nats_streaming_proto_rawDesc = []byte{
	0x0a, 0x1c, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x6e, 0x61, 0x74, 0x73, 0x5f, 0x73,
	0x74, 0x72, 0x65, 0x61, 0x6d, 0x69, 0x6e, 0x67, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x22, 0xc8, 0x01, 0x0a, 0x17,
	0x4e, 0x61, 0x74, 0x73, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x69, 0x6e, 0x67, 0x54, 0x4c, 0x53,
	0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x1e, 0x0a, 0x0b, 0x74, 0x6c, 0x73, 0x5f, 0x63,
	0x61, 0x5f, 0x63, 0x65, 0x72, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x74, 0x6c,
	0x73, 0x43, 0x61, 0x43, 0x65, 0x72, 0x74, 0x12, 0x26, 0x0a, 0x0f, 0x74, 0x6c, 0x73, 0x5f, 0x63,
	0x6c, 0x69, 0x65, 0x6e, 0x74, 0x5f, 0x63, 0x65, 0x72, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0d, 0x74, 0x6c, 0x73, 0x43, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x43, 0x65, 0x72, 0x74, 0x12,
	0x24, 0x0a, 0x0e, 0x74, 0x6c, 0x73, 0x5f, 0x63, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x5f, 0x6b, 0x65,
	0x79, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x74, 0x6c, 0x73, 0x43, 0x6c, 0x69, 0x65,
	0x6e, 0x74, 0x4b, 0x65, 0x79, 0x12, 0x26, 0x0a, 0x0f, 0x74, 0x6c, 0x73, 0x5f, 0x73, 0x6b, 0x69,
	0x70, 0x5f, 0x76, 0x65, 0x72, 0x69, 0x66, 0x79, 0x18, 0x04, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0d,
	0x74, 0x6c, 0x73, 0x53, 0x6b, 0x69, 0x70, 0x56, 0x65, 0x72, 0x69, 0x66, 0x79, 0x12, 0x17, 0x0a,
	0x07, 0x75, 0x73, 0x65, 0x5f, 0x74, 0x6c, 0x73, 0x18, 0x05, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06,
	0x75, 0x73, 0x65, 0x54, 0x6c, 0x73, 0x22, 0xd3, 0x01, 0x0a, 0x11, 0x4e, 0x61, 0x74, 0x73, 0x53,
	0x74, 0x72, 0x65, 0x61, 0x6d, 0x69, 0x6e, 0x67, 0x43, 0x6f, 0x6e, 0x6e, 0x12, 0x10, 0x0a, 0x03,
	0x64, 0x73, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x64, 0x73, 0x6e, 0x12, 0x29,
	0x0a, 0x10, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x63, 0x72, 0x65, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x61,
	0x6c, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0f, 0x75, 0x73, 0x65, 0x72, 0x43, 0x72,
	0x65, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x61, 0x6c, 0x73, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x6c, 0x75,
	0x73, 0x74, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63,
	0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x49, 0x64, 0x12, 0x1b, 0x0a, 0x09, 0x63, 0x6c, 0x69, 0x65,
	0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x63, 0x6c, 0x69,
	0x65, 0x6e, 0x74, 0x49, 0x64, 0x12, 0x45, 0x0a, 0x0b, 0x74, 0x6c, 0x73, 0x5f, 0x6f, 0x70, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x24, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x4e, 0x61, 0x74, 0x73, 0x53, 0x74, 0x72,
	0x65, 0x61, 0x6d, 0x69, 0x6e, 0x67, 0x54, 0x4c, 0x53, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73,
	0x52, 0x0a, 0x74, 0x6c, 0x73, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x22, 0xf0, 0x01, 0x0a,
	0x15, 0x4e, 0x61, 0x74, 0x73, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x69, 0x6e, 0x67, 0x52, 0x65,
	0x61, 0x64, 0x41, 0x72, 0x67, 0x73, 0x12, 0x18, 0x0a, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x6e, 0x65,
	0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c,
	0x12, 0x21, 0x0a, 0x0c, 0x64, 0x75, 0x72, 0x61, 0x62, 0x6c, 0x65, 0x5f, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x75, 0x72, 0x61, 0x62, 0x6c, 0x65, 0x4e,
	0x61, 0x6d, 0x65, 0x12, 0x2e, 0x0a, 0x13, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x6c, 0x61, 0x73, 0x74,
	0x5f, 0x61, 0x76, 0x61, 0x69, 0x6c, 0x61, 0x62, 0x6c, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08,
	0x52, 0x11, 0x72, 0x65, 0x61, 0x64, 0x4c, 0x61, 0x73, 0x74, 0x41, 0x76, 0x61, 0x69, 0x6c, 0x61,
	0x62, 0x6c, 0x65, 0x12, 0x30, 0x0a, 0x14, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x73, 0x65, 0x71, 0x75,
	0x65, 0x6e, 0x63, 0x65, 0x5f, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x0d, 0x52, 0x12, 0x72, 0x65, 0x61, 0x64, 0x53, 0x65, 0x71, 0x75, 0x65, 0x6e, 0x63, 0x65, 0x4e,
	0x75, 0x6d, 0x62, 0x65, 0x72, 0x12, 0x1d, 0x0a, 0x0a, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x73, 0x69,
	0x6e, 0x63, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x72, 0x65, 0x61, 0x64, 0x53,
	0x69, 0x6e, 0x63, 0x65, 0x12, 0x19, 0x0a, 0x08, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x61, 0x6c, 0x6c,
	0x18, 0x06, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07, 0x72, 0x65, 0x61, 0x64, 0x41, 0x6c, 0x6c, 0x22,
	0x32, 0x0a, 0x16, 0x4e, 0x61, 0x74, 0x73, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x69, 0x6e, 0x67,
	0x57, 0x72, 0x69, 0x74, 0x65, 0x41, 0x72, 0x67, 0x73, 0x12, 0x18, 0x0a, 0x07, 0x63, 0x68, 0x61,
	0x6e, 0x6e, 0x65, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x63, 0x68, 0x61, 0x6e,
	0x6e, 0x65, 0x6c, 0x42, 0x3b, 0x5a, 0x39, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x62, 0x61, 0x74, 0x63, 0x68, 0x63, 0x6f, 0x72, 0x70, 0x2f, 0x70, 0x6c, 0x75, 0x6d,
	0x62, 0x65, 0x72, 0x2d, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x73, 0x2f, 0x62, 0x75, 0x69, 0x6c,
	0x64, 0x2f, 0x67, 0x6f, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x61, 0x72, 0x67, 0x73,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ps_args_nats_streaming_proto_rawDescOnce sync.Once
	file_ps_args_nats_streaming_proto_rawDescData = file_ps_args_nats_streaming_proto_rawDesc
)

func file_ps_args_nats_streaming_proto_rawDescGZIP() []byte {
	file_ps_args_nats_streaming_proto_rawDescOnce.Do(func() {
		file_ps_args_nats_streaming_proto_rawDescData = protoimpl.X.CompressGZIP(file_ps_args_nats_streaming_proto_rawDescData)
	})
	return file_ps_args_nats_streaming_proto_rawDescData
}

var file_ps_args_nats_streaming_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_ps_args_nats_streaming_proto_goTypes = []interface{}{
	(*NatsStreamingTLSOptions)(nil), // 0: protos.args.NatsStreamingTLSOptions
	(*NatsStreamingConn)(nil),       // 1: protos.args.NatsStreamingConn
	(*NatsStreamingReadArgs)(nil),   // 2: protos.args.NatsStreamingReadArgs
	(*NatsStreamingWriteArgs)(nil),  // 3: protos.args.NatsStreamingWriteArgs
}
var file_ps_args_nats_streaming_proto_depIdxs = []int32{
	0, // 0: protos.args.NatsStreamingConn.tls_options:type_name -> protos.args.NatsStreamingTLSOptions
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_ps_args_nats_streaming_proto_init() }
func file_ps_args_nats_streaming_proto_init() {
	if File_ps_args_nats_streaming_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_ps_args_nats_streaming_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NatsStreamingTLSOptions); i {
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
		file_ps_args_nats_streaming_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NatsStreamingConn); i {
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
		file_ps_args_nats_streaming_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NatsStreamingReadArgs); i {
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
		file_ps_args_nats_streaming_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NatsStreamingWriteArgs); i {
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
			RawDescriptor: file_ps_args_nats_streaming_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ps_args_nats_streaming_proto_goTypes,
		DependencyIndexes: file_ps_args_nats_streaming_proto_depIdxs,
		MessageInfos:      file_ps_args_nats_streaming_proto_msgTypes,
	}.Build()
	File_ps_args_nats_streaming_proto = out.File
	file_ps_args_nats_streaming_proto_rawDesc = nil
	file_ps_args_nats_streaming_proto_goTypes = nil
	file_ps_args_nats_streaming_proto_depIdxs = nil
}
