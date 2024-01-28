// Original file: src/lib/proto/regatta.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteRangeRequest as _regatta_v1_DeleteRangeRequest, DeleteRangeRequest__Output as _regatta_v1_DeleteRangeRequest__Output } from '../../regatta/v1/DeleteRangeRequest';
import type { DeleteRangeResponse as _regatta_v1_DeleteRangeResponse, DeleteRangeResponse__Output as _regatta_v1_DeleteRangeResponse__Output } from '../../regatta/v1/DeleteRangeResponse';
import type { PutRequest as _regatta_v1_PutRequest, PutRequest__Output as _regatta_v1_PutRequest__Output } from '../../regatta/v1/PutRequest';
import type { PutResponse as _regatta_v1_PutResponse, PutResponse__Output as _regatta_v1_PutResponse__Output } from '../../regatta/v1/PutResponse';
import type { RangeRequest as _regatta_v1_RangeRequest, RangeRequest__Output as _regatta_v1_RangeRequest__Output } from '../../regatta/v1/RangeRequest';
import type { RangeResponse as _regatta_v1_RangeResponse, RangeResponse__Output as _regatta_v1_RangeResponse__Output } from '../../regatta/v1/RangeResponse';
import type { TxnRequest as _regatta_v1_TxnRequest, TxnRequest__Output as _regatta_v1_TxnRequest__Output } from '../../regatta/v1/TxnRequest';
import type { TxnResponse as _regatta_v1_TxnResponse, TxnResponse__Output as _regatta_v1_TxnResponse__Output } from '../../regatta/v1/TxnResponse';

export interface KVClient extends grpc.Client {
  DeleteRange(argument: _regatta_v1_DeleteRangeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_DeleteRangeResponse__Output>): grpc.ClientUnaryCall;
  DeleteRange(argument: _regatta_v1_DeleteRangeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_regatta_v1_DeleteRangeResponse__Output>): grpc.ClientUnaryCall;
  DeleteRange(argument: _regatta_v1_DeleteRangeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_DeleteRangeResponse__Output>): grpc.ClientUnaryCall;
  DeleteRange(argument: _regatta_v1_DeleteRangeRequest, callback: grpc.requestCallback<_regatta_v1_DeleteRangeResponse__Output>): grpc.ClientUnaryCall;
  deleteRange(argument: _regatta_v1_DeleteRangeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_DeleteRangeResponse__Output>): grpc.ClientUnaryCall;
  deleteRange(argument: _regatta_v1_DeleteRangeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_regatta_v1_DeleteRangeResponse__Output>): grpc.ClientUnaryCall;
  deleteRange(argument: _regatta_v1_DeleteRangeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_DeleteRangeResponse__Output>): grpc.ClientUnaryCall;
  deleteRange(argument: _regatta_v1_DeleteRangeRequest, callback: grpc.requestCallback<_regatta_v1_DeleteRangeResponse__Output>): grpc.ClientUnaryCall;
  
  IterateRange(argument: _regatta_v1_RangeRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_regatta_v1_RangeResponse__Output>;
  IterateRange(argument: _regatta_v1_RangeRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_regatta_v1_RangeResponse__Output>;
  iterateRange(argument: _regatta_v1_RangeRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_regatta_v1_RangeResponse__Output>;
  iterateRange(argument: _regatta_v1_RangeRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_regatta_v1_RangeResponse__Output>;
  
  Put(argument: _regatta_v1_PutRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_PutResponse__Output>): grpc.ClientUnaryCall;
  Put(argument: _regatta_v1_PutRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_regatta_v1_PutResponse__Output>): grpc.ClientUnaryCall;
  Put(argument: _regatta_v1_PutRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_PutResponse__Output>): grpc.ClientUnaryCall;
  Put(argument: _regatta_v1_PutRequest, callback: grpc.requestCallback<_regatta_v1_PutResponse__Output>): grpc.ClientUnaryCall;
  put(argument: _regatta_v1_PutRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_PutResponse__Output>): grpc.ClientUnaryCall;
  put(argument: _regatta_v1_PutRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_regatta_v1_PutResponse__Output>): grpc.ClientUnaryCall;
  put(argument: _regatta_v1_PutRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_PutResponse__Output>): grpc.ClientUnaryCall;
  put(argument: _regatta_v1_PutRequest, callback: grpc.requestCallback<_regatta_v1_PutResponse__Output>): grpc.ClientUnaryCall;
  
  Range(argument: _regatta_v1_RangeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_RangeResponse__Output>): grpc.ClientUnaryCall;
  Range(argument: _regatta_v1_RangeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_regatta_v1_RangeResponse__Output>): grpc.ClientUnaryCall;
  Range(argument: _regatta_v1_RangeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_RangeResponse__Output>): grpc.ClientUnaryCall;
  Range(argument: _regatta_v1_RangeRequest, callback: grpc.requestCallback<_regatta_v1_RangeResponse__Output>): grpc.ClientUnaryCall;
  range(argument: _regatta_v1_RangeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_RangeResponse__Output>): grpc.ClientUnaryCall;
  range(argument: _regatta_v1_RangeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_regatta_v1_RangeResponse__Output>): grpc.ClientUnaryCall;
  range(argument: _regatta_v1_RangeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_RangeResponse__Output>): grpc.ClientUnaryCall;
  range(argument: _regatta_v1_RangeRequest, callback: grpc.requestCallback<_regatta_v1_RangeResponse__Output>): grpc.ClientUnaryCall;
  
  Txn(argument: _regatta_v1_TxnRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_TxnResponse__Output>): grpc.ClientUnaryCall;
  Txn(argument: _regatta_v1_TxnRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_regatta_v1_TxnResponse__Output>): grpc.ClientUnaryCall;
  Txn(argument: _regatta_v1_TxnRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_TxnResponse__Output>): grpc.ClientUnaryCall;
  Txn(argument: _regatta_v1_TxnRequest, callback: grpc.requestCallback<_regatta_v1_TxnResponse__Output>): grpc.ClientUnaryCall;
  txn(argument: _regatta_v1_TxnRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_TxnResponse__Output>): grpc.ClientUnaryCall;
  txn(argument: _regatta_v1_TxnRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_regatta_v1_TxnResponse__Output>): grpc.ClientUnaryCall;
  txn(argument: _regatta_v1_TxnRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_TxnResponse__Output>): grpc.ClientUnaryCall;
  txn(argument: _regatta_v1_TxnRequest, callback: grpc.requestCallback<_regatta_v1_TxnResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface KVHandlers extends grpc.UntypedServiceImplementation {
  DeleteRange: grpc.handleUnaryCall<_regatta_v1_DeleteRangeRequest__Output, _regatta_v1_DeleteRangeResponse>;
  
  IterateRange: grpc.handleServerStreamingCall<_regatta_v1_RangeRequest__Output, _regatta_v1_RangeResponse>;
  
  Put: grpc.handleUnaryCall<_regatta_v1_PutRequest__Output, _regatta_v1_PutResponse>;
  
  Range: grpc.handleUnaryCall<_regatta_v1_RangeRequest__Output, _regatta_v1_RangeResponse>;
  
  Txn: grpc.handleUnaryCall<_regatta_v1_TxnRequest__Output, _regatta_v1_TxnResponse>;
  
}

export interface KVDefinition extends grpc.ServiceDefinition {
  DeleteRange: MethodDefinition<_regatta_v1_DeleteRangeRequest, _regatta_v1_DeleteRangeResponse, _regatta_v1_DeleteRangeRequest__Output, _regatta_v1_DeleteRangeResponse__Output>
  IterateRange: MethodDefinition<_regatta_v1_RangeRequest, _regatta_v1_RangeResponse, _regatta_v1_RangeRequest__Output, _regatta_v1_RangeResponse__Output>
  Put: MethodDefinition<_regatta_v1_PutRequest, _regatta_v1_PutResponse, _regatta_v1_PutRequest__Output, _regatta_v1_PutResponse__Output>
  Range: MethodDefinition<_regatta_v1_RangeRequest, _regatta_v1_RangeResponse, _regatta_v1_RangeRequest__Output, _regatta_v1_RangeResponse__Output>
  Txn: MethodDefinition<_regatta_v1_TxnRequest, _regatta_v1_TxnResponse, _regatta_v1_TxnRequest__Output, _regatta_v1_TxnResponse__Output>
}
