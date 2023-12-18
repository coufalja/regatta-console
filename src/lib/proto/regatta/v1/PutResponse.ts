// Original file: src/lib/proto/regatta.proto

import type { ResponseHeader as _regatta_v1_ResponseHeader, ResponseHeader__Output as _regatta_v1_ResponseHeader__Output } from '../../regatta/v1/ResponseHeader';
import type { KeyValue as _mvcc_v1_KeyValue, KeyValue__Output as _mvcc_v1_KeyValue__Output } from '../../mvcc/v1/KeyValue';

export interface PutResponse {
  'header'?: (_regatta_v1_ResponseHeader | null);
  'prevKv'?: (_mvcc_v1_KeyValue | null);
}

export interface PutResponse__Output {
  'header': (_regatta_v1_ResponseHeader__Output | null);
  'prevKv': (_mvcc_v1_KeyValue__Output | null);
}
