// Code generated by protoc-gen-go. DO NOT EDIT.
// source: records/rabbit-streams.proto

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

type RabbitStreams struct {
	DeliveryTag          string               `protobuf:"bytes,1,opt,name=delivery_tag,json=deliveryTag,proto3" json:"delivery_tag,omitempty"`
	Format               uint32               `protobuf:"varint,2,opt,name=format,proto3" json:"format,omitempty"`
	Header               *RabbitStreamsHeader `protobuf:"bytes,3,opt,name=header,proto3" json:"header,omitempty"`
	DeliveryAnnotations  map[string]string    `protobuf:"bytes,4,rep,name=delivery_annotations,json=deliveryAnnotations,proto3" json:"delivery_annotations,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Footer               map[string]string    `protobuf:"bytes,5,rep,name=footer,proto3" json:"footer,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	SendSettled          bool                 `protobuf:"varint,6,opt,name=send_settled,json=sendSettled,proto3" json:"send_settled,omitempty"`
	StreamName           string               `protobuf:"bytes,7,opt,name=stream_name,json=streamName,proto3" json:"stream_name,omitempty"`
	Timestamp            int64                `protobuf:"varint,8,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	Value                []byte               `protobuf:"bytes,9,opt,name=value,proto3" json:"value,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *RabbitStreams) Reset()         { *m = RabbitStreams{} }
func (m *RabbitStreams) String() string { return proto.CompactTextString(m) }
func (*RabbitStreams) ProtoMessage()    {}
func (*RabbitStreams) Descriptor() ([]byte, []int) {
	return fileDescriptor_b563f3908f740e47, []int{0}
}

func (m *RabbitStreams) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RabbitStreams.Unmarshal(m, b)
}
func (m *RabbitStreams) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RabbitStreams.Marshal(b, m, deterministic)
}
func (m *RabbitStreams) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RabbitStreams.Merge(m, src)
}
func (m *RabbitStreams) XXX_Size() int {
	return xxx_messageInfo_RabbitStreams.Size(m)
}
func (m *RabbitStreams) XXX_DiscardUnknown() {
	xxx_messageInfo_RabbitStreams.DiscardUnknown(m)
}

var xxx_messageInfo_RabbitStreams proto.InternalMessageInfo

func (m *RabbitStreams) GetDeliveryTag() string {
	if m != nil {
		return m.DeliveryTag
	}
	return ""
}

func (m *RabbitStreams) GetFormat() uint32 {
	if m != nil {
		return m.Format
	}
	return 0
}

func (m *RabbitStreams) GetHeader() *RabbitStreamsHeader {
	if m != nil {
		return m.Header
	}
	return nil
}

func (m *RabbitStreams) GetDeliveryAnnotations() map[string]string {
	if m != nil {
		return m.DeliveryAnnotations
	}
	return nil
}

func (m *RabbitStreams) GetFooter() map[string]string {
	if m != nil {
		return m.Footer
	}
	return nil
}

func (m *RabbitStreams) GetSendSettled() bool {
	if m != nil {
		return m.SendSettled
	}
	return false
}

func (m *RabbitStreams) GetStreamName() string {
	if m != nil {
		return m.StreamName
	}
	return ""
}

func (m *RabbitStreams) GetTimestamp() int64 {
	if m != nil {
		return m.Timestamp
	}
	return 0
}

func (m *RabbitStreams) GetValue() []byte {
	if m != nil {
		return m.Value
	}
	return nil
}

type RabbitStreamsHeader struct {
	MessageId            string   `protobuf:"bytes,1,opt,name=message_id,json=messageId,proto3" json:"message_id,omitempty"`
	UserId               string   `protobuf:"bytes,2,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	To                   string   `protobuf:"bytes,3,opt,name=to,proto3" json:"to,omitempty"`
	Subject              string   `protobuf:"bytes,4,opt,name=subject,proto3" json:"subject,omitempty"`
	ReplayTo             string   `protobuf:"bytes,5,opt,name=replay_to,json=replayTo,proto3" json:"replay_to,omitempty"`
	CorrelationId        string   `protobuf:"bytes,6,opt,name=correlation_id,json=correlationId,proto3" json:"correlation_id,omitempty"`
	ContentType          string   `protobuf:"bytes,7,opt,name=content_type,json=contentType,proto3" json:"content_type,omitempty"`
	ContentEncoding      string   `protobuf:"bytes,8,opt,name=content_encoding,json=contentEncoding,proto3" json:"content_encoding,omitempty"`
	AbsoluteExpiryTime   string   `protobuf:"bytes,9,opt,name=absolute_expiry_time,json=absoluteExpiryTime,proto3" json:"absolute_expiry_time,omitempty"`
	CreationTime         string   `protobuf:"bytes,10,opt,name=creation_time,json=creationTime,proto3" json:"creation_time,omitempty"`
	GroupId              string   `protobuf:"bytes,11,opt,name=group_id,json=groupId,proto3" json:"group_id,omitempty"`
	GroupSequence        uint32   `protobuf:"varint,12,opt,name=group_sequence,json=groupSequence,proto3" json:"group_sequence,omitempty"`
	ReplayToGroupId      string   `protobuf:"bytes,13,opt,name=replay_to_group_id,json=replayToGroupId,proto3" json:"replay_to_group_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RabbitStreamsHeader) Reset()         { *m = RabbitStreamsHeader{} }
func (m *RabbitStreamsHeader) String() string { return proto.CompactTextString(m) }
func (*RabbitStreamsHeader) ProtoMessage()    {}
func (*RabbitStreamsHeader) Descriptor() ([]byte, []int) {
	return fileDescriptor_b563f3908f740e47, []int{1}
}

func (m *RabbitStreamsHeader) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RabbitStreamsHeader.Unmarshal(m, b)
}
func (m *RabbitStreamsHeader) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RabbitStreamsHeader.Marshal(b, m, deterministic)
}
func (m *RabbitStreamsHeader) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RabbitStreamsHeader.Merge(m, src)
}
func (m *RabbitStreamsHeader) XXX_Size() int {
	return xxx_messageInfo_RabbitStreamsHeader.Size(m)
}
func (m *RabbitStreamsHeader) XXX_DiscardUnknown() {
	xxx_messageInfo_RabbitStreamsHeader.DiscardUnknown(m)
}

var xxx_messageInfo_RabbitStreamsHeader proto.InternalMessageInfo

func (m *RabbitStreamsHeader) GetMessageId() string {
	if m != nil {
		return m.MessageId
	}
	return ""
}

func (m *RabbitStreamsHeader) GetUserId() string {
	if m != nil {
		return m.UserId
	}
	return ""
}

func (m *RabbitStreamsHeader) GetTo() string {
	if m != nil {
		return m.To
	}
	return ""
}

func (m *RabbitStreamsHeader) GetSubject() string {
	if m != nil {
		return m.Subject
	}
	return ""
}

func (m *RabbitStreamsHeader) GetReplayTo() string {
	if m != nil {
		return m.ReplayTo
	}
	return ""
}

func (m *RabbitStreamsHeader) GetCorrelationId() string {
	if m != nil {
		return m.CorrelationId
	}
	return ""
}

func (m *RabbitStreamsHeader) GetContentType() string {
	if m != nil {
		return m.ContentType
	}
	return ""
}

func (m *RabbitStreamsHeader) GetContentEncoding() string {
	if m != nil {
		return m.ContentEncoding
	}
	return ""
}

func (m *RabbitStreamsHeader) GetAbsoluteExpiryTime() string {
	if m != nil {
		return m.AbsoluteExpiryTime
	}
	return ""
}

func (m *RabbitStreamsHeader) GetCreationTime() string {
	if m != nil {
		return m.CreationTime
	}
	return ""
}

func (m *RabbitStreamsHeader) GetGroupId() string {
	if m != nil {
		return m.GroupId
	}
	return ""
}

func (m *RabbitStreamsHeader) GetGroupSequence() uint32 {
	if m != nil {
		return m.GroupSequence
	}
	return 0
}

func (m *RabbitStreamsHeader) GetReplayToGroupId() string {
	if m != nil {
		return m.ReplayToGroupId
	}
	return ""
}

type RabbitStreamsFooter struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RabbitStreamsFooter) Reset()         { *m = RabbitStreamsFooter{} }
func (m *RabbitStreamsFooter) String() string { return proto.CompactTextString(m) }
func (*RabbitStreamsFooter) ProtoMessage()    {}
func (*RabbitStreamsFooter) Descriptor() ([]byte, []int) {
	return fileDescriptor_b563f3908f740e47, []int{2}
}

func (m *RabbitStreamsFooter) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RabbitStreamsFooter.Unmarshal(m, b)
}
func (m *RabbitStreamsFooter) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RabbitStreamsFooter.Marshal(b, m, deterministic)
}
func (m *RabbitStreamsFooter) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RabbitStreamsFooter.Merge(m, src)
}
func (m *RabbitStreamsFooter) XXX_Size() int {
	return xxx_messageInfo_RabbitStreamsFooter.Size(m)
}
func (m *RabbitStreamsFooter) XXX_DiscardUnknown() {
	xxx_messageInfo_RabbitStreamsFooter.DiscardUnknown(m)
}

var xxx_messageInfo_RabbitStreamsFooter proto.InternalMessageInfo

func init() {
	proto.RegisterType((*RabbitStreams)(nil), "protos.records.RabbitStreams")
	proto.RegisterMapType((map[string]string)(nil), "protos.records.RabbitStreams.DeliveryAnnotationsEntry")
	proto.RegisterMapType((map[string]string)(nil), "protos.records.RabbitStreams.FooterEntry")
	proto.RegisterType((*RabbitStreamsHeader)(nil), "protos.records.RabbitStreamsHeader")
	proto.RegisterType((*RabbitStreamsFooter)(nil), "protos.records.RabbitStreamsFooter")
}

func init() { proto.RegisterFile("records/rabbit-streams.proto", fileDescriptor_b563f3908f740e47) }

var fileDescriptor_b563f3908f740e47 = []byte{
	// 616 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x93, 0xdd, 0x6e, 0xd3, 0x4a,
	0x10, 0xc7, 0xe5, 0xa4, 0x4d, 0xe3, 0x71, 0xd2, 0x53, 0x6d, 0x7b, 0xce, 0xd9, 0xd3, 0x53, 0x84,
	0x69, 0x85, 0xe4, 0x0a, 0x35, 0x46, 0x45, 0x42, 0x7c, 0x09, 0xa9, 0x88, 0x16, 0x72, 0xc3, 0x85,
	0x9b, 0x2b, 0x6e, 0xac, 0xb5, 0x3d, 0x38, 0x06, 0xdb, 0x6b, 0x76, 0xd7, 0x15, 0x79, 0x2b, 0xde,
	0x84, 0x57, 0x42, 0xde, 0x5d, 0xf7, 0x83, 0x8f, 0x4a, 0x5c, 0x25, 0xf3, 0x9b, 0xff, 0xfc, 0xd7,
	0x33, 0xb3, 0x0b, 0x7b, 0x02, 0x53, 0x2e, 0x32, 0x19, 0x0a, 0x96, 0x24, 0x85, 0x3a, 0x92, 0x4a,
	0x20, 0xab, 0xe4, 0xac, 0x11, 0x5c, 0x71, 0xb2, 0xa9, 0x7f, 0xe4, 0xcc, 0x8a, 0xf6, 0xbf, 0xae,
	0xc1, 0x34, 0xd2, 0xc2, 0x73, 0xa3, 0x23, 0xf7, 0x60, 0x92, 0x61, 0x59, 0x5c, 0xa0, 0x58, 0xc5,
	0x8a, 0xe5, 0xd4, 0xf1, 0x9d, 0xc0, 0x8d, 0xbc, 0x9e, 0x2d, 0x58, 0x4e, 0xfe, 0x81, 0xd1, 0x07,
	0x2e, 0x2a, 0xa6, 0xe8, 0xc0, 0x77, 0x82, 0x69, 0x64, 0x23, 0xf2, 0x1c, 0x46, 0x4b, 0x64, 0x19,
	0x0a, 0x3a, 0xf4, 0x9d, 0xc0, 0x3b, 0x3e, 0x98, 0xdd, 0x3c, 0x6d, 0x76, 0xe3, 0xa4, 0xb7, 0x5a,
	0x1a, 0xd9, 0x12, 0x52, 0xc0, 0xce, 0xe5, 0xb9, 0xac, 0xae, 0xb9, 0x62, 0xaa, 0xe0, 0xb5, 0xa4,
	0x6b, 0xfe, 0x30, 0xf0, 0x8e, 0x1f, 0xdf, 0x6a, 0x35, 0x7b, 0x6d, 0x2b, 0x4f, 0xae, 0x0a, 0x4f,
	0x6b, 0x25, 0x56, 0xd1, 0x76, 0xf6, 0x73, 0x86, 0x9c, 0x74, 0xdf, 0xcf, 0x15, 0x0a, 0xba, 0xae,
	0xcd, 0x0f, 0x6f, 0x37, 0x3f, 0xd3, 0x5a, 0xe3, 0x67, 0x0b, 0xbb, 0x29, 0x49, 0xac, 0xb3, 0x58,
	0xa2, 0x52, 0x25, 0x66, 0x74, 0xe4, 0x3b, 0xc1, 0x38, 0xf2, 0x3a, 0x76, 0x6e, 0x10, 0xb9, 0x0b,
	0x9e, 0x99, 0x7d, 0x5c, 0xb3, 0x0a, 0xe9, 0x86, 0x9e, 0x23, 0x18, 0xf4, 0x8e, 0x55, 0x48, 0xf6,
	0xc0, 0x55, 0x45, 0x85, 0x52, 0xb1, 0xaa, 0xa1, 0x63, 0xdf, 0x09, 0x86, 0xd1, 0x15, 0x20, 0x3b,
	0xb0, 0x7e, 0xc1, 0xca, 0x16, 0xa9, 0xeb, 0x3b, 0xc1, 0x24, 0x32, 0xc1, 0xee, 0x19, 0xd0, 0xdf,
	0xf5, 0x4a, 0xb6, 0x60, 0xf8, 0x09, 0x57, 0x76, 0x61, 0xdd, 0xdf, 0x2b, 0x8f, 0x81, 0x66, 0x26,
	0x78, 0x36, 0x78, 0xe2, 0xec, 0x3e, 0x05, 0xef, 0x5a, 0x5b, 0x7f, 0x52, 0xba, 0xff, 0x6d, 0x08,
	0xdb, 0xbf, 0x58, 0x24, 0xb9, 0x03, 0x50, 0xa1, 0x94, 0x2c, 0xc7, 0xb8, 0xc8, 0xac, 0x95, 0x6b,
	0xc9, 0x3c, 0x23, 0xff, 0xc2, 0x46, 0x2b, 0x51, 0x74, 0x39, 0x63, 0x39, 0xea, 0xc2, 0x79, 0x46,
	0x36, 0x61, 0xa0, 0xb8, 0xbe, 0x31, 0x6e, 0x34, 0x50, 0x9c, 0x50, 0xd8, 0x90, 0x6d, 0xf2, 0x11,
	0x53, 0x45, 0xd7, 0x34, 0xec, 0x43, 0xf2, 0x3f, 0xb8, 0x02, 0x9b, 0x92, 0xad, 0x62, 0xc5, 0xe9,
	0xba, 0xce, 0x8d, 0x0d, 0x58, 0x70, 0x72, 0x1f, 0x36, 0x53, 0x2e, 0x04, 0x96, 0x7a, 0x24, 0xdd,
	0x31, 0x23, 0xad, 0x98, 0x5e, 0xa3, 0xf3, 0xac, 0x5b, 0x5c, 0xca, 0x6b, 0x85, 0xb5, 0x8a, 0xd5,
	0xaa, 0xe9, 0xd7, 0xe2, 0x59, 0xb6, 0x58, 0x35, 0x48, 0x0e, 0x61, 0xab, 0x97, 0x60, 0x9d, 0xf2,
	0xac, 0xa8, 0x73, 0xbd, 0x1e, 0x37, 0xfa, 0xcb, 0xf2, 0x53, 0x8b, 0xc9, 0x43, 0xd8, 0x61, 0x89,
	0xe4, 0x65, 0xab, 0x30, 0xc6, 0x2f, 0x4d, 0xd1, 0xbd, 0x99, 0xa2, 0x32, 0x3b, 0x73, 0x23, 0xd2,
	0xe7, 0x4e, 0x75, 0x6a, 0x51, 0x54, 0x48, 0x0e, 0x60, 0x9a, 0x0a, 0x34, 0xdf, 0xa8, 0xa5, 0xa0,
	0xa5, 0x93, 0x1e, 0x6a, 0xd1, 0x7f, 0x30, 0xce, 0x05, 0x6f, 0x9b, 0xae, 0x0b, 0xcf, 0xcc, 0x40,
	0xc7, 0xf3, 0xac, 0x6b, 0xd3, 0xa4, 0x24, 0x7e, 0x6e, 0xb1, 0x4e, 0x91, 0x4e, 0xf4, 0x1b, 0x9c,
	0x6a, 0x7a, 0x6e, 0x21, 0x79, 0x00, 0xe4, 0x72, 0x54, 0xf1, 0xa5, 0xd7, 0xd4, 0x74, 0xd1, 0xcf,
	0xec, 0x8d, 0xf1, 0xdc, 0xff, 0xfb, 0x87, 0x85, 0x9a, 0x9b, 0xf1, 0xea, 0xe5, 0xfb, 0x17, 0x79,
	0xa1, 0x96, 0x6d, 0x32, 0x4b, 0x79, 0x15, 0x26, 0x4c, 0xa5, 0xcb, 0x94, 0x8b, 0x26, 0x6c, 0xca,
	0xb6, 0x4a, 0x50, 0x1c, 0xc9, 0x74, 0x89, 0x15, 0x93, 0x61, 0xd2, 0x16, 0x65, 0x16, 0xe6, 0x3c,
	0x34, 0xaf, 0x28, 0xb4, 0xaf, 0x28, 0x19, 0xe9, 0xf8, 0xd1, 0xf7, 0x00, 0x00, 0x00, 0xff, 0xff,
	0x66, 0x2c, 0x1c, 0xac, 0x92, 0x04, 0x00, 0x00,
}