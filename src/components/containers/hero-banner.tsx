import Image from 'next/image';

import HeroImage from '@assets/illustration-intro.png';

export const HeroBanner = () => {
	return (
		<section className='pt-6 relative md:pt-12'>
			<section className='mx-9 grid justify-center relative z-10 md:pt-1'>
				<Image
					src={HeroImage}
					alt='Hero image'
					className='md:max-w-[720px]'
					quality={100}
				/>
			</section>

			<section className='grid relative z-10'>
				<h1 className='font-raleway text-[24px] leading-9 font-bold text-center w-[320px] mx-auto mt-[33px] md:mt-[35px] md:text-[40px] md:leading-[60px] md:w-[734px] sm:w-[500px]'>
					All your files in one secure location, accessible anywhere.
				</h1>
				<section className='grid'>
					<p className='text-[14px] leading-[21px] text-center w-[296px] mx-auto mt-[15px] md:w-[589px] md:text-[20px] md:mt-[33px] md:leading-[30px] sm:w-[400px]'>
						Fylo stores all your most important files in one secure location.
						Access them wherever you need, share and collaborate with friends
						family, and co-workers.
					</p>
					<button className='w-[240px] h-12 rounded-[24px] md:rounded-[28px] mx-auto mt-8 bg-gradient-to-r from-theme-accent-cyan to-theme-accent-blue md:w-[280px] md:h-14'>
						<span className='font-bold font-raleway text-[14px] md:text-[16px]'>
							Get Started
						</span>
					</button>
				</section>
			</section>
		</section>
	);
};
