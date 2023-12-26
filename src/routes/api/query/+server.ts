import { kv } from '$lib/server/kv';
import { json, type RequestHandler } from '@sveltejs/kit';
import type { RangeRequest } from '$lib/proto/regatta/v1/RangeRequest';
import type { DeleteRangeRequest } from '$lib/proto/regatta/v1/DeleteRangeRequest';

export const POST: RequestHandler = async ({ request }): Promise<Response> => {
	const { table, key } = await request.json();
	const req: RangeRequest = {
		table: table,
		key: key
	};
	try {
		const response = await kv.range(req);
		return json({ request: req, response, error: undefined });
	} catch (err) {
		let error = 'unknown';
		if (err instanceof Error) {
			error = err.message;
		}
		return json({ request: req, response: undefined, error });
	}
};

export const PUT: RequestHandler = async ({ request }): Promise<Response> => {
	const { table, key } = await request.json();
	const req: DeleteRangeRequest = {
		table: table,
		key: key
	};
	try {
		const response = await kv.put(req);
		return json({ request: req, response, error: undefined });
	} catch (err) {
		let error = 'unknown';
		if (err instanceof Error) {
			error = err.message;
		}
		return json({ request: req, response: undefined, error });
	}
};

export const DELETE: RequestHandler = async ({ request }): Promise<Response> => {
	const { table, key } = await request.json();
	const req: DeleteRangeRequest = {
		table: table,
		key: key
	};
	try {
		const response = await kv.deleteRange(req);
		return json({ request: req, response, error: undefined });
	} catch (err) {
		let error = 'unknown';
		if (err instanceof Error) {
			error = err.message;
		}
		return json({ request: req, response: undefined, error });
	}
};
