// Original file: ../../protos/ps_connect.proto

import type { ConnectionOptions as _protos_opts_ConnectionOptions, ConnectionOptions__Output as _protos_opts_ConnectionOptions__Output } from '../protos/opts/ConnectionOptions';
import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface UpdateConnectionRequest {
  'connectionId'?: (string);
  'options'?: (_protos_opts_ConnectionOptions | null);
  'auth'?: (_protos_common_Auth | null);
}

export interface UpdateConnectionRequest__Output {
  'connectionId': (string);
  'options': (_protos_opts_ConnectionOptions__Output | null);
  'auth': (_protos_common_Auth__Output | null);
}
