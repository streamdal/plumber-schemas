// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.6
// source: records/ps_records_kafka.proto

package records

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

type KafkaHeader struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Key   string `protobuf:"bytes,1,opt,name=key,proto3" json:"key,omitempty"`
	Value string `protobuf:"bytes,2,opt,name=value,proto3" json:"value,omitempty"`
}

func (x *KafkaHeader) Reset() {
	*x = KafkaHeader{}
	if protoimpl.UnsafeEnabled {
		mi := &file_records_ps_records_kafka_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *KafkaHeader) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*KafkaHeader) ProtoMessage() {}

func (x *KafkaHeader) ProtoReflect() protoreflect.Message {
	mi := &file_records_ps_records_kafka_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use KafkaHeader.ProtoReflect.Descriptor instead.
func (*KafkaHeader) Descriptor() ([]byte, []int) {
	return file_records_ps_records_kafka_proto_rawDescGZIP(), []int{0}
}

func (x *KafkaHeader) GetKey() string {
	if x != nil {
		return x.Key
	}
	return ""
}

func (x *KafkaHeader) GetValue() string {
	if x != nil {
		return x.Value
	}
	return ""
}

type Kafka struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Topic     string         `protobuf:"bytes,1,opt,name=topic,proto3" json:"topic,omitempty"`
	Key       []byte         `protobuf:"bytes,2,opt,name=key,proto3" json:"key,omitempty"`
	Value     []byte         `protobuf:"bytes,3,opt,name=value,proto3" json:"value,omitempty"`
	Timestamp int64          `protobuf:"varint,4,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	Offset    int64          `protobuf:"varint,5,opt,name=offset,proto3" json:"offset,omitempty"`
	Partition int32          `protobuf:"varint,6,opt,name=partition,proto3" json:"partition,omitempty"`
	Headers   []*KafkaHeader `protobuf:"bytes,7,rep,name=headers,proto3" json:"headers,omitempty"`
}

func (x *Kafka) Reset() {
	*x = Kafka{}
	if protoimpl.UnsafeEnabled {
		mi := &file_records_ps_records_kafka_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Kafka) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Kafka) ProtoMessage() {}

func (x *Kafka) ProtoReflect() protoreflect.Message {
	mi := &file_records_ps_records_kafka_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Kafka.ProtoReflect.Descriptor instead.
func (*Kafka) Descriptor() ([]byte, []int) {
	return file_records_ps_records_kafka_proto_rawDescGZIP(), []int{1}
}

func (x *Kafka) GetTopic() string {
	if x != nil {
		return x.Topic
	}
	return ""
}

func (x *Kafka) GetKey() []byte {
	if x != nil {
		return x.Key
	}
	return nil
}

func (x *Kafka) GetValue() []byte {
	if x != nil {
		return x.Value
	}
	return nil
}

func (x *Kafka) GetTimestamp() int64 {
	if x != nil {
		return x.Timestamp
	}
	return 0
}

func (x *Kafka) GetOffset() int64 {
	if x != nil {
		return x.Offset
	}
	return 0
}

func (x *Kafka) GetPartition() int32 {
	if x != nil {
		return x.Partition
	}
	return 0
}

func (x *Kafka) GetHeaders() []*KafkaHeader {
	if x != nil {
		return x.Headers
	}
	return nil
}

var File_records_ps_records_kafka_proto protoreflect.FileDescriptor

var file_records_ps_records_kafka_proto_rawDesc = []byte{
	0x0a, 0x1e, 0x72, 0x65, 0x63, 0x6f, 0x72, 0x64, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x72, 0x65, 0x63,
	0x6f, 0x72, 0x64, 0x73, 0x5f, 0x6b, 0x61, 0x66, 0x6b, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x0e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x72, 0x65, 0x63, 0x6f, 0x72, 0x64, 0x73,
	0x22, 0x35, 0x0a, 0x0b, 0x4b, 0x61, 0x66, 0x6b, 0x61, 0x48, 0x65, 0x61, 0x64, 0x65, 0x72, 0x12,
	0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65,
	0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x22, 0xd0, 0x01, 0x0a, 0x05, 0x4b, 0x61, 0x66, 0x6b,
	0x61, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x70, 0x69, 0x63, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x05, 0x74, 0x6f, 0x70, 0x69, 0x63, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0c, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c,
	0x75, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x12,
	0x1c, 0x0a, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x03, 0x52, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x12, 0x16, 0x0a,
	0x06, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x03, 0x52, 0x06, 0x6f,
	0x66, 0x66, 0x73, 0x65, 0x74, 0x12, 0x1c, 0x0a, 0x09, 0x70, 0x61, 0x72, 0x74, 0x69, 0x74, 0x69,
	0x6f, 0x6e, 0x18, 0x06, 0x20, 0x01, 0x28, 0x05, 0x52, 0x09, 0x70, 0x61, 0x72, 0x74, 0x69, 0x74,
	0x69, 0x6f, 0x6e, 0x12, 0x35, 0x0a, 0x07, 0x68, 0x65, 0x61, 0x64, 0x65, 0x72, 0x73, 0x18, 0x07,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x72, 0x65,
	0x63, 0x6f, 0x72, 0x64, 0x73, 0x2e, 0x4b, 0x61, 0x66, 0x6b, 0x61, 0x48, 0x65, 0x61, 0x64, 0x65,
	0x72, 0x52, 0x07, 0x68, 0x65, 0x61, 0x64, 0x65, 0x72, 0x73, 0x42, 0x3e, 0x5a, 0x3c, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x64,
	0x61, 0x6c, 0x2f, 0x70, 0x6c, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x2d, 0x73, 0x63, 0x68, 0x65, 0x6d,
	0x61, 0x73, 0x2f, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x2f, 0x67, 0x6f, 0x2f, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x73, 0x2f, 0x72, 0x65, 0x63, 0x6f, 0x72, 0x64, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_records_ps_records_kafka_proto_rawDescOnce sync.Once
	file_records_ps_records_kafka_proto_rawDescData = file_records_ps_records_kafka_proto_rawDesc
)

func file_records_ps_records_kafka_proto_rawDescGZIP() []byte {
	file_records_ps_records_kafka_proto_rawDescOnce.Do(func() {
		file_records_ps_records_kafka_proto_rawDescData = protoimpl.X.CompressGZIP(file_records_ps_records_kafka_proto_rawDescData)
	})
	return file_records_ps_records_kafka_proto_rawDescData
}

var file_records_ps_records_kafka_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_records_ps_records_kafka_proto_goTypes = []interface{}{
	(*KafkaHeader)(nil), // 0: protos.records.KafkaHeader
	(*Kafka)(nil),       // 1: protos.records.Kafka
}
var file_records_ps_records_kafka_proto_depIdxs = []int32{
	0, // 0: protos.records.Kafka.headers:type_name -> protos.records.KafkaHeader
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_records_ps_records_kafka_proto_init() }
func file_records_ps_records_kafka_proto_init() {
	if File_records_ps_records_kafka_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_records_ps_records_kafka_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*KafkaHeader); i {
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
		file_records_ps_records_kafka_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Kafka); i {
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
			RawDescriptor: file_records_ps_records_kafka_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_records_ps_records_kafka_proto_goTypes,
		DependencyIndexes: file_records_ps_records_kafka_proto_depIdxs,
		MessageInfos:      file_records_ps_records_kafka_proto_msgTypes,
	}.Build()
	File_records_ps_records_kafka_proto = out.File
	file_records_ps_records_kafka_proto_rawDesc = nil
	file_records_ps_records_kafka_proto_goTypes = nil
	file_records_ps_records_kafka_proto_depIdxs = nil
}
