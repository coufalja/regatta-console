import { SvelteKitAuth } from '@auth/sveltekit';
import Credentials from '@auth/sveltekit/providers/credentials';
import GitHub from '@auth/sveltekit/providers/github';
import Google from '@auth/sveltekit/providers/google';
import Okta from '@auth/sveltekit/providers/okta';
import { env } from '$env/dynamic/private';
import { type Handle, redirect } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { dev } from '$app/environment';

const authorization: Handle = async ({ event, resolve }): Promise<Response> => {
	// Protect any routes under /authenticated
	if (!event.url.pathname.startsWith('/auth')) {
		const session = await event.locals.getSession();
		if (!session) {
			throw redirect(303, '/auth');
		}
	}

	// If the request is still here, just proceed as normally
	return resolve(event);
};

const authProviders = () => {
	const providers = [];
	if (dev) {
		providers.push(
			Credentials({
				authorize: () => {
					return {
						name: 'fake',
						email: 'fake@google.com'
					};
				}
			})
		);
	}
	if (env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET) {
		providers.push(
			Google({ clientId: env.GOOGLE_CLIENT_ID, clientSecret: env.GOOGLE_CLIENT_SECRET })
		);
	}
	if (env.OKTA_CLIENT_ID && env.OKTA_CLIENT_SECRET && env.OKTA_ISSUER) {
		providers.push(
			Okta({
				clientId: env.OKTA_CLIENT_ID,
				clientSecret: env.OKTA_CLIENT_SECRET,
				issuer: env.OKTA_ISSUER
			})
		);
	}
	if (env.GITHUB_ID && env.GITHUB_SECRET) {
		providers.push(GitHub({ clientId: env.GITHUB_ID, clientSecret: env.GITHUB_SECRET }));
	}
	return providers;
};

export const handle: Handle = sequence(
	SvelteKitAuth({
		secret: env.AUTH_SECRET,
		providers: authProviders()
	}),
	authorization
);
