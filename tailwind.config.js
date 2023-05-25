import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
	purge: ['./src/**/*.svelte', './src/**/*.css'],
	theme: {
		extend: {
			white: colors.white,
			gray: colors.gray,
			'svelte-prime': '#ff5030'
		}
	},
	plugins: []
};
