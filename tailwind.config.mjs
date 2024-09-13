/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			colors: {
				primary: '#9a1b00',   // Rojo 
				secondary: '#F97316', // Naranja
				accent: '#10B981',    // Verde
				neutral: '#F3F4F6',   // Gris claro
				dark: '#1F2937'       // Gris oscuro
			},
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
