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
	const config: { [key: string]: string | boolean | number | object | [] } = {};
	for (const status of statuses.values()) {
		for (const [k, v] of Object.entries(status.config)) {
			if (v) {
				if (config[k] && JSON.stringify(config[k]) != JSON.stringify(v)) {
					config[k] = 'overridden per host';
				} else {
					config[k] = v;
				}
			}
		}
	}
	return {
		members,
		statuses,
		config
	};
};
