// Original file: src/lib/proto/regatta.proto

import type { Compare as _mvcc_v1_Compare, Compare__Output as _mvcc_v1_Compare__Output } from '../../mvcc/v1/Compare';
import type { RequestOp as _mvcc_v1_RequestOp, RequestOp__Output as _mvcc_v1_RequestOp__Output } from '../../mvcc/v1/RequestOp';

export interface TxnRequest {
  'table'?: (Buffer | Uint8Array | string);
  'compare'?: (_mvcc_v1_Compare)[];
  'success'?: (_mvcc_v1_RequestOp)[];
  'failure'?: (_mvcc_v1_RequestOp)[];
}

export interface TxnRequest__Output {
  'table': (string);
  'compare': (_mvcc_v1_Compare__Output)[];
  'success': (_mvcc_v1_RequestOp__Output)[];
  'failure': (_mvcc_v1_RequestOp__Output)[];
}
