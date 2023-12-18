// Original file: src/lib/proto/regatta.proto

import type { ResponseHeader as _regatta_v1_ResponseHeader, ResponseHeader__Output as _regatta_v1_ResponseHeader__Output } from '../../regatta/v1/ResponseHeader';
import type { KeyValue as _mvcc_v1_KeyValue, KeyValue__Output as _mvcc_v1_KeyValue__Output } from '../../mvcc/v1/KeyValue';
import type { Long } from '@grpc/proto-loader';

export interface RangeResponse {
  'header'?: (_regatta_v1_ResponseHeader | null);
  'kvs'?: (_mvcc_v1_KeyValue)[];
  'more'?: (boolean);
  'count'?: (number | string | Long);
}

export interface RangeResponse__Output {
  'header': (_regatta_v1_ResponseHeader__Output | null);
  'kvs': (_mvcc_v1_KeyValue__Output)[];
  'more': (boolean);
  'count': (string);
}
