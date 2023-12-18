// Original file: src/lib/proto/regatta.proto

import type { Long } from '@grpc/proto-loader';

export interface TableStatus {
  'logSize'?: (number | string | Long);
  'dbSize'?: (number | string | Long);
  'leader'?: (string);
  'raftIndex'?: (number | string | Long);
  'raftTerm'?: (number | string | Long);
  'raftAppliedIndex'?: (number | string | Long);
}

export interface TableStatus__Output {
  'logSize': (string);
  'dbSize': (string);
  'leader': (string);
  'raftIndex': (string);
  'raftTerm': (string);
  'raftAppliedIndex': (string);
}
