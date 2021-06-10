import React from 'react';
import { Route, Link, useLocation } from 'react-router-dom';

import iconArrow from '../../assets/icons/iconfinder_arrow-right.svg';
import {
	Nav,
	Content,
	ContentLeft,
	ContentRight,
	Title,
	LogoutLi,
} from './styles';

const Navbar: React.FC = (props) => {
	const { pathname } = useLocation();
	const isHomePage = pathname === '/';
	return (
		<Nav>
			<Route>
				<Content>
					<Title className='navbar-brand title'>TGL</Title>
					<ContentLeft>
						{!isHomePage && (
							<li className='nav-item active'>
								<Link to='/'>Home</Link>
							</li>
						)}
					</ContentLeft>
					<ContentRight>
						<li>Account</li>
						<LogoutLi>
							<Link to='/logout'>
								Log out
								<img src={iconArrow} alt='icon arrow' />
							</Link>
						</LogoutLi>
					</ContentRight>
				</Content>
			</Route>
		</Nav>
	);
};

export default Navbar;
