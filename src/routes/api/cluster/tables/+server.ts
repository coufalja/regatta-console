import { json, type RequestHandler } from '@sveltejs/kit';
import type { StatusResponse } from '$lib/proto/regatta/v1/StatusResponse';
import { cluster } from '$lib/server/cluster';

export const GET: RequestHandler = async () => {
	const sr: StatusResponse = await cluster.status({});
	return json(sr.tables);
};
