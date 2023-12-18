// Original file: src/lib/proto/mvcc.proto

import type { ResponseOp as _mvcc_v1_ResponseOp, ResponseOp__Output as _mvcc_v1_ResponseOp__Output } from '../../mvcc/v1/ResponseOp';
import type { Long } from '@grpc/proto-loader';

export interface CommandResult {
  'responses'?: (_mvcc_v1_ResponseOp)[];
  'revision'?: (number | string | Long);
}

export interface CommandResult__Output {
  'responses': (_mvcc_v1_ResponseOp__Output)[];
  'revision': (string);
}
