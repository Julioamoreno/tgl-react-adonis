import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store';

import { Filter, GameChoiceContainer } from './styles';

const GameDescription: React.FC = () => {
	const { description } = useSelector((state: State) => state.gamePlayed);

	return (
		<GameChoiceContainer>
			<p>Fill you bet</p>
			<Filter>
				<p>{description}</p>
			</Filter>
		</GameChoiceContainer>
	);
};

export default GameDescription;
