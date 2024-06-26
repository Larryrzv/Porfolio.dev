/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			animation: {
			  'text-gradient': 'text-gradient 1.5s linear infinite',
			  'background-shine': 'background-shine 2s linear infinite',
			  'pulse-slow': 'pulse 6s infinite cubic-bezier(0.4, 0, 0.6, 1)',
			  'border-width': 'border-width 3s infinite alternate',
			},
			keyframes: {
			  'text-gradient': {
				to: {
				  backgroundPosition: '200% center',
				},
			  },
			  'background-shine': {
				from: { backgroundPosition: '0 0' },
				to: { backgroundPosition: '-200% 0' },
			  },
			  'border-width': {
				from: { width: '10px', opacity: '0' },
				to: { width: '100px', opacity: '1' },
			  },
			},
		  },
	},
	plugins: [],
}
