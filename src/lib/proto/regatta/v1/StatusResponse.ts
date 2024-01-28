// Original file: src/lib/proto/regatta.proto

import type { TableStatus as _regatta_v1_TableStatus, TableStatus__Output as _regatta_v1_TableStatus__Output } from '../../regatta/v1/TableStatus';
import type { Struct as _google_protobuf_Struct, Struct__Output as _google_protobuf_Struct__Output } from '../../google/protobuf/Struct';

export interface StatusResponse {
  'id'?: (string);
  'version'?: (string);
  'info'?: (string);
  'tables'?: ({[key: string]: _regatta_v1_TableStatus});
  'config'?: (_google_protobuf_Struct | null);
  'errors'?: (string)[];
}

export interface StatusResponse__Output {
  'id': (string);
  'version': (string);
  'info': (string);
  'tables': ({[key: string]: _regatta_v1_TableStatus__Output});
  'config': (_google_protobuf_Struct__Output | null);
  'errors': (string)[];
}
