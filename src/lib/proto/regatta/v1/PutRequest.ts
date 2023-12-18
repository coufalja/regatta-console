// Original file: src/lib/proto/regatta.proto


export interface PutRequest {
  'table'?: (Buffer | Uint8Array | string);
  'key'?: (Buffer | Uint8Array | string);
  'value'?: (Buffer | Uint8Array | string);
  'prevKv'?: (boolean);
}

export interface PutRequest__Output {
  'table': (string);
  'key': (string);
  'value': (string);
  'prevKv': (boolean);
}
