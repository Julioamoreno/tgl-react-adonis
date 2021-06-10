import { createSlice } from '@reduxjs/toolkit';

interface CartTotalModel {
	total: number;
}

const cartTotalLocal = localStorage.getItem('@tgl:cartTotal');
const initialState = {
	total: Number(cartTotalLocal!) || 0,
} as CartTotalModel;

const slice = createSlice({
	name: 'CartTotal',
	initialState,
	reducers: {
		increment(state, action) {
			state.total += action.payload.price;
			localStorage.setItem('@tgl:cartTotal', state.total.toString());
		},
		decrement(state, action) {
			state.total -= action.payload.price;
			localStorage.setItem('@tgl:cartTotal', state.total.toString());
		},
		clear(state) {
			state.total = 0;
			localStorage.setItem('@tgl:cartTotal', state.total.toString());
		},
	},
});

export const CartTotal = slice.actions;

export default slice;
