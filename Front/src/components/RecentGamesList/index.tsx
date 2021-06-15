import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import GamePlayed from '../GamePlayed';
import { State } from '../../store/index';

import { EmptyListMessage } from './styles';

import GamePlayedModel from '../../models/gamePlayed';
import API from '../../API';

const RecentGamesList: React.FC = () => {
	const [allGamesPlayed, setAllGamesPlayed] = useState<GamePlayedModel>([]);
	const gameType = useSelector((state: State) => state.recents.type);
	const { user } = useSelector((state: State) => state.authentication);
	// const allGamesPlayed: GamePlayedModel = useSelector(
	// 	(state: State) => state.recentGames
	// );
	const [gamePlayedFiltered, setGamePlayedFiltered] = useState<GamePlayedModel>(
		[]
	);

	useEffect(() => {
		(async () => {
			const response = await API.get('/bets', {
				headers: { Authorization: `Bearer ${user.token}` },
			});
			if (response.status === 200) {
				setAllGamesPlayed(response.data.data);
			}
		})();
	}, [user]);

	useEffect(() => {
		if (!gameType) {
			setGamePlayedFiltered(allGamesPlayed);
			return;
		}
		const array = allGamesPlayed.filter(
			(gamePlayed) => gameType === gamePlayed.game.type
		);
		setGamePlayedFiltered(array);
	}, [gameType, allGamesPlayed]);
	return (
		<>
			{gamePlayedFiltered.length === 0 ? (
				<EmptyListMessage>
					Não existem registros para esse jogo
				</EmptyListMessage>
			) : null}
			{gamePlayedFiltered.map((gamePlayed, idx) => (
				<GamePlayed
					key={idx}
					color={gamePlayed.game.color}
					type={gamePlayed.game.type}
					numbers={gamePlayed.numbers}
					gamePrice={`${moment(gamePlayed.created_at).format(
						'DD/MM/YYYY'
					)} - (${gamePlayed.price.toLocaleString('pt-BR', {
						minimumFractionDigits: 2,
						style: 'currency',
						currency: 'BRL',
					})})`}
				/>
			))}
		</>
	);
};

export default RecentGamesList;
