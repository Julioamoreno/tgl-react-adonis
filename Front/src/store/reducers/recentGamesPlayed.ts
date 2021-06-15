import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import RecentGamesPlayedModel from '../../models/gamePlayed';

const recentGamesLocal = localStorage.getItem('@tgl:recentGames');
const initialState =
	(JSON.parse(recentGamesLocal!) as RecentGamesPlayedModel) ||
	([] as RecentGamesPlayedModel);

const slice = createSlice({
	name: 'RecentGamesPlayed',
	initialState,
	reducers: {
		saveGames(state, action: PayloadAction<RecentGamesPlayedModel>) {
			action.payload.map((game) =>
				state.push({
					numbers: game.numbers,
					created_at: game.created_at,
					price: game.price,
					id: game.id,
					game: {
						type: game.game.type,
						color: game.game.color,
						id: game.game.id,
					},
				})
			);
			localStorage.setItem('@tgl:recentGames', JSON.stringify(state));
			localStorage.setItem('@tgl:cart', JSON.stringify([]));
		},
		reset: () => initialState,
	},
});

export const RecentGamesPlayed = slice.actions;

export default slice;
