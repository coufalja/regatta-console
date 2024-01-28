import type { PageLoad } from './$types';
import type { Member } from '$lib/proto/regatta/v1/Member';

export const load: PageLoad = async ({ fetch }) => {
	const mr = await fetch(`/api/cluster/members`);
	const members = (await mr.json()) as Member[];
	const statuses = new Map();
	for (const member of members) {
		const sr = await fetch(`/api/cluster/status?target=${member?.clientURLs?.at(0)}`);
		const status = await sr.json();
		statuses.set(member?.id, status);
	}
	return {
		members,
		statuses
	};
};
