import type { PageLoad } from './$types';
import type { TableStatus } from '$lib/proto/regatta/v1/TableStatus';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(`/api/cluster/tables`);
	const tables = await res.json();
	const m: Map<string, TableStatus> = new Map();
	Object.keys(tables).forEach((key) => {
		m.set(key, tables[key]);
	});
	return { tables: m };
};
