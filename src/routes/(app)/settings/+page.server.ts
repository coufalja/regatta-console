import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';
import {
	isCredentialsAvailable,
	isGithubAvailable,
	isGoogleAvailable,
	isOktaAvailable
} from '$lib/server/auth';

export const load: PageServerLoad = async () => {
	return {
		settings: {
			auth: {
				isCredentialsAvailable,
				isGithubAvailable,
				isGoogleAvailable,
				isOktaAvailable
			},
			regatta: {
				address: env.REGATTA_ADDRESS,
				tls: {
					ca: env.REGGATA_CA_PATH,
					cert: env.REGATTA_CERT_PATH,
					key: env.REGATTA_KEY_PATH
				}
			}
		}
	};
};
