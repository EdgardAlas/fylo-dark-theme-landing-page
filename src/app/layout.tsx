import type { Metadata } from 'next';
import { Open_Sans, Raleway } from 'next/font/google';

import { cn } from '@libs/cn';

import './globals.css';

const openSans = Open_Sans({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--open-sans',
});
const raleway = Raleway({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--raleway',
});

export const metadata: Metadata = {
	title: 'Flyo - Landing Page',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={cn(openSans.variable, raleway.variable)}>
				{children}
			</body>
		</html>
	);
}
