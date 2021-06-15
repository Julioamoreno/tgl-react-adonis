import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State, gameSelectedAction, gamePlayedAction } from '../../store';

import GameButtonsList from '../GameButtonsList';

import GameModel from '../../models/game';

import { Filter, GameChoiceContainer } from './styles';

const GameChoice: React.FC = () => {
	const dispatch = useDispatch();
	const { id } = useSelector((state: State) => state.gamePlayed);

	const selectGameHandle = (game: GameModel) => {
		dispatch(gameSelectedAction.setGameSelected({ game: game.type }));
		dispatch(
			gamePlayedAction.setGamePlayed({
				game,
			})
		);
		dispatch(gamePlayedAction.clearGame());
	};

	return (
		<GameChoiceContainer>
			<p>Choose a game</p>
			<Filter>
				<GameButtonsList
					selectedButton={id}
					selectGameHandle={selectGameHandle}
				/>
			</Filter>
		</GameChoiceContainer>
	);
};

export default GameChoice;
