import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store/index';

import Container from '../Container';

import GameChoice from '../../components/GameChoice';
import GameDescription from '../../components/GameDescription';
import ListNumbers from '../../components/ListNumbers';
import GameActionButtons from '../../components/GameActionButtons';

import { NewBetTitle, Col8, Col4 } from './styles';
import Cart from '../../components/Cart';

const NewBet: React.FC = () => {
	const { type } = useSelector((state: State) => state.gamePlayed);

	return (
		<Container>
			<Col8>
				<NewBetTitle>
					<b>NEW BET</b> for {type}
				</NewBetTitle>
				<GameChoice />
				<GameDescription />
				<ListNumbers />
				<GameActionButtons />
			</Col8>
			<Col4>
				<Cart />
			</Col4>
		</Container>
	);
};

export default NewBet;
