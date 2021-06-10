import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { authenticationAction } from '../../store';

import CardAuthentication from '../../components/CardAuthentication';
import CardRegistration from '../../components/CardRegistration';
import CardResetPassword from '../../components/CardResetPassword';

import User from '../../models/user';

import { AuthenticationGrid, Col8, Title, ButtonFor, Lottery } from './styles';

import axios from '../../API';
import { AxiosResponse } from 'axios';

const Authentication: React.FC = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [card, setCard] = useState('default');

	const handleNewPage = (name: string) => {
		setCard(name);
	};

	const goHomePage = (user: User) => {
		dispatch(authenticationAction.login({ user }));
		history.push('/');
	};

	const handleResetPassword = async (email: string) => {
		const response = await axios.post('/forgotpassword', {
			email,
			link: process.env.REACT_APP_FORGOT_PASSWORD_LINK,
		});

		if (response.status === 200) {
			console.log(response.data.message);
		}
	};

	const handleSuccessResponse = (response: AxiosResponse) => {
		const user: User = {
			name: response.data.user.name,
			email: response.data.user.email,
			token: response.data.token,
		};
		localStorage.setItem(
			'@tgl:recentGames',
			JSON.stringify(response.data.user.bets)
		);
		goHomePage(user);
	};

	const handleRegister = async (
		name: string,
		email: string,
		password: string
	) => {
		const response = await axios.post('/user', {
			name,
			email,
			password,
			password_confirmation: password,
		});

		if (response.status === 200) {
			handleSuccessResponse(response);
		}
	};

	const handleLogin = async (email: string, password: string) => {
		const response = await axios.post('/login', {
			email,
			password,
		});

		if (response.status === 200) {
			handleSuccessResponse(response);
		}
	};

	return (
		<AuthenticationGrid>
			<Col8>
				<Title>The Greatest App</Title>
				<ButtonFor>for</ButtonFor>
				<Lottery>LOTTERY</Lottery>
			</Col8>
			{card === 'reset' && (
				<CardResetPassword
					handlePage={handleNewPage}
					resetPassword={handleResetPassword}
				/>
			)}

			{card === 'registration' && (
				<CardRegistration
					handlePage={handleNewPage}
					register={handleRegister}
				/>
			)}

			{card === 'default' && (
				<CardAuthentication handlePage={handleNewPage} login={handleLogin} />
			)}
		</AuthenticationGrid>
	);
};

export default Authentication;
