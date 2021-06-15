import styled from 'styled-components';

export const Container = styled.div`
	/* width: 100vw;
	text-align: center; */
`;

export const Content = styled.div`
	width: 100vw;
	max-width: 1080px;
	margin-top: 20px;
	display: flex;
	/* flex-direction: column; */
	justify-content: space-between;
	flex-wrap: wrap;
	align-content: flex-end;
	align-items: baseline;
	margin: auto;
	@media (max-width: 1180px) {
		max-width: 90%;
	}
	@media (max-width: 840px) {
		width: 99%;
		flex-direction: column;
		align-items: center;
		align-content: center;
	}
`;
