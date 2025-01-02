/** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin');
import plugin from 'tailwindcss/plugin'

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,jsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'roboto-mono': ['Roboto Mono', 'monospace'],
				'sour-gummy': ['Sour Gummy', 'sans-serif'],
				'playfair-display': ['Playfair Display', 'serif'],
				'edu-au-vic-wa-nt-pre': ['Edu AU VIC WA NT Pre', 'sans-serif'],
			},
			backgroundImage: {
				'winter': 'url("./assets/Images/weather-image/winter.jpg")',
				'spring': 'url("./assets/Images/weather-image/spring.jpg")',
				'fall': 'url("./assets/Images/weather-image/fall.jpg")',
				'summer': 'url("./assets/Images/weather-image/summer.jpg")',
				'image-3': 'url("./assets/Images/weather-image/image.jpg")',
			},
			animation: {
				'loader-animation': 'loader-animation 2s linear infinite',
			},
			keyframes: {
				'loader-animation': {
					'100%': { left: 'var(--l,100%)' },
				},
			},
		},
	},
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				'.loader': {
					width: '80px',
					height: '40px',
					background: `
			  radial-gradient(circle 25px at top right, #ffd738 40%, transparent),
			  #4dbefa
			`,
					position: 'relative',
					overflow: 'hidden',
				},
				'.loader::before, .loader::after': {
					content: '""',
					position: 'absolute',
					top: '4px',
					left: '-40px',
					width: '36px',
					height: '20px',
					'--c': 'radial-gradient(farthest-side, #fff 96%, transparent)',
					background: `
			  var(--c) 100% 100% /30% 60%, 
			  var(--c) 70% 0 /50% 100%, 
			  var(--c) 0 100% /36% 68%, 
			  var(--c) 27% 18% /26% 40%, 
			  linear-gradient(#fff 0 0) bottom/67% 58%
			`,
					backgroundRepeat: 'no-repeat',
					animation: 'loader-animation 2s linear infinite',
				},
				'.loader::after': {
					top: '15px',
					'--l': '200%',
				},
			});
		}),],
}

