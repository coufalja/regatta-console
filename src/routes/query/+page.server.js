import { kv } from '$lib/server/kv';

/** @type {import('./$types').Actions} */
export const actions = {
	query: async ({ request }) => {
		const data = await request.formData();
		const table = data.get('table') + '';
		const key = data.get('query') + '';
		const req = {
			table,
			key
		};
		try {
			const response = await kv.range(req);
			return { request: req, response };
		} catch (err) {
			let error = 'unknown';
			if (err instanceof Error) {
				error = err.message;
			}
			return { request: req, error };
		}
	}
};
