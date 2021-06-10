import styled from 'styled-components';

export const GameChoiceContainer = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	width: 100%;
	flex-direction: column;
	font: italic normal bold 17px arial;
	letter-spacing: 0px;
	color: #868686;
	margin-bottom: 15px;
`;

export const Filter = styled.li`
	font-style: italic;
	list-style: none;
	align-items: center;
	display: flex;
	p {
		margin: 0;
		margin-right: 20px;
		font: italic normal normal 17px arial;
		font-weight: 500;
	}
`;
