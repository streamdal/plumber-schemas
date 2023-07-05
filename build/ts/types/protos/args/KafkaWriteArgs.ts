// Original file: ../../protos/args/ps_args_kafka.proto


export interface KafkaWriteArgs {
  'key'?: (string);
  'headers'?: ({[key: string]: string});
  'topics'?: (string)[];
}

export interface KafkaWriteArgs__Output {
  'key': (string);
  'headers': ({[key: string]: string});
  'topics': (string)[];
}
