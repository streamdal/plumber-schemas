// Original file: protos/args/ps_args_mqtt.proto


export interface MQTTTLSOptions {
  'tlsCaCert'?: (string);
  'tlsClientCert'?: (string);
  'tlsClientKey'?: (string);
  'tlsSkipVerify'?: (boolean);
}

export interface MQTTTLSOptions__Output {
  'tlsCaCert': (string);
  'tlsClientCert': (string);
  'tlsClientKey': (string);
  'tlsSkipVerify': (boolean);
}
