// Original file: protos/opts/ps_opts_tunnel.proto

import type { AWSKinesisConn as _protos_args_AWSKinesisConn, AWSKinesisConn__Output as _protos_args_AWSKinesisConn__Output } from '../../protos/args/AWSKinesisConn';
import type { AWSKinesisWriteArgs as _protos_args_AWSKinesisWriteArgs, AWSKinesisWriteArgs__Output as _protos_args_AWSKinesisWriteArgs__Output } from '../../protos/args/AWSKinesisWriteArgs';

export interface TunnelGroupAWSKinesisOptions {
  '_conn'?: (_protos_args_AWSKinesisConn | null);
  'args'?: (_protos_args_AWSKinesisWriteArgs | null);
}

export interface TunnelGroupAWSKinesisOptions__Output {
  '_conn': (_protos_args_AWSKinesisConn__Output | null);
  'args': (_protos_args_AWSKinesisWriteArgs__Output | null);
}
