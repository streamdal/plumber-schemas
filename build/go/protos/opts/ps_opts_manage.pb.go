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
	// @gotags: kong:"cmd,help='Update resources in plumber server'"
	Update *UpdateOptions `protobuf:"bytes,4,opt,name=update,proto3" json:"update,omitempty" kong:"cmd,help='Update resources in plumber server'"`
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

func (m *ManageOptions) GetUpdate() *UpdateOptions {
	if m != nil {
		return m.Update
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
	// @gotags: kong:"help='Plumber server auth token',default='batchcorp'"
	ManageToken string `protobuf:"bytes,2,opt,name=manage_token,json=manageToken,proto3" json:"manage_token,omitempty" kong:"help='Plumber server auth token',default='batchcorp'"`
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
	// @gotags: kong:"cmd,help='Get relay(s) from plumber server'"
	Relay *GetRelayOptions `protobuf:"bytes,2,opt,name=relay,proto3" json:"relay,omitempty" kong:"cmd,help='Get relay(s) from plumber server'"`
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

func (m *GetOptions) GetRelay() *GetRelayOptions {
	if m != nil {
		return m.Relay
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
	// @gotags: kong:"cmd,help='Create relay in plumber server'"
	Relay *CreateRelayOptions `protobuf:"bytes,2,opt,name=relay,proto3" json:"relay,omitempty" kong:"cmd,help='Create relay in plumber server'"`
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

func (m *CreateOptions) GetRelay() *CreateRelayOptions {
	if m != nil {
		return m.Relay
	}
	return nil
}

func (m *CreateOptions) GetTunnel() *CreateTunnelOptions {
	if m != nil {
		return m.Tunnel
	}
	return nil
}

type UpdateOptions struct {
	// @gotags: kong:"cmd,help='Update a connection in plumber server'"
	Connection *UpdateConnectionOptions `protobuf:"bytes,1,opt,name=connection,proto3" json:"connection,omitempty" kong:"cmd,help='Update a connection in plumber server'"`
	// TODO:
	// @gotags: kong:"cmd,help='Update a relay in plumber server'"
	Relay *UpdateRelayOptions `protobuf:"bytes,2,opt,name=relay,proto3" json:"relay,omitempty" kong:"cmd,help='Update a relay in plumber server'"`
	// @gotags: kong:"cmd,help='Update a tunnel in plumber server'"
	Tunnel               *UpdateTunnelOptions `protobuf:"bytes,3,opt,name=tunnel,proto3" json:"tunnel,omitempty" kong:"cmd,help='Update a tunnel in plumber server'"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *UpdateOptions) Reset()         { *m = UpdateOptions{} }
func (m *UpdateOptions) String() string { return proto.CompactTextString(m) }
func (*UpdateOptions) ProtoMessage()    {}
func (*UpdateOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_1d5f0e150eafe5f0, []int{4}
}

func (m *UpdateOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateOptions.Unmarshal(m, b)
}
func (m *UpdateOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateOptions.Marshal(b, m, deterministic)
}
func (m *UpdateOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateOptions.Merge(m, src)
}
func (m *UpdateOptions) XXX_Size() int {
	return xxx_messageInfo_UpdateOptions.Size(m)
}
func (m *UpdateOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateOptions.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateOptions proto.InternalMessageInfo

func (m *UpdateOptions) GetConnection() *UpdateConnectionOptions {
	if m != nil {
		return m.Connection
	}
	return nil
}

func (m *UpdateOptions) GetRelay() *UpdateRelayOptions {
	if m != nil {
		return m.Relay
	}
	return nil
}

func (m *UpdateOptions) GetTunnel() *UpdateTunnelOptions {
	if m != nil {
		return m.Tunnel
	}
	return nil
}

type DeleteOptions struct {
	// @gotags: kong:"cmd,help='Delete connection in plumber server'"
	Connection *DeleteConnectionOptions `protobuf:"bytes,1,opt,name=connection,proto3" json:"connection,omitempty" kong:"cmd,help='Delete connection in plumber server'"`
	// @gotags: kong:"cmd,help='Delete relay in plumber server'"
	Relay *DeleteRelayOptions `protobuf:"bytes,2,opt,name=relay,proto3" json:"relay,omitempty" kong:"cmd,help='Delete relay in plumber server'"`
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
	return fileDescriptor_1d5f0e150eafe5f0, []int{5}
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

func (m *DeleteOptions) GetRelay() *DeleteRelayOptions {
	if m != nil {
		return m.Relay
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
	// @gotags: kong:"cmd,help='Stop relay in plumber server'"
	Relay *StopRelayOptions `protobuf:"bytes,1,opt,name=relay,proto3" json:"relay,omitempty" kong:"cmd,help='Stop relay in plumber server'"`
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
	return fileDescriptor_1d5f0e150eafe5f0, []int{6}
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

func (m *StopOptions) GetRelay() *StopRelayOptions {
	if m != nil {
		return m.Relay
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
	// @gotags: kong:"cmd,help='Resume/Start relay in plumber server'"
	Relay *ResumeRelayOptions `protobuf:"bytes,1,opt,name=relay,proto3" json:"relay,omitempty" kong:"cmd,help='Resume/Start relay in plumber server'"`
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
	return fileDescriptor_1d5f0e150eafe5f0, []int{7}
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

func (m *ResumeOptions) GetRelay() *ResumeRelayOptions {
	if m != nil {
		return m.Relay
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
	proto.RegisterType((*UpdateOptions)(nil), "protos.opts.UpdateOptions")
	proto.RegisterType((*DeleteOptions)(nil), "protos.opts.DeleteOptions")
	proto.RegisterType((*StopOptions)(nil), "protos.opts.StopOptions")
	proto.RegisterType((*ResumeOptions)(nil), "protos.opts.ResumeOptions")
}

func init() { proto.RegisterFile("opts/ps_opts_manage.proto", fileDescriptor_1d5f0e150eafe5f0) }

var fileDescriptor_1d5f0e150eafe5f0 = []byte{
	// 686 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0x94, 0xdf, 0x4e, 0xd4, 0x4e,
	0x14, 0xc7, 0x53, 0x16, 0x16, 0x76, 0xf6, 0xb7, 0xfc, 0x64, 0x20, 0x5a, 0x89, 0xca, 0xb2, 0x81,
	0x44, 0xa3, 0x6c, 0x13, 0x10, 0xa3, 0xf1, 0x0a, 0x21, 0x12, 0x63, 0x8c, 0xa6, 0xc0, 0x8d, 0x37,
	0x4d, 0xff, 0x1c, 0x77, 0x1b, 0xa6, 0x9d, 0xa6, 0x33, 0xbd, 0x58, 0xaf, 0xf4, 0x49, 0x7c, 0x0f,
	0x1f, 0xc0, 0xe7, 0x32, 0x33, 0xa7, 0xed, 0x6e, 0xd7, 0x81, 0x40, 0xb8, 0xda, 0xec, 0x39, 0x9f,
	0xef, 0x39, 0xe7, 0x3b, 0x33, 0xa7, 0xe4, 0x21, 0xcf, 0xa4, 0x70, 0x32, 0xe1, 0xa9, 0x5f, 0x2f,
	0xf1, 0x53, 0x7f, 0x04, 0xc3, 0x2c, 0xe7, 0x92, 0xd3, 0xae, 0xfe, 0x11, 0x43, 0x95, 0xd9, 0xdc,
	0x31, 0x70, 0x5e, 0xc8, 0xd3, 0x14, 0x42, 0x19, 0xf3, 0x14, 0x25, 0x9b, 0x5b, 0x26, 0x2a, 0x07,
	0xe6, 0x4f, 0x4a, 0xa0, 0x6f, 0x02, 0x64, 0x91, 0xa6, 0xc0, 0x90, 0x18, 0xfc, 0x6c, 0x91, 0xde,
	0x27, 0x1d, 0xff, 0x9c, 0xa9, 0xca, 0x82, 0x9e, 0x92, 0xd5, 0x11, 0xe3, 0x81, 0xcf, 0x94, 0x48,
	0x45, 0x6c, 0xab, 0x6f, 0x3d, 0xed, 0xee, 0xf7, 0x87, 0x33, 0x03, 0x0e, 0x4f, 0x35, 0xd2, 0x50,
	0xba, 0x3d, 0xd4, 0x55, 0x85, 0x9e, 0x91, 0xd6, 0x08, 0xa4, 0xbd, 0xa0, 0xd5, 0x0f, 0x9a, 0x6a,
	0x90, 0x95, 0x48, 0x31, 0x74, 0x9f, 0xb4, 0xc3, 0x1c, 0x7c, 0x09, 0x76, 0x4b, 0xd3, 0x9b, 0x0d,
	0xfa, 0x58, 0xa7, 0x2a, 0x41, 0x49, 0x2a, 0x4d, 0x91, 0x45, 0x4a, 0xb3, 0x68, 0xd0, 0x5c, 0xe8,
	0x54, 0xad, 0x41, 0x52, 0x69, 0x22, 0x60, 0x20, 0xc1, 0x5e, 0x32, 0x68, 0x4e, 0x74, 0xaa, 0xd6,
	0x20, 0x49, 0x5f, 0x90, 0x45, 0x21, 0x79, 0x66, 0xb7, 0xb5, 0xc2, 0x6e, 0x28, 0xce, 0x24, 0xcf,
	0x2a, 0x5e, 0x53, 0xaa, 0x43, 0x0e, 0xa2, 0x48, 0xc0, 0x5e, 0x36, 0x74, 0x70, 0x75, 0xaa, 0xee,
	0x80, 0xe4, 0xe0, 0x57, 0x8b, 0xac, 0x1b, 0xce, 0x93, 0xee, 0x92, 0xd5, 0xf2, 0xca, 0xfc, 0x28,
	0xca, 0x41, 0xe0, 0x4d, 0x74, 0xdc, 0x1e, 0x46, 0x8f, 0x30, 0x48, 0xb7, 0xc9, 0x7f, 0xd5, 0xcd,
	0xf2, 0x4b, 0x48, 0xf5, 0x81, 0x77, 0xdc, 0x2e, 0xc6, 0xce, 0x55, 0x88, 0xbe, 0x24, 0xf7, 0x2b,
	0x24, 0x4e, 0x80, 0x17, 0xd2, 0x13, 0x10, 0xf2, 0x34, 0x12, 0xfa, 0xbc, 0x5b, 0xee, 0x46, 0x09,
	0x63, 0xf2, 0x0c, 0x73, 0x74, 0xa7, 0xee, 0x5f, 0x08, 0xf0, 0x24, 0x13, 0xfa, 0xa4, 0x57, 0xdc,
	0xb2, 0xdd, 0x85, 0x80, 0x73, 0x26, 0xe8, 0x90, 0xac, 0x97, 0x54, 0x9c, 0x0a, 0x08, 0x8b, 0x1c,
	0xd1, 0x25, 0x8d, 0xae, 0x61, 0xea, 0x43, 0x99, 0x51, 0xfc, 0x73, 0x42, 0xab, 0x59, 0x98, 0xf0,
	0x42, 0xdf, 0xfb, 0x16, 0x33, 0xd0, 0xa7, 0xdb, 0x71, 0xff, 0x2f, 0xe7, 0x60, 0xe2, 0xd8, 0x7f,
	0x1f, 0x33, 0xa0, 0x0e, 0xd9, 0x98, 0x85, 0x21, 0x97, 0x88, 0x2f, 0x6b, 0x7c, 0x6d, 0x8a, 0x43,
	0x2e, 0xb5, 0x60, 0xaf, 0x9e, 0x46, 0x09, 0x2e, 0x61, 0x82, 0xfc, 0x8a, 0xe6, 0xef, 0xd5, 0xfc,
	0x47, 0x98, 0x68, 0x7c, 0x97, 0xac, 0x46, 0xb1, 0xf0, 0x03, 0x06, 0x5e, 0x96, 0x83, 0x94, 0x13,
	0xbb, 0xa3, 0xe7, 0xee, 0x95, 0xd1, 0x2f, 0x3a, 0x38, 0xf8, 0x6d, 0x11, 0x32, 0x7d, 0xb3, 0xf4,
	0x88, 0x90, 0xe9, 0x2e, 0x96, 0xeb, 0xb1, 0x3d, 0xff, 0xc0, 0x8f, 0x6b, 0xa2, 0xba, 0xef, 0x19,
	0x11, 0xdd, 0x27, 0x4b, 0x7a, 0x51, 0xcb, 0xf5, 0x78, 0x34, 0xaf, 0x76, 0x55, 0xb2, 0x12, 0x22,
	0x4a, 0x0f, 0x49, 0x1b, 0x77, 0xb7, 0xdc, 0x92, 0xc7, 0xf3, 0xa2, 0x73, 0x9d, 0xad, 0x9f, 0x17,
	0xc2, 0x83, 0x3f, 0x16, 0xe9, 0x35, 0x56, 0x88, 0x9e, 0x18, 0xe6, 0xdf, 0x31, 0xac, 0xdc, 0xf5,
	0x16, 0x0e, 0x9b, 0x16, 0xb6, 0x0c, 0x05, 0x4c, 0x2e, 0x5e, 0xcf, 0xb9, 0xe8, 0x1b, 0x74, 0x57,
	0x1b, 0x69, 0xec, 0xf5, 0x0d, 0x8c, 0x20, 0x7f, 0x07, 0x23, 0x58, 0xe0, 0xf6, 0x46, 0x50, 0x77,
	0xb5, 0x91, 0xc6, 0xc7, 0xe6, 0x06, 0x46, 0x90, 0xbf, 0x83, 0x11, 0x2c, 0x70, 0x7b, 0x23, 0xa8,
	0x33, 0x1b, 0xf9, 0x4e, 0xba, 0x33, 0x9f, 0x40, 0x7a, 0x50, 0xf5, 0xb7, 0x0c, 0xef, 0x53, 0x81,
	0xa6, 0xee, 0xaf, 0xea, 0xee, 0x38, 0xf5, 0x93, 0x7f, 0x54, 0xe6, 0xde, 0x3f, 0x2c, 0xd2, 0x6b,
	0x7c, 0x4f, 0xa7, 0xf6, 0x2d, 0x83, 0x7d, 0x44, 0xaf, 0xb7, 0xbf, 0x60, 0xb0, 0x8f, 0x3a, 0xe3,
	0x08, 0xef, 0xde, 0x7e, 0x7d, 0x33, 0x8a, 0xe5, 0xb8, 0x08, 0x86, 0x21, 0x4f, 0x9c, 0xc0, 0x97,
	0xe1, 0x38, 0xe4, 0x79, 0xe6, 0x64, 0xac, 0x48, 0x02, 0xc8, 0xf7, 0x44, 0x38, 0x86, 0xc4, 0x17,
	0x4e, 0x50, 0xc4, 0x2c, 0x72, 0x46, 0xdc, 0xc1, 0xc2, 0x8e, 0x2a, 0x1c, 0xb4, 0xf5, 0x9f, 0x83,
	0xbf, 0x01, 0x00, 0x00, 0xff, 0xff, 0x37, 0xf9, 0x42, 0x5a, 0x13, 0x08, 0x00, 0x00,
}
