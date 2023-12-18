import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ClusterClient as _regatta_v1_ClusterClient, ClusterDefinition as _regatta_v1_ClusterDefinition } from './regatta/v1/Cluster';
import type { KVClient as _regatta_v1_KVClient, KVDefinition as _regatta_v1_KVDefinition } from './regatta/v1/KV';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  mvcc: {
    v1: {
      Command: MessageTypeDefinition
      CommandResult: MessageTypeDefinition
      Compare: MessageTypeDefinition
      KeyValue: MessageTypeDefinition
      RequestOp: MessageTypeDefinition
      ResponseOp: MessageTypeDefinition
      Txn: MessageTypeDefinition
    }
  }
  regatta: {
    v1: {
      Cluster: SubtypeConstructor<typeof grpc.Client, _regatta_v1_ClusterClient> & { service: _regatta_v1_ClusterDefinition }
      DeleteRangeRequest: MessageTypeDefinition
      DeleteRangeResponse: MessageTypeDefinition
      KV: SubtypeConstructor<typeof grpc.Client, _regatta_v1_KVClient> & { service: _regatta_v1_KVDefinition }
      Member: MessageTypeDefinition
      MemberListRequest: MessageTypeDefinition
      MemberListResponse: MessageTypeDefinition
      PutRequest: MessageTypeDefinition
      PutResponse: MessageTypeDefinition
      RangeRequest: MessageTypeDefinition
      RangeResponse: MessageTypeDefinition
      ResponseHeader: MessageTypeDefinition
      StatusRequest: MessageTypeDefinition
      StatusResponse: MessageTypeDefinition
      TableStatus: MessageTypeDefinition
      TxnRequest: MessageTypeDefinition
      TxnResponse: MessageTypeDefinition
    }
  }
}

