// Code generated by generate-conn-opt-func.go. DO NOT EDIT.

package opts

import (
	"github.com/batchcorp/plumber-schemas/build/go/protos/args"
)

func GenerateConnOpts(backend string, connArgs interface{}) (IsConnectionOptions_Conn, bool) {
	switch backend {
	case "gcppubsub":
		asserted, ok := connArgs.(args.GCPPubSubConn)
		if !ok {
			return nil, false
		}

		return &ConnectionOptions_GcpPubsub{
			GcpPubsub: &asserted,
		}, true
	case "natsjetstream":
		asserted, ok := connArgs.(args.NatsJetstreamConn)
		if !ok {
			return nil, false
		}

		return &ConnectionOptions_NatsJetstream{
			NatsJetstream: &asserted,
		}, true
	case "awskinesis":
		asserted, ok := connArgs.(args.AWSKinesisConn)
		if !ok {
			return nil, false
		}

		return &ConnectionOptions_AwsKinesis{
			AwsKinesis: &asserted,
		}, true
	case "redispubsub":
		asserted, ok := connArgs.(args.RedisPubSubConn)
		if !ok {
			return nil, false
		}

		return &ConnectionOptions_RedisPubsub{
			RedisPubsub: &asserted,
		}, true
	case "redisstreams":
		asserted, ok := connArgs.(args.RedisStreamsConn)
		if !ok {
			return nil, false
		}

		return &ConnectionOptions_RedisStreams{
			RedisStreams: &asserted,
		}, true
	case "mqtt":
		asserted, ok := connArgs.(args.MQTTConn)
		if !ok {
			return nil, false
		}

		return &ConnectionOptions_Mqtt{
			Mqtt: &asserted,
		}, true
	case "postgres":
		asserted, ok := connArgs.(args.PostgresConn)
		if !ok {
			return nil, false
		}

		return &ConnectionOptions_Postgres{
			Postgres: &asserted,
		}, true
	case "rabbit":
		asserted, ok := connArgs.(args.RabbitConn)
		if !ok {
			return nil, false
		}

		return &ConnectionOptions_Rabbit{
			Rabbit: &asserted,
		}, true
	case "awssns":
		asserted, ok := connArgs.(args.AWSSNSConn)
		if !ok {
			return nil, false
		}

		return &ConnectionOptions_AwsSns{
			AwsSns: &asserted,
		}, true
	case "nats":
		asserted, ok := connArgs.(args.NatsConn)
		if !ok {
			return nil, false
		}

		return &ConnectionOptions_Nats{
			Nats: &asserted,
		}, true
	case "natsstreaming":
		asserted, ok := connArgs.(args.NatsStreamingConn)
		if !ok {
			return nil, false
		}

		return &ConnectionOptions_NatsStreaming{
			NatsStreaming: &asserted,
		}, true
	case "kafka":
		asserted, ok := connArgs.(args.KafkaConn)
		if !ok {
			return nil, false
		}

		return &ConnectionOptions_Kafka{
			Kafka: &asserted,
		}, true
	case "activemq":
		asserted, ok := connArgs.(args.ActiveMQConn)
		if !ok {
			return nil, false
		}

		return &ConnectionOptions_ActiveMq{
			ActiveMq: &asserted,
		}, true
	case "rabbitstreams":
		asserted, ok := connArgs.(args.RabbitStreamsConn)
		if !ok {
			return nil, false
		}

		return &ConnectionOptions_RabbitStreams{
			RabbitStreams: &asserted,
		}, true
	case "pulsar":
		asserted, ok := connArgs.(args.PulsarConn)
		if !ok {
			return nil, false
		}

		return &ConnectionOptions_Pulsar{
			Pulsar: &asserted,
		}, true
	case "azureeventhub":
		asserted, ok := connArgs.(args.AzureEventHubConn)
		if !ok {
			return nil, false
		}

		return &ConnectionOptions_AzureEventHub{
			AzureEventHub: &asserted,
		}, true
	case "azureservicebus":
		asserted, ok := connArgs.(args.AzureServiceBusConn)
		if !ok {
			return nil, false
		}

		return &ConnectionOptions_AzureServiceBus{
			AzureServiceBus: &asserted,
		}, true
	case "kubemqqueue":
		asserted, ok := connArgs.(args.KubeMQQueueConn)
		if !ok {
			return nil, false
		}

		return &ConnectionOptions_KubemqQueue{
			KubemqQueue: &asserted,
		}, true
	case "memphis":
		asserted, ok := connArgs.(args.MemphisConn)
		if !ok {
			return nil, false
		}

		return &ConnectionOptions_Memphis{
			Memphis: &asserted,
		}, true
	case "awssqs":
		asserted, ok := connArgs.(args.AWSSQSConn)
		if !ok {
			return nil, false
		}

		return &ConnectionOptions_AwsSqs{
			AwsSqs: &asserted,
		}, true
	case "mongo":
		asserted, ok := connArgs.(args.MongoConn)
		if !ok {
			return nil, false
		}

		return &ConnectionOptions_Mongo{
			Mongo: &asserted,
		}, true
	case "nsq":
		asserted, ok := connArgs.(args.NSQConn)
		if !ok {
			return nil, false
		}

		return &ConnectionOptions_Nsq{
			Nsq: &asserted,
		}, true
	default:
		return nil, false
	}
}
