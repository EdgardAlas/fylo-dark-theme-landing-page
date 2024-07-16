'use client';

import Image from 'next/image';
import { useState } from 'react';

import StayProductiveImage from '@assets/illustration-stay-productive.png';

export const StayProductive = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<section className='flex flex-col mt-[8.375rem] gap-10 min-[915px]:flex-row max-w-[76.25rem] lg:items-start md:mx-auto lg:gap-[3.1875rem] md:mt-[7.1875rem] px-8 xl:px-0'>
			<Image
				src={StayProductiveImage}
				alt='Stay productive'
				className='self-center   md:max-w-[25rem] lg:max-w-[31.25rem] xl:max-w-[40rem]'
			/>
			<section className='grid gap-4 lg:mt-[7.5rem]'>
				<h2 className='text-[1.125rem] font-bold leading-6 font-raleway md:text-[2.5rem] md:leading-[3.125rem] text-balance'>
					Stay productive, wherever you are
				</h2>
				<p className='text-[0.875rem] leading-[1.3125rem] md:text-[1rem] md:leading-6'>
					Never let location be an issue when accessing your files. Fylo has you
					covered for all of your file storage needs.
				</p>
				<p className='text-[0.875rem] leading-[1.3125rem] md:text-[1rem] md:leading-6'>
					Securely share files and folders with friends, family and colleagues
					for live collaboration. No email attachments required!
				</p>

				<a
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					href='#'
					className='text-[#62E0D9] inline-flex text-[0.75rem] items-center gap-2 border-b border-[#62E0D9] self-start hover:text-white hover:border-white justify-self-start md:text-[1rem] md:mt-2 [&_svg]:fill-[#62E0D9]'
				>
					<span>See how Fylo works</span>
					<svg
						width='16'
						height='16'
						xmlns='http://www.w3.org/2000/svg'
						xmlnsXlink='http://www.w3.org/1999/xlink'
					>
						<defs>
							<circle id='b' cx='6' cy='6' r='6' />
							<filter
								x='-25%'
								y='-25%'
								width='150%'
								height='150%'
								filterUnits='objectBoundingBox'
								id='a'
							>
								<feOffset in='SourceAlpha' result='shadowOffsetOuter1' />
								<feGaussianBlur
									stdDeviation='1'
									in='shadowOffsetOuter1'
									result='shadowBlurOuter1'
								/>
								<feColorMatrix
									values='0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0'
									in='shadowBlurOuter1'
								/>
							</filter>
						</defs>
						<g fill='none' fillRule='evenodd'>
							<g transform='translate(2 2)'>
								<use fill='#000' filter='url(#a)' xlinkHref='#b' />
								<use fill={isHovered ? '#fff' : '#62E0D9'} xlinkHref='#b' />
							</g>
							<path
								d='M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z'
								fill='#1B2330'
							/>
						</g>
					</svg>
				</a>
			</section>
		</section>
	);
};
