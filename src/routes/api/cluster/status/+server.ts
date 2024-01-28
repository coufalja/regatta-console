import { error, json, type RequestHandler } from '@sveltejs/kit';
import { cluster } from '$lib/server/cluster';

export const GET: RequestHandler = async ({ url }): Promise<Response> => {
	if (!url.searchParams.has('target')) {
		error(412, 'must provide target query parameter');
	}
	return json(await cluster.status({ config: true }, url.searchParams.get('target')!));
};
