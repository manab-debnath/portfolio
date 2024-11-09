/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			boxShadow: {
				light: "0 4px 6px rgba(0, 0, 0, 0.1)", // Light mode shadow
				dark: "0 4px 6px rgba(255, 255, 255, 0.1)", // Dark mode shadow
				darkHover: "0 8px 20px rgba(255, 255, 255, 0.15)",
			},
		},
	},
	plugins: [],
};
