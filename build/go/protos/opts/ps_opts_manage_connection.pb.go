// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.6
// source: opts/ps_opts_manage_connection.proto

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

type GetConnectionOptions struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// @gotags: kong:"help='ID of the connection to get (leave empty to get all)'"
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty" kong:"help='ID of the connection to get (leave empty to get all)'"`
}

func (x *GetConnectionOptions) Reset() {
	*x = GetConnectionOptions{}
	if protoimpl.UnsafeEnabled {
		mi := &file_opts_ps_opts_manage_connection_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetConnectionOptions) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetConnectionOptions) ProtoMessage() {}

func (x *GetConnectionOptions) ProtoReflect() protoreflect.Message {
	mi := &file_opts_ps_opts_manage_connection_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetConnectionOptions.ProtoReflect.Descriptor instead.
func (*GetConnectionOptions) Descriptor() ([]byte, []int) {
	return file_opts_ps_opts_manage_connection_proto_rawDescGZIP(), []int{0}
}

func (x *GetConnectionOptions) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type CreateConnectionOptions struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// @gotags: kong:"help='Friendly name for the connection', required"
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty" kong:"help='Friendly name for the connection', required"`
	// @gotags: kong:"help='Optional notes to associate with the connection'"
	Notes string `protobuf:"bytes,2,opt,name=notes,proto3" json:"notes,omitempty" kong:"help='Optional notes to associate with the connection'"`
	// @gotags: kong:"cmd,help='Apache Kafka'"
	Kafka *args.KafkaConn `protobuf:"bytes,100,opt,name=kafka,proto3" json:"kafka,omitempty" kong:"cmd,help='Apache Kafka'"`
	// @gotags: kong:"cmd,help='ActiveMQ'"
	ActiveMq *args.ActiveMQConn `protobuf:"bytes,101,opt,name=active_mq,json=activeMq,proto3" json:"active_mq,omitempty" kong:"cmd,help='ActiveMQ'"`
	// @gotags: kong:"cmd,help='AWS Simple Queue Service'"
	AwsSqs *args.AWSSQSConn `protobuf:"bytes,102,opt,name=aws_sqs,json=awsSqs,proto3" json:"aws_sqs,omitempty" kong:"cmd,help='AWS Simple Queue Service'"`
	// @gotags: kong:"cmd,help='AWS Simple Notification Service'"
	AwsSns *args.AWSSNSConn `protobuf:"bytes,103,opt,name=aws_sns,json=awsSns,proto3" json:"aws_sns,omitempty" kong:"cmd,help='AWS Simple Notification Service'"`
	// @gotags: kong:"cmd,help='Mongo (CDC)'"
	Mongo *args.MongoConn `protobuf:"bytes,104,opt,name=mongo,proto3" json:"mongo,omitempty" kong:"cmd,help='Mongo (CDC)'"`
	// @gotags: kong:"cmd,help='NATS PubSub'"
	Nats *args.NatsConn `protobuf:"bytes,105,opt,name=nats,proto3" json:"nats,omitempty" kong:"cmd,help='NATS PubSub'"`
	// @gotags: kong:"cmd,help='NATS Streaming (deprecated)'"
	NatsStreaming *args.NatsStreamingConn `protobuf:"bytes,106,opt,name=nats_streaming,json=natsStreaming,proto3" json:"nats_streaming,omitempty" kong:"cmd,help='NATS Streaming (deprecated)'"`
	// @gotags: kong:"cmd,help='NSQ'"
	Nsq *args.NSQConn `protobuf:"bytes,107,opt,name=nsq,proto3" json:"nsq,omitempty" kong:"cmd,help='NSQ'"`
	// @gotags: kong:"cmd,help='PostgreSQL (CDC)'"
	Postgres *args.PostgresConn `protobuf:"bytes,108,opt,name=postgres,proto3" json:"postgres,omitempty" kong:"cmd,help='PostgreSQL (CDC)'"`
	// @gotags: kong:"cmd,help='Pulsar'"
	Pulsar *args.PulsarConn `protobuf:"bytes,109,opt,name=pulsar,proto3" json:"pulsar,omitempty" kong:"cmd,help='Pulsar'"`
	// @gotags: kong:"cmd,help='Rabbit'"
	Rabbit *args.RabbitConn `protobuf:"bytes,110,opt,name=rabbit,proto3" json:"rabbit,omitempty" kong:"cmd,help='Rabbit'"`
	// @gotags: kong:"cmd,help='Rabbit Streams'"
	RabbitStreams *args.RabbitStreamsConn `protobuf:"bytes,111,opt,name=rabbit_streams,json=rabbitStreams,proto3" json:"rabbit_streams,omitempty" kong:"cmd,help='Rabbit Streams'"`
	// @gotags: kong:"cmd,help='Redis PubSub'"
	RedisPubsub *args.RedisPubSubConn `protobuf:"bytes,112,opt,name=redis_pubsub,json=redisPubsub,proto3" json:"redis_pubsub,omitempty" kong:"cmd,help='Redis PubSub'"`
	// @gotags: kong:"cmd,help='Redis Streams'"
	RedisStreams *args.RedisStreamsConn `protobuf:"bytes,113,opt,name=redis_streams,json=redisStreams,proto3" json:"redis_streams,omitempty" kong:"cmd,help='Redis Streams'"`
	// @gotags: kong:"cmd,help='Azure Event Hub'"
	AzureEventHub *args.AzureEventHubConn `protobuf:"bytes,114,opt,name=azure_event_hub,json=azureEventHub,proto3" json:"azure_event_hub,omitempty" kong:"cmd,help='Azure Event Hub'"`
	// @gotags: kong:"cmd,help='Azure Service Bus'"
	AzureServiceBus *args.AzureServiceBusConn `protobuf:"bytes,115,opt,name=azure_service_bus,json=azureServiceBus,proto3" json:"azure_service_bus,omitempty" kong:"cmd,help='Azure Service Bus'"`
	// @gotags: kong:"cmd,help='MQTT'"
	Mqtt *args.MQTTConn `protobuf:"bytes,116,opt,name=mqtt,proto3" json:"mqtt,omitempty" kong:"cmd,help='MQTT'"`
	// @gotags: kong:"cmd,help='KubeMQ Queue'"
	KubemqQueue *args.KubeMQQueueConn `protobuf:"bytes,117,opt,name=kubemq_queue,json=kubemqQueue,proto3" json:"kubemq_queue,omitempty" kong:"cmd,help='KubeMQ Queue'"`
	// @gotags: kong:"cmd,help='Google Cloud Pub/Sub'"
	GcpPubsub *args.GCPPubSubConn `protobuf:"bytes,118,opt,name=gcp_pubsub,json=gcpPubsub,proto3" json:"gcp_pubsub,omitempty" kong:"cmd,help='Google Cloud Pub/Sub'"`
	// @gotags: kong:"cmd,help='NATS JetStream'"
	NatsJetstream *args.NatsJetstreamConn `protobuf:"bytes,119,opt,name=nats_jetstream,json=natsJetstream,proto3" json:"nats_jetstream,omitempty" kong:"cmd,help='NATS JetStream'"`
	// @gotags: kong:"cmd,help='AWS Kinesis'"
	AwsKinesis *args.AWSKinesisConn `protobuf:"bytes,120,opt,name=aws_kinesis,json=awsKinesis,proto3" json:"aws_kinesis,omitempty" kong:"cmd,help='AWS Kinesis'"`
}

func (x *CreateConnectionOptions) Reset() {
	*x = CreateConnectionOptions{}
	if protoimpl.UnsafeEnabled {
		mi := &file_opts_ps_opts_manage_connection_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateConnectionOptions) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateConnectionOptions) ProtoMessage() {}

func (x *CreateConnectionOptions) ProtoReflect() protoreflect.Message {
	mi := &file_opts_ps_opts_manage_connection_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateConnectionOptions.ProtoReflect.Descriptor instead.
func (*CreateConnectionOptions) Descriptor() ([]byte, []int) {
	return file_opts_ps_opts_manage_connection_proto_rawDescGZIP(), []int{1}
}

func (x *CreateConnectionOptions) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *CreateConnectionOptions) GetNotes() string {
	if x != nil {
		return x.Notes
	}
	return ""
}

func (x *CreateConnectionOptions) GetKafka() *args.KafkaConn {
	if x != nil {
		return x.Kafka
	}
	return nil
}

func (x *CreateConnectionOptions) GetActiveMq() *args.ActiveMQConn {
	if x != nil {
		return x.ActiveMq
	}
	return nil
}

func (x *CreateConnectionOptions) GetAwsSqs() *args.AWSSQSConn {
	if x != nil {
		return x.AwsSqs
	}
	return nil
}

func (x *CreateConnectionOptions) GetAwsSns() *args.AWSSNSConn {
	if x != nil {
		return x.AwsSns
	}
	return nil
}

func (x *CreateConnectionOptions) GetMongo() *args.MongoConn {
	if x != nil {
		return x.Mongo
	}
	return nil
}

func (x *CreateConnectionOptions) GetNats() *args.NatsConn {
	if x != nil {
		return x.Nats
	}
	return nil
}

func (x *CreateConnectionOptions) GetNatsStreaming() *args.NatsStreamingConn {
	if x != nil {
		return x.NatsStreaming
	}
	return nil
}

func (x *CreateConnectionOptions) GetNsq() *args.NSQConn {
	if x != nil {
		return x.Nsq
	}
	return nil
}

func (x *CreateConnectionOptions) GetPostgres() *args.PostgresConn {
	if x != nil {
		return x.Postgres
	}
	return nil
}

func (x *CreateConnectionOptions) GetPulsar() *args.PulsarConn {
	if x != nil {
		return x.Pulsar
	}
	return nil
}

func (x *CreateConnectionOptions) GetRabbit() *args.RabbitConn {
	if x != nil {
		return x.Rabbit
	}
	return nil
}

func (x *CreateConnectionOptions) GetRabbitStreams() *args.RabbitStreamsConn {
	if x != nil {
		return x.RabbitStreams
	}
	return nil
}

func (x *CreateConnectionOptions) GetRedisPubsub() *args.RedisPubSubConn {
	if x != nil {
		return x.RedisPubsub
	}
	return nil
}

func (x *CreateConnectionOptions) GetRedisStreams() *args.RedisStreamsConn {
	if x != nil {
		return x.RedisStreams
	}
	return nil
}

func (x *CreateConnectionOptions) GetAzureEventHub() *args.AzureEventHubConn {
	if x != nil {
		return x.AzureEventHub
	}
	return nil
}

func (x *CreateConnectionOptions) GetAzureServiceBus() *args.AzureServiceBusConn {
	if x != nil {
		return x.AzureServiceBus
	}
	return nil
}

func (x *CreateConnectionOptions) GetMqtt() *args.MQTTConn {
	if x != nil {
		return x.Mqtt
	}
	return nil
}

func (x *CreateConnectionOptions) GetKubemqQueue() *args.KubeMQQueueConn {
	if x != nil {
		return x.KubemqQueue
	}
	return nil
}

func (x *CreateConnectionOptions) GetGcpPubsub() *args.GCPPubSubConn {
	if x != nil {
		return x.GcpPubsub
	}
	return nil
}

func (x *CreateConnectionOptions) GetNatsJetstream() *args.NatsJetstreamConn {
	if x != nil {
		return x.NatsJetstream
	}
	return nil
}

func (x *CreateConnectionOptions) GetAwsKinesis() *args.AWSKinesisConn {
	if x != nil {
		return x.AwsKinesis
	}
	return nil
}

type DeleteConnectionOptions struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// @gotags: kong:"help='ID of the connection to delete',required=true"
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty" kong:"help='ID of the connection to delete',required=true"`
}

func (x *DeleteConnectionOptions) Reset() {
	*x = DeleteConnectionOptions{}
	if protoimpl.UnsafeEnabled {
		mi := &file_opts_ps_opts_manage_connection_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteConnectionOptions) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteConnectionOptions) ProtoMessage() {}

func (x *DeleteConnectionOptions) ProtoReflect() protoreflect.Message {
	mi := &file_opts_ps_opts_manage_connection_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteConnectionOptions.ProtoReflect.Descriptor instead.
func (*DeleteConnectionOptions) Descriptor() ([]byte, []int) {
	return file_opts_ps_opts_manage_connection_proto_rawDescGZIP(), []int{2}
}

func (x *DeleteConnectionOptions) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

var File_opts_ps_opts_manage_connection_proto protoreflect.FileDescriptor

var file_opts_ps_opts_manage_connection_proto_rawDesc = []byte{
	0x0a, 0x24, 0x6f, 0x70, 0x74, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x6f, 0x70, 0x74, 0x73, 0x5f, 0x6d,
	0x61, 0x6e, 0x61, 0x67, 0x65, 0x5f, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x6f,
	0x70, 0x74, 0x73, 0x1a, 0x1b, 0x61, 0x72, 0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67,
	0x73, 0x5f, 0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x6d, 0x71, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x1e, 0x61, 0x72, 0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x61,
	0x77, 0x73, 0x5f, 0x6b, 0x69, 0x6e, 0x65, 0x73, 0x69, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x1a, 0x61, 0x72, 0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x61,
	0x77, 0x73, 0x5f, 0x73, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1a, 0x61, 0x72,
	0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x61, 0x77, 0x73, 0x5f, 0x73,
	0x71, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x22, 0x61, 0x72, 0x67, 0x73, 0x2f, 0x70,
	0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x61, 0x7a, 0x75, 0x72, 0x65, 0x5f, 0x65, 0x76, 0x65,
	0x6e, 0x74, 0x5f, 0x68, 0x75, 0x62, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x24, 0x61, 0x72,
	0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x61, 0x7a, 0x75, 0x72, 0x65,
	0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x5f, 0x62, 0x75, 0x73, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x1a, 0x1d, 0x61, 0x72, 0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73,
	0x5f, 0x67, 0x63, 0x70, 0x5f, 0x70, 0x75, 0x62, 0x73, 0x75, 0x62, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x1a, 0x18, 0x61, 0x72, 0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f,
	0x6b, 0x61, 0x66, 0x6b, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x61, 0x72, 0x67,
	0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x6b, 0x75, 0x62, 0x65, 0x6d, 0x71,
	0x5f, 0x71, 0x75, 0x65, 0x75, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x18, 0x61, 0x72,
	0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x6d, 0x6f, 0x6e, 0x67, 0x6f,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x17, 0x61, 0x72, 0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f,
	0x61, 0x72, 0x67, 0x73, 0x5f, 0x6d, 0x71, 0x74, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x17, 0x61, 0x72, 0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x6e, 0x61,
	0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x21, 0x61, 0x72, 0x67, 0x73, 0x2f, 0x70,
	0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x6e, 0x61, 0x74, 0x73, 0x5f, 0x6a, 0x65, 0x74, 0x73,
	0x74, 0x72, 0x65, 0x61, 0x6d, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x21, 0x61, 0x72, 0x67,
	0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x6e, 0x61, 0x74, 0x73, 0x5f, 0x73,
	0x74, 0x72, 0x65, 0x61, 0x6d, 0x69, 0x6e, 0x67, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x16,
	0x61, 0x72, 0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x6e, 0x73, 0x71,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1b, 0x61, 0x72, 0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f,
	0x61, 0x72, 0x67, 0x73, 0x5f, 0x70, 0x6f, 0x73, 0x74, 0x67, 0x72, 0x65, 0x73, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x19, 0x61, 0x72, 0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67,
	0x73, 0x5f, 0x70, 0x75, 0x6c, 0x73, 0x61, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x19,
	0x61, 0x72, 0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x72, 0x61, 0x62,
	0x62, 0x69, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x21, 0x61, 0x72, 0x67, 0x73, 0x2f,
	0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x72, 0x61, 0x62, 0x62, 0x69, 0x74, 0x5f, 0x73,
	0x74, 0x72, 0x65, 0x61, 0x6d, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x61, 0x72,
	0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x72, 0x65, 0x64, 0x69, 0x73,
	0x5f, 0x70, 0x75, 0x62, 0x73, 0x75, 0x62, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x20, 0x61,
	0x72, 0x67, 0x73, 0x2f, 0x70, 0x73, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x72, 0x65, 0x64, 0x69,
	0x73, 0x5f, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0x26, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0xfc, 0x09, 0x0a, 0x17, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x4f, 0x70, 0x74, 0x69,
	0x6f, 0x6e, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x6e, 0x6f, 0x74, 0x65, 0x73,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x6e, 0x6f, 0x74, 0x65, 0x73, 0x12, 0x2c, 0x0a,
	0x05, 0x6b, 0x61, 0x66, 0x6b, 0x61, 0x18, 0x64, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x4b, 0x61, 0x66, 0x6b, 0x61,
	0x43, 0x6f, 0x6e, 0x6e, 0x52, 0x05, 0x6b, 0x61, 0x66, 0x6b, 0x61, 0x12, 0x36, 0x0a, 0x09, 0x61,
	0x63, 0x74, 0x69, 0x76, 0x65, 0x5f, 0x6d, 0x71, 0x18, 0x65, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x41, 0x63, 0x74,
	0x69, 0x76, 0x65, 0x4d, 0x51, 0x43, 0x6f, 0x6e, 0x6e, 0x52, 0x08, 0x61, 0x63, 0x74, 0x69, 0x76,
	0x65, 0x4d, 0x71, 0x12, 0x30, 0x0a, 0x07, 0x61, 0x77, 0x73, 0x5f, 0x73, 0x71, 0x73, 0x18, 0x66,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72,
	0x67, 0x73, 0x2e, 0x41, 0x57, 0x53, 0x53, 0x51, 0x53, 0x43, 0x6f, 0x6e, 0x6e, 0x52, 0x06, 0x61,
	0x77, 0x73, 0x53, 0x71, 0x73, 0x12, 0x30, 0x0a, 0x07, 0x61, 0x77, 0x73, 0x5f, 0x73, 0x6e, 0x73,
	0x18, 0x67, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e,
	0x61, 0x72, 0x67, 0x73, 0x2e, 0x41, 0x57, 0x53, 0x53, 0x4e, 0x53, 0x43, 0x6f, 0x6e, 0x6e, 0x52,
	0x06, 0x61, 0x77, 0x73, 0x53, 0x6e, 0x73, 0x12, 0x2c, 0x0a, 0x05, 0x6d, 0x6f, 0x6e, 0x67, 0x6f,
	0x18, 0x68, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e,
	0x61, 0x72, 0x67, 0x73, 0x2e, 0x4d, 0x6f, 0x6e, 0x67, 0x6f, 0x43, 0x6f, 0x6e, 0x6e, 0x52, 0x05,
	0x6d, 0x6f, 0x6e, 0x67, 0x6f, 0x12, 0x29, 0x0a, 0x04, 0x6e, 0x61, 0x74, 0x73, 0x18, 0x69, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67,
	0x73, 0x2e, 0x4e, 0x61, 0x74, 0x73, 0x43, 0x6f, 0x6e, 0x6e, 0x52, 0x04, 0x6e, 0x61, 0x74, 0x73,
	0x12, 0x45, 0x0a, 0x0e, 0x6e, 0x61, 0x74, 0x73, 0x5f, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x69,
	0x6e, 0x67, 0x18, 0x6a, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x4e, 0x61, 0x74, 0x73, 0x53, 0x74, 0x72, 0x65, 0x61,
	0x6d, 0x69, 0x6e, 0x67, 0x43, 0x6f, 0x6e, 0x6e, 0x52, 0x0d, 0x6e, 0x61, 0x74, 0x73, 0x53, 0x74,
	0x72, 0x65, 0x61, 0x6d, 0x69, 0x6e, 0x67, 0x12, 0x26, 0x0a, 0x03, 0x6e, 0x73, 0x71, 0x18, 0x6b,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72,
	0x67, 0x73, 0x2e, 0x4e, 0x53, 0x51, 0x43, 0x6f, 0x6e, 0x6e, 0x52, 0x03, 0x6e, 0x73, 0x71, 0x12,
	0x35, 0x0a, 0x08, 0x70, 0x6f, 0x73, 0x74, 0x67, 0x72, 0x65, 0x73, 0x18, 0x6c, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x19, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e,
	0x50, 0x6f, 0x73, 0x74, 0x67, 0x72, 0x65, 0x73, 0x43, 0x6f, 0x6e, 0x6e, 0x52, 0x08, 0x70, 0x6f,
	0x73, 0x74, 0x67, 0x72, 0x65, 0x73, 0x12, 0x2f, 0x0a, 0x06, 0x70, 0x75, 0x6c, 0x73, 0x61, 0x72,
	0x18, 0x6d, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e,
	0x61, 0x72, 0x67, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x73, 0x61, 0x72, 0x43, 0x6f, 0x6e, 0x6e, 0x52,
	0x06, 0x70, 0x75, 0x6c, 0x73, 0x61, 0x72, 0x12, 0x2f, 0x0a, 0x06, 0x72, 0x61, 0x62, 0x62, 0x69,
	0x74, 0x18, 0x6e, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73,
	0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x52, 0x61, 0x62, 0x62, 0x69, 0x74, 0x43, 0x6f, 0x6e, 0x6e,
	0x52, 0x06, 0x72, 0x61, 0x62, 0x62, 0x69, 0x74, 0x12, 0x45, 0x0a, 0x0e, 0x72, 0x61, 0x62, 0x62,
	0x69, 0x74, 0x5f, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x73, 0x18, 0x6f, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x52,
	0x61, 0x62, 0x62, 0x69, 0x74, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x73, 0x43, 0x6f, 0x6e, 0x6e,
	0x52, 0x0d, 0x72, 0x61, 0x62, 0x62, 0x69, 0x74, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x73, 0x12,
	0x3f, 0x0a, 0x0c, 0x72, 0x65, 0x64, 0x69, 0x73, 0x5f, 0x70, 0x75, 0x62, 0x73, 0x75, 0x62, 0x18,
	0x70, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61,
	0x72, 0x67, 0x73, 0x2e, 0x52, 0x65, 0x64, 0x69, 0x73, 0x50, 0x75, 0x62, 0x53, 0x75, 0x62, 0x43,
	0x6f, 0x6e, 0x6e, 0x52, 0x0b, 0x72, 0x65, 0x64, 0x69, 0x73, 0x50, 0x75, 0x62, 0x73, 0x75, 0x62,
	0x12, 0x42, 0x0a, 0x0d, 0x72, 0x65, 0x64, 0x69, 0x73, 0x5f, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d,
	0x73, 0x18, 0x71, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73,
	0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x52, 0x65, 0x64, 0x69, 0x73, 0x53, 0x74, 0x72, 0x65, 0x61,
	0x6d, 0x73, 0x43, 0x6f, 0x6e, 0x6e, 0x52, 0x0c, 0x72, 0x65, 0x64, 0x69, 0x73, 0x53, 0x74, 0x72,
	0x65, 0x61, 0x6d, 0x73, 0x12, 0x46, 0x0a, 0x0f, 0x61, 0x7a, 0x75, 0x72, 0x65, 0x5f, 0x65, 0x76,
	0x65, 0x6e, 0x74, 0x5f, 0x68, 0x75, 0x62, 0x18, 0x72, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1e, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x41, 0x7a, 0x75, 0x72,
	0x65, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x48, 0x75, 0x62, 0x43, 0x6f, 0x6e, 0x6e, 0x52, 0x0d, 0x61,
	0x7a, 0x75, 0x72, 0x65, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x48, 0x75, 0x62, 0x12, 0x4c, 0x0a, 0x11,
	0x61, 0x7a, 0x75, 0x72, 0x65, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x5f, 0x62, 0x75,
	0x73, 0x18, 0x73, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73,
	0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x41, 0x7a, 0x75, 0x72, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x42, 0x75, 0x73, 0x43, 0x6f, 0x6e, 0x6e, 0x52, 0x0f, 0x61, 0x7a, 0x75, 0x72, 0x65,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x42, 0x75, 0x73, 0x12, 0x29, 0x0a, 0x04, 0x6d, 0x71,
	0x74, 0x74, 0x18, 0x74, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x4d, 0x51, 0x54, 0x54, 0x43, 0x6f, 0x6e, 0x6e, 0x52,
	0x04, 0x6d, 0x71, 0x74, 0x74, 0x12, 0x3f, 0x0a, 0x0c, 0x6b, 0x75, 0x62, 0x65, 0x6d, 0x71, 0x5f,
	0x71, 0x75, 0x65, 0x75, 0x65, 0x18, 0x75, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x4b, 0x75, 0x62, 0x65, 0x4d, 0x51,
	0x51, 0x75, 0x65, 0x75, 0x65, 0x43, 0x6f, 0x6e, 0x6e, 0x52, 0x0b, 0x6b, 0x75, 0x62, 0x65, 0x6d,
	0x71, 0x51, 0x75, 0x65, 0x75, 0x65, 0x12, 0x39, 0x0a, 0x0a, 0x67, 0x63, 0x70, 0x5f, 0x70, 0x75,
	0x62, 0x73, 0x75, 0x62, 0x18, 0x76, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x47, 0x43, 0x50, 0x50, 0x75, 0x62, 0x53,
	0x75, 0x62, 0x43, 0x6f, 0x6e, 0x6e, 0x52, 0x09, 0x67, 0x63, 0x70, 0x50, 0x75, 0x62, 0x73, 0x75,
	0x62, 0x12, 0x45, 0x0a, 0x0e, 0x6e, 0x61, 0x74, 0x73, 0x5f, 0x6a, 0x65, 0x74, 0x73, 0x74, 0x72,
	0x65, 0x61, 0x6d, 0x18, 0x77, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x4e, 0x61, 0x74, 0x73, 0x4a, 0x65, 0x74, 0x73,
	0x74, 0x72, 0x65, 0x61, 0x6d, 0x43, 0x6f, 0x6e, 0x6e, 0x52, 0x0d, 0x6e, 0x61, 0x74, 0x73, 0x4a,
	0x65, 0x74, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x12, 0x3c, 0x0a, 0x0b, 0x61, 0x77, 0x73, 0x5f,
	0x6b, 0x69, 0x6e, 0x65, 0x73, 0x69, 0x73, 0x18, 0x78, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x2e, 0x41, 0x57, 0x53, 0x4b,
	0x69, 0x6e, 0x65, 0x73, 0x69, 0x73, 0x43, 0x6f, 0x6e, 0x6e, 0x52, 0x0a, 0x61, 0x77, 0x73, 0x4b,
	0x69, 0x6e, 0x65, 0x73, 0x69, 0x73, 0x22, 0x29, 0x0a, 0x17, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65,
	0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e,
	0x73, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69,
	0x64, 0x42, 0x3b, 0x5a, 0x39, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f,
	0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x64, 0x61, 0x6c, 0x2f, 0x70, 0x6c, 0x75, 0x6d, 0x62, 0x65,
	0x72, 0x2d, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x73, 0x2f, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x2f,
	0x67, 0x6f, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x6f, 0x70, 0x74, 0x73, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_opts_ps_opts_manage_connection_proto_rawDescOnce sync.Once
	file_opts_ps_opts_manage_connection_proto_rawDescData = file_opts_ps_opts_manage_connection_proto_rawDesc
)

func file_opts_ps_opts_manage_connection_proto_rawDescGZIP() []byte {
	file_opts_ps_opts_manage_connection_proto_rawDescOnce.Do(func() {
		file_opts_ps_opts_manage_connection_proto_rawDescData = protoimpl.X.CompressGZIP(file_opts_ps_opts_manage_connection_proto_rawDescData)
	})
	return file_opts_ps_opts_manage_connection_proto_rawDescData
}

var file_opts_ps_opts_manage_connection_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_opts_ps_opts_manage_connection_proto_goTypes = []interface{}{
	(*GetConnectionOptions)(nil),     // 0: protos.opts.GetConnectionOptions
	(*CreateConnectionOptions)(nil),  // 1: protos.opts.CreateConnectionOptions
	(*DeleteConnectionOptions)(nil),  // 2: protos.opts.DeleteConnectionOptions
	(*args.KafkaConn)(nil),           // 3: protos.args.KafkaConn
	(*args.ActiveMQConn)(nil),        // 4: protos.args.ActiveMQConn
	(*args.AWSSQSConn)(nil),          // 5: protos.args.AWSSQSConn
	(*args.AWSSNSConn)(nil),          // 6: protos.args.AWSSNSConn
	(*args.MongoConn)(nil),           // 7: protos.args.MongoConn
	(*args.NatsConn)(nil),            // 8: protos.args.NatsConn
	(*args.NatsStreamingConn)(nil),   // 9: protos.args.NatsStreamingConn
	(*args.NSQConn)(nil),             // 10: protos.args.NSQConn
	(*args.PostgresConn)(nil),        // 11: protos.args.PostgresConn
	(*args.PulsarConn)(nil),          // 12: protos.args.PulsarConn
	(*args.RabbitConn)(nil),          // 13: protos.args.RabbitConn
	(*args.RabbitStreamsConn)(nil),   // 14: protos.args.RabbitStreamsConn
	(*args.RedisPubSubConn)(nil),     // 15: protos.args.RedisPubSubConn
	(*args.RedisStreamsConn)(nil),    // 16: protos.args.RedisStreamsConn
	(*args.AzureEventHubConn)(nil),   // 17: protos.args.AzureEventHubConn
	(*args.AzureServiceBusConn)(nil), // 18: protos.args.AzureServiceBusConn
	(*args.MQTTConn)(nil),            // 19: protos.args.MQTTConn
	(*args.KubeMQQueueConn)(nil),     // 20: protos.args.KubeMQQueueConn
	(*args.GCPPubSubConn)(nil),       // 21: protos.args.GCPPubSubConn
	(*args.NatsJetstreamConn)(nil),   // 22: protos.args.NatsJetstreamConn
	(*args.AWSKinesisConn)(nil),      // 23: protos.args.AWSKinesisConn
}
var file_opts_ps_opts_manage_connection_proto_depIdxs = []int32{
	3,  // 0: protos.opts.CreateConnectionOptions.kafka:type_name -> protos.args.KafkaConn
	4,  // 1: protos.opts.CreateConnectionOptions.active_mq:type_name -> protos.args.ActiveMQConn
	5,  // 2: protos.opts.CreateConnectionOptions.aws_sqs:type_name -> protos.args.AWSSQSConn
	6,  // 3: protos.opts.CreateConnectionOptions.aws_sns:type_name -> protos.args.AWSSNSConn
	7,  // 4: protos.opts.CreateConnectionOptions.mongo:type_name -> protos.args.MongoConn
	8,  // 5: protos.opts.CreateConnectionOptions.nats:type_name -> protos.args.NatsConn
	9,  // 6: protos.opts.CreateConnectionOptions.nats_streaming:type_name -> protos.args.NatsStreamingConn
	10, // 7: protos.opts.CreateConnectionOptions.nsq:type_name -> protos.args.NSQConn
	11, // 8: protos.opts.CreateConnectionOptions.postgres:type_name -> protos.args.PostgresConn
	12, // 9: protos.opts.CreateConnectionOptions.pulsar:type_name -> protos.args.PulsarConn
	13, // 10: protos.opts.CreateConnectionOptions.rabbit:type_name -> protos.args.RabbitConn
	14, // 11: protos.opts.CreateConnectionOptions.rabbit_streams:type_name -> protos.args.RabbitStreamsConn
	15, // 12: protos.opts.CreateConnectionOptions.redis_pubsub:type_name -> protos.args.RedisPubSubConn
	16, // 13: protos.opts.CreateConnectionOptions.redis_streams:type_name -> protos.args.RedisStreamsConn
	17, // 14: protos.opts.CreateConnectionOptions.azure_event_hub:type_name -> protos.args.AzureEventHubConn
	18, // 15: protos.opts.CreateConnectionOptions.azure_service_bus:type_name -> protos.args.AzureServiceBusConn
	19, // 16: protos.opts.CreateConnectionOptions.mqtt:type_name -> protos.args.MQTTConn
	20, // 17: protos.opts.CreateConnectionOptions.kubemq_queue:type_name -> protos.args.KubeMQQueueConn
	21, // 18: protos.opts.CreateConnectionOptions.gcp_pubsub:type_name -> protos.args.GCPPubSubConn
	22, // 19: protos.opts.CreateConnectionOptions.nats_jetstream:type_name -> protos.args.NatsJetstreamConn
	23, // 20: protos.opts.CreateConnectionOptions.aws_kinesis:type_name -> protos.args.AWSKinesisConn
	21, // [21:21] is the sub-list for method output_type
	21, // [21:21] is the sub-list for method input_type
	21, // [21:21] is the sub-list for extension type_name
	21, // [21:21] is the sub-list for extension extendee
	0,  // [0:21] is the sub-list for field type_name
}

func init() { file_opts_ps_opts_manage_connection_proto_init() }
func file_opts_ps_opts_manage_connection_proto_init() {
	if File_opts_ps_opts_manage_connection_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_opts_ps_opts_manage_connection_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetConnectionOptions); i {
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
		file_opts_ps_opts_manage_connection_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateConnectionOptions); i {
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
		file_opts_ps_opts_manage_connection_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteConnectionOptions); i {
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
			RawDescriptor: file_opts_ps_opts_manage_connection_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_opts_ps_opts_manage_connection_proto_goTypes,
		DependencyIndexes: file_opts_ps_opts_manage_connection_proto_depIdxs,
		MessageInfos:      file_opts_ps_opts_manage_connection_proto_msgTypes,
	}.Build()
	File_opts_ps_opts_manage_connection_proto = out.File
	file_opts_ps_opts_manage_connection_proto_rawDesc = nil
	file_opts_ps_opts_manage_connection_proto_goTypes = nil
	file_opts_ps_opts_manage_connection_proto_depIdxs = nil
}
