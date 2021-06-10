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
				type: action.payload.type,
				selectedNumbers: action.payload.numbersSelected,
				price: action.payload.price,
				complete: action.payload.complete,
				color: action.payload.color,
				total: action.payload.total,
				date: action.payload.date,
				minCartValue: action.payload.minCartValue,
			});
			localStorage.setItem('@tgl:cart', JSON.stringify(state));
		},
		deleteItemChart(state, action) {
			state.splice(action.payload.id, 1);
			localStorage.setItem('@tgl:cart', JSON.stringify(state));
		},
		clearCart(state) {
			state.shift();
		},
	},
});

export const Cart = slice.actions;

export default slice;
