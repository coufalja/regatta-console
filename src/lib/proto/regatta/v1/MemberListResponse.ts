// Original file: src/lib/proto/regatta.proto

import type { Member as _regatta_v1_Member, Member__Output as _regatta_v1_Member__Output } from '../../regatta/v1/Member';

export interface MemberListResponse {
  'cluster'?: (string);
  'members'?: (_regatta_v1_Member)[];
}

export interface MemberListResponse__Output {
  'cluster': (string);
  'members': (_regatta_v1_Member__Output)[];
}
