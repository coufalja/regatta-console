// Original file: src/lib/proto/mvcc.proto

import type { Long } from '@grpc/proto-loader';

export interface _mvcc_v1_RequestOp_DeleteRange {
  'key'?: (Buffer | Uint8Array | string);
  'rangeEnd'?: (Buffer | Uint8Array | string);
  'prevKv'?: (boolean);
  'count'?: (boolean);
}

export interface _mvcc_v1_RequestOp_DeleteRange__Output {
  'key': (string);
  'rangeEnd': (string);
  'prevKv': (boolean);
  'count': (boolean);
}

export interface _mvcc_v1_RequestOp_Put {
  'key'?: (Buffer | Uint8Array | string);
  'value'?: (Buffer | Uint8Array | string);
  'prevKv'?: (boolean);
}

export interface _mvcc_v1_RequestOp_Put__Output {
  'key': (string);
  'value': (string);
  'prevKv': (boolean);
}

export interface _mvcc_v1_RequestOp_Range {
  'key'?: (Buffer | Uint8Array | string);
  'rangeEnd'?: (Buffer | Uint8Array | string);
  'limit'?: (number | string | Long);
  'keysOnly'?: (boolean);
  'countOnly'?: (boolean);
}

export interface _mvcc_v1_RequestOp_Range__Output {
  'key': (string);
  'rangeEnd': (string);
  'limit': (string);
  'keysOnly': (boolean);
  'countOnly': (boolean);
}

export interface RequestOp {
  'requestRange'?: (_mvcc_v1_RequestOp_Range | null);
  'requestPut'?: (_mvcc_v1_RequestOp_Put | null);
  'requestDeleteRange'?: (_mvcc_v1_RequestOp_DeleteRange | null);
  'request'?: "requestRange"|"requestPut"|"requestDeleteRange";
}

export interface RequestOp__Output {
  'requestRange'?: (_mvcc_v1_RequestOp_Range__Output | null);
  'requestPut'?: (_mvcc_v1_RequestOp_Put__Output | null);
  'requestDeleteRange'?: (_mvcc_v1_RequestOp_DeleteRange__Output | null);
  'request': "requestRange"|"requestPut"|"requestDeleteRange";
}
