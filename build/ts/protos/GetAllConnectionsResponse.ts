// Original file: protos/connect.proto

import type { Connection as _protos_Connection, Connection__Output as _protos_Connection__Output } from '../protos/Connection';

export interface GetAllConnectionsResponse {
  'connections'?: ({[key: string]: _protos_Connection});
}

export interface GetAllConnectionsResponse__Output {
  'connections': ({[key: string]: _protos_Connection__Output});
}
