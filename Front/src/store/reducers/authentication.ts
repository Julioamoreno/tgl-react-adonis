import { createSlice } from '@reduxjs/toolkit';
import User from '../../models/user';

interface AuthenticationState {
	authenticated: boolean;
	user: User;
}
const localAuthenticated = localStorage.getItem('@tgl:authenticate');
const localUser = localStorage.getItem('@tgl:user');
const initialState = {
	authenticated: Boolean(localAuthenticated) || false,
	user: JSON.parse(localUser!) || {
		name: '',
		email: '',
		token: '',
	},
} as AuthenticationState;

const slice = createSlice({
	name: 'authentication',
	initialState,
	reducers: {
		login(state, action) {
			state.authenticated = true;
			state.user = action.payload.user;
			localStorage.setItem('@tgl:authenticate', 'true');
			localStorage.setItem('@tgl:user', JSON.stringify(state.user));
		},
		logout(state) {
			state.authenticated = false;
			localStorage.clear();
		},
	},
});

export const recentsSelectedGameActions = slice.actions;

export default slice;
