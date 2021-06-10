import React from 'react';
import Navbar from '../../components/Navbar';

import { Container, Content } from './styles';

const NavbarScreen: React.FC = (props) => {
	return (
		<Container>
			<Navbar />
			<Content>{props.children}</Content>
		</Container>
	);
};

export default NavbarScreen;
