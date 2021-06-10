import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { State } from '../../store';

import { gamePlayedAction, cartGameAction, cartTotalAction } from '../../store';
import Toast from '../Toast';

import {
	RecentBarContainer,
	ContainerLeft,
	ButtonLight,
	Button,
} from './styles';

const GameActionButtons: React.FC = (props) => {
	const dispatch = useDispatch();
	const game = useSelector((state: State) => state.gamePlayed);
	const { message, typeMessage } = useSelector(
		(state: State) => state.gamePlayed
	);

	const clearGame = () => {
		if (game.numbersSelected.length === 0) {
			console.log(game.numbersSelected.length);

			dispatch(
				gamePlayedAction.setMessage({
					message: 'O jogo já está limpo',
					typeMessage: 'aviso',
				})
			);
		}
		dispatch(gamePlayedAction.clearGame());
	};
	const completeGameHandle = () => {
		dispatch(gamePlayedAction.completeGame());
	};
	const addToCart = () => {
		if (game.numbersSelected.length < game.maxNumber) {
			return dispatch(
				gamePlayedAction.setMessage({
					message: 'Termine de completar o jogo para adicionar ao carrinho',
					typeMessage: 'aviso',
				})
			);
		}
		dispatch(
			cartGameAction.newItemCart({
				type: game.gameType,
				numbersSelected: game.numbersSelected,
				price: game.price,
				color: game.color,
				minCartValue: game.minCartValue,
			})
		);
		dispatch(cartTotalAction.increment({ price: game.price }));
		dispatch(gamePlayedAction.clearGame());
	};

	return (
		<RecentBarContainer>
			{message && <Toast message={message!} type={typeMessage!} />}
			<ContainerLeft>
				<ButtonLight onClick={completeGameHandle}> Complete game </ButtonLight>
				<ButtonLight onClick={clearGame}> Clear game </ButtonLight>
			</ContainerLeft>

			<Button onClick={addToCart}>
				{' '}
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='22'
					height='22'
					fill='currentColor'
					viewBox='0 0 16 16'
				>
					<path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
				</svg>
				Add to cart{' '}
			</Button>
		</RecentBarContainer>
	);
};

export default GameActionButtons;
