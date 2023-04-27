// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.6
// source: ps_tunnel.proto

package protos

import (
	common "github.com/streamdal/plumber-schemas/build/go/protos/common"
	opts "github.com/streamdal/plumber-schemas/build/go/protos/opts"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type GetAllTunnelsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Every gRPC request must have a valid auth config
	Auth *common.Auth `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
}

func (x *GetAllTunnelsRequest) Reset() {
	*x = GetAllTunnelsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_tunnel_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetAllTunnelsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetAllTunnelsRequest) ProtoMessage() {}

func (x *GetAllTunnelsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ps_tunnel_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetAllTunnelsRequest.ProtoReflect.Descriptor instead.
func (*GetAllTunnelsRequest) Descriptor() ([]byte, []int) {
	return file_ps_tunnel_proto_rawDescGZIP(), []int{0}
}

func (x *GetAllTunnelsRequest) GetAuth() *common.Auth {
	if x != nil {
		return x.Auth
	}
	return nil
}

type GetAllTunnelsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *common.Status `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
	// Will be set as empty []Tunnel if no tunnels are configured
	Opts []*opts.TunnelOptions `protobuf:"bytes,1,rep,name=opts,proto3" json:"opts,omitempty"`
}

func (x *GetAllTunnelsResponse) Reset() {
	*x = GetAllTunnelsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_tunnel_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetAllTunnelsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetAllTunnelsResponse) ProtoMessage() {}

func (x *GetAllTunnelsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_ps_tunnel_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetAllTunnelsResponse.ProtoReflect.Descriptor instead.
func (*GetAllTunnelsResponse) Descriptor() ([]byte, []int) {
	return file_ps_tunnel_proto_rawDescGZIP(), []int{1}
}

func (x *GetAllTunnelsResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

func (x *GetAllTunnelsResponse) GetOpts() []*opts.TunnelOptions {
	if x != nil {
		return x.Opts
	}
	return nil
}

type GetTunnelRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Every gRPC request must have a valid auth config
	Auth     *common.Auth `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	TunnelId string       `protobuf:"bytes,1,opt,name=tunnel_id,json=tunnelId,proto3" json:"tunnel_id,omitempty"`
}

func (x *GetTunnelRequest) Reset() {
	*x = GetTunnelRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_tunnel_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetTunnelRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetTunnelRequest) ProtoMessage() {}

func (x *GetTunnelRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ps_tunnel_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetTunnelRequest.ProtoReflect.Descriptor instead.
func (*GetTunnelRequest) Descriptor() ([]byte, []int) {
	return file_ps_tunnel_proto_rawDescGZIP(), []int{2}
}

func (x *GetTunnelRequest) GetAuth() *common.Auth {
	if x != nil {
		return x.Auth
	}
	return nil
}

func (x *GetTunnelRequest) GetTunnelId() string {
	if x != nil {
		return x.TunnelId
	}
	return ""
}

type GetTunnelResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *common.Status `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
	// Set only if status is OK
	Opts *opts.TunnelOptions `protobuf:"bytes,1,opt,name=opts,proto3" json:"opts,omitempty"`
}

func (x *GetTunnelResponse) Reset() {
	*x = GetTunnelResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_tunnel_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetTunnelResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetTunnelResponse) ProtoMessage() {}

func (x *GetTunnelResponse) ProtoReflect() protoreflect.Message {
	mi := &file_ps_tunnel_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetTunnelResponse.ProtoReflect.Descriptor instead.
func (*GetTunnelResponse) Descriptor() ([]byte, []int) {
	return file_ps_tunnel_proto_rawDescGZIP(), []int{3}
}

func (x *GetTunnelResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

func (x *GetTunnelResponse) GetOpts() *opts.TunnelOptions {
	if x != nil {
		return x.Opts
	}
	return nil
}

type CreateTunnelRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Every gRPC request must have a valid auth config
	Auth *common.Auth        `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	Opts *opts.TunnelOptions `protobuf:"bytes,1,opt,name=opts,proto3" json:"opts,omitempty"`
}

func (x *CreateTunnelRequest) Reset() {
	*x = CreateTunnelRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_tunnel_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateTunnelRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateTunnelRequest) ProtoMessage() {}

func (x *CreateTunnelRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ps_tunnel_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateTunnelRequest.ProtoReflect.Descriptor instead.
func (*CreateTunnelRequest) Descriptor() ([]byte, []int) {
	return file_ps_tunnel_proto_rawDescGZIP(), []int{4}
}

func (x *CreateTunnelRequest) GetAuth() *common.Auth {
	if x != nil {
		return x.Auth
	}
	return nil
}

func (x *CreateTunnelRequest) GetOpts() *opts.TunnelOptions {
	if x != nil {
		return x.Opts
	}
	return nil
}

type CreateTunnelResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *common.Status `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
	// ID of the created tunnel entry
	TunnelId string `protobuf:"bytes,1,opt,name=tunnel_id,json=tunnelId,proto3" json:"tunnel_id,omitempty"`
}

func (x *CreateTunnelResponse) Reset() {
	*x = CreateTunnelResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_tunnel_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateTunnelResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateTunnelResponse) ProtoMessage() {}

func (x *CreateTunnelResponse) ProtoReflect() protoreflect.Message {
	mi := &file_ps_tunnel_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateTunnelResponse.ProtoReflect.Descriptor instead.
func (*CreateTunnelResponse) Descriptor() ([]byte, []int) {
	return file_ps_tunnel_proto_rawDescGZIP(), []int{5}
}

func (x *CreateTunnelResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

func (x *CreateTunnelResponse) GetTunnelId() string {
	if x != nil {
		return x.TunnelId
	}
	return ""
}

// WARNING: Updating a destination that is in-use can result in missing data during replay
type UpdateTunnelRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Every gRPC request must have a valid auth config
	Auth     *common.Auth        `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	TunnelId string              `protobuf:"bytes,1,opt,name=tunnel_id,json=tunnelId,proto3" json:"tunnel_id,omitempty"`
	Opts     *opts.TunnelOptions `protobuf:"bytes,2,opt,name=opts,proto3" json:"opts,omitempty"`
}

func (x *UpdateTunnelRequest) Reset() {
	*x = UpdateTunnelRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_tunnel_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateTunnelRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateTunnelRequest) ProtoMessage() {}

func (x *UpdateTunnelRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ps_tunnel_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateTunnelRequest.ProtoReflect.Descriptor instead.
func (*UpdateTunnelRequest) Descriptor() ([]byte, []int) {
	return file_ps_tunnel_proto_rawDescGZIP(), []int{6}
}

func (x *UpdateTunnelRequest) GetAuth() *common.Auth {
	if x != nil {
		return x.Auth
	}
	return nil
}

func (x *UpdateTunnelRequest) GetTunnelId() string {
	if x != nil {
		return x.TunnelId
	}
	return ""
}

func (x *UpdateTunnelRequest) GetOpts() *opts.TunnelOptions {
	if x != nil {
		return x.Opts
	}
	return nil
}

type UpdateTunnelResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *common.Status `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *UpdateTunnelResponse) Reset() {
	*x = UpdateTunnelResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_tunnel_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateTunnelResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateTunnelResponse) ProtoMessage() {}

func (x *UpdateTunnelResponse) ProtoReflect() protoreflect.Message {
	mi := &file_ps_tunnel_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateTunnelResponse.ProtoReflect.Descriptor instead.
func (*UpdateTunnelResponse) Descriptor() ([]byte, []int) {
	return file_ps_tunnel_proto_rawDescGZIP(), []int{7}
}

func (x *UpdateTunnelResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

// Resume a paused relay
type ResumeTunnelRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Every gRPC request must have a valid auth config
	Auth     *common.Auth `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	TunnelId string       `protobuf:"bytes,1,opt,name=tunnel_id,json=tunnelId,proto3" json:"tunnel_id,omitempty"`
}

func (x *ResumeTunnelRequest) Reset() {
	*x = ResumeTunnelRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_tunnel_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResumeTunnelRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResumeTunnelRequest) ProtoMessage() {}

func (x *ResumeTunnelRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ps_tunnel_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResumeTunnelRequest.ProtoReflect.Descriptor instead.
func (*ResumeTunnelRequest) Descriptor() ([]byte, []int) {
	return file_ps_tunnel_proto_rawDescGZIP(), []int{8}
}

func (x *ResumeTunnelRequest) GetAuth() *common.Auth {
	if x != nil {
		return x.Auth
	}
	return nil
}

func (x *ResumeTunnelRequest) GetTunnelId() string {
	if x != nil {
		return x.TunnelId
	}
	return ""
}

type ResumeTunnelResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *common.Status `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *ResumeTunnelResponse) Reset() {
	*x = ResumeTunnelResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_tunnel_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResumeTunnelResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResumeTunnelResponse) ProtoMessage() {}

func (x *ResumeTunnelResponse) ProtoReflect() protoreflect.Message {
	mi := &file_ps_tunnel_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResumeTunnelResponse.ProtoReflect.Descriptor instead.
func (*ResumeTunnelResponse) Descriptor() ([]byte, []int) {
	return file_ps_tunnel_proto_rawDescGZIP(), []int{9}
}

func (x *ResumeTunnelResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

// Temporarily stop/pause a relay
type StopTunnelRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Every gRPC request must have a valid auth config
	Auth     *common.Auth `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	TunnelId string       `protobuf:"bytes,1,opt,name=tunnel_id,json=tunnelId,proto3" json:"tunnel_id,omitempty"`
}

func (x *StopTunnelRequest) Reset() {
	*x = StopTunnelRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_tunnel_proto_msgTypes[10]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StopTunnelRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StopTunnelRequest) ProtoMessage() {}

func (x *StopTunnelRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ps_tunnel_proto_msgTypes[10]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StopTunnelRequest.ProtoReflect.Descriptor instead.
func (*StopTunnelRequest) Descriptor() ([]byte, []int) {
	return file_ps_tunnel_proto_rawDescGZIP(), []int{10}
}

func (x *StopTunnelRequest) GetAuth() *common.Auth {
	if x != nil {
		return x.Auth
	}
	return nil
}

func (x *StopTunnelRequest) GetTunnelId() string {
	if x != nil {
		return x.TunnelId
	}
	return ""
}

type StopTunnelResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *common.Status `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *StopTunnelResponse) Reset() {
	*x = StopTunnelResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_tunnel_proto_msgTypes[11]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StopTunnelResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StopTunnelResponse) ProtoMessage() {}

func (x *StopTunnelResponse) ProtoReflect() protoreflect.Message {
	mi := &file_ps_tunnel_proto_msgTypes[11]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StopTunnelResponse.ProtoReflect.Descriptor instead.
func (*StopTunnelResponse) Descriptor() ([]byte, []int) {
	return file_ps_tunnel_proto_rawDescGZIP(), []int{11}
}

func (x *StopTunnelResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

type DeleteTunnelRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Every gRPC request must have a valid auth config
	Auth     *common.Auth `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	TunnelId string       `protobuf:"bytes,1,opt,name=tunnel_id,json=tunnelId,proto3" json:"tunnel_id,omitempty"`
}

func (x *DeleteTunnelRequest) Reset() {
	*x = DeleteTunnelRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_tunnel_proto_msgTypes[12]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteTunnelRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteTunnelRequest) ProtoMessage() {}

func (x *DeleteTunnelRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ps_tunnel_proto_msgTypes[12]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteTunnelRequest.ProtoReflect.Descriptor instead.
func (*DeleteTunnelRequest) Descriptor() ([]byte, []int) {
	return file_ps_tunnel_proto_rawDescGZIP(), []int{12}
}

func (x *DeleteTunnelRequest) GetAuth() *common.Auth {
	if x != nil {
		return x.Auth
	}
	return nil
}

func (x *DeleteTunnelRequest) GetTunnelId() string {
	if x != nil {
		return x.TunnelId
	}
	return ""
}

type DeleteTunnelResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *common.Status `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *DeleteTunnelResponse) Reset() {
	*x = DeleteTunnelResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_tunnel_proto_msgTypes[13]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteTunnelResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteTunnelResponse) ProtoMessage() {}

func (x *DeleteTunnelResponse) ProtoReflect() protoreflect.Message {
	mi := &file_ps_tunnel_proto_msgTypes[13]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteTunnelResponse.ProtoReflect.Descriptor instead.
func (*DeleteTunnelResponse) Descriptor() ([]byte, []int) {
	return file_ps_tunnel_proto_rawDescGZIP(), []int{13}
}

func (x *DeleteTunnelResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

var File_ps_tunnel_proto protoreflect.FileDescriptor

var file_ps_tunnel_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x70, 0x73, 0x5f, 0x74, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x1a, 0x1b, 0x63, 0x6f, 0x6d, 0x6d, 0x6f,
	0x6e, 0x2f, 0x70, 0x73, 0x5f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x5f, 0x61, 0x75, 0x74, 0x68,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1d, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x70,
	0x73, 0x5f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x5f, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x19, 0x6f, 0x70, 0x74, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x6f,
	0x70, 0x74, 0x73, 0x5f, 0x74, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x22, 0x40, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x41, 0x6c, 0x6c, 0x54, 0x75, 0x6e, 0x6e, 0x65, 0x6c,
	0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x28, 0x0a, 0x04, 0x61, 0x75, 0x74, 0x68,
	0x18, 0x8f, 0x4e, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73,
	0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x41, 0x75, 0x74, 0x68, 0x52, 0x04, 0x61, 0x75,
	0x74, 0x68, 0x22, 0x77, 0x0a, 0x15, 0x47, 0x65, 0x74, 0x41, 0x6c, 0x6c, 0x54, 0x75, 0x6e, 0x6e,
	0x65, 0x6c, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2e, 0x0a, 0x06, 0x73,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0xe8, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x53, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x2e, 0x0a, 0x04, 0x6f,
	0x70, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x73, 0x2e, 0x6f, 0x70, 0x74, 0x73, 0x2e, 0x54, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x4f, 0x70,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x04, 0x6f, 0x70, 0x74, 0x73, 0x22, 0x59, 0x0a, 0x10, 0x47,
	0x65, 0x74, 0x54, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x28, 0x0a, 0x04, 0x61, 0x75, 0x74, 0x68, 0x18, 0x8f, 0x4e, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x41,
	0x75, 0x74, 0x68, 0x52, 0x04, 0x61, 0x75, 0x74, 0x68, 0x12, 0x1b, 0x0a, 0x09, 0x74, 0x75, 0x6e,
	0x6e, 0x65, 0x6c, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x74, 0x75,
	0x6e, 0x6e, 0x65, 0x6c, 0x49, 0x64, 0x22, 0x73, 0x0a, 0x11, 0x47, 0x65, 0x74, 0x54, 0x75, 0x6e,
	0x6e, 0x65, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2e, 0x0a, 0x06, 0x73,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0xe8, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x53, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x2e, 0x0a, 0x04, 0x6f,
	0x70, 0x74, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x73, 0x2e, 0x6f, 0x70, 0x74, 0x73, 0x2e, 0x54, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x4f, 0x70,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x04, 0x6f, 0x70, 0x74, 0x73, 0x22, 0x6f, 0x0a, 0x13, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x12, 0x28, 0x0a, 0x04, 0x61, 0x75, 0x74, 0x68, 0x18, 0x8f, 0x4e, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x13, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f,
	0x6e, 0x2e, 0x41, 0x75, 0x74, 0x68, 0x52, 0x04, 0x61, 0x75, 0x74, 0x68, 0x12, 0x2e, 0x0a, 0x04,
	0x6f, 0x70, 0x74, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x73, 0x2e, 0x6f, 0x70, 0x74, 0x73, 0x2e, 0x54, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x4f,
	0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x04, 0x6f, 0x70, 0x74, 0x73, 0x22, 0x63, 0x0a, 0x14,
	0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2e, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0xe8,
	0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x63,
	0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x12, 0x1b, 0x0a, 0x09, 0x74, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x5f, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x74, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x49,
	0x64, 0x22, 0x8c, 0x01, 0x0a, 0x13, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x54, 0x75, 0x6e, 0x6e,
	0x65, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x28, 0x0a, 0x04, 0x61, 0x75, 0x74,
	0x68, 0x18, 0x8f, 0x4e, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x41, 0x75, 0x74, 0x68, 0x52, 0x04, 0x61,
	0x75, 0x74, 0x68, 0x12, 0x1b, 0x0a, 0x09, 0x74, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x5f, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x74, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x49, 0x64,
	0x12, 0x2e, 0x0a, 0x04, 0x6f, 0x70, 0x74, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x6f, 0x70, 0x74, 0x73, 0x2e, 0x54, 0x75, 0x6e,
	0x6e, 0x65, 0x6c, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x04, 0x6f, 0x70, 0x74, 0x73,
	0x22, 0x46, 0x0a, 0x14, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x54, 0x75, 0x6e, 0x6e, 0x65, 0x6c,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2e, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x18, 0xe8, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x22, 0x5c, 0x0a, 0x13, 0x52, 0x65, 0x73, 0x75,
	0x6d, 0x65, 0x54, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x28, 0x0a, 0x04, 0x61, 0x75, 0x74, 0x68, 0x18, 0x8f, 0x4e, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x41,
	0x75, 0x74, 0x68, 0x52, 0x04, 0x61, 0x75, 0x74, 0x68, 0x12, 0x1b, 0x0a, 0x09, 0x74, 0x75, 0x6e,
	0x6e, 0x65, 0x6c, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x74, 0x75,
	0x6e, 0x6e, 0x65, 0x6c, 0x49, 0x64, 0x22, 0x46, 0x0a, 0x14, 0x52, 0x65, 0x73, 0x75, 0x6d, 0x65,
	0x54, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2e,
	0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0xe8, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x15, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e,
	0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x22, 0x5a,
	0x0a, 0x11, 0x53, 0x74, 0x6f, 0x70, 0x54, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x28, 0x0a, 0x04, 0x61, 0x75, 0x74, 0x68, 0x18, 0x8f, 0x4e, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x13, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d,
	0x6f, 0x6e, 0x2e, 0x41, 0x75, 0x74, 0x68, 0x52, 0x04, 0x61, 0x75, 0x74, 0x68, 0x12, 0x1b, 0x0a,
	0x09, 0x74, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x08, 0x74, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x49, 0x64, 0x22, 0x44, 0x0a, 0x12, 0x53, 0x74,
	0x6f, 0x70, 0x54, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x2e, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0xe8, 0x07, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x15, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f,
	0x6e, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x22, 0x5c, 0x0a, 0x13, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x54, 0x75, 0x6e, 0x6e, 0x65, 0x6c,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x28, 0x0a, 0x04, 0x61, 0x75, 0x74, 0x68, 0x18,
	0x8f, 0x4e, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e,
	0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x41, 0x75, 0x74, 0x68, 0x52, 0x04, 0x61, 0x75, 0x74,
	0x68, 0x12, 0x1b, 0x0a, 0x09, 0x74, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x5f, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x74, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x49, 0x64, 0x22, 0x46,
	0x0a, 0x14, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x54, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2e, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x18, 0xe8, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73,
	0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06,
	0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x42, 0x36, 0x5a, 0x34, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x64, 0x61, 0x6c, 0x2f, 0x70,
	0x6c, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x2d, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x73, 0x2f, 0x62,
	0x75, 0x69, 0x6c, 0x64, 0x2f, 0x67, 0x6f, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ps_tunnel_proto_rawDescOnce sync.Once
	file_ps_tunnel_proto_rawDescData = file_ps_tunnel_proto_rawDesc
)

func file_ps_tunnel_proto_rawDescGZIP() []byte {
	file_ps_tunnel_proto_rawDescOnce.Do(func() {
		file_ps_tunnel_proto_rawDescData = protoimpl.X.CompressGZIP(file_ps_tunnel_proto_rawDescData)
	})
	return file_ps_tunnel_proto_rawDescData
}

var file_ps_tunnel_proto_msgTypes = make([]protoimpl.MessageInfo, 14)
var file_ps_tunnel_proto_goTypes = []interface{}{
	(*GetAllTunnelsRequest)(nil),  // 0: protos.GetAllTunnelsRequest
	(*GetAllTunnelsResponse)(nil), // 1: protos.GetAllTunnelsResponse
	(*GetTunnelRequest)(nil),      // 2: protos.GetTunnelRequest
	(*GetTunnelResponse)(nil),     // 3: protos.GetTunnelResponse
	(*CreateTunnelRequest)(nil),   // 4: protos.CreateTunnelRequest
	(*CreateTunnelResponse)(nil),  // 5: protos.CreateTunnelResponse
	(*UpdateTunnelRequest)(nil),   // 6: protos.UpdateTunnelRequest
	(*UpdateTunnelResponse)(nil),  // 7: protos.UpdateTunnelResponse
	(*ResumeTunnelRequest)(nil),   // 8: protos.ResumeTunnelRequest
	(*ResumeTunnelResponse)(nil),  // 9: protos.ResumeTunnelResponse
	(*StopTunnelRequest)(nil),     // 10: protos.StopTunnelRequest
	(*StopTunnelResponse)(nil),    // 11: protos.StopTunnelResponse
	(*DeleteTunnelRequest)(nil),   // 12: protos.DeleteTunnelRequest
	(*DeleteTunnelResponse)(nil),  // 13: protos.DeleteTunnelResponse
	(*common.Auth)(nil),           // 14: protos.common.Auth
	(*common.Status)(nil),         // 15: protos.common.Status
	(*opts.TunnelOptions)(nil),    // 16: protos.opts.TunnelOptions
}
var file_ps_tunnel_proto_depIdxs = []int32{
	14, // 0: protos.GetAllTunnelsRequest.auth:type_name -> protos.common.Auth
	15, // 1: protos.GetAllTunnelsResponse.status:type_name -> protos.common.Status
	16, // 2: protos.GetAllTunnelsResponse.opts:type_name -> protos.opts.TunnelOptions
	14, // 3: protos.GetTunnelRequest.auth:type_name -> protos.common.Auth
	15, // 4: protos.GetTunnelResponse.status:type_name -> protos.common.Status
	16, // 5: protos.GetTunnelResponse.opts:type_name -> protos.opts.TunnelOptions
	14, // 6: protos.CreateTunnelRequest.auth:type_name -> protos.common.Auth
	16, // 7: protos.CreateTunnelRequest.opts:type_name -> protos.opts.TunnelOptions
	15, // 8: protos.CreateTunnelResponse.status:type_name -> protos.common.Status
	14, // 9: protos.UpdateTunnelRequest.auth:type_name -> protos.common.Auth
	16, // 10: protos.UpdateTunnelRequest.opts:type_name -> protos.opts.TunnelOptions
	15, // 11: protos.UpdateTunnelResponse.status:type_name -> protos.common.Status
	14, // 12: protos.ResumeTunnelRequest.auth:type_name -> protos.common.Auth
	15, // 13: protos.ResumeTunnelResponse.status:type_name -> protos.common.Status
	14, // 14: protos.StopTunnelRequest.auth:type_name -> protos.common.Auth
	15, // 15: protos.StopTunnelResponse.status:type_name -> protos.common.Status
	14, // 16: protos.DeleteTunnelRequest.auth:type_name -> protos.common.Auth
	15, // 17: protos.DeleteTunnelResponse.status:type_name -> protos.common.Status
	18, // [18:18] is the sub-list for method output_type
	18, // [18:18] is the sub-list for method input_type
	18, // [18:18] is the sub-list for extension type_name
	18, // [18:18] is the sub-list for extension extendee
	0,  // [0:18] is the sub-list for field type_name
}

func init() { file_ps_tunnel_proto_init() }
func file_ps_tunnel_proto_init() {
	if File_ps_tunnel_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_ps_tunnel_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetAllTunnelsRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ps_tunnel_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetAllTunnelsResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ps_tunnel_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetTunnelRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ps_tunnel_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetTunnelResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ps_tunnel_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateTunnelRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ps_tunnel_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateTunnelResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ps_tunnel_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateTunnelRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ps_tunnel_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateTunnelResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ps_tunnel_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResumeTunnelRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ps_tunnel_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResumeTunnelResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ps_tunnel_proto_msgTypes[10].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StopTunnelRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ps_tunnel_proto_msgTypes[11].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StopTunnelResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ps_tunnel_proto_msgTypes[12].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteTunnelRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ps_tunnel_proto_msgTypes[13].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteTunnelResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_ps_tunnel_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   14,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ps_tunnel_proto_goTypes,
		DependencyIndexes: file_ps_tunnel_proto_depIdxs,
		MessageInfos:      file_ps_tunnel_proto_msgTypes,
	}.Build()
	File_ps_tunnel_proto = out.File
	file_ps_tunnel_proto_rawDesc = nil
	file_ps_tunnel_proto_goTypes = nil
	file_ps_tunnel_proto_depIdxs = nil
}
