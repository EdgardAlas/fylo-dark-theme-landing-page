import Image from 'next/image';
import React from 'react';

import Arrow from '@assets/icon-arrow.svg';
import StayProductiveImage from '@assets/illustration-stay-productive.png';

export const StayProductive = () => {
	return (
		<section className='flex flex-col mx-8 mt-[134px] gap-10 min-[915px]:flex-row max-w-[1220px] lg:items-start md:mx-auto lg:gap-[51px] md:mt-[115px] px-8 xl:px-0'>
			<Image
				src={StayProductiveImage}
				alt='Stay productive'
				className='self-center   md:max-w-[400px] lg:max-w-[500px] xl:max-w-[640px]'
			/>
			<section className='grid gap-4 lg:mt-[120px]'>
				<h2 className='text-[18px] font-bold leading-6 font-raleway md:text-[40px] md:leading-[50px] text-balance'>
					Stay productive, wherever you are
				</h2>
				<p className='text-[14px] leading-[21px] md:text-[16px] md:leading-6'>
					Never let location be an issue when accessing your files. Fylo has you
					covered for all of your file storage needs.
				</p>
				<p className='text-[14px] leading-[21px] md:text-[16px] md:leading-6'>
					Securely share files and folders with friends, family and colleagues
					for live collaboration. No email attachments required!
				</p>

				<a
					href='#'
					className='text-[#62E0D9] inline-flex text-[12px] items-center gap-2 border-b border-[#62E0D9] self-start hover:text-white hover:border-white transition-colors justify-self-start md:text-[16px] md:mt-2'
				>
					See how Fylo works
					<Arrow />
				</a>
			</section>
		</section>
	);
};
