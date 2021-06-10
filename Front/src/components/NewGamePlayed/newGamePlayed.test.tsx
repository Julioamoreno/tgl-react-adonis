import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import NewGamePlayed from './index';

import { Router } from 'react-router-dom';

const NewGamePlayedComponent = (props: {
	color: string;
	type: string;
	gameNumbers: Array<string>;
	gamePrice: number;
}) => {
	const history = createMemoryHistory();
	const deleteGame = () => {};
	return (
		<Router history={history}>
			<NewGamePlayed
				color={props.color}
				type='Mega-sena'
				gameNumbers={['1']}
				deleteGame={deleteGame}
				gamePrice={2.5}
			/>
		</Router>
	);
};

describe('NewGamePlayed component', () => {
	test('renders type game', () => {
		const history = createMemoryHistory();
		render(
			<Router history={history}>
				<NewGamePlayedComponent
					color='red'
					type='Mega-sena'
					gameNumbers={['03', '05']}
					gamePrice={2.5}
				/>
			</Router>
		);
		const linkElement = screen.getByText('mega-sena', {
			exact: false,
		});
		expect(linkElement).toBeInTheDocument();
	});

	test('renders price game formated', () => {
		const history = createMemoryHistory();
		render(
			<Router history={history}>
				<NewGamePlayedComponent
					color='red'
					type='Mega-sena'
					gameNumbers={['03', '05']}
					gamePrice={2.5}
				/>
			</Router>
		);

		const linkElement = screen.getByText('R$ 2.50', {
			exact: false,
		});
		expect(linkElement).toBeInTheDocument();
	});
});
