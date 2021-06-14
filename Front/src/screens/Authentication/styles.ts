import styled from 'styled-components';

export const AuthenticationGrid = styled.div`
	min-height: 100vh;
	width: 90vw;
	max-width: 1180px;
	margin-top: 20px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-content: flex-start;
	align-items: flex-start;
	margin: auto 0;
	@media (max-width: 1024px) {
		height: auto;
		width: 99%;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: center;
		align-content: center;
	}
`;

export const Title = styled.p`
	text-align: center;
	font: italic normal bold 65px/70px arial;
	letter-spacing: 0px;
	color: #707070;
	width: 230px;
	margin: 150px 0px 10px 0px;
`;

export const ButtonFor = styled.p`
	margin-top: 20px;
	width: 144px;
	height: 39px;
	font: italic normal bold 22px arial;
	color: #ffffff;
	background: #b5c401 0% 0% no-repeat padding-box;
	border-radius: 100px;
	display: flex;
	align-content: center;
	justify-content: space-evenly;
	align-items: center;
`;

export const Lottery = styled.h2`
	text-align: center;
	font: italic normal bold 83px arial;
	letter-spacing: 0px;
	color: #707070;
	margin: 0;
`;

export const Col8 = styled.div`
	width: 66%;
	max-width: 66%;
	display: flex;
	align-content: center;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
	@media (max-width: 1024px) {
		width: 60%;
	}
`;
