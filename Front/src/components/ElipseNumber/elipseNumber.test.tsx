import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import ElipseNumber from './index';

import { Router } from 'react-router-dom';

const ElipseNumberComponent = (props: { number: string; active: boolean }) => {
	const history = createMemoryHistory();
	const selectedNumber = () => {};
	return (
		<Router history={history}>
			<ElipseNumber
				number={props.number}
				active={props.active}
				selectNumber={selectedNumber}
			/>
		</Router>
	);
};

describe('ElipseNumber component', () => {
	test('renders number 1 elipse when passing 1 for props', () => {
		const history = createMemoryHistory();
		render(
			<Router history={history}>
				<ElipseNumberComponent number='1' active={false} />
			</Router>
		);
		const linkElement = screen.getByText('1', { exact: false });
		expect(linkElement).toBeInTheDocument();
	});

	test('renders active elipse when passing active for props', () => {
		const history = createMemoryHistory();
		render(
			<Router history={history}>
				<ElipseNumberComponent number='1' active={true} />
			</Router>
		);
		const linkElement = screen.getByRole('checkbox', {
			exact: false,
			checked: true,
		});
		expect(linkElement).toBeInTheDocument();
	});
});
