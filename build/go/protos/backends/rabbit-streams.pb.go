// Code generated by protoc-gen-go. DO NOT EDIT.
// source: rabbit-streams.proto

package backends

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

type RabbitStreamsConn struct {
	// Required
	// DSN used to connect to rabbitmq. Ex: rabbitmq-stream://localhost:5552
	Dsn string `protobuf:"bytes,1,opt,name=dsn,proto3" json:"dsn,omitempty"`
	// Connect over TLS
	UseTls bool `protobuf:"varint,2,opt,name=use_tls,json=useTls,proto3" json:"use_tls,omitempty"`
	// Specify to not verify server's TLS certificate
	InsecureTls bool `protobuf:"varint,3,opt,name=insecure_tls,json=insecureTls,proto3" json:"insecure_tls,omitempty"`
	// Required
	Username string `protobuf:"bytes,4,opt,name=username,proto3" json:"username,omitempty"`
	// Required
	Password string `protobuf:"bytes,5,opt,name=password,proto3" json:"password,omitempty"`
	// Required
	ClientName           string   `protobuf:"bytes,6,opt,name=client_name,json=clientName,proto3" json:"client_name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RabbitStreamsConn) Reset()         { *m = RabbitStreamsConn{} }
func (m *RabbitStreamsConn) String() string { return proto.CompactTextString(m) }
func (*RabbitStreamsConn) ProtoMessage()    {}
func (*RabbitStreamsConn) Descriptor() ([]byte, []int) {
	return fileDescriptor_1f92fc7a2c25d9d7, []int{0}
}

func (m *RabbitStreamsConn) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RabbitStreamsConn.Unmarshal(m, b)
}
func (m *RabbitStreamsConn) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RabbitStreamsConn.Marshal(b, m, deterministic)
}
func (m *RabbitStreamsConn) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RabbitStreamsConn.Merge(m, src)
}
func (m *RabbitStreamsConn) XXX_Size() int {
	return xxx_messageInfo_RabbitStreamsConn.Size(m)
}
func (m *RabbitStreamsConn) XXX_DiscardUnknown() {
	xxx_messageInfo_RabbitStreamsConn.DiscardUnknown(m)
}

var xxx_messageInfo_RabbitStreamsConn proto.InternalMessageInfo

func (m *RabbitStreamsConn) GetDsn() string {
	if m != nil {
		return m.Dsn
	}
	return ""
}

func (m *RabbitStreamsConn) GetUseTls() bool {
	if m != nil {
		return m.UseTls
	}
	return false
}

func (m *RabbitStreamsConn) GetInsecureTls() bool {
	if m != nil {
		return m.InsecureTls
	}
	return false
}

func (m *RabbitStreamsConn) GetUsername() string {
	if m != nil {
		return m.Username
	}
	return ""
}

func (m *RabbitStreamsConn) GetPassword() string {
	if m != nil {
		return m.Password
	}
	return ""
}

func (m *RabbitStreamsConn) GetClientName() string {
	if m != nil {
		return m.ClientName
	}
	return ""
}

type RabbitStreamsOffsetOptions struct {
	// @gotags: kong:"group=offset,xor=offset,required"
	SpecificOffset uint64 `protobuf:"varint,1,opt,name=specific_offset,json=specificOffset,proto3" json:"specific_offset,omitempty" kong:"group=offset,xor=offset,required"`
	// @gotags: kong:"group=offset,xor=offset,required"
	LastOffset uint64 `protobuf:"varint,2,opt,name=last_offset,json=lastOffset,proto3" json:"last_offset,omitempty" kong:"group=offset,xor=offset,required"`
	// @gotags: kong:"group=offset,xor=offset,required"
	LastConsumed bool `protobuf:"varint,3,opt,name=last_consumed,json=lastConsumed,proto3" json:"last_consumed,omitempty" kong:"group=offset,xor=offset,required"`
	// @gotags: kong:"group=offset,xor=offset,required"
	FirstOffset bool `protobuf:"varint,4,opt,name=first_offset,json=firstOffset,proto3" json:"first_offset,omitempty" kong:"group=offset,xor=offset,required"`
	// @gotags: kong:"group=offset,xor=offset,required"
	NextOffset           bool     `protobuf:"varint,5,opt,name=next_offset,json=nextOffset,proto3" json:"next_offset,omitempty" kong:"group=offset,xor=offset,required"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RabbitStreamsOffsetOptions) Reset()         { *m = RabbitStreamsOffsetOptions{} }
func (m *RabbitStreamsOffsetOptions) String() string { return proto.CompactTextString(m) }
func (*RabbitStreamsOffsetOptions) ProtoMessage()    {}
func (*RabbitStreamsOffsetOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_1f92fc7a2c25d9d7, []int{1}
}

func (m *RabbitStreamsOffsetOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RabbitStreamsOffsetOptions.Unmarshal(m, b)
}
func (m *RabbitStreamsOffsetOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RabbitStreamsOffsetOptions.Marshal(b, m, deterministic)
}
func (m *RabbitStreamsOffsetOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RabbitStreamsOffsetOptions.Merge(m, src)
}
func (m *RabbitStreamsOffsetOptions) XXX_Size() int {
	return xxx_messageInfo_RabbitStreamsOffsetOptions.Size(m)
}
func (m *RabbitStreamsOffsetOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_RabbitStreamsOffsetOptions.DiscardUnknown(m)
}

var xxx_messageInfo_RabbitStreamsOffsetOptions proto.InternalMessageInfo

func (m *RabbitStreamsOffsetOptions) GetSpecificOffset() uint64 {
	if m != nil {
		return m.SpecificOffset
	}
	return 0
}

func (m *RabbitStreamsOffsetOptions) GetLastOffset() uint64 {
	if m != nil {
		return m.LastOffset
	}
	return 0
}

func (m *RabbitStreamsOffsetOptions) GetLastConsumed() bool {
	if m != nil {
		return m.LastConsumed
	}
	return false
}

func (m *RabbitStreamsOffsetOptions) GetFirstOffset() bool {
	if m != nil {
		return m.FirstOffset
	}
	return false
}

func (m *RabbitStreamsOffsetOptions) GetNextOffset() bool {
	if m != nil {
		return m.NextOffset
	}
	return false
}

type RabbitStreamsReadArgs struct {
	// Required
	Stream string `protobuf:"bytes,1,opt,name=stream,proto3" json:"stream,omitempty"`
	// Optional
	// If specified, stream will be declared
	DeclareStream bool `protobuf:"varint,2,opt,name=declare_stream,json=declareStream,proto3" json:"declare_stream,omitempty"`
	// Required if declare_stream is true; size capacity to declare the stream
	// with. Ex: 1024k, 10mb, 3gb
	DeclareStreamSize string `protobuf:"bytes,3,opt,name=declare_stream_size,json=declareStreamSize,proto3" json:"declare_stream_size,omitempty"`
	// Required read position
	// @gotags: kong:"embed"
	OffsetOptions        *RabbitStreamsOffsetOptions `protobuf:"bytes,4,opt,name=offset_options,json=offsetOptions,proto3" json:"offset_options,omitempty" kong:"embed"`
	XXX_NoUnkeyedLiteral struct{}                    `json:"-"`
	XXX_unrecognized     []byte                      `json:"-"`
	XXX_sizecache        int32                       `json:"-"`
}

func (m *RabbitStreamsReadArgs) Reset()         { *m = RabbitStreamsReadArgs{} }
func (m *RabbitStreamsReadArgs) String() string { return proto.CompactTextString(m) }
func (*RabbitStreamsReadArgs) ProtoMessage()    {}
func (*RabbitStreamsReadArgs) Descriptor() ([]byte, []int) {
	return fileDescriptor_1f92fc7a2c25d9d7, []int{2}
}

func (m *RabbitStreamsReadArgs) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RabbitStreamsReadArgs.Unmarshal(m, b)
}
func (m *RabbitStreamsReadArgs) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RabbitStreamsReadArgs.Marshal(b, m, deterministic)
}
func (m *RabbitStreamsReadArgs) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RabbitStreamsReadArgs.Merge(m, src)
}
func (m *RabbitStreamsReadArgs) XXX_Size() int {
	return xxx_messageInfo_RabbitStreamsReadArgs.Size(m)
}
func (m *RabbitStreamsReadArgs) XXX_DiscardUnknown() {
	xxx_messageInfo_RabbitStreamsReadArgs.DiscardUnknown(m)
}

var xxx_messageInfo_RabbitStreamsReadArgs proto.InternalMessageInfo

func (m *RabbitStreamsReadArgs) GetStream() string {
	if m != nil {
		return m.Stream
	}
	return ""
}

func (m *RabbitStreamsReadArgs) GetDeclareStream() bool {
	if m != nil {
		return m.DeclareStream
	}
	return false
}

func (m *RabbitStreamsReadArgs) GetDeclareStreamSize() string {
	if m != nil {
		return m.DeclareStreamSize
	}
	return ""
}

func (m *RabbitStreamsReadArgs) GetOffsetOptions() *RabbitStreamsOffsetOptions {
	if m != nil {
		return m.OffsetOptions
	}
	return nil
}

type RabbitStreamsWriteArgs struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RabbitStreamsWriteArgs) Reset()         { *m = RabbitStreamsWriteArgs{} }
func (m *RabbitStreamsWriteArgs) String() string { return proto.CompactTextString(m) }
func (*RabbitStreamsWriteArgs) ProtoMessage()    {}
func (*RabbitStreamsWriteArgs) Descriptor() ([]byte, []int) {
	return fileDescriptor_1f92fc7a2c25d9d7, []int{3}
}

func (m *RabbitStreamsWriteArgs) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RabbitStreamsWriteArgs.Unmarshal(m, b)
}
func (m *RabbitStreamsWriteArgs) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RabbitStreamsWriteArgs.Marshal(b, m, deterministic)
}
func (m *RabbitStreamsWriteArgs) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RabbitStreamsWriteArgs.Merge(m, src)
}
func (m *RabbitStreamsWriteArgs) XXX_Size() int {
	return xxx_messageInfo_RabbitStreamsWriteArgs.Size(m)
}
func (m *RabbitStreamsWriteArgs) XXX_DiscardUnknown() {
	xxx_messageInfo_RabbitStreamsWriteArgs.DiscardUnknown(m)
}

var xxx_messageInfo_RabbitStreamsWriteArgs proto.InternalMessageInfo

func init() {
	proto.RegisterType((*RabbitStreamsConn)(nil), "protos.backends.RabbitStreamsConn")
	proto.RegisterType((*RabbitStreamsOffsetOptions)(nil), "protos.backends.RabbitStreamsOffsetOptions")
	proto.RegisterType((*RabbitStreamsReadArgs)(nil), "protos.backends.RabbitStreamsReadArgs")
	proto.RegisterType((*RabbitStreamsWriteArgs)(nil), "protos.backends.RabbitStreamsWriteArgs")
}

func init() { proto.RegisterFile("rabbit-streams.proto", fileDescriptor_1f92fc7a2c25d9d7) }

var fileDescriptor_1f92fc7a2c25d9d7 = []byte{
	// 429 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x74, 0x92, 0xc1, 0x6e, 0xd4, 0x30,
	0x10, 0x86, 0x95, 0x76, 0xbb, 0xb4, 0xb3, 0xdd, 0x2d, 0x35, 0x50, 0xa2, 0x5e, 0x28, 0x8b, 0x10,
	0x95, 0x50, 0x13, 0x09, 0xce, 0x08, 0x41, 0xef, 0x54, 0x4a, 0x91, 0x90, 0xb8, 0x44, 0x8e, 0x33,
	0xd9, 0xb5, 0x48, 0xec, 0xc8, 0x63, 0x0b, 0xd4, 0x47, 0xe3, 0x25, 0xb8, 0xf3, 0x34, 0xc8, 0x76,
	0xd2, 0x25, 0x48, 0x9c, 0x92, 0xf9, 0xff, 0x2f, 0xf6, 0xfc, 0x33, 0x81, 0xc7, 0x86, 0x57, 0x95,
	0xb4, 0x57, 0x64, 0x0d, 0xf2, 0x8e, 0xb2, 0xde, 0x68, 0xab, 0xd9, 0x49, 0x78, 0x50, 0x56, 0x71,
	0xf1, 0x0d, 0x55, 0x4d, 0xeb, 0x9f, 0x09, 0x9c, 0x16, 0x81, 0xbc, 0x8d, 0xe0, 0xb5, 0x56, 0x8a,
	0x3d, 0x84, 0xfd, 0x9a, 0x54, 0x9a, 0x5c, 0x24, 0x97, 0x47, 0x85, 0x7f, 0x65, 0x4f, 0xe1, 0x81,
	0x23, 0x2c, 0x6d, 0x4b, 0xe9, 0xde, 0x45, 0x72, 0x79, 0x58, 0xcc, 0x1d, 0xe1, 0xe7, 0x96, 0xd8,
	0x73, 0x38, 0x96, 0x8a, 0x50, 0x38, 0x13, 0xdd, 0xfd, 0xe0, 0x2e, 0x46, 0xcd, 0x23, 0xe7, 0x70,
	0xe8, 0x08, 0x8d, 0xe2, 0x1d, 0xa6, 0xb3, 0x70, 0xe4, 0x7d, 0xed, 0xbd, 0x9e, 0x13, 0x7d, 0xd7,
	0xa6, 0x4e, 0x0f, 0xa2, 0x37, 0xd6, 0xec, 0x19, 0x2c, 0x44, 0x2b, 0x51, 0xd9, 0x32, 0x7c, 0x3a,
	0x0f, 0x36, 0x44, 0xe9, 0x13, 0xef, 0x70, 0xfd, 0x2b, 0x81, 0xf3, 0x49, 0xf3, 0x37, 0x4d, 0x43,
	0x68, 0x6f, 0x7a, 0x2b, 0xb5, 0x22, 0xf6, 0x0a, 0x4e, 0xa8, 0x47, 0x21, 0x1b, 0x29, 0x4a, 0x1d,
	0x9c, 0x90, 0x68, 0x56, 0xac, 0x46, 0x39, 0xf2, 0xfe, 0xa2, 0x96, 0x93, 0x1d, 0xa1, 0xbd, 0x00,
	0x81, 0x97, 0x06, 0xe0, 0x05, 0x2c, 0x03, 0x20, 0xb4, 0x22, 0xd7, 0x61, 0x3d, 0xa4, 0x3c, 0xf6,
	0xe2, 0xf5, 0xa0, 0xf9, 0x49, 0x34, 0xd2, 0xec, 0x8e, 0x99, 0xc5, 0x49, 0x04, 0x6d, 0x77, 0x91,
	0xc2, 0x1f, 0xf7, 0xc4, 0x41, 0x20, 0xc0, 0x4b, 0x11, 0x58, 0xff, 0x4e, 0xe0, 0xc9, 0x24, 0x51,
	0x81, 0xbc, 0xfe, 0x60, 0x36, 0xc4, 0xce, 0x60, 0x1e, 0x57, 0x39, 0x6c, 0x65, 0xa8, 0xd8, 0x4b,
	0x58, 0xd5, 0x28, 0x5a, 0x6e, 0xb0, 0x1c, 0xfc, 0xb8, 0x9f, 0xe5, 0xa0, 0xc6, 0x73, 0x58, 0x06,
	0x8f, 0xa6, 0x58, 0x49, 0xf2, 0x0e, 0x43, 0x8e, 0xa3, 0xe2, 0x74, 0xc2, 0xde, 0xca, 0x3b, 0x64,
	0x05, 0xac, 0x62, 0x93, 0xa5, 0x8e, 0xd3, 0x0c, 0x71, 0x16, 0x6f, 0x5e, 0x67, 0xff, 0xfc, 0x41,
	0xd9, 0xff, 0x17, 0x50, 0x2c, 0xf5, 0xdf, 0xe5, 0x3a, 0x85, 0xb3, 0x09, 0xfc, 0xc5, 0x48, 0x8b,
	0x3e, 0xdc, 0xc7, 0xf7, 0x5f, 0xdf, 0x6d, 0xa4, 0xdd, 0xba, 0x2a, 0x13, 0xba, 0xcb, 0x2b, 0x6e,
	0xc5, 0x56, 0x68, 0xd3, 0xe7, 0x7d, 0xeb, 0xba, 0x0a, 0xcd, 0x15, 0x89, 0x2d, 0x76, 0x9c, 0xf2,
	0xca, 0xc9, 0xb6, 0xce, 0x37, 0x3a, 0x8f, 0x4d, 0xe4, 0x63, 0x13, 0xd5, 0x3c, 0x08, 0x6f, 0xff,
	0x04, 0x00, 0x00, 0xff, 0xff, 0x7e, 0x13, 0x52, 0x36, 0xf6, 0x02, 0x00, 0x00,
}
