// Original file: src/lib/proto/regatta.proto


export interface DeleteRangeRequest {
  'table'?: (Buffer | Uint8Array | string);
  'key'?: (Buffer | Uint8Array | string);
  'rangeEnd'?: (Buffer | Uint8Array | string);
  'prevKv'?: (boolean);
  'count'?: (boolean);
}

export interface DeleteRangeRequest__Output {
  'table': (string);
  'key': (string);
  'rangeEnd': (string);
  'prevKv': (boolean);
  'count': (boolean);
}
