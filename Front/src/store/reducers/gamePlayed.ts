import { createSlice } from '@reduxjs/toolkit';

interface StateGameSelected {
	numbersSelected: Array<string>;
	id: number;
	type: null | string;
	price: number;
	max_number: number;
	range: number;
	color: string;
	min_cart_value: number;
	description: string;
}

const gamePlayedLocalString = localStorage.getItem('@tgl:gamePlayed');
let initialState: StateGameSelected;
const gamePlayedLocal = JSON.parse(gamePlayedLocalString!) as StateGameSelected;
if (!!gamePlayedLocal) {
	initialState = gamePlayedLocal;
} else {
	const initialGameAvailable = localStorage.getItem('@tgl:availableGames');
	if (initialGameAvailable) {
		const initialGame = JSON.parse(
			initialGameAvailable!
		) as Array<StateGameSelected>;
		initialState = { ...initialGame[0], numbersSelected: [] };
	} else {
		initialState = {} as StateGameSelected;
	}
}

const getNumberAvailable = (state: StateGameSelected) => {
	let numbers: Array<string> = [];
	for (let index = 1; index <= state.range; index++) {
		numbers.push(
			index.toLocaleString('pt-BR', {
				minimumIntegerDigits: 2,
			})
		);
	}

	if (state.numbersSelected.length > 0) {
		state.numbersSelected.map((number: string) => {
			return numbers.splice(numbers.indexOf(number), 1);
		});
	}
	return numbers;
};

const slice = createSlice({
	name: 'GamePlayed',
	initialState,
	reducers: {
		setGamePlayed(state, action) {
			state.id = action.payload.game.id;
			state.type = action.payload.game.type;
			state.price = action.payload.game.price;
			state.range = action.payload.game.range;
			state.max_number = action.payload.game.max_number;
			state.min_cart_value = action.payload.game.min_cart_value;
			state.color = action.payload.game.color;
			state.description = action.payload.game.description;
			state.numbersSelected = [];
			localStorage.setItem('@tgl:gamePlayed', JSON.stringify(state));
		},
		setNumberSelected(state, action) {
			if (
				state.max_number > state.numbersSelected.length &&
				!state.numbersSelected.includes(action.payload.numbersSelected)
			) {
				state.numbersSelected.push(action.payload.numbersSelected);
				state.numbersSelected = state.numbersSelected.sort();
				localStorage.setItem('@tgl:gamePlayed', JSON.stringify(state));
			} else if (
				state.numbersSelected.includes(action.payload.numbersSelected)
			) {
				state.numbersSelected.splice(
					state.numbersSelected.indexOf(action.payload.numbersSelected),
					1
				);
				localStorage.setItem('@tgl:gamePlayed', JSON.stringify(state));
			}
		},
		completeGame(state) {
			const numbersAvailable = getNumberAvailable(state);
			const remaining = state.max_number - state.numbersSelected.length;
			let values = [];
			let i = 1;
			while (i <= remaining) {
				i++;
				let valueRandom = Math.floor(Math.random() * numbersAvailable.length);
				values.push(numbersAvailable[valueRandom]);
				numbersAvailable.splice(valueRandom, 1);
			}
			state.numbersSelected.sort().push(...values.sort());

			localStorage.setItem('@tgl:gamePlayed', JSON.stringify(state));
		},
		clearGame(state) {
			state.numbersSelected = [];
			localStorage.setItem('@tgl:gamePlayed', JSON.stringify(state));
		},
		reset: () => {
			return {} as StateGameSelected;
		},
	},
});

export const GamePlayed = slice.actions;

export default slice;
