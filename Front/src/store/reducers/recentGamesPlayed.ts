import { createSlice } from '@reduxjs/toolkit';

import RecentGamesPlayedModel from '../../models/gamePlayed';

const recentGamesLocal = localStorage.getItem('@tgl:recentGames');
const initialState =
	(JSON.parse(recentGamesLocal!) as RecentGamesPlayedModel) ||
	([] as RecentGamesPlayedModel);

const slice = createSlice({
	name: 'RecentGamesPlayed',
	initialState,
	reducers: {
		saveGames(state, action) {
			state.push({
				numbers: action.payload.numbers,
				created_at: action.payload.created_at,
				price: action.payload.price,
				id: action.payload.game_id,
				game: {
					type: action.payload.game.type,
					color: action.payload.game.color,
				},
			});
			localStorage.setItem('@tgl:recentGames', JSON.stringify(state));
			localStorage.setItem('@tgl:cart', JSON.stringify([]));
		},
	},
});

export const RecentGamesPlayed = slice.actions;

export default slice;
