/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"black-bg": "#121212",
				"black-sidebar": "#0D0D0D",
				"black-text": "#A7A7A7",
				"black-container": "#1C1C1E",
				"black-border": "#313135",
				"navlink-color": "#BCBCBC",
				"green-color": "#45C87F",
				"green-color-alt": "#2F9D60",
				"black-button": "#2F2F32",
				"tab-color": "#A3A3A9",
			},

			fontFamily: {
				sans: ["Montserrat"],
				serif: ["Lora"],
			},

			animation: {
				"skill-bounce": "bounce .6s",
			},

			keyframes: {
				bounce: {
					"0%": { transform: "translate(0)" },
					"20%": { transform: "translateY(-6px)" },
					"40%": { transform: "translate(0)" },
					"60%": { transform: "translateY(-3px)" },
					"80%": { transform: "translate(0)" },
				},
			},
			
			flexGrow : {
				999: "999"
			},

			gridTemplateColumns: {
				// Simple 16 column grid
				'pgrid': 'minmax(min-content,max-content) 1fr',
			},
		},
	},
	plugins: [],
	// corePlugins: {
	// 	preflight: false,
	// }
};