import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import CardRegister from './index';

import { Router } from 'react-router-dom';

const CardRegisterDisplay = (props: { pageName: string }) => {
	const history = createMemoryHistory();
	const backPage = () => {};
	const homePage = () => {};
	const hadlePage = (name: string) => {};
	return (
		<Router history={history}>
			<CardRegister
				backPage={backPage}
				page={props.pageName}
				goHomePage={homePage}
				handlePage={hadlePage}
			/>
		</Router>
	);
};

describe('Card Register component', () => {
	test('renders "authentication" title when the page is "default"', () => {
		render(<CardRegisterDisplay pageName='default' />);

		const linkElement = screen.getByText('authentication', { exact: false });
		expect(linkElement).toBeInTheDocument();
	});
	test('renders email input when the page is "default"', () => {
		render(<CardRegisterDisplay pageName='default' />);

		const linkElement = screen.getByPlaceholderText('email', { exact: false });
		expect(linkElement).toBeInTheDocument();
	});
	test('renders password input when the page is "default"', () => {
		render(<CardRegisterDisplay pageName='default' />);

		const linkElement = screen.getByPlaceholderText('password', {
			exact: false,
		});
		expect(linkElement).toBeInTheDocument();
	});
	test('renders "forget my password" when the page is "default"', () => {
		render(<CardRegisterDisplay pageName='default' />);
		const linkElement = screen.getByText('i forget my password', {
			exact: false,
		});
		expect(linkElement).toBeInTheDocument();
	});

	test('renders log in button when the page is "default"', () => {
		render(<CardRegisterDisplay pageName='default' />);

		const linkElement = screen.getByText('log in', {
			exact: false,
		});
		expect(linkElement).toBeInTheDocument();
	});

	test('renders sign up button when the page is "default"', () => {
		render(<CardRegisterDisplay pageName='default' />);

		const linkElement = screen.getByText('sign up', {
			exact: false,
		});
		expect(linkElement).toBeInTheDocument();
	});

	test('renders "Registration" title when the page is "registration"', () => {
		render(<CardRegisterDisplay pageName='registration' />);

		const linkElement = screen.getByText('registration', {
			exact: false,
		});
		expect(linkElement).toBeInTheDocument();
	});

	test('renders name input when the page is "registration"', () => {
		render(<CardRegisterDisplay pageName='registration' />);

		const linkElement = screen.getByPlaceholderText('name', {
			exact: false,
		});
		expect(linkElement).toBeInTheDocument();
	});

	test('renders email input when the page is "registration"', () => {
		render(<CardRegisterDisplay pageName='registration' />);

		const linkElement = screen.getByPlaceholderText('email', {
			exact: false,
		});
		expect(linkElement).toBeInTheDocument();
	});

	test('renders password input when the page is "registration"', () => {
		render(<CardRegisterDisplay pageName='registration' />);

		const linkElement = screen.getByPlaceholderText('password', {
			exact: false,
		});
		expect(linkElement).toBeInTheDocument();
	});

	test('renders registration button when the page is "registration"', () => {
		render(<CardRegisterDisplay pageName='registration' />);

		const linkElement = screen.getByText('register', {
			exact: false,
		});
		expect(linkElement).toBeInTheDocument();
	});

	test('renders back button when the page is "registration"', () => {
		render(<CardRegisterDisplay pageName='registration' />);

		const linkElement = screen.getByText('back', {
			exact: false,
		});
		expect(linkElement).toBeInTheDocument();
	});

	test('renders "Reset password" title when the page is "reset"', () => {
		render(<CardRegisterDisplay pageName='reset' />);

		const linkElement = screen.getByText('reset password', {
			exact: false,
		});
		expect(linkElement).toBeInTheDocument();
	});

	test('renders email input when the page is "reset"', () => {
		render(<CardRegisterDisplay pageName='reset' />);

		const linkElement = screen.getByPlaceholderText('email', {
			exact: false,
		});
		expect(linkElement).toBeInTheDocument();
	});

	test('renders send link button when the page is "reset"', () => {
		render(<CardRegisterDisplay pageName='reset' />);

		const linkElement = screen.getByText('send link', {
			exact: false,
		});
		expect(linkElement).toBeInTheDocument();
	});

	test('renders back button when the page is "reset"', () => {
		render(<CardRegisterDisplay pageName='reset' />);

		const linkElement = screen.getByText('back', {
			exact: false,
		});
		expect(linkElement).toBeInTheDocument();
	});
});
