import { json, type RequestHandler } from '@sveltejs/kit';
import type { MemberListResponse } from '$lib/proto/regatta/v1/MemberListResponse';
import { cluster } from '$lib/server/cluster';

export const GET: RequestHandler = async (): Promise<Response> => {
	const ml: MemberListResponse = await cluster.memberList({});
	return json(ml.members);
};
