/** @type {import('tailwindcss').Config} */
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
				'winter': 'url(/src/assets/Images/weather image/elijah-hail-WSmbOa4xJwM-unsplash.jpg)',
				'spring': 'url(/src/assets/Images/weather image/zoltan-tasi-h_gwdi8UH2o-unsplash.jpg)',
				'fall': 'url(/src/assets/Images/weather image/noah-silliman-i2J9jnvaAbU-unsplash.jpg)',
				'summer': 'url("/src/assets/Images/weather image/glenn-carstens-peters-2E_dT65fyxo-unsplash.jpg")',
				'image-3': 'url("src/assets/Images/weather image/simon-berger-twukN12EN7c-unsplash.jpg")',
			}
		},
	},
	plugins: [],
}

