// Original file: protos/opts/ps_opts_relay.proto

import type { MongoConn as _protos_args_MongoConn, MongoConn__Output as _protos_args_MongoConn__Output } from '../../protos/args/MongoConn';
import type { MongoReadArgs as _protos_args_MongoReadArgs, MongoReadArgs__Output as _protos_args_MongoReadArgs__Output } from '../../protos/args/MongoReadArgs';

export interface RelayGroupMongoOptions {
  '_conn'?: (_protos_args_MongoConn | null);
  'args'?: (_protos_args_MongoReadArgs | null);
}

export interface RelayGroupMongoOptions__Output {
  '_conn': (_protos_args_MongoConn__Output | null);
  'args': (_protos_args_MongoReadArgs__Output | null);
}
