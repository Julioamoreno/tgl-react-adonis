import { configureStore } from '@reduxjs/toolkit';

import recentsSelectedGame from './reducers/recentsSelectedGame';
import recentGamesPlayed from './reducers/recentGamesPlayed';
import gameSelected from './reducers/gameSelecteds';
import gamePlayed from './reducers/gamePlayed';
import cartGame from './reducers/cartGame';
import cartTotal from './reducers/cartTotal';
import authentication from './reducers/authentication';
import gamesAvailable from './reducers/gamesAvailable';
import loading from './reducers/loading';

const store = configureStore({
	reducer: {
		recents: recentsSelectedGame.reducer,
		recentGames: recentGamesPlayed.reducer,
		selectedsGame: gameSelected.reducer,
		gamePlayed: gamePlayed.reducer,
		cartGame: cartGame.reducer,
		cartTotal: cartTotal.reducer,
		authentication: authentication.reducer,
		gamesAvailable: gamesAvailable.reducer,
		loading: loading.reducer,
	},
});

export type State = ReturnType<typeof store.getState>;

export const recentsGameSelectedAction = recentsSelectedGame.actions;
export const recentGamesPlayedAction = recentGamesPlayed.actions;
export const gameSelectedAction = gameSelected.actions;
export const gamePlayedAction = gamePlayed.actions;
export const cartGameAction = cartGame.actions;
export const cartTotalAction = cartTotal.actions;
export const authenticationAction = authentication.actions;
export const gamesAvailableAction = gamesAvailable.actions;
export const loadingAction = loading.actions;

export default store;
