import React, { useState } from 'react';

import { Col4, CardTitle, Card, Input, BtnLogin, BtnSignUp } from './styles';

const Registration: React.FC<{
	handlePage: (name: string) => void;
	register: (name: string, email: string, password: string) => void;
}> = (props) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<Col4>
			<CardTitle>Registration</CardTitle>
			<Card>
				<Input
					type='text'
					placeholder='Name'
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>
				<Input
					type='email'
					placeholder='Email'
					value={email}
					onChange={(event) => setEmail(event.target.value)}
				/>
				<Input
					type='password'
					placeholder='Password'
					value={password}
					onChange={(event) => setPassword(event.target.value)}
				/>
				<BtnLogin>
					<button onClick={() => props.register(name, email, password)}>
						Register{' '}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='36'
							height='36'
							fill='currentColor'
							className='bi bi-arrow-right-short'
							viewBox='0 0 16 16'
						>
							<path
								fillRule='evenodd'
								d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z'
							/>
						</svg>
					</button>
				</BtnLogin>
			</Card>
			<BtnSignUp onClick={() => props.handlePage('default')}>
				{' '}
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='36'
					height='36'
					fill='currentColor'
					viewBox='0 0 16 16'
				>
					<path
						fillRule='evenodd'
						d='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z'
					/>
				</svg>
				Back
			</BtnSignUp>
		</Col4>
	);
};

export default Registration;
