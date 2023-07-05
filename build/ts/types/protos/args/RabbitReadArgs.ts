// Original file: ../../protos/args/ps_args_rabbit.proto


export interface RabbitReadArgs {
  'exchangeName'?: (string);
  'queueName'?: (string);
  'bindingKey'?: (string);
  'queueExclusive'?: (boolean);
  'queueDeclare'?: (boolean);
  'queueDurable'?: (boolean);
  'autoAck'?: (boolean);
  'consumerTag'?: (string);
  'queueDelete'?: (boolean);
  'queueArg'?: ({[key: string]: string});
  'excludeBindingKeyRegex'?: (string);
}

export interface RabbitReadArgs__Output {
  'exchangeName': (string);
  'queueName': (string);
  'bindingKey': (string);
  'queueExclusive': (boolean);
  'queueDeclare': (boolean);
  'queueDurable': (boolean);
  'autoAck': (boolean);
  'consumerTag': (string);
  'queueDelete': (boolean);
  'queueArg': ({[key: string]: string});
  'excludeBindingKeyRegex': (string);
}
