// Code generated by protoc-gen-go. DO NOT EDIT.
// source: opts/ps_opts_manage_channel.proto

package opts

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

// Channel options are used to configure the behavior of a channel.
type CreateChannelOptions struct {
	// @gotags: kong:"help='Type of channel to create (options: direct, streamdal)',default='direct'
	Type string `protobuf:"bytes,1,opt,name=type,proto3" json:"type,omitempty"`
	// @gotags: kong:"help='ID of the source backend',required'
	Source string `protobuf:"bytes,2,opt,name=source,proto3" json:"source,omitempty"`
	// @gotags: kong:"help='ID of the destination backend OR streamdal',required'
	Destination string `protobuf:"bytes,3,opt,name=destination,proto3" json:"destination,omitempty"`
	// Filled out regardless of type
	// @gotags: kong:"embed"
	Settings *BaseChannelOptions `protobuf:"bytes,4,opt,name=settings,proto3" json:"settings,omitempty" kong:"embed"`
	// Filled out if type == streamdal
	// @gotags: kong:"embed"
	StreamdalOptions     *StreamdalChannelOptions `protobuf:"bytes,5,opt,name=streamdal_options,json=streamdalOptions,proto3" json:"streamdal_options,omitempty" kong:"embed"`
	XXX_NoUnkeyedLiteral struct{}                 `json:"-"`
	XXX_unrecognized     []byte                   `json:"-"`
	XXX_sizecache        int32                    `json:"-"`
}

func (m *CreateChannelOptions) Reset()         { *m = CreateChannelOptions{} }
func (m *CreateChannelOptions) String() string { return proto.CompactTextString(m) }
func (*CreateChannelOptions) ProtoMessage()    {}
func (*CreateChannelOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_84f3502b9d9430c5, []int{0}
}

func (m *CreateChannelOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateChannelOptions.Unmarshal(m, b)
}
func (m *CreateChannelOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateChannelOptions.Marshal(b, m, deterministic)
}
func (m *CreateChannelOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateChannelOptions.Merge(m, src)
}
func (m *CreateChannelOptions) XXX_Size() int {
	return xxx_messageInfo_CreateChannelOptions.Size(m)
}
func (m *CreateChannelOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateChannelOptions.DiscardUnknown(m)
}

var xxx_messageInfo_CreateChannelOptions proto.InternalMessageInfo

func (m *CreateChannelOptions) GetType() string {
	if m != nil {
		return m.Type
	}
	return ""
}

func (m *CreateChannelOptions) GetSource() string {
	if m != nil {
		return m.Source
	}
	return ""
}

func (m *CreateChannelOptions) GetDestination() string {
	if m != nil {
		return m.Destination
	}
	return ""
}

func (m *CreateChannelOptions) GetSettings() *BaseChannelOptions {
	if m != nil {
		return m.Settings
	}
	return nil
}

func (m *CreateChannelOptions) GetStreamdalOptions() *StreamdalChannelOptions {
	if m != nil {
		return m.StreamdalOptions
	}
	return nil
}

type BaseChannelOptions struct {
	// @gotags: kong:"help='How many messages to send in a single batch',default=1000"
	BatchSize int32 `protobuf:"varint,1,opt,name=batch_size,json=batchSize,proto3" json:"batch_size,omitempty" kong:"help='How many messages to send in a single batch',default=1000"`
	// @gotags: kong:"help='How many times plumber will try re-sending a batch',default=3"
	BatchMaxRetry int32 `protobuf:"varint,2,opt,name=batch_max_retry,json=batchMaxRetry,proto3" json:"batch_max_retry,omitempty" kong:"help='How many times plumber will try re-sending a batch',default=3"`
	// @gotags: kong:"help='How many workers to launch per channel',default=10"
	NumWorkers           int32    `protobuf:"varint,3,opt,name=num_workers,json=numWorkers,proto3" json:"num_workers,omitempty" kong:"help='How many workers to launch per channel',default=10"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *BaseChannelOptions) Reset()         { *m = BaseChannelOptions{} }
func (m *BaseChannelOptions) String() string { return proto.CompactTextString(m) }
func (*BaseChannelOptions) ProtoMessage()    {}
func (*BaseChannelOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_84f3502b9d9430c5, []int{1}
}

func (m *BaseChannelOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BaseChannelOptions.Unmarshal(m, b)
}
func (m *BaseChannelOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BaseChannelOptions.Marshal(b, m, deterministic)
}
func (m *BaseChannelOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BaseChannelOptions.Merge(m, src)
}
func (m *BaseChannelOptions) XXX_Size() int {
	return xxx_messageInfo_BaseChannelOptions.Size(m)
}
func (m *BaseChannelOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_BaseChannelOptions.DiscardUnknown(m)
}

var xxx_messageInfo_BaseChannelOptions proto.InternalMessageInfo

func (m *BaseChannelOptions) GetBatchSize() int32 {
	if m != nil {
		return m.BatchSize
	}
	return 0
}

func (m *BaseChannelOptions) GetBatchMaxRetry() int32 {
	if m != nil {
		return m.BatchMaxRetry
	}
	return 0
}

func (m *BaseChannelOptions) GetNumWorkers() int32 {
	if m != nil {
		return m.NumWorkers
	}
	return 0
}

type StreamdalChannelOptions struct {
	// @gotags: kong:"help='Secret collection token'"
	CollectionToken string `protobuf:"bytes,1,opt,name=collection_token,json=collectionToken,proto3" json:"collection_token,omitempty" kong:"help='Secret collection token'"`
	// @gotags: kong:"help='Consumed messages are intended to be dead-lettered'"
	DeadLetter bool `protobuf:"varint,2,opt,name=dead_letter,json=deadLetter,proto3" json:"dead_letter,omitempty" kong:"help='Consumed messages are intended to be dead-lettered'"`
	// @gotags: kong:"help='Alternative collector to send events to',default='grpc-collector.streamdal.com:9000'"
	StreamdalGrpcAddress string `protobuf:"bytes,3,opt,name=streamdal_grpc_address,json=streamdalGrpcAddress,proto3" json:"streamdal_grpc_address,omitempty" kong:"help='Alternative collector to send events to',default='grpc-collector.streamdal.com:9000'"`
	// @gotags: kong:"help='Whether to use TLS with collector'"
	StreamdalGrpcDisableTls bool `protobuf:"varint,4,opt,name=streamdal_grpc_disable_tls,json=streamdalGrpcDisableTls,proto3" json:"streamdal_grpc_disable_tls,omitempty" kong:"help='Whether to use TLS with collector'"`
	// @gotags: kong:"help='How long to wait before giving up talking to the gRPC collector',default=5"
	StreamdalGrpcTimeoutSeconds int32    `protobuf:"varint,5,opt,name=streamdal_grpc_timeout_seconds,json=streamdalGrpcTimeoutSeconds,proto3" json:"streamdal_grpc_timeout_seconds,omitempty" kong:"help='How long to wait before giving up talking to the gRPC collector',default=5"`
	XXX_NoUnkeyedLiteral        struct{} `json:"-"`
	XXX_unrecognized            []byte   `json:"-"`
	XXX_sizecache               int32    `json:"-"`
}

func (m *StreamdalChannelOptions) Reset()         { *m = StreamdalChannelOptions{} }
func (m *StreamdalChannelOptions) String() string { return proto.CompactTextString(m) }
func (*StreamdalChannelOptions) ProtoMessage()    {}
func (*StreamdalChannelOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_84f3502b9d9430c5, []int{2}
}

func (m *StreamdalChannelOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_StreamdalChannelOptions.Unmarshal(m, b)
}
func (m *StreamdalChannelOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_StreamdalChannelOptions.Marshal(b, m, deterministic)
}
func (m *StreamdalChannelOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_StreamdalChannelOptions.Merge(m, src)
}
func (m *StreamdalChannelOptions) XXX_Size() int {
	return xxx_messageInfo_StreamdalChannelOptions.Size(m)
}
func (m *StreamdalChannelOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_StreamdalChannelOptions.DiscardUnknown(m)
}

var xxx_messageInfo_StreamdalChannelOptions proto.InternalMessageInfo

func (m *StreamdalChannelOptions) GetCollectionToken() string {
	if m != nil {
		return m.CollectionToken
	}
	return ""
}

func (m *StreamdalChannelOptions) GetDeadLetter() bool {
	if m != nil {
		return m.DeadLetter
	}
	return false
}

func (m *StreamdalChannelOptions) GetStreamdalGrpcAddress() string {
	if m != nil {
		return m.StreamdalGrpcAddress
	}
	return ""
}

func (m *StreamdalChannelOptions) GetStreamdalGrpcDisableTls() bool {
	if m != nil {
		return m.StreamdalGrpcDisableTls
	}
	return false
}

func (m *StreamdalChannelOptions) GetStreamdalGrpcTimeoutSeconds() int32 {
	if m != nil {
		return m.StreamdalGrpcTimeoutSeconds
	}
	return 0
}

type GetChannelOptions struct {
	// @gotags: kong:"help='ID of the channel to get (leave empty to get all)'"
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty" kong:"help='ID of the channel to get (leave empty to get all)'"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetChannelOptions) Reset()         { *m = GetChannelOptions{} }
func (m *GetChannelOptions) String() string { return proto.CompactTextString(m) }
func (*GetChannelOptions) ProtoMessage()    {}
func (*GetChannelOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_84f3502b9d9430c5, []int{3}
}

func (m *GetChannelOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetChannelOptions.Unmarshal(m, b)
}
func (m *GetChannelOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetChannelOptions.Marshal(b, m, deterministic)
}
func (m *GetChannelOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetChannelOptions.Merge(m, src)
}
func (m *GetChannelOptions) XXX_Size() int {
	return xxx_messageInfo_GetChannelOptions.Size(m)
}
func (m *GetChannelOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_GetChannelOptions.DiscardUnknown(m)
}

var xxx_messageInfo_GetChannelOptions proto.InternalMessageInfo

func (m *GetChannelOptions) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

type DeleteChannelOptions struct {
	// @gotags: kong:"help='ID of the channel to delete',required=true"
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty" kong:"help='ID of the channel to delete',required=true"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteChannelOptions) Reset()         { *m = DeleteChannelOptions{} }
func (m *DeleteChannelOptions) String() string { return proto.CompactTextString(m) }
func (*DeleteChannelOptions) ProtoMessage()    {}
func (*DeleteChannelOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_84f3502b9d9430c5, []int{4}
}

func (m *DeleteChannelOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteChannelOptions.Unmarshal(m, b)
}
func (m *DeleteChannelOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteChannelOptions.Marshal(b, m, deterministic)
}
func (m *DeleteChannelOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteChannelOptions.Merge(m, src)
}
func (m *DeleteChannelOptions) XXX_Size() int {
	return xxx_messageInfo_DeleteChannelOptions.Size(m)
}
func (m *DeleteChannelOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteChannelOptions.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteChannelOptions proto.InternalMessageInfo

func (m *DeleteChannelOptions) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

type StopChannelOptions struct {
	// @gotags: kong:"help='ID of the channel to stop',required=true"
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty" kong:"help='ID of the channel to stop',required=true"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *StopChannelOptions) Reset()         { *m = StopChannelOptions{} }
func (m *StopChannelOptions) String() string { return proto.CompactTextString(m) }
func (*StopChannelOptions) ProtoMessage()    {}
func (*StopChannelOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_84f3502b9d9430c5, []int{5}
}

func (m *StopChannelOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_StopChannelOptions.Unmarshal(m, b)
}
func (m *StopChannelOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_StopChannelOptions.Marshal(b, m, deterministic)
}
func (m *StopChannelOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_StopChannelOptions.Merge(m, src)
}
func (m *StopChannelOptions) XXX_Size() int {
	return xxx_messageInfo_StopChannelOptions.Size(m)
}
func (m *StopChannelOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_StopChannelOptions.DiscardUnknown(m)
}

var xxx_messageInfo_StopChannelOptions proto.InternalMessageInfo

func (m *StopChannelOptions) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

type ResumeChannelOptions struct {
	// @gotags: kong:"help='ID of the channel to resume',required=true"
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty" kong:"help='ID of the channel to resume',required=true"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ResumeChannelOptions) Reset()         { *m = ResumeChannelOptions{} }
func (m *ResumeChannelOptions) String() string { return proto.CompactTextString(m) }
func (*ResumeChannelOptions) ProtoMessage()    {}
func (*ResumeChannelOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_84f3502b9d9430c5, []int{6}
}

func (m *ResumeChannelOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ResumeChannelOptions.Unmarshal(m, b)
}
func (m *ResumeChannelOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ResumeChannelOptions.Marshal(b, m, deterministic)
}
func (m *ResumeChannelOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ResumeChannelOptions.Merge(m, src)
}
func (m *ResumeChannelOptions) XXX_Size() int {
	return xxx_messageInfo_ResumeChannelOptions.Size(m)
}
func (m *ResumeChannelOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_ResumeChannelOptions.DiscardUnknown(m)
}

var xxx_messageInfo_ResumeChannelOptions proto.InternalMessageInfo

func (m *ResumeChannelOptions) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func init() {
	proto.RegisterType((*CreateChannelOptions)(nil), "protos.opts.CreateChannelOptions")
	proto.RegisterType((*BaseChannelOptions)(nil), "protos.opts.BaseChannelOptions")
	proto.RegisterType((*StreamdalChannelOptions)(nil), "protos.opts.StreamdalChannelOptions")
	proto.RegisterType((*GetChannelOptions)(nil), "protos.opts.GetChannelOptions")
	proto.RegisterType((*DeleteChannelOptions)(nil), "protos.opts.DeleteChannelOptions")
	proto.RegisterType((*StopChannelOptions)(nil), "protos.opts.StopChannelOptions")
	proto.RegisterType((*ResumeChannelOptions)(nil), "protos.opts.ResumeChannelOptions")
}

func init() { proto.RegisterFile("opts/ps_opts_manage_channel.proto", fileDescriptor_84f3502b9d9430c5) }

var fileDescriptor_84f3502b9d9430c5 = []byte{
	// 490 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x52, 0x5f, 0x6b, 0x53, 0x31,
	0x14, 0xa7, 0x75, 0x1d, 0xdd, 0x29, 0xba, 0x2d, 0x94, 0xad, 0x28, 0xba, 0x5a, 0xc7, 0x98, 0x0f,
	0xf6, 0x82, 0xfa, 0x22, 0x7d, 0x72, 0x1d, 0xec, 0x45, 0x11, 0x6f, 0x0b, 0x82, 0x2f, 0x21, 0x37,
	0x39, 0xb4, 0x61, 0xb9, 0x37, 0x21, 0xc9, 0xc5, 0x6d, 0xf8, 0x55, 0xfc, 0x96, 0x7e, 0x00, 0x49,
	0x52, 0xbb, 0xf5, 0x8e, 0xb1, 0xa7, 0x7b, 0xf3, 0xfb, 0x97, 0x93, 0x73, 0x0e, 0xbc, 0xd6, 0xc6,
	0xbb, 0xcc, 0x38, 0x1a, 0xbe, 0xb4, 0x64, 0x15, 0x5b, 0x20, 0xe5, 0x4b, 0x56, 0x55, 0xa8, 0xc6,
	0xc6, 0x6a, 0xaf, 0x49, 0x2f, 0x7e, 0xdc, 0x38, 0x28, 0x46, 0x7f, 0x5b, 0xd0, 0x9f, 0x5a, 0x64,
	0x1e, 0xa7, 0x49, 0xf4, 0xcd, 0x78, 0xa9, 0x2b, 0x47, 0x08, 0x6c, 0xf9, 0x6b, 0x83, 0x83, 0xd6,
	0xb0, 0x75, 0xba, 0x93, 0xc7, 0x7f, 0x72, 0x00, 0xdb, 0x4e, 0xd7, 0x96, 0xe3, 0xa0, 0x1d, 0xd1,
	0xd5, 0x89, 0x0c, 0xa1, 0x27, 0xd0, 0x79, 0x59, 0xb1, 0xe0, 0x1d, 0x3c, 0x89, 0xe4, 0x5d, 0x88,
	0x4c, 0xa0, 0xeb, 0xd0, 0x7b, 0x59, 0x2d, 0xdc, 0x60, 0x6b, 0xd8, 0x3a, 0xed, 0xbd, 0x3f, 0x1a,
	0xdf, 0x29, 0x63, 0x7c, 0xc6, 0x5c, 0xa3, 0x80, 0x7c, 0x6d, 0x20, 0xdf, 0x61, 0xdf, 0x79, 0x8b,
	0xac, 0x14, 0x4c, 0x85, 0x77, 0x05, 0x7a, 0xd0, 0x89, 0x29, 0xc7, 0x1b, 0x29, 0xb3, 0xff, 0xaa,
	0x46, 0xd4, 0xde, 0xda, 0xbe, 0x42, 0x46, 0xbf, 0x81, 0xdc, 0xbf, 0x92, 0xbc, 0x04, 0x28, 0x98,
	0xe7, 0x4b, 0xea, 0xe4, 0x4d, 0x7a, 0x79, 0x27, 0xdf, 0x89, 0xc8, 0x4c, 0xde, 0x20, 0x39, 0x81,
	0xdd, 0x44, 0x97, 0xec, 0x8a, 0x5a, 0xf4, 0xf6, 0x3a, 0xf6, 0xa1, 0x93, 0x3f, 0x8d, 0xf0, 0x57,
	0x76, 0x95, 0x07, 0x90, 0x1c, 0x41, 0xaf, 0xaa, 0x4b, 0xfa, 0x4b, 0xdb, 0x4b, 0xb4, 0x2e, 0xb6,
	0xa3, 0x93, 0x43, 0x55, 0x97, 0x3f, 0x12, 0x32, 0xfa, 0xd3, 0x86, 0xc3, 0x07, 0x6a, 0x25, 0x6f,
	0x61, 0x8f, 0x6b, 0xa5, 0x90, 0x87, 0x23, 0xf5, 0xfa, 0x12, 0xab, 0xd5, 0x0c, 0x76, 0x6f, 0xf1,
	0x79, 0x80, 0xc3, 0x3d, 0x02, 0x99, 0xa0, 0x0a, 0xbd, 0x47, 0x1b, 0x6b, 0xe9, 0xe6, 0x10, 0xa0,
	0x2f, 0x11, 0x21, 0x1f, 0xe1, 0xe0, 0xb6, 0x71, 0x0b, 0x6b, 0x38, 0x65, 0x42, 0x58, 0x74, 0x6e,
	0x35, 0xa2, 0xfe, 0x9a, 0xbd, 0xb0, 0x86, 0x7f, 0x4e, 0x1c, 0x99, 0xc0, 0xf3, 0x86, 0x4b, 0x48,
	0xc7, 0x0a, 0x85, 0xd4, 0xab, 0x34, 0xbd, 0x6e, 0x7e, 0xb8, 0xe1, 0x3c, 0x4f, 0xfc, 0x5c, 0x39,
	0x32, 0x85, 0x57, 0x0d, 0xb3, 0x97, 0x25, 0xea, 0xda, 0x53, 0x87, 0x5c, 0x57, 0x22, 0x0d, 0xae,
	0x93, 0xbf, 0xd8, 0x08, 0x98, 0x27, 0xcd, 0x2c, 0x49, 0x46, 0x6f, 0x60, 0xff, 0x02, 0x7d, 0xa3,
	0x31, 0xcf, 0xa0, 0x2d, 0xc5, 0xaa, 0x15, 0x6d, 0x29, 0x46, 0x27, 0xd0, 0x3f, 0x47, 0x85, 0xf7,
	0x16, 0xb7, 0xa9, 0x3b, 0x06, 0x32, 0xf3, 0xda, 0x3c, 0x9e, 0x96, 0xa3, 0xab, 0xcb, 0x47, 0xd2,
	0xce, 0x26, 0x3f, 0x3f, 0x2d, 0xa4, 0x5f, 0xd6, 0xc5, 0x98, 0xeb, 0x32, 0x8b, 0x73, 0xe7, 0xda,
	0x9a, 0xcc, 0xa8, 0xba, 0x2c, 0xd0, 0xbe, 0x73, 0x7c, 0x89, 0x25, 0x73, 0x59, 0x51, 0x4b, 0x25,
	0xb2, 0x85, 0xce, 0xd2, 0x7e, 0x66, 0x61, 0x3f, 0x8b, 0xed, 0x78, 0xf8, 0xf0, 0x2f, 0x00, 0x00,
	0xff, 0xff, 0x3c, 0x8b, 0xf6, 0x1f, 0xa5, 0x03, 0x00, 0x00,
}
