/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const res = await fetch(`/api/cluster/status`);
	const status = await res.json();
	return { status };
}
