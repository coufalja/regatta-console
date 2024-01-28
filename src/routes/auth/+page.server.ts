import {
	isCredentialsAvailable,
	isGithubAvailable,
	isGoogleAvailable,
	isOktaAvailable
} from '$lib/server/auth';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return {
		isGoogleAvailable,
		isGithubAvailable,
		isOktaAvailable,
		isCredentialsAvailable
	};
};
