import { footerLinks } from '@data/footer';
import Image from 'next/image';

import { FooterForm } from '@containers/footer-form';

import Email from '@assets/icon-email.svg?url';
import Localtion from '@assets/icon-location.svg?url';
import Phone from '@assets/icon-phone.svg?url';
import logo from '@assets/logo.svg?url';

export const Footer = () => {
	return (
		<footer className=' bg-theme-blue-dark-footer pb-8'>
			<FooterForm />
			<section className='px-[1.875rem] xl:px-0 grid -mt-[5.625rem] gap-10  max-w-[77.5rem] mx-auto'>
				<section className='relative w-[6.75rem] h-[1.9375rem] '>
					<Image src={logo} alt='logo' fill />
				</section>

				<section className='flex flex-col md:flex-row  gap-11 md:gap-x-[7.5rem] flex-wrap'>
					<ul className='flex flex-col gap-3 md:max-w-[21.1875rem]'>
						<li>
							<a href='#' className='flex gap-6 items-start'>
								<Image
									src={Localtion}
									alt='location'
									className='shrink-0'
									width={20}
									height={20}
								/>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua
								</p>
							</a>
						</li>
					</ul>

					<ul className='flex flex-col gap-3 w-[10.6875rem] max-md:-mt-7'>
						<li>
							<a href='tel:+1-543-123-4567' className='flex gap-6 items-center'>
								<Image
									src={Phone}
									alt='phone'
									className='shrink-0'
									width={20}
									height={20}
								/>
								<p>+1-543-123-4567</p>
							</a>
						</li>
						<li>
							<a
								href='mailto:example@flyo.com'
								className='flex gap-6 items-center'
							>
								<Image
									src={Email}
									alt='email'
									className='shrink-0'
									width={20}
									height={20}
								/>
								<p>example@flyo.com</p>
							</a>
						</li>
					</ul>

					<ul className='flex flex-col gap-3 w-[4.3125rem]'>
						{footerLinks.company.map(({ name, link }) => (
							<li key={name}>
								<a href={link} className='flex gap-6 items-center'>
									<p>{name}</p>
								</a>
							</li>
						))}
					</ul>

					<ul className='flex flex-col gap-3 w-[5.4375rem]'>
						{footerLinks.contact.map(({ name, link }) => (
							<li key={name}>
								<a href={link} className='flex gap-6 items-center'>
									<p>{name}</p>
								</a>
							</li>
						))}
					</ul>

					<ul className='flex gap-3 md:w-[5.4375rem] max-sm:justify-center pb-8'>
						{footerLinks.social.map(({ name, link, icon: Icon }) => (
							<li key={name}>
								<a
									href={link}
									area-label={name}
									className='flex gap-6 items-center border rounded-[50%] size-8 justify-center hover:text-[#62E0D9] hover:border-[#62E0D9]'
								>
									<Icon />
								</a>
							</li>
						))}
					</ul>
				</section>
			</section>
		</footer>
	);
};
