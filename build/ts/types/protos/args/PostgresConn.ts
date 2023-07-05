// Original file: ../../protos/args/ps_args_postgres.proto


export interface PostgresConn {
  'address'?: (string);
  'port'?: (number);
  'username'?: (string);
  'password'?: (string);
  'database'?: (string);
  'useTls'?: (boolean);
  'tlsSkipVerify'?: (boolean);
}

export interface PostgresConn__Output {
  'address': (string);
  'port': (number);
  'username': (string);
  'password': (string);
  'database': (string);
  'useTls': (boolean);
  'tlsSkipVerify': (boolean);
}
