// Original file: protos/ps_relay.proto

import type { RelayOptions as _protos_opts_RelayOptions, RelayOptions__Output as _protos_opts_RelayOptions__Output } from '../protos/opts/RelayOptions';
import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface UpdateRelayRequest {
  'relayId'?: (string);
  'opts'?: (_protos_opts_RelayOptions | null);
  'auth'?: (_protos_common_Auth | null);
}

export interface UpdateRelayRequest__Output {
  'relayId': (string);
  'opts': (_protos_opts_RelayOptions__Output | null);
  'auth': (_protos_common_Auth__Output | null);
}
