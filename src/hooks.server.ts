import { SvelteKitAuth } from '@auth/sveltekit';
import { env } from '$env/dynamic/private';
import { type Handle, redirect } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { dev } from '$app/environment';
import { authProviders } from '$lib/server/auth';

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

export const handle: Handle = sequence(
	SvelteKitAuth({
		secret: dev ? 'fake' : env.AUTH_SECRET,
		trustHost: true,
		providers: authProviders()
	}),
	authorization
);
