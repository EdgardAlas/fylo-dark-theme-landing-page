import { headerLinks } from '@data/data';
import Image from 'next/image';

import logo from '@assets/logo.svg?url';

export const Header = () => {
	return (
		<header className='min-h-6 px-5 p-6 flex items-center justify-between sm:px-[5rem] sm:pt-[4.5625rem] max-w-[123.75rem] mx-auto'>
			<section className='relative h-6 w-20 sm:h-[3.25rem] sm:w-[11rem]'>
				<Image src={logo} alt='logo' fill />
			</section>

			<ul className='flex-1 flex justify-end gap-[1.5625rem] mr-[0.3125rem] sm:gap-[3.625rem] 2xl:mr-0'>
				{headerLinks.map((link, index) => (
					<li
						key={index}
						className='text-[0.75rem] font-raleway sm:text-base hover:fake-bold hover:border-b-[0.0625rem] hover:border-b-white'
					>
						<a href={link.href}>{link.title}</a>
					</li>
				))}
			</ul>
		</header>
	);
};
