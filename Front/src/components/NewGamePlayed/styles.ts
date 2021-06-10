import styled from 'styled-components';

export const GamePlayedGrid = styled.div`
	display: flex;
	width: inherit;
	padding-top: 10px;
`;

export const TrashCol = styled.div`
	display: flex;
	align-items: center;
	width: 40px;
	margin-right: 5px;
	svg {
		width: 26px;
		height: 26px;
		cursor: pointer;
	}
`;

export const DeleteButton = styled.button`
	background-color: white;
	border: none;
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
	align-items: baseline;
`;
export const PriceP = styled.p`
	font: normal normal normal 17px Helvetica Neue;
	letter-spacing: 0px;
	color: #868686;
	margin: 0px 10px;
	@media (max-width: 1180px) and (min-width: 840px) {
		font-size: 15px;
	}
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
