// Code generated by protoc-gen-go. DO NOT EDIT.
// source: ps_channel.proto

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

type GetAllChannelsRequest struct {
	// Every gRPC request must have a valid auth config
	Auth                 *common.Auth `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *GetAllChannelsRequest) Reset()         { *m = GetAllChannelsRequest{} }
func (m *GetAllChannelsRequest) String() string { return proto.CompactTextString(m) }
func (*GetAllChannelsRequest) ProtoMessage()    {}
func (*GetAllChannelsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_66b8f112fc2d9228, []int{0}
}

func (m *GetAllChannelsRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetAllChannelsRequest.Unmarshal(m, b)
}
func (m *GetAllChannelsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetAllChannelsRequest.Marshal(b, m, deterministic)
}
func (m *GetAllChannelsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetAllChannelsRequest.Merge(m, src)
}
func (m *GetAllChannelsRequest) XXX_Size() int {
	return xxx_messageInfo_GetAllChannelsRequest.Size(m)
}
func (m *GetAllChannelsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetAllChannelsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetAllChannelsRequest proto.InternalMessageInfo

func (m *GetAllChannelsRequest) GetAuth() *common.Auth {
	if m != nil {
		return m.Auth
	}
	return nil
}

type GetAllChannelsResponse struct {
	Status *common.Status `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
	// Will be set as empty []Relay if no relays are configured
	Opts                 []*opts.CreateChannelOptions `protobuf:"bytes,1,rep,name=opts,proto3" json:"opts,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                     `json:"-"`
	XXX_unrecognized     []byte                       `json:"-"`
	XXX_sizecache        int32                        `json:"-"`
}

func (m *GetAllChannelsResponse) Reset()         { *m = GetAllChannelsResponse{} }
func (m *GetAllChannelsResponse) String() string { return proto.CompactTextString(m) }
func (*GetAllChannelsResponse) ProtoMessage()    {}
func (*GetAllChannelsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_66b8f112fc2d9228, []int{1}
}

func (m *GetAllChannelsResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetAllChannelsResponse.Unmarshal(m, b)
}
func (m *GetAllChannelsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetAllChannelsResponse.Marshal(b, m, deterministic)
}
func (m *GetAllChannelsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetAllChannelsResponse.Merge(m, src)
}
func (m *GetAllChannelsResponse) XXX_Size() int {
	return xxx_messageInfo_GetAllChannelsResponse.Size(m)
}
func (m *GetAllChannelsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetAllChannelsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetAllChannelsResponse proto.InternalMessageInfo

func (m *GetAllChannelsResponse) GetStatus() *common.Status {
	if m != nil {
		return m.Status
	}
	return nil
}

func (m *GetAllChannelsResponse) GetOpts() []*opts.CreateChannelOptions {
	if m != nil {
		return m.Opts
	}
	return nil
}

type GetChannelRequest struct {
	// Every gRPC request must have a valid auth config
	Auth                 *common.Auth `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	ChannelId            string       `protobuf:"bytes,1,opt,name=channel_id,json=channelId,proto3" json:"channel_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *GetChannelRequest) Reset()         { *m = GetChannelRequest{} }
func (m *GetChannelRequest) String() string { return proto.CompactTextString(m) }
func (*GetChannelRequest) ProtoMessage()    {}
func (*GetChannelRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_66b8f112fc2d9228, []int{2}
}

func (m *GetChannelRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetChannelRequest.Unmarshal(m, b)
}
func (m *GetChannelRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetChannelRequest.Marshal(b, m, deterministic)
}
func (m *GetChannelRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetChannelRequest.Merge(m, src)
}
func (m *GetChannelRequest) XXX_Size() int {
	return xxx_messageInfo_GetChannelRequest.Size(m)
}
func (m *GetChannelRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetChannelRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetChannelRequest proto.InternalMessageInfo

func (m *GetChannelRequest) GetAuth() *common.Auth {
	if m != nil {
		return m.Auth
	}
	return nil
}

func (m *GetChannelRequest) GetChannelId() string {
	if m != nil {
		return m.ChannelId
	}
	return ""
}

type GetChannelResponse struct {
	Status               *common.Status             `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
	Opts                 *opts.CreateChannelOptions `protobuf:"bytes,1,opt,name=opts,proto3" json:"opts,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                   `json:"-"`
	XXX_unrecognized     []byte                     `json:"-"`
	XXX_sizecache        int32                      `json:"-"`
}

func (m *GetChannelResponse) Reset()         { *m = GetChannelResponse{} }
func (m *GetChannelResponse) String() string { return proto.CompactTextString(m) }
func (*GetChannelResponse) ProtoMessage()    {}
func (*GetChannelResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_66b8f112fc2d9228, []int{3}
}

func (m *GetChannelResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetChannelResponse.Unmarshal(m, b)
}
func (m *GetChannelResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetChannelResponse.Marshal(b, m, deterministic)
}
func (m *GetChannelResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetChannelResponse.Merge(m, src)
}
func (m *GetChannelResponse) XXX_Size() int {
	return xxx_messageInfo_GetChannelResponse.Size(m)
}
func (m *GetChannelResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetChannelResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetChannelResponse proto.InternalMessageInfo

func (m *GetChannelResponse) GetStatus() *common.Status {
	if m != nil {
		return m.Status
	}
	return nil
}

func (m *GetChannelResponse) GetOpts() *opts.CreateChannelOptions {
	if m != nil {
		return m.Opts
	}
	return nil
}

type CreateChannelRequest struct {
	// Every gRPC request must have a valid auth config
	Auth                 *common.Auth               `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	Opts                 *opts.CreateChannelOptions `protobuf:"bytes,1,opt,name=opts,proto3" json:"opts,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                   `json:"-"`
	XXX_unrecognized     []byte                     `json:"-"`
	XXX_sizecache        int32                      `json:"-"`
}

func (m *CreateChannelRequest) Reset()         { *m = CreateChannelRequest{} }
func (m *CreateChannelRequest) String() string { return proto.CompactTextString(m) }
func (*CreateChannelRequest) ProtoMessage()    {}
func (*CreateChannelRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_66b8f112fc2d9228, []int{4}
}

func (m *CreateChannelRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateChannelRequest.Unmarshal(m, b)
}
func (m *CreateChannelRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateChannelRequest.Marshal(b, m, deterministic)
}
func (m *CreateChannelRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateChannelRequest.Merge(m, src)
}
func (m *CreateChannelRequest) XXX_Size() int {
	return xxx_messageInfo_CreateChannelRequest.Size(m)
}
func (m *CreateChannelRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateChannelRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CreateChannelRequest proto.InternalMessageInfo

func (m *CreateChannelRequest) GetAuth() *common.Auth {
	if m != nil {
		return m.Auth
	}
	return nil
}

func (m *CreateChannelRequest) GetOpts() *opts.CreateChannelOptions {
	if m != nil {
		return m.Opts
	}
	return nil
}

type CreateChannelResponse struct {
	Status *common.Status `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
	// ID of the created channel entry
	ChannelId            string   `protobuf:"bytes,1,opt,name=channel_id,json=channelId,proto3" json:"channel_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CreateChannelResponse) Reset()         { *m = CreateChannelResponse{} }
func (m *CreateChannelResponse) String() string { return proto.CompactTextString(m) }
func (*CreateChannelResponse) ProtoMessage()    {}
func (*CreateChannelResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_66b8f112fc2d9228, []int{5}
}

func (m *CreateChannelResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateChannelResponse.Unmarshal(m, b)
}
func (m *CreateChannelResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateChannelResponse.Marshal(b, m, deterministic)
}
func (m *CreateChannelResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateChannelResponse.Merge(m, src)
}
func (m *CreateChannelResponse) XXX_Size() int {
	return xxx_messageInfo_CreateChannelResponse.Size(m)
}
func (m *CreateChannelResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateChannelResponse.DiscardUnknown(m)
}

var xxx_messageInfo_CreateChannelResponse proto.InternalMessageInfo

func (m *CreateChannelResponse) GetStatus() *common.Status {
	if m != nil {
		return m.Status
	}
	return nil
}

func (m *CreateChannelResponse) GetChannelId() string {
	if m != nil {
		return m.ChannelId
	}
	return ""
}

// WARNING: Channel will be interrupted if running
type UpdateChannelRequest struct {
	// Every gRPC request must have a valid auth config
	Auth                 *common.Auth               `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	ChannelId            string                     `protobuf:"bytes,1,opt,name=channel_id,json=channelId,proto3" json:"channel_id,omitempty"`
	Opts                 *opts.CreateChannelOptions `protobuf:"bytes,2,opt,name=opts,proto3" json:"opts,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                   `json:"-"`
	XXX_unrecognized     []byte                     `json:"-"`
	XXX_sizecache        int32                      `json:"-"`
}

func (m *UpdateChannelRequest) Reset()         { *m = UpdateChannelRequest{} }
func (m *UpdateChannelRequest) String() string { return proto.CompactTextString(m) }
func (*UpdateChannelRequest) ProtoMessage()    {}
func (*UpdateChannelRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_66b8f112fc2d9228, []int{6}
}

func (m *UpdateChannelRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateChannelRequest.Unmarshal(m, b)
}
func (m *UpdateChannelRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateChannelRequest.Marshal(b, m, deterministic)
}
func (m *UpdateChannelRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateChannelRequest.Merge(m, src)
}
func (m *UpdateChannelRequest) XXX_Size() int {
	return xxx_messageInfo_UpdateChannelRequest.Size(m)
}
func (m *UpdateChannelRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateChannelRequest.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateChannelRequest proto.InternalMessageInfo

func (m *UpdateChannelRequest) GetAuth() *common.Auth {
	if m != nil {
		return m.Auth
	}
	return nil
}

func (m *UpdateChannelRequest) GetChannelId() string {
	if m != nil {
		return m.ChannelId
	}
	return ""
}

func (m *UpdateChannelRequest) GetOpts() *opts.CreateChannelOptions {
	if m != nil {
		return m.Opts
	}
	return nil
}

type UpdateChannelResponse struct {
	Status               *common.Status `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

func (m *UpdateChannelResponse) Reset()         { *m = UpdateChannelResponse{} }
func (m *UpdateChannelResponse) String() string { return proto.CompactTextString(m) }
func (*UpdateChannelResponse) ProtoMessage()    {}
func (*UpdateChannelResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_66b8f112fc2d9228, []int{7}
}

func (m *UpdateChannelResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateChannelResponse.Unmarshal(m, b)
}
func (m *UpdateChannelResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateChannelResponse.Marshal(b, m, deterministic)
}
func (m *UpdateChannelResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateChannelResponse.Merge(m, src)
}
func (m *UpdateChannelResponse) XXX_Size() int {
	return xxx_messageInfo_UpdateChannelResponse.Size(m)
}
func (m *UpdateChannelResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateChannelResponse.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateChannelResponse proto.InternalMessageInfo

func (m *UpdateChannelResponse) GetStatus() *common.Status {
	if m != nil {
		return m.Status
	}
	return nil
}

type StopChannelRequest struct {
	// Every gRPC request must have a valid auth config
	Auth                 *common.Auth `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	ChannelId            string       `protobuf:"bytes,1,opt,name=channel_id,json=channelId,proto3" json:"channel_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *StopChannelRequest) Reset()         { *m = StopChannelRequest{} }
func (m *StopChannelRequest) String() string { return proto.CompactTextString(m) }
func (*StopChannelRequest) ProtoMessage()    {}
func (*StopChannelRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_66b8f112fc2d9228, []int{8}
}

func (m *StopChannelRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_StopChannelRequest.Unmarshal(m, b)
}
func (m *StopChannelRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_StopChannelRequest.Marshal(b, m, deterministic)
}
func (m *StopChannelRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_StopChannelRequest.Merge(m, src)
}
func (m *StopChannelRequest) XXX_Size() int {
	return xxx_messageInfo_StopChannelRequest.Size(m)
}
func (m *StopChannelRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_StopChannelRequest.DiscardUnknown(m)
}

var xxx_messageInfo_StopChannelRequest proto.InternalMessageInfo

func (m *StopChannelRequest) GetAuth() *common.Auth {
	if m != nil {
		return m.Auth
	}
	return nil
}

func (m *StopChannelRequest) GetChannelId() string {
	if m != nil {
		return m.ChannelId
	}
	return ""
}

type StopChannelResponse struct {
	Status               *common.Status `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

func (m *StopChannelResponse) Reset()         { *m = StopChannelResponse{} }
func (m *StopChannelResponse) String() string { return proto.CompactTextString(m) }
func (*StopChannelResponse) ProtoMessage()    {}
func (*StopChannelResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_66b8f112fc2d9228, []int{9}
}

func (m *StopChannelResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_StopChannelResponse.Unmarshal(m, b)
}
func (m *StopChannelResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_StopChannelResponse.Marshal(b, m, deterministic)
}
func (m *StopChannelResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_StopChannelResponse.Merge(m, src)
}
func (m *StopChannelResponse) XXX_Size() int {
	return xxx_messageInfo_StopChannelResponse.Size(m)
}
func (m *StopChannelResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_StopChannelResponse.DiscardUnknown(m)
}

var xxx_messageInfo_StopChannelResponse proto.InternalMessageInfo

func (m *StopChannelResponse) GetStatus() *common.Status {
	if m != nil {
		return m.Status
	}
	return nil
}

type ResumeChannelRequest struct {
	// Every gRPC request must have a valid auth config
	Auth                 *common.Auth `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	ChannelId            string       `protobuf:"bytes,1,opt,name=channel_id,json=channelId,proto3" json:"channel_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *ResumeChannelRequest) Reset()         { *m = ResumeChannelRequest{} }
func (m *ResumeChannelRequest) String() string { return proto.CompactTextString(m) }
func (*ResumeChannelRequest) ProtoMessage()    {}
func (*ResumeChannelRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_66b8f112fc2d9228, []int{10}
}

func (m *ResumeChannelRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ResumeChannelRequest.Unmarshal(m, b)
}
func (m *ResumeChannelRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ResumeChannelRequest.Marshal(b, m, deterministic)
}
func (m *ResumeChannelRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ResumeChannelRequest.Merge(m, src)
}
func (m *ResumeChannelRequest) XXX_Size() int {
	return xxx_messageInfo_ResumeChannelRequest.Size(m)
}
func (m *ResumeChannelRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ResumeChannelRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ResumeChannelRequest proto.InternalMessageInfo

func (m *ResumeChannelRequest) GetAuth() *common.Auth {
	if m != nil {
		return m.Auth
	}
	return nil
}

func (m *ResumeChannelRequest) GetChannelId() string {
	if m != nil {
		return m.ChannelId
	}
	return ""
}

type ResumeChannelResponse struct {
	Status               *common.Status `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

func (m *ResumeChannelResponse) Reset()         { *m = ResumeChannelResponse{} }
func (m *ResumeChannelResponse) String() string { return proto.CompactTextString(m) }
func (*ResumeChannelResponse) ProtoMessage()    {}
func (*ResumeChannelResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_66b8f112fc2d9228, []int{11}
}

func (m *ResumeChannelResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ResumeChannelResponse.Unmarshal(m, b)
}
func (m *ResumeChannelResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ResumeChannelResponse.Marshal(b, m, deterministic)
}
func (m *ResumeChannelResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ResumeChannelResponse.Merge(m, src)
}
func (m *ResumeChannelResponse) XXX_Size() int {
	return xxx_messageInfo_ResumeChannelResponse.Size(m)
}
func (m *ResumeChannelResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_ResumeChannelResponse.DiscardUnknown(m)
}

var xxx_messageInfo_ResumeChannelResponse proto.InternalMessageInfo

func (m *ResumeChannelResponse) GetStatus() *common.Status {
	if m != nil {
		return m.Status
	}
	return nil
}

type DeleteChannelRequest struct {
	// Every gRPC request must have a valid auth config
	Auth                 *common.Auth `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	ChannelId            string       `protobuf:"bytes,1,opt,name=channel_id,json=channelId,proto3" json:"channel_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *DeleteChannelRequest) Reset()         { *m = DeleteChannelRequest{} }
func (m *DeleteChannelRequest) String() string { return proto.CompactTextString(m) }
func (*DeleteChannelRequest) ProtoMessage()    {}
func (*DeleteChannelRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_66b8f112fc2d9228, []int{12}
}

func (m *DeleteChannelRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteChannelRequest.Unmarshal(m, b)
}
func (m *DeleteChannelRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteChannelRequest.Marshal(b, m, deterministic)
}
func (m *DeleteChannelRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteChannelRequest.Merge(m, src)
}
func (m *DeleteChannelRequest) XXX_Size() int {
	return xxx_messageInfo_DeleteChannelRequest.Size(m)
}
func (m *DeleteChannelRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteChannelRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteChannelRequest proto.InternalMessageInfo

func (m *DeleteChannelRequest) GetAuth() *common.Auth {
	if m != nil {
		return m.Auth
	}
	return nil
}

func (m *DeleteChannelRequest) GetChannelId() string {
	if m != nil {
		return m.ChannelId
	}
	return ""
}

type DeleteChannelResponse struct {
	Status               *common.Status `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

func (m *DeleteChannelResponse) Reset()         { *m = DeleteChannelResponse{} }
func (m *DeleteChannelResponse) String() string { return proto.CompactTextString(m) }
func (*DeleteChannelResponse) ProtoMessage()    {}
func (*DeleteChannelResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_66b8f112fc2d9228, []int{13}
}

func (m *DeleteChannelResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteChannelResponse.Unmarshal(m, b)
}
func (m *DeleteChannelResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteChannelResponse.Marshal(b, m, deterministic)
}
func (m *DeleteChannelResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteChannelResponse.Merge(m, src)
}
func (m *DeleteChannelResponse) XXX_Size() int {
	return xxx_messageInfo_DeleteChannelResponse.Size(m)
}
func (m *DeleteChannelResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteChannelResponse.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteChannelResponse proto.InternalMessageInfo

func (m *DeleteChannelResponse) GetStatus() *common.Status {
	if m != nil {
		return m.Status
	}
	return nil
}

func init() {
	proto.RegisterType((*GetAllChannelsRequest)(nil), "protos.GetAllChannelsRequest")
	proto.RegisterType((*GetAllChannelsResponse)(nil), "protos.GetAllChannelsResponse")
	proto.RegisterType((*GetChannelRequest)(nil), "protos.GetChannelRequest")
	proto.RegisterType((*GetChannelResponse)(nil), "protos.GetChannelResponse")
	proto.RegisterType((*CreateChannelRequest)(nil), "protos.CreateChannelRequest")
	proto.RegisterType((*CreateChannelResponse)(nil), "protos.CreateChannelResponse")
	proto.RegisterType((*UpdateChannelRequest)(nil), "protos.UpdateChannelRequest")
	proto.RegisterType((*UpdateChannelResponse)(nil), "protos.UpdateChannelResponse")
	proto.RegisterType((*StopChannelRequest)(nil), "protos.StopChannelRequest")
	proto.RegisterType((*StopChannelResponse)(nil), "protos.StopChannelResponse")
	proto.RegisterType((*ResumeChannelRequest)(nil), "protos.ResumeChannelRequest")
	proto.RegisterType((*ResumeChannelResponse)(nil), "protos.ResumeChannelResponse")
	proto.RegisterType((*DeleteChannelRequest)(nil), "protos.DeleteChannelRequest")
	proto.RegisterType((*DeleteChannelResponse)(nil), "protos.DeleteChannelResponse")
}

func init() { proto.RegisterFile("ps_channel.proto", fileDescriptor_66b8f112fc2d9228) }

var fileDescriptor_66b8f112fc2d9228 = []byte{
	// 405 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xb4, 0x55, 0xcf, 0x6a, 0xa3, 0x40,
	0x1c, 0xc6, 0xdd, 0x90, 0x25, 0xbf, 0x5c, 0x76, 0x4d, 0x5c, 0x24, 0x4b, 0x20, 0xf1, 0xe4, 0x65,
	0x15, 0xb2, 0x7f, 0xee, 0x69, 0x5a, 0x42, 0x2f, 0x2d, 0x18, 0x7a, 0x29, 0x2d, 0x32, 0xea, 0x34,
	0x0a, 0xea, 0x4c, 0x9d, 0x19, 0x4a, 0xe9, 0xa1, 0x8f, 0xd0, 0x5b, 0x9f, 0xb1, 0x8f, 0x51, 0xc6,
	0xb1, 0xa5, 0x5a, 0x68, 0xd1, 0x90, 0xd3, 0x84, 0xf9, 0xbe, 0x7c, 0xff, 0x14, 0x84, 0xef, 0x94,
	0xf9, 0x61, 0x8c, 0xf2, 0x1c, 0xa7, 0x0e, 0x2d, 0x08, 0x27, 0x7a, 0xbf, 0x3c, 0xd8, 0xe4, 0x57,
	0x48, 0xb2, 0x8c, 0xe4, 0xae, 0x24, 0x94, 0xbf, 0x7c, 0x24, 0x78, 0xac, 0x48, 0x93, 0xe9, 0x3b,
	0x90, 0x71, 0xc4, 0x05, 0xab, 0xe0, 0x39, 0xa1, 0x9c, 0x49, 0x50, 0x9e, 0x7e, 0x86, 0x72, 0xb4,
	0xc5, 0x75, 0x9b, 0x89, 0x59, 0xa3, 0x14, 0x38, 0x45, 0xb7, 0x0a, 0xb1, 0x96, 0x60, 0xac, 0x31,
	0x5f, 0xa6, 0xe9, 0x4a, 0xfd, 0x81, 0x79, 0xf8, 0x5a, 0x60, 0xc6, 0x75, 0x1b, 0x7a, 0x32, 0x82,
	0xf9, 0x70, 0x32, 0xd3, 0xec, 0xe1, 0x62, 0xa4, 0xf8, 0xcc, 0x51, 0x09, 0x9c, 0xa5, 0xe0, 0xb1,
	0x57, 0x32, 0xac, 0x7b, 0xf8, 0xd9, 0x94, 0x60, 0x94, 0xe4, 0x0c, 0xeb, 0x0e, 0xf4, 0x55, 0x52,
	0xf3, 0xe9, 0x5b, 0xa9, 0x62, 0x34, 0x54, 0x36, 0x25, 0xea, 0x55, 0x2c, 0xfd, 0x1f, 0xf4, 0x64,
	0x40, 0x53, 0x9b, 0x7d, 0xb5, 0x87, 0x8b, 0xf9, 0x0b, 0x59, 0xde, 0x39, 0xab, 0x02, 0x23, 0x8e,
	0x2b, 0x8b, 0x53, 0xca, 0x13, 0x92, 0x33, 0xaf, 0xa4, 0x5b, 0x17, 0xf0, 0x63, 0x8d, 0x79, 0x05,
	0xb5, 0xce, 0xaf, 0x4f, 0x01, 0xaa, 0xb5, 0xfc, 0x24, 0x32, 0xb5, 0x99, 0x66, 0x0f, 0xbc, 0x41,
	0x75, 0x73, 0x1c, 0x59, 0x77, 0xa0, 0xbf, 0x55, 0xdf, 0xb9, 0x9a, 0xd6, 0xa6, 0xda, 0x0d, 0x8c,
	0x6b, 0x68, 0xfb, 0x76, 0x1d, 0x8d, 0xaf, 0xc0, 0x68, 0x18, 0x77, 0x2c, 0xfe, 0xc9, 0xba, 0x8f,
	0x1a, 0x8c, 0xcf, 0x68, 0xb4, 0x4b, 0xc3, 0x8f, 0x1d, 0x5e, 0x07, 0xf8, 0xd2, 0x6e, 0x80, 0x35,
	0x18, 0x8d, 0x5c, 0xdd, 0x06, 0xb0, 0x2e, 0x41, 0xdf, 0x70, 0x42, 0xf7, 0xf5, 0x7a, 0x1e, 0xc1,
	0xa8, 0x26, 0xdf, 0x31, 0xa5, 0x0f, 0x63, 0x0f, 0x33, 0x91, 0xed, 0xeb, 0x31, 0xc8, 0x3d, 0x1b,
	0x06, 0xdd, 0x93, 0x1e, 0xe2, 0x14, 0xf3, 0x7d, 0x26, 0x6d, 0x18, 0x74, 0x4b, 0x7a, 0xf0, 0xff,
	0xfc, 0xef, 0x36, 0xe1, 0xb1, 0x08, 0x24, 0xee, 0x06, 0x88, 0x87, 0x71, 0x48, 0x0a, 0xea, 0xd2,
	0x54, 0x64, 0x01, 0x2e, 0x7e, 0xb3, 0x30, 0xc6, 0x19, 0x62, 0x6e, 0x20, 0x92, 0x34, 0x72, 0xb7,
	0xc4, 0x55, 0x6a, 0x81, 0xfa, 0x28, 0xfc, 0x79, 0x0e, 0x00, 0x00, 0xff, 0xff, 0x72, 0x2e, 0xe1,
	0xd4, 0x2f, 0x06, 0x00, 0x00,
}