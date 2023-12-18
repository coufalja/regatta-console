// Original file: src/lib/proto/mvcc.proto

import type { Long } from '@grpc/proto-loader';

export interface KeyValue {
  'key'?: (Buffer | Uint8Array | string);
  'createRevision'?: (number | string | Long);
  'modRevision'?: (number | string | Long);
  'value'?: (Buffer | Uint8Array | string);
}

export interface KeyValue__Output {
  'key': (string);
  'createRevision': (string);
  'modRevision': (string);
  'value': (string);
}
