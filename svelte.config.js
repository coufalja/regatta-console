import adapter from '@catdadcode/svelte-adapter-bun';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	vitePlugin: {
		inspector: true
	},
	kit: {
		adapter: adapter({
			out: 'build',
			envPrefix: '',
			precompress: {
				brotli: true,
				gzip: true,
				files: ['htm', 'html']
			},
			dynamic_origin: true,
			xff_depth: 1
		})
	}
};
export default config;
