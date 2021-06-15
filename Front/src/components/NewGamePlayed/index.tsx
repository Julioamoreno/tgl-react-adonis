import React from 'react';

import {
	GamePlayedGrid,
	Row,
	TrashCol,
	DeleteButton,
	Col,
	ListNumber,
	PriceP,
	GameType,
} from './styles';

const NewGamePlayed: React.FC<{
	color: string;
	type: string;
	numbers: Array<string>;
	gamePrice: number;
	deleteGame: () => void;
}> = (props) => {
	const price = props.gamePrice?.toLocaleString('pt-BR', {
		minimumFractionDigits: 2,
		style: 'currency',
		currency: 'BRL',
	});

	return (
		<GamePlayedGrid>
			<TrashCol>
				<DeleteButton onClick={props.deleteGame}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						fill='currentColor'
						className='bi bi-trash'
						viewBox='0 0 16 16'
					>
						<path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
						<path
							fillRule='evenodd'
							d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
						/>
					</svg>
				</DeleteButton>
			</TrashCol>
			<Col color={props?.color}>
				<Row>
					<ListNumber>{props.numbers}</ListNumber>
				</Row>

				<Row></Row>
				<Row>
					<GameType color={props?.color}>{props?.type}</GameType>
					<PriceP>{price}</PriceP>
				</Row>
			</Col>
		</GamePlayedGrid>
	);
};

export default NewGamePlayed;
