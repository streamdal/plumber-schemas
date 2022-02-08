// Code generated by protoc-gen-go. DO NOT EDIT.
// source: ps_schema_validation.proto

package protos

import (
	fmt "fmt"
	common "github.com/batchcorp/plumber-schemas/build/go/protos/common"
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

type GetValidationRequest struct {
	// Every gRPC request must have a valid auth config
	Auth *common.Auth `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	// Validation ID
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetValidationRequest) Reset()         { *m = GetValidationRequest{} }
func (m *GetValidationRequest) String() string { return proto.CompactTextString(m) }
func (*GetValidationRequest) ProtoMessage()    {}
func (*GetValidationRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_56b42dfee40054c1, []int{0}
}

func (m *GetValidationRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetValidationRequest.Unmarshal(m, b)
}
func (m *GetValidationRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetValidationRequest.Marshal(b, m, deterministic)
}
func (m *GetValidationRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetValidationRequest.Merge(m, src)
}
func (m *GetValidationRequest) XXX_Size() int {
	return xxx_messageInfo_GetValidationRequest.Size(m)
}
func (m *GetValidationRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetValidationRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetValidationRequest proto.InternalMessageInfo

func (m *GetValidationRequest) GetAuth() *common.Auth {
	if m != nil {
		return m.Auth
	}
	return nil
}

func (m *GetValidationRequest) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

type GetValidationResponse struct {
	Validation           *common.Validation `protobuf:"bytes,1,opt,name=validation,proto3" json:"validation,omitempty"`
	XXX_NoUnkeyedLiteral struct{}           `json:"-"`
	XXX_unrecognized     []byte             `json:"-"`
	XXX_sizecache        int32              `json:"-"`
}

func (m *GetValidationResponse) Reset()         { *m = GetValidationResponse{} }
func (m *GetValidationResponse) String() string { return proto.CompactTextString(m) }
func (*GetValidationResponse) ProtoMessage()    {}
func (*GetValidationResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_56b42dfee40054c1, []int{1}
}

func (m *GetValidationResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetValidationResponse.Unmarshal(m, b)
}
func (m *GetValidationResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetValidationResponse.Marshal(b, m, deterministic)
}
func (m *GetValidationResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetValidationResponse.Merge(m, src)
}
func (m *GetValidationResponse) XXX_Size() int {
	return xxx_messageInfo_GetValidationResponse.Size(m)
}
func (m *GetValidationResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetValidationResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetValidationResponse proto.InternalMessageInfo

func (m *GetValidationResponse) GetValidation() *common.Validation {
	if m != nil {
		return m.Validation
	}
	return nil
}

type GetAllValidationsRequest struct {
	// Every gRPC request must have a valid auth config
	Auth *common.Auth `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	// Validation ID
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetAllValidationsRequest) Reset()         { *m = GetAllValidationsRequest{} }
func (m *GetAllValidationsRequest) String() string { return proto.CompactTextString(m) }
func (*GetAllValidationsRequest) ProtoMessage()    {}
func (*GetAllValidationsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_56b42dfee40054c1, []int{2}
}

func (m *GetAllValidationsRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetAllValidationsRequest.Unmarshal(m, b)
}
func (m *GetAllValidationsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetAllValidationsRequest.Marshal(b, m, deterministic)
}
func (m *GetAllValidationsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetAllValidationsRequest.Merge(m, src)
}
func (m *GetAllValidationsRequest) XXX_Size() int {
	return xxx_messageInfo_GetAllValidationsRequest.Size(m)
}
func (m *GetAllValidationsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetAllValidationsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetAllValidationsRequest proto.InternalMessageInfo

func (m *GetAllValidationsRequest) GetAuth() *common.Auth {
	if m != nil {
		return m.Auth
	}
	return nil
}

func (m *GetAllValidationsRequest) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

type GetAllValidationsResponse struct {
	Validations          []*common.Validation `protobuf:"bytes,1,rep,name=validations,proto3" json:"validations,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *GetAllValidationsResponse) Reset()         { *m = GetAllValidationsResponse{} }
func (m *GetAllValidationsResponse) String() string { return proto.CompactTextString(m) }
func (*GetAllValidationsResponse) ProtoMessage()    {}
func (*GetAllValidationsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_56b42dfee40054c1, []int{3}
}

func (m *GetAllValidationsResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetAllValidationsResponse.Unmarshal(m, b)
}
func (m *GetAllValidationsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetAllValidationsResponse.Marshal(b, m, deterministic)
}
func (m *GetAllValidationsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetAllValidationsResponse.Merge(m, src)
}
func (m *GetAllValidationsResponse) XXX_Size() int {
	return xxx_messageInfo_GetAllValidationsResponse.Size(m)
}
func (m *GetAllValidationsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetAllValidationsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetAllValidationsResponse proto.InternalMessageInfo

func (m *GetAllValidationsResponse) GetValidations() []*common.Validation {
	if m != nil {
		return m.Validations
	}
	return nil
}

type CreateValidationRequest struct {
	// Every gRPC request must have a valid auth config
	Auth                 *common.Auth       `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	Validation           *common.Validation `protobuf:"bytes,1,opt,name=validation,proto3" json:"validation,omitempty"`
	XXX_NoUnkeyedLiteral struct{}           `json:"-"`
	XXX_unrecognized     []byte             `json:"-"`
	XXX_sizecache        int32              `json:"-"`
}

func (m *CreateValidationRequest) Reset()         { *m = CreateValidationRequest{} }
func (m *CreateValidationRequest) String() string { return proto.CompactTextString(m) }
func (*CreateValidationRequest) ProtoMessage()    {}
func (*CreateValidationRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_56b42dfee40054c1, []int{4}
}

func (m *CreateValidationRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateValidationRequest.Unmarshal(m, b)
}
func (m *CreateValidationRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateValidationRequest.Marshal(b, m, deterministic)
}
func (m *CreateValidationRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateValidationRequest.Merge(m, src)
}
func (m *CreateValidationRequest) XXX_Size() int {
	return xxx_messageInfo_CreateValidationRequest.Size(m)
}
func (m *CreateValidationRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateValidationRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CreateValidationRequest proto.InternalMessageInfo

func (m *CreateValidationRequest) GetAuth() *common.Auth {
	if m != nil {
		return m.Auth
	}
	return nil
}

func (m *CreateValidationRequest) GetValidation() *common.Validation {
	if m != nil {
		return m.Validation
	}
	return nil
}

type CreateValidationResponse struct {
	Status               *common.Status     `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
	Validation           *common.Validation `protobuf:"bytes,1,opt,name=validation,proto3" json:"validation,omitempty"`
	XXX_NoUnkeyedLiteral struct{}           `json:"-"`
	XXX_unrecognized     []byte             `json:"-"`
	XXX_sizecache        int32              `json:"-"`
}

func (m *CreateValidationResponse) Reset()         { *m = CreateValidationResponse{} }
func (m *CreateValidationResponse) String() string { return proto.CompactTextString(m) }
func (*CreateValidationResponse) ProtoMessage()    {}
func (*CreateValidationResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_56b42dfee40054c1, []int{5}
}

func (m *CreateValidationResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateValidationResponse.Unmarshal(m, b)
}
func (m *CreateValidationResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateValidationResponse.Marshal(b, m, deterministic)
}
func (m *CreateValidationResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateValidationResponse.Merge(m, src)
}
func (m *CreateValidationResponse) XXX_Size() int {
	return xxx_messageInfo_CreateValidationResponse.Size(m)
}
func (m *CreateValidationResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateValidationResponse.DiscardUnknown(m)
}

var xxx_messageInfo_CreateValidationResponse proto.InternalMessageInfo

func (m *CreateValidationResponse) GetStatus() *common.Status {
	if m != nil {
		return m.Status
	}
	return nil
}

func (m *CreateValidationResponse) GetValidation() *common.Validation {
	if m != nil {
		return m.Validation
	}
	return nil
}

type UpdateValidationRequest struct {
	// Every gRPC request must have a valid auth config
	Auth *common.Auth `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	// Validation ID
	Id                   string             `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Validation           *common.Validation `protobuf:"bytes,2,opt,name=validation,proto3" json:"validation,omitempty"`
	XXX_NoUnkeyedLiteral struct{}           `json:"-"`
	XXX_unrecognized     []byte             `json:"-"`
	XXX_sizecache        int32              `json:"-"`
}

func (m *UpdateValidationRequest) Reset()         { *m = UpdateValidationRequest{} }
func (m *UpdateValidationRequest) String() string { return proto.CompactTextString(m) }
func (*UpdateValidationRequest) ProtoMessage()    {}
func (*UpdateValidationRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_56b42dfee40054c1, []int{6}
}

func (m *UpdateValidationRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateValidationRequest.Unmarshal(m, b)
}
func (m *UpdateValidationRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateValidationRequest.Marshal(b, m, deterministic)
}
func (m *UpdateValidationRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateValidationRequest.Merge(m, src)
}
func (m *UpdateValidationRequest) XXX_Size() int {
	return xxx_messageInfo_UpdateValidationRequest.Size(m)
}
func (m *UpdateValidationRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateValidationRequest.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateValidationRequest proto.InternalMessageInfo

func (m *UpdateValidationRequest) GetAuth() *common.Auth {
	if m != nil {
		return m.Auth
	}
	return nil
}

func (m *UpdateValidationRequest) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *UpdateValidationRequest) GetValidation() *common.Validation {
	if m != nil {
		return m.Validation
	}
	return nil
}

type UpdateValidationResponse struct {
	Status               *common.Status     `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
	Validation           *common.Validation `protobuf:"bytes,1,opt,name=validation,proto3" json:"validation,omitempty"`
	XXX_NoUnkeyedLiteral struct{}           `json:"-"`
	XXX_unrecognized     []byte             `json:"-"`
	XXX_sizecache        int32              `json:"-"`
}

func (m *UpdateValidationResponse) Reset()         { *m = UpdateValidationResponse{} }
func (m *UpdateValidationResponse) String() string { return proto.CompactTextString(m) }
func (*UpdateValidationResponse) ProtoMessage()    {}
func (*UpdateValidationResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_56b42dfee40054c1, []int{7}
}

func (m *UpdateValidationResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateValidationResponse.Unmarshal(m, b)
}
func (m *UpdateValidationResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateValidationResponse.Marshal(b, m, deterministic)
}
func (m *UpdateValidationResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateValidationResponse.Merge(m, src)
}
func (m *UpdateValidationResponse) XXX_Size() int {
	return xxx_messageInfo_UpdateValidationResponse.Size(m)
}
func (m *UpdateValidationResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateValidationResponse.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateValidationResponse proto.InternalMessageInfo

func (m *UpdateValidationResponse) GetStatus() *common.Status {
	if m != nil {
		return m.Status
	}
	return nil
}

func (m *UpdateValidationResponse) GetValidation() *common.Validation {
	if m != nil {
		return m.Validation
	}
	return nil
}

type DeleteValidationRequest struct {
	// Every gRPC request must have a valid auth config
	Auth *common.Auth `protobuf:"bytes,9999,opt,name=auth,proto3" json:"auth,omitempty"`
	// Validation ID
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteValidationRequest) Reset()         { *m = DeleteValidationRequest{} }
func (m *DeleteValidationRequest) String() string { return proto.CompactTextString(m) }
func (*DeleteValidationRequest) ProtoMessage()    {}
func (*DeleteValidationRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_56b42dfee40054c1, []int{8}
}

func (m *DeleteValidationRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteValidationRequest.Unmarshal(m, b)
}
func (m *DeleteValidationRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteValidationRequest.Marshal(b, m, deterministic)
}
func (m *DeleteValidationRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteValidationRequest.Merge(m, src)
}
func (m *DeleteValidationRequest) XXX_Size() int {
	return xxx_messageInfo_DeleteValidationRequest.Size(m)
}
func (m *DeleteValidationRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteValidationRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteValidationRequest proto.InternalMessageInfo

func (m *DeleteValidationRequest) GetAuth() *common.Auth {
	if m != nil {
		return m.Auth
	}
	return nil
}

func (m *DeleteValidationRequest) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

type DeleteValidationResponse struct {
	Status               *common.Status `protobuf:"bytes,1000,opt,name=status,proto3" json:"status,omitempty"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

func (m *DeleteValidationResponse) Reset()         { *m = DeleteValidationResponse{} }
func (m *DeleteValidationResponse) String() string { return proto.CompactTextString(m) }
func (*DeleteValidationResponse) ProtoMessage()    {}
func (*DeleteValidationResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_56b42dfee40054c1, []int{9}
}

func (m *DeleteValidationResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteValidationResponse.Unmarshal(m, b)
}
func (m *DeleteValidationResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteValidationResponse.Marshal(b, m, deterministic)
}
func (m *DeleteValidationResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteValidationResponse.Merge(m, src)
}
func (m *DeleteValidationResponse) XXX_Size() int {
	return xxx_messageInfo_DeleteValidationResponse.Size(m)
}
func (m *DeleteValidationResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteValidationResponse.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteValidationResponse proto.InternalMessageInfo

func (m *DeleteValidationResponse) GetStatus() *common.Status {
	if m != nil {
		return m.Status
	}
	return nil
}

func init() {
	proto.RegisterType((*GetValidationRequest)(nil), "protos.GetValidationRequest")
	proto.RegisterType((*GetValidationResponse)(nil), "protos.GetValidationResponse")
	proto.RegisterType((*GetAllValidationsRequest)(nil), "protos.GetAllValidationsRequest")
	proto.RegisterType((*GetAllValidationsResponse)(nil), "protos.GetAllValidationsResponse")
	proto.RegisterType((*CreateValidationRequest)(nil), "protos.CreateValidationRequest")
	proto.RegisterType((*CreateValidationResponse)(nil), "protos.CreateValidationResponse")
	proto.RegisterType((*UpdateValidationRequest)(nil), "protos.UpdateValidationRequest")
	proto.RegisterType((*UpdateValidationResponse)(nil), "protos.UpdateValidationResponse")
	proto.RegisterType((*DeleteValidationRequest)(nil), "protos.DeleteValidationRequest")
	proto.RegisterType((*DeleteValidationResponse)(nil), "protos.DeleteValidationResponse")
}

func init() { proto.RegisterFile("ps_schema_validation.proto", fileDescriptor_56b42dfee40054c1) }

var fileDescriptor_56b42dfee40054c1 = []byte{
	// 357 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xbc, 0x94, 0xc1, 0x4b, 0xc3, 0x30,
	0x18, 0xc5, 0xe9, 0x94, 0x89, 0xdf, 0xc0, 0x43, 0x75, 0x2c, 0x9b, 0x08, 0xb3, 0xa7, 0x5d, 0x6c,
	0x61, 0x8a, 0x20, 0x9e, 0xa6, 0xc2, 0xc0, 0x83, 0x48, 0xa7, 0x22, 0x5e, 0x4a, 0xda, 0x86, 0xb5,
	0xd0, 0x2e, 0xb1, 0x5f, 0xe2, 0xd1, 0x9b, 0x57, 0xfd, 0x37, 0xfd, 0x33, 0x64, 0x4d, 0x71, 0xa5,
	0x15, 0x41, 0x2b, 0x9e, 0x5a, 0xfa, 0x5e, 0xde, 0xf7, 0xcb, 0x6b, 0x08, 0x0c, 0x04, 0x7a, 0x18,
	0x44, 0x2c, 0xa5, 0xde, 0x13, 0x4d, 0xe2, 0x90, 0xca, 0x98, 0x2f, 0x6c, 0x91, 0x71, 0xc9, 0xcd,
	0x76, 0xfe, 0xc0, 0xc1, 0x6e, 0xc0, 0xd3, 0x94, 0x2f, 0x1c, 0x81, 0x9e, 0x7e, 0xf3, 0xa8, 0x92,
	0x91, 0x36, 0x0d, 0xf6, 0x6a, 0x22, 0x4a, 0x2a, 0x15, 0x16, 0xf2, 0x7e, 0x4d, 0xae, 0x8e, 0xb1,
	0xae, 0x61, 0x67, 0xca, 0xe4, 0xdd, 0xe7, 0x67, 0x97, 0x3d, 0x2a, 0x86, 0xd2, 0x1c, 0xc1, 0xfa,
	0x72, 0x0e, 0x79, 0xbb, 0x1a, 0x1a, 0xa3, 0xce, 0x78, 0x5b, 0xdb, 0xd1, 0xd6, 0x39, 0xf6, 0x44,
	0xc9, 0xc8, 0xcd, 0x1d, 0xe6, 0x16, 0xb4, 0xe2, 0x90, 0x18, 0x43, 0x63, 0xb4, 0xe9, 0xb6, 0xe2,
	0xd0, 0x72, 0xa1, 0x5b, 0x49, 0x44, 0xc1, 0x17, 0xc8, 0xcc, 0x13, 0x80, 0xd5, 0xf8, 0x7c, 0x41,
	0x67, 0xdc, 0xaf, 0xe4, 0x96, 0x96, 0x95, 0xcc, 0xd6, 0x0d, 0x90, 0x29, 0x93, 0x93, 0x24, 0x59,
	0xe9, 0xd8, 0x9c, 0xf4, 0x1e, 0xfa, 0x5f, 0xa4, 0x16, 0xb4, 0xa7, 0xd0, 0x59, 0x01, 0x20, 0x31,
	0x86, 0x6b, 0xdf, 0xe3, 0x96, 0xdd, 0xd6, 0x33, 0xf4, 0xce, 0x33, 0x46, 0x25, 0x6b, 0x52, 0x6c,
	0x83, 0xbe, 0x5e, 0x0c, 0x20, 0x75, 0x80, 0x62, 0x67, 0x36, 0xb4, 0xf5, 0x29, 0x21, 0xef, 0x1b,
	0x79, 0x68, 0xb7, 0x12, 0x3a, 0xcb, 0x55, 0xb7, 0x70, 0x35, 0xe1, 0x78, 0x35, 0xa0, 0x77, 0x2b,
	0xc2, 0x86, 0x45, 0x54, 0xfe, 0x5b, 0x05, 0xa8, 0xf5, 0xd3, 0x62, 0xea, 0x40, 0xff, 0x5f, 0xcc,
	0x0c, 0x7a, 0x17, 0x2c, 0x61, 0x7f, 0xda, 0x8b, 0x75, 0x09, 0xa4, 0x1e, 0xfa, 0xbb, 0xbd, 0x9d,
	0x1d, 0x3f, 0x1c, 0xcd, 0x63, 0x19, 0x29, 0x7f, 0xa9, 0x3b, 0x3e, 0x95, 0x41, 0x14, 0xf0, 0x4c,
	0x38, 0x22, 0x51, 0xa9, 0xcf, 0xb2, 0x03, 0x7d, 0x6d, 0xa1, 0xe3, 0xab, 0x38, 0x09, 0x9d, 0x39,
	0x77, 0x74, 0x9a, 0xaf, 0xaf, 0xad, 0xc3, 0x8f, 0x00, 0x00, 0x00, 0xff, 0xff, 0xf2, 0x55, 0x8f,
	0xe2, 0xdb, 0x04, 0x00, 0x00,
}
