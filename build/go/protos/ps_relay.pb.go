// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.6
// source: ps_relay.proto

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

type GetAllRelaysRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Every gRPC request must have a valid auth config
	Auth *common.Auth `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
}

func (x *GetAllRelaysRequest) Reset() {
	*x = GetAllRelaysRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_relay_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetAllRelaysRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetAllRelaysRequest) ProtoMessage() {}

func (x *GetAllRelaysRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ps_relay_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetAllRelaysRequest.ProtoReflect.Descriptor instead.
func (*GetAllRelaysRequest) Descriptor() ([]byte, []int) {
	return file_ps_relay_proto_rawDescGZIP(), []int{0}
}

func (x *GetAllRelaysRequest) GetAuth() *common.Auth {
	if x != nil {
		return x.Auth
	}
	return nil
}

type GetAllRelaysResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *common.Status `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
	// Will be set as empty []Relay if no relays are configured
	Opts []*opts.RelayOptions `protobuf:"bytes,1,rep,name=opts,proto3" json:"opts,omitempty"`
}

func (x *GetAllRelaysResponse) Reset() {
	*x = GetAllRelaysResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_relay_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetAllRelaysResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetAllRelaysResponse) ProtoMessage() {}

func (x *GetAllRelaysResponse) ProtoReflect() protoreflect.Message {
	mi := &file_ps_relay_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetAllRelaysResponse.ProtoReflect.Descriptor instead.
func (*GetAllRelaysResponse) Descriptor() ([]byte, []int) {
	return file_ps_relay_proto_rawDescGZIP(), []int{1}
}

func (x *GetAllRelaysResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

func (x *GetAllRelaysResponse) GetOpts() []*opts.RelayOptions {
	if x != nil {
		return x.Opts
	}
	return nil
}

type GetRelayRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Every gRPC request must have a valid auth config
	Auth    *common.Auth `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	RelayId string       `protobuf:"bytes,1,opt,name=relay_id,json=relayId,proto3" json:"relay_id,omitempty"`
}

func (x *GetRelayRequest) Reset() {
	*x = GetRelayRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_relay_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetRelayRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetRelayRequest) ProtoMessage() {}

func (x *GetRelayRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ps_relay_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetRelayRequest.ProtoReflect.Descriptor instead.
func (*GetRelayRequest) Descriptor() ([]byte, []int) {
	return file_ps_relay_proto_rawDescGZIP(), []int{2}
}

func (x *GetRelayRequest) GetAuth() *common.Auth {
	if x != nil {
		return x.Auth
	}
	return nil
}

func (x *GetRelayRequest) GetRelayId() string {
	if x != nil {
		return x.RelayId
	}
	return ""
}

type GetRelayResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *common.Status `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
	// Set only if status is OK
	Opts *opts.RelayOptions `protobuf:"bytes,1,opt,name=opts,proto3" json:"opts,omitempty"`
}

func (x *GetRelayResponse) Reset() {
	*x = GetRelayResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_relay_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetRelayResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetRelayResponse) ProtoMessage() {}

func (x *GetRelayResponse) ProtoReflect() protoreflect.Message {
	mi := &file_ps_relay_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetRelayResponse.ProtoReflect.Descriptor instead.
func (*GetRelayResponse) Descriptor() ([]byte, []int) {
	return file_ps_relay_proto_rawDescGZIP(), []int{3}
}

func (x *GetRelayResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

func (x *GetRelayResponse) GetOpts() *opts.RelayOptions {
	if x != nil {
		return x.Opts
	}
	return nil
}

type CreateRelayRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Every gRPC request must have a valid auth config
	Auth *common.Auth       `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	Opts *opts.RelayOptions `protobuf:"bytes,1,opt,name=opts,proto3" json:"opts,omitempty"`
}

func (x *CreateRelayRequest) Reset() {
	*x = CreateRelayRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_relay_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateRelayRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateRelayRequest) ProtoMessage() {}

func (x *CreateRelayRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ps_relay_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateRelayRequest.ProtoReflect.Descriptor instead.
func (*CreateRelayRequest) Descriptor() ([]byte, []int) {
	return file_ps_relay_proto_rawDescGZIP(), []int{4}
}

func (x *CreateRelayRequest) GetAuth() *common.Auth {
	if x != nil {
		return x.Auth
	}
	return nil
}

func (x *CreateRelayRequest) GetOpts() *opts.RelayOptions {
	if x != nil {
		return x.Opts
	}
	return nil
}

type CreateRelayResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *common.Status `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
	// ID of the created relay entry
	RelayId string `protobuf:"bytes,1,opt,name=relay_id,json=relayId,proto3" json:"relay_id,omitempty"`
}

func (x *CreateRelayResponse) Reset() {
	*x = CreateRelayResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_relay_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateRelayResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateRelayResponse) ProtoMessage() {}

func (x *CreateRelayResponse) ProtoReflect() protoreflect.Message {
	mi := &file_ps_relay_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateRelayResponse.ProtoReflect.Descriptor instead.
func (*CreateRelayResponse) Descriptor() ([]byte, []int) {
	return file_ps_relay_proto_rawDescGZIP(), []int{5}
}

func (x *CreateRelayResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

func (x *CreateRelayResponse) GetRelayId() string {
	if x != nil {
		return x.RelayId
	}
	return ""
}

// WARNING: Any in-progress relay will be interrupted/restarted
type UpdateRelayRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Every gRPC request must have a valid auth config
	Auth    *common.Auth       `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	RelayId string             `protobuf:"bytes,1,opt,name=relay_id,json=relayId,proto3" json:"relay_id,omitempty"`
	Opts    *opts.RelayOptions `protobuf:"bytes,2,opt,name=opts,proto3" json:"opts,omitempty"`
}

func (x *UpdateRelayRequest) Reset() {
	*x = UpdateRelayRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_relay_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateRelayRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateRelayRequest) ProtoMessage() {}

func (x *UpdateRelayRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ps_relay_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateRelayRequest.ProtoReflect.Descriptor instead.
func (*UpdateRelayRequest) Descriptor() ([]byte, []int) {
	return file_ps_relay_proto_rawDescGZIP(), []int{6}
}

func (x *UpdateRelayRequest) GetAuth() *common.Auth {
	if x != nil {
		return x.Auth
	}
	return nil
}

func (x *UpdateRelayRequest) GetRelayId() string {
	if x != nil {
		return x.RelayId
	}
	return ""
}

func (x *UpdateRelayRequest) GetOpts() *opts.RelayOptions {
	if x != nil {
		return x.Opts
	}
	return nil
}

type UpdateRelayResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *common.Status `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *UpdateRelayResponse) Reset() {
	*x = UpdateRelayResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_relay_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateRelayResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateRelayResponse) ProtoMessage() {}

func (x *UpdateRelayResponse) ProtoReflect() protoreflect.Message {
	mi := &file_ps_relay_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateRelayResponse.ProtoReflect.Descriptor instead.
func (*UpdateRelayResponse) Descriptor() ([]byte, []int) {
	return file_ps_relay_proto_rawDescGZIP(), []int{7}
}

func (x *UpdateRelayResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

// Resume a paused relay
type ResumeRelayRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Every gRPC request must have a valid auth config
	Auth    *common.Auth `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	RelayId string       `protobuf:"bytes,1,opt,name=relay_id,json=relayId,proto3" json:"relay_id,omitempty"`
}

func (x *ResumeRelayRequest) Reset() {
	*x = ResumeRelayRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_relay_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResumeRelayRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResumeRelayRequest) ProtoMessage() {}

func (x *ResumeRelayRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ps_relay_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResumeRelayRequest.ProtoReflect.Descriptor instead.
func (*ResumeRelayRequest) Descriptor() ([]byte, []int) {
	return file_ps_relay_proto_rawDescGZIP(), []int{8}
}

func (x *ResumeRelayRequest) GetAuth() *common.Auth {
	if x != nil {
		return x.Auth
	}
	return nil
}

func (x *ResumeRelayRequest) GetRelayId() string {
	if x != nil {
		return x.RelayId
	}
	return ""
}

type ResumeRelayResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *common.Status `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *ResumeRelayResponse) Reset() {
	*x = ResumeRelayResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_relay_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResumeRelayResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResumeRelayResponse) ProtoMessage() {}

func (x *ResumeRelayResponse) ProtoReflect() protoreflect.Message {
	mi := &file_ps_relay_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResumeRelayResponse.ProtoReflect.Descriptor instead.
func (*ResumeRelayResponse) Descriptor() ([]byte, []int) {
	return file_ps_relay_proto_rawDescGZIP(), []int{9}
}

func (x *ResumeRelayResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

// Temporarily stop/pause a relay
type StopRelayRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Every gRPC request must have a valid auth config
	Auth    *common.Auth `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	RelayId string       `protobuf:"bytes,1,opt,name=relay_id,json=relayId,proto3" json:"relay_id,omitempty"`
}

func (x *StopRelayRequest) Reset() {
	*x = StopRelayRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_relay_proto_msgTypes[10]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StopRelayRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StopRelayRequest) ProtoMessage() {}

func (x *StopRelayRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ps_relay_proto_msgTypes[10]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StopRelayRequest.ProtoReflect.Descriptor instead.
func (*StopRelayRequest) Descriptor() ([]byte, []int) {
	return file_ps_relay_proto_rawDescGZIP(), []int{10}
}

func (x *StopRelayRequest) GetAuth() *common.Auth {
	if x != nil {
		return x.Auth
	}
	return nil
}

func (x *StopRelayRequest) GetRelayId() string {
	if x != nil {
		return x.RelayId
	}
	return ""
}

type StopRelayResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *common.Status `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *StopRelayResponse) Reset() {
	*x = StopRelayResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_relay_proto_msgTypes[11]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StopRelayResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StopRelayResponse) ProtoMessage() {}

func (x *StopRelayResponse) ProtoReflect() protoreflect.Message {
	mi := &file_ps_relay_proto_msgTypes[11]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StopRelayResponse.ProtoReflect.Descriptor instead.
func (*StopRelayResponse) Descriptor() ([]byte, []int) {
	return file_ps_relay_proto_rawDescGZIP(), []int{11}
}

func (x *StopRelayResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

type DeleteRelayRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Every gRPC request must have a valid auth config
	Auth    *common.Auth `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	RelayId string       `protobuf:"bytes,1,opt,name=relay_id,json=relayId,proto3" json:"relay_id,omitempty"`
}

func (x *DeleteRelayRequest) Reset() {
	*x = DeleteRelayRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_relay_proto_msgTypes[12]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteRelayRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteRelayRequest) ProtoMessage() {}

func (x *DeleteRelayRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ps_relay_proto_msgTypes[12]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteRelayRequest.ProtoReflect.Descriptor instead.
func (*DeleteRelayRequest) Descriptor() ([]byte, []int) {
	return file_ps_relay_proto_rawDescGZIP(), []int{12}
}

func (x *DeleteRelayRequest) GetAuth() *common.Auth {
	if x != nil {
		return x.Auth
	}
	return nil
}

func (x *DeleteRelayRequest) GetRelayId() string {
	if x != nil {
		return x.RelayId
	}
	return ""
}

type DeleteRelayResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *common.Status `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *DeleteRelayResponse) Reset() {
	*x = DeleteRelayResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_relay_proto_msgTypes[13]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteRelayResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteRelayResponse) ProtoMessage() {}

func (x *DeleteRelayResponse) ProtoReflect() protoreflect.Message {
	mi := &file_ps_relay_proto_msgTypes[13]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteRelayResponse.ProtoReflect.Descriptor instead.
func (*DeleteRelayResponse) Descriptor() ([]byte, []int) {
	return file_ps_relay_proto_rawDescGZIP(), []int{13}
}

func (x *DeleteRelayResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

var File_ps_relay_proto protoreflect.FileDescriptor

var file_ps_relay_proto_rawDesc = []byte{
	0x0a, 0x0e, 0x70, 0x73, 0x5f, 0x72, 0x65, 0x6c, 0x61, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x1a, 0x1b, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e,
	0x2f, 0x70, 0x73, 0x5f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x5f, 0x61, 0x75, 0x74, 0x68, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1d, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x70, 0x73,
	0x5f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x5f, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x18, 0x6f, 0x70, 0x74, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x6f, 0x70,
	0x74, 0x73, 0x5f, 0x72, 0x65, 0x6c, 0x61, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x3f,
	0x0a, 0x13, 0x47, 0x65, 0x74, 0x41, 0x6c, 0x6c, 0x52, 0x65, 0x6c, 0x61, 0x79, 0x73, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x28, 0x0a, 0x04, 0x61, 0x75, 0x74, 0x68, 0x18, 0x8f, 0x4e,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x63, 0x6f,
	0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x41, 0x75, 0x74, 0x68, 0x52, 0x04, 0x61, 0x75, 0x74, 0x68, 0x22,
	0x75, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x41, 0x6c, 0x6c, 0x52, 0x65, 0x6c, 0x61, 0x79, 0x73, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2e, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x18, 0xe8, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52,
	0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x2d, 0x0a, 0x04, 0x6f, 0x70, 0x74, 0x73, 0x18,
	0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x6f,
	0x70, 0x74, 0x73, 0x2e, 0x52, 0x65, 0x6c, 0x61, 0x79, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73,
	0x52, 0x04, 0x6f, 0x70, 0x74, 0x73, 0x22, 0x56, 0x0a, 0x0f, 0x47, 0x65, 0x74, 0x52, 0x65, 0x6c,
	0x61, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x28, 0x0a, 0x04, 0x61, 0x75, 0x74,
	0x68, 0x18, 0x8f, 0x4e, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x41, 0x75, 0x74, 0x68, 0x52, 0x04, 0x61,
	0x75, 0x74, 0x68, 0x12, 0x19, 0x0a, 0x08, 0x72, 0x65, 0x6c, 0x61, 0x79, 0x5f, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x72, 0x65, 0x6c, 0x61, 0x79, 0x49, 0x64, 0x22, 0x71,
	0x0a, 0x10, 0x47, 0x65, 0x74, 0x52, 0x65, 0x6c, 0x61, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x2e, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0xe8, 0x07, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x63, 0x6f, 0x6d,
	0x6d, 0x6f, 0x6e, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x12, 0x2d, 0x0a, 0x04, 0x6f, 0x70, 0x74, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x19, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x6f, 0x70, 0x74, 0x73, 0x2e, 0x52,
	0x65, 0x6c, 0x61, 0x79, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x04, 0x6f, 0x70, 0x74,
	0x73, 0x22, 0x6d, 0x0a, 0x12, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x6c, 0x61, 0x79,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x28, 0x0a, 0x04, 0x61, 0x75, 0x74, 0x68, 0x18,
	0x8f, 0x4e, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e,
	0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x41, 0x75, 0x74, 0x68, 0x52, 0x04, 0x61, 0x75, 0x74,
	0x68, 0x12, 0x2d, 0x0a, 0x04, 0x6f, 0x70, 0x74, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x19, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x6f, 0x70, 0x74, 0x73, 0x2e, 0x52, 0x65,
	0x6c, 0x61, 0x79, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x04, 0x6f, 0x70, 0x74, 0x73,
	0x22, 0x60, 0x0a, 0x13, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x6c, 0x61, 0x79, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2e, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x18, 0xe8, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52,
	0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x19, 0x0a, 0x08, 0x72, 0x65, 0x6c, 0x61, 0x79,
	0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x72, 0x65, 0x6c, 0x61, 0x79,
	0x49, 0x64, 0x22, 0x88, 0x01, 0x0a, 0x12, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x6c,
	0x61, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x28, 0x0a, 0x04, 0x61, 0x75, 0x74,
	0x68, 0x18, 0x8f, 0x4e, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x41, 0x75, 0x74, 0x68, 0x52, 0x04, 0x61,
	0x75, 0x74, 0x68, 0x12, 0x19, 0x0a, 0x08, 0x72, 0x65, 0x6c, 0x61, 0x79, 0x5f, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x72, 0x65, 0x6c, 0x61, 0x79, 0x49, 0x64, 0x12, 0x2d,
	0x0a, 0x04, 0x6f, 0x70, 0x74, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x6f, 0x70, 0x74, 0x73, 0x2e, 0x52, 0x65, 0x6c, 0x61, 0x79,
	0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x04, 0x6f, 0x70, 0x74, 0x73, 0x22, 0x45, 0x0a,
	0x13, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x6c, 0x61, 0x79, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2e, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0xe8,
	0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x63,
	0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x22, 0x59, 0x0a, 0x12, 0x52, 0x65, 0x73, 0x75, 0x6d, 0x65, 0x52, 0x65,
	0x6c, 0x61, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x28, 0x0a, 0x04, 0x61, 0x75,
	0x74, 0x68, 0x18, 0x8f, 0x4e, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x41, 0x75, 0x74, 0x68, 0x52, 0x04,
	0x61, 0x75, 0x74, 0x68, 0x12, 0x19, 0x0a, 0x08, 0x72, 0x65, 0x6c, 0x61, 0x79, 0x5f, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x72, 0x65, 0x6c, 0x61, 0x79, 0x49, 0x64, 0x22,
	0x45, 0x0a, 0x13, 0x52, 0x65, 0x73, 0x75, 0x6d, 0x65, 0x52, 0x65, 0x6c, 0x61, 0x79, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2e, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x18, 0xe8, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73,
	0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06,
	0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x22, 0x57, 0x0a, 0x10, 0x53, 0x74, 0x6f, 0x70, 0x52, 0x65,
	0x6c, 0x61, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x28, 0x0a, 0x04, 0x61, 0x75,
	0x74, 0x68, 0x18, 0x8f, 0x4e, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x41, 0x75, 0x74, 0x68, 0x52, 0x04,
	0x61, 0x75, 0x74, 0x68, 0x12, 0x19, 0x0a, 0x08, 0x72, 0x65, 0x6c, 0x61, 0x79, 0x5f, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x72, 0x65, 0x6c, 0x61, 0x79, 0x49, 0x64, 0x22,
	0x43, 0x0a, 0x11, 0x53, 0x74, 0x6f, 0x70, 0x52, 0x65, 0x6c, 0x61, 0x79, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2e, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0xe8,
	0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x63,
	0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x22, 0x59, 0x0a, 0x12, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65,
	0x6c, 0x61, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x28, 0x0a, 0x04, 0x61, 0x75,
	0x74, 0x68, 0x18, 0x8f, 0x4e, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x41, 0x75, 0x74, 0x68, 0x52, 0x04,
	0x61, 0x75, 0x74, 0x68, 0x12, 0x19, 0x0a, 0x08, 0x72, 0x65, 0x6c, 0x61, 0x79, 0x5f, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x72, 0x65, 0x6c, 0x61, 0x79, 0x49, 0x64, 0x22,
	0x45, 0x0a, 0x13, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x6c, 0x61, 0x79, 0x52, 0x65,
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
	file_ps_relay_proto_rawDescOnce sync.Once
	file_ps_relay_proto_rawDescData = file_ps_relay_proto_rawDesc
)

func file_ps_relay_proto_rawDescGZIP() []byte {
	file_ps_relay_proto_rawDescOnce.Do(func() {
		file_ps_relay_proto_rawDescData = protoimpl.X.CompressGZIP(file_ps_relay_proto_rawDescData)
	})
	return file_ps_relay_proto_rawDescData
}

var file_ps_relay_proto_msgTypes = make([]protoimpl.MessageInfo, 14)
var file_ps_relay_proto_goTypes = []interface{}{
	(*GetAllRelaysRequest)(nil),  // 0: protos.GetAllRelaysRequest
	(*GetAllRelaysResponse)(nil), // 1: protos.GetAllRelaysResponse
	(*GetRelayRequest)(nil),      // 2: protos.GetRelayRequest
	(*GetRelayResponse)(nil),     // 3: protos.GetRelayResponse
	(*CreateRelayRequest)(nil),   // 4: protos.CreateRelayRequest
	(*CreateRelayResponse)(nil),  // 5: protos.CreateRelayResponse
	(*UpdateRelayRequest)(nil),   // 6: protos.UpdateRelayRequest
	(*UpdateRelayResponse)(nil),  // 7: protos.UpdateRelayResponse
	(*ResumeRelayRequest)(nil),   // 8: protos.ResumeRelayRequest
	(*ResumeRelayResponse)(nil),  // 9: protos.ResumeRelayResponse
	(*StopRelayRequest)(nil),     // 10: protos.StopRelayRequest
	(*StopRelayResponse)(nil),    // 11: protos.StopRelayResponse
	(*DeleteRelayRequest)(nil),   // 12: protos.DeleteRelayRequest
	(*DeleteRelayResponse)(nil),  // 13: protos.DeleteRelayResponse
	(*common.Auth)(nil),          // 14: protos.common.Auth
	(*common.Status)(nil),        // 15: protos.common.Status
	(*opts.RelayOptions)(nil),    // 16: protos.opts.RelayOptions
}
var file_ps_relay_proto_depIdxs = []int32{
	14, // 0: protos.GetAllRelaysRequest.auth:type_name -> protos.common.Auth
	15, // 1: protos.GetAllRelaysResponse.status:type_name -> protos.common.Status
	16, // 2: protos.GetAllRelaysResponse.opts:type_name -> protos.opts.RelayOptions
	14, // 3: protos.GetRelayRequest.auth:type_name -> protos.common.Auth
	15, // 4: protos.GetRelayResponse.status:type_name -> protos.common.Status
	16, // 5: protos.GetRelayResponse.opts:type_name -> protos.opts.RelayOptions
	14, // 6: protos.CreateRelayRequest.auth:type_name -> protos.common.Auth
	16, // 7: protos.CreateRelayRequest.opts:type_name -> protos.opts.RelayOptions
	15, // 8: protos.CreateRelayResponse.status:type_name -> protos.common.Status
	14, // 9: protos.UpdateRelayRequest.auth:type_name -> protos.common.Auth
	16, // 10: protos.UpdateRelayRequest.opts:type_name -> protos.opts.RelayOptions
	15, // 11: protos.UpdateRelayResponse.status:type_name -> protos.common.Status
	14, // 12: protos.ResumeRelayRequest.auth:type_name -> protos.common.Auth
	15, // 13: protos.ResumeRelayResponse.status:type_name -> protos.common.Status
	14, // 14: protos.StopRelayRequest.auth:type_name -> protos.common.Auth
	15, // 15: protos.StopRelayResponse.status:type_name -> protos.common.Status
	14, // 16: protos.DeleteRelayRequest.auth:type_name -> protos.common.Auth
	15, // 17: protos.DeleteRelayResponse.status:type_name -> protos.common.Status
	18, // [18:18] is the sub-list for method output_type
	18, // [18:18] is the sub-list for method input_type
	18, // [18:18] is the sub-list for extension type_name
	18, // [18:18] is the sub-list for extension extendee
	0,  // [0:18] is the sub-list for field type_name
}

func init() { file_ps_relay_proto_init() }
func file_ps_relay_proto_init() {
	if File_ps_relay_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_ps_relay_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetAllRelaysRequest); i {
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
		file_ps_relay_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetAllRelaysResponse); i {
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
		file_ps_relay_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetRelayRequest); i {
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
		file_ps_relay_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetRelayResponse); i {
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
		file_ps_relay_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateRelayRequest); i {
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
		file_ps_relay_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateRelayResponse); i {
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
		file_ps_relay_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateRelayRequest); i {
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
		file_ps_relay_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateRelayResponse); i {
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
		file_ps_relay_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResumeRelayRequest); i {
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
		file_ps_relay_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResumeRelayResponse); i {
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
		file_ps_relay_proto_msgTypes[10].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StopRelayRequest); i {
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
		file_ps_relay_proto_msgTypes[11].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StopRelayResponse); i {
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
		file_ps_relay_proto_msgTypes[12].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteRelayRequest); i {
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
		file_ps_relay_proto_msgTypes[13].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteRelayResponse); i {
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
			RawDescriptor: file_ps_relay_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   14,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ps_relay_proto_goTypes,
		DependencyIndexes: file_ps_relay_proto_depIdxs,
		MessageInfos:      file_ps_relay_proto_msgTypes,
	}.Build()
	File_ps_relay_proto = out.File
	file_ps_relay_proto_rawDesc = nil
	file_ps_relay_proto_goTypes = nil
	file_ps_relay_proto_depIdxs = nil
}
