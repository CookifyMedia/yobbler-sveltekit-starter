const colors = require('tailwindcss/colors');

const withAlphaValue = (varName) => `hsl(var(--${varName}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			isa: colors.fuchsia,
			penny: colors.sky,
			maddie: colors.amber,
			dark: colors.gray,
			gray: colors.stone,
			white: colors.white,
			copy: {
				base: withAlphaValue('copy-base-color'),
				muted: withAlphaValue('copy-muted-color')
			},
			surface: {
				1: withAlphaValue('surface-1-color'),
				2: withAlphaValue('surface-2-color')
			},
			shadow: {
				1: withAlphaValue('shadow-1-color')
			},
			transparent: 'transparent',
			current: 'currentColor'
		},
		fontFamily: {
			sans: ['Overpass', 'sans-serif'],
			comfortaa: ['Comfortaa', 'sans-serif']
		},
		fontWeight: {
			thin: 100,
			normal: 400,
			semibold: 600,
			bold: 700,
			extrabold: 900,
		},
		container: {
			center: true
		},
		extend: {
			animation: {
				'ping-once': 'ping 1s cubic-bezier(0, 0, 0.2, 1)'
			}
		}
	},
  plugins: [require("daisyui")]
};
 