import { createSlice } from '@reduxjs/toolkit';

const initialState = true;

const slice = createSlice({
	name: 'authentication',
	initialState,
	reducers: {
		waitLoading: () => true,
		stopLoading: () => false,
	},
});

export const recentsSelectedGameActions = slice.actions;

export default slice;
