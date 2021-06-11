import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';

import { useDispatch } from 'react-redux';

import API from '../../API';
import { gamesAvailableAction, gamePlayedAction } from '../../store';

import { Container, Content } from './styles';

const NavbarScreen: React.FC = (props) => {
	const dispatch = useDispatch();
	useEffect(() => {
		(async () => {
			const response = await API.get('/games');
			if (response.status === 200) {
				dispatch(gamesAvailableAction.saveGames({ games: response.data }));
				dispatch(
					gamePlayedAction.setGamePlayed({
						game: response.data[0],
						numbersSelected: [],
					})
				);
			}
		})();
	}, [dispatch]);
	return (
		<Container>
			<Navbar />
			<Content>{props.children}</Content>
		</Container>
	);
};

export default NavbarScreen;
