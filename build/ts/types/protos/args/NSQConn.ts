// Original file: ../../protos/args/ps_args_nsq.proto


export interface NSQConn {
  'nsqdAddress'?: (string);
  'lookupdAddress'?: (string);
  'useTls'?: (boolean);
  'tlsSkipVerify'?: (boolean);
  'tlsCaCert'?: (string);
  'tlsClientCert'?: (string);
  'tlsClientKey'?: (string);
  'authSecret'?: (string);
  'clientId'?: (string);
}

export interface NSQConn__Output {
  'nsqdAddress': (string);
  'lookupdAddress': (string);
  'useTls': (boolean);
  'tlsSkipVerify': (boolean);
  'tlsCaCert': (string);
  'tlsClientCert': (string);
  'tlsClientKey': (string);
  'authSecret': (string);
  'clientId': (string);
}
