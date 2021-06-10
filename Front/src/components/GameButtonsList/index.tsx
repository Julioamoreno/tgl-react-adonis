import React from 'react';
import GameModel from '../../models/game';
import GamesModel from '../../models/games';

import { GameButtonListGrid, GameType } from './styles';

const GameButtonsList: React.FC<{
	selectedButton: string;
	selectGameHandle: (game: GameModel) => void;
	allGames: GamesModel;
}> = (props) => {
	return (
		<GameButtonListGrid>
			{props.allGames.map((game, idx) => (
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
