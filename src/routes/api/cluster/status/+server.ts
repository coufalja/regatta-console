import { json, type RequestHandler } from '@sveltejs/kit';
import type { MemberListResponse } from '$lib/proto/regatta/v1/MemberListResponse';
import type { StatusResponse } from '$lib/proto/regatta/v1/StatusResponse';
import type { Member } from '$lib/proto/regatta/v1/Member';
import { cluster } from '$lib/server/cluster';

interface MemberStatus extends Member {
	status: StatusResponse;
}

export const GET: RequestHandler = async (): Promise<Response> => {
	const ml: MemberListResponse = await cluster.memberList({});
	const status: MemberStatus[] = [];
	const members = ml.members || [];
	for (let i = 0; i < members.length; i++) {
		const clientURLs = members[i].clientURLs || [];
		const st = await cluster.status({}, clientURLs[0].split('://')[1]);
		status.push({ ...members[i], status: st });
	}
	// @ts-expect-error type err
	return json(status.sort((a, b) => a.id - b.id));
};
