import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import moment from 'moment';

import GamePlayed from '../GamePlayed';
import { State, loadingAction } from '../../store/index';

import { EmptyListMessage } from './styles';

import GamePlayedModel from '../../models/gamePlayed';
import API from '../../API';
import Loader from '../RecentGamesLoader';

const RecentGamesList: React.FC<{
	loadingError: boolean;
	setLoadingError: (value: boolean) => void;
}> = (props) => {
	const dispatch = useDispatch();
	const [allGamesPlayed, setAllGamesPlayed] = useState<GamePlayedModel>([]);
	const [url] = useState('/bets');
	const gameType = useSelector((state: State) => state.recents.id);
	const loading = useSelector((state: State) => state.loading);
	const { user } = useSelector((state: State) => state.authentication);
	const [gamePlayedFiltered, setGamePlayedFiltered] = useState<GamePlayedModel>(
		[]
	);

	useEffect(() => {
		dispatch(loadingAction.waitLoading());
		(async () => {
			try {
				const response = await API.get(url, {
					headers: { Authorization: `Bearer ${user.token}` },
				});
				if (response.status === 200) {
					dispatch(loadingAction.stopLoading());
					setAllGamesPlayed(response.data.data);
				}
			} catch (err) {
				dispatch(loadingAction.stopLoading());
				props.setLoadingError(true);
				if (err.response === undefined) {
					return;
				}
				if (err.response.status === 401) {
					return toast.error('Não Autorizado');
				}
				toast.error(err.message);
			}
		})();
	}, [user, url, dispatch]);

	useEffect(() => {
		if (!gameType) {
			setGamePlayedFiltered(allGamesPlayed);
			return;
		}
		const array = allGamesPlayed.filter(
			(gamePlayed) => gameType === gamePlayed.game.id
		);
		setGamePlayedFiltered(array);
	}, [gameType, allGamesPlayed]);
	return (
		<>
			{loading && <Loader />}
			{!loading && !props.loadingError && gamePlayedFiltered.length === 0 && (
				<EmptyListMessage>
					Não existem registros para esse jogo
				</EmptyListMessage>
			)}
			{!loading && props.loadingError && (
				<EmptyListMessage>
					Não foi possível carregar as informações do servidor
				</EmptyListMessage>
			)}
			{!loading &&
				gamePlayedFiltered.map((gamePlayed, idx) => (
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
