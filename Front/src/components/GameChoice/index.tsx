import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State, gameSelectedAction, gamePlayedAction } from '../../store';

import GameButtonsList from '../GameButtonsList';

import GameModel from '../../models/game';
import GamesModel from '../../models/games';

import { Filter, GameChoiceContainer } from './styles';

const GameChoice: React.FC<{ allGames: GamesModel }> = (props) => {
	const dispatch = useDispatch();
	const { gameType } = useSelector((state: State) => state.gamePlayed) || '';

	const selectGameHandle = (game: GameModel) => {
		dispatch(gameSelectedAction.setGameSelected({ game: game.type }));
		dispatch(
			gamePlayedAction.setGamePlayed({
				range: game.range,
				maxNumber: game['max-number'],
				color: game.color,
				price: game.price,
				gameType: game.type,
			})
		);
		dispatch(gamePlayedAction.clearGame());
	};

	return (
		<GameChoiceContainer>
			<p>Choose a game</p>
			<Filter>
				<GameButtonsList
					selectedButton={gameType}
					selectGameHandle={selectGameHandle}
					allGames={props.allGames}
				/>
			</Filter>
		</GameChoiceContainer>
	);
};

export default GameChoice;
