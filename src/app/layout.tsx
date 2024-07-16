import clsx from 'clsx';
import type { Metadata } from 'next';
import { Open_Sans, Raleway } from 'next/font/google';

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
			<body
				className={clsx(
					openSans.variable,
					raleway.variable,
					"bg-[url('/bg-mobile.png')] md:bg-[url('/bg-desktop.png')] bg-no-repeat bg-[0_280px] sm:bg-[0_70vh] md:bg-[0_848px] max-md:bg-cover 2.5xl:bg-cover"
				)}
			>
				{children}
			</body>
		</html>
	);
}
