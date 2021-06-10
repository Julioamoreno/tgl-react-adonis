import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store';

import Games from '../../models/games';

import { Filter, GameChoiceContainer } from './styles';

const GameDescription: React.FC<{ gameTypes: Games }> = (props) => {
	const [description, setDescription] = useState('');
	const { gameType } = useSelector((state: State) => state.gamePlayed);
	useEffect(() => {
		const game = props.gameTypes.find((game) => {
			return game.type === gameType;
		});
		setDescription(game?.description || '');
	}, [gameType, props.gameTypes]);

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
