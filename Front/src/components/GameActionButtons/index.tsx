import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { State } from '../../store';

import { gamePlayedAction, cartGameAction, cartTotalAction } from '../../store';
import { toast } from 'react-toastify';

import {
	RecentBarContainer,
	ContainerLeft,
	ButtonLight,
	Button,
} from './styles';

const GameActionButtons: React.FC = (props) => {
	const dispatch = useDispatch();
	const game = useSelector((state: State) => state.gamePlayed);

	const clearGame = () => {
		if (game.numbersSelected.length === 0) {
			toast.warning('O jogo já está limpo');
		}
		dispatch(gamePlayedAction.clearGame());
	};
	const completeGameHandle = () => {
		if (game.numbersSelected.length === game.max_number) {
			return toast.warning('O jogo já está completo');
		}
		dispatch(gamePlayedAction.completeGame());
	};
	const addToCart = () => {
		if (game.numbersSelected.length < game.max_number) {
			return toast.warning(
				'Termine de completar o jogo para adicionar ao carrinho.'
			);
		}
		dispatch(
			cartGameAction.newItemCart({
				type: game.type,
				numbersSelected: game.numbersSelected,
				price: game.price,
				color: game.color,
				minCartValue: game.min_cart_value,
			})
		);
		dispatch(cartTotalAction.increment({ price: game.price }));
		dispatch(gamePlayedAction.clearGame());
	};

	return (
		<RecentBarContainer>
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
