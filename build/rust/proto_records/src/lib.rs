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

pub mod ps_records_activemq;
pub mod ps_records_aws_kinesis;
pub mod ps_records_aws_sqs;
pub mod ps_records_azure_event_hub;
pub mod ps_records_azure_service_bus;
pub mod ps_records_base;
pub mod ps_records_gcp_pubsub;
pub mod ps_records_kafka;
pub mod ps_records_kubemq;
pub mod ps_records_memphis;
pub mod ps_records_mongo;
pub mod ps_records_mqtt;
pub mod ps_records_nats;
pub mod ps_records_nats_jetstream;
pub mod ps_records_nats_streaming;
pub mod ps_records_nsq;
pub mod ps_records_postgres;
pub mod ps_records_pulsar;
pub mod ps_records_rabbit;
pub mod ps_records_rabbit_streams;
pub mod ps_records_redis_pubsub;
pub mod ps_records_redis_streams;
