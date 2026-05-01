import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import spectre from './package/src';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
const config = defineConfig({
	site: 'https://martin-ehrentraut.de',
	output: 'static',
	integrations: [
		expressiveCode({
			themes: [spectreDark],
		}),
		mdx(),
		sitemap(),
		spectre({
			name: 'Martin Ehrentraut',
			themeColor: '#98FB98',
			openGraph: {
				home: {
					title: 'Martin Ehrentraut',
					description: 'Portfolio & Blog für technische Projekte.',
				},
				blog: {
					title: 'Blog',
					description: 'Technische Artikel zu umgesetzten Projekten.',
				},
				projects: {
					title: 'Projekte',
				},
			},
			// giscus: Kommentare deaktiviert — für spätere Konfiguration
		}),
	],
	adapter: node({
		mode: 'standalone',
	}),
});

export default config;
