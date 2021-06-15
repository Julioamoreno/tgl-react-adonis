import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import {
	authenticationAction,
	gamesAvailableAction,
	recentGamesPlayedAction,
} from '../../store';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CardAuthentication from '../../components/CardAuthentication';
import CardRegistration from '../../components/CardRegistration';
import CardResetPassword from '../../components/CardResetPassword';

import User from '../../models/user';
import RecentGamesPlayedModel from '../../models/gamePlayed';

import { AuthenticationGrid, Col8, Title, ButtonFor, Lottery } from './styles';

import API from '../../API';
import { AxiosResponse } from 'axios';

const Authentication: React.FC = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [card, setCard] = useState('default');
	const [error, setError] = useState<string | null>();

	const handleNewPage = (name: string) => {
		setCard(name);
		setError(null);
	};

	const goHomePage = (user: User) => {
		dispatch(authenticationAction.login({ user }));
		history.push('/');
	};

	const handleResetPassword = async (email: string) => {
		const regexEmail = /\S+@\S+\.\S+/;
		const isValidEmail = regexEmail.test(email);
		if (!email || !isValidEmail) {
			return setError('Digite um email valido');
		}
		try {
			const response = await API.post('/forgotpassword', {
				email,
				link: process.env.REACT_APP_FORGOT_PASSWORD_LINK,
			});

			if (response.status === 200) {
				toast.success('Uma mensagem foi enviada para seu email');
			}
		} catch (err) {
			console.log({ ...err });
			if (err.response.status === 403) {
				setError('Email não cadastrado');
				return toast.error('Verifique o email digitado');
			}
		}
	};

	const getAllGames = async () => {
		const response = await API.get('/games');
		if (response.status === 200)
			dispatch(gamesAvailableAction.saveGames({ games: response.data }));
	};

	const saveRecentsBets = async (bets: RecentGamesPlayedModel) => {
		dispatch(recentGamesPlayedAction.saveGames([...bets]));
	};

	const handleSuccessResponse = async (response: AxiosResponse) => {
		const user: User = {
			name: response.data.user.name,
			email: response.data.user.email,
			token: response.data.token,
		};

		saveRecentsBets(response.data.user.bets);
		await getAllGames();
		goHomePage(user);
	};

	const handleErrorResponse = () => {
		setError('Email ou Senha incorretos');
		return toast.error('Email ou Senha incorretos, tente novamente.');
	};

	const handleRegister = async (
		name: string,
		email: string,
		password: string
	) => {
		const regexEmail = /\S+@\S+\.\S+/;
		const isValidEmail = regexEmail.test(email);
		if (!name || !email || !password || !isValidEmail) {
			setError('Verifique os campos digitados');
			return toast.error('Verifique os campos digitados');
		}
		try {
			const response = await API.post('/user', {
				name,
				email,
				password,
				password_confirmation: password,
			});

			if (response.status === 200) {
				handleSuccessResponse(response);
			}
		} catch (err) {
			if (err.response.status === 422) {
				setError(err.response.data.errors[0].message);
				return toast.error('Email já cadastrado');
			} else {
				setError('Ocorreu um erro');
				return toast.error('Ocorreu um erro');
			}
		}
	};

	const handleLogin = async (email: string, password: string) => {
		const regexEmail = /\S+@\S+\.\S+/;
		const isValidEmail = regexEmail.test(email);
		if (!email || !password || !isValidEmail) {
			return toast.error('Verifique os campos digitados');
		}
		try {
			const response = await API.post('/login', {
				email,
				password,
			});

			if (response.status === 200) {
				return handleSuccessResponse(response);
			}
		} catch (err) {
			if (err.response.status === 400) {
				handleErrorResponse();
				return;
			}
		}
	};

	return (
		<AuthenticationGrid>
			<ToastContainer />
			<Col8>
				<Title>The Greatest App</Title>
				<ButtonFor>for</ButtonFor>
				<Lottery>LOTTERY</Lottery>
			</Col8>
			{card === 'reset' && (
				<CardResetPassword
					handlePage={handleNewPage}
					resetPassword={handleResetPassword}
					error={error}
					clearError={() => {
						setError(null);
					}}
				/>
			)}

			{card === 'registration' && (
				<CardRegistration
					handlePage={handleNewPage}
					register={handleRegister}
					error={error}
					clearError={() => {
						setError(null);
					}}
				/>
			)}

			{card === 'default' && (
				<CardAuthentication
					handlePage={handleNewPage}
					login={handleLogin}
					error={error}
					clearError={() => {
						setError(null);
					}}
				/>
			)}
		</AuthenticationGrid>
	);
};

export default Authentication;
