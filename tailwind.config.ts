import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		screens: {
			sm: "375px",
			md: "768px",
			lg: "1200px"
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				md: "2rem"
			}
		},
		extend: {
			spacing: {
				"620": "620px",
				"820": "820px",
				"1020": "1020px",
				"1220": "1220px"
			},
			fontFamily: {
				sans: "var(--font-sans)",
				serif: "var(--font-serif)"
			},
			animation: {
				"ping-large": "ping-large 1s ease-in-out infinite",
				"move-left": "move-left 1s linear infinite",
				"move-right": "move-right 1s linear infinite",
				wave: "wave 1s infinite ease-in-out"
			},
			keyframes: {
				"ping-large": {
					"75%, 100%": {
						transform: "scale(3)",
						opacity: "0"
					}
				},
				"move-left": {
					"0%": {
						transform: "translateX(0%)"
					},
					"100%": {
						transform: "translateX(-50%)"
					}
				},
				"move-right": {
					"0%": {
						transform: "translateX(-50%)"
					},
					"100%": {
						transform: "translateX(0%)"
					}
				},
				wave: {
					"0%, 100%": { transform: "rotate(0deg)" }, // Start and end position
					"50%": { transform: "rotate(40deg)" } // Middle position (wave)
				}
			}
		}
	},
	plugins: []
};
export default config;
