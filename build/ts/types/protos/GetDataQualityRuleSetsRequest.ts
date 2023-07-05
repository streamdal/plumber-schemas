// Original file: ../../protos/ps_dataquality.proto

import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface GetDataQualityRuleSetsRequest {
  'dataSource'?: (string);
  'auth'?: (_protos_common_Auth | null);
}

export interface GetDataQualityRuleSetsRequest__Output {
  'dataSource': (string);
  'auth': (_protos_common_Auth__Output | null);
}
