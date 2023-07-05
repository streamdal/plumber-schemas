// Original file: protos/common/ps_common_auth.proto

import type { Foreman as _protos_common_Foreman, Foreman__Output as _protos_common_Foreman__Output } from '../../protos/common/Foreman';
import type { SourceManager as _protos_common_SourceManager, SourceManager__Output as _protos_common_SourceManager__Output } from '../../protos/common/SourceManager';

export interface Auth {
  'token'?: (string);
  '_foreman'?: (_protos_common_Foreman | null);
  '_sourceManager'?: (_protos_common_SourceManager | null);
}

export interface Auth__Output {
  'token': (string);
  '_foreman': (_protos_common_Foreman__Output | null);
  '_sourceManager': (_protos_common_SourceManager__Output | null);
}
