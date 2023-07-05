// Original file: ../../protos/ps_relay.proto

import type { RelayOptions as _protos_opts_RelayOptions, RelayOptions__Output as _protos_opts_RelayOptions__Output } from '../protos/opts/RelayOptions';
import type { Status as _protos_common_Status, Status__Output as _protos_common_Status__Output } from '../protos/common/Status';

export interface GetAllRelaysResponse {
  'opts'?: (_protos_opts_RelayOptions)[];
  'status'?: (_protos_common_Status | null);
}

export interface GetAllRelaysResponse__Output {
  'opts': (_protos_opts_RelayOptions__Output)[];
  'status': (_protos_common_Status__Output | null);
}
