// Original file: ../../protos/opts/ps_opts_relay.proto

import type { PostgresConn as _protos_args_PostgresConn, PostgresConn__Output as _protos_args_PostgresConn__Output } from '../../protos/args/PostgresConn';
import type { PostgresReadArgs as _protos_args_PostgresReadArgs, PostgresReadArgs__Output as _protos_args_PostgresReadArgs__Output } from '../../protos/args/PostgresReadArgs';

export interface RelayGroupPostgresOptions {
  '_conn'?: (_protos_args_PostgresConn | null);
  'args'?: (_protos_args_PostgresReadArgs | null);
}

export interface RelayGroupPostgresOptions__Output {
  '_conn': (_protos_args_PostgresConn__Output | null);
  'args': (_protos_args_PostgresReadArgs__Output | null);
}
