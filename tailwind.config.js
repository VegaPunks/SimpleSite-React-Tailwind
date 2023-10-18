/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		// mobile first если меньше 1440 то применялись другие стили 1339 другой стиль
		screens: {
			xl: "1440px",
			md: "1024px",
		},
		colors: {
			"almost-white": "hsl(0,0%,98%)",
			"medium-gray": "hsl(0,0%,41%)",
			"almost-black": "hsl(0,0%,8%)",
			black: "black",
			white: "white",
		},
		extend: {},
	},
	plugins: [],
};
