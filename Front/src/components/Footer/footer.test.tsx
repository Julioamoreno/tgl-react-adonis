import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import Footer from './index';

import { Router } from 'react-router-dom';

describe('Footer component', () => {
	test('renders copyright text', () => {
		const history = createMemoryHistory();
		render(
			<Router history={history}>
				<Footer />
			</Router>
		);
		const linkElement = screen.getByText('Copyright 2020 Luby Software', {
			exact: false,
		});
		expect(linkElement).toBeInTheDocument();
	});
});
