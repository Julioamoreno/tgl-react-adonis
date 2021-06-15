import React from 'react';
import ContentLoader from 'react-content-loader';

const GameDescriptionLoader: React.FC = (props) => (
	<>
		<ContentLoader
			speed={2}
			width={700}
			height={40}
			viewBox='0 0 700 40'
			backgroundColor='#aaa7a7'
			foregroundColor='#7d7878'
			{...props}
		>
			<rect x='1' y='3' rx='5' ry='5' width='700' height='10' />
			<rect x='1' y='22' rx='5' ry='5' width='500' height='10' />
		</ContentLoader>
	</>
);

export default GameDescriptionLoader;
