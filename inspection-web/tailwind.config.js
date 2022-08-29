/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		container: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1300px',
			'2xl': '1600px',
			'3xl': '1820px',
		},
		colors: {
			white: '#fff',
			darkblue: '#112565',
			purple: '#37487E',
			darkred: '#A41C1C',
			green: '#4BA735',
			lightgreen: '#FF4A4A',
			secondary: '#727272',
			lightgray: '#EDF2F6',
			darkgray: '#9C9C9C',
			gray900: '#686868',
		},
		extend: {},
	},
	plugins: [],
}
