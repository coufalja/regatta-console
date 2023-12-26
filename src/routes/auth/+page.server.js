import {
	isCredentialsAvailable,
	isGithubAvailable,
	isGoogleAvailable,
	isOktaAvailable
} from '$lib/server/auth';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		isGoogleAvailable,
		isGithubAvailable,
		isOktaAvailable,
		isCredentialsAvailable
	};
}
