// Code generated by protoc-gen-go. DO NOT EDIT.
// source: opts/ps_opts_manage_destination.proto

package opts

import (
	fmt "fmt"
	args "github.com/batchcorp/plumber-schemas/build/go/protos/args"
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

type CreateDestinationOptions struct {
	// @gotags: kong:"help='ID of the underlying connection',required"
	ConnectionId string `protobuf:"bytes,1,opt,name=connection_id,json=connectionId,proto3" json:"connection_id,omitempty" kong:"help='ID of the underlying connection',required"`
	// @gotags: kong:"help='Friendly name for the connection',required"
	Name string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty" kong:"help='Friendly name for the connection',required"`
	// @gotags: kong:"help='Optional notes to associate with the connection'"
	Notes string `protobuf:"bytes,3,opt,name=notes,proto3" json:"notes,omitempty" kong:"help='Optional notes to associate with the connection'"`
	// @gotags: kong:"cmd,help='Apache Kafka'"
	Kafka *args.KafkaWriteArgs `protobuf:"bytes,100,opt,name=kafka,proto3" json:"kafka,omitempty" kong:"cmd,help='Apache Kafka'"`
	// @gotags: kong:"cmd,help='Apache ActiveMQ'"
	Activemq *args.ActiveMQWriteArgs `protobuf:"bytes,101,opt,name=activemq,proto3" json:"activemq,omitempty" kong:"cmd,help='Apache ActiveMQ'"`
	// @gotags: kong:"cmd,help='AWS Simple Queue System'"
	AwsSqs *args.AWSSQSWriteArgs `protobuf:"bytes,102,opt,name=aws_sqs,json=awsSqs,proto3" json:"aws_sqs,omitempty" kong:"cmd,help='AWS Simple Queue System'"`
	// @gotags: kong:"cmd,help='AWS Simple Notification System'"
	AwsSns *args.AWSSNSWriteArgs `protobuf:"bytes,103,opt,name=aws_sns,json=awsSns,proto3" json:"aws_sns,omitempty" kong:"cmd,help='AWS Simple Notification System'"`
	// @gotags: kong:"cmd,help='NATS'"
	Nats *args.NatsWriteArgs `protobuf:"bytes,104,opt,name=nats,proto3" json:"nats,omitempty" kong:"cmd,help='NATS'"`
	// @gotags: kong:"cmd,help='NATS Streaming'"
	NatsStreaming *args.NatsStreamingWriteArgs `protobuf:"bytes,105,opt,name=nats_streaming,json=natsStreaming,proto3" json:"nats_streaming,omitempty" kong:"cmd,help='NATS Streaming'"`
	// @gotags: kong:"cmd,help='NSQ'"
	Nsq *args.NSQWriteArgs `protobuf:"bytes,106,opt,name=nsq,proto3" json:"nsq,omitempty" kong:"cmd,help='NSQ'"`
	// @gotags: kong:"cmd,help='RabbitMQ'"
	Rabbit *args.RabbitWriteArgs `protobuf:"bytes,107,opt,name=rabbit,proto3" json:"rabbit,omitempty" kong:"cmd,help='RabbitMQ'"`
	// @gotags: kong:"cmd,help='MQTT'"
	Mqtt *args.MQTTWriteArgs `protobuf:"bytes,108,opt,name=mqtt,proto3" json:"mqtt,omitempty" kong:"cmd,help='MQTT'"`
	// @gotags: kong:"cmd,help='Azure Service Bus'"
	AzureServiceBus *args.AzureServiceBusWriteArgs `protobuf:"bytes,109,opt,name=azure_service_bus,json=azureServiceBus,proto3" json:"azure_service_bus,omitempty" kong:"cmd,help='Azure Service Bus'"`
	// @gotags: kong:"cmd,help='Azure Event Hub'"
	AzureEventHub *args.AzureEventHubWriteArgs `protobuf:"bytes,110,opt,name=azure_event_hub,json=azureEventHub,proto3" json:"azure_event_hub,omitempty" kong:"cmd,help='Azure Event Hub'"`
	// @gotags: kong:"cmd,help='Google Cloud Platform Pub/Sub'"
	GcpPubsub *args.GCPPubSubWriteArgs `protobuf:"bytes,111,opt,name=gcp_pubsub,json=gcpPubsub,proto3" json:"gcp_pubsub,omitempty" kong:"cmd,help='Google Cloud Platform Pub/Sub'"`
	// @gotags: kong:"cmd,help='KubeMQ Queue'"
	KubemqQueue *args.KubeMQQueueWriteArgs `protobuf:"bytes,112,opt,name=kubemq_queue,json=kubemqQueue,proto3" json:"kubemq_queue,omitempty" kong:"cmd,help='KubeMQ Queue'"`
	// @gotags: kong:"cmd,help='Redis PubSub'"
	RedisPubsub *args.RedisPubSubWriteArgs `protobuf:"bytes,113,opt,name=redis_pubsub,json=redisPubsub,proto3" json:"redis_pubsub,omitempty" kong:"cmd,help='Redis PubSub'"`
	// @gotags: kong:"cmd,help='Redis Streams'"
	RedisStreams *args.RedisStreamsWriteArgs `protobuf:"bytes,114,opt,name=redis_streams,json=redisStreams,proto3" json:"redis_streams,omitempty" kong:"cmd,help='Redis Streams'"`
	// @gotags: kong:"cmd,help='Apache Pulsar'"
	Pulsar *args.PulsarWriteArgs `protobuf:"bytes,115,opt,name=pulsar,proto3" json:"pulsar,omitempty" kong:"cmd,help='Apache Pulsar'"`
	// @gotags: kong:"cmd,help='RabbitMQ Streams'"
	RabbitStreams *args.RabbitStreamsWriteArgs `protobuf:"bytes,116,opt,name=rabbit_streams,json=rabbitStreams,proto3" json:"rabbit_streams,omitempty" kong:"cmd,help='RabbitMQ Streams'"`
	// @gotags: kong:"cmd,help='NATS JetStream'"
	NatsJetstream *args.NatsJetstreamWriteArgs `protobuf:"bytes,117,opt,name=nats_jetstream,json=natsJetstream,proto3" json:"nats_jetstream,omitempty" kong:"cmd,help='NATS JetStream'"`
	// @gotags: kong:"cmd,help='AWS Kinesis Streams'"
	AwsKinesis *args.AWSKinesisWriteArgs `protobuf:"bytes,118,opt,name=aws_kinesis,json=awsKinesis,proto3" json:"aws_kinesis,omitempty" kong:"cmd,help='AWS Kinesis Streams'"`
	// @gotags: kong:"cmd,help='Memphis'"
	Memphis              *args.MemphisWriteArgs `protobuf:"bytes,119,opt,name=memphis,proto3" json:"memphis,omitempty" kong:"cmd,help='Memphis'"`
	XXX_NoUnkeyedLiteral struct{}               `json:"-"`
	XXX_unrecognized     []byte                 `json:"-"`
	XXX_sizecache        int32                  `json:"-"`
}

func (m *CreateDestinationOptions) Reset()         { *m = CreateDestinationOptions{} }
func (m *CreateDestinationOptions) String() string { return proto.CompactTextString(m) }
func (*CreateDestinationOptions) ProtoMessage()    {}
func (*CreateDestinationOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_dc17d0e4ae506bf0, []int{0}
}

func (m *CreateDestinationOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateDestinationOptions.Unmarshal(m, b)
}
func (m *CreateDestinationOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateDestinationOptions.Marshal(b, m, deterministic)
}
func (m *CreateDestinationOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateDestinationOptions.Merge(m, src)
}
func (m *CreateDestinationOptions) XXX_Size() int {
	return xxx_messageInfo_CreateDestinationOptions.Size(m)
}
func (m *CreateDestinationOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateDestinationOptions.DiscardUnknown(m)
}

var xxx_messageInfo_CreateDestinationOptions proto.InternalMessageInfo

func (m *CreateDestinationOptions) GetConnectionId() string {
	if m != nil {
		return m.ConnectionId
	}
	return ""
}

func (m *CreateDestinationOptions) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *CreateDestinationOptions) GetNotes() string {
	if m != nil {
		return m.Notes
	}
	return ""
}

func (m *CreateDestinationOptions) GetKafka() *args.KafkaWriteArgs {
	if m != nil {
		return m.Kafka
	}
	return nil
}

func (m *CreateDestinationOptions) GetActivemq() *args.ActiveMQWriteArgs {
	if m != nil {
		return m.Activemq
	}
	return nil
}

func (m *CreateDestinationOptions) GetAwsSqs() *args.AWSSQSWriteArgs {
	if m != nil {
		return m.AwsSqs
	}
	return nil
}

func (m *CreateDestinationOptions) GetAwsSns() *args.AWSSNSWriteArgs {
	if m != nil {
		return m.AwsSns
	}
	return nil
}

func (m *CreateDestinationOptions) GetNats() *args.NatsWriteArgs {
	if m != nil {
		return m.Nats
	}
	return nil
}

func (m *CreateDestinationOptions) GetNatsStreaming() *args.NatsStreamingWriteArgs {
	if m != nil {
		return m.NatsStreaming
	}
	return nil
}

func (m *CreateDestinationOptions) GetNsq() *args.NSQWriteArgs {
	if m != nil {
		return m.Nsq
	}
	return nil
}

func (m *CreateDestinationOptions) GetRabbit() *args.RabbitWriteArgs {
	if m != nil {
		return m.Rabbit
	}
	return nil
}

func (m *CreateDestinationOptions) GetMqtt() *args.MQTTWriteArgs {
	if m != nil {
		return m.Mqtt
	}
	return nil
}

func (m *CreateDestinationOptions) GetAzureServiceBus() *args.AzureServiceBusWriteArgs {
	if m != nil {
		return m.AzureServiceBus
	}
	return nil
}

func (m *CreateDestinationOptions) GetAzureEventHub() *args.AzureEventHubWriteArgs {
	if m != nil {
		return m.AzureEventHub
	}
	return nil
}

func (m *CreateDestinationOptions) GetGcpPubsub() *args.GCPPubSubWriteArgs {
	if m != nil {
		return m.GcpPubsub
	}
	return nil
}

func (m *CreateDestinationOptions) GetKubemqQueue() *args.KubeMQQueueWriteArgs {
	if m != nil {
		return m.KubemqQueue
	}
	return nil
}

func (m *CreateDestinationOptions) GetRedisPubsub() *args.RedisPubSubWriteArgs {
	if m != nil {
		return m.RedisPubsub
	}
	return nil
}

func (m *CreateDestinationOptions) GetRedisStreams() *args.RedisStreamsWriteArgs {
	if m != nil {
		return m.RedisStreams
	}
	return nil
}

func (m *CreateDestinationOptions) GetPulsar() *args.PulsarWriteArgs {
	if m != nil {
		return m.Pulsar
	}
	return nil
}

func (m *CreateDestinationOptions) GetRabbitStreams() *args.RabbitStreamsWriteArgs {
	if m != nil {
		return m.RabbitStreams
	}
	return nil
}

func (m *CreateDestinationOptions) GetNatsJetstream() *args.NatsJetstreamWriteArgs {
	if m != nil {
		return m.NatsJetstream
	}
	return nil
}

func (m *CreateDestinationOptions) GetAwsKinesis() *args.AWSKinesisWriteArgs {
	if m != nil {
		return m.AwsKinesis
	}
	return nil
}

func (m *CreateDestinationOptions) GetMemphis() *args.MemphisWriteArgs {
	if m != nil {
		return m.Memphis
	}
	return nil
}

type GetDestinationOptions struct {
	// @gotags: kong:"help='ID of the destination to get (leave empty to get all)'"
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty" kong:"help='ID of the destination to get (leave empty to get all)'"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetDestinationOptions) Reset()         { *m = GetDestinationOptions{} }
func (m *GetDestinationOptions) String() string { return proto.CompactTextString(m) }
func (*GetDestinationOptions) ProtoMessage()    {}
func (*GetDestinationOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_dc17d0e4ae506bf0, []int{1}
}

func (m *GetDestinationOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetDestinationOptions.Unmarshal(m, b)
}
func (m *GetDestinationOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetDestinationOptions.Marshal(b, m, deterministic)
}
func (m *GetDestinationOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetDestinationOptions.Merge(m, src)
}
func (m *GetDestinationOptions) XXX_Size() int {
	return xxx_messageInfo_GetDestinationOptions.Size(m)
}
func (m *GetDestinationOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_GetDestinationOptions.DiscardUnknown(m)
}

var xxx_messageInfo_GetDestinationOptions proto.InternalMessageInfo

func (m *GetDestinationOptions) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

type DeleteDestinationOptions struct {
	// @gotags: kong:"help='ID of the destination to delete',required=true"
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty" kong:"help='ID of the destination to delete',required=true"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteDestinationOptions) Reset()         { *m = DeleteDestinationOptions{} }
func (m *DeleteDestinationOptions) String() string { return proto.CompactTextString(m) }
func (*DeleteDestinationOptions) ProtoMessage()    {}
func (*DeleteDestinationOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_dc17d0e4ae506bf0, []int{2}
}

func (m *DeleteDestinationOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteDestinationOptions.Unmarshal(m, b)
}
func (m *DeleteDestinationOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteDestinationOptions.Marshal(b, m, deterministic)
}
func (m *DeleteDestinationOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteDestinationOptions.Merge(m, src)
}
func (m *DeleteDestinationOptions) XXX_Size() int {
	return xxx_messageInfo_DeleteDestinationOptions.Size(m)
}
func (m *DeleteDestinationOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteDestinationOptions.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteDestinationOptions proto.InternalMessageInfo

func (m *DeleteDestinationOptions) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func init() {
	proto.RegisterType((*CreateDestinationOptions)(nil), "protos.opts.CreateDestinationOptions")
	proto.RegisterType((*GetDestinationOptions)(nil), "protos.opts.GetDestinationOptions")
	proto.RegisterType((*DeleteDestinationOptions)(nil), "protos.opts.DeleteDestinationOptions")
}

func init() {
	proto.RegisterFile("opts/ps_opts_manage_destination.proto", fileDescriptor_dc17d0e4ae506bf0)
}

var fileDescriptor_dc17d0e4ae506bf0 = []byte{
	// 797 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x56, 0x6b, 0x4f, 0xdb, 0x3a,
	0x18, 0x16, 0x70, 0x80, 0x83, 0x4b, 0x41, 0xc7, 0x3a, 0xdb, 0x4c, 0x19, 0x50, 0xca, 0xd0, 0xd0,
	0xa6, 0xb5, 0xda, 0x4d, 0xd3, 0x36, 0x69, 0x12, 0x97, 0x89, 0x0d, 0x04, 0x6b, 0x1b, 0x24, 0xa4,
	0x7d, 0x89, 0x9c, 0xd4, 0xa4, 0xa1, 0x8d, 0x93, 0xd8, 0x4e, 0x2b, 0xed, 0x77, 0xee, 0x07, 0x4d,
	0xb6, 0x73, 0x73, 0x1b, 0xf6, 0x85, 0x90, 0xf7, 0xb9, 0xc4, 0x7e, 0xf3, 0xf8, 0x4d, 0xc1, 0x61,
	0x18, 0x09, 0xde, 0x89, 0xb8, 0x2d, 0xaf, 0x76, 0x80, 0x29, 0xf6, 0x88, 0x3d, 0x20, 0x5c, 0xf8,
	0x14, 0x0b, 0x3f, 0xa4, 0xed, 0x88, 0x85, 0x22, 0x84, 0x35, 0x75, 0xe1, 0x6d, 0xc9, 0x6a, 0x6c,
	0x63, 0xe6, 0x29, 0x8d, 0xbc, 0xda, 0xd8, 0x15, 0xfe, 0x84, 0x04, 0xb1, 0x66, 0x36, 0x76, 0x4d,
	0x70, 0xca, 0xed, 0x91, 0x4f, 0x09, 0xf7, 0x79, 0x8a, 0x37, 0xe6, 0x70, 0x4e, 0xff, 0x82, 0xc5,
	0x19, 0xd6, 0x32, 0xb1, 0x5f, 0x09, 0x23, 0x36, 0x99, 0x10, 0x2a, 0xec, 0x61, 0xe2, 0xa4, 0x9c,
	0x67, 0x15, 0x1c, 0x4e, 0xd8, 0xc4, 0x77, 0x89, 0xed, 0x24, 0x99, 0xd3, 0x8e, 0xc1, 0xf2, 0xdc,
	0xc8, 0x8e, 0x12, 0x87, 0xe7, 0x26, 0xc8, 0x80, 0x47, 0xf8, 0x6e, 0x84, 0x53, 0x64, 0xcf, 0x44,
	0x12, 0x87, 0x04, 0xb1, 0x1d, 0x27, 0x24, 0x21, 0x95, 0xeb, 0x0f, 0x48, 0x10, 0x0d, 0xf3, 0x7d,
	0x3f, 0x31, 0xb1, 0x58, 0x88, 0x4a, 0x80, 0x62, 0x91, 0x29, 0xf6, 0xe7, 0x00, 0xfb, 0x9e, 0x08,
	0x2e, 0x18, 0xc1, 0xc1, 0xc3, 0x14, 0x8d, 0xfb, 0xd4, 0x4b, 0x29, 0x8f, 0x4d, 0x0a, 0xcf, 0xde,
	0xd3, 0x96, 0x51, 0x8f, 0x92, 0x31, 0xc7, 0xac, 0x12, 0x62, 0xd8, 0x71, 0x7c, 0x51, 0xf9, 0x40,
	0x0d, 0xa5, 0x8f, 0xe4, 0x95, 0x5d, 0x62, 0x64, 0xe0, 0x73, 0xb3, 0xc1, 0xcd, 0x0a, 0x82, 0x61,
	0xd1, 0xfa, 0x0d, 0x00, 0x3a, 0x65, 0x04, 0x0b, 0x72, 0x56, 0x24, 0xf1, 0x47, 0x24, 0xff, 0x72,
	0x78, 0x00, 0xea, 0x6e, 0x48, 0x29, 0x71, 0xe5, 0xad, 0xed, 0x0f, 0xd0, 0x42, 0x73, 0xe1, 0x68,
	0xad, 0xbf, 0x5e, 0x14, 0xbf, 0x0f, 0x20, 0x04, 0xff, 0x50, 0x1c, 0x10, 0xb4, 0xa8, 0x30, 0xf5,
	0x3f, 0xfc, 0x1f, 0x2c, 0xd3, 0x50, 0x10, 0x8e, 0x96, 0x54, 0x51, 0xdf, 0xc0, 0xd7, 0x60, 0x59,
	0xbd, 0x63, 0x34, 0x68, 0x2e, 0x1c, 0xd5, 0xde, 0x6c, 0xb7, 0xd3, 0xa4, 0xcb, 0xc5, 0xb5, 0x2f,
	0x25, 0x72, 0xcb, 0x7c, 0x41, 0x8e, 0x99, 0xc7, 0xfb, 0x9a, 0x09, 0x3f, 0x81, 0x7f, 0xb3, 0xd0,
	0x23, 0xa2, 0x54, 0xbb, 0x86, 0xea, 0x58, 0x81, 0x57, 0xbd, 0x42, 0x98, 0xf3, 0xe1, 0x7b, 0xb0,
	0x9a, 0xe6, 0x1a, 0xdd, 0x29, 0xe9, 0x53, 0x53, 0x7a, 0x6b, 0x59, 0x3d, 0xab, 0x10, 0xae, 0xe0,
	0x29, 0xb7, 0x62, 0x9e, 0xcb, 0x28, 0x47, 0xde, 0x03, 0xb2, 0xeb, 0x59, 0x19, 0xe5, 0xb0, 0x2d,
	0xdb, 0x20, 0x38, 0x1a, 0x2a, 0x4d, 0xc3, 0xd0, 0x5c, 0x63, 0xc1, 0x0b, 0x85, 0xe2, 0xc1, 0x0b,
	0xb0, 0x61, 0x86, 0x08, 0xf9, 0x4a, 0x79, 0x30, 0xa7, 0xb4, 0x32, 0x46, 0x61, 0x51, 0xa7, 0xe5,
	0x3a, 0x7c, 0x09, 0x96, 0x28, 0x8f, 0xd1, 0xbd, 0x32, 0xd8, 0x32, 0x0d, 0xac, 0x52, 0x6f, 0x24,
	0x0b, 0xbe, 0x03, 0x2b, 0x3a, 0x4c, 0x68, 0x54, 0xb1, 0xbd, 0xbe, 0x82, 0x4a, 0xdb, 0xd3, 0x5c,
	0xb9, 0x3d, 0x79, 0x90, 0xd0, 0xb8, 0x62, 0x7b, 0x57, 0xbd, 0x9b, 0x9b, 0xd2, 0xf6, 0x24, 0x0f,
	0xf6, 0xc0, 0x7f, 0x73, 0x43, 0x01, 0x05, 0x4a, 0x7c, 0x68, 0xf6, 0x53, 0xb2, 0x2c, 0x4d, 0x3a,
	0x49, 0x4a, 0x6d, 0xda, 0xc4, 0x26, 0x02, 0x2f, 0xc1, 0xe6, 0xcc, 0x2c, 0x42, 0xb4, 0xa2, 0x65,
	0xca, 0xf0, 0xab, 0xa4, 0x7c, 0x4b, 0x9c, 0x52, 0xcb, 0x70, 0xb9, 0x0e, 0xbf, 0x00, 0x50, 0x8c,
	0x23, 0x14, 0x2a, 0x9f, 0x3d, 0xc3, 0xe7, 0xfc, 0xb4, 0xdb, 0x4d, 0x1c, 0xab, 0xec, 0xb1, 0xe6,
	0xb9, 0x51, 0x57, 0x29, 0xe0, 0x19, 0x58, 0x2f, 0x4f, 0x25, 0x14, 0x29, 0x87, 0x7d, 0x33, 0xd2,
	0x89, 0x43, 0xae, 0x7a, 0x3d, 0x89, 0x17, 0x1e, 0x35, 0x2d, 0x53, 0x55, 0xe9, 0x52, 0x3e, 0xb5,
	0x28, 0xae, 0x70, 0xe9, 0x4b, 0xc2, 0xec, 0x4a, 0x6a, 0x2c, 0xad, 0xca, 0xb5, 0x9c, 0x83, 0xba,
	0x71, 0xb4, 0x11, 0x53, 0x36, 0xad, 0x79, 0x1b, 0x1d, 0x99, 0x52, 0x93, 0xf5, 0xe3, 0xd3, 0xb2,
	0x8c, 0x86, 0x9e, 0x4e, 0x88, 0x57, 0x44, 0xa3, 0xab, 0xa0, 0x52, 0x34, 0x34, 0x57, 0x26, 0xd9,
	0x9c, 0x4e, 0x48, 0x54, 0xbc, 0x16, 0x1d, 0xac, 0xb9, 0x05, 0xd4, 0x59, 0xb9, 0x9e, 0x9f, 0x8a,
	0x7c, 0xfa, 0xa2, 0xe4, 0x81, 0x53, 0x71, 0x91, 0x31, 0x66, 0x4e, 0x45, 0x5e, 0x87, 0xc7, 0xa0,
	0x56, 0xfa, 0x26, 0xa2, 0x89, 0x32, 0x6a, 0xce, 0x1e, 0xe6, 0x4b, 0x0d, 0x17, 0x2e, 0x00, 0x4f,
	0x79, 0x5a, 0x84, 0x1f, 0xc0, 0x6a, 0xfa, 0x69, 0x41, 0x53, 0x25, 0xdf, 0x31, 0x83, 0xaf, 0xb1,
	0x42, 0x9b, 0xb1, 0x5b, 0xcf, 0xc1, 0xa3, 0x73, 0x22, 0x2a, 0x46, 0xea, 0x06, 0x58, 0xcc, 0xe7,
	0xe8, 0xa2, 0x3f, 0x68, 0xbd, 0x00, 0xe8, 0x8c, 0x8c, 0x49, 0xe5, 0xf8, 0x9d, 0xe1, 0x9e, 0x7c,
	0xfe, 0xf9, 0xd1, 0xf3, 0x85, 0xfc, 0x06, 0xbb, 0x61, 0xd0, 0x71, 0xb0, 0x70, 0x87, 0x6e, 0xc8,
	0xa2, 0x4e, 0x34, 0x4e, 0x02, 0x87, 0xb0, 0x57, 0xdc, 0x1d, 0x92, 0x00, 0xf3, 0x8e, 0x93, 0xf8,
	0xe3, 0x41, 0xc7, 0x0b, 0x3b, 0x7a, 0xad, 0x1d, 0xf9, 0x4b, 0xc2, 0x59, 0x51, 0x37, 0x6f, 0xff,
	0x04, 0x00, 0x00, 0xff, 0xff, 0x18, 0x7c, 0xb5, 0xa3, 0x86, 0x08, 0x00, 0x00,
}
