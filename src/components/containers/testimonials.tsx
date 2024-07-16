import { testimonials } from '@data/testimonials';
import Image from 'next/image';

import quotes from '@assets/bg-quotes.png';

export const Testimonials = () => {
	return (
		<section className='mx-auto mt-[10.75rem] relative grid gap-5 md:grid-cols-3 max-w-[72.5rem] md:px-12 place-content-center max-md:max-w-[17.5rem] xl:px-0 md:mb-[22.5rem] mb-[21.5625rem]'>
			<section className='absolute w-5 h-5 -top-4 left-2 md:w-14 md:h-14 md:-top-10 md:left-12 xl:-left-2 z-10'>
				<Image src={quotes} alt='quotes' fill />
			</section>
			{testimonials.map((testimonial, index) => (
				<article
					className='flex flex-col justify-center gap-[1.0625rem] bg-theme-blue-dark-testimonials px-5 py-6 rounded-[0.25rem] z-20 relative md:pt-12  md:max-w-[22.5rem] md:px-8'
					key={index}
				>
					<p className='text-[0.625rem] leading-[1.125rem] md:text-[0.875rem] md:leading-[1.3125rem]'>
						{testimonial.text}
					</p>
					<figure className='flex gap-2 items-start'>
						<Image
							src={testimonial.image}
							alt={`profile-${index + 1}`}
							width={24}
							height={24}
							className='rounded-full'
						/>
						<figcaption>
							<p className='text-[0.625rem] font-bold leading-[0.75rem] mb-[0.3125rem]'>
								{testimonial.name}
							</p>
							<p className='text-[0.4375rem] leading-[0.625rem] text-[#83888F] md:text-[0.625rem]'>
								{testimonial.title}
							</p>
						</figcaption>
					</figure>
				</article>
			))}
		</section>
	);
};
