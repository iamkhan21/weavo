import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { presetUno } from 'unocss';
import Unocss from 'unocss/vite';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'; // @ts-ignore
import tsconfig from './tsconfig.json';
// @ts-ignore
import path from 'node:path';

function handlePath(p) {
	return path.resolve(__dirname, p).replace(/([\\/])\*$/, '');
}

const aliases = Object.entries(tsconfig.compilerOptions.paths);
const aliasConfig = {};

for (const [configAlias, configPaths = []] of aliases) {
	const wpAlias = configAlias.replace(/([\\/])\*$/, '');
	aliasConfig[wpAlias] = (configPaths as string[]).map(handlePath);
}

const buildDate = new Date().toLocaleString('en-GB', {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: '2-digit',
	minute: '2-digit'
});

const themeColor = '#343a40';

const pwaOptions: Partial<VitePWAOptions> = {
	includeAssets: ['images/*'],
	manifest: {
		name: 'Weavo',
		short_name: 'Weavo',
		description: 'Weavo - a weather app',
		theme_color: themeColor,
		background_color: themeColor,
		display: 'standalone',
		lang: 'en',
		scope: '/',
		icons: [
			{
				src: 'favicons/icon-192.png',
				type: 'image/png',
				sizes: '192x192'
			},
			{
				src: 'favicons/icon-512.png',
				type: 'image/png',
				sizes: '512x512'
			}
		]
	}
};

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		Unocss({
			presets: [presetUno()]
		}),
		VitePWA(pwaOptions)
	],
	resolve: {
		alias: {
			...aliasConfig
		}
	},
	define: {
		__BUILD_VERSION__: JSON.stringify(process.env.BUILD_ID || '1.1.1.1'),
		__BUILD_DATE__: JSON.stringify(buildDate)
	}
});
