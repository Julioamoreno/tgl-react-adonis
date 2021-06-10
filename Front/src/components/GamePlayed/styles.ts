import styled from 'styled-components';

export const GamePlayedGrid = styled.div`
	display: flex;
	width: inherit;
	padding-top: 10px;
`;

export const Col = styled.div`
	max-width: 100%;
	display: inline-grid;
	position: relative;
	width: 100%;
	border-left: 5px solid ${(props) => `${props.color}`};
	border-radius: 4px;
	padding: 5px 10px;
`;
export const Row = styled.div`
	display: inline-flex;
	flex-wrap: wrap;
`;
export const DateAndPriceP = styled.p`
	font: normal normal normal 17px Helvetica Neue;
	letter-spacing: 0px;
	color: #868686;
	margin: 5px 0;
`;

export const ListNumber = styled.p`
	margin: 0;
	font: italic normal bold 20px Helvetica Neue;
	letter-spacing: 0px;
	color: #868686;
`;

export const GameType = styled.b`
	color: ${(props) => `${props.color}`};
	font: italic normal bold 20px Helvetica Neue;
	letter-spacing: 0px;
`;
