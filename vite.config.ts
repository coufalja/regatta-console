import { sveltekit } from '@sveltejs/kit/vite';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		purgeCss({
			safelist: {
				greedy: [/^hljs-/]
			}
		}),
		Icons({
			compiler: 'svelte'
		})
	]
});
