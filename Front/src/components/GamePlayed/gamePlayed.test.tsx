import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import GamePlayed from './index';

import { Router } from 'react-router-dom';

const GamePlayedDisplay = (props: {
	type: string;
	price: string;
	gameNumbers: Array<string>;
}) => {
	const history = createMemoryHistory();

	return (
		<Router history={history}>
			<GamePlayed
				color='red'
				gameNumbers={props.gameNumbers}
				gamePrice={props.price}
				type={props.type}
			/>
		</Router>
	);
};

describe('Card Register component', () => {
	test('renders type of game, which was passed by parameter', () => {
		render(
			<GamePlayedDisplay type='Lotofácil' price='R$ 2.50' gameNumbers={[]} />
		);

		const linkElement = screen.getByText('lotofácil', { exact: false });
		expect(linkElement).toBeInTheDocument();
	});

	test('renders price, which was passed by parameter', () => {
		render(<GamePlayedDisplay type='Lotofácil' price='2.5' gameNumbers={[]} />);

		const linkElement = screen.getByText('2.5', {
			exact: false,
		});
		expect(linkElement).toBeInTheDocument();
	});

	test('renders numbers, which was passed by parameter', () => {
		render(
			<GamePlayedDisplay
				type='Lotofácil'
				price='2.5'
				gameNumbers={['15', '20']}
			/>
		);

		const linkElement = screen.getByText('15, 20', {
			exact: false,
		});
		expect(linkElement).toBeInTheDocument();
	});
});
