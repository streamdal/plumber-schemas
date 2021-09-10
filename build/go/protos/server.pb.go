// Code generated by protoc-gen-go. DO NOT EDIT.
// source: server.proto

package protos

import (
	fmt "fmt"
	common "github.com/batchcorp/plumber-schemas/build/go/protos/common"
	opts "github.com/batchcorp/plumber-schemas/build/go/protos/opts"
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

type GetServerOptionsRequest struct {
	// Every gRPC request must have a valid auth config
	Auth                 *common.Auth `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *GetServerOptionsRequest) Reset()         { *m = GetServerOptionsRequest{} }
func (m *GetServerOptionsRequest) String() string { return proto.CompactTextString(m) }
func (*GetServerOptionsRequest) ProtoMessage()    {}
func (*GetServerOptionsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_ad098daeda4239f7, []int{0}
}

func (m *GetServerOptionsRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetServerOptionsRequest.Unmarshal(m, b)
}
func (m *GetServerOptionsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetServerOptionsRequest.Marshal(b, m, deterministic)
}
func (m *GetServerOptionsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetServerOptionsRequest.Merge(m, src)
}
func (m *GetServerOptionsRequest) XXX_Size() int {
	return xxx_messageInfo_GetServerOptionsRequest.Size(m)
}
func (m *GetServerOptionsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetServerOptionsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetServerOptionsRequest proto.InternalMessageInfo

func (m *GetServerOptionsRequest) GetAuth() *common.Auth {
	if m != nil {
		return m.Auth
	}
	return nil
}

type GetServerOptionsResponse struct {
	ServerOptions        *opts.ServerOptions `protobuf:"bytes,1,opt,name=server_options,json=serverOptions,proto3" json:"server_options,omitempty"`
	XXX_NoUnkeyedLiteral struct{}            `json:"-"`
	XXX_unrecognized     []byte              `json:"-"`
	XXX_sizecache        int32               `json:"-"`
}

func (m *GetServerOptionsResponse) Reset()         { *m = GetServerOptionsResponse{} }
func (m *GetServerOptionsResponse) String() string { return proto.CompactTextString(m) }
func (*GetServerOptionsResponse) ProtoMessage()    {}
func (*GetServerOptionsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_ad098daeda4239f7, []int{1}
}

func (m *GetServerOptionsResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetServerOptionsResponse.Unmarshal(m, b)
}
func (m *GetServerOptionsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetServerOptionsResponse.Marshal(b, m, deterministic)
}
func (m *GetServerOptionsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetServerOptionsResponse.Merge(m, src)
}
func (m *GetServerOptionsResponse) XXX_Size() int {
	return xxx_messageInfo_GetServerOptionsResponse.Size(m)
}
func (m *GetServerOptionsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetServerOptionsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetServerOptionsResponse proto.InternalMessageInfo

func (m *GetServerOptionsResponse) GetServerOptions() *opts.ServerOptions {
	if m != nil {
		return m.ServerOptions
	}
	return nil
}

func init() {
	proto.RegisterType((*GetServerOptionsRequest)(nil), "protos.GetServerOptionsRequest")
	proto.RegisterType((*GetServerOptionsResponse)(nil), "protos.GetServerOptionsResponse")
}

func init() { proto.RegisterFile("server.proto", fileDescriptor_ad098daeda4239f7) }

var fileDescriptor_ad098daeda4239f7 = []byte{
	// 211 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x64, 0x90, 0xbf, 0x4b, 0xc7, 0x30,
	0x10, 0xc5, 0x29, 0x88, 0x43, 0xfc, 0x01, 0xad, 0x83, 0xa5, 0x93, 0x74, 0xea, 0x62, 0x02, 0x2a,
	0xee, 0xd5, 0xc1, 0x4d, 0xa1, 0x6e, 0x82, 0x48, 0x13, 0x8f, 0xa6, 0xd0, 0xf4, 0x62, 0xee, 0xe2,
	0xbf, 0xe1, 0xbf, 0x2c, 0x4d, 0x10, 0x2a, 0xdf, 0x29, 0xe4, 0xde, 0x7b, 0x9f, 0x77, 0x9c, 0x38,
	0x25, 0x08, 0xdf, 0x10, 0xa4, 0x0f, 0xc8, 0x58, 0x1d, 0xa7, 0x87, 0x9a, 0xd2, 0xa0, 0x73, 0xb8,
	0xaa, 0x31, 0xb2, 0xcd, 0x52, 0x53, 0xa2, 0x67, 0x52, 0x7b, 0x77, 0xfb, 0x28, 0x2e, 0x9f, 0x80,
	0x5f, 0xd3, 0xe8, 0xc5, 0xf3, 0x8c, 0x2b, 0x0d, 0xf0, 0x15, 0x81, 0xb8, 0xea, 0xc4, 0xd1, 0x96,
	0xad, 0x7f, 0x9e, 0xaf, 0x8a, 0xee, 0xe4, 0xe6, 0x22, 0x27, 0x48, 0x66, 0xae, 0xec, 0x23, 0xdb,
	0x21, 0x39, 0xda, 0x77, 0x51, 0x1f, 0x42, 0xc8, 0xe3, 0x4a, 0x50, 0xf5, 0xe2, 0x3c, 0x17, 0x7e,
	0x60, 0x56, 0xea, 0x22, 0xe1, 0x9a, 0x3f, 0xdc, 0xb6, 0x93, 0xfc, 0x9f, 0x3d, 0xa3, 0xfd, 0xf7,
	0xe1, 0xfe, 0xed, 0x6e, 0x9a, 0xd9, 0x46, 0xbd, 0x55, 0x2b, 0x3d, 0xb2, 0xb1, 0x06, 0x83, 0x57,
	0x7e, 0x89, 0x4e, 0x43, 0xb8, 0x26, 0x63, 0xc1, 0x8d, 0xa4, 0x74, 0x9c, 0x97, 0x4f, 0x35, 0xa1,
	0xca, 0x64, 0x9d, 0x2f, 0x71, 0xfb, 0x1b, 0x00, 0x00, 0xff, 0xff, 0x50, 0xa5, 0x14, 0x1f, 0x20,
	0x01, 0x00, 0x00,
}
