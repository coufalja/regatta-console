// Original file: src/lib/proto/regatta.proto

import type { Long } from '@grpc/proto-loader';

export interface RangeRequest {
  'table'?: (Buffer | Uint8Array | string);
  'key'?: (Buffer | Uint8Array | string);
  'rangeEnd'?: (Buffer | Uint8Array | string);
  'limit'?: (number | string | Long);
  'linearizable'?: (boolean);
  'keysOnly'?: (boolean);
  'countOnly'?: (boolean);
  'minModRevision'?: (number | string | Long);
  'maxModRevision'?: (number | string | Long);
  'minCreateRevision'?: (number | string | Long);
  'maxCreateRevision'?: (number | string | Long);
}

export interface RangeRequest__Output {
  'table': (string);
  'key': (string);
  'rangeEnd': (string);
  'limit': (string);
  'linearizable': (boolean);
  'keysOnly': (boolean);
  'countOnly': (boolean);
  'minModRevision': (string);
  'maxModRevision': (string);
  'minCreateRevision': (string);
  'maxCreateRevision': (string);
}
