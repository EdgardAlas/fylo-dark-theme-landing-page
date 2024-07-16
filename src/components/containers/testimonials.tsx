import { testimonials } from '@data/testimonials';
import Image from 'next/image';

import quotes from '@assets/bg-quotes.png';

export const Testimonials = () => {
	return (
		<section className='mx-auto mt-[172px] relative grid gap-5 md:grid-cols-3 max-w-[1160px] md:px-12 place-content-center max-md:max-w-[280px] xl:px-0'>
			<section className='absolute w-5 h-5 -top-4 left-2 md:w-14 md:h-14 md:-top-10 md:left-12 xl:-left-2 z-10 '>
				<Image src={quotes} alt='quotes' fill />
			</section>
			{testimonials.map((testimonial, index) => (
				<article
					className='flex flex-col justify-center gap-[17px] bg-theme-blue-dark-testimonials px-5 py-6 rounded-[4px] z-20 relative md:pt-12  md:max-w-[360px] md:px-8'
					key={index}
				>
					<p className='text-[10px] leading-[18px] md:text-[14px] md:leading-[21px]'>
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
							<p className='text-[10px] font-bold leading-[12px] mb-[5px]'>
								{testimonial.name}
							</p>
							<p className='text-[7px] leading-[10px] text-[#83888F] md:text-[10px]'>
								{testimonial.title}
							</p>
						</figcaption>
					</figure>
				</article>
			))}
		</section>
	);
};
