// Original file: ../../protos/args/ps_args_rabbit.proto


export interface RabbitWriteArgs {
  'exchangeName'?: (string);
  'routingKey'?: (string);
  'appId'?: (string);
  'exchangeType'?: (string);
  'exchangeDeclare'?: (boolean);
  'exchangeDurable'?: (boolean);
  'exchangeAutoDelete'?: (boolean);
}

export interface RabbitWriteArgs__Output {
  'exchangeName': (string);
  'routingKey': (string);
  'appId': (string);
  'exchangeType': (string);
  'exchangeDeclare': (boolean);
  'exchangeDurable': (boolean);
  'exchangeAutoDelete': (boolean);
}
