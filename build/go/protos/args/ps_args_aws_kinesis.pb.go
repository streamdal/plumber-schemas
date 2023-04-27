// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.6
// source: ps_args_aws_kinesis.proto

package args

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

type AWSKinesisConn struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// @gotags: kong:"env=AWS_DEFAULT_REGION,hidden"
	AwsRegion string `protobuf:"bytes,1,opt,name=aws_region,json=awsRegion,proto3" json:"aws_region,omitempty" kong:"env=AWS_DEFAULT_REGION,hidden"`
	// @gotags: kong:"env=AWS_ACCESS_KEY_ID,hidden"
	AwsAccessKeyId string `protobuf:"bytes,2,opt,name=aws_access_key_id,json=awsAccessKeyId,proto3" json:"aws_access_key_id,omitempty" kong:"env=AWS_ACCESS_KEY_ID,hidden"`
	// @gotags: kong:"env=AWS_SECRET_ACCESS_KEY,hidden"
	AwsSecretAccessKey string `protobuf:"bytes,3,opt,name=aws_secret_access_key,json=awsSecretAccessKey,proto3" json:"aws_secret_access_key,omitempty" kong:"env=AWS_SECRET_ACCESS_KEY,hidden"`
	// @gotags: kong:"env=AWS_PROFILE,hidden"
	AwsProfile string `protobuf:"bytes,4,opt,name=aws_profile,json=awsProfile,proto3" json:"aws_profile,omitempty" kong:"env=AWS_PROFILE,hidden"`
}

func (x *AWSKinesisConn) Reset() {
	*x = AWSKinesisConn{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_args_aws_kinesis_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AWSKinesisConn) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AWSKinesisConn) ProtoMessage() {}

func (x *AWSKinesisConn) ProtoReflect() protoreflect.Message {
	mi := &file_ps_args_aws_kinesis_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AWSKinesisConn.ProtoReflect.Descriptor instead.
func (*AWSKinesisConn) Descriptor() ([]byte, []int) {
	return file_ps_args_aws_kinesis_proto_rawDescGZIP(), []int{0}
}

func (x *AWSKinesisConn) GetAwsRegion() string {
	if x != nil {
		return x.AwsRegion
	}
	return ""
}

func (x *AWSKinesisConn) GetAwsAccessKeyId() string {
	if x != nil {
		return x.AwsAccessKeyId
	}
	return ""
}

func (x *AWSKinesisConn) GetAwsSecretAccessKey() string {
	if x != nil {
		return x.AwsSecretAccessKey
	}
	return ""
}

func (x *AWSKinesisConn) GetAwsProfile() string {
	if x != nil {
		return x.AwsProfile
	}
	return ""
}

type AWSKinesisReadArgs struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// @gotags: kong:"help='Stream Name',required"
	Stream string `protobuf:"bytes,1,opt,name=stream,proto3" json:"stream,omitempty" kong:"help='Stream Name',required"`
	// @gotags: kong:"help='Shard ID. If empty, will read from all shards'"
	Shard string `protobuf:"bytes,2,opt,name=shard,proto3" json:"shard,omitempty" kong:"help='Shard ID. If empty, will read from all shards'"`
	// @gotags: kong:"help='Maximum number of records to read from kinesis',default=1"
	MaxRecords int64 `protobuf:"varint,3,opt,name=max_records,json=maxRecords,proto3" json:"max_records,omitempty" kong:"help='Maximum number of records to read from kinesis',default=1"`
	// @gotags: kong:"help='Deliver starting at this timestamp',xor=kinesis_delivery_option"
	ReadFromTimestamp int64 `protobuf:"varint,4,opt,name=read_from_timestamp,json=readFromTimestamp,proto3" json:"read_from_timestamp,omitempty" kong:"help='Deliver starting at this timestamp',xor=kinesis_delivery_option"`
	// @gotags: kong:"help='Deliver messages starting at sequence number',xor=kinesis_delivery_option"
	ReadSequenceNumber string `protobuf:"bytes,5,opt,name=read_sequence_number,json=readSequenceNumber,proto3" json:"read_sequence_number,omitempty" kong:"help='Deliver messages starting at sequence number',xor=kinesis_delivery_option"`
	// @gotags: kong:"help='Deliver messages starting after this sequence number',xor=kinesis_delivery_option"
	ReadAfterSequenceNumber string `protobuf:"bytes,6,opt,name=read_after_sequence_number,json=readAfterSequenceNumber,proto3" json:"read_after_sequence_number,omitempty" kong:"help='Deliver messages starting after this sequence number',xor=kinesis_delivery_option"`
	// @gotags: kong:"help='Deliver messages starting at the last untrimmed record in the shard in the system, which is the oldest data record in the shard.',xor=kinesis_delivery_option"
	ReadTrimHorizon bool `protobuf:"varint,7,opt,name=read_trim_horizon,json=readTrimHorizon,proto3" json:"read_trim_horizon,omitempty" kong:"help='Deliver messages starting at the last untrimmed record in the shard in the system, which is the oldest data record in the shard.',xor=kinesis_delivery_option"`
	// @gotags: kong:"help='Deliver messages after the most recent record',xor=kinesis_delivery_option"
	ReadLatest bool `protobuf:"varint,8,opt,name=read_latest,json=readLatest,proto3" json:"read_latest,omitempty" kong:"help='Deliver messages after the most recent record',xor=kinesis_delivery_option"`
}

func (x *AWSKinesisReadArgs) Reset() {
	*x = AWSKinesisReadArgs{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_args_aws_kinesis_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AWSKinesisReadArgs) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AWSKinesisReadArgs) ProtoMessage() {}

func (x *AWSKinesisReadArgs) ProtoReflect() protoreflect.Message {
	mi := &file_ps_args_aws_kinesis_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AWSKinesisReadArgs.ProtoReflect.Descriptor instead.
func (*AWSKinesisReadArgs) Descriptor() ([]byte, []int) {
	return file_ps_args_aws_kinesis_proto_rawDescGZIP(), []int{1}
}

func (x *AWSKinesisReadArgs) GetStream() string {
	if x != nil {
		return x.Stream
	}
	return ""
}

func (x *AWSKinesisReadArgs) GetShard() string {
	if x != nil {
		return x.Shard
	}
	return ""
}

func (x *AWSKinesisReadArgs) GetMaxRecords() int64 {
	if x != nil {
		return x.MaxRecords
	}
	return 0
}

func (x *AWSKinesisReadArgs) GetReadFromTimestamp() int64 {
	if x != nil {
		return x.ReadFromTimestamp
	}
	return 0
}

func (x *AWSKinesisReadArgs) GetReadSequenceNumber() string {
	if x != nil {
		return x.ReadSequenceNumber
	}
	return ""
}

func (x *AWSKinesisReadArgs) GetReadAfterSequenceNumber() string {
	if x != nil {
		return x.ReadAfterSequenceNumber
	}
	return ""
}

func (x *AWSKinesisReadArgs) GetReadTrimHorizon() bool {
	if x != nil {
		return x.ReadTrimHorizon
	}
	return false
}

func (x *AWSKinesisReadArgs) GetReadLatest() bool {
	if x != nil {
		return x.ReadLatest
	}
	return false
}

type AWSKinesisWriteArgs struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// @gotags: kong:"help='Stream Name',required"
	Stream string `protobuf:"bytes,1,opt,name=stream,proto3" json:"stream,omitempty" kong:"help='Stream Name',required"`
	// @gotags: kong:"help='Partition Key',required"
	PartitionKey string `protobuf:"bytes,2,opt,name=partition_key,json=partitionKey,proto3" json:"partition_key,omitempty" kong:"help='Partition Key',required"`
	// @gotags: kong:"help='Sequence number for ordering'"
	SequenceNumber string `protobuf:"bytes,3,opt,name=sequence_number,json=sequenceNumber,proto3" json:"sequence_number,omitempty" kong:"help='Sequence number for ordering'"`
}

func (x *AWSKinesisWriteArgs) Reset() {
	*x = AWSKinesisWriteArgs{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ps_args_aws_kinesis_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AWSKinesisWriteArgs) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AWSKinesisWriteArgs) ProtoMessage() {}

func (x *AWSKinesisWriteArgs) ProtoReflect() protoreflect.Message {
	mi := &file_ps_args_aws_kinesis_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AWSKinesisWriteArgs.ProtoReflect.Descriptor instead.
func (*AWSKinesisWriteArgs) Descriptor() ([]byte, []int) {
	return file_ps_args_aws_kinesis_proto_rawDescGZIP(), []int{2}
}

func (x *AWSKinesisWriteArgs) GetStream() string {
	if x != nil {
		return x.Stream
	}
	return ""
}

func (x *AWSKinesisWriteArgs) GetPartitionKey() string {
	if x != nil {
		return x.PartitionKey
	}
	return ""
}

func (x *AWSKinesisWriteArgs) GetSequenceNumber() string {
	if x != nil {
		return x.SequenceNumber
	}
	return ""
}

var File_ps_args_aws_kinesis_proto protoreflect.FileDescriptor

var file_ps_args_aws_kinesis_proto_rawDesc = []byte{
	0x0a, 0x19, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x61, 0x77, 0x73, 0x5f, 0x6b, 0x69,
	0x6e, 0x65, 0x73, 0x69, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x22, 0xae, 0x01, 0x0a, 0x0e, 0x41, 0x57, 0x53,
	0x4b, 0x69, 0x6e, 0x65, 0x73, 0x69, 0x73, 0x43, 0x6f, 0x6e, 0x6e, 0x12, 0x1d, 0x0a, 0x0a, 0x61,
	0x77, 0x73, 0x5f, 0x72, 0x65, 0x67, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x09, 0x61, 0x77, 0x73, 0x52, 0x65, 0x67, 0x69, 0x6f, 0x6e, 0x12, 0x29, 0x0a, 0x11, 0x61, 0x77,
	0x73, 0x5f, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x5f, 0x6b, 0x65, 0x79, 0x5f, 0x69, 0x64, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0e, 0x61, 0x77, 0x73, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73,
	0x4b, 0x65, 0x79, 0x49, 0x64, 0x12, 0x31, 0x0a, 0x15, 0x61, 0x77, 0x73, 0x5f, 0x73, 0x65, 0x63,
	0x72, 0x65, 0x74, 0x5f, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x5f, 0x6b, 0x65, 0x79, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x12, 0x61, 0x77, 0x73, 0x53, 0x65, 0x63, 0x72, 0x65, 0x74, 0x41,
	0x63, 0x63, 0x65, 0x73, 0x73, 0x4b, 0x65, 0x79, 0x12, 0x1f, 0x0a, 0x0b, 0x61, 0x77, 0x73, 0x5f,
	0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x61,
	0x77, 0x73, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x22, 0xcf, 0x02, 0x0a, 0x12, 0x41, 0x57,
	0x53, 0x4b, 0x69, 0x6e, 0x65, 0x73, 0x69, 0x73, 0x52, 0x65, 0x61, 0x64, 0x41, 0x72, 0x67, 0x73,
	0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x06, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x12, 0x14, 0x0a, 0x05, 0x73, 0x68, 0x61, 0x72,
	0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x73, 0x68, 0x61, 0x72, 0x64, 0x12, 0x1f,
	0x0a, 0x0b, 0x6d, 0x61, 0x78, 0x5f, 0x72, 0x65, 0x63, 0x6f, 0x72, 0x64, 0x73, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x03, 0x52, 0x0a, 0x6d, 0x61, 0x78, 0x52, 0x65, 0x63, 0x6f, 0x72, 0x64, 0x73, 0x12,
	0x2e, 0x0a, 0x13, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x66, 0x72, 0x6f, 0x6d, 0x5f, 0x74, 0x69, 0x6d,
	0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52, 0x11, 0x72, 0x65,
	0x61, 0x64, 0x46, 0x72, 0x6f, 0x6d, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x12,
	0x30, 0x0a, 0x14, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x73, 0x65, 0x71, 0x75, 0x65, 0x6e, 0x63, 0x65,
	0x5f, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x12, 0x72,
	0x65, 0x61, 0x64, 0x53, 0x65, 0x71, 0x75, 0x65, 0x6e, 0x63, 0x65, 0x4e, 0x75, 0x6d, 0x62, 0x65,
	0x72, 0x12, 0x3b, 0x0a, 0x1a, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x61, 0x66, 0x74, 0x65, 0x72, 0x5f,
	0x73, 0x65, 0x71, 0x75, 0x65, 0x6e, 0x63, 0x65, 0x5f, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x18,
	0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x17, 0x72, 0x65, 0x61, 0x64, 0x41, 0x66, 0x74, 0x65, 0x72,
	0x53, 0x65, 0x71, 0x75, 0x65, 0x6e, 0x63, 0x65, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x12, 0x2a,
	0x0a, 0x11, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x74, 0x72, 0x69, 0x6d, 0x5f, 0x68, 0x6f, 0x72, 0x69,
	0x7a, 0x6f, 0x6e, 0x18, 0x07, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0f, 0x72, 0x65, 0x61, 0x64, 0x54,
	0x72, 0x69, 0x6d, 0x48, 0x6f, 0x72, 0x69, 0x7a, 0x6f, 0x6e, 0x12, 0x1f, 0x0a, 0x0b, 0x72, 0x65,
	0x61, 0x64, 0x5f, 0x6c, 0x61, 0x74, 0x65, 0x73, 0x74, 0x18, 0x08, 0x20, 0x01, 0x28, 0x08, 0x52,
	0x0a, 0x72, 0x65, 0x61, 0x64, 0x4c, 0x61, 0x74, 0x65, 0x73, 0x74, 0x22, 0x7b, 0x0a, 0x13, 0x41,
	0x57, 0x53, 0x4b, 0x69, 0x6e, 0x65, 0x73, 0x69, 0x73, 0x57, 0x72, 0x69, 0x74, 0x65, 0x41, 0x72,
	0x67, 0x73, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x06, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x12, 0x23, 0x0a, 0x0d, 0x70, 0x61,
	0x72, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x6b, 0x65, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0c, 0x70, 0x61, 0x72, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x4b, 0x65, 0x79, 0x12,
	0x27, 0x0a, 0x0f, 0x73, 0x65, 0x71, 0x75, 0x65, 0x6e, 0x63, 0x65, 0x5f, 0x6e, 0x75, 0x6d, 0x62,
	0x65, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0e, 0x73, 0x65, 0x71, 0x75, 0x65, 0x6e,
	0x63, 0x65, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x42, 0x3b, 0x5a, 0x39, 0x67, 0x69, 0x74, 0x68,
	0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x64, 0x61, 0x6c,
	0x2f, 0x70, 0x6c, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x2d, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x73,
	0x2f, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x2f, 0x67, 0x6f, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73,
	0x2f, 0x61, 0x72, 0x67, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ps_args_aws_kinesis_proto_rawDescOnce sync.Once
	file_ps_args_aws_kinesis_proto_rawDescData = file_ps_args_aws_kinesis_proto_rawDesc
)

func file_ps_args_aws_kinesis_proto_rawDescGZIP() []byte {
	file_ps_args_aws_kinesis_proto_rawDescOnce.Do(func() {
		file_ps_args_aws_kinesis_proto_rawDescData = protoimpl.X.CompressGZIP(file_ps_args_aws_kinesis_proto_rawDescData)
	})
	return file_ps_args_aws_kinesis_proto_rawDescData
}

var file_ps_args_aws_kinesis_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_ps_args_aws_kinesis_proto_goTypes = []interface{}{
	(*AWSKinesisConn)(nil),      // 0: protos.args.AWSKinesisConn
	(*AWSKinesisReadArgs)(nil),  // 1: protos.args.AWSKinesisReadArgs
	(*AWSKinesisWriteArgs)(nil), // 2: protos.args.AWSKinesisWriteArgs
}
var file_ps_args_aws_kinesis_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_ps_args_aws_kinesis_proto_init() }
func file_ps_args_aws_kinesis_proto_init() {
	if File_ps_args_aws_kinesis_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_ps_args_aws_kinesis_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AWSKinesisConn); i {
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
		file_ps_args_aws_kinesis_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AWSKinesisReadArgs); i {
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
		file_ps_args_aws_kinesis_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AWSKinesisWriteArgs); i {
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
			RawDescriptor: file_ps_args_aws_kinesis_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ps_args_aws_kinesis_proto_goTypes,
		DependencyIndexes: file_ps_args_aws_kinesis_proto_depIdxs,
		MessageInfos:      file_ps_args_aws_kinesis_proto_msgTypes,
	}.Build()
	File_ps_args_aws_kinesis_proto = out.File
	file_ps_args_aws_kinesis_proto_rawDesc = nil
	file_ps_args_aws_kinesis_proto_goTypes = nil
	file_ps_args_aws_kinesis_proto_depIdxs = nil
}
