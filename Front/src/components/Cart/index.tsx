import React from 'react';

import GameCartModel from '../../models/gameCart';
import NewGamePlayed from '../NewGamePlayed';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store';
import {
	cartGameAction,
	cartTotalAction,
	recentGamesPlayedAction,
	gamePlayedAction,
} from '../../store/index';

import arrowIcon from '../../assets/icons/arrow-right-green-light.svg';
import {
	CartGrid,
	CartTitle,
	CartGames,
	CartTotal,
	CartBottom,
} from './styles';

const Cart: React.FC = () => {
	const dispatch = useDispatch();
	const games: GameCartModel = useSelector((state: State) => state.cartGame);
	const { total } = useSelector((state: State) => state.cartTotal);
	const { min_cart_value } = useSelector((state: State) => state.gamePlayed);

	const deleteGame = (id: number, price: number) => {
		dispatch(cartGameAction.deleteItemChart({ id }));
		dispatch(cartTotalAction.decrement({ price }));
	};

	const saveGamesCart = () => {
		const minValue = min_cart_value.toLocaleString('pt-BR', {
			minimumFractionDigits: 2,
			style: 'currency',
			currency: 'BRL',
		});

		if (total < min_cart_value) {
			return dispatch(
				gamePlayedAction.setMessage({
					message: `Valor mínimo para salvar é ${minValue}`,
					typeMessage: 'aviso',
				})
			);
		}
		const date = new Date();
		const dateNow = `${date.getDate().toString().padStart(2, '0')}/${(
			date.getMonth() + 1
		)
			.toString()
			.padStart(2, '0')}/${date.getFullYear()}`;

		games.map((game) => {
			dispatch(
				recentGamesPlayedAction.saveGames({
					selectedNumbers: game.selectedNumbers,
					date: dateNow,
					type: game.type,
					price: game.price,
					color: game.color,
				})
			);
			return dispatch(cartGameAction.clearCart());
		});
		dispatch(cartTotalAction.clear());
		dispatch(
			gamePlayedAction.setMessage({
				message: 'Jogo salvo com sucesso.',
				typeMessage: 'sucesso',
			})
		);
	};

	return (
		<>
			<CartGrid>
				<CartTitle>CART</CartTitle>
				<CartGames>
					{games.length === 0 ? 'Carrinho Vazio' : null}
					{games.map((game, idx) => (
						<NewGamePlayed
							key={idx}
							color={game.color}
							type={game.type}
							gameNumbers={game.selectedNumbers}
							gamePrice={game.price}
							deleteGame={() => deleteGame(idx, game.price)}
						/>
					))}
				</CartGames>
				<CartTotal>
					<b>Cart</b> Total:{' '}
					{total?.toLocaleString('pt-BR', {
						minimumFractionDigits: 2,
						style: 'currency',
						currency: 'BRL',
					})}
				</CartTotal>
			</CartGrid>
			<CartBottom>
				<button onClick={saveGamesCart}>
					Save
					<img src={arrowIcon} alt='arrow' height='33' />
				</button>
			</CartBottom>
		</>
	);
};

export default Cart;
