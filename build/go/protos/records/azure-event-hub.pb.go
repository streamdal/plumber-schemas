// Code generated by protoc-gen-go. DO NOT EDIT.
// source: records/azure-event-hub.proto

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

type AzureEventHub struct {
	Id                   string            `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	SystemProperties     map[string]string `protobuf:"bytes,2,rep,name=system_properties,json=systemProperties,proto3" json:"system_properties,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Timestamp            int64             `protobuf:"varint,3,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	Value                []byte            `protobuf:"bytes,4,opt,name=value,proto3" json:"value,omitempty"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *AzureEventHub) Reset()         { *m = AzureEventHub{} }
func (m *AzureEventHub) String() string { return proto.CompactTextString(m) }
func (*AzureEventHub) ProtoMessage()    {}
func (*AzureEventHub) Descriptor() ([]byte, []int) {
	return fileDescriptor_7baf9af79d9e2c21, []int{0}
}

func (m *AzureEventHub) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_AzureEventHub.Unmarshal(m, b)
}
func (m *AzureEventHub) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_AzureEventHub.Marshal(b, m, deterministic)
}
func (m *AzureEventHub) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AzureEventHub.Merge(m, src)
}
func (m *AzureEventHub) XXX_Size() int {
	return xxx_messageInfo_AzureEventHub.Size(m)
}
func (m *AzureEventHub) XXX_DiscardUnknown() {
	xxx_messageInfo_AzureEventHub.DiscardUnknown(m)
}

var xxx_messageInfo_AzureEventHub proto.InternalMessageInfo

func (m *AzureEventHub) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *AzureEventHub) GetSystemProperties() map[string]string {
	if m != nil {
		return m.SystemProperties
	}
	return nil
}

func (m *AzureEventHub) GetTimestamp() int64 {
	if m != nil {
		return m.Timestamp
	}
	return 0
}

func (m *AzureEventHub) GetValue() []byte {
	if m != nil {
		return m.Value
	}
	return nil
}

func init() {
	proto.RegisterType((*AzureEventHub)(nil), "protos.records.AzureEventHub")
	proto.RegisterMapType((map[string]string)(nil), "protos.records.AzureEventHub.SystemPropertiesEntry")
}

func init() { proto.RegisterFile("records/azure-event-hub.proto", fileDescriptor_7baf9af79d9e2c21) }

var fileDescriptor_7baf9af79d9e2c21 = []byte{
	// 263 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x6c, 0x90, 0xcf, 0x4b, 0xc3, 0x30,
	0x1c, 0xc5, 0x49, 0xab, 0xc2, 0xa2, 0x8e, 0x19, 0x14, 0x8a, 0x28, 0x14, 0x4f, 0xbd, 0x2c, 0x01,
	0x77, 0x11, 0x11, 0x41, 0x65, 0xe0, 0x51, 0xea, 0xcd, 0x8b, 0x26, 0xe9, 0x97, 0x35, 0xd8, 0x2c,
	0x21, 0x3f, 0x06, 0xf5, 0x4f, 0xf7, 0x24, 0xfd, 0x81, 0x63, 0xe2, 0x29, 0x79, 0x8f, 0xf7, 0x3e,
	0xe4, 0x05, 0x5f, 0x3a, 0x90, 0xc6, 0x55, 0x9e, 0xf1, 0xaf, 0xe8, 0x60, 0x0e, 0x1b, 0x58, 0x87,
	0x79, 0x1d, 0x05, 0xb5, 0xce, 0x04, 0x43, 0xa6, 0xfd, 0xe1, 0xe9, 0x98, 0xba, 0xfa, 0x46, 0xf8,
	0xf8, 0xa1, 0x4b, 0x2e, 0xbb, 0xe0, 0x73, 0x14, 0x64, 0x8a, 0x13, 0x55, 0x65, 0x28, 0x47, 0xc5,
	0xa4, 0x4c, 0x54, 0x45, 0x3e, 0xf0, 0x89, 0x6f, 0x7d, 0x00, 0xfd, 0x6e, 0x9d, 0xb1, 0xe0, 0x82,
	0x02, 0x9f, 0x25, 0x79, 0x5a, 0x1c, 0x5e, 0x2f, 0xe8, 0x2e, 0x8d, 0xee, 0x90, 0xe8, 0x6b, 0x5f,
	0x7b, 0xf9, 0x6d, 0x2d, 0xd7, 0xc1, 0xb5, 0xe5, 0xcc, 0xff, 0xb1, 0xc9, 0x05, 0x9e, 0x04, 0xa5,
	0xc1, 0x07, 0xae, 0x6d, 0x96, 0xe6, 0xa8, 0x48, 0xcb, 0xad, 0x41, 0x4e, 0xf1, 0xfe, 0x86, 0x37,
	0x11, 0xb2, 0xbd, 0x1c, 0x15, 0x47, 0xe5, 0x20, 0xce, 0x9f, 0xf0, 0xd9, 0xbf, 0x78, 0x32, 0xc3,
	0xe9, 0x27, 0xb4, 0xe3, 0xfb, 0xbb, 0xeb, 0x16, 0x90, 0xf4, 0xde, 0x20, 0x6e, 0x93, 0x1b, 0xf4,
	0x78, 0xff, 0x76, 0xb7, 0x52, 0xa1, 0xfb, 0x1c, 0x69, 0x34, 0x13, 0x3c, 0xc8, 0x5a, 0x1a, 0x67,
	0x99, 0x6d, 0xa2, 0x16, 0xe0, 0xe6, 0x5e, 0xd6, 0xa0, 0xb9, 0x67, 0x22, 0xaa, 0xa6, 0x62, 0x2b,
	0xc3, 0x86, 0xb9, 0x6c, 0x9c, 0x2b, 0x0e, 0x7a, 0xbd, 0xf8, 0x09, 0x00, 0x00, 0xff, 0xff, 0x0b,
	0xd8, 0x2b, 0x59, 0x74, 0x01, 0x00, 0x00,
}