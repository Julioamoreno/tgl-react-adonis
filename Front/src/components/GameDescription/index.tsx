import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store';

import DescriptionLoader from '../GameDescriptionLoader';
import { Filter, GameChoiceContainer } from './styles';

const GameDescription: React.FC = () => {
	const { description } = useSelector((state: State) => state.gamePlayed);
	const loading = useSelector((state: State) => state.loading);

	return (
		<GameChoiceContainer>
			<p>Fill you bet</p>
			<Filter>
				{loading && <DescriptionLoader />}
				{!loading && <p>{description}</p>}
			</Filter>
		</GameChoiceContainer>
	);
};

export default GameDescription;
