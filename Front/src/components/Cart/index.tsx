import React from 'react';

import GameCartModel from '../../models/gameCart';
import NewGamePlayed from '../NewGamePlayed';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { State } from '../../store';
import {
	cartGameAction,
	cartTotalAction,
	recentGamesPlayedAction,
} from '../../store/index';

import API from '../../API';

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
	const { user } = useSelector((state: State) => state.authentication);
	const { total } = useSelector((state: State) => state.cartTotal);
	const { min_cart_value } = useSelector((state: State) => state.gamePlayed);

	const deleteGame = (id: number, price: number) => {
		dispatch(cartGameAction.deleteItemChart({ id }));
		dispatch(cartTotalAction.decrement({ price }));
	};

	const handleSuccessResponse = async () => {
		dispatch(recentGamesPlayedAction.reset());
		dispatch(cartGameAction.clearCart());
		dispatch(cartTotalAction.clear());
		toast.success('Jogo salvo com sucesso.');
	};

	const saveGamesCart = async () => {
		const minValue = min_cart_value.toLocaleString('pt-BR', {
			minimumFractionDigits: 2,
			style: 'currency',
			currency: 'BRL',
		});

		if (total < min_cart_value) {
			return toast.error(`Valor mínimo para salvar é ${minValue}`);
		}
		const response = await API.post(
			'/bets',
			{
				bet: [...games],
			},
			{ headers: { Authorization: `Bearer ${user.token}` } }
		);

		if (response.status === 200) {
			return handleSuccessResponse();
		}
		if (response.status === 401) {
			return toast.error('Não Autorizado');
		}
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
							numbers={game.numbers}
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
