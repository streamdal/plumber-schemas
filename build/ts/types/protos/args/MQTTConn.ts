// Original file: protos/args/ps_args_mqtt.proto

import type { MQTTQoSLevel as _protos_args_MQTTQoSLevel, MQTTQoSLevel__Output as _protos_args_MQTTQoSLevel__Output } from '../../protos/args/MQTTQoSLevel';
import type { MQTTTLSOptions as _protos_args_MQTTTLSOptions, MQTTTLSOptions__Output as _protos_args_MQTTTLSOptions__Output } from '../../protos/args/MQTTTLSOptions';

export interface MQTTConn {
  'address'?: (string);
  'connTimeoutSeconds'?: (number);
  'clientId'?: (string);
  'qosLevel'?: (_protos_args_MQTTQoSLevel);
  'tlsOptions'?: (_protos_args_MQTTTLSOptions | null);
}

export interface MQTTConn__Output {
  'address': (string);
  'connTimeoutSeconds': (number);
  'clientId': (string);
  'qosLevel': (_protos_args_MQTTQoSLevel__Output);
  'tlsOptions': (_protos_args_MQTTTLSOptions__Output | null);
}
