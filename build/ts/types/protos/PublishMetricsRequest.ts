// Original file: ../../protos/ps_dataquality.proto

import type { Auth as _protos_common_Auth, Auth__Output as _protos_common_Auth__Output } from '../protos/common/Auth';

export interface PublishMetricsRequest {
  'counter'?: (string);
  'labels'?: ({[key: string]: string});
  'value'?: (number | string);
  'auth'?: (_protos_common_Auth | null);
}

export interface PublishMetricsRequest__Output {
  'counter': (string);
  'labels': ({[key: string]: string});
  'value': (number);
  'auth': (_protos_common_Auth__Output | null);
}
