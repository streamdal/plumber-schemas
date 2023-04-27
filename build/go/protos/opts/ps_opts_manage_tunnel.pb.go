// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.6
// source: opts/ps_opts_manage_tunnel.proto

package opts

import (
	args "github.com/streamdal/plumber-schemas/build/go/protos/args"
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

type GetTunnelOptions struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// @gotags: kong:"help='ID of the tunnel to get (leave empty to get all)'"
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty" kong:"help='ID of the tunnel to get (leave empty to get all)'"`
}

func (x *GetTunnelOptions) Reset() {
	*x = GetTunnelOptions{}
	if protoimpl.UnsafeEnabled {
		mi := &file_opts_ps_opts_manage_tunnel_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetTunnelOptions) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetTunnelOptions) ProtoMessage() {}

func (x *GetTunnelOptions) ProtoReflect() protoreflect.Message {
	mi := &file_opts_ps_opts_manage_tunnel_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetTunnelOptions.ProtoReflect.Descriptor instead.
func (*GetTunnelOptions) Descriptor() ([]byte, []int) {
	return file_opts_ps_opts_manage_tunnel_proto_rawDescGZIP(), []int{0}
}

func (x *GetTunnelOptions) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type CreateTunnelOptions struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// @gotags: kong:"help='Connection ID for the tunnel to use',required=true"
	ConnectionId string `protobuf:"bytes,1,opt,name=connection_id,json=connectionId,proto3" json:"connection_id,omitempty" kong:"help='Connection ID for the tunnel to use',required=true"`
	// @gotags: kong:"help='Streamdal API token (create in settings -> security)',required=true"
	TunnelToken string `protobuf:"bytes,3,opt,name=tunnel_token,json=tunnelToken,proto3" json:"tunnel_token,omitempty" kong:"help='Streamdal API token (create in settings -> security)',required=true"`
	// @gotags: kong:"help='Name for the tunnel (auto-generated if left empty)'"
	Name string `protobuf:"bytes,4,opt,name=name,proto3" json:"name,omitempty" kong:"help='Name for the tunnel (auto-generated if left empty)'"`
	// @gotags: kong:"help='Notes associated with the tunnel'"
	Notes string `protobuf:"bytes,5,opt,name=notes,proto3" json:"notes,omitempty" kong:"help='Notes associated with the tunnel'"`
	// @gotags: kong:"help='Tunnel API address',default='dproxy.streamdal.com:443'"
	XTunnelAddress string `protobuf:"bytes,6,opt,name=_tunnel_address,json=TunnelAddress,proto3" json:"_tunnel_address,omitempty" kong:"help='Tunnel API address',default='dproxy.streamdal.com:443'"`
	// @gotags: kong:"help='Tunnel API initial connection timeout',default=5"
	XTunnelTimeoutSeconds uint32 `protobuf:"varint,7,opt,name=_tunnel_timeout_seconds,json=TunnelTimeoutSeconds,proto3" json:"_tunnel_timeout_seconds,omitempty" kong:"help='Tunnel API initial connection timeout',default=5"`
	// @gotags: kong:"help='Use gRPC insecure mode when talking to Streamdal Tunnel API'"
	XTunnelInsecure bool `protobuf:"varint,8,opt,name=_tunnel_insecure,json=TunnelInsecure,proto3" json:"_tunnel_insecure,omitempty" kong:"help='Use gRPC insecure mode when talking to Streamdal Tunnel API'"`
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
	Memphis *args.MemphisWriteArgs `protobuf:"bytes,119,opt,name=memphis,proto3" json:"memphis,omitempty" kong:"cmd,help='Memphis'"`
}

func (x *CreateTunnelOptions) Reset() {
	*x = CreateTunnelOptions{}
	if protoimpl.UnsafeEnabled {
		mi := &file_opts_ps_opts_manage_tunnel_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateTunnelOptions) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateTunnelOptions) ProtoMessage() {}

func (x *CreateTunnelOptions) ProtoReflect() protoreflect.Message {
	mi := &file_opts_ps_opts_manage_tunnel_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateTunnelOptions.ProtoReflect.Descriptor instead.
func (*CreateTunnelOptions) Descriptor() ([]byte, []int) {
	return file_opts_ps_opts_manage_tunnel_proto_rawDescGZIP(), []int{1}
}

func (x *CreateTunnelOptions) GetConnectionId() string {
	if x != nil {
		return x.ConnectionId
	}
	return ""
}

func (x *CreateTunnelOptions) GetTunnelToken() string {
	if x != nil {
		return x.TunnelToken
	}
	return ""
}

func (x *CreateTunnelOptions) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *CreateTunnelOptions) GetNotes() string {
	if x != nil {
		return x.Notes
	}
	return ""
}

func (x *CreateTunnelOptions) GetXTunnelAddress() string {
	if x != nil {
		return x.XTunnelAddress
	}
	return ""
}

func (x *CreateTunnelOptions) GetXTunnelTimeoutSeconds() uint32 {
	if x != nil {
		return x.XTunnelTimeoutSeconds
	}
	return 0
}

func (x *CreateTunnelOptions) GetXTunnelInsecure() bool {
	if x != nil {
		return x.XTunnelInsecure
	}
	return false
}

func (x *CreateTunnelOptions) GetKafka() *args.KafkaWriteArgs {
	if x != nil {
		return x.Kafka
	}
	return nil
}

func (x *CreateTunnelOptions) GetActivemq() *args.ActiveMQWriteArgs {
	if x != nil {
		return x.Activemq
	}
	return nil
}

func (x *CreateTunnelOptions) GetAwsSqs() *args.AWSSQSWriteArgs {
	if x != nil {
		return x.AwsSqs
	}
	return nil
}

func (x *CreateTunnelOptions) GetAwsSns() *args.AWSSNSWriteArgs {
	if x != nil {
		return x.AwsSns
	}
	return nil
}

func (x *CreateTunnelOptions) GetNats() *args.NatsWriteArgs {
	if x != nil {
		return x.Nats
	}
	return nil
}

func (x *CreateTunnelOptions) GetNatsStreaming() *args.NatsStreamingWriteArgs {
	if x != nil {
		return x.NatsStreaming
	}
	return nil
}

func (x *CreateTunnelOptions) GetNsq() *args.NSQWriteArgs {
	if x != nil {
		return x.Nsq
	}
	return nil
}

func (x *CreateTunnelOptions) GetRabbit() *args.RabbitWriteArgs {
	if x != nil {
		return x.Rabbit
	}
	return nil
}

func (x *CreateTunnelOptions) GetMqtt() *args.MQTTWriteArgs {
	if x != nil {
		return x.Mqtt
	}
	return nil
}

func (x *CreateTunnelOptions) GetAzureServiceBus() *args.AzureServiceBusWriteArgs {
	if x != nil {
		return x.AzureServiceBus
	}
	return nil
}

func (x *CreateTunnelOptions) GetAzureEventHub() *args.AzureEventHubWriteArgs {
	if x != nil {
		return x.AzureEventHub
	}
	return nil
}

func (x *CreateTunnelOptions) GetGcpPubsub() *args.GCPPubSubWriteArgs {
	if x != nil {
		return x.GcpPubsub
	}
	return nil
}

func (x *CreateTunnelOptions) GetKubemqQueue() *args.KubeMQQueueWriteArgs {
	if x != nil {
		return x.KubemqQueue
	}
	return nil
}

func (x *CreateTunnelOptions) GetRedisPubsub() *args.RedisPubSubWriteArgs {
	if x != nil {
		return x.RedisPubsub
	}
	return nil
}

func (x *CreateTunnelOptions) GetRedisStreams() *args.RedisStreamsWriteArgs {
	if x != nil {
		return x.RedisStreams
	}
	return nil
}

func (x *CreateTunnelOptions) GetPulsar() *args.PulsarWriteArgs {
	if x != nil {
		return x.Pulsar
	}
	return nil
}

func (x *CreateTunnelOptions) GetRabbitStreams() *args.RabbitStreamsWriteArgs {
	if x != nil {
		return x.RabbitStreams
	}
	return nil
}

func (x *CreateTunnelOptions) GetNatsJetstream() *args.NatsJetstreamWriteArgs {
	if x != nil {
		return x.NatsJetstream
	}
	return nil
}

func (x *CreateTunnelOptions) GetAwsKinesis() *args.AWSKinesisWriteArgs {
	if x != nil {
		return x.AwsKinesis
	}
	return nil
}

func (x *CreateTunnelOptions) GetMemphis() *args.MemphisWriteArgs {
	if x != nil {
		return x.Memphis
	}
	return nil
}

type DeleteTunnelOptions struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// @gotags: kong:"help='ID of the tunnel to delete',required=true"
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty" kong:"help='ID of the tunnel to delete',required=true"`
}

func (x *DeleteTunnelOptions) Reset() {
	*x = DeleteTunnelOptions{}
	if protoimpl.UnsafeEnabled {
		mi := &file_opts_ps_opts_manage_tunnel_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteTunnelOptions) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteTunnelOptions) ProtoMessage() {}

func (x *DeleteTunnelOptions) ProtoReflect() protoreflect.Message {
	mi := &file_opts_ps_opts_manage_tunnel_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteTunnelOptions.ProtoReflect.Descriptor instead.
func (*DeleteTunnelOptions) Descriptor() ([]byte, []int) {
	return file_opts_ps_opts_manage_tunnel_proto_rawDescGZIP(), []int{2}
}

func (x *DeleteTunnelOptions) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type StopTunnelOptions struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// @gotags: kong:"help='ID of the tunnel to stop',required=true"
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty" kong:"help='ID of the tunnel to stop',required=true"`
}

func (x *StopTunnelOptions) Reset() {
	*x = StopTunnelOptions{}
	if protoimpl.UnsafeEnabled {
		mi := &file_opts_ps_opts_manage_tunnel_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StopTunnelOptions) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StopTunnelOptions) ProtoMessage() {}

func (x *StopTunnelOptions) ProtoReflect() protoreflect.Message {
	mi := &file_opts_ps_opts_manage_tunnel_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StopTunnelOptions.ProtoReflect.Descriptor instead.
func (*StopTunnelOptions) Descriptor() ([]byte, []int) {
	return file_opts_ps_opts_manage_tunnel_proto_rawDescGZIP(), []int{3}
}

func (x *StopTunnelOptions) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type ResumeTunnelOptions struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// @gotags: kong:"help='ID of the tunnel to resume',required=true"
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty" kong:"help='ID of the tunnel to resume',required=true"`
}

func (x *ResumeTunnelOptions) Reset() {
	*x = ResumeTunnelOptions{}
	if protoimpl.UnsafeEnabled {
		mi := &file_opts_ps_opts_manage_tunnel_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResumeTunnelOptions) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResumeTunnelOptions) ProtoMessage() {}

func (x *ResumeTunnelOptions) ProtoReflect() protoreflect.Message {
	mi := &file_opts_ps_opts_manage_tunnel_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResumeTunnelOptions.ProtoReflect.Descriptor instead.
func (*ResumeTunnelOptions) Descriptor() ([]byte, []int) {
	return file_opts_ps_opts_manage_tunnel_proto_rawDescGZIP(), []int{4}
}

func (x *ResumeTunnelOptions) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

var File_opts_ps_opts_manage_tunnel_proto protoreflect.FileDescriptor

var file_opts_ps_opts_manage_tunnel_proto_rawDesc = []byte{
	0x0a, 0x20, 0x6f, 0x70, 0x74, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x6f, 0x70, 0x74, 0x73, 0x5f, 0x6d,
	0x61, 0x6e, 0x61, 0x67, 0x65, 0x5f, 0x74, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x0b, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x6f, 0x70, 0x74, 0x73, 0x1a,
	0x1b, 0x61, 0x72, 0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x61, 0x63,
	0x74, 0x69, 0x76, 0x65, 0x6d, 0x71, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1e, 0x61, 0x72,
	0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x61, 0x77, 0x73, 0x5f, 0x6b,
	0x69, 0x6e, 0x65, 0x73, 0x69, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1a, 0x61, 0x72,
	0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x61, 0x77, 0x73, 0x5f, 0x73,
	0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1a, 0x61, 0x72, 0x67, 0x73, 0x2f, 0x70,
	0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x61, 0x77, 0x73, 0x5f, 0x73, 0x71, 0x73, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x22, 0x61, 0x72, 0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72,
	0x67, 0x73, 0x5f, 0x61, 0x7a, 0x75, 0x72, 0x65, 0x5f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x5f, 0x68,
	0x75, 0x62, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x24, 0x61, 0x72, 0x67, 0x73, 0x2f, 0x70,
	0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x61, 0x7a, 0x75, 0x72, 0x65, 0x5f, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x5f, 0x62, 0x75, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1d,
	0x61, 0x72, 0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x67, 0x63, 0x70,
	0x5f, 0x70, 0x75, 0x62, 0x73, 0x75, 0x62, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x18, 0x61,
	0x72, 0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x6b, 0x61, 0x66, 0x6b,
	0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x61, 0x72, 0x67, 0x73, 0x2f, 0x70, 0x73,
	0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x6b, 0x75, 0x62, 0x65, 0x6d, 0x71, 0x5f, 0x71, 0x75, 0x65,
	0x75, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1a, 0x61, 0x72, 0x67, 0x73, 0x2f, 0x70,
	0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x6d, 0x65, 0x6d, 0x70, 0x68, 0x69, 0x73, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x17, 0x61, 0x72, 0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72,
	0x67, 0x73, 0x5f, 0x6d, 0x71, 0x74, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x17, 0x61,
	0x72, 0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x6e, 0x61, 0x74, 0x73,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x21, 0x61, 0x72, 0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f,
	0x61, 0x72, 0x67, 0x73, 0x5f, 0x6e, 0x61, 0x74, 0x73, 0x5f, 0x6a, 0x65, 0x74, 0x73, 0x74, 0x72,
	0x65, 0x61, 0x6d, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x21, 0x61, 0x72, 0x67, 0x73, 0x2f,
	0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x6e, 0x61, 0x74, 0x73, 0x5f, 0x73, 0x74, 0x72,
	0x65, 0x61, 0x6d, 0x69, 0x6e, 0x67, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x16, 0x61, 0x72,
	0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x6e, 0x73, 0x71, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x19, 0x61, 0x72, 0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72,
	0x67, 0x73, 0x5f, 0x70, 0x75, 0x6c, 0x73, 0x61, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x19, 0x61, 0x72, 0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x72, 0x61,
	0x62, 0x62, 0x69, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x21, 0x61, 0x72, 0x67, 0x73,
	0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x72, 0x61, 0x62, 0x62, 0x69, 0x74, 0x5f,
	0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x61,
	0x72, 0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x72, 0x65, 0x64, 0x69,
	0x73, 0x5f, 0x70, 0x75, 0x62, 0x73, 0x75, 0x62, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x20,
	0x61, 0x72, 0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x72, 0x65, 0x64,
	0x69, 0x73, 0x5f, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x22, 0x22, 0x0a, 0x10, 0x47, 0x65, 0x74, 0x54, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x4f, 0x70, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x02, 0x69, 0x64, 0x22, 0xfb, 0x0b, 0x0a, 0x13, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54,
	0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x23, 0x0a, 0x0d,
	0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0c, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x49,
	0x64, 0x12, 0x21, 0x0a, 0x0c, 0x74, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x5f, 0x74, 0x6f, 0x6b, 0x65,
	0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x74, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x54,
	0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x6e, 0x6f, 0x74, 0x65,
	0x73, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x6e, 0x6f, 0x74, 0x65, 0x73, 0x12, 0x26,
	0x0a, 0x0f, 0x5f, 0x74, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73,
	0x73, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x54, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x41,
	0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x35, 0x0a, 0x17, 0x5f, 0x74, 0x75, 0x6e, 0x6e, 0x65,
	0x6c, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x6f, 0x75, 0x74, 0x5f, 0x73, 0x65, 0x63, 0x6f, 0x6e, 0x64,
	0x73, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x14, 0x54, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x54,
	0x69, 0x6d, 0x65, 0x6f, 0x75, 0x74, 0x53, 0x65, 0x63, 0x6f, 0x6e, 0x64, 0x73, 0x12, 0x28, 0x0a,
	0x10, 0x5f, 0x74, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x5f, 0x69, 0x6e, 0x73, 0x65, 0x63, 0x75, 0x72,
	0x65, 0x18, 0x08, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0e, 0x54, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x49,
	0x6e, 0x73, 0x65, 0x63, 0x75, 0x72, 0x65, 0x12, 0x31, 0x0a, 0x05, 0x6b, 0x61, 0x66, 0x6b, 0x61,
	0x18, 0x64, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e,
	0x61, 0x72, 0x67, 0x73, 0x2e, 0x4b, 0x61, 0x66, 0x6b, 0x61, 0x57, 0x72, 0x69, 0x74, 0x65, 0x41,
	0x72, 0x67, 0x73, 0x52, 0x05, 0x6b, 0x61, 0x66, 0x6b, 0x61, 0x12, 0x3a, 0x0a, 0x08, 0x61, 0x63,
	0x74, 0x69, 0x76, 0x65, 0x6d, 0x71, 0x18, 0x65, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x41, 0x63, 0x74, 0x69, 0x76,
	0x65, 0x4d, 0x51, 0x57, 0x72, 0x69, 0x74, 0x65, 0x41, 0x72, 0x67, 0x73, 0x52, 0x08, 0x61, 0x63,
	0x74, 0x69, 0x76, 0x65, 0x6d, 0x71, 0x12, 0x35, 0x0a, 0x07, 0x61, 0x77, 0x73, 0x5f, 0x73, 0x71,
	0x73, 0x18, 0x66, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73,
	0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x41, 0x57, 0x53, 0x53, 0x51, 0x53, 0x57, 0x72, 0x69, 0x74,
	0x65, 0x41, 0x72, 0x67, 0x73, 0x52, 0x06, 0x61, 0x77, 0x73, 0x53, 0x71, 0x73, 0x12, 0x35, 0x0a,
	0x07, 0x61, 0x77, 0x73, 0x5f, 0x73, 0x6e, 0x73, 0x18, 0x67, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x41, 0x57, 0x53,
	0x53, 0x4e, 0x53, 0x57, 0x72, 0x69, 0x74, 0x65, 0x41, 0x72, 0x67, 0x73, 0x52, 0x06, 0x61, 0x77,
	0x73, 0x53, 0x6e, 0x73, 0x12, 0x2e, 0x0a, 0x04, 0x6e, 0x61, 0x74, 0x73, 0x18, 0x68, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73,
	0x2e, 0x4e, 0x61, 0x74, 0x73, 0x57, 0x72, 0x69, 0x74, 0x65, 0x41, 0x72, 0x67, 0x73, 0x52, 0x04,
	0x6e, 0x61, 0x74, 0x73, 0x12, 0x4a, 0x0a, 0x0e, 0x6e, 0x61, 0x74, 0x73, 0x5f, 0x73, 0x74, 0x72,
	0x65, 0x61, 0x6d, 0x69, 0x6e, 0x67, 0x18, 0x69, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x23, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x4e, 0x61, 0x74, 0x73, 0x53,
	0x74, 0x72, 0x65, 0x61, 0x6d, 0x69, 0x6e, 0x67, 0x57, 0x72, 0x69, 0x74, 0x65, 0x41, 0x72, 0x67,
	0x73, 0x52, 0x0d, 0x6e, 0x61, 0x74, 0x73, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x69, 0x6e, 0x67,
	0x12, 0x2b, 0x0a, 0x03, 0x6e, 0x73, 0x71, 0x18, 0x6a, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x4e, 0x53, 0x51, 0x57,
	0x72, 0x69, 0x74, 0x65, 0x41, 0x72, 0x67, 0x73, 0x52, 0x03, 0x6e, 0x73, 0x71, 0x12, 0x34, 0x0a,
	0x06, 0x72, 0x61, 0x62, 0x62, 0x69, 0x74, 0x18, 0x6b, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x52, 0x61, 0x62, 0x62,
	0x69, 0x74, 0x57, 0x72, 0x69, 0x74, 0x65, 0x41, 0x72, 0x67, 0x73, 0x52, 0x06, 0x72, 0x61, 0x62,
	0x62, 0x69, 0x74, 0x12, 0x2e, 0x0a, 0x04, 0x6d, 0x71, 0x74, 0x74, 0x18, 0x6c, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x1a, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e,
	0x4d, 0x51, 0x54, 0x54, 0x57, 0x72, 0x69, 0x74, 0x65, 0x41, 0x72, 0x67, 0x73, 0x52, 0x04, 0x6d,
	0x71, 0x74, 0x74, 0x12, 0x51, 0x0a, 0x11, 0x61, 0x7a, 0x75, 0x72, 0x65, 0x5f, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x5f, 0x62, 0x75, 0x73, 0x18, 0x6d, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x25,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x41, 0x7a, 0x75,
	0x72, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x42, 0x75, 0x73, 0x57, 0x72, 0x69, 0x74,
	0x65, 0x41, 0x72, 0x67, 0x73, 0x52, 0x0f, 0x61, 0x7a, 0x75, 0x72, 0x65, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x42, 0x75, 0x73, 0x12, 0x4b, 0x0a, 0x0f, 0x61, 0x7a, 0x75, 0x72, 0x65, 0x5f,
	0x65, 0x76, 0x65, 0x6e, 0x74, 0x5f, 0x68, 0x75, 0x62, 0x18, 0x6e, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x23, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x41, 0x7a,
	0x75, 0x72, 0x65, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x48, 0x75, 0x62, 0x57, 0x72, 0x69, 0x74, 0x65,
	0x41, 0x72, 0x67, 0x73, 0x52, 0x0d, 0x61, 0x7a, 0x75, 0x72, 0x65, 0x45, 0x76, 0x65, 0x6e, 0x74,
	0x48, 0x75, 0x62, 0x12, 0x3e, 0x0a, 0x0a, 0x67, 0x63, 0x70, 0x5f, 0x70, 0x75, 0x62, 0x73, 0x75,
	0x62, 0x18, 0x6f, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73,
	0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x47, 0x43, 0x50, 0x50, 0x75, 0x62, 0x53, 0x75, 0x62, 0x57,
	0x72, 0x69, 0x74, 0x65, 0x41, 0x72, 0x67, 0x73, 0x52, 0x09, 0x67, 0x63, 0x70, 0x50, 0x75, 0x62,
	0x73, 0x75, 0x62, 0x12, 0x44, 0x0a, 0x0c, 0x6b, 0x75, 0x62, 0x65, 0x6d, 0x71, 0x5f, 0x71, 0x75,
	0x65, 0x75, 0x65, 0x18, 0x70, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x4b, 0x75, 0x62, 0x65, 0x4d, 0x51, 0x51, 0x75,
	0x65, 0x75, 0x65, 0x57, 0x72, 0x69, 0x74, 0x65, 0x41, 0x72, 0x67, 0x73, 0x52, 0x0b, 0x6b, 0x75,
	0x62, 0x65, 0x6d, 0x71, 0x51, 0x75, 0x65, 0x75, 0x65, 0x12, 0x44, 0x0a, 0x0c, 0x72, 0x65, 0x64,
	0x69, 0x73, 0x5f, 0x70, 0x75, 0x62, 0x73, 0x75, 0x62, 0x18, 0x71, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x21, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x52, 0x65,
	0x64, 0x69, 0x73, 0x50, 0x75, 0x62, 0x53, 0x75, 0x62, 0x57, 0x72, 0x69, 0x74, 0x65, 0x41, 0x72,
	0x67, 0x73, 0x52, 0x0b, 0x72, 0x65, 0x64, 0x69, 0x73, 0x50, 0x75, 0x62, 0x73, 0x75, 0x62, 0x12,
	0x47, 0x0a, 0x0d, 0x72, 0x65, 0x64, 0x69, 0x73, 0x5f, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x73,
	0x18, 0x72, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x22, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e,
	0x61, 0x72, 0x67, 0x73, 0x2e, 0x52, 0x65, 0x64, 0x69, 0x73, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d,
	0x73, 0x57, 0x72, 0x69, 0x74, 0x65, 0x41, 0x72, 0x67, 0x73, 0x52, 0x0c, 0x72, 0x65, 0x64, 0x69,
	0x73, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x73, 0x12, 0x34, 0x0a, 0x06, 0x70, 0x75, 0x6c, 0x73,
	0x61, 0x72, 0x18, 0x73, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x73, 0x61, 0x72, 0x57, 0x72, 0x69,
	0x74, 0x65, 0x41, 0x72, 0x67, 0x73, 0x52, 0x06, 0x70, 0x75, 0x6c, 0x73, 0x61, 0x72, 0x12, 0x4a,
	0x0a, 0x0e, 0x72, 0x61, 0x62, 0x62, 0x69, 0x74, 0x5f, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x73,
	0x18, 0x74, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x23, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e,
	0x61, 0x72, 0x67, 0x73, 0x2e, 0x52, 0x61, 0x62, 0x62, 0x69, 0x74, 0x53, 0x74, 0x72, 0x65, 0x61,
	0x6d, 0x73, 0x57, 0x72, 0x69, 0x74, 0x65, 0x41, 0x72, 0x67, 0x73, 0x52, 0x0d, 0x72, 0x61, 0x62,
	0x62, 0x69, 0x74, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x73, 0x12, 0x4a, 0x0a, 0x0e, 0x6e, 0x61,
	0x74, 0x73, 0x5f, 0x6a, 0x65, 0x74, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x18, 0x75, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x23, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73,
	0x2e, 0x4e, 0x61, 0x74, 0x73, 0x4a, 0x65, 0x74, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x57, 0x72,
	0x69, 0x74, 0x65, 0x41, 0x72, 0x67, 0x73, 0x52, 0x0d, 0x6e, 0x61, 0x74, 0x73, 0x4a, 0x65, 0x74,
	0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x12, 0x41, 0x0a, 0x0b, 0x61, 0x77, 0x73, 0x5f, 0x6b, 0x69,
	0x6e, 0x65, 0x73, 0x69, 0x73, 0x18, 0x76, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x41, 0x57, 0x53, 0x4b, 0x69, 0x6e,
	0x65, 0x73, 0x69, 0x73, 0x57, 0x72, 0x69, 0x74, 0x65, 0x41, 0x72, 0x67, 0x73, 0x52, 0x0a, 0x61,
	0x77, 0x73, 0x4b, 0x69, 0x6e, 0x65, 0x73, 0x69, 0x73, 0x12, 0x37, 0x0a, 0x07, 0x6d, 0x65, 0x6d,
	0x70, 0x68, 0x69, 0x73, 0x18, 0x77, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x4d, 0x65, 0x6d, 0x70, 0x68, 0x69, 0x73,
	0x57, 0x72, 0x69, 0x74, 0x65, 0x41, 0x72, 0x67, 0x73, 0x52, 0x07, 0x6d, 0x65, 0x6d, 0x70, 0x68,
	0x69, 0x73, 0x22, 0x25, 0x0a, 0x13, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x54, 0x75, 0x6e, 0x6e,
	0x65, 0x6c, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0x23, 0x0a, 0x11, 0x53, 0x74, 0x6f,
	0x70, 0x54, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0x25,
	0x0a, 0x13, 0x52, 0x65, 0x73, 0x75, 0x6d, 0x65, 0x54, 0x75, 0x6e, 0x6e, 0x65, 0x6c, 0x4f, 0x70,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x02, 0x69, 0x64, 0x42, 0x3b, 0x5a, 0x39, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x64, 0x61, 0x6c, 0x2f, 0x70, 0x6c,
	0x75, 0x6d, 0x62, 0x65, 0x72, 0x2d, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x73, 0x2f, 0x62, 0x75,
	0x69, 0x6c, 0x64, 0x2f, 0x67, 0x6f, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x6f, 0x70,
	0x74, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_opts_ps_opts_manage_tunnel_proto_rawDescOnce sync.Once
	file_opts_ps_opts_manage_tunnel_proto_rawDescData = file_opts_ps_opts_manage_tunnel_proto_rawDesc
)

func file_opts_ps_opts_manage_tunnel_proto_rawDescGZIP() []byte {
	file_opts_ps_opts_manage_tunnel_proto_rawDescOnce.Do(func() {
		file_opts_ps_opts_manage_tunnel_proto_rawDescData = protoimpl.X.CompressGZIP(file_opts_ps_opts_manage_tunnel_proto_rawDescData)
	})
	return file_opts_ps_opts_manage_tunnel_proto_rawDescData
}

var file_opts_ps_opts_manage_tunnel_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_opts_ps_opts_manage_tunnel_proto_goTypes = []interface{}{
	(*GetTunnelOptions)(nil),              // 0: protos.opts.GetTunnelOptions
	(*CreateTunnelOptions)(nil),           // 1: protos.opts.CreateTunnelOptions
	(*DeleteTunnelOptions)(nil),           // 2: protos.opts.DeleteTunnelOptions
	(*StopTunnelOptions)(nil),             // 3: protos.opts.StopTunnelOptions
	(*ResumeTunnelOptions)(nil),           // 4: protos.opts.ResumeTunnelOptions
	(*args.KafkaWriteArgs)(nil),           // 5: protos.args.KafkaWriteArgs
	(*args.ActiveMQWriteArgs)(nil),        // 6: protos.args.ActiveMQWriteArgs
	(*args.AWSSQSWriteArgs)(nil),          // 7: protos.args.AWSSQSWriteArgs
	(*args.AWSSNSWriteArgs)(nil),          // 8: protos.args.AWSSNSWriteArgs
	(*args.NatsWriteArgs)(nil),            // 9: protos.args.NatsWriteArgs
	(*args.NatsStreamingWriteArgs)(nil),   // 10: protos.args.NatsStreamingWriteArgs
	(*args.NSQWriteArgs)(nil),             // 11: protos.args.NSQWriteArgs
	(*args.RabbitWriteArgs)(nil),          // 12: protos.args.RabbitWriteArgs
	(*args.MQTTWriteArgs)(nil),            // 13: protos.args.MQTTWriteArgs
	(*args.AzureServiceBusWriteArgs)(nil), // 14: protos.args.AzureServiceBusWriteArgs
	(*args.AzureEventHubWriteArgs)(nil),   // 15: protos.args.AzureEventHubWriteArgs
	(*args.GCPPubSubWriteArgs)(nil),       // 16: protos.args.GCPPubSubWriteArgs
	(*args.KubeMQQueueWriteArgs)(nil),     // 17: protos.args.KubeMQQueueWriteArgs
	(*args.RedisPubSubWriteArgs)(nil),     // 18: protos.args.RedisPubSubWriteArgs
	(*args.RedisStreamsWriteArgs)(nil),    // 19: protos.args.RedisStreamsWriteArgs
	(*args.PulsarWriteArgs)(nil),          // 20: protos.args.PulsarWriteArgs
	(*args.RabbitStreamsWriteArgs)(nil),   // 21: protos.args.RabbitStreamsWriteArgs
	(*args.NatsJetstreamWriteArgs)(nil),   // 22: protos.args.NatsJetstreamWriteArgs
	(*args.AWSKinesisWriteArgs)(nil),      // 23: protos.args.AWSKinesisWriteArgs
	(*args.MemphisWriteArgs)(nil),         // 24: protos.args.MemphisWriteArgs
}
var file_opts_ps_opts_manage_tunnel_proto_depIdxs = []int32{
	5,  // 0: protos.opts.CreateTunnelOptions.kafka:type_name -> protos.args.KafkaWriteArgs
	6,  // 1: protos.opts.CreateTunnelOptions.activemq:type_name -> protos.args.ActiveMQWriteArgs
	7,  // 2: protos.opts.CreateTunnelOptions.aws_sqs:type_name -> protos.args.AWSSQSWriteArgs
	8,  // 3: protos.opts.CreateTunnelOptions.aws_sns:type_name -> protos.args.AWSSNSWriteArgs
	9,  // 4: protos.opts.CreateTunnelOptions.nats:type_name -> protos.args.NatsWriteArgs
	10, // 5: protos.opts.CreateTunnelOptions.nats_streaming:type_name -> protos.args.NatsStreamingWriteArgs
	11, // 6: protos.opts.CreateTunnelOptions.nsq:type_name -> protos.args.NSQWriteArgs
	12, // 7: protos.opts.CreateTunnelOptions.rabbit:type_name -> protos.args.RabbitWriteArgs
	13, // 8: protos.opts.CreateTunnelOptions.mqtt:type_name -> protos.args.MQTTWriteArgs
	14, // 9: protos.opts.CreateTunnelOptions.azure_service_bus:type_name -> protos.args.AzureServiceBusWriteArgs
	15, // 10: protos.opts.CreateTunnelOptions.azure_event_hub:type_name -> protos.args.AzureEventHubWriteArgs
	16, // 11: protos.opts.CreateTunnelOptions.gcp_pubsub:type_name -> protos.args.GCPPubSubWriteArgs
	17, // 12: protos.opts.CreateTunnelOptions.kubemq_queue:type_name -> protos.args.KubeMQQueueWriteArgs
	18, // 13: protos.opts.CreateTunnelOptions.redis_pubsub:type_name -> protos.args.RedisPubSubWriteArgs
	19, // 14: protos.opts.CreateTunnelOptions.redis_streams:type_name -> protos.args.RedisStreamsWriteArgs
	20, // 15: protos.opts.CreateTunnelOptions.pulsar:type_name -> protos.args.PulsarWriteArgs
	21, // 16: protos.opts.CreateTunnelOptions.rabbit_streams:type_name -> protos.args.RabbitStreamsWriteArgs
	22, // 17: protos.opts.CreateTunnelOptions.nats_jetstream:type_name -> protos.args.NatsJetstreamWriteArgs
	23, // 18: protos.opts.CreateTunnelOptions.aws_kinesis:type_name -> protos.args.AWSKinesisWriteArgs
	24, // 19: protos.opts.CreateTunnelOptions.memphis:type_name -> protos.args.MemphisWriteArgs
	20, // [20:20] is the sub-list for method output_type
	20, // [20:20] is the sub-list for method input_type
	20, // [20:20] is the sub-list for extension type_name
	20, // [20:20] is the sub-list for extension extendee
	0,  // [0:20] is the sub-list for field type_name
}

func init() { file_opts_ps_opts_manage_tunnel_proto_init() }
func file_opts_ps_opts_manage_tunnel_proto_init() {
	if File_opts_ps_opts_manage_tunnel_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_opts_ps_opts_manage_tunnel_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetTunnelOptions); i {
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
		file_opts_ps_opts_manage_tunnel_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateTunnelOptions); i {
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
		file_opts_ps_opts_manage_tunnel_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteTunnelOptions); i {
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
		file_opts_ps_opts_manage_tunnel_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StopTunnelOptions); i {
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
		file_opts_ps_opts_manage_tunnel_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResumeTunnelOptions); i {
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
			RawDescriptor: file_opts_ps_opts_manage_tunnel_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_opts_ps_opts_manage_tunnel_proto_goTypes,
		DependencyIndexes: file_opts_ps_opts_manage_tunnel_proto_depIdxs,
		MessageInfos:      file_opts_ps_opts_manage_tunnel_proto_msgTypes,
	}.Build()
	File_opts_ps_opts_manage_tunnel_proto = out.File
	file_opts_ps_opts_manage_tunnel_proto_rawDesc = nil
	file_opts_ps_opts_manage_tunnel_proto_goTypes = nil
	file_opts_ps_opts_manage_tunnel_proto_depIdxs = nil
}
