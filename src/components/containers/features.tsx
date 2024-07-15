import { featuresData } from '@data/features';
import Image from 'next/image';

export const Features = () => {
	return (
		<section className='mt-[120px] w-[85.333%] grid place-content-center mx-auto gap-[62px] md:grid-cols-2 max-w-[880px] md:mt-[160px] md:gap-x-[145px]'>
			{featuresData.map((feature, index) => (
				<article className='p-[11.22px] max-w-[363px]' key={index}>
					<header className='text-center'>
						<div
							className={
								'relative inline-block mb-6 w-[59.81px] h-[64.47px] md:w-[84px] md:h-[78px]'
							}
						>
							<Image
								src={feature.icon}
								alt='Access Everywhere'
								fill
								className='object-contain'
							/>
						</div>
						<h2 className='font-raleway font-bold text-[18px] mb-2 md:text-[20px]'>
							{feature.title}
						</h2>
						<p className='text-[14px] leading-[21px]'>{feature.description}</p>
					</header>
				</article>
			))}
		</section>
	);
};
