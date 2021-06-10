import React from 'react';

import {
	GamePlayedGrid,
	Row,
	Col,
	ListNumber,
	DateAndPriceP,
	GameType,
} from './styles';

const GamePlayed: React.FC<{
	color: string;
	type: string;
	numbers: string;
	gamePrice: string;
}> = (props) => {
	return (
		<GamePlayedGrid>
			<div></div>
			<Col color={props?.color}>
				<Row>
					<ListNumber>{props.numbers}</ListNumber>
				</Row>

				<Row>
					<DateAndPriceP>{props.gamePrice}</DateAndPriceP>
				</Row>
				<Row>
					<GameType color={props?.color}>{props?.type}</GameType>
				</Row>
			</Col>
		</GamePlayedGrid>
	);
};

export default GamePlayed;
