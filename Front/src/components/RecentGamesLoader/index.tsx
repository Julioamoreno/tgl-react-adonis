import React from 'react';
import ContentLoader from 'react-content-loader';

import { LoaderGrid } from './styles';

const RecentGamesLoader: React.FC = (props) => (
	<>
		<LoaderGrid>
			<ContentLoader
				speed={2}
				width={410}
				height={60}
				viewBox='0 0 410 60'
				backgroundColor='#aaa7a7'
				foregroundColor='#797777'
				{...props}
			>
				<rect x='18' y='45' rx='3' ry='3' width='132' height='6' />
				<rect x='1' y='2' rx='5' ry='5' width='7' height='58' />
				<rect x='18' y='25' rx='3' ry='3' width='240' height='6' />
				<rect x='18' y='10' rx='3' ry='3' width='240' height='6' />
			</ContentLoader>
		</LoaderGrid>
		<LoaderGrid>
			<ContentLoader
				speed={2}
				width={410}
				height={60}
				viewBox='0 0 410 60'
				backgroundColor='#aaa7a7'
				foregroundColor='#797777'
				{...props}
			>
				<rect x='18' y='45' rx='3' ry='3' width='132' height='6' />
				<rect x='1' y='2' rx='5' ry='5' width='7' height='58' />
				<rect x='18' y='25' rx='3' ry='3' width='240' height='6' />
				<rect x='18' y='10' rx='3' ry='3' width='240' height='6' />
			</ContentLoader>
		</LoaderGrid>
		<LoaderGrid>
			<ContentLoader
				speed={2}
				width={410}
				height={60}
				viewBox='0 0 410 60'
				backgroundColor='#aaa7a7'
				foregroundColor='#797777'
				{...props}
			>
				<rect x='18' y='45' rx='3' ry='3' width='132' height='6' />
				<rect x='1' y='2' rx='5' ry='5' width='7' height='58' />
				<rect x='18' y='25' rx='3' ry='3' width='240' height='6' />
				<rect x='18' y='10' rx='3' ry='3' width='240' height='6' />
			</ContentLoader>
		</LoaderGrid>
		<LoaderGrid>
			<ContentLoader
				speed={2}
				width={410}
				height={60}
				viewBox='0 0 410 60'
				backgroundColor='#aaa7a7'
				foregroundColor='#797777'
				{...props}
			>
				<rect x='18' y='45' rx='3' ry='3' width='132' height='6' />
				<rect x='1' y='2' rx='5' ry='5' width='7' height='58' />
				<rect x='18' y='25' rx='3' ry='3' width='240' height='6' />
				<rect x='18' y='10' rx='3' ry='3' width='240' height='6' />
			</ContentLoader>
		</LoaderGrid>
	</>
);

export default RecentGamesLoader;
