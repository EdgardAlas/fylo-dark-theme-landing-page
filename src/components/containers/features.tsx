import { featuresData } from '@data/features';
import Image from 'next/image';

export const Features = () => {
	return (
		<section className='mt-[7.5rem] w-[85.333%] grid place-content-center mx-auto gap-[3.875rem] md:grid-cols-2 max-w-[55rem] md:mt-[10rem] md:gap-x-[9.0625rem]'>
			{featuresData.map((feature, index) => (
				<article className='p-[0.7013rem] max-w-[22.6875rem]' key={index}>
					<header className='text-center'>
						<div
							className={
								'relative inline-block mb-6 w-[3.7381rem] h-[4.0294rem] md:w-[5.25rem] md:h-[4.875rem]'
							}
						>
							<Image
								src={feature.icon}
								alt='Access Everywhere'
								fill
								className='object-contain'
							/>
						</div>
						<h2 className='font-raleway font-bold text-[1.125rem] mb-2 md:text-[1.25rem]'>
							{feature.title}
						</h2>
						<p className='text-[0.875rem] leading-[1.3125rem]'>
							{feature.description}
						</p>
					</header>
				</article>
			))}
		</section>
	);
};
