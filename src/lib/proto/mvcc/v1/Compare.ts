// Original file: src/lib/proto/mvcc.proto


// Original file: src/lib/proto/mvcc.proto

export const _mvcc_v1_Compare_CompareResult = {
  EQUAL: 'EQUAL',
  GREATER: 'GREATER',
  LESS: 'LESS',
  NOT_EQUAL: 'NOT_EQUAL',
} as const;

export type _mvcc_v1_Compare_CompareResult =
  | 'EQUAL'
  | 0
  | 'GREATER'
  | 1
  | 'LESS'
  | 2
  | 'NOT_EQUAL'
  | 3

export type _mvcc_v1_Compare_CompareResult__Output = typeof _mvcc_v1_Compare_CompareResult[keyof typeof _mvcc_v1_Compare_CompareResult]

// Original file: src/lib/proto/mvcc.proto

export const _mvcc_v1_Compare_CompareTarget = {
  VALUE: 'VALUE',
} as const;

export type _mvcc_v1_Compare_CompareTarget =
  | 'VALUE'
  | 0

export type _mvcc_v1_Compare_CompareTarget__Output = typeof _mvcc_v1_Compare_CompareTarget[keyof typeof _mvcc_v1_Compare_CompareTarget]

export interface Compare {
  'result'?: (_mvcc_v1_Compare_CompareResult);
  'target'?: (_mvcc_v1_Compare_CompareTarget);
  'key'?: (Buffer | Uint8Array | string);
  'value'?: (Buffer | Uint8Array | string);
  'rangeEnd'?: (Buffer | Uint8Array | string);
  'targetUnion'?: "value";
}

export interface Compare__Output {
  'result': (_mvcc_v1_Compare_CompareResult__Output);
  'target': (_mvcc_v1_Compare_CompareTarget__Output);
  'key': (string);
  'value'?: (string);
  'rangeEnd': (string);
  'targetUnion': "value";
}
