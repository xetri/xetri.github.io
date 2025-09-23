import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import autoprefixer from 'autoprefixer';

export default defineConfig({
	plugins: [
		injectHTML({
			tagName: "load",
			sourceAttr: "src",
		})
	],
	css: {
		postcss: {
			plugins: [
				autoprefixer({
					add: true,
					flexbox: true,
					grid: true,
				})
			]
		}
	}
});