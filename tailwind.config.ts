import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				raleway: ['var(--raleway)', 'sans-serif'],
			},
			screens: {
				'2xl': '1440px',
			},
			colors: {
				theme: {
					'blue-dark-intro': 'hsl(217, 28%, 15%)',
					'blue-dark-main': 'hsl(218, 28%, 13%)',
					'blue-dark-footer': 'hsl(216, 53%, 9%)',
					'blue-dark-testimonials': 'hsl(219, 30%, 18%)',
					'accent-cyan': 'hsl(176, 68%, 64%)',
					'accent-blue': 'hsl(198, 60%, 50%)',
					'accent-red': 'hsl(0, 100%, 63%)',
					'neutral-white': 'hsl(0, 0%, 100%)',
				},
			},
		},
	},
	plugins: [],
};
export default config;
