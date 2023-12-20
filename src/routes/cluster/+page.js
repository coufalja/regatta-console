/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const mr = await fetch(`/api/cluster/members`);
	const members = await mr.json();
	const statuses = new Map();
	for (const member of members) {
		const sr = await fetch(
			`/api/cluster/status?target=${member?.clientURLs?.at(0).split('://')[1]}`
		);
		const status = await sr.json();
		statuses.set(member?.id, status);
	}
	return {
		members,
		statuses
	};
}
