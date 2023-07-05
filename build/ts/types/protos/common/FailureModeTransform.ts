// Original file: ../../protos/common/ps_common_dataquality.proto


// Original file: ../../protos/common/ps_common_dataquality.proto

export const _protos_common_FailureModeTransform_TransformType = {
  TRANSFORM_TYPE_UNSET: 'TRANSFORM_TYPE_UNSET',
  TRANSFORM_TYPE_REPLACE: 'TRANSFORM_TYPE_REPLACE',
  TRANSFORM_TYPE_DELETE: 'TRANSFORM_TYPE_DELETE',
} as const;

export type _protos_common_FailureModeTransform_TransformType =
  | 'TRANSFORM_TYPE_UNSET'
  | 0
  | 'TRANSFORM_TYPE_REPLACE'
  | 1
  | 'TRANSFORM_TYPE_DELETE'
  | 2

export type _protos_common_FailureModeTransform_TransformType__Output = typeof _protos_common_FailureModeTransform_TransformType[keyof typeof _protos_common_FailureModeTransform_TransformType]

export interface FailureModeTransform {
  'path'?: (string);
  'value'?: (string);
  'type'?: (_protos_common_FailureModeTransform_TransformType);
}

export interface FailureModeTransform__Output {
  'path': (string);
  'value': (string);
  'type': (_protos_common_FailureModeTransform_TransformType__Output);
}
