import { createSlice } from '@reduxjs/toolkit';

interface StateGameSelected {
	gameType?: null | string;
}

const initialState = { gameType: null } as StateGameSelected;

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
