import { createSlice } from '@reduxjs/toolkit';

interface SelectedGameState {
	type?: null | string;
}

const initialState = { type: '' } as SelectedGameState;

const slice = createSlice({
	name: 'recentsSelectedGame',
	initialState,
	reducers: {
		setGame(state, action) {
			if (state.type === action.payload.type) {
				state.type = '';
				return;
			}
			state.type = action.payload.type;
		},
	},
});

export const recentsSelectedGameActions = slice.actions;

export default slice;
