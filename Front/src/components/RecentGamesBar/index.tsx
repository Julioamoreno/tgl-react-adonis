import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import GameButtonsList from '../GameButtonsList';

import { State, recentsGameSelectedAction } from '../../store';
import GameModel from '../../models/game';

import arrowIcon from '../../assets/icons/arrow-right-green.svg';

import {
	TitleBar,
	Filter,
	NewBetButton,
	RecentBarContainer,
	Arrow,
} from './styles';

const RecentGamesBar: React.FC = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const gameType = useSelector((state: State) => state.recents.type) || '';

	const newBet = () => {
		history.push('/newbet');
	};

	const selectGameHandle = (game: GameModel) => {
		dispatch(recentsGameSelectedAction.setGame({ type: game.type }));
	};

	return (
		<RecentBarContainer>
			<TitleBar>Recent Games</TitleBar>
			<Filter>
				<p>Filters</p>
				<GameButtonsList
					selectedButton={gameType}
					selectGameHandle={selectGameHandle}
				/>
			</Filter>

			<NewBetButton onClick={newBet}>
				<p>New Bet</p>
				<Arrow src={arrowIcon} alt='arrow right' color='green' />
			</NewBetButton>
		</RecentBarContainer>
	);
};

export default RecentGamesBar;
