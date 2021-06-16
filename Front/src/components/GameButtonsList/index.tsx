import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { State, loadingAction } from '../../store';

import API from '../../API';

import GameModel from '../../models/game';
import AvailableGamesModel from '../../models/games';

import { GameButtonListGrid, GameType } from './styles';
import GameButtonLoader from '../GameButtonLoader';

const GameButtonsList: React.FC<{
	selectedButton: number;
	selectGameHandle: (game: GameModel) => void;
}> = (props) => {
	const [allGames, setAllGames] = useState<AvailableGamesModel>([]);
	const loading = useSelector((state: State) => state.loading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadingAction.waitLoading());
		(async () => {
			try {
				const response = await API.get('/games');

				if (response.status === 200) {
					dispatch(loadingAction.stopLoading);
					return setAllGames(response.data);
				}
			} catch (err) {
				return toast.error(err.message, { autoClose: false });
			}
		})();
	}, [dispatch]);
	return (
		<GameButtonListGrid>
			{loading && <GameButtonLoader />}
			{loading && <GameButtonLoader />}
			{!loading &&
				allGames &&
				allGames.map((game, idx) => (
					<GameType
						key={idx}
						color={game.color}
						defaultChecked={props.selectedButton !== game.id}
						onClick={() => props.selectGameHandle(game)}
					>
						{game.type}
					</GameType>
				))}
		</GameButtonListGrid>
	);
};

export default GameButtonsList;
