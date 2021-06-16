import React, { useState } from 'react';

import Container from '../Container';
import RecentGamesBar from '../../components/RecentGamesBar';
import RecentGamesList from '../../components/RecentGamesList';

const Home: React.FC = () => {
	const [LoadingError, setLoadingError] = useState<boolean>(false);
	return (
		<Container>
			<RecentGamesBar loadingError={LoadingError} />
			<RecentGamesList
				loadingError={LoadingError}
				setLoadingError={(value) => {
					setLoadingError(value);
				}}
			/>
		</Container>
	);
};

export default Home;
