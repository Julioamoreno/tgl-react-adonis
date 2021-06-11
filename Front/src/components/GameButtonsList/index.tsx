import React from 'react';
import GameModel from '../../models/game';

import { State } from '../../store';
import { useSelector } from 'react-redux';

import { GameButtonListGrid, GameType } from './styles';

const GameButtonsList: React.FC<{
	selectedButton: null | string;
	selectGameHandle: (game: GameModel) => void;
}> = (props) => {
	const allGames = useSelector((state: State) => state.gamesAvailable);
	return (
		<GameButtonListGrid>
			{allGames &&
				allGames.map((game, idx) => (
					<GameType
						key={idx}
						color={game.color}
						defaultChecked={props.selectedButton !== game.type}
						onClick={() => props.selectGameHandle(game)}
					>
						{game.type}
					</GameType>
				))}
		</GameButtonListGrid>
	);
};

export default GameButtonsList;
