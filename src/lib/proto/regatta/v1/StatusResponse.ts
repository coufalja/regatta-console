// Original file: src/lib/proto/regatta.proto

import type { TableStatus as _regatta_v1_TableStatus, TableStatus__Output as _regatta_v1_TableStatus__Output } from '../../regatta/v1/TableStatus';

export interface StatusResponse {
  'id'?: (string);
  'version'?: (string);
  'info'?: (string);
  'tables'?: ({[key: string]: _regatta_v1_TableStatus});
  'errors'?: (string)[];
}

export interface StatusResponse__Output {
  'id': (string);
  'version': (string);
  'info': (string);
  'tables': ({[key: string]: _regatta_v1_TableStatus__Output});
  'errors': (string)[];
}
