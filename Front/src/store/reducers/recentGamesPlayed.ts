import { createSlice } from '@reduxjs/toolkit';

import RecentGamesPlayedModel from '../../models/gamePlayed';

const recentGamesLocal = localStorage.getItem('@tgl:recentGames');
const initialState =
	JSON.parse(recentGamesLocal!) || ([] as RecentGamesPlayedModel);

console.log(initialState);

const slice = createSlice({
	name: 'RecentGamesPlayed',
	initialState,
	reducers: {
		saveGames(state, action) {
			state.push({
				numbers: action.payload.numbers,
				date: action.payload.created_at,
				type: action.payload.game.type,
				price: action.payload.price,
				color: action.payload.game.color,
			});
			localStorage.setItem('@tgl:recentGames', JSON.stringify(state));
			localStorage.setItem('@tgl:cart', JSON.stringify([]));
		},
	},
});

export const RecentGamesPlayed = slice.actions;

export default slice;
