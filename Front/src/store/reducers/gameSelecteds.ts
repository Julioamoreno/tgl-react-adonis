import { createSlice } from '@reduxjs/toolkit';

interface StateGameSelected {
	gameType?: null | string;
}

const availableGamesLocal = localStorage.getItem('@tgl:availableGames');
let initialState;
const game = JSON.parse(availableGamesLocal!);
if (game?.length > 0) {
	initialState = { gameType: game[0].type } as StateGameSelected;
} else {
	initialState = {} as StateGameSelected;
}

const slice = createSlice({
	name: 'GameSelected',
	initialState,
	reducers: {
		setGameSelected(state, action) {
			state.gameType = action.payload.game;
		},
	},
});

export const GameSelected = slice.actions;

export default slice;
