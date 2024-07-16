'use client';

import { FormEvent, useState } from 'react';

import { Button } from '@ui/button';

export const FooterForm = () => {
	const [error, setError] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const email = e.currentTarget.email.value;
		if (!email) {
			setError('Please enter a valid email address');
			return;
		}

		const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		if (!regex.test(email)) {
			setError('Error, please check your email');
			return;
		}

		setError('');
	};

	return (
		<form
			className='bg-theme-blue-dark-intro w-[90%] mx-auto -translate-y-1/2 grid p-8 rounded-[0.5625rem] max-w-[53.9375rem]'
			style={{
				boxShadow: '5px 5px 8px 0 rgba(0, 0, 0, 0.2543)',
			}}
			onSubmit={handleSubmit}
			noValidate
		>
			<h2 className='text-[1.125rem] font-bold leading-6 text-center md:text-[2rem] md:leading-[3rem] mb-4'>
				Get early access today
			</h2>
			<section className='max-w-[44.3125rem] mx-auto'>
				<p className='text-[0.875rem] leading-[1.3125rem] text-center mb-6'>
					It only takes a minute to sign up and our free starter tier is
					extremely generous. If you have any questions, our support team would
					be happy to help you.
				</p>
				<section className='flex flex-col sm:flex-row md:gap-6'>
					<section className='w-full mb-6'>
						<label htmlFor='email' className='sr-only'>
							Email
						</label>
						<input
							id='email'
							name='email'
							type='email'
							className='placeholder:text-[#c0c0c0] rounded-[1.5rem] bg-white h-12 w-full text-[0.625rem] ps-8 text-black sm:text-[1rem] placeholder-[0.875rem]'
							placeholder='email@example.com'
						/>
						{error && (
							<p className='text-theme-accent-red text-[0.75rem] ps-8 mt-2'>
								{error}
							</p>
						)}
					</section>
					<Button className=' h-12 sm:w-[12.5rem]'>Get Started For free</Button>
				</section>
			</section>
		</form>
	);
};
