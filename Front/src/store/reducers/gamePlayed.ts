import { createSlice } from '@reduxjs/toolkit';

interface StateGameSelected {
	gameType: null | string;
	numbersSelected: Array<string>;
	price: number;
	maxNumber: number;
	range: number;
	color: string;
	message: string | null;
	typeMessage: string | null;
	minCartValue: number;
}

const gamePlayedLocal = localStorage.getItem('@tgl:gamePlayed');
const initialState = JSON.parse(gamePlayedLocal!) || ({} as StateGameSelected);

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
			state.gameType = action.payload.gameType;
			state.price = action.payload.price;
			state.range = action.payload.range;
			state.maxNumber = action.payload.maxNumber;
			state.color = action.payload.color;
			state.numbersSelected = [];
			localStorage.setItem('@tgl:gamePlayed', JSON.stringify(state));
		},
		setNumberSelected(state, action) {
			const remaining = state.maxNumber - state.numbersSelected.length;
			if (
				state.maxNumber > state.numbersSelected.length &&
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
			} else if (
				remaining === 0 &&
				!state.numbersSelected.includes(action.payload.numbersSelected)
			) {
				state.message = 'O jogo já está completo';
				state.typeMessage = 'aviso';
			}
		},
		completeGame(state) {
			const numbersAvailable = getNumberAvailable(state);
			const remaining = state.maxNumber - state.numbersSelected.length;
			if (remaining === 0) {
				state.message = 'O jogo já está completo';
				state.typeMessage = 'aviso';
				return;
			}

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
			// state.complete = false;
		},
		setMessage(state, action) {
			state.message = action.payload.message;
			state.typeMessage = action.payload.typeMessage;
		},
		clearError(state) {
			state.message = null;
			state.typeMessage = null;
		},
	},
});

export const GamePlayed = slice.actions;

export default slice;
