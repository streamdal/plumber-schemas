// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.6
// source: ps_common_validation.proto

package common

import (
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

type Validation struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	XId      string              `protobuf:"bytes,1,opt,name=_id,json=Id,proto3" json:"_id,omitempty"`
	SchemaId string              `protobuf:"bytes,2,opt,name=schema_id,json=schemaId,proto3" json:"schema_id,omitempty"`
	Fields   []*Validation_Field `protobuf:"bytes,3,rep,name=fields,proto3" json:"fields,omitempty"`
}

func (x *Validation) Reset() {
	*x = Validation{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_common_validation_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Validation) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Validation) ProtoMessage() {}

func (x *Validation) ProtoReflect() protoreflect.Message {
	mi := &file_ps_common_validation_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Validation.ProtoReflect.Descriptor instead.
func (*Validation) Descriptor() ([]byte, []int) {
	return file_ps_common_validation_proto_rawDescGZIP(), []int{0}
}

func (x *Validation) GetXId() string {
	if x != nil {
		return x.XId
	}
	return ""
}

func (x *Validation) GetSchemaId() string {
	if x != nil {
		return x.SchemaId
	}
	return ""
}

func (x *Validation) GetFields() []*Validation_Field {
	if x != nil {
		return x.Fields
	}
	return nil
}

type Validation_Field struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// path in our jsonquery filter syntax
	Path string `protobuf:"bytes,1,opt,name=path,proto3" json:"path,omitempty"`
	// https://github.com/streamdal/lucene2x/blob/55f43862dfc294d5594758cba6a5c0ba088c0040/jsonquery/validate.go#L22
	ValidationType string `protobuf:"bytes,2,opt,name=validation_type,json=validationType,proto3" json:"validation_type,omitempty"`
	// For Regex / HasPrefix / HasSuffix / StringContains validation types only. Ignored for all others
	MatchValue string `protobuf:"bytes,3,opt,name=match_value,json=matchValue,proto3" json:"match_value,omitempty"`
}

func (x *Validation_Field) Reset() {
	*x = Validation_Field{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_common_validation_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Validation_Field) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Validation_Field) ProtoMessage() {}

func (x *Validation_Field) ProtoReflect() protoreflect.Message {
	mi := &file_ps_common_validation_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Validation_Field.ProtoReflect.Descriptor instead.
func (*Validation_Field) Descriptor() ([]byte, []int) {
	return file_ps_common_validation_proto_rawDescGZIP(), []int{0, 0}
}

func (x *Validation_Field) GetPath() string {
	if x != nil {
		return x.Path
	}
	return ""
}

func (x *Validation_Field) GetValidationType() string {
	if x != nil {
		return x.ValidationType
	}
	return ""
}

func (x *Validation_Field) GetMatchValue() string {
	if x != nil {
		return x.MatchValue
	}
	return ""
}

var File_ps_common_validation_proto protoreflect.FileDescriptor

var file_ps_common_validation_proto_rawDesc = []byte{
	0x0a, 0x1a, 0x70, 0x73, 0x5f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x5f, 0x76, 0x61, 0x6c, 0x69,
	0x64, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x22, 0xda, 0x01, 0x0a, 0x0a,
	0x56, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0f, 0x0a, 0x03, 0x5f, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x49, 0x64, 0x12, 0x1b, 0x0a, 0x09, 0x73,
	0x63, 0x68, 0x65, 0x6d, 0x61, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08,
	0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x49, 0x64, 0x12, 0x37, 0x0a, 0x06, 0x66, 0x69, 0x65, 0x6c,
	0x64, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x56, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x52, 0x06, 0x66, 0x69, 0x65, 0x6c, 0x64,
	0x73, 0x1a, 0x65, 0x0a, 0x05, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x70, 0x61,
	0x74, 0x68, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x70, 0x61, 0x74, 0x68, 0x12, 0x27,
	0x0a, 0x0f, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x74, 0x79, 0x70,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0e, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x12, 0x1f, 0x0a, 0x0b, 0x6d, 0x61, 0x74, 0x63, 0x68,
	0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x6d, 0x61,
	0x74, 0x63, 0x68, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x42, 0x3d, 0x5a, 0x3b, 0x67, 0x69, 0x74, 0x68,
	0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x64, 0x61, 0x6c,
	0x2f, 0x70, 0x6c, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x2d, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x73,
	0x2f, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x2f, 0x67, 0x6f, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73,
	0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ps_common_validation_proto_rawDescOnce sync.Once
	file_ps_common_validation_proto_rawDescData = file_ps_common_validation_proto_rawDesc
)

func file_ps_common_validation_proto_rawDescGZIP() []byte {
	file_ps_common_validation_proto_rawDescOnce.Do(func() {
		file_ps_common_validation_proto_rawDescData = protoimpl.X.CompressGZIP(file_ps_common_validation_proto_rawDescData)
	})
	return file_ps_common_validation_proto_rawDescData
}

var file_ps_common_validation_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_ps_common_validation_proto_goTypes = []interface{}{
	(*Validation)(nil),       // 0: protos.common.Validation
	(*Validation_Field)(nil), // 1: protos.common.Validation.Field
}
var file_ps_common_validation_proto_depIdxs = []int32{
	1, // 0: protos.common.Validation.fields:type_name -> protos.common.Validation.Field
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_ps_common_validation_proto_init() }
func file_ps_common_validation_proto_init() {
	if File_ps_common_validation_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_ps_common_validation_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Validation); i {
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
		file_ps_common_validation_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Validation_Field); i {
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
			RawDescriptor: file_ps_common_validation_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ps_common_validation_proto_goTypes,
		DependencyIndexes: file_ps_common_validation_proto_depIdxs,
		MessageInfos:      file_ps_common_validation_proto_msgTypes,
	}.Build()
	File_ps_common_validation_proto = out.File
	file_ps_common_validation_proto_rawDesc = nil
	file_ps_common_validation_proto_goTypes = nil
	file_ps_common_validation_proto_depIdxs = nil
}
