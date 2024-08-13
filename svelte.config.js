import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

let entries = ['/about', '/pricing', '/contact', '/'];

const config = {
	preprocess: vitePreprocess(),
	kit: {
		prerender: {
			entries
		},
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({ strict: false, fallback: 'index.html' })
	}
};

export default config;
