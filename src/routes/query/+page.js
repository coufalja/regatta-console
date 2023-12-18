/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const res = await fetch(`/api/cluster/tables`);
	const tables = await res.json();
	const m = new Map();
	Object.keys(tables).forEach((key) => {
		m.set(key, tables[key]);
	});
	return { tables: m };
}
