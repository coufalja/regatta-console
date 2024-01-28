import 'unplugin-icons/types/svelte';
import type { Session } from '@auth/sveltekit';

declare namespace App {
	interface Locals {
		session?: Session;
	}

	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}
