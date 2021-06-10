import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import GameButtonList from './index';
import { types as games } from '../../API/games.json';

import { Router } from 'react-router-dom';

const GameButtonListDisplay = (props: { nameButton: string }) => {
	const history = createMemoryHistory();
	const selectGameHandle = () => {};
	return (
		<Router history={history}>
			<GameButtonList
				selectedButton={props.nameButton}
				selectGameHandle={selectGameHandle}
			/>
		</Router>
	);
};

describe('Game Buttons list component', () => {
	test('renders first game type', () => {
		render(<GameButtonListDisplay nameButton='Mega-sena' />);

		const linkElement = screen.getByText(games[0].type, { exact: false });
		expect(linkElement).toBeInTheDocument();
	});

	test('renders second game type', () => {
		render(<GameButtonListDisplay nameButton='Mega-sena' />);

		const linkElement = screen.getByText(games[1].type, { exact: false });
		expect(linkElement).toBeInTheDocument();
	});

	test('renders third game type', () => {
		render(<GameButtonListDisplay nameButton='Mega-sena' />);

		const linkElement = screen.getByText(games[2].type, { exact: false });
		expect(linkElement).toBeInTheDocument();
	});
});
