import { createSlice } from '@reduxjs/toolkit';

import AvailableGamesModel from '../../models/games';
import Game from '../../models/game';

const local = localStorage.getItem('@tgl:availableGames');
let initialState;
if (local) {
	initialState = JSON.parse(local) as AvailableGamesModel;
} else {
	initialState = [] as AvailableGamesModel;
}

const slice = createSlice({
	name: 'AvailableGames',
	initialState,
	reducers: {
		saveGames(state, action) {
			if (state.length === 0) {
				action.payload.games.map((game: Game) =>
					state.push({
						type: game.type,
						description: game.description,
						range: game.range,
						price: game.price,
						max_number: game['max_number'],
						color: game.color,
						min_cart_value: game['min_cart_value'],
					})
				);
			} else {
				state = [];
				action.payload.games.map((game: Game) =>
					state.push({
						type: game.type,
						description: game.description,
						range: game.range,
						price: game.price,
						max_number: game['max_number'],
						color: game.color,
						min_cart_value: game['min_cart_value'],
					})
				);
			}
			localStorage.setItem('@tgl:availableGames', JSON.stringify(state));
		},
	},
});

export const AvailableGames = slice.actions;

export default slice;
