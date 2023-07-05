// Original file: protos/opts/ps_opts_server.proto


export interface ServerOptions {
  'nodeId'?: (string);
  'clusterId'?: (string);
  'grpcListenAddress'?: (string);
  'authToken'?: (string);
  'natsUrl'?: (string)[];
  'tlsCertFile'?: (string);
  'tlsKeyFile'?: (string);
  'tlsCaFile'?: (string);
  'tlsSkipVerify'?: (boolean);
  'enableCluster'?: (boolean);
  'statsDatabasePath'?: (string);
  'statsFlushIntervalSeconds'?: (number);
  'httpListenAddress'?: (string);
  'remoteControlEnabled'?: (boolean);
  'remoteControlAddress'?: (string);
  'remoteControlApiToken'?: (string);
  'remoteControlDisableTls'?: (boolean);
  '_grpcAddress'?: (string);
  '_grpcTimeoutSeconds'?: (number);
  '_grpcInsecure'?: (boolean);
  'useTls'?: (boolean);
}

export interface ServerOptions__Output {
  'nodeId': (string);
  'clusterId': (string);
  'grpcListenAddress': (string);
  'authToken': (string);
  'natsUrl': (string)[];
  'tlsCertFile': (string);
  'tlsKeyFile': (string);
  'tlsCaFile': (string);
  'tlsSkipVerify': (boolean);
  'enableCluster': (boolean);
  'statsDatabasePath': (string);
  'statsFlushIntervalSeconds': (number);
  'httpListenAddress': (string);
  'remoteControlEnabled': (boolean);
  'remoteControlAddress': (string);
  'remoteControlApiToken': (string);
  'remoteControlDisableTls': (boolean);
  '_grpcAddress': (string);
  '_grpcTimeoutSeconds': (number);
  '_grpcInsecure': (boolean);
  'useTls': (boolean);
}
