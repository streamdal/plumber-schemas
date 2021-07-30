// Original file: protos/read.proto


// Original file: protos/read.proto

export enum _protos_SampleOptions_Interval {
  SECOND = 0,
  MINUTE = 1,
}

export interface SampleOptions {
  'sample_rate'?: (number);
  'sample_interval'?: (_protos_SampleOptions_Interval | keyof typeof _protos_SampleOptions_Interval);
}

export interface SampleOptions__Output {
  'sample_rate': (number);
  'sample_interval': (keyof typeof _protos_SampleOptions_Interval);
}
