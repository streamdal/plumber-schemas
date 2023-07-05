// Original file: protos/args/ps_args_azure_service_bus.proto


export interface AzureServiceBusReadArgs {
  'queue'?: (string);
  'topic'?: (string);
  'subscriptionName'?: (string);
}

export interface AzureServiceBusReadArgs__Output {
  'queue': (string);
  'topic': (string);
  'subscriptionName': (string);
}
