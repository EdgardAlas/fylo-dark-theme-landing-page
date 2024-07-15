import { headerLinks } from '@data/data';
import Image from 'next/image';

import logo from '@assets/logo.svg?url';

export const Header = () => {
	return (
		<header className='min-h-6 mx-5 my-6 flex items-center justify-between md:mx-20 md:my-[73px]'>
			<section className='relative h-6 w-20 md:h-[52px] md:w-[176px]'>
				<Image src={logo} alt='logo' fill />
			</section>

			<ul className='flex-1 flex justify-end gap-[25px] mr-[5px] md:gap-[58px] md:mr-0'>
				{headerLinks.map((link, index) => (
					<li key={index} className='text-[12px] font-raleway md:text-base'>
						<a href={link.href}>{link.title}</a>
					</li>
				))}
			</ul>
		</header>
	);
};
