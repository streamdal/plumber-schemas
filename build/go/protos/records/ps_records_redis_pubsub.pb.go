// Code generated by protoc-gen-go. DO NOT EDIT.
// source: records/ps_records_redis_pubsub.proto

package records

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

type RedisPubsub struct {
	Metadata             map[string]string `protobuf:"bytes,1,rep,name=metadata,proto3" json:"metadata,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Value                []byte            `protobuf:"bytes,2,opt,name=value,proto3" json:"value,omitempty"`
	Timestamp            int64             `protobuf:"varint,3,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *RedisPubsub) Reset()         { *m = RedisPubsub{} }
func (m *RedisPubsub) String() string { return proto.CompactTextString(m) }
func (*RedisPubsub) ProtoMessage()    {}
func (*RedisPubsub) Descriptor() ([]byte, []int) {
	return fileDescriptor_50fca510af804137, []int{0}
}

func (m *RedisPubsub) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RedisPubsub.Unmarshal(m, b)
}
func (m *RedisPubsub) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RedisPubsub.Marshal(b, m, deterministic)
}
func (m *RedisPubsub) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RedisPubsub.Merge(m, src)
}
func (m *RedisPubsub) XXX_Size() int {
	return xxx_messageInfo_RedisPubsub.Size(m)
}
func (m *RedisPubsub) XXX_DiscardUnknown() {
	xxx_messageInfo_RedisPubsub.DiscardUnknown(m)
}

var xxx_messageInfo_RedisPubsub proto.InternalMessageInfo

func (m *RedisPubsub) GetMetadata() map[string]string {
	if m != nil {
		return m.Metadata
	}
	return nil
}

func (m *RedisPubsub) GetValue() []byte {
	if m != nil {
		return m.Value
	}
	return nil
}

func (m *RedisPubsub) GetTimestamp() int64 {
	if m != nil {
		return m.Timestamp
	}
	return 0
}

func init() {
	proto.RegisterType((*RedisPubsub)(nil), "protos.records.RedisPubsub")
	proto.RegisterMapType((map[string]string)(nil), "protos.records.RedisPubsub.MetadataEntry")
}

func init() {
	proto.RegisterFile("records/ps_records_redis_pubsub.proto", fileDescriptor_50fca510af804137)
}

var fileDescriptor_50fca510af804137 = []byte{
	// 241 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x54, 0x8f, 0x41, 0x4b, 0xc4, 0x30,
	0x14, 0x84, 0xc9, 0x16, 0xc5, 0x66, 0x55, 0x24, 0x78, 0x28, 0xe2, 0xa1, 0x08, 0x42, 0x3d, 0x98,
	0x80, 0x5e, 0x44, 0xc5, 0x83, 0xb0, 0x47, 0x41, 0x72, 0xf4, 0x52, 0x92, 0x34, 0x6c, 0x8b, 0x8d,
	0x09, 0x79, 0x2f, 0xc2, 0xfe, 0x40, 0xff, 0x97, 0x6c, 0x37, 0xe8, 0xf6, 0xf4, 0x66, 0x1e, 0xdf,
	0x0c, 0x0c, 0xbd, 0x8e, 0xd6, 0xf8, 0xd8, 0x81, 0x08, 0xd0, 0x66, 0xd9, 0x46, 0xdb, 0x0d, 0xd0,
	0x86, 0xa4, 0x21, 0x69, 0x1e, 0xa2, 0x47, 0xcf, 0x4e, 0xa7, 0x03, 0x3c, 0x23, 0x57, 0x3f, 0x84,
	0x2e, 0xe5, 0x16, 0x7b, 0x9f, 0x28, 0xb6, 0xa2, 0x47, 0xce, 0xa2, 0xea, 0x14, 0xaa, 0x8a, 0xd4,
	0x45, 0xb3, 0xbc, 0xbb, 0xe1, 0xf3, 0x08, 0xdf, 0xc3, 0xf9, 0x5b, 0x66, 0x57, 0x5f, 0x18, 0x37,
	0xf2, 0x2f, 0xca, 0xce, 0xe9, 0xc1, 0xb7, 0x1a, 0x93, 0xad, 0x16, 0x35, 0x69, 0x8e, 0xe5, 0xce,
	0xb0, 0x4b, 0x5a, 0xe2, 0xe0, 0x2c, 0xa0, 0x72, 0xa1, 0x2a, 0x6a, 0xd2, 0x14, 0xf2, 0xff, 0x71,
	0xf1, 0x44, 0x4f, 0x66, 0x75, 0xec, 0x8c, 0x16, 0x9f, 0x76, 0x53, 0x91, 0x9a, 0x34, 0xa5, 0xdc,
	0xca, 0x79, 0x6d, 0x99, 0x6b, 0x1f, 0x17, 0x0f, 0xe4, 0xf5, 0xe5, 0xe3, 0x79, 0x3d, 0x60, 0x9f,
	0x34, 0x37, 0xde, 0x09, 0xad, 0xd0, 0xf4, 0xc6, 0xc7, 0x20, 0xc2, 0x98, 0x9c, 0xb6, 0xf1, 0x16,
	0x4c, 0x6f, 0x9d, 0x02, 0xa1, 0xd3, 0x30, 0x76, 0x62, 0xed, 0xc5, 0x6e, 0x94, 0xc8, 0xa3, 0xf4,
	0xe1, 0xe4, 0xef, 0x7f, 0x03, 0x00, 0x00, 0xff, 0xff, 0x8d, 0xac, 0xee, 0xd8, 0x47, 0x01, 0x00,
	0x00,
}
