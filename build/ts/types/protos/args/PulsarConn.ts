// Original file: ../../protos/args/ps_args_pulsar.proto


export interface PulsarConn {
  'dsn'?: (string);
  'connectTimeoutSeconds'?: (number);
  'tlsSkipVerify'?: (boolean);
  'tlsClientCert'?: (string);
  'tlsClientKey'?: (string);
  'token'?: (string);
  'listenerName'?: (string);
}

export interface PulsarConn__Output {
  'dsn': (string);
  'connectTimeoutSeconds': (number);
  'tlsSkipVerify': (boolean);
  'tlsClientCert': (string);
  'tlsClientKey': (string);
  'token': (string);
  'listenerName': (string);
}
