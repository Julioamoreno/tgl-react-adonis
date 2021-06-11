import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { State } from '../../store';
import { Elipse } from './styles';
import { gamePlayedAction } from '../../store/index';

import ElipseNumber from '../ElipseNumber';

const ListNumbers: React.FC = () => {
	const { range } = useSelector((state: State) => state.gamePlayed);
	const numbers = useSelector(
		(state: State) => state.gamePlayed.numbersSelected
	);
	const dispatch = useDispatch();

	const selectNumberHandle = (number: string) => {
		dispatch(gamePlayedAction.setNumberSelected({ numbersSelected: number }));
	};

	return (
		<Elipse>
			{range &&
				Array.apply(1, Array(range)).map((_x, idx) => (
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
