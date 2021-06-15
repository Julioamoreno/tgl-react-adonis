import { createSlice } from '@reduxjs/toolkit';

interface SelectedGameState {
	id?: null | number;
}

const initialState = { type: '' } as SelectedGameState;

const slice = createSlice({
	name: 'recentsSelectedGame',
	initialState,
	reducers: {
		setGame(state, action) {
			if (state.id === action.payload.type) {
				state.id = null;
				return;
			}
			state.id = action.payload.id;
		},
	},
});

export const recentsSelectedGameActions = slice.actions;

export default slice;
