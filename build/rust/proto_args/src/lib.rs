// @generated, do not edit

#![warn(rust_2018_idioms)]
#![allow(irrefutable_let_patterns)]
#![allow(non_camel_case_types)]
#![allow(non_snake_case)]
#![allow(non_upper_case_globals)]
#![allow(unused_imports)]
#![allow(unused_variables)]
#![allow(irrefutable_let_patterns)]
#![allow(broken_intra_doc_links)]

// Modules are generated based on the naming conventions of protobuf, which might cause "module inception"
#![allow(clippy::module_inception)]
// This is all generated code, so "manually" implementing derivable impls is okay
#![allow(clippy::derivable_impls)]
// For enums with many variants, the matches!(...) macro isn't obviously better
#![allow(clippy::match_like_matches_macro)]
// TODO: Ideally we don't allow this
#![allow(clippy::option_as_ref_deref)]
// TODO: Ideally we don't allow this
#![allow(clippy::match_single_binding)]

#[macro_use]
extern crate lazy_static;

pub mod ps_args_activemq;
pub mod ps_args_aws_kinesis;
pub mod ps_args_aws_sns;
pub mod ps_args_aws_sqs;
pub mod ps_args_azure_event_hub;
pub mod ps_args_azure_service_bus;
pub mod ps_args_gcp_pubsub;
pub mod ps_args_kafka;
pub mod ps_args_kubemq_queue;
pub mod ps_args_memphis;
pub mod ps_args_mongo;
pub mod ps_args_mqtt;
pub mod ps_args_nats;
pub mod ps_args_nats_jetstream;
pub mod ps_args_nats_streaming;
pub mod ps_args_nsq;
pub mod ps_args_postgres;
pub mod ps_args_pulsar;
pub mod ps_args_rabbit;
pub mod ps_args_rabbit_streams;
pub mod ps_args_redis_pubsub;
pub mod ps_args_redis_streams;
