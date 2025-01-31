/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'skript': '#D87C0B',
				'l-black': '#FFFFFF',
				'l-white': '#000000',
				'l-nav-fill': '#E6E6E6',
				'l-search-fill': '#BFBFBF',
				'l-search-text': '#6F6F6F',
				'l-search-border': '#919191',
			}
		},
	},
	plugins: [],
}
