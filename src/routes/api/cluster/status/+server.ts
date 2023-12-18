import { json, type RequestHandler } from '@sveltejs/kit';
import type { MemberListResponse } from '$lib/proto/regatta/v1/MemberListResponse';
import { cluster, cr, regatta } from '$lib/server/grpc';
import { promisify } from '$lib/server/promisify';
import type { StatusResponse } from '$lib/proto/regatta/v1/StatusResponse';
import type { Member } from '$lib/proto/regatta/v1/Member';

interface MemberStatus extends Member {
	status: StatusResponse;
}

export const GET: RequestHandler = async () => {
	// @ts-expect-error promisify return unknown
	const ml: MemberListResponse = await cluster.memberList({});
	const status: MemberStatus[] = [];
	const members = ml.members || [];
	for (let i = 0; i < members.length; i++) {
		const clientURLs = members[i].clientURLs || [];
		const c = promisify(new regatta.v1.Cluster(clientURLs[0].split('://')[1], cr));
		// @ts-expect-error promisify return unknown
		const st: StatusResponse = await c.status({});
		status.push({...members[i], status: st});
	}
	// @ts-expect-error type err
	return json(status.sort((a, b) => a.id - b.id));
};
