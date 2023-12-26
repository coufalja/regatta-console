import { env } from '$env/dynamic/private';
import Credentials from '@auth/sveltekit/providers/credentials';
import { dev } from '$app/environment';
import Google from '@auth/sveltekit/providers/google';
import Okta from '@auth/sveltekit/providers/okta';
import GitHub from '@auth/sveltekit/providers/github';

export const isGithubAvailable: boolean = Boolean(env.GITHUB_ID) && Boolean(env.GITHUB_SECRET);
export const isGoogleAvailable: boolean =
	Boolean(env.GOOGLE_CLIENT_ID) && Boolean(env.GOOGLE_CLIENT_SECRET);
export const isOktaAvailable: boolean =
	Boolean(env.OKTA_CLIENT_ID) && Boolean(env.OKTA_CLIENT_SECRET) && Boolean(env.OKTA_ISSUER);
export const isCredentialsAvailable: boolean = true;

export const authProviders = () => {
	const providers = [];
	providers.push(
		Credentials({
			authorize: () => {
				if (dev) {
					return {
						name: 'fake',
						email: 'fake@google.com'
					};
				}
				return null;
			}
		})
	);
	if (isGoogleAvailable) {
		providers.push(
			Google({ clientId: env.GOOGLE_CLIENT_ID, clientSecret: env.GOOGLE_CLIENT_SECRET })
		);
	}
	if (isOktaAvailable) {
		providers.push(
			Okta({
				clientId: env.OKTA_CLIENT_ID,
				clientSecret: env.OKTA_CLIENT_SECRET,
				issuer: env.OKTA_ISSUER
			})
		);
	}
	if (isGithubAvailable) {
		providers.push(GitHub({ clientId: env.GITHUB_ID, clientSecret: env.GITHUB_SECRET }));
	}
	return providers;
};
