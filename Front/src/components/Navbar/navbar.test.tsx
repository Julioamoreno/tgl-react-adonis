import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import Navbar from './index';

import { Router } from 'react-router-dom';

describe('Navbar component', () => {
	test('renders "TGL" title', () => {
		const history = createMemoryHistory();
		render(
			<Router history={history}>
				<Navbar />
			</Router>
		);
		const linkElement = screen.getByText('TGL', { exact: false });
		expect(linkElement).toBeInTheDocument();
	});

	test('renders "Account" text', () => {
		const history = createMemoryHistory();
		render(
			<Router history={history}>
				<Navbar />
			</Router>
		);
		const linkElement = screen.getByText('account', { exact: false });
		expect(linkElement).toBeInTheDocument();
	});

	test('renders "Log out" text', () => {
		const history = createMemoryHistory();
		render(
			<Router history={history}>
				<Navbar />
			</Router>
		);
		const linkElement = screen.getByText('log out', { exact: false });
		expect(linkElement).toBeInTheDocument();
	});
});
