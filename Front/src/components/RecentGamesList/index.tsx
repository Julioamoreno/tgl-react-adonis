import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import GamePlayed from '../GamePlayed';
import { State } from '../../store/index';

import { EmptyListMessage } from './styles';

import GamePlayedModel from '../../models/gamePlayed';

const RecentGamesList: React.FC = () => {
	const gameType = useSelector((state: State) => state.recents.type) || '';
	const allGamesPlayed: GamePlayedModel = useSelector(
		(state: State) => state.recentGames
	);
	const [gamePlayedFiltered, setGamePlayedFiltered] = useState<GamePlayedModel>(
		[]
	);

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
