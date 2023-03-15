// Code generated by protoc-gen-go. DO NOT EDIT.
// source: ps_args_kafka.proto

package args

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

type SASLType int32

const (
	SASLType_NONE  SASLType = 0
	SASLType_PLAIN SASLType = 1
	SASLType_SCRAM SASLType = 2
)

var SASLType_name = map[int32]string{
	0: "NONE",
	1: "PLAIN",
	2: "SCRAM",
}

var SASLType_value = map[string]int32{
	"NONE":  0,
	"PLAIN": 1,
	"SCRAM": 2,
}

func (x SASLType) String() string {
	return proto.EnumName(SASLType_name, int32(x))
}

func (SASLType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_5f98a21d9d819f0c, []int{0}
}

type KafkaConn struct {
	// @gotags: kong:"help='Kafka broker address (you may specify this flag multiple times)',env=PLUMBER_RELAY_KAFKA_ADDRESS,default='localhost:9092',required"
	Address []string `protobuf:"bytes,1,rep,name=address,proto3" json:"address,omitempty" kong:"help='Kafka broker address (you may specify this flag multiple times)',env=PLUMBER_RELAY_KAFKA_ADDRESS,default='localhost:9092',required"`
	// @gotags: kong:"help='Connect timeout',env=PLUMBER_RELAY_TIMEOUT_SECONDS,default=10"
	TimeoutSeconds int32 `protobuf:"varint,2,opt,name=timeout_seconds,json=timeoutSeconds,proto3" json:"timeout_seconds,omitempty" kong:"help='Connect timeout',env=PLUMBER_RELAY_TIMEOUT_SECONDS,default=10"`
	// @gotags: kong:"help='Enable TLS usage',env=PLUMBER_RELAY_USE_TLS"
	UseTls bool `protobuf:"varint,3,opt,name=use_tls,json=useTls,proto3" json:"use_tls,omitempty" kong:"help='Enable TLS usage',env=PLUMBER_RELAY_USE_TLS"`
	// @gotags: kong:"help='Allow insecure TLS usage',env=PLUMBER_RELAY_KAFKA_INSECURE_TLS"
	TlsSkipVerify bool `protobuf:"varint,4,opt,name=tls_skip_verify,json=tlsSkipVerify,proto3" json:"tls_skip_verify,omitempty" kong:"help='Allow insecure TLS usage',env=PLUMBER_RELAY_KAFKA_INSECURE_TLS"`
	// @gotags: kong:"help='SASL authentication type (options: none plain scram)',env=PLUMBER_RELAY_KAFKA_SASL_TYPE,type=pbenum,pbenum_lowercase,default=none"
	SaslType SASLType `protobuf:"varint,5,opt,name=sasl_type,json=saslType,proto3,enum=protos.args.SASLType" json:"sasl_type,omitempty" kong:"help='SASL authentication type (options: none plain scram)',env=PLUMBER_RELAY_KAFKA_SASL_TYPE,type=pbenum,pbenum_lowercase,default=none"`
	// @gotags: kong:"help='SASL Username',env=PLUMBER_RELAY_KAFKA_USERNAME"
	SaslUsername string `protobuf:"bytes,6,opt,name=sasl_username,json=saslUsername,proto3" json:"sasl_username,omitempty" kong:"help='SASL Username',env=PLUMBER_RELAY_KAFKA_USERNAME"`
	// Required if sasl_type is not NONE
	// @gotags: kong:"help='SASL Password. You will be prompted for the password if omitted',env=PLUMBER_RELAY_KAFKA_PASSWORD"
	SaslPassword         string   `protobuf:"bytes,7,opt,name=sasl_password,json=saslPassword,proto3" json:"sasl_password,omitempty" kong:"help='SASL Password. You will be prompted for the password if omitted',env=PLUMBER_RELAY_KAFKA_PASSWORD"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *KafkaConn) Reset()         { *m = KafkaConn{} }
func (m *KafkaConn) String() string { return proto.CompactTextString(m) }
func (*KafkaConn) ProtoMessage()    {}
func (*KafkaConn) Descriptor() ([]byte, []int) {
	return fileDescriptor_5f98a21d9d819f0c, []int{0}
}

func (m *KafkaConn) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_KafkaConn.Unmarshal(m, b)
}
func (m *KafkaConn) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_KafkaConn.Marshal(b, m, deterministic)
}
func (m *KafkaConn) XXX_Merge(src proto.Message) {
	xxx_messageInfo_KafkaConn.Merge(m, src)
}
func (m *KafkaConn) XXX_Size() int {
	return xxx_messageInfo_KafkaConn.Size(m)
}
func (m *KafkaConn) XXX_DiscardUnknown() {
	xxx_messageInfo_KafkaConn.DiscardUnknown(m)
}

var xxx_messageInfo_KafkaConn proto.InternalMessageInfo

func (m *KafkaConn) GetAddress() []string {
	if m != nil {
		return m.Address
	}
	return nil
}

func (m *KafkaConn) GetTimeoutSeconds() int32 {
	if m != nil {
		return m.TimeoutSeconds
	}
	return 0
}

func (m *KafkaConn) GetUseTls() bool {
	if m != nil {
		return m.UseTls
	}
	return false
}

func (m *KafkaConn) GetTlsSkipVerify() bool {
	if m != nil {
		return m.TlsSkipVerify
	}
	return false
}

func (m *KafkaConn) GetSaslType() SASLType {
	if m != nil {
		return m.SaslType
	}
	return SASLType_NONE
}

func (m *KafkaConn) GetSaslUsername() string {
	if m != nil {
		return m.SaslUsername
	}
	return ""
}

func (m *KafkaConn) GetSaslPassword() string {
	if m != nil {
		return m.SaslPassword
	}
	return ""
}

type KafkaReadArgs struct {
	// @gotags: kong:"help='Topic(s) to read from',required"
	Topics []string `protobuf:"bytes,1,rep,name=topics,proto3" json:"topics,omitempty" kong:"help='Topic(s) to read from',required"`
	// @gotags: kong:"help='Specify what offset the consumer should read from (only works if --use-consumer-group is false)',default=0"
	ReadOffset int64 `protobuf:"varint,2,opt,name=read_offset,json=readOffset,proto3" json:"read_offset,omitempty" kong:"help='Specify what offset the consumer should read from (only works if --use-consumer-group is false)',default=0"`
	// @gotags: kong:"help='Whether plumber should use a consumer group',default=true"
	UseConsumerGroup bool `protobuf:"varint,3,opt,name=use_consumer_group,json=useConsumerGroup,proto3" json:"use_consumer_group,omitempty" kong:"help='Whether plumber should use a consumer group',default=true"`
	// @gotags: kong:"help='Specify a specific group-id to use when reading from kafka',default=plumber"
	ConsumerGroupName string `protobuf:"bytes,4,opt,name=consumer_group_name,json=consumerGroupName,proto3" json:"consumer_group_name,omitempty" kong:"help='Specify a specific group-id to use when reading from kafka',default=plumber"`
	// @gotags: kong:"help='How long to wait for new data when reading batches of messages',default=1"
	MaxWaitSeconds int32 `protobuf:"varint,5,opt,name=max_wait_seconds,json=maxWaitSeconds,proto3" json:"max_wait_seconds,omitempty" kong:"help='How long to wait for new data when reading batches of messages',default=1"`
	// @gotags: kong:"help='Minimum number of bytes to fetch in a single kafka request (throughput optimization)',default=1"
	MinBytes int32 `protobuf:"varint,6,opt,name=min_bytes,json=minBytes,proto3" json:"min_bytes,omitempty" kong:"help='Minimum number of bytes to fetch in a single kafka request (throughput optimization)',default=1"`
	// @gotags: kong:"help='Maximum number of bytes to fetch in a single kafka request (throughput optimization)',default=1"
	MaxBytes int32 `protobuf:"varint,7,opt,name=max_bytes,json=maxBytes,proto3" json:"max_bytes,omitempty" kong:"help='Maximum number of bytes to fetch in a single kafka request (throughput optimization)',default=1"`
	// @gotags: kong:"help='How often to commit offsets to broker (0 = synchronous)',default=5"
	CommitIntervalSeconds int32 `protobuf:"varint,8,opt,name=commit_interval_seconds,json=commitIntervalSeconds,proto3" json:"commit_interval_seconds,omitempty" kong:"help='How often to commit offsets to broker (0 = synchronous)',default=5"`
	// @gotags: kong:"help='How long a coordinator will wait for member joins as part of a rebalance',default=0"
	RebalanceTimeoutSeconds int32 `protobuf:"varint,9,opt,name=rebalance_timeout_seconds,json=rebalanceTimeoutSeconds,proto3" json:"rebalance_timeout_seconds,omitempty" kong:"help='How long a coordinator will wait for member joins as part of a rebalance',default=0"`
	// @gotags: kong:"help='Internal library queue capacity (throughput optimization)',default=1"
	QueueCapacity int32 `protobuf:"varint,10,opt,name=queue_capacity,json=queueCapacity,proto3" json:"queue_capacity,omitempty" kong:"help='Internal library queue capacity (throughput optimization)',default=1"`
	// @gotags: kong:"help='Display consumer offset stats during read (only used in CLI mode)'"
	IncludeOffsetInfo bool `protobuf:"varint,11,opt,name=include_offset_info,json=includeOffsetInfo,proto3" json:"include_offset_info,omitempty" kong:"help='Display consumer offset stats during read (only used in CLI mode)'"`
	// @gotags: kong:"help='Only lookup consumer group lag (only used in CLI mode)',group=lag"
	Lag bool `protobuf:"varint,12,opt,name=lag,proto3" json:"lag,omitempty" kong:"help='Only lookup consumer group lag (only used in CLI mode)',group=lag"`
	// @gotags: kong:"help='What consumer group to lookup lag for (only used in CLI mode; required if --lag is set)',group=lag"
	LagConsumerGroup     string   `protobuf:"bytes,13,opt,name=lag_consumer_group,json=lagConsumerGroup,proto3" json:"lag_consumer_group,omitempty" kong:"help='What consumer group to lookup lag for (only used in CLI mode; required if --lag is set)',group=lag"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *KafkaReadArgs) Reset()         { *m = KafkaReadArgs{} }
func (m *KafkaReadArgs) String() string { return proto.CompactTextString(m) }
func (*KafkaReadArgs) ProtoMessage()    {}
func (*KafkaReadArgs) Descriptor() ([]byte, []int) {
	return fileDescriptor_5f98a21d9d819f0c, []int{1}
}

func (m *KafkaReadArgs) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_KafkaReadArgs.Unmarshal(m, b)
}
func (m *KafkaReadArgs) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_KafkaReadArgs.Marshal(b, m, deterministic)
}
func (m *KafkaReadArgs) XXX_Merge(src proto.Message) {
	xxx_messageInfo_KafkaReadArgs.Merge(m, src)
}
func (m *KafkaReadArgs) XXX_Size() int {
	return xxx_messageInfo_KafkaReadArgs.Size(m)
}
func (m *KafkaReadArgs) XXX_DiscardUnknown() {
	xxx_messageInfo_KafkaReadArgs.DiscardUnknown(m)
}

var xxx_messageInfo_KafkaReadArgs proto.InternalMessageInfo

func (m *KafkaReadArgs) GetTopics() []string {
	if m != nil {
		return m.Topics
	}
	return nil
}

func (m *KafkaReadArgs) GetReadOffset() int64 {
	if m != nil {
		return m.ReadOffset
	}
	return 0
}

func (m *KafkaReadArgs) GetUseConsumerGroup() bool {
	if m != nil {
		return m.UseConsumerGroup
	}
	return false
}

func (m *KafkaReadArgs) GetConsumerGroupName() string {
	if m != nil {
		return m.ConsumerGroupName
	}
	return ""
}

func (m *KafkaReadArgs) GetMaxWaitSeconds() int32 {
	if m != nil {
		return m.MaxWaitSeconds
	}
	return 0
}

func (m *KafkaReadArgs) GetMinBytes() int32 {
	if m != nil {
		return m.MinBytes
	}
	return 0
}

func (m *KafkaReadArgs) GetMaxBytes() int32 {
	if m != nil {
		return m.MaxBytes
	}
	return 0
}

func (m *KafkaReadArgs) GetCommitIntervalSeconds() int32 {
	if m != nil {
		return m.CommitIntervalSeconds
	}
	return 0
}

func (m *KafkaReadArgs) GetRebalanceTimeoutSeconds() int32 {
	if m != nil {
		return m.RebalanceTimeoutSeconds
	}
	return 0
}

func (m *KafkaReadArgs) GetQueueCapacity() int32 {
	if m != nil {
		return m.QueueCapacity
	}
	return 0
}

func (m *KafkaReadArgs) GetIncludeOffsetInfo() bool {
	if m != nil {
		return m.IncludeOffsetInfo
	}
	return false
}

func (m *KafkaReadArgs) GetLag() bool {
	if m != nil {
		return m.Lag
	}
	return false
}

func (m *KafkaReadArgs) GetLagConsumerGroup() string {
	if m != nil {
		return m.LagConsumerGroup
	}
	return ""
}

type KafkaWriteArgs struct {
	// @gotags: kong:"help='Key to write to kafka (optional)'"
	Key string `protobuf:"bytes,1,opt,name=key,proto3" json:"key,omitempty" kong:"help='Key to write to kafka (optional)'"`
	// @gotags: kong:"help='Add one or more headers (optional; repeat flags to specify multiple)'"
	Headers map[string]string `protobuf:"bytes,2,rep,name=headers,proto3" json:"headers,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3" kong:"help='Add one or more headers (optional; repeat flags to specify multiple)'"`
	// @gotags: kong:"help='Topic(s) to write to',required"
	Topics               []string `protobuf:"bytes,3,rep,name=topics,proto3" json:"topics,omitempty" kong:"help='Topic(s) to write to',required"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *KafkaWriteArgs) Reset()         { *m = KafkaWriteArgs{} }
func (m *KafkaWriteArgs) String() string { return proto.CompactTextString(m) }
func (*KafkaWriteArgs) ProtoMessage()    {}
func (*KafkaWriteArgs) Descriptor() ([]byte, []int) {
	return fileDescriptor_5f98a21d9d819f0c, []int{2}
}

func (m *KafkaWriteArgs) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_KafkaWriteArgs.Unmarshal(m, b)
}
func (m *KafkaWriteArgs) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_KafkaWriteArgs.Marshal(b, m, deterministic)
}
func (m *KafkaWriteArgs) XXX_Merge(src proto.Message) {
	xxx_messageInfo_KafkaWriteArgs.Merge(m, src)
}
func (m *KafkaWriteArgs) XXX_Size() int {
	return xxx_messageInfo_KafkaWriteArgs.Size(m)
}
func (m *KafkaWriteArgs) XXX_DiscardUnknown() {
	xxx_messageInfo_KafkaWriteArgs.DiscardUnknown(m)
}

var xxx_messageInfo_KafkaWriteArgs proto.InternalMessageInfo

func (m *KafkaWriteArgs) GetKey() string {
	if m != nil {
		return m.Key
	}
	return ""
}

func (m *KafkaWriteArgs) GetHeaders() map[string]string {
	if m != nil {
		return m.Headers
	}
	return nil
}

func (m *KafkaWriteArgs) GetTopics() []string {
	if m != nil {
		return m.Topics
	}
	return nil
}

// NOTE: Deprecated as of relay v2
type KafkaSourceArgs struct {
	// @gotags: kong:"help='Topic(s) to read, write or get lag stats for',env=PLUMBER_RELAY_KAFKA_TOPIC,required"
	Topics []string `protobuf:"bytes,1,rep,name=topics,proto3" json:"topics,omitempty" kong:"help='Topic(s) to read, write or get lag stats for',env=PLUMBER_RELAY_KAFKA_TOPIC,required"`
	// @gotags: kong:"help='Specify what offset the consumer should read from (only works if --use-consumer-group is false)',env=PLUMBER_RELAY_KAFKA_READ_OFFSET,default=0"
	ReadOffset int64 `protobuf:"varint,2,opt,name=read_offset,json=readOffset,proto3" json:"read_offset,omitempty" kong:"help='Specify what offset the consumer should read from (only works if --use-consumer-group is false)',env=PLUMBER_RELAY_KAFKA_READ_OFFSET,default=0"`
	// @gotags: kong:"help='Whether plumber should use a consumer group',env=PLUMBER_RELAY_KAFKA_USE_CONSUMER_GROUP,default=true"
	UseConsumerGroup bool `protobuf:"varint,3,opt,name=use_consumer_group,json=useConsumerGroup,proto3" json:"use_consumer_group,omitempty" kong:"help='Whether plumber should use a consumer group',env=PLUMBER_RELAY_KAFKA_USE_CONSUMER_GROUP,default=true"`
	// @gotags: kong:"help='Specify a specific group-id to use when reading from kafka',env=PLUMBER_RELAY_KAFKA_GROUP_ID,default=plumber"
	ConsumerGroupName string `protobuf:"bytes,4,opt,name=consumer_group_name,json=consumerGroupName,proto3" json:"consumer_group_name,omitempty" kong:"help='Specify a specific group-id to use when reading from kafka',env=PLUMBER_RELAY_KAFKA_GROUP_ID,default=plumber"`
	// @gotags: kong:"help='How long to wait for new data when reading batches of messages',env=PLUMBER_RELAY_KAFKA_MAX_WAIT,default=5"
	MaxWaitSeconds int32 `protobuf:"varint,5,opt,name=max_wait_seconds,json=maxWaitSeconds,proto3" json:"max_wait_seconds,omitempty" kong:"help='How long to wait for new data when reading batches of messages',env=PLUMBER_RELAY_KAFKA_MAX_WAIT,default=5"`
	// @gotags: kong:"help='Minimum number of bytes to fetch in a single kafka request (throughput optimization)',env=PLUMBER_RELAY_KAFKA_MIN_BYTES,default=1048576"
	MinBytes int32 `protobuf:"varint,6,opt,name=min_bytes,json=minBytes,proto3" json:"min_bytes,omitempty" kong:"help='Minimum number of bytes to fetch in a single kafka request (throughput optimization)',env=PLUMBER_RELAY_KAFKA_MIN_BYTES,default=1048576"`
	// @gotags: kong:"help='Maximum number of bytes to fetch in a single kafka request (throughput optimization)',env=PLUMBER_RELAY_KAFKA_MAX_BYTES,default=1048576"
	MaxBytes int32 `protobuf:"varint,7,opt,name=max_bytes,json=maxBytes,proto3" json:"max_bytes,omitempty" kong:"help='Maximum number of bytes to fetch in a single kafka request (throughput optimization)',env=PLUMBER_RELAY_KAFKA_MAX_BYTES,default=1048576"`
	// @gotags: kong:"help='How often to commit offsets to broker (0 = synchronous)',env=PLUMBER_RELAY_KAFKA_COMMIT_INTERVAL,default=5"
	CommitIntervalSeconds int32 `protobuf:"varint,8,opt,name=commit_interval_seconds,json=commitIntervalSeconds,proto3" json:"commit_interval_seconds,omitempty" kong:"help='How often to commit offsets to broker (0 = synchronous)',env=PLUMBER_RELAY_KAFKA_COMMIT_INTERVAL,default=5"`
	// @gotags: kong:"help='How long a coordinator will wait for member joins as part of a rebalance',env=PLUMBER_RELAY_KAFKA_REBALANCE_TIMEOUT,default=5"
	RebalanceTimeoutSeconds int32 `protobuf:"varint,9,opt,name=rebalance_timeout_seconds,json=rebalanceTimeoutSeconds,proto3" json:"rebalance_timeout_seconds,omitempty" kong:"help='How long a coordinator will wait for member joins as part of a rebalance',env=PLUMBER_RELAY_KAFKA_REBALANCE_TIMEOUT,default=5"`
	// @gotags: kong:"help='Internal library queue capacity (throughput optimization)',env=PLUMBER_RELAY_KAFKA_QUEUE_CAPACITY,default=1000"
	QueueCapacity        int32    `protobuf:"varint,10,opt,name=queue_capacity,json=queueCapacity,proto3" json:"queue_capacity,omitempty" kong:"help='Internal library queue capacity (throughput optimization)',env=PLUMBER_RELAY_KAFKA_QUEUE_CAPACITY,default=1000"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *KafkaSourceArgs) Reset()         { *m = KafkaSourceArgs{} }
func (m *KafkaSourceArgs) String() string { return proto.CompactTextString(m) }
func (*KafkaSourceArgs) ProtoMessage()    {}
func (*KafkaSourceArgs) Descriptor() ([]byte, []int) {
	return fileDescriptor_5f98a21d9d819f0c, []int{3}
}

func (m *KafkaSourceArgs) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_KafkaSourceArgs.Unmarshal(m, b)
}
func (m *KafkaSourceArgs) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_KafkaSourceArgs.Marshal(b, m, deterministic)
}
func (m *KafkaSourceArgs) XXX_Merge(src proto.Message) {
	xxx_messageInfo_KafkaSourceArgs.Merge(m, src)
}
func (m *KafkaSourceArgs) XXX_Size() int {
	return xxx_messageInfo_KafkaSourceArgs.Size(m)
}
func (m *KafkaSourceArgs) XXX_DiscardUnknown() {
	xxx_messageInfo_KafkaSourceArgs.DiscardUnknown(m)
}

var xxx_messageInfo_KafkaSourceArgs proto.InternalMessageInfo

func (m *KafkaSourceArgs) GetTopics() []string {
	if m != nil {
		return m.Topics
	}
	return nil
}

func (m *KafkaSourceArgs) GetReadOffset() int64 {
	if m != nil {
		return m.ReadOffset
	}
	return 0
}

func (m *KafkaSourceArgs) GetUseConsumerGroup() bool {
	if m != nil {
		return m.UseConsumerGroup
	}
	return false
}

func (m *KafkaSourceArgs) GetConsumerGroupName() string {
	if m != nil {
		return m.ConsumerGroupName
	}
	return ""
}

func (m *KafkaSourceArgs) GetMaxWaitSeconds() int32 {
	if m != nil {
		return m.MaxWaitSeconds
	}
	return 0
}

func (m *KafkaSourceArgs) GetMinBytes() int32 {
	if m != nil {
		return m.MinBytes
	}
	return 0
}

func (m *KafkaSourceArgs) GetMaxBytes() int32 {
	if m != nil {
		return m.MaxBytes
	}
	return 0
}

func (m *KafkaSourceArgs) GetCommitIntervalSeconds() int32 {
	if m != nil {
		return m.CommitIntervalSeconds
	}
	return 0
}

func (m *KafkaSourceArgs) GetRebalanceTimeoutSeconds() int32 {
	if m != nil {
		return m.RebalanceTimeoutSeconds
	}
	return 0
}

func (m *KafkaSourceArgs) GetQueueCapacity() int32 {
	if m != nil {
		return m.QueueCapacity
	}
	return 0
}

func init() {
	proto.RegisterEnum("protos.args.SASLType", SASLType_name, SASLType_value)
	proto.RegisterType((*KafkaConn)(nil), "protos.args.KafkaConn")
	proto.RegisterType((*KafkaReadArgs)(nil), "protos.args.KafkaReadArgs")
	proto.RegisterType((*KafkaWriteArgs)(nil), "protos.args.KafkaWriteArgs")
	proto.RegisterMapType((map[string]string)(nil), "protos.args.KafkaWriteArgs.HeadersEntry")
	proto.RegisterType((*KafkaSourceArgs)(nil), "protos.args.KafkaSourceArgs")
}

func init() { proto.RegisterFile("ps_args_kafka.proto", fileDescriptor_5f98a21d9d819f0c) }

var fileDescriptor_5f98a21d9d819f0c = []byte{
	// 692 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xec, 0x54, 0xdd, 0x6e, 0xd3, 0x30,
	0x18, 0x25, 0x4d, 0xff, 0xe2, 0xae, 0x5d, 0xe6, 0x31, 0x16, 0xe0, 0x82, 0xaa, 0x08, 0x88, 0x26,
	0x68, 0xa5, 0x21, 0x21, 0x18, 0x57, 0x5d, 0x35, 0xc1, 0xc4, 0xe8, 0xa6, 0x74, 0x30, 0x89, 0x1b,
	0xcb, 0x4d, 0xdc, 0xd4, 0x6a, 0x12, 0x07, 0xdb, 0xd9, 0xda, 0x87, 0xe0, 0x92, 0x67, 0xe0, 0x1d,
	0x78, 0x3a, 0x64, 0x27, 0xed, 0xda, 0x89, 0x07, 0xe0, 0x82, 0xab, 0xfa, 0x3b, 0xe7, 0x7c, 0x72,
	0x72, 0xce, 0x69, 0xc0, 0x6e, 0x2a, 0x10, 0xe6, 0xa1, 0x40, 0x33, 0x3c, 0x99, 0xe1, 0x6e, 0xca,
	0x99, 0x64, 0xb0, 0xa1, 0x7f, 0x44, 0x57, 0x11, 0x9d, 0x1f, 0x25, 0x60, 0x7d, 0x52, 0xe4, 0x80,
	0x25, 0x09, 0x74, 0x40, 0x0d, 0x07, 0x01, 0x27, 0x42, 0x38, 0x46, 0xdb, 0x74, 0x2d, 0x6f, 0x39,
	0xc2, 0x17, 0x60, 0x5b, 0xd2, 0x98, 0xb0, 0x4c, 0x22, 0x41, 0x7c, 0x96, 0x04, 0xc2, 0x29, 0xb5,
	0x0d, 0xb7, 0xe2, 0xb5, 0x0a, 0x78, 0x94, 0xa3, 0x70, 0x1f, 0xd4, 0x32, 0x41, 0x90, 0x8c, 0x84,
	0x63, 0xb6, 0x0d, 0xb7, 0xee, 0x55, 0x33, 0x41, 0x2e, 0x23, 0x01, 0x9f, 0x83, 0x6d, 0x19, 0x09,
	0x24, 0x66, 0x34, 0x45, 0xd7, 0x84, 0xd3, 0xc9, 0xc2, 0x29, 0x6b, 0x41, 0x53, 0x46, 0x62, 0x34,
	0xa3, 0xe9, 0x57, 0x0d, 0xc2, 0x43, 0x60, 0x09, 0x2c, 0x22, 0x24, 0x17, 0x29, 0x71, 0x2a, 0x6d,
	0xc3, 0x6d, 0x1d, 0xee, 0x75, 0xd7, 0x1e, 0xb9, 0x3b, 0xea, 0x8f, 0xce, 0x2e, 0x17, 0x29, 0xf1,
	0xea, 0x4a, 0xa7, 0x4e, 0xf0, 0x29, 0x68, 0xea, 0x9d, 0x4c, 0x10, 0x9e, 0xe0, 0x98, 0x38, 0xd5,
	0xb6, 0xe1, 0x5a, 0xde, 0x96, 0x02, 0xbf, 0x14, 0xd8, 0x4a, 0x94, 0x62, 0x21, 0x6e, 0x18, 0x0f,
	0x9c, 0xda, 0xad, 0xe8, 0xa2, 0xc0, 0x3a, 0x3f, 0xcb, 0xa0, 0xa9, 0xfd, 0xf0, 0x08, 0x0e, 0xfa,
	0x3c, 0x14, 0xf0, 0x01, 0xa8, 0x4a, 0x96, 0x52, 0x7f, 0x69, 0x49, 0x31, 0xc1, 0x27, 0xa0, 0xc1,
	0x09, 0x0e, 0x10, 0x9b, 0x4c, 0x04, 0x91, 0xda, 0x0d, 0xd3, 0x03, 0x0a, 0x3a, 0xd7, 0x08, 0x7c,
	0x09, 0xa0, 0x72, 0xc2, 0x67, 0x89, 0xc8, 0x62, 0xc2, 0x51, 0xc8, 0x59, 0x96, 0x16, 0xa6, 0xd8,
	0x99, 0x20, 0x83, 0x82, 0xf8, 0xa0, 0x70, 0xd8, 0x05, 0xbb, 0x9b, 0x4a, 0xa4, 0x5f, 0xa4, 0xac,
	0x9f, 0x71, 0xc7, 0x5f, 0xd7, 0x0e, 0xd5, 0xdb, 0xb8, 0xc0, 0x8e, 0xf1, 0x1c, 0xdd, 0x60, 0x7a,
	0x9b, 0x48, 0x25, 0x4f, 0x24, 0xc6, 0xf3, 0x2b, 0x4c, 0x57, 0x89, 0x3c, 0x06, 0x56, 0x4c, 0x13,
	0x34, 0x5e, 0x48, 0x22, 0xb4, 0x31, 0x15, 0xaf, 0x1e, 0xd3, 0xe4, 0x58, 0xcd, 0x9a, 0xc4, 0xf3,
	0x82, 0xac, 0x15, 0x24, 0x9e, 0xe7, 0xe4, 0x1b, 0xb0, 0xef, 0xb3, 0x38, 0xa6, 0x12, 0xd1, 0x44,
	0x12, 0x7e, 0x8d, 0xa3, 0xd5, 0x55, 0x75, 0x2d, 0xdd, 0xcb, 0xe9, 0xd3, 0x82, 0x5d, 0xde, 0x78,
	0x04, 0x1e, 0x72, 0x32, 0xc6, 0x11, 0x4e, 0x7c, 0x82, 0xee, 0xd6, 0xc6, 0xd2, 0x9b, 0xfb, 0x2b,
	0xc1, 0xe5, 0x66, 0x7f, 0x9e, 0x81, 0xd6, 0xf7, 0x8c, 0x64, 0x04, 0xf9, 0x38, 0xc5, 0x3e, 0x95,
	0x0b, 0x07, 0xe8, 0x85, 0xa6, 0x46, 0x07, 0x05, 0xa8, 0xec, 0xa2, 0x89, 0x1f, 0x65, 0x01, 0x29,
	0x02, 0x40, 0x34, 0x99, 0x30, 0xa7, 0xa1, 0xdd, 0xdd, 0x29, 0xa8, 0x3c, 0x88, 0xd3, 0x64, 0xc2,
	0xa0, 0x0d, 0xcc, 0x08, 0x87, 0xce, 0x96, 0xe6, 0xd5, 0x51, 0xc5, 0x13, 0xe1, 0xf0, 0x6e, 0x3c,
	0x4d, 0xed, 0xb7, 0x1d, 0xe1, 0x70, 0x23, 0x9e, 0xce, 0x6f, 0x03, 0xb4, 0x74, 0x2f, 0xae, 0x38,
	0x95, 0x44, 0x17, 0xc3, 0x06, 0xe6, 0x8c, 0x2c, 0x1c, 0x43, 0x6f, 0xa8, 0x23, 0x3c, 0x06, 0xb5,
	0x29, 0xc1, 0x01, 0xe1, 0xea, 0xcf, 0x61, 0xba, 0x8d, 0x43, 0x77, 0xa3, 0xb8, 0x9b, 0xfb, 0xdd,
	0x8f, 0xb9, 0xf4, 0x24, 0x91, 0x7c, 0xe1, 0x2d, 0x17, 0xd7, 0xea, 0x66, 0xae, 0xd7, 0xed, 0xd1,
	0x11, 0xd8, 0x5a, 0x5f, 0xf8, 0xcb, 0xed, 0xf7, 0x41, 0xe5, 0x1a, 0x47, 0x19, 0xd1, 0x55, 0xb4,
	0xbc, 0x7c, 0x38, 0x2a, 0xbd, 0x35, 0x3a, 0xbf, 0x4c, 0xb0, 0xad, 0x2f, 0x1f, 0xb1, 0x8c, 0xfb,
	0xe4, 0x7f, 0xad, 0xff, 0xd5, 0x5a, 0x1f, 0x1c, 0x80, 0xfa, 0xf2, 0xf3, 0x06, 0xeb, 0xa0, 0x3c,
	0x3c, 0x1f, 0x9e, 0xd8, 0xf7, 0xa0, 0x05, 0x2a, 0x17, 0x67, 0xfd, 0xd3, 0xa1, 0x6d, 0xa8, 0xe3,
	0x68, 0xe0, 0xf5, 0x3f, 0xdb, 0xa5, 0xe3, 0xf7, 0xdf, 0xde, 0x85, 0x54, 0x4e, 0xb3, 0x71, 0xd7,
	0x67, 0x71, 0x6f, 0x8c, 0xa5, 0x3f, 0xf5, 0x19, 0x4f, 0x7b, 0x69, 0x94, 0xc5, 0x63, 0xc2, 0x5f,
	0x09, 0x7f, 0x4a, 0x62, 0x2c, 0x7a, 0xe3, 0x8c, 0x46, 0x41, 0x2f, 0x64, 0xbd, 0xbc, 0x8b, 0x3d,
	0xd5, 0xc5, 0x71, 0x55, 0x0f, 0xaf, 0xff, 0x04, 0x00, 0x00, 0xff, 0xff, 0x2d, 0xc4, 0x45, 0x4d,
	0x22, 0x06, 0x00, 0x00,
}
