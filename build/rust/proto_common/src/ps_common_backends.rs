// @generated, do not edit
#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[repr(transparent)]
pub struct BackendType(i32);
impl BackendType {
  pub const BACKEND_TYPE_UNSET: BackendType = BackendType(0);
  pub const BACKEND_TYPE_KAFKA: BackendType = BackendType(1);
  pub const BACKEND_TYPE_RABBIT: BackendType = BackendType(2);
  pub const BACKEND_TYPE_RABBIT_STREAMS: BackendType = BackendType(3);
  pub const BACKEND_TYPE_NSQ: BackendType = BackendType(4);
  pub const BACKEND_TYPE_NATS: BackendType = BackendType(5);
  pub const BACKEND_TYPE_NATS_STREAMING: BackendType = BackendType(6);
  pub const BACKEND_TYPE_GCP_PUBSUB: BackendType = BackendType(7);
  pub const BACKEND_TYPE_AZURE_SERVICE_BUS: BackendType = BackendType(8);
  pub const BACKEND_TYPE_AZURE_EVENT_HUB: BackendType = BackendType(9);
  pub const BACKEND_TYPE_AWS_SQS: BackendType = BackendType(10);
  pub const BACKEND_TYPE_AWS_SNS: BackendType = BackendType(11);
  pub const BACKEND_TYPE_REDIS_PUBSUB: BackendType = BackendType(12);
  pub const BACKEND_TYPE_REDIS_STREAMS: BackendType = BackendType(13);
  pub const BACKEND_TYPE_ACTIVEMQ: BackendType = BackendType(14);
  pub const BACKEND_TYPE_PULSAR: BackendType = BackendType(15);
  pub const BACKEND_TYPE_MQTT: BackendType = BackendType(16);
  pub const BACKEND_TYPE_POSTGRES_CDC: BackendType = BackendType(17);
  pub const BACKEND_TYPE_MONGODB_CDC: BackendType = BackendType(18);
  pub const BACKEND_TYPE_KUBE_MQ: BackendType = BackendType(19);
  pub const BACKEND_TYPE_AWS_KINESIS: BackendType = BackendType(20);
  pub const KNOWN_VARIANTS: [BackendType; 21] = [BackendType::BACKEND_TYPE_UNSET, BackendType::BACKEND_TYPE_KAFKA, BackendType::BACKEND_TYPE_RABBIT, BackendType::BACKEND_TYPE_RABBIT_STREAMS, BackendType::BACKEND_TYPE_NSQ, BackendType::BACKEND_TYPE_NATS, BackendType::BACKEND_TYPE_NATS_STREAMING, BackendType::BACKEND_TYPE_GCP_PUBSUB, BackendType::BACKEND_TYPE_AZURE_SERVICE_BUS, BackendType::BACKEND_TYPE_AZURE_EVENT_HUB, BackendType::BACKEND_TYPE_AWS_SQS, BackendType::BACKEND_TYPE_AWS_SNS, BackendType::BACKEND_TYPE_REDIS_PUBSUB, BackendType::BACKEND_TYPE_REDIS_STREAMS, BackendType::BACKEND_TYPE_ACTIVEMQ, BackendType::BACKEND_TYPE_PULSAR, BackendType::BACKEND_TYPE_MQTT, BackendType::BACKEND_TYPE_POSTGRES_CDC, BackendType::BACKEND_TYPE_MONGODB_CDC, BackendType::BACKEND_TYPE_KUBE_MQ, BackendType::BACKEND_TYPE_AWS_KINESIS];
  pub const fn value(self) -> i32 {
    self.0
  }
  pub fn into_known(self) -> ::std::option::Option<BackendType_Closed> {
    match self {
      BackendType::BACKEND_TYPE_UNSET => Some(BackendType_Closed::BACKEND_TYPE_UNSET),
      BackendType::BACKEND_TYPE_KAFKA => Some(BackendType_Closed::BACKEND_TYPE_KAFKA),
      BackendType::BACKEND_TYPE_RABBIT => Some(BackendType_Closed::BACKEND_TYPE_RABBIT),
      BackendType::BACKEND_TYPE_RABBIT_STREAMS => Some(BackendType_Closed::BACKEND_TYPE_RABBIT_STREAMS),
      BackendType::BACKEND_TYPE_NSQ => Some(BackendType_Closed::BACKEND_TYPE_NSQ),
      BackendType::BACKEND_TYPE_NATS => Some(BackendType_Closed::BACKEND_TYPE_NATS),
      BackendType::BACKEND_TYPE_NATS_STREAMING => Some(BackendType_Closed::BACKEND_TYPE_NATS_STREAMING),
      BackendType::BACKEND_TYPE_GCP_PUBSUB => Some(BackendType_Closed::BACKEND_TYPE_GCP_PUBSUB),
      BackendType::BACKEND_TYPE_AZURE_SERVICE_BUS => Some(BackendType_Closed::BACKEND_TYPE_AZURE_SERVICE_BUS),
      BackendType::BACKEND_TYPE_AZURE_EVENT_HUB => Some(BackendType_Closed::BACKEND_TYPE_AZURE_EVENT_HUB),
      BackendType::BACKEND_TYPE_AWS_SQS => Some(BackendType_Closed::BACKEND_TYPE_AWS_SQS),
      BackendType::BACKEND_TYPE_AWS_SNS => Some(BackendType_Closed::BACKEND_TYPE_AWS_SNS),
      BackendType::BACKEND_TYPE_REDIS_PUBSUB => Some(BackendType_Closed::BACKEND_TYPE_REDIS_PUBSUB),
      BackendType::BACKEND_TYPE_REDIS_STREAMS => Some(BackendType_Closed::BACKEND_TYPE_REDIS_STREAMS),
      BackendType::BACKEND_TYPE_ACTIVEMQ => Some(BackendType_Closed::BACKEND_TYPE_ACTIVEMQ),
      BackendType::BACKEND_TYPE_PULSAR => Some(BackendType_Closed::BACKEND_TYPE_PULSAR),
      BackendType::BACKEND_TYPE_MQTT => Some(BackendType_Closed::BACKEND_TYPE_MQTT),
      BackendType::BACKEND_TYPE_POSTGRES_CDC => Some(BackendType_Closed::BACKEND_TYPE_POSTGRES_CDC),
      BackendType::BACKEND_TYPE_MONGODB_CDC => Some(BackendType_Closed::BACKEND_TYPE_MONGODB_CDC),
      BackendType::BACKEND_TYPE_KUBE_MQ => Some(BackendType_Closed::BACKEND_TYPE_KUBE_MQ),
      BackendType::BACKEND_TYPE_AWS_KINESIS => Some(BackendType_Closed::BACKEND_TYPE_AWS_KINESIS),
      _ => None,
    }
  }
}
impl ::std::default::Default for BackendType {
  fn default() -> Self {
    BackendType::BACKEND_TYPE_UNSET
  }
}
impl From<BackendType> for i32 {
  fn from(v: BackendType) -> i32 {
    v.0
  }
}
impl From<i32> for BackendType {
  fn from(v: i32) -> BackendType {
    BackendType(v)
  }
}
impl From<BackendType_Closed> for BackendType {
  fn from(v: BackendType_Closed) -> BackendType {
    BackendType(v as i32)
  }
}
impl ::pb_jelly::ProtoEnum for BackendType {
}
impl ::pb_jelly::OpenProtoEnum for BackendType {
  fn name(self) -> ::std::option::Option<&'static str> {
    match self {
      BackendType::BACKEND_TYPE_UNSET => Some("BACKEND_TYPE_UNSET"),
      BackendType::BACKEND_TYPE_KAFKA => Some("BACKEND_TYPE_KAFKA"),
      BackendType::BACKEND_TYPE_RABBIT => Some("BACKEND_TYPE_RABBIT"),
      BackendType::BACKEND_TYPE_RABBIT_STREAMS => Some("BACKEND_TYPE_RABBIT_STREAMS"),
      BackendType::BACKEND_TYPE_NSQ => Some("BACKEND_TYPE_NSQ"),
      BackendType::BACKEND_TYPE_NATS => Some("BACKEND_TYPE_NATS"),
      BackendType::BACKEND_TYPE_NATS_STREAMING => Some("BACKEND_TYPE_NATS_STREAMING"),
      BackendType::BACKEND_TYPE_GCP_PUBSUB => Some("BACKEND_TYPE_GCP_PUBSUB"),
      BackendType::BACKEND_TYPE_AZURE_SERVICE_BUS => Some("BACKEND_TYPE_AZURE_SERVICE_BUS"),
      BackendType::BACKEND_TYPE_AZURE_EVENT_HUB => Some("BACKEND_TYPE_AZURE_EVENT_HUB"),
      BackendType::BACKEND_TYPE_AWS_SQS => Some("BACKEND_TYPE_AWS_SQS"),
      BackendType::BACKEND_TYPE_AWS_SNS => Some("BACKEND_TYPE_AWS_SNS"),
      BackendType::BACKEND_TYPE_REDIS_PUBSUB => Some("BACKEND_TYPE_REDIS_PUBSUB"),
      BackendType::BACKEND_TYPE_REDIS_STREAMS => Some("BACKEND_TYPE_REDIS_STREAMS"),
      BackendType::BACKEND_TYPE_ACTIVEMQ => Some("BACKEND_TYPE_ACTIVEMQ"),
      BackendType::BACKEND_TYPE_PULSAR => Some("BACKEND_TYPE_PULSAR"),
      BackendType::BACKEND_TYPE_MQTT => Some("BACKEND_TYPE_MQTT"),
      BackendType::BACKEND_TYPE_POSTGRES_CDC => Some("BACKEND_TYPE_POSTGRES_CDC"),
      BackendType::BACKEND_TYPE_MONGODB_CDC => Some("BACKEND_TYPE_MONGODB_CDC"),
      BackendType::BACKEND_TYPE_KUBE_MQ => Some("BACKEND_TYPE_KUBE_MQ"),
      BackendType::BACKEND_TYPE_AWS_KINESIS => Some("BACKEND_TYPE_AWS_KINESIS"),
      _ => None,
    }
  }
  fn is_known(self) -> bool {
    match self {
      BackendType::BACKEND_TYPE_UNSET => true,
      BackendType::BACKEND_TYPE_KAFKA => true,
      BackendType::BACKEND_TYPE_RABBIT => true,
      BackendType::BACKEND_TYPE_RABBIT_STREAMS => true,
      BackendType::BACKEND_TYPE_NSQ => true,
      BackendType::BACKEND_TYPE_NATS => true,
      BackendType::BACKEND_TYPE_NATS_STREAMING => true,
      BackendType::BACKEND_TYPE_GCP_PUBSUB => true,
      BackendType::BACKEND_TYPE_AZURE_SERVICE_BUS => true,
      BackendType::BACKEND_TYPE_AZURE_EVENT_HUB => true,
      BackendType::BACKEND_TYPE_AWS_SQS => true,
      BackendType::BACKEND_TYPE_AWS_SNS => true,
      BackendType::BACKEND_TYPE_REDIS_PUBSUB => true,
      BackendType::BACKEND_TYPE_REDIS_STREAMS => true,
      BackendType::BACKEND_TYPE_ACTIVEMQ => true,
      BackendType::BACKEND_TYPE_PULSAR => true,
      BackendType::BACKEND_TYPE_MQTT => true,
      BackendType::BACKEND_TYPE_POSTGRES_CDC => true,
      BackendType::BACKEND_TYPE_MONGODB_CDC => true,
      BackendType::BACKEND_TYPE_KUBE_MQ => true,
      BackendType::BACKEND_TYPE_AWS_KINESIS => true,
      _ => false,
    }
  }
}
impl ::std::fmt::Debug for BackendType {
  fn fmt(&self, f: &mut ::std::fmt::Formatter<'_>) -> ::std::fmt::Result {
    use ::pb_jelly::OpenProtoEnum;
    match self.name() {
      Some(s) => write!(f, "{}", s),
      None => write!(f, "Unknown({})", self.0),
    }
  }
}
#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Debug, Hash)]
#[repr(i32)]
pub enum BackendType_Closed {
  BACKEND_TYPE_UNSET = 0,
  BACKEND_TYPE_KAFKA = 1,
  BACKEND_TYPE_RABBIT = 2,
  BACKEND_TYPE_RABBIT_STREAMS = 3,
  BACKEND_TYPE_NSQ = 4,
  BACKEND_TYPE_NATS = 5,
  BACKEND_TYPE_NATS_STREAMING = 6,
  BACKEND_TYPE_GCP_PUBSUB = 7,
  BACKEND_TYPE_AZURE_SERVICE_BUS = 8,
  BACKEND_TYPE_AZURE_EVENT_HUB = 9,
  BACKEND_TYPE_AWS_SQS = 10,
  BACKEND_TYPE_AWS_SNS = 11,
  BACKEND_TYPE_REDIS_PUBSUB = 12,
  BACKEND_TYPE_REDIS_STREAMS = 13,
  BACKEND_TYPE_ACTIVEMQ = 14,
  BACKEND_TYPE_PULSAR = 15,
  BACKEND_TYPE_MQTT = 16,
  BACKEND_TYPE_POSTGRES_CDC = 17,
  BACKEND_TYPE_MONGODB_CDC = 18,
  BACKEND_TYPE_KUBE_MQ = 19,
  BACKEND_TYPE_AWS_KINESIS = 20,
}
impl BackendType_Closed {
  pub const KNOWN_VARIANTS: [BackendType_Closed; 21] = [BackendType_Closed::BACKEND_TYPE_UNSET, BackendType_Closed::BACKEND_TYPE_KAFKA, BackendType_Closed::BACKEND_TYPE_RABBIT, BackendType_Closed::BACKEND_TYPE_RABBIT_STREAMS, BackendType_Closed::BACKEND_TYPE_NSQ, BackendType_Closed::BACKEND_TYPE_NATS, BackendType_Closed::BACKEND_TYPE_NATS_STREAMING, BackendType_Closed::BACKEND_TYPE_GCP_PUBSUB, BackendType_Closed::BACKEND_TYPE_AZURE_SERVICE_BUS, BackendType_Closed::BACKEND_TYPE_AZURE_EVENT_HUB, BackendType_Closed::BACKEND_TYPE_AWS_SQS, BackendType_Closed::BACKEND_TYPE_AWS_SNS, BackendType_Closed::BACKEND_TYPE_REDIS_PUBSUB, BackendType_Closed::BACKEND_TYPE_REDIS_STREAMS, BackendType_Closed::BACKEND_TYPE_ACTIVEMQ, BackendType_Closed::BACKEND_TYPE_PULSAR, BackendType_Closed::BACKEND_TYPE_MQTT, BackendType_Closed::BACKEND_TYPE_POSTGRES_CDC, BackendType_Closed::BACKEND_TYPE_MONGODB_CDC, BackendType_Closed::BACKEND_TYPE_KUBE_MQ, BackendType_Closed::BACKEND_TYPE_AWS_KINESIS];
}
impl ::std::default::Default for BackendType_Closed {
  fn default() -> Self {
    BackendType_Closed::BACKEND_TYPE_UNSET
  }
}
impl From<BackendType_Closed> for i32 {
  fn from(v: BackendType_Closed) -> i32 {
    match v {
      BackendType_Closed::BACKEND_TYPE_UNSET => 0,
      BackendType_Closed::BACKEND_TYPE_KAFKA => 1,
      BackendType_Closed::BACKEND_TYPE_RABBIT => 2,
      BackendType_Closed::BACKEND_TYPE_RABBIT_STREAMS => 3,
      BackendType_Closed::BACKEND_TYPE_NSQ => 4,
      BackendType_Closed::BACKEND_TYPE_NATS => 5,
      BackendType_Closed::BACKEND_TYPE_NATS_STREAMING => 6,
      BackendType_Closed::BACKEND_TYPE_GCP_PUBSUB => 7,
      BackendType_Closed::BACKEND_TYPE_AZURE_SERVICE_BUS => 8,
      BackendType_Closed::BACKEND_TYPE_AZURE_EVENT_HUB => 9,
      BackendType_Closed::BACKEND_TYPE_AWS_SQS => 10,
      BackendType_Closed::BACKEND_TYPE_AWS_SNS => 11,
      BackendType_Closed::BACKEND_TYPE_REDIS_PUBSUB => 12,
      BackendType_Closed::BACKEND_TYPE_REDIS_STREAMS => 13,
      BackendType_Closed::BACKEND_TYPE_ACTIVEMQ => 14,
      BackendType_Closed::BACKEND_TYPE_PULSAR => 15,
      BackendType_Closed::BACKEND_TYPE_MQTT => 16,
      BackendType_Closed::BACKEND_TYPE_POSTGRES_CDC => 17,
      BackendType_Closed::BACKEND_TYPE_MONGODB_CDC => 18,
      BackendType_Closed::BACKEND_TYPE_KUBE_MQ => 19,
      BackendType_Closed::BACKEND_TYPE_AWS_KINESIS => 20,
    }
  }
}
impl ::std::convert::TryFrom<i32> for BackendType_Closed {
  type Error = i32;
  fn try_from(v: i32) -> ::std::result::Result<Self, i32> {
    match v {
      0 => Ok(BackendType_Closed::BACKEND_TYPE_UNSET),
      1 => Ok(BackendType_Closed::BACKEND_TYPE_KAFKA),
      2 => Ok(BackendType_Closed::BACKEND_TYPE_RABBIT),
      3 => Ok(BackendType_Closed::BACKEND_TYPE_RABBIT_STREAMS),
      4 => Ok(BackendType_Closed::BACKEND_TYPE_NSQ),
      5 => Ok(BackendType_Closed::BACKEND_TYPE_NATS),
      6 => Ok(BackendType_Closed::BACKEND_TYPE_NATS_STREAMING),
      7 => Ok(BackendType_Closed::BACKEND_TYPE_GCP_PUBSUB),
      8 => Ok(BackendType_Closed::BACKEND_TYPE_AZURE_SERVICE_BUS),
      9 => Ok(BackendType_Closed::BACKEND_TYPE_AZURE_EVENT_HUB),
      10 => Ok(BackendType_Closed::BACKEND_TYPE_AWS_SQS),
      11 => Ok(BackendType_Closed::BACKEND_TYPE_AWS_SNS),
      12 => Ok(BackendType_Closed::BACKEND_TYPE_REDIS_PUBSUB),
      13 => Ok(BackendType_Closed::BACKEND_TYPE_REDIS_STREAMS),
      14 => Ok(BackendType_Closed::BACKEND_TYPE_ACTIVEMQ),
      15 => Ok(BackendType_Closed::BACKEND_TYPE_PULSAR),
      16 => Ok(BackendType_Closed::BACKEND_TYPE_MQTT),
      17 => Ok(BackendType_Closed::BACKEND_TYPE_POSTGRES_CDC),
      18 => Ok(BackendType_Closed::BACKEND_TYPE_MONGODB_CDC),
      19 => Ok(BackendType_Closed::BACKEND_TYPE_KUBE_MQ),
      20 => Ok(BackendType_Closed::BACKEND_TYPE_AWS_KINESIS),
      _ => Err(v),
    }
  }
}
impl ::pb_jelly::ProtoEnum for BackendType_Closed {
}
impl ::pb_jelly::ClosedProtoEnum for BackendType_Closed {
  fn name(self) -> &'static str {
    match self {
      BackendType_Closed::BACKEND_TYPE_UNSET => "BACKEND_TYPE_UNSET",
      BackendType_Closed::BACKEND_TYPE_KAFKA => "BACKEND_TYPE_KAFKA",
      BackendType_Closed::BACKEND_TYPE_RABBIT => "BACKEND_TYPE_RABBIT",
      BackendType_Closed::BACKEND_TYPE_RABBIT_STREAMS => "BACKEND_TYPE_RABBIT_STREAMS",
      BackendType_Closed::BACKEND_TYPE_NSQ => "BACKEND_TYPE_NSQ",
      BackendType_Closed::BACKEND_TYPE_NATS => "BACKEND_TYPE_NATS",
      BackendType_Closed::BACKEND_TYPE_NATS_STREAMING => "BACKEND_TYPE_NATS_STREAMING",
      BackendType_Closed::BACKEND_TYPE_GCP_PUBSUB => "BACKEND_TYPE_GCP_PUBSUB",
      BackendType_Closed::BACKEND_TYPE_AZURE_SERVICE_BUS => "BACKEND_TYPE_AZURE_SERVICE_BUS",
      BackendType_Closed::BACKEND_TYPE_AZURE_EVENT_HUB => "BACKEND_TYPE_AZURE_EVENT_HUB",
      BackendType_Closed::BACKEND_TYPE_AWS_SQS => "BACKEND_TYPE_AWS_SQS",
      BackendType_Closed::BACKEND_TYPE_AWS_SNS => "BACKEND_TYPE_AWS_SNS",
      BackendType_Closed::BACKEND_TYPE_REDIS_PUBSUB => "BACKEND_TYPE_REDIS_PUBSUB",
      BackendType_Closed::BACKEND_TYPE_REDIS_STREAMS => "BACKEND_TYPE_REDIS_STREAMS",
      BackendType_Closed::BACKEND_TYPE_ACTIVEMQ => "BACKEND_TYPE_ACTIVEMQ",
      BackendType_Closed::BACKEND_TYPE_PULSAR => "BACKEND_TYPE_PULSAR",
      BackendType_Closed::BACKEND_TYPE_MQTT => "BACKEND_TYPE_MQTT",
      BackendType_Closed::BACKEND_TYPE_POSTGRES_CDC => "BACKEND_TYPE_POSTGRES_CDC",
      BackendType_Closed::BACKEND_TYPE_MONGODB_CDC => "BACKEND_TYPE_MONGODB_CDC",
      BackendType_Closed::BACKEND_TYPE_KUBE_MQ => "BACKEND_TYPE_KUBE_MQ",
      BackendType_Closed::BACKEND_TYPE_AWS_KINESIS => "BACKEND_TYPE_AWS_KINESIS",
    }
  }
}

