import { json, type RequestHandler } from '@sveltejs/kit';
import { cluster } from '$lib/server/grpc';
import type { StatusResponse } from '$lib/proto/regatta/v1/StatusResponse';

export const GET: RequestHandler = async () => {
	// @ts-expect-error promisify return unknown
	const sr: StatusResponse = await cluster.status({});
	return json(sr.tables);
};
