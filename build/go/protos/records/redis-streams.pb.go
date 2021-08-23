// Code generated by protoc-gen-go. DO NOT EDIT.
// source: records/redis-streams.proto

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

type RedisStreams struct {
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Key                  string   `protobuf:"bytes,2,opt,name=key,proto3" json:"key,omitempty"`
	Value                string   `protobuf:"bytes,3,opt,name=value,proto3" json:"value,omitempty"`
	Stream               string   `protobuf:"bytes,4,opt,name=stream,proto3" json:"stream,omitempty"`
	Timestamp            int64    `protobuf:"varint,5,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RedisStreams) Reset()         { *m = RedisStreams{} }
func (m *RedisStreams) String() string { return proto.CompactTextString(m) }
func (*RedisStreams) ProtoMessage()    {}
func (*RedisStreams) Descriptor() ([]byte, []int) {
	return fileDescriptor_b46bb4d4d13fdc84, []int{0}
}

func (m *RedisStreams) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RedisStreams.Unmarshal(m, b)
}
func (m *RedisStreams) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RedisStreams.Marshal(b, m, deterministic)
}
func (m *RedisStreams) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RedisStreams.Merge(m, src)
}
func (m *RedisStreams) XXX_Size() int {
	return xxx_messageInfo_RedisStreams.Size(m)
}
func (m *RedisStreams) XXX_DiscardUnknown() {
	xxx_messageInfo_RedisStreams.DiscardUnknown(m)
}

var xxx_messageInfo_RedisStreams proto.InternalMessageInfo

func (m *RedisStreams) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *RedisStreams) GetKey() string {
	if m != nil {
		return m.Key
	}
	return ""
}

func (m *RedisStreams) GetValue() string {
	if m != nil {
		return m.Value
	}
	return ""
}

func (m *RedisStreams) GetStream() string {
	if m != nil {
		return m.Stream
	}
	return ""
}

func (m *RedisStreams) GetTimestamp() int64 {
	if m != nil {
		return m.Timestamp
	}
	return 0
}

func init() {
	proto.RegisterType((*RedisStreams)(nil), "protos.records.RedisStreams")
}

func init() { proto.RegisterFile("records/redis-streams.proto", fileDescriptor_b46bb4d4d13fdc84) }

var fileDescriptor_b46bb4d4d13fdc84 = []byte{
	// 199 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x44, 0x8e, 0xbd, 0x4a, 0xc0, 0x30,
	0x14, 0x46, 0x69, 0x6b, 0x0b, 0x0d, 0x52, 0x24, 0x88, 0x04, 0x74, 0x28, 0x4e, 0x5d, 0xda, 0x0c,
	0xae, 0xe2, 0xe0, 0x23, 0xd4, 0xcd, 0x2d, 0x3f, 0x97, 0x36, 0xd8, 0x90, 0x90, 0x9b, 0x08, 0x82,
	0x0f, 0x2f, 0x4d, 0x0a, 0x4e, 0xc9, 0x39, 0x1c, 0xb8, 0x1f, 0x79, 0x0c, 0xa0, 0x5c, 0xd0, 0xc8,
	0x03, 0x68, 0x83, 0x33, 0xc6, 0x00, 0xc2, 0xe2, 0xe2, 0x83, 0x8b, 0x8e, 0x0e, 0xf9, 0xc1, 0xe5,
	0x6a, 0x9e, 0x7f, 0xc9, 0xed, 0x7a, 0x66, 0x1f, 0xa5, 0xa2, 0x03, 0xa9, 0x8d, 0x66, 0xd5, 0x58,
	0x4d, 0xfd, 0x5a, 0x1b, 0x4d, 0xef, 0x48, 0xf3, 0x05, 0x3f, 0xac, 0xce, 0xe2, 0xfc, 0xd2, 0x7b,
	0xd2, 0x7e, 0x8b, 0x23, 0x01, 0x6b, 0xb2, 0x2b, 0x40, 0x1f, 0x48, 0x57, 0x0e, 0xb1, 0x9b, 0xac,
	0x2f, 0xa2, 0x4f, 0xa4, 0x8f, 0xc6, 0x02, 0x46, 0x61, 0x3d, 0x6b, 0xc7, 0x6a, 0x6a, 0xd6, 0x7f,
	0xf1, 0xfe, 0xf6, 0xf9, 0xba, 0x99, 0xb8, 0x27, 0xb9, 0x28, 0x67, 0xb9, 0x14, 0x51, 0xed, 0xca,
	0x05, 0xcf, 0xfd, 0x91, 0xac, 0x84, 0x30, 0xa3, 0xda, 0xc1, 0x0a, 0xe4, 0x32, 0x99, 0x43, 0xf3,
	0xcd, 0xf1, 0xb2, 0x9e, 0x5f, 0xeb, 0x65, 0x97, 0xf9, 0xe5, 0x2f, 0x00, 0x00, 0xff, 0xff, 0xaa,
	0xc8, 0xb9, 0x1f, 0xf3, 0x00, 0x00, 0x00,
}