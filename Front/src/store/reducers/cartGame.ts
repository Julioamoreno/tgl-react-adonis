import { createSlice } from '@reduxjs/toolkit';

import GameCartModel from '../../models/gameCart';
const cartLocal = localStorage.getItem('@tgl:cart');
const initialState = JSON.parse(cartLocal!) || ([] as GameCartModel);

const slice = createSlice({
	name: 'Cart',
	initialState,
	reducers: {
		newItemCart(state, action) {
			state.push({
				game_id: action.payload.id,
				type: action.payload.type,
				numbers: action.payload.numbers,
				price: action.payload.price,
				color: action.payload.color,
				total: action.payload.total,
				minCartValue: action.payload.minCartValue,
			});
			localStorage.setItem('@tgl:cart', JSON.stringify(state));
		},
		deleteItemChart(state, action) {
			state.splice(action.payload.id, 1);
			localStorage.setItem('@tgl:cart', JSON.stringify(state));
		},
		clearCart: () => {
			localStorage.setItem('@tgl:cart', JSON.stringify([]));
			return initialState;
		},
	},
});

export const Cart = slice.actions;

export default slice;
