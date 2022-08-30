// Code generated by protoc-gen-go. DO NOT EDIT.
// source: ps_server.proto

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
	return fileDescriptor_99cda3bcaff1a15a, []int{0}
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
	return fileDescriptor_99cda3bcaff1a15a, []int{1}
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

func init() { proto.RegisterFile("ps_server.proto", fileDescriptor_99cda3bcaff1a15a) }

var fileDescriptor_99cda3bcaff1a15a = []byte{
	// 230 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x64, 0x90, 0xc1, 0x4a, 0x03, 0x31,
	0x10, 0x86, 0x29, 0x88, 0x87, 0x88, 0x0a, 0xeb, 0xc1, 0x75, 0x45, 0x90, 0x9e, 0x7a, 0x71, 0x03,
	0x2a, 0xde, 0xab, 0x07, 0x6f, 0x0a, 0xf5, 0x26, 0xc8, 0x92, 0xc4, 0xa1, 0x59, 0x68, 0x76, 0xc6,
	0xcc, 0xc4, 0xd7, 0xf0, 0x95, 0x25, 0x89, 0x42, 0x4b, 0x4f, 0x93, 0xe4, 0x9f, 0xf9, 0xbe, 0x30,
	0xea, 0x94, 0x78, 0x60, 0x88, 0xdf, 0x10, 0x7b, 0x8a, 0x28, 0xd8, 0x1c, 0x96, 0xc2, 0xdd, 0xa5,
	0xc3, 0x10, 0x70, 0xd2, 0xc4, 0x43, 0x3d, 0x0d, 0x26, 0x89, 0xaf, 0x4d, 0xdd, 0xd5, 0x5e, 0xc8,
	0x62, 0x24, 0xf1, 0x5f, 0x7c, 0x81, 0x24, 0x9c, 0xc3, 0x5c, 0x77, 0xf0, 0xf3, 0x27, 0x75, 0xfe,
	0x0c, 0xf2, 0x56, 0x9e, 0x5e, 0x49, 0x46, 0x9c, 0x78, 0x05, 0x5f, 0x09, 0x58, 0x9a, 0x85, 0x3a,
	0xc8, 0x8a, 0xf6, 0xe7, 0xe5, 0x7a, 0xb6, 0x38, 0xba, 0x3d, 0xab, 0x13, 0xdc, 0x57, 0x43, 0xbf,
	0x4c, 0xe2, 0x57, 0xa5, 0x63, 0xfe, 0xa1, 0xda, 0x7d, 0x08, 0x13, 0x4e, 0x0c, 0xcd, 0x52, 0x9d,
	0x54, 0x61, 0x96, 0xe7, 0xa4, 0x9d, 0x15, 0x5c, 0xf7, 0x8f, 0xcb, 0x7f, 0xea, 0x77, 0x67, 0x8f,
	0x79, 0xfb, 0xfa, 0xf8, 0xf0, 0x7e, 0xbf, 0x1e, 0xc5, 0x27, 0x9b, 0xd5, 0xda, 0x1a, 0x71, 0xde,
	0x61, 0x24, 0x4d, 0x9b, 0x14, 0x2c, 0xc4, 0x1b, 0x76, 0x1e, 0x82, 0x61, 0x6d, 0xd3, 0xb8, 0xf9,
	0xd4, 0x6b, 0xd4, 0x95, 0x6c, 0xeb, 0xea, 0xee, 0x7e, 0x03, 0x00, 0x00, 0xff, 0xff, 0x9f, 0x3d,
	0xb6, 0xa3, 0x54, 0x01, 0x00, 0x00,
}
