// Original file: protos/read.proto

import type { Message as _protos_records_Message, Message__Output as _protos_records_Message__Output } from '../protos/records/Message';
import type { Status as _protos_common_Status, Status__Output as _protos_common_Status__Output } from '../protos/common/Status';

export interface StartReadResponse {
  'messages'?: (_protos_records_Message)[];
  'status'?: (_protos_common_Status | null);
}

export interface StartReadResponse__Output {
  'messages': (_protos_records_Message__Output)[];
  'status': (_protos_common_Status__Output | null);
}
