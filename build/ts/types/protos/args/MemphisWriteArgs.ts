// Original file: ../../protos/args/ps_args_memphis.proto


export interface MemphisWriteArgs {
  'station'?: (string);
  'producerName'?: (string);
  'headers'?: ({[key: string]: string});
  'messageId'?: (string);
}

export interface MemphisWriteArgs__Output {
  'station': (string);
  'producerName': (string);
  'headers': ({[key: string]: string});
  'messageId': (string);
}
