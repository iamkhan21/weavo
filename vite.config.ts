import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { presetUno } from 'unocss';
import Unocss from 'unocss/vite';
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		Unocss({
			presets: [presetUno()]
		}),
		VitePWA({})
	]
});
