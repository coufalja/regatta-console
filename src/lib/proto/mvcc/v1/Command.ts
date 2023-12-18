// Original file: src/lib/proto/mvcc.proto

import type { KeyValue as _mvcc_v1_KeyValue, KeyValue__Output as _mvcc_v1_KeyValue__Output } from '../../mvcc/v1/KeyValue';
import type { Txn as _mvcc_v1_Txn, Txn__Output as _mvcc_v1_Txn__Output } from '../../mvcc/v1/Txn';
import type { Command as _mvcc_v1_Command, Command__Output as _mvcc_v1_Command__Output } from '../../mvcc/v1/Command';
import type { Long } from '@grpc/proto-loader';

// Original file: src/lib/proto/mvcc.proto

export const _mvcc_v1_Command_CommandType = {
  PUT: 'PUT',
  DELETE: 'DELETE',
  DUMMY: 'DUMMY',
  PUT_BATCH: 'PUT_BATCH',
  DELETE_BATCH: 'DELETE_BATCH',
  TXN: 'TXN',
  SEQUENCE: 'SEQUENCE',
} as const;

export type _mvcc_v1_Command_CommandType =
  | 'PUT'
  | 0
  | 'DELETE'
  | 1
  | 'DUMMY'
  | 2
  | 'PUT_BATCH'
  | 3
  | 'DELETE_BATCH'
  | 4
  | 'TXN'
  | 5
  | 'SEQUENCE'
  | 6

export type _mvcc_v1_Command_CommandType__Output = typeof _mvcc_v1_Command_CommandType[keyof typeof _mvcc_v1_Command_CommandType]

export interface Command {
  'table'?: (Buffer | Uint8Array | string);
  'type'?: (_mvcc_v1_Command_CommandType);
  'kv'?: (_mvcc_v1_KeyValue | null);
  'leaderIndex'?: (number | string | Long);
  'batch'?: (_mvcc_v1_KeyValue)[];
  'txn'?: (_mvcc_v1_Txn | null);
  'rangeEnd'?: (Buffer | Uint8Array | string);
  'prevKvs'?: (boolean);
  'sequence'?: (_mvcc_v1_Command)[];
  'count'?: (boolean);
  '_leaderIndex'?: "leaderIndex";
  '_txn'?: "txn";
  '_rangeEnd'?: "rangeEnd";
}

export interface Command__Output {
  'table': (string);
  'type': (_mvcc_v1_Command_CommandType__Output);
  'kv': (_mvcc_v1_KeyValue__Output | null);
  'leaderIndex'?: (string);
  'batch': (_mvcc_v1_KeyValue__Output)[];
  'txn'?: (_mvcc_v1_Txn__Output | null);
  'rangeEnd'?: (string);
  'prevKvs': (boolean);
  'sequence': (_mvcc_v1_Command__Output)[];
  'count': (boolean);
  '_leaderIndex': "leaderIndex";
  '_txn': "txn";
  '_rangeEnd': "rangeEnd";
}
