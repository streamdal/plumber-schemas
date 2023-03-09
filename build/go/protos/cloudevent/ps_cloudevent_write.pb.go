// Code generated by protoc-gen-go. DO NOT EDIT.
// source: ps_cloudevent_write.proto

package cloudevent

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

type CloudEventOptions struct {
	// @gotags: kong:"help='ID to give cloud event. If left blank, plumber will auto-generate a random UUIDv4'"
	CeId string `protobuf:"bytes,1,opt,name=ce_id,json=ceId,proto3" json:"ce_id,omitempty" kong:"help='ID to give cloud event. If left blank, plumber will auto-generate a random UUIDv4'"`
	// @gotags: kong:"help='Source for cloud event',default='plumber'"
	CeSource string `protobuf:"bytes,2,opt,name=ce_source,json=ceSource,proto3" json:"ce_source,omitempty" kong:"help='Source for cloud event',default='plumber'"`
	// @gotags: kong:"help='Cloud event type'"
	CeType string `protobuf:"bytes,3,opt,name=ce_type,json=ceType,proto3" json:"ce_type,omitempty" kong:"help='Cloud event type'"`
	// @gotags: kong:"help='Cloud event subject'"
	CeSubject string `protobuf:"bytes,4,opt,name=ce_subject,json=ceSubject,proto3" json:"ce_subject,omitempty" kong:"help='Cloud event subject'"`
	// @gotags: kong:"help='Cloud event specification version, ex: 0.1, 0.2, 0.3, 1.0',default='1.0'"
	CeSpecVersion string `protobuf:"bytes,5,opt,name=ce_spec_version,json=ceSpecVersion,proto3" json:"ce_spec_version,omitempty" kong:"help='Cloud event specification version, ex: 0.1, 0.2, 0.3, 1.0',default='1.0'"`
	// @gotags: kong:"help='Type of encoding of the event data',default='application/json; charset=utf-8'"
	CeDataContentType string `protobuf:"bytes,6,opt,name=ce_data_content_type,json=ceDataContentType,proto3" json:"ce_data_content_type,omitempty" kong:"help='Type of encoding of the event data',default='application/json; charset=utf-8'"`
	// @gotags: kong:"help='Path to JSON schema file for the cloud event'"
	CeDataSchema         string   `protobuf:"bytes,7,opt,name=ce_data_schema,json=ceDataSchema,proto3" json:"ce_data_schema,omitempty" kong:"help='Path to JSON schema file for the cloud event'"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CloudEventOptions) Reset()         { *m = CloudEventOptions{} }
func (m *CloudEventOptions) String() string { return proto.CompactTextString(m) }
func (*CloudEventOptions) ProtoMessage()    {}
func (*CloudEventOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_6a7f14e4b7d7fbeb, []int{0}
}

func (m *CloudEventOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CloudEventOptions.Unmarshal(m, b)
}
func (m *CloudEventOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CloudEventOptions.Marshal(b, m, deterministic)
}
func (m *CloudEventOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CloudEventOptions.Merge(m, src)
}
func (m *CloudEventOptions) XXX_Size() int {
	return xxx_messageInfo_CloudEventOptions.Size(m)
}
func (m *CloudEventOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_CloudEventOptions.DiscardUnknown(m)
}

var xxx_messageInfo_CloudEventOptions proto.InternalMessageInfo

func (m *CloudEventOptions) GetCeId() string {
	if m != nil {
		return m.CeId
	}
	return ""
}

func (m *CloudEventOptions) GetCeSource() string {
	if m != nil {
		return m.CeSource
	}
	return ""
}

func (m *CloudEventOptions) GetCeType() string {
	if m != nil {
		return m.CeType
	}
	return ""
}

func (m *CloudEventOptions) GetCeSubject() string {
	if m != nil {
		return m.CeSubject
	}
	return ""
}

func (m *CloudEventOptions) GetCeSpecVersion() string {
	if m != nil {
		return m.CeSpecVersion
	}
	return ""
}

func (m *CloudEventOptions) GetCeDataContentType() string {
	if m != nil {
		return m.CeDataContentType
	}
	return ""
}

func (m *CloudEventOptions) GetCeDataSchema() string {
	if m != nil {
		return m.CeDataSchema
	}
	return ""
}

func init() {
	proto.RegisterType((*CloudEventOptions)(nil), "protos.cloudevent.CloudEventOptions")
}

func init() { proto.RegisterFile("ps_cloudevent_write.proto", fileDescriptor_6a7f14e4b7d7fbeb) }

var fileDescriptor_6a7f14e4b7d7fbeb = []byte{
	// 280 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x44, 0x90, 0x4b, 0x4b, 0x03, 0x31,
	0x14, 0x85, 0xa9, 0xf6, 0x61, 0x83, 0x0f, 0x1a, 0x05, 0x23, 0x22, 0x88, 0x88, 0xb8, 0xb1, 0x59,
	0xf8, 0x03, 0x44, 0xab, 0x0b, 0x57, 0x82, 0x23, 0x2e, 0xdc, 0x84, 0xe4, 0xce, 0xa5, 0x8d, 0xcc,
	0x4c, 0x42, 0x1e, 0x95, 0xfe, 0x77, 0x17, 0x32, 0x37, 0x48, 0x57, 0xe1, 0x9c, 0xef, 0x1c, 0x2e,
	0x39, 0xec, 0xcc, 0x47, 0x05, 0x8d, 0xcb, 0x35, 0xae, 0xb1, 0x4b, 0xea, 0x27, 0xd8, 0x84, 0x73,
	0x1f, 0x5c, 0x72, 0x7c, 0x46, 0x4f, 0x9c, 0x6f, 0xf1, 0xd5, 0xef, 0x80, 0xcd, 0x16, 0xbd, 0x7c,
	0xe9, 0xe5, 0x9b, 0x4f, 0xd6, 0x75, 0x91, 0x1f, 0xb3, 0x11, 0xa0, 0xb2, 0xb5, 0x18, 0x5c, 0x0e,
	0x6e, 0xa7, 0xef, 0x43, 0xc0, 0xd7, 0x9a, 0x9f, 0xb3, 0x29, 0xa0, 0x8a, 0x2e, 0x07, 0x40, 0xb1,
	0x43, 0x60, 0x0f, 0xb0, 0x22, 0xcd, 0x4f, 0xd9, 0x04, 0x50, 0xa5, 0x8d, 0x47, 0xb1, 0x4b, 0x68,
	0x0c, 0xf8, 0xb1, 0xf1, 0xc8, 0x2f, 0x18, 0xeb, 0x5b, 0xd9, 0x7c, 0x23, 0x24, 0x31, 0x24, 0x36,
	0x05, 0xac, 0x8a, 0xc1, 0x6f, 0xd8, 0x51, 0x8f, 0x3d, 0x82, 0x5a, 0x63, 0x88, 0xd6, 0x75, 0x62,
	0x44, 0x99, 0x03, 0xc0, 0xca, 0x23, 0x7c, 0x16, 0x93, 0x4b, 0x76, 0x02, 0xa8, 0x6a, 0x9d, 0xb4,
	0x02, 0xd7, 0xa5, 0xfe, 0x67, 0x74, 0x6c, 0x4c, 0xe1, 0x19, 0xe0, 0xb3, 0x4e, 0x7a, 0x51, 0x08,
	0xdd, 0xbd, 0x66, 0x87, 0xff, 0x85, 0x08, 0x2b, 0x6c, 0xb5, 0x98, 0x50, 0x74, 0xbf, 0x44, 0x2b,
	0xf2, 0x9e, 0x1e, 0xbf, 0x1e, 0x96, 0x36, 0xad, 0xb2, 0x99, 0x83, 0x6b, 0xa5, 0xd1, 0x09, 0x56,
	0xe0, 0x82, 0x97, 0xbe, 0xc9, 0xad, 0xc1, 0x70, 0x57, 0xaa, 0x51, 0x9a, 0x6c, 0x9b, 0x5a, 0x2e,
	0x9d, 0x2c, 0x0b, 0xca, 0xed, 0x82, 0x66, 0x4c, 0xd6, 0xfd, 0x5f, 0x00, 0x00, 0x00, 0xff, 0xff,
	0xaf, 0x87, 0x99, 0xff, 0x78, 0x01, 0x00, 0x00,
}
