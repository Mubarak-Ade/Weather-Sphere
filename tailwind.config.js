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
				'winter': 'url("./assets/Images/weather-image/winter.jpg")',
				'spring': 'url("./assets/Images/weather-image/spring.jpg")',
				'fall': 'url("./assets/Images/weather-image/fall.jpg")',
				'summer': 'url("./assets/Images/weather-image/summer.jpg")',
				'image-3': 'url("./assets/Images/weather-image/image.jpg")',
			}
		},
	},
	plugins: [],
}

