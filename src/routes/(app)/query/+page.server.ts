import type { Actions } from './$types';
import { error } from '@sveltejs/kit';

export const actions: Actions = {
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
