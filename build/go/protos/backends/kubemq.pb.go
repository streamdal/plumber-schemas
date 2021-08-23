// Code generated by protoc-gen-go. DO NOT EDIT.
// source: kubemq.proto

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

type KubeMQ struct {
	// Required
	Queue                string   `protobuf:"bytes,1,opt,name=queue,proto3" json:"queue,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *KubeMQ) Reset()         { *m = KubeMQ{} }
func (m *KubeMQ) String() string { return proto.CompactTextString(m) }
func (*KubeMQ) ProtoMessage()    {}
func (*KubeMQ) Descriptor() ([]byte, []int) {
	return fileDescriptor_5618575e3d8f6914, []int{0}
}

func (m *KubeMQ) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_KubeMQ.Unmarshal(m, b)
}
func (m *KubeMQ) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_KubeMQ.Marshal(b, m, deterministic)
}
func (m *KubeMQ) XXX_Merge(src proto.Message) {
	xxx_messageInfo_KubeMQ.Merge(m, src)
}
func (m *KubeMQ) XXX_Size() int {
	return xxx_messageInfo_KubeMQ.Size(m)
}
func (m *KubeMQ) XXX_DiscardUnknown() {
	xxx_messageInfo_KubeMQ.DiscardUnknown(m)
}

var xxx_messageInfo_KubeMQ proto.InternalMessageInfo

func (m *KubeMQ) GetQueue() string {
	if m != nil {
		return m.Queue
	}
	return ""
}

func init() {
	proto.RegisterType((*KubeMQ)(nil), "protos.backends.KubeMQ")
}

func init() { proto.RegisterFile("kubemq.proto", fileDescriptor_5618575e3d8f6914) }

var fileDescriptor_5618575e3d8f6914 = []byte{
	// 140 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xe2, 0xc9, 0x2e, 0x4d, 0x4a,
	0xcd, 0x2d, 0xd4, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0xe2, 0x07, 0x53, 0xc5, 0x7a, 0x49, 0x89,
	0xc9, 0xd9, 0xa9, 0x79, 0x29, 0xc5, 0x4a, 0x72, 0x5c, 0x6c, 0xde, 0xa5, 0x49, 0xa9, 0xbe, 0x81,
	0x42, 0x22, 0x5c, 0xac, 0x85, 0xa5, 0xa9, 0xa5, 0xa9, 0x12, 0x8c, 0x0a, 0x8c, 0x1a, 0x9c, 0x41,
	0x10, 0x8e, 0x93, 0x7d, 0x94, 0x6d, 0x7a, 0x66, 0x49, 0x46, 0x69, 0x92, 0x5e, 0x72, 0x7e, 0xae,
	0x7e, 0x52, 0x62, 0x49, 0x72, 0x46, 0x72, 0x7e, 0x51, 0x81, 0x7e, 0x41, 0x4e, 0x69, 0x6e, 0x52,
	0x6a, 0x91, 0x6e, 0x71, 0x72, 0x46, 0x6a, 0x6e, 0x62, 0xb1, 0x7e, 0x52, 0x69, 0x66, 0x4e, 0x8a,
	0x7e, 0x7a, 0xbe, 0x3e, 0xc4, 0x02, 0x7d, 0x98, 0x05, 0x49, 0x6c, 0x60, 0x01, 0x63, 0x40, 0x00,
	0x00, 0x00, 0xff, 0xff, 0x12, 0xde, 0x23, 0x7b, 0x88, 0x00, 0x00, 0x00,
}