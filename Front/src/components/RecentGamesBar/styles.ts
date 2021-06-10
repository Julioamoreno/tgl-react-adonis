import styled from 'styled-components';

export const RecentBarContainer = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;
	margin-top: 55px;
`;
export const TitleBar = styled.p`
	/* text-align: center; */
	font: italic normal bold 24px arial;
	letter-spacing: 0px;
	color: #707070;
	text-transform: uppercase;
	@media (max-width: 1180px) {
		width: 100%;
	}
`;

export const Filter = styled.li`
	font-style: italic;
	list-style: none;
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	padding-left: 40px;
	text-indent: -40px;
	p {
		margin: 0;
		font: italic normal normal 17px arial;
		color: #868686;
		width: 15px;
	}
`;

export const NewBetButton = styled.button`
	border: 0;
	background-color: #f7f7f7;
	display: flex;
	align-items: center;
	padding: 0;
	margin: 20px 0;

	:hover {
		cursor: pointer;
		outline: none;
	}

	@media (max-width: 1180px) {
		width: 100%;
	}

	p {
		display: flex;
		align-items: center;
		margin: 0;
		color: #b5c401;
		width: 100px;
		height: 34px;
		text-align: center;
		font: italic normal bold 24px arial;
		letter-spacing: 0px;
		color: #b5c401;
		opacity: 1;
	}
	svg {
		width: 24px;
		height: 20px;
		color: #b5c401;
	}
`;

export const Arrow = styled.img`
	width: 30px;
	svg {
		color: #b5c401;
	}
`;
