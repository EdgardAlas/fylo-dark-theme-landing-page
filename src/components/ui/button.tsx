import { ComponentProps } from 'react';

import { cn } from '@libs/cn';

export const Button = ({
	className,
	children,
	...props
}: ComponentProps<'button'>) => {
	return (
		<button
			className={cn(
				'w-full rounded-[1.5rem] md:rounded-[1.75rem] bg-gradient-to-r from-theme-accent-cyan to-theme-accent-blue md:h-[3rem] hover:!to-[#8ADAE3] shrink-0',
				className
			)}
			{...props}
		>
			<span className='font-bold font-raleway text-[0.875rem] md:text-[1rem]'>
				{children}
			</span>
		</button>
	);
};
