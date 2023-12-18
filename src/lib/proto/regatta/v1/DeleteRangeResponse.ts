// Original file: src/lib/proto/regatta.proto

import type { ResponseHeader as _regatta_v1_ResponseHeader, ResponseHeader__Output as _regatta_v1_ResponseHeader__Output } from '../../regatta/v1/ResponseHeader';
import type { KeyValue as _mvcc_v1_KeyValue, KeyValue__Output as _mvcc_v1_KeyValue__Output } from '../../mvcc/v1/KeyValue';
import type { Long } from '@grpc/proto-loader';

export interface DeleteRangeResponse {
  'header'?: (_regatta_v1_ResponseHeader | null);
  'deleted'?: (number | string | Long);
  'prevKvs'?: (_mvcc_v1_KeyValue)[];
}

export interface DeleteRangeResponse__Output {
  'header': (_regatta_v1_ResponseHeader__Output | null);
  'deleted': (string);
  'prevKvs': (_mvcc_v1_KeyValue__Output)[];
}
