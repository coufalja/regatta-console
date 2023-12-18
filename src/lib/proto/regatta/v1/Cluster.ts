// Original file: src/lib/proto/regatta.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { MemberListRequest as _regatta_v1_MemberListRequest, MemberListRequest__Output as _regatta_v1_MemberListRequest__Output } from '../../regatta/v1/MemberListRequest';
import type { MemberListResponse as _regatta_v1_MemberListResponse, MemberListResponse__Output as _regatta_v1_MemberListResponse__Output } from '../../regatta/v1/MemberListResponse';
import type { StatusRequest as _regatta_v1_StatusRequest, StatusRequest__Output as _regatta_v1_StatusRequest__Output } from '../../regatta/v1/StatusRequest';
import type { StatusResponse as _regatta_v1_StatusResponse, StatusResponse__Output as _regatta_v1_StatusResponse__Output } from '../../regatta/v1/StatusResponse';

export interface ClusterClient extends grpc.Client {
  MemberList(argument: _regatta_v1_MemberListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_MemberListResponse__Output>): grpc.ClientUnaryCall;
  MemberList(argument: _regatta_v1_MemberListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_regatta_v1_MemberListResponse__Output>): grpc.ClientUnaryCall;
  MemberList(argument: _regatta_v1_MemberListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_MemberListResponse__Output>): grpc.ClientUnaryCall;
  MemberList(argument: _regatta_v1_MemberListRequest, callback: grpc.requestCallback<_regatta_v1_MemberListResponse__Output>): grpc.ClientUnaryCall;
  memberList(argument: _regatta_v1_MemberListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_MemberListResponse__Output>): grpc.ClientUnaryCall;
  memberList(argument: _regatta_v1_MemberListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_regatta_v1_MemberListResponse__Output>): grpc.ClientUnaryCall;
  memberList(argument: _regatta_v1_MemberListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_MemberListResponse__Output>): grpc.ClientUnaryCall;
  memberList(argument: _regatta_v1_MemberListRequest, callback: grpc.requestCallback<_regatta_v1_MemberListResponse__Output>): grpc.ClientUnaryCall;
  
  Status(argument: _regatta_v1_StatusRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_StatusResponse__Output>): grpc.ClientUnaryCall;
  Status(argument: _regatta_v1_StatusRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_regatta_v1_StatusResponse__Output>): grpc.ClientUnaryCall;
  Status(argument: _regatta_v1_StatusRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_StatusResponse__Output>): grpc.ClientUnaryCall;
  Status(argument: _regatta_v1_StatusRequest, callback: grpc.requestCallback<_regatta_v1_StatusResponse__Output>): grpc.ClientUnaryCall;
  status(argument: _regatta_v1_StatusRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_StatusResponse__Output>): grpc.ClientUnaryCall;
  status(argument: _regatta_v1_StatusRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_regatta_v1_StatusResponse__Output>): grpc.ClientUnaryCall;
  status(argument: _regatta_v1_StatusRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_regatta_v1_StatusResponse__Output>): grpc.ClientUnaryCall;
  status(argument: _regatta_v1_StatusRequest, callback: grpc.requestCallback<_regatta_v1_StatusResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ClusterHandlers extends grpc.UntypedServiceImplementation {
  MemberList: grpc.handleUnaryCall<_regatta_v1_MemberListRequest__Output, _regatta_v1_MemberListResponse>;
  
  Status: grpc.handleUnaryCall<_regatta_v1_StatusRequest__Output, _regatta_v1_StatusResponse>;
  
}

export interface ClusterDefinition extends grpc.ServiceDefinition {
  MemberList: MethodDefinition<_regatta_v1_MemberListRequest, _regatta_v1_MemberListResponse, _regatta_v1_MemberListRequest__Output, _regatta_v1_MemberListResponse__Output>
  Status: MethodDefinition<_regatta_v1_StatusRequest, _regatta_v1_StatusResponse, _regatta_v1_StatusRequest__Output, _regatta_v1_StatusResponse__Output>
}
