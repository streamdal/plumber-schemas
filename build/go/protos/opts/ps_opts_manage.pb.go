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
	Source *GetSourceOptions `protobuf:"bytes,4,opt,name=source,proto3" json:"source,omitempty" kong:"cmd,help='Get source(s) from plumber server'"`
	// @gotags: kong:"cmd,help='Get destination(s) from plumber server'"
	Destination *GetDestinationOptions `protobuf:"bytes,5,opt,name=destination,proto3" json:"destination,omitempty" kong:"cmd,help='Get destination(s) from plumber server'"`
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

func (m *GetOptions) GetSource() *GetSourceOptions {
	if m != nil {
		return m.Source
	}
	return nil
}

func (m *GetOptions) GetDestination() *GetDestinationOptions {
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
	// @gotags: kong:"cmd,help='Create source in plumber server'"
	Source *CreateSourceOptions `protobuf:"bytes,4,opt,name=source,proto3" json:"source,omitempty" kong:"cmd,help='Create source in plumber server'"`
	// @gotags: kong:"cmd,help='Create destination in plumber server'"
	Destination *CreateDestinationOptions `protobuf:"bytes,5,opt,name=destination,proto3" json:"destination,omitempty" kong:"cmd,help='Create destination in plumber server'"`
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

func (m *CreateOptions) GetSource() *CreateSourceOptions {
	if m != nil {
		return m.Source
	}
	return nil
}

func (m *CreateOptions) GetDestination() *CreateDestinationOptions {
	if m != nil {
		return m.Destination
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
	Source *DeleteSourceOptions `protobuf:"bytes,4,opt,name=source,proto3" json:"source,omitempty" kong:"cmd,help='Delete source in plumber server'"`
	// @gotags: kong:"cmd,help='Delete destination in plumber server'"
	Destination *DeleteDestinationOptions `protobuf:"bytes,5,opt,name=destination,proto3" json:"destination,omitempty" kong:"cmd,help='Delete destination in plumber server'"`
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

func (m *DeleteOptions) GetSource() *DeleteSourceOptions {
	if m != nil {
		return m.Source
	}
	return nil
}

func (m *DeleteOptions) GetDestination() *DeleteDestinationOptions {
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
	// 804 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0x95, 0xcf, 0x4e, 0xdb, 0x4a,
	0x14, 0xc6, 0xe5, 0xfc, 0x83, 0x4c, 0x6e, 0xb8, 0x30, 0xa0, 0x7b, 0x7d, 0xd1, 0x6d, 0x49, 0x22,
	0x22, 0x51, 0xb5, 0xc4, 0x12, 0x6d, 0x29, 0x88, 0x15, 0x10, 0x15, 0xb5, 0x55, 0xd5, 0xca, 0xd0,
	0x4d, 0x37, 0x96, 0xe3, 0x9c, 0x26, 0x16, 0x8e, 0xc7, 0xf2, 0x8c, 0x17, 0x79, 0x85, 0xbe, 0x44,
	0x9f, 0xa3, 0xcb, 0x3e, 0x43, 0x9f, 0xa5, 0xfb, 0x6a, 0xfe, 0xd8, 0xb1, 0xcd, 0x04, 0x2a, 0x58,
	0x45, 0x99, 0xf3, 0xfb, 0x66, 0x4e, 0xbe, 0x6f, 0xce, 0x04, 0xfd, 0x47, 0x22, 0x46, 0xad, 0x88,
	0x3a, 0xfc, 0xd3, 0x99, 0xb9, 0xa1, 0x3b, 0x81, 0x41, 0x14, 0x13, 0x46, 0x70, 0x4b, 0x7c, 0xd0,
	0x01, 0xaf, 0x6c, 0x77, 0x35, 0x9c, 0xe3, 0x4d, 0xdd, 0x30, 0x84, 0x40, 0xf2, 0xdb, 0xbb, 0x5a,
	0x84, 0x84, 0x21, 0x78, 0xcc, 0x27, 0xa1, 0xa2, 0xfa, 0x3a, 0x6a, 0x0c, 0x94, 0xf9, 0xa1, 0x9b,
	0xc3, 0x76, 0x74, 0x58, 0x0c, 0x81, 0x3b, 0x57, 0x40, 0x47, 0x07, 0x50, 0x92, 0xc4, 0x1e, 0xdc,
	0x46, 0xb0, 0x64, 0xd1, 0x71, 0xef, 0x67, 0x05, 0xb5, 0xdf, 0x8b, 0xf5, 0x0f, 0x11, 0x3f, 0x9b,
	0xe2, 0x0b, 0xb4, 0x36, 0x09, 0xc8, 0xc8, 0x0d, 0xb8, 0x88, 0xaf, 0x98, 0x46, 0xc7, 0xd8, 0x6b,
	0x1d, 0x74, 0x06, 0x39, 0x33, 0x06, 0x17, 0x02, 0x29, 0x28, 0xed, 0xb6, 0xd4, 0xa5, 0x1b, 0x3d,
	0x41, 0xd5, 0x09, 0x30, 0xb3, 0x22, 0xd4, 0xff, 0x16, 0xd5, 0xc0, 0x52, 0x11, 0x67, 0xf0, 0x01,
	0x6a, 0x78, 0x31, 0xb8, 0x0c, 0xcc, 0xaa, 0xa0, 0xb7, 0x0b, 0xf4, 0xb9, 0x28, 0xa5, 0x02, 0x45,
	0x72, 0xcd, 0x18, 0x02, 0x60, 0x60, 0xd6, 0x35, 0x9a, 0xa1, 0x28, 0x65, 0x1a, 0x49, 0xe2, 0x67,
	0xa8, 0x46, 0x19, 0x89, 0xcc, 0x86, 0x50, 0x98, 0x05, 0xc5, 0x25, 0x23, 0x51, 0xca, 0x0b, 0x8a,
	0x9f, 0x10, 0x03, 0x4d, 0x66, 0x60, 0xae, 0x68, 0x4e, 0xb0, 0x45, 0x29, 0x3b, 0x41, 0x92, 0x6f,
	0x6b, 0xab, 0xb5, 0xf5, 0x7a, 0xef, 0x5b, 0x15, 0x6d, 0x6a, 0x1c, 0xc2, 0x7d, 0xb4, 0xa6, 0x42,
	0x70, 0xc7, 0xe3, 0x18, 0xa8, 0xf4, 0xb6, 0x69, 0xb7, 0xe5, 0xea, 0xa9, 0x5c, 0xc4, 0x5d, 0xf4,
	0x57, 0x9a, 0x15, 0xb9, 0x86, 0x50, 0x58, 0xd8, 0xb4, 0x5b, 0x72, 0xed, 0x8a, 0x2f, 0xe1, 0x17,
	0xe8, 0x9f, 0x14, 0xf1, 0x67, 0x40, 0x12, 0xe6, 0x50, 0xf0, 0x48, 0x38, 0xa6, 0xc2, 0xc1, 0xaa,
	0xbd, 0xa5, 0x60, 0x59, 0xbc, 0x94, 0x35, 0xbc, 0x9b, 0x9d, 0x9f, 0x50, 0x70, 0x58, 0x40, 0xcd,
	0x5a, 0xc7, 0xd8, 0x5b, 0xb5, 0xd5, 0x71, 0x9f, 0x28, 0x5c, 0x05, 0x14, 0x0f, 0xd0, 0xa6, 0xa2,
	0xfc, 0x90, 0x82, 0x97, 0xc4, 0x12, 0xad, 0x0b, 0x74, 0x43, 0x96, 0xde, 0xa8, 0x0a, 0xe7, 0x9f,
	0x22, 0x9c, 0xf6, 0x12, 0x50, 0xc7, 0x73, 0x9d, 0x2f, 0x7e, 0x00, 0xc2, 0xe3, 0xa6, 0xfd, 0xb7,
	0xea, 0x23, 0xa0, 0xe7, 0xee, 0x6b, 0x3f, 0x00, 0x6c, 0xa1, 0xad, 0x3c, 0x0c, 0x31, 0x93, 0xf8,
	0x8a, 0xc0, 0x37, 0x16, 0x38, 0xc4, 0x4c, 0x08, 0xf6, 0xb3, 0x6e, 0xb8, 0xe0, 0x1a, 0xe6, 0x92,
	0x5f, 0x15, 0xfc, 0x7a, 0xc6, 0xbf, 0x83, 0xb9, 0xc0, 0xfb, 0x68, 0x6d, 0xec, 0x53, 0x77, 0x14,
	0x80, 0x13, 0xc5, 0xc0, 0xd8, 0xdc, 0x6c, 0x8a, 0xbe, 0xdb, 0x6a, 0xf5, 0xa3, 0x58, 0xec, 0xfd,
	0xaa, 0x20, 0xb4, 0xb8, 0x85, 0xf8, 0x14, 0xa1, 0xc5, 0x98, 0xaa, 0x0b, 0xdf, 0x2d, 0x5f, 0xd9,
	0xf3, 0x8c, 0x48, 0x53, 0xcf, 0x89, 0xf0, 0x21, 0xaa, 0x8b, 0xe1, 0x54, 0x17, 0xfe, 0xff, 0xb2,
	0xda, 0xe6, 0x45, 0x25, 0x3c, 0xab, 0x98, 0x86, 0x2d, 0x71, 0xfc, 0x12, 0x35, 0xe4, 0xcc, 0x8a,
	0x2c, 0x5a, 0x07, 0x8f, 0xca, 0xc2, 0x4b, 0x51, 0xcd, 0x2e, 0x9a, 0x84, 0xf1, 0x10, 0xb5, 0x72,
	0x4f, 0x86, 0x9a, 0x81, 0x5e, 0x59, 0x3b, 0x5c, 0x20, 0xe9, 0x06, 0x79, 0x19, 0x3e, 0x42, 0x2b,
	0xea, 0x05, 0x53, 0x33, 0xf1, 0xf8, 0xc6, 0x8f, 0x96, 0xe5, 0x54, 0x9d, 0xe2, 0xbc, 0x6d, 0xf9,
	0x90, 0xa8, 0x91, 0xbd, 0xd1, 0xf6, 0x55, 0x92, 0xd7, 0x29, 0xb8, 0xf7, 0xb5, 0x8a, 0xda, 0x85,
	0x79, 0xc6, 0x43, 0x8d, 0xf5, 0xbb, 0x9a, 0xf9, 0xbf, 0xdd, 0xfd, 0xe3, 0xa2, 0xfb, 0x3b, 0x9a,
	0x0d, 0x96, 0x05, 0x70, 0x54, 0x0a, 0xa0, 0xa3, 0xd1, 0xea, 0x33, 0xb8, 0xd0, 0x65, 0xd0, 0xd7,
	0xc8, 0xef, 0x8a, 0xe1, 0xa4, 0x1c, 0x43, 0x57, 0x67, 0xc0, 0x92, 0x24, 0x8e, 0x4a, 0x49, 0xe8,
	0xfa, 0x5f, 0x1e, 0x46, 0xe1, 0xa1, 0xfc, 0x83, 0x30, 0x24, 0xff, 0x80, 0x30, 0xe4, 0x06, 0xf7,
	0x0b, 0x43, 0x6a, 0xef, 0x1d, 0x86, 0x94, 0x3f, 0x30, 0x0c, 0x65, 0xc0, 0xbd, 0xc2, 0x90, 0x5a,
	0x7d, 0x18, 0xdf, 0x0d, 0xd4, 0xca, 0xfd, 0x07, 0xe1, 0x57, 0xa9, 0x89, 0x86, 0x66, 0xbe, 0x38,
	0xb8, 0xcc, 0xc2, 0xe3, 0x45, 0xff, 0x55, 0x8d, 0xff, 0x5c, 0xba, 0xac, 0xfb, 0xc3, 0xac, 0xfb,
	0x8a, 0xe6, 0x35, 0xe0, 0x4a, 0x7d, 0xef, 0x3f, 0x0c, 0xd4, 0x2e, 0xfc, 0x1f, 0x2e, 0xae, 0x80,
	0xa1, 0x69, 0x41, 0xa2, 0xcb, 0xfa, 0x3f, 0x29, 0xf7, 0xdf, 0xd5, 0x88, 0xef, 0xf6, 0xbf, 0xa2,
	0xf1, 0x5f, 0x6a, 0xb5, 0xbf, 0xe1, 0xec, 0xe4, 0xf3, 0xf1, 0xc4, 0x67, 0xd3, 0x64, 0x34, 0xf0,
	0xc8, 0xcc, 0x1a, 0xb9, 0xcc, 0x9b, 0x7a, 0x24, 0x8e, 0xac, 0x28, 0x48, 0x66, 0x23, 0x88, 0xf7,
	0xa9, 0x37, 0x85, 0x99, 0x4b, 0xad, 0x51, 0xe2, 0x07, 0x63, 0x6b, 0x42, 0x2c, 0xb9, 0xb1, 0xc5,
	0x37, 0x1e, 0x35, 0xc4, 0x97, 0xe7, 0xbf, 0x03, 0x00, 0x00, 0xff, 0xff, 0x24, 0x92, 0xf3, 0xf3,
	0x4c, 0x0a, 0x00, 0x00,
}
