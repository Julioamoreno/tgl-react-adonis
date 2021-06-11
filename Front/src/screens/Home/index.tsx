import React from 'react';

import Container from '../Container';
import RecentGamesBar from '../../components/RecentGamesBar';
import RecentGamesList from '../../components/RecentGamesList';

const Home: React.FC = () => {
	return (
		<Container>
			<RecentGamesBar />
			<RecentGamesList />
		</Container>
	);
};

export default Home;
