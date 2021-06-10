import styled from 'styled-components';

export const RecentBarContainer = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	width: 100%;
	height: 52px;
	margin-top: 5px;
`;

export const ContainerLeft = styled.div``;

export const ButtonLight = styled.button`
	font: normal normal medium 16px/24px arial;
	color: #27c383;

	border: 1px solid #27c383;
	border-radius: 10px;
	height: 52px;
	margin-right: 20px;
	cursor: pointer;

	@media (max-width: 1280px) {
		margin-right: 10px;
	}
	@media (max-width: 840px) {
		font-size: 12px;
	}
`;

export const Button = styled.button`
	font: normal normal bold 16px/24px arial;
	background: #27c383 0% 0% no-repeat padding-box;

	border: 1px solid #27c383;
	border-radius: 10px;
	height: 52px;
	margin-right: 20px;

	color: #ffffff;
	width: 209px;
	height: 52px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-wrap: nowrap;
	@media (max-width: 1280px) {
		width: 170px;
	}
	@media (max-width: 840px) {
		margin-right: 25px;
		width: 170px;
	}
`;
