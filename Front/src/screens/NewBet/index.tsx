import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store/index';

import model from '../../models/game';
import GamesModel from '../../models/games';

import Container from '../Container';

import GameChoice from '../../components/GameChoice';
import GameDescription from '../../components/GameDescription';
import ListNumbers from '../../components/ListNumbers';
import GameActionButtons from '../../components/GameActionButtons';

import { NewBetTitle, Col8, Col4 } from './styles';
import Cart from '../../components/Cart';

import API from '../../API';

const NewBet: React.FC = () => {
	const [gameTypes, setGameTypes] = useState<GamesModel>([]);
	const [gameSelected, setGameSelected] = useState<model>();
	const { gameType } = useSelector((state: State) => state.gamePlayed);
	useEffect(() => {
		(async () => {
			const response = await API.get('/games');

			if (response.status === 200) setGameTypes(response.data);
		})();
	}, []);

	useEffect(() => {
		const game = gameTypes.find((game) => {
			return game.type === gameType;
		});

		setGameSelected(game);
	}, [gameType, gameTypes]);

	return (
		<Container>
			<Col8>
				<NewBetTitle>
					<b>NEW BET</b> for {gameSelected?.type}
				</NewBetTitle>
				<GameChoice allGames={gameTypes} />
				<GameDescription gameTypes={gameTypes} />
				<ListNumbers gameTypes={gameTypes} />
				<GameActionButtons />
			</Col8>
			<Col4>
				<Cart />
			</Col4>
		</Container>
	);
};

export default NewBet;
