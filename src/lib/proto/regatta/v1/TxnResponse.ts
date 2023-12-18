// Original file: src/lib/proto/regatta.proto

import type { ResponseHeader as _regatta_v1_ResponseHeader, ResponseHeader__Output as _regatta_v1_ResponseHeader__Output } from '../../regatta/v1/ResponseHeader';
import type { ResponseOp as _mvcc_v1_ResponseOp, ResponseOp__Output as _mvcc_v1_ResponseOp__Output } from '../../mvcc/v1/ResponseOp';

export interface TxnResponse {
  'header'?: (_regatta_v1_ResponseHeader | null);
  'succeeded'?: (boolean);
  'responses'?: (_mvcc_v1_ResponseOp)[];
}

export interface TxnResponse__Output {
  'header': (_regatta_v1_ResponseHeader__Output | null);
  'succeeded': (boolean);
  'responses': (_mvcc_v1_ResponseOp__Output)[];
}
