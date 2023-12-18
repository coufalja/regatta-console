// Original file: src/lib/proto/regatta.proto

import type { Long } from '@grpc/proto-loader';

export interface ResponseHeader {
  'shardId'?: (number | string | Long);
  'replicaId'?: (number | string | Long);
  'revision'?: (number | string | Long);
  'raftTerm'?: (number | string | Long);
  'raftLeaderId'?: (number | string | Long);
}

export interface ResponseHeader__Output {
  'shardId': (string);
  'replicaId': (string);
  'revision': (string);
  'raftTerm': (string);
  'raftLeaderId': (string);
}
