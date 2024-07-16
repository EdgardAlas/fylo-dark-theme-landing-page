import Image from 'next/image';

import HeroImage from '@assets/illustration-intro.png';

export const HeroBanner = () => {
	return (
		<section className='pt-6 relative md:pt-12'>
			<section className='mx-9 grid justify-center relative z-10 md:pt-1'>
				<Image
					src={HeroImage}
					alt='Hero image'
					className='md:max-w-[45rem]'
					quality={100}
				/>
			</section>

			<section className='grid relative z-10'>
				<h1 className='font-raleway text-[1.5rem] leading-9 font-bold text-center w-[20rem] mx-auto mt-[2.0625rem] md:mt-[2.1875rem] md:text-[2.5rem] md:leading-[3.75rem] md:w-[45.875rem] sm:w-[31.25rem]'>
					All your files in one secure location, accessible anywhere.
				</h1>
				<section className='grid'>
					<p className='text-[0.875rem] leading-[1.3125rem] text-center w-[18.5rem] mx-auto mt-[0.9375rem] md:w-[36.8125rem] md:text-[1.25rem] md:mt-[2.0625rem] md:leading-[1.875rem] sm:w-[25rem]'>
						Fylo stores all your most important files in one secure location.
						Access them wherever you need, share and collaborate with friends
						family, and co-workers.
					</p>
					<button className='w-[15rem] h-12 rounded-[1.5rem] md:rounded-[1.75rem] mx-auto mt-8 bg-gradient-to-r from-theme-accent-cyan to-theme-accent-blue md:w-[17.5rem] md:h-14 hover:!to-[#8ADAE3]'>
						<span className='font-bold font-raleway text-[0.875rem] md:text-[1rem]'>
							Get Started
						</span>
					</button>
				</section>
			</section>
		</section>
	);
};
