import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { State } from '../../store';
import { Elipse } from './styles';
import { gamePlayedAction } from '../../store/index';

import GamesModel from '../../models/games';

import ElipseNumber from '../ElipseNumber';

const ListNumbers: React.FC<{ gameTypes: GamesModel }> = (props) => {
	const [number, setNumber] = useState(0);
	const { gameType } = useSelector((state: State) => state.gamePlayed);
	const numbers = useSelector(
		(state: State) => state.gamePlayed.numbersSelected
	);
	const dispatch = useDispatch();

	useEffect(() => {
		const game = props.gameTypes.find((game) => {
			return game.type === gameType || 'Mega-Sena';
		});
		setNumber(game?.range || 0);
	}, [gameType, props.gameTypes]);

	const selectNumberHandle = (number: string) => {
		dispatch(gamePlayedAction.setNumberSelected({ numbersSelected: number }));
	};

	return (
		<Elipse>
			{Array.apply(1, Array(number)).map((_x, idx) => (
				<ElipseNumber
					key={idx}
					number={(idx + 1).toLocaleString('pt-BR', {
						minimumIntegerDigits: 2,
					})}
					selectNumber={selectNumberHandle}
					active={numbers?.includes(
						(idx + 1).toLocaleString('pt-BR', {
							minimumIntegerDigits: 2,
						})
					)}
				/>
			))}
		</Elipse>
	);
};

export default ListNumbers;
