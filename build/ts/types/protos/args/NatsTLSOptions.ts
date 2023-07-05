// Original file: protos/args/ps_args_nats.proto


export interface NatsTLSOptions {
  'tlsSkipVerify'?: (boolean);
  'tlsCaCert'?: (string);
  'tlsClientCert'?: (string);
  'tlsClientKey'?: (string);
  'useTls'?: (boolean);
}

export interface NatsTLSOptions__Output {
  'tlsSkipVerify': (boolean);
  'tlsCaCert': (string);
  'tlsClientCert': (string);
  'tlsClientKey': (string);
  'useTls': (boolean);
}
