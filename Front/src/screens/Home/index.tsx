import React, { useEffect, useState } from 'react';

import Container from '../Container';
import RecentGamesBar from '../../components/RecentGamesBar';
import RecentGamesList from '../../components/RecentGamesList';

import GamesModel from '../../models/games';

import API from '../../API';

const Home: React.FC = () => {
	const [allGames, setAllGames] = useState<GamesModel>([]);

	useEffect(() => {
		(async () => {
			const response = await API.get('/games');
			if (response.status === 200) setAllGames(response.data);
		})();
	}, []);
	return (
		<Container>
			<RecentGamesBar allGames={allGames} />
			<RecentGamesList />
		</Container>
	);
};

export default Home;
