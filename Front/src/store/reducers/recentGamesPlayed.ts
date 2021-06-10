import { createSlice } from '@reduxjs/toolkit';

import RecentGamesPlayedModel from '../../models/gamePlayed';

const recentGamesLocal = localStorage.getItem('@tgl:recentGames');
const initialState =
	JSON.parse(recentGamesLocal!) || ([] as RecentGamesPlayedModel);

const slice = createSlice({
	name: 'RecentGamesPlayed',
	initialState,
	reducers: {
		saveGames(state, action) {
			state.push({
				selectedNumbers: action.payload.selectedNumbers,
				date: action.payload.date,
				type: action.payload.type,
				price: action.payload.price,
				color: action.payload.color,
			});
			localStorage.setItem('@tgl:recentGames', JSON.stringify(state));
			localStorage.setItem('@tgl:cart', JSON.stringify([]));
		},
	},
});

export const RecentGamesPlayed = slice.actions;

export default slice;
