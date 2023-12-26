import { error } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	query: async ({ request, fetch }) => {
		const data = await request.formData();
		const table = data.get('table') + '';
		const key = data.get('query') + '';
		const resp = await fetch(`/api/query`, {
			method: 'POST',
			body: JSON.stringify({
				table,
				key
			})
		});
		if (!resp.ok) {
			error(500, 'backend query error');
		}
		return await resp.json();
	}
};
