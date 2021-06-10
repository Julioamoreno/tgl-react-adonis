import React, { useState } from 'react';

import {
	Col4,
	CardTitle,
	Card,
	Input,
	BtnLogin,
	BtnResetPassword,
	BtnSignUp,
} from './styles';

const CardAuthentication: React.FC<{
	handlePage: (name: string) => void;
	login: (email: string, password: string) => void;
}> = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<Col4>
			<CardTitle>Authentication</CardTitle>
			<Card>
				<Input
					type='email'
					placeholder='Email'
					value={email}
					onChange={(event) => setEmail(event?.target.value)}
				/>
				<Input
					type='password'
					placeholder='Password'
					value={password}
					onChange={(event) => setPassword(event?.target.value)}
				/>
				<BtnLogin>
					<BtnResetPassword onClick={() => props.handlePage('reset')}>
						I forget my password
					</BtnResetPassword>
					<button onClick={() => props.login(email, password)}>
						Log In{' '}
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
			<BtnSignUp onClick={() => props.handlePage('registration')}>
				Sign Up
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
			</BtnSignUp>
		</Col4>
	);
};

export default CardAuthentication;
