// Code generated by protoc-gen-go. DO NOT EDIT.
// source: activemq.proto

package args

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

type ActiveMQConn struct {
	// @gotags: kong:"help='Destination host address',required,default=localhost:61613"
	Address              string   `protobuf:"bytes,1,opt,name=address,proto3" json:"address,omitempty" kong:"help='Destination host address',required,default=localhost:61613"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ActiveMQConn) Reset()         { *m = ActiveMQConn{} }
func (m *ActiveMQConn) String() string { return proto.CompactTextString(m) }
func (*ActiveMQConn) ProtoMessage()    {}
func (*ActiveMQConn) Descriptor() ([]byte, []int) {
	return fileDescriptor_8d8e05b468c86515, []int{0}
}

func (m *ActiveMQConn) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ActiveMQConn.Unmarshal(m, b)
}
func (m *ActiveMQConn) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ActiveMQConn.Marshal(b, m, deterministic)
}
func (m *ActiveMQConn) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ActiveMQConn.Merge(m, src)
}
func (m *ActiveMQConn) XXX_Size() int {
	return xxx_messageInfo_ActiveMQConn.Size(m)
}
func (m *ActiveMQConn) XXX_DiscardUnknown() {
	xxx_messageInfo_ActiveMQConn.DiscardUnknown(m)
}

var xxx_messageInfo_ActiveMQConn proto.InternalMessageInfo

func (m *ActiveMQConn) GetAddress() string {
	if m != nil {
		return m.Address
	}
	return ""
}

type ActiveMQReadOpts struct {
	// @gotags: kong:"help='Topic to read message(s) from',xor=activemq_read"
	Topic string `protobuf:"bytes,1,opt,name=topic,proto3" json:"topic,omitempty" kong:"help='Topic to read message(s) from',xor=activemq_read"`
	// @gotags: kong:'help='Queue to read message(s) from',xor=activemq_read"
	Queue                string   `protobuf:"bytes,2,opt,name=queue,proto3" json:"queue,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ActiveMQReadOpts) Reset()         { *m = ActiveMQReadOpts{} }
func (m *ActiveMQReadOpts) String() string { return proto.CompactTextString(m) }
func (*ActiveMQReadOpts) ProtoMessage()    {}
func (*ActiveMQReadOpts) Descriptor() ([]byte, []int) {
	return fileDescriptor_8d8e05b468c86515, []int{1}
}

func (m *ActiveMQReadOpts) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ActiveMQReadOpts.Unmarshal(m, b)
}
func (m *ActiveMQReadOpts) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ActiveMQReadOpts.Marshal(b, m, deterministic)
}
func (m *ActiveMQReadOpts) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ActiveMQReadOpts.Merge(m, src)
}
func (m *ActiveMQReadOpts) XXX_Size() int {
	return xxx_messageInfo_ActiveMQReadOpts.Size(m)
}
func (m *ActiveMQReadOpts) XXX_DiscardUnknown() {
	xxx_messageInfo_ActiveMQReadOpts.DiscardUnknown(m)
}

var xxx_messageInfo_ActiveMQReadOpts proto.InternalMessageInfo

func (m *ActiveMQReadOpts) GetTopic() string {
	if m != nil {
		return m.Topic
	}
	return ""
}

func (m *ActiveMQReadOpts) GetQueue() string {
	if m != nil {
		return m.Queue
	}
	return ""
}

type ActiveMQWriteOpts struct {
	// @gotags: kong:"help='Topic to write message(s) to',xor=activemq_write"
	Topic string `protobuf:"bytes,1,opt,name=topic,proto3" json:"topic,omitempty" kong:"help='Topic to write message(s) to',xor=activemq_write"`
	// @gotags: kong:'help='Queue to write message(s) to',xor=activemq_write"
	Queue                string   `protobuf:"bytes,2,opt,name=queue,proto3" json:"queue,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ActiveMQWriteOpts) Reset()         { *m = ActiveMQWriteOpts{} }
func (m *ActiveMQWriteOpts) String() string { return proto.CompactTextString(m) }
func (*ActiveMQWriteOpts) ProtoMessage()    {}
func (*ActiveMQWriteOpts) Descriptor() ([]byte, []int) {
	return fileDescriptor_8d8e05b468c86515, []int{2}
}

func (m *ActiveMQWriteOpts) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ActiveMQWriteOpts.Unmarshal(m, b)
}
func (m *ActiveMQWriteOpts) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ActiveMQWriteOpts.Marshal(b, m, deterministic)
}
func (m *ActiveMQWriteOpts) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ActiveMQWriteOpts.Merge(m, src)
}
func (m *ActiveMQWriteOpts) XXX_Size() int {
	return xxx_messageInfo_ActiveMQWriteOpts.Size(m)
}
func (m *ActiveMQWriteOpts) XXX_DiscardUnknown() {
	xxx_messageInfo_ActiveMQWriteOpts.DiscardUnknown(m)
}

var xxx_messageInfo_ActiveMQWriteOpts proto.InternalMessageInfo

func (m *ActiveMQWriteOpts) GetTopic() string {
	if m != nil {
		return m.Topic
	}
	return ""
}

func (m *ActiveMQWriteOpts) GetQueue() string {
	if m != nil {
		return m.Queue
	}
	return ""
}

func init() {
	proto.RegisterType((*ActiveMQConn)(nil), "protos.args.ActiveMQConn")
	proto.RegisterType((*ActiveMQReadOpts)(nil), "protos.args.ActiveMQReadOpts")
	proto.RegisterType((*ActiveMQWriteOpts)(nil), "protos.args.ActiveMQWriteOpts")
}

func init() { proto.RegisterFile("activemq.proto", fileDescriptor_8d8e05b468c86515) }

var fileDescriptor_8d8e05b468c86515 = []byte{
	// 193 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x8f, 0x3d, 0x0b, 0xc2, 0x30,
	0x10, 0x86, 0xa9, 0xa0, 0x62, 0x14, 0xd1, 0xe2, 0xd0, 0x51, 0x3a, 0x75, 0xb1, 0x19, 0x9c, 0x44,
	0x50, 0xd4, 0x59, 0xc4, 0x2e, 0x82, 0x5b, 0x3e, 0x8e, 0x36, 0xd0, 0x34, 0x69, 0x3e, 0xfc, 0xfd,
	0xd2, 0xd4, 0xfe, 0x00, 0xa7, 0xe3, 0x79, 0xef, 0xbd, 0x83, 0x07, 0x2d, 0x09, 0x73, 0xe2, 0x03,
	0xb2, 0xcd, 0xb5, 0x51, 0x4e, 0xc5, 0xf3, 0x30, 0x6c, 0x4e, 0x4c, 0x69, 0xd3, 0x0c, 0x2d, 0x2e,
	0x61, 0x7d, 0x7f, 0xde, 0x54, 0xd3, 0xc4, 0x09, 0x9a, 0x12, 0xce, 0x0d, 0x58, 0x9b, 0x44, 0xdb,
	0x28, 0x9b, 0x15, 0x03, 0xa6, 0x27, 0xb4, 0x1a, 0x9a, 0x05, 0x10, 0xfe, 0xd0, 0xce, 0xc6, 0x1b,
	0x34, 0x76, 0x4a, 0x0b, 0xf6, 0xeb, 0xf6, 0xd0, 0xa5, 0xad, 0x07, 0x0f, 0xc9, 0xa8, 0x4f, 0x03,
	0xa4, 0x67, 0xb4, 0x1e, 0xee, 0x5f, 0x46, 0x38, 0xf8, 0xf7, 0xc1, 0xf5, 0xf8, 0x3e, 0x94, 0xc2,
	0x55, 0x9e, 0xe6, 0x4c, 0x49, 0x4c, 0x89, 0x63, 0x15, 0x53, 0x46, 0x63, 0x5d, 0x7b, 0x49, 0xc1,
	0xec, 0x2c, 0xab, 0x40, 0x12, 0x8b, 0xa9, 0x17, 0x35, 0xc7, 0xa5, 0xc2, 0xbd, 0x27, 0xee, 0x3c,
	0xe9, 0x24, 0xc0, 0xfe, 0x1b, 0x00, 0x00, 0xff, 0xff, 0x3f, 0x04, 0xa3, 0xe4, 0x0d, 0x01, 0x00,
	0x00,
}