// Code generated by protoc-gen-go. DO NOT EDIT.
// source: opts/ps_opts_manage.proto

package opts

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type ManageOptions struct {
	// @gotags: kong:"embed"
	GlobalOptions *GlobalManageOptions `protobuf:"bytes,1,opt,name=global_options,json=globalOptions,proto3" json:"global_options,omitempty" kong:"embed"`
	// @gotags: kong:"cmd,help='Get resource(s) from plumber server'"
	Get *GetOptions `protobuf:"bytes,2,opt,name=get,proto3" json:"get,omitempty" kong:"cmd,help='Get resource(s) from plumber server'"`
	// @gotags: kong:"cmd,help='Create resources in plumber server'"
	Create *CreateOptions `protobuf:"bytes,3,opt,name=create,proto3" json:"create,omitempty" kong:"cmd,help='Create resources in plumber server'"`
	// @gotags: kong:"cmd,help='Delete resources in plumber server'"
	Delete *DeleteOptions `protobuf:"bytes,5,opt,name=delete,proto3" json:"delete,omitempty" kong:"cmd,help='Delete resources in plumber server'"`
	// @gotags: kong:"cmd,help='Stop resources in plumber server'"
	Stop *StopOptions `protobuf:"bytes,6,opt,name=stop,proto3" json:"stop,omitempty" kong:"cmd,help='Stop resources in plumber server'"`
	// @gotags: kong:"cmd,help='Resume/Start resources in plumber server'"
	Resume               *ResumeOptions `protobuf:"bytes,7,opt,name=resume,proto3" json:"resume,omitempty" kong:"cmd,help='Resume/Start resources in plumber server'"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

func (m *ManageOptions) Reset()         { *m = ManageOptions{} }
func (m *ManageOptions) String() string { return proto.CompactTextString(m) }
func (*ManageOptions) ProtoMessage()    {}
func (*ManageOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_1d5f0e150eafe5f0, []int{0}
}

func (m *ManageOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ManageOptions.Unmarshal(m, b)
}
func (m *ManageOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ManageOptions.Marshal(b, m, deterministic)
}
func (m *ManageOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ManageOptions.Merge(m, src)
}
func (m *ManageOptions) XXX_Size() int {
	return xxx_messageInfo_ManageOptions.Size(m)
}
func (m *ManageOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_ManageOptions.DiscardUnknown(m)
}

var xxx_messageInfo_ManageOptions proto.InternalMessageInfo

func (m *ManageOptions) GetGlobalOptions() *GlobalManageOptions {
	if m != nil {
		return m.GlobalOptions
	}
	return nil
}

func (m *ManageOptions) GetGet() *GetOptions {
	if m != nil {
		return m.Get
	}
	return nil
}

func (m *ManageOptions) GetCreate() *CreateOptions {
	if m != nil {
		return m.Create
	}
	return nil
}

func (m *ManageOptions) GetDelete() *DeleteOptions {
	if m != nil {
		return m.Delete
	}
	return nil
}

func (m *ManageOptions) GetStop() *StopOptions {
	if m != nil {
		return m.Stop
	}
	return nil
}

func (m *ManageOptions) GetResume() *ResumeOptions {
	if m != nil {
		return m.Resume
	}
	return nil
}

type GlobalManageOptions struct {
	// @gotags: kong:"help='Plumber server gRPC API address',default='localhost:9090'"
	ManageAddress string `protobuf:"bytes,1,opt,name=manage_address,json=manageAddress,proto3" json:"manage_address,omitempty" kong:"help='Plumber server gRPC API address',default='localhost:9090'"`
	// @gotags: kong:"help='Plumber server auth token',default='streamdal'"
	ManageToken string `protobuf:"bytes,2,opt,name=manage_token,json=manageToken,proto3" json:"manage_token,omitempty" kong:"help='Plumber server auth token',default='streamdal'"`
	// @gotags: kong:"help='gRPC call timeout seconds',default=10"
	ManageTimeoutSeconds int64 `protobuf:"varint,3,opt,name=manage_timeout_seconds,json=manageTimeoutSeconds,proto3" json:"manage_timeout_seconds,omitempty" kong:"help='gRPC call timeout seconds',default=10"`
	// @gotags: kong:"help='Use TLS when talking to plumber server',default='false'"
	ManageUseTls bool `protobuf:"varint,4,opt,name=manage_use_tls,json=manageUseTls,proto3" json:"manage_use_tls,omitempty" kong:"help='Use TLS when talking to plumber server',default='false'"`
	// @gotags: kong:"help='Skip TLS server certificate verification',default='false'"
	ManageInsecureTls bool `protobuf:"varint,5,opt,name=manage_insecure_tls,json=manageInsecureTls,proto3" json:"manage_insecure_tls,omitempty" kong:"help='Skip TLS server certificate verification',default='false'"`
	// @gotags: kong:"help='TLS CA file'"
	ManageTlsCaFile string `protobuf:"bytes,6,opt,name=manage_tls_ca_file,json=manageTlsCaFile,proto3" json:"manage_tls_ca_file,omitempty" kong:"help='TLS CA file'"`
	// @gotags: kong:"help='TLS client cert file'"
	ManageTlsCertFile string `protobuf:"bytes,7,opt,name=manage_tls_cert_file,json=manageTlsCertFile,proto3" json:"manage_tls_cert_file,omitempty" kong:"help='TLS client cert file'"`
	// @gotags: kong:"help='TLS client key file'"
	ManageTlsKeyFile string `protobuf:"bytes,8,opt,name=manage_tls_key_file,json=manageTlsKeyFile,proto3" json:"manage_tls_key_file,omitempty" kong:"help='TLS client key file'"`
	// @gotags: kong:"help='Disable pretty/colorized output',default='false'"
	DisablePretty        bool     `protobuf:"varint,9,opt,name=disable_pretty,json=disablePretty,proto3" json:"disable_pretty,omitempty" kong:"help='Disable pretty/colorized output',default='false'"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GlobalManageOptions) Reset()         { *m = GlobalManageOptions{} }
func (m *GlobalManageOptions) String() string { return proto.CompactTextString(m) }
func (*GlobalManageOptions) ProtoMessage()    {}
func (*GlobalManageOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_1d5f0e150eafe5f0, []int{1}
}

func (m *GlobalManageOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GlobalManageOptions.Unmarshal(m, b)
}
func (m *GlobalManageOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GlobalManageOptions.Marshal(b, m, deterministic)
}
func (m *GlobalManageOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GlobalManageOptions.Merge(m, src)
}
func (m *GlobalManageOptions) XXX_Size() int {
	return xxx_messageInfo_GlobalManageOptions.Size(m)
}
func (m *GlobalManageOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_GlobalManageOptions.DiscardUnknown(m)
}

var xxx_messageInfo_GlobalManageOptions proto.InternalMessageInfo

func (m *GlobalManageOptions) GetManageAddress() string {
	if m != nil {
		return m.ManageAddress
	}
	return ""
}

func (m *GlobalManageOptions) GetManageToken() string {
	if m != nil {
		return m.ManageToken
	}
	return ""
}

func (m *GlobalManageOptions) GetManageTimeoutSeconds() int64 {
	if m != nil {
		return m.ManageTimeoutSeconds
	}
	return 0
}

func (m *GlobalManageOptions) GetManageUseTls() bool {
	if m != nil {
		return m.ManageUseTls
	}
	return false
}

func (m *GlobalManageOptions) GetManageInsecureTls() bool {
	if m != nil {
		return m.ManageInsecureTls
	}
	return false
}

func (m *GlobalManageOptions) GetManageTlsCaFile() string {
	if m != nil {
		return m.ManageTlsCaFile
	}
	return ""
}

func (m *GlobalManageOptions) GetManageTlsCertFile() string {
	if m != nil {
		return m.ManageTlsCertFile
	}
	return ""
}

func (m *GlobalManageOptions) GetManageTlsKeyFile() string {
	if m != nil {
		return m.ManageTlsKeyFile
	}
	return ""
}

func (m *GlobalManageOptions) GetDisablePretty() bool {
	if m != nil {
		return m.DisablePretty
	}
	return false
}

type GetOptions struct {
	// @gotags: kong:"cmd,help='Get connection(s) from plumber server'"
	Connection *GetConnectionOptions `protobuf:"bytes,1,opt,name=connection,proto3" json:"connection,omitempty" kong:"cmd,help='Get connection(s) from plumber server'"`
	// @gotags: kong:"-"
	Relay *GetRelayOptions `protobuf:"bytes,2,opt,name=relay,proto3" json:"relay,omitempty" kong:"-"` // Deprecated: Do not use.
	// @gotags: kong:"cmd,help='Get source(s) from plumber server'"
	Source *GetReadOptions `protobuf:"bytes,4,opt,name=source,proto3" json:"source,omitempty" kong:"cmd,help='Get source(s) from plumber server'"`
	// @gotags: kong:"cmd,help='Get destination(s) from plumber server'"
	Destination *GetWriteOptions `protobuf:"bytes,5,opt,name=destination,proto3" json:"destination,omitempty" kong:"cmd,help='Get destination(s) from plumber server'"`
	// @gotags: kong:"cmd,help='Get channel(s) from plumber server'"
	Channel *GetChannelOptions `protobuf:"bytes,6,opt,name=channel,proto3" json:"channel,omitempty" kong:"cmd,help='Get channel(s) from plumber server'"`
	// @gotags: kong:"cmd,help='Get tunnel(s) from plumber server'"
	Tunnel               *GetTunnelOptions `protobuf:"bytes,3,opt,name=tunnel,proto3" json:"tunnel,omitempty" kong:"cmd,help='Get tunnel(s) from plumber server'"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *GetOptions) Reset()         { *m = GetOptions{} }
func (m *GetOptions) String() string { return proto.CompactTextString(m) }
func (*GetOptions) ProtoMessage()    {}
func (*GetOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_1d5f0e150eafe5f0, []int{2}
}

func (m *GetOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetOptions.Unmarshal(m, b)
}
func (m *GetOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetOptions.Marshal(b, m, deterministic)
}
func (m *GetOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetOptions.Merge(m, src)
}
func (m *GetOptions) XXX_Size() int {
	return xxx_messageInfo_GetOptions.Size(m)
}
func (m *GetOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_GetOptions.DiscardUnknown(m)
}

var xxx_messageInfo_GetOptions proto.InternalMessageInfo

func (m *GetOptions) GetConnection() *GetConnectionOptions {
	if m != nil {
		return m.Connection
	}
	return nil
}

// Deprecated: Do not use.
func (m *GetOptions) GetRelay() *GetRelayOptions {
	if m != nil {
		return m.Relay
	}
	return nil
}

func (m *GetOptions) GetSource() *GetReadOptions {
	if m != nil {
		return m.Source
	}
	return nil
}

func (m *GetOptions) GetDestination() *GetWriteOptions {
	if m != nil {
		return m.Destination
	}
	return nil
}

func (m *GetOptions) GetChannel() *GetChannelOptions {
	if m != nil {
		return m.Channel
	}
	return nil
}

func (m *GetOptions) GetTunnel() *GetTunnelOptions {
	if m != nil {
		return m.Tunnel
	}
	return nil
}

type CreateOptions struct {
	// @gotags: kong:"cmd,help='Create connection in plumber server'"
	Connection *CreateConnectionOptions `protobuf:"bytes,1,opt,name=connection,proto3" json:"connection,omitempty" kong:"cmd,help='Create connection in plumber server'"`
	// @gotags: kong:"-"
	Relay *CreateRelayOptions `protobuf:"bytes,2,opt,name=relay,proto3" json:"relay,omitempty" kong:"-"` // Deprecated: Do not use.
	// @gotags: kong:"cmd,help='Create read resource in plumber server'"
	Read *CreateChannelReadOptions `protobuf:"bytes,4,opt,name=read,proto3" json:"read,omitempty" kong:"cmd,help='Create read resource in plumber server'"`
	// @gotags: kong:"cmd,help='Create write resource in plumber server'"
	Write *CreateChannelWriteOptions `protobuf:"bytes,5,opt,name=write,proto3" json:"write,omitempty" kong:"cmd,help='Create write resource in plumber server'"`
	// @gotags: kong:"cmd,help='Create channel between source and destination in plumber server'"
	Channel *CreateChannelOptions `protobuf:"bytes,6,opt,name=channel,proto3" json:"channel,omitempty" kong:"cmd,help='Create channel between source and destination in plumber server'"`
	// @gotags: kong:"cmd,help='Create tunnel in plumber server'"
	Tunnel               *CreateTunnelOptions `protobuf:"bytes,3,opt,name=tunnel,proto3" json:"tunnel,omitempty" kong:"cmd,help='Create tunnel in plumber server'"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *CreateOptions) Reset()         { *m = CreateOptions{} }
func (m *CreateOptions) String() string { return proto.CompactTextString(m) }
func (*CreateOptions) ProtoMessage()    {}
func (*CreateOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_1d5f0e150eafe5f0, []int{3}
}

func (m *CreateOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateOptions.Unmarshal(m, b)
}
func (m *CreateOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateOptions.Marshal(b, m, deterministic)
}
func (m *CreateOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateOptions.Merge(m, src)
}
func (m *CreateOptions) XXX_Size() int {
	return xxx_messageInfo_CreateOptions.Size(m)
}
func (m *CreateOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateOptions.DiscardUnknown(m)
}

var xxx_messageInfo_CreateOptions proto.InternalMessageInfo

func (m *CreateOptions) GetConnection() *CreateConnectionOptions {
	if m != nil {
		return m.Connection
	}
	return nil
}

// Deprecated: Do not use.
func (m *CreateOptions) GetRelay() *CreateRelayOptions {
	if m != nil {
		return m.Relay
	}
	return nil
}

func (m *CreateOptions) GetRead() *CreateChannelReadOptions {
	if m != nil {
		return m.Read
	}
	return nil
}

func (m *CreateOptions) GetWrite() *CreateChannelWriteOptions {
	if m != nil {
		return m.Write
	}
	return nil
}

func (m *CreateOptions) GetChannel() *CreateChannelOptions {
	if m != nil {
		return m.Channel
	}
	return nil
}

func (m *CreateOptions) GetTunnel() *CreateTunnelOptions {
	if m != nil {
		return m.Tunnel
	}
	return nil
}

type DeleteOptions struct {
	// @gotags: kong:"cmd,help='Delete connection in plumber server'"
	Connection *DeleteConnectionOptions `protobuf:"bytes,1,opt,name=connection,proto3" json:"connection,omitempty" kong:"cmd,help='Delete connection in plumber server'"`
	// @gotags: kong:"-"
	Relay *DeleteRelayOptions `protobuf:"bytes,2,opt,name=relay,proto3" json:"relay,omitempty" kong:"-"` // Deprecated: Do not use.
	// @gotags: kong:"cmd,help='Delete source in plumber server'"
	Source *DeleteReadOptions `protobuf:"bytes,4,opt,name=source,proto3" json:"source,omitempty" kong:"cmd,help='Delete source in plumber server'"`
	// @gotags: kong:"cmd,help='Delete destination in plumber server'"
	Destination *DeleteWriteOptions `protobuf:"bytes,5,opt,name=destination,proto3" json:"destination,omitempty" kong:"cmd,help='Delete destination in plumber server'"`
	// @gotags: kong:"cmd,help='Delete channel in plumber server'"
	Channel *DeleteChannelOptions `protobuf:"bytes,6,opt,name=channel,proto3" json:"channel,omitempty" kong:"cmd,help='Delete channel in plumber server'"`
	// @gotags: kong:"cmd,help='Delete tunnel in plumber server'"
	Tunnel               *DeleteTunnelOptions `protobuf:"bytes,3,opt,name=tunnel,proto3" json:"tunnel,omitempty" kong:"cmd,help='Delete tunnel in plumber server'"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *DeleteOptions) Reset()         { *m = DeleteOptions{} }
func (m *DeleteOptions) String() string { return proto.CompactTextString(m) }
func (*DeleteOptions) ProtoMessage()    {}
func (*DeleteOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_1d5f0e150eafe5f0, []int{4}
}

func (m *DeleteOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteOptions.Unmarshal(m, b)
}
func (m *DeleteOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteOptions.Marshal(b, m, deterministic)
}
func (m *DeleteOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteOptions.Merge(m, src)
}
func (m *DeleteOptions) XXX_Size() int {
	return xxx_messageInfo_DeleteOptions.Size(m)
}
func (m *DeleteOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteOptions.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteOptions proto.InternalMessageInfo

func (m *DeleteOptions) GetConnection() *DeleteConnectionOptions {
	if m != nil {
		return m.Connection
	}
	return nil
}

// Deprecated: Do not use.
func (m *DeleteOptions) GetRelay() *DeleteRelayOptions {
	if m != nil {
		return m.Relay
	}
	return nil
}

func (m *DeleteOptions) GetSource() *DeleteReadOptions {
	if m != nil {
		return m.Source
	}
	return nil
}

func (m *DeleteOptions) GetDestination() *DeleteWriteOptions {
	if m != nil {
		return m.Destination
	}
	return nil
}

func (m *DeleteOptions) GetChannel() *DeleteChannelOptions {
	if m != nil {
		return m.Channel
	}
	return nil
}

func (m *DeleteOptions) GetTunnel() *DeleteTunnelOptions {
	if m != nil {
		return m.Tunnel
	}
	return nil
}

type StopOptions struct {
	// @gotags: kong:"-"
	Relay *StopRelayOptions `protobuf:"bytes,1,opt,name=relay,proto3" json:"relay,omitempty" kong:"-"` // Deprecated: Do not use.
	// @gotags: kong:"cmd,help='Stop relay in plumber server'"
	Channel *StopChannelOptions `protobuf:"bytes,3,opt,name=channel,proto3" json:"channel,omitempty" kong:"cmd,help='Stop relay in plumber server'"`
	// @gotags: kong:"cmd,help='Stop tunnel in plumber server'"
	Tunnel               *StopTunnelOptions `protobuf:"bytes,2,opt,name=tunnel,proto3" json:"tunnel,omitempty" kong:"cmd,help='Stop tunnel in plumber server'"`
	XXX_NoUnkeyedLiteral struct{}           `json:"-"`
	XXX_unrecognized     []byte             `json:"-"`
	XXX_sizecache        int32              `json:"-"`
}

func (m *StopOptions) Reset()         { *m = StopOptions{} }
func (m *StopOptions) String() string { return proto.CompactTextString(m) }
func (*StopOptions) ProtoMessage()    {}
func (*StopOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_1d5f0e150eafe5f0, []int{5}
}

func (m *StopOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_StopOptions.Unmarshal(m, b)
}
func (m *StopOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_StopOptions.Marshal(b, m, deterministic)
}
func (m *StopOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_StopOptions.Merge(m, src)
}
func (m *StopOptions) XXX_Size() int {
	return xxx_messageInfo_StopOptions.Size(m)
}
func (m *StopOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_StopOptions.DiscardUnknown(m)
}

var xxx_messageInfo_StopOptions proto.InternalMessageInfo

// Deprecated: Do not use.
func (m *StopOptions) GetRelay() *StopRelayOptions {
	if m != nil {
		return m.Relay
	}
	return nil
}

func (m *StopOptions) GetChannel() *StopChannelOptions {
	if m != nil {
		return m.Channel
	}
	return nil
}

func (m *StopOptions) GetTunnel() *StopTunnelOptions {
	if m != nil {
		return m.Tunnel
	}
	return nil
}

type ResumeOptions struct {
	// @gotags: kong:"-"
	Relay *ResumeRelayOptions `protobuf:"bytes,1,opt,name=relay,proto3" json:"relay,omitempty" kong:"-"` // Deprecated: Do not use.
	// @gotags: kong:"cmd,help='Resume/Start channel in plumber server'"
	Channel *ResumeChannelOptions `protobuf:"bytes,3,opt,name=channel,proto3" json:"channel,omitempty" kong:"cmd,help='Resume/Start channel in plumber server'"`
	// @gotags: kong:"cmd,help='Resume/Start tunnel in plumber server'"
	Tunnel               *ResumeTunnelOptions `protobuf:"bytes,2,opt,name=tunnel,proto3" json:"tunnel,omitempty" kong:"cmd,help='Resume/Start tunnel in plumber server'"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *ResumeOptions) Reset()         { *m = ResumeOptions{} }
func (m *ResumeOptions) String() string { return proto.CompactTextString(m) }
func (*ResumeOptions) ProtoMessage()    {}
func (*ResumeOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_1d5f0e150eafe5f0, []int{6}
}

func (m *ResumeOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ResumeOptions.Unmarshal(m, b)
}
func (m *ResumeOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ResumeOptions.Marshal(b, m, deterministic)
}
func (m *ResumeOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ResumeOptions.Merge(m, src)
}
func (m *ResumeOptions) XXX_Size() int {
	return xxx_messageInfo_ResumeOptions.Size(m)
}
func (m *ResumeOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_ResumeOptions.DiscardUnknown(m)
}

var xxx_messageInfo_ResumeOptions proto.InternalMessageInfo

// Deprecated: Do not use.
func (m *ResumeOptions) GetRelay() *ResumeRelayOptions {
	if m != nil {
		return m.Relay
	}
	return nil
}

func (m *ResumeOptions) GetChannel() *ResumeChannelOptions {
	if m != nil {
		return m.Channel
	}
	return nil
}

func (m *ResumeOptions) GetTunnel() *ResumeTunnelOptions {
	if m != nil {
		return m.Tunnel
	}
	return nil
}

func init() {
	proto.RegisterType((*ManageOptions)(nil), "protos.opts.ManageOptions")
	proto.RegisterType((*GlobalManageOptions)(nil), "protos.opts.GlobalManageOptions")
	proto.RegisterType((*GetOptions)(nil), "protos.opts.GetOptions")
	proto.RegisterType((*CreateOptions)(nil), "protos.opts.CreateOptions")
	proto.RegisterType((*DeleteOptions)(nil), "protos.opts.DeleteOptions")
	proto.RegisterType((*StopOptions)(nil), "protos.opts.StopOptions")
	proto.RegisterType((*ResumeOptions)(nil), "protos.opts.ResumeOptions")
}

func init() { proto.RegisterFile("opts/ps_opts_manage.proto", fileDescriptor_1d5f0e150eafe5f0) }

var fileDescriptor_1d5f0e150eafe5f0 = []byte{
	// 838 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0x95, 0xdd, 0x6e, 0xd3, 0x48,
	0x14, 0xc7, 0xe5, 0x7c, 0xb5, 0x99, 0x6c, 0xba, 0xed, 0xb4, 0xda, 0xf5, 0x76, 0xa1, 0x4d, 0xa2,
	0x16, 0x15, 0x41, 0x63, 0xa9, 0x85, 0xd2, 0xaa, 0x08, 0xa9, 0x1f, 0xa2, 0x02, 0x84, 0x40, 0x6e,
	0x11, 0x12, 0x37, 0x96, 0x63, 0x1f, 0x12, 0xab, 0x8e, 0x6d, 0x79, 0xc6, 0x42, 0xb9, 0x43, 0xbc,
	0x08, 0xcf, 0xc1, 0x25, 0xcf, 0xc0, 0x73, 0xf0, 0x0e, 0x68, 0x3e, 0xec, 0xd8, 0xc9, 0x98, 0x22,
	0xb8, 0x8a, 0x32, 0xe7, 0xf7, 0x9f, 0x39, 0xf3, 0x3f, 0xe7, 0x8c, 0xd1, 0x7f, 0x61, 0x44, 0x89,
	0x11, 0x11, 0x8b, 0xfd, 0x5a, 0x63, 0x3b, 0xb0, 0x87, 0xd0, 0x8f, 0xe2, 0x90, 0x86, 0xb8, 0xc5,
	0x7f, 0x48, 0x9f, 0x45, 0xd6, 0xbb, 0x0a, 0xce, 0x72, 0x46, 0x76, 0x10, 0x80, 0x2f, 0xf8, 0xf5,
	0x2d, 0x25, 0x12, 0x06, 0x01, 0x38, 0xd4, 0x0b, 0x03, 0x49, 0x6d, 0xa8, 0xa8, 0x18, 0x6c, 0x57,
	0xc6, 0x37, 0xd5, 0x71, 0xdf, 0x9e, 0x48, 0xa0, 0xa3, 0x02, 0x68, 0x92, 0x4b, 0x44, 0xb9, 0xc5,
	0x87, 0xd8, 0xa3, 0xf2, 0x66, 0xbd, 0x6f, 0x15, 0xd4, 0x7e, 0xc9, 0x97, 0x5f, 0x45, 0x2c, 0x35,
	0x82, 0x2f, 0xd0, 0xd2, 0xd0, 0x0f, 0x07, 0xb6, 0xcf, 0x34, 0x6c, 0x45, 0xd7, 0x3a, 0xda, 0x4e,
	0x6b, 0xaf, 0xd3, 0xcf, 0x99, 0xd0, 0xbf, 0xe0, 0x48, 0x41, 0x69, 0xb6, 0x85, 0x2e, 0xdd, 0xe8,
	0x2e, 0xaa, 0x0e, 0x81, 0xea, 0x15, 0xae, 0xfe, 0xb7, 0xa8, 0x06, 0x9a, 0x8a, 0x18, 0x83, 0xf7,
	0x50, 0xc3, 0x89, 0xc1, 0xa6, 0xa0, 0x57, 0x39, 0xbd, 0x5e, 0xa0, 0xcf, 0x78, 0x28, 0x15, 0x48,
	0x92, 0x69, 0x5c, 0xf0, 0x81, 0x82, 0x5e, 0x57, 0x68, 0xce, 0x79, 0x28, 0xd3, 0x08, 0x12, 0xdf,
	0x47, 0x35, 0x42, 0xc3, 0x48, 0x6f, 0x70, 0x85, 0x5e, 0x50, 0x5c, 0xd2, 0x30, 0x4a, 0x79, 0x4e,
	0xb1, 0x13, 0x62, 0x20, 0xc9, 0x18, 0xf4, 0x05, 0xc5, 0x09, 0x26, 0x0f, 0x65, 0x27, 0x08, 0xf2,
	0x79, 0x6d, 0xb1, 0xb6, 0x5c, 0xef, 0x7d, 0xae, 0xa2, 0x55, 0x85, 0x43, 0x78, 0x1b, 0x2d, 0xc9,
	0x1a, 0xd8, 0xae, 0x1b, 0x03, 0x11, 0xde, 0x36, 0xcd, 0xb6, 0x58, 0x3d, 0x11, 0x8b, 0xb8, 0x8b,
	0xfe, 0x4a, 0x8b, 0x19, 0x5e, 0x43, 0xc0, 0x2d, 0x6c, 0x9a, 0x2d, 0xb1, 0x76, 0xc5, 0x96, 0xf0,
	0x03, 0xf4, 0x4f, 0x8a, 0x78, 0x63, 0x08, 0x13, 0x6a, 0x11, 0x70, 0xc2, 0xc0, 0x25, 0xdc, 0xc1,
	0xaa, 0xb9, 0x26, 0x61, 0x11, 0xbc, 0x14, 0x31, 0xbc, 0x95, 0x9d, 0x9f, 0x10, 0xb0, 0xa8, 0x4f,
	0xf4, 0x5a, 0x47, 0xdb, 0x59, 0x34, 0xe5, 0x71, 0x6f, 0x08, 0x5c, 0xf9, 0x04, 0xf7, 0xd1, 0xaa,
	0xa4, 0xbc, 0x80, 0x80, 0x93, 0xc4, 0x02, 0xad, 0x73, 0x74, 0x45, 0x84, 0x9e, 0xc9, 0x08, 0xe3,
	0xef, 0x21, 0x9c, 0xe6, 0xe2, 0x13, 0xcb, 0xb1, 0xad, 0xf7, 0x9e, 0x0f, 0xdc, 0xe3, 0xa6, 0xf9,
	0xb7, 0xcc, 0xc3, 0x27, 0x67, 0xf6, 0x53, 0xcf, 0x07, 0x6c, 0xa0, 0xb5, 0x3c, 0x0c, 0x31, 0x15,
	0xf8, 0x02, 0xc7, 0x57, 0xa6, 0x38, 0xc4, 0x94, 0x0b, 0x76, 0xb3, 0x6c, 0x98, 0xe0, 0x1a, 0x26,
	0x82, 0x5f, 0xe4, 0xfc, 0x72, 0xc6, 0xbf, 0x80, 0x09, 0xc7, 0xb7, 0xd1, 0x92, 0xeb, 0x11, 0x7b,
	0xe0, 0x83, 0x15, 0xc5, 0x40, 0xe9, 0x44, 0x6f, 0xf2, 0xbc, 0xdb, 0x72, 0xf5, 0x35, 0x5f, 0xec,
	0x7d, 0xaf, 0x20, 0x34, 0xed, 0x42, 0x7c, 0x82, 0xd0, 0x74, 0x3c, 0x65, 0xc3, 0x77, 0x67, 0x5b,
	0xf6, 0x2c, 0x23, 0xd2, 0xaa, 0xe7, 0x44, 0xf8, 0x00, 0xd5, 0xf9, 0x6c, 0xca, 0x86, 0xbf, 0x35,
	0xab, 0x36, 0x59, 0x50, 0x0a, 0x4f, 0x2b, 0xba, 0x66, 0x0a, 0x1c, 0xef, 0xa3, 0x06, 0x09, 0x93,
	0xd8, 0x01, 0x5e, 0x8b, 0xd6, 0xde, 0xff, 0xf3, 0x42, 0xdb, 0xcd, 0xda, 0x4c, 0xa0, 0xf8, 0x09,
	0x6a, 0xb9, 0x40, 0xa8, 0x17, 0xd8, 0x3c, 0xe1, 0xba, 0xfa, 0xc8, 0xb7, 0x6c, 0xd0, 0x53, 0x69,
	0x5e, 0x80, 0x0f, 0xd1, 0x82, 0x7c, 0xb1, 0xe4, 0x2c, 0x6c, 0xcc, 0x5d, 0x56, 0x84, 0x53, 0x75,
	0x8a, 0xe3, 0x87, 0xa8, 0x21, 0x5e, 0x18, 0x39, 0xaa, 0xb7, 0x67, 0x85, 0x57, 0x49, 0x5e, 0x27,
	0xe1, 0xde, 0xc7, 0x2a, 0x6a, 0x17, 0xe6, 0x18, 0x9f, 0x2b, 0x2c, 0xdf, 0x52, 0xcc, 0xfd, 0xcf,
	0x5d, 0x3f, 0x2a, 0xba, 0xbe, 0xa9, 0xd8, 0xa0, 0xcc, 0xf8, 0x23, 0x54, 0x63, 0x8f, 0xad, 0xb4,
	0x7d, 0x5b, 0x75, 0xb4, 0xb8, 0x73, 0xbe, 0x00, 0x5c, 0x82, 0x1f, 0xa3, 0x3a, 0x7f, 0x44, 0xa5,
	0xf1, 0x77, 0xca, 0xb5, 0x85, 0x12, 0x08, 0x11, 0x3e, 0x9e, 0x35, 0xbf, 0x5b, 0xae, 0x9f, 0xf3,
	0xff, 0x70, 0xc6, 0xff, 0x8e, 0x42, 0xab, 0x2e, 0xc1, 0xa7, 0x2a, 0x6a, 0x17, 0x9e, 0xc5, 0x5f,
	0x28, 0x81, 0xe0, 0xff, 0xa0, 0x04, 0x62, 0x83, 0xb2, 0x12, 0x1c, 0xcc, 0xf4, 0xfe, 0x86, 0x52,
	0x3b, 0xdf, 0xfe, 0x27, 0xaa, 0xf6, 0x57, 0x1d, 0x5c, 0x3e, 0x01, 0x37, 0x14, 0x41, 0x5e, 0xfc,
	0xb7, 0x8a, 0x20, 0xb4, 0xea, 0x22, 0x7c, 0xd1, 0x50, 0x2b, 0xf7, 0xa5, 0xc1, 0x8f, 0x52, 0xf3,
	0x34, 0xc5, 0x34, 0x31, 0xb0, 0xbc, 0x7b, 0xb3, 0xfc, 0xab, 0x8a, 0xeb, 0x33, 0x69, 0x59, 0xf6,
	0x07, 0x59, 0xf6, 0x15, 0x85, 0xeb, 0x4c, 0xa9, 0xce, 0xfd, 0xab, 0x86, 0xda, 0x85, 0xaf, 0xde,
	0xb4, 0xf4, 0x9a, 0x22, 0x05, 0x81, 0x96, 0xe5, 0x7f, 0x3c, 0x9b, 0x7f, 0x57, 0x21, 0xbe, 0xd9,
	0xff, 0x8a, 0xc2, 0x7f, 0xa1, 0x55, 0xde, 0xe1, 0xf4, 0xf8, 0xdd, 0xd1, 0xd0, 0xa3, 0xa3, 0x64,
	0xd0, 0x77, 0xc2, 0xb1, 0x31, 0xb0, 0xa9, 0x33, 0x72, 0xc2, 0x38, 0x32, 0x22, 0x3f, 0x19, 0x0f,
	0x20, 0xde, 0x25, 0xce, 0x08, 0xc6, 0x36, 0x31, 0x06, 0x89, 0xe7, 0xbb, 0xc6, 0x30, 0x34, 0xc4,
	0xc6, 0x06, 0xdb, 0x78, 0xd0, 0xe0, 0x7f, 0xf6, 0x7f, 0x04, 0x00, 0x00, 0xff, 0xff, 0xc0, 0xc6,
	0xae, 0x3f, 0x2a, 0x0a, 0x00, 0x00,
}
