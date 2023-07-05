// Original file: protos/args/ps_args_mqtt.proto

export const MQTTQoSLevel = {
  MQTT_QOS_LEVEL_AT_MOST_ONCE: 'MQTT_QOS_LEVEL_AT_MOST_ONCE',
  MQTT_QOS_LEVEL_AT_LEAST_ONCE: 'MQTT_QOS_LEVEL_AT_LEAST_ONCE',
  MQTT_QOS_LEVEL_EXACTLY_ONCE: 'MQTT_QOS_LEVEL_EXACTLY_ONCE',
} as const;

export type MQTTQoSLevel =
  | 'MQTT_QOS_LEVEL_AT_MOST_ONCE'
  | 0
  | 'MQTT_QOS_LEVEL_AT_LEAST_ONCE'
  | 1
  | 'MQTT_QOS_LEVEL_EXACTLY_ONCE'
  | 2

export type MQTTQoSLevel__Output = typeof MQTTQoSLevel[keyof typeof MQTTQoSLevel]
