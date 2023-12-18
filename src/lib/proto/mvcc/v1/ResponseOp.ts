// Original file: src/lib/proto/mvcc.proto

import type { KeyValue as _mvcc_v1_KeyValue, KeyValue__Output as _mvcc_v1_KeyValue__Output } from '../../mvcc/v1/KeyValue';
import type { Long } from '@grpc/proto-loader';

export interface _mvcc_v1_ResponseOp_DeleteRange {
  'deleted'?: (number | string | Long);
  'prevKvs'?: (_mvcc_v1_KeyValue)[];
}

export interface _mvcc_v1_ResponseOp_DeleteRange__Output {
  'deleted': (string);
  'prevKvs': (_mvcc_v1_KeyValue__Output)[];
}

export interface _mvcc_v1_ResponseOp_Put {
  'prevKv'?: (_mvcc_v1_KeyValue | null);
}

export interface _mvcc_v1_ResponseOp_Put__Output {
  'prevKv': (_mvcc_v1_KeyValue__Output | null);
}

export interface _mvcc_v1_ResponseOp_Range {
  'kvs'?: (_mvcc_v1_KeyValue)[];
  'more'?: (boolean);
  'count'?: (number | string | Long);
}

export interface _mvcc_v1_ResponseOp_Range__Output {
  'kvs': (_mvcc_v1_KeyValue__Output)[];
  'more': (boolean);
  'count': (string);
}

export interface ResponseOp {
  'responseRange'?: (_mvcc_v1_ResponseOp_Range | null);
  'responsePut'?: (_mvcc_v1_ResponseOp_Put | null);
  'responseDeleteRange'?: (_mvcc_v1_ResponseOp_DeleteRange | null);
  'response'?: "responseRange"|"responsePut"|"responseDeleteRange";
}

export interface ResponseOp__Output {
  'responseRange'?: (_mvcc_v1_ResponseOp_Range__Output | null);
  'responsePut'?: (_mvcc_v1_ResponseOp_Put__Output | null);
  'responseDeleteRange'?: (_mvcc_v1_ResponseOp_DeleteRange__Output | null);
  'response': "responseRange"|"responsePut"|"responseDeleteRange";
}
