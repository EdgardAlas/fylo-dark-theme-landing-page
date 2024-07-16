import { headerLinks } from '@data/data';
import Image from 'next/image';

import logo from '@assets/logo.svg?url';

export const Header = () => {
	return (
		<header className='min-h-6 px-5 p-6 flex items-center justify-between sm:px-[80px] sm:pt-[73px] '>
			<section className='relative h-6 w-20 sm:h-[52px] sm:w-[176px]'>
				<Image src={logo} alt='logo' fill />
			</section>

			<ul className='flex-1 flex justify-end gap-[25px] mr-[5px] sm:gap-[58px]'>
				{headerLinks.map((link, index) => (
					<li
						key={index}
						className='text-[12px] font-raleway sm:text-base hover:fake-bold hover:border-b-[1px] hover:border-b-white'
					>
						<a href={link.href}>{link.title}</a>
					</li>
				))}
			</ul>
		</header>
	);
};
