import styled from 'styled-components';

export const NewBetTitle = styled.h1`
	margin-top: 70px;
	color: #707070;
	text-transform: uppercase;
	font: italic normal 300 24px arial;
	b {
		font: italic normal bold 24px arial;
	}
`;

export const Col8 = styled.div`
	width: 66%;
	max-width: 66%;
	@media (max-width: 1180px) {
		max-width: 60%;
	}
	@media (max-width: 840px) {
		width: 99%;
		max-width: 99%;
		flex-direction: column;
		align-items: center;
		align-content: center;
	}
`;

export const Col4 = styled.div`
	width: 33%;
	@media (max-width: 840px) {
		width: 80%;
		margin-top: 40px;
	}
`;
